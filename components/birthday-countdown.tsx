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
    <Card className="border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">Birthday Countdown</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Count down to your next birthday in real-time
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="birthDate" className="text-sm font-medium text-foreground">
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
              className="h-11 text-sm"
            />
          </div>
        </div>

        {result && (
          <div className="p-6 rounded-lg bg-accent border border-primary/10 space-y-4 animate-fade-in">
            <div className="text-center space-y-2">
              <Cake className="h-12 w-12 text-primary mx-auto" />
              <p className="text-sm text-muted-foreground">Next Birthday: {result.nextBirthday}</p>
            </div>

            <div className="grid grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-card border border-border text-center">
                <p className="text-2xl font-bold text-primary">{result.days}</p>
                <p className="text-xs text-muted-foreground">Days</p>
              </div>
              <div className="p-3 rounded-lg bg-card border border-border text-center">
                <p className="text-2xl font-bold text-primary">{result.hours}</p>
                <p className="text-xs text-muted-foreground">Hours</p>
              </div>
              <div className="p-3 rounded-lg bg-card border border-border text-center">
                <p className="text-2xl font-bold text-primary">{result.minutes}</p>
                <p className="text-xs text-muted-foreground">Minutes</p>
              </div>
              <div className="p-3 rounded-lg bg-card border border-border text-center">
                <p className="text-2xl font-bold text-primary">{result.seconds}</p>
                <p className="text-xs text-muted-foreground">Seconds</p>
              </div>
            </div>

            <div className="flex gap-2">
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
                    Copy
                  </>
                )}
              </Button>
              <Button
                onClick={shareResult}
                className="flex-1 h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all"
              >
                Share Countdown
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
