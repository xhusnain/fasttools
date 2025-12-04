// Type definitions for Image Processing (Background Remover & Blur)

export interface ProcessingStatus {
  stage: "idle" | "initializing" | "processing" | "completed" | "error";
  progress: number;
  message: string;
}

export interface ProcessingResult {
  resultUrl?: string;
  processingTime: number;
}

export interface WorkerMessage {
  type: "progress" | "result" | "error" | "completed";
  payload?: any;
}

export interface ProcessingOptions {
  previewQuality: "optimized" | "balanced" | "premium";
  refineQuality: "optimized" | "balanced" | "premium";
  enableSmoothing: boolean;
  enableEdgeRefinement: boolean;
}

// Background Remover specific types
export interface BgRemoverEditorState {
  // Image state
  originalImage: HTMLImageElement | null;
  imageUrl: string | null;

  // Processing state
  status: ProcessingStatus;
  result: ProcessingResult | null;

  // UI state
  isProcessing: boolean;

  // Actions
  setImage: (image: HTMLImageElement, url: string) => void;
  setStatus: (status: ProcessingStatus) => void;
  setResult: (result: ProcessingResult) => void;
  reset: () => void;
  startProcessing: () => Promise<void>;
}

// Image Blur specific types
export interface ImageBlurEditorState {
  originalImage: HTMLImageElement | null;
  imageUrl: string | null;
  status: ProcessingStatus;
  result: ProcessingResult | null;
  isProcessing: boolean;
  blurIntensity: number;
  setImage: (image: HTMLImageElement, url: string) => void;
  setStatus: (status: ProcessingStatus) => void;
  setResult: (result: ProcessingResult) => void;
  setBlurIntensity: (intensity: number) => void;
  reset: () => void;
  startProcessing: () => Promise<void>;
}

