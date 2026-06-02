"use client"

import { useState, useEffect } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"

import { Calendar, Copy, Share2, Check, Clock, Heart, Gift, Target, Settings, Calculator, Sparkles } from "lucide-react"


import { AgeResult } from "@/types/calculator-types/age-calculator.types"

export function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("")
  const [targetDate, setTargetDate] = useState("")
  const [result, setResult] = useState<AgeResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [ticker, setTicker] = useState(0)

  // Live ticker effect
  useEffect(() => {
    if (!result) return
    const interval = setInterval(() => {
      setTicker(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [result])

  const getWesternZodiac = (day: number, month: number) => {
    // month is 0-11
    if ((month === 0 && day <= 19) || (month === 11 && day >= 22)) return { sign: "Capricorn", icon: "♑" };
    if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) return { sign: "Aquarius", icon: "♒" };
    if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) return { sign: "Pisces", icon: "♓" };
    if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) return { sign: "Aries", icon: "♈" };
    if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) return { sign: "Taurus", icon: "♉" };
    if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) return { sign: "Gemini", icon: "♊" };
    if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) return { sign: "Cancer", icon: "♋" };
    if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) return { sign: "Leo", icon: "♌" };
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return { sign: "Virgo", icon: "♍" };
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return { sign: "Libra", icon: "♎" };
    if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) return { sign: "Scorpio", icon: "♏" };
    if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) return { sign: "Sagittarius", icon: "♐" };

    return { sign: "Unknown", icon: "❓" }
  }

  const getChineseZodiac = (year: number) => {
    const animals = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"]
    return animals[year % 12]
  }

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


      // Fun Stats
      const totalMinutesCalc = totalMinutes // Store for state
      const totalBreaths = Math.floor(totalMinutes * 16) // Avg 16 breaths per min
      const totalHeartbeats = Math.floor(totalMinutes * 80) // Avg 80 beats per min

      // Zodiacs
      const western = getWesternZodiac(birth.getDate(), birth.getMonth())
      const chinese = getChineseZodiac(birth.getFullYear())

      // Weekday
      const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      const birthWeekday = weekdays[birth.getDay()]

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
        westernZodiac: `${western.icon} ${western.sign}`,
        chineseZodiac: chinese,
        birthWeekday,
        totalBreaths,
        totalHeartbeats
      })
      setTicker(0) // Reset ticker
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
    void navigator.clipboard.writeText(text)
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
    void navigator.clipboard.writeText(result.shareableLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      {/* Today's Date Display */}
      <GCard className="shadow-sm border-border bg-card">
        <GCardContent className="p-6">
          <div className="flex items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground font-medium">Today is:</span>
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
        </GCardContent>
      </GCard>

      <GCard className="shadow-sm border-border bg-card">
        <GCardHeader className="pb-4">
          <GCardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            Age Calculator
          </GCardTitle>
          <GCardDescription className="text-base">
            Calculate your exact age in years, months, days, hours, minutes, and seconds with precision and accuracy
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-8">
          {/* Date Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3">
              <GLabel htmlFor="birthdate" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                Date of Birth
              </GLabel>
              <input
                id="birthdate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                className="flex h-10 sm:h-12 w-full rounded-lg border border-input bg-white px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-primary/40"
              />
            </div>

            <div className="space-y-3">
              <GLabel htmlFor="targetdate" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                Find Age on (Optional)
              </GLabel>
              <input
                id="targetdate"
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                min={birthDate}
                className="flex h-10 sm:h-12 w-full rounded-lg border border-input bg-white px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-primary/40"
              />
            </div>
          </div>

          <GButton
            onClick={calculateAge}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-sm"
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
        </GCardContent>
      </GCard>

      {result && !isCalculating && (
        <GCard className="shadow-sm border-border animate-fade-in-up bg-card">
          <GCardHeader className="pb-4">
            <GCardTitle className="text-2xl flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              Your Age Results
            </GCardTitle>
            <GCardDescription className="text-base">
              Born on: {new Date(birthDate).toLocaleDateString()} |
              Age on: {targetDate ? new Date(targetDate).toLocaleDateString() : 'Today'}
            </GCardDescription>
          </GCardHeader>
          <GCardContent className="space-y-8">
            {/* Main Age Display */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-4 sm:p-6 rounded-lg bg-card border border-border shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">{result.years}</div>
                <div className="text-xs sm:text-sm font-semibold text-foreground">Years</div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-lg bg-card border border-border shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">{result.months}</div>
                <div className="text-xs sm:text-sm font-semibold text-foreground">Months</div>
              </div>
              <div className="text-center p-4 sm:p-6 rounded-lg bg-card border border-border shadow-sm">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">{result.days}</div>
                <div className="text-xs sm:text-sm font-semibold text-primary">Days</div>
              </div>
            </div>

            {/* Live Ticker & Progress Bar */}
            <div className="space-y-6">
              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Next Birthday Countdown</span>
                  <span className="text-sm font-bold text-primary">{result.daysUntilNextBirthday} Days Left</span>
                </div>
                <div className="w-full bg-secondary/30 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-1000"
                    style={{ width: `${((365 - result.daysUntilNextBirthday) / 365) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-card border border-border rounded-xl flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium">Alive for</div>
                    <div className="text-lg font-bold tabular-nums">
                      {(result.totalSeconds + ticker).toLocaleString()}
                      <span className="text-xs font-normal text-muted-foreground ml-1">seconds</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-card border border-border rounded-xl flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium">Born on a</div>
                    <div className="text-lg font-bold">{result.birthWeekday}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Stats & Zodiac */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Fun Facts
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-card border border-border rounded-lg flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Approx. Breaths</span>
                    <span className="font-bold">{(result.totalBreaths + (ticker * 0.27)).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="p-3 bg-card border border-border rounded-lg flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Approx. Heartbeats</span>
                    <span className="font-bold">{(result.totalHeartbeats + (ticker * 1.3)).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Astrology
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-card border border-border rounded-lg text-center">
                    <div className="text-xs text-muted-foreground mb-1">Western Zodiac</div>
                    <div className="font-bold text-lg">{result.westernZodiac}</div>
                  </div>
                  <div className="p-3 bg-card border border-border rounded-lg text-center">
                    <div className="text-xs text-muted-foreground mb-1">Chinese Zodiac</div>
                    <div className="font-bold text-lg">{result.chineseZodiac}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-4 p-4 sm:p-6 bg-card rounded-lg border border-border">
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
                  <span className="text-sm font-medium text-primary">Total Hours</span>
                  <span className="font-bold text-lg text-primary">{result.totalHours.toLocaleString()}</span>
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
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
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
            <div className="space-y-4 p-4 sm:p-6 bg-card rounded-lg border border-border">
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
            <div className="space-y-4 p-4 sm:p-6 bg-card rounded-lg border border-border">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">Save this link to check age given DOB:</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={result.shareableLink}
                  readOnly
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm border border-input rounded-lg bg-white text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25"
                />
                <GButton
                  onClick={copyLink}
                  variant="outline"
                  size="sm"
                  className="h-10 sm:h-12 px-3 sm:px-4"
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
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold"
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
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold"
              >
                <Share2 className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Share Results</span>
                <span className="sm:hidden">Share</span>
              </GButton>
            </div>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
