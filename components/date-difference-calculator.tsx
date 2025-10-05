"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface DateDifferenceResult {
  years: number
  months: number
  days: number
  totalDays: number
  totalWeeks: number
  totalHours: number
}

export function DateDifferenceCalculator() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [result, setResult] = useState<DateDifferenceResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateDifference = () => {
    if (!startDate || !endDate) return

    setIsCalculating(true)

    setTimeout(() => {
      const start = new Date(startDate)
      const end = new Date(endDate)

      let years = end.getFullYear() - start.getFullYear()
      let months = end.getMonth() - start.getMonth()
      let days = end.getDate() - start.getDate()

      if (days < 0) {
        months--
        const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0)
        days += lastMonth.getDate()
      }

      if (months < 0) {
        years--
        months += 12
      }

      const totalDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
      const totalWeeks = Math.floor(totalDays / 7)
      const totalHours = totalDays * 24

      setResult({
        years: Math.abs(years),
        months: Math.abs(months),
        days: Math.abs(days),
        totalDays: Math.abs(totalDays),
        totalWeeks: Math.abs(totalWeeks),
        totalHours: Math.abs(totalHours),
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `Date difference: ${result.years} years, ${result.months} months, ${result.days} days (${result.totalDays} total days)`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-border hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Calendar className="h-5 w-5 text-primary" />
            Calculate Date Difference
          </CardTitle>
          <CardDescription className="text-sm">Enter two dates to calculate the difference</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="startdate" className="text-sm font-medium">
              Start Date
            </Label>
            <input
              id="startdate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="enddate" className="text-sm font-medium">
              End Date
            </Label>
            <input
              id="enddate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
            />
          </div>

          <Button
            onClick={calculateDifference}
            className="w-full h-11 text-sm font-medium shadow-md hover:shadow-lg transition-all"
            disabled={!startDate || !endDate || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Calculating...
              </>
            ) : (
              "Calculate Difference"
            )}
          </Button>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-xl">Date Difference</CardTitle>
            <CardDescription className="text-sm">Time between the two dates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                <div className="text-3xl font-bold text-primary">{result.years}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">Years</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 transition-colors">
                <div className="text-3xl font-bold text-secondary">{result.months}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">Months</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                <div className="text-3xl font-bold text-primary">{result.days}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">Days</div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Days</span>
                <span className="font-semibold text-sm">{result.totalDays.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Weeks</span>
                <span className="font-semibold text-sm">{result.totalWeeks.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Hours</span>
                <span className="font-semibold text-sm">{result.totalHours.toLocaleString()}</span>
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
