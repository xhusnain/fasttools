import type { FilingStatus } from '@/constants/quarterly-tax'

export interface TaxInputs {
  filingStatus: FilingStatus
  annualIncome1099: number
  quarterlyDistribution: [number, number, number, number] // percentages summing to 100
  businessDeductions: number
  w2Income: number
  w2Withholding: number
  priorYearTax: number
  priorYearAGI: number
  retirementPlanType: 'none' | 'sep-ira' | 'solo-401k' | 'traditional-ira'
  retirementContribution: number
  useEqualDistribution: boolean
}

export interface BracketDetail {
  rate: number
  rangeMin: number
  rangeMax: number
  taxableInBracket: number
  taxForBracket: number
}

export interface SETaxBreakdown {
  netSEIncome: number
  taxableBase: number // netSEIncome × 0.9235
  socialSecurity: number
  medicare: number
  additionalMedicare: number
  total: number
  deductibleHalf: number
}

export interface FederalTaxBreakdown {
  taxableIncome: number
  brackets: BracketDetail[]
  totalTax: number
  effectiveRate: number
  marginalRate: number
}

export interface QuarterlyPayment {
  quarter: string
  period: string
  dueDate: string
  dueDateISO: string
  income: number
  amount: number
  cumulativeTotal: number
}

export interface SafeHarborResult {
  currentYearAmount: number
  currentYearPercent: number
  priorYearAmount: number
  priorYearPercent: number
  recommendedMethod: 'current-year' | 'prior-year'
  requiredAnnual: number
  requiredQuarterly: number
  explanation: string
  isHighIncome: boolean
}

export interface PenaltyEstimate {
  hasUnderpayment: boolean
  penaltyAmount: number
  shortfallPerQuarter: number[]
  explanation: string
}

export interface RetirementImpact {
  contributionAmount: number
  planType: string
  taxSavingsAnnual: number
  taxSavingsQuarterly: number
  newQuarterlyPayment: number
  effectiveContributionCost: number // contribution minus tax savings
}

export interface TaxResults {
  // Inputs summary
  grossIncome: number
  totalBusinessDeductions: number
  retirementDeduction: number
  netSEIncome: number

  // Tax calculations
  seTax: SETaxBreakdown
  federalTax: FederalTaxBreakdown
  totalAnnualTax: number

  // After credits
  w2Withholding: number
  remainingTaxDue: number

  // Quarterly breakdown
  safeHarbor: SafeHarborResult
  quarterlySchedule: QuarterlyPayment[]

  // Rates
  effectiveRate: number
  marginalRate: number
  selfEmploymentRate: number

  // Optional
  retirementImpact?: RetirementImpact
  penaltyEstimate?: PenaltyEstimate
}

export interface ScenarioComparison {
  name: string
  label: string
  incomeMultiplier: number
  results: TaxResults
}

export interface MathStep {
  label: string
  formula: string
  result: string
  explanation?: string
}
