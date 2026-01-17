"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"

import { DollarSign, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

interface LoanResult {
  monthlyPayment: number
  totalPayment: number
  totalInterest: number
  principalAmount: number
}

export function LoanCalculator() {
  const [principal, setPrincipal] = useState("")
  const [rate, setRate] = useState("")
  const [tenure, setTenure] = useState("")
  const [result, setResult] = useState<LoanResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateLoan = () => {
    if (!principal || !rate || !tenure) return

    setIsCalculating(true)

    setTimeout(() => {
      const p = Number.parseFloat(principal)
      const r = Number.parseFloat(rate) / 12 / 100
      const n = Number.parseFloat(tenure) * 12

      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      const totalPayment = emi * n
      const totalInterest = totalPayment - p

      setResult({
        monthlyPayment: Number.parseFloat(emi.toFixed(2)),
        totalPayment: Number.parseFloat(totalPayment.toFixed(2)),
        totalInterest: Number.parseFloat(totalInterest.toFixed(2)),
        principalAmount: p,
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `Monthly EMI: $${result.monthlyPayment.toLocaleString()}\nTotal Payment: $${result.totalPayment.toLocaleString()}\nTotal Interest: $${result.totalInterest.toLocaleString()}`
    void navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <GCard className="shadow-lg border-border hover:shadow-xl transition-shadow duration-300">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2 text-xl">
            <DollarSign className="h-5 w-5 text-primary" />
            Calculate Loan EMI
          </GCardTitle>
          <GCardDescription className="text-sm">Enter loan details to calculate monthly payments</GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          <div className="space-y-2">
            <GLabel htmlFor="principal" className="text-sm font-medium">
              Loan Amount ($)
            </GLabel>
            <GInput
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="100000"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <GLabel htmlFor="rate" className="text-sm font-medium">
              Annual Interest Rate (%)
            </GLabel>
            <GInput
              id="rate"
              type="number"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="7.5"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <GLabel htmlFor="tenure" className="text-sm font-medium">
              Loan Tenure (Years)
            </GLabel>
            <GInput
              id="tenure"
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="20"
              className="h-11"
            />
          </div>

          <GButton
            onClick={calculateLoan}
            className="w-full h-11 text-sm font-medium shadow-md hover:shadow-lg transition-all"
            disabled={!principal || !rate || !tenure || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Calculating...
              </>
            ) : (
              "Calculate EMI"
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {result && !isCalculating && (
        <GCard className="shadow-lg border-primary/20 animate-fade-in-up">
          <GCardHeader>
            <GCardTitle className="text-xl">Loan Breakdown</GCardTitle>
            <GCardDescription className="text-sm">Your monthly payment details</GCardDescription>
          </GCardHeader>
          <GCardContent className="space-y-6">
            <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="text-sm text-muted-foreground mb-1">Monthly EMI</div>
              <div className="text-4xl font-bold text-primary">${result.monthlyPayment.toLocaleString()}</div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Principal Amount</span>
                <span className="font-semibold text-sm">${result.principalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Interest</span>
                <span className="font-semibold text-sm text-foreground">${result.totalInterest.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Payment</span>
                <span className="font-semibold text-sm">${result.totalPayment.toLocaleString()}</span>
              </div>
            </div>

            <GButton
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
            </GButton>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
