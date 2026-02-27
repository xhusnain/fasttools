import {
  FEDERAL_TAX_BRACKETS,
  STANDARD_DEDUCTIONS,
  SE_TAX,
  QBI_DEDUCTION_RATE,
  SAFE_HARBOR,
  QUARTERLY_DUE_DATES,
  UNDERPAYMENT_PENALTY_RATE,
  RETIREMENT_LIMITS,
  type FilingStatus,
} from '@/constants/quarterly-tax'
import type {
  TaxInputs,
  TaxResults,
  SETaxBreakdown,
  FederalTaxBreakdown,
  BracketDetail,
  QuarterlyPayment,
  SafeHarborResult,
  PenaltyEstimate,
  RetirementImpact,
  MathStep,
  ScenarioComparison,
} from '@/types/quarterly-tax'

// ─── Formatting ──────────────────────────────────────────

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatCurrencyExact(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatPercent(rate: number): string {
  return `${(rate * 100).toFixed(1)}%`
}

// ─── Self-Employment Tax ─────────────────────────────────

export function calculateSelfEmploymentTax(
  netSEIncome: number,
  filingStatus: FilingStatus,
  w2Income: number = 0
): SETaxBreakdown {
  if (netSEIncome <= 0) {
    return { netSEIncome, taxableBase: 0, socialSecurity: 0, medicare: 0, additionalMedicare: 0, total: 0, deductibleHalf: 0 }
  }

  // Only 92.35% of net SE income is subject to SE tax
  const taxableBase = netSEIncome * SE_TAX.selfEmploymentMultiplier

  // Social Security: 12.4% up to wage cap, reduced by W-2 wages already taxed
  const remainingSSCap = Math.max(0, SE_TAX.socialSecurityWageCap - w2Income)
  const ssSubject = Math.min(taxableBase, remainingSSCap)
  const socialSecurity = ssSubject * SE_TAX.socialSecurityRate

  // Medicare: 2.9% on all SE income (no cap)
  const medicare = taxableBase * SE_TAX.medicareRate

  // Additional Medicare: 0.9% on combined income above threshold
  const threshold = SE_TAX.additionalMedicareThreshold[filingStatus]
  const combinedIncome = w2Income + taxableBase
  const additionalMedicareSubject = Math.max(0, combinedIncome - threshold) - Math.max(0, w2Income - threshold)
  const additionalMedicare = Math.max(0, additionalMedicareSubject) * SE_TAX.additionalMedicareRate

  const total = socialSecurity + medicare + additionalMedicare
  const deductibleHalf = total / 2

  return { netSEIncome, taxableBase, socialSecurity, medicare, additionalMedicare, total, deductibleHalf }
}

// ─── Federal Income Tax ──────────────────────────────────

export function calculateFederalIncomeTax(
  taxableIncome: number,
  filingStatus: FilingStatus
): FederalTaxBreakdown {
  if (taxableIncome <= 0) {
    return { taxableIncome: 0, brackets: [], totalTax: 0, effectiveRate: 0, marginalRate: 0.10 }
  }

  const brackets = FEDERAL_TAX_BRACKETS[filingStatus]
  const bracketDetails: BracketDetail[] = []
  let totalTax = 0
  let marginalRate = 0.10

  for (const bracket of brackets) {
    if (taxableIncome <= bracket.min) break

    const taxableInBracket = Math.min(taxableIncome, bracket.max) - bracket.min
    const taxForBracket = taxableInBracket * bracket.rate

    bracketDetails.push({
      rate: bracket.rate,
      rangeMin: bracket.min,
      rangeMax: bracket.max === Infinity ? taxableIncome : bracket.max,
      taxableInBracket,
      taxForBracket,
    })

    totalTax += taxForBracket
    marginalRate = bracket.rate
  }

  const effectiveRate = taxableIncome > 0 ? totalTax / taxableIncome : 0

  return { taxableIncome, brackets: bracketDetails, totalTax, effectiveRate, marginalRate }
}

// ─── Safe Harbor Calculation ─────────────────────────────

export function calculateSafeHarbor(
  currentYearTax: number,
  priorYearTax: number,
  priorYearAGI: number,
  filingStatus: FilingStatus
): SafeHarborResult {
  const currentYearAmount = currentYearTax * SAFE_HARBOR.currentYearPercent

  const agiThreshold = filingStatus === 'married-separately'
    ? SAFE_HARBOR.highIncomeAGIThresholdMFS
    : SAFE_HARBOR.highIncomeAGIThreshold
  const isHighIncome = priorYearAGI > agiThreshold
  const priorYearPercent = isHighIncome ? SAFE_HARBOR.highIncomePercent : SAFE_HARBOR.priorYearPercent
  const priorYearAmount = priorYearTax * priorYearPercent

  // Recommend the lower of the two methods to minimize payments
  const recommendedMethod = priorYearAmount <= currentYearAmount ? 'prior-year' : 'current-year'
  const requiredAnnual = Math.min(currentYearAmount, priorYearAmount)
  const requiredQuarterly = requiredAnnual / 4

  let explanation: string
  if (priorYearTax <= 0) {
    explanation = `Since you had no tax liability last year, you can use the current-year method: pay at least 90% of your ${new Date().getFullYear()} estimated tax.`
  } else if (recommendedMethod === 'prior-year') {
    explanation = isHighIncome
      ? `Since your prior-year AGI exceeded ${formatCurrency(agiThreshold)}, pay at least 110% of last year's tax (${formatCurrency(priorYearAmount)}) to meet safe harbor.`
      : `Pay at least 100% of last year's tax (${formatCurrency(priorYearAmount)}) — this is lower than 90% of your current estimated tax.`
  } else {
    explanation = `Pay at least 90% of your current-year estimated tax (${formatCurrency(currentYearAmount)}) — this is lower than ${isHighIncome ? '110%' : '100%'} of last year's tax.`
  }

  return {
    currentYearAmount,
    currentYearPercent: SAFE_HARBOR.currentYearPercent,
    priorYearAmount,
    priorYearPercent,
    recommendedMethod,
    requiredAnnual,
    requiredQuarterly,
    explanation,
    isHighIncome,
  }
}

// ─── Retirement Impact ───────────────────────────────────

export function calculateRetirementImpact(
  netSEIncome: number,
  planType: TaxInputs['retirementPlanType'],
  contribution: number,
  currentTotalTax: number,
  filingStatus: FilingStatus,
  w2Income: number,
  currentQuarterlyPayment: number
): RetirementImpact | undefined {
  if (planType === 'none' || contribution <= 0) return undefined

  // Cap contribution to plan limits
  let maxAllowed = 0
  let label = ''
  switch (planType) {
    case 'sep-ira':
      maxAllowed = Math.min(netSEIncome * RETIREMENT_LIMITS.sepIRA.maxContributionRate, RETIREMENT_LIMITS.sepIRA.maxContribution)
      label = RETIREMENT_LIMITS.sepIRA.label
      break
    case 'solo-401k':
      maxAllowed = Math.min(
        RETIREMENT_LIMITS.solo401k.employeeMax + netSEIncome * RETIREMENT_LIMITS.solo401k.employerMaxRate,
        RETIREMENT_LIMITS.solo401k.totalMax
      )
      label = RETIREMENT_LIMITS.solo401k.label
      break
    case 'traditional-ira':
      maxAllowed = RETIREMENT_LIMITS.traditionalIRA.maxContribution
      label = RETIREMENT_LIMITS.traditionalIRA.label
      break
  }

  const cappedContribution = Math.min(contribution, maxAllowed)

  // Recalculate tax with the retirement deduction
  const adjustedNetIncome = netSEIncome - cappedContribution
  const seTax = calculateSelfEmploymentTax(adjustedNetIncome, filingStatus, w2Income)
  const standardDeduction = STANDARD_DEDUCTIONS[filingStatus]
  const qbiDeduction = adjustedNetIncome * QBI_DEDUCTION_RATE
  const taxableIncome = Math.max(0, w2Income + adjustedNetIncome - seTax.deductibleHalf - standardDeduction - qbiDeduction)
  const federalTax = calculateFederalIncomeTax(taxableIncome, filingStatus)
  const newTotalTax = seTax.total + federalTax.totalTax

  const taxSavingsAnnual = currentTotalTax - newTotalTax
  const taxSavingsQuarterly = taxSavingsAnnual / 4
  const newQuarterlyPayment = currentQuarterlyPayment - taxSavingsQuarterly

  return {
    contributionAmount: cappedContribution,
    planType: label,
    taxSavingsAnnual,
    taxSavingsQuarterly,
    newQuarterlyPayment: Math.max(0, newQuarterlyPayment),
    effectiveContributionCost: cappedContribution - taxSavingsAnnual,
  }
}

// ─── Penalty Estimator ───────────────────────────────────

export function calculatePenaltyEstimate(
  requiredQuarterly: number,
  actualPayments: [number, number, number, number]
): PenaltyEstimate {
  let totalPenalty = 0
  const shortfallPerQuarter: number[] = []

  // Simplified penalty: interest on underpayment from due date to April 15 of following year
  const quarterMonths = [12, 10, 7, 3] // Months from each due date to April 15

  for (let i = 0; i < 4; i++) {
    const shortfall = Math.max(0, requiredQuarterly - actualPayments[i])
    shortfallPerQuarter.push(shortfall)
    if (shortfall > 0) {
      const months = quarterMonths[i]
      const penalty = shortfall * (UNDERPAYMENT_PENALTY_RATE / 12) * months
      totalPenalty += penalty
    }
  }

  const hasUnderpayment = totalPenalty > 0
  const explanation = hasUnderpayment
    ? `Estimated penalty of ${formatCurrency(totalPenalty)} based on ${formatPercent(UNDERPAYMENT_PENALTY_RATE)} annual rate applied to underpaid amounts from each due date through April 15. Actual penalty may vary — see IRS Form 2210.`
    : 'No underpayment penalty expected. Your payments meet the safe harbor requirements.'

  return { hasUnderpayment, penaltyAmount: totalPenalty, shortfallPerQuarter, explanation }
}

// ─── Main Calculation ────────────────────────────────────

export function calculateQuarterlyTax(inputs: TaxInputs): TaxResults {
  const {
    filingStatus,
    annualIncome1099,
    quarterlyDistribution,
    businessDeductions,
    w2Income,
    w2Withholding,
    priorYearTax,
    priorYearAGI,
    retirementPlanType,
    retirementContribution,
  } = inputs

  // Step 1: Net SE income
  const netSEIncome = Math.max(0, annualIncome1099 - businessDeductions)

  // Step 2: Retirement deduction (above-the-line)
  let retirementDeduction = 0
  if (retirementPlanType !== 'none' && retirementContribution > 0) {
    let maxAllowed = 0
    switch (retirementPlanType) {
      case 'sep-ira':
        maxAllowed = Math.min(netSEIncome * RETIREMENT_LIMITS.sepIRA.maxContributionRate, RETIREMENT_LIMITS.sepIRA.maxContribution)
        break
      case 'solo-401k':
        maxAllowed = Math.min(
          RETIREMENT_LIMITS.solo401k.employeeMax + netSEIncome * RETIREMENT_LIMITS.solo401k.employerMaxRate,
          RETIREMENT_LIMITS.solo401k.totalMax
        )
        break
      case 'traditional-ira':
        maxAllowed = RETIREMENT_LIMITS.traditionalIRA.maxContribution
        break
    }
    retirementDeduction = Math.min(retirementContribution, maxAllowed)
  }

  // Step 3: Self-employment tax
  const seTax = calculateSelfEmploymentTax(netSEIncome, filingStatus, w2Income)

  // Step 4: Adjusted gross income & taxable income
  const qbiDeduction = Math.max(0, netSEIncome - retirementDeduction) * QBI_DEDUCTION_RATE
  const standardDeduction = STANDARD_DEDUCTIONS[filingStatus]
  const taxableIncome = Math.max(
    0,
    w2Income + netSEIncome - retirementDeduction - seTax.deductibleHalf - standardDeduction - qbiDeduction
  )

  // Step 5: Federal income tax
  const federalTax = calculateFederalIncomeTax(taxableIncome, filingStatus)

  // Step 6: Total tax & remaining after W-2 withholding
  const totalAnnualTax = seTax.total + federalTax.totalTax
  const remainingTaxDue = Math.max(0, totalAnnualTax - w2Withholding)

  // Step 7: Safe harbor
  const safeHarbor = calculateSafeHarbor(totalAnnualTax, priorYearTax, priorYearAGI, filingStatus)

  // Step 8: Quarterly payment schedule
  // Use safe harbor recommended amount, minus W-2 withholding already covering part
  const safeHarborAfterWithholding = Math.max(0, safeHarbor.requiredAnnual - w2Withholding)
  const quarterlySchedule: QuarterlyPayment[] = QUARTERLY_DUE_DATES.map((q, i) => {
    const pct = quarterlyDistribution[i] / 100
    const quarterIncome = annualIncome1099 * pct
    const amount = inputs.useEqualDistribution
      ? safeHarborAfterWithholding / 4
      : safeHarborAfterWithholding * pct
    return {
      quarter: q.quarter,
      period: q.period,
      dueDate: q.dueDate,
      dueDateISO: q.dueDateISO,
      income: quarterIncome,
      amount: Math.max(0, amount),
      cumulativeTotal: 0,
    }
  })

  // Calculate cumulative totals
  let cumulative = 0
  for (const q of quarterlySchedule) {
    cumulative += q.amount
    q.cumulativeTotal = cumulative
  }

  // Step 9: Rates
  const totalIncome = w2Income + annualIncome1099
  const effectiveRate = totalIncome > 0 ? totalAnnualTax / totalIncome : 0
  const selfEmploymentRate = annualIncome1099 > 0 ? seTax.total / annualIncome1099 : 0

  // Step 10: Retirement impact
  const retirementImpact = calculateRetirementImpact(
    netSEIncome,
    retirementPlanType,
    retirementContribution,
    totalAnnualTax,
    filingStatus,
    w2Income,
    safeHarborAfterWithholding / 4
  )

  return {
    grossIncome: annualIncome1099,
    totalBusinessDeductions: businessDeductions,
    retirementDeduction,
    netSEIncome,
    seTax,
    federalTax,
    totalAnnualTax,
    w2Withholding,
    remainingTaxDue,
    safeHarbor,
    quarterlySchedule,
    effectiveRate,
    marginalRate: federalTax.marginalRate,
    selfEmploymentRate,
    retirementImpact,
  }
}

// ─── Scenario Comparison ─────────────────────────────────

export function generateScenarios(inputs: TaxInputs): ScenarioComparison[] {
  const baseResults = calculateQuarterlyTax(inputs)

  const conservativeInputs: TaxInputs = { ...inputs, annualIncome1099: inputs.annualIncome1099 * 0.8 }
  const conservativeResults = calculateQuarterlyTax(conservativeInputs)

  const growthInputs: TaxInputs = { ...inputs, annualIncome1099: inputs.annualIncome1099 * 1.2 }
  const growthResults = calculateQuarterlyTax(growthInputs)

  return [
    { name: 'conservative', label: 'Conservative (-20%)', incomeMultiplier: 0.8, results: conservativeResults },
    { name: 'base', label: 'Base Case', incomeMultiplier: 1.0, results: baseResults },
    { name: 'growth', label: 'Growth (+20%)', incomeMultiplier: 1.2, results: growthResults },
  ]
}

// ─── Math Steps (Show My Math) ───────────────────────────

export function generateMathSteps(inputs: TaxInputs, results: TaxResults): MathStep[] {
  const steps: MathStep[] = []

  steps.push({
    label: 'Net Self-Employment Income',
    formula: `${formatCurrency(inputs.annualIncome1099)} − ${formatCurrency(inputs.businessDeductions)}`,
    result: formatCurrency(results.netSEIncome),
    explanation: 'Gross 1099 income minus business deductions',
  })

  steps.push({
    label: 'SE Tax Base (92.35%)',
    formula: `${formatCurrency(results.netSEIncome)} × 0.9235`,
    result: formatCurrency(results.seTax.taxableBase),
    explanation: 'IRS requires you to calculate SE tax on 92.35% of net SE income',
  })

  steps.push({
    label: 'Social Security Tax',
    formula: `${formatCurrency(Math.min(results.seTax.taxableBase, SE_TAX.socialSecurityWageCap - inputs.w2Income))} × 12.4%`,
    result: formatCurrency(results.seTax.socialSecurity),
    explanation: `12.4% on SE income up to the ${formatCurrency(SE_TAX.socialSecurityWageCap)} wage cap`,
  })

  steps.push({
    label: 'Medicare Tax',
    formula: `${formatCurrency(results.seTax.taxableBase)} × 2.9%`,
    result: formatCurrency(results.seTax.medicare),
    explanation: '2.9% on all SE income (no cap)',
  })

  if (results.seTax.additionalMedicare > 0) {
    steps.push({
      label: 'Additional Medicare Tax',
      formula: `Excess over threshold × 0.9%`,
      result: formatCurrency(results.seTax.additionalMedicare),
      explanation: '0.9% surtax on combined income exceeding threshold',
    })
  }

  steps.push({
    label: 'Total Self-Employment Tax',
    formula: `${formatCurrency(results.seTax.socialSecurity)} + ${formatCurrency(results.seTax.medicare)}${results.seTax.additionalMedicare > 0 ? ` + ${formatCurrency(results.seTax.additionalMedicare)}` : ''}`,
    result: formatCurrency(results.seTax.total),
  })

  steps.push({
    label: 'Deductible Half of SE Tax',
    formula: `${formatCurrency(results.seTax.total)} ÷ 2`,
    result: formatCurrency(results.seTax.deductibleHalf),
    explanation: 'You can deduct half of SE tax from your income (above-the-line)',
  })

  if (results.retirementDeduction > 0) {
    steps.push({
      label: 'Retirement Contribution Deduction',
      formula: `Contribution capped to plan limits`,
      result: formatCurrency(results.retirementDeduction),
      explanation: 'Above-the-line deduction for retirement contributions',
    })
  }

  const qbi = Math.max(0, results.netSEIncome - results.retirementDeduction) * QBI_DEDUCTION_RATE
  steps.push({
    label: 'QBI Deduction (20%)',
    formula: `${formatCurrency(Math.max(0, results.netSEIncome - results.retirementDeduction))} × 20%`,
    result: formatCurrency(qbi),
    explanation: 'Qualified Business Income deduction for pass-through income',
  })

  const standardDed = STANDARD_DEDUCTIONS[inputs.filingStatus]
  steps.push({
    label: 'Taxable Income',
    formula: `W-2 + Net SE − SE deduction − Std. Deduction − QBI − Retirement`,
    result: formatCurrency(results.federalTax.taxableIncome),
    explanation: `Standard deduction: ${formatCurrency(standardDed)}`,
  })

  steps.push({
    label: 'Federal Income Tax',
    formula: 'Progressive bracket calculation',
    result: formatCurrency(results.federalTax.totalTax),
    explanation: `Effective rate: ${formatPercent(results.federalTax.effectiveRate)} | Marginal rate: ${formatPercent(results.federalTax.marginalRate)}`,
  })

  steps.push({
    label: 'Total Annual Tax',
    formula: `${formatCurrency(results.seTax.total)} + ${formatCurrency(results.federalTax.totalTax)}`,
    result: formatCurrency(results.totalAnnualTax),
  })

  if (inputs.w2Withholding > 0) {
    steps.push({
      label: 'Minus W-2 Withholding',
      formula: `${formatCurrency(results.totalAnnualTax)} − ${formatCurrency(inputs.w2Withholding)}`,
      result: formatCurrency(results.remainingTaxDue),
      explanation: 'Taxes already covered by employer withholding',
    })
  }

  steps.push({
    label: 'Safe Harbor Quarterly Payment',
    formula: `${formatCurrency(results.safeHarbor.requiredAnnual)} ÷ 4`,
    result: formatCurrency(results.safeHarbor.requiredQuarterly),
    explanation: results.safeHarbor.explanation,
  })

  return steps
}

// ─── Export Text Summary ─────────────────────────────────

export function generateExportText(inputs: TaxInputs, results: TaxResults): string {
  const lines: string[] = [
    '═══════════════════════════════════════════════════',
    '  1099 QUARTERLY TAX ESTIMATE — 2026 Tax Year',
    '  Generated by FastTools (fasttools.io)',
    '═══════════════════════════════════════════════════',
    '',
    '── INCOME SUMMARY ──',
    `Filing Status:         ${inputs.filingStatus.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}`,
    `1099 Gross Income:     ${formatCurrency(inputs.annualIncome1099)}`,
    `Business Deductions:   ${formatCurrency(inputs.businessDeductions)}`,
    `Net SE Income:         ${formatCurrency(results.netSEIncome)}`,
  ]

  if (inputs.w2Income > 0) {
    lines.push(`W-2 Income:            ${formatCurrency(inputs.w2Income)}`)
    lines.push(`W-2 Withholding:       ${formatCurrency(inputs.w2Withholding)}`)
  }

  if (results.retirementDeduction > 0) {
    lines.push(`Retirement Deduction:  ${formatCurrency(results.retirementDeduction)}`)
  }

  lines.push(
    '',
    '── TAX BREAKDOWN ──',
    `Self-Employment Tax:   ${formatCurrency(results.seTax.total)}`,
    `  Social Security:     ${formatCurrency(results.seTax.socialSecurity)}`,
    `  Medicare:            ${formatCurrency(results.seTax.medicare)}`,
  )

  if (results.seTax.additionalMedicare > 0) {
    lines.push(`  Additional Medicare: ${formatCurrency(results.seTax.additionalMedicare)}`)
  }

  lines.push(
    `Federal Income Tax:    ${formatCurrency(results.federalTax.totalTax)}`,
    `Total Annual Tax:      ${formatCurrency(results.totalAnnualTax)}`,
    `Effective Tax Rate:    ${formatPercent(results.effectiveRate)}`,
    `Marginal Tax Rate:     ${formatPercent(results.marginalRate)}`,
    '',
    '── QUARTERLY PAYMENT SCHEDULE ──',
    `Safe Harbor Method:    ${results.safeHarbor.recommendedMethod === 'prior-year' ? 'Prior-Year' : 'Current-Year'}`,
    `Required Annual:       ${formatCurrency(results.safeHarbor.requiredAnnual)}`,
    '',
  )

  for (const q of results.quarterlySchedule) {
    lines.push(`${q.quarter} | Due: ${q.dueDate} | Pay: ${formatCurrency(q.amount)}`)
  }

  lines.push(
    '',
    '── IRS PAYMENT OPTIONS ──',
    'IRS Direct Pay: https://www.irs.gov/payments/direct-pay',
    'EFTPS: https://www.eftps.gov/',
    '',
    '═══════════════════════════════════════════════════',
    'DISCLAIMER: This is an educational estimate only.',
    'Consult a tax professional for advice. Verify with',
    'IRS Publication 505 and Form 1040-ES.',
    '═══════════════════════════════════════════════════',
  )

  return lines.join('\n')
}
