"use client"

import { useState, useEffect } from "react"
import { stateTaxRates } from "@/lib/sales-tax-rates"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GBadge } from "@/ui/gbadge"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"

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


export default function SalesTaxCalculator({ defaultState }: { defaultState?: string } = {}) {
  const [beforeTaxPrice, setBeforeTaxPrice] = useState("")
  const [taxRate, setTaxRate] = useState("")
  const [afterTaxPrice, setAfterTaxPrice] = useState("")
  const [selectedState, setSelectedState] = useState(defaultState ?? "")
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
      void navigator.clipboard.writeText(text)
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
    <div className="space-y-4 sm:space-y-6 md:space-y-8 bg-card rounded-xl p-2 sm:p-3 md:p-4 w-full overflow-hidden">
      {/* Main Calculator */}
      <GCard className="bg-card border-border w-full overflow-hidden">
        <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
            <Calculator className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
            Advanced Sales Tax Calculator
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-3 md:px-4">
          {/* Calculation Method Selection */}
          <div className="space-y-1.5 w-full min-w-0">
            <GLabel className="text-heading-accent text-xs sm:text-sm">Calculation Method</GLabel>
            <GSelect value={calculationMethod} onValueChange={(value: "forward" | "reverse" | "rate") => setCalculationMethod(value)}>
              <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                <GSelectValue />
              </GSelectTrigger>
              <GSelectContent>
                <GSelectItem value="forward">Forward: Calculate After-Tax Price</GSelectItem>
                <GSelectItem value="reverse">Reverse: Calculate Before-Tax Price</GSelectItem>
                <GSelectItem value="rate">Rate: Calculate Tax Rate</GSelectItem>
              </GSelectContent>
            </GSelect>
          </div>

          {/* State Selection */}
          <div className="space-y-1.5 w-full min-w-0">
            <GLabel className="text-heading-accent text-xs sm:text-sm">State (Optional)</GLabel>
            <GSelect value={selectedState} onValueChange={handleStateChange}>
              <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                <GSelectValue placeholder="GSelect a state for automatic tax rate" />
              </GSelectTrigger>
              <GSelectContent>
                {stateTaxRates.map((state) => (
                  <GSelectItem key={state.state} value={state.state}>
                    {state.state} ({state.stateRate}%)
                  </GSelectItem>
                ))}
              </GSelectContent>
            </GSelect>
          </div>

          {/* GInput Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="beforeTaxPrice" className="text-heading-accent text-xs sm:text-sm">Before Tax Price ($)</GLabel>
              <GInput
                id="beforeTaxPrice"
                type="number"
                placeholder="100.00"
                value={beforeTaxPrice}
                onChange={(e) => setBeforeTaxPrice(e.target.value)}
                disabled={calculationMethod === "reverse"}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="taxRate" className="text-heading-accent text-xs sm:text-sm">Sales Tax Rate (%)</GLabel>
              <GInput
                id="taxRate"
                type="number"
                placeholder="6.5"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
                disabled={calculationMethod === "rate"}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
          </div>

          {calculationMethod === "reverse" && (
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="afterTaxPrice" className="text-heading-accent text-xs sm:text-sm">After Tax Price ($)</GLabel>
              <GInput
                id="afterTaxPrice"
                type="number"
                placeholder="106.50"
                value={afterTaxPrice}
                onChange={(e) => setAfterTaxPrice(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
          )}

          {calculationMethod === "rate" && (
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="afterTaxPrice" className="text-heading-accent text-xs sm:text-sm">After Tax Price ($)</GLabel>
              <GInput
                id="afterTaxPrice"
                type="number"
                placeholder="106.50"
                value={afterTaxPrice}
                onChange={(e) => setAfterTaxPrice(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <GButton onClick={calculateSalesTax} className="w-full sm:w-auto text-sm sm:text-base">
              <Calculator className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Calculate Sales Tax
            </GButton>
            <GButton variant="outline" onClick={clearAll} className="w-full sm:w-auto text-sm sm:text-base">
              Clear All
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Results Section */}
      {result && (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Results */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <Receipt className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                Sales Tax Calculation Results
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <GLabel className="text-xs sm:text-sm text-heading-accent">Before Tax Price</GLabel>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    ${result.beforeTaxPrice.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel className="text-xs sm:text-sm text-heading-accent">After Tax Price</GLabel>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-heading-accent">
                    ${result.afterTaxPrice.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 border-t border-border">
                <div className="text-center p-2 bg-card border border-border rounded-lg">
                  <div className="text-xs text-foreground">Tax Rate</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">{result.taxRate.toFixed(2)}%</div>
                </div>
                <div className="text-center p-2 bg-card border border-border rounded-lg">
                  <div className="text-xs text-foreground">Tax Amount</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">${result.taxAmount.toFixed(2)}</div>
                </div>
                <div className="text-center p-2 bg-card border border-border rounded-lg">
                  <div className="text-xs text-foreground">State</div>
                  <div className="text-base sm:text-lg font-semibold text-foreground">{result.state}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-3">
                <GButton onClick={copyResult} variant="outline" size="sm" className="text-xs sm:text-sm">
                  <Copy className="mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  Copy Results
                </GButton>
              </div>
            </GCardContent>
          </GCard>

          {/* Tax Breakdown */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                Tax Breakdown
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm">State Tax</h3>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">${result.breakdown.stateTax.toFixed(2)}</div>
                  <p className="text-xs text-foreground">{result.taxRate.toFixed(2)}% rate</p>
                </div>
                <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm">Local Tax</h3>
                  <div className="text-xl sm:text-2xl font-bold text-heading-accent">${result.breakdown.localTax.toFixed(2)}</div>
                  <p className="text-xs text-foreground">{result.localTax.toFixed(2)}% rate</p>
                </div>
                <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1.5 text-xs sm:text-sm">Total Tax</h3>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">${result.breakdown.totalTax.toFixed(2)}</div>
                  <p className="text-xs text-foreground">{result.totalTaxRate.toFixed(2)}% total rate</p>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* State Comparison */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                State Tax Comparison
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="px-2 sm:px-3 md:px-4">
              <div className="space-y-1.5 sm:space-y-2">
                {result.comparison.otherStates.map((state, index) => (
                  <div key={index} className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-border rounded-lg">
                    <div>
                      <span className="font-medium text-foreground text-xs sm:text-sm">{state.state}</span>
                      <p className="text-xs text-foreground">{state.rate.toFixed(2)}% tax rate</p>
                    </div>
                    <GBadge className={state.difference > 0 ? "bg-destructive/20 text-foreground border-destructive" : "bg-border text-foreground"} variant="outline">
                      {state.difference > 0 ? "+" : ""}{state.difference.toFixed(2)}%
                    </GBadge>
                  </div>
                ))}
              </div>
            </GCardContent>
          </GCard>

          {/* Recommendations */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
                Personalized Recommendations
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Tax Optimization</h4>
                  <ul className="space-y-1 text-xs">
                    {result.recommendations.taxOptimization.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 text-foreground">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Business Tips</h4>
                  <ul className="space-y-1 text-xs">
                    {result.recommendations.businessTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 text-foreground">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Compliance</h4>
                  <ul className="space-y-1 text-xs">
                    {result.recommendations.compliance.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5 text-foreground">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="break-words">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}

      {/* History Section */}
      {history.length > 0 && (
        <GCard className="bg-card border-border w-full overflow-hidden">
          <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
            <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
              <History className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
              Recent Calculations
            </GCardTitle>
          </GCardHeader>
          <GCardContent className="px-2 sm:px-3 md:px-4">
            <div className="space-y-1.5 sm:space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 sm:p-2.5 bg-card border border-border rounded-lg">
                  <div className="space-y-0.5">
                    <div className="font-medium text-foreground text-xs sm:text-sm">
                      ${item.beforeTaxPrice.toFixed(2)} → ${item.afterTaxPrice.toFixed(2)}
                    </div>
                    <div className="text-xs text-foreground">
                      {item.taxRate.toFixed(2)}% tax - {item.state}
                    </div>
                  </div>
                  <GButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
                    className="text-xs sm:text-sm"
                  >
                    View Details
                  </GButton>
                </div>
              ))}
            </div>
          </GCardContent>
        </GCard>
      )}

      {/* Information Section */}
      <GCard className="bg-card border-border w-full overflow-hidden">
        <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
            <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground" />
            Sales Tax Calculator Features
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-2 sm:space-y-3 px-2 sm:px-3 md:px-4">
          <div className="p-2 sm:p-2.5 md:p-3 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-1.5 sm:gap-2">
              <Info className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-xs sm:text-sm">
                <p className="font-medium text-foreground mb-1 break-words">
                  Professional Sales Tax Analysis
                </p>
                <p className="text-foreground break-words">
                  This calculator provides accurate sales tax calculations for all 50 US states with local tax considerations. Perfect for businesses, consumers, and tax professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-foreground space-y-1">
            <p className="break-words">
              <strong className="text-heading-accent">Forward Calculation:</strong> Calculate the final price after adding sales tax to the before-tax price.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Reverse Calculation:</strong> Calculate the before-tax price when you know the final after-tax price.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Rate Calculation:</strong> Calculate the effective tax rate when you know both before and after-tax prices.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">State Comparison:</strong> Compare tax rates across different states to optimize your purchases.
            </p>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
