"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Percent, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function PercentageCalculator() {
  const [value, setValue] = useState("")
  const [percentage, setPercentage] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculatePercentage = () => {
    if (!value || !percentage) return

    setIsCalculating(true)

    setTimeout(() => {
      const v = Number.parseFloat(value)
      const p = Number.parseFloat(percentage)
      const res = (v * p) / 100

      setResult(Number.parseFloat(res.toFixed(2)))
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (result === null) return
    const text = `${percentage}% of ${value} = ${result}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-border hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Percent className="h-5 w-5 text-primary" />
            Calculate Percentage
          </CardTitle>
          <CardDescription className="text-sm">Find what percentage of a number is</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="percentage" className="text-sm font-medium">
              Percentage (%)
            </Label>
            <Input
              id="percentage"
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="25"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="value" className="text-sm font-medium">
              Of Value
            </Label>
            <Input
              id="value"
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="1000"
              className="h-11"
            />
          </div>

          <Button
            onClick={calculatePercentage}
            className="w-full h-11 text-sm font-medium shadow-md hover:shadow-lg transition-all"
            disabled={!value || !percentage || isCalculating}
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

      {result !== null && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-xl">Result</CardTitle>
            <CardDescription className="text-sm">
              {percentage}% of {value}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="text-5xl font-bold text-primary">{result.toLocaleString()}</div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Original Value</span>
                <span className="font-semibold text-sm">{Number.parseFloat(value).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Percentage</span>
                <span className="font-semibold text-sm">{percentage}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Result</span>
                <span className="font-semibold text-sm">{result.toLocaleString()}</span>
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
