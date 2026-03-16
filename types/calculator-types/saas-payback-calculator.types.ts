export interface SaaSPaybackResult {
  paybackPeriodMonths: number
  paybackPeriodFormatted: string
  ltv: number
  ltvCacRatio: number
  monthlyGrossProfit: number
  annualGrossProfit: number
  grossMarginPercent: number
  cacPerCustomer: number
  arpu: number
  monthlyChurnRate: number
  averageCustomerLifespan: number
  roiAtMonth12: number
  roiAtMonth24: number
  roiAtMonth36: number
  paybackRating: PaybackRating
  monthlyProjection: PaybackProjectionEntry[]
  benchmarkComparison: BenchmarkEntry[]
  recommendations: PaybackRecommendation[]
}

export interface PaybackRating {
  label: string
  color: string
  description: string
}

export interface PaybackProjectionEntry {
  month: number
  cumulativeRevenue: number
  cumulativeGrossProfit: number
  netPosition: number
  recovered: boolean
}

export interface BenchmarkEntry {
  segment: string
  typicalPayback: string
  typicalLtvCac: string
  yourPayback: number
  status: string
}

export interface PaybackRecommendation {
  action: string
  impact: string
  priority: "high" | "medium" | "low"
}
