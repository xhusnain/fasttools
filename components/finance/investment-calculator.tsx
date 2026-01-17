"use client"

import { useState, useEffect } from "react"
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
  Calendar,
  TrendingUp,
  TrendingDown,
  Info,
  AlertCircle,
  Check,
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

interface InvestmentResult {
  endAmount: number
  startingAmount: number
  additionalContribution: number
  returnRate: number
  investmentLength: number
  compoundFrequency: string
  contributionTiming: string
  calculations: {
    totalContributions: number
    totalInterest: number
    interestPercentage: number
    contributionPercentage: number
    startingPercentage: number
  }
  accumulationSchedule: Array<{
    year: number
    deposit: number
    interest: number
    endingBalance: number
  }>
  recommendations: {
    investmentTips: string[]
    riskManagement: string[]
    portfolioStrategies: string[]
  }
  comparison: {
    scenarios: Array<{
      scenario: string
      endAmount: number
      difference: number
    }>
  }
}

const formatNumber = (num: number): number => {
  // Round to 2 decimal places and avoid scientific notation
  return Math.round(num * 100) / 100
}

const calculateFutureValueWithContributions = (
  starting: number,
  effectiveRate: number,
  periods: number,
  additional: number,
  contributionTiming: string
) => {
  let futureValue = starting * Math.pow(1 + effectiveRate, periods)

  if (additional > 0) {
    const contributionFactor = contributionTiming === "beginning" ? (1 + effectiveRate) : 1
    if (effectiveRate === 0) {
      // If no interest, just add contributions
      futureValue += additional * periods
    } else {
      const annuityFactor = ((Math.pow(1 + effectiveRate, periods) - 1) / effectiveRate) * contributionFactor
      futureValue += additional * annuityFactor
    }
  }
  return futureValue
}

const generateCalculationMetrics = (
  starting: number,
  additional: number,
  length: number,
  endAmount: number
) => {
  const totalContributions = starting + (additional * length)
  const totalInterest = endAmount - totalContributions

  return {
    totalContributions: formatNumber(totalContributions),
    totalInterest: formatNumber(totalInterest),
    interestPercentage: formatNumber((totalInterest / endAmount) * 100),
    contributionPercentage: formatNumber((totalContributions / endAmount) * 100),
    startingPercentage: formatNumber((starting / endAmount) * 100)
  }
}

export default function InvestmentCalculator() {
  const [formData, setFormData] = useState({
    endAmount: "",
    startingAmount: "",
    additionalContribution: "",
    returnRate: "",
    investmentLength: ""
  })
  const [calculationType, setCalculationType] = useState("endAmount")
  const [compoundFrequency, setCompoundFrequency] = useState("annually")
  const [contributionTiming, setContributionTiming] = useState("end")
  const [result, setResult] = useState<InvestmentResult | null>(null)
  const [history, setHistory] = useState<InvestmentResult[]>([])
  const [copied, setCopied] = useState(false)

  const handleInputChange = (key: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const calculateInvestment = () => {
    const end = parseFloat(formData.endAmount) || 0
    const starting = parseFloat(formData.startingAmount) || 0
    const additional = parseFloat(formData.additionalContribution) || 0
    const rate = parseFloat(formData.returnRate) || 0
    const length = parseFloat(formData.investmentLength) || 0

    // Validation
    if (rate < 0) {
      alert("Return rate cannot be negative")
      return
    }
    if (length < 0) {
      alert("Investment length cannot be negative")
      return
    }
    if (starting < 0 || starting > 10000000) {
      alert("Starting amount must be between $0 and $10,000,000")
      return
    }
    if (additional < 0 || additional > 1000000) {
      alert("Additional contribution must be between $0 and $1,000,000")
      return
    }
    if (end < 0 || end > 100000000) {
      alert("End amount must be between $0 and $100,000,000")
      return
    }

    let calculatedResult: InvestmentResult

    if (calculationType === "endAmount") {
      // Calculate End Amount
      const annualRate = rate / 100
      const periods = length
      const compoundPeriods = getCompoundPeriods(compoundFrequency)
      const effectiveRate = Math.pow(1 + annualRate / compoundPeriods, compoundPeriods) - 1

      const futureValue = calculateFutureValueWithContributions(starting, effectiveRate, periods, additional, contributionTiming)

      calculatedResult = {
        endAmount: formatNumber(futureValue),
        startingAmount: formatNumber(starting),
        additionalContribution: formatNumber(additional),
        returnRate: formatNumber(rate),
        investmentLength: formatNumber(length),
        compoundFrequency,
        contributionTiming,
        calculations: generateCalculationMetrics(starting, additional, length, futureValue),
        accumulationSchedule: generateAccumulationSchedule(starting, additional, rate, length, compoundFrequency, contributionTiming),
        recommendations: generateRecommendations(rate, futureValue, length),
        comparison: generateComparison(futureValue, rate)
      }
    } else if (calculationType === "returnRate") {
      // Calculate Return Rate using Newton-Raphson method
      const targetAmount = end
      const periods = length
      const compoundPeriods = getCompoundPeriods(compoundFrequency)

      let rateGuess = 0.05 // Start with 5%
      let tolerance = 0.0001
      let maxIterations = 50
      let iteration = 0

      while (iteration < maxIterations) {
        const f = (r: number) => {
          const effectiveRate = Math.pow(1 + r / compoundPeriods, compoundPeriods) - 1
          const futureValue = calculateFutureValueWithContributions(starting, effectiveRate, periods, additional, contributionTiming)
          return futureValue - targetAmount
        }

        const fPrime = (r: number) => {
          const effectiveRate = Math.pow(1 + r / compoundPeriods, compoundPeriods) - 1
          let derivative = starting * periods * Math.pow(1 + effectiveRate, periods - 1) * (1 / compoundPeriods) * Math.pow(1 + r / compoundPeriods, compoundPeriods - 1)

          if (additional > 0) {
            const contributionFactor = contributionTiming === "beginning" ? (1 + effectiveRate) : 1
            const annuityDerivative = ((periods * Math.pow(1 + effectiveRate, periods - 1) * (1 / compoundPeriods) * Math.pow(1 + r / compoundPeriods, compoundPeriods - 1) * periods - (Math.pow(1 + effectiveRate, periods) - 1) * (1 / compoundPeriods) * Math.pow(1 + r / compoundPeriods, compoundPeriods - 1)) / (effectiveRate * effectiveRate)) * contributionFactor
            derivative += additional * annuityDerivative
          }
          return derivative
        }

        const fValue = f(rateGuess)
        const fPrimeValue = fPrime(rateGuess)
        if (Math.abs(fValue) < tolerance) break
        if (fPrimeValue === 0) break
        const newRateGuess = rateGuess - fValue / fPrimeValue
        if (newRateGuess < 0 || newRateGuess > 2) break
        rateGuess = newRateGuess
        iteration++
      }

      const finalRate = Math.min(Math.max(rateGuess * 100, 0), 200)
      const annualRate = finalRate / 100
      const effectiveRate = Math.pow(1 + annualRate / compoundPeriods, compoundPeriods) - 1
      const futureValue = calculateFutureValueWithContributions(starting, effectiveRate, periods, additional, contributionTiming)

      calculatedResult = {
        endAmount: formatNumber(futureValue),
        startingAmount: formatNumber(starting),
        additionalContribution: formatNumber(additional),
        returnRate: formatNumber(finalRate),
        investmentLength: formatNumber(length),
        compoundFrequency,
        contributionTiming,
        calculations: generateCalculationMetrics(starting, additional, length, futureValue),
        accumulationSchedule: generateAccumulationSchedule(starting, additional, finalRate, length, compoundFrequency, contributionTiming),
        recommendations: generateRecommendations(finalRate, futureValue, length),
        comparison: generateComparison(futureValue, finalRate)
      }
    } else if (calculationType === "startingAmount") {
      // Calculate Starting Amount
      const annualRate = rate / 100
      const periods = length
      const compoundPeriods = getCompoundPeriods(compoundFrequency)
      const effectiveRate = Math.pow(1 + annualRate / compoundPeriods, compoundPeriods) - 1

      let annuityValue = 0
      if (additional > 0) {
        const contributionFactor = contributionTiming === "beginning" ? (1 + effectiveRate) : 1
        if (effectiveRate === 0) {
          annuityValue = additional * periods
        } else {
          const annuityFactor = ((Math.pow(1 + effectiveRate, periods) - 1) / effectiveRate) * contributionFactor
          annuityValue = additional * annuityFactor
        }
      }

      const requiredStarting = (end - annuityValue) / Math.pow(1 + effectiveRate, periods)

      calculatedResult = {
        endAmount: formatNumber(end),
        startingAmount: formatNumber(requiredStarting),
        additionalContribution: formatNumber(additional),
        returnRate: formatNumber(rate),
        investmentLength: formatNumber(length),
        compoundFrequency,
        contributionTiming,
        calculations: generateCalculationMetrics(requiredStarting, additional, length, end),
        accumulationSchedule: generateAccumulationSchedule(requiredStarting, additional, rate, length, compoundFrequency, contributionTiming),
        recommendations: generateRecommendations(rate, end, length),
        comparison: generateComparison(end, rate)
      }
    } else if (calculationType === "additionalContribution") {
      // Calculate Additional Contribution
      const annualRate = rate / 100
      const periods = length
      const compoundPeriods = getCompoundPeriods(compoundFrequency)
      const effectiveRate = Math.pow(1 + annualRate / compoundPeriods, compoundPeriods) - 1

      const startingValue = starting * Math.pow(1 + effectiveRate, periods)
      const remainingAmount = end - startingValue

      let requiredContribution = 0
      if (remainingAmount > 0) {
        const contributionFactor = contributionTiming === "beginning" ? (1 + effectiveRate) : 1
        if (effectiveRate === 0) {
          requiredContribution = remainingAmount / periods
        } else {
          const annuityFactor = ((Math.pow(1 + effectiveRate, periods) - 1) / effectiveRate) * contributionFactor
          requiredContribution = remainingAmount / annuityFactor
        }
      }

      calculatedResult = {
        endAmount: formatNumber(end),
        startingAmount: formatNumber(starting),
        additionalContribution: formatNumber(requiredContribution),
        returnRate: formatNumber(rate),
        investmentLength: formatNumber(length),
        compoundFrequency,
        contributionTiming,
        calculations: generateCalculationMetrics(starting, requiredContribution, length, end),
        accumulationSchedule: generateAccumulationSchedule(starting, requiredContribution, rate, length, compoundFrequency, contributionTiming),
        recommendations: generateRecommendations(rate, end, length),
        comparison: generateComparison(end, rate)
      }
    } else {
      // Calculate Investment Length
      const annualRate = rate / 100
      const compoundPeriods = getCompoundPeriods(compoundFrequency)
      const effectiveRate = Math.pow(1 + annualRate / compoundPeriods, compoundPeriods) - 1

      let periods = 0
      if (effectiveRate === 0) {
        periods = (end - starting) / additional
      } else if (additional > 0) {
        const contributionFactor = contributionTiming === "beginning" ? (1 + effectiveRate) : 1
        const numerator = Math.log((end + additional * contributionFactor / effectiveRate) / (starting + additional * contributionFactor / effectiveRate))
        const denominator = Math.log(1 + effectiveRate)
        periods = numerator / denominator
      } else {
        periods = Math.log(end / starting) / Math.log(1 + effectiveRate)
      }

      periods = Math.min(Math.max(periods, 0), 100)

      calculatedResult = {
        endAmount: formatNumber(end),
        startingAmount: formatNumber(starting),
        additionalContribution: formatNumber(additional),
        returnRate: formatNumber(rate),
        investmentLength: formatNumber(periods),
        compoundFrequency,
        contributionTiming,
        calculations: generateCalculationMetrics(starting, additional, periods, end),
        accumulationSchedule: generateAccumulationSchedule(starting, additional, rate, periods, compoundFrequency, contributionTiming),
        recommendations: generateRecommendations(rate, end, periods),
        comparison: generateComparison(end, rate)
      }
    }

    setResult(calculatedResult)
    setHistory(prev => [calculatedResult, ...prev.slice(0, 4)])
  }

  const getCompoundPeriods = (frequency: string) => {
    switch (frequency) {
      case "annually": return 1
      case "semi-annually": return 2
      case "quarterly": return 4
      case "monthly": return 12
      case "daily": return 365
      default: return 1
    }
  }

  const generateAccumulationSchedule = (starting: number, additional: number, rate: number, length: number, frequency: string, timing: string) => {
    const schedule = []
    const annualRate = rate / 100
    const compoundPeriods = getCompoundPeriods(frequency)
    const effectiveRate = Math.pow(1 + annualRate / compoundPeriods, compoundPeriods) - 1

    let balance = starting

    for (let year = 1; year <= Math.min(length, 50); year++) {
      const deposit = additional
      const interest = balance * effectiveRate
      balance = balance + deposit + interest

      schedule.push({
        year,
        deposit: formatNumber(starting + (additional * year)),
        interest: formatNumber(interest),
        endingBalance: formatNumber(balance)
      })
    }

    return schedule
  }

  const generateRecommendations = (rate: number, endAmount: number, length: number) => {
    const investmentTips: string[] = []
    const riskManagement: string[] = []
    const portfolioStrategies: string[] = []

    if (rate > 10) {
      investmentTips.push("Consider high-growth investments like growth stocks")
      investmentTips.push("Evaluate risk tolerance for higher returns")
      investmentTips.push("Diversify across different asset classes")
    } else if (rate > 6) {
      investmentTips.push("Balanced approach with stocks and bonds")
      investmentTips.push("Consider dividend-paying stocks")
      investmentTips.push("Look into real estate investment trusts (REITs)")
    } else {
      investmentTips.push("Conservative approach with bonds and CDs")
      investmentTips.push("Focus on capital preservation")
      investmentTips.push("Consider inflation-protected securities")
    }

    riskManagement.push("Diversify your investment portfolio", "Regularly rebalance your portfolio", "Consider dollar-cost averaging", "Review and adjust risk tolerance", "Maintain an emergency fund")
    portfolioStrategies.push("Age-appropriate asset allocation", "Consider target-date funds", "Regular portfolio rebalancing", "Tax-efficient investing", "Long-term investment horizon")

    return { investmentTips, riskManagement, portfolioStrategies }
  }

  const generateComparison = (endAmount: number, rate: number) => {
    const scenarios = [
      { scenario: "Conservative (4%)", endAmount: formatNumber(endAmount * 0.7), difference: formatNumber(endAmount * 0.3) },
      { scenario: "Moderate (6%)", endAmount: formatNumber(endAmount), difference: 0 },
      { scenario: "Aggressive (8%)", endAmount: formatNumber(endAmount * 1.3), difference: formatNumber(endAmount * 0.3) },
      { scenario: "High Growth (10%)", endAmount: formatNumber(endAmount * 1.6), difference: formatNumber(endAmount * 0.6) }
    ]
    return { scenarios }
  }

  const copyResult = () => {
    if (result) {
      const text = `Investment Calculator Results:
End Amount: $${result.endAmount.toFixed(2)}
Starting Amount: $${result.startingAmount.toFixed(2)}
Additional Contribution: $${result.additionalContribution.toFixed(2)}
Return Rate: ${result.returnRate.toFixed(2)}%
Investment Length: ${result.investmentLength.toFixed(1)} years
Total Interest: $${result.calculations.totalInterest.toFixed(2)}`
      void navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }

  const clearAll = () => {
    setFormData({
      endAmount: "",
      startingAmount: "",
      additionalContribution: "",
      returnRate: "",
      investmentLength: ""
    })
    setResult(null)
  }

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 bg-card rounded-xl p-2 sm:p-3 md:p-4 w-full overflow-hidden">
      <GCard className="bg-card border-border w-full overflow-hidden">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
            <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
            Advanced Investment Calculator
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-4 sm:space-y-6">
          <div>
            <GLabel className="text-heading-accent text-xs sm:text-sm mb-2 block break-words">Calculate</GLabel>

            <div className="block md:hidden mb-4">
              <GSelect value={calculationType} onValueChange={setCalculationType}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="endAmount">End Amount</GSelectItem>
                  <GSelectItem value="returnRate">Return Rate</GSelectItem>
                  <GSelectItem value="startingAmount">Starting Amount</GSelectItem>
                  <GSelectItem value="additionalContribution">Additional Contribution</GSelectItem>
                  <GSelectItem value="investmentLength">Investment Length</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>

            <GTabs value={calculationType} onValueChange={setCalculationType} className="w-full hidden md:block">
              <GTabsList className="grid w-full grid-cols-5 bg-card border border-border">
                <GTabsTrigger value="endAmount" className="text-xs sm:text-sm">End Amount</GTabsTrigger>
                <GTabsTrigger value="returnRate" className="text-xs sm:text-sm">Return Rate</GTabsTrigger>
                <GTabsTrigger value="startingAmount" className="text-xs sm:text-sm">Starting Amount</GTabsTrigger>
                <GTabsTrigger value="additionalContribution" className="text-xs sm:text-sm">Additional Contribution</GTabsTrigger>
                <GTabsTrigger value="investmentLength" className="text-xs sm:text-sm">Investment Length</GTabsTrigger>
              </GTabsList>
            </GTabs>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              {calculationType !== "endAmount" && (
                <div className="space-y-1.5 w-full min-w-0">
                  <GLabel htmlFor="endAmount" className="text-heading-accent text-xs sm:text-sm">End Amount</GLabel>
                  <GInput
                    id="endAmount"
                    type="number"
                    placeholder="100000"
                    value={formData.endAmount}
                    onChange={(e) => handleInputChange("endAmount", e.target.value)}
                    className="border-border !bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
                  />
                </div>
              )}
              {calculationType !== "startingAmount" && (
                <div className="space-y-1.5 w-full min-w-0">
                  <GLabel htmlFor="startingAmount" className="text-heading-accent text-xs sm:text-sm">Starting Amount</GLabel>
                  <GInput
                    id="startingAmount"
                    type="number"
                    placeholder="20000"
                    value={formData.startingAmount}
                    onChange={(e) => handleInputChange("startingAmount", e.target.value)}
                    className="border-border !bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
                  />
                </div>
              )}
              {calculationType !== "returnRate" && (
                <div className="space-y-1.5 w-full min-w-0">
                  <GLabel htmlFor="returnRate" className="text-heading-accent text-xs sm:text-sm">Return Rate (%)</GLabel>
                  <GInput
                    id="returnRate"
                    type="number"
                    placeholder="6"
                    value={formData.returnRate}
                    onChange={(e) => handleInputChange("returnRate", e.target.value)}
                    className="border-border !bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
                  />
                </div>
              )}
              {calculationType !== "investmentLength" && (
                <div className="space-y-1.5 w-full min-w-0">
                  <GLabel htmlFor="investmentLength" className="text-heading-accent text-xs sm:text-sm">Investment Length (years)</GLabel>
                  <GInput
                    id="investmentLength"
                    type="number"
                    placeholder="10"
                    value={formData.investmentLength}
                    onChange={(e) => handleInputChange("investmentLength", e.target.value)}
                    className="border-border !bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
                  />
                </div>
              )}
              {calculationType !== "additionalContribution" && (
                <div className="space-y-1.5 w-full min-w-0">
                  <GLabel htmlFor="additionalContribution" className="text-heading-accent text-xs sm:text-sm">Additional Contribution</GLabel>
                  <GInput
                    id="additionalContribution"
                    type="number"
                    placeholder="1000"
                    value={formData.additionalContribution}
                    onChange={(e) => handleInputChange("additionalContribution", e.target.value)}
                    className="border-border !bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm h-9"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Additional Settings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="compoundFrequency" className="text-heading-accent text-xs sm:text-sm">Compound Frequency</GLabel>
              <GSelect value={compoundFrequency} onValueChange={setCompoundFrequency}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="annually">Annually</GSelectItem>
                  <GSelectItem value="semi-annually">Semi-Annually</GSelectItem>
                  <GSelectItem value="quarterly">Quarterly</GSelectItem>
                  <GSelectItem value="monthly">Monthly</GSelectItem>
                  <GSelectItem value="daily">Daily</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="contributionTiming" className="text-heading-accent text-xs sm:text-sm">Contribution Timing</GLabel>
              <GSelect value={contributionTiming} onValueChange={setContributionTiming}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="end">End of Period</GSelectItem>
                  <GSelectItem value="beginning">Beginning of Period</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <GButton
              onClick={calculateInvestment}
              className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
            >
              <Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Calculate Investment</span>
              <span className="sm:hidden">Calculate</span>
            </GButton>
            <GButton variant="outline" onClick={clearAll} className="w-full sm:w-auto text-sm sm:text-base border-border bg-card text-foreground hover:bg-muted">
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
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                Investment Calculation Results
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <GLabel className="text-heading-accent text-xs sm:text-sm">End Amount</GLabel>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-heading-accent">
                    ${result.endAmount.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-2">
                  <GLabel className="text-heading-accent text-xs sm:text-sm">Starting Amount</GLabel>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    ${result.startingAmount.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-foreground">Return Rate</div>
                  <div className="text-lg sm:text-xl font-semibold text-foreground">{result.returnRate.toFixed(2)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-foreground">Investment Length</div>
                  <div className="text-lg sm:text-xl font-semibold text-foreground">{result.investmentLength.toFixed(1)} years</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-foreground">Additional Contribution</div>
                  <div className="text-lg sm:text-xl font-semibold text-foreground">${result.additionalContribution.toFixed(2)}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-4 w-full">
                <GButton
                  onClick={copyResult}
                  className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card"
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
                </GButton>
              </div>
            </GCardContent>
          </GCard>

          {/* Summary */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                Investment Summary
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 sm:p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-heading-accent mb-2 text-xs sm:text-sm break-words">Total Contributions</h3>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">${result.calculations.totalContributions.toFixed(2)}</div>
                </div>
                <div className="p-3 sm:p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-heading-accent mb-2 text-xs sm:text-sm break-words">Total Interest</h3>
                  <div className="text-xl sm:text-2xl font-bold text-heading-accent">${result.calculations.totalInterest.toFixed(2)}</div>
                </div>
                <div className="p-3 sm:p-4 bg-card rounded-lg border border-border">
                  <h3 className="font-semibold text-heading-accent mb-2 text-xs sm:text-sm break-words">Interest Percentage</h3>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">{result.calculations.interestPercentage.toFixed(1)}%</div>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Accumulation Schedule */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                Accumulation Schedule
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-card border border-border">
                      <th className="border border-border p-2 sm:p-3 text-left text-heading-accent text-xs sm:text-sm">Year</th>
                      <th className="border border-border p-2 sm:p-3 text-right text-heading-accent text-xs sm:text-sm">Deposit</th>
                      <th className="border border-border p-2 sm:p-3 text-right text-heading-accent text-xs sm:text-sm">Interest</th>
                      <th className="border border-border p-2 sm:p-3 text-right text-heading-accent text-xs sm:text-sm">Ending Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.accumulationSchedule.map((row, index) => (
                      <tr key={index} className="border border-border">
                        <td className="border border-border p-2 sm:p-3 text-foreground text-xs sm:text-sm">{row.year}</td>
                        <td className="border border-border p-2 sm:p-3 text-right text-foreground text-xs sm:text-sm">${row.deposit.toFixed(2)}</td>
                        <td className="border border-border p-2 sm:p-3 text-right text-foreground text-xs sm:text-sm">${row.interest.toFixed(2)}</td>
                        <td className="border border-border p-2 sm:p-3 text-right text-foreground text-xs sm:text-sm">${row.endingBalance.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* Investment Scenarios */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                Investment Scenarios
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="space-y-2">
                {result.comparison.scenarios.map((scenario, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-card border border-border rounded-lg">
                    <div>
                      <span className="font-medium text-foreground text-xs sm:text-sm break-words">{scenario.scenario}</span>
                      <p className="text-xs sm:text-sm text-foreground break-words">${scenario.endAmount.toFixed(2)}</p>
                    </div>
                    <GBadge variant={scenario.difference > 0 ? "default" : "destructive"} className={scenario.difference > 0 ? "bg-green-500/20 text-heading-accent border-green-500" : "bg-red-500/20 text-foreground border-red-500"}>
                      {scenario.difference > 0 ? "+" : ""}${scenario.difference.toFixed(2)}
                    </GBadge>
                  </div>
                ))}
              </div>
            </GCardContent>
          </GCard>

          {/* Recommendations */}
          <GCard className="bg-card border-border w-full overflow-hidden">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                Personalized Recommendations
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent text-sm sm:text-base break-words">Investment Tips</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground">
                    {result.recommendations.investmentTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent text-sm sm:text-base break-words">Risk Management</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground">
                    {result.recommendations.riskManagement.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent text-sm sm:text-base break-words">Portfolio Strategies</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground">
                    {result.recommendations.portfolioStrategies.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
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
          <GCardHeader>
            <GCardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
              <History className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
              Recent Calculations
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 p-3 bg-card border border-border rounded-lg">
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="font-medium text-foreground text-xs sm:text-sm break-words">
                      ${item.startingAmount.toFixed(0)} → ${item.endAmount.toFixed(0)}
                    </div>
                    <div className="text-xs sm:text-sm text-foreground break-words">
                      {item.returnRate.toFixed(1)}% over {item.investmentLength.toFixed(0)} years
                    </div>
                  </div>
                  <GButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
                    className="text-xs sm:text-sm flex-shrink-0"
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
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
            <Info className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
            Investment Calculator Features
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-3">
          <div className="p-3 sm:p-4 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
              <div className="text-xs sm:text-sm min-w-0">
                <p className="font-medium text-heading-accent mb-1 break-words">
                  Professional Investment Analysis
                </p>
                <p className="text-foreground break-words">
                  This calculator provides comprehensive investment analysis with multiple calculation modes, compound interest calculations, and personalized investment recommendations for optimal financial planning.
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-foreground space-y-2">
            <p className="break-words">
              <strong className="text-heading-accent">Multiple Calculation Modes:</strong> Calculate end amount, return rate, starting amount, additional contributions, or investment length.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Compound Interest:</strong> Support for various compounding frequencies (annually, quarterly, monthly, daily).
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Investment Analysis:</strong> Complete accumulation schedules and scenario comparisons.
            </p>
            <p className="break-words">
              <strong className="text-heading-accent">Professional Recommendations:</strong> Personalized investment tips and portfolio strategies.
            </p>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
