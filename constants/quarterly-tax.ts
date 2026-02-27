// 2026 Tax Year Constants for 1099 Quarterly Tax Estimator
// Sources: IRS Rev. Proc. 2025-11, IRS Publication 505, IRS Form 1040-ES

export type FilingStatus = 'single' | 'married-jointly' | 'married-separately' | 'head-of-household'

export const FILING_STATUS_LABELS: Record<FilingStatus, string> = {
  'single': 'Single',
  'married-jointly': 'Married Filing Jointly',
  'married-separately': 'Married Filing Separately',
  'head-of-household': 'Head of Household',
}

// 2026 Federal Income Tax Brackets
export const FEDERAL_TAX_BRACKETS: Record<FilingStatus, { min: number; max: number; rate: number }[]> = {
  'single': [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 },
  ],
  'married-jointly': [
    { min: 0, max: 23850, rate: 0.10 },
    { min: 23850, max: 96950, rate: 0.12 },
    { min: 96950, max: 206700, rate: 0.22 },
    { min: 206700, max: 394600, rate: 0.24 },
    { min: 394600, max: 501050, rate: 0.32 },
    { min: 501050, max: 751600, rate: 0.35 },
    { min: 751600, max: Infinity, rate: 0.37 },
  ],
  'married-separately': [
    { min: 0, max: 11925, rate: 0.10 },
    { min: 11925, max: 48475, rate: 0.12 },
    { min: 48475, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250525, rate: 0.32 },
    { min: 250525, max: 375800, rate: 0.35 },
    { min: 375800, max: Infinity, rate: 0.37 },
  ],
  'head-of-household': [
    { min: 0, max: 17000, rate: 0.10 },
    { min: 17000, max: 64850, rate: 0.12 },
    { min: 64850, max: 103350, rate: 0.22 },
    { min: 103350, max: 197300, rate: 0.24 },
    { min: 197300, max: 250500, rate: 0.32 },
    { min: 250500, max: 626350, rate: 0.35 },
    { min: 626350, max: Infinity, rate: 0.37 },
  ],
}

// 2026 Standard Deductions
export const STANDARD_DEDUCTIONS: Record<FilingStatus, number> = {
  'single': 15000,
  'married-jointly': 30000,
  'married-separately': 15000,
  'head-of-household': 22500,
}

// Self-Employment Tax Constants
export const SE_TAX = {
  socialSecurityRate: 0.124,
  medicareRate: 0.029,
  totalRate: 0.153,
  socialSecurityWageCap: 176100, // 2026 SS wage base
  additionalMedicareRate: 0.009,
  additionalMedicareThreshold: {
    'single': 200000,
    'married-jointly': 250000,
    'married-separately': 125000,
    'head-of-household': 200000,
  } as Record<FilingStatus, number>,
  selfEmploymentMultiplier: 0.9235, // Only 92.35% of SE income is subject to SE tax
}

// QBI (Qualified Business Income) Deduction
export const QBI_DEDUCTION_RATE = 0.20

// Safe Harbor Thresholds
export const SAFE_HARBOR = {
  currentYearPercent: 0.90, // Pay 90% of current year tax
  priorYearPercent: 1.00,   // Pay 100% of prior year tax
  highIncomePercent: 1.10,  // Pay 110% if prior year AGI > threshold
  highIncomeAGIThreshold: 150000, // $150k for all except MFS
  highIncomeAGIThresholdMFS: 75000, // $75k for Married Filing Separately
}

// 2026 Quarterly Due Dates
export const QUARTERLY_DUE_DATES = [
  { quarter: 'Q1', period: 'Jan 1 – Mar 31', dueDate: 'April 15, 2026', dueDateISO: '2026-04-15' },
  { quarter: 'Q2', period: 'Apr 1 – May 31', dueDate: 'June 15, 2026', dueDateISO: '2026-06-15' },
  { quarter: 'Q3', period: 'Jun 1 – Aug 31', dueDate: 'September 15, 2026', dueDateISO: '2026-09-15' },
  { quarter: 'Q4', period: 'Sep 1 – Dec 31', dueDate: 'January 15, 2027', dueDateISO: '2027-01-15' },
]

// Annualized Income Installment Periods (IRS Form 2210 Schedule AI)
export const ANNUALIZED_PERIODS = [
  { quarter: 1, months: 3, annualizationFactor: 4 },    // 3 months × 4 = 12
  { quarter: 2, months: 5, annualizationFactor: 2.4 },  // 5 months × 2.4 = 12
  { quarter: 3, months: 8, annualizationFactor: 1.5 },  // 8 months × 1.5 = 12
  { quarter: 4, months: 12, annualizationFactor: 1 },   // 12 months × 1 = 12
]

// Retirement Plan Contribution Limits (2026)
export const RETIREMENT_LIMITS = {
  sepIRA: {
    maxContributionRate: 0.25, // 25% of net SE income
    maxContribution: 70000,
    label: 'SEP-IRA',
  },
  solo401k: {
    employeeMax: 23500,
    employerMaxRate: 0.25, // 25% of net SE income
    totalMax: 70000,
    catchUpAge: 50,
    catchUpAmount: 7500,
    superCatchUpAge: 60, // Ages 60-63 get higher catch-up (SECURE 2.0)
    superCatchUpAmount: 11250,
    label: 'Solo 401(k)',
  },
  traditionalIRA: {
    maxContribution: 7000,
    catchUpAge: 50,
    catchUpAmount: 1000,
    label: 'Traditional IRA',
  },
}

// IRS Payment Links
export const IRS_LINKS = {
  directPay: 'https://www.irs.gov/payments/direct-pay',
  eftps: 'https://www.eftps.gov/',
  form1040ES: 'https://www.irs.gov/forms-pubs/about-form-1040-es',
  pub505: 'https://www.irs.gov/publications/p505',
  form2210: 'https://www.irs.gov/forms-pubs/about-form-2210',
}

// Common Business Deduction Categories (for UI hints)
export const COMMON_DEDUCTIONS = [
  'Home office expenses',
  'Vehicle / mileage (67¢/mile for 2026)',
  'Health insurance premiums (self-employed)',
  'Office supplies & equipment',
  'Software & subscriptions',
  'Professional services (legal, accounting)',
  'Marketing & advertising',
  'Travel & meals (50% for meals)',
  'Education & training',
  'Phone & internet (business portion)',
]

// Underpayment Penalty Rate (IRS adjusts quarterly — using current rate)
export const UNDERPAYMENT_PENALTY_RATE = 0.07 // 7% annual rate (Q1 2026)

// Tax Year
export const TAX_YEAR = 2026
