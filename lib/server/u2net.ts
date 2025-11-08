import path from "node:path";
import fs from "node:fs";
import * as ort from "onnxruntime-node";
import sharp from "sharp";

const INPUT_SIZE = 320;
let sessionPromise: Promise<ort.InferenceSession> | null = null;
let depthSessionPromise: Promise<ort.InferenceSession> | null = null;

function getModelPath(): string {

  const modelPath = path.join(process.cwd(), "public", "models", "u2net.onnx");
  if (!fs.existsSync(modelPath)) {
    throw new Error(`U2Net model not found at ${modelPath}`);
  }
  return modelPath;
}

export function loadU2NetSession(): Promise<ort.InferenceSession> {
  if (!sessionPromise) {
    const modelPath = getModelPath();

    sessionPromise = ort.InferenceSession.create(modelPath, {
      graphOptimizationLevel: "all",
    });
  }
  return sessionPromise;
}

function getDepthModelPath(): string | null {
  const modelPath = path.join(process.cwd(), "public", "models", "depth-anything-small.onnx");
  return fs.existsSync(modelPath) ? modelPath : null;
}

export function loadDepthSession(): Promise<ort.InferenceSession> | null {
  if (depthSessionPromise) return depthSessionPromise;
  const p = getDepthModelPath();
  if (!p) return null;
  depthSessionPromise = ort.InferenceSession.create(p, { graphOptimizationLevel: "all" });
  return depthSessionPromise;
}

async function preprocessToTensor(imageBuffer: Buffer): Promise<{
  tensor: ort.Tensor;
  originalWidth: number;
  originalHeight: number;
  contentWidth: number;
  contentHeight: number;
  padLeft: number;
  padTop: number;
}> {
  const image = sharp(imageBuffer).removeAlpha();
  const metadata = await image.metadata();
  const originalWidth = metadata.width || INPUT_SIZE;
  const originalHeight = metadata.height || INPUT_SIZE;

  const scale = Math.min(INPUT_SIZE / originalWidth, INPUT_SIZE / originalHeight);
  const contentWidth = Math.max(1, Math.round(originalWidth * scale));
  const contentHeight = Math.max(1, Math.round(originalHeight * scale));
  const padLeft = Math.floor((INPUT_SIZE - contentWidth) / 2);
  const padRight = INPUT_SIZE - contentWidth - padLeft;
  const padTop = Math.floor((INPUT_SIZE - contentHeight) / 2);
  const padBottom = INPUT_SIZE - contentHeight - padTop;

  const letterboxed = await image
    .resize(contentWidth, contentHeight, { fit: "fill" })
    .extend({ top: padTop, bottom: padBottom, left: padLeft, right: padRight, background: { r: 0, g: 0, b: 0 } })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = 3;
  const floatData = new Float32Array(INPUT_SIZE * INPUT_SIZE * channels);

  for (let y = 0; y < INPUT_SIZE; y++) {
    for (let x = 0; x < INPUT_SIZE; x++) {
      const idx = (y * INPUT_SIZE + x) * channels;
      const r = letterboxed.data[idx] / 255;
      const g = letterboxed.data[idx + 1] / 255;
      const b = letterboxed.data[idx + 2] / 255;
      const outIndexBase = y * INPUT_SIZE + x;
      floatData[0 * INPUT_SIZE * INPUT_SIZE + outIndexBase] = r;
      floatData[1 * INPUT_SIZE * INPUT_SIZE + outIndexBase] = g;
      floatData[2 * INPUT_SIZE * INPUT_SIZE + outIndexBase] = b;
    }
  }

  const tensor = new ort.Tensor("float32", floatData, [1, 3, INPUT_SIZE, INPUT_SIZE]);
  return { tensor, originalWidth, originalHeight, contentWidth, contentHeight, padLeft, padTop };
}

async function postprocessMaskToBuffer(mask: Float32Array, width: number, height: number): Promise<Buffer> {

  const u8 = new Uint8ClampedArray(width * height);
  for (let i = 0; i < width * height; i++) {

    const v = Math.max(0, Math.min(1, mask[i]));
    u8[i] = Math.round(v * 255);
  }

  return await sharp(Buffer.from(u8), { raw: { width, height, channels: 1 } }).png().toBuffer();
}

async function buildRefinedAlpha(
  maskPng: Buffer,
  width: number,
  height: number,
  options: { contrast?: number; offset?: number; threshold?: number; feather?: number } = {}
): Promise<Buffer> {
  const {
    contrast = 2.2,
    offset = -60,
    threshold = 170,
    feather = 1.2,
  } = options;

  const refined = await sharp(maskPng)
    .resize(width, height, { fit: "fill" })
    .toColourspace("b-w")
    .linear(contrast, offset)
    .threshold(threshold)
    .blur(feather)
    .raw()
    .toBuffer();

  return refined;
}

export async function runU2NetMask(imageBuffer: Buffer): Promise<{ maskPng: Buffer; originalWidth: number; originalHeight: number }>
{
  const session = await loadU2NetSession();
  const { tensor, originalWidth, originalHeight, contentWidth, contentHeight, padLeft, padTop } = await preprocessToTensor(imageBuffer);
  const inputName = session.inputNames[0];
  const results = await session.run({ [inputName]: tensor });
  const outputName = session.outputNames[0] ?? Object.keys(results)[0];
  const output = results[outputName] as ort.Tensor;

  const maskFloat = output.data as Float32Array;
  const sourceHeight = output.dims[2];
  const sourceWidth = output.dims[3];

  const maskPngSmall = await postprocessMaskToBuffer(maskFloat, sourceWidth, sourceHeight);

  const cropped = await sharp(maskPngSmall)
    .extract({ left: padLeft, top: padTop, width: contentWidth, height: contentHeight })
    .png()
    .toBuffer();

  const maskPng = await sharp(cropped).resize(originalWidth, originalHeight, { fit: "fill" }).png().toBuffer();
  return { maskPng, originalWidth, originalHeight };
}

type RefineStrength = "light" | "medium" | "strong";

function strengthToParams(s: RefineStrength): { contrast: number; offset: number; threshold: number; feather: number } {
  switch (s) {
    case "light":
      return { contrast: 1.6, offset: -30, threshold: 140, feather: 1.2 };
    case "strong":
      return { contrast: 2.4, offset: -70, threshold: 185, feather: 1.0 };
    case "medium":
    default:
      return { contrast: 2.2, offset: -60, threshold: 170, feather: 1.2 };
  }
}

export async function removeBackground(imageBuffer: Buffer, options?: { refineWithDepth?: boolean; strength?: RefineStrength }): Promise<Buffer> {
  const { maskPng, originalWidth, originalHeight } = await runU2NetMask(imageBuffer);

  const baseRgba = await sharp(imageBuffer)
    .resize({ width: originalWidth, height: originalHeight, fit: "fill" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const params = strengthToParams(options?.strength ?? "medium");
  let refinedAlpha = await buildRefinedAlpha(maskPng, originalWidth, originalHeight, params);

  if (options?.refineWithDepth) {
    try {
      const depthLoader = loadDepthSession();
      if (depthLoader) {

        const depthAlpha = refinedAlpha;

        for (let i = 0; i < refinedAlpha.length; i++) {
          refinedAlpha[i] = Math.min(refinedAlpha[i], depthAlpha[i]);
        }
      }
    } catch {}
  }

  const out = Buffer.alloc(baseRgba.data.length);
  for (let i = 0, p = 0, q = 0; i < baseRgba.data.length; i += 4) {
    out[i] = baseRgba.data[i];
    out[i + 1] = baseRgba.data[i + 1];
    out[i + 2] = baseRgba.data[i + 2];
    out[i + 3] = refinedAlpha[q++];
    p += 4;
  }

  return await sharp(out, { raw: { width: originalWidth, height: originalHeight, channels: 4 } })
    .png()
    .toBuffer();
}

export async function blurBackground(imageBuffer: Buffer, blurSigma: number, options?: { refineWithDepth?: boolean; strength?: RefineStrength }): Promise<Buffer> {
  const { maskPng, originalWidth, originalHeight } = await runU2NetMask(imageBuffer);

  const baseRgba = await sharp(imageBuffer)
    .resize({ width: originalWidth, height: originalHeight, fit: "fill" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const blurredRgba = await sharp(baseRgba.data, { raw: { width: originalWidth, height: originalHeight, channels: 4 } })
    .blur(blurSigma)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const params = strengthToParams(options?.strength ?? "medium");
  let maskAlpha = await buildRefinedAlpha(maskPng, originalWidth, originalHeight, params);
  if (options?.refineWithDepth) {
    try {
      const depthLoader = loadDepthSession();
      if (depthLoader) {
        const depthAlpha = maskAlpha;
        for (let i = 0; i < maskAlpha.length; i++) maskAlpha[i] = Math.min(maskAlpha[i], depthAlpha[i]);
      }
    } catch {}
  }
  const invMaskData = Buffer.alloc(maskAlpha.length);
  for (let i = 0; i < maskAlpha.length; i++) invMaskData[i] = 255 - maskAlpha[i];

  const subject = Buffer.alloc(baseRgba.data.length);
  for (let i = 0, q = 0; i < baseRgba.data.length; i += 4) {
    subject[i] = baseRgba.data[i];
    subject[i + 1] = baseRgba.data[i + 1];
    subject[i + 2] = baseRgba.data[i + 2];
    subject[i + 3] = maskAlpha[q++];
  }

  const background = Buffer.alloc(blurredRgba.data.length);
  for (let i = 0, q = 0; i < blurredRgba.data.length; i += 4) {
    background[i] = blurredRgba.data[i];
    background[i + 1] = blurredRgba.data[i + 1];
    background[i + 2] = blurredRgba.data[i + 2];
    background[i + 3] = invMaskData[q++];
  }

  const backgroundPng = await sharp(background, { raw: { width: originalWidth, height: originalHeight, channels: 4 } })
    .png()
    .toBuffer();
  const subjectPng = await sharp(subject, { raw: { width: originalWidth, height: originalHeight, channels: 4 } })
    .png()
    .toBuffer();

  return await sharp(backgroundPng)
    .composite([{ input: subjectPng }])
    .png()
    .toBuffer();
}

