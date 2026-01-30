import { create } from "zustand";
import { HttpClient } from "@/services/api/http-client";
import { type BgRemoverEditorState, type ProcessingStatus, type ProcessingResult } from "@/types";

interface EditorStore extends BgRemoverEditorState {
  _isInitialized: boolean;
  refineStrength?: "weak" | "medium" | "strong";
  setRefineStrength?: (s: "weak" | "medium" | "strong") => void;
}

import { env } from "@/config/env";

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
            progress: 30,
            message: "Uploading image...",
          },
        });

        set({
          status: {
            stage: "processing",
            progress: 50,
            message: "Removing background...",
          }
        });

        const formData = new FormData();
        formData.append("image", blob, "image.png");

        const pythonApiUrl = env.pythonApiUrl || "http://localhost:8000";
        const targetUrl = `${pythonApiUrl}/api/remove-bg`;
        const proxyUrl = `/api/proxy?url=${encodeURIComponent(targetUrl)}`;

        try {
          const response = await HttpClient.upload(
            proxyUrl,
            formData,
            {
              baseURL: '',
              responseType: "blob",
              onUploadProgress: (progressEvent) => {
                if (progressEvent.total) {
                  const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                  set({
                    status: {
                      stage: "processing",
                      progress: 50 + (percentCompleted * 0.4), // Map upload to 50-90%
                      message: "Uploading and processing...",
                    }
                  })
                }
              }
            }
          );

          if (response.data) {
            const resultUrl = URL.createObjectURL(response.data);
            const processingTime = performance.now() - startTime;
            const result: ProcessingResult = {
              resultUrl,
              processingTime,
            };
            get().setResult(result);
          } else {
            throw new Error("No data received from API");
          }

        } catch (error: any) {
          console.error("API Error:", error);
          let errorMessage = "Something went wrong. Please try again.";

          // HttpClient returns ApiError
          if (error && error.message) {
            if (error.details && error.details.error) {
              errorMessage = error.details.error;
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

