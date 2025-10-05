"use client"

import { useState } from "react"
import { Calendar, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function DateToDayFinder() {
  const [selectedDate, setSelectedDate] = useState("")
  const [result, setResult] = useState<{
    dayName: string
    dayNumber: number
    monthName: string
    year: number
    weekOfYear: number
  } | null>(null)
  const [copied, setCopied] = useState(false)

  const findDay = () => {
    if (!selectedDate) return

    const date = new Date(selectedDate)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    const dayName = days[date.getDay()]
    const dayNumber = date.getDate()
    const monthName = months[date.getMonth()]
    const year = date.getFullYear()

    // Calculate week of year
    const startOfYear = new Date(year, 0, 1)
    const days_passed = Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000))
    const weekOfYear = Math.ceil((days_passed + startOfYear.getDay() + 1) / 7)

    setResult({ dayName, dayNumber, monthName, year, weekOfYear })
  }

  const copyResult = () => {
    if (!result) return
    const text = `${result.dayName}, ${result.monthName} ${result.dayNumber}, ${result.year}\nWeek ${result.weekOfYear} of ${result.year}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-sm border-border">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-medium">
              Select a Date
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value)
                  setResult(null)
                }}
                className="pl-10 h-11"
              />
            </div>
          </div>

          <Button onClick={findDay} disabled={!selectedDate} className="w-full h-11 text-sm font-medium">
            Find Day
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6 shadow-sm border-border animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Day Information</h3>
              <Button variant="outline" size="sm" onClick={copyResult} className="h-9 bg-transparent">
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>

            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{result.dayName}</div>
              <div className="text-lg text-muted-foreground">
                {result.monthName} {result.dayNumber}, {result.year}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border text-center">
                <div className="text-2xl font-bold text-foreground">{result.weekOfYear}</div>
                <div className="text-sm text-muted-foreground mt-1">Week of Year</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border text-center">
                <div className="text-2xl font-bold text-foreground">{result.dayNumber}</div>
                <div className="text-sm text-muted-foreground mt-1">Day of Month</div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
