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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Inputs */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="balance" className="text-xs font-medium text-foreground">
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
            className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="apr" className="text-xs font-medium text-foreground">
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
            className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthlyPayment" className="text-xs font-medium text-foreground">
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
            className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
          />
          <p className="text-xs text-muted-foreground">Minimum payment is usually 2-3% of balance</p>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={calculatePayoff}
            disabled={loading || !balance || !apr || !monthlyPayment}
            className="flex-1 h-9 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2 h-3 w-3" />
                Calculating...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Calculate Payoff
              </>
            )}
          </Button>
          <Button
            onClick={() => {
              setBalance("")
              setApr("")
              setMonthlyPayment("")
              setResult(null)
            }}
            variant="outline"
            className="h-9 text-sm font-medium"
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Right Column - Results */}
      <div className="space-y-4">
        {result ? (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Current Balance:</span>
              <span className="text-sm font-bold text-foreground">${balance}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <span className="text-xs font-medium text-foreground">Months to Payoff:</span>
              <span className="text-xl font-bold text-green-600">{result.monthsToPayoff}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Payoff Date:</span>
              <span className="text-sm font-bold text-foreground">{result.payoffDate}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Total Interest Paid:</span>
              <span className="text-sm font-bold text-red-500">${result.totalInterest}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <span className="text-xs font-medium text-foreground">Total Amount Paid:</span>
              <span className="text-lg font-bold text-blue-600">${result.totalPaid}</span>
            </div>

            <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
              <p className="text-xs text-muted-foreground mb-1">Monthly Breakdown:</p>
              <p className="text-xs font-medium text-foreground">
                Paying ${monthlyPayment}/month at {apr}% APR
              </p>
            </div>

            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-8 text-xs font-medium hover:bg-accent transition-all bg-transparent"
            >
              <Copy className="mr-2 h-3 w-3" />
              Copy Results
            </Button>
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-sm">Enter your credit card details to see payoff plan</p>
          </div>
        )}
      </div>
    </div>
  )
}
