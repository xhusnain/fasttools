"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Clock, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface TimeDurationResult {
  hours: number
  minutes: number
  totalMinutes: number
  totalSeconds: number
}

export function TimeDurationCalculator() {
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [result, setResult] = useState<TimeDurationResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateDuration = () => {
    if (!startTime || !endTime) return

    setIsCalculating(true)

    setTimeout(() => {
      const [startHour, startMin] = startTime.split(":").map(Number)
      const [endHour, endMin] = endTime.split(":").map(Number)

      let totalMinutes = endHour * 60 + endMin - (startHour * 60 + startMin)

      if (totalMinutes < 0) {
        totalMinutes += 24 * 60
      }

      const hours = Math.floor(totalMinutes / 60)
      const minutes = totalMinutes % 60
      const totalSeconds = totalMinutes * 60

      setResult({
        hours,
        minutes,
        totalMinutes,
        totalSeconds,
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `Time duration: ${result.hours} hours ${result.minutes} minutes (${result.totalMinutes} total minutes)`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-border hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Clock className="h-5 w-5 text-primary" />
            Calculate Time Duration
          </CardTitle>
          <CardDescription className="text-sm">Enter start and end times to calculate duration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="starttime" className="text-sm font-medium">
              Start Time
            </Label>
            <input
              id="starttime"
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="endtime" className="text-sm font-medium">
              End Time
            </Label>
            <input
              id="endtime"
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
            />
          </div>

          <Button
            onClick={calculateDuration}
            className="w-full h-11 text-sm font-medium shadow-md hover:shadow-lg transition-all"
            disabled={!startTime || !endTime || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Calculating...
              </>
            ) : (
              "Calculate Duration"
            )}
          </Button>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-xl">Time Duration</CardTitle>
            <CardDescription className="text-sm">Time between start and end</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
                <div className="text-3xl font-bold text-primary">{result.hours}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">Hours</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 transition-colors">
                <div className="text-3xl font-bold text-secondary">{result.minutes}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium">Minutes</div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Minutes</span>
                <span className="font-semibold text-sm">{result.totalMinutes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Total Seconds</span>
                <span className="font-semibold text-sm">{result.totalSeconds.toLocaleString()}</span>
              </div>
            </div>

            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Result
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
