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

interface SalaryResult {
  salaryAmount: number
  payFrequency: string
  hoursPerWeek: number
  daysPerWeek: number
  holidaysPerYear: number
  vacationDaysPerYear: number
  workingDaysPerYear: number
  adjustedWorkingDays: number
  calculations: {
    hourly: { unadjusted: number; adjusted: number }
    daily: { unadjusted: number; adjusted: number }
    weekly: { unadjusted: number; adjusted: number }
    biweekly: { unadjusted: number; adjusted: number }
    semimonthly: { unadjusted: number; adjusted: number }
    monthly: { unadjusted: number; adjusted: number }
    quarterly: { unadjusted: number; adjusted: number }
    annual: { unadjusted: number; adjusted: number }
  }
  recommendations: {
    salaryOptimization: string[]
    negotiationTips: string[]
    careerAdvice: string[]
  }
  comparison: {
    industryAverages: Array<{
      industry: string
      averageSalary: number
      difference: number
    }>
  }
}

const payFrequencies = [
  { value: "hourly", label: "Hourly" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "biweekly", label: "Bi-weekly" },
  { value: "semimonthly", label: "Semi-monthly" },
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
  { value: "annual", label: "Annual" }
]

export default function SalaryCalculator() {
  const [salaryAmount, setSalaryAmount] = useState("")
  const [payFrequency, setPayFrequency] = useState("hourly")
  const [hoursPerWeek, setHoursPerWeek] = useState("40")
  const [daysPerWeek, setDaysPerWeek] = useState("5")
  const [holidaysPerYear, setHolidaysPerYear] = useState("10")
  const [vacationDaysPerYear, setVacationDaysPerYear] = useState("15")
  const [result, setResult] = useState<SalaryResult | null>(null)
  const [history, setHistory] = useState<SalaryResult[]>([])

  const calculateSalary = () => {
    if (salaryAmount && hoursPerWeek && daysPerWeek && holidaysPerYear && vacationDaysPerYear) {
      const amount = parseFloat(salaryAmount)
      const hours = parseFloat(hoursPerWeek)
      const days = parseFloat(daysPerWeek)
      const holidays = parseFloat(holidaysPerYear)
      const vacation = parseFloat(vacationDaysPerYear)
      
      // Calculate working days per year (52 weeks * 5 days = 260 days)
      const workingDaysPerYear = 52 * days
      const adjustedWorkingDays = workingDaysPerYear - holidays - vacation
      
      // Calculate hourly rate first
      let hourlyRate: number
      
      switch (payFrequency) {
        case "hourly":
          hourlyRate = amount
          break
        case "daily":
          hourlyRate = amount / hours
          break
        case "weekly":
          hourlyRate = amount / hours
          break
        case "biweekly":
          hourlyRate = amount / (hours * 2)
          break
        case "semimonthly":
          hourlyRate = amount / (hours * 2.17) // 52 weeks / 24 pay periods
          break
        case "monthly":
          hourlyRate = amount / (hours * 4.33) // 52 weeks / 12 months
          break
        case "quarterly":
          hourlyRate = amount / (hours * 13) // 52 weeks / 4 quarters
          break
        case "annual":
          hourlyRate = amount / (hours * 52)
          break
        default:
          hourlyRate = amount
      }
      
      // Calculate all pay frequencies
      const calculations = {
        hourly: {
          unadjusted: hourlyRate,
          adjusted: hourlyRate
        },
        daily: {
          unadjusted: hourlyRate * hours,
          adjusted: hourlyRate * hours
        },
        weekly: {
          unadjusted: hourlyRate * hours,
          adjusted: hourlyRate * hours
        },
        biweekly: {
          unadjusted: hourlyRate * hours * 2,
          adjusted: hourlyRate * hours * 2
        },
        semimonthly: {
          unadjusted: hourlyRate * hours * 2.17,
          adjusted: hourlyRate * hours * 2.17
        },
        monthly: {
          unadjusted: hourlyRate * hours * 4.33,
          adjusted: hourlyRate * hours * 4.33
        },
        quarterly: {
          unadjusted: hourlyRate * hours * 13,
          adjusted: hourlyRate * hours * 13
        },
        annual: {
          unadjusted: hourlyRate * hours * 52,
          adjusted: hourlyRate * hours * 52
        }
      }
      
      // Adjust for holidays and vacation days
      const adjustmentFactor = adjustedWorkingDays / workingDaysPerYear
      calculations.hourly.adjusted = hourlyRate * adjustmentFactor
      calculations.daily.adjusted = calculations.daily.unadjusted * adjustmentFactor
      calculations.weekly.adjusted = calculations.weekly.unadjusted * adjustmentFactor
      calculations.biweekly.adjusted = calculations.biweekly.unadjusted * adjustmentFactor
      calculations.semimonthly.adjusted = calculations.semimonthly.unadjusted * adjustmentFactor
      calculations.monthly.adjusted = calculations.monthly.unadjusted * adjustmentFactor
      calculations.quarterly.adjusted = calculations.quarterly.unadjusted * adjustmentFactor
      calculations.annual.adjusted = calculations.annual.unadjusted * adjustmentFactor
      
      const newResult: SalaryResult = {
        salaryAmount: amount,
        payFrequency: payFrequency,
        hoursPerWeek: hours,
        daysPerWeek: days,
        holidaysPerYear: holidays,
        vacationDaysPerYear: vacation,
        workingDaysPerYear: workingDaysPerYear,
        adjustedWorkingDays: adjustedWorkingDays,
        calculations: calculations,
        recommendations: generateRecommendations(amount, payFrequency, calculations.annual.adjusted),
        comparison: generateComparison(calculations.annual.adjusted)
      }
      
      setResult(newResult)
      setHistory(prev => [newResult, ...prev.slice(0, 4)])
    }
  }

  const generateRecommendations = (amount: number, frequency: string, annualSalary: number) => {
    const salaryOptimization: string[] = []
    const negotiationTips: string[] = []
    const careerAdvice: string[] = []

    // Salary optimization recommendations
    if (annualSalary < 50000) {
      salaryOptimization.push("Consider negotiating for a higher base salary")
      salaryOptimization.push("Research market rates for your position and experience")
    }
    if (annualSalary > 100000) {
      salaryOptimization.push("Explore executive compensation packages")
      salaryOptimization.push("Consider equity and bonus structures")
    }

    // Negotiation tips
    negotiationTips.push("Research industry salary benchmarks before negotiations")
    negotiationTips.push("Highlight your achievements and value to the company")
    negotiationTips.push("Consider total compensation, not just base salary")
    negotiationTips.push("Practice your negotiation pitch beforehand")

    // Career advice
    careerAdvice.push("Continuously develop new skills and certifications")
    careerAdvice.push("Build a strong professional network")
    careerAdvice.push("Consider lateral moves for experience and growth")
    careerAdvice.push("Track your accomplishments for performance reviews")

    return { salaryOptimization, negotiationTips, careerAdvice }
  }

  const generateComparison = (annualSalary: number) => {
    const industryAverages = [
      { industry: "Technology", averageSalary: 85000, difference: 85000 - annualSalary },
      { industry: "Healthcare", averageSalary: 75000, difference: 75000 - annualSalary },
      { industry: "Finance", averageSalary: 80000, difference: 80000 - annualSalary },
      { industry: "Education", averageSalary: 55000, difference: 55000 - annualSalary },
      { industry: "Manufacturing", averageSalary: 65000, difference: 65000 - annualSalary },
      { industry: "Retail", averageSalary: 45000, difference: 45000 - annualSalary }
    ]

    return { industryAverages }
  }

  const copyResult = () => {
    if (result) {
      const text = `Salary Calculator Results:
Base Salary: $${result.salaryAmount.toFixed(2)} ${result.payFrequency}
Annual Salary: $${result.calculations.annual.adjusted.toFixed(2)}
Hourly Rate: $${result.calculations.hourly.adjusted.toFixed(2)}
Working Days: ${result.adjustedWorkingDays} days/year`
      navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setSalaryAmount("")
    setPayFrequency("hourly")
    setHoursPerWeek("40")
    setDaysPerWeek("5")
    setHolidaysPerYear("10")
    setVacationDaysPerYear("15")
    setResult(null)
  }

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full overflow-hidden">
      {/* Main Calculator */}
      <Card className="bg-card border-border w-full overflow-hidden">
        <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
            <Calculator className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
            <span className="text-foreground">Advanced Salary Calculator</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 px-2 sm:px-3 md:px-4">
          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="salaryAmount" className="text-heading-accent text-xs sm:text-sm">Salary Amount ($)</Label>
              <Input
                id="salaryAmount"
                type="number"
                placeholder="50"
                value={salaryAmount}
                onChange={(e) => setSalaryAmount(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="payFrequency" className="text-heading-accent text-xs sm:text-sm">Pay Frequency</Label>
              <Select value={payFrequency} onValueChange={setPayFrequency}>
                <SelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {payFrequencies.map((freq) => (
                    <SelectItem key={freq.value} value={freq.value}>
                      {freq.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="hoursPerWeek" className="text-heading-accent text-xs sm:text-sm">Hours per Week</Label>
              <Input
                id="hoursPerWeek"
                type="number"
                placeholder="40"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="daysPerWeek" className="text-heading-accent text-xs sm:text-sm">Days per Week</Label>
              <Input
                id="daysPerWeek"
                type="number"
                placeholder="5"
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="holidaysPerYear" className="text-heading-accent text-xs sm:text-sm">Holidays per Year</Label>
              <Input
                id="holidaysPerYear"
                type="number"
                placeholder="10"
                value={holidaysPerYear}
                onChange={(e) => setHolidaysPerYear(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="vacationDaysPerYear" className="text-heading-accent text-xs sm:text-sm">Vacation Days per Year</Label>
              <Input
                id="vacationDaysPerYear"
                type="number"
                placeholder="15"
                value={vacationDaysPerYear}
                onChange={(e) => setVacationDaysPerYear(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Button onClick={calculateSalary} className="w-full sm:w-auto text-sm sm:text-base">
              <Calculator className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Calculate Salary
            </Button>
            <Button variant="outline" onClick={clearAll} className="w-full sm:w-auto text-sm sm:text-base">
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Results */}
          <Card className="bg-card border-border w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <DollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                <span className="text-foreground">Salary Calculation Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-card border-b border-border">
                      <th className="border border-border p-2 sm:p-3 text-left text-xs sm:text-sm text-heading-accent">Pay Frequency</th>
                      <th className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-heading-accent">Unadjusted</th>
                      <th className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-heading-accent">Holidays & Vacation Adjusted</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2 sm:p-3 font-medium text-xs sm:text-sm text-foreground">Hourly</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.hourly.unadjusted.toFixed(2)}</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.hourly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 sm:p-3 font-medium text-xs sm:text-sm text-foreground">Daily</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.daily.unadjusted.toFixed(2)}</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.daily.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 sm:p-3 font-medium text-xs sm:text-sm text-foreground">Weekly</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.weekly.unadjusted.toFixed(2)}</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.weekly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 sm:p-3 font-medium text-xs sm:text-sm text-foreground">Bi-weekly</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.biweekly.unadjusted.toFixed(2)}</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.biweekly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 sm:p-3 font-medium text-xs sm:text-sm text-foreground">Semi-monthly</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.semimonthly.unadjusted.toFixed(2)}</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.semimonthly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 sm:p-3 font-medium text-xs sm:text-sm text-foreground">Monthly</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.monthly.unadjusted.toFixed(2)}</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.monthly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 sm:p-3 font-medium text-xs sm:text-sm text-foreground">Quarterly</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.quarterly.unadjusted.toFixed(2)}</td>
                      <td className="border border-border p-2 sm:p-3 text-right text-xs sm:text-sm text-foreground">${result.calculations.quarterly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr className="bg-secondary/50">
                      <td className="border border-border p-2 sm:p-3 font-bold text-xs sm:text-sm text-foreground">Annual</td>
                      <td className="border border-border p-2 sm:p-3 text-right font-bold text-xs sm:text-sm text-foreground">${result.calculations.annual.unadjusted.toFixed(2)}</td>
                      <td className="border border-border p-2 sm:p-3 text-right font-bold text-xs sm:text-sm text-foreground">${result.calculations.annual.adjusted.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex gap-2 pt-2 sm:pt-4">
                <Button onClick={copyResult} variant="outline" size="sm" className="text-xs sm:text-sm">
                  <Copy className="mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  Copy Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Working Days Summary */}
          <Card className="bg-card border-border w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                <span className="text-foreground">Working Days Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 md:p-4 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1.5 sm:mb-2 text-xs sm:text-sm break-words">Total Working Days</h3>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{result.workingDaysPerYear} days</div>
                  <p className="text-xs sm:text-sm text-foreground break-words">52 weeks × {result.daysPerWeek} days/week</p>
                </div>
                <div className="p-2 sm:p-3 md:p-4 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1.5 sm:mb-2 text-xs sm:text-sm break-words">Adjusted Working Days</h3>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{result.adjustedWorkingDays} days</div>
                  <p className="text-xs sm:text-sm text-foreground break-words">After holidays and vacation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Industry Comparison */}
          <Card className="bg-card border-border w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                <span className="text-foreground">Industry Salary Comparison</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-3 md:px-4">
              <div className="space-y-2">
                {result.comparison.industryAverages.map((industry, index) => (
                  <div key={index} className="flex justify-between items-center p-2 sm:p-3 bg-card border border-border rounded-lg">
                    <div className="min-w-0">
                      <span className="font-medium text-foreground text-xs sm:text-sm break-words">{industry.industry}</span>
                      <p className="text-xs text-foreground break-words">Average: ${industry.averageSalary.toLocaleString()}</p>
                    </div>
                    <Badge className={industry.difference > 0 ? "bg-green-500/20 text-heading-accent border-green-500" : "bg-red-500/20 text-foreground border-red-500"} variant="outline">
                      {industry.difference > 0 ? "+" : ""}${industry.difference.toLocaleString()}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="bg-card border-border w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                <span className="text-foreground">Personalized Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-heading-accent text-xs sm:text-sm break-words">Salary Optimization</h4>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {result.recommendations.salaryOptimization.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-heading-accent text-xs sm:text-sm break-words">Negotiation Tips</h4>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {result.recommendations.negotiationTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-heading-accent text-xs sm:text-sm break-words">Career Advice</h4>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {result.recommendations.careerAdvice.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground break-words">{rec}</span>
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
        <Card className="bg-card border-border w-full overflow-hidden">
          <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
            <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
              <History className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
              <span className="text-foreground">Recent Calculations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-2 sm:px-3 md:px-4">
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-card border border-border rounded-lg">
                  <div className="space-y-1 min-w-0">
                    <div className="font-medium text-xs sm:text-sm text-foreground break-words">
                      ${item.salaryAmount.toFixed(0)} {item.payFrequency} → ${item.calculations.annual.adjusted.toFixed(0)}/year
                    </div>
                    <div className="text-xs text-foreground break-words">
                      {item.adjustedWorkingDays} working days
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
                    className="text-xs sm:text-sm flex-shrink-0"
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
      <Card className="bg-card border-border w-full overflow-hidden">
        <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
            <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
            <span className="text-foreground">Salary Calculator Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 px-2 sm:px-3 md:px-4">
          <div className="p-2 sm:p-3 md:p-4 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-xs sm:text-sm min-w-0">
                <p className="font-medium text-foreground mb-1 break-words">
                  Professional Salary Analysis
                </p>
                <p className="text-foreground break-words">
                  This calculator converts salary amounts across all pay frequencies with accurate adjustments for holidays and vacation days. Perfect for salary negotiations, job comparisons, and financial planning.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-xs sm:text-sm text-foreground space-y-1.5 sm:space-y-2">
            <p className="break-words">
              <strong className="text-heading-accent">Pay Frequency Conversion:</strong> Convert between hourly, daily, weekly, bi-weekly, semi-monthly, monthly, quarterly, and annual pay.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Holiday & Vacation Adjustment:</strong> Calculate adjusted salaries accounting for paid time off.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Industry Comparison:</strong> Compare your salary against industry averages across different sectors.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Negotiation Support:</strong> Get personalized tips for salary negotiations and career advancement.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
