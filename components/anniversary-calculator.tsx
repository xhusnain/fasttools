"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function AnniversaryCalculator() {
  const [startDate, setStartDate] = useState("")
  const [result, setResult] = useState<{
    years: number
    months: number
    days: number
    totalDays: number
    nextAnniversary: string
    daysUntilNext: number
  } | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [copied, setCopied] = useState(false)

  const calculateAnniversary = () => {
    if (!startDate) return

    setIsCalculating(true)

    setTimeout(() => {
      const start = new Date(startDate)
      const today = new Date()

      let years = today.getFullYear() - start.getFullYear()
      let months = today.getMonth() - start.getMonth()
      let days = today.getDate() - start.getDate()

      if (days < 0) {
        months--
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        days += prevMonth.getDate()
      }

      if (months < 0) {
        years--
        months += 12
      }

      const totalDays = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))

      // Calculate next anniversary
      let nextAnniversary = new Date(today.getFullYear(), start.getMonth(), start.getDate())
      if (nextAnniversary < today) {
        nextAnniversary = new Date(today.getFullYear() + 1, start.getMonth(), start.getDate())
      }

      const daysUntilNext = Math.floor((nextAnniversary.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

      setResult({
        years,
        months,
        days,
        totalDays,
        nextAnniversary: nextAnniversary.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        daysUntilNext,
      })
      setIsCalculating(false)
    }, 800)
  }

  const copyResult = () => {
    if (!result) return
    const text = `We've been together for ${result.years} years, ${result.months} months, and ${result.days} days! ❤️`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareResult = () => {
    if (!result) return
    const text = `We've been together for ${result.years} years, ${result.months} months, and ${result.days} days! ❤️`
    if (navigator.share) {
      navigator.share({ text })
    }
  }

  return (
    <Card className="border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">Anniversary Calculator</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Calculate how long you've been together and when your next anniversary is
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="startDate" className="text-sm font-medium text-foreground">
              Anniversary Start Date
            </Label>
            <Input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="h-11 text-sm"
              max={new Date().toISOString().split("T")[0]}
            />
          </div>

          <Button
            onClick={calculateAnniversary}
            disabled={!startDate || isCalculating}
            className="w-full h-11 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {isCalculating ? (
              <>
                <LoadingSpinner className="mr-2" />
                Calculating...
              </>
            ) : (
              <>
                <Heart className="mr-2 h-4 w-4" />
                Calculate Anniversary
              </>
            )}
          </Button>
        </div>

        {result && (
          <div className="p-6 rounded-lg bg-accent border border-primary/10 space-y-4 animate-fade-in">
            <div className="text-center space-y-2">
              <Heart className="h-12 w-12 text-primary fill-primary mx-auto" />
              <p className="text-sm text-muted-foreground">Time Together</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-card border border-border text-center">
                <p className="text-2xl font-bold text-primary">{result.years}</p>
                <p className="text-xs text-muted-foreground">Years</p>
              </div>
              <div className="p-3 rounded-lg bg-card border border-border text-center">
                <p className="text-2xl font-bold text-primary">{result.months}</p>
                <p className="text-xs text-muted-foreground">Months</p>
              </div>
              <div className="p-3 rounded-lg bg-card border border-border text-center">
                <p className="text-2xl font-bold text-primary">{result.days}</p>
                <p className="text-xs text-muted-foreground">Days</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Days:</span>
                <span className="font-medium text-foreground">{result.totalDays} days</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Next Anniversary:</span>
                <span className="font-medium text-foreground">{result.nextAnniversary}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Days Until Next:</span>
                <span className="font-medium text-foreground">{result.daysUntilNext} days</span>
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
                Share Result
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
