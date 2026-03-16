export type PlanType = "free" | "paid"

export interface CloudflareWorkersCostResult {
  totalMonthlyCost: number
  planType: PlanType
  basePlatformFee: number
  requestsCost: RequestsCost
  cpuCost: CpuCost
  kvCost: KVCost
  r2Cost: R2Cost
  durableObjectsCost: DurableObjectsCost
  costBreakdown: CostBreakdownItem[]
  freeTierUsage: FreeTierUsage
  annualCost: number
  costPerMillionRequests: number
  scalingProjection: ScalingProjection[]
}

export interface RequestsCost {
  totalRequests: number
  billableRequests: number
  includedRequests: number
  costPerMillion: number
  total: number
}

export interface CpuCost {
  avgCpuTimeMs: number
  totalCpuTimeSeconds: number
  billableCpuTime: number
  costPerMillionMs: number
  total: number
}

export interface KVCost {
  reads: number
  writes: number
  deletes: number
  storedGB: number
  readCost: number
  writeCost: number
  storageCost: number
  total: number
}

export interface R2Cost {
  storedGB: number
  classAOps: number
  classBOps: number
  egressGB: number
  storageCost: number
  classACost: number
  classBCost: number
  total: number
}

export interface DurableObjectsCost {
  requests: number
  wallClockHours: number
  storedGB: number
  requestCost: number
  durationCost: number
  storageCost: number
  total: number
}

export interface CostBreakdownItem {
  label: string
  amount: number
  percentage: number
  color: string
}

export interface FreeTierUsage {
  requestsUsed: number
  requestsLimit: number
  requestsPercent: number
  kvReadsUsed: number
  kvReadsLimit: number
  kvReadsPercent: number
}

export interface ScalingProjection {
  label: string
  requests: string
  monthlyCost: number
  costPerRequest: string
}
