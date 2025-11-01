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
    <div className="space-y-4 sm:space-y-6 md:space-y-8 bg-black rounded-xl p-2 sm:p-3 md:p-4 w-full overflow-hidden">
      {/* Main Calculator */}
      <Card className="bg-black border-slate-700 w-full overflow-hidden">
        <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
            <Calculator className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" />
            <span className="text-orange-500">Advanced Inflation Calculator</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 px-2 sm:px-3 md:px-4">
          {/* Calculation Type Selection */}
          <div>
            <Label className="text-xs sm:text-sm text-green-500 mb-2 block">Calculation Type</Label>
            <Tabs value={calculationType} onValueChange={setCalculationType} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-black border border-slate-700">
                <TabsTrigger value="cpi" className="text-xs sm:text-sm">CPI Data</TabsTrigger>
                <TabsTrigger value="forward" className="text-xs sm:text-sm">Forward Rate</TabsTrigger>
                <TabsTrigger value="backward" className="text-xs sm:text-sm">Backward Rate</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cpi" className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5 w-full min-w-0">
                    <Label htmlFor="amount" className="text-xs sm:text-sm text-green-500">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="100"
                      value={originalAmount}
                      onChange={(e) => setOriginalAmount(e.target.value)}
                      className="border-slate-700 !bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 w-full text-sm h-9"
                    />
                  </div>
                  <div className="space-y-1.5 w-full min-w-0">
                    <Label htmlFor="startYear" className="text-xs sm:text-sm text-green-500">Start Year</Label>
                    <Input
                      id="startYear"
                      type="number"
                      placeholder="2015"
                      value={startYear}
                      onChange={(e) => setStartYear(e.target.value)}
                      className="border-slate-700 !bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 w-full text-sm h-9"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 w-full min-w-0">
                  <Label htmlFor="endYear" className="text-xs sm:text-sm text-green-500">End Year</Label>
                  <Input
                    id="endYear"
                    type="number"
                    placeholder="2025"
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value)}
                    className="border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 w-full text-sm h-9"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="forward" className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5 w-full min-w-0">
                    <Label htmlFor="amount" className="text-xs sm:text-sm text-green-500">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="100"
                      value={originalAmount}
                      onChange={(e) => setOriginalAmount(e.target.value)}
                      className="border-slate-700 !bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 w-full text-sm h-9"
                    />
                  </div>
                  <div className="space-y-1.5 w-full min-w-0">
                    <Label htmlFor="inflationRate" className="text-xs sm:text-sm text-green-500">Inflation Rate (%)</Label>
                    <Input
                      id="inflationRate"
                      type="number"
                      placeholder="3"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(e.target.value)}
                      className="border-slate-700 !bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 w-full text-sm h-9"
                    />
                  </div>
                </div>
                <div className="space-y-1.5 w-full min-w-0">
                  <Label htmlFor="years" className="text-xs sm:text-sm text-green-500">Years</Label>
                  <Input
                    id="years"
                    type="number"
                    placeholder="10"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 w-full text-sm h-9"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="backward" className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5 w-full min-w-0">
                    <Label htmlFor="amount" className="text-xs sm:text-sm text-green-500">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="100"
                      value={originalAmount}
                      onChange={(e) => setOriginalAmount(e.target.value)}
                      className="border-slate-700 !bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 w-full text-sm h-9"
                    />
                  </div>
                  <div className="space-y-1.5 w-full min-w-0">
                    <Label htmlFor="inflationRate" className="text-xs sm:text-sm text-green-500">Inflation Rate (%)</Label>
                    <Input
                      id="inflationRate"
                      type="number"
                      placeholder="3"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(e.target.value)}
                      className="border-slate-700 !bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 w-full text-sm h-9"
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

          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Button onClick={calculateInflation} className="flex-1 w-full sm:w-auto text-sm sm:text-base">
              <Calculator className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Calculate
            </Button>
            <Button variant="outline" onClick={clearAll} className="w-full sm:w-auto text-sm sm:text-base">
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Main Results */}
          <Card className="bg-black border-slate-700 w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <DollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" />
                <span className="text-orange-500">Inflation Calculation Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs sm:text-sm text-green-500">Original Amount</Label>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200">
                    ${result.originalAmount.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs sm:text-sm text-green-500">Adjusted Amount</Label>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200">
                    ${result.adjustedAmount.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-slate-300">Inflation Rate</div>
                  <div className="text-base sm:text-lg font-semibold text-orange-500">{result.inflationRate.toFixed(2)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-slate-300">Years</div>
                  <div className="text-base sm:text-lg font-semibold text-slate-200">{result.yearsDifference}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-slate-300">Total Inflation</div>
                  <div className="text-base sm:text-lg font-semibold text-slate-200">${result.totalInflation.toFixed(2)}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-2 sm:pt-4">
                <Button onClick={copyResult} variant="outline" size="sm" className="text-xs sm:text-sm">
                  <Copy className="mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  Copy Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Summary */}
          <Card className="bg-black border-slate-700 w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" />
                <span className="text-orange-500">Inflation Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 md:p-4 bg-black border border-slate-700 rounded-lg">
                  <h3 className="font-semibold text-green-500 mb-1.5 sm:mb-2 text-xs sm:text-sm break-words">Purchasing Power</h3>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200">{result.purchasingPower.toFixed(1)}%</div>
                  <div className="text-xs sm:text-sm text-slate-300 break-words">of original value</div>
                </div>
                <div className="p-2 sm:p-3 md:p-4 bg-black border border-slate-700 rounded-lg">
                  <h3 className="font-semibold text-green-500 mb-1.5 sm:mb-2 text-xs sm:text-sm break-words">Value Change</h3>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200">
                    {result.adjustedAmount > result.originalAmount ? "+" : ""}${(result.adjustedAmount - result.originalAmount).toFixed(2)}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 break-words">total change</div>
                </div>
                <div className="p-2 sm:p-3 md:p-4 bg-black border border-slate-700 rounded-lg">
                  <h3 className="font-semibold text-green-500 mb-1.5 sm:mb-2 text-xs sm:text-sm break-words">Calculation Type</h3>
                  <div className="text-base sm:text-lg font-bold text-slate-200">{result.calculationType}</div>
                  <div className="text-xs sm:text-sm text-slate-300 break-words">method used</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Historical Data */}
          {result.historicalData.length > 0 && (
            <Card className="bg-black border-slate-700 w-full overflow-hidden">
              <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
                <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" />
                  <span className="text-orange-500">Historical Inflation Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 sm:px-3 md:px-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-700">
                    <thead>
                      <tr className="bg-black border-b border-slate-700">
                        <th className="border border-slate-700 p-2 sm:p-3 text-left text-xs sm:text-sm text-green-500">Year</th>
                        <th className="border border-slate-700 p-2 sm:p-3 text-right text-xs sm:text-sm text-green-500">CPI</th>
                        <th className="border border-slate-700 p-2 sm:p-3 text-right text-xs sm:text-sm text-green-500">Inflation Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.historicalData.map((row, index) => (
                        <tr key={index}>
                          <td className="border border-slate-700 p-2 sm:p-3 text-xs sm:text-sm text-slate-200">{row.year}</td>
                          <td className="border border-slate-700 p-2 sm:p-3 text-right text-xs sm:text-sm text-slate-200">{row.cpi.toFixed(1)}</td>
                          <td className="border border-slate-700 p-2 sm:p-3 text-right text-xs sm:text-sm">
                            <span className={row.inflationRate > 0 ? "text-red-400" : "text-green-400"}>
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
          <Card className="bg-black border-slate-700 w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" />
                <span className="text-orange-500">Inflation Scenarios</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-3 md:px-4">
              <div className="space-y-2">
                {result.comparison.scenarios.map((scenario, index) => (
                  <div key={index} className="flex justify-between items-center p-2 sm:p-3 bg-black border border-slate-700 rounded-lg">
                    <div className="min-w-0">
                      <span className="font-medium text-slate-200 text-xs sm:text-sm break-words">{scenario.scenario}</span>
                      <p className="text-xs text-slate-300 break-words">${scenario.adjustedAmount.toFixed(2)}</p>
                    </div>
                    <Badge className={scenario.difference > 0 ? "bg-green-500/20 text-green-400 border-green-500" : "bg-red-500/20 text-red-400 border-red-500"} variant="outline">
                      {scenario.difference > 0 ? "+" : ""}${scenario.difference.toFixed(2)}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="bg-black border-slate-700 w-full overflow-hidden">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
                <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" />
                <span className="text-orange-500">Personalized Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-green-500 text-xs sm:text-sm break-words">Investment Tips</h4>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {result.recommendations.investmentTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-green-500 text-xs sm:text-sm break-words">Inflation Hedges</h4>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {result.recommendations.inflationHedges.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-green-500 text-xs sm:text-sm break-words">Financial Planning</h4>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {result.recommendations.financialPlanning.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 sm:gap-2">
                        <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 break-words">{rec}</span>
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
        <Card className="bg-black border-slate-700 w-full overflow-hidden">
          <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
            <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
              <History className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" />
              <span className="text-orange-500">Recent Calculations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-2 sm:px-3 md:px-4">
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-black border border-slate-700 rounded-lg">
                  <div className="space-y-1 min-w-0">
                    <div className="font-medium text-xs sm:text-sm text-slate-200 break-words">
                      ${item.originalAmount.toFixed(0)} → ${item.adjustedAmount.toFixed(0)}
                    </div>
                    <div className="text-xs text-slate-300 break-words">
                      {item.inflationRate.toFixed(1)}% over {item.yearsDifference} years
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
      <Card className="bg-black border-slate-700 w-full overflow-hidden">
        <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <CardTitle className="flex items-center gap-2 text-sm sm:text-base md:text-lg break-words">
            <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" />
            <span className="text-orange-500">Inflation Calculator Features</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 px-2 sm:px-3 md:px-4">
          <div className="p-2 sm:p-3 md:p-4 bg-black border border-slate-700 rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs sm:text-sm min-w-0">
                <p className="font-medium text-orange-500 mb-1 break-words">
                  Professional Inflation Analysis
                </p>
                <p className="text-slate-300 break-words">
                  This calculator uses historical CPI data and advanced inflation formulas to provide accurate purchasing power calculations. Perfect for financial planning, investment analysis, and economic research.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-xs sm:text-sm text-slate-300 space-y-1.5 sm:space-y-2">
            <p className="break-words">
              <strong className="text-green-500">CPI Data:</strong> Uses historical Consumer Price Index data from 1913 to 2025.
            </p>
            <p className="break-words">
              <strong className="text-green-500">Multiple Calculation Methods:</strong> CPI-based, forward flat rate, and backward flat rate calculations.
            </p>
            <p className="break-words">
              <strong className="text-green-500">Investment Analysis:</strong> Personalized recommendations for inflation hedging and investment strategies.
            </p>
            <p className="break-words">
              <strong className="text-green-500">Historical Analysis:</strong> Complete inflation data and trends for informed decision-making.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
