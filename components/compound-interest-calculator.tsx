"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TrendingUp, Copy, Check, Globe, AlertTriangle, DollarSign, Target, BarChart3, PieChart, Calculator } from "lucide-react"
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
    <div className="space-y-3">
      {/* Warning Alert */}
      {showWarning && (
        <Alert className="border-amber-700 bg-black py-2 [&>svg]:top-2">
          <AlertTriangle className="h-3 w-3 text-amber-400" />
          <AlertDescription className="text-[10px] text-amber-300 leading-tight">
            <strong>Note:</strong> Interest rates change frequently. Verify with your financial institution for accuracy.
          </AlertDescription>
        </Alert>
      )}

      {/* Main Calculator Card */}
      <Card className="shadow-lg border-slate-700 hover:shadow-xl transition-all duration-300 bg-black">
        <CardHeader className="pb-2 px-3 sm:px-6">
          <CardTitle className="flex items-center gap-1.5 text-sm sm:text-base text-orange-500">
            <div className="p-1 bg-orange-500/10 rounded">
              <TrendingUp className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-orange-500" />
            </div>
            Compound Interest Calculator
          </CardTitle>
          <CardDescription className="text-[10px] sm:text-xs text-slate-400">
            Calculate growth with country-specific rates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 px-3 sm:px-6">
          {/* Country Selection */}
          <div className="space-y-1">
            <Label htmlFor="country" className="text-[11px] font-medium flex items-center gap-1 text-green-500">
              <Globe className="h-2.5 w-2.5 text-green-500" />
              Country
            </Label>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="h-8 text-xs border-slate-700 bg-black text-slate-200">
                <SelectValue placeholder="Choose country" />
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

          {/* Principal and Time Period in Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="principal" className="text-[11px] font-medium flex items-center gap-1 text-green-500">
                <DollarSign className="h-2.5 w-2.5 text-green-500" />
                Principal ({countryRateData[selectedCountry]?.currency})
            </Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="10000"
                className="h-8 text-xs px-2 py-1.5 rounded-lg border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 hover:border-orange-500/50 ring-offset-1"
            />
          </div>
            <div className="space-y-1">
              <Label htmlFor="time" className="text-[11px] font-medium flex items-center gap-1 text-green-500">
                <Target className="h-2.5 w-2.5 text-green-500" />
                Years
            </Label>
            <Input
              id="time"
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="10"
                className="h-8 text-xs px-2 py-1.5 rounded-lg border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 hover:border-orange-500/50 ring-offset-1"
            />
            </div>
          </div>

          {/* Compounding Frequency */}
          <div className="space-y-1">
            <Label htmlFor="frequency" className="text-[11px] font-medium flex items-center gap-1 text-green-500">
              <BarChart3 className="h-2.5 w-2.5 text-green-500" />
              Frequency
            </Label>
            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger className="h-8 text-xs border-slate-700 bg-black text-slate-200">
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
          <div className="space-y-2 p-2 bg-black rounded-lg border border-slate-700">
            <div className="flex items-center space-x-1.5">
              <input 
                type="checkbox" 
                id="use-country-rate" 
                checked={useCountryRate} 
                onChange={(e) => setUseCountryRate(e.target.checked)}
                className="rounded border-gray-600 w-3 h-3"
              />
              <Label htmlFor="use-country-rate" className="text-[11px] font-medium flex items-center gap-1 text-green-500">
                <Calculator className="h-2.5 w-2.5 text-green-500" />
                Use Country Rate ({countryRateData[selectedCountry]?.investmentRate}%)
              </Label>
            </div>
            
            {!useCountryRate && (
              <div className="space-y-1">
                <Label htmlFor="rate" className="text-[11px] font-medium text-green-500">
                  Custom Rate (%)
                </Label>
                <Input
                  id="rate"
                  type="number"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="5.0"
                  className="h-8 text-xs px-2 py-1.5 rounded-lg border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 hover:border-orange-500/50 ring-offset-1"
                />
              </div>
            )}
            
            <p className="text-[10px] text-orange-300 leading-tight">
              {countryRateData[selectedCountry]?.description}
            </p>
          </div>

          {/* Calculate Button */}
          <Button
            onClick={calculateCompoundInterest}
            className="w-full h-9 text-xs font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            disabled={!principal || !time || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-1 h-3 w-3" />
                <span>Calculating...</span>
              </>
            ) : (
              <>
                <TrendingUp className="mr-1 h-3 w-3" />
                <span>Calculate</span>
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-slate-700 animate-fade-in-up bg-black">
          <CardHeader className="pb-3 px-3 sm:px-6">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2 text-orange-500">
              <div className="p-1 sm:p-1.5 bg-orange-500/10 rounded-lg">
                <TrendingUp className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-orange-500" />
              </div>
              <span className="break-words">Compound Interest Results - {result.country}</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm text-slate-400">
              Your investment growth over {result.years} years with {result.effectiveRate}% effective rate
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-3 sm:px-6">
            {/* Main Result Display */}
            <div className="text-center p-3 sm:p-4 rounded-xl bg-black border border-orange-500/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-500 mb-1 break-words overflow-hidden">
                <span className="block">{result.currency}</span>
                <span className="block text-base sm:text-lg md:text-xl">
                  {result.totalAmount > 1e15 
                    ? result.totalAmount.toExponential(2)
                    : result.totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })
                  }
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-400">
                Total Future Value
              </div>
              <div className="text-xs sm:text-sm font-semibold text-green-400 mt-1 break-words px-2">
                <span className="block">{result.currency}</span>
                <span className="block">
                  {result.monthlyAmount > 1e15 
                    ? result.monthlyAmount.toExponential(2)
                    : result.monthlyAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })
                  } / month equivalent
                </span>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-2 p-3 bg-black rounded-lg border border-slate-700">
              <div className="text-sm font-semibold mb-2 text-green-500 flex items-center gap-2">
                <PieChart className="h-3.5 w-3.5" />
                Investment Breakdown
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-black rounded-lg border border-blue-700 gap-1">
                  <span className="text-xs text-blue-300">Principal</span>
                  <span className="font-semibold text-xs text-blue-400 break-words text-right sm:text-left">
                    {result.currency} {result.principal > 1e15 
                      ? result.principal.toExponential(2)
                      : result.principal.toLocaleString(undefined, { maximumFractionDigits: 2 })
                    }
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-black rounded-lg border border-green-700 gap-1">
                  <span className="text-xs text-green-300">Interest Earned</span>
                  <span className="font-semibold text-xs text-green-400 break-words text-right sm:text-left">
                    +{result.currency} {result.totalInterest > 1e15 
                      ? result.totalInterest.toExponential(2)
                      : result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })
                    }
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-black rounded-lg border border-purple-700 gap-1">
                  <span className="text-xs text-purple-300">Growth Rate</span>
                  <span className="font-semibold text-xs text-purple-400 break-words text-right sm:text-left">
                    {result.totalInterest > 1e15 || result.principal === 0
                      ? ((result.totalInterest / result.principal) * 100).toExponential(2) + '%'
                      : ((result.totalInterest / result.principal) * 100).toFixed(1) + '%'
                    }
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-black rounded-lg border border-orange-700 gap-1">
                  <span className="text-xs text-orange-300">Effective Rate</span>
                  <span className="font-semibold text-xs text-orange-400">{result.effectiveRate}%</span>
                </div>
              </div>
            </div>

            {/* Yearly Breakdown */}
            <div className="p-3 bg-black rounded-xl border border-slate-700">
              <div className="text-xs font-semibold text-green-500 mb-2 flex items-center gap-1.5">
                <BarChart3 className="h-3.5 w-3.5" />
                Yearly Growth Breakdown
              </div>
              <div className="space-y-1.5 max-h-96 overflow-y-auto">
                {result.yearlyBreakdown.map((year) => (
                  <div key={year.year} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-black rounded border border-slate-700 gap-1">
                    <span className="text-xs text-slate-400">Year {year.year}</span>
                    <span className="text-xs font-semibold text-slate-300 break-words text-right sm:text-left">
                      {result.currency} {year.balance > 1e15 
                        ? year.balance.toExponential(2)
                        : year.balance.toLocaleString(undefined, { maximumFractionDigits: 2 })
                      }
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={copyResult}
                className="flex-1 h-9 text-xs font-medium transition-all duration-300 border border-green-700 hover:bg-slate-800 text-green-300 bg-black"
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Copied!</span>
                    <span className="sm:hidden">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5" />
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
