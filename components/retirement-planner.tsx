"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, TrendingUp } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function RetirementPlanner() {
  const [loading, setLoading] = useState(false)
  const [currentAge, setCurrentAge] = useState("")
  const [retirementAge, setRetirementAge] = useState("65")
  const [currentSavings, setCurrentSavings] = useState("")
  const [monthlyContribution, setMonthlyContribution] = useState("")
  const [annualReturn, setAnnualReturn] = useState("7")
  const [result, setResult] = useState<{
    yearsToRetirement: number
    totalContributions: number
    estimatedValue: number
    interestEarned: number
  } | null>(null)

  const calculateRetirement = () => {
    setLoading(true)
    setTimeout(() => {
      const current = Number.parseInt(currentAge)
      const retirement = Number.parseInt(retirementAge)
      const savings = Number.parseFloat(currentSavings)
      const monthly = Number.parseFloat(monthlyContribution)
      const rate = Number.parseFloat(annualReturn) / 100

      const yearsToRetirement = retirement - current
      const months = yearsToRetirement * 12
      const monthlyRate = rate / 12

      // Future value of current savings
      const futureValueCurrent = savings * Math.pow(1 + monthlyRate, months)

      // Future value of monthly contributions (annuity)
      const futureValueContributions = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)

      const estimatedValue = futureValueCurrent + futureValueContributions
      const totalContributions = savings + monthly * months
      const interestEarned = estimatedValue - totalContributions

      setResult({
        yearsToRetirement,
        totalContributions: Number.parseFloat(totalContributions.toFixed(2)),
        estimatedValue: Number.parseFloat(estimatedValue.toFixed(2)),
        interestEarned: Number.parseFloat(interestEarned.toFixed(2)),
      })
      setLoading(false)
    }, 800)
  }

  const copyResult = () => {
    if (result) {
      const text = `Retirement Plan:
Current Age: ${currentAge}
Retirement Age: ${retirementAge}
Years to Retirement: ${result.yearsToRetirement}
Total Contributions: $${result.totalContributions.toLocaleString()}
Estimated Value at Retirement: $${result.estimatedValue.toLocaleString()}
Interest Earned: $${result.interestEarned.toLocaleString()}`
      navigator.clipboard.writeText(text)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Plan Your Retirement</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Calculate how much you'll have saved by retirement with compound interest
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currentAge" className="text-sm font-medium text-foreground">
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
                className="h-11 text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="retirementAge" className="text-sm font-medium text-foreground">
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
                className="h-11 text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentSavings" className="text-sm font-medium text-foreground">
              Current Retirement Savings ($)
            </Label>
            <Input
              id="currentSavings"
              type="number"
              placeholder="50000"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
              min="0"
              step="1000"
              className="h-11 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlyContribution" className="text-sm font-medium text-foreground">
              Monthly Contribution ($)
            </Label>
            <Input
              id="monthlyContribution"
              type="number"
              placeholder="500"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              min="0"
              step="50"
              className="h-11 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="annualReturn" className="text-sm font-medium text-foreground">
              Expected Annual Return (%)
            </Label>
            <Input
              id="annualReturn"
              type="number"
              placeholder="7"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(e.target.value)}
              min="0"
              max="20"
              step="0.5"
              className="h-11 text-sm"
            />
            <p className="text-xs text-muted-foreground">Historical stock market average is around 7-10% annually</p>
          </div>

          <Button
            onClick={calculateRetirement}
            disabled={loading || !currentAge || !retirementAge || !currentSavings || !monthlyContribution}
            className="w-full h-11 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Calculating...
              </>
            ) : (
              <>
                <TrendingUp className="mr-2 h-4 w-4" />
                Calculate Retirement Plan
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="border border-primary/20 shadow-md animate-fade-in-up bg-accent/5">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Your Retirement Projection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Years to Retirement:</span>
                <span className="text-base font-bold text-foreground">{result.yearsToRetirement} years</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Total Contributions:</span>
                <span className="text-base font-bold text-foreground">
                  ${result.totalContributions.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Interest Earned:</span>
                <span className="text-base font-bold text-secondary">+${result.interestEarned.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                <span className="text-sm font-medium text-foreground">Estimated Value at {retirementAge}:</span>
                <span className="text-2xl font-bold text-primary">${result.estimatedValue.toLocaleString()}</span>
              </div>

              <div className="p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                <p className="text-xs text-muted-foreground mb-1">Monthly Breakdown:</p>
                <p className="text-sm font-medium text-foreground">
                  Contributing ${monthlyContribution}/month at {annualReturn}% annual return
                </p>
              </div>
            </div>

            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Projection
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
