"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Wallet, Copy, Check, Calculator, Globe, AlertTriangle, 
  TrendingUp, DollarSign, Percent, Building, Users, 
  Target, BarChart3, PieChart, Info, Zap, Sparkles
} from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface TaxBracket {
  min: number
  max: number
  rate: number
}

interface CountryTaxData {
  name: string
  code: string
  currency: string
  brackets: TaxBracket[]
  socialSecurity?: number
  additionalTaxes?: { name: string; rate: number }[]
}

interface TaxResult {
  grossSalary: number
  taxAmount: number
  netSalary: number
  monthlyNet: number
  effectiveTaxRate: number
  marginalTaxRate: number
  socialSecurity?: number
  additionalTaxes?: { name: string; amount: number }[]
  taxBreakdown: { bracket: string; amount: number; rate: number }[]
  country: string
  currency: string
}

export function TaxCalculator() {
  const [salary, setSalary] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("US")
  const [customTaxRate, setCustomTaxRate] = useState("")
  const [useCustomRate, setUseCustomRate] = useState(false)
  const [result, setResult] = useState<TaxResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showWarning, setShowWarning] = useState(false)

  // Comprehensive country tax data
  const countryTaxData: Record<string, CountryTaxData> = {
    US: {
      name: "United States",
      code: "US",
      currency: "USD",
      brackets: [
        { min: 0, max: 11000, rate: 0.10 },
        { min: 11000, max: 44725, rate: 0.12 },
        { min: 44725, max: 95375, rate: 0.22 },
        { min: 95375, max: 182100, rate: 0.24 },
        { min: 182100, max: 231250, rate: 0.32 },
        { min: 231250, max: 578125, rate: 0.35 },
        { min: 578125, max: Infinity, rate: 0.37 }
      ],
      socialSecurity: 0.062,
      additionalTaxes: [
        { name: "Medicare", rate: 0.0145 }
      ]
    },
    UK: {
      name: "United Kingdom",
      code: "UK",
      currency: "GBP",
      brackets: [
        { min: 0, max: 12570, rate: 0.00 },
        { min: 12570, max: 50270, rate: 0.20 },
        { min: 50270, max: 125140, rate: 0.40 },
        { min: 125140, max: Infinity, rate: 0.45 }
      ],
      socialSecurity: 0.12,
      additionalTaxes: [
        { name: "National Insurance", rate: 0.02 }
      ]
    },
    CA: {
      name: "Canada",
      code: "CA",
      currency: "CAD",
      brackets: [
        { min: 0, max: 53359, rate: 0.15 },
        { min: 53359, max: 106717, rate: 0.205 },
        { min: 106717, max: 165430, rate: 0.26 },
        { min: 165430, max: 235675, rate: 0.29 },
        { min: 235675, max: Infinity, rate: 0.33 }
      ],
      socialSecurity: 0.0495,
      additionalTaxes: [
        { name: "Employment Insurance", rate: 0.0163 }
      ]
    },
    AU: {
      name: "Australia",
      code: "AU",
      currency: "AUD",
      brackets: [
        { min: 0, max: 18200, rate: 0.00 },
        { min: 18200, max: 45000, rate: 0.19 },
        { min: 45000, max: 120000, rate: 0.325 },
        { min: 120000, max: 180000, rate: 0.37 },
        { min: 180000, max: Infinity, rate: 0.45 }
      ],
      socialSecurity: 0.02,
      additionalTaxes: [
        { name: "Medicare Levy", rate: 0.02 }
      ]
    },
    DE: {
      name: "Germany",
      code: "DE",
      currency: "EUR",
      brackets: [
        { min: 0, max: 10908, rate: 0.00 },
        { min: 10908, max: 62810, rate: 0.14 },
        { min: 62810, max: 277826, rate: 0.42 },
        { min: 277826, max: Infinity, rate: 0.45 }
      ],
      socialSecurity: 0.093,
      additionalTaxes: [
        { name: "Solidarity Surcharge", rate: 0.055 }
      ]
    },
    FR: {
      name: "France",
      code: "FR",
      currency: "EUR",
      brackets: [
        { min: 0, max: 10777, rate: 0.00 },
        { min: 10777, max: 27478, rate: 0.11 },
        { min: 27478, max: 78570, rate: 0.30 },
        { min: 78570, max: 168994, rate: 0.41 },
        { min: 168994, max: Infinity, rate: 0.45 }
      ],
      socialSecurity: 0.22,
      additionalTaxes: [
        { name: "CSG", rate: 0.0975 }
      ]
    },
    JP: {
      name: "Japan",
      code: "JP",
      currency: "JPY",
      brackets: [
        { min: 0, max: 1950000, rate: 0.05 },
        { min: 1950000, max: 3300000, rate: 0.10 },
        { min: 3300000, max: 6950000, rate: 0.20 },
        { min: 6950000, max: 9000000, rate: 0.23 },
        { min: 9000000, max: 18000000, rate: 0.33 },
        { min: 18000000, max: 40000000, rate: 0.40 },
        { min: 40000000, max: Infinity, rate: 0.45 }
      ],
      socialSecurity: 0.145,
      additionalTaxes: [
        { name: "Resident Tax", rate: 0.10 }
      ]
    },
    IN: {
      name: "India",
      code: "IN",
      currency: "INR",
      brackets: [
        { min: 0, max: 300000, rate: 0.00 },
        { min: 300000, max: 600000, rate: 0.05 },
        { min: 600000, max: 900000, rate: 0.10 },
        { min: 900000, max: 1200000, rate: 0.15 },
        { min: 1200000, max: 1500000, rate: 0.20 },
        { min: 1500000, max: Infinity, rate: 0.30 }
      ],
      socialSecurity: 0.12,
      additionalTaxes: [
        { name: "Health & Education Cess", rate: 0.04 }
      ]
    },
    PK: {
      name: "Pakistan",
      code: "PK",
      currency: "PKR",
      brackets: [
        { min: 0, max: 600000, rate: 0.00 },
        { min: 600000, max: 1200000, rate: 0.01 },
        { min: 1200000, max: 2200000, rate: 0.11 },
        { min: 2200000, max: 3200000, rate: 0.23 },
        { min: 3200000, max: 4100000, rate: 0.30 },
        { min: 4100000, max: Infinity, rate: 0.35 }
      ],
      socialSecurity: 0.01,
      additionalTaxes: [
        { name: "Zakat", rate: 0.025 }
      ]
    }
  }

  const calculateTax = () => {
    if (!salary) return

    setIsCalculating(true)
    setShowWarning(true)

    setTimeout(() => {
      const gross = Number.parseFloat(salary)
      const countryData = countryTaxData[selectedCountry]
      
      let tax = 0
      let taxBreakdown: { bracket: string; amount: number; rate: number }[] = []
      let marginalRate = 0

      if (useCustomRate && customTaxRate) {
        // Use custom tax rate
        const customRate = Number.parseFloat(customTaxRate) / 100
        tax = gross * customRate
        marginalRate = Number.parseFloat(customTaxRate)
        taxBreakdown = [{
          bracket: `Custom Rate (${customTaxRate}%)`,
          amount: tax,
          rate: Number.parseFloat(customTaxRate)
        }]
      } else {
        // Use country-specific progressive tax brackets
        for (const bracket of countryData.brackets) {
          if (gross > bracket.min) {
            const taxableInBracket = Math.min(gross, bracket.max) - bracket.min
            const bracketTax = taxableInBracket * bracket.rate
            tax += bracketTax
            
            if (gross >= bracket.min && gross <= bracket.max) {
              marginalRate = bracket.rate * 100
            }
            
            taxBreakdown.push({
              bracket: `${bracket.min.toLocaleString()} - ${bracket.max === Infinity ? '∞' : bracket.max.toLocaleString()}`,
              amount: bracketTax,
              rate: bracket.rate * 100
            })
          }
        }
      }

      // Calculate additional taxes
      let socialSecurity = 0
      let additionalTaxes: { name: string; amount: number }[] = []

      if (countryData.socialSecurity) {
        socialSecurity = gross * countryData.socialSecurity
      }

      if (countryData.additionalTaxes) {
        countryData.additionalTaxes.forEach(additional => {
          const amount = gross * additional.rate
          additionalTaxes.push({
            name: additional.name,
            amount: amount
          })
        })
      }

      const totalTax = tax + socialSecurity + additionalTaxes.reduce((sum, t) => sum + t.amount, 0)
      const net = gross - totalTax
      const monthlyNet = net / 12
      const effectiveRate = (totalTax / gross) * 100

      setResult({
        grossSalary: gross,
        taxAmount: Number.parseFloat(tax.toFixed(2)),
        netSalary: Number.parseFloat(net.toFixed(2)),
        monthlyNet: Number.parseFloat(monthlyNet.toFixed(2)),
        effectiveTaxRate: Number.parseFloat(effectiveRate.toFixed(2)),
        marginalTaxRate: Number.parseFloat(marginalRate.toFixed(2)),
        socialSecurity: socialSecurity > 0 ? Number.parseFloat(socialSecurity.toFixed(2)) : undefined,
        additionalTaxes: additionalTaxes.length > 0 ? additionalTaxes.map(t => ({ ...t, amount: Number.parseFloat(t.amount.toFixed(2)) })) : undefined,
        taxBreakdown,
        country: countryData.name,
        currency: countryData.currency
      })
      setIsCalculating(false)
    }, 800)
  }

  const copyResult = () => {
    if (!result) return
    const text = `${result.country} Tax Calculation:
Gross Salary: ${result.currency} ${result.grossSalary.toLocaleString()}
Income Tax: ${result.currency} ${result.taxAmount.toLocaleString()}
${result.socialSecurity ? `Social Security: ${result.currency} ${result.socialSecurity.toLocaleString()}` : ''}
${result.additionalTaxes ? result.additionalTaxes.map(t => `${t.name}: ${result.currency} ${t.amount.toLocaleString()}`).join('\n') : ''}
Net Salary: ${result.currency} ${result.netSalary.toLocaleString()}
Effective Tax Rate: ${result.effectiveTaxRate}%`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-4">
      {/* Warning Alert */}
      {showWarning && (
        <Alert className="border-amber-700 bg-black">
          <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
          <AlertDescription className="text-amber-300 text-xs">
            <strong>Important:</strong> Tax rates and percentages may change or be updated according to your country's latest tax laws. 
            Please verify with your local tax authority for the most accurate and up-to-date information.
          </AlertDescription>
        </Alert>
      )}

      {/* Main Calculator Card */}
      <Card className="shadow-lg border-slate-700 hover:shadow-xl transition-all duration-300 bg-black">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg text-orange-500">
            <div className="p-1.5 bg-orange-500/10 rounded-lg">
              <Calculator className="h-4 w-4 text-orange-500" />
            </div>
            Advanced Tax Calculator
          </CardTitle>
          <CardDescription className="text-sm text-slate-400">
            Calculate income tax for multiple countries with real tax brackets and rates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Country Selection */}
          <div className="space-y-1.5">
            <Label htmlFor="country" className="text-xs font-medium flex items-center gap-1.5 text-green-500">
              <div className="p-0.5 bg-green-500/10 rounded">
                <Globe className="h-3 w-3 text-green-500" />
              </div>
              Select Country
            </Label>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="h-9 text-sm border-slate-700 bg-black text-slate-200">
                <SelectValue placeholder="Choose your country" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(countryTaxData).map(([code, data]) => (
                  <SelectItem key={code} value={code}>
                    {data.name} ({data.currency})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Salary Input */}
          <div className="space-y-1.5">
            <Label htmlFor="salary" className="text-xs font-medium flex items-center gap-1.5 text-green-500">
              <div className="p-0.5 bg-green-500/10 rounded">
                <DollarSign className="h-3 w-3 text-green-500" />
              </div>
              Annual Gross Salary ({countryTaxData[selectedCountry]?.currency})
            </Label>
            <Input
              id="salary"
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="75000"
              className="h-9 text-sm px-3 py-2 rounded-lg border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 hover:border-orange-500/50 ring-offset-1"
            />
          </div>

          {/* Custom Tax Rate Option */}
          <div className="space-y-3 p-3 bg-black rounded-xl border border-slate-700">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="custom-rate" 
                checked={useCustomRate} 
                onCheckedChange={(checked) => setUseCustomRate(checked === true)}
              />
              <Label htmlFor="custom-rate" className="text-xs font-medium flex items-center gap-1.5 text-green-500">
                <div className="p-0.5 bg-green-500/10 rounded">
                  <Percent className="h-3 w-3 text-green-500" />
                </div>
                Use Custom Tax Rate (Override Country Default)
              </Label>
            </div>
            
            {useCustomRate && (
              <div className="space-y-1.5">
                <Label htmlFor="custom-tax-rate" className="text-xs font-medium text-green-500">
                  Custom Tax Rate (%)
                </Label>
                <Input
                  id="custom-tax-rate"
                  type="number"
                  value={customTaxRate}
                  onChange={(e) => setCustomTaxRate(e.target.value)}
                  placeholder="25"
                  className="h-9 text-sm px-3 py-2 rounded-lg border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500 hover:border-orange-500/50 ring-offset-1"
                />
                <p className="text-xs text-orange-300">
                  Enter a flat tax rate percentage (e.g., 25 for 25%)
                </p>
              </div>
            )}
          </div>

          {/* Calculate Button */}
          <Button
            onClick={calculateTax}
            className="w-full h-10 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            disabled={!salary || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-1.5 h-3.5 w-3.5" />
                <span>Calculating Tax...</span>
              </>
            ) : (
              <>
                <Calculator className="mr-1.5 h-3.5 w-3.5" />
                <span>Calculate Tax</span>
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      {result && !isCalculating && (
        <Card className="shadow-lg border-slate-700 animate-fade-in-up bg-black">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-orange-500">
              <div className="p-1.5 bg-orange-500/10 rounded-lg">
                <TrendingUp className="h-4 w-4 text-orange-500" />
              </div>
              Tax Calculation Results - {result.country}
            </CardTitle>
            <CardDescription className="text-sm text-slate-400">
              Comprehensive tax breakdown with all deductions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Main Result Display */}
            <div className="text-center p-4 rounded-xl bg-black border border-orange-500/20">
              <div className="text-2xl font-bold text-orange-500 mb-1">
                {result.currency} {result.netSalary.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400">
                Annual Net Salary
              </div>
              <div className="text-sm font-semibold text-green-400 mt-1">
                {result.currency} {result.monthlyNet.toLocaleString()} / month
              </div>
            </div>

            {/* Tax Breakdown */}
            <div className="space-y-2 p-3 bg-black rounded-lg border border-slate-700">
              <div className="text-sm font-semibold mb-2 text-green-500 flex items-center gap-2">
                <BarChart3 className="h-3.5 w-3.5" />
                Tax Breakdown
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex justify-between items-center p-2 bg-black rounded-lg border border-blue-700">
                  <span className="text-xs text-blue-400">Gross Salary</span>
                  <span className="font-semibold text-xs text-blue-300">{result.currency} {result.grossSalary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-black rounded-lg border border-red-700">
                  <span className="text-xs text-red-400">Income Tax</span>
                  <span className="font-semibold text-xs text-red-300">-{result.currency} {result.taxAmount.toLocaleString()}</span>
                </div>
                {result.socialSecurity && (
                  <div className="flex justify-between items-center p-2 bg-black rounded-lg border border-orange-700">
                    <span className="text-xs text-orange-400">Social Security</span>
                    <span className="font-semibold text-xs text-orange-300">-{result.currency} {result.socialSecurity.toLocaleString()}</span>
                  </div>
                )}
                {result.additionalTaxes && result.additionalTaxes.map((tax, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-black rounded-lg border border-purple-700">
                    <span className="text-xs text-purple-400">{tax.name}</span>
                    <span className="font-semibold text-xs text-purple-300">-{result.currency} {tax.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tax Rates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-black rounded-xl border border-cyan-700">
                <div className="text-xs font-semibold text-green-500 mb-1 flex items-center gap-1.5">
                  <Target className="h-3.5 w-3.5" />
                  Effective Tax Rate
                </div>
                <div className="text-xl font-bold text-cyan-300">
                  {result.effectiveTaxRate}%
                </div>
              </div>
              <div className="p-3 bg-black rounded-xl border border-orange-700">
                <div className="text-xs font-semibold text-green-500 mb-1 flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Marginal Tax Rate
                </div>
                <div className="text-xl font-bold text-orange-300">
                  {result.marginalTaxRate}%
                </div>
              </div>
            </div>

            {/* Tax Bracket Breakdown */}
            <div className="p-3 bg-black rounded-xl border border-slate-700">
              <div className="text-xs font-semibold text-green-500 mb-2 flex items-center gap-1.5">
                <PieChart className="h-3.5 w-3.5" />
                Tax Bracket Breakdown
              </div>
              <div className="space-y-1.5">
                {result.taxBreakdown.map((bracket, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-black rounded border border-slate-700">
                    <span className="text-xs text-slate-400">{bracket.bracket}</span>
                    <span className="text-xs font-semibold text-slate-300">
                      {result.currency} {bracket.amount.toLocaleString()} ({bracket.rate}%)
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
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5" />
                    <span>Copy Result</span>
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
