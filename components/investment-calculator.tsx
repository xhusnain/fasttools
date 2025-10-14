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

export default function InvestmentCalculator() {
  const [calculationType, setCalculationType] = useState("endAmount")
  const [endAmount, setEndAmount] = useState("")
  const [startingAmount, setStartingAmount] = useState("")
  const [additionalContribution, setAdditionalContribution] = useState("")
  const [returnRate, setReturnRate] = useState("")
  const [investmentLength, setInvestmentLength] = useState("")
  const [compoundFrequency, setCompoundFrequency] = useState("annually")
  const [contributionTiming, setContributionTiming] = useState("end")
  const [result, setResult] = useState<InvestmentResult | null>(null)
  const [history, setHistory] = useState<InvestmentResult[]>([])

  const formatNumber = (num: number): number => {
    // Round to 2 decimal places and avoid scientific notation
    return Math.round(num * 100) / 100
  }

  const calculateInvestment = () => {
    const end = parseFloat(endAmount) || 0
    const starting = parseFloat(startingAmount) || 0
    const additional = parseFloat(additionalContribution) || 0
    const rate = parseFloat(returnRate) || 0
    const length = parseFloat(investmentLength) || 0

    // Input validation
    if (rate < 0 || rate > 50) {
      alert("Return rate must be between 0% and 50%")
      return
    }
    if (length < 0 || length > 100) {
      alert("Investment length must be between 0 and 100 years")
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

      calculatedResult = {
        endAmount: formatNumber(futureValue),
        startingAmount: formatNumber(starting),
        additionalContribution: formatNumber(additional),
        returnRate: formatNumber(rate),
        investmentLength: formatNumber(length),
        compoundFrequency,
        contributionTiming,
        calculations: {
          totalContributions: formatNumber(starting + (additional * length)),
          totalInterest: formatNumber(futureValue - starting - (additional * length)),
          interestPercentage: formatNumber(((futureValue - starting - (additional * length)) / futureValue) * 100),
          contributionPercentage: formatNumber(((starting + (additional * length)) / futureValue) * 100),
          startingPercentage: formatNumber((starting / futureValue) * 100)
        },
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
          let futureValue = starting * Math.pow(1 + effectiveRate, periods)
          
          if (additional > 0) {
            const contributionFactor = contributionTiming === "beginning" ? (1 + effectiveRate) : 1
            const annuityFactor = ((Math.pow(1 + effectiveRate, periods) - 1) / effectiveRate) * contributionFactor
            futureValue += additional * annuityFactor
          }
          
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
        
        // Bounds checking to prevent extreme values
        if (newRateGuess < 0 || newRateGuess > 2) {
          break
        }
        
        rateGuess = newRateGuess
        iteration++
      }

      const finalRate = Math.min(Math.max(rateGuess * 100, 0), 200) // Cap between 0% and 200%
      const annualRate = finalRate / 100
      const effectiveRate = Math.pow(1 + annualRate / compoundPeriods, compoundPeriods) - 1
      
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

      calculatedResult = {
        endAmount: formatNumber(futureValue),
        startingAmount: formatNumber(starting),
        additionalContribution: formatNumber(additional),
        returnRate: formatNumber(finalRate),
        investmentLength: formatNumber(length),
        compoundFrequency,
        contributionTiming,
        calculations: {
          totalContributions: formatNumber(starting + (additional * length)),
          totalInterest: formatNumber(futureValue - starting - (additional * length)),
          interestPercentage: formatNumber(((futureValue - starting - (additional * length)) / futureValue) * 100),
          contributionPercentage: formatNumber(((starting + (additional * length)) / futureValue) * 100),
          startingPercentage: formatNumber((starting / futureValue) * 100)
        },
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
        calculations: {
          totalContributions: formatNumber(requiredStarting + (additional * length)),
          totalInterest: formatNumber(end - requiredStarting - (additional * length)),
          interestPercentage: formatNumber(((end - requiredStarting - (additional * length)) / end) * 100),
          contributionPercentage: formatNumber(((requiredStarting + (additional * length)) / end) * 100),
          startingPercentage: formatNumber((requiredStarting / end) * 100)
        },
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
        calculations: {
          totalContributions: formatNumber(starting + (requiredContribution * length)),
          totalInterest: formatNumber(end - starting - (requiredContribution * length)),
          interestPercentage: formatNumber(((end - starting - (requiredContribution * length)) / end) * 100),
          contributionPercentage: formatNumber(((starting + (requiredContribution * length)) / end) * 100),
          startingPercentage: formatNumber((starting / end) * 100)
        },
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
        // If no interest, just divide by contributions
        periods = (end - starting) / additional
      } else if (additional > 0) {
        const contributionFactor = contributionTiming === "beginning" ? (1 + effectiveRate) : 1
        const numerator = Math.log((end + additional * contributionFactor / effectiveRate) / (starting + additional * contributionFactor / effectiveRate))
        const denominator = Math.log(1 + effectiveRate)
        periods = numerator / denominator
      } else {
        periods = Math.log(end / starting) / Math.log(1 + effectiveRate)
      }

      // Cap periods to reasonable range
      periods = Math.min(Math.max(periods, 0), 100)

      calculatedResult = {
        endAmount: formatNumber(end),
        startingAmount: formatNumber(starting),
        additionalContribution: formatNumber(additional),
        returnRate: formatNumber(rate),
        investmentLength: formatNumber(periods),
        compoundFrequency,
        contributionTiming,
        calculations: {
          totalContributions: formatNumber(starting + (additional * periods)),
          totalInterest: formatNumber(end - starting - (additional * periods)),
          interestPercentage: formatNumber(((end - starting - (additional * periods)) / end) * 100),
          contributionPercentage: formatNumber(((starting + (additional * periods)) / end) * 100),
          startingPercentage: formatNumber((starting / end) * 100)
        },
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
    
    for (let year = 1; year <= Math.min(length, 50); year++) { // Cap at 50 years
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

    // Investment recommendations based on return rate
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

    // Risk management recommendations
    riskManagement.push("Diversify your investment portfolio")
    riskManagement.push("Regularly rebalance your portfolio")
    riskManagement.push("Consider dollar-cost averaging")
    riskManagement.push("Review and adjust risk tolerance over time")
    riskManagement.push("Maintain an emergency fund")

    // Portfolio strategies
    portfolioStrategies.push("Age-appropriate asset allocation")
    portfolioStrategies.push("Consider target-date funds")
    portfolioStrategies.push("Regular portfolio rebalancing")
    portfolioStrategies.push("Tax-efficient investing strategies")
    portfolioStrategies.push("Long-term investment horizon")

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
      navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setEndAmount("")
    setStartingAmount("")
    setAdditionalContribution("")
    setReturnRate("")
    setInvestmentLength("")
    setResult(null)
  }

  return (
    <div className="space-y-6">
      {/* Main Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Advanced Investment Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Calculation Type Selection */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Calculate</Label>
            <Tabs value={calculationType} onValueChange={setCalculationType} className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="endAmount">End Amount</TabsTrigger>
                <TabsTrigger value="returnRate">Return Rate</TabsTrigger>
                <TabsTrigger value="startingAmount">Starting Amount</TabsTrigger>
                <TabsTrigger value="additionalContribution">Additional Contribution</TabsTrigger>
                <TabsTrigger value="investmentLength">Investment Length</TabsTrigger>
              </TabsList>
              
              <TabsContent value="endAmount" className="space-y-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startingAmount">Starting Amount</Label>
                    <Input
                      id="startingAmount"
                      type="number"
                      placeholder="20000"
                      value={startingAmount}
                      onChange={(e) => setStartingAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="returnRate">Return Rate (%)</Label>
                    <Input
                      id="returnRate"
                      type="number"
                      placeholder="6"
                      value={returnRate}
                      onChange={(e) => setReturnRate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="investmentLength">Investment Length (years)</Label>
                    <Input
                      id="investmentLength"
                      type="number"
                      placeholder="10"
                      value={investmentLength}
                      onChange={(e) => setInvestmentLength(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="additionalContribution">Additional Contribution</Label>
                    <Input
                      id="additionalContribution"
                      type="number"
                      placeholder="1000"
                      value={additionalContribution}
                      onChange={(e) => setAdditionalContribution(e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="returnRate" className="space-y-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="endAmount">End Amount</Label>
                    <Input
                      id="endAmount"
                      type="number"
                      placeholder="100000"
                      value={endAmount}
                      onChange={(e) => setEndAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="startingAmount">Starting Amount</Label>
                    <Input
                      id="startingAmount"
                      type="number"
                      placeholder="20000"
                      value={startingAmount}
                      onChange={(e) => setStartingAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="investmentLength">Investment Length (years)</Label>
                    <Input
                      id="investmentLength"
                      type="number"
                      placeholder="10"
                      value={investmentLength}
                      onChange={(e) => setInvestmentLength(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="additionalContribution">Additional Contribution</Label>
                    <Input
                      id="additionalContribution"
                      type="number"
                      placeholder="1000"
                      value={additionalContribution}
                      onChange={(e) => setAdditionalContribution(e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="startingAmount" className="space-y-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="endAmount">End Amount</Label>
                    <Input
                      id="endAmount"
                      type="number"
                      placeholder="100000"
                      value={endAmount}
                      onChange={(e) => setEndAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="returnRate">Return Rate (%)</Label>
                    <Input
                      id="returnRate"
                      type="number"
                      placeholder="6"
                      value={returnRate}
                      onChange={(e) => setReturnRate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="investmentLength">Investment Length (years)</Label>
                    <Input
                      id="investmentLength"
                      type="number"
                      placeholder="10"
                      value={investmentLength}
                      onChange={(e) => setInvestmentLength(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="additionalContribution">Additional Contribution</Label>
                    <Input
                      id="additionalContribution"
                      type="number"
                      placeholder="1000"
                      value={additionalContribution}
                      onChange={(e) => setAdditionalContribution(e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="additionalContribution" className="space-y-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="endAmount">End Amount</Label>
                    <Input
                      id="endAmount"
                      type="number"
                      placeholder="100000"
                      value={endAmount}
                      onChange={(e) => setEndAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="startingAmount">Starting Amount</Label>
                    <Input
                      id="startingAmount"
                      type="number"
                      placeholder="20000"
                      value={startingAmount}
                      onChange={(e) => setStartingAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="returnRate">Return Rate (%)</Label>
                    <Input
                      id="returnRate"
                      type="number"
                      placeholder="6"
                      value={returnRate}
                      onChange={(e) => setReturnRate(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="investmentLength">Investment Length (years)</Label>
                    <Input
                      id="investmentLength"
                      type="number"
                      placeholder="10"
                      value={investmentLength}
                      onChange={(e) => setInvestmentLength(e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="investmentLength" className="space-y-4 mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="endAmount">End Amount</Label>
                    <Input
                      id="endAmount"
                      type="number"
                      placeholder="100000"
                      value={endAmount}
                      onChange={(e) => setEndAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="startingAmount">Starting Amount</Label>
                    <Input
                      id="startingAmount"
                      type="number"
                      placeholder="20000"
                      value={startingAmount}
                      onChange={(e) => setStartingAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="returnRate">Return Rate (%)</Label>
                    <Input
                      id="returnRate"
                      type="number"
                      placeholder="6"
                      value={returnRate}
                      onChange={(e) => setReturnRate(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="additionalContribution">Additional Contribution</Label>
                    <Input
                      id="additionalContribution"
                      type="number"
                      placeholder="1000"
                      value={additionalContribution}
                      onChange={(e) => setAdditionalContribution(e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Additional Settings */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="compoundFrequency">Compound Frequency</Label>
              <Select value={compoundFrequency} onValueChange={setCompoundFrequency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="annually">Annually</SelectItem>
                  <SelectItem value="semi-annually">Semi-Annually</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="contributionTiming">Contribution Timing</Label>
              <Select value={contributionTiming} onValueChange={setContributionTiming}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="end">End of Period</SelectItem>
                  <SelectItem value="beginning">Beginning of Period</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={calculateInvestment} className="flex-1">
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
                Investment Calculation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">End Amount</Label>
                  <div className="text-3xl font-bold text-green-600">
                    ${result.endAmount.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Starting Amount</Label>
                  <div className="text-3xl font-bold text-blue-600">
                    ${result.startingAmount.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Return Rate</div>
                  <div className="text-lg font-semibold text-orange-600">{result.returnRate.toFixed(2)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Investment Length</div>
                  <div className="text-lg font-semibold text-purple-600">{result.investmentLength.toFixed(1)} years</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Additional Contribution</div>
                  <div className="text-lg font-semibold text-red-600">${result.additionalContribution.toFixed(2)}</div>
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
                Investment Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Total Contributions</h3>
                  <div className="text-2xl font-bold text-blue-600">${result.calculations.totalContributions.toFixed(2)}</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Total Interest</h3>
                  <div className="text-2xl font-bold text-green-600">${result.calculations.totalInterest.toFixed(2)}</div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Interest Percentage</h3>
                  <div className="text-2xl font-bold text-purple-600">{result.calculations.interestPercentage.toFixed(1)}%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accumulation Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                Accumulation Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">Year</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Deposit</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Interest</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-right">Ending Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.accumulationSchedule.map((row, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">{row.year}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.deposit.toFixed(2)}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.interest.toFixed(2)}</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 text-right">${row.endingBalance.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Investment Scenarios */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Investment Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.comparison.scenarios.map((scenario, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="font-medium">{scenario.scenario}</span>
                      <p className="text-sm text-muted-foreground">${scenario.endAmount.toFixed(2)}</p>
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
                  <h4 className="font-semibold mb-3 text-green-600">Risk Management</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.riskManagement.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-600">Portfolio Strategies</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.portfolioStrategies.map((rec, index) => (
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
                      ${item.startingAmount.toFixed(0)} → ${item.endAmount.toFixed(0)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.returnRate.toFixed(1)}% over {item.investmentLength.toFixed(0)} years
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
            Investment Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Professional Investment Analysis
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  This calculator provides comprehensive investment analysis with multiple calculation modes, compound interest calculations, and personalized investment recommendations for optimal financial planning.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Multiple Calculation Modes:</strong> Calculate end amount, return rate, starting amount, additional contributions, or investment length.
            </p>
            <p>
              <strong>Compound Interest:</strong> Support for various compounding frequencies (annually, quarterly, monthly, daily).
            </p>
            <p>
              <strong>Investment Analysis:</strong> Complete accumulation schedules and scenario comparisons.
            </p>
            <p>
              <strong>Professional Recommendations:</strong> Personalized investment tips and portfolio strategies.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
