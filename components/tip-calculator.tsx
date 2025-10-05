"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, DollarSign } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function TipCalculator() {
  const [loading, setLoading] = useState(false)
  const [billAmount, setBillAmount] = useState("")
  const [tipPercent, setTipPercent] = useState("15")
  const [numPeople, setNumPeople] = useState("1")
  const [result, setResult] = useState<{
    tipAmount: number
    totalAmount: number
    perPerson: number
    tipPerPerson: number
  } | null>(null)

  const calculateTip = () => {
    setLoading(true)
    setTimeout(() => {
      const bill = Number.parseFloat(billAmount)
      const tip = Number.parseFloat(tipPercent)
      const people = Number.parseInt(numPeople)

      const tipAmount = (bill * tip) / 100
      const totalAmount = bill + tipAmount
      const perPerson = totalAmount / people
      const tipPerPerson = tipAmount / people

      setResult({
        tipAmount: Number.parseFloat(tipAmount.toFixed(2)),
        totalAmount: Number.parseFloat(totalAmount.toFixed(2)),
        perPerson: Number.parseFloat(perPerson.toFixed(2)),
        tipPerPerson: Number.parseFloat(tipPerPerson.toFixed(2)),
      })
      setLoading(false)
    }, 500)
  }

  const copyResult = () => {
    if (result) {
      const text = `Tip Calculation:
Bill Amount: $${billAmount}
Tip (${tipPercent}%): $${result.tipAmount}
Total Amount: $${result.totalAmount}
Split ${numPeople} ways: $${result.perPerson} per person`
      navigator.clipboard.writeText(text)
    }
  }

  const quickTipButtons = ["10", "15", "18", "20", "25"]

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Calculate Tip</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Enter your bill amount and tip percentage to calculate the total
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="billAmount" className="text-sm font-medium text-foreground">
              Bill Amount ($)
            </Label>
            <Input
              id="billAmount"
              type="number"
              placeholder="50.00"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              min="0"
              step="0.01"
              className="h-11 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tipPercent" className="text-sm font-medium text-foreground">
              Tip Percentage (%)
            </Label>
            <Input
              id="tipPercent"
              type="number"
              placeholder="15"
              value={tipPercent}
              onChange={(e) => setTipPercent(e.target.value)}
              min="0"
              max="100"
              step="1"
              className="h-11 text-sm"
            />
            <div className="flex gap-2 flex-wrap">
              {quickTipButtons.map((percent) => (
                <Button
                  key={percent}
                  onClick={() => setTipPercent(percent)}
                  variant={tipPercent === percent ? "default" : "outline"}
                  size="sm"
                  className="h-8 text-xs font-medium"
                >
                  {percent}%
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="numPeople" className="text-sm font-medium text-foreground">
              Number of People
            </Label>
            <Input
              id="numPeople"
              type="number"
              placeholder="1"
              value={numPeople}
              onChange={(e) => setNumPeople(e.target.value)}
              min="1"
              step="1"
              className="h-11 text-sm"
            />
          </div>

          <Button
            onClick={calculateTip}
            disabled={loading || !billAmount || Number.parseFloat(billAmount) <= 0}
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
                Calculate Tip
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="border border-primary/20 shadow-md animate-fade-in-up bg-accent/5">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Tip Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Bill Amount:</span>
                <span className="text-base font-bold text-foreground">${billAmount}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Tip ({tipPercent}%):</span>
                <span className="text-base font-bold text-secondary">+${result.tipAmount}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                <span className="text-sm font-medium text-foreground">Total Amount:</span>
                <span className="text-2xl font-bold text-primary">${result.totalAmount}</span>
              </div>

              {Number.parseInt(numPeople) > 1 && (
                <div className="border-t border-border pt-3 space-y-2">
                  <p className="text-sm text-muted-foreground">Split between {numPeople} people:</p>
                  <div className="flex justify-between items-center p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                    <span className="text-sm font-medium text-foreground">Per Person:</span>
                    <span className="text-lg font-bold text-secondary">${result.perPerson}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-card rounded-lg border border-border text-xs">
                    <span className="text-muted-foreground">Tip per person:</span>
                    <span className="font-medium text-foreground">${result.tipPerPerson}</span>
                  </div>
                </div>
              )}
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
