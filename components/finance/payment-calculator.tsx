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
  ForkKnife,
  PiggyBank,
  Building,
  Heart,
  TreePine,
  Plane,
  BookOpen,
  GraduationCap,
  Baby,
  Home as HomeIcon,
  Car as CarIcon,
  ShoppingBag as ShoppingBagIcon,
  CreditCard as CreditCardIcon,
  Banknote as BanknoteIcon,
  Coins as CoinsIcon,
  Wallet as WalletIcon,
  Briefcase as BriefcaseIcon,
  Store as StoreIcon,
  Truck as TruckIcon,
  Package as PackageIcon,
  Tag as TagIcon,
  ShoppingCart as ShoppingCartIcon,
  HandHeart as HandHeartIcon,
  Gift as GiftIcon,
  Award as AwardIcon,
  Trophy as TrophyIcon
} from "lucide-react"

import {
  calculateMonthlyPayment,
  generateAmortizationSchedule,
  generateMonthlySchedule,
  generateLoanRecommendations,
  generateLoanScenarios,
} from "@/lib/finance-utils"

interface PaymentResult {
  calculationType: string
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
    interest: number
    principal: number
    endingBalance: number
  }>
  recommendations: {
    paymentStrategies: string[]
    loanOptimization: string[]
    financialTips: string[]
  }
  scenarios: Array<{
    scenario: string
    monthlyPayment: number
    totalInterest: number
    savings: number
  }>
}

export default function PaymentCalculator() {
  const [calculationType, setCalculationType] = useState("fixedTerm")
  const [loanAmount, setLoanAmount] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [monthlyPayment, setMonthlyPayment] = useState("")
  const [result, setResult] = useState<PaymentResult | null>(null)
  const [history, setHistory] = useState<PaymentResult[]>([])

  const calculatePayment = () => {
    const amount = parseFloat(loanAmount) || 0
    const term = parseFloat(loanTerm) || 0
    const rate = parseFloat(interestRate) || 0
    const payment = parseFloat(monthlyPayment) || 0

    // GInput validation
    if (amount <= 0) {
      alert("Loan amount must be greater than $0")
      return
    }
    if (rate < 0) {
      alert("Interest rate must be 0% or higher")
      return
    }
    if (payment < 0) {
      alert("Monthly payment must be $0 or higher")
      return
    }

    const monthlyRate = rate / 100 / 12
    const totalMonths = term * 12

    let calculatedResult: PaymentResult

    if (calculationType === "fixedTerm") {
      // Calculate monthly payment for fixed term
      if (term <= 0) {
        alert("Loan term must be greater than 0 years")
        return
      }

      const monthlyPaymentAmount = calculateMonthlyPayment(amount, monthlyRate, totalMonths)

      const totalPayments = monthlyPaymentAmount * totalMonths
      const totalInterest = totalPayments - amount
      const principalPercentage = (amount / totalPayments) * 100
      const interestPercentage = (totalInterest / totalPayments) * 100

      // Generate amortization schedule
      const amortizationSchedule = generateAmortizationSchedule(amount, monthlyRate, totalMonths, monthlyPaymentAmount)
      const monthlySchedule = generateMonthlySchedule(amount, monthlyRate, totalMonths, monthlyPaymentAmount)

      const recs = generateLoanRecommendations(rate, amount, term, monthlyPaymentAmount)
      const scenarios = generateLoanScenarios(amount, rate, term, monthlyPaymentAmount)

      calculatedResult = {
        calculationType: "fixedTerm",
        loanAmount: amount,
        loanTerm: term,
        interestRate: rate,
        monthlyPayment: monthlyPaymentAmount,
        totalPayments: totalPayments,
        totalInterest: totalInterest,
        principalPercentage: principalPercentage,
        interestPercentage: interestPercentage,
        amortizationSchedule: amortizationSchedule,
        monthlySchedule: monthlySchedule,
        recommendations: {
          loanOptimization: recs.optimization,
          paymentStrategies: recs.strategies,
          financialTips: recs.tips
        },
        scenarios: scenarios.map(s => ({
          scenario: s.title,
          monthlyPayment: s.payment,
          totalInterest: s.totalInterest,
          savings: s.savings
        }))
      }
    } else {
      // Calculate loan term for fixed payment
      if (payment <= 0) {
        alert("Monthly payment must be greater than $0")
        return
      }

      if (monthlyRate === 0) {
        // No interest case
        const months = Math.ceil(amount / payment)
        const years = months / 12

        const recs = generateLoanRecommendations(rate, amount, years, payment)
        const scenarios = generateLoanScenarios(amount, rate, years, payment)

        calculatedResult = {
          calculationType: "fixedPayment",
          loanAmount: amount,
          loanTerm: years,
          interestRate: rate,
          monthlyPayment: payment,
          totalPayments: payment * months,
          totalInterest: 0,
          principalPercentage: 100,
          interestPercentage: 0,
          amortizationSchedule: [],
          monthlySchedule: [],
          recommendations: {
            loanOptimization: recs.optimization,
            paymentStrategies: recs.strategies,
            financialTips: recs.tips
          },
          scenarios: scenarios.map(s => ({
            scenario: s.title,
            monthlyPayment: s.payment,
            totalInterest: s.totalInterest,
            savings: s.savings
          }))
        }
      } else {
        // Calculate months needed to pay off loan
        const months = Math.log(1 + (amount * monthlyRate) / payment) / Math.log(1 + monthlyRate)

        if (months <= 0 || !isFinite(months)) {
          alert("Monthly payment is too low to pay off the loan. Please increase payment amount or decrease loan amount.")
          return
        }

        const years = months / 12
        const totalPayments = payment * months
        const totalInterest = totalPayments - amount
        const principalPercentage = (amount / totalPayments) * 100
        const interestPercentage = (totalInterest / totalPayments) * 100

        // Generate amortization schedule
        const amortizationSchedule = generateAmortizationSchedule(amount, monthlyRate, months, payment)
        const monthlySchedule = generateMonthlySchedule(amount, monthlyRate, months, payment)

        const recs = generateLoanRecommendations(rate, amount, years, payment)
        const scenarios = generateLoanScenarios(amount, rate, years, payment)

        calculatedResult = {
          calculationType: "fixedPayment",
          loanAmount: amount,
          loanTerm: years,
          interestRate: rate,
          monthlyPayment: payment,
          totalPayments: totalPayments,
          totalInterest: totalInterest,
          principalPercentage: principalPercentage,
          interestPercentage: interestPercentage,
          amortizationSchedule: amortizationSchedule,
          monthlySchedule: monthlySchedule,
          recommendations: {
            loanOptimization: recs.optimization,
            paymentStrategies: recs.strategies,
            financialTips: recs.tips
          },
          scenarios: scenarios.map(s => ({
            scenario: s.title,
            monthlyPayment: s.payment,
            totalInterest: s.totalInterest,
            savings: s.savings
          }))
        }
      }
    }

    setResult(calculatedResult)
    setHistory(prev => [calculatedResult, ...prev.slice(0, 4)])
  }



  const copyResult = () => {
    if (result) {
      const text = `Payment Calculator Results:
Loan Amount: $${result.loanAmount.toFixed(2)}
Monthly Payment: $${result.monthlyPayment.toFixed(2)}
Total Interest: $${result.totalInterest.toFixed(2)}
Loan Term: ${result.loanTerm.toFixed(1)} years`
      void navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setLoanAmount("")
    setLoanTerm("")
    setInterestRate("")
    setMonthlyPayment("")
    setResult(null)
  }

  return (
    <div className="space-y-6">
      {/* Main Calculator */}
      <GCard>
        <GCardHeader className="pb-8">
          <GCardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-foreground" />
            Advanced Payment Calculator
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Calculation Type Selection */}
          <div>
            <GLabel className="text-lg font-semibold mb-4 block">Calculation Type</GLabel>
            <GTabs value={calculationType} onValueChange={setCalculationType}>
              <GTabsList className="grid w-full grid-cols-2">
                <GTabsTrigger value="fixedTerm">Fixed Term</GTabsTrigger>
                <GTabsTrigger value="fixedPayment">Fixed Payment</GTabsTrigger>
              </GTabsList>
            </GTabs>
          </div>

          {/* GInput Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="loanAmount">Loan Amount</GLabel>
              <GInput
                id="loanAmount"
                type="number"
                placeholder="200000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="interestRate">Interest Rate (%)</GLabel>
              <GInput
                id="interestRate"
                type="number"
                placeholder="6"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
          </div>

          {calculationType === "fixedTerm" && (
            <div className="space-y-2">
              <GLabel htmlFor="loanTerm">Loan Term (years)</GLabel>
              <GInput
                id="loanTerm"
                type="number"
                placeholder="15"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
          )}

          {calculationType === "fixedPayment" && (
            <div className="space-y-2">
              <GLabel htmlFor="monthlyPayment">Monthly Payment</GLabel>
              <GInput
                id="monthlyPayment"
                type="number"
                placeholder="1500"
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(e.target.value)}
              />
            </div>
          )}

          <div className="flex gap-2">
            <GButton onClick={calculatePayment} className="flex-1">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate
            </GButton>
            <GButton variant="outline" onClick={clearAll}>
              Clear All
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Main Results */}
          <GCard>
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-heading-accent" />
                Payment Analysis Results
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <GLabel className="text-sm font-medium">Monthly Payment</GLabel>
                  <div className="text-3xl font-bold text-heading-accent">
                    ${result.monthlyPayment.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-2">
                  <GLabel className="text-sm font-medium">Total Interest</GLabel>
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
                  <div className="text-sm text-muted-foreground">Loan Term</div>
                  <div className="text-lg font-semibold text-foreground">{result.loanTerm.toFixed(1)} years</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Interest Rate</div>
                  <div className="text-lg font-semibold text-foreground">{result.interestRate.toFixed(2)}%</div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <GButton onClick={copyResult} variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Results
                </GButton>
              </div>
            </GCardContent>
          </GCard>

          {/* Payment Breakdown */}
          <GCard>
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-foreground" />
                Payment Breakdown
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2">Principal</h3>
                    <div className="text-2xl font-bold text-heading-accent">${result.loanAmount.toFixed(2)}</div>
                    <div className="text-sm text-heading-accent">{result.principalPercentage.toFixed(1)}%</div>
                  </div>
                  <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <h3 className="font-semibold text-foreground mb-2">Interest</h3>
                    <div className="text-2xl font-bold text-foreground">${result.totalInterest.toFixed(2)}</div>
                    <div className="text-sm text-foreground">{result.interestPercentage.toFixed(1)}%</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Total Cost</h3>
                    <div className="text-2xl font-bold text-foreground">${result.totalPayments.toFixed(2)}</div>
                    <div className="text-sm text-foreground">Over {result.loanTerm.toFixed(1)} years</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-2">Monthly Payment</h3>
                    <div className="text-2xl font-bold text-foreground">${result.monthlyPayment.toFixed(2)}</div>
                    <div className="text-sm text-foreground">Per month</div>
                  </div>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Amortization Schedule */}
          <GCard>
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-heading-accent" />
                Amortization Schedule
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Year</th>
                      <th className="text-right p-2">Interest</th>
                      <th className="text-right p-2">Principal</th>
                      <th className="text-right p-2">Ending Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.amortizationSchedule.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">{row.year}</td>
                        <td className="text-right p-2">${row.interest.toFixed(2)}</td>
                        <td className="text-right p-2">${row.principal.toFixed(2)}</td>
                        <td className="text-right p-2">${row.endingBalance.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* Scenarios */}
          <GCard>
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-heading-accent" />
                Payment Scenarios
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {result.scenarios.map((scenario, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg border border-border">
                    <h3 className="font-semibold text-foreground mb-2">{scenario.scenario}</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly Payment:</span>
                        <span className="font-medium">${scenario.monthlyPayment.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Interest:</span>
                        <span className="font-medium">${scenario.totalInterest.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GCardContent>
          </GCard>

          {/* Recommendations */}
          <GCard>
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-heading-accent" />
                Personalized Recommendations
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
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
                  <h4 className="font-semibold mb-3 text-heading-accent">Loan Optimization</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.loanOptimization.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Financial Tips</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.financialTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
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
        <GCard>
          <GCardHeader>
            <GCardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-muted-foreground" />
              Recent Calculations
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">
                      ${item.loanAmount.toFixed(0)} loan - ${item.monthlyPayment.toFixed(2)}/month
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.loanTerm.toFixed(1)} years at {item.interestRate.toFixed(2)}%
                    </div>
                  </div>
                  <GButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
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
      <GCard>
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-foreground" />
            Payment Calculator Features
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-3">
          <div className="p-4 bg-muted rounded-lg border border-border">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">
                  Comprehensive Payment Analysis
                </p>
                <p className="text-foreground">
                  This calculator provides detailed payment analysis with amortization schedules, scenario comparisons, and personalized recommendations for optimal loan management.
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Fixed Term Mode:</strong> Calculate monthly payment for a fixed loan term.
            </p>
            <p>
              <strong>Fixed Payment Mode:</strong> Calculate loan term for a fixed monthly payment.
            </p>
            <p>
              <strong>Amortization Schedules:</strong> Detailed year-by-year and month-by-month payment breakdowns.
            </p>
            <p>
              <strong>Scenario Analysis:</strong> Compare different payment strategies and their impact.
            </p>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
