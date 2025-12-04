"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"

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
    } catch { }
  }

  const resetFields = () => {
    setTime("12:00")
    setFromTimezone("UTC")
  }

  return (
    <div className="space-y-6">
      <GCard className="border border-border shadow-sm">
        <GCardHeader>
          <GCardTitle className="text-lg flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Time Zone Converter
          </GCardTitle>
          <GCardDescription>Convert time between different time zones</GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <GLabel htmlFor="time">Time</GLabel>
              <GInput
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-11 text-sm border-2 border-primary focus-visible:ring-0 focus:border-primary"
              />
              <div className="flex items-center gap-2">
                <GButton type="button" onClick={setCurrentLocalTime} size="sm" className="h-8 px-3 text-xs w-max">
                  Use My Current Time
                </GButton>
                <GButton type="button" onClick={resetFields} variant="outline" size="sm" className="h-8 px-3 text-xs w-max">
                  Reset
                </GButton>
                <GButton type="button" onClick={() => setUseAmPm((v) => !v)} variant="outline" size="sm" className="h-8 px-3 text-xs w-max">
                  {useAmPm ? "Use 24‑hour" : "Use AM/PM"}
                </GButton>
              </div>
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="from-timezone">From Timezone</GLabel>
              <GSelect value={fromTimezone} onValueChange={setFromTimezone}>
                <GSelectTrigger className="h-11 text-sm border-2 border-primary focus:border-primary">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  {timezones.map((tz) => (
                    <GSelectItem key={tz.value} value={tz.value}>
                      {tz.label}
                    </GSelectItem>
                  ))}
                </GSelectContent>
              </GSelect>
            </div>
          </div>
        </GCardContent>
      </GCard>

      <GCard className="border border-border shadow-sm">
        <GCardHeader>
          <GCardTitle className="text-base">Converted Times</GCardTitle>
        </GCardHeader>
        <GCardContent>
          <div className="space-y-3">
            {timezones.map((tz) => (
              <div key={tz.value} className="flex justify-between items-center p-3 bg-muted rounded-md">
                <span className="text-sm font-medium text-foreground">{tz.label}</span>
                <span className="text-sm text-muted-foreground font-mono">{convertTime(tz.offset)}</span>
              </div>
            ))}
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
