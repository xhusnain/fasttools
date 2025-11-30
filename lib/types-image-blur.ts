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

export interface WorkerMessage {
  type: "progress" | "result" | "error" | "completed";
  payload?: any;
}

