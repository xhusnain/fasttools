"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GButton } from "@/components/globalcomponents/gbutton"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Copy, Check, Clock, Briefcase, Settings, Calculator } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface DateDifferenceResult {
  years: number
  months: number
  days: number
  totalDays: number
  businessDays: number
  totalWeeks: number
  totalHours: number
  totalMinutes: number
  totalSeconds: number
}

interface DateFormat {
  value: string
  label: string
  example: string
}

export function DateDifferenceCalculator() {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [result, setResult] = useState<DateDifferenceResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [businessDaysOnly, setBusinessDaysOnly] = useState(false)
  const [saturdayIsBusinessDay, setSaturdayIsBusinessDay] = useState(false)
  const [dateFormat, setDateFormat] = useState("mm/dd/yyyy")
  const [today, setToday] = useState("")

  const dateFormats: DateFormat[] = [
    { value: "mm/dd/yyyy", label: "US Format", example: "10/10/2025" },
    { value: "dd/mm/yyyy", label: "EU Format", example: "10/10/2025" },
    { value: "yyyy-mm-dd", label: "ISO Format", example: "2025-10-10" }
  ]

  useEffect(() => {
    const now = new Date()
    const todayStr = now.toISOString().split('T')[0]
    setToday(todayStr)
  }, [])

  useEffect(() => {
    const handleSetDates = (event: CustomEvent) => {
      const { startDate: newStartDate, endDate: newEndDate } = event.detail
      if (newStartDate) setStartDate(newStartDate)
      if (newEndDate) setEndDate(newEndDate)
    }

    window.addEventListener('setDateDifference', handleSetDates as EventListener)
    return () => {
      window.removeEventListener('setDateDifference', handleSetDates as EventListener)
    }
  }, [])

  const calculateBusinessDays = (start: Date, end: Date): number => {
    let count = 0
    const current = new Date(start)

    while (current <= end) {
      const dayOfWeek = current.getDay()
      if (businessDaysOnly) {
        if (saturdayIsBusinessDay) {
          // Monday to Saturday are business days
          if (dayOfWeek >= 1 && dayOfWeek <= 6) {
            count++
          }
        } else {
          // Monday to Friday are business days
          if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            count++
          }
        }
      } else {
        count++
      }
      current.setDate(current.getDate() + 1)
    }

    return count
  }

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
      const businessDays = calculateBusinessDays(start, end)
      const totalWeeks = Math.floor(totalDays / 7)
      const totalHours = totalDays * 24
      const totalMinutes = totalDays * 24 * 60
      const totalSeconds = totalDays * 24 * 60 * 60

      setResult({
        years: Math.abs(years),
        months: Math.abs(months),
        days: Math.abs(days),
        totalDays: Math.abs(totalDays),
        businessDays: Math.abs(businessDays),
        totalWeeks: Math.abs(totalWeeks),
        totalHours: Math.abs(totalHours),
        totalMinutes: Math.abs(totalMinutes),
        totalSeconds: Math.abs(totalSeconds),
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
    <div className="space-y-4" data-calculator="date-difference">
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            Date Difference Calculator
          </CardTitle>
          <CardDescription className="text-sm">
            Calculate the exact difference between two dates
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Date Format Selection */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings className="h-3.5 w-3.5 text-muted-foreground" />
              <Label className="text-sm font-semibold">Date Format</Label>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {dateFormats.map((format) => (
                <GButton
                  key={format.value}
                  variant={dateFormat === format.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDateFormat(format.value)}
                  className={`h-9 text-xs font-medium transition-all ${dateFormat === format.value
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'hover:bg-muted'
                    }`}
                >
                  <div className="text-center w-full">
                    <div className="font-semibold text-xs">{format.label}</div>
                    <div className="text-[10px] opacity-75">{format.example}</div>
                  </div>
                </GButton>
              ))}
            </div>
          </div>

          {/* Date Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="startdate" className="text-sm font-semibold flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                Start Date
              </Label>
              <input
                id="startdate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="enddate" className="text-sm font-semibold flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                End Date
              </Label>
              <input
                id="enddate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary/50"
              />
            </div>
          </div>

          {/* Business Days Options */}
          <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-3.5 w-3.5 text-primary" />
              <h3 className="text-sm font-semibold text-heading-accent">Business Days</h3>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 p-2 bg-card rounded border border-border">
                <Checkbox
                  id="business-days"
                  checked={businessDaysOnly}
                  onCheckedChange={(checked) => setBusinessDaysOnly(checked as boolean)}
                  className="h-4 w-4"
                />
                <Label htmlFor="business-days" className="text-sm font-medium cursor-pointer">
                  Exclude Weekends
                </Label>
              </div>

              {businessDaysOnly && (
                <div className="flex items-center space-x-2 p-2 bg-card rounded ml-3 border-l-2 border-border border border-border">
                  <Checkbox
                    id="saturday-business"
                    checked={saturdayIsBusinessDay}
                    onCheckedChange={(checked) => setSaturdayIsBusinessDay(checked as boolean)}
                    className="h-4 w-4"
                  />
                  <Label htmlFor="saturday-business" className="text-sm font-medium cursor-pointer">
                    Include Saturday
                  </Label>
                </div>
              )}
            </div>
          </div>

          <GButton
            onClick={calculateDifference}
            className="w-full h-10 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            disabled={!startDate || !endDate || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                <span>Calculating...</span>
              </>
            ) : (
              <>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculate Difference</span>
              </>
            )}
          </GButton>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="p-1.5 bg-green-900/30 rounded-lg">
                <Calendar className="h-4 w-4 text-heading-accent" />
              </div>
              Results
            </CardTitle>
            <CardDescription className="text-sm">
              {businessDaysOnly ? "Business days calculation" : "Time breakdown"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Main Results Grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-3 rounded-lg bg-card border border-border hover:shadow-md transition-all">
                <div className="text-2xl font-bold text-foreground mb-1">{result.years}</div>
                <div className="text-xs font-semibold text-foreground">Years</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card border border-border hover:shadow-md transition-all">
                <div className="text-2xl font-bold text-foreground mb-1">{result.months}</div>
                <div className="text-xs font-semibold text-foreground">Months</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card border border-border hover:shadow-md transition-all">
                <div className="text-2xl font-bold text-heading-accent mb-1">{result.days}</div>
                <div className="text-xs font-semibold text-heading-accent">Days</div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
              <h3 className="text-sm font-semibold text-center mb-2 text-heading-accent">Detailed Breakdown</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex justify-between items-center p-2 bg-card rounded border border-border">
                  <span className="text-xs font-medium text-foreground">Total Days</span>
                  <span className="font-bold text-sm text-foreground">{result.totalDays.toLocaleString()}</span>
                </div>
                {businessDaysOnly && (
                  <div className="flex justify-between items-center p-2 bg-card rounded border border-border">
                    <span className="text-xs font-medium text-foreground flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      Business Days
                    </span>
                    <span className="font-bold text-sm text-foreground">{result.businessDays.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between items-center p-2 bg-card rounded border border-border">
                  <span className="text-xs font-medium text-foreground">Weeks</span>
                  <span className="font-bold text-sm text-foreground">{result.totalWeeks.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-card rounded border border-border">
                  <span className="text-xs font-medium text-foreground">Hours</span>
                  <span className="font-bold text-sm text-foreground">{result.totalHours.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-card rounded border border-border">
                  <span className="text-xs font-medium text-foreground">Minutes</span>
                  <span className="font-bold text-sm text-foreground">{result.totalMinutes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-card rounded border border-border">
                  <span className="text-xs font-medium text-foreground">Seconds</span>
                  <span className="font-bold text-sm text-foreground">{result.totalSeconds.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Answer Summary */}
            <div className="p-4 bg-card rounded-lg border border-primary/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">
                  {businessDaysOnly ? result.businessDays : result.totalDays} Days
                </div>
                <div className="text-sm text-muted-foreground">
                  {businessDaysOnly ? (saturdayIsBusinessDay ? "Business Days (incl. Saturday)" : "Business Days (Mon-Fri)") : "Total Days"}
                </div>
              </div>
            </div>

            <GButton
              onClick={copyResult}
              variant="outline"
              size="sm"
              className="w-full h-9 text-xs font-semibold hover:bg-accent transition-all"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-3.5 w-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-3.5 w-3.5" />
                  <span>Copy Result</span>
                </>
              )}
            </GButton>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
