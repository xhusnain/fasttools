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

  const convertTime = (toOffset: number) => {
    if (!time) return "00:00"

    const [hours, minutes] = time.split(":").map(Number)
    const fromOffset = timezones.find((tz) => tz.value === fromTimezone)?.offset || 0

    let newHours = hours - fromOffset + toOffset
    if (newHours < 0) newHours += 24
    if (newHours >= 24) newHours -= 24

    return `${String(Math.floor(newHours)).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
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
                className="h-11 text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="from-timezone">From Timezone</Label>
              <Select value={fromTimezone} onValueChange={setFromTimezone}>
                <SelectTrigger className="h-11 text-sm">
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
