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
      navigator.clipboard.writeText(text)
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
    <div className="space-y-6">
      {/* Main Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Advanced Finance Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fv">FV (Future Value)</Label>
              <Input
                id="fv"
                type="number"
                placeholder="0"
                value={fv}
                onChange={(e) => setFv(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="pmt">PMT (Periodic Payment)</Label>
              <Input
                id="pmt"
                type="number"
                placeholder="0"
                value={pmt}
                onChange={(e) => setPmt(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="iy">I/Y (Interest per Year) %</Label>
              <Input
                id="iy"
                type="number"
                placeholder="0"
                value={iy}
                onChange={(e) => setIy(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="n">N (# of Periods)</Label>
              <Input
                id="n"
                type="number"
                placeholder="0"
                value={n}
                onChange={(e) => setN(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="pv">PV (Present Value)</Label>
              <Input
                id="pv"
                type="number"
                placeholder="0"
                value={pv}
                onChange={(e) => setPv(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="paymentTiming">Payment Timing</Label>
              <Select value={paymentTiming} onValueChange={setPaymentTiming}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="end">End of Period</SelectItem>
                  <SelectItem value="beginning">Beginning of Period</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={calculateFinance} className="flex-1">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate
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
                <DollarSign className="h-5 w-5 text-green-500" />
                Finance Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Future Value (FV)</Label>
                  <div className="text-3xl font-bold text-blue-600">
                    ${result.fv.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Present Value (PV)</Label>
                  <div className="text-3xl font-bold text-green-600">
                    ${result.pv.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Periodic Payment</div>
                  <div className="text-lg font-semibold text-purple-600">${result.pmt.toFixed(2)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Interest Rate</div>
                  <div className="text-lg font-semibold text-orange-600">{result.iy.toFixed(2)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Periods</div>
                  <div className="text-lg font-semibold text-red-600">{result.n.toFixed(0)}</div>
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

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                Financial Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Sum of Payments</h3>
                  <div className="text-2xl font-bold text-blue-600">${result.summary.sumOfPayments.toFixed(2)}</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Total Interest</h3>
                  <div className="text-2xl font-bold text-green-600">${result.summary.totalInterest.toFixed(2)}</div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Principal Amount</h3>
                  <div className="text-2xl font-bold text-purple-600">${result.summary.principalAmount.toFixed(2)}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Amortization Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                Amortization Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Period</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">PV</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">PMT</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Interest</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">FV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.amortizationSchedule.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">{row.period}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.presentValue.toFixed(2)}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.payment.toFixed(2)}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.interest.toFixed(2)}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.futureValue.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Investment Scenarios */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Investment Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.comparison.scenarios.map((scenario, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="font-medium">{scenario.scenario}</span>
                      <p className="text-sm text-muted-foreground">${scenario.futureValue.toFixed(2)}</p>
                    </div>
                    <Badge variant={scenario.difference > 0 ? "default" : "destructive"}>
                      {scenario.difference > 0 ? "+" : ""}${scenario.difference.toFixed(2)}
                    </Badge>
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
                  <h4 className="font-semibold mb-3 text-blue-600">Investment Tips</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.investmentTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Loan Advice</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.loanAdvice.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-600">Financial Planning</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.financialPlanning.map((rec, index) => (
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
                      FV: ${item.fv.toFixed(0)} | PV: ${item.pv.toFixed(0)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.iy.toFixed(1)}% for {item.n.toFixed(0)} periods
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
            Finance Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Professional Time Value of Money Calculator
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  This calculator uses the same formulas as professional financial calculators (BA II Plus, HP 12CP). Calculate any of the 5 key TVM variables: FV, PV, PMT, I/Y, or N.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Time Value of Money:</strong> Calculate present value, future value, payments, interest rates, and periods.
            </p>
            <p>
              <strong>Amortization Schedule:</strong> Complete payment breakdown showing principal and interest.
            </p>
            <p>
              <strong>Investment Analysis:</strong> Compare different investment scenarios and returns.
            </p>
            <p>
              <strong>Loan Calculations:</strong> Analyze loan payments, interest, and payoff strategies.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
