"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TrendingUp, Copy, Check, Globe, AlertTriangle, DollarSign, Target, BarChart3, PieChart, Calculator, Info, Zap, Sparkles } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface CompoundInterestResult {
  principal: number
  totalAmount: number
  totalInterest: number
  years: number
  currency: string
  country: string
  effectiveRate: number
  monthlyAmount: number
  yearlyBreakdown: { year: number; balance: number; interest: number }[]
}

interface CountryRateData {
  name: string
  currency: string
  savingsRate: number
  investmentRate: number
  description: string
}

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [time, setTime] = useState("")
  const [frequency, setFrequency] = useState("12")
  const [selectedCountry, setSelectedCountry] = useState("US")
  const [useCountryRate, setUseCountryRate] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [result, setResult] = useState<CompoundInterestResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const countryRateData: Record<string, CountryRateData> = {
    US: {
      name: "United States",
      currency: "USD",
      savingsRate: 4.5,
      investmentRate: 7.0,
      description: "Based on current Federal Reserve rates and market averages"
    },
    UK: {
      name: "United Kingdom",
      currency: "GBP",
      savingsRate: 4.25,
      investmentRate: 6.5,
      description: "Based on Bank of England rates and UK market averages"
    },
    CA: {
      name: "Canada",
      currency: "CAD",
      savingsRate: 4.0,
      investmentRate: 6.8,
      description: "Based on Bank of Canada rates and Canadian market averages"
    },
    AU: {
      name: "Australia",
      currency: "AUD",
      savingsRate: 4.35,
      investmentRate: 7.2,
      description: "Based on Reserve Bank of Australia rates and market averages"
    },
    DE: {
      name: "Germany",
      currency: "EUR",
      savingsRate: 3.5,
      investmentRate: 5.8,
      description: "Based on European Central Bank rates and German market averages"
    },
    FR: {
      name: "France",
      currency: "EUR",
      savingsRate: 3.2,
      investmentRate: 5.5,
      description: "Based on European Central Bank rates and French market averages"
    },
    JP: {
      name: "Japan",
      currency: "JPY",
      savingsRate: 0.1,
      investmentRate: 3.5,
      description: "Based on Bank of Japan rates and Japanese market averages"
    },
    IN: {
      name: "India",
      currency: "INR",
      savingsRate: 6.5,
      investmentRate: 8.5,
      description: "Based on Reserve Bank of India rates and Indian market averages"
    },
    PK: {
      name: "Pakistan",
      currency: "PKR",
      savingsRate: 20.0,
      investmentRate: 15.0,
      description: "Based on State Bank of Pakistan rates and Pakistani market averages"
    }
  }

  const calculateCompoundInterest = () => {
    if (!principal || !time) return

    setIsCalculating(true)
    setShowWarning(true)

    setTimeout(() => {
      const p = Number.parseFloat(principal)
      const t = Number.parseFloat(time)
      const n = Number.parseFloat(frequency)
      
      // Use country rate if selected, otherwise use manual rate
      let r: number
      if (useCountryRate) {
        r = countryRateData[selectedCountry].investmentRate / 100
      } else {
        r = Number.parseFloat(rate) / 100
      }

      const amount = p * Math.pow(1 + r / n, n * t)
      const interest = amount - p
      const effectiveRate = (Math.pow(1 + r / n, n) - 1) * 100
      const monthlyAmount = amount / (t * 12)

      // Generate yearly breakdown
      const yearlyBreakdown = []
      for (let year = 1; year <= t; year++) {
        const yearAmount = p * Math.pow(1 + r / n, n * year)
        const yearInterest = yearAmount - p
        yearlyBreakdown.push({
          year,
          balance: Number.parseFloat(yearAmount.toFixed(2)),
          interest: Number.parseFloat(yearInterest.toFixed(2))
        })
      }

      setResult({
        principal: p,
        totalAmount: Number.parseFloat(amount.toFixed(2)),
        totalInterest: Number.parseFloat(interest.toFixed(2)),
        years: t,
        currency: countryRateData[selectedCountry].currency,
        country: countryRateData[selectedCountry].name,
        effectiveRate: Number.parseFloat(effectiveRate.toFixed(2)),
        monthlyAmount: Number.parseFloat(monthlyAmount.toFixed(2)),
        yearlyBreakdown
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `Compound Interest Calculation - ${result.country}
Principal: ${result.currency} ${result.principal.toLocaleString()}
Total Amount: ${result.currency} ${result.totalAmount.toLocaleString()}
Interest Earned: ${result.currency} ${result.totalInterest.toLocaleString()}
Effective Rate: ${result.effectiveRate}%
Monthly Equivalent: ${result.currency} ${result.monthlyAmount.toLocaleString()}
Time Period: ${result.years} years`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Warning Alert */}
      {showWarning && (
        <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
          <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <AlertDescription className="text-amber-800 dark:text-amber-200">
            <strong>Important:</strong> Interest rates may change frequently based on economic conditions and central bank policies. 
            Please verify current rates with your financial institution for the most accurate calculations.
          </AlertDescription>
        </Alert>
      )}

      {/* Main Calculator Card */}
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            Advanced Compound Interest Calculator
          </CardTitle>
          <CardDescription className="text-base">
            Calculate compound interest with country-specific rates and comprehensive analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Country Selection */}
          <div className="space-y-2">
            <Label htmlFor="country" className="text-sm font-medium flex items-center gap-2">
              <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                <Globe className="h-3 w-3 text-blue-600 dark:text-blue-400" />
              </div>
              Select Country
            </Label>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base">
                <SelectValue placeholder="Choose your country" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(countryRateData).map(([code, data]) => (
                  <SelectItem key={code} value={code}>
                    {data.name} ({data.currency})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Principal Amount */}
          <div className="space-y-2">
            <Label htmlFor="principal" className="text-sm font-medium flex items-center gap-2">
              <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">
                <DollarSign className="h-3 w-3 text-green-600 dark:text-green-400" />
              </div>
              Principal Amount ({countryRateData[selectedCountry]?.currency})
            </Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="10000"
              className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
            />
          </div>

          {/* Time Period */}
          <div className="space-y-2">
            <Label htmlFor="time" className="text-sm font-medium flex items-center gap-2">
              <div className="p-1 bg-purple-100 dark:bg-purple-900/30 rounded">
                <Target className="h-3 w-3 text-purple-600 dark:text-purple-400" />
              </div>
              Time Period (Years)
            </Label>
            <Input
              id="time"
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="10"
              className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
            />
          </div>

          {/* Compounding Frequency */}
          <div className="space-y-2">
            <Label htmlFor="frequency" className="text-sm font-medium flex items-center gap-2">
              <div className="p-1 bg-orange-100 dark:bg-orange-900/30 rounded">
                <BarChart3 className="h-3 w-3 text-orange-600 dark:text-orange-400" />
              </div>
              Compounding Frequency
            </Label>
            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Annually (1x/year)</SelectItem>
                <SelectItem value="2">Semi-Annually (2x/year)</SelectItem>
                <SelectItem value="4">Quarterly (4x/year)</SelectItem>
                <SelectItem value="12">Monthly (12x/year)</SelectItem>
                <SelectItem value="365">Daily (365x/year)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Rate Selection */}
          <div className="space-y-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="use-country-rate" 
                checked={useCountryRate} 
                onChange={(e) => setUseCountryRate(e.target.checked)}
                className="rounded border-gray-300"
              />
              <Label htmlFor="use-country-rate" className="text-sm font-medium flex items-center gap-2">
                <div className="p-1 bg-indigo-100 dark:bg-indigo-900/30 rounded">
                  <Calculator className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                </div>
                Use Country-Specific Rate ({countryRateData[selectedCountry]?.investmentRate}%)
              </Label>
            </div>
            
            {!useCountryRate && (
              <div className="space-y-2">
                <Label htmlFor="rate" className="text-sm font-medium">
                  Custom Annual Interest Rate (%)
                </Label>
                <Input
                  id="rate"
                  type="number"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="5.0"
                  className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                />
              </div>
            )}
            
            <p className="text-xs text-indigo-700 dark:text-indigo-300">
              {countryRateData[selectedCountry]?.description}
            </p>
          </div>

          {/* Calculate Button */}
          <Button
            onClick={calculateCompoundInterest}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            disabled={!principal || !time || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculating Compound Interest...</span>
                <span className="sm:hidden">Calculating...</span>
              </>
            ) : (
              <>
                <TrendingUp className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculate Compound Interest</span>
                <span className="sm:hidden">Calculate</span>
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              Compound Interest Results - {result.country}
            </CardTitle>
            <CardDescription className="text-base">
              Your investment growth over {result.years} years with {result.effectiveRate}% effective rate
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Result Display */}
            <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {result.currency} {result.totalAmount.toLocaleString()}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                Total Future Value
              </div>
              <div className="text-lg font-semibold text-green-600 dark:text-green-400 mt-2">
                {result.currency} {result.monthlyAmount.toLocaleString()} / month equivalent
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-3 p-4 sm:p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                Investment Breakdown
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <span className="text-sm text-blue-800 dark:text-blue-200">Principal</span>
                  <span className="font-semibold text-sm text-blue-900 dark:text-blue-100">{result.currency} {result.principal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                  <span className="text-sm text-green-800 dark:text-green-200">Interest Earned</span>
                  <span className="font-semibold text-sm text-green-900 dark:text-green-100">+{result.currency} {result.totalInterest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <span className="text-sm text-purple-800 dark:text-purple-200">Growth Rate</span>
                  <span className="font-semibold text-sm text-purple-900 dark:text-purple-100">{((result.totalInterest / result.principal) * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-800">
                  <span className="text-sm text-orange-800 dark:text-orange-200">Effective Rate</span>
                  <span className="font-semibold text-sm text-orange-900 dark:text-orange-100">{result.effectiveRate}%</span>
                </div>
              </div>
            </div>

            {/* Yearly Breakdown */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
              <div className="text-sm sm:text-base font-semibold text-indigo-700 dark:text-indigo-300 mb-3 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Yearly Growth Breakdown
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {result.yearlyBreakdown.slice(0, 10).map((year) => (
                  <div key={year.year} className="flex justify-between items-center p-2 bg-white/50 dark:bg-slate-800/50 rounded border border-indigo-200 dark:border-indigo-700">
                    <span className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400">Year {year.year}</span>
                    <span className="text-xs sm:text-sm font-semibold text-indigo-800 dark:text-indigo-200">
                      {result.currency} {year.balance.toLocaleString()}
                    </span>
                  </div>
                ))}
                {result.yearlyBreakdown.length > 10 && (
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 text-center py-2">
                    ... and {result.yearlyBreakdown.length - 10} more years
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                onClick={copyResult}
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-300 border-2 hover:bg-green-100 dark:hover:bg-green-900/30 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Copied!</span>
                    <span className="sm:hidden">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Copy Result</span>
                    <span className="sm:hidden">Copy</span>
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
