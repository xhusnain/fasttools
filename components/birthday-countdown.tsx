"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cake, Copy, Check } from "lucide-react"

export function BirthdayCountdown() {
  const [birthDate, setBirthDate] = useState("")
  const [result, setResult] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
    nextBirthday: string
  } | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!birthDate) return

    const interval = setInterval(() => {
      calculateCountdown()
    }, 1000)

    return () => clearInterval(interval)
  }, [birthDate])

  const calculateCountdown = () => {
    if (!birthDate) return

    const today = new Date()
    const birth = new Date(birthDate)

    // Get next birthday
    let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())

    if (nextBirthday < today) {
      nextBirthday = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate())
    }

    const diff = nextBirthday.getTime() - today.getTime()

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    setResult({
      days,
      hours,
      minutes,
      seconds,
      nextBirthday: nextBirthday.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    })
  }

  const copyResult = () => {
    if (!result) return
    const text = `Only ${result.days} days until my birthday on ${result.nextBirthday}! 🎂`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareResult = () => {
    if (!result) return
    const text = `Only ${result.days} days until my birthday on ${result.nextBirthday}! 🎂`
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
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
              <Cake className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                Birthday Countdown
              </CardTitle>
              <CardDescription className="text-white/80 text-sm sm:text-base">
                Count down to your next birthday in real-time
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="birthDate" className="text-sm font-medium text-white">
                Your Birth Date
              </Label>
              <Input
                id="birthDate"
                type="date"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value)
                  calculateCountdown()
                }}
                className="h-10 sm:h-11 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60"
                max={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>

          {result && (
            <div className="p-4 sm:p-6 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/30 space-y-4 sm:space-y-6 animate-fade-in">
              <div className="text-center space-y-2 sm:space-y-3">
                <Cake className="h-8 w-8 sm:h-12 sm:w-12 text-foreground mx-auto" />
                <p className="text-sm sm:text-base text-foreground">Next Birthday: {result.nextBirthday}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 text-center">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{result.days}</p>
                  <p className="text-xs sm:text-sm text-foreground">Days</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 text-center">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{result.hours}</p>
                  <p className="text-xs sm:text-sm text-foreground">Hours</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/30 text-center">
                  <p className="text-xl sm:text-2xl font-bold text-heading-accent">{result.minutes}</p>
                  <p className="text-xs sm:text-sm text-heading-accent">Minutes</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/90/20 border border-orange-400/30 text-center">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{result.seconds}</p>
                  <p className="text-xs sm:text-sm text-foreground">Seconds</p>
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
                  className="flex-1 h-10 sm:h-11 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="hidden sm:inline">Share Countdown</span>
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
