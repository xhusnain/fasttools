"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { TrendingUp, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface CompoundInterestResult {
  principal: number
  totalAmount: number
  totalInterest: number
  years: number
}

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [time, setTime] = useState("")
  const [frequency, setFrequency] = useState("12")
  const [result, setResult] = useState<CompoundInterestResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateCompoundInterest = () => {
    if (!principal || !rate || !time) return

    setIsCalculating(true)

    setTimeout(() => {
      const p = Number.parseFloat(principal)
      const r = Number.parseFloat(rate) / 100
      const t = Number.parseFloat(time)
      const n = Number.parseFloat(frequency)

      const amount = p * Math.pow(1 + r / n, n * t)
      const interest = amount - p

      setResult({
        principal: p,
        totalAmount: Number.parseFloat(amount.toFixed(2)),
        totalInterest: Number.parseFloat(interest.toFixed(2)),
        years: t,
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `Principal: $${result.principal.toLocaleString()}\nTotal Amount: $${result.totalAmount.toLocaleString()}\nInterest Earned: $${result.totalInterest.toLocaleString()}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-border hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <TrendingUp className="h-5 w-5 text-primary" />
            Calculate Compound Interest
          </CardTitle>
          <CardDescription className="text-sm">See how your investment grows over time</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="principal" className="text-sm font-medium">
              Principal Amount ($)
            </Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="10000"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rate" className="text-sm font-medium">
              Annual Interest Rate (%)
            </Label>
            <Input
              id="rate"
              type="number"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="5"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time" className="text-sm font-medium">
              Time Period (Years)
            </Label>
            <Input
              id="time"
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="10"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="frequency" className="text-sm font-medium">
              Compounding Frequency
            </Label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
            >
              <option value="1">Annually</option>
              <option value="2">Semi-Annually</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
              <option value="365">Daily</option>
            </select>
          </div>

          <Button
            onClick={calculateCompoundInterest}
            className="w-full h-11 text-sm font-medium shadow-md hover:shadow-lg transition-all"
            disabled={!principal || !rate || !time || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Calculating...
              </>
            ) : (
              "Calculate"
            )}
          </Button>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-xl">Investment Growth</CardTitle>
            <CardDescription className="text-sm">Your investment after {result.years} years</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="text-sm text-muted-foreground mb-1">Total Amount</div>
              <div className="text-4xl font-bold text-primary">${result.totalAmount.toLocaleString()}</div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Principal</span>
                <span className="font-semibold text-sm">${result.principal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Interest Earned</span>
                <span className="font-semibold text-sm text-green-600">+${result.totalInterest.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Growth</span>
                <span className="font-semibold text-sm">
                  {((result.totalInterest / result.principal) * 100).toFixed(1)}%
                </span>
              </div>
            </div>

            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Result
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
