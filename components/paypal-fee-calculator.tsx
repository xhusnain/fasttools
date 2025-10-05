"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, DollarSign } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function PayPalFeeCalculator() {
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState("")
  const [result, setResult] = useState<{
    fee: number
    netAmount: number
    grossAmount: number
  } | null>(null)

  const calculateFee = () => {
    setLoading(true)
    setTimeout(() => {
      const amountNum = Number.parseFloat(amount)
      // PayPal fee: 2.9% + $0.30
      const fee = amountNum * 0.029 + 0.3
      const netAmount = amountNum - fee
      // To receive exact amount, you need to charge more
      const grossAmount = (amountNum + 0.3) / 0.971

      setResult({
        fee: Number.parseFloat(fee.toFixed(2)),
        netAmount: Number.parseFloat(netAmount.toFixed(2)),
        grossAmount: Number.parseFloat(grossAmount.toFixed(2)),
      })
      setLoading(false)
    }, 500)
  }

  const copyResult = () => {
    if (result) {
      const text = `PayPal Fee Calculation:
Amount: $${amount}
PayPal Fee: $${result.fee}
You Receive: $${result.netAmount}
To receive $${amount}, charge: $${result.grossAmount}`
      navigator.clipboard.writeText(text)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Calculate PayPal Fees</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Enter the transaction amount to calculate PayPal fees (2.9% + $0.30)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-sm font-medium text-foreground">
              Transaction Amount ($)
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="100.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="0"
              step="0.01"
              className="h-11 text-sm"
            />
          </div>

          <Button
            onClick={calculateFee}
            disabled={loading || !amount || Number.parseFloat(amount) <= 0}
            className="w-full h-11 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Calculating...
              </>
            ) : (
              <>
                <DollarSign className="mr-2 h-4 w-4" />
                Calculate Fee
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="border border-primary/20 shadow-md animate-fade-in-up bg-accent/5">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Fee Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Transaction Amount:</span>
                <span className="text-base font-bold text-foreground">${amount}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">PayPal Fee (2.9% + $0.30):</span>
                <span className="text-base font-bold text-destructive">-${result.fee}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                <span className="text-sm font-medium text-foreground">You Receive:</span>
                <span className="text-xl font-bold text-primary">${result.netAmount}</span>
              </div>

              <div className="border-t border-border pt-3 mt-3">
                <p className="text-sm text-muted-foreground mb-2">To receive exactly ${amount}, you should charge:</p>
                <div className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                  <span className="text-sm font-medium text-foreground">Amount to Charge:</span>
                  <span className="text-lg font-bold text-secondary">${result.grossAmount}</span>
                </div>
              </div>
            </div>

            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Results
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
