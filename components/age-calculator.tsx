"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar, Copy, Share2, Check, Clock, Heart, Gift, Target, Settings, Calculator, Sparkles } from "lucide-react"
import { AdSpace } from "@/components/ad-space"
import { LoadingSpinner } from "@/components/loading-spinner"

interface AgeResult {
  years: number
  months: number
  days: number
  totalDays: number
  nextBirthday: string
  // Enhanced features
  totalHours: number
  totalMinutes: number
  totalSeconds: number
  decimalYears: number
  weeks: number
  daysUntilNextBirthday: number
  ageLastBirthday: string
  ageNextBirthday: string
  ageNearestBirthday: string
  ageOnToday: string
  shareableLink: string
}

export function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("")
  const [targetDate, setTargetDate] = useState("")
  const [result, setResult] = useState<AgeResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateAge = () => {
    if (!birthDate) return

    setIsCalculating(true)

    // Simulate calculation delay for smooth UX
    setTimeout(() => {
      const birth = new Date(birthDate)
      const today = targetDate ? new Date(targetDate) : new Date()

      let years = today.getFullYear() - birth.getFullYear()
      let months = today.getMonth() - birth.getMonth()
      let days = today.getDate() - birth.getDate()

      if (days < 0) {
        months--
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        days += lastMonth.getDate()
      }

      if (months < 0) {
        years--
        months += 12
      }

      const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24))
      const totalHours = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60))
      const totalMinutes = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60))
      const totalSeconds = Math.floor((today.getTime() - birth.getTime()) / 1000)
      const decimalYears = totalDays / 365.25
      const weeks = Math.floor(totalDays / 7)

      // Next birthday calculation
      const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
      if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1)
      }
      const daysUntilNextBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

      // Age calculations
      const ageLastBirthday = `${years} years, ${months} months, ${days} days`
      const ageNextBirthday = `${years + 1} years, ${months} months, ${days} days`
      const ageNearestBirthday = daysUntilNextBirthday <= 183 ? ageNextBirthday : ageLastBirthday
      const ageOnToday = `${years} years, ${months} months, ${days} days`

      // Shareable link
      const shareableLink = `https://www.fasttools.store/calculator/age-calculator?dob=${birthDate}${targetDate ? `&target=${targetDate}` : ''}`

      setResult({
        years,
        months,
        days,
        totalDays,
        nextBirthday: `${daysUntilNextBirthday} days`,
        totalHours,
        totalMinutes,
        totalSeconds,
        decimalYears,
        weeks,
        daysUntilNextBirthday,
        ageLastBirthday,
        ageNextBirthday,
        ageNearestBirthday,
        ageOnToday,
        shareableLink,
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `Age: ${result.years} years, ${result.months} months, ${result.days} days
Total: ${result.totalDays.toLocaleString()} days
Hours: ${result.totalHours.toLocaleString()}
Minutes: ${result.totalMinutes.toLocaleString()}
Seconds: ${result.totalSeconds.toLocaleString()}
Next Birthday: ${result.nextBirthday}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareResult = async () => {
    if (!result) return
    const text = `Check out my age calculation: ${result.shareableLink}`

    if (navigator.share) {
      try {
        await navigator.share({ text, title: "My Age Calculation", url: result.shareableLink })
      } catch (err) {
        // Share cancelled
      }
    } else {
      copyResult()
    }
  }

  const copyLink = () => {
    if (!result) return
    navigator.clipboard.writeText(result.shareableLink)
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
            Age Calculator
          </CardTitle>
          <CardDescription className="text-base">
            Calculate your exact age in years, months, days, hours, minutes, and seconds with precision and accuracy
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Date Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3">
              <Label htmlFor="birthdate" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                Date of Birth
              </Label>
              <input
                id="birthdate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                className="flex h-10 sm:h-12 w-full rounded-lg border-2 border-input bg-background px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary/50"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="targetdate" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                Find Age on (Optional)
              </Label>
              <input
                id="targetdate"
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                min={birthDate}
                className="flex h-10 sm:h-12 w-full rounded-lg border-2 border-input bg-background px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary/50"
              />
            </div>
          </div>

          <Button
            onClick={calculateAge}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            disabled={!birthDate || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2 sm:mr-3" />
                <span className="hidden sm:inline">Calculating Age...</span>
                <span className="sm:hidden">Calculating...</span>
              </>
            ) : (
              <>
                <Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculate Age</span>
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
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              Your Age Results
            </CardTitle>
            <CardDescription className="text-base">
              Born on: {new Date(birthDate).toLocaleDateString()} | 
              Age on: {targetDate ? new Date(targetDate).toLocaleDateString() : 'Today'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Main Age Display */}
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
              <h3 className="text-base sm:text-lg font-semibold text-center mb-3 sm:mb-4 flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Detailed Time Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Total Days</span>
                  <span className="font-bold text-lg text-blue-900 dark:text-blue-100">{result.totalDays.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Total Weeks</span>
                  <span className="font-bold text-lg text-purple-900 dark:text-purple-100">{result.weeks.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">Total Hours</span>
                  <span className="font-bold text-lg text-green-900 dark:text-green-100">{result.totalHours.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-800">
                  <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Total Minutes</span>
                  <span className="font-bold text-lg text-orange-900 dark:text-orange-100">{result.totalMinutes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/30 rounded-lg border border-pink-200 dark:border-pink-800">
                  <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Total Seconds</span>
                  <span className="font-bold text-lg text-pink-900 dark:text-pink-100">{result.totalSeconds.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/30 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Decimal Years</span>
                  <span className="font-bold text-lg text-indigo-900 dark:text-indigo-100">{result.decimalYears.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Answer Summary */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border-2 border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {result.years} Years, {result.months} Months, {result.days} Days
                </div>
                <div className="text-lg text-muted-foreground mb-2">
                  Total: {result.totalDays.toLocaleString()} Days
                </div>
                <div className="text-sm text-muted-foreground">
                  {result.daysUntilNextBirthday > 0 ? `${result.daysUntilNextBirthday} days until next birthday` : 'Happy Birthday!'}
                </div>
              </div>
            </div>

            {/* Birthday Information */}
            <div className="space-y-4 p-4 sm:p-6 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl border-2 border-pink-200 dark:border-pink-800">
              <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-pink-700 dark:text-pink-300">
                <Gift className="h-4 w-4 sm:h-5 sm:w-5" />
                Birthday Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-pink-200 dark:border-pink-700">
                    <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Days until next birthday</span>
                    <span className="font-bold text-sm text-pink-900 dark:text-pink-100">{result.daysUntilNextBirthday} days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-pink-200 dark:border-pink-700">
                    <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Age Last Birthday</span>
                    <span className="font-bold text-sm text-pink-900 dark:text-pink-100">{result.ageLastBirthday}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-pink-200 dark:border-pink-700">
                    <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Age Next Birthday</span>
                    <span className="font-bold text-sm text-pink-900 dark:text-pink-100">{result.ageNextBirthday}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-pink-200 dark:border-pink-700">
                    <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Age Nearest Birthday</span>
                    <span className="font-bold text-sm text-pink-900 dark:text-pink-100">{result.ageNearestBirthday}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-pink-200 dark:border-pink-700">
                    <span className="text-sm font-medium text-pink-700 dark:text-pink-300">Age on Today</span>
                    <span className="font-bold text-sm text-pink-900 dark:text-pink-100">{result.ageOnToday}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shareable Link */}
            <div className="space-y-4 p-4 sm:p-6 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h3 className="text-base sm:text-lg font-semibold text-cyan-700 dark:text-cyan-300">Save this link to check age given DOB:</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={result.shareableLink}
                  readOnly
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm border-2 border-cyan-200 dark:border-cyan-700 rounded-lg bg-white/50 dark:bg-slate-800/50 text-cyan-900 dark:text-cyan-100"
                />
                <Button
                  onClick={copyLink}
                  variant="outline"
                  size="sm"
                  className="h-10 sm:h-12 px-3 sm:px-4 border-2 border-cyan-200 dark:border-cyan-700 hover:bg-cyan-100 dark:hover:bg-cyan-900/30"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                onClick={copyResult}
                variant="outline"
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold hover:bg-green-100 dark:hover:bg-green-900/30 transition-all duration-300 border-2 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Result Copied!</span>
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
              <Button
                onClick={shareResult}
                variant="outline"
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 border-2 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300"
              >
                <Share2 className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Share Results</span>
                <span className="sm:hidden">Share</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <AdSpace slot="content" className="h-32" />
    </div>
  )
}