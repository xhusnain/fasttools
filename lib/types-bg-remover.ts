

export interface ProcessingStatus {
  stage: "idle" | "initializing" | "processing" | "completed" | "error";
  progress: number;
  message: string;
}

export interface ModelInfo {
  name: string;
  url: string;
  size: number;
  loaded: boolean;
}

export interface ProcessingResult {
  resultUrl?: string;
  processingTime: number;
  modelInfo: {
    u2net: ModelInfo;
  };
}

export interface EditorState {

  originalImage: HTMLImageElement | null;
  imageUrl: string | null;

  status: ProcessingStatus;
  result: ProcessingResult | null;

  isProcessing: boolean;

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

export interface ModelCache {
  u2net: ArrayBuffer | null;
  lastUpdated: number;
}

export interface ProcessingOptions {
  previewQuality: "optimized" | "balanced" | "premium";
  refineQuality: "optimized" | "balanced" | "premium";
  enableSmoothing: boolean;
  enableEdgeRefinement: boolean;
}

