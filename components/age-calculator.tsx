"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar, Copy, Share2, Check } from "lucide-react"
import { AdSpace } from "@/components/ad-space"
import { LoadingSpinner } from "@/components/loading-spinner"

interface AgeResult {
  years: number
  months: number
  days: number
  totalDays: number
  nextBirthday: string
}

export function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("")
  const [result, setResult] = useState<AgeResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateAge = () => {
    if (!birthDate) return

    setIsCalculating(true)

    // Simulate calculation delay for smooth UX
    setTimeout(() => {
      const birth = new Date(birthDate)
      const today = new Date()

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

      const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
      if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1)
      }
      const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

      setResult({
        years,
        months,
        days,
        totalDays,
        nextBirthday: `${daysUntilBirthday} days`,
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `I am ${result.years} years, ${result.months} months, and ${result.days} days old!`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareResult = async () => {
    if (!result) return
    const text = `I am ${result.years} years, ${result.months} months, and ${result.days} days old!`

    if (navigator.share) {
      try {
        await navigator.share({ text, title: "My Age" })
      } catch (err) {
        // Share cancelled
      }
    } else {
      copyResult()
    }
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-border hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Calendar className="h-5 w-5 text-primary" />
            Calculate Your Age
          </CardTitle>
          <CardDescription className="text-sm">Enter your birth date to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="birthdate" className="text-sm font-medium">
              Birth Date
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
              "Calculate Age"
            )}
          </Button>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <>
          <Card className="shadow-lg border-primary/20 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-xl">Your Age</CardTitle>
              <CardDescription className="text-sm">Calculated as of today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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

              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Days</span>
                  <span className="font-semibold text-sm">{result.totalDays.toLocaleString()} days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Next Birthday</span>
                  <span className="font-semibold text-sm">{result.nextBirthday}</span>
                </div>
              </div>

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
                      Copy
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
