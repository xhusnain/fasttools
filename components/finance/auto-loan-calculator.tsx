"use client"

import { useState, useEffect, useCallback } from "react"
import { GCard, GCardContent, GCardHeader, GCardTitle, GCardDescription } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, Share2, TrendingUp, PieChart, BarChart3,
  Calendar, Car, DollarSign, Percent, Clock, Target, Info,
  ChevronDown, ChevronUp, Banknote, Shield, Fuel,
  CreditCard, Scale, Zap
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

import type {
  VehicleType, DownPaymentType, CreditScoreTier, ActiveTab,
  AutoLoanResult, TermComparison, AmortizationEntry, YearlyEntry
} from "@/types/calculator-types/auto-loan-calculator.types"
import {
  CREDIT_SCORE_RATES, LOAN_TERMS, US_STATES_TAX,
  DEFAULT_VEHICLE_PRICE, DEFAULT_DOWN_PAYMENT, DEFAULT_LOAN_TERM,
  DEFAULT_STATE, DEFAULT_TITLE_REG_FEES, DEFAULT_CREDIT_SCORE,
  MARKET_AVERAGES
} from "@/constants/auto-loan-calculator"

export function AutoLoanCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(DEFAULT_VEHICLE_PRICE)
  const [downPayment, setDownPayment] = useState(DEFAULT_DOWN_PAYMENT)
  const [downPaymentType, setDownPaymentType] = useState<DownPaymentType>("dollar")
  const [tradeInValue, setTradeInValue] = useState("")
  const [amountOwedOnTradeIn, setAmountOwedOnTradeIn] = useState("")
  const [interestRate, setInterestRate] = useState(CREDIT_SCORE_RATES[DEFAULT_CREDIT_SCORE].newRate.toString())
  const [loanTerm, setLoanTerm] = useState(DEFAULT_LOAN_TERM)
  const [vehicleType, setVehicleType] = useState<VehicleType>("new")
  const [creditScore, setCreditScore] = useState<CreditScoreTier>(DEFAULT_CREDIT_SCORE)
  const [selectedState, setSelectedState] = useState(DEFAULT_STATE)
  const [salesTaxRate, setSalesTaxRate] = useState(US_STATES_TAX[DEFAULT_STATE].rate.toString())
  const [titleRegFees, setTitleRegFees] = useState(DEFAULT_TITLE_REG_FEES)
  const [includeTaxInLoan, setIncludeTaxInLoan] = useState(false)
  const [result, setResult] = useState<AutoLoanResult | null>(null)
  const [termComparisons, setTermComparisons] = useState<TermComparison[]>([])
  const [isCalculating, setIsCalculating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showYearlyView, setShowYearlyView] = useState(true)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [activeTab, setActiveTab] = useState<ActiveTab>("calculator")
  const [monthlyBudget, setMonthlyBudget] = useState("")
  const [affordabilityRate, setAffordabilityRate] = useState(CREDIT_SCORE_RATES[DEFAULT_CREDIT_SCORE].newRate.toString())
  const [affordabilityTerm, setAffordabilityTerm] = useState(DEFAULT_LOAN_TERM)
  const [maxCarPrice, setMaxCarPrice] = useState<number | null>(null)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatCurrencyExact = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  useEffect(() => {
    if (creditScore !== "custom") {
      const tier = CREDIT_SCORE_RATES[creditScore]
      if (tier) {
        const rate = vehicleType === "new" ? tier.newRate : tier.usedRate
        setInterestRate(rate.toString())
      }
    }
  }, [creditScore, vehicleType])

  useEffect(() => {
    const stateData = US_STATES_TAX[selectedState]
    if (stateData) {
      setSalesTaxRate(stateData.rate.toString())
    }
  }, [selectedState])

  const calculateLoan = useCallback(() => {
    const price = parseFloat(vehiclePrice) || 0
    if (price <= 0) return

    setIsCalculating(true)

    setTimeout(() => {
      const rate = parseFloat(interestRate) || 0
      const term = parseInt(loanTerm) || 60
      const tradeIn = parseFloat(tradeInValue) || 0
      const tradeInOwed = parseFloat(amountOwedOnTradeIn) || 0
      const taxRate = parseFloat(salesTaxRate) || 0
      const fees = parseFloat(titleRegFees) || 0
      let downPay = 0
      if (downPaymentType === "dollar") {
        downPay = parseFloat(downPayment) || 0
      } else {
        downPay = (price * (parseFloat(downPayment) || 0)) / 100
      }
      const netTradeIn = tradeIn - tradeInOwed
      const taxableAmount = Math.max(0, price - tradeIn)
      const salesTaxAmount = (taxableAmount * taxRate) / 100
      let amountFinanced = price - downPay - netTradeIn
      if (includeTaxInLoan) {
        amountFinanced += salesTaxAmount + fees
      }
      amountFinanced = Math.max(0, amountFinanced)
      const monthlyRate = rate / 100 / 12
      let monthlyPayment: number
      if (monthlyRate === 0) {
        monthlyPayment = amountFinanced / term
      } else {
        monthlyPayment = amountFinanced * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
      }

      const totalLoanPayment = monthlyPayment * term
      const totalInterest = totalLoanPayment - amountFinanced
      const upfrontCost = downPay + (includeTaxInLoan ? 0 : salesTaxAmount + fees)
      const totalCost = totalLoanPayment + upfrontCost
      const effectivePrice = price + salesTaxAmount + fees
      const ltvRatio = (amountFinanced / price) * 100
      const payoffDate = new Date()
      payoffDate.setMonth(payoffDate.getMonth() + term)
      const payoffDateStr = payoffDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })
      const amortizationSchedule: AmortizationEntry[] = []
      const yearlySchedule: YearlyEntry[] = []
      let balance = amountFinanced
      let yearlyPrincipal = 0
      let yearlyInterest = 0
      let monthCount = 0
      const startDate = new Date()

      for (let i = 1; i <= term; i++) {
        const interestPayment = balance * monthlyRate
        const principalPayment = monthlyPayment - interestPayment
        balance = Math.max(0, balance - principalPayment)

        const entryDate = new Date(startDate)
        entryDate.setMonth(entryDate.getMonth() + i)

        amortizationSchedule.push({
          month: i,
          date: entryDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
          principal: parseFloat(principalPayment.toFixed(2)),
          interest: parseFloat(interestPayment.toFixed(2)),
          totalPayment: parseFloat(monthlyPayment.toFixed(2)),
          balance: parseFloat(balance.toFixed(2)),
          principalPercentage: parseFloat(((principalPayment / monthlyPayment) * 100).toFixed(1)),
        })

        yearlyPrincipal += principalPayment
        yearlyInterest += interestPayment
        monthCount++

        if (monthCount === 12 || i === term) {
          const year = startDate.getFullYear() + Math.ceil(i / 12)
          const loanPaidToDate = parseFloat((((amountFinanced - balance) / amountFinanced) * 100).toFixed(2))

          yearlySchedule.push({
            year,
            principal: parseFloat(yearlyPrincipal.toFixed(2)),
            interest: parseFloat(yearlyInterest.toFixed(2)),
            totalPayment: parseFloat((yearlyPrincipal + yearlyInterest).toFixed(2)),
            balance: parseFloat(balance.toFixed(2)),
            loanPaidToDate,
          })

          yearlyPrincipal = 0
          yearlyInterest = 0
          monthCount = 0
        }
      }
      const comparisons: TermComparison[] = LOAN_TERMS.map((t) => {
        let mp: number
        if (monthlyRate === 0) {
          mp = amountFinanced / t
        } else {
          mp = amountFinanced * (monthlyRate * Math.pow(1 + monthlyRate, t)) / (Math.pow(1 + monthlyRate, t) - 1)
        }
        const totalInt = mp * t - amountFinanced
        return {
          term: t,
          monthlyPayment: mp,
          totalInterest: totalInt,
          totalCost: mp * t + upfrontCost,
        }
      })

      setTermComparisons(comparisons)
      setResult({
        monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
        totalLoanAmount: parseFloat(totalLoanPayment.toFixed(2)),
        totalInterest: parseFloat(totalInterest.toFixed(2)),
        totalCost: parseFloat(totalCost.toFixed(2)),
        salesTaxAmount: parseFloat(salesTaxAmount.toFixed(2)),
        upfrontCost: parseFloat(upfrontCost.toFixed(2)),
        amountFinanced: parseFloat(amountFinanced.toFixed(2)),
        effectivePrice: parseFloat(effectivePrice.toFixed(2)),
        payoffDate: payoffDateStr,
        ltvRatio: parseFloat(ltvRatio.toFixed(1)),
        amortizationSchedule,
        yearlySchedule,
      })

      setIsCalculating(false)
    }, 400)
  }, [vehiclePrice, downPayment, downPaymentType, tradeInValue, amountOwedOnTradeIn, interestRate, loanTerm, salesTaxRate, titleRegFees, includeTaxInLoan])

  const calculateAffordability = useCallback(() => {
    const budget = parseFloat(monthlyBudget) || 0
    if (budget <= 0) { setMaxCarPrice(null); return }

    const rate = parseFloat(affordabilityRate) || 0
    const term = parseInt(affordabilityTerm) || 60
    const monthlyRate = rate / 100 / 12

    let maxLoanAmount: number
    if (monthlyRate === 0) {
      maxLoanAmount = budget * term
    } else {
      maxLoanAmount = budget * (Math.pow(1 + monthlyRate, term) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, term))
    }

    setMaxCarPrice(parseFloat(maxLoanAmount.toFixed(2)))
  }, [monthlyBudget, affordabilityRate, affordabilityTerm])

  useEffect(() => {
    if (activeTab === "calculator" && vehiclePrice) {
      calculateLoan()
    }
  }, [calculateLoan, activeTab, vehiclePrice])

  useEffect(() => {
    if (activeTab === "affordability" && monthlyBudget) {
      calculateAffordability()
    }
  }, [calculateAffordability, activeTab, monthlyBudget])

  const copyResult = () => {
    if (!result) return
    const text = `Auto Loan Summary\nMonthly Payment: ${formatCurrencyExact(result.monthlyPayment)}\nAmount Financed: ${formatCurrency(result.amountFinanced)}\nTotal Interest: ${formatCurrency(result.totalInterest)}\nTotal Cost: ${formatCurrency(result.totalCost)}\nPayoff Date: ${result.payoffDate}`
    void navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareResult = () => {
    if (!result) return
    const text = `My auto loan: ${formatCurrencyExact(result.monthlyPayment)}/mo for ${loanTerm} months at ${interestRate}% APR. Total cost: ${formatCurrency(result.totalCost)}`
    if (navigator.share) {
      void navigator.share({ title: "Auto Loan Calculator Results", text })
    } else {
      void navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2 p-1 bg-muted border border-border rounded-lg shadow-sm">
        <button
          type="button"
          onClick={() => setActiveTab("calculator")}
          aria-pressed={activeTab === "calculator"}
          className={`flex-1 py-2.5 px-4 rounded-lg border text-sm font-semibold transition-all ${activeTab === "calculator"
            ? "border-primary bg-primary text-primary-foreground shadow-sm"
            : "border-transparent text-muted-foreground hover:border-primary/30 hover:bg-white hover:text-primary"
            }`}
        >
          <Calculator className="h-4 w-4 inline-block mr-2" />
          Loan Calculator
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("affordability")}
          aria-pressed={activeTab === "affordability"}
          className={`flex-1 py-2.5 px-4 rounded-lg border text-sm font-semibold transition-all ${activeTab === "affordability"
            ? "border-primary bg-primary text-primary-foreground shadow-sm"
            : "border-transparent text-muted-foreground hover:border-primary/30 hover:bg-white hover:text-primary"
            }`}
        >
          <Target className="h-4 w-4 inline-block mr-2" />
          How Much Can I Afford?
        </button>
      </div>

      {activeTab === "calculator" && (
        <>
          <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-3 text-xl sm:text-2xl text-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Car className="h-6 w-6 text-foreground" />
                </div>
                Auto Loan Calculator
              </GCardTitle>
              <GCardDescription className="text-sm sm:text-base text-muted-foreground">
                Calculate your monthly car payment with taxes, fees, trade-in value, and credit score based rates
              </GCardDescription>
            </GCardHeader>
            <GCardContent className="space-y-6">
              <div className="space-y-3">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Car className="h-4 w-4" />
                  Vehicle Condition
                </GLabel>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "new", label: "New Car", icon: Zap },
                    { id: "used", label: "Used Car", icon: Car },
                  ].map((type) => {
                    const Icon = type.icon
                    return (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setVehicleType(type.id as "new" | "used")}
                        aria-pressed={vehicleType === type.id}
                        className={`p-3 rounded-lg border transition-all duration-300 flex items-center justify-center gap-2 ${vehicleType === type.id
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"
                          }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Shield className="h-4 w-4" />
                  Credit Score (Auto-fills Rate)
                </GLabel>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(Object.entries(CREDIT_SCORE_RATES) as [CreditScoreTier, typeof CREDIT_SCORE_RATES[CreditScoreTier]][]).map(([key, tier]) => (
                    <button
                      type="button"
                      key={key}
                      onClick={() => setCreditScore(key)}
                      aria-pressed={creditScore === key}
                      className={`p-2.5 rounded-lg border transition-all text-left ${creditScore === key
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"
                        }`}
                    >
                      <div className="text-xs font-medium">{tier.label}</div>
                      {key !== "custom" && (
                        <div className="text-[10px] mt-0.5 opacity-70">
                          {vehicleType === "new" ? tier.newRate : tier.usedRate}% APR
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <GLabel htmlFor="vehiclePrice" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                    <DollarSign className="h-4 w-4" />
                    Vehicle Price
                  </GLabel>
                  <GInput
                    id="vehiclePrice"
                    type="number"
                    value={vehiclePrice}
                    onChange={(e) => setVehiclePrice(e.target.value)}
                    placeholder="e.g. 35000"
                    className="h-11 bg-card border-border text-foreground"
                  />
                  <div className="text-xs text-muted-foreground">Average: ${MARKET_AVERAGES.newCarPrice.toLocaleString()} (new) / ${MARKET_AVERAGES.usedCarPrice.toLocaleString()} (used)</div>
                </div>

                <div className="space-y-2">
                  <GLabel htmlFor="downPayment" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                    <Banknote className="h-4 w-4" />
                    Down Payment
                    <div className="ml-auto flex gap-1">
                      <button
                        type="button"
                        onClick={() => setDownPaymentType("dollar")}
                        aria-pressed={downPaymentType === "dollar"}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${downPaymentType === "dollar" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-primary"}`}
                      >$</button>
                      <button
                        type="button"
                        onClick={() => setDownPaymentType("percent")}
                        aria-pressed={downPaymentType === "percent"}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${downPaymentType === "percent" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-primary"}`}
                      >%</button>
                    </div>
                  </GLabel>
                  <GInput
                    id="downPayment"
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    placeholder={downPaymentType === "dollar" ? "e.g. 5000" : "e.g. 20"}
                    className="h-11 bg-card border-border text-foreground"
                  />
                  <div className="text-xs text-muted-foreground">Recommended: 20% for best rates</div>
                </div>

                <div className="space-y-2">
                  <GLabel htmlFor="interestRate" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                    <Percent className="h-4 w-4" />
                    Interest Rate (APR %)
                  </GLabel>
                  <GInput
                    id="interestRate"
                    type="number"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => { setInterestRate(e.target.value); setCreditScore("custom") }}
                    placeholder="e.g. 6.58"
                    className="h-11 bg-card border-border text-foreground"
                  />
                  <div className="text-xs text-muted-foreground">
                    Avg: {vehicleType === "new" ? `${MARKET_AVERAGES.newCarRate}%` : `${MARKET_AVERAGES.usedCarRate}%`} ({vehicleType})
                  </div>
                </div>

                <div className="space-y-2">
                  <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                    <Clock className="h-4 w-4" />
                    Loan Term
                  </GLabel>
                  <div className="grid grid-cols-3 gap-2">
                    {LOAN_TERMS.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setLoanTerm(t.toString())}
                        aria-pressed={parseInt(loanTerm) === t}
                        className={`p-2 rounded-lg border text-center transition-all ${parseInt(loanTerm) === t
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"
                          }`}
                      >
                        <div className="text-sm font-semibold">{t} mo</div>
                        <div className="text-[10px] opacity-70">{(t / 12).toFixed(1)} yr</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                {showAdvanced ? "Hide" : "Show"} Trade-in, Taxes & Fees
              </button>

              {showAdvanced && (
                <div className="space-y-4 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <GLabel htmlFor="tradeIn" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                        <Car className="h-4 w-4" />
                        Trade-in Value
                      </GLabel>
                      <GInput
                        id="tradeIn"
                        type="number"
                        value={tradeInValue}
                        onChange={(e) => setTradeInValue(e.target.value)}
                        placeholder="e.g. 8000"
                        className="h-11 bg-card border-border text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <GLabel htmlFor="tradeInOwed" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                        <CreditCard className="h-4 w-4" />
                        Amount Owed on Trade-in
                      </GLabel>
                      <GInput
                        id="tradeInOwed"
                        type="number"
                        value={amountOwedOnTradeIn}
                        onChange={(e) => setAmountOwedOnTradeIn(e.target.value)}
                        placeholder="e.g. 3000"
                        className="h-11 bg-card border-border text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                        <Scale className="h-4 w-4" />
                        State (Sales Tax)
                      </GLabel>
                      <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="w-full h-11 px-3 rounded-md border border-border bg-card text-foreground text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        {Object.entries(US_STATES_TAX).sort((a, b) => a[1].name.localeCompare(b[1].name)).map(([code, state]) => (
                          <option key={code} value={code}>{state.name} ({state.rate}%)</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <GLabel htmlFor="salesTax" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                        <Percent className="h-4 w-4" />
                        Sales Tax Rate (%)
                      </GLabel>
                      <GInput
                        id="salesTax"
                        type="number"
                        step="0.01"
                        value={salesTaxRate}
                        onChange={(e) => setSalesTaxRate(e.target.value)}
                        className="h-11 bg-card border-border text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <GLabel htmlFor="fees" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                        <DollarSign className="h-4 w-4" />
                        Title, Registration & Fees
                      </GLabel>
                      <GInput
                        id="fees"
                        type="number"
                        value={titleRegFees}
                        onChange={(e) => setTitleRegFees(e.target.value)}
                        placeholder="e.g. 300"
                        className="h-11 bg-card border-border text-foreground"
                      />
                    </div>

                    <div className="flex items-end pb-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={includeTaxInLoan}
                          onChange={(e) => setIncludeTaxInLoan(e.target.checked)}
                          className="rounded border-border"
                        />
                        <span className="text-sm text-muted-foreground">Include tax & fees in loan</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              <GButton
                onClick={calculateLoan}
                disabled={isCalculating || !vehiclePrice}
                className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
              >
                {isCalculating ? (
                  <>
                    <LoadingSpinner className="mr-2 h-5 w-5" />
                    Calculating Payment...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Car Payment
                  </>
                )}
              </GButton>
            </GCardContent>
          </GCard>

          {result && (
            <div className="space-y-4">
              <GCard className="shadow-lg border-border animate-fade-in-up bg-card">
                <GCardHeader className="pb-3">
                  <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-4 w-4 text-foreground" />
                    </div>
                    Your Car Payment Estimate
                  </GCardTitle>
                </GCardHeader>
                <GCardContent className="space-y-4">
                  <div className="text-center p-5 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                    <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                      {formatCurrencyExact(result.monthlyPayment)}
                    </div>
                    <div className="text-sm text-muted-foreground">Estimated Monthly Payment</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Payoff by {result.payoffDate}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Amount Financed</div>
                      <div className="text-lg font-bold text-foreground">{formatCurrency(result.amountFinanced)}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-primary/40">
                      <div className="text-xs text-muted-foreground mb-1">Total Interest</div>
                      <div className="text-lg font-bold text-foreground">{formatCurrency(result.totalInterest)}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Sales Tax</div>
                      <div className="text-lg font-bold text-foreground">{formatCurrency(result.salesTaxAmount)}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Total Cost</div>
                      <div className="text-lg font-bold text-foreground">{formatCurrency(result.totalCost)}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-muted/50 border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Upfront Payment</div>
                      <div className="text-base font-bold text-foreground">{formatCurrency(result.upfrontCost)}</div>
                      <div className="text-[10px] text-muted-foreground">Down payment + tax/fees (if not financed)</div>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50 border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Loan-to-Value Ratio</div>
                      <div className="text-base font-bold text-foreground">{result.ltvRatio}%</div>
                      <div className="text-[10px] text-muted-foreground">
                        {result.ltvRatio > 100 ? "Underwater — consider more down payment" : result.ltvRatio > 80 ? "Consider GAP insurance" : "Healthy LTV ratio"}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-card rounded-lg border border-border">
                    <h3 className="text-sm font-semibold mb-3 flex items-center gap-1.5 text-heading-accent">
                      <PieChart className="h-3.5 w-3.5" />
                      Total Payment Breakdown
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-foreground">Principal</span>
                            <span className="font-medium">{formatCurrency(result.amountFinanced)} ({((result.amountFinanced / result.totalLoanAmount) * 100).toFixed(1)}%)</span>
                          </div>
                          <div className="w-full bg-border rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(result.amountFinanced / result.totalLoanAmount) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-foreground">Interest</span>
                            <span className="font-medium">{formatCurrency(result.totalInterest)} ({((result.totalInterest / result.totalLoanAmount) * 100).toFixed(1)}%)</span>
                          </div>
                          <div className="w-full bg-border rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(result.totalInterest / result.totalLoanAmount) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <GButton
                      onClick={copyResult}
                      className="flex-1 h-9 text-xs font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card"
                    >
                      {copied ? <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</> : <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Results</>}
                    </GButton>
                    <GButton
                      onClick={shareResult}
                      className="flex-1 h-9 text-xs font-medium transition-all duration-300 border border-blue-700 hover:bg-secondary text-foreground bg-card"
                    >
                      <Share2 className="mr-1.5 h-3.5 w-3.5" /> Share
                    </GButton>
                  </div>
                </GCardContent>
              </GCard>

              <GCard className="shadow-lg border-border bg-card">
                <GCardHeader className="pb-3">
                  <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <BarChart3 className="h-4 w-4 text-foreground" />
                    </div>
                    Loan Term Comparison
                  </GCardTitle>
                  <GCardDescription className="text-xs text-muted-foreground">
                    See how different loan terms affect your monthly payment and total interest
                  </GCardDescription>
                </GCardHeader>
                <GCardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 px-2 font-semibold text-foreground">Term</th>
                          <th className="text-right py-2 px-2 font-semibold text-heading-accent">Monthly Payment</th>
                          <th className="text-right py-2 px-2 font-semibold text-foreground">Total Interest</th>
                          <th className="text-right py-2 px-2 font-semibold text-foreground">Total Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {termComparisons.map((comp) => (
                          <tr
                            key={comp.term}
                            className={`border-b border-border ${parseInt(loanTerm) === comp.term ? "bg-primary/5" : ""}`}
                          >
                            <td className="py-2 px-2 font-medium text-foreground">
                              {comp.term} mo ({(comp.term / 12).toFixed(1)} yr)
                              {parseInt(loanTerm) === comp.term && (
                                <span className="ml-1 text-[10px] text-primary font-bold">SELECTED</span>
                              )}
                            </td>
                            <td className="py-2 px-2 text-right text-heading-accent font-medium">
                              {formatCurrencyExact(comp.monthlyPayment)}
                            </td>
                            <td className="py-2 px-2 text-right text-foreground">
                              {formatCurrency(comp.totalInterest)}
                            </td>
                            <td className="py-2 px-2 text-right text-foreground">
                              {formatCurrency(comp.totalCost)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 p-2 rounded bg-muted/50 border border-border">
                    <div className="flex items-start gap-1.5">
                      <Info className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <p className="text-[10px] text-muted-foreground">
                        Shorter terms mean higher monthly payments but save significantly on total interest.
                        A 36-month term saves {formatCurrency(termComparisons.length >= 2 ? termComparisons[termComparisons.length - 1].totalInterest - termComparisons[1].totalInterest : 0)} in interest compared to 84 months.
                      </p>
                    </div>
                  </div>
                </GCardContent>
              </GCard>

              <GCard className="shadow-lg border-border bg-card">
                <GCardHeader className="pb-3">
                  <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calendar className="h-4 w-4 text-foreground" />
                    </div>
                    Amortization Schedule
                  </GCardTitle>
                  <div className="flex gap-2 mt-2">
                    <GButton
                      onClick={() => setShowYearlyView(true)}
                      variant={showYearlyView ? "default" : "outline"}
                      size="sm"
                      className="h-8 text-xs"
                    >
                      Yearly View
                    </GButton>
                    <GButton
                      onClick={() => setShowYearlyView(false)}
                      variant={!showYearlyView ? "default" : "outline"}
                      size="sm"
                      className="h-8 text-xs"
                    >
                      Monthly View
                    </GButton>
                  </div>
                </GCardHeader>
                <GCardContent>
                  <div className="mb-4">
                    <div className="bg-card rounded-lg p-3 border border-border">
                      {showYearlyView ? (
                        <div className="space-y-3">
                          <div className="text-xs text-muted-foreground">Yearly Payment Breakdown</div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {result.yearlySchedule.slice(0, 8).map((entry, index) => (
                              <div key={index} className="bg-card rounded-lg p-2 border border-border">
                                <div className="text-xs font-semibold text-foreground mb-1.5">Year {entry.year}</div>
                                <div className="space-y-0.5">
                                  <div className="flex justify-between text-[10px]">
                                    <span className="text-heading-accent">Principal:</span>
                                    <span className="font-medium text-foreground">{formatCurrency(entry.principal)}</span>
                                  </div>
                                  <div className="flex justify-between text-[10px]">
                                    <span className="text-foreground">Interest:</span>
                                    <span className="font-medium text-foreground">{formatCurrency(entry.interest)}</span>
                                  </div>
                                  <div className="w-full bg-border rounded-full h-1.5 mt-1.5">
                                    <div
                                      className="bg-primary h-1.5 rounded-full transition-all duration-300"
                                      style={{ width: `${entry.loanPaidToDate}%` }}
                                    />
                                  </div>
                                  <div className="text-[10px] text-center text-muted-foreground">
                                    {entry.loanPaidToDate.toFixed(1)}% Paid
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="text-xs text-muted-foreground">Monthly Payment Breakdown (First 12 Months)</div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                            {result.amortizationSchedule.slice(0, 12).map((entry, index) => (
                              <div key={index} className="bg-card rounded-lg p-2 border border-border">
                                <div className="text-[10px] font-semibold text-foreground mb-1">
                                  {entry.date}
                                </div>
                                <div className="space-y-0.5">
                                  <div className="flex justify-between text-[10px]">
                                    <span className="text-heading-accent">Principal:</span>
                                    <span className="font-medium text-foreground">{formatCurrencyExact(entry.principal)}</span>
                                  </div>
                                  <div className="flex justify-between text-[10px]">
                                    <span className="text-foreground">Interest:</span>
                                    <span className="font-medium text-foreground">{formatCurrencyExact(entry.interest)}</span>
                                  </div>
                                  <div className="w-full bg-border rounded-full h-1.5 mt-1.5">
                                    <div
                                      className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
                                      style={{ width: `${entry.principalPercentage}%` }}
                                    />
                                  </div>
                                  <div className="text-[10px] text-center text-muted-foreground">
                                    {entry.principalPercentage}% Principal
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {showYearlyView ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 px-2 font-semibold text-foreground">Year</th>
                            <th className="text-right py-2 px-2 font-semibold text-heading-accent">Principal</th>
                            <th className="text-right py-2 px-2 font-semibold text-foreground">Interest</th>
                            <th className="text-right py-2 px-2 font-semibold text-foreground">Total</th>
                            <th className="text-right py-2 px-2 font-semibold text-foreground">Balance</th>
                            <th className="text-right py-2 px-2 font-semibold text-foreground">Paid %</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.yearlySchedule.map((entry, index) => (
                            <tr key={index} className="border-b border-border">
                              <td className="py-2 px-2 font-medium text-foreground">{entry.year}</td>
                              <td className="py-2 px-2 text-right text-heading-accent font-medium">{formatCurrency(entry.principal)}</td>
                              <td className="py-2 px-2 text-right text-foreground">{formatCurrency(entry.interest)}</td>
                              <td className="py-2 px-2 text-right text-foreground">{formatCurrency(entry.totalPayment)}</td>
                              <td className="py-2 px-2 text-right text-foreground">{formatCurrency(entry.balance)}</td>
                              <td className="py-2 px-2 text-right text-foreground">{entry.loanPaidToDate.toFixed(1)}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="overflow-x-auto max-h-80">
                      <table className="w-full text-[10px]">
                        <thead className="sticky top-0 bg-card">
                          <tr className="border-b border-border">
                            <th className="text-left py-1.5 px-1 font-semibold text-foreground">Month</th>
                            <th className="text-left py-1.5 px-1 font-semibold text-foreground">Date</th>
                            <th className="text-right py-1.5 px-1 font-semibold text-heading-accent">Principal</th>
                            <th className="text-right py-1.5 px-1 font-semibold text-foreground">Interest</th>
                            <th className="text-right py-1.5 px-1 font-semibold text-foreground">Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {result.amortizationSchedule.map((entry, index) => (
                            <tr key={index} className="border-b border-border">
                              <td className="py-1.5 px-1 font-medium text-foreground">{entry.month}</td>
                              <td className="py-1.5 px-1 text-foreground">{entry.date}</td>
                              <td className="py-1.5 px-1 text-right text-heading-accent">{formatCurrencyExact(entry.principal)}</td>
                              <td className="py-1.5 px-1 text-right text-foreground">{formatCurrencyExact(entry.interest)}</td>
                              <td className="py-1.5 px-1 text-right text-foreground">{formatCurrency(entry.balance)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </GCardContent>
              </GCard>

              <GCard className="shadow-lg border-border bg-card">
                <GCardHeader className="pb-3">
                  <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Fuel className="h-4 w-4 text-foreground" />
                    </div>
                    Tips to Lower Your Car Payment
                  </GCardTitle>
                </GCardHeader>
                <GCardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: Banknote, title: "Increase Down Payment", desc: "Putting 20% down avoids being underwater on the loan and gets better rates." },
                      { icon: Clock, title: "Choose Shorter Term", desc: "48-60 months is the sweet spot. Avoid 72-84 month loans — you pay far more in interest." },
                      { icon: Shield, title: "Improve Credit Score", desc: "Even a 50-point improvement can drop your rate by 2-3%, saving thousands." },
                      { icon: Car, title: "Consider Certified Pre-Owned", desc: "CPO cars are 20-30% cheaper than new with warranty coverage." },
                    ].map((tip, i) => {
                      const Icon = tip.icon
                      return (
                        <div key={i} className="p-3 rounded-lg border border-border bg-muted/30">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="h-4 w-4 text-primary" />
                            <span className="text-xs font-semibold text-foreground">{tip.title}</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground">{tip.desc}</p>
                        </div>
                      )
                    })}
                  </div>
                </GCardContent>
              </GCard>
            </div>
          )}
        </>
      )}

      {activeTab === "affordability" && (
        <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
          <GCardHeader>
            <GCardTitle className="flex items-center gap-3 text-xl sm:text-2xl text-foreground">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="h-6 w-6 text-foreground" />
              </div>
              How Much Car Can I Afford?
            </GCardTitle>
            <GCardDescription className="text-sm text-muted-foreground">
              Enter your desired monthly payment to find the maximum car price you can afford
            </GCardDescription>
          </GCardHeader>
          <GCardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="monthlyBudget" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <DollarSign className="h-4 w-4" />
                  Monthly Budget
                </GLabel>
                <GInput
                  id="monthlyBudget"
                  type="number"
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(e.target.value)}
                  placeholder="e.g. 500"
                  className="h-11 bg-card border-border text-foreground"
                />
                <div className="text-xs text-muted-foreground">Avg: ${MARKET_AVERAGES.newCarPayment}/mo (new), ${MARKET_AVERAGES.usedCarPayment}/mo (used)</div>
              </div>

              <div className="space-y-2">
                <GLabel htmlFor="affRate" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Percent className="h-4 w-4" />
                  Interest Rate (%)
                </GLabel>
                <GInput
                  id="affRate"
                  type="number"
                  step="0.01"
                  value={affordabilityRate}
                  onChange={(e) => setAffordabilityRate(e.target.value)}
                  className="h-11 bg-card border-border text-foreground"
                />
              </div>

              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Clock className="h-4 w-4" />
                  Loan Term (months)
                </GLabel>
                <select
                  value={affordabilityTerm}
                  onChange={(e) => setAffordabilityTerm(e.target.value)}
                  className="w-full h-11 px-3 rounded-md border border-border bg-card text-foreground text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {LOAN_TERMS.map((t) => (
                    <option key={t} value={t}>{t} months ({(t / 12).toFixed(1)} years)</option>
                  ))}
                </select>
              </div>
            </div>

            <GButton
              onClick={calculateAffordability}
              disabled={!monthlyBudget}
              className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
            >
              <Target className="mr-2 h-5 w-5" />
              Calculate Affordability
            </GButton>

            {maxCarPrice !== null && (
              <div className="space-y-4 animate-fade-in-up">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-2">You Can Afford Up To</div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground">
                    {formatCurrency(maxCarPrice)}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    at {formatCurrencyExact(parseFloat(monthlyBudget))}/mo for {affordabilityTerm} months at {affordabilityRate}% APR
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-border bg-muted/30">
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Info className="h-4 w-4 text-primary" />
                    The 20/4/10 Rule for Car Buying
                  </h4>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-xl font-bold text-primary">20%</div>
                      <div className="text-[10px] text-muted-foreground">Down Payment</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">4 yr</div>
                      <div className="text-[10px] text-muted-foreground">Max Loan Term</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">10%</div>
                      <div className="text-[10px] text-muted-foreground">Max of Gross Income</div>
                    </div>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-2 text-center">
                    Financial experts recommend keeping total car costs (payment + insurance) under 10% of your gross monthly income.
                  </p>
                </div>
              </div>
            )}
          </GCardContent>
        </GCard>
      )}

      <GCard className="shadow-lg border-border bg-card">
        <GCardHeader className="pb-3">
          <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <TrendingUp className="h-4 w-4 text-foreground" />
            </div>
            Average Auto Loan Interest Rates by Credit Score
          </GCardTitle>
        </GCardHeader>
        <GCardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2 font-semibold text-foreground">Credit Score</th>
                  <th className="text-left py-2 px-2 font-semibold text-foreground">Tier</th>
                  <th className="text-right py-2 px-2 font-semibold text-heading-accent">New Car APR</th>
                  <th className="text-right py-2 px-2 font-semibold text-foreground">Used Car APR</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(CREDIT_SCORE_RATES).filter(([key]) => key !== "custom").map(([key, tier]) => (
                  <tr key={key} className={`border-b border-border ${creditScore === key ? "bg-primary/5" : ""}`}>
                    <td className="py-2 px-2 font-medium text-foreground">{tier.label}</td>
                    <td className="py-2 px-2 text-muted-foreground">{tier.description}</td>
                    <td className="py-2 px-2 text-right text-heading-accent font-medium">{tier.newRate}%</td>
                    <td className="py-2 px-2 text-right text-foreground">{tier.usedRate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-muted-foreground mt-2">
            Source: Average rates based on Experian and Bankrate data, Q1 2026. Actual rates vary by lender, vehicle, and loan term.
          </p>
        </GCardContent>
      </GCard>
    </div>
  )
}
