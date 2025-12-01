import { create } from "zustand";
import axios from "axios";
import { apiService } from "./api-service";
import type {
  EditorState,
  ProcessingStatus,
  ProcessingResult,
} from "./types-image-blur";

interface EditorStore extends EditorState {
  _isInitialized: boolean;
  refineStrength?: "light" | "medium" | "strong";
  setRefineStrength?: (s: "light" | "medium" | "strong") => void;
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
    refineStrength: "strong",
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
      const { originalImage, blurIntensity, result, refineStrength } = get();
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
            message: "Processing...",
          },
        });

        const strengthQ = refineStrength ?? "strong";

        try {
          const resultBlob = await apiService.blurBackground({
            image: blob,
            intensity: blurIntensity,
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

          // The apiService might still use axios internally, so keeping this check for now.
          // If apiService completely abstracts axios errors, this might need adjustment.
          if (axios.isAxiosError(error)) { // Assuming apiService might re-throw axios errors or wrap them
            if (error.response) {
              const errText = await error.response.data.text().catch(() => "");
              errorMessage = errText || `Server error ${error.response.status}`;
            } else if (error.request) {
              errorMessage = "No response from server. Is the background blur service running on port 3001?";
            } else {
              errorMessage = error.message;
            }
          } else if (error instanceof Error) {
            errorMessage = error.message;
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

