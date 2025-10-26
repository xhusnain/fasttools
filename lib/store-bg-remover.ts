import { create } from "zustand";
import type {
  EditorState,
  ProcessingStatus,
  ProcessingResult,
  WorkerMessage,
} from "./types-bg-remover";

interface EditorStore extends EditorState {
  // Internal state
  _isInitialized: boolean;
  _activeWorkers: Set<Worker>;
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
    _activeWorkers: new Set(),

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
      const { imageUrl, result, _activeWorkers } = get();

      // Clean up URLs
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
      if (result?.resultUrl) {
        URL.revokeObjectURL(result.resultUrl);
      }

      // Terminate active workers
      _activeWorkers.forEach((worker) => {
        try {
          worker.terminate();
        } catch (error) {
          console.warn("Error terminating worker:", error);
        }
      });

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
        _activeWorkers: new Set(),
      });
    },

    startProcessing: async () => {
      const { originalImage } = get();
      if (!originalImage) return;

      try {
        set({
          isProcessing: true,
          status: {
            stage: "initializing",
            progress: 10,
            message: "Initializing AI models...",
          },
        });

        const startTime = performance.now();

        const resultUrl = await new Promise<string>((resolve, reject) => {
          const worker = new Worker(
            new URL("../workers/bg-remover.worker.ts", import.meta.url),
            { type: "module" }
          );

          // Track active worker for cleanup
          const { _activeWorkers } = get();
          _activeWorkers.add(worker);

          const timeout = setTimeout(() => {
            _activeWorkers.delete(worker);
            worker.terminate();
            reject(new Error("Processing timeout"));
          }, 120000);

          worker.onmessage = (event: MessageEvent<WorkerMessage>) => {
            const { type, payload } = event.data;

            switch (type) {
              case "progress":
                set({ status: payload });
                break;
              case "result":
                clearTimeout(timeout);
                _activeWorkers.delete(worker);

                // Convert ImageData to blob URL
                const { imageData, width, height } = payload as {
                  imageData: ImageData;
                  width: number;
                  height: number;
                };

                // Validate ImageData
                if (!imageData || !imageData.data || imageData.data.length !== width * height * 4) {
                  reject(new Error("Invalid ImageData received from worker"));
                  return;
                }

                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d")!;

                if (!ctx) {
                  reject(new Error("Failed to get canvas context"));
                  return;
                }

                ctx.putImageData(imageData, 0, 0);

                canvas.toBlob((blob) => {
                  if (blob) {
                    const url = URL.createObjectURL(blob);
                    resolve(url);
                  } else {
                    reject(new Error("Failed to create blob from canvas"));
                  }
                }, "image/png");
                break;
              case "error":
                clearTimeout(timeout);
                _activeWorkers.delete(worker);
                reject(new Error(payload as string));
                break;
              case "completed":
                break;
            }
          };

          worker.onerror = (error) => {
            clearTimeout(timeout);
            _activeWorkers.delete(worker);
            reject(new Error(error.message || "Worker error"));
          };

          // Convert image to ImageBitmap for transfer
          createImageBitmap(originalImage)
            .then((bitmap) => {
              worker.postMessage({ bitmap }, [bitmap]);
            })
            .catch((err) => {
              reject(err);
            });
        });

        const processingTime = performance.now() - startTime;

        const result: ProcessingResult = {
          resultUrl,
          processingTime,
          modelInfo: {
            u2net: {
              name: "U²-Net",
              url:  "/models/u2net.onnx",
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
            message: `Processing failed: ${error instanceof Error ? error.message : "Unknown error"}`,
          },
        });
      }
    },
  })
);

