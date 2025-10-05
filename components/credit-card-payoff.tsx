"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, CreditCard } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function CreditCardPayoff() {
  const [loading, setLoading] = useState(false)
  const [balance, setBalance] = useState("")
  const [apr, setApr] = useState("")
  const [monthlyPayment, setMonthlyPayment] = useState("")
  const [result, setResult] = useState<{
    monthsToPayoff: number
    totalInterest: number
    totalPaid: number
    payoffDate: string
  } | null>(null)

  const calculatePayoff = () => {
    setLoading(true)
    setTimeout(() => {
      const principal = Number.parseFloat(balance)
      const annualRate = Number.parseFloat(apr) / 100
      const monthlyRate = annualRate / 12
      const payment = Number.parseFloat(monthlyPayment)

      let remainingBalance = principal
      let months = 0
      let totalInterest = 0

      // Calculate payoff timeline
      while (remainingBalance > 0 && months < 600) {
        // max 50 years
        const interestCharge = remainingBalance * monthlyRate
        totalInterest += interestCharge

        const principalPayment = payment - interestCharge

        if (principalPayment <= 0) {
          // Payment too low to cover interest
          months = -1
          break
        }

        remainingBalance -= principalPayment
        months++

        if (remainingBalance < 0) {
          remainingBalance = 0
        }
      }

      if (months === -1) {
        // Handle case where payment is too low
        setResult(null)
        setLoading(false)
        return
      }

      const totalPaid = principal + totalInterest
      const payoffDate = new Date()
      payoffDate.setMonth(payoffDate.getMonth() + months)

      setResult({
        monthsToPayoff: months,
        totalInterest: Number.parseFloat(totalInterest.toFixed(2)),
        totalPaid: Number.parseFloat(totalPaid.toFixed(2)),
        payoffDate: payoffDate.toLocaleDateString("en-US", { year: "numeric", month: "long" }),
      })
      setLoading(false)
    }, 800)
  }

  const copyResult = () => {
    if (result) {
      const text = `Credit Card Payoff Plan:
Current Balance: $${balance}
APR: ${apr}%
Monthly Payment: $${monthlyPayment}
Months to Payoff: ${result.monthsToPayoff}
Total Interest: $${result.totalInterest}
Total Amount Paid: $${result.totalPaid}
Payoff Date: ${result.payoffDate}`
      navigator.clipboard.writeText(text)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Credit Card Payoff Calculator</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Calculate how long it will take to pay off your credit card debt
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="balance" className="text-sm font-medium text-foreground">
              Current Balance ($)
            </Label>
            <Input
              id="balance"
              type="number"
              placeholder="5000"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              min="0"
              step="100"
              className="h-11 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apr" className="text-sm font-medium text-foreground">
              Annual Percentage Rate (APR %)
            </Label>
            <Input
              id="apr"
              type="number"
              placeholder="18.99"
              value={apr}
              onChange={(e) => setApr(e.target.value)}
              min="0"
              max="100"
              step="0.01"
              className="h-11 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlyPayment" className="text-sm font-medium text-foreground">
              Monthly Payment ($)
            </Label>
            <Input
              id="monthlyPayment"
              type="number"
              placeholder="200"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(e.target.value)}
              min="0"
              step="10"
              className="h-11 text-sm"
            />
            <p className="text-xs text-muted-foreground">Minimum payment is usually 2-3% of balance</p>
          </div>

          <Button
            onClick={calculatePayoff}
            disabled={loading || !balance || !apr || !monthlyPayment}
            className="w-full h-11 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Calculating...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Calculate Payoff
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="border border-primary/20 shadow-md animate-fade-in-up bg-accent/5">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Your Payoff Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Current Balance:</span>
                <span className="text-base font-bold text-foreground">${balance}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                <span className="text-sm font-medium text-foreground">Months to Payoff:</span>
                <span className="text-2xl font-bold text-primary">{result.monthsToPayoff}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Payoff Date:</span>
                <span className="text-base font-bold text-foreground">{result.payoffDate}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Total Interest Paid:</span>
                <span className="text-base font-bold text-destructive">${result.totalInterest}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                <span className="text-sm font-medium text-foreground">Total Amount Paid:</span>
                <span className="text-lg font-bold text-secondary">${result.totalPaid}</span>
              </div>

              <div className="p-3 bg-accent/10 rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">Monthly Breakdown:</p>
                <p className="text-sm font-medium text-foreground">
                  Paying ${monthlyPayment}/month at {apr}% APR
                </p>
              </div>
            </div>

            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Payoff Plan
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
