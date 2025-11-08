"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

interface AmortizationResult {
  loanAmount: number
  loanTerm: number
  interestRate: number
  monthlyPayment: number
  totalPayments: number
  totalInterest: number
  principalPercentage: number
  interestPercentage: number
  amortizationSchedule: Array<{
    year: number
    interest: number
    principal: number
    endingBalance: number
  }>
  monthlySchedule: Array<{
    month: number
    payment: number
    principal: number
    interest: number
    balance: number
  }>
  extraPaymentAnalysis: {
    withExtraPayment: number
    withoutExtraPayment: number
    savings: number
    timeSaved: number
  }
  recommendations: {
    paymentStrategies: string[]
    refinancingTips: string[]
    debtReductionTips: string[]
  }
}

export default function AmortizationCalculator() {
  const [loanAmount, setLoanAmount] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [extraPayment, setExtraPayment] = useState("")
  const [result, setResult] = useState<AmortizationResult | null>(null)
  const [history, setHistory] = useState<AmortizationResult[]>([])

  const calculateAmortization = () => {
    const principal = parseFloat(loanAmount) || 0
    const termYears = parseFloat(loanTerm) || 0
    const rate = parseFloat(interestRate) || 0
    const extra = parseFloat(extraPayment) || 0

    if (principal <= 0) {
      alert("Loan amount must be greater than $0")
      return
    }
    if (termYears <= 0 || termYears > 50) {
      alert("Loan term must be between 1 and 50 years")
      return
    }
    if (rate < 0) {
      alert("Interest rate must be 0% or higher")
      return
    }
    if (extra < 0) {
      alert("Extra payment must be $0 or higher")
      return
    }

    const monthlyRate = rate / 100 / 12
    const totalMonths = termYears * 12

    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
                          (Math.pow(1 + monthlyRate, totalMonths) - 1)

    const totalPayment = monthlyPayment * totalMonths
    const totalInterest = totalPayment - principal

    const monthlySchedule = []
    const annualSchedule = []
    let balance = principal
    let totalInterestPaid = 0
    let totalPrincipalPaid = 0

    for (let month = 1; month <= totalMonths; month++) {
      const interestPayment = balance * monthlyRate
      const principalPayment = monthlyPayment - interestPayment
      const extraPrincipal = extra
      const totalPrincipalPayment = principalPayment + extraPrincipal

      balance = Math.max(0, balance - totalPrincipalPayment)
      totalInterestPaid += interestPayment
      totalPrincipalPaid += totalPrincipalPayment

      monthlySchedule.push({
        month,
        payment: monthlyPayment + extra,
        principal: totalPrincipalPayment,
        interest: interestPayment,
        balance: balance
      })

      if (month % 12 === 0 || month === totalMonths) {
        const year = Math.ceil(month / 12)
        annualSchedule.push({
          year,
          interest: totalInterestPaid,
          principal: totalPrincipalPaid,
          endingBalance: balance
        })
        totalInterestPaid = 0
        totalPrincipalPaid = 0
      }
    }

    const withoutExtraTotal = monthlyPayment * totalMonths
    const withExtraTotal = monthlySchedule.reduce((sum, payment) => sum + payment.payment, 0)
    const savings = withoutExtraTotal - withExtraTotal
    const timeSaved = totalMonths - monthlySchedule.length

    const calculatedResult: AmortizationResult = {
      loanAmount: principal,
      loanTerm: termYears,
      interestRate: rate,
      monthlyPayment: monthlyPayment,
      totalPayments: withExtraTotal,
      totalInterest: totalInterest,
      principalPercentage: (totalPrincipalPaid / withExtraTotal) * 100,
      interestPercentage: (totalInterest / withExtraTotal) * 100,
      amortizationSchedule: annualSchedule,
      monthlySchedule: monthlySchedule.slice(0, 12),
      extraPaymentAnalysis: {
        withExtraPayment: withExtraTotal,
        withoutExtraPayment: withoutExtraTotal,
        savings: savings,
        timeSaved: timeSaved
      },
      recommendations: generateRecommendations(rate, principal, termYears)
    }

    setResult(calculatedResult)
    setHistory(prev => [calculatedResult, ...prev.slice(0, 4)])
  }

  const generateRecommendations = (rate: number, principal: number, termYears: number) => {
    const paymentStrategies: string[] = []
    const refinancingTips: string[] = []
    const debtReductionTips: string[] = []

    if (rate > 6) {
      paymentStrategies.push("Consider making extra principal payments to reduce interest costs")
      paymentStrategies.push("Bi-weekly payments can save significant interest over time")
      paymentStrategies.push("Round up your monthly payment to the nearest $100")
    } else if (rate > 4) {
      paymentStrategies.push("Extra payments can still provide good returns")
      paymentStrategies.push("Consider investing extra money if you can earn more than the loan rate")
      paymentStrategies.push("Focus on building emergency fund before extra payments")
    } else {
      paymentStrategies.push("Low interest rate - consider investing extra money instead")
      paymentStrategies.push("Focus on higher-interest debt first")
      paymentStrategies.push("Build emergency fund and retirement savings")
    }

    if (rate > 5) {
      refinancingTips.push("Consider refinancing if rates have dropped significantly")
      refinancingTips.push("Calculate break-even point for refinancing costs")
      refinancingTips.push("Shop around for better rates and terms")
    } else {
      refinancingTips.push("Current rate is competitive - refinancing may not be beneficial")
      refinancingTips.push("Focus on paying down principal instead")
      refinancingTips.push("Consider shorter loan terms if financially feasible")
    }

    debtReductionTips.push("Create a detailed budget to identify extra payment opportunities")
    debtReductionTips.push("Use windfalls (tax refunds, bonuses) for extra payments")
    debtReductionTips.push("Consider debt consolidation if you have multiple high-interest debts")
    debtReductionTips.push("Track your progress with monthly balance updates")
    debtReductionTips.push("Celebrate milestones to stay motivated")

    return { paymentStrategies, refinancingTips, debtReductionTips }
  }

  const copyResult = () => {
    if (result) {
      const text = `Amortization Calculator Results:
Loan Amount: $${result.loanAmount.toFixed(2)}
Monthly Payment: $${result.monthlyPayment.toFixed(2)}
Total Interest: $${result.totalInterest.toFixed(2)}
Loan Term: ${result.loanTerm} years
Interest Rate: ${result.interestRate.toFixed(2)}%`
      navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setLoanAmount("")
    setLoanTerm("")
    setInterestRate("")
    setExtraPayment("")
    setResult(null)
  }

  return (
    <div className="space-y-6">
      {}
      <Card>
        <CardHeader className="pb-8">
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-foreground" />
            Advanced Amortization Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Loan Amount</Label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="200000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="loanTerm">Loan Term (years)</Label>
              <Input
                id="loanTerm"
                type="number"
                placeholder="15"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="interestRate">Interest Rate (%)</Label>
              <Input
                id="interestRate"
                type="number"
                placeholder="6"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="extraPayment">Extra Payment (optional)</Label>
              <Input
                id="extraPayment"
                type="number"
                placeholder="0"
                value={extraPayment}
                onChange={(e) => setExtraPayment(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={calculateAmortization} className="flex-1">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate
            </Button>
            <Button variant="outline" onClick={clearAll}>
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>

      {}
      {result && (
        <div className="space-y-6">
          {}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-heading-accent" />
                Amortization Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Monthly Payment</Label>
                  <div className="text-3xl font-bold text-heading-accent">
                    ${result.monthlyPayment.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Total Interest</Label>
                  <div className="text-3xl font-bold text-foreground">
                    ${result.totalInterest.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Total Payments</div>
                  <div className="text-lg font-semibold text-foreground">${result.totalPayments.toFixed(2)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Interest Rate</div>
                  <div className="text-lg font-semibold text-foreground">{result.interestRate.toFixed(2)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Loan Term</div>
                  <div className="text-lg font-semibold text-foreground">{result.loanTerm} years</div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={copyResult} variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-foreground" />
                Payment Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-heading-accent mb-2">Principal</h3>
                  <div className="text-2xl font-bold text-heading-accent">{result.principalPercentage.toFixed(1)}%</div>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-foreground mb-2">Interest</h3>
                  <div className="text-2xl font-bold text-foreground">{result.interestPercentage.toFixed(1)}%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {}
          {parseFloat(extraPayment) > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-heading-accent" />
                  Extra Payment Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-foreground mb-2">Interest Savings</h3>
                    <div className="text-2xl font-bold text-foreground">${result.extraPaymentAnalysis.savings.toFixed(2)}</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-heading-accent mb-2">Time Saved</h3>
                    <div className="text-2xl font-bold text-heading-accent">{result.extraPaymentAnalysis.timeSaved} months</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-foreground" />
                Annual Amortization Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Year</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Interest</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Principal</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Ending Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.amortizationSchedule.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">{row.year}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.interest.toFixed(2)}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.principal.toFixed(2)}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.endingBalance.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-foreground" />
                Monthly Schedule (First 12 Months)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Month</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Payment</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Principal</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Interest</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.monthlySchedule.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">{row.month}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.payment.toFixed(2)}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.principal.toFixed(2)}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.interest.toFixed(2)}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.balance.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-heading-accent" />
                Personalized Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Payment Strategies</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.paymentStrategies.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent">Refinancing Tips</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.refinancingTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Debt Reduction Tips</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.debtReductionTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
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
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-gray-500" />
              Recent Calculations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">
                      ${item.loanAmount.toFixed(0)} @ {item.interestRate.toFixed(1)}% for {item.loanTerm} years
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${item.monthlyPayment.toFixed(2)}/month
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-foreground" />
            Amortization Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-muted rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">
                  Professional Amortization Analysis
                </p>
                <p className="text-foreground">
                  This calculator provides comprehensive loan amortization analysis with detailed payment schedules, extra payment analysis, and personalized recommendations for optimal loan management.
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Detailed Schedules:</strong> Complete annual and monthly amortization schedules with principal and interest breakdowns.
            </p>
            <p>
              <strong>Extra Payment Analysis:</strong> Calculate savings and time reduction from additional payments.
            </p>
            <p>
              <strong>Payment Strategies:</strong> Personalized recommendations based on your loan terms and interest rate.
            </p>
            <p>
              <strong>Professional Accuracy:</strong> Industry-standard calculations for mortgages, auto loans, and personal loans.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
