// Type definitions for Background Remover

export interface ProcessingStatus {
  stage: "idle" | "initializing" | "processing" | "completed" | "error";
  progress: number;
  message: string;
}

export interface ProcessingResult {
  resultUrl?: string;
  processingTime: number;
}

export interface EditorState {
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

