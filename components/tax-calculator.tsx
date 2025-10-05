"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Wallet, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface TaxResult {
  grossSalary: number
  taxAmount: number
  netSalary: number
  monthlyNet: number
  taxRate: number
}

export function TaxCalculator() {
  const [salary, setSalary] = useState("")
  const [result, setResult] = useState<TaxResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateTax = () => {
    if (!salary) return

    setIsCalculating(true)

    setTimeout(() => {
      const gross = Number.parseFloat(salary)
      let tax = 0
      let rate = 0

      // Simplified US tax brackets (2024)
      if (gross <= 11000) {
        tax = gross * 0.1
        rate = 10
      } else if (gross <= 44725) {
        tax = 1100 + (gross - 11000) * 0.12
        rate = 12
      } else if (gross <= 95375) {
        tax = 5147 + (gross - 44725) * 0.22
        rate = 22
      } else if (gross <= 182100) {
        tax = 16290 + (gross - 95375) * 0.24
        rate = 24
      } else if (gross <= 231250) {
        tax = 37104 + (gross - 182100) * 0.32
        rate = 32
      } else if (gross <= 578125) {
        tax = 52832 + (gross - 231250) * 0.35
        rate = 35
      } else {
        tax = 174238.25 + (gross - 578125) * 0.37
        rate = 37
      }

      const net = gross - tax
      const monthlyNet = net / 12

      setResult({
        grossSalary: gross,
        taxAmount: Number.parseFloat(tax.toFixed(2)),
        netSalary: Number.parseFloat(net.toFixed(2)),
        monthlyNet: Number.parseFloat(monthlyNet.toFixed(2)),
        taxRate: rate,
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `Gross Salary: $${result.grossSalary.toLocaleString()}\nTax: $${result.taxAmount.toLocaleString()}\nNet Salary: $${result.netSalary.toLocaleString()}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-border hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Wallet className="h-5 w-5 text-primary" />
            Calculate Income Tax
          </CardTitle>
          <CardDescription className="text-sm">Enter your annual salary to estimate tax</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="salary" className="text-sm font-medium">
              Annual Gross Salary ($)
            </Label>
            <Input
              id="salary"
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="75000"
              className="h-11"
            />
          </div>

          <Button
            onClick={calculateTax}
            className="w-full h-11 text-sm font-medium shadow-md hover:shadow-lg transition-all"
            disabled={!salary || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Calculating...
              </>
            ) : (
              "Calculate Tax"
            )}
          </Button>

          <p className="text-xs text-muted-foreground">
            * Based on simplified 2024 US federal tax brackets. Actual tax may vary.
          </p>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-xl">Tax Breakdown</CardTitle>
            <CardDescription className="text-sm">Your estimated tax calculation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="text-sm text-muted-foreground mb-1">Annual Net Salary</div>
              <div className="text-4xl font-bold text-primary">${result.netSalary.toLocaleString()}</div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Gross Salary</span>
                <span className="font-semibold text-sm">${result.grossSalary.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Tax Amount ({result.taxRate}%)</span>
                <span className="font-semibold text-sm text-red-600">-${result.taxAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Monthly Net</span>
                <span className="font-semibold text-sm">${result.monthlyNet.toLocaleString()}</span>
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
