"use client"

import { useState, useEffect } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GBadge } from "@/ui/gbadge"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"

import {
  Calculator,
  DollarSign,
  Percent,
  Calendar,
  TrendingUp,
  TrendingDown,
  Info,
  AlertCircle,
  CheckCircle,
  Copy,
  Download,
  History,
  Star,
  Globe,
  Shield,
  FileText,
  BarChart3,
  PieChart,
  Target,
  Zap,
  Clock,
  Users,
  Home,
  Car,
  ShoppingBag,
  CreditCard,
  Banknote,
  Coins,
  Wallet,
  Briefcase,
  Store,
  Truck,
  Package,
  Tag,
  ShoppingCart,
  HandHeart,
  Gift,
  Award,
  Trophy,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Stethoscope,
  Brain,
  Dumbbell,
  Apple,
  Coffee,
  Moon,
  Sun,
  Wind,
  Thermometer,
  Droplets,
  Leaf,
  Sparkles,
  Flame,
  ChefHat,
  ForkKnife
} from "lucide-react"

interface FinanceResult {
  fv: number
  pmt: number
  iy: number
  n: number
  pv: number
  paymentTiming: string
  compoundingFrequency: string
  calculations: {
    futureValue: number
    presentValue: number
    periodicPayment: number
    interestRate: number
    numberOfPeriods: number
  }
  summary: {
    sumOfPayments: number
    totalInterest: number
    principalAmount: number
  }
  amortizationSchedule: Array<{
    period: number
    presentValue: number
    payment: number
    interest: number
    futureValue: number
  }>
  recommendations: {
    investmentTips: string[]
    loanAdvice: string[]
    financialPlanning: string[]
  }
  comparison: {
    scenarios: Array<{
      scenario: string
      futureValue: number
      difference: number
    }>
  }
}

export default function FinanceCalculator() {
  const [fv, setFv] = useState("")
  const [pmt, setPmt] = useState("")
  const [iy, setIy] = useState("")
  const [n, setN] = useState("")
  const [pv, setPv] = useState("")
  const [paymentTiming, setPaymentTiming] = useState("end")
  const [compoundingFrequency, setCompoundingFrequency] = useState("annually")
  const [result, setResult] = useState<FinanceResult | null>(null)
  const [history, setHistory] = useState<FinanceResult[]>([])

  const calculateFinance = () => {
    const fvValue = parseFloat(fv) || 0
    const pmtValue = parseFloat(pmt) || 0
    const iyValue = parseFloat(iy) || 0
    const nValue = parseFloat(n) || 0
    const pvValue = parseFloat(pv) || 0

    // Calculate the missing value
    let calculatedValue = 0
    let calculatedField = ""

    if (!fv && pmtValue && iyValue && nValue && pvValue) {
      // Calculate FV
      const rate = iyValue / 100
      const periods = nValue
      const presentValue = pvValue
      const payment = pmtValue

      if (paymentTiming === "beginning") {
        calculatedValue = presentValue * Math.pow(1 + rate, periods) +
          payment * ((Math.pow(1 + rate, periods) - 1) / rate) * (1 + rate)
      } else {
        calculatedValue = presentValue * Math.pow(1 + rate, periods) +
          payment * ((Math.pow(1 + rate, periods) - 1) / rate)
      }
      calculatedField = "fv"
    } else if (!pv && fvValue && iyValue && nValue && pmtValue) {
      // Calculate PV
      const rate = iyValue / 100
      const periods = nValue
      const futureValue = fvValue
      const payment = pmtValue

      if (paymentTiming === "beginning") {
        calculatedValue = (futureValue - payment * ((Math.pow(1 + rate, periods) - 1) / rate) * (1 + rate)) / Math.pow(1 + rate, periods)
      } else {
        calculatedValue = (futureValue - payment * ((Math.pow(1 + rate, periods) - 1) / rate)) / Math.pow(1 + rate, periods)
      }
      calculatedField = "pv"
    } else if (!pmt && fvValue && iyValue && nValue && pvValue) {
      // Calculate PMT
      const rate = iyValue / 100
      const periods = nValue
      const futureValue = fvValue
      const presentValue = pvValue

      if (paymentTiming === "beginning") {
        calculatedValue = (futureValue - presentValue * Math.pow(1 + rate, periods)) /
          (((Math.pow(1 + rate, periods) - 1) / rate) * (1 + rate))
      } else {
        calculatedValue = (futureValue - presentValue * Math.pow(1 + rate, periods)) /
          ((Math.pow(1 + rate, periods) - 1) / rate)
      }
      calculatedField = "pmt"
    } else if (!iy && fvValue && pmtValue && nValue && pvValue) {
      // Calculate I/Y using Newton-Raphson method
      const periods = nValue
      const futureValue = fvValue
      const payment = pmtValue
      const presentValue = pvValue

      let rate = 0.01 // Start with 1%
      let tolerance = 0.0001
      let maxIterations = 100
      let iteration = 0

      while (iteration < maxIterations) {
        const f = (r: number) => {
          if (r === 0) {
            return presentValue + payment * periods - futureValue
          }
          const factor = paymentTiming === "beginning" ? (1 + r) : 1
          return presentValue * Math.pow(1 + r, periods) +
            payment * ((Math.pow(1 + r, periods) - 1) / r) * factor - futureValue
        }

        const fPrime = (r: number) => {
          if (r === 0) {
            return presentValue * periods + payment * periods * (periods + 1) / 2
          }
          const factor = paymentTiming === "beginning" ? (1 + r) : 1
          return presentValue * periods * Math.pow(1 + r, periods - 1) +
            payment * ((periods * Math.pow(1 + r, periods - 1) * r - (Math.pow(1 + r, periods) - 1)) / (r * r)) * factor
        }

        const fValue = f(rate)
        const fPrimeValue = fPrime(rate)

        if (Math.abs(fValue) < tolerance) break

        if (fPrimeValue === 0) break

        rate = rate - fValue / fPrimeValue
        iteration++
      }

      calculatedValue = rate * 100
      calculatedField = "iy"
    } else if (!n && fvValue && pmtValue && iyValue && pvValue) {
      // Calculate N
      const rate = iyValue / 100
      const futureValue = fvValue
      const payment = pmtValue
      const presentValue = pvValue

      if (rate === 0) {
        calculatedValue = (futureValue - presentValue) / payment
      } else {
        const factor = paymentTiming === "beginning" ? (1 + rate) : 1
        const numerator = Math.log((futureValue + payment * factor / rate) / (presentValue + payment * factor / rate))
        const denominator = Math.log(1 + rate)
        calculatedValue = numerator / denominator
      }
      calculatedField = "n"
    }

    // Generate amortization schedule
    const schedule = generateAmortizationSchedule(
      calculatedField === "pv" ? calculatedValue : pvValue,
      calculatedField === "pmt" ? calculatedValue : pmtValue,
      calculatedField === "iy" ? calculatedValue : iyValue,
      calculatedField === "n" ? calculatedValue : nValue,
      calculatedField === "fv" ? calculatedValue : fvValue
    )

    const newResult: FinanceResult = {
      fv: calculatedField === "fv" ? calculatedValue : fvValue,
      pmt: calculatedField === "pmt" ? calculatedValue : pmtValue,
      iy: calculatedField === "iy" ? calculatedValue : iyValue,
      n: calculatedField === "n" ? calculatedValue : nValue,
      pv: calculatedField === "pv" ? calculatedValue : pvValue,
      paymentTiming,
      compoundingFrequency,
      calculations: {
        futureValue: calculatedField === "fv" ? calculatedValue : fvValue,
        presentValue: calculatedField === "pv" ? calculatedValue : pvValue,
        periodicPayment: calculatedField === "pmt" ? calculatedValue : pmtValue,
        interestRate: calculatedField === "iy" ? calculatedValue : iyValue,
        numberOfPeriods: calculatedField === "n" ? calculatedValue : nValue
      },
      summary: {
        sumOfPayments: (calculatedField === "pmt" ? calculatedValue : pmtValue) * (calculatedField === "n" ? calculatedValue : nValue),
        totalInterest: (calculatedField === "fv" ? calculatedValue : fvValue) - (calculatedField === "pv" ? calculatedValue : pvValue) - ((calculatedField === "pmt" ? calculatedValue : pmtValue) * (calculatedField === "n" ? calculatedValue : nValue)),
        principalAmount: calculatedField === "pv" ? calculatedValue : pvValue
      },
      amortizationSchedule: schedule,
      recommendations: generateRecommendations(calculatedField === "fv" ? calculatedValue : fvValue, calculatedField === "iy" ? calculatedValue : iyValue),
      comparison: generateComparison(calculatedField === "fv" ? calculatedValue : fvValue, calculatedField === "iy" ? calculatedValue : iyValue)
    }

    setResult(newResult)
    setHistory(prev => [newResult, ...prev.slice(0, 4)])
  }

  const generateAmortizationSchedule = (pv: number, pmt: number, iy: number, n: number, fv: number) => {
    const schedule = []
    const rate = iy / 100
    let balance = pv

    for (let i = 1; i <= n; i++) {
      const interest = balance * rate
      const principal = pmt - interest
      balance = balance + principal

      schedule.push({
        period: i,
        presentValue: balance - principal,
        payment: pmt,
        interest: interest,
        futureValue: balance
      })
    }

    return schedule
  }

  const generateRecommendations = (fv: number, iy: number) => {
    const investmentTips: string[] = []
    const loanAdvice: string[] = []
    const financialPlanning: string[] = []

    // Investment recommendations
    if (iy > 8) {
      investmentTips.push("Consider high-yield investment options")
      investmentTips.push("Evaluate risk tolerance for higher returns")
    }
    if (fv > 100000) {
      investmentTips.push("Diversify your investment portfolio")
      investmentTips.push("Consider tax-advantaged accounts")
    }

    // Loan advice
    if (iy > 6) {
      loanAdvice.push("Consider refinancing for lower rates")
      loanAdvice.push("Make extra principal payments")
    }
    loanAdvice.push("Compare loan terms from multiple lenders")
    loanAdvice.push("Consider loan consolidation options")

    // Financial planning
    financialPlanning.push("Create a comprehensive financial plan")
    financialPlanning.push("Build an emergency fund")
    financialPlanning.push("Consider retirement planning")
    financialPlanning.push("Review insurance coverage needs")

    return { investmentTips, loanAdvice, financialPlanning }
  }

  const generateComparison = (fv: number, iy: number) => {
    const scenarios = [
      { scenario: "Conservative (3%)", futureValue: fv * 0.5, difference: fv * 0.5 - fv },
      { scenario: "Moderate (6%)", futureValue: fv, difference: 0 },
      { scenario: "Aggressive (9%)", futureValue: fv * 1.5, difference: fv * 0.5 },
      { scenario: "High Growth (12%)", futureValue: fv * 2, difference: fv }
    ]

    return { scenarios }
  }

  const copyResult = () => {
    if (result) {
      const text = `Finance Calculator Results:
FV: $${result.fv.toFixed(2)}
PV: $${result.pv.toFixed(2)}
PMT: $${result.pmt.toFixed(2)}
I/Y: ${result.iy.toFixed(2)}%
N: ${result.n.toFixed(0)} periods
Total Interest: $${result.summary.totalInterest.toFixed(2)}`
      void navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setFv("")
    setPmt("")
    setIy("")
    setN("")
    setPv("")
    setResult(null)
  }

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full overflow-hidden">
      {/* Main Calculator */}
      <GCard className="bg-card border-border w-full overflow-hidden">
        <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <GCardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
            <Calculator className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
            <span className="text-foreground">Advanced Finance Calculator</span>
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-4 sm:space-y-6 px-2 sm:px-3 md:px-4">
          {/* GInput Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="fv" className="text-heading-accent text-xs sm:text-sm">FV (Future Value)</GLabel>
              <GInput
                id="fv"
                type="number"
                placeholder="0"
                value={fv}
                onChange={(e) => setFv(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="pmt" className="text-heading-accent text-xs sm:text-sm">PMT (Periodic Payment)</GLabel>
              <GInput
                id="pmt"
                type="number"
                placeholder="0"
                value={pmt}
                onChange={(e) => setPmt(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="iy" className="text-heading-accent text-xs sm:text-sm">I/Y (Interest per Year) %</GLabel>
              <GInput
                id="iy"
                type="number"
                placeholder="0"
                value={iy}
                onChange={(e) => setIy(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="n" className="text-heading-accent text-xs sm:text-sm">N (# of Periods)</GLabel>
              <GInput
                id="n"
                type="number"
                placeholder="0"
                value={n}
                onChange={(e) => setN(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="pv" className="text-heading-accent text-xs sm:text-sm">PV (Present Value)</GLabel>
              <GInput
                id="pv"
                type="number"
                placeholder="0"
                value={pv}
                onChange={(e) => setPv(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="paymentTiming" className="text-heading-accent text-xs sm:text-sm">Payment Timing</GLabel>
              <GSelect value={paymentTiming} onValueChange={setPaymentTiming}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="end">End of Period</GSelectItem>
                  <GSelectItem value="beginning">Beginning of Period</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <GButton onClick={calculateFinance} className="w-full sm:w-auto text-sm sm:text-base">
              <Calculator className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Calculate
            </GButton>
            <GButton variant="outline" onClick={clearAll} className="w-full sm:w-auto text-sm sm:text-base">
              Clear All
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Results Section */}
      {result && (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Results */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <DollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                <span className="text-foreground">Finance Calculation Results</span>
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5">
                  <GLabel className="text-xs sm:text-sm text-heading-accent">Future Value (FV)</GLabel>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    ${result.fv.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <GLabel className="text-xs sm:text-sm text-heading-accent">Present Value (PV)</GLabel>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    ${result.pv.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-foreground">Periodic Payment</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">${result.pmt.toFixed(2)}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-foreground">Interest Rate</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">{result.iy.toFixed(2)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-foreground">Periods</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">{result.n.toFixed(0)}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-2 sm:pt-4">
                <GButton onClick={copyResult} variant="outline" size="sm" className="text-xs sm:text-sm">
                  <Copy className="mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  Copy Results
                </GButton>
              </div>
            </GCardContent>
          </GCard>

          {/* Summary */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                <span className="text-foreground">Financial Summary</span>
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 md:p-4 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1.5 sm:mb-2 text-xs sm:text-sm break-words">Sum of Payments</h3>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">${result.summary.sumOfPayments.toFixed(2)}</div>
                </div>
                <div className="p-2 sm:p-3 md:p-4 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1.5 sm:mb-2 text-xs sm:text-sm break-words">Total Interest</h3>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">${result.summary.totalInterest.toFixed(2)}</div>
                </div>
                <div className="p-2 sm:p-3 md:p-4 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1.5 sm:mb-2 text-xs sm:text-sm break-words">Principal Amount</h3>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">${result.summary.principalAmount.toFixed(2)}</div>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Amortization Schedule */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                <span className="text-foreground">Amortization Schedule</span>
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="px-2 sm:px-3 md:px-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-card border-b border-border">
                      <th className="border border-border p-2 sm:p-3 text-left text-xs sm:text-sm text-heading-accent">Period</th>
                      <th className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-heading-accent">PV</th>
                      <th className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-heading-accent">PMT</th>
                      <th className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-heading-accent">Interest</th>
                      <th className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-heading-accent">FV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.amortizationSchedule.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-border p-2 sm:p-3 text-xs sm:text-sm text-foreground">{row.period}</td>
                        <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${row.presentValue.toFixed(2)}</td>
                        <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${row.payment.toFixed(2)}</td>
                        <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${row.interest.toFixed(2)}</td>
                        <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${row.futureValue.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* Investment Scenarios */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                <span className="text-foreground">Investment Scenarios</span>
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="px-2 sm:px-3 md:px-4">
              <div className="space-y-2">
                {result.comparison.scenarios.map((scenario, index) => (
                  <div key={index} className="flex justify-between items-center p-2 sm:p-3 bg-card border border-border rounded-lg">
                    <div className="min-w-0">
                      <span className="font-medium text-foreground text-xs sm:text-sm break-words">{scenario.scenario}</span>
                      <p className="text-xs text-foreground break-words">${scenario.futureValue.toFixed(2)}</p>
                    </div>
                    <GBadge className={scenario.difference > 0 ? "bg-green-500/20 text-heading-accent border-green-500" : "bg-red-500/20 text-foreground border-red-500"} variant="outline">
                      {scenario.difference > 0 ? "+" : ""}${scenario.difference.toFixed(2)}
                    </GBadge>
                  </div>
                ))}
              </div>
            </GCardContent>
          </GCard>

          {/* Recommendations */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                <span className="text-foreground">Personalized Recommendations</span>
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-heading-accent text-xs sm:text-sm break-words">Investment Tips</h4>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {result.recommendations.investmentTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-heading-accent text-xs sm:text-sm break-words">Loan Advice</h4>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {result.recommendations.loanAdvice.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-heading-accent text-xs sm:text-sm break-words">Financial Planning</h4>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {result.recommendations.financialPlanning.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}

      {/* History Section */}
      {history.length > 0 && (
        <GCard className="bg-card border-border w-full overflow-hidden">
          <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
            <GCardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
              <History className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
              <span className="text-foreground">Recent Calculations</span>
            </GCardTitle>
          </GCardHeader>
          <GCardContent className="px-2 sm:px-3 md:px-4">
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-card border border-border rounded-lg">
                  <div className="space-y-1 min-w-0">
                    <div className="font-medium text-xs sm:text-sm text-foreground break-words">
                      FV: ${item.fv.toFixed(0)} | PV: ${item.pv.toFixed(0)}
                    </div>
                    <div className="text-xs text-foreground break-words">
                      {item.iy.toFixed(1)}% for {item.n.toFixed(0)} periods
                    </div>
                  </div>
                  <GButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
                    className="text-xs sm:text-sm flex-shrink-0"
                  >
                    View Details
                  </GButton>
                </div>
              ))}
            </div>
          </GCardContent>
        </GCard>
      )}

      {/* Information Section */}
      <GCard className="bg-card border-border w-full overflow-hidden">
        <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <GCardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
            <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
            <span className="text-foreground">Finance Calculator Features</span>
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-3 px-2 sm:px-3 md:px-4">
          <div className="p-2 sm:p-3 md:p-4 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-xs sm:text-sm min-w-0">
                <p className="font-medium text-foreground mb-1 break-words">
                  Professional Time Value of Money Calculator
                </p>
                <p className="text-foreground break-words">
                  This calculator uses the same formulas as professional financial calculators (BA II Plus, HP 12CP). Calculate any of the 5 key TVM variables: FV, PV, PMT, I/Y, or N.
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-foreground space-y-1.5 sm:space-y-2">
            <p className="break-words">
              <strong className="text-heading-accent">Time Value of Money:</strong> Calculate present value, future value, payments, interest rates, and periods.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Amortization Schedule:</strong> Complete payment breakdown showing principal and interest.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Investment Analysis:</strong> Compare different investment scenarios and returns.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Loan Calculations:</strong> Analyze loan payments, interest, and payoff strategies.
            </p>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
