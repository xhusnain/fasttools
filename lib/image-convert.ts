/**
 * Client-side image format conversion.
 *
 * Everything runs in the browser — files never leave the device, which keeps
 * the converter Google-/AdSense-safe (no upload, no copyrighted-media proxy)
 * and is itself a privacy selling point worth surfacing in the page content.
 *
 * Pipeline: decode the source into a bitmap, redraw it onto a <canvas>, then
 * re-encode with canvas.toBlob(). The browser can decode PNG/JPEG/WebP/GIF/
 * BMP/AVIF natively; HEIC/HEIF can't be decoded by a canvas, so those inputs
 * are first run through heic2any (lazy-loaded only when a HEIC file appears,
 * so the ~1.5 MB WASM never ships to pages that don't need it).
 *
 * Output is limited to the three formats canvas.toBlob() can encode:
 * JPEG, PNG, and WebP.
 */

export type TargetFormat = "image/jpeg" | "image/png" | "image/webp";

export interface ConvertResult {
  blob: Blob;
  width: number;
  height: number;
}

const HEIC_EXT_RE = /\.(heic|heif)$/i;

/** HEIC/HEIF needs a WASM decode pass before it can reach a canvas. */
function isHeic(file: File): boolean {
  return (
    file.type === "image/heic" ||
    file.type === "image/heif" ||
    HEIC_EXT_RE.test(file.name)
  );
}

export function targetExtension(target: TargetFormat): string {
  if (target === "image/jpeg") return "jpg";
  if (target === "image/png") return "png";
  return "webp";
}

/** Swap the original extension for the target one: photo.heic -> photo.jpg */
export function outputFilename(originalName: string, target: TargetFormat): string {
  const base = originalName.replace(/\.[^.]+$/, "") || "image";
  return `${base}.${targetExtension(target)}`;
}

function loadImageElement(blob: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to decode image"));
    };
    img.src = url;
  });
}

type DecodedSource = ImageBitmap | HTMLImageElement;

async function decode(blob: Blob): Promise<DecodedSource> {
  // createImageBitmap decodes off the main thread and is faster, but it
  // doesn't handle every format/edge case (notably SVG), so fall back to a
  // plain <img> element when it throws.
  if (typeof createImageBitmap === "function") {
    try {
      return await createImageBitmap(blob);
    } catch {
      /* fall through */
    }
  }
  return loadImageElement(blob);
}

function dimensions(source: DecodedSource): { width: number; height: number } {
  if (source instanceof HTMLImageElement) {
    return { width: source.naturalWidth, height: source.naturalHeight };
  }
  return { width: source.width, height: source.height };
}

/**
 * Convert a single image file to the target format.
 *
 * @param quality 0–1, applied only to lossy targets (JPEG/WebP). PNG ignores it.
 */
export async function convertImage(
  file: File,
  target: TargetFormat,
  quality = 0.92
): Promise<ConvertResult> {
  let source: Blob = file;

  if (isHeic(file)) {
    const heic2any = (await import("heic2any")).default;
    // For a JPEG target, decode straight to JPEG. For PNG/WebP targets, use a
    // lossless PNG intermediate so the canvas re-encode doesn't stack a second
    // round of JPEG artifacts on top of the HEIC decode.
    const intermediate: "image/jpeg" | "image/png" =
      target === "image/jpeg" ? "image/jpeg" : "image/png";
    const converted = (await heic2any({
      blob: file,
      toType: intermediate,
      quality,
    })) as Blob | Blob[];
    source = Array.isArray(converted) ? converted[0] : converted;
  }

  const decoded = await decode(source);
  const { width, height } = dimensions(decoded);

  if (!width || !height) {
    throw new Error("Image has no readable dimensions");
  }

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not supported in this browser");

  // JPEG has no alpha channel. Without an explicit white fill, transparent
  // pixels render as black. Flatten onto white first — matches what every
  // mainstream converter does and is documented in the page FAQ.
  if (target === "image/jpeg") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
  }

  ctx.drawImage(decoded as CanvasImageSource, 0, 0);
  if (decoded instanceof ImageBitmap) decoded.close();

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob(
      resolve,
      target,
      target === "image/png" ? undefined : quality
    );
  });

  if (!blob) throw new Error("Conversion failed — the browser returned no data");

  return { blob, width, height };
}
