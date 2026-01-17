"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GAlert, GAlertDescription } from "@/ui/galert"

import { TrendingUp, Copy, Check, Globe, AlertTriangle, DollarSign, Target, BarChart3, PieChart, Calculator } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

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
    void navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-3">
      {/* Warning GAlert */}
      {showWarning && (
        <GAlert className="border-tertiary-accent/30 bg-card py-2 [&>svg]:top-2">
          <AlertTriangle className="h-3 w-3 text-tertiary-accent" />
          <GAlertDescription className="text-[10px] text-tertiary-accent leading-tight">
            <strong>Note:</strong> Interest rates change frequently. Verify with your financial institution for accuracy.
          </GAlertDescription>
        </GAlert>
      )}

      {/* Main Calculator GCard */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader className="pb-2 px-3 sm:px-6">
          <GCardTitle className="flex items-center gap-1.5 text-sm sm:text-base text-foreground">
            <div className="p-1 bg-primary/10 rounded">
              <TrendingUp className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-foreground" />
            </div>
            Compound Interest Calculator
          </GCardTitle>
          <GCardDescription className="text-[10px] sm:text-xs text-muted-foreground">
            Calculate growth with country-specific rates
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-3 px-3 sm:px-6">
          {/* Country Selection */}
          <div className="space-y-1">
            <GLabel htmlFor="country" className="text-[11px] font-medium flex items-center gap-1 text-heading-accent">
              <Globe className="h-2.5 w-2.5 text-heading-accent" />
              Country
            </GLabel>
            <GSelect value={selectedCountry} onValueChange={setSelectedCountry}>
              <GSelectTrigger className="h-8 text-xs border-border bg-card text-foreground">
                <GSelectValue placeholder="Choose country" />
              </GSelectTrigger>
              <GSelectContent>
                {Object.entries(countryRateData).map(([code, data]) => (
                  <GSelectItem key={code} value={code}>
                    {data.name} ({data.currency})
                  </GSelectItem>
                ))}
              </GSelectContent>
            </GSelect>
          </div>

          {/* Principal and Time Period in Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="space-y-1">
              <GLabel htmlFor="principal" className="text-[11px] font-medium flex items-center gap-1 text-heading-accent">
                <DollarSign className="h-2.5 w-2.5 text-heading-accent" />
                Principal ({countryRateData[selectedCountry]?.currency})
              </GLabel>
              <GInput
                id="principal"
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="10000"
                className="h-8 text-xs px-2 py-1.5 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary hover:border-primary/50 ring-offset-1"
              />
            </div>
            <div className="space-y-1">
              <GLabel htmlFor="time" className="text-[11px] font-medium flex items-center gap-1 text-heading-accent">
                <Target className="h-2.5 w-2.5 text-heading-accent" />
                Years
              </GLabel>
              <GInput
                id="time"
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="10"
                className="h-8 text-xs px-2 py-1.5 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary hover:border-primary/50 ring-offset-1"
              />
            </div>
          </div>

          {/* Compounding Frequency */}
          <div className="space-y-1">
            <GLabel htmlFor="frequency" className="text-[11px] font-medium flex items-center gap-1 text-heading-accent">
              <BarChart3 className="h-2.5 w-2.5 text-heading-accent" />
              Frequency
            </GLabel>
            <GSelect value={frequency} onValueChange={setFrequency}>
              <GSelectTrigger className="h-8 text-xs border-border bg-card text-foreground">
                <GSelectValue placeholder="GSelect frequency" />
              </GSelectTrigger>
              <GSelectContent>
                <GSelectItem value="1">Annually (1x/year)</GSelectItem>
                <GSelectItem value="2">Semi-Annually (2x/year)</GSelectItem>
                <GSelectItem value="4">Quarterly (4x/year)</GSelectItem>
                <GSelectItem value="12">Monthly (12x/year)</GSelectItem>
                <GSelectItem value="365">Daily (365x/year)</GSelectItem>
              </GSelectContent>
            </GSelect>
          </div>

          {/* Rate Selection */}
          <div className="space-y-2 p-2 bg-card rounded-lg border border-border">
            <div className="flex items-center space-x-1.5">
              <input
                type="checkbox"
                id="use-country-rate"
                checked={useCountryRate}
                onChange={(e) => setUseCountryRate(e.target.checked)}
                className="rounded border-gray-600 w-3 h-3"
              />
              <GLabel htmlFor="use-country-rate" className="text-[11px] font-medium flex items-center gap-1 text-heading-accent">
                <Calculator className="h-2.5 w-2.5 text-heading-accent" />
                Use Country Rate ({countryRateData[selectedCountry]?.investmentRate}%)
              </GLabel>
            </div>

            {!useCountryRate && (
              <div className="space-y-1">
                <GLabel htmlFor="rate" className="text-[11px] font-medium text-heading-accent">
                  Custom Rate (%)
                </GLabel>
                <GInput
                  id="rate"
                  type="number"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="5.0"
                  className="h-8 text-xs px-2 py-1.5 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary hover:border-primary/50 ring-offset-1"
                />
              </div>
            )}

            <p className="text-[10px] text-foreground leading-tight">
              {countryRateData[selectedCountry]?.description}
            </p>
          </div>

          {/* Calculate GButton */}
          <GButton
            onClick={calculateCompoundInterest}
            className="w-full h-9 text-xs font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
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
          </GButton>
        </GCardContent>
      </GCard>

      {result && !isCalculating && (
        <GCard className="shadow-lg border-border animate-fade-in-up bg-card">
          <GCardHeader className="pb-3 px-3 sm:px-6">
            <GCardTitle className="text-base sm:text-lg flex items-center gap-2 text-foreground">
              <div className="p-1 sm:p-1.5 bg-primary/10 rounded-lg">
                <TrendingUp className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-foreground" />
              </div>
              <span className="break-words">Compound Interest Results - {result.country}</span>
            </GCardTitle>
            <GCardDescription className="text-xs sm:text-sm text-muted-foreground">
              Your investment growth over {result.years} years with {result.effectiveRate}% effective rate
            </GCardDescription>
          </GCardHeader>
          <GCardContent className="space-y-4 px-3 sm:px-6">
            {/* Main Result Display */}
            <div className="text-center p-3 sm:p-4 rounded-xl bg-card border border-primary/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 break-words overflow-hidden">
                <span className="block">{result.currency}</span>
                <span className="block text-base sm:text-lg md:text-xl">
                  {result.totalAmount > 1e15
                    ? result.totalAmount.toExponential(2)
                    : result.totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })
                  }
                </span>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Total Future Value
              </div>
              <div className="text-xs sm:text-sm font-semibold text-heading-accent mt-1 break-words px-2">
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
            <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
              <div className="text-sm font-semibold mb-2 text-heading-accent flex items-center gap-2">
                <PieChart className="h-3.5 w-3.5" />
                Investment Breakdown
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-card rounded-lg border border-primary/30 gap-1">
                  <span className="text-xs text-foreground">Principal</span>
                  <span className="font-semibold text-xs text-foreground break-words text-right sm:text-left">
                    {result.currency} {result.principal > 1e15
                      ? result.principal.toExponential(2)
                      : result.principal.toLocaleString(undefined, { maximumFractionDigits: 2 })
                    }
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-card rounded-lg border border-secondary-accent/30 gap-1">
                  <span className="text-xs text-heading-accent">Interest Earned</span>
                  <span className="font-semibold text-xs text-heading-accent break-words text-right sm:text-left">
                    +{result.currency} {result.totalInterest > 1e15
                      ? result.totalInterest.toExponential(2)
                      : result.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })
                    }
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-card rounded-lg border border-accent/30 gap-1">
                  <span className="text-xs text-foreground">Growth Rate</span>
                  <span className="font-semibold text-xs text-foreground break-words text-right sm:text-left">
                    {result.totalInterest > 1e15 || result.principal === 0
                      ? ((result.totalInterest / result.principal) * 100).toExponential(2) + '%'
                      : ((result.totalInterest / result.principal) * 100).toFixed(1) + '%'
                    }
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-card rounded-lg border border-primary gap-1">
                  <span className="text-xs text-foreground">Effective Rate</span>
                  <span className="font-semibold text-xs text-foreground">{result.effectiveRate}%</span>
                </div>
              </div>
            </div>

            {/* Yearly Breakdown */}
            <div className="p-3 bg-card rounded-xl border border-border">
              <div className="text-xs font-semibold text-heading-accent mb-2 flex items-center gap-1.5">
                <BarChart3 className="h-3.5 w-3.5" />
                Yearly Growth Breakdown
              </div>
              <div className="space-y-1.5 max-h-96 overflow-y-auto">
                {result.yearlyBreakdown.map((year) => (
                  <div key={year.year} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-card rounded border border-border gap-1">
                    <span className="text-xs text-muted-foreground">Year {year.year}</span>
                    <span className="text-xs font-semibold text-foreground break-words text-right sm:text-left">
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
              <GButton
                onClick={copyResult}
                className="flex-1 h-9 text-xs font-medium transition-all duration-300 border border-secondary-accent hover:bg-secondary text-heading-accent bg-card"
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
              </GButton>
            </div>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
