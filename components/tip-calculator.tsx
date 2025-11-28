"use client"

import { useState } from "react"
import { GButton } from "@/components/globalcomponents/gbutton"
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Inputs */}
      <div className="space-y-6">
        {/* Bill Amount Input */}
        <div className="space-y-2">
          <Label htmlFor="billAmount" className="text-xs font-medium text-foreground">
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
            className="h-9 text-sm border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Tip Percentage Input */}
        <div className="space-y-2">
          <Label htmlFor="tipPercent" className="text-xs font-medium text-foreground">
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
            className="h-9 text-sm border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground placeholder:text-muted-foreground"
          />
          <div className="flex gap-2 flex-wrap">
            {quickTipButtons.map((percent) => (
              <GButton
                key={percent}
                onClick={() => setTipPercent(percent)}
                variant={tipPercent === percent ? "default" : "outline"}
                size="sm"
                className="h-7 text-xs font-medium"
              >
                {percent}%
              </GButton>
            ))}
          </div>
        </div>

        {/* Number of People Input */}
        <div className="space-y-2">
          <Label htmlFor="numPeople" className="text-xs font-medium text-foreground">
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
            className="h-9 text-sm border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <GButton
            onClick={calculateTip}
            disabled={loading || !billAmount || Number.parseFloat(billAmount) <= 0}
            className="flex-1 h-9 text-xs font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-1 h-3 w-3" />
                Calculating...
              </>
            ) : (
              <>
                <DollarSign className="mr-1 h-3 w-3" />
                Calculate Tip
              </>
            )}
          </GButton>
          <GButton
            onClick={() => {
              setBillAmount("")
              setTipPercent("15")
              setNumPeople("1")
              setResult(null)
            }}
            variant="outline"
            className="h-9 text-xs font-medium"
          >
            Reset
          </GButton>
        </div>
      </div>

      {/* Right Column - Results */}
      <div className="space-y-4">
        {result ? (
          <>
            {/* Results Header */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-foreground">Tip Breakdown</h3>
              <p className="text-xs text-muted-foreground">Calculation Results</p>
            </div>

            {/* Results Grid */}
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-xs text-muted-foreground">Bill Amount:</span>
                <span className="text-sm font-bold text-foreground">${billAmount}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-xs text-muted-foreground">Tip ({tipPercent}%):</span>
                <span className="text-sm font-bold text-heading-accent">+${result.tipAmount}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-xs text-muted-foreground">Total Amount:</span>
                <span className="text-sm font-bold text-foreground">${result.totalAmount}</span>
              </div>

              {Number.parseInt(numPeople) > 1 && (
                <>
                  <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                    <span className="text-xs text-muted-foreground">Per Person:</span>
                    <span className="text-sm font-bold text-foreground">${result.perPerson}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                    <span className="text-xs text-muted-foreground">Tip per person:</span>
                    <span className="text-sm font-bold text-foreground">${result.tipPerPerson}</span>
                  </div>
                </>
              )}
            </div>

            {/* Final Total */}
            <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
              <span className="text-sm font-medium text-foreground">Final Total:</span>
              <span className="text-xl font-bold text-primary">${result.totalAmount}</span>
            </div>

            {/* Copy Button */}
            <GButton
              onClick={copyResult}
              variant="outline"
              className="w-full h-8 text-xs font-medium hover:bg-accent transition-all bg-transparent"
            >
              <Copy className="mr-1 h-3 w-3" />
              Copy Results
            </GButton>
          </>
        ) : (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">Enter values and click Calculate</p>
              <p className="text-xs text-muted-foreground mt-1">to see tip breakdown</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
