"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Home, DollarSign, Copy, Check, Calculator, TrendingUp,
  BarChart3, ChevronDown, ChevronUp, Building2, Key, Calendar,
  PiggyBank, Percent, Shield, ArrowRight
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

interface YearlyBreakdown {
  year: number
  rentCost: number
  buyCost: number
  cumulativeRent: number
  cumulativeBuy: number
  homeEquity: number
  renterPortfolio: number
  homeValue: number
  loanBalance: number
  monthlyRent: number
  monthlyBuy: number
}

interface RentVsBuyResult {
  breakEvenYear: number | null
  recommendation: string
  recommendationColor: string
  monthlyRent: number
  monthlyBuyTotal: number
  monthlyMortgagePI: number
  monthlyPropertyTax: number
  monthlyInsurance: number
  monthlyPMI: number
  monthlyHOA: number
  monthlyMaintenance: number
  totalRentCost: number
  totalBuyCost: number
  netBuyAdvantage: number
  homeValueAtEnd: number
  equityAtEnd: number
  renterPortfolioAtEnd: number
  renterNetWorth: number
  buyerNetWorth: number
  priceToRentRatio: number
  fivePercentRule: number
  yearlyBreakdown: YearlyBreakdown[]
  loanAmount: number
  downPaymentAmount: number
  closingCostsBuyAmount: number
  totalInterestPaid: number
}

function calculateMonthlyMortgage(principal: number, annualRate: number, years: number): number {
  const r = annualRate / 12
  const n = years * 12
  if (r === 0) return principal / n
  return principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

function getRemainingBalance(principal: number, annualRate: number, years: number, paymentsMade: number): number {
  const r = annualRate / 12
  const n = years * 12
  if (r === 0) return principal - (principal / n) * paymentsMade
  return principal * (Math.pow(1 + r, n) - Math.pow(1 + r, paymentsMade)) / (Math.pow(1 + r, n) - 1)
}

export function RentVsBuyCalculator() {
  // Buying inputs
  const [homePrice, setHomePrice] = useState("350000")
  const [downPaymentPct, setDownPaymentPct] = useState("20")
  const [interestRate, setInterestRate] = useState("6.75")
  const [loanTerm, setLoanTerm] = useState("30")
  const [propertyTaxRate, setPropertyTaxRate] = useState("1.1")
  const [homeInsurance, setHomeInsurance] = useState("1500")
  const [hoaMonthly, setHoaMonthly] = useState("0")
  const [maintenancePct, setMaintenancePct] = useState("1")
  const [appreciationRate, setAppreciationRate] = useState("3.5")
  const [buyClosingCostPct, setBuyClosingCostPct] = useState("3")
  const [sellClosingCostPct, setSellClosingCostPct] = useState("6")

  // Renting inputs
  const [monthlyRent, setMonthlyRent] = useState("1800")
  const [rentIncreasePct, setRentIncreasePct] = useState("3")
  const [renterInsurance, setRenterInsurance] = useState("15")
  const [securityDeposit, setSecurityDeposit] = useState("1800")

  // Shared inputs
  const [stayYears, setStayYears] = useState("7")
  const [investReturnRate, setInvestReturnRate] = useState("7")
  const [marginalTaxRate, setMarginalTaxRate] = useState("22")
  const [inflationRate, setInflationRate] = useState("2.5")

  const [showAdvanced, setShowAdvanced] = useState(false)
  const [result, setResult] = useState<RentVsBuyResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculate = () => {
    const price = Number.parseFloat(homePrice) || 0
    const rent = Number.parseFloat(monthlyRent) || 0
    const years = Number.parseInt(stayYears) || 7
    if (!price || !rent || years < 1) return

    setIsCalculating(true)

    setTimeout(() => {
      const downPct = (Number.parseFloat(downPaymentPct) || 20) / 100
      const rate = (Number.parseFloat(interestRate) || 6.75) / 100
      const termYears = Number.parseInt(loanTerm) || 30
      const taxRate = (Number.parseFloat(propertyTaxRate) || 1.1) / 100
      const insAnnual = Number.parseFloat(homeInsurance) || 1500
      const hoa = Number.parseFloat(hoaMonthly) || 0
      const maintPct = (Number.parseFloat(maintenancePct) || 1) / 100
      const appRate = (Number.parseFloat(appreciationRate) || 3.5) / 100
      const buyClosePct = (Number.parseFloat(buyClosingCostPct) || 3) / 100
      const sellClosePct = (Number.parseFloat(sellClosingCostPct) || 6) / 100
      const rentIncRate = (Number.parseFloat(rentIncreasePct) || 3) / 100
      const renterIns = Number.parseFloat(renterInsurance) || 15
      const secDep = Number.parseFloat(securityDeposit) || 0
      const investReturn = (Number.parseFloat(investReturnRate) || 7) / 100
      const taxRateMarginal = (Number.parseFloat(marginalTaxRate) || 22) / 100
      const inflRate = (Number.parseFloat(inflationRate) || 2.5) / 100

      const downPaymentAmount = price * downPct
      const loanAmount = price - downPaymentAmount
      const closingCostsBuyAmount = price * buyClosePct
      const monthlyPI = calculateMonthlyMortgage(loanAmount, rate, termYears)

      // PMI: if down < 20%, 0.5% of loan annually
      const pmiRate = downPct < 0.20 ? 0.005 : 0

      // Year-by-year simulation
      const yearlyBreakdown: YearlyBreakdown[] = []
      let cumulativeRent = secDep
      let cumulativeBuy = downPaymentAmount + closingCostsBuyAmount
      let renterPortfolio = downPaymentAmount + closingCostsBuyAmount // renter invests what buyer spends upfront
      let totalInterestPaid = 0

      const monthlyInvestReturn = investReturn / 12

      for (let y = 1; y <= years; y++) {
        const currentRent = rent * Math.pow(1 + rentIncRate, y - 1)
        const currentHomeValue = price * Math.pow(1 + appRate, y)
        const prevHomeValue = price * Math.pow(1 + appRate, y - 1)
        const paymentsMade = y * 12
        const prevPaymentsMade = (y - 1) * 12
        const loanBal = paymentsMade >= termYears * 12 ? 0 : getRemainingBalance(loanAmount, rate, termYears, paymentsMade)

        // Monthly buying costs for this year
        const propTax = (prevHomeValue * taxRate) / 12
        const ins = insAnnual / 12
        const maint = (prevHomeValue * maintPct) / 12
        // PMI drops at 80% LTV
        const currentLTVStart = getRemainingBalance(loanAmount, rate, termYears, prevPaymentsMade) / prevHomeValue
        const pmi = currentLTVStart > 0.80 && pmiRate > 0 ? (loanAmount * pmiRate) / 12 : 0
        const monthlyBuyTotal = monthlyPI + propTax + ins + pmi + hoa + maint

        // Monthly rent costs for this year
        const monthlyRentTotal = currentRent + renterIns

        // Annual totals
        const annualRent = monthlyRentTotal * 12
        const annualBuy = monthlyBuyTotal * 12

        // Track interest paid this year
        let yearInterest = 0
        for (let m = 1; m <= 12; m++) {
          const pm = prevPaymentsMade + m
          if (pm > termYears * 12) break
          const bal = getRemainingBalance(loanAmount, rate, termYears, pm - 1)
          const interestPortion = bal * (rate / 12)
          yearInterest += interestPortion
        }
        totalInterestPaid += yearInterest

        // Tax deduction benefit (simplified: mortgage interest + property tax, vs standard deduction)
        const annualPropTax = propTax * 12
        const itemizedDeductions = yearInterest + Math.min(annualPropTax, 10000) // SALT cap $10K
        const standardDeduction = 15000 // 2026 approx for single
        const taxBenefit = itemizedDeductions > standardDeduction
          ? (itemizedDeductions - standardDeduction) * taxRateMarginal
          : 0

        cumulativeRent += annualRent
        cumulativeBuy += annualBuy - taxBenefit

        // Renter invests monthly savings if buying costs more, or withdraws if renting costs more
        for (let m = 0; m < 12; m++) {
          renterPortfolio *= (1 + monthlyInvestReturn)
          const diff = monthlyBuyTotal - monthlyRentTotal
          if (diff > 0) {
            renterPortfolio += diff // renter saves the difference
          } else {
            renterPortfolio += diff // negative: renter spends more, portfolio decreases
          }
        }

        const homeEquity = currentHomeValue - loanBal

        yearlyBreakdown.push({
          year: y,
          rentCost: Math.round(annualRent),
          buyCost: Math.round(annualBuy - taxBenefit),
          cumulativeRent: Math.round(cumulativeRent),
          cumulativeBuy: Math.round(cumulativeBuy),
          homeEquity: Math.round(homeEquity),
          renterPortfolio: Math.round(renterPortfolio),
          homeValue: Math.round(currentHomeValue),
          loanBalance: Math.round(loanBal),
          monthlyRent: Math.round(monthlyRentTotal),
          monthlyBuy: Math.round(monthlyBuyTotal),
        })
      }

      // Selling costs at end
      const finalHomeValue = price * Math.pow(1 + appRate, years)
      const sellingCosts = finalHomeValue * sellClosePct
      const finalLoanBalance = years * 12 >= termYears * 12 ? 0 : getRemainingBalance(loanAmount, rate, termYears, years * 12)
      const netProceeds = finalHomeValue - finalLoanBalance - sellingCosts

      // Net worth comparison
      const buyerNetWorth = netProceeds
      const renterNetWorth = renterPortfolio

      // Break-even: when buyer net worth > renter net worth
      let breakEvenYear: number | null = null
      for (let y = 0; y < yearlyBreakdown.length; y++) {
        const entry = yearlyBreakdown[y]
        const sellCostsAtYear = entry.homeValue * sellClosePct
        const buyerNW = entry.homeEquity - sellCostsAtYear
        if (buyerNW >= entry.renterPortfolio && !breakEvenYear) {
          breakEvenYear = entry.year
        }
      }

      // First year metrics
      const monthlyPropertyTax = (price * taxRate) / 12
      const monthlyIns = insAnnual / 12
      const monthlyMaint = (price * maintPct) / 12
      const monthlyPMI = downPct < 0.20 ? (loanAmount * pmiRate) / 12 : 0
      const monthlyBuyTotal = monthlyPI + monthlyPropertyTax + monthlyIns + monthlyPMI + hoa + monthlyMaint

      // Quick indicators
      const priceToRentRatio = price / (rent * 12)
      const fivePercentRule = (price * 0.05) / 12

      // Recommendation
      let recommendation: string
      let recommendationColor: string
      if (buyerNetWorth > renterNetWorth * 1.1) {
        recommendation = `Buying is the better financial choice over ${years} years. You build $${Math.round(buyerNetWorth - renterNetWorth).toLocaleString()} more net worth than renting.`
        recommendationColor = "text-green-600 dark:text-green-400"
      } else if (renterNetWorth > buyerNetWorth * 1.1) {
        recommendation = `Renting is the better financial choice over ${years} years. You build $${Math.round(renterNetWorth - buyerNetWorth).toLocaleString()} more net worth than buying.`
        recommendationColor = "text-blue-600 dark:text-blue-400"
      } else {
        recommendation = `It's roughly a toss-up over ${years} years. The difference in net worth is less than 10%. Other factors like lifestyle and stability should drive your decision.`
        recommendationColor = "text-amber-600 dark:text-amber-400"
      }

      setResult({
        breakEvenYear,
        recommendation,
        recommendationColor,
        monthlyRent: Math.round(rent + renterIns),
        monthlyBuyTotal: Math.round(monthlyBuyTotal),
        monthlyMortgagePI: Math.round(monthlyPI),
        monthlyPropertyTax: Math.round(monthlyPropertyTax),
        monthlyInsurance: Math.round(monthlyIns),
        monthlyPMI: Math.round(monthlyPMI),
        monthlyHOA: Math.round(hoa),
        monthlyMaintenance: Math.round(monthlyMaint),
        totalRentCost: Math.round(yearlyBreakdown[yearlyBreakdown.length - 1]?.cumulativeRent ?? 0),
        totalBuyCost: Math.round(yearlyBreakdown[yearlyBreakdown.length - 1]?.cumulativeBuy ?? 0),
        netBuyAdvantage: Math.round(buyerNetWorth - renterNetWorth),
        homeValueAtEnd: Math.round(finalHomeValue),
        equityAtEnd: Math.round(finalHomeValue - finalLoanBalance),
        renterPortfolioAtEnd: Math.round(renterPortfolio),
        renterNetWorth: Math.round(renterNetWorth),
        buyerNetWorth: Math.round(buyerNetWorth),
        priceToRentRatio: Number.parseFloat(priceToRentRatio.toFixed(1)),
        fivePercentRule: Math.round(fivePercentRule),
        yearlyBreakdown,
        loanAmount: Math.round(loanAmount),
        downPaymentAmount: Math.round(downPaymentAmount),
        closingCostsBuyAmount: Math.round(closingCostsBuyAmount),
        totalInterestPaid: Math.round(totalInterestPaid),
      })

      setIsCalculating(false)
    }, 600)
  }

  const fmt = (n: number) => `$${n.toLocaleString()}`

  const copyResult = () => {
    if (!result) return
    const text = `Rent vs Buy Analysis (${stayYears} years)
Home Price: ${fmt(Number.parseFloat(homePrice))}
Monthly Rent: ${fmt(Number.parseFloat(monthlyRent))}
Recommendation: ${result.recommendation}
Monthly Buying Cost: ${fmt(result.monthlyBuyTotal)}
Buyer Net Worth at End: ${fmt(result.buyerNetWorth)}
Renter Net Worth at End: ${fmt(result.renterNetWorth)}
Break-Even Year: ${result.breakEvenYear ? `Year ${result.breakEvenYear}` : "Does not break even in timeframe"}
Price-to-Rent Ratio: ${result.priceToRentRatio}`
    void navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isValid = homePrice && monthlyRent && stayYears

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader className="pb-4">
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Home className="h-6 w-6 text-foreground" />
            </div>
            Rent vs Buy Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Compare the true cost of renting vs buying a home over time, including opportunity cost, tax benefits, and equity building
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-8">
          {/* Time Horizon */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-heading-accent" />
              <GLabel className="text-base font-semibold text-foreground">How Long Will You Stay?</GLabel>
            </div>
            <div className="flex gap-2">
              {["3", "5", "7", "10", "15", "20", "30"].map((y) => (
                <button
                  key={y}
                  onClick={() => setStayYears(y)}
                  className={`flex-1 py-2.5 px-2 rounded-md text-sm font-medium transition-all ${stayYears === y ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"}`}
                >
                  {y}yr
                </button>
              ))}
            </div>
          </div>

          {/* Buying Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <Home className="h-4 w-4 text-heading-accent" />
              Buying Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="rvb-price" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <DollarSign className="h-3.5 w-3.5" /> Home Price
                </GLabel>
                <GInput id="rvb-price" type="number" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} placeholder="350000" className="h-11 bg-card border-border text-foreground" />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="rvb-down" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Percent className="h-3.5 w-3.5" /> Down Payment (%)
                </GLabel>
                <GInput id="rvb-down" type="number" value={downPaymentPct} onChange={(e) => setDownPaymentPct(e.target.value)} placeholder="20" className="h-11 bg-card border-border text-foreground" />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="rvb-rate" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <TrendingUp className="h-3.5 w-3.5" /> Interest Rate (%)
                </GLabel>
                <GInput id="rvb-rate" type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="6.75" step="0.25" className="h-11 bg-card border-border text-foreground" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Calendar className="h-3.5 w-3.5" /> Loan Term
                </GLabel>
                <div className="flex gap-2">
                  {["15", "20", "30"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setLoanTerm(t)}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${loanTerm === t ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"}`}
                    >
                      {t} yr
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Renting Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              <Key className="h-4 w-4 text-heading-accent" />
              Renting Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="rvb-rent" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <DollarSign className="h-3.5 w-3.5" /> Monthly Rent
                </GLabel>
                <GInput id="rvb-rent" type="number" value={monthlyRent} onChange={(e) => setMonthlyRent(e.target.value)} placeholder="1800" className="h-11 bg-card border-border text-foreground" />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="rvb-rent-inc" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <TrendingUp className="h-3.5 w-3.5" /> Annual Rent Increase (%)
                </GLabel>
                <GInput id="rvb-rent-inc" type="number" value={rentIncreasePct} onChange={(e) => setRentIncreasePct(e.target.value)} placeholder="3" step="0.5" className="h-11 bg-card border-border text-foreground" />
              </div>
            </div>
          </div>

          {/* Advanced Options */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            Advanced Options (Taxes, Costs, Investment Return)
          </button>

          {showAdvanced && (
            <div className="space-y-6 p-4 rounded-lg border border-border bg-muted/20">
              {/* Buying Costs */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-foreground">Buying Costs</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Property Tax (%/yr)</GLabel>
                    <GInput type="number" value={propertyTaxRate} onChange={(e) => setPropertyTaxRate(e.target.value)} step="0.1" className="h-9 text-sm bg-card border-border" />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Home Insurance ($/yr)</GLabel>
                    <GInput type="number" value={homeInsurance} onChange={(e) => setHomeInsurance(e.target.value)} className="h-9 text-sm bg-card border-border" />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">HOA ($/mo)</GLabel>
                    <GInput type="number" value={hoaMonthly} onChange={(e) => setHoaMonthly(e.target.value)} className="h-9 text-sm bg-card border-border" />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Maintenance (%/yr)</GLabel>
                    <GInput type="number" value={maintenancePct} onChange={(e) => setMaintenancePct(e.target.value)} step="0.25" className="h-9 text-sm bg-card border-border" />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Appreciation (%/yr)</GLabel>
                    <GInput type="number" value={appreciationRate} onChange={(e) => setAppreciationRate(e.target.value)} step="0.5" className="h-9 text-sm bg-card border-border" />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Buy Closing Cost (%)</GLabel>
                    <GInput type="number" value={buyClosingCostPct} onChange={(e) => setBuyClosingCostPct(e.target.value)} step="0.5" className="h-9 text-sm bg-card border-border" />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Sell Closing Cost (%)</GLabel>
                    <GInput type="number" value={sellClosingCostPct} onChange={(e) => setSellClosingCostPct(e.target.value)} step="0.5" className="h-9 text-sm bg-card border-border" />
                  </div>
                </div>
              </div>

              {/* Renting Costs */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-foreground">Renting Costs</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Renter Insurance ($/mo)</GLabel>
                    <GInput type="number" value={renterInsurance} onChange={(e) => setRenterInsurance(e.target.value)} className="h-9 text-sm bg-card border-border" />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Security Deposit ($)</GLabel>
                    <GInput type="number" value={securityDeposit} onChange={(e) => setSecurityDeposit(e.target.value)} className="h-9 text-sm bg-card border-border" />
                  </div>
                </div>
              </div>

              {/* Financial Variables */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-foreground">Financial Variables</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Investment Return (%/yr)</GLabel>
                    <GInput type="number" value={investReturnRate} onChange={(e) => setInvestReturnRate(e.target.value)} step="0.5" className="h-9 text-sm bg-card border-border" />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Tax Rate (%)</GLabel>
                    <GInput type="number" value={marginalTaxRate} onChange={(e) => setMarginalTaxRate(e.target.value)} className="h-9 text-sm bg-card border-border" />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-xs font-semibold text-heading-accent">Inflation (%/yr)</GLabel>
                    <GInput type="number" value={inflationRate} onChange={(e) => setInflationRate(e.target.value)} step="0.5" className="h-9 text-sm bg-card border-border" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Calculate Button */}
          <GButton
            onClick={calculate}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
            disabled={!isValid || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2 sm:mr-3" />
                <span className="hidden sm:inline">Analyzing Rent vs Buy...</span>
                <span className="sm:hidden">Analyzing...</span>
              </>
            ) : (
              <>
                <Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Compare Rent vs Buy</span>
                <span className="sm:hidden">Compare</span>
              </>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-6 animate-fade-in-up">
          {/* Recommendation */}
          <GCard className="shadow-lg border-border bg-card overflow-hidden">
            <GCardHeader className="pb-4 bg-muted/30 border-b border-border">
              <GCardTitle className="text-2xl flex items-center gap-3 text-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-foreground" />
                </div>
                Your Results
              </GCardTitle>
              <GCardDescription className="text-base text-muted-foreground mt-1">
                {stayYears}-year comparison &middot; {fmt(Number.parseFloat(homePrice))} home vs {fmt(Number.parseFloat(monthlyRent))}/mo rent
              </GCardDescription>
            </GCardHeader>
            <GCardContent className="space-y-6 pt-6">
              {/* Recommendation Banner */}
              <div className="p-5 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card to-muted">
                <p className={`text-lg font-bold ${result.recommendationColor}`}>
                  {result.recommendation}
                </p>
                {result.breakEvenYear && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Break-even point: <span className="font-bold text-foreground">Year {result.breakEvenYear}</span> — buying becomes cheaper after staying {result.breakEvenYear} years.
                  </p>
                )}
                {!result.breakEvenYear && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Buying does not break even within {stayYears} years in this scenario.
                  </p>
                )}
              </div>

              {/* Monthly Cost Comparison */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground">Monthly Cost (Year 1)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl border border-border bg-card text-center">
                    <Key className="h-5 w-5 text-blue-500 mx-auto mb-2" />
                    <div className="text-xs font-bold text-blue-500 uppercase">Renting</div>
                    <div className="text-3xl font-black text-foreground mt-1">{fmt(result.monthlyRent)}</div>
                    <div className="text-xs text-muted-foreground mt-1">/month</div>
                  </div>
                  <div className="p-5 rounded-xl border border-border bg-card text-center">
                    <Home className="h-5 w-5 text-green-500 mx-auto mb-2" />
                    <div className="text-xs font-bold text-green-500 uppercase">Buying</div>
                    <div className="text-3xl font-black text-foreground mt-1">{fmt(result.monthlyBuyTotal)}</div>
                    <div className="text-xs text-muted-foreground mt-1">/month</div>
                  </div>
                </div>
              </div>

              {/* Buying Cost Breakdown */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground">Monthly Buying Breakdown</h3>
                <div className="space-y-2">
                  {[
                    { label: "Mortgage (P&I)", value: result.monthlyMortgagePI },
                    { label: "Property Tax", value: result.monthlyPropertyTax },
                    { label: "Home Insurance", value: result.monthlyInsurance },
                    ...(result.monthlyPMI > 0 ? [{ label: "PMI", value: result.monthlyPMI }] : []),
                    ...(result.monthlyHOA > 0 ? [{ label: "HOA", value: result.monthlyHOA }] : []),
                    { label: "Maintenance", value: result.monthlyMaintenance },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-1.5 border-b border-border last:border-0">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-semibold text-foreground">{fmt(item.value)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-2 font-bold">
                    <span className="text-sm text-foreground">Total Monthly</span>
                    <span className="text-base text-foreground">{fmt(result.monthlyBuyTotal)}</span>
                  </div>
                </div>
              </div>

              {/* Net Worth Comparison */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground">Net Worth After {stayYears} Years</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border bg-card">
                    <div className="text-xs font-bold text-blue-500 uppercase">Renter</div>
                    <div className="text-2xl font-black text-foreground mt-1">{fmt(result.renterNetWorth)}</div>
                    <div className="text-xs text-muted-foreground mt-1">Investment portfolio</div>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card">
                    <div className="text-xs font-bold text-green-500 uppercase">Buyer</div>
                    <div className="text-2xl font-black text-foreground mt-1">{fmt(result.buyerNetWorth)}</div>
                    <div className="text-xs text-muted-foreground mt-1">Home equity after selling</div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 text-center">
                  <span className="text-sm text-muted-foreground">Net advantage: </span>
                  <span className={`text-sm font-bold ${result.netBuyAdvantage > 0 ? "text-green-600" : "text-blue-600"}`}>
                    {result.netBuyAdvantage > 0 ? `Buying wins by ${fmt(result.netBuyAdvantage)}` : `Renting wins by ${fmt(Math.abs(result.netBuyAdvantage))}`}
                  </span>
                </div>
              </div>

              {/* Quick Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-border bg-card space-y-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase">Price-to-Rent Ratio</div>
                  <div className="text-lg font-bold text-foreground">{result.priceToRentRatio}x</div>
                  <div className="text-[10px] text-muted-foreground">
                    {result.priceToRentRatio < 15 ? "Favors buying" : result.priceToRentRatio > 20 ? "Favors renting" : "Toss-up"}
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card space-y-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase">5% Rule Break-Even</div>
                  <div className="text-lg font-bold text-foreground">{fmt(result.fivePercentRule)}/mo</div>
                  <div className="text-[10px] text-muted-foreground">
                    {Number.parseFloat(monthlyRent) < result.fivePercentRule ? "Rent is below — favors renting" : "Rent exceeds — favors buying"}
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card space-y-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase">Total Interest Paid</div>
                  <div className="text-lg font-bold text-foreground">{fmt(result.totalInterestPaid)}</div>
                  <div className="text-[10px] text-muted-foreground">Over {stayYears} years</div>
                </div>
              </div>

              {/* Key Numbers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg border border-border bg-card text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase">Down Payment</div>
                  <div className="text-sm font-bold text-foreground">{fmt(result.downPaymentAmount)}</div>
                </div>
                <div className="p-3 rounded-lg border border-border bg-card text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase">Closing Costs</div>
                  <div className="text-sm font-bold text-foreground">{fmt(result.closingCostsBuyAmount)}</div>
                </div>
                <div className="p-3 rounded-lg border border-border bg-card text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase">Home Value ({stayYears}yr)</div>
                  <div className="text-sm font-bold text-foreground">{fmt(result.homeValueAtEnd)}</div>
                </div>
                <div className="p-3 rounded-lg border border-border bg-card text-center">
                  <div className="text-[10px] font-bold text-muted-foreground uppercase">Home Equity ({stayYears}yr)</div>
                  <div className="text-sm font-bold text-foreground">{fmt(result.equityAtEnd)}</div>
                </div>
              </div>

              {/* Year-by-Year Table */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Year-by-Year Comparison
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2 font-semibold text-foreground">Year</th>
                        <th className="text-right p-2 font-semibold text-blue-500">Monthly Rent</th>
                        <th className="text-right p-2 font-semibold text-green-500">Monthly Buy</th>
                        <th className="text-right p-2 font-semibold text-foreground">Home Equity</th>
                        <th className="text-right p-2 font-semibold text-foreground">Renter Portfolio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.yearlyBreakdown.map((row) => (
                        <tr key={row.year} className={`border-b border-border ${row.year === result.breakEvenYear ? "bg-primary/5" : ""}`}>
                          <td className="p-2 text-foreground font-medium">
                            {row.year}
                            {row.year === result.breakEvenYear && <span className="ml-1 text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">Break-even</span>}
                          </td>
                          <td className="p-2 text-right font-mono text-blue-600">{fmt(row.monthlyRent)}</td>
                          <td className="p-2 text-right font-mono text-green-600">{fmt(row.monthlyBuy)}</td>
                          <td className="p-2 text-right font-mono text-foreground">{fmt(row.homeEquity)}</td>
                          <td className="p-2 text-right font-mono text-foreground">{fmt(row.renterPortfolio)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Copy Button */}
              <GButton
                onClick={copyResult}
                variant="outline"
                className="w-full h-11 text-sm font-medium border-border hover:bg-secondary transition-all"
              >
                {copied ? (
                  <><Check className="mr-2 h-4 w-4 text-green-500" /> Copied to Clipboard</>
                ) : (
                  <><Copy className="mr-2 h-4 w-4" /> Copy Results</>
                )}
              </GButton>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
