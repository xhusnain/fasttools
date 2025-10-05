"use client"

import { useState } from "react"
import { Calendar, Clock, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function AgeInHoursCalculator() {
  const [birthDate, setBirthDate] = useState("")
  const [result, setResult] = useState<{
    years: number
    months: number
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateAge = () => {
    if (!birthDate) return

    setIsCalculating(true)
    setTimeout(() => {
      const birth = new Date(birthDate)
      const now = new Date()
      const diffMs = now.getTime() - birth.getTime()

      const seconds = Math.floor(diffMs / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      const years = Math.floor(days / 365.25)
      const months = Math.floor((days % 365.25) / 30.44)
      const remainingDays = Math.floor((days % 365.25) % 30.44)

      setResult({
        years,
        months: months,
        days: remainingDays,
        hours,
        minutes,
        seconds,
      })
      setIsCalculating(false)
    }, 300)
  }

  const copyResult = () => {
    if (!result) return
    const text = `Age: ${result.years} years, ${result.months} months, ${result.days} days\nTotal: ${result.hours.toLocaleString()} hours | ${result.minutes.toLocaleString()} minutes | ${result.seconds.toLocaleString()} seconds`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-sm border-border">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="birthdate" className="text-sm font-medium">
              Enter Your Birth Date
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="birthdate"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                className="pl-10 h-11"
              />
            </div>
          </div>

          <Button
            onClick={calculateAge}
            disabled={!birthDate || isCalculating}
            className="w-full h-11 text-sm font-medium"
          >
            {isCalculating ? "Calculating..." : "Calculate Age"}
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6 shadow-sm border-border animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Your Age</h3>
              <Button variant="outline" size="sm" onClick={copyResult} className="h-9 bg-transparent">
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="text-2xl font-bold text-primary">{result.years}</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="text-2xl font-bold text-primary">{result.months}</div>
                <div className="text-sm text-muted-foreground">Months</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="text-2xl font-bold text-primary">{result.days}</div>
                <div className="text-sm text-muted-foreground">Days</div>
              </div>
            </div>

            <div className="pt-4 border-t border-border space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Total Hours</span>
                </div>
                <span className="text-lg font-semibold text-foreground">{result.hours.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Total Minutes</span>
                </div>
                <span className="text-lg font-semibold text-foreground">{result.minutes.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Total Seconds</span>
                </div>
                <span className="text-lg font-semibold text-foreground">{result.seconds.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
