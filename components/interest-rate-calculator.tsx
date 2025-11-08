"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

interface InterestRateResult {
  loanAmount: number
  loanTerm: number
  monthlyPayment: number
  interestRate: number
  totalPayments: number
  totalInterest: number
  calculationMethod: string
  amortizationSchedule: Array<{
    payment: number
    principal: number
    interest: number
    balance: number
  }>
  paymentBreakdown: {
    principal: number
    interest: number
    principalPercentage: number
    interestPercentage: number
  }
  recommendations: {
    rateOptimization: string[]
    loanTips: string[]
    refinancing: string[]
  }
  comparison: {
    otherRates: Array<{
      rate: number
      monthlyPayment: number
      totalInterest: number
      difference: number
    }>
  }
}

export default function InterestRateCalculator() {
  const [loanAmount, setLoanAmount] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [loanTermMonths, setLoanTermMonths] = useState("")
  const [monthlyPayment, setMonthlyPayment] = useState("")
  const [result, setResult] = useState<InterestRateResult | null>(null)
  const [history, setHistory] = useState<InterestRateResult[]>([])

  const calculateInterestRate = () => {
    if (loanAmount && loanTerm && monthlyPayment) {
      const principal = parseFloat(loanAmount)
      const termMonths = parseInt(loanTerm) * 12 + parseInt(loanTermMonths || "0")
      const payment = parseFloat(monthlyPayment)

      let rate = 0.01
      let tolerance = 0.0001
      let maxIterations = 100
      let iteration = 0

      while (iteration < maxIterations) {
        const f = (r: number) => {
          if (r === 0) {
            return principal - payment * termMonths
          }
          return principal * (r * Math.pow(1 + r, termMonths)) / (Math.pow(1 + r, termMonths) - 1) - payment
        }

        const fPrime = (r: number) => {
          if (r === 0) {
            return -payment * termMonths * (termMonths + 1) / 2
          }
          const temp1 = Math.pow(1 + r, termMonths)
          const temp2 = termMonths * Math.pow(1 + r, termMonths - 1)
          return principal * (temp2 * (temp1 - 1) - r * temp2 * temp1) / Math.pow(temp1 - 1, 2)
        }

        const fValue = f(rate)
        const fPrimeValue = fPrime(rate)

        if (Math.abs(fValue) < tolerance) break

        if (fPrimeValue === 0) break

        rate = rate - fValue / fPrimeValue
        iteration++
      }

      const annualRate = rate * 12 * 100
      const totalPayments = payment * termMonths
      const totalInterest = totalPayments - principal

      const schedule = generateAmortizationSchedule(principal, rate, termMonths, payment)

      const newResult: InterestRateResult = {
        loanAmount: principal,
        loanTerm: termMonths,
        monthlyPayment: payment,
        interestRate: annualRate,
        totalPayments: totalPayments,
        totalInterest: totalInterest,
        calculationMethod: "Newton-Raphson Method",
        amortizationSchedule: schedule,
        paymentBreakdown: {
          principal: principal,
          interest: totalInterest,
          principalPercentage: (principal / totalPayments) * 100,
          interestPercentage: (totalInterest / totalPayments) * 100
        },
        recommendations: generateRecommendations(principal, annualRate, termMonths),
        comparison: generateComparison(principal, termMonths, payment)
      }

      setResult(newResult)
      setHistory(prev => [newResult, ...prev.slice(0, 4)])
    }
  }

  const generateAmortizationSchedule = (principal: number, rate: number, termMonths: number, payment: number) => {
    const schedule = []
    let balance = principal

    for (let i = 0; i < termMonths; i++) {
      const interestPayment = balance * rate
      const principalPayment = payment - interestPayment
      balance = Math.max(0, balance - principalPayment)

      schedule.push({
        payment: i + 1,
        principal: principalPayment,
        interest: interestPayment,
        balance: balance
      })
    }

    return schedule
  }

  const generateRecommendations = (principal: number, rate: number, termMonths: number) => {
    const rateOptimization: string[] = []
    const loanTips: string[] = []
    const refinancing: string[] = []

    if (rate > 8) {
      rateOptimization.push("Consider shopping around for better rates")
      rateOptimization.push("Improve your credit score to qualify for lower rates")
    }
    if (rate > 12) {
      rateOptimization.push("This rate is quite high - consider secured loan options")
      rateOptimization.push("Look into credit union rates which are often lower")
    }

    loanTips.push("Make extra principal payments to reduce total interest")
    loanTips.push("Consider bi-weekly payments to pay off loan faster")
    loanTips.push("Refinance if rates drop significantly")
    loanTips.push("Avoid prepayment penalties when possible")

    if (rate > 6) {
      refinancing.push("Monitor market rates for refinancing opportunities")
      refinancing.push("Consider refinancing if rates drop by 1% or more")
    }
    refinancing.push("Calculate break-even point before refinancing")
    refinancing.push("Factor in closing costs when evaluating refinancing")

    return { rateOptimization, loanTips, refinancing }
  }

  const generateComparison = (principal: number, termMonths: number, payment: number) => {
    const rates = [3, 4, 5, 6, 7, 8, 9, 10]
    const otherRates = rates.map(rate => {
      const monthlyRate = rate / 100 / 12
      const calculatedPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1)
      const totalInterest = calculatedPayment * termMonths - principal

      return {
        rate: rate,
        monthlyPayment: calculatedPayment,
        totalInterest: totalInterest,
        difference: calculatedPayment - payment
      }
    })

    return { otherRates }
  }

  const copyResult = () => {
    if (result) {
      const text = `Interest Rate Calculator Results:
Loan Amount: $${result.loanAmount.toFixed(2)}
Interest Rate: ${result.interestRate.toFixed(3)}%
Monthly Payment: $${result.monthlyPayment.toFixed(2)}
Total Interest: $${result.totalInterest.toFixed(2)}
Total Payments: $${result.totalPayments.toFixed(2)}`
      navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setLoanAmount("")
    setLoanTerm("")
    setLoanTermMonths("")
    setMonthlyPayment("")
    setResult(null)
  }

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 bg-card rounded-xl p-2 sm:p-3 md:p-4 w-full overflow-hidden">
      {}
      <Card className="bg-card border-border w-full overflow-hidden">
        <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
            <Calculator className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
            Advanced Interest Rate Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-3 md:px-4">
          {}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="loanAmount" className="text-heading-accent text-xs sm:text-sm">Loan Amount ($)</Label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="32000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="monthlyPayment" className="text-heading-accent text-xs sm:text-sm">Monthly Payment ($)</Label>
              <Input
                id="monthlyPayment"
                type="number"
                placeholder="960"
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="loanTerm" className="text-heading-accent text-xs sm:text-sm">Loan Term (Years)</Label>
              <Input
                id="loanTerm"
                type="number"
                placeholder="3"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="loanTermMonths" className="text-heading-accent text-xs sm:text-sm">Additional Months</Label>
              <Input
                id="loanTermMonths"
                type="number"
                placeholder="0"
                value={loanTermMonths}
                onChange={(e) => setLoanTermMonths(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Button onClick={calculateInterestRate} className="w-full sm:w-auto text-sm sm:text-base">
              <Calculator className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Calculate Interest Rate
            </Button>
            <Button variant="outline" onClick={clearAll} className="w-full sm:w-auto text-sm sm:text-base">
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>

      {}
      {result && (
        <div className="space-y-4 sm:space-y-6">
          {}
          <Card className="bg-card border-border w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <Percent className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                Interest Rate Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <Label className="text-xs sm:text-sm text-heading-accent">Interest Rate</Label>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    {result.interestRate.toFixed(3)}%
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs sm:text-sm text-heading-accent">Monthly Payment</Label>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-heading-accent">
                    ${result.monthlyPayment.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 border-t border-border">
                <div className="text-center p-2 bg-card border border-border rounded-lg">
                  <div className="text-xs text-foreground">Total Interest</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">${result.totalInterest.toFixed(2)}</div>
                </div>
                <div className="text-center p-2 bg-card border border-border rounded-lg">
                  <div className="text-xs text-foreground">Total Payments</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">${result.totalPayments.toFixed(2)}</div>
                </div>
                <div className="text-center p-2 bg-card border border-border rounded-lg">
                  <div className="text-xs text-foreground">Loan Term</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">{result.loanTerm} months</div>
                </div>
              </div>

              <div className="flex gap-2 pt-3">
                <Button onClick={copyResult} variant="outline" size="sm" className="text-xs sm:text-sm">
                  <Copy className="mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  Copy Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {}
          <Card className="bg-card border-border w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <PieChart className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                Payment Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm">Principal</h3>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">${result.paymentBreakdown.principal.toFixed(2)}</div>
                  <p className="text-xs text-foreground">{result.paymentBreakdown.principalPercentage.toFixed(1)}% of total</p>
                </div>
                <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm">Interest</h3>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">${result.paymentBreakdown.interest.toFixed(2)}</div>
                  <p className="text-xs text-foreground">{result.paymentBreakdown.interestPercentage.toFixed(1)}% of total</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {}
          <Card className="bg-card border-border w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                Rate Comparison
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-3 md:px-4">
              <div className="space-y-1.5 sm:space-y-2">
                {result.comparison.otherRates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-border rounded-lg">
                    <div>
                      <span className="font-medium text-foreground text-xs sm:text-sm">{rate.rate}% rate</span>
                      <p className="text-xs text-foreground">${rate.monthlyPayment.toFixed(2)}/month</p>
                    </div>
                    <div className="text-right">
                      <Badge className={rate.difference > 0 ? "bg-red-500/20 text-foreground border-red-500" : "bg-border text-foreground"} variant="outline">
                        {rate.difference > 0 ? "+" : ""}${rate.difference.toFixed(2)}
                      </Badge>
                      <p className="text-xs text-foreground">${rate.totalInterest.toFixed(2)} interest</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {}
          <Card className="bg-card border-border w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                Personalized Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Rate Optimization</h4>
                  <ul className="space-y-1 text-xs">
                    {result.recommendations.rateOptimization.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 text-foreground">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Loan Tips</h4>
                  <ul className="space-y-1 text-xs">
                    {result.recommendations.loanTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 text-foreground">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Refinancing</h4>
                  <ul className="space-y-1 text-xs">
                    {result.recommendations.refinancing.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 text-foreground">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {}
      {history.length > 0 && (
        <Card className="bg-card border-border w-full overflow-hidden">
          <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
            <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
              <History className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
              Recent Calculations
            </CardTitle>
          </CardHeader>
          <CardContent className="px-2 sm:px-3 md:px-4">
            <div className="space-y-1.5 sm:space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 sm:p-2.5 bg-card border border-border rounded-lg">
                  <div className="space-y-0.5">
                    <div className="font-medium text-foreground text-xs sm:text-sm">
                      ${item.loanAmount.toFixed(0)} @ {item.interestRate.toFixed(3)}%
                    </div>
                    <div className="text-xs text-foreground">
                      ${item.monthlyPayment.toFixed(2)}/month - {item.loanTerm} months
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
                    className="text-xs sm:text-sm"
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {}
      <Card className="bg-card border-border w-full overflow-hidden">
        <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
            <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
            Interest Rate Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 sm:space-y-3 px-2 sm:px-3 md:px-4">
          <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-1.5 sm:gap-2">
              <Info className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-xs sm:text-sm">
                <p className="font-medium text-foreground mb-1 break-words">
                  Professional Interest Rate Analysis
                </p>
                <p className="text-foreground break-words">
                  This calculator uses the Newton-Raphson method to determine the exact interest rate on loans with fixed terms and monthly payments. Perfect for analyzing car loans, personal loans, and other fixed-rate financing.
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-foreground space-y-1">
            <p className="break-words">
              <strong className="text-heading-accent">Newton-Raphson Method:</strong> Advanced mathematical algorithm for precise interest rate calculation.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Amortization Analysis:</strong> Complete payment breakdown showing principal vs interest.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Rate Comparison:</strong> Compare your rate against market rates from 3% to 10%.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Optimization Tips:</strong> Personalized recommendations for better rates and loan management.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
