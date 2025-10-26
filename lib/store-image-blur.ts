import { create } from "zustand";
import type {
  EditorState,
  ProcessingStatus,
  ProcessingResult,
  WorkerMessage,
} from "./types-image-blur";

interface EditorStore extends EditorState {
  _isInitialized: boolean;
  _activeWorkers: Set<Worker>;
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
    _activeWorkers: new Set(),

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
      const { imageUrl, result, _activeWorkers } = get();

      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
      if (result?.resultUrl) {
        URL.revokeObjectURL(result.resultUrl);
      }

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
        blurIntensity: 10,
        _activeWorkers: new Set(),
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
        set({
          isProcessing: true,
          result: null,
          status: {
            stage: "initializing",
            progress: 10,
            message: "Initializing AI models...",
          },
        });

        const startTime = performance.now();

        const resultUrl = await new Promise<string>((resolve, reject) => {
          const worker = new Worker(
            new URL("../workers/image-blur.worker.ts", import.meta.url),
            { type: "module" }
          );

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

                const { imageData, width, height } = payload as {
                  imageData: ImageData;
                  width: number;
                  height: number;
                };

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
                }, "image/jpeg", 0.95);
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

          createImageBitmap(originalImage)
            .then((bitmap) => {
              worker.postMessage({ bitmap, blurIntensity }, [bitmap]);
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
        console.error('Image blur error:', error);
        set({
          isProcessing: false,
          status: {
            stage: "error",
            progress: 0,
            message: "Something went wrong while applying blur. Please try again with a different image or try again later.",
          },
        });
      }
    },
  })
);

