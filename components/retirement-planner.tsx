"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, TrendingUp, DollarSign, Percent, Calendar, Building, User, Shield, PiggyBank, Target, BarChart3, Calculator, Plus, Minus, Trash2, Award, Users, Globe, Clock, Zap } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface PensionFund {
  id: string
  name: string
  contributionRate: number
  startYear: number
  endYear: number
  isActive: boolean
}

interface RetirementAccount {
  id: string
  type: '401k' | 'IRA' | 'Roth IRA' | 'Pension' | 'DSP' | 'TSP' | 'Other'
  currentBalance: number
  monthlyContribution: number
  employerMatch: number
  annualReturn: number
  isActive: boolean
}

interface SocialSecurity {
  estimatedMonthlyBenefit: number
  fullRetirementAge: number
  earlyRetirementAge: number
  delayedRetirementAge: number
}

export function RetirementPlanner() {
  const [loading, setLoading] = useState(false)
  const [employmentType, setEmploymentType] = useState<'government' | 'private' | 'self-employed'>('private')
  const [currentAge, setCurrentAge] = useState("")
  const [retirementAge, setRetirementAge] = useState("65")
  const [currentSalary, setCurrentSalary] = useState("")
  const [inflationRate, setInflationRate] = useState("3.0")
  const [expectedLifespan, setExpectedLifespan] = useState("85")

  const [dspFunds, setDspFunds] = useState<PensionFund[]>([])
  const [pensionMultiplier, setPensionMultiplier] = useState("2.5")
  const [yearsOfService, setYearsOfService] = useState("")
  const [highThreeSalary, setHighThreeSalary] = useState("")

  const [retirementAccounts, setRetirementAccounts] = useState<RetirementAccount[]>([])

  const [socialSecurity, setSocialSecurity] = useState<SocialSecurity>({
    estimatedMonthlyBenefit: 0,
    fullRetirementAge: 67,
    earlyRetirementAge: 62,
    delayedRetirementAge: 70
  })

  const [result, setResult] = useState<{
    yearsToRetirement: number
    totalRetirementIncome: number
    monthlyRetirementIncome: number
    totalContributions: number
    totalGrowth: number
    replacementRatio: number
    shortfall: number
    recommendations: string[]
    accountBreakdown: { [key: string]: number }
    pensionBreakdown: { [key: string]: number }
    socialSecurityBreakdown: number
  } | null>(null)

  const addDspFund = () => {
    const newFund: PensionFund = {
      id: Date.now().toString(),
      name: '',
      contributionRate: 0,
      startYear: new Date().getFullYear(),
      endYear: new Date().getFullYear() + 1,
      isActive: true
    }
    setDspFunds([...dspFunds, newFund])
  }

  const removeDspFund = (id: string) => {
    setDspFunds(dspFunds.filter(fund => fund.id !== id))
  }

  const updateDspFund = (id: string, field: keyof PensionFund, value: any) => {
    setDspFunds(dspFunds.map(fund =>
      fund.id === id ? { ...fund, [field]: value } : fund
    ))
  }

  const addRetirementAccount = () => {
    const newAccount: RetirementAccount = {
      id: Date.now().toString(),
      type: '401k',
      currentBalance: 0,
      monthlyContribution: 0,
      employerMatch: 0,
      annualReturn: 7,
      isActive: true
    }
    setRetirementAccounts([...retirementAccounts, newAccount])
  }

  const removeRetirementAccount = (id: string) => {
    setRetirementAccounts(retirementAccounts.filter(account => account.id !== id))
  }

  const updateRetirementAccount = (id: string, field: keyof RetirementAccount, value: any) => {
    setRetirementAccounts(retirementAccounts.map(account =>
      account.id === id ? { ...account, [field]: value } : account
    ))
  }

  const calculateRetirement = () => {
    setLoading(true)
    setTimeout(() => {
      const current = Number.parseInt(currentAge)
      const retirement = Number.parseInt(retirementAge)
      const salary = Number.parseFloat(currentSalary)
      const inflation = Number.parseFloat(inflationRate) / 100
      const lifespan = Number.parseInt(expectedLifespan)
      const yearsOfServiceNum = Number.parseInt(yearsOfService)
      const highThree = Number.parseFloat(highThreeSalary)

      const yearsToRetirement = retirement - current
      const months = yearsToRetirement * 12
      const retirementYears = lifespan - retirement

      let totalRetirementIncome = 0
      let totalContributions = 0
      let totalGrowth = 0
      const accountBreakdown: { [key: string]: number } = {}
      const pensionBreakdown: { [key: string]: number } = {}
      let socialSecurityBreakdown = 0
      const recommendations: string[] = []

      retirementAccounts.forEach(account => {
        if (account.isActive) {
          const monthlyRate = account.annualReturn / 100 / 12
          const futureValueCurrent = account.currentBalance * Math.pow(1 + monthlyRate, months)
          const futureValueContributions = (account.monthlyContribution + account.employerMatch) *
            ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
          const accountValue = futureValueCurrent + futureValueContributions
          const accountContributions = account.currentBalance + (account.monthlyContribution + account.employerMatch) * months
          const accountGrowth = accountValue - accountContributions

          totalRetirementIncome += accountValue
          totalContributions += accountContributions
          totalGrowth += accountGrowth
          accountBreakdown[account.type] = accountValue
        }
      })

      if (employmentType === 'government' && yearsOfServiceNum > 0 && highThree > 0) {
        const multiplier = Number.parseFloat(pensionMultiplier) / 100
        const annualPension = (highThree * multiplier * yearsOfServiceNum) * Math.pow(1 + inflation, yearsToRetirement)
        const monthlyPension = annualPension / 12
        const totalPensionValue = monthlyPension * retirementYears * 12

        totalRetirementIncome += totalPensionValue
        pensionBreakdown['Government Pension'] = totalPensionValue
        recommendations.push(`Government pension will provide $${monthlyPension.toFixed(0)}/month`)
      }

      dspFunds.forEach(fund => {
        if (fund.isActive) {
          const contributionAmount = (salary * fund.contributionRate / 100) / 12
          const yearsActive = fund.endYear - fund.startYear
          const monthsActive = yearsActive * 12
          const monthlyRate = 7 / 100 / 12
          const fundValue = contributionAmount * ((Math.pow(1 + monthlyRate, monthsActive) - 1) / monthlyRate)

          totalRetirementIncome += fundValue
          pensionBreakdown[fund.name || 'DSP Fund'] = fundValue
        }
      })

      if (socialSecurity.estimatedMonthlyBenefit > 0) {
        const monthlySS = socialSecurity.estimatedMonthlyBenefit * Math.pow(1 + inflation, yearsToRetirement)
        const totalSSValue = monthlySS * retirementYears * 12
        socialSecurityBreakdown = totalSSValue
        totalRetirementIncome += totalSSValue
        recommendations.push(`Social Security will provide $${monthlySS.toFixed(0)}/month`)
      }

      const monthlyRetirementIncome = totalRetirementIncome / (retirementYears * 12)
      const replacementRatio = (monthlyRetirementIncome / (salary / 12)) * 100
      const targetReplacementRatio = 80
      const shortfall = Math.max(0, (salary * targetReplacementRatio / 100) - monthlyRetirementIncome)

      if (replacementRatio < 70) {
        recommendations.push("Consider increasing retirement contributions to reach 70-80% replacement ratio")
      }
      if (retirementAccounts.length === 0 && employmentType !== 'government') {
        recommendations.push("Consider opening a 401k or IRA account for tax-advantaged savings")
      }
      if (socialSecurity.estimatedMonthlyBenefit === 0) {
        recommendations.push("Estimate your Social Security benefits for complete retirement planning")
      }
      if (yearsToRetirement < 10 && totalRetirementIncome < salary * 5) {
        recommendations.push("Consider working longer or increasing savings significantly")
      }

      setResult({
        yearsToRetirement,
        totalRetirementIncome: Number.parseFloat(totalRetirementIncome.toFixed(2)),
        monthlyRetirementIncome: Number.parseFloat(monthlyRetirementIncome.toFixed(2)),
        totalContributions: Number.parseFloat(totalContributions.toFixed(2)),
        totalGrowth: Number.parseFloat(totalGrowth.toFixed(2)),
        replacementRatio: Number.parseFloat(replacementRatio.toFixed(1)),
        shortfall: Number.parseFloat(shortfall.toFixed(2)),
        recommendations,
        accountBreakdown,
        pensionBreakdown,
        socialSecurityBreakdown
      })
      setLoading(false)
    }, 1000)
  }

  const copyResult = () => {
    if (result) {
      const text = `Advanced Retirement Plan:
Employment Type: ${employmentType.charAt(0).toUpperCase() + employmentType.slice(1)}
Current Age: ${currentAge}
Retirement Age: ${retirementAge}
Years to Retirement: ${result.yearsToRetirement}
Monthly Retirement Income: $${result.monthlyRetirementIncome.toLocaleString()}
Total Retirement Value: $${result.totalRetirementIncome.toLocaleString()}
Replacement Ratio: ${result.replacementRatio}%
Total Contributions: $${result.totalContributions.toLocaleString()}
Total Growth: $${result.totalGrowth.toLocaleString()}
Shortfall: $${result.shortfall.toLocaleString()}

Recommendations:
${result.recommendations.map(rec => `• ${rec}`).join('\n')}`
      navigator.clipboard.writeText(text)
    }
  }

  return (
    <Card className="border border-border shadow-lg">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Advanced Retirement Planner
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Comprehensive retirement planning for government employees (DSP, pension) and private sector (401k, IRA) with Social Security integration
          </CardDescription>
        </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {}
          <div className="space-y-6">
            {}
            <div className="space-y-2">
              <Label className="text-xs font-medium text-foreground flex items-center gap-2">
                <Building className="h-4 w-4" />
                Employment Type
              </Label>
              <Select value={employmentType} onValueChange={(value: any) => setEmploymentType(value)}>
                <SelectTrigger className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="government">Government Employee</SelectItem>
                  <SelectItem value="private">Private Sector</SelectItem>
                  <SelectItem value="self-employed">Self-Employed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentAge" className="text-xs font-medium text-foreground">
                  Current Age
              </Label>
              <Input
                id="currentAge"
                type="number"
                placeholder="30"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
                min="18"
                max="100"
                  className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
                <Label htmlFor="retirementAge" className="text-xs font-medium text-foreground">
                Retirement Age
              </Label>
              <Input
                id="retirementAge"
                type="number"
                placeholder="65"
                value={retirementAge}
                onChange={(e) => setRetirementAge(e.target.value)}
                min="50"
                max="100"
                  className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
              <Label htmlFor="currentSalary" className="text-xs font-medium text-foreground flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Current Annual Salary ($)
            </Label>
            <Input
                id="currentSalary"
              type="number"
                placeholder="75000"
                value={currentSalary}
                onChange={(e) => setCurrentSalary(e.target.value)}
              min="0"
              step="1000"
                className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>

            {}
            {employmentType === 'government' && (
              <>
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Government Pension Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
                      <Label htmlFor="yearsOfService" className="text-xs font-medium text-foreground">
                        Years of Service
            </Label>
            <Input
                        id="yearsOfService"
              type="number"
                        placeholder="10"
                        value={yearsOfService}
                        onChange={(e) => setYearsOfService(e.target.value)}
              min="0"
                        className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
                      <Label htmlFor="pensionMultiplier" className="text-xs font-medium text-foreground">
                        Pension Multiplier (%)
                      </Label>
                      <Input
                        id="pensionMultiplier"
                        type="number"
                        placeholder="2.5"
                        value={pensionMultiplier}
                        onChange={(e) => setPensionMultiplier(e.target.value)}
                        step="0.1"
                        className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-3">
                    <Label htmlFor="highThreeSalary" className="text-xs font-medium text-foreground">
                      High-3 Average Salary ($)
            </Label>
            <Input
                      id="highThreeSalary"
              type="number"
                      placeholder="80000"
                      value={highThreeSalary}
                      onChange={(e) => setHighThreeSalary(e.target.value)}
              min="0"
                      step="1000"
                      className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                {}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs font-medium text-foreground flex items-center gap-2">
                      <PiggyBank className="h-4 w-4" />
                      DSP Funds
                    </Label>
                    <Button
                      onClick={addDspFund}
                      size="sm"
                      className="h-7 text-xs"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Add Fund
                    </Button>
                  </div>
                  {dspFunds.map((fund) => (
                    <div key={fund.id} className="p-3 bg-accent/5 border border-accent/20 rounded-lg space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          placeholder="Fund Name"
                          value={fund.name}
                          onChange={(e) => updateDspFund(fund.id, 'name', e.target.value)}
                          className="h-7 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                        />
                        <Input
                          type="number"
                          placeholder="Contribution %"
                          value={fund.contributionRate}
                          onChange={(e) => updateDspFund(fund.id, 'contributionRate', Number(e.target.value))}
                          className="h-7 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          type="number"
                          placeholder="Start Year"
                          value={fund.startYear}
                          onChange={(e) => updateDspFund(fund.id, 'startYear', Number(e.target.value))}
                          className="h-7 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                        />
                        <Input
                          type="number"
                          placeholder="End Year"
                          value={fund.endYear}
                          onChange={(e) => updateDspFund(fund.id, 'endYear', Number(e.target.value))}
                          className="h-7 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button
                          onClick={() => removeDspFund(fund.id)}
                          size="sm"
                          variant="destructive"
                          className="h-6 text-xs"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {}
            {employmentType !== 'government' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-medium text-foreground flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Retirement Accounts
                  </Label>
                  <Button
                    onClick={addRetirementAccount}
                    size="sm"
                    className="h-7 text-xs"
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    Add Account
                  </Button>
                </div>
                {retirementAccounts.map((account) => (
                  <div key={account.id} className="p-3 bg-accent/5 border border-accent/20 rounded-lg space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <Select value={account.type} onValueChange={(value: any) => updateRetirementAccount(account.id, 'type', value)}>
                        <SelectTrigger className="h-7 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="401k">401(k)</SelectItem>
                          <SelectItem value="IRA">Traditional IRA</SelectItem>
                          <SelectItem value="Roth IRA">Roth IRA</SelectItem>
                          <SelectItem value="TSP">TSP</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        type="number"
                        placeholder="Current Balance"
                        value={account.currentBalance}
                        onChange={(e) => updateRetirementAccount(account.id, 'currentBalance', Number(e.target.value))}
                        className="h-7 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <Input
                        type="number"
                        placeholder="Monthly Contrib"
                        value={account.monthlyContribution}
                        onChange={(e) => updateRetirementAccount(account.id, 'monthlyContribution', Number(e.target.value))}
                        className="h-7 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                      />
                      <Input
                        type="number"
                        placeholder="Employer Match"
                        value={account.employerMatch}
                        onChange={(e) => updateRetirementAccount(account.id, 'employerMatch', Number(e.target.value))}
                        className="h-7 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                      />
                      <Input
                        type="number"
                        placeholder="Return %"
                        value={account.annualReturn}
                        onChange={(e) => updateRetirementAccount(account.id, 'annualReturn', Number(e.target.value))}
                        className="h-7 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <div className="flex justify-end">
                      <Button
                        onClick={() => removeRetirementAccount(account.id)}
                        size="sm"
                        variant="destructive"
                        className="h-6 text-xs"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {}
            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Social Security
              </h4>
              <div className="space-y-2">
                <Input
                  type="number"
                  placeholder="Estimated Monthly Benefit"
                  value={socialSecurity.estimatedMonthlyBenefit}
                  onChange={(e) => setSocialSecurity({...socialSecurity, estimatedMonthlyBenefit: Number(e.target.value)})}
                  className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                />
                <p className="text-xs text-muted-foreground">Check your Social Security statement for accurate estimates</p>
              </div>
            </div>

            {}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="inflationRate" className="text-xs font-medium text-foreground flex items-center gap-2">
                  <Percent className="h-4 w-4" />
                  Inflation Rate (%)
                </Label>
                <Input
                  id="inflationRate"
                  type="number"
                  placeholder="3.0"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(e.target.value)}
                  step="0.1"
                  className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expectedLifespan" className="text-xs font-medium text-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Expected Lifespan
                </Label>
                <Input
                  id="expectedLifespan"
                  type="number"
                  placeholder="85"
                  value={expectedLifespan}
                  onChange={(e) => setExpectedLifespan(e.target.value)}
                  min="65"
                  max="120"
                  className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>
          </div>

          <Button
            onClick={calculateRetirement}
              disabled={loading || !currentAge || !retirementAge || !currentSalary}
              className="w-full h-9 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                  <LoadingSpinner className="mr-2 h-3 w-3" />
                Calculating...
              </>
            ) : (
              <>
                  <Calculator className="mr-2 h-4 w-4" />
                Calculate Retirement Plan
              </>
            )}
          </Button>
          </div>

          {}
          <div className="space-y-4">
            {result ? (
              <>
            <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-card border border-border">
                    <span className="text-xs text-muted-foreground">Years to Retirement:</span>
                    <span className="text-sm font-bold text-foreground">{result.yearsToRetirement} years</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-lg bg-card border border-border">
                    <span className="text-xs text-muted-foreground">Monthly Retirement Income:</span>
                    <span className="text-sm font-bold text-heading-accent">${result.monthlyRetirementIncome.toLocaleString()}</span>
              </div>

                  <div className="flex justify-between items-center p-2 rounded-lg bg-card border border-border">
                    <span className="text-xs text-muted-foreground">Replacement Ratio:</span>
                    <span className={`text-sm font-bold ${result.replacementRatio >= 70 ? 'text-heading-accent' : 'text-foreground'}`}>
                      {result.replacementRatio}%
                </span>
              </div>

                  <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5 border-2 border-primary/20">
                    <span className="text-xs font-medium text-foreground">Total Retirement Value:</span>
                    <span className="text-xl font-bold text-primary">${result.totalRetirementIncome.toLocaleString()}</span>
              </div>

                  {result.shortfall > 0 && (
                    <div className="flex justify-between items-center p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                      <span className="text-xs text-muted-foreground">Shortfall:</span>
                      <span className="text-sm font-bold text-foreground">${result.shortfall.toLocaleString()}</span>
                    </div>
                  )}

                  {}
                  {Object.keys(result.accountBreakdown).length > 0 && (
                    <div className="p-2 rounded-lg bg-accent/5 border border-accent/20">
                      <p className="text-xs font-medium text-foreground mb-2">Account Breakdown:</p>
                      {Object.entries(result.accountBreakdown).map(([type, value]) => (
                        <div key={type} className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{type}:</span>
                          <span className="text-foreground">${value.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {}
                  {Object.keys(result.pensionBreakdown).length > 0 && (
                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <p className="text-xs font-medium text-foreground mb-2">Pension Breakdown:</p>
                      {Object.entries(result.pensionBreakdown).map(([type, value]) => (
                        <div key={type} className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{type}:</span>
                          <span className="text-foreground">${value.toLocaleString()}</span>
                        </div>
                      ))}
              </div>
                  )}

                  {}
                  {result.socialSecurityBreakdown > 0 && (
                    <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                      <p className="text-xs font-medium text-foreground mb-2">Social Security:</p>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Total Value:</span>
                        <span className="text-foreground">${result.socialSecurityBreakdown.toLocaleString()}</span>
              </div>
                    </div>
                  )}

                  {}
                  {result.recommendations.length > 0 && (
                    <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <p className="text-xs font-medium text-foreground mb-2 flex items-center gap-1">
                        <Zap className="h-3 w-3" />
                        Recommendations:
                      </p>
                      {result.recommendations.map((rec, index) => (
                        <p key={index} className="text-xs text-muted-foreground">• {rec}</p>
                      ))}
                    </div>
                  )}
            </div>

            <Button
              onClick={copyResult}
              variant="outline"
                  className="w-full h-8 text-xs font-medium hover:bg-accent transition-all bg-transparent"
            >
                  <Copy className="mr-2 h-3 w-3" />
                  Copy Retirement Plan
            </Button>
              </>
            ) : (
              <div className="flex items-center justify-center h-48">
                <div className="text-center">
                  <Shield className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Enter your retirement details</p>
                  <p className="text-xs text-muted-foreground mt-1">to see your comprehensive plan</p>
                </div>
              </div>
            )}
          </div>
        </div>
          </CardContent>
        </Card>
  )
}
