"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Target } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Progress } from "@/components/ui/progress"

export function SavingsGoalTracker() {
  const [loading, setLoading] = useState(false)
  const [goalAmount, setGoalAmount] = useState("")
  const [currentSavings, setCurrentSavings] = useState("")
  const [monthlySavings, setMonthlySavings] = useState("")
  const [result, setResult] = useState<{
    remaining: number
    percentComplete: number
    monthsToGoal: number
    targetDate: string
  } | null>(null)

  const calculateGoal = () => {
    setLoading(true)
    setTimeout(() => {
      const goal = Number.parseFloat(goalAmount)
      const current = Number.parseFloat(currentSavings)
      const monthly = Number.parseFloat(monthlySavings)

      const remaining = goal - current
      const percentComplete = (current / goal) * 100
      const monthsToGoal = Math.ceil(remaining / monthly)

      const targetDate = new Date()
      targetDate.setMonth(targetDate.getMonth() + monthsToGoal)

      setResult({
        remaining: Number.parseFloat(remaining.toFixed(2)),
        percentComplete: Number.parseFloat(percentComplete.toFixed(1)),
        monthsToGoal,
        targetDate: targetDate.toLocaleDateString("en-US", { year: "numeric", month: "long" }),
      })
      setLoading(false)
    }, 500)
  }

  const copyResult = () => {
    if (result) {
      const text = `Savings Goal Tracker:
Goal Amount: $${goalAmount}
Current Savings: $${currentSavings}
Remaining: $${result.remaining}
Progress: ${result.percentComplete}%
Monthly Savings: $${monthlySavings}
Months to Goal: ${result.monthsToGoal}
Target Date: ${result.targetDate}`
      navigator.clipboard.writeText(text)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Track Your Savings Goal</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Enter your savings goal and current progress to see when you'll reach it
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="goalAmount" className="text-sm font-medium text-foreground">
              Savings Goal ($)
            </Label>
            <Input
              id="goalAmount"
              type="number"
              placeholder="10000"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              min="0"
              step="100"
              className="h-11 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentSavings" className="text-sm font-medium text-foreground">
              Current Savings ($)
            </Label>
            <Input
              id="currentSavings"
              type="number"
              placeholder="2500"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
              min="0"
              step="100"
              className="h-11 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlySavings" className="text-sm font-medium text-foreground">
              Monthly Savings ($)
            </Label>
            <Input
              id="monthlySavings"
              type="number"
              placeholder="500"
              value={monthlySavings}
              onChange={(e) => setMonthlySavings(e.target.value)}
              min="0"
              step="50"
              className="h-11 text-sm"
            />
          </div>

          <Button
            onClick={calculateGoal}
            disabled={loading || !goalAmount || !currentSavings || !monthlySavings}
            className="w-full h-11 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Calculating...
              </>
            ) : (
              <>
                <Target className="mr-2 h-4 w-4" />
                Calculate Timeline
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="border border-primary/20 shadow-md animate-fade-in-up bg-accent/5">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Your Savings Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Progress to Goal</span>
                  <span className="text-sm font-bold text-primary">{result.percentComplete}%</span>
                </div>
                <Progress value={result.percentComplete} className="h-3" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Current Savings</p>
                  <p className="text-lg font-bold text-foreground">${currentSavings}</p>
                </div>
                <div className="p-3 bg-card rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Goal Amount</p>
                  <p className="text-lg font-bold text-foreground">${goalAmount}</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Remaining to Save:</span>
                <span className="text-base font-bold text-foreground">${result.remaining}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                <span className="text-sm font-medium text-foreground">Months to Goal:</span>
                <span className="text-2xl font-bold text-primary">{result.monthsToGoal}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                <span className="text-sm font-medium text-foreground">Target Date:</span>
                <span className="text-base font-bold text-secondary">{result.targetDate}</span>
              </div>
            </div>

            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Plan
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
