"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Users } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

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
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Split the Bill</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Divide expenses fairly among friends or groups
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="totalBill" className="text-sm font-medium text-foreground">
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
              className="h-11 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="numPeople" className="text-sm font-medium text-foreground">
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

          <Button
            onClick={splitBill}
            disabled={loading || !totalBill || !numPeople || Number.parseInt(numPeople) < 1}
            className="w-full h-11 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Calculating...
              </>
            ) : (
              <>
                <Users className="mr-2 h-4 w-4" />
                Split Bill
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="border border-primary/20 shadow-md animate-fade-in-up bg-accent/5">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Split Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Original Bill:</span>
                <span className="text-base font-bold text-foreground">${totalBill}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Tip ({tipPercent}%):</span>
                <span className="text-base font-bold text-secondary">+${result.tipAmount}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Total with Tip:</span>
                <span className="text-base font-bold text-foreground">${result.totalWithTip}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg border-2 border-primary/20">
                <span className="text-sm font-medium text-foreground">Each Person Pays:</span>
                <span className="text-2xl font-bold text-primary">${result.perPerson}</span>
              </div>

              <div className="p-3 bg-secondary/5 rounded-lg border border-secondary/20">
                <p className="text-xs text-muted-foreground mb-1">Breakdown per person:</p>
                <p className="text-sm font-medium text-foreground">
                  Bill: ${(Number.parseFloat(totalBill) / Number.parseInt(numPeople)).toFixed(2)} + Tip: $
                  {result.tipPerPerson}
                </p>
              </div>
            </div>

            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Split Details
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
