"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
    <div className="space-y-8">
      {/* Today's Date Display */}
      <Card className="shadow-lg border-border bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground font-medium">Today (UTC) is:</span>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-foreground">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="text-sm text-muted-foreground">
                ({new Date().toLocaleDateString('en-US')})
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            Date Difference Calculator
          </CardTitle>
          <CardDescription className="text-base">
            Calculate the exact difference between two dates with business day options and multiple date formats
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Date Format Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-muted-foreground" />
              <Label className="text-base font-semibold">Date Format</Label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {dateFormats.map((format) => (
                <Button
                  key={format.value}
                  variant={dateFormat === format.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDateFormat(format.value)}
                  className={`h-12 text-sm font-medium transition-all ${
                    dateFormat === format.value 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'hover:bg-muted'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold">{format.label}</div>
                    <div className="text-xs opacity-75">{format.example}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

                  {/* Date Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="startdate" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Start Date
                      </Label>
                      <input
                        id="startdate"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="flex h-10 sm:h-12 w-full rounded-lg border-2 border-input bg-background px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary/50"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="enddate" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        End Date
                      </Label>
                      <input
                        id="enddate"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="flex h-10 sm:h-12 w-full rounded-lg border-2 border-input bg-background px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary/50"
                      />
                    </div>
                  </div>

                  {/* Business Days Options */}
                  <div className="space-y-4 p-4 sm:p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl border-2 border-amber-200 dark:border-amber-800">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
                      <h3 className="text-base sm:text-lg font-semibold text-amber-800 dark:text-amber-200">Business Days Options</h3>
                    </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                <Checkbox
                  id="business-days"
                  checked={businessDaysOnly}
                  onCheckedChange={(checked) => setBusinessDaysOnly(checked as boolean)}
                  className="h-5 w-5"
                />
                <Label htmlFor="business-days" className="text-base font-medium cursor-pointer">
                  Count Business Days Only (Exclude Weekends)
                </Label>
              </div>
              
              {businessDaysOnly && (
                <div className="flex items-center space-x-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg ml-4 border-l-2 border-amber-300">
                  <Checkbox
                    id="saturday-business"
                    checked={saturdayIsBusinessDay}
                    onCheckedChange={(checked) => setSaturdayIsBusinessDay(checked as boolean)}
                    className="h-5 w-5"
                  />
                  <Label htmlFor="saturday-business" className="text-base font-medium cursor-pointer">
                    Include Saturday as Business Day
                  </Label>
                </div>
              )}
            </div>
          </div>

                  <Button
                    onClick={calculateDifference}
                    className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                    disabled={!startDate || !endDate || isCalculating}
                  >
                    {isCalculating ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2 sm:mr-3" />
                        <span className="hidden sm:inline">Calculating Difference...</span>
                        <span className="sm:hidden">Calculating...</span>
                      </>
                    ) : (
                      <>
                        <Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="hidden sm:inline">Calculate Date Difference</span>
                        <span className="sm:hidden">Calculate</span>
                      </>
                    )}
                  </Button>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              Date Difference Results
            </CardTitle>
            <CardDescription className="text-base">
              {businessDaysOnly ? "Business days calculation with weekend exclusions" : "Complete time breakdown between the two dates"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
                    {/* Main Results Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">{result.years}</div>
                        <div className="text-xs sm:text-sm font-semibold text-blue-800 dark:text-blue-200">Years</div>
                      </div>
                      <div className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">{result.months}</div>
                        <div className="text-xs sm:text-sm font-semibold text-purple-800 dark:text-purple-200">Months</div>
                      </div>
                      <div className="text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1 sm:mb-2">{result.days}</div>
                        <div className="text-xs sm:text-sm font-semibold text-green-800 dark:text-green-200">Days</div>
                      </div>
                    </div>

            {/* Detailed Breakdown */}
            <div className="space-y-4 p-4 sm:p-6 bg-white/50 dark:bg-slate-800/50 rounded-xl border-2 border-slate-200 dark:border-slate-700">
              <h3 className="text-base sm:text-lg font-semibold text-center mb-3 sm:mb-4">Detailed Breakdown</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Total Days</span>
                  <span className="font-bold text-lg text-slate-900 dark:text-slate-100">{result.totalDays.toLocaleString()}</span>
                </div>
                {businessDaysOnly && (
                  <div className="flex justify-between items-center p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                    <span className="text-sm font-medium text-amber-700 dark:text-amber-300 flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      Business Days
                    </span>
                    <span className="font-bold text-lg text-amber-900 dark:text-amber-100">{result.businessDays.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Total Weeks</span>
                  <span className="font-bold text-lg text-slate-900 dark:text-slate-100">{result.totalWeeks.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Total Hours</span>
                  <span className="font-bold text-lg text-slate-900 dark:text-slate-100">{result.totalHours.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Total Minutes</span>
                  <span className="font-bold text-lg text-slate-900 dark:text-slate-100">{result.totalMinutes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Total Seconds</span>
                  <span className="font-bold text-lg text-slate-900 dark:text-slate-100">{result.totalSeconds.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Answer Summary */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border-2 border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {businessDaysOnly ? result.businessDays : result.totalDays} Days Difference
                </div>
                <div className="text-lg text-muted-foreground mb-2">
                  {businessDaysOnly ? "Business Days Calculation" : "Total Calendar Days"}
                </div>
                {businessDaysOnly && (
                  <div className="text-sm text-muted-foreground">
                    {saturdayIsBusinessDay ? "Including Saturdays as business days" : "Monday to Friday only (excluding weekends)"}
                  </div>
                )}
              </div>
            </div>

                    <Button
                      onClick={copyResult}
                      variant="outline"
                      className="w-full h-10 sm:h-12 text-sm sm:text-base font-semibold hover:bg-accent transition-all duration-300 border-2"
                    >
                      {copied ? (
                        <>
                          <Check className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="hidden sm:inline">Result Copied to Clipboard!</span>
                          <span className="sm:hidden">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="hidden sm:inline">Copy Result to Clipboard</span>
                          <span className="sm:hidden">Copy Result</span>
                        </>
                      )}
                    </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
