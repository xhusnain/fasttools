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

interface MortgageResult {
  homePrice: number
  downPayment: number
  loanAmount: number
  interestRate: number
  loanTerm: number
  monthlyPayment: number
  totalPayments: number
  totalInterest: number
  propertyTax: number
  homeInsurance: number
  pmiInsurance: number
  hoaFee: number
  otherCosts: number
  totalMonthlyPayment: number
  totalOutOfPocket: number
  principalPercentage: number
  interestPercentage: number
  propertyTaxPercentage: number
  homeInsurancePercentage: number
  otherCostsPercentage: number
  amortizationSchedule: Array<{
    year: number
    date: string
    interest: number
    principal: number
    endingBalance: number
  }>
  monthlySchedule: Array<{
    month: number
    interest: number
    principal: number
    balance: number
  }>
  recommendations: {
    mortgageOptimization: string[]
    paymentStrategies: string[]
    financialTips: string[]
  }
  scenarios: Array<{
    scenario: string
    monthlyPayment: number
    totalInterest: number
    savings: number
  }>
}

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState("")
  const [downPayment, setDownPayment] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [propertyTax, setPropertyTax] = useState("")
  const [homeInsurance, setHomeInsurance] = useState("")
  const [pmiInsurance, setPmiInsurance] = useState("")
  const [hoaFee, setHoaFee] = useState("")
  const [otherCosts, setOtherCosts] = useState("")
  const [startDate, setStartDate] = useState("")
  const [result, setResult] = useState<MortgageResult | null>(null)
  const [history, setHistory] = useState<MortgageResult[]>([])

  const calculateMortgage = () => {
    const price = parseFloat(homePrice) || 0
    const down = parseFloat(downPayment) || 0
    const term = parseFloat(loanTerm) || 0
    const rate = parseFloat(interestRate) || 0
    const tax = parseFloat(propertyTax) || 0
    const insurance = parseFloat(homeInsurance) || 0
    const pmi = parseFloat(pmiInsurance) || 0
    const hoa = parseFloat(hoaFee) || 0
    const other = parseFloat(otherCosts) || 0

    if (price <= 0) {
      alert("Home price must be greater than $0")
      return
    }
    if (down < 0 || down > 100) {
      alert("Down payment percentage must be between 0% and 100%")
      return
    }
    if (rate < 0) {
      alert("Interest rate must be 0% or higher")
      return
    }
    if (term <= 0) {
      alert("Loan term must be greater than 0 years")
      return
    }

    const downPaymentAmount = (price * down) / 100
    const loanAmount = price - downPaymentAmount
    const monthlyRate = rate / 100 / 12
    const totalMonths = term * 12

    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
                          (Math.pow(1 + monthlyRate, totalMonths) - 1)

    const totalPayments = monthlyPayment * totalMonths
    const totalInterest = totalPayments - loanAmount

    const monthlyPropertyTax = (price * tax / 100) / 12
    const monthlyHomeInsurance = insurance / 12
    const monthlyPmi = pmi / 12
    const monthlyHoa = hoa / 12
    const monthlyOtherCosts = other / 12

    const totalMonthlyPayment = monthlyPayment + monthlyPropertyTax + monthlyHomeInsurance +
                               monthlyPmi + monthlyHoa + monthlyOtherCosts
    const totalOutOfPocket = totalMonthlyPayment * totalMonths

    const principalPercentage = (loanAmount / totalOutOfPocket) * 100
    const interestPercentage = (totalInterest / totalOutOfPocket) * 100
    const propertyTaxPercentage = (monthlyPropertyTax * totalMonths / totalOutOfPocket) * 100
    const homeInsurancePercentage = (monthlyHomeInsurance * totalMonths / totalOutOfPocket) * 100
    const otherCostsPercentage = ((monthlyPmi + monthlyHoa + monthlyOtherCosts) * totalMonths / totalOutOfPocket) * 100

    const amortizationSchedule = generateAmortizationSchedule(loanAmount, monthlyRate, totalMonths, monthlyPayment, startDate)
    const monthlySchedule = generateMonthlySchedule(loanAmount, monthlyRate, totalMonths, monthlyPayment)

    const calculatedResult: MortgageResult = {
      homePrice: price,
      downPayment: downPaymentAmount,
      loanAmount: loanAmount,
      interestRate: rate,
      loanTerm: term,
      monthlyPayment: monthlyPayment,
      totalPayments: totalPayments,
      totalInterest: totalInterest,
      propertyTax: monthlyPropertyTax,
      homeInsurance: monthlyHomeInsurance,
      pmiInsurance: monthlyPmi,
      hoaFee: monthlyHoa,
      otherCosts: monthlyOtherCosts,
      totalMonthlyPayment: totalMonthlyPayment,
      totalOutOfPocket: totalOutOfPocket,
      principalPercentage: principalPercentage,
      interestPercentage: interestPercentage,
      propertyTaxPercentage: propertyTaxPercentage,
      homeInsurancePercentage: homeInsurancePercentage,
      otherCostsPercentage: otherCostsPercentage,
      amortizationSchedule: amortizationSchedule,
      monthlySchedule: monthlySchedule,
      recommendations: generateRecommendations(rate, loanAmount, term, monthlyPayment, down),
      scenarios: generateScenarios(loanAmount, rate, term, monthlyPayment)
    }

    setResult(calculatedResult)
    setHistory(prev => [calculatedResult, ...prev.slice(0, 4)])
  }

  const generateAmortizationSchedule = (principal: number, monthlyRate: number, totalMonths: number, monthlyPayment: number, startDate: string) => {
    const schedule = []
    let balance = principal
    const start = new Date(startDate || new Date())

    for (let year = 1; year <= Math.ceil(totalMonths / 12); year++) {
      let yearInterest = 0
      let yearPrincipal = 0
      const monthsInYear = Math.min(12, totalMonths - (year - 1) * 12)

      for (let month = 1; month <= monthsInYear; month++) {
        const interestPayment = balance * monthlyRate
        const principalPayment = monthlyPayment - interestPayment
        balance -= principalPayment
        yearInterest += interestPayment
        yearPrincipal += principalPayment
      }

      const yearStart = new Date(start)
      yearStart.setFullYear(yearStart.getFullYear() + year - 1)
      const yearEnd = new Date(yearStart)
      yearEnd.setFullYear(yearEnd.getFullYear() + 1)

      schedule.push({
        year: year,
        date: `${yearStart.toLocaleDateString('en-US', { month: 'short' })} ${yearStart.getFullYear()}-${yearEnd.toLocaleDateString('en-US', { month: 'short' })} ${yearEnd.getFullYear()}`,
        interest: yearInterest,
        principal: yearPrincipal,
        endingBalance: Math.max(0, balance)
      })

      if (balance <= 0) break
    }

    return schedule
  }

  const generateMonthlySchedule = (principal: number, monthlyRate: number, totalMonths: number, monthlyPayment: number) => {
    const schedule = []
    let balance = principal

    for (let month = 1; month <= Math.ceil(totalMonths); month++) {
      const interestPayment = balance * monthlyRate
      const principalPayment = Math.min(monthlyPayment - interestPayment, balance)
      balance -= principalPayment

      schedule.push({
        month: month,
        interest: interestPayment,
        principal: principalPayment,
        balance: Math.max(0, balance)
      })

      if (balance <= 0) break
    }

    return schedule
  }

  const generateRecommendations = (rate: number, amount: number, term: number, payment: number, downPayment: number) => {
    const mortgageOptimization: string[] = []
    const paymentStrategies: string[] = []
    const financialTips: string[] = []

    if (rate < 4) {
      mortgageOptimization.push("Consider making extra payments to reduce total interest")
      mortgageOptimization.push("Your low interest rate makes this a good mortgage to keep")
      mortgageOptimization.push("Focus on higher-interest debts first")
    } else if (rate < 6) {
      mortgageOptimization.push("Consider refinancing if rates drop significantly")
      mortgageOptimization.push("Make extra payments when possible to reduce total cost")
      mortgageOptimization.push("Balance between paying off mortgage and investing")
    } else {
      mortgageOptimization.push("Prioritize paying off this high-interest mortgage")
      mortgageOptimization.push("Consider refinancing to a lower rate if available")
      mortgageOptimization.push("Make extra payments a priority")
    }

    paymentStrategies.push("Make one extra payment per year to save interest")
    paymentStrategies.push("Round up to the nearest $100 for easy budgeting")
    paymentStrategies.push("Apply windfalls to principal when possible")
    paymentStrategies.push("Consider bi-weekly payment schedule")

    financialTips.push("Build an emergency fund before making extra payments")
    financialTips.push("Consider the opportunity cost of extra payments vs. investing")
    financialTips.push("Review your mortgage terms annually for better rates")
    financialTips.push("Track your mortgage progress to stay motivated")

    if (downPayment < 20) {
      financialTips.push("Consider paying PMI until you reach 20% equity")
      financialTips.push("Make extra payments to eliminate PMI faster")
    }

    return { mortgageOptimization, paymentStrategies, financialTips }
  }

  const generateScenarios = (amount: number, rate: number, term: number, payment: number) => {
    const monthlyRate = rate / 100 / 12
    const totalMonths = term * 12

    return [
      {
        scenario: "Current Payment",
        monthlyPayment: payment,
        totalInterest: (payment * totalMonths) - amount,
        savings: 0
      },
      {
        scenario: "+$100 Extra",
        monthlyPayment: payment + 100,
        totalInterest: ((payment + 100) * totalMonths) - amount,
        savings: 0
      },
      {
        scenario: "+$200 Extra",
        monthlyPayment: payment + 200,
        totalInterest: ((payment + 200) * totalMonths) - amount,
        savings: 0
      },
      {
        scenario: "Bi-weekly",
        monthlyPayment: payment * 1.083,
        totalInterest: ((payment * 1.083) * totalMonths) - amount,
        savings: 0
      }
    ]
  }

  const copyResult = () => {
    if (result) {
      const text = `Mortgage Calculator Results:
Home Price: $${result.homePrice.toFixed(2)}
Monthly Payment: $${result.monthlyPayment.toFixed(2)}
Total Interest: $${result.totalInterest.toFixed(2)}
Loan Term: ${result.loanTerm.toFixed(1)} years`
      navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setHomePrice("")
    setDownPayment("")
    setLoanTerm("")
    setInterestRate("")
    setPropertyTax("")
    setHomeInsurance("")
    setPmiInsurance("")
    setHoaFee("")
    setOtherCosts("")
    setStartDate("")
    setResult(null)
  }

  return (
    <div className="space-y-6">
      {}
      <Card>
        <CardHeader className="pb-8">
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-foreground" />
            Advanced Mortgage Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {}
          <div>
            <Label className="text-lg font-semibold mb-4 block">Basic Loan Information</Label>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="homePrice">Home Price</Label>
                <Input
                  id="homePrice"
                  type="number"
                  placeholder="400000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="downPayment">Down Payment (%)</Label>
                <Input
                  id="downPayment"
                  type="number"
                  placeholder="20"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                />
              </div>
            </div>
          </div>

          {}
          <div>
            <Label className="text-lg font-semibold mb-4 block">Loan Terms</Label>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="loanTerm">Loan Term (years)</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  placeholder="30"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  placeholder="6.337"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          {}
          <div>
            <Label className="text-lg font-semibold mb-4 block">Annual Tax & Costs</Label>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="propertyTax">Property Taxes (%)</Label>
                <Input
                  id="propertyTax"
                  type="number"
                  placeholder="1.2"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="homeInsurance">Home Insurance ($)</Label>
                <Input
                  id="homeInsurance"
                  type="number"
                  placeholder="1500"
                  value={homeInsurance}
                  onChange={(e) => setHomeInsurance(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pmiInsurance">PMI Insurance ($)</Label>
                <Input
                  id="pmiInsurance"
                  type="number"
                  placeholder="0"
                  value={pmiInsurance}
                  onChange={(e) => setPmiInsurance(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hoaFee">HOA Fee ($)</Label>
                <Input
                  id="hoaFee"
                  type="number"
                  placeholder="0"
                  value={hoaFee}
                  onChange={(e) => setHoaFee(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="otherCosts">Other Costs ($)</Label>
                <Input
                  id="otherCosts"
                  type="number"
                  placeholder="4000"
                  value={otherCosts}
                  onChange={(e) => setOtherCosts(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={calculateMortgage} className="flex-1">
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
                Mortgage Analysis Results
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
                  <Label className="text-sm font-medium">Total Out-of-Pocket</Label>
                  <div className="text-3xl font-bold text-foreground">
                    ${result.totalMonthlyPayment.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Total Interest</div>
                  <div className="text-lg font-semibold text-foreground">${result.totalInterest.toFixed(2)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Loan Amount</div>
                  <div className="text-lg font-semibold text-foreground">${result.loanAmount.toFixed(2)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Down Payment</div>
                  <div className="text-lg font-semibold text-foreground">${result.downPayment.toFixed(2)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Interest Rate</div>
                  <div className="text-lg font-semibold text-foreground">{result.interestRate.toFixed(3)}%</div>
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
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-heading-accent mb-2">Principal & Interest</h3>
                    <div className="text-2xl font-bold text-heading-accent">${result.monthlyPayment.toFixed(2)}</div>
                    <div className="text-sm text-heading-accent">{result.principalPercentage.toFixed(1)}%</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-foreground mb-2">Property Taxes</h3>
                    <div className="text-2xl font-bold text-foreground">${result.propertyTax.toFixed(2)}</div>
                    <div className="text-sm text-foreground">{result.propertyTaxPercentage.toFixed(1)}%</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-foreground mb-2">Home Insurance</h3>
                    <div className="text-2xl font-bold text-foreground">${result.homeInsurance.toFixed(2)}</div>
                    <div className="text-sm text-foreground">{result.homeInsurancePercentage.toFixed(1)}%</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-2">Other Costs</h3>
                    <div className="text-2xl font-bold text-foreground">${(result.pmiInsurance + result.hoaFee + result.otherCosts).toFixed(2)}</div>
                    <div className="text-sm text-foreground">{result.otherCostsPercentage.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-heading-accent" />
                Amortization Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Year</th>
                      <th className="text-left p-2">Date</th>
                      <th className="text-right p-2">Interest</th>
                      <th className="text-right p-2">Principal</th>
                      <th className="text-right p-2">Ending Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.amortizationSchedule.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">{row.year}</td>
                        <td className="p-2">{row.date}</td>
                        <td className="text-right p-2">${row.interest.toFixed(2)}</td>
                        <td className="text-right p-2">${row.principal.toFixed(2)}</td>
                        <td className="text-right p-2">${row.endingBalance.toFixed(2)}</td>
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
                <TrendingUp className="h-5 w-5 text-heading-accent" />
                Payment Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {result.scenarios.map((scenario, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-950/20 rounded-lg border border-gray-200 dark:border-gray-800">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{scenario.scenario}</h3>
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
                  <h4 className="font-semibold mb-3 text-foreground">Mortgage Optimization</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.mortgageOptimization.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent">Payment Strategies</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.paymentStrategies.map((rec, index) => (
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
                      ${item.homePrice.toFixed(0)} home - ${item.monthlyPayment.toFixed(2)}/month
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.loanTerm.toFixed(1)} years at {item.interestRate.toFixed(2)}%
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
            Mortgage Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-muted rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">
                  Comprehensive Mortgage Analysis
                </p>
                <p className="text-foreground">
                  This calculator provides detailed mortgage analysis with amortization schedules, scenario comparisons, and personalized recommendations for optimal mortgage management.
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Mortgage Payments:</strong> Principal, interest, property taxes, insurance, and other costs.
            </p>
            <p>
              <strong>Amortization Schedules:</strong> Detailed year-by-year and month-by-month payment breakdowns.
            </p>
            <p>
              <strong>Scenario Analysis:</strong> Compare different payment strategies and their impact.
            </p>
            <p>
              <strong>Cost Optimization:</strong> Strategies to reduce total mortgage costs and payoff time.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
