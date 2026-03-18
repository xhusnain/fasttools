export type FilingStatus = "single" | "married" | "head"

export interface HomeAffordabilityResult {
  maxHomePrice: number
  maxMonthlyPayment: number
  downPaymentAmount: number
  loanAmount: number
  monthlyBreakdown: MonthlyBreakdown
  dtiRatio: number
  frontEndDTI: number
  backEndDTI: number
  affordabilityRating: AffordabilityRating
  closingCosts: number
  totalCashNeeded: number
  priceRanges: PriceRange[]
  amortizationSummary: AmortizationSummary
  yearlyCostBreakdown: YearlyCost[]
}

export interface MonthlyBreakdown {
  principal: number
  interest: number
  propertyTax: number
  homeInsurance: number
  pmi: number
  hoa: number
  totalPayment: number
}

export interface AffordabilityRating {
  label: string
  color: string
  description: string
}

export interface PriceRange {
  label: string
  homePrice: number
  monthlyPayment: number
  dti: number
  comfort: string
}

export interface AmortizationSummary {
  totalPaid: number
  totalInterest: number
  totalPrincipal: number
  payoffDate: string
}

export interface YearlyCost {
  category: string
  monthly: number
  annual: number
  percentage: number
  color: string
}