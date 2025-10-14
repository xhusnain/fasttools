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
  Receipt, 
  Building, 
  MapPin, 
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
  Calendar, 
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
  TrendingDown as TrendingDownIcon
} from "lucide-react"

interface SalesTaxResult {
  beforeTaxPrice: number
  taxRate: number
  taxAmount: number
  afterTaxPrice: number
  calculationMethod: string
  state: string
  localTax: number
  totalTaxRate: number
  savings: number
  breakdown: {
    stateTax: number
    localTax: number
    totalTax: number
  }
  recommendations: {
    taxOptimization: string[]
    businessTips: string[]
    compliance: string[]
  }
  comparison: {
    otherStates: Array<{
      state: string
      rate: number
      difference: number
    }>
  }
}

interface StateTaxData {
  state: string
  stateRate: number
  maxRate: number
  localTax: number
}

const stateTaxRates: StateTaxData[] = [
  { state: "Alabama", stateRate: 4.0, maxRate: 13.5, localTax: 9.5 },
  { state: "Alaska", stateRate: 0.0, maxRate: 7.0, localTax: 7.0 },
  { state: "Arizona", stateRate: 5.6, maxRate: 10.725, localTax: 5.125 },
  { state: "Arkansas", stateRate: 6.5, maxRate: 11.625, localTax: 5.125 },
  { state: "California", stateRate: 7.25, maxRate: 10.5, localTax: 3.25 },
  { state: "Colorado", stateRate: 2.9, maxRate: 10.0, localTax: 7.1 },
  { state: "Connecticut", stateRate: 6.35, maxRate: 6.35, localTax: 0.0 },
  { state: "Delaware", stateRate: 0.0, maxRate: 0.0, localTax: 0.0 },
  { state: "District of Columbia", stateRate: 6.0, maxRate: 6.0, localTax: 0.0 },
  { state: "Florida", stateRate: 6.0, maxRate: 7.5, localTax: 1.5 },
  { state: "Georgia", stateRate: 4.0, maxRate: 8.0, localTax: 4.0 },
  { state: "Hawaii", stateRate: 4.166, maxRate: 4.712, localTax: 0.546 },
  { state: "Idaho", stateRate: 6.0, maxRate: 8.5, localTax: 2.5 },
  { state: "Illinois", stateRate: 6.25, maxRate: 10.25, localTax: 4.0 },
  { state: "Indiana", stateRate: 7.0, maxRate: 7.0, localTax: 0.0 },
  { state: "Iowa", stateRate: 6.0, maxRate: 7.0, localTax: 1.0 },
  { state: "Kansas", stateRate: 6.5, maxRate: 11.6, localTax: 5.1 },
  { state: "Kentucky", stateRate: 6.0, maxRate: 6.0, localTax: 0.0 },
  { state: "Louisiana", stateRate: 4.45, maxRate: 11.45, localTax: 7.0 },
  { state: "Maine", stateRate: 5.5, maxRate: 5.5, localTax: 0.0 },
  { state: "Maryland", stateRate: 6.0, maxRate: 6.0, localTax: 0.0 },
  { state: "Massachusetts", stateRate: 6.25, maxRate: 6.25, localTax: 0.0 },
  { state: "Michigan", stateRate: 6.0, maxRate: 6.0, localTax: 0.0 },
  { state: "Minnesota", stateRate: 6.875, maxRate: 7.875, localTax: 1.0 },
  { state: "Mississippi", stateRate: 7.0, maxRate: 7.25, localTax: 0.25 },
  { state: "Missouri", stateRate: 4.225, maxRate: 10.85, localTax: 6.625 },
  { state: "Montana", stateRate: 0.0, maxRate: 0.0, localTax: 0.0 },
  { state: "Nebraska", stateRate: 5.5, maxRate: 7.5, localTax: 2.0 },
  { state: "Nevada", stateRate: 6.85, maxRate: 8.375, localTax: 1.525 },
  { state: "New Hampshire", stateRate: 0.0, maxRate: 0.0, localTax: 0.0 },
  { state: "New Jersey", stateRate: 6.625, maxRate: 12.625, localTax: 6.0 },
  { state: "New Mexico", stateRate: 5.125, maxRate: 8.688, localTax: 3.563 },
  { state: "New York", stateRate: 4.0, maxRate: 8.875, localTax: 4.875 },
  { state: "North Carolina", stateRate: 4.75, maxRate: 7.5, localTax: 2.75 },
  { state: "North Dakota", stateRate: 5.0, maxRate: 8.0, localTax: 3.0 },
  { state: "Ohio", stateRate: 5.75, maxRate: 8.0, localTax: 2.25 },
  { state: "Oklahoma", stateRate: 4.5, maxRate: 11.0, localTax: 6.5 },
  { state: "Oregon", stateRate: 0.0, maxRate: 0.0, localTax: 0.0 },
  { state: "Pennsylvania", stateRate: 6.0, maxRate: 8.0, localTax: 2.0 },
  { state: "Rhode Island", stateRate: 7.0, maxRate: 7.0, localTax: 0.0 },
  { state: "South Carolina", stateRate: 6.0, maxRate: 9.0, localTax: 3.0 },
  { state: "South Dakota", stateRate: 4.0, maxRate: 6.0, localTax: 2.0 },
  { state: "Tennessee", stateRate: 7.0, maxRate: 9.75, localTax: 2.75 },
  { state: "Texas", stateRate: 6.25, maxRate: 8.25, localTax: 2.0 },
  { state: "Utah", stateRate: 6.1, maxRate: 8.35, localTax: 2.25 },
  { state: "Vermont", stateRate: 6.0, maxRate: 7.0, localTax: 1.0 },
  { state: "Virginia", stateRate: 5.3, maxRate: 7.0, localTax: 1.7 },
  { state: "Washington", stateRate: 6.5, maxRate: 10.6, localTax: 4.1 },
  { state: "West Virginia", stateRate: 6.0, maxRate: 7.0, localTax: 1.0 },
  { state: "Wisconsin", stateRate: 5.0, maxRate: 6.9, localTax: 1.9 },
  { state: "Wyoming", stateRate: 4.0, maxRate: 6.0, localTax: 2.0 }
]

export default function SalesTaxCalculator() {
  const [beforeTaxPrice, setBeforeTaxPrice] = useState("")
  const [taxRate, setTaxRate] = useState("")
  const [afterTaxPrice, setAfterTaxPrice] = useState("")
  const [selectedState, setSelectedState] = useState("")
  const [calculationMethod, setCalculationMethod] = useState<"forward" | "reverse" | "rate">("forward")
  const [result, setResult] = useState<SalesTaxResult | null>(null)
  const [history, setHistory] = useState<SalesTaxResult[]>([])

  const calculateSalesTax = () => {
    if (calculationMethod === "forward" && beforeTaxPrice && taxRate) {
      const price = parseFloat(beforeTaxPrice)
      const rate = parseFloat(taxRate)
      const taxAmount = (price * rate) / 100
      const afterTax = price + taxAmount
      
      const stateData = stateTaxRates.find(s => s.state === selectedState)
      const localTax = stateData ? stateData.localTax : 0
      const totalTaxRate = rate + localTax
      
      const newResult: SalesTaxResult = {
        beforeTaxPrice: price,
        taxRate: rate,
        taxAmount: taxAmount,
        afterTaxPrice: afterTax,
        calculationMethod: "Forward Calculation",
        state: selectedState || "Custom Rate",
        localTax: localTax,
        totalTaxRate: totalTaxRate,
        savings: 0,
        breakdown: {
          stateTax: taxAmount,
          localTax: (price * localTax) / 100,
          totalTax: taxAmount + (price * localTax) / 100
        },
        recommendations: generateRecommendations(price, rate, selectedState),
        comparison: generateComparison(rate, selectedState)
      }
      
      setResult(newResult)
      setHistory(prev => [newResult, ...prev.slice(0, 4)])
    } else if (calculationMethod === "reverse" && afterTaxPrice && taxRate) {
      const price = parseFloat(afterTaxPrice)
      const rate = parseFloat(taxRate)
      const beforeTax = price / (1 + rate / 100)
      const taxAmount = price - beforeTax
      
      const stateData = stateTaxRates.find(s => s.state === selectedState)
      const localTax = stateData ? stateData.localTax : 0
      const totalTaxRate = rate + localTax
      
      const newResult: SalesTaxResult = {
        beforeTaxPrice: beforeTax,
        taxRate: rate,
        taxAmount: taxAmount,
        afterTaxPrice: price,
        calculationMethod: "Reverse Calculation",
        state: selectedState || "Custom Rate",
        localTax: localTax,
        totalTaxRate: totalTaxRate,
        savings: 0,
        breakdown: {
          stateTax: taxAmount,
          localTax: (beforeTax * localTax) / 100,
          totalTax: taxAmount + (beforeTax * localTax) / 100
        },
        recommendations: generateRecommendations(beforeTax, rate, selectedState),
        comparison: generateComparison(rate, selectedState)
      }
      
      setResult(newResult)
      setHistory(prev => [newResult, ...prev.slice(0, 4)])
    } else if (calculationMethod === "rate" && beforeTaxPrice && afterTaxPrice) {
      const beforeTax = parseFloat(beforeTaxPrice)
      const afterTax = parseFloat(afterTaxPrice)
      const taxAmount = afterTax - beforeTax
      const rate = (taxAmount / beforeTax) * 100
      
      const stateData = stateTaxRates.find(s => s.state === selectedState)
      const localTax = stateData ? stateData.localTax : 0
      const totalTaxRate = rate + localTax
      
      const newResult: SalesTaxResult = {
        beforeTaxPrice: beforeTax,
        taxRate: rate,
        taxAmount: taxAmount,
        afterTaxPrice: afterTax,
        calculationMethod: "Rate Calculation",
        state: selectedState || "Custom Rate",
        localTax: localTax,
        totalTaxRate: totalTaxRate,
        savings: 0,
        breakdown: {
          stateTax: taxAmount,
          localTax: (beforeTax * localTax) / 100,
          totalTax: taxAmount + (beforeTax * localTax) / 100
        },
        recommendations: generateRecommendations(beforeTax, rate, selectedState),
        comparison: generateComparison(rate, selectedState)
      }
      
      setResult(newResult)
      setHistory(prev => [newResult, ...prev.slice(0, 4)])
    }
  }

  const generateRecommendations = (price: number, rate: number, state: string) => {
    const taxOptimization: string[] = []
    const businessTips: string[] = []
    const compliance: string[] = []

    // Tax optimization recommendations
    if (rate > 8) {
      taxOptimization.push("Consider purchasing in a state with lower tax rates")
      taxOptimization.push("Look for tax-free shopping events or holidays")
    }
    if (price > 1000) {
      taxOptimization.push("Consider breaking large purchases into smaller ones")
      taxOptimization.push("Research business tax exemptions in your state")
    }

    // Business tips
    businessTips.push("Keep detailed records of all sales tax collected")
    businessTips.push("File sales tax returns on time to avoid penalties")
    businessTips.push("Consider using sales tax software for compliance")
    businessTips.push("Understand nexus rules for online sales")

    // Compliance tips
    compliance.push("Verify your business has proper sales tax permits")
    compliance.push("Understand which products are taxable in your state")
    compliance.push("Keep receipts for all business purchases")
    compliance.push("Consider consulting a tax professional for complex situations")

    return { taxOptimization, businessTips, compliance }
  }

  const generateComparison = (rate: number, state: string) => {
    const otherStates = stateTaxRates
      .filter(s => s.state !== state)
      .map(s => ({
        state: s.state,
        rate: s.stateRate,
        difference: s.stateRate - rate
      }))
      .sort((a, b) => Math.abs(a.difference) - Math.abs(b.difference))
      .slice(0, 5)

    return { otherStates }
  }

  const copyResult = () => {
    if (result) {
      const text = `Sales Tax Calculator Results:
Before Tax Price: $${result.beforeTaxPrice.toFixed(2)}
Tax Rate: ${result.taxRate.toFixed(2)}%
Tax Amount: $${result.taxAmount.toFixed(2)}
After Tax Price: $${result.afterTaxPrice.toFixed(2)}
State: ${result.state}
Total Tax Rate: ${result.totalTaxRate.toFixed(2)}%`
      navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setBeforeTaxPrice("")
    setTaxRate("")
    setAfterTaxPrice("")
    setSelectedState("")
    setResult(null)
  }

  const handleStateChange = (state: string) => {
    setSelectedState(state)
    const stateData = stateTaxRates.find(s => s.state === state)
    if (stateData) {
      setTaxRate(stateData.stateRate.toString())
    }
  }

  return (
    <div className="space-y-6">
      {/* Main Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Advanced Sales Tax Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Calculation Method Selection */}
          <div>
            <Label>Calculation Method</Label>
            <Select value={calculationMethod} onValueChange={(value: "forward" | "reverse" | "rate") => setCalculationMethod(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="forward">Forward: Calculate After-Tax Price</SelectItem>
                <SelectItem value="reverse">Reverse: Calculate Before-Tax Price</SelectItem>
                <SelectItem value="rate">Rate: Calculate Tax Rate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* State Selection */}
          <div>
            <Label>State (Optional)</Label>
            <Select value={selectedState} onValueChange={handleStateChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a state for automatic tax rate" />
              </SelectTrigger>
              <SelectContent>
                {stateTaxRates.map((state) => (
                  <SelectItem key={state.state} value={state.state}>
                    {state.state} ({state.stateRate}%)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Input Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="beforeTaxPrice">Before Tax Price ($)</Label>
              <Input
                id="beforeTaxPrice"
                type="number"
                placeholder="100.00"
                value={beforeTaxPrice}
                onChange={(e) => setBeforeTaxPrice(e.target.value)}
                disabled={calculationMethod === "reverse"}
              />
            </div>
            <div>
              <Label htmlFor="taxRate">Sales Tax Rate (%)</Label>
              <Input
                id="taxRate"
                type="number"
                placeholder="6.5"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
                disabled={calculationMethod === "rate"}
              />
            </div>
          </div>

          {calculationMethod === "reverse" && (
            <div>
              <Label htmlFor="afterTaxPrice">After Tax Price ($)</Label>
              <Input
                id="afterTaxPrice"
                type="number"
                placeholder="106.50"
                value={afterTaxPrice}
                onChange={(e) => setAfterTaxPrice(e.target.value)}
              />
            </div>
          )}

          {calculationMethod === "rate" && (
            <div>
              <Label htmlFor="afterTaxPrice">After Tax Price ($)</Label>
              <Input
                id="afterTaxPrice"
                type="number"
                placeholder="106.50"
                value={afterTaxPrice}
                onChange={(e) => setAfterTaxPrice(e.target.value)}
              />
            </div>
          )}

          <div className="flex gap-2">
            <Button onClick={calculateSalesTax} className="flex-1">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Sales Tax
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
                <Receipt className="h-5 w-5 text-green-500" />
                Sales Tax Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Before Tax Price</Label>
                  <div className="text-3xl font-bold text-blue-600">
                    ${result.beforeTaxPrice.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">After Tax Price</Label>
                  <div className="text-3xl font-bold text-green-600">
                    ${result.afterTaxPrice.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Tax Rate</div>
                  <div className="text-lg font-semibold text-orange-600">{result.taxRate.toFixed(2)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Tax Amount</div>
                  <div className="text-lg font-semibold text-red-600">${result.taxAmount.toFixed(2)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">State</div>
                  <div className="text-lg font-semibold text-purple-600">{result.state}</div>
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

          {/* Tax Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                Tax Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">State Tax</h3>
                  <div className="text-2xl font-bold text-blue-600">${result.breakdown.stateTax.toFixed(2)}</div>
                  <p className="text-sm text-blue-600 dark:text-blue-400">{result.taxRate.toFixed(2)}% rate</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Local Tax</h3>
                  <div className="text-2xl font-bold text-green-600">${result.breakdown.localTax.toFixed(2)}</div>
                  <p className="text-sm text-green-600 dark:text-green-400">{result.localTax.toFixed(2)}% rate</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Total Tax</h3>
                  <div className="text-2xl font-bold text-purple-600">${result.breakdown.totalTax.toFixed(2)}</div>
                  <p className="text-sm text-purple-600 dark:text-purple-400">{result.totalTaxRate.toFixed(2)}% total rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* State Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                State Tax Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.comparison.otherStates.map((state, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="font-medium">{state.state}</span>
                      <p className="text-sm text-muted-foreground">{state.rate.toFixed(2)}% tax rate</p>
                    </div>
                    <Badge variant={state.difference > 0 ? "destructive" : "default"}>
                      {state.difference > 0 ? "+" : ""}{state.difference.toFixed(2)}%
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
                  <h4 className="font-semibold mb-3 text-blue-600">Tax Optimization</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.taxOptimization.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Business Tips</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.businessTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-600">Compliance</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.compliance.map((rec, index) => (
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
                      ${item.beforeTaxPrice.toFixed(2)} → ${item.afterTaxPrice.toFixed(2)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.taxRate.toFixed(2)}% tax - {item.state}
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
            Sales Tax Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Professional Sales Tax Analysis
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  This calculator provides accurate sales tax calculations for all 50 US states with local tax considerations. Perfect for businesses, consumers, and tax professionals.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Forward Calculation:</strong> Calculate the final price after adding sales tax to the before-tax price.
            </p>
            <p>
              <strong>Reverse Calculation:</strong> Calculate the before-tax price when you know the final after-tax price.
            </p>
            <p>
              <strong>Rate Calculation:</strong> Calculate the effective tax rate when you know both before and after-tax prices.
            </p>
            <p>
              <strong>State Comparison:</strong> Compare tax rates across different states to optimize your purchases.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
