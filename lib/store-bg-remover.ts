import { create } from "zustand";
import type {
  EditorState,
  ProcessingStatus,
  ProcessingResult,
} from "./types-bg-remover";

interface EditorStore extends EditorState {
  _isInitialized: boolean;
}

export const useBgRemoverStore = create<EditorStore>()(
  (set, get) => ({
    // Initial state
    originalImage: null,
    imageUrl: null,
    status: {
      stage: "idle",
      progress: 0,
      message: "Ready to process images",
    },
    result: null,
    isProcessing: false,
    _isInitialized: false,

    // Actions
    setImage: (image: HTMLImageElement, url: string) => {
      // Clean up previous image URL
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
          message: "Image loaded. Ready to process.",
        },
        result: null,
        isProcessing: false,
      });
    },

    setStatus: (status: ProcessingStatus) => {
      set({ status });
    },

    setResult: (result: ProcessingResult) => {
      // Clean up previous result URLs
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
          message: "Processing complete",
        },
      });
    },

    reset: () => {
      const { imageUrl, result } = get();

      // Clean up URLs
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
        
      });
    },

    startProcessing: async () => {
      const { originalImage } = get();
      if (!originalImage) return;

      try {
        set({ isProcessing: true });

        const startTime = performance.now();

        // Convert current image element to Blob (PNG)
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

        const resp = await fetch("/api/bg-remover?refine=depth&strength=strong", { method: "POST", body: form });
        if (!resp.ok) {
          const errText = await resp.text().catch(() => "");
          // Temporary diagnostics
          console.error("bg-remover response not ok:", resp.status, errText);
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
        // Temporary diagnostics
        console.error("bg-remover client error:", error);
        set({
          isProcessing: false,
          status: {
            stage: "error",
            progress: 0,
            message:
              "Something went wrong while removing the background. Please try again with a different image or later.",
          },
        });
      }
    },
  })
);

