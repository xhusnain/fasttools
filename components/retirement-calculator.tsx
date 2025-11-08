"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
  const [currentAge, setCurrentAge] = useState("")
  const [retirementAge, setRetirementAge] = useState("")
  const [lifeExpectancy, setLifeExpectancy] = useState("")
  const [currentIncome, setCurrentIncome] = useState("")
  const [incomeIncrease, setIncomeIncrease] = useState("")
  const [retirementIncomeNeeded, setRetirementIncomeNeeded] = useState("")
  const [investmentReturn, setInvestmentReturn] = useState("")
  const [inflationRate, setInflationRate] = useState("")
  const [otherIncome, setOtherIncome] = useState("")
  const [currentSavings, setCurrentSavings] = useState("")
  const [futureSavings, setFutureSavings] = useState("")
  const [targetAmount, setTargetAmount] = useState("")
  const [monthlyContribution, setMonthlyContribution] = useState("")
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState("")
  const [result, setResult] = useState<RetirementResult | null>(null)
  const [history, setHistory] = useState<RetirementResult[]>([])

  const calculateRetirement = () => {
    const age = parseFloat(currentAge) || 0
    const retireAge = parseFloat(retirementAge) || 0
    const lifeExp = parseFloat(lifeExpectancy) || 0
    const income = parseFloat(currentIncome) || 0
    const incomeInc = parseFloat(incomeIncrease) || 0
    const retirementIncome = parseFloat(retirementIncomeNeeded) || 0
    const invReturn = parseFloat(investmentReturn) || 0
    const inflation = parseFloat(inflationRate) || 0
    const otherInc = parseFloat(otherIncome) || 0
    const savings = parseFloat(currentSavings) || 0
    const futureSav = parseFloat(futureSavings) || 0
    const target = parseFloat(targetAmount) || 0
    const monthlyContrib = parseFloat(monthlyContribution) || 0
    const monthlyWithdraw = parseFloat(monthlyWithdrawal) || 0

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
      navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setCurrentAge("")
    setRetirementAge("")
    setLifeExpectancy("")
    setCurrentIncome("")
    setIncomeIncrease("")
    setRetirementIncomeNeeded("")
    setInvestmentReturn("")
    setInflationRate("")
    setOtherIncome("")
    setCurrentSavings("")
    setFutureSavings("")
    setTargetAmount("")
    setMonthlyContribution("")
    setMonthlyWithdrawal("")
    setResult(null)
  }

  return (
    <div className="space-y-6">
      {}
      <Card>
        <CardHeader className="pb-8">
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-foreground" />
            Advanced Retirement Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {}
          <div>
            <Label className="text-lg font-semibold mb-4 block">Calculation Type</Label>
            <Tabs value={calculationType} onValueChange={setCalculationType}>
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0">
                <TabsTrigger value="howMuchToSave" className="text-xs sm:text-sm">How Much to Save</TabsTrigger>
                <TabsTrigger value="howMuchCanWithdraw" className="text-xs sm:text-sm">How Much Can Withdraw</TabsTrigger>
                <TabsTrigger value="howLongWillLast" className="text-xs sm:text-sm">How Long Will Last</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currentAge">Current Age</Label>
              <Input
                id="currentAge"
                type="number"
                placeholder="35"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="retirementAge">Retirement Age</Label>
              <Input
                id="retirementAge"
                type="number"
                placeholder="67"
                value={retirementAge}
                onChange={(e) => setRetirementAge(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lifeExpectancy">Life Expectancy</Label>
              <Input
                id="lifeExpectancy"
                type="number"
                placeholder="85"
                value={lifeExpectancy}
                onChange={(e) => setLifeExpectancy(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentIncome">Current Income</Label>
              <Input
                id="currentIncome"
                type="number"
                placeholder="70000"
                value={currentIncome}
                onChange={(e) => setCurrentIncome(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="incomeIncrease">Income Increase (%/year)</Label>
              <Input
                id="incomeIncrease"
                type="number"
                placeholder="3"
                value={incomeIncrease}
                onChange={(e) => setIncomeIncrease(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="retirementIncomeNeeded">Income Needed After Retirement (%)</Label>
              <Input
                id="retirementIncomeNeeded"
                type="number"
                placeholder="75"
                value={retirementIncomeNeeded}
                onChange={(e) => setRetirementIncomeNeeded(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="investmentReturn">Investment Return (%/year)</Label>
              <Input
                id="investmentReturn"
                type="number"
                placeholder="6"
                value={investmentReturn}
                onChange={(e) => setInvestmentReturn(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inflationRate">Inflation Rate (%/year)</Label>
              <Input
                id="inflationRate"
                type="number"
                placeholder="3"
                value={inflationRate}
                onChange={(e) => setInflationRate(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="otherIncome">Other Income After Retirement</Label>
              <Input
                id="otherIncome"
                type="number"
                placeholder="0"
                value={otherIncome}
                onChange={(e) => setOtherIncome(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentSavings">Current Retirement Savings</Label>
              <Input
                id="currentSavings"
                type="number"
                placeholder="30000"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(e.target.value)}
              />
            </div>
          </div>

          {calculationType === "howMuchToSave" && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="futureSavings">Future Savings (% of income)</Label>
                <Input
                  id="futureSavings"
                  type="number"
                  placeholder="10"
                  value={futureSavings}
                  onChange={(e) => setFutureSavings(e.target.value)}
                />
              </div>
            </div>
          )}

          {calculationType === "howMuchCanWithdraw" && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="monthlyContribution">Monthly Contribution</Label>
                <Input
                  id="monthlyContribution"
                  type="number"
                  placeholder="500"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                />
              </div>
            </div>
          )}

          {calculationType === "howLongWillLast" && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="monthlyWithdrawal">Monthly Withdrawal</Label>
                <Input
                  id="monthlyWithdrawal"
                  type="number"
                  placeholder="5000"
                  value={monthlyWithdrawal}
                  onChange={(e) => setMonthlyWithdrawal(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button onClick={calculateRetirement} className="flex-1">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate
            </Button>
            <Button variant="outline" onClick={clearAll}>
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>

      {}
      {result && (
        <div className="space-y-6">
          {}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-heading-accent" />
                Retirement Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Target Amount</Label>
                  <div className="text-3xl font-bold text-heading-accent">
                    ${result.targetAmount.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Monthly Contribution</Label>
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
                <Button onClick={copyResult} variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-foreground" />
                Detailed Calculations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>

          {}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-heading-accent" />
                Return Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>

          {}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-heading-accent" />
                Personalized Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
      )}

      {}
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
                      Age {item.currentAge} to {item.retirementAge} - ${item.targetAmount.toFixed(0)} target
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${item.monthlyContribution.toFixed(2)}/month contribution
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

      {}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-foreground" />
            Retirement Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
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
        </CardContent>
      </Card>
    </div>
  )
}
