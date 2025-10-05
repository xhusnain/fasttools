"use client"

import { useState } from "react"
import { Calendar, Briefcase, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function WorkdayCalculator() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [result, setResult] = useState<{
    totalDays: number
    workdays: number
    weekends: number
  } | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateWorkdays = () => {
    if (!startDate || !endDate) return

    setIsCalculating(true)
    setTimeout(() => {
      const start = new Date(startDate)
      const end = new Date(endDate)

      let workdays = 0
      let weekends = 0
      const current = new Date(start)

      while (current <= end) {
        const dayOfWeek = current.getDay()
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          workdays++
        } else {
          weekends++
        }
        current.setDate(current.getDate() + 1)
      }

      const totalDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1

      setResult({ totalDays, workdays, weekends })
      setIsCalculating(false)
    }, 300)
  }

  const copyResult = () => {
    if (!result) return
    const text = `Total Days: ${result.totalDays}\nWorkdays: ${result.workdays}\nWeekend Days: ${result.weekends}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-sm border-border">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-date" className="text-sm font-medium">
                Start Date
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="end-date" className="text-sm font-medium">
                End Date
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="end-date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate}
                  className="pl-10 h-11"
                />
              </div>
            </div>
          </div>

          <Button
            onClick={calculateWorkdays}
            disabled={!startDate || !endDate || isCalculating}
            className="w-full h-11 text-sm font-medium"
          >
            {isCalculating ? "Calculating..." : "Calculate Workdays"}
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6 shadow-sm border-border animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Results</h3>
              <Button variant="outline" size="sm" onClick={copyResult} className="h-9 bg-transparent">
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border text-center">
                <div className="text-3xl font-bold text-primary">{result.totalDays}</div>
                <div className="text-sm text-muted-foreground mt-1">Total Days</div>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
                <div className="text-3xl font-bold text-primary">{result.workdays}</div>
                <div className="text-sm text-muted-foreground mt-1">Workdays</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border text-center">
                <div className="text-3xl font-bold text-muted-foreground">{result.weekends}</div>
                <div className="text-sm text-muted-foreground mt-1">Weekend Days</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
              <Briefcase className="h-5 w-5 text-primary mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-semibold text-sm text-foreground">Workday Calculation</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This calculation excludes Saturdays and Sundays. Public holidays are not included in this calculation.
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
