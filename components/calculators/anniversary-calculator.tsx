"use client"

import { useState, useEffect } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"

import { Heart, Copy, Check } from "lucide-react"
import Image from "next/image"


export interface AnniversaryResult {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
  totalDays: number
  totalMonths: number
  totalHours: number
  totalMinutes: number
  totalSeconds: number
  nextAnniversary: string
  daysUntilNext: number
}

export function AnniversaryCalculator() {
  const [startDate, setStartDate] = useState("")
  const [relationshipStartDate, setRelationshipStartDate] = useState<Date | null>(null)
  const [result, setResult] = useState<AnniversaryResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isLiveTimer, setIsLiveTimer] = useState(false)

  const calculateAnniversary = () => {
    if (!startDate) return

    setIsCalculating(true)

    setTimeout(() => {
      const start = new Date(startDate)
      setRelationshipStartDate(start)
      setIsLiveTimer(true)
      setIsCalculating(false)
    }, 800)
  }

  const updateLiveTimer = () => {
    if (!relationshipStartDate) return

    const today = new Date()

    // Calculate total time difference in milliseconds
    const totalTimeDiff = today.getTime() - relationshipStartDate.getTime()

    // Calculate total units
    const totalSeconds = Math.floor(totalTimeDiff / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)
    const totalHours = Math.floor(totalMinutes / 60)
    const totalDays = Math.floor(totalHours / 24)

    // Calculate total months (approximate) or precise based on years * 12 + months
    // A more precise way for total months:
    const yearDiff = today.getFullYear() - relationshipStartDate.getFullYear()
    const monthDiff = today.getMonth() - relationshipStartDate.getMonth()
    let totalMonths = yearDiff * 12 + monthDiff
    if (today.getDate() < relationshipStartDate.getDate()) {
      totalMonths--
    }

    // Calculate years, months, days
    let years = today.getFullYear() - relationshipStartDate.getFullYear()
    let months = today.getMonth() - relationshipStartDate.getMonth()
    let days = today.getDate() - relationshipStartDate.getDate()

    if (days < 0) {
      months--
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
      days += prevMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    // Calculate hours, minutes, seconds from today
    const hours = today.getHours()
    const minutes = today.getMinutes()
    const seconds = today.getSeconds()

    // Calculate next anniversary
    let nextAnniversary = new Date(today.getFullYear(), relationshipStartDate.getMonth(), relationshipStartDate.getDate())
    if (nextAnniversary < today) {
      nextAnniversary = new Date(today.getFullYear() + 1, relationshipStartDate.getMonth(), relationshipStartDate.getDate())
    }

    const daysUntilNext = Math.floor((nextAnniversary.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    setResult({
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
      totalDays,
      totalMonths,
      totalHours,
      totalMinutes,
      totalSeconds,
      nextAnniversary: nextAnniversary.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      daysUntilNext,
    })
  }


  // Live timer effect
  useEffect(() => {
    if (!isLiveTimer || !relationshipStartDate) return

    // Initial calculation
    updateLiveTimer()

    // Set up interval to update every second
    const interval = setInterval(updateLiveTimer, 1000)

    return () => clearInterval(interval)
  }, [isLiveTimer, relationshipStartDate])

  const copyResult = () => {
    if (!result) return
    const text = `We've been together for ${result.years} years, ${result.months} months, ${result.days} days, ${result.hours} hours, ${result.minutes} minutes, and ${result.seconds} seconds! ❤️`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareResult = () => {
    if (!result) return
    const text = `We've been together for ${result.years} years, ${result.months} months, ${result.days} days, ${result.hours} hours, ${result.minutes} minutes, and ${result.seconds} seconds! ❤️`
    if (navigator.share) {
      navigator.share({ text })
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      {/* Main Calculator GCard */}
      <GCard className="border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl">
        <GCardHeader className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-destructive to-primary flex items-center justify-center shadow-lg">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white fill-white" />
            </div>
            <div className="text-center sm:text-left">
              <GCardTitle className="text-xl sm:text-2xl font-bold text-white">
                Anniversary Calculator
              </GCardTitle>
              <GCardDescription className="text-white/80 text-sm sm:text-base">
                Calculate how long you've been together and when your next anniversary is
              </GCardDescription>
            </div>
          </div>
        </GCardHeader>
        <GCardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <GLabel htmlFor="startDate" className="text-sm font-medium text-white">
                Anniversary Start Date
              </GLabel>
              <GInput
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="h-10 sm:h-11 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60"
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            <GButton
              onClick={calculateAnniversary}
              disabled={!startDate || isCalculating}
              isLoading={isCalculating}
              className="w-full h-10 sm:h-11 text-sm font-medium bg-gradient-to-r from-destructive to-primary hover:from-destructive/90 hover:to-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isCalculating ? (
                <>
                  <span className="hidden sm:inline">Calculating...</span>
                  <span className="sm:hidden">Calculating</span>
                </>
              ) : (
                <>
                  <Heart className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Calculate Anniversary</span>
                  <span className="sm:hidden">Calculate</span>
                </>
              )}
            </GButton>


          </div>

          <div className="flex justify-center py-4">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 opacity-90 hover:opacity-100 transition-opacity duration-500">
              <Image
                src="/images/tools/anniversary_love_theme.png"
                alt="Love and Time"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {result && (
            <div className="p-4 sm:p-6 rounded-lg bg-gradient-to-br from-destructive/20 to-primary/20 border border-destructive/30 space-y-4 sm:space-y-6 animate-fade-in">
              <div className="text-center space-y-2 sm:space-y-3">
                <div className="relative">
                  <Heart className="h-8 w-8 sm:h-12 sm:w-12 text-foreground fill-destructive/50 mx-auto" />
                  {isLiveTimer && (
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-secondary-accent rounded-full border-2 border-white animate-pulse"></div>
                  )}
                </div>
                <p className="text-sm sm:text-base text-foreground">
                  {isLiveTimer ? "Live Time Together" : "Time Together"}
                </p>
                {isLiveTimer && (
                  <p className="text-xs text-heading-accent animate-pulse">Updating every second</p>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/30 border border-primary/30 text-center">
                  <p className={`text-xl sm:text-2xl font-bold text-foreground transition-all duration-500 ${isLiveTimer ? 'transform' : ''}`}>{result.years}</p>
                  <p className="text-xs sm:text-sm text-foreground">Years</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-accent/20 to-accent/30 border border-accent/30 text-center">
                  <p className={`text-xl sm:text-2xl font-bold text-foreground transition-all duration-500 ${isLiveTimer ? 'transform' : ''}`}>{result.months}</p>
                  <p className="text-xs sm:text-sm text-foreground">Months</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-secondary-accent/20 to-secondary-accent/30 border border-secondary-accent/30 text-center">
                  <p className={`text-xl sm:text-2xl font-bold text-heading-accent transition-all duration-500 ${isLiveTimer ? 'transform' : ''}`}>{result.days}</p>
                  <p className="text-xs sm:text-sm text-heading-accent">Days</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-tertiary-accent/20 to-tertiary-accent/30 border border-tertiary-accent/30 text-center">
                  <p className={`text-xl sm:text-2xl font-bold text-foreground transition-all duration-500 ${isLiveTimer ? 'transform' : ''}`}>{result.hours}</p>
                  <p className="text-xs sm:text-sm text-foreground">Hours</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-destructive/20 to-destructive/30 border border-destructive/30 text-center">
                  <p className={`text-xl sm:text-2xl font-bold text-foreground transition-all duration-500 ${isLiveTimer ? 'transform' : ''}`}>{result.minutes}</p>
                  <p className="text-xs sm:text-sm text-foreground">Minutes</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/30 border border-primary/30 text-center">
                  <p className={`text-xl sm:text-2xl font-bold text-foreground transition-all duration-500 ${isLiveTimer ? 'transform' : ''}`}>{result.seconds}</p>
                  <p className="text-xs sm:text-sm text-foreground">Seconds</p>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 space-y-2 sm:space-y-3">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-white/70">Total Days:</span>
                  <span className="font-medium text-white">{result.totalDays.toLocaleString()} days</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-white/70">Total Months:</span>
                  <span className="font-medium text-white">{result.totalMonths.toLocaleString()} months</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-white/70">Total Hours:</span>
                  <span className="font-medium text-white">{result.totalHours.toLocaleString()} hours</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-white/70">Total Minutes:</span>
                  <span className="font-medium text-white">{result.totalMinutes.toLocaleString()} minutes</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-white/70">Total Seconds:</span>
                  <span className="font-medium text-white">{result.totalSeconds.toLocaleString()} seconds</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-white/70">Next Anniversary:</span>
                  <span className="font-medium text-white">{result.nextAnniversary}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-white/70">Days Until Next:</span>
                  <span className="font-medium text-white">{result.daysUntilNext} days</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <GButton
                  onClick={copyResult}
                  variant="outline"
                  className="flex-1 h-10 sm:h-11 text-sm font-medium bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">Copied!</span>
                      <span className="sm:hidden">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      <span className="hidden sm:inline">Copy</span>
                      <span className="sm:hidden">Copy</span>
                    </>
                  )}
                </GButton>
                <GButton
                  onClick={shareResult}
                  className="flex-1 h-10 sm:h-11 text-sm font-medium bg-gradient-to-r from-destructive to-primary hover:from-destructive/90 hover:to-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="hidden sm:inline">Share Result</span>
                  <span className="sm:hidden">Share</span>
                </GButton>
              </div>
            </div>
          )}

          {result && (
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-200/20 backdrop-blur-sm animate-fade-in text-center">
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-full bg-pink-500/20">
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500 animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-serif text-white mb-2">Love Message from FastTools</h3>
              <p className="text-pink-100 font-light italic text-lg leading-relaxed">
                "Calculate your love story today and see exactly how long you’ve been building your forever."
              </p>
            </div>
          )}

        </GCardContent>
      </GCard>
    </div >
  )
}
