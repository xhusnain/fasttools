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
      
      // Use Newton-Raphson method to find interest rate
      let rate = 0.01 // Start with 1%
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
      
      // Generate amortization schedule
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

    // Rate optimization recommendations
    if (rate > 8) {
      rateOptimization.push("Consider shopping around for better rates")
      rateOptimization.push("Improve your credit score to qualify for lower rates")
    }
    if (rate > 12) {
      rateOptimization.push("This rate is quite high - consider secured loan options")
      rateOptimization.push("Look into credit union rates which are often lower")
    }

    // Loan tips
    loanTips.push("Make extra principal payments to reduce total interest")
    loanTips.push("Consider bi-weekly payments to pay off loan faster")
    loanTips.push("Refinance if rates drop significantly")
    loanTips.push("Avoid prepayment penalties when possible")

    // Refinancing tips
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
    <div className="space-y-6">
      {/* Main Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Advanced Interest Rate Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="loanAmount">Loan Amount ($)</Label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="32000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="monthlyPayment">Monthly Payment ($)</Label>
              <Input
                id="monthlyPayment"
                type="number"
                placeholder="960"
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="loanTerm">Loan Term (Years)</Label>
              <Input
                id="loanTerm"
                type="number"
                placeholder="3"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="loanTermMonths">Additional Months</Label>
              <Input
                id="loanTermMonths"
                type="number"
                placeholder="0"
                value={loanTermMonths}
                onChange={(e) => setLoanTermMonths(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={calculateInterestRate} className="flex-1">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Interest Rate
            </Button>
            <Button variant="outline" onClick={clearAll}>
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Main Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Percent className="h-5 w-5 text-green-500" />
                Interest Rate Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Interest Rate</Label>
                  <div className="text-3xl font-bold text-blue-600">
                    {result.interestRate.toFixed(3)}%
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Monthly Payment</Label>
                  <div className="text-3xl font-bold text-green-600">
                    ${result.monthlyPayment.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Total Interest</div>
                  <div className="text-lg font-semibold text-red-600">${result.totalInterest.toFixed(2)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Total Payments</div>
                  <div className="text-lg font-semibold text-purple-600">${result.totalPayments.toFixed(2)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Loan Term</div>
                  <div className="text-lg font-semibold text-orange-600">{result.loanTerm} months</div>
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

          {/* Payment Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-purple-500" />
                Payment Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Principal</h3>
                  <div className="text-2xl font-bold text-blue-600">${result.paymentBreakdown.principal.toFixed(2)}</div>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{result.paymentBreakdown.principalPercentage.toFixed(1)}% of total</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Interest</h3>
                  <div className="text-2xl font-bold text-red-600">${result.paymentBreakdown.interest.toFixed(2)}</div>
                  <p className="text-sm text-red-600 dark:text-red-400">{result.paymentBreakdown.interestPercentage.toFixed(1)}% of total</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rate Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-orange-500" />
                Rate Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.comparison.otherRates.map((rate, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="font-medium">{rate.rate}% rate</span>
                      <p className="text-sm text-muted-foreground">${rate.monthlyPayment.toFixed(2)}/month</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={rate.difference > 0 ? "destructive" : "default"}>
                        {rate.difference > 0 ? "+" : ""}${rate.difference.toFixed(2)}
                      </Badge>
                      <p className="text-sm text-muted-foreground">${rate.totalInterest.toFixed(2)} interest</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-500" />
                Personalized Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Rate Optimization</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.rateOptimization.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Loan Tips</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.loanTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-600">Refinancing</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.refinancing.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
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

      {/* History Section */}
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
                      ${item.loanAmount.toFixed(0)} @ {item.interestRate.toFixed(3)}%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${item.monthlyPayment.toFixed(2)}/month - {item.loanTerm} months
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

      {/* Information Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            Interest Rate Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Professional Interest Rate Analysis
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  This calculator uses the Newton-Raphson method to determine the exact interest rate on loans with fixed terms and monthly payments. Perfect for analyzing car loans, personal loans, and other fixed-rate financing.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Newton-Raphson Method:</strong> Advanced mathematical algorithm for precise interest rate calculation.
            </p>
            <p>
              <strong>Amortization Analysis:</strong> Complete payment breakdown showing principal vs interest.
            </p>
            <p>
              <strong>Rate Comparison:</strong> Compare your rate against market rates from 3% to 10%.
            </p>
            <p>
              <strong>Optimization Tips:</strong> Personalized recommendations for better rates and loan management.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
