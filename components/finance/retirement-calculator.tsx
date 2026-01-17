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
  ForkKnife,
  PiggyBank,
  Building,
  Heart,
  TreePine,
  Plane,
  BookOpen,
  GraduationCap,
  Baby,
  Home as HomeIcon,
  Car as CarIcon,
  ShoppingBag as ShoppingBagIcon,
  CreditCard as CreditCardIcon,
  Banknote as BanknoteIcon,
  Coins as CoinsIcon,
  Wallet as WalletIcon,
  Briefcase as BriefcaseIcon,
  Store as StoreIcon,
  Truck as TruckIcon,
  Package as PackageIcon,
  Tag as TagIcon,
  ShoppingCart as ShoppingCartIcon,
  HandHeart as HandHeartIcon,
  Gift as GiftIcon,
  Award as AwardIcon,
  Trophy as TrophyIcon
} from "lucide-react"

interface RetirementResult {
  calculationType: string
  currentAge: number
  retirementAge: number
  lifeExpectancy: number
  currentIncome: number
  incomeIncrease: number
  retirementIncomeNeeded: number
  investmentReturn: number
  inflationRate: number
  otherIncome: number
  currentSavings: number
  futureSavings: number
  targetAmount: number
  monthlyContribution: number
  annualContribution: number
  monthlyWithdrawal: number
  yearsInRetirement: number
  calculations: {
    totalContributions: number
    totalGrowth: number
    finalBalance: number
    monthlyIncome: number
    annualIncome: number
    incomeReplacement: number
    yearsToRetirement: number
    yearsInRetirement: number
    inflationAdjustedAmount: number
    realReturn: number
  }
  recommendations: {
    savingsStrategies: string[]
    investmentTips: string[]
    retirementPlanning: string[]
  }
  scenarios: Array<{
    scenario: string
    amount: number
    difference: number
  }>
}

export default function RetirementCalculator() {
  const [calculationType, setCalculationType] = useState("howMuchToSave")
  const [formData, setFormData] = useState({
    currentAge: "",
    retirementAge: "",
    lifeExpectancy: "",
    currentIncome: "",
    incomeIncrease: "",
    retirementIncomeNeeded: "",
    investmentReturn: "",
    inflationRate: "",
    otherIncome: "",
    currentSavings: "",
    futureSavings: "",
    targetAmount: "",
    monthlyContribution: "",
    monthlyWithdrawal: ""
  })
  const [result, setResult] = useState<RetirementResult | null>(null)
  const [history, setHistory] = useState<RetirementResult[]>([])

  const calculateRetirement = () => {
    const age = parseFloat(formData.currentAge) || 0
    const retireAge = parseFloat(formData.retirementAge) || 0
    const lifeExp = parseFloat(formData.lifeExpectancy) || 0
    const income = parseFloat(formData.currentIncome) || 0
    const incomeInc = parseFloat(formData.incomeIncrease) || 0
    const retirementIncome = parseFloat(formData.retirementIncomeNeeded) || 0
    const invReturn = parseFloat(formData.investmentReturn) || 0
    const inflation = parseFloat(formData.inflationRate) || 0
    const otherInc = parseFloat(formData.otherIncome) || 0
    const savings = parseFloat(formData.currentSavings) || 0
    const futureSav = parseFloat(formData.futureSavings) || 0
    const target = parseFloat(formData.targetAmount) || 0
    const monthlyContrib = parseFloat(formData.monthlyContribution) || 0
    const monthlyWithdraw = parseFloat(formData.monthlyWithdrawal) || 0

    // GInput validation
    if (age <= 0) {
      alert("Current age must be greater than 0")
      return
    }
    if (retireAge <= age) {
      alert("Retirement age must be greater than current age")
      return
    }
    if (lifeExp <= retireAge) {
      alert("Life expectancy must be greater than retirement age")
      return
    }
    if (income < 0) {
      alert("Current income must be 0 or higher")
      return
    }
    if (invReturn < 0) {
      alert("Investment return must be 0% or higher")
      return
    }
    if (inflation < 0) {
      alert("Inflation rate must be 0% or higher")
      return
    }
    if (savings < 0) {
      alert("Current savings must be 0 or higher")
      return
    }
    if (futureSav < 0) {
      alert("Future savings percentage must be 0% or higher")
      return
    }

    const yearsToRetirement = retireAge - age
    const yearsInRetirement = lifeExp - retireAge
    const realReturn = invReturn - inflation
    const monthlyRate = invReturn / 100 / 12
    const annualRate = invReturn / 100

    let calculatedResult: RetirementResult

    if (calculationType === "howMuchToSave") {
      // Calculate how much to save for retirement
      const futureIncome = income * Math.pow(1 + incomeInc / 100, yearsToRetirement)
      const neededIncome = (futureIncome * retirementIncome / 100) - (otherInc * 12)
      const targetAmount = neededIncome / (annualRate) * (1 - Math.pow(1 + annualRate, -yearsInRetirement))

      const monthlyContribNeeded = (targetAmount - savings * Math.pow(1 + annualRate, yearsToRetirement)) /
        ((Math.pow(1 + annualRate, yearsToRetirement) - 1) / annualRate)

      calculatedResult = {
        calculationType: "howMuchToSave",
        currentAge: age,
        retirementAge: retireAge,
        lifeExpectancy: lifeExp,
        currentIncome: income,
        incomeIncrease: incomeInc,
        retirementIncomeNeeded: retirementIncome,
        investmentReturn: invReturn,
        inflationRate: inflation,
        otherIncome: otherInc,
        currentSavings: savings,
        futureSavings: futureSav,
        targetAmount: targetAmount,
        monthlyContribution: monthlyContribNeeded,
        annualContribution: monthlyContribNeeded * 12,
        monthlyWithdrawal: neededIncome / 12,
        yearsInRetirement: yearsInRetirement,
        calculations: {
          totalContributions: monthlyContribNeeded * 12 * yearsToRetirement,
          totalGrowth: targetAmount - (monthlyContribNeeded * 12 * yearsToRetirement) - savings,
          finalBalance: targetAmount,
          monthlyIncome: neededIncome / 12,
          annualIncome: neededIncome,
          incomeReplacement: (neededIncome / (futureIncome)) * 100,
          yearsToRetirement: yearsToRetirement,
          yearsInRetirement: yearsInRetirement,
          inflationAdjustedAmount: targetAmount * Math.pow(1 + inflation / 100, yearsToRetirement),
          realReturn: realReturn
        },
        recommendations: generateRecommendations(invReturn, targetAmount, yearsToRetirement),
        scenarios: generateScenarios(targetAmount, invReturn)
      }
    } else if (calculationType === "howMuchCanWithdraw") {
      // Calculate how much can be withdrawn
      const futureValue = savings * Math.pow(1 + annualRate, yearsToRetirement) +
        (monthlyContrib * 12 * ((Math.pow(1 + annualRate, yearsToRetirement) - 1) / annualRate))

      const monthlyWithdrawAmount = futureValue * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -yearsInRetirement * 12)))

      calculatedResult = {
        calculationType: "howMuchCanWithdraw",
        currentAge: age,
        retirementAge: retireAge,
        lifeExpectancy: lifeExp,
        currentIncome: income,
        incomeIncrease: incomeInc,
        retirementIncomeNeeded: retirementIncome,
        investmentReturn: invReturn,
        inflationRate: inflation,
        otherIncome: otherInc,
        currentSavings: savings,
        futureSavings: futureSav,
        targetAmount: futureValue,
        monthlyContribution: monthlyContrib,
        annualContribution: monthlyContrib * 12,
        monthlyWithdrawal: monthlyWithdrawAmount,
        yearsInRetirement: yearsInRetirement,
        calculations: {
          totalContributions: savings + (monthlyContrib * 12 * yearsToRetirement),
          totalGrowth: futureValue - savings - (monthlyContrib * 12 * yearsToRetirement),
          finalBalance: futureValue,
          monthlyIncome: monthlyWithdrawAmount,
          annualIncome: monthlyWithdrawAmount * 12,
          incomeReplacement: (monthlyWithdrawAmount * 12 / income) * 100,
          yearsToRetirement: yearsToRetirement,
          yearsInRetirement: yearsInRetirement,
          inflationAdjustedAmount: futureValue * Math.pow(1 + inflation / 100, yearsToRetirement),
          realReturn: realReturn
        },
        recommendations: generateRecommendations(invReturn, futureValue, yearsToRetirement),
        scenarios: generateScenarios(futureValue, invReturn)
      }
    } else {
      // Calculate how long money will last
      const yearsToLast = Math.log(1 + (monthlyWithdraw * 12) / (savings * annualRate)) / Math.log(1 + annualRate)
      const finalAge = age + yearsToLast

      calculatedResult = {
        calculationType: "howLongWillLast",
        currentAge: age,
        retirementAge: retireAge,
        lifeExpectancy: lifeExp,
        currentIncome: income,
        incomeIncrease: incomeInc,
        retirementIncomeNeeded: retirementIncome,
        investmentReturn: invReturn,
        inflationRate: inflation,
        otherIncome: otherInc,
        currentSavings: savings,
        futureSavings: futureSav,
        targetAmount: savings,
        monthlyContribution: 0,
        annualContribution: 0,
        monthlyWithdrawal: monthlyWithdraw,
        yearsInRetirement: yearsToLast,
        calculations: {
          totalContributions: savings,
          totalGrowth: 0,
          finalBalance: 0,
          monthlyIncome: monthlyWithdraw,
          annualIncome: monthlyWithdraw * 12,
          incomeReplacement: (monthlyWithdraw * 12 / income) * 100,
          yearsToRetirement: 0,
          yearsInRetirement: yearsToLast,
          inflationAdjustedAmount: savings * Math.pow(1 + inflation / 100, yearsToLast),
          realReturn: realReturn
        },
        recommendations: generateRecommendations(invReturn, savings, yearsToLast),
        scenarios: generateScenarios(savings, invReturn)
      }
    }

    setResult(calculatedResult)
    setHistory(prev => [calculatedResult, ...prev.slice(0, 4)])
  }

  const generateRecommendations = (returnRate: number, amount: number, years: number) => {
    const savingsStrategies: string[] = []
    const investmentTips: string[] = []
    const retirementPlanning: string[] = []

    // Savings strategies based on return rate
    if (returnRate < 4) {
      savingsStrategies.push("Consider increasing your savings rate to compensate for lower returns")
      savingsStrategies.push("Focus on maximizing employer 401(k) matching contributions")
      savingsStrategies.push("Consider additional retirement accounts like IRAs")
    } else if (returnRate < 7) {
      savingsStrategies.push("Your current savings rate appears reasonable for moderate returns")
      savingsStrategies.push("Consider increasing contributions if possible")
      savingsStrategies.push("Diversify your investment portfolio for better returns")
    } else {
      savingsStrategies.push("Your projected returns are optimistic - ensure realistic expectations")
      savingsStrategies.push("Consider more conservative return assumptions for planning")
      savingsStrategies.push("Focus on consistent, long-term investing")
    }

    // Investment tips
    if (returnRate < 5) {
      investmentTips.push("Consider increasing stock allocation for higher long-term returns")
      investmentTips.push("Review your investment fees and expenses")
      investmentTips.push("Consider low-cost index funds for better returns")
    } else if (returnRate < 8) {
      investmentTips.push("Your return assumptions are reasonable for a balanced portfolio")
      investmentTips.push("Consider rebalancing your portfolio annually")
      investmentTips.push("Focus on tax-advantaged accounts for better after-tax returns")
    } else {
      investmentTips.push("Your return assumptions are optimistic - consider more conservative estimates")
      investmentTips.push("Focus on diversification to reduce risk")
      investmentTips.push("Consider professional financial advice for complex strategies")
    }

    // Retirement planning
    retirementPlanning.push("Start saving early - time is your greatest asset")
    retirementPlanning.push("Maximize employer matching contributions")
    retirementPlanning.push("Consider healthcare costs in retirement planning")
    retirementPlanning.push("Plan for inflation's impact on purchasing power")
    retirementPlanning.push("Consider working part-time in retirement for additional income")

    return { savingsStrategies, investmentTips, retirementPlanning }
  }

  const generateScenarios = (amount: number, returnRate: number) => {
    return [
      { scenario: "Conservative (4%)", amount: amount * 0.7, difference: amount * 0.3 },
      { scenario: "Moderate (6%)", amount: amount, difference: 0 },
      { scenario: "Aggressive (8%)", amount: amount * 1.3, difference: amount * 0.3 },
      { scenario: "Optimistic (10%)", amount: amount * 1.6, difference: amount * 0.6 }
    ]
  }

  const copyResult = () => {
    if (result) {
      const text = `Retirement Calculator Results:
Current Age: ${result.currentAge}
Retirement Age: ${result.retirementAge}
Target Amount: $${result.targetAmount.toFixed(2)}
Monthly Contribution: $${result.monthlyContribution.toFixed(2)}
Monthly Withdrawal: $${result.monthlyWithdrawal.toFixed(2)}
Investment Return: ${result.investmentReturn.toFixed(2)}%`
      void navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setFormData({
      currentAge: "",
      retirementAge: "",
      lifeExpectancy: "",
      currentIncome: "",
      incomeIncrease: "",
      retirementIncomeNeeded: "",
      investmentReturn: "",
      inflationRate: "",
      otherIncome: "",
      currentSavings: "",
      futureSavings: "",
      targetAmount: "",
      monthlyContribution: "",
      monthlyWithdrawal: ""
    })
    setResult(null)
  }

  return (
    <div className="space-y-6">
      {/* Main Calculator */}
      <GCard>
        <GCardHeader className="pb-8">
          <GCardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-foreground" />
            Advanced Retirement Calculator
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Calculation Type Selection */}
          <div>
            <GLabel className="text-lg font-semibold mb-4 block">Calculation Type</GLabel>
            <GTabs value={calculationType} onValueChange={setCalculationType}>
              <GTabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0">
                <GTabsTrigger value="howMuchToSave" className="text-xs sm:text-sm">How Much to Save</GTabsTrigger>
                <GTabsTrigger value="howMuchCanWithdraw" className="text-xs sm:text-sm">How Much Can Withdraw</GTabsTrigger>
                <GTabsTrigger value="howLongWillLast" className="text-xs sm:text-sm">How Long Will Last</GTabsTrigger>
              </GTabsList>
            </GTabs>
          </div>

          {/* GInput Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="currentAge">Current Age</GLabel>
              <GInput
                id="currentAge"
                type="number"
                placeholder="35"
                value={formData.currentAge}
                onChange={(e) => setFormData(prev => ({ ...prev, currentAge: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="retirementAge">Retirement Age</GLabel>
              <GInput
                id="retirementAge"
                type="number"
                placeholder="67"
                value={formData.retirementAge}
                onChange={(e) => setFormData(prev => ({ ...prev, retirementAge: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="lifeExpectancy">Life Expectancy</GLabel>
              <GInput
                id="lifeExpectancy"
                type="number"
                placeholder="85"
                value={formData.lifeExpectancy}
                onChange={(e) => setFormData(prev => ({ ...prev, lifeExpectancy: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="currentIncome">Current Income</GLabel>
              <GInput
                id="currentIncome"
                type="number"
                placeholder="70000"
                value={formData.currentIncome}
                onChange={(e) => setFormData(prev => ({ ...prev, currentIncome: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="incomeIncrease">Income Increase (%/year)</GLabel>
              <GInput
                id="incomeIncrease"
                type="number"
                placeholder="3"
                value={formData.incomeIncrease}
                onChange={(e) => setFormData(prev => ({ ...prev, incomeIncrease: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="retirementIncomeNeeded">Income Needed After Retirement (%)</GLabel>
              <GInput
                id="retirementIncomeNeeded"
                type="number"
                placeholder="75"
                value={formData.retirementIncomeNeeded}
                onChange={(e) => setFormData(prev => ({ ...prev, retirementIncomeNeeded: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="investmentReturn">Investment Return (%/year)</GLabel>
              <GInput
                id="investmentReturn"
                type="number"
                placeholder="6"
                value={formData.investmentReturn}
                onChange={(e) => setFormData(prev => ({ ...prev, investmentReturn: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="inflationRate">Inflation Rate (%/year)</GLabel>
              <GInput
                id="inflationRate"
                type="number"
                placeholder="3"
                value={formData.inflationRate}
                onChange={(e) => setFormData(prev => ({ ...prev, inflationRate: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="otherIncome">Other Income After Retirement</GLabel>
              <GInput
                id="otherIncome"
                type="number"
                placeholder="0"
                value={formData.otherIncome}
                onChange={(e) => setFormData(prev => ({ ...prev, otherIncome: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="currentSavings">Current Retirement Savings</GLabel>
              <GInput
                id="currentSavings"
                type="number"
                placeholder="30000"
                value={formData.currentSavings}
                onChange={(e) => setFormData(prev => ({ ...prev, currentSavings: e.target.value }))}
              />
            </div>
          </div>

          {calculationType === "howMuchToSave" && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="futureSavings">Future Savings (% of income)</GLabel>
                <GInput
                  id="futureSavings"
                  type="number"
                  placeholder="10"
                  value={formData.futureSavings}
                  onChange={(e) => setFormData(prev => ({ ...prev, futureSavings: e.target.value }))}
                />
              </div>
            </div>
          )}

          {calculationType === "howMuchCanWithdraw" && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="monthlyContribution">Monthly Contribution</GLabel>
                <GInput
                  id="monthlyContribution"
                  type="number"
                  placeholder="500"
                  value={formData.monthlyContribution}
                  onChange={(e) => setFormData(prev => ({ ...prev, monthlyContribution: e.target.value }))}
                />
              </div>
            </div>
          )}

          {calculationType === "howLongWillLast" && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="monthlyWithdrawal">Monthly Withdrawal</GLabel>
                <GInput
                  id="monthlyWithdrawal"
                  type="number"
                  placeholder="5000"
                  value={formData.monthlyWithdrawal}
                  onChange={(e) => setFormData(prev => ({ ...prev, monthlyWithdrawal: e.target.value }))}
                />
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <GButton onClick={calculateRetirement} className="flex-1">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate
            </GButton>
            <GButton variant="outline" onClick={clearAll}>
              Clear All
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Main Results */}
          <GCard>
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-heading-accent" />
                Retirement Analysis Results
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <GLabel className="text-sm font-medium">Target Amount</GLabel>
                  <div className="text-3xl font-bold text-heading-accent">
                    ${result.targetAmount.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-2">
                  <GLabel className="text-sm font-medium">Monthly Contribution</GLabel>
                  <div className="text-3xl font-bold text-foreground">
                    ${result.monthlyContribution.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Monthly Withdrawal</div>
                  <div className="text-lg font-semibold text-foreground">${result.monthlyWithdrawal.toFixed(2)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Years to Retirement</div>
                  <div className="text-lg font-semibold text-foreground">{result.calculations.yearsToRetirement}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Years in Retirement</div>
                  <div className="text-lg font-semibold text-foreground">{result.calculations.yearsInRetirement}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <GButton onClick={copyResult} variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Results
                </GButton>
              </div>
            </GCardContent>
          </GCard>

          {/* Detailed Calculations */}
          <GCard>
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-foreground" />
                Detailed Calculations
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-heading-accent mb-2">Total Contributions</h3>
                  <div className="text-2xl font-bold text-heading-accent">${result.calculations.totalContributions.toFixed(2)}</div>
                </div>
                <div className="p-4 bg-muted rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-foreground mb-2">Total Growth</h3>
                  <div className="text-2xl font-bold text-foreground">${result.calculations.totalGrowth.toFixed(2)}</div>
                </div>
                <div className="p-4 bg-muted rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-foreground mb-2">Final Balance</h3>
                  <div className="text-2xl font-bold text-foreground">${result.calculations.finalBalance.toFixed(2)}</div>
                </div>
                <div className="p-4 bg-muted rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Income Replacement</h3>
                  <div className="text-2xl font-bold text-foreground">{result.calculations.incomeReplacement.toFixed(1)}%</div>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Scenarios */}
          <GCard>
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-heading-accent" />
                Return Scenarios
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {result.scenarios.map((scenario, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-950/20 rounded-lg border border-gray-200 dark:border-gray-800">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{scenario.scenario}</h3>
                    <div className="text-2xl font-bold text-gray-600">${scenario.amount.toFixed(2)}</div>
                    {scenario.difference !== 0 && (
                      <div className="text-sm text-gray-500">
                        {scenario.difference > 0 ? '+' : ''}${scenario.difference.toFixed(2)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </GCardContent>
          </GCard>

          {/* Recommendations */}
          <GCard>
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-heading-accent" />
                Personalized Recommendations
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Savings Strategies</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.savingsStrategies.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent">Investment Tips</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.investmentTips.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Retirement Planning</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.retirementPlanning.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
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
        <GCard>
          <GCardHeader>
            <GCardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-gray-500" />
              Recent Calculations
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">
                      Age {item.currentAge} to {item.retirementAge} - ${item.targetAmount.toFixed(0)} target
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${item.monthlyContribution.toFixed(2)}/month contribution
                    </div>
                  </div>
                  <GButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
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
      <GCard>
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-foreground" />
            Retirement Calculator Features
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-3">
          <div className="p-4 bg-muted rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">
                  Comprehensive Retirement Planning
                </p>
                <p className="text-foreground">
                  This calculator provides detailed retirement analysis with multiple calculation modes, inflation adjustments, and personalized recommendations for optimal retirement planning.
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Multiple Calculation Modes:</strong> Calculate how much to save, how much you can withdraw, or how long your money will last.
            </p>
            <p>
              <strong>Inflation Adjustments:</strong> Account for inflation's impact on purchasing power and retirement income needs.
            </p>
            <p>
              <strong>Scenario Analysis:</strong> Compare different return scenarios to understand risk and opportunity.
            </p>
            <p>
              <strong>Professional Recommendations:</strong> Personalized advice based on your specific situation and goals.
            </p>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
