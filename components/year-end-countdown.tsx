"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

export function YearEndCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    percentage: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const yearEnd = new Date(now.getFullYear(), 11, 31, 23, 59, 59)
      const yearStart = new Date(now.getFullYear(), 0, 1, 0, 0, 0)

      const diffMs = yearEnd.getTime() - now.getTime()
      const totalYearMs = yearEnd.getTime() - yearStart.getTime()
      const elapsedMs = now.getTime() - yearStart.getTime()

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000)
      const percentage = Math.round((elapsedMs / totalYearMs) * 100)

      setTimeLeft({ days, hours, minutes, seconds, percentage })
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-sm border-border">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium">Year {new Date().getFullYear()}</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Countdown to New Year</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.days}</div>
              <div className="text-sm text-muted-foreground mt-1">Days</div>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.hours}</div>
              <div className="text-sm text-muted-foreground mt-1">Hours</div>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.minutes}</div>
              <div className="text-sm text-muted-foreground mt-1">Minutes</div>
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{timeLeft.seconds}</div>
              <div className="text-sm text-muted-foreground mt-1">Seconds</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Year Progress</span>
              <span className="font-semibold text-foreground">{timeLeft.percentage}%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-1000 rounded-full"
                style={{ width: `${timeLeft.percentage}%` }}
              />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-sm border-border bg-muted/30">
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-primary mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-semibold text-sm text-foreground">Live Countdown</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This countdown updates in real-time showing exactly how much time is left until the end of{" "}
              {new Date().getFullYear()}.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
