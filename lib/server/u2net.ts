import path from "node:path";
import fs from "node:fs";
import * as ort from "onnxruntime-node";
import sharp from "sharp";

const INPUT_SIZE = 320;
let sessionPromise: Promise<ort.InferenceSession> | null = null;

function getModelPath(): string {
  // Load from public/models at runtime
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
      executionProviders: ["cpuExecutionProvider"],
    });
  }
  return sessionPromise;
}

async function preprocessToTensor(imageBuffer: Buffer): Promise<{
  tensor: ort.Tensor;
  originalWidth: number;
  originalHeight: number;
}> {
  const image = sharp(imageBuffer).removeAlpha();
  const metadata = await image.metadata();
  const originalWidth = metadata.width || INPUT_SIZE;
  const originalHeight = metadata.height || INPUT_SIZE;

  const resized = await image
    .resize(INPUT_SIZE, INPUT_SIZE, { fit: "fill" })
    .raw()
    .toBuffer({ resolveWithObject: true });

  // resized.data is RGB or RGBA; ensure RGB
  // sharp .removeAlpha() above ensures 3 channels
  const channels = 3;
  const floatData = new Float32Array(INPUT_SIZE * INPUT_SIZE * channels);

  // NHWC (HWC) -> NCHW expected by U2Net
  // Normalize to 0..1
  for (let y = 0; y < INPUT_SIZE; y++) {
    for (let x = 0; x < INPUT_SIZE; x++) {
      const idx = (y * INPUT_SIZE + x) * channels;
      const r = resized.data[idx] / 255;
      const g = resized.data[idx + 1] / 255;
      const b = resized.data[idx + 2] / 255;
      const outIndexBase = y * INPUT_SIZE + x;
      floatData[0 * INPUT_SIZE * INPUT_SIZE + outIndexBase] = r;
      floatData[1 * INPUT_SIZE * INPUT_SIZE + outIndexBase] = g;
      floatData[2 * INPUT_SIZE * INPUT_SIZE + outIndexBase] = b;
    }
  }

  const tensor = new ort.Tensor("float32", floatData, [1, 3, INPUT_SIZE, INPUT_SIZE]);
  return { tensor, originalWidth, originalHeight };
}

async function postprocessMaskToBuffer(mask: Float32Array, width: number, height: number): Promise<Buffer> {
  // mask is 1x1xH xW flattened
  const u8 = new Uint8ClampedArray(width * height);
  for (let i = 0; i < width * height; i++) {
    // Clamp and scale
    const v = Math.max(0, Math.min(1, mask[i]));
    u8[i] = Math.round(v * 255);
  }
  // single-channel grayscale png
  return await sharp(Buffer.from(u8), { raw: { width, height, channels: 1 } }).png().toBuffer();
}

export async function runU2NetMask(imageBuffer: Buffer): Promise<{ maskPng: Buffer; originalWidth: number; originalHeight: number }>
{
  const session = await loadU2NetSession();
  const { tensor, originalWidth, originalHeight } = await preprocessToTensor(imageBuffer);
  const inputName = session.inputNames[0];
  const results = await session.run({ [inputName]: tensor });
  const outputName = session.outputNames[0] ?? Object.keys(results)[0];
  const output = results[outputName] as ort.Tensor;

  const maskFloat = output.data as Float32Array; // size 1*1*H*W
  const sourceHeight = output.dims[2];
  const sourceWidth = output.dims[3];

  const maskPngSmall = await postprocessMaskToBuffer(maskFloat, sourceWidth, sourceHeight);

  // Resize mask to original image size
  const maskPng = await sharp(maskPngSmall).resize(originalWidth, originalHeight, { kernel: "lanczos3" }).png().toBuffer();
  return { maskPng, originalWidth, originalHeight };
}

export async function removeBackground(imageBuffer: Buffer): Promise<Buffer> {
  const { maskPng, originalWidth, originalHeight } = await runU2NetMask(imageBuffer);
  const img = sharp(imageBuffer).resize({ width: originalWidth, height: originalHeight, fit: "fill" });
  const mask = await sharp(maskPng).ensureAlpha().toColourspace("b-w").raw().toBuffer({ resolveWithObject: true });

  // Convert single-channel mask to alpha channel
  // Create RGBA with alpha = mask
  const rgba = await img
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(rgba.data.length);
  for (let i = 0, p = 0, q = 0; i < rgba.data.length; i += 4) {
    out[i] = rgba.data[i];
    out[i + 1] = rgba.data[i + 1];
    out[i + 2] = rgba.data[i + 2];
    // alpha from mask (mask.channels assumed 1)
    out[i + 3] = mask.data[q++];
    p += 4;
  }

  return await sharp(out, { raw: { width: originalWidth, height: originalHeight, channels: 4 } }).png().toBuffer();
}

export async function blurBackground(imageBuffer: Buffer, blurSigma: number): Promise[Buffer] {
  const { maskPng, originalWidth, originalHeight } = await runU2NetMask(imageBuffer);

  const base = sharp(imageBuffer).resize({ width: originalWidth, height: originalHeight, fit: "fill" });
  const blurred = await base.clone().blur(blurSigma).toBuffer();

  // Subject: original image with alpha from mask
  const subjectWithAlpha = await sharp(await base.png().toBuffer())
    .ensureAlpha()
    .composite([{ input: maskPng, blend: "dest-in" }])
    .png()
    .toBuffer();

  // Background: blurred image with inverse alpha of mask
  const invMask = await sharp(maskPng).linear(-1, 255).png().toBuffer();
  const backgroundWithAlpha = await sharp(blurred)
    .ensureAlpha()
    .composite([{ input: invMask, blend: "dest-in" }])
    .png()
    .toBuffer();

  // Composite subject over blurred background
  return await sharp(backgroundWithAlpha)
    .composite([{ input: subjectWithAlpha }])
    .png()
    .toBuffer();
}


