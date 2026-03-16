export type NisabStandard = "gold" | "silver"
export type Currency = "USD" | "GBP" | "EUR" | "PKR" | "SAR" | "AED" | "MYR" | "IDR" | "BDT" | "INR"

export interface ZakatResult {
  totalZakatable: number
  totalDeductions: number
  netZakatableWealth: number
  nisabThreshold: number
  nisabStandard: NisabStandard
  isZakatDue: boolean
  zakatAmount: number
  zakatRate: number
  currency: Currency
  assetBreakdown: ZakatAssetCategory[]
  deductionBreakdown: ZakatDeduction[]
  zakatDistribution: ZakatDistributionSuggestion[]
  dailyEquivalent: number
  monthlyEquivalent: number
}

export interface ZakatAssetCategory {
  category: string
  amount: number
  percentage: number
  icon: string
}

export interface ZakatDeduction {
  label: string
  amount: number
}

export interface ZakatDistributionSuggestion {
  category: string
  arabicName: string
  description: string
  suggestedPercent: number
  suggestedAmount: number
}
