"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GButton } from "@/components/globalcomponents/gbutton"
import { Label } from "@/components/ui/label"
import { Calendar, Copy, Share2, Check, Clock, Heart, Gift, Target, Settings, Calculator, Sparkles } from "lucide-react"


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
      <Card className="shadow-lg border-border bg-card">
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

      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
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

          <GButton
            onClick={calculateAge}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            disabled={!birthDate || isCalculating}
            isLoading={isCalculating}
          >
            {isCalculating ? (
              <>
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
          </GButton>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up bg-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Heart className="h-6 w-6 text-heading-accent" />
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
              <div className="text-center p-4 sm:p-6 rounded-xl bg-card border-2 border-border hover:shadow-lg transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">{result.years}</div>
                <div className="text-xs sm:text-sm font-semibold text-foreground">Years</div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-xl bg-card border-2 border-border hover:shadow-lg transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">{result.months}</div>
                <div className="text-xs sm:text-sm font-semibold text-foreground">Months</div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-xl bg-card border-2 border-border hover:shadow-lg transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-heading-accent mb-1 sm:mb-2">{result.days}</div>
                <div className="text-xs sm:text-sm font-semibold text-heading-accent">Days</div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-4 p-4 sm:p-6 bg-card rounded-xl border-2 border-border">
              <h3 className="text-base sm:text-lg font-semibold text-center mb-3 sm:mb-4 flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Detailed Time Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                  <span className="text-sm font-medium text-foreground">Total Days</span>
                  <span className="font-bold text-lg text-foreground">{result.totalDays.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                  <span className="text-sm font-medium text-foreground">Total Weeks</span>
                  <span className="font-bold text-lg text-foreground">{result.weeks.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                  <span className="text-sm font-medium text-heading-accent">Total Hours</span>
                  <span className="font-bold text-lg text-heading-accent">{result.totalHours.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                  <span className="text-sm font-medium text-foreground">Total Minutes</span>
                  <span className="font-bold text-lg text-foreground">{result.totalMinutes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                  <span className="text-sm font-medium text-foreground">Total Seconds</span>
                  <span className="font-bold text-lg text-foreground">{result.totalSeconds.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                  <span className="text-sm font-medium text-foreground">Decimal Years</span>
                  <span className="font-bold text-lg text-foreground">{result.decimalYears.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Answer Summary */}
            <div className="p-6 bg-card rounded-xl border-2 border-primary/20">
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
            <div className="space-y-4 p-4 sm:p-6 bg-card rounded-xl border-2 border-border">
              <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2 text-foreground">
                <Gift className="h-4 w-4 sm:h-5 sm:w-5" />
                Birthday Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                    <span className="text-sm font-medium text-foreground">Days until next birthday</span>
                    <span className="font-bold text-sm text-foreground">{result.daysUntilNextBirthday} days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                    <span className="text-sm font-medium text-foreground">Age Last Birthday</span>
                    <span className="font-bold text-sm text-foreground">{result.ageLastBirthday}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                    <span className="text-sm font-medium text-foreground">Age Next Birthday</span>
                    <span className="font-bold text-sm text-foreground">{result.ageNextBirthday}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                    <span className="text-sm font-medium text-foreground">Age Nearest Birthday</span>
                    <span className="font-bold text-sm text-foreground">{result.ageNearestBirthday}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-border">
                    <span className="text-sm font-medium text-foreground">Age on Today</span>
                    <span className="font-bold text-sm text-foreground">{result.ageOnToday}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shareable Link */}
            <div className="space-y-4 p-4 sm:p-6 bg-card rounded-xl border-2 border-border">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">Save this link to check age given DOB:</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={result.shareableLink}
                  readOnly
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm border-2 border-border rounded-lg bg-background text-foreground"
                />
                <GButton
                  onClick={copyLink}
                  variant="outline"
                  size="sm"
                  className="h-10 sm:h-12 px-3 sm:px-4 border-2 border-border"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </GButton>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <GButton
                onClick={copyResult}
                variant="outline"
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-300 border-2 border-border"
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
              </GButton>
              <GButton
                onClick={shareResult}
                variant="outline"
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-300 border-2 border-border"
              >
                <Share2 className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Share Results</span>
                <span className="sm:hidden">Share</span>
              </GButton>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}