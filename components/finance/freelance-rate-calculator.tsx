"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, DollarSign, Clock, Briefcase, TrendingUp,
  Shield, Heart, Monitor, Building2, PiggyBank, Receipt, Target,
  BarChart3, ArrowUpRight, Percent, Calendar, Coffee
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type { FreelanceRateResult, RateComparisonEntry } from "@/types/calculator-types/freelance-rate-calculator.types"

export function FreelanceRateCalculator() {
  // Core inputs
  const [desiredSalary, setDesiredSalary] = useState("")
  const [hoursPerWeek, setHoursPerWeek] = useState("40")
  const [billablePercent, setBillablePercent] = useState("70")
  const [vacationWeeks, setVacationWeeks] = useState("3")
  const [profitMargin, setProfitMargin] = useState("15")

  // Tax inputs
  const [incomeTaxRate, setIncomeTaxRate] = useState("22")
  const [selfEmploymentTaxRate, setSelfEmploymentTaxRate] = useState("15.3")
  const [stateTaxRate, setStateTaxRate] = useState("5")

  // Expense inputs
  const [healthInsurance, setHealthInsurance] = useState("500")
  const [retirement, setRetirement] = useState("500")
  const [software, setSoftware] = useState("200")
  const [equipment, setEquipment] = useState("100")
  const [office, setOffice] = useState("200")
  const [otherExpenses, setOtherExpenses] = useState("100")

  const [result, setResult] = useState<FreelanceRateResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const calculateRate = () => {
    if (!desiredSalary) return
    setIsCalculating(true)

    setTimeout(() => {
      const salary = Number.parseFloat(desiredSalary)
      const weeklyHours = Number.parseFloat(hoursPerWeek) || 40
      const billablePct = (Number.parseFloat(billablePercent) || 70) / 100
      const vacWeeks = Number.parseFloat(vacationWeeks) || 3
      const margin = (Number.parseFloat(profitMargin) || 15) / 100

      const incomeTaxPct = (Number.parseFloat(incomeTaxRate) || 22) / 100
      const seTaxPct = (Number.parseFloat(selfEmploymentTaxRate) || 15.3) / 100
      const stateTaxPct = (Number.parseFloat(stateTaxRate) || 5) / 100

      const monthlyHealthInsurance = Number.parseFloat(healthInsurance) || 0
      const monthlyRetirement = Number.parseFloat(retirement) || 0
      const monthlySoftware = Number.parseFloat(software) || 0
      const monthlyEquipment = Number.parseFloat(equipment) || 0
      const monthlyOffice = Number.parseFloat(office) || 0
      const monthlyOther = Number.parseFloat(otherExpenses) || 0

      // Working days and hours
      const workingWeeksPerYear = 52 - vacWeeks
      const workingDaysPerYear = workingWeeksPerYear * 5
      const totalHoursPerYear = workingWeeksPerYear * weeklyHours
      const billableHoursPerYear = totalHoursPerYear * billablePct
      const billableHoursPerMonth = billableHoursPerYear / 12
      const nonBillableHoursPerYear = totalHoursPerYear - billableHoursPerYear

      // Annual expenses
      const expenseBreakdown = {
        healthInsurance: monthlyHealthInsurance * 12,
        retirement: monthlyRetirement * 12,
        software: monthlySoftware * 12,
        equipment: monthlyEquipment * 12,
        office: monthlyOffice * 12,
        other: monthlyOther * 12,
        total: (monthlyHealthInsurance + monthlyRetirement + monthlySoftware + monthlyEquipment + monthlyOffice + monthlyOther) * 12
      }

      // Tax breakdown on desired salary
      const incomeTax = salary * incomeTaxPct
      const selfEmploymentTax = salary * seTaxPct
      const stateTax = salary * stateTaxPct
      const totalTax = incomeTax + selfEmploymentTax + stateTax
      const effectiveTaxRate = (totalTax / salary) * 100

      const taxBreakdown = {
        incomeTax: Number.parseFloat(incomeTax.toFixed(2)),
        selfEmploymentTax: Number.parseFloat(selfEmploymentTax.toFixed(2)),
        stateTax: Number.parseFloat(stateTax.toFixed(2)),
        totalTax: Number.parseFloat(totalTax.toFixed(2)),
        effectiveTaxRate: Number.parseFloat(effectiveTaxRate.toFixed(1))
      }

      // Total needed = Salary + Taxes + Expenses + Profit Margin
      const totalNeeded = salary + totalTax + expenseBreakdown.total
      const withMargin = totalNeeded * (1 + margin)
      const profitMarginAmount = withMargin - totalNeeded

      // Hourly rate = Total needed / Billable hours
      const hourlyRate = withMargin / billableHoursPerYear
      const dailyRate = hourlyRate * (weeklyHours / 5)
      const weeklyRate = hourlyRate * (weeklyHours * billablePct)
      const monthlyRate = withMargin / 12

      const takeHomePay = salary
      const effectiveHourlyAfterTax = salary / billableHoursPerYear

      // Rate comparison at different margins
      const rateComparison: RateComparisonEntry[] = [
        { label: "Minimum (0%)", hourly: totalNeeded / billableHoursPerYear, monthly: totalNeeded / 12, annual: totalNeeded },
        { label: "Conservative (10%)", hourly: (totalNeeded * 1.10) / billableHoursPerYear, monthly: (totalNeeded * 1.10) / 12, annual: totalNeeded * 1.10 },
        { label: "Standard (15%)", hourly: (totalNeeded * 1.15) / billableHoursPerYear, monthly: (totalNeeded * 1.15) / 12, annual: totalNeeded * 1.15 },
        { label: "Premium (25%)", hourly: (totalNeeded * 1.25) / billableHoursPerYear, monthly: (totalNeeded * 1.25) / 12, annual: totalNeeded * 1.25 },
        { label: "Expert (40%)", hourly: (totalNeeded * 1.40) / billableHoursPerYear, monthly: (totalNeeded * 1.40) / 12, annual: totalNeeded * 1.40 },
      ]

      setResult({
        hourlyRate: Number.parseFloat(hourlyRate.toFixed(2)),
        dailyRate: Number.parseFloat(dailyRate.toFixed(2)),
        weeklyRate: Number.parseFloat(weeklyRate.toFixed(2)),
        monthlyRate: Number.parseFloat(monthlyRate.toFixed(2)),
        annualGross: Number.parseFloat(withMargin.toFixed(2)),
        effectiveHourlyAfterTax: Number.parseFloat(effectiveHourlyAfterTax.toFixed(2)),
        totalAnnualExpenses: expenseBreakdown.total,
        totalAnnualTaxes: Number.parseFloat(totalTax.toFixed(2)),
        takeHomePay: salary,
        billableHoursPerYear: Math.round(billableHoursPerYear),
        billableHoursPerMonth: Number.parseFloat(billableHoursPerMonth.toFixed(1)),
        nonBillableHoursPerYear: Math.round(nonBillableHoursPerYear),
        workingDaysPerYear,
        vacationDaysPerYear: vacWeeks * 5,
        profitMarginAmount: Number.parseFloat(profitMarginAmount.toFixed(2)),
        taxBreakdown,
        expenseBreakdown,
        rateComparison
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `Freelance Hourly Rate Calculation`,
      `==================================`,
      `Recommended Hourly Rate: $${result.hourlyRate}`,
      `Daily Rate: $${result.dailyRate}`,
      `Monthly Rate: $${result.monthlyRate.toLocaleString()}`,
      `Annual Gross: $${result.annualGross.toLocaleString()}`,
      ``,
      `Take-Home Pay: $${result.takeHomePay.toLocaleString()}`,
      `Effective Hourly (after tax): $${result.effectiveHourlyAfterTax}`,
      `Billable Hours/Year: ${result.billableHoursPerYear}`,
      ``,
      `Generated by FastTools Freelance Hourly Rate Calculator`
    ]
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="space-y-8">
      {/* Main Calculator Card */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Briefcase className="h-6 w-6 text-foreground" />
            </div>
            Freelance Hourly Rate Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Calculate your ideal freelance rate based on desired income, taxes, expenses, and billable hours
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Core Inputs */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Target className="h-4 w-4" />
              Income Goal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                <GLabel htmlFor="desiredSalary" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <DollarSign className="h-4 w-4" />
                  Desired Annual Take-Home ($)
                </GLabel>
                <GInput
                  id="desiredSalary"
                  type="number"
                  value={desiredSalary}
                  onChange={(e) => setDesiredSalary(e.target.value)}
                  placeholder="e.g., 80000"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
                <div className="text-xs text-muted-foreground">What you want in your pocket after taxes & expenses</div>
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="hoursPerWeek" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Clock className="h-4 w-4" />
                  Hours Per Week
                </GLabel>
                <GInput
                  id="hoursPerWeek"
                  type="number"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(e.target.value)}
                  placeholder="40"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="billablePercent" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Percent className="h-4 w-4" />
                  Billable Hours (%)
                </GLabel>
                <GInput
                  id="billablePercent"
                  type="number"
                  value={billablePercent}
                  onChange={(e) => setBillablePercent(e.target.value)}
                  placeholder="70"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
                <div className="text-xs text-muted-foreground">Industry avg: 60-75%</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="vacationWeeks" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Calendar className="h-4 w-4" />
                  Vacation Weeks Per Year
                </GLabel>
                <GInput
                  id="vacationWeeks"
                  type="number"
                  value={vacationWeeks}
                  onChange={(e) => setVacationWeeks(e.target.value)}
                  placeholder="3"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="profitMargin" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <TrendingUp className="h-4 w-4" />
                  Profit Margin (%)
                </GLabel>
                <GInput
                  id="profitMargin"
                  type="number"
                  value={profitMargin}
                  onChange={(e) => setProfitMargin(e.target.value)}
                  placeholder="15"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
                <div className="text-xs text-muted-foreground">Buffer for growth, savings, dry spells</div>
              </div>
            </div>
          </div>

          {/* Toggle Advanced */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5"
          >
            {showAdvanced ? "Hide" : "Show"} Tax & Expense Details
            <svg className={`h-4 w-4 transition-transform ${showAdvanced ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showAdvanced && (
            <>
              {/* Tax Inputs */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
                  <Receipt className="h-4 w-4" />
                  Tax Rates
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <GLabel htmlFor="incomeTaxRate" className="text-sm font-semibold text-heading-accent">
                      Federal Income Tax (%)
                    </GLabel>
                    <GInput
                      id="incomeTaxRate"
                      type="number"
                      step="0.1"
                      value={incomeTaxRate}
                      onChange={(e) => setIncomeTaxRate(e.target.value)}
                      placeholder="22"
                      className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <GLabel htmlFor="selfEmploymentTaxRate" className="text-sm font-semibold text-heading-accent">
                      Self-Employment Tax (%)
                    </GLabel>
                    <GInput
                      id="selfEmploymentTaxRate"
                      type="number"
                      step="0.1"
                      value={selfEmploymentTaxRate}
                      onChange={(e) => setSelfEmploymentTaxRate(e.target.value)}
                      placeholder="15.3"
                      className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                    />
                    <div className="text-xs text-muted-foreground">US SE tax: 15.3% (SS + Medicare)</div>
                  </div>
                  <div className="space-y-2">
                    <GLabel htmlFor="stateTaxRate" className="text-sm font-semibold text-heading-accent">
                      State / Local Tax (%)
                    </GLabel>
                    <GInput
                      id="stateTaxRate"
                      type="number"
                      step="0.1"
                      value={stateTaxRate}
                      onChange={(e) => setStateTaxRate(e.target.value)}
                      placeholder="5"
                      className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Expense Inputs */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
                  <Coffee className="h-4 w-4" />
                  Monthly Business Expenses
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <GLabel htmlFor="healthInsurance" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                      <Heart className="h-3.5 w-3.5" /> Health Insurance
                    </GLabel>
                    <GInput
                      id="healthInsurance"
                      type="number"
                      value={healthInsurance}
                      onChange={(e) => setHealthInsurance(e.target.value)}
                      placeholder="500"
                      className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <GLabel htmlFor="retirement" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                      <PiggyBank className="h-3.5 w-3.5" /> Retirement
                    </GLabel>
                    <GInput
                      id="retirement"
                      type="number"
                      value={retirement}
                      onChange={(e) => setRetirement(e.target.value)}
                      placeholder="500"
                      className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <GLabel htmlFor="software" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                      <Monitor className="h-3.5 w-3.5" /> Software / Tools
                    </GLabel>
                    <GInput
                      id="software"
                      type="number"
                      value={software}
                      onChange={(e) => setSoftware(e.target.value)}
                      placeholder="200"
                      className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <GLabel htmlFor="equipment" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                      <Shield className="h-3.5 w-3.5" /> Equipment
                    </GLabel>
                    <GInput
                      id="equipment"
                      type="number"
                      value={equipment}
                      onChange={(e) => setEquipment(e.target.value)}
                      placeholder="100"
                      className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <GLabel htmlFor="office" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5" /> Office / Coworking
                    </GLabel>
                    <GInput
                      id="office"
                      type="number"
                      value={office}
                      onChange={(e) => setOffice(e.target.value)}
                      placeholder="200"
                      className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <GLabel htmlFor="otherExpenses" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                      <Receipt className="h-3.5 w-3.5" /> Other
                    </GLabel>
                    <GInput
                      id="otherExpenses"
                      type="number"
                      value={otherExpenses}
                      onChange={(e) => setOtherExpenses(e.target.value)}
                      placeholder="100"
                      className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Calculate Button */}
          <GButton
            onClick={calculateRate}
            disabled={isCalculating || !desiredSalary}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
          >
            {isCalculating ? (
              <>
                <LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Calculating Rate...
              </>
            ) : (
              <>
                <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Calculate My Hourly Rate
              </>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Primary Rate Display */}
          <GCard className="shadow-lg border-primary/20 animate-fade-in-up bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <DollarSign className="h-4 w-4 text-foreground" />
                </div>
                Your Recommended Rates
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              {/* Main Hourly Rate */}
              <div className="text-center p-6 rounded-xl bg-card border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">Recommended Hourly Rate</div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground">${result.hourlyRate}</div>
                <div className="text-sm text-muted-foreground mt-2">per billable hour</div>
              </div>

              {/* Rate Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-card border border-blue-700 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Hourly</div>
                  <div className="text-xl font-bold text-foreground">${result.hourlyRate}</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-green-700 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Daily (8hr)</div>
                  <div className="text-xl font-bold text-foreground">{formatCurrency(result.dailyRate)}</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-purple-700 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Monthly</div>
                  <div className="text-xl font-bold text-foreground">{formatCurrency(result.monthlyRate)}</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-primary text-center">
                  <div className="text-xs text-muted-foreground mb-1">Annual Gross</div>
                  <div className="text-xl font-bold text-foreground">{formatCurrency(result.annualGross)}</div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-1 mb-1">
                    <ArrowUpRight className="h-3.5 w-3.5 text-green-500" />
                    <span className="text-xs text-muted-foreground">Take-Home Pay</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">{formatCurrency(result.takeHomePay)}</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-1 mb-1">
                    <Clock className="h-3.5 w-3.5 text-blue-500" />
                    <span className="text-xs text-muted-foreground">Billable Hrs/Year</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">{result.billableHoursPerYear}</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-1 mb-1">
                    <DollarSign className="h-3.5 w-3.5 text-purple-500" />
                    <span className="text-xs text-muted-foreground">Effective $/hr</span>
                  </div>
                  <div className="text-lg font-bold text-foreground">${result.effectiveHourlyAfterTax}</div>
                  <div className="text-[10px] text-muted-foreground">after tax</div>
                </div>
              </div>

              {/* Copy Button */}
              <GButton
                onClick={copyResult}
                className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card"
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5" />
                    Copy Results
                  </>
                )}
              </GButton>
            </GCardContent>
          </GCard>

          {/* Cost Breakdown */}
          <GCard className="shadow-lg border-border animate-fade-in-up bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-4 w-4 text-foreground" />
                </div>
                Annual Cost Breakdown
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              {/* Visual Breakdown */}
              <div className="space-y-3">
                {[
                  { label: "Take-Home Pay", value: result.takeHomePay, color: "bg-green-500", icon: DollarSign },
                  { label: "Total Taxes", value: result.totalAnnualTaxes, color: "bg-red-500", icon: Receipt },
                  { label: "Business Expenses", value: result.totalAnnualExpenses, color: "bg-blue-500", icon: Briefcase },
                  { label: "Profit Margin", value: result.profitMarginAmount, color: "bg-purple-500", icon: TrendingUp },
                ].map((item) => {
                  const Icon = item.icon
                  const percentage = (item.value / result.annualGross) * 100
                  return (
                    <div key={item.label} className="space-y-1">
                      <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-1.5 text-foreground">
                          <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                          {item.label}
                        </span>
                        <span className="font-semibold text-foreground">
                          {formatCurrency(item.value)} <span className="text-xs text-muted-foreground">({percentage.toFixed(1)}%)</span>
                        </span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div
                          className={`${item.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Tax Details */}
              <div className="p-3 bg-muted rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-heading-accent mb-2 flex items-center gap-1.5">
                  <Receipt className="h-3.5 w-3.5" />
                  Tax Breakdown (Effective Rate: {result.taxBreakdown.effectiveTaxRate}%)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="flex justify-between text-xs p-2 bg-card rounded border border-border">
                    <span className="text-muted-foreground">Federal Income</span>
                    <span className="font-medium text-foreground">{formatCurrency(result.taxBreakdown.incomeTax)}</span>
                  </div>
                  <div className="flex justify-between text-xs p-2 bg-card rounded border border-border">
                    <span className="text-muted-foreground">Self-Employment</span>
                    <span className="font-medium text-foreground">{formatCurrency(result.taxBreakdown.selfEmploymentTax)}</span>
                  </div>
                  <div className="flex justify-between text-xs p-2 bg-card rounded border border-border">
                    <span className="text-muted-foreground">State / Local</span>
                    <span className="font-medium text-foreground">{formatCurrency(result.taxBreakdown.stateTax)}</span>
                  </div>
                </div>
              </div>

              {/* Expense Details */}
              <div className="p-3 bg-muted rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-heading-accent mb-2 flex items-center gap-1.5">
                  <Coffee className="h-3.5 w-3.5" />
                  Annual Expense Breakdown ({formatCurrency(result.totalAnnualExpenses)}/year)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { label: "Health Insurance", value: result.expenseBreakdown.healthInsurance, icon: Heart },
                    { label: "Retirement", value: result.expenseBreakdown.retirement, icon: PiggyBank },
                    { label: "Software", value: result.expenseBreakdown.software, icon: Monitor },
                    { label: "Equipment", value: result.expenseBreakdown.equipment, icon: Shield },
                    { label: "Office", value: result.expenseBreakdown.office, icon: Building2 },
                    { label: "Other", value: result.expenseBreakdown.other, icon: Receipt },
                  ].map((exp) => {
                    const Icon = exp.icon
                    return (
                      <div key={exp.label} className="flex justify-between text-xs p-2 bg-card rounded border border-border">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Icon className="h-3 w-3" />
                          {exp.label}
                        </span>
                        <span className="font-medium text-foreground">{formatCurrency(exp.value)}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Time Allocation */}
              <div className="p-3 bg-muted rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-heading-accent mb-2 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  Time Allocation
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="text-xs p-2 bg-card rounded border border-border text-center">
                    <div className="text-lg font-bold text-foreground">{result.workingDaysPerYear}</div>
                    <div className="text-muted-foreground">Working Days/Year</div>
                  </div>
                  <div className="text-xs p-2 bg-card rounded border border-border text-center">
                    <div className="text-lg font-bold text-foreground">{result.billableHoursPerYear}</div>
                    <div className="text-muted-foreground">Billable Hours</div>
                  </div>
                  <div className="text-xs p-2 bg-card rounded border border-border text-center">
                    <div className="text-lg font-bold text-foreground">{result.nonBillableHoursPerYear}</div>
                    <div className="text-muted-foreground">Non-Billable Hours</div>
                  </div>
                  <div className="text-xs p-2 bg-card rounded border border-border text-center">
                    <div className="text-lg font-bold text-foreground">{result.vacationDaysPerYear}</div>
                    <div className="text-muted-foreground">Vacation Days</div>
                  </div>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Rate Comparison Table */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-foreground" />
                </div>
                Rate Comparison by Profit Margin
              </GCardTitle>
              <GCardDescription className="text-sm text-muted-foreground">
                See how different profit margins affect your rates
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Margin Level</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Hourly</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Monthly</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Annual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.rateComparison.map((entry, i) => {
                      const isSelected = Math.abs(entry.hourly - result.hourlyRate) < 1
                      return (
                        <tr key={i} className={`border-b border-border ${isSelected ? "bg-primary/5" : ""}`}>
                          <td className="py-2 px-2 font-medium text-foreground">
                            {entry.label}
                            {isSelected && <span className="ml-1.5 text-[10px] text-primary font-semibold">YOURS</span>}
                          </td>
                          <td className="py-2 px-2 text-right text-heading-accent font-semibold">
                            ${entry.hourly.toFixed(2)}
                          </td>
                          <td className="py-2 px-2 text-right text-foreground">
                            {formatCurrency(entry.monthly)}
                          </td>
                          <td className="py-2 px-2 text-right text-foreground">
                            {formatCurrency(entry.annual)}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* Formula Display */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardContent className="py-4">
              <h4 className="text-xs font-semibold text-heading-accent mb-2">Formula Used</h4>
              <div className="space-y-1">
                <code className="block text-xs text-muted-foreground font-mono">
                  Annual Gross = (Desired Salary + Taxes + Expenses) × (1 + Profit Margin)
                </code>
                <code className="block text-xs text-muted-foreground font-mono">
                  Billable Hours = (52 - Vacation Weeks) × Hours/Week × Billable %
                </code>
                <code className="block text-xs text-muted-foreground font-mono">
                  Hourly Rate = Annual Gross ÷ Billable Hours Per Year
                </code>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
