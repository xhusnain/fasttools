// Type definitions for Image Processing

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

