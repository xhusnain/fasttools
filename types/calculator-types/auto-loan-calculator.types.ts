export type VehicleType = "new" | "used"
export type DownPaymentType = "dollar" | "percent"
export type CreditScoreTier = "excellent" | "good" | "fair" | "poor" | "bad" | "custom"
export type ActiveTab = "calculator" | "affordability"

export interface CreditScoreRate {
  label: string
  newRate: number
  usedRate: number
  description: string
}

export interface StateTax {
  name: string
  rate: number
}

export interface AmortizationEntry {
  month: number
  date: string
  principal: number
  interest: number
  totalPayment: number
  balance: number
  principalPercentage: number
}

export interface YearlyEntry {
  year: number
  principal: number
  interest: number
  totalPayment: number
  balance: number
  loanPaidToDate: number
}

export interface AutoLoanResult {
  monthlyPayment: number
  totalLoanAmount: number
  totalInterest: number
  totalCost: number
  salesTaxAmount: number
  upfrontCost: number
  amountFinanced: number
  effectivePrice: number
  payoffDate: string
  ltvRatio: number
  amortizationSchedule: AmortizationEntry[]
  yearlySchedule: YearlyEntry[]
}

export interface TermComparison {
  term: number
  monthlyPayment: number
  totalInterest: number
  totalCost: number
}
