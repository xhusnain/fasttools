/* eslint-disable no-restricted-globals */
import * as ort from "onnxruntime-web";
import { getCachedModel, cacheModel } from "../lib/idb-bg-remover";

declare const self: Worker;

const MODEL_CACHE_KEY = "u2net-full";
const INPUT_SIZE = 320;

let sessionCache: ort.InferenceSession | null = null;
let isInitializing = false;

async function getOrCreateSession(): Promise<ort.InferenceSession> {
  if (sessionCache) {
    return sessionCache;
  }

  if (isInitializing) {
    while (isInitializing) {
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
    return sessionCache!;
  }

  isInitializing = true;

  try {
    let modelBuffer = await getCachedModel(MODEL_CACHE_KEY);

    if (!modelBuffer) {
      const response = await fetch("/models/u2net.onnx");

      if (!response.ok) {
        throw new Error(`Failed to load local model: ${response.statusText}`);
      }

      modelBuffer = await response.arrayBuffer();
      await cacheModel(MODEL_CACHE_KEY, modelBuffer, "/models/u2net.onnx");
    }

    sessionCache = await ort.InferenceSession.create(modelBuffer, {
      graphOptimizationLevel: "all",
      executionProviders: ["wasm"],
      enableCpuMemArena: true,
      enableMemPattern: true,
    });

    return sessionCache;
  } finally {
    isInitializing = false;
  }
}

self.addEventListener("message", async (event) => {
  try {
    const { bitmap, blurIntensity } = event.data as { bitmap: ImageBitmap; blurIntensity: number };

    self.postMessage({
      type: "progress",
      payload: { stage: "preprocessing", progress: 10, message: "Preparing image..." },
    });

    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(bitmap, 0, 0);

    const inputCanvas = new OffscreenCanvas(INPUT_SIZE, INPUT_SIZE);
    const inputCtx = inputCanvas.getContext("2d")!;
    inputCtx.drawImage(canvas, 0, 0, INPUT_SIZE, INPUT_SIZE);

    const imageData = inputCtx.getImageData(0, 0, INPUT_SIZE, INPUT_SIZE);
    const tensor = imageDataToTensor(imageData);

    self.postMessage({
      type: "progress",
      payload: { stage: "initializing", progress: 30, message: "Loading AI model..." },
    });

    const session = await getOrCreateSession();

    self.postMessage({
      type: "progress",
      payload: { stage: "running-inference", progress: 60, message: "Detecting subject..." },
    });

    const inputNames = session.inputNames;

    if (inputNames.length === 0) {
      throw new Error("Model has no input names");
    }

    const inputName = inputNames[0];
    const feeds: Record<string, ort.Tensor> = { [inputName]: tensor };

    const results = await session.run(feeds);

    const outputNames = session.outputNames;

    let output: ort.Tensor;
    if (outputNames.length > 0) {
      output = results[outputNames[0]] as ort.Tensor;
    } else {
      output = results.output as ort.Tensor;
    }

    self.postMessage({
      type: "progress",
      payload: { stage: "postprocessing", progress: 80, message: "Applying blur effect..." },
    });

    const maskData = output.data as Float32Array;
    const sourceHeight = output.dims[2];
    const sourceWidth = output.dims[3];

    const mask = createMaskFromTensor(
      maskData,
      sourceWidth,
      sourceHeight,
      bitmap.width,
      bitmap.height,
    );

    const resultCanvas = applyBlurToBackground(canvas, mask, blurIntensity || 10);

    const resultCtx = resultCanvas.getContext("2d")!;
    const resultImageData = resultCtx.getImageData(
      0,
      0,
      resultCanvas.width,
      resultCanvas.height,
    );

    if (
      resultImageData.data.length !==
      resultCanvas.width * resultCanvas.height * 4
    ) {
      throw new Error("Invalid ImageData dimensions");
    }

    self.postMessage({
      type: "progress",
      payload: { stage: "completed", progress: 100, message: "Blur applied successfully!" },
    });
    self.postMessage(
      {
        type: "result",
        payload: {
          imageData: resultImageData,
          width: resultCanvas.width,
          height: resultCanvas.height,
        },
      },
      [resultImageData.data.buffer],
    );
    self.postMessage({ type: "completed" });
  } catch (error) {
    console.error("Image blur worker error:", error);
    self.postMessage({
      type: "error",
      payload: "Failed to process image. Please try again.",
    });
  }
});

function createMaskFromTensor(
  maskData: Float32Array,
  sourceWidth: number,
  sourceHeight: number,
  targetWidth: number,
  targetHeight: number,
): ImageData {
  const tempMask = new OffscreenCanvas(sourceWidth, sourceHeight);
  const tempCtx = tempMask.getContext("2d")!;
  const tempImageData = tempCtx.createImageData(sourceWidth, sourceHeight);

  const sigmoidScale = 1.0;
  const sigmoidShift = 1.0;
  const sigmoidDivisor = -1.0;

  function calculateSigmoid(x: number): number {
    return sigmoidScale / (sigmoidShift + Math.exp(sigmoidDivisor * x));
  }

  const binarizationThreshold = 0.5;
  const normalizationFactor = 2.0;
  const maxIntensity = 255;
  const opaqueAlpha = 255;

  for (let y = 0; y < sourceHeight; y++) {
    for (let x = 0; x < sourceWidth; x++) {
      const tensorIndex = y * sourceWidth + x;
      const pixelIndex = (y * sourceWidth + x) * 4;

      const sigmoidValue = calculateSigmoid(maskData[tensorIndex]);

      const normalizedValue =
        sigmoidValue > binarizationThreshold
          ? (sigmoidValue - binarizationThreshold) * normalizationFactor
          : 0.0;

      const intensity = Math.round(normalizedValue * maxIntensity);

      tempImageData.data[pixelIndex] = intensity;
      tempImageData.data[pixelIndex + 1] = intensity;
      tempImageData.data[pixelIndex + 2] = intensity;
      tempImageData.data[pixelIndex + 3] = opaqueAlpha;
    }
  }

  tempCtx.putImageData(tempImageData, 0, 0);

  const finalMask = new OffscreenCanvas(targetWidth, targetHeight);
  const finalCtx = finalMask.getContext("2d")!;
  finalCtx.drawImage(tempMask, 0, 0, targetWidth, targetHeight);

  return finalCtx.getImageData(0, 0, targetWidth, targetHeight);
}

function applyBlurToBackground(
  canvas: OffscreenCanvas,
  mask: ImageData,
  blurRadius: number,
): OffscreenCanvas {
  const { width, height } = canvas;
  const ctx = canvas.getContext("2d")!;
  const originalImageData = ctx.getImageData(0, 0, width, height);

  // Create blurred version of the image
  const blurredCanvas = new OffscreenCanvas(width, height);
  const blurredCtx = blurredCanvas.getContext("2d")!;
  blurredCtx.drawImage(canvas, 0, 0);
  blurredCtx.filter = `blur(${blurRadius}px)`;
  blurredCtx.drawImage(canvas, 0, 0);
  const blurredImageData = blurredCtx.getImageData(0, 0, width, height);

  // Create result canvas
  const resultCanvas = new OffscreenCanvas(width, height);
  const resultCtx = resultCanvas.getContext("2d")!;
  const resultImageData = resultCtx.createImageData(width, height);

  // Blend between original and blurred using mask as alpha
  // maskValue 0-255: 0 = background (blurred), 255 = foreground (sharp)
  for (let i = 0; i < width * height; i++) {
    const pixelIndex = i * 4;
    const maskValue = mask.data[pixelIndex]; // Grayscale value (0-255)
    
    // Normalize mask value to 0.0-1.0 (foreground weight)
    const foregroundWeight = maskValue / 255;
    const backgroundWeight = 1 - foregroundWeight;

    // Blend original and blurred images
    resultImageData.data[pixelIndex] = 
      originalImageData.data[pixelIndex] * foregroundWeight + 
      blurredImageData.data[pixelIndex] * backgroundWeight;
    
    resultImageData.data[pixelIndex + 1] = 
      originalImageData.data[pixelIndex + 1] * foregroundWeight + 
      blurredImageData.data[pixelIndex + 1] * backgroundWeight;
    
    resultImageData.data[pixelIndex + 2] = 
      originalImageData.data[pixelIndex + 2] * foregroundWeight + 
      blurredImageData.data[pixelIndex + 2] * backgroundWeight;
    
    // Keep original alpha
    resultImageData.data[pixelIndex + 3] = originalImageData.data[pixelIndex + 3];
  }

  resultCtx.putImageData(resultImageData, 0, 0);
  return resultCanvas;
}

function imageDataToTensor(imageData: ImageData): ort.Tensor {
  const { data, width, height } = imageData;
  const tensorData = new Float32Array(3 * width * height);

  const rMean = 0.485;
  const gMean = 0.456;
  const bMean = 0.406;
  const rStd = 0.229;
  const gStd = 0.224;
  const bStd = 0.225;
  const pixelMax = 255.0;

  for (let i = 0; i < width * height; i++) {
    const pixelIndex = i * 4;
    const tensorIndex = i;

    const r = data[pixelIndex] / pixelMax;
    const g = data[pixelIndex + 1] / pixelMax;
    const b = data[pixelIndex + 2] / pixelMax;

    tensorData[tensorIndex] = (r - rMean) / rStd;
    tensorData[width * height + tensorIndex] = (g - gMean) / gStd;
    tensorData[2 * width * height + tensorIndex] = (b - bMean) / bStd;
  }

  return new ort.Tensor("float32", tensorData, [1, 3, height, width]);
}

