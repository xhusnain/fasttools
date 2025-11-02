"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function AnniversaryCalculator() {
  const [startDate, setStartDate] = useState("")
  const [relationshipStartDate, setRelationshipStartDate] = useState<Date | null>(null)
  const [result, setResult] = useState<{
    years: number
    months: number
    days: number
    hours: number
    minutes: number
    seconds: number
    totalDays: number
    totalHours: number
    totalMinutes: number
    totalSeconds: number
    nextAnniversary: string
    daysUntilNext: number
  } | null>(null)
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
      {/* Main Calculator Card */}
      <Card className="border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl">
        <CardHeader className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center shadow-lg">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white fill-white" />
            </div>
            <div className="text-center sm:text-left">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                Anniversary Calculator
              </CardTitle>
              <CardDescription className="text-white/80 text-sm sm:text-base">
                Calculate how long you've been together and when your next anniversary is
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="startDate" className="text-sm font-medium text-white">
                Anniversary Start Date
              </Label>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="h-10 sm:h-11 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60"
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            <Button
              onClick={calculateAnniversary}
              disabled={!startDate || isCalculating}
              className="w-full h-10 sm:h-11 text-sm font-medium bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isCalculating ? (
                <>
                  <LoadingSpinner className="mr-2" />
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
            </Button>
          </div>

          {result && (
            <div className="p-4 sm:p-6 rounded-lg bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-400/30 space-y-4 sm:space-y-6 animate-fade-in">
              <div className="text-center space-y-2 sm:space-y-3">
                <div className="relative">
                  <Heart className="h-8 w-8 sm:h-12 sm:w-12 text-foreground fill-pink-300 mx-auto" />
                  {isLiveTimer && (
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
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
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 text-center">
                  <p className={`text-xl sm:text-2xl font-bold text-foreground transition-all duration-500 ${isLiveTimer ? 'transform' : ''}`}>{result.years}</p>
                  <p className="text-xs sm:text-sm text-foreground">Years</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 text-center">
                  <p className={`text-xl sm:text-2xl font-bold text-foreground transition-all duration-500 ${isLiveTimer ? 'transform' : ''}`}>{result.months}</p>
                  <p className="text-xs sm:text-sm text-foreground">Months</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/30 text-center">
                  <p className={`text-xl sm:text-2xl font-bold text-heading-accent transition-all duration-500 ${isLiveTimer ? 'transform' : ''}`}>{result.days}</p>
                  <p className="text-xs sm:text-sm text-heading-accent">Days</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/90/20 border border-orange-400/30 text-center">
                  <p className={`text-xl sm:text-2xl font-bold text-foreground transition-all duration-500 ${isLiveTimer ? 'transform' : ''}`}>{result.hours}</p>
                  <p className="text-xs sm:text-sm text-foreground">Hours</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-400/30 text-center">
                  <p className={`text-xl sm:text-2xl font-bold text-foreground transition-all duration-500 ${isLiveTimer ? 'transform' : ''}`}>{result.minutes}</p>
                  <p className="text-xs sm:text-sm text-foreground">Minutes</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 text-center">
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
                <Button
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
                </Button>
                <Button
                  onClick={shareResult}
                  className="flex-1 h-10 sm:h-11 text-sm font-medium bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="hidden sm:inline">Share Result</span>
                  <span className="sm:hidden">Share</span>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
