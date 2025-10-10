"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar, Copy, Share2, Check, Clock, Heart, Gift, Target } from "lucide-react"
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
      const shareableLink = `${window.location.origin}/tools/age-calculator?dob=${birthDate}${targetDate ? `&target=${targetDate}` : ''}`

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
    <div className="space-y-6">
      <Card className="shadow-lg border-border hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Calendar className="h-5 w-5 text-primary" />
            Age Calculator
          </CardTitle>
          <CardDescription className="text-sm">Calculate your exact age in years, months, days, hours, minutes, and seconds</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="birthdate" className="text-sm font-medium">
                Date of Birth
              </Label>
              <input
                id="birthdate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetdate" className="text-sm font-medium">
                Find Age on (Optional)
              </Label>
              <input
                id="targetdate"
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                min={birthDate}
                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
              />
            </div>
          </div>

          <Button
            onClick={calculateAge}
            className="w-full h-11 text-sm font-medium shadow-md hover:shadow-lg transition-all"
            disabled={!birthDate || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Calculating...
              </>
            ) : (
              <>
                <Target className="mr-2 h-4 w-4" />
                Calculate Age
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <>
          <Card className="shadow-lg border-primary/20 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Your Age Results
              </CardTitle>
              <CardDescription className="text-sm">
                Born on: {new Date(birthDate).toLocaleDateString()} | 
                Age on: {targetDate ? new Date(targetDate).toLocaleDateString() : 'Today'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Main Age Display */}
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

              {/* Age in Different Time Units */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Age in Different Time Units
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold">{result.decimalYears.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">Decimal Years</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold">{result.years}Y {result.months}M {result.days}D</div>
                    <div className="text-xs text-muted-foreground">Years & Months & Days</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold">{Math.floor(result.months + result.years * 12)}M {result.days}D</div>
                    <div className="text-xs text-muted-foreground">Months & Days</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-lg font-bold">{result.weeks}W {result.days % 7}D</div>
                    <div className="text-xs text-muted-foreground">Weeks & Days</div>
                  </div>
                </div>
              </div>

              {/* Detailed Time Breakdown */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold">Detailed Time Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="text-2xl font-bold text-blue-600">{result.totalDays.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Total Days</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                    <div className="text-2xl font-bold text-green-600">≈{Math.floor(result.totalHours / 1000).toLocaleString()}K</div>
                    <div className="text-sm text-muted-foreground">Hours*</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-purple-50 border border-purple-200">
                    <div className="text-2xl font-bold text-purple-600">≈{Math.floor(result.totalMinutes / 1000000).toLocaleString()}M</div>
                    <div className="text-sm text-muted-foreground">Minutes*</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  * These are approximations. Find exact age in Years, Days, Hours, Minutes and Seconds
                </p>
              </div>

              {/* Birthday Information */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Gift className="h-4 w-4" />
                  Birthday Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Days until next birthday</span>
                      <span className="font-semibold text-sm">{result.daysUntilNextBirthday} days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Age Last Birthday</span>
                      <span className="font-semibold text-sm">{result.ageLastBirthday}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Age Next Birthday</span>
                      <span className="font-semibold text-sm">{result.ageNextBirthday}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Age Nearest Birthday</span>
                      <span className="font-semibold text-sm">{result.ageNearestBirthday}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Age on Today</span>
                      <span className="font-semibold text-sm">{result.ageOnToday}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shareable Link */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold">Save this link to check age given DOB:</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={result.shareableLink}
                    readOnly
                    className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-muted"
                  />
                  <Button
                    onClick={copyLink}
                    variant="outline"
                    size="sm"
                    className="h-10"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={copyResult}
                  variant="outline"
                  className="flex-1 h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Results
                    </>
                  )}
                </Button>
                <Button
                  onClick={shareResult}
                  variant="outline"
                  className="flex-1 h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          <AdSpace slot="content" className="h-32" />
        </>
      )}
    </div>
  )
}