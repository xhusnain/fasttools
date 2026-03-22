import type { CreditScoreRate, StateTax, CreditScoreTier } from "@/types/calculator-types/auto-loan-calculator.types"

export const CREDIT_SCORE_RATES: Record<CreditScoreTier, CreditScoreRate> = {
  excellent: { label: "Excellent (750+)", newRate: 5.07, usedRate: 6.99, description: "Super Prime" },
  good: { label: "Good (700-749)", newRate: 6.58, usedRate: 9.17, description: "Prime" },
  fair: { label: "Fair (650-699)", newRate: 9.34, usedRate: 12.28, description: "Near Prime" },
  poor: { label: "Poor (550-649)", newRate: 12.29, usedRate: 17.48, description: "Subprime" },
  bad: { label: "Bad (Below 550)", newRate: 15.24, usedRate: 21.32, description: "Deep Subprime" },
  custom: { label: "Enter Custom Rate", newRate: 0, usedRate: 0, description: "Manual" },
}

export const LOAN_TERMS = [24, 36, 48, 60, 72, 84] as const

export const US_STATES_TAX: Record<string, StateTax> = {
  AL: { name: "Alabama", rate: 2.0 },
  AK: { name: "Alaska", rate: 0 },
  AZ: { name: "Arizona", rate: 5.6 },
  AR: { name: "Arkansas", rate: 6.5 },
  CA: { name: "California", rate: 7.25 },
  CO: { name: "Colorado", rate: 2.9 },
  CT: { name: "Connecticut", rate: 6.35 },
  DE: { name: "Delaware", rate: 0 },
  FL: { name: "Florida", rate: 6.0 },
  GA: { name: "Georgia", rate: 4.0 },
  HI: { name: "Hawaii", rate: 4.0 },
  ID: { name: "Idaho", rate: 6.0 },
  IL: { name: "Illinois", rate: 6.25 },
  IN: { name: "Indiana", rate: 7.0 },
  IA: { name: "Iowa", rate: 6.0 },
  KS: { name: "Kansas", rate: 6.5 },
  KY: { name: "Kentucky", rate: 6.0 },
  LA: { name: "Louisiana", rate: 4.45 },
  ME: { name: "Maine", rate: 5.5 },
  MD: { name: "Maryland", rate: 6.0 },
  MA: { name: "Massachusetts", rate: 6.25 },
  MI: { name: "Michigan", rate: 6.0 },
  MN: { name: "Minnesota", rate: 6.875 },
  MS: { name: "Mississippi", rate: 5.0 },
  MO: { name: "Missouri", rate: 4.225 },
  MT: { name: "Montana", rate: 0 },
  NE: { name: "Nebraska", rate: 5.5 },
  NV: { name: "Nevada", rate: 6.85 },
  NH: { name: "New Hampshire", rate: 0 },
  NJ: { name: "New Jersey", rate: 6.625 },
  NM: { name: "New Mexico", rate: 4.875 },
  NY: { name: "New York", rate: 4.0 },
  NC: { name: "North Carolina", rate: 4.75 },
  ND: { name: "North Dakota", rate: 5.0 },
  OH: { name: "Ohio", rate: 5.75 },
  OK: { name: "Oklahoma", rate: 4.5 },
  OR: { name: "Oregon", rate: 0 },
  PA: { name: "Pennsylvania", rate: 6.0 },
  RI: { name: "Rhode Island", rate: 7.0 },
  SC: { name: "South Carolina", rate: 6.0 },
  SD: { name: "South Dakota", rate: 4.2 },
  TN: { name: "Tennessee", rate: 7.0 },
  TX: { name: "Texas", rate: 6.25 },
  UT: { name: "Utah", rate: 6.1 },
  VT: { name: "Vermont", rate: 6.0 },
  VA: { name: "Virginia", rate: 4.3 },
  WA: { name: "Washington", rate: 6.5 },
  WV: { name: "West Virginia", rate: 6.0 },
  WI: { name: "Wisconsin", rate: 5.0 },
  WY: { name: "Wyoming", rate: 4.0 },
  DC: { name: "Washington DC", rate: 6.0 },
}

export const DEFAULT_VEHICLE_PRICE = "35000"
export const DEFAULT_DOWN_PAYMENT = "5000"
export const DEFAULT_LOAN_TERM = "60"
export const DEFAULT_STATE = "TX"
export const DEFAULT_TITLE_REG_FEES = "300"
export const DEFAULT_CREDIT_SCORE: CreditScoreTier = "good"

export const MARKET_AVERAGES = {
  newCarPrice: 49000,
  usedCarPrice: 25500,
  newCarRate: 6.98,
  usedCarRate: 10.9,
  newCarPayment: 734,
  usedCarPayment: 525,
  avgLoanTerm: 69,
} as const
