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
    <div className="space-y-6">
      {/* Main Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Advanced Salary Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="salaryAmount">Salary Amount ($)</Label>
              <Input
                id="salaryAmount"
                type="number"
                placeholder="50"
                value={salaryAmount}
                onChange={(e) => setSalaryAmount(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="payFrequency">Pay Frequency</Label>
              <Select value={payFrequency} onValueChange={setPayFrequency}>
                <SelectTrigger>
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

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="hoursPerWeek">Hours per Week</Label>
              <Input
                id="hoursPerWeek"
                type="number"
                placeholder="40"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="daysPerWeek">Days per Week</Label>
              <Input
                id="daysPerWeek"
                type="number"
                placeholder="5"
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="holidaysPerYear">Holidays per Year</Label>
              <Input
                id="holidaysPerYear"
                type="number"
                placeholder="10"
                value={holidaysPerYear}
                onChange={(e) => setHolidaysPerYear(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="vacationDaysPerYear">Vacation Days per Year</Label>
              <Input
                id="vacationDaysPerYear"
                type="number"
                placeholder="15"
                value={vacationDaysPerYear}
                onChange={(e) => setVacationDaysPerYear(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={calculateSalary} className="flex-1">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Salary
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
                Salary Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Pay Frequency</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Unadjusted</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Holidays & Vacation Adjusted</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Hourly</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.hourly.unadjusted.toFixed(2)}</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.hourly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Daily</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.daily.unadjusted.toFixed(2)}</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.daily.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Weekly</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.weekly.unadjusted.toFixed(2)}</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.weekly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Bi-weekly</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.biweekly.unadjusted.toFixed(2)}</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.biweekly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Semi-monthly</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.semimonthly.unadjusted.toFixed(2)}</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.semimonthly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Monthly</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.monthly.unadjusted.toFixed(2)}</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.monthly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">Quarterly</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.quarterly.unadjusted.toFixed(2)}</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${result.calculations.quarterly.adjusted.toFixed(2)}</td>
                    </tr>
                    <tr className="bg-blue-50 dark:bg-blue-950/20">
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-bold">Annual</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right font-bold">${result.calculations.annual.unadjusted.toFixed(2)}</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-right font-bold">${result.calculations.annual.adjusted.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={copyResult} variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Working Days Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-500" />
                Working Days Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Total Working Days</h3>
                  <div className="text-2xl font-bold text-blue-600">{result.workingDaysPerYear} days</div>
                  <p className="text-sm text-blue-600 dark:text-blue-400">52 weeks × {result.daysPerWeek} days/week</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Adjusted Working Days</h3>
                  <div className="text-2xl font-bold text-green-600">{result.adjustedWorkingDays} days</div>
                  <p className="text-sm text-green-600 dark:text-green-400">After holidays and vacation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Industry Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-orange-500" />
                Industry Salary Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.comparison.industryAverages.map((industry, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="font-medium">{industry.industry}</span>
                      <p className="text-sm text-muted-foreground">Average: ${industry.averageSalary.toLocaleString()}</p>
                    </div>
                    <Badge variant={industry.difference > 0 ? "default" : "destructive"}>
                      {industry.difference > 0 ? "+" : ""}${industry.difference.toLocaleString()}
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
                  <h4 className="font-semibold mb-3 text-blue-600">Salary Optimization</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.salaryOptimization.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Negotiation Tips</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.negotiationTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-600">Career Advice</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.careerAdvice.map((rec, index) => (
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
                      ${item.salaryAmount.toFixed(0)} {item.payFrequency} → ${item.calculations.annual.adjusted.toFixed(0)}/year
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.adjustedWorkingDays} working days
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
            Salary Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Professional Salary Analysis
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  This calculator converts salary amounts across all pay frequencies with accurate adjustments for holidays and vacation days. Perfect for salary negotiations, job comparisons, and financial planning.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Pay Frequency Conversion:</strong> Convert between hourly, daily, weekly, bi-weekly, semi-monthly, monthly, quarterly, and annual pay.
            </p>
            <p>
              <strong>Holiday & Vacation Adjustment:</strong> Calculate adjusted salaries accounting for paid time off.
            </p>
            <p>
              <strong>Industry Comparison:</strong> Compare your salary against industry averages across different sectors.
            </p>
            <p>
              <strong>Negotiation Support:</strong> Get personalized tips for salary negotiations and career advancement.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
