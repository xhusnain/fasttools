export type GpuType = "h100" | "h200" | "a100_80" | "a100_40" | "l40s" | "a10g" | "t4"
export type CloudProvider = "aws" | "gcp" | "azure" | "lambda" | "coreweave"
export type PrecisionType = "fp32" | "bf16" | "fp16" | "fp8" | "int8"

export interface LLMTrainingCostResult {
  totalCost: number
  totalGpuHours: number
  totalTrainingDays: number
  totalTrainingHours: number
  numberOfGpus: number
  gpuUtilization: number
  costPerToken: number
  costPerBillion: number
  totalFLOPs: number
  tokensProcessed: number
  gpuMemoryRequired: number
  modelSizeCategory: string
  providerComparison: ProviderCost[]
  gpuComparison: GpuCost[]
  costBreakdown: CostBreakdown
  scalingEstimates: ScalingEstimate[]
}

export interface ProviderCost {
  provider: string
  gpuType: string
  pricePerHour: number
  totalCost: number
  totalHours: number
}

export interface GpuCost {
  gpu: string
  tflops: number
  memory: number
  hoursNeeded: number
  estimatedCost: number
}

export interface CostBreakdown {
  gpuCompute: number
  storage: number
  networking: number
  overhead: number
  total: number
}

export interface ScalingEstimate {
  label: string
  params: string
  tokens: string
  estimatedCost: number
  trainingDays: number
}
