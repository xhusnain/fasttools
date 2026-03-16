export interface FreelanceRateResult {
  hourlyRate: number
  dailyRate: number
  weeklyRate: number
  monthlyRate: number
  annualGross: number
  effectiveHourlyAfterTax: number
  totalAnnualExpenses: number
  totalAnnualTaxes: number
  takeHomePay: number
  billableHoursPerYear: number
  billableHoursPerMonth: number
  nonBillableHoursPerYear: number
  workingDaysPerYear: number
  vacationDaysPerYear: number
  profitMarginAmount: number
  taxBreakdown: TaxBreakdown
  expenseBreakdown: ExpenseBreakdown
  rateComparison: RateComparisonEntry[]
}

export interface TaxBreakdown {
  incomeTax: number
  selfEmploymentTax: number
  stateTax: number
  totalTax: number
  effectiveTaxRate: number
}

export interface ExpenseBreakdown {
  healthInsurance: number
  retirement: number
  software: number
  equipment: number
  office: number
  other: number
  total: number
}

export interface RateComparisonEntry {
  label: string
  hourly: number
  monthly: number
  annual: number
}
