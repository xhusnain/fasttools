import { create } from "zustand";
import axios from "axios";
import { apiService } from "./api-service";
import type {
  EditorState,
  ProcessingStatus,
  ProcessingResult,
} from "./types-bg-remover";

interface EditorStore extends EditorState {
  _isInitialized: boolean;
  refineStrength?: "light" | "medium" | "strong";
  setRefineStrength?: (s: "light" | "medium" | "strong") => void;
}

export const useBgRemoverStore = create<EditorStore>()(
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
    _isInitialized: false,
    refineStrength: "medium",
    setRefineStrength: (s) => set({ refineStrength: s }),

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
      const { originalImage, refineStrength } = get();
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
            message: "Processing...",
          },
        });

        const strengthQ = refineStrength ?? "strong";

        try {
          const resultBlob = await apiService.removeBackground({
            image: blob,
            refine: "depth",
            strength: strengthQ,
          });

          const resultUrl = URL.createObjectURL(resultBlob);

          const processingTime = performance.now() - startTime;
          const result: ProcessingResult = {
            resultUrl,
            processingTime,
          };

          get().setResult(result);
        } catch (error: any) {

          let errorMessage = "Something went wrong. Please try again.";

          if (axios.isAxiosError(error)) {
            if (error.response) {
              const errText = await error.response.data.text().catch(() => "");
              errorMessage = errText || `Server error ${error.response.status}`;
            } else if (error.request) {
              errorMessage = "Something went wrong. Please try again.";
            } else {
              errorMessage = error.message;
            }
          }

          set({
            isProcessing: false,
            status: {
              stage: "error",
              progress: 0,
              message: errorMessage,
            },
          });
        }
      } catch (error) {
        set({
          isProcessing: false,
          status: {
            stage: "error",
            progress: 0,
            message: "Failed to prepare image for processing.",
          },
        });
      }
    },
  })
);

