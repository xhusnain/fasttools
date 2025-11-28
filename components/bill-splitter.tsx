"use client"

import { useState } from "react"
import { GButton } from "@/components/globalcomponents/gbutton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Users } from "lucide-react"


export function BillSplitter() {
  const [loading, setLoading] = useState(false)
  const [totalBill, setTotalBill] = useState("")
  const [numPeople, setNumPeople] = useState("")
  const [tipPercent, setTipPercent] = useState("15")
  const [result, setResult] = useState<{
    tipAmount: number
    totalWithTip: number
    perPerson: number
    tipPerPerson: number
  } | null>(null)

  const splitBill = () => {
    setLoading(true)
    setTimeout(() => {
      const bill = Number.parseFloat(totalBill)
      const people = Number.parseInt(numPeople)
      const tip = Number.parseFloat(tipPercent)

      const tipAmount = (bill * tip) / 100
      const totalWithTip = bill + tipAmount
      const perPerson = totalWithTip / people
      const tipPerPerson = tipAmount / people

      setResult({
        tipAmount: Number.parseFloat(tipAmount.toFixed(2)),
        totalWithTip: Number.parseFloat(totalWithTip.toFixed(2)),
        perPerson: Number.parseFloat(perPerson.toFixed(2)),
        tipPerPerson: Number.parseFloat(tipPerPerson.toFixed(2)),
      })
      setLoading(false)
    }, 500)
  }

  const copyResult = () => {
    if (result) {
      const text = `Bill Split:
Total Bill: $${totalBill}
Tip (${tipPercent}%): $${result.tipAmount}
Total with Tip: $${result.totalWithTip}
Split ${numPeople} ways: $${result.perPerson} per person`
      navigator.clipboard.writeText(text)
    }
  }

  const quickTipButtons = ["10", "15", "18", "20"]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Inputs */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="totalBill" className="text-xs font-medium text-foreground">
            Total Bill Amount ($)
          </Label>
          <Input
            id="totalBill"
            type="number"
            placeholder="100.00"
            value={totalBill}
            onChange={(e) => setTotalBill(e.target.value)}
            min="0"
            step="0.01"
            className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="numPeople" className="text-xs font-medium text-foreground">
            Number of People
          </Label>
          <Input
            id="numPeople"
            type="number"
            placeholder="4"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
            min="1"
            step="1"
            className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

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
            className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
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

        <div className="flex gap-2">
          <GButton
            onClick={splitBill}
            disabled={loading || !totalBill || !numPeople || Number.parseInt(numPeople) < 1}
            isLoading={loading}
            className="flex-1 h-9 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? "Calculating..." : (
              <>
                <Users className="mr-2 h-4 w-4" />
                Split Bill
              </>
            )}
          </GButton>
          <GButton
            onClick={() => {
              setTotalBill("")
              setNumPeople("")
              setTipPercent("15")
              setResult(null)
            }}
            variant="outline"
            className="h-9 text-sm font-medium"
          >
            Reset
          </GButton>
        </div>
      </div>

      {/* Right Column - Results */}
      <div className="space-y-4">
        {result ? (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Original Bill:</span>
              <span className="text-sm font-bold text-foreground">${totalBill}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Tip ({tipPercent}%):</span>
              <span className="text-sm font-bold text-foreground">+${result.tipAmount}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Total with Tip:</span>
              <span className="text-sm font-bold text-foreground">${result.totalWithTip}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <span className="text-xs font-medium text-foreground">Each Person Pays:</span>
              <span className="text-xl font-bold text-heading-accent">${result.perPerson}</span>
            </div>

            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <p className="text-xs text-muted-foreground mb-1">Breakdown per person:</p>
              <p className="text-xs font-medium text-foreground">
                Bill: ${(Number.parseFloat(totalBill) / Number.parseInt(numPeople)).toFixed(2)} + Tip: ${result.tipPerPerson}
              </p>
            </div>

            <GButton
              onClick={copyResult}
              variant="outline"
              className="w-full h-8 text-xs font-medium hover:bg-accent transition-all bg-transparent"
            >
              <Copy className="mr-2 h-3 w-3" />
              Copy Results
            </GButton>
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-sm">Enter bill details to see split breakdown</p>
          </div>
        )}
      </div>
    </div>
  )
}
