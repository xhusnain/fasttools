import { create } from "zustand";
import type {
  EditorState,
  ProcessingStatus,
  ProcessingResult,
} from "./types-image-blur";

interface EditorStore extends EditorState {
  _isInitialized: boolean;
}

export const useImageBlurStore = create<EditorStore>()(
  (set, get) => ({
    originalImage: null,
    imageUrl: null,
    status: {
      stage: "idle",
      progress: 0,
      message: "Ready to process images",
    },
    result: null,
    isProcessing: false,
    blurIntensity: 10,
    _isInitialized: false,

    setImage: (image: HTMLImageElement, url: string) => {
      const { imageUrl } = get();
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }

      set({
        originalImage: image,
        imageUrl: url,
        status: {
          stage: "idle",
          progress: 0,
          message: "Image loaded. Ready to apply blur.",
        },
        result: null,
        isProcessing: false,
      });
    },

    setStatus: (status: ProcessingStatus) => {
      set({ status });
    },

    setResult: (result: ProcessingResult) => {
      const currentResult = get().result;
      if (currentResult?.resultUrl) {
        URL.revokeObjectURL(currentResult.resultUrl);
      }

      set({
        result,
        isProcessing: false,
        status: {
          stage: "completed",
          progress: 100,
          message: "Blur applied successfully",
        },
      });
    },

    setBlurIntensity: (intensity: number) => {
      set({ blurIntensity: intensity });
    },

    reset: () => {
      const { imageUrl, result } = get();

      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
      if (result?.resultUrl) {
        URL.revokeObjectURL(result.resultUrl);
      }

      set({
        originalImage: null,
        imageUrl: null,
        status: {
          stage: "idle",
          progress: 0,
          message: "Ready to process images",
        },
        result: null,
        isProcessing: false,
        blurIntensity: 10,
        
      });
    },

    startProcessing: async () => {
      const { originalImage, blurIntensity, result } = get();
      if (!originalImage) return;

      // Clear previous result if re-processing
      if (result?.resultUrl) {
        URL.revokeObjectURL(result.resultUrl);
      }

      try {
        set({ isProcessing: true, result: null });

        const startTime = performance.now();

        const canvas = document.createElement("canvas");
        canvas.width = originalImage.naturalWidth || originalImage.width;
        canvas.height = originalImage.naturalHeight || originalImage.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas context not available");
        ctx.drawImage(originalImage, 0, 0);
        const blob: Blob = await new Promise((resolve, reject) =>
          canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Failed to get image blob"))), "image/png")
        );

        set({
          status: {
            stage: "processing",
            progress: 50,
            message: "Processing on server...",
          },
        });

        const form = new FormData();
        form.append("image", blob, "input.png");
        form.append("intensity", String(blurIntensity));

        const resp = await fetch(`/api/image-blur?refine=depth&strength=strong`, { method: "POST", body: form });
        if (!resp.ok) {
          const errText = await resp.text().catch(() => "");
          throw new Error(errText || `Server error ${resp.status}`);
        }
        const resultBlob = await resp.blob();
        const resultUrl = URL.createObjectURL(resultBlob);

        const processingTime = performance.now() - startTime;
        const result: ProcessingResult = {
          resultUrl,
          processingTime,
          modelInfo: {
            u2net: {
              name: "U²-Net",
              url: "/models/u2net.onnx",
              size: 0,
              loaded: true,
            },
          },
        };

        get().setResult(result);

      } catch (error) {
        set({
          isProcessing: false,
          status: {
            stage: "error",
            progress: 0,
            message: "Something went wrong while applying blur. Please try again later.",
          },
        });
      }
    },
  })
);

