"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, DollarSign, Home, Percent, TrendingUp,
  BarChart3, Shield, AlertTriangle, CreditCard, Calendar, PiggyBank,
  CheckCircle, Building2
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type {
  HomeAffordabilityResult, MonthlyBreakdown, AffordabilityRating,
  PriceRange, AmortizationSummary, YearlyCost
} from "@/types/calculator-types/home-affordability.types"

export function HomeAffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState("")
  const [monthlyDebts, setMonthlyDebts] = useState("")
  const [downPaymentPercent, setDownPaymentPercent] = useState("20")
  const [interestRate, setInterestRate] = useState("6.75")
  const [loanTerm, setLoanTerm] = useState("30")
  const [propertyTaxRate, setPropertyTaxRate] = useState("1.1")
  const [homeInsuranceAnnual, setHomeInsuranceAnnual] = useState("1500")
  const [hoaMonthly, setHoaMonthly] = useState("0")

  const [result, setResult] = useState<HomeAffordabilityResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const calculateAffordability = () => {
    if (!annualIncome) return
    setIsCalculating(true)

    setTimeout(() => {
      const income = Number.parseFloat(annualIncome) || 0
      const monthlyIncome = income / 12
      const debts = Number.parseFloat(monthlyDebts) || 0
      const downPct = (Number.parseFloat(downPaymentPercent) || 20) / 100
      const rate = (Number.parseFloat(interestRate) || 6.75) / 100
      const termYears = Number.parseInt(loanTerm) || 30
      const taxRate = (Number.parseFloat(propertyTaxRate) || 1.1) / 100
      const insuranceAnnual = Number.parseFloat(homeInsuranceAnnual) || 1500
      const hoa = Number.parseFloat(hoaMonthly) || 0

      // Max back-end DTI: 43% (conventional), we use 36% for comfortable
      const maxDTI = 0.43
      const maxTotalMonthlyDebt = monthlyIncome * maxDTI
      const availableForHousing = maxTotalMonthlyDebt - debts

      // Monthly rate and number of payments
      const monthlyRate = rate / 12
      const numPayments = termYears * 12

      // Work backwards from available housing payment to max home price
      // Monthly housing = P&I + Tax + Insurance + PMI + HOA
      // P&I = Loan × [r(1+r)^n] / [(1+r)^n - 1]
      // We need to iterate since tax and PMI depend on home price

      let maxPrice = 0
      let bestBreakdown: MonthlyBreakdown | null = null

      // Binary search for max home price
      let low = 50000
      let high = 3000000

      for (let iter = 0; iter < 50; iter++) {
        const mid = (low + high) / 2
        const loan = mid * (1 - downPct)
        const monthlyTax = (mid * taxRate) / 12
        const monthlyInsurance = insuranceAnnual / 12
        const monthlyPMI = downPct < 0.20 ? (loan * 0.005) / 12 : 0

        // P&I calculation
        const pi = monthlyRate > 0
          ? loan * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
          : loan / numPayments

        const totalMonthly = pi + monthlyTax + monthlyInsurance + monthlyPMI + hoa

        if (totalMonthly <= availableForHousing) {
          maxPrice = mid
          const interestPortion = loan * monthlyRate
          bestBreakdown = {
            principal: Number.parseFloat((pi - interestPortion).toFixed(2)),
            interest: Number.parseFloat(interestPortion.toFixed(2)),
            propertyTax: Number.parseFloat(monthlyTax.toFixed(2)),
            homeInsurance: Number.parseFloat(monthlyInsurance.toFixed(2)),
            pmi: Number.parseFloat(monthlyPMI.toFixed(2)),
            hoa,
            totalPayment: Number.parseFloat(totalMonthly.toFixed(2))
          }
          low = mid
        } else {
          high = mid
        }
      }

      maxPrice = Math.round(maxPrice / 1000) * 1000 // Round to nearest $1K
      const loanAmount = maxPrice * (1 - downPct)
      const downPaymentAmount = maxPrice * downPct

      // Recalculate final breakdown
      const finalPI = monthlyRate > 0
        ? loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
        : loanAmount / numPayments
      const finalTax = (maxPrice * taxRate) / 12
      const finalInsurance = insuranceAnnual / 12
      const finalPMI = downPct < 0.20 ? (loanAmount * 0.005) / 12 : 0
      const totalMonthlyPayment = finalPI + finalTax + finalInsurance + finalPMI + hoa
      const firstInterest = loanAmount * monthlyRate

      const monthlyBreakdown: MonthlyBreakdown = {
        principal: Number.parseFloat((finalPI - firstInterest).toFixed(2)),
        interest: Number.parseFloat(firstInterest.toFixed(2)),
        propertyTax: Number.parseFloat(finalTax.toFixed(2)),
        homeInsurance: Number.parseFloat(finalInsurance.toFixed(2)),
        pmi: Number.parseFloat(finalPMI.toFixed(2)),
        hoa,
        totalPayment: Number.parseFloat(totalMonthlyPayment.toFixed(2))
      }

      // DTI ratios
      const frontEndDTI = monthlyIncome > 0 ? (totalMonthlyPayment / monthlyIncome) * 100 : 0
      const backEndDTI = monthlyIncome > 0 ? ((totalMonthlyPayment + debts) / monthlyIncome) * 100 : 0

      // Rating
      const getAffordabilityRating = (): AffordabilityRating => {
        if (backEndDTI <= 28) return { label: "Very Comfortable", color: "text-green-500", description: "Well within your means. Strong financial cushion." }
        if (backEndDTI <= 36) return { label: "Comfortable", color: "text-blue-500", description: "Healthy debt-to-income ratio. Good financial position." }
        if (backEndDTI <= 43) return { label: "Stretched", color: "text-yellow-500", description: "At the upper limit. Less room for unexpected expenses." }
        return { label: "Overextended", color: "text-red-500", description: "Above recommended DTI. High financial risk." }
      }

      // Closing costs (~2-5% of home price)
      const closingCosts = Math.round(maxPrice * 0.03)
      const totalCashNeeded = downPaymentAmount + closingCosts

      // Price ranges at different comfort levels
      const calcMonthlyForPrice = (price: number): number => {
        const l = price * (1 - downPct)
        const pi = monthlyRate > 0 ? l * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1) : l / numPayments
        const tax = (price * taxRate) / 12
        const ins = insuranceAnnual / 12
        const pmi = downPct < 0.20 ? (l * 0.005) / 12 : 0
        return pi + tax + ins + pmi + hoa
      }

      const priceRanges: PriceRange[] = [
        { label: "Conservative", homePrice: Math.round(maxPrice * 0.75 / 1000) * 1000, monthlyPayment: 0, dti: 0, comfort: "Very Safe" },
        { label: "Comfortable", homePrice: Math.round(maxPrice * 0.85 / 1000) * 1000, monthlyPayment: 0, dti: 0, comfort: "Recommended" },
        { label: "Maximum", homePrice: maxPrice, monthlyPayment: 0, dti: 0, comfort: "Upper Limit" },
        { label: "Stretch", homePrice: Math.round(maxPrice * 1.10 / 1000) * 1000, monthlyPayment: 0, dti: 0, comfort: "Risky" },
      ].map(r => {
        const mp = calcMonthlyForPrice(r.homePrice)
        const dti = monthlyIncome > 0 ? ((mp + debts) / monthlyIncome) * 100 : 0
        return { ...r, monthlyPayment: Math.round(mp), dti: Number.parseFloat(dti.toFixed(1)) }
      })

      // Amortization summary
      const totalPaid = finalPI * numPayments
      const totalInterest = totalPaid - loanAmount
      const payoffYear = new Date().getFullYear() + termYears
      const amortizationSummary: AmortizationSummary = {
        totalPaid: Math.round(totalPaid),
        totalInterest: Math.round(totalInterest),
        totalPrincipal: Math.round(loanAmount),
        payoffDate: `${payoffYear}`
      }

      // Yearly cost breakdown
      const yearlyCostBreakdown: YearlyCost[] = [
        { category: "Principal & Interest", monthly: Math.round(finalPI), annual: Math.round(finalPI * 12), percentage: 0, color: "bg-blue-500" },
        { category: "Property Tax", monthly: Math.round(finalTax), annual: Math.round(finalTax * 12), percentage: 0, color: "bg-green-500" },
        { category: "Home Insurance", monthly: Math.round(finalInsurance), annual: Math.round(insuranceAnnual), percentage: 0, color: "bg-purple-500" },
        { category: "PMI", monthly: Math.round(finalPMI), annual: Math.round(finalPMI * 12), percentage: 0, color: "bg-orange-500" },
        { category: "HOA", monthly: hoa, annual: hoa * 12, percentage: 0, color: "bg-red-500" },
      ].filter(c => c.monthly > 0).map(c => ({
        ...c,
        percentage: totalMonthlyPayment > 0 ? (c.monthly / totalMonthlyPayment) * 100 : 0
      }))

      setResult({
        maxHomePrice: maxPrice,
        maxMonthlyPayment: Math.round(totalMonthlyPayment),
        downPaymentAmount: Math.round(downPaymentAmount),
        loanAmount: Math.round(loanAmount),
        monthlyBreakdown,
        dtiRatio: Number.parseFloat(backEndDTI.toFixed(1)),
        frontEndDTI: Number.parseFloat(frontEndDTI.toFixed(1)),
        backEndDTI: Number.parseFloat(backEndDTI.toFixed(1)),
        affordabilityRating: getAffordabilityRating(),
        closingCosts,
        totalCashNeeded: Math.round(totalCashNeeded),
        priceRanges,
        amortizationSummary,
        yearlyCostBreakdown: yearlyCostBreakdown
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `Home Affordability Analysis`,
      `===========================`,
      `Max Home Price: $${result.maxHomePrice.toLocaleString()}`,
      `Monthly Payment: $${result.maxMonthlyPayment.toLocaleString()}`,
      `Down Payment: $${result.downPaymentAmount.toLocaleString()} (${downPaymentPercent}%)`,
      `Loan Amount: $${result.loanAmount.toLocaleString()}`,
      `DTI Ratio: ${result.dtiRatio}%`,
      ``,
      `Cash Needed: $${result.totalCashNeeded.toLocaleString()} (down payment + closing)`,
      `Total Interest Over Loan: $${result.amortizationSummary.totalInterest.toLocaleString()}`,
      ``,
      `Generated by FastTools Home Affordability Calculator`
    ]
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const fmt = (n: number) => `$${n.toLocaleString()}`

  return (
    <div className="space-y-8">
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Home className="h-6 w-6 text-foreground" />
            </div>
            Home Affordability Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Find out how much house you can afford based on your income, debts, down payment & interest rate
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Core Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="annualIncome" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <DollarSign className="h-4 w-4" /> Annual Gross Income
              </GLabel>
              <GInput id="annualIncome" type="number" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} placeholder="e.g., 85000" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              <div className="text-xs text-muted-foreground">Pre-tax household income</div>
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="monthlyDebts" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <CreditCard className="h-4 w-4" /> Monthly Debt Payments
              </GLabel>
              <GInput id="monthlyDebts" type="number" value={monthlyDebts} onChange={(e) => setMonthlyDebts(e.target.value)} placeholder="e.g., 500" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              <div className="text-xs text-muted-foreground">Car loans, student loans, credit cards, etc.</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="downPaymentPercent" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <PiggyBank className="h-4 w-4" /> Down Payment (%)
              </GLabel>
              <GInput id="downPaymentPercent" type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(e.target.value)} placeholder="20" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              <div className="text-xs text-muted-foreground">&lt;20% requires PMI</div>
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="interestRate" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <Percent className="h-4 w-4" /> Interest Rate (%)
              </GLabel>
              <GInput id="interestRate" type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="6.75" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="loanTerm" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <Calendar className="h-4 w-4" /> Loan Term (years)
              </GLabel>
              <div className="flex gap-2">
                {["15", "20", "30"].map(t => (
                  <button type="button" key={t} onClick={() => setLoanTerm(t)} aria-pressed={loanTerm === t} className={`flex-1 h-10 sm:h-12 rounded-lg border text-sm font-semibold transition-all ${loanTerm === t ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"}`}>
                    {t}yr
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced */}
          <button onClick={() => setShowAdvanced(!showAdvanced)} className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5">
            {showAdvanced ? "Hide" : "Show"} Tax, Insurance & HOA
            <svg className={`h-4 w-4 transition-transform ${showAdvanced ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>

          {showAdvanced && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Property Tax Rate (%)</GLabel>
                <GInput type="number" step="0.01" value={propertyTaxRate} onChange={(e) => setPropertyTaxRate(e.target.value)} placeholder="1.1" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                <div className="text-xs text-muted-foreground">US avg: 1.1%</div>
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Home Insurance ($/year)</GLabel>
                <GInput type="number" value={homeInsuranceAnnual} onChange={(e) => setHomeInsuranceAnnual(e.target.value)} placeholder="1500" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">HOA Fees ($/month)</GLabel>
                <GInput type="number" value={hoaMonthly} onChange={(e) => setHoaMonthly(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              </div>
            </div>
          )}

          <GButton onClick={calculateAffordability} disabled={isCalculating || !annualIncome}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white">
            {isCalculating ? <><LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Calculating...</> : <><Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> How Much House Can I Afford?</>}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Rating */}
          {(() => {
            const bg = result.affordabilityRating.label.includes("Very") ? "bg-green-500/10 border-green-500/30" : result.affordabilityRating.label === "Comfortable" ? "bg-blue-500/10 border-blue-500/30" : result.affordabilityRating.label === "Stretched" ? "bg-yellow-500/10 border-yellow-500/30" : "bg-red-500/10 border-red-500/30"
            const Icon = result.dtiRatio <= 36 ? Shield : AlertTriangle
            return (
              <GCard className={`shadow-lg border animate-fade-in-up ${bg}`}>
                <GCardContent className="py-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <Icon className={`h-8 w-8 ${result.affordabilityRating.color}`} />
                      <div>
                        <div className={`text-2xl font-bold ${result.affordabilityRating.color}`}>{result.affordabilityRating.label}</div>
                        <div className="text-sm text-muted-foreground">{result.affordabilityRating.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Debt-to-Income</div>
                      <div className={`text-2xl font-bold ${result.dtiRatio <= 36 ? "text-green-500" : result.dtiRatio <= 43 ? "text-yellow-500" : "text-red-500"}`}>{result.dtiRatio}%</div>
                      <div className="text-xs text-muted-foreground">Recommended: &lt;36%</div>
                    </div>
                  </div>
                </GCardContent>
              </GCard>
            )
          })()}

          {/* Max Price */}
          <GCard className="shadow-lg border-border animate-fade-in-up bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><Home className="h-4 w-4 text-foreground" /></div>
                You Can Afford
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="text-center p-6 rounded-xl bg-card border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">Maximum Home Price</div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground">{fmt(result.maxHomePrice)}</div>
                <div className="text-sm text-muted-foreground mt-2">{fmt(result.maxMonthlyPayment)}/month total payment</div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-card border border-blue-700 text-center">
                  <PiggyBank className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{fmt(result.downPaymentAmount)}</div>
                  <div className="text-xs text-muted-foreground">Down Payment</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-green-700 text-center">
                  <Building2 className="h-4 w-4 text-green-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{fmt(result.loanAmount)}</div>
                  <div className="text-xs text-muted-foreground">Loan Amount</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-purple-700 text-center">
                  <DollarSign className="h-4 w-4 text-purple-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{fmt(result.closingCosts)}</div>
                  <div className="text-xs text-muted-foreground">Est. Closing Costs</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-primary text-center">
                  <CreditCard className="h-4 w-4 text-primary mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{fmt(result.totalCashNeeded)}</div>
                  <div className="text-xs text-muted-foreground">Total Cash Needed</div>
                </div>
              </div>

              {/* Monthly Breakdown */}
              <div className="p-3 bg-muted rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-heading-accent mb-2 flex items-center gap-1.5">
                  <BarChart3 className="h-3.5 w-3.5" /> Monthly Payment Breakdown
                </h4>
                <div className="space-y-1.5">
                  {result.yearlyCostBreakdown.map(c => (
                    <div key={c.category} className="flex items-center gap-2 text-xs">
                      <span className="w-32 text-foreground">{c.category}</span>
                      <div className="flex-1 bg-border rounded-full h-2">
                        <div className={`${c.color} h-2 rounded-full`} style={{ width: `${c.percentage}%` }} />
                      </div>
                      <span className="w-20 text-right font-medium text-foreground">{fmt(c.monthly)}/mo</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Loan Summary */}
              <div className="p-3 bg-muted rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-heading-accent mb-2">Loan Summary ({loanTerm}-Year)</h4>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div>
                    <div className="text-lg font-bold text-foreground">{fmt(result.amortizationSummary.totalPaid)}</div>
                    <div className="text-muted-foreground">Total Paid</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-red-400">{fmt(result.amortizationSummary.totalInterest)}</div>
                    <div className="text-muted-foreground">Total Interest</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">{result.amortizationSummary.payoffDate}</div>
                    <div className="text-muted-foreground">Payoff Year</div>
                  </div>
                </div>
              </div>

              <GButton onClick={copyResult} className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card">
                {copied ? <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</> : <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Results</>}
              </GButton>
            </GCardContent>
          </GCard>

          {/* Price Ranges */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><TrendingUp className="h-4 w-4 text-foreground" /></div>
                Home Price Ranges
              </GCardTitle>
              <GCardDescription className="text-sm text-muted-foreground">
                Different price points at your income level
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Level</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Home Price</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Monthly</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">DTI</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Comfort</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.priceRanges.map(r => {
                      const isMax = r.label === "Maximum"
                      return (
                        <tr key={r.label} className={`border-b border-border ${isMax ? "bg-primary/5" : ""}`}>
                          <td className="py-2 px-2 font-medium text-foreground">
                            {r.label}
                            {isMax && <span className="ml-1 text-[10px] text-primary">YOUR MAX</span>}
                          </td>
                          <td className="py-2 px-2 text-right text-heading-accent font-semibold">{fmt(r.homePrice)}</td>
                          <td className="py-2 px-2 text-right text-foreground">{fmt(r.monthlyPayment)}</td>
                          <td className="py-2 px-2 text-right text-foreground">{r.dti}%</td>
                          <td className="py-2 px-2 text-right">
                            <span className={`text-[10px] font-medium ${r.comfort === "Very Safe" || r.comfort === "Recommended" ? "text-green-500" : r.comfort === "Upper Limit" ? "text-yellow-500" : "text-red-500"}`}>
                              {r.comfort}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
