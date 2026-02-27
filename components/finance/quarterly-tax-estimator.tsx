"use client"

import { useState, useCallback } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GBadge } from "@/ui/gbadge"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { GAlert, GAlertDescription } from "@/ui/galert"
import {
  Calculator, DollarSign, Calendar, Download, AlertTriangle, Shield,
  TrendingUp, FileText, Copy, ChevronRight, ChevronLeft, Check,
  RotateCcw, Eye, Briefcase, PiggyBank, Info, ExternalLink
} from "lucide-react"
import { FILING_STATUS_LABELS, QUARTERLY_DUE_DATES, COMMON_DEDUCTIONS, IRS_LINKS, TAX_YEAR, type FilingStatus } from "@/constants/quarterly-tax"
import type { TaxInputs, TaxResults, ScenarioComparison, MathStep } from "@/types/quarterly-tax"
import {
  calculateQuarterlyTax, generateScenarios, generateMathSteps,
  generateExportText, formatCurrency, formatPercent
} from "@/lib/quarterly-tax-utils"

const DEFAULT_INPUTS: TaxInputs = {
  filingStatus: 'single',
  annualIncome1099: 0,
  quarterlyDistribution: [25, 25, 25, 25],
  businessDeductions: 0,
  w2Income: 0,
  w2Withholding: 0,
  priorYearTax: 0,
  priorYearAGI: 0,
  retirementPlanType: 'none',
  retirementContribution: 0,
  useEqualDistribution: true,
}

type Step = 'income' | 'deductions' | 'prior-year' | 'results'
const STEPS: { key: Step; label: string; icon: React.ReactNode }[] = [
  { key: 'income', label: 'Income', icon: <DollarSign className="h-4 w-4" /> },
  { key: 'deductions', label: 'Deductions', icon: <Briefcase className="h-4 w-4" /> },
  { key: 'prior-year', label: 'Prior Year', icon: <Calendar className="h-4 w-4" /> },
  { key: 'results', label: 'Results', icon: <Calculator className="h-4 w-4" /> },
]

function parseCurrencyInput(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, '')
  return parseFloat(cleaned) || 0
}

export function QuarterlyTaxEstimator() {
  const [currentStep, setCurrentStep] = useState<Step>('income')
  const [inputs, setInputs] = useState<TaxInputs>(DEFAULT_INPUTS)
  const [results, setResults] = useState<TaxResults | null>(null)
  const [scenarios, setScenarios] = useState<ScenarioComparison[]>([])
  const [mathSteps, setMathSteps] = useState<MathStep[]>([])
  const [isCalculating, setIsCalculating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showMath, setShowMath] = useState(false)
  const [resultTab, setResultTab] = useState('schedule')

  const updateInput = useCallback(<K extends keyof TaxInputs>(key: K, value: TaxInputs[K]) => {
    setInputs(prev => ({ ...prev, [key]: value }))
  }, [])

  const updateQuarterlyDistribution = useCallback((index: number, value: number) => {
    setInputs(prev => {
      const newDist = [...prev.quarterlyDistribution] as [number, number, number, number]
      newDist[index] = value
      return { ...prev, quarterlyDistribution: newDist }
    })
  }, [])

  const handleCalculate = useCallback(() => {
    setIsCalculating(true)
    setTimeout(() => {
      const taxResults = calculateQuarterlyTax(inputs)
      setResults(taxResults)
      setScenarios(generateScenarios(inputs))
      setMathSteps(generateMathSteps(inputs, taxResults))
      setIsCalculating(false)
      setCurrentStep('results')
    }, 500)
  }, [inputs])

  const handleReset = useCallback(() => {
    setInputs(DEFAULT_INPUTS)
    setResults(null)
    setScenarios([])
    setMathSteps([])
    setCurrentStep('income')
    setShowMath(false)
  }, [])

  const handleCopy = useCallback(() => {
    if (!results) return
    const text = generateExportText(inputs, results)
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [inputs, results])

  const handleExport = useCallback(() => {
    if (!results) return
    const text = generateExportText(inputs, results)
    const blob = new Blob([text], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `quarterly-tax-estimate-${TAX_YEAR}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }, [inputs, results])

  const currentStepIndex = STEPS.findIndex(s => s.key === currentStep)
  const canGoNext = currentStepIndex < STEPS.length - 1
  const canGoPrev = currentStepIndex > 0

  const goNext = () => {
    if (currentStep === 'prior-year') {
      handleCalculate()
    } else if (canGoNext) {
      setCurrentStep(STEPS[currentStepIndex + 1].key)
    }
  }

  const goPrev = () => {
    if (canGoPrev) {
      setCurrentStep(STEPS[currentStepIndex - 1].key)
    }
  }

  const isIncomeValid = inputs.annualIncome1099 > 0

  return (
    <div className="space-y-4">
      {/* Step Progress Bar */}
      <div className="flex items-center justify-between mb-6">
        {STEPS.map((step, i) => (
          <div key={step.key} className="flex items-center flex-1">
            <button
              onClick={() => {
                if (step.key === 'results' && !results) return
                setCurrentStep(step.key)
              }}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                currentStep === step.key
                  ? 'bg-primary text-primary-foreground'
                  : results && step.key !== 'results'
                    ? 'bg-primary/10 text-primary cursor-pointer'
                    : 'bg-muted text-muted-foreground'
              }`}
            >
              {step.icon}
              <span className="hidden sm:inline">{step.label}</span>
            </button>
            {i < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 mx-1 ${i < currentStepIndex ? 'bg-primary' : 'bg-muted'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Income & Filing */}
      {currentStep === 'income' && (
        <div className="space-y-4">
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Income & Filing Status
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div>
                <GLabel htmlFor="filingStatus">Filing Status</GLabel>
                <GSelect
                  value={inputs.filingStatus}
                  onValueChange={(v) => updateInput('filingStatus', v as FilingStatus)}
                >
                  <GSelectTrigger id="filingStatus">
                    <GSelectValue placeholder="Select filing status" />
                  </GSelectTrigger>
                  <GSelectContent>
                    {Object.entries(FILING_STATUS_LABELS).map(([value, label]) => (
                      <GSelectItem key={value} value={value}>{label}</GSelectItem>
                    ))}
                  </GSelectContent>
                </GSelect>
              </div>

              <div>
                <GLabel htmlFor="income1099">Expected Annual 1099 Income</GLabel>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <GInput
                    id="income1099"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 80,000"
                    className="pl-7"
                    value={inputs.annualIncome1099 || ''}
                    onChange={(e) => updateInput('annualIncome1099', parseCurrencyInput(e.target.value))}
                  />
                </div>
              </div>

              {/* Quarterly Distribution */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <GLabel>Income Distribution by Quarter</GLabel>
                  <button
                    onClick={() => {
                      const useEqual = !inputs.useEqualDistribution
                      updateInput('useEqualDistribution', useEqual)
                      if (useEqual) {
                        updateInput('quarterlyDistribution', [25, 25, 25, 25])
                      }
                    }}
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    {inputs.useEqualDistribution ? 'Customize' : 'Equal Split'}
                  </button>
                </div>
                {inputs.useEqualDistribution ? (
                  <p className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                    Income split equally: 25% per quarter. Click &quot;Customize&quot; for uneven income.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {['Q1', 'Q2', 'Q3', 'Q4'].map((q, i) => (
                      <div key={q}>
                        <GLabel className="text-xs text-muted-foreground">{q} ({QUARTERLY_DUE_DATES[i].period})</GLabel>
                        <div className="relative">
                          <GInput
                            type="number"
                            min={0}
                            max={100}
                            value={inputs.quarterlyDistribution[i]}
                            onChange={(e) => updateQuarterlyDistribution(i, parseFloat(e.target.value) || 0)}
                            className="pr-6"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">%</span>
                        </div>
                      </div>
                    ))}
                    {inputs.quarterlyDistribution.reduce((a, b) => a + b, 0) !== 100 && (
                      <p className="col-span-2 text-xs text-destructive">
                        Percentages must total 100% (currently {inputs.quarterlyDistribution.reduce((a, b) => a + b, 0)}%)
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* W-2 Income (optional) */}
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium mb-2 flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-muted-foreground" />
                  Also have W-2 income? (optional)
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <GLabel htmlFor="w2Income" className="text-xs">W-2 Income</GLabel>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                      <GInput
                        id="w2Income"
                        type="text"
                        inputMode="numeric"
                        placeholder="0"
                        className="pl-7"
                        value={inputs.w2Income || ''}
                        onChange={(e) => updateInput('w2Income', parseCurrencyInput(e.target.value))}
                      />
                    </div>
                  </div>
                  <div>
                    <GLabel htmlFor="w2Withholding" className="text-xs">W-2 Tax Withheld</GLabel>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                      <GInput
                        id="w2Withholding"
                        type="text"
                        inputMode="numeric"
                        placeholder="0"
                        className="pl-7"
                        value={inputs.w2Withholding || ''}
                        onChange={(e) => updateInput('w2Withholding', parseCurrencyInput(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}

      {/* Step 2: Deductions */}
      {currentStep === 'deductions' && (
        <div className="space-y-4">
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-lg flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Business Deductions
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div>
                <GLabel htmlFor="deductions">Total Business Deductions</GLabel>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <GInput
                    id="deductions"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 15,000"
                    className="pl-7"
                    value={inputs.businessDeductions || ''}
                    onChange={(e) => updateInput('businessDeductions', parseCurrencyInput(e.target.value))}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Sum of all business expenses you can deduct (home office, supplies, mileage, etc.)
                </p>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Common 1099 Deductions</p>
                <div className="flex flex-wrap gap-1.5">
                  {COMMON_DEDUCTIONS.map((d) => (
                    <span key={d} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">{d}</span>
                  ))}
                </div>
              </div>
            </GCardContent>
          </GCard>

          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-lg flex items-center gap-2">
                <PiggyBank className="h-5 w-5 text-primary" />
                Retirement Contributions (Optional)
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div>
                <GLabel htmlFor="retirementPlan">Retirement Plan Type</GLabel>
                <GSelect
                  value={inputs.retirementPlanType}
                  onValueChange={(v) => updateInput('retirementPlanType', v as TaxInputs['retirementPlanType'])}
                >
                  <GSelectTrigger id="retirementPlan">
                    <GSelectValue placeholder="No retirement plan" />
                  </GSelectTrigger>
                  <GSelectContent>
                    <GSelectItem value="none">No Retirement Plan</GSelectItem>
                    <GSelectItem value="sep-ira">SEP-IRA</GSelectItem>
                    <GSelectItem value="solo-401k">Solo 401(k)</GSelectItem>
                    <GSelectItem value="traditional-ira">Traditional IRA</GSelectItem>
                  </GSelectContent>
                </GSelect>
              </div>

              {inputs.retirementPlanType !== 'none' && (
                <div>
                  <GLabel htmlFor="retirementAmount">Annual Contribution</GLabel>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                    <GInput
                      id="retirementAmount"
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 10,000"
                      className="pl-7"
                      value={inputs.retirementContribution || ''}
                      onChange={(e) => updateInput('retirementContribution', parseCurrencyInput(e.target.value))}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Retirement contributions reduce your taxable income.
                  </p>
                </div>
              )}
            </GCardContent>
          </GCard>
        </div>
      )}

      {/* Step 3: Prior Year */}
      {currentStep === 'prior-year' && (
        <div className="space-y-4">
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Prior Year Tax Info (for Safe Harbor)
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <GAlert>
                <Shield className="h-4 w-4" />
                <GAlertDescription className="text-sm">
                  <strong>Safe Harbor Rule:</strong> Pay at least 100% of last year&apos;s tax (110% if AGI &gt; $150k) or 90% of this year&apos;s tax to avoid underpayment penalties. We&apos;ll calculate the best option for you.
                </GAlertDescription>
              </GAlert>

              <div>
                <GLabel htmlFor="priorYearTax">Prior Year Total Tax (from Line 24, Form 1040)</GLabel>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <GInput
                    id="priorYearTax"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 12,000"
                    className="pl-7"
                    value={inputs.priorYearTax || ''}
                    onChange={(e) => updateInput('priorYearTax', parseCurrencyInput(e.target.value))}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Find this on your {TAX_YEAR - 1} Form 1040, Line 24 (Total Tax).
                </p>
              </div>

              <div>
                <GLabel htmlFor="priorYearAGI">Prior Year Adjusted Gross Income (AGI)</GLabel>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <GInput
                    id="priorYearAGI"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 80,000"
                    className="pl-7"
                    value={inputs.priorYearAGI || ''}
                    onChange={(e) => updateInput('priorYearAGI', parseCurrencyInput(e.target.value))}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Form 1040, Line 11. If over $150k, the safe harbor threshold increases to 110%.
                </p>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}

      {/* Step 4: Results */}
      {currentStep === 'results' && results && (
        <div className="space-y-4">
          {/* Top Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <GCard>
              <GCardContent className="p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">Total Annual Tax</p>
                <p className="text-lg font-bold text-foreground">{formatCurrency(results.totalAnnualTax)}</p>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">Quarterly Payment</p>
                <p className="text-lg font-bold text-primary">{formatCurrency(results.safeHarbor.requiredQuarterly)}</p>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">Effective Rate</p>
                <p className="text-lg font-bold text-foreground">{formatPercent(results.effectiveRate)}</p>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">Safe Harbor</p>
                <GBadge variant="default" className="text-xs">
                  <Shield className="h-3 w-3 mr-1" />
                  {results.safeHarbor.recommendedMethod === 'prior-year' ? 'Prior Year' : 'Current Year'}
                </GBadge>
              </GCardContent>
            </GCard>
          </div>

          {/* Safe Harbor Alert */}
          <GAlert>
            <Shield className="h-4 w-4" />
            <GAlertDescription className="text-sm">
              {results.safeHarbor.explanation}
            </GAlertDescription>
          </GAlert>

          {/* Result Tabs */}
          <GTabs value={resultTab} onValueChange={setResultTab}>
            <GTabsList className="w-full flex">
              <GTabsTrigger value="schedule" className="flex-1 text-xs">Schedule</GTabsTrigger>
              <GTabsTrigger value="breakdown" className="flex-1 text-xs">Breakdown</GTabsTrigger>
              <GTabsTrigger value="scenarios" className="flex-1 text-xs">Scenarios</GTabsTrigger>
              <GTabsTrigger value="math" className="flex-1 text-xs">Show Math</GTabsTrigger>
            </GTabsList>

            {/* Payment Schedule Tab */}
            <GTabsContent value="schedule">
              <GCard>
                <GCardHeader className="pb-3">
                  <GCardTitle className="text-base flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    {TAX_YEAR} Quarterly Payment Schedule
                  </GCardTitle>
                </GCardHeader>
                <GCardContent>
                  <div className="space-y-3">
                    {results.quarterlySchedule.map((q) => (
                      <div key={q.quarter} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary">{q.quarter}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{q.dueDate}</p>
                          <p className="text-xs text-muted-foreground">{q.period}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-base font-bold text-primary">{formatCurrency(q.amount)}</p>
                          {!inputs.useEqualDistribution && (
                            <p className="text-xs text-muted-foreground">Income: {formatCurrency(q.income)}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-card border border-border rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Total Quarterly Payments</span>
                      <span className="font-bold">{formatCurrency(results.quarterlySchedule.reduce((s, q) => s + q.amount, 0))}</span>
                    </div>
                    {results.w2Withholding > 0 && (
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-muted-foreground">+ W-2 Withholding</span>
                        <span>{formatCurrency(results.w2Withholding)}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={IRS_LINKS.directPay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      IRS Direct Pay
                    </a>
                    <a
                      href={IRS_LINKS.eftps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      EFTPS
                    </a>
                    <a
                      href={IRS_LINKS.form1040ES}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Form 1040-ES
                    </a>
                  </div>
                </GCardContent>
              </GCard>
            </GTabsContent>

            {/* Tax Breakdown Tab */}
            <GTabsContent value="breakdown">
              <GCard>
                <GCardHeader className="pb-3">
                  <GCardTitle className="text-base flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Tax Breakdown
                  </GCardTitle>
                </GCardHeader>
                <GCardContent className="space-y-4">
                  {/* Income Summary */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Income</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">1099 Gross Income</span>
                        <span>{formatCurrency(results.grossIncome)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Business Deductions</span>
                        <span className="text-destructive">-{formatCurrency(results.totalBusinessDeductions)}</span>
                      </div>
                      {results.retirementDeduction > 0 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Retirement Deduction</span>
                          <span className="text-destructive">-{formatCurrency(results.retirementDeduction)}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-medium border-t border-border pt-1">
                        <span>Net SE Income</span>
                        <span>{formatCurrency(results.netSEIncome)}</span>
                      </div>
                    </div>
                  </div>

                  {/* SE Tax */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Self-Employment Tax</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Social Security (12.4%)</span>
                        <span>{formatCurrency(results.seTax.socialSecurity)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Medicare (2.9%)</span>
                        <span>{formatCurrency(results.seTax.medicare)}</span>
                      </div>
                      {results.seTax.additionalMedicare > 0 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Additional Medicare (0.9%)</span>
                          <span>{formatCurrency(results.seTax.additionalMedicare)}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-medium border-t border-border pt-1">
                        <span>Total SE Tax</span>
                        <span>{formatCurrency(results.seTax.total)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Federal Tax Brackets */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Federal Income Tax Brackets</h4>
                    <div className="space-y-1">
                      {results.federalTax.brackets.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <GBadge variant="outline" className="text-xs w-12 justify-center">
                            {(b.rate * 100).toFixed(0)}%
                          </GBadge>
                          <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-primary h-full rounded-full"
                              style={{ width: `${Math.min(100, (b.taxableInBracket / results.federalTax.taxableIncome) * 100)}%` }}
                            />
                          </div>
                          <span className="text-muted-foreground text-xs w-20 text-right">{formatCurrency(b.taxForBracket)}</span>
                        </div>
                      ))}
                      <div className="flex justify-between font-medium border-t border-border pt-1 text-sm">
                        <span>Federal Income Tax</span>
                        <span>{formatCurrency(results.federalTax.totalTax)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Totals */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>SE Tax</span>
                        <span>{formatCurrency(results.seTax.total)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Federal Income Tax</span>
                        <span>{formatCurrency(results.federalTax.totalTax)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-base border-t border-primary/20 pt-1">
                        <span>Total Tax</span>
                        <span>{formatCurrency(results.totalAnnualTax)}</span>
                      </div>
                      {results.w2Withholding > 0 && (
                        <>
                          <div className="flex justify-between text-muted-foreground">
                            <span>W-2 Withholding</span>
                            <span>-{formatCurrency(results.w2Withholding)}</span>
                          </div>
                          <div className="flex justify-between font-bold">
                            <span>Remaining Due</span>
                            <span className="text-primary">{formatCurrency(results.remainingTaxDue)}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Rates */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-2 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground">Effective</p>
                      <p className="font-bold">{formatPercent(results.effectiveRate)}</p>
                    </div>
                    <div className="p-2 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground">Marginal</p>
                      <p className="font-bold">{formatPercent(results.marginalRate)}</p>
                    </div>
                    <div className="p-2 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground">SE Rate</p>
                      <p className="font-bold">{formatPercent(results.selfEmploymentRate)}</p>
                    </div>
                  </div>

                  {/* Retirement Impact */}
                  {results.retirementImpact && (
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                      <h4 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                        <PiggyBank className="h-4 w-4 text-green-600" />
                        Retirement Contribution Impact
                      </h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">{results.retirementImpact.planType} Contribution</span>
                          <span>{formatCurrency(results.retirementImpact.contributionAmount)}</span>
                        </div>
                        <div className="flex justify-between text-green-600 font-medium">
                          <span>Annual Tax Savings</span>
                          <span>{formatCurrency(results.retirementImpact.taxSavingsAnnual)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Effective Cost of Contributing</span>
                          <span>{formatCurrency(results.retirementImpact.effectiveContributionCost)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </GCardContent>
              </GCard>
            </GTabsContent>

            {/* Scenarios Tab */}
            <GTabsContent value="scenarios">
              <GCard>
                <GCardHeader className="pb-3">
                  <GCardTitle className="text-base flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    What-If Scenarios
                  </GCardTitle>
                </GCardHeader>
                <GCardContent>
                  <div className="space-y-3">
                    {scenarios.map((s) => (
                      <div
                        key={s.name}
                        className={`p-3 rounded-lg border ${s.name === 'base' ? 'border-primary bg-primary/5' : 'border-border bg-muted'}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold">{s.label}</span>
                          {s.name === 'base' && <GBadge variant="default" className="text-xs">Current</GBadge>}
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-sm">
                          <div>
                            <p className="text-xs text-muted-foreground">Income</p>
                            <p className="font-medium">{formatCurrency(s.results.grossIncome)}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Annual Tax</p>
                            <p className="font-medium">{formatCurrency(s.results.totalAnnualTax)}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Quarterly</p>
                            <p className="font-bold text-primary">{formatCurrency(s.results.safeHarbor.requiredQuarterly)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Scenarios show how income changes affect your quarterly payments. Use the conservative scenario if income is uncertain.
                  </p>
                </GCardContent>
              </GCard>
            </GTabsContent>

            {/* Show Math Tab */}
            <GTabsContent value="math">
              <GCard>
                <GCardHeader className="pb-3">
                  <GCardTitle className="text-base flex items-center gap-2">
                    <Eye className="h-4 w-4 text-primary" />
                    Calculation Steps
                  </GCardTitle>
                </GCardHeader>
                <GCardContent>
                  <div className="space-y-3">
                    {mathSteps.map((step, i) => (
                      <div key={i} className="p-3 bg-muted rounded-lg">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <p className="text-sm font-medium">{step.label}</p>
                            <p className="text-xs text-muted-foreground font-mono mt-0.5">{step.formula}</p>
                            {step.explanation && (
                              <p className="text-xs text-muted-foreground mt-1">{step.explanation}</p>
                            )}
                          </div>
                          <span className="text-sm font-bold text-primary whitespace-nowrap">{step.result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </GCardContent>
              </GCard>
            </GTabsContent>
          </GTabs>

          {/* Disclaimer */}
          <GAlert>
            <AlertTriangle className="h-4 w-4" />
            <GAlertDescription className="text-xs">
              <strong>Disclaimer:</strong> This is an educational estimate for {TAX_YEAR} federal taxes only. It does not include state taxes, AMT, or all credits/deductions. Consult a qualified tax professional before making tax decisions. Verify with{' '}
              <a href={IRS_LINKS.pub505} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IRS Publication 505</a>
              {' '}and{' '}
              <a href={IRS_LINKS.form1040ES} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Form 1040-ES</a>.
            </GAlertDescription>
          </GAlert>
        </div>
      )}

      {/* Navigation & Actions */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <div>
          {canGoPrev && currentStep !== 'results' && (
            <GButton variant="outline" onClick={goPrev} className="gap-1">
              <ChevronLeft className="h-4 w-4" />
              Back
            </GButton>
          )}
          {currentStep === 'results' && (
            <GButton variant="outline" onClick={() => setCurrentStep('income')} className="gap-1">
              <RotateCcw className="h-4 w-4" />
              New Calculation
            </GButton>
          )}
        </div>

        <div className="flex gap-2">
          {currentStep === 'results' && results && (
            <>
              <GButton variant="outline" onClick={handleCopy} className="gap-1">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied' : 'Copy'}
              </GButton>
              <GButton variant="outline" onClick={handleExport} className="gap-1">
                <Download className="h-4 w-4" />
                Export
              </GButton>
            </>
          )}
          {currentStep !== 'results' && (
            <GButton
              onClick={goNext}
              disabled={currentStep === 'income' && !isIncomeValid}
              className="gap-1"
            >
              {currentStep === 'prior-year' ? (
                <>
                  {isCalculating ? (
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Calculator className="h-4 w-4" />
                  )}
                  Calculate
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </GButton>
          )}
        </div>
      </div>
    </div>
  )
}
