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

interface InflationResult {
  originalAmount: number
  adjustedAmount: number
  inflationRate: number
  yearsDifference: number
  totalInflation: number
  purchasingPower: number
  calculationType: string
  cpiData: {
    startYear: number
    endYear: number
    startCPI: number
    endCPI: number
  }
  historicalData: Array<{
    year: number
    cpi: number
    inflationRate: number
  }>
  recommendations: {
    investmentTips: string[]
    inflationHedges: string[]
    financialPlanning: string[]
  }
  comparison: {
    scenarios: Array<{
      scenario: string
      adjustedAmount: number
      difference: number
    }>
  }
}

export default function InflationCalculator() {
  const [calculationType, setCalculationType] = useState("cpi")
  const [originalAmount, setOriginalAmount] = useState("")
  const [startYear, setStartYear] = useState("")
  const [endYear, setEndYear] = useState("")
  const [inflationRate, setInflationRate] = useState("")
  const [years, setYears] = useState("")
  const [result, setResult] = useState<InflationResult | null>(null)
  const [history, setHistory] = useState<InflationResult[]>([])

  // Historical CPI data (simplified for demonstration)
  const cpiData: { [key: number]: number } = {
    2025: 310.0,
    2024: 308.0,
    2023: 300.0,
    2022: 292.0,
    2021: 270.0,
    2020: 258.0,
    2019: 255.0,
    2018: 250.0,
    2017: 245.0,
    2016: 240.0,
    2015: 237.0,
    2014: 235.0,
    2013: 233.0,
    2012: 230.0,
    2011: 225.0,
    2010: 218.0,
    2009: 215.0,
    2008: 215.0,
    2007: 207.0,
    2006: 202.0,
    2005: 195.0,
    2000: 172.0,
    1995: 152.0,
    1990: 130.0,
    1985: 107.0,
    1980: 82.0,
    1975: 54.0,
    1970: 39.0,
    1965: 32.0,
    1960: 30.0,
    1955: 27.0,
    1950: 24.0,
    1945: 18.0,
    1940: 14.0,
    1935: 13.0,
    1930: 17.0,
    1925: 18.0,
    1920: 20.0,
    1915: 10.0,
    1913: 10.0
  }

  const calculateInflation = () => {
    const amount = parseFloat(originalAmount) || 0
    const start = parseInt(startYear) || 0
    const end = parseInt(endYear) || 0
    const rate = parseFloat(inflationRate) || 0
    const yearsCount = parseInt(years) || 0

    let calculatedResult: InflationResult

    if (calculationType === "cpi") {
      // CPI-based calculation
      const startCPI = cpiData[start] || 100
      const endCPI = cpiData[end] || 100
      const inflationRate = ((endCPI - startCPI) / startCPI) * 100
      const adjustedAmount = amount * (endCPI / startCPI)
      const totalInflation = adjustedAmount - amount
      const purchasingPower = (amount / adjustedAmount) * 100

      calculatedResult = {
        originalAmount: amount,
        adjustedAmount: adjustedAmount,
        inflationRate: inflationRate,
        yearsDifference: end - start,
        totalInflation: totalInflation,
        purchasingPower: purchasingPower,
        calculationType: "CPI-based",
        cpiData: {
          startYear: start,
          endYear: end,
          startCPI: startCPI,
          endCPI: endCPI
        },
        historicalData: generateHistoricalData(start, end),
        recommendations: generateRecommendations(inflationRate, adjustedAmount),
        comparison: generateComparison(adjustedAmount, inflationRate)
      }
    } else if (calculationType === "forward") {
      // Forward flat rate calculation
      const adjustedAmount = amount * Math.pow(1 + rate / 100, yearsCount)
      const totalInflation = adjustedAmount - amount
      const purchasingPower = (amount / adjustedAmount) * 100

      calculatedResult = {
        originalAmount: amount,
        adjustedAmount: adjustedAmount,
        inflationRate: rate,
        yearsDifference: yearsCount,
        totalInflation: totalInflation,
        purchasingPower: purchasingPower,
        calculationType: "Forward Flat Rate",
        cpiData: {
          startYear: new Date().getFullYear(),
          endYear: new Date().getFullYear() + yearsCount,
          startCPI: 100,
          endCPI: 100 * Math.pow(1 + rate / 100, yearsCount)
        },
        historicalData: generateHistoricalData(new Date().getFullYear(), new Date().getFullYear() + yearsCount),
        recommendations: generateRecommendations(rate, adjustedAmount),
        comparison: generateComparison(adjustedAmount, rate)
      }
    } else {
      // Backward flat rate calculation
      const adjustedAmount = amount / Math.pow(1 + rate / 100, yearsCount)
      const totalInflation = amount - adjustedAmount
      const purchasingPower = (adjustedAmount / amount) * 100

      calculatedResult = {
        originalAmount: amount,
        adjustedAmount: adjustedAmount,
        inflationRate: rate,
        yearsDifference: yearsCount,
        totalInflation: totalInflation,
        purchasingPower: purchasingPower,
        calculationType: "Backward Flat Rate",
        cpiData: {
          startYear: new Date().getFullYear() - yearsCount,
          endYear: new Date().getFullYear(),
          startCPI: 100,
          endCPI: 100 * Math.pow(1 + rate / 100, yearsCount)
        },
        historicalData: generateHistoricalData(new Date().getFullYear() - yearsCount, new Date().getFullYear()),
        recommendations: generateRecommendations(rate, adjustedAmount),
        comparison: generateComparison(adjustedAmount, rate)
      }
    }

    setResult(calculatedResult)
    setHistory(prev => [calculatedResult, ...prev.slice(0, 4)])
  }

  const generateHistoricalData = (startYear: number, endYear: number) => {
    const data = []
    for (let year = startYear; year <= endYear; year++) {
      if (cpiData[year]) {
        const prevYear = cpiData[year - 1] || cpiData[year]
        const inflationRate = ((cpiData[year] - prevYear) / prevYear) * 100
        data.push({
          year,
          cpi: cpiData[year],
          inflationRate: inflationRate
        })
      }
    }
    return data
  }

  const generateRecommendations = (inflationRate: number, adjustedAmount: number) => {
    const investmentTips: string[] = []
    const inflationHedges: string[] = []
    const financialPlanning: string[] = []

    // Investment recommendations based on inflation rate
    if (inflationRate > 5) {
      investmentTips.push("Consider inflation-protected securities (TIPS)")
      investmentTips.push("Diversify into commodities and real estate")
      investmentTips.push("Focus on growth stocks and dividend-paying companies")
    } else if (inflationRate > 3) {
      investmentTips.push("Balance between stocks and bonds")
      investmentTips.push("Consider real estate investment trusts (REITs)")
      investmentTips.push("Look for companies with pricing power")
    } else {
      investmentTips.push("Traditional balanced portfolio approach")
      investmentTips.push("Focus on quality dividend stocks")
      investmentTips.push("Consider municipal bonds for tax efficiency")
    }

    // Inflation hedge recommendations
    inflationHedges.push("Treasury Inflation-Protected Securities (TIPS)")
    inflationHedges.push("Real estate investment trusts (REITs)")
    inflationHedges.push("Commodities like gold, silver, and oil")
    inflationHedges.push("Stocks of companies with strong pricing power")
    inflationHedges.push("International diversification")

    // Financial planning recommendations
    financialPlanning.push("Review and adjust your investment allocation")
    financialPlanning.push("Consider inflation in retirement planning")
    financialPlanning.push("Evaluate your emergency fund adequacy")
    financialPlanning.push("Review insurance coverage needs")
    financialPlanning.push("Consider inflation-adjusted annuities")

    return { investmentTips, inflationHedges, financialPlanning }
  }

  const generateComparison = (adjustedAmount: number, inflationRate: number) => {
    const scenarios = [
      { scenario: "Conservative (2%)", adjustedAmount: adjustedAmount * 0.8, difference: adjustedAmount * 0.2 },
      { scenario: "Moderate (3%)", adjustedAmount: adjustedAmount, difference: 0 },
      { scenario: "High (5%)", adjustedAmount: adjustedAmount * 1.2, difference: adjustedAmount * 0.2 },
      { scenario: "Very High (8%)", adjustedAmount: adjustedAmount * 1.5, difference: adjustedAmount * 0.5 }
    ]

    return { scenarios }
  }

  const copyResult = () => {
    if (result) {
      const text = `Inflation Calculator Results:
Original Amount: $${result.originalAmount.toFixed(2)}
Adjusted Amount: $${result.adjustedAmount.toFixed(2)}
Inflation Rate: ${result.inflationRate.toFixed(2)}%
Years: ${result.yearsDifference}
Total Inflation: $${result.totalInflation.toFixed(2)}
Purchasing Power: ${result.purchasingPower.toFixed(1)}%`
      navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setOriginalAmount("")
    setStartYear("")
    setEndYear("")
    setInflationRate("")
    setYears("")
    setResult(null)
  }

  return (
    <div className="space-y-6">
      {/* Main Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Advanced Inflation Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Calculation Type Selection */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Calculation Type</Label>
            <Tabs value={calculationType} onValueChange={setCalculationType} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="cpi">CPI Data</TabsTrigger>
                <TabsTrigger value="forward">Forward Rate</TabsTrigger>
                <TabsTrigger value="backward">Backward Rate</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cpi" className="space-y-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="100"
                      value={originalAmount}
                      onChange={(e) => setOriginalAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="startYear">Start Year</Label>
                    <Input
                      id="startYear"
                      type="number"
                      placeholder="2015"
                      value={startYear}
                      onChange={(e) => setStartYear(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="endYear">End Year</Label>
                  <Input
                    id="endYear"
                    type="number"
                    placeholder="2025"
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value)}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="forward" className="space-y-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="100"
                      value={originalAmount}
                      onChange={(e) => setOriginalAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="inflationRate">Inflation Rate (%)</Label>
                    <Input
                      id="inflationRate"
                      type="number"
                      placeholder="3"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="years">Years</Label>
                  <Input
                    id="years"
                    type="number"
                    placeholder="10"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="backward" className="space-y-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="100"
                      value={originalAmount}
                      onChange={(e) => setOriginalAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="inflationRate">Inflation Rate (%)</Label>
                    <Input
                      id="inflationRate"
                      type="number"
                      placeholder="3"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="years">Years Ago</Label>
                  <Input
                    id="years"
                    type="number"
                    placeholder="10"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex gap-2">
            <Button onClick={calculateInflation} className="flex-1">
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
                Inflation Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Original Amount</Label>
                  <div className="text-3xl font-bold text-blue-600">
                    ${result.originalAmount.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Adjusted Amount</Label>
                  <div className="text-3xl font-bold text-green-600">
                    ${result.adjustedAmount.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Inflation Rate</div>
                  <div className="text-lg font-semibold text-orange-600">{result.inflationRate.toFixed(2)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Years</div>
                  <div className="text-lg font-semibold text-purple-600">{result.yearsDifference}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Total Inflation</div>
                  <div className="text-lg font-semibold text-red-600">${result.totalInflation.toFixed(2)}</div>
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
                Inflation Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Purchasing Power</h3>
                  <div className="text-2xl font-bold text-blue-600">{result.purchasingPower.toFixed(1)}%</div>
                  <div className="text-sm text-blue-600">of original value</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Value Change</h3>
                  <div className="text-2xl font-bold text-green-600">
                    {result.adjustedAmount > result.originalAmount ? "+" : ""}${(result.adjustedAmount - result.originalAmount).toFixed(2)}
                  </div>
                  <div className="text-sm text-green-600">total change</div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Calculation Type</h3>
                  <div className="text-lg font-bold text-purple-600">{result.calculationType}</div>
                  <div className="text-sm text-purple-600">method used</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Historical Data */}
          {result.historicalData.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  Historical Inflation Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Year</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">CPI</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Inflation Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.historicalData.map((row, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 dark:border-gray-600 p-3">{row.year}</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">{row.cpi.toFixed(1)}</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">
                            <span className={row.inflationRate > 0 ? "text-red-600" : "text-green-600"}>
                              {row.inflationRate > 0 ? "+" : ""}{row.inflationRate.toFixed(2)}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Inflation Scenarios */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Inflation Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.comparison.scenarios.map((scenario, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="font-medium">{scenario.scenario}</span>
                      <p className="text-sm text-muted-foreground">${scenario.adjustedAmount.toFixed(2)}</p>
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
                  <h4 className="font-semibold mb-3 text-green-600">Inflation Hedges</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.inflationHedges.map((rec, index) => (
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
                      ${item.originalAmount.toFixed(0)} → ${item.adjustedAmount.toFixed(0)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.inflationRate.toFixed(1)}% over {item.yearsDifference} years
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
            Inflation Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Professional Inflation Analysis
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  This calculator uses historical CPI data and advanced inflation formulas to provide accurate purchasing power calculations. Perfect for financial planning, investment analysis, and economic research.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>CPI Data:</strong> Uses historical Consumer Price Index data from 1913 to 2025.
            </p>
            <p>
              <strong>Multiple Calculation Methods:</strong> CPI-based, forward flat rate, and backward flat rate calculations.
            </p>
            <p>
              <strong>Investment Analysis:</strong> Personalized recommendations for inflation hedging and investment strategies.
            </p>
            <p>
              <strong>Historical Analysis:</strong> Complete inflation data and trends for informed decision-making.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
