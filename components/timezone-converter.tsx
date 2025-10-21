"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe } from "lucide-react"

export function TimezoneConverter() {
  const [time, setTime] = useState("12:00")
  const [fromTimezone, setFromTimezone] = useState("UTC")
  const [useAmPm, setUseAmPm] = useState(true)

  const timezones = [
    { value: "UTC", label: "UTC (GMT+0)", offset: 0 },
    { value: "EST", label: "EST (GMT-5)", offset: -5 },
    { value: "PST", label: "PST (GMT-8)", offset: -8 },
    { value: "IST", label: "IST (GMT+5:30)", offset: 5.5 },
    { value: "JST", label: "JST (GMT+9)", offset: 9 },
    { value: "AEST", label: "AEST (GMT+10)", offset: 10 },
    { value: "CET", label: "CET (GMT+1)", offset: 1 },
    { value: "GMT", label: "GMT (GMT+0)", offset: 0 },
  ]

  const formatTime = (h: number, m: number) => {
    if (!useAmPm) return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`
    const period = h >= 12 ? "PM" : "AM"
    const hour12 = h % 12 === 0 ? 12 : h % 12
    return `${String(hour12).padStart(2, "0")}:${String(m).padStart(2, "0")} ${period}`
  }

  const convertTime = (toOffset: number) => {
    if (!time) return "00:00"

    const [hours, minutes] = time.split(":").map(Number)
    const fromOffset = timezones.find((tz) => tz.value === fromTimezone)?.offset || 0

    let newHours = hours - fromOffset + toOffset
    if (newHours < 0) newHours += 24
    if (newHours >= 24) newHours -= 24

    return formatTime(Math.floor(newHours), minutes)
  }

  const setCurrentLocalTime = () => {
    try {
      const now = new Date()
      const hh = String(now.getHours()).padStart(2, "0")
      const mm = String(now.getMinutes()).padStart(2, "0")
      setTime(`${hh}:${mm}`)
    } catch {}
  }

  const resetFields = () => {
    setTime("12:00")
    setFromTimezone("UTC")
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Time Zone Converter
          </CardTitle>
          <CardDescription>Convert time between different time zones</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-11 text-sm border-2 border-orange-500 focus-visible:ring-0 focus:border-orange-500"
              />
              <div className="flex items-center gap-2">
                <button type="button" onClick={setCurrentLocalTime} className="h-8 px-3 rounded-md text-xs font-medium bg-primary text-white hover:bg-primary/90 w-max">
                  Use My Current Time
                </button>
                <button type="button" onClick={resetFields} className="h-8 px-3 rounded-md text-xs font-medium border border-border text-foreground hover:bg-accent/10 w-max">
                  Reset
                </button>
                <button type="button" onClick={() => setUseAmPm((v) => !v)} className="h-8 px-3 rounded-md text-xs font-medium border border-border text-foreground hover:bg-accent/10 w-max">
                  {useAmPm ? "Use 24‑hour" : "Use AM/PM"}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="from-timezone">From Timezone</Label>
              <Select value={fromTimezone} onValueChange={setFromTimezone}>
                <SelectTrigger className="h-11 text-sm border-2 border-orange-500 focus:border-orange-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timezones.map((tz) => (
                    <SelectItem key={tz.value} value={tz.value}>
                      {tz.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Converted Times</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {timezones.map((tz) => (
              <div key={tz.value} className="flex justify-between items-center p-3 bg-muted rounded-md">
                <span className="text-sm font-medium text-foreground">{tz.label}</span>
                <span className="text-sm text-muted-foreground font-mono">{convertTime(tz.offset)}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
