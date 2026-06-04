"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GBadge } from "@/ui/gbadge"
import { cn } from "@/lib/utils"
import {
  Calendar,
  Check,
  Clock,
  Copy,
  Play,
  RotateCcw,
  Sparkles,
  Timer,
  Zap,
} from "lucide-react"

// ── Cron field definitions ────────────────────────────────────────
const MINUTE_OPTIONS = [
  { value: "*", label: "Every minute (*)" },
  { value: "*/5", label: "Every 5 minutes (*/5)" },
  { value: "*/10", label: "Every 10 minutes (*/10)" },
  { value: "*/15", label: "Every 15 minutes (*/15)" },
  { value: "*/30", label: "Every 30 minutes (*/30)" },
  { value: "0", label: "At minute 0" },
  { value: "15", label: "At minute 15" },
  { value: "30", label: "At minute 30" },
  { value: "45", label: "At minute 45" },
]

const HOUR_OPTIONS = [
  { value: "*", label: "Every hour (*)" },
  { value: "*/2", label: "Every 2 hours (*/2)" },
  { value: "*/4", label: "Every 4 hours (*/4)" },
  { value: "*/6", label: "Every 6 hours (*/6)" },
  { value: "*/12", label: "Every 12 hours (*/12)" },
  { value: "0", label: "Midnight (0)" },
  { value: "1", label: "1 AM" },
  { value: "2", label: "2 AM" },
  { value: "3", label: "3 AM" },
  { value: "6", label: "6 AM" },
  { value: "8", label: "8 AM" },
  { value: "9", label: "9 AM" },
  { value: "12", label: "Noon (12)" },
  { value: "17", label: "5 PM (17)" },
  { value: "18", label: "6 PM (18)" },
  { value: "21", label: "9 PM (21)" },
  { value: "22", label: "10 PM (22)" },
  { value: "9-17", label: "9 AM - 5 PM (9-17)" },
]

const DOM_OPTIONS = [
  { value: "*", label: "Every day (*)" },
  { value: "1", label: "1st" },
  { value: "15", label: "15th" },
  { value: "1,15", label: "1st and 15th" },
  { value: "1-7", label: "1st - 7th" },
]

const MONTH_OPTIONS = [
  { value: "*", label: "Every month (*)" },
  { value: "1", label: "January (1)" },
  { value: "1,4,7,10", label: "Quarterly (1,4,7,10)" },
  { value: "1-6", label: "Jan - Jun (1-6)" },
  { value: "7-12", label: "Jul - Dec (7-12)" },
]

const DOW_OPTIONS = [
  { value: "*", label: "Every day (*)" },
  { value: "1-5", label: "Weekdays Mon-Fri (1-5)" },
  { value: "6,0", label: "Weekends Sat-Sun (6,0)" },
  { value: "0", label: "Sunday (0)" },
  { value: "1", label: "Monday (1)" },
  { value: "2", label: "Tuesday (2)" },
  { value: "3", label: "Wednesday (3)" },
  { value: "4", label: "Thursday (4)" },
  { value: "5", label: "Friday (5)" },
  { value: "6", label: "Saturday (6)" },
]

// ── Presets ───────────────────────────────────────────────────────
interface Preset {
  name: string
  expression: string
  category: string
}

const PRESETS: Preset[] = [
  { name: "Every minute", expression: "* * * * *", category: "Intervals" },
  { name: "Every 5 minutes", expression: "*/5 * * * *", category: "Intervals" },
  { name: "Every 10 minutes", expression: "*/10 * * * *", category: "Intervals" },
  { name: "Every 15 minutes", expression: "*/15 * * * *", category: "Intervals" },
  { name: "Every 30 minutes", expression: "*/30 * * * *", category: "Intervals" },
  { name: "Every hour", expression: "0 * * * *", category: "Intervals" },
  { name: "Every 2 hours", expression: "0 */2 * * *", category: "Intervals" },
  { name: "Every 6 hours", expression: "0 */6 * * *", category: "Intervals" },
  { name: "Every 12 hours", expression: "0 */12 * * *", category: "Intervals" },
  { name: "Daily at midnight", expression: "0 0 * * *", category: "Daily" },
  { name: "Daily at noon", expression: "0 12 * * *", category: "Daily" },
  { name: "Daily at 3 AM", expression: "0 3 * * *", category: "Daily" },
  { name: "Daily at 9 AM", expression: "0 9 * * *", category: "Daily" },
  { name: "Twice daily (9 AM & 5 PM)", expression: "0 9,17 * * *", category: "Daily" },
  { name: "Weekdays at 9 AM", expression: "0 9 * * 1-5", category: "Business" },
  { name: "Weekdays at 6 PM", expression: "0 18 * * 1-5", category: "Business" },
  { name: "Every 5 min (business hours)", expression: "*/5 9-17 * * 1-5", category: "Business" },
  { name: "Every weekday at midnight", expression: "0 0 * * 1-5", category: "Business" },
  { name: "Weekends at midnight", expression: "0 0 * * 6,0", category: "Weekly" },
  { name: "Every Sunday at midnight", expression: "0 0 * * 0", category: "Weekly" },
  { name: "Every Monday at 8 AM", expression: "0 8 * * 1", category: "Weekly" },
  { name: "Every Friday at 5 PM", expression: "0 17 * * 5", category: "Weekly" },
  { name: "1st of every month", expression: "0 0 1 * *", category: "Monthly" },
  { name: "15th of every month", expression: "0 0 15 * *", category: "Monthly" },
  { name: "1st and 15th at 4:30 AM", expression: "30 4 1,15 * *", category: "Monthly" },
  { name: "Quarterly (Jan/Apr/Jul/Oct)", expression: "0 0 1 1,4,7,10 *", category: "Monthly" },
  { name: "Yearly (Jan 1 midnight)", expression: "0 0 1 1 *", category: "Yearly" },
]

// ── Cron parser helpers ──────────────────────────────────────────
const MONTH_NAMES = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const DOW_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function describeField(value: string, unit: string, names?: string[]): string {
  if (value === "*") return `every ${unit}`

  if (value.startsWith("*/")) {
    const step = value.slice(2)
    return `every ${step} ${unit}${parseInt(step) > 1 ? "s" : ""}`
  }

  if (value.includes("-")) {
    const [start, end] = value.split("-")
    const s = names ? names[parseInt(start)] || start : start
    const e = names ? names[parseInt(end)] || end : end
    return `${s} through ${e}`
  }

  if (value.includes(",")) {
    const parts = value.split(",").map((v) => (names ? names[parseInt(v)] || v : v))
    return parts.join(", ")
  }

  if (names && names[parseInt(value)]) return names[parseInt(value)]
  return value
}

function cronToEnglish(expression: string): string {
  const parts = expression.trim().split(/\s+/)
  if (parts.length !== 5) return "Invalid cron expression (expected 5 fields)"

  const [minute, hour, dom, month, dow] = parts

  // Handle common patterns first
  if (expression === "* * * * *") return "Every minute"
  if (minute.startsWith("*/") && hour === "*" && dom === "*" && month === "*" && dow === "*") {
    return `Every ${minute.slice(2)} minutes`
  }
  if (minute === "0" && hour === "*" && dom === "*" && month === "*" && dow === "*") {
    return "Every hour, at minute 0"
  }
  if (minute === "0" && hour === "0" && dom === "*" && month === "*" && dow === "*") {
    return "Every day at midnight (00:00)"
  }
  if (minute === "0" && hour === "12" && dom === "*" && month === "*" && dow === "*") {
    return "Every day at noon (12:00)"
  }

  const segments: string[] = []

  // Time
  if (minute !== "*" && hour !== "*" && !minute.includes("/") && !hour.includes("/")) {
    const h = hour.includes(",") ? hour.split(",") : [hour]
    const times = h.map((hr) => {
      const hNum = parseInt(hr)
      const mNum = parseInt(minute)
      const period = hNum >= 12 ? "PM" : "AM"
      const h12 = hNum === 0 ? 12 : hNum > 12 ? hNum - 12 : hNum
      return `${h12}:${String(mNum).padStart(2, "0")} ${period}`
    })
    segments.push(`At ${times.join(" and ")}`)
  } else {
    if (minute !== "*") segments.push(`minute ${describeField(minute, "minute")}`)
    if (hour !== "*") segments.push(`hour ${describeField(hour, "hour")}`)
  }

  // Day of week
  if (dow !== "*") {
    segments.push(describeField(dow, "day", DOW_NAMES))
  }

  // Day of month
  if (dom !== "*") {
    segments.push(`on day ${describeField(dom, "day")} of the month`)
  }

  // Month
  if (month !== "*") {
    segments.push(`in ${describeField(month, "month", MONTH_NAMES)}`)
  }

  return segments.join(", ") || "Every minute"
}

function getNextRunTimes(expression: string, count: number = 10): Date[] {
  const parts = expression.trim().split(/\s+/)
  if (parts.length !== 5) return []

  const [minExpr, hourExpr, domExpr, monthExpr, dowExpr] = parts
  const results: Date[] = []
  const now = new Date()
  const current = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 0, 0)

  const matchesField = (value: number, expr: string, max: number): boolean => {
    if (expr === "*") return true
    const parts = expr.split(",")
    for (const part of parts) {
      if (part.includes("/")) {
        const [base, step] = part.split("/")
        const stepNum = parseInt(step)
        const baseNum = base === "*" ? 0 : parseInt(base)
        if ((value - baseNum) % stepNum === 0 && value >= baseNum) return true
      } else if (part.includes("-")) {
        const [start, end] = part.split("-").map(Number)
        if (value >= start && value <= end) return true
      } else {
        if (value === parseInt(part)) return true
      }
    }
    return false
  }

  const check = new Date(current)
  let iterations = 0
  const maxIterations = 525960 // ~1 year of minutes

  while (results.length < count && iterations < maxIterations) {
    const min = check.getMinutes()
    const hr = check.getHours()
    const d = check.getDate()
    const m = check.getMonth() + 1
    const dow = check.getDay()

    const domMatches = matchesField(d, domExpr, 31)
    const dowMatches = matchesField(dow, dowExpr, 6)
    const dayMatches = domExpr !== "*" && dowExpr !== "*" ? domMatches || dowMatches : domMatches && dowMatches

    if (
      matchesField(min, minExpr, 59) &&
      matchesField(hr, hourExpr, 23) &&
      dayMatches &&
      matchesField(m, monthExpr, 12)
    ) {
      results.push(new Date(check))
    }

    check.setMinutes(check.getMinutes() + 1)
    iterations++
  }

  return results
}

// ── Component ─────────────────────────────────────────────────────
export function CronExpressionGenerator() {
  const [minute, setMinute] = useState("*")
  const [hour, setHour] = useState("*")
  const [dom, setDom] = useState("*")
  const [month, setMonth] = useState("*")
  const [dow, setDow] = useState("*")
  const [manualInput, setManualInput] = useState("")
  const [copied, setCopied] = useState(false)
  const [presetFilter, setPresetFilter] = useState("All")

  const expression = `${minute} ${hour} ${dom} ${month} ${dow}`
  const description = useMemo(() => cronToEnglish(expression), [expression])
  const nextRuns = useMemo(() => getNextRunTimes(expression, 10), [expression])

  // Sync manual input with builder
  useEffect(() => {
    setManualInput(expression)
  }, [expression])

  const parseManualInput = useCallback((input: string) => {
    setManualInput(input)
    const parts = input.trim().split(/\s+/)
    if (parts.length === 5) {
      setMinute(parts[0])
      setHour(parts[1])
      setDom(parts[2])
      setMonth(parts[3])
      setDow(parts[4])
    }
  }, [])

  const applyPreset = (preset: Preset) => {
    const parts = preset.expression.split(" ")
    setMinute(parts[0])
    setHour(parts[1])
    setDom(parts[2])
    setMonth(parts[3])
    setDow(parts[4])
  }

  const reset = () => {
    setMinute("*")
    setHour("*")
    setDom("*")
    setMonth("*")
    setDow("*")
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(expression)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const presetCategories = useMemo(() => {
    const cats = ["All", ...Array.from(new Set(PRESETS.map((p) => p.category)))]
    return cats
  }, [])

  const filteredPresets = presetFilter === "All" ? PRESETS : PRESETS.filter((p) => p.category === presetFilter)

  return (
    <div className="space-y-6">
      {/* Expression Display */}
      <GCard>
        <GCardContent className="p-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <GLabel className="text-xs text-muted-foreground mb-1 block">Cron Expression</GLabel>
                <GInput
                  value={manualInput}
                  onChange={(e) => parseManualInput(e.target.value)}
                  className="font-mono text-lg h-12"
                  placeholder="* * * * *"
                />
              </div>
              <div className="pt-5 flex gap-2">
                <GButton variant="outline" size="sm" onClick={copyToClipboard}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </GButton>
                <GButton variant="outline" size="sm" onClick={reset}>
                  <RotateCcw className="h-4 w-4" />
                </GButton>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-primary/5 rounded-lg p-3">
              <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <p className="text-sm font-medium">{description}</p>
            </div>
          </div>
        </GCardContent>
      </GCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Visual Builder + Next Runs */}
        <div className="lg:col-span-2 space-y-6">
          {/* Visual Builder */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <Zap className="h-5 w-5" /> Visual Cron Builder
              </GCardTitle>
              <GCardDescription>
                Select values for each field or type a custom cron expression above.
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              {/* 5-field syntax diagram */}
              <div className="grid grid-cols-5 gap-2 mb-4 text-center text-xs text-muted-foreground font-mono">
                <span>Minute</span>
                <span>Hour</span>
                <span>Day (Month)</span>
                <span>Month</span>
                <span>Day (Week)</span>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-1 text-center font-mono text-lg font-bold">
                <span className="bg-muted rounded-md py-2">{minute}</span>
                <span className="bg-muted rounded-md py-2">{hour}</span>
                <span className="bg-muted rounded-md py-2">{dom}</span>
                <span className="bg-muted rounded-md py-2">{month}</span>
                <span className="bg-muted rounded-md py-2">{dow}</span>
              </div>
              <div className="grid grid-cols-5 gap-2 text-center text-[10px] text-muted-foreground mb-6">
                <span>0-59</span>
                <span>0-23</span>
                <span>1-31</span>
                <span>1-12</span>
                <span>0-6</span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <GLabel>Minute</GLabel>
                    <GSelect value={minute} onValueChange={setMinute}>
                      <GSelectTrigger><GSelectValue /></GSelectTrigger>
                      <GSelectContent>
                        {MINUTE_OPTIONS.map((o) => (
                          <GSelectItem key={o.value} value={o.value}>{o.label}</GSelectItem>
                        ))}
                      </GSelectContent>
                    </GSelect>
                  </div>
                  <div>
                    <GLabel>Hour</GLabel>
                    <GSelect value={hour} onValueChange={setHour}>
                      <GSelectTrigger><GSelectValue /></GSelectTrigger>
                      <GSelectContent>
                        {HOUR_OPTIONS.map((o) => (
                          <GSelectItem key={o.value} value={o.value}>{o.label}</GSelectItem>
                        ))}
                      </GSelectContent>
                    </GSelect>
                  </div>
                  <div>
                    <GLabel>Day of Month</GLabel>
                    <GSelect value={dom} onValueChange={setDom}>
                      <GSelectTrigger><GSelectValue /></GSelectTrigger>
                      <GSelectContent>
                        {DOM_OPTIONS.map((o) => (
                          <GSelectItem key={o.value} value={o.value}>{o.label}</GSelectItem>
                        ))}
                      </GSelectContent>
                    </GSelect>
                  </div>
                  <div>
                    <GLabel>Month</GLabel>
                    <GSelect value={month} onValueChange={setMonth}>
                      <GSelectTrigger><GSelectValue /></GSelectTrigger>
                      <GSelectContent>
                        {MONTH_OPTIONS.map((o) => (
                          <GSelectItem key={o.value} value={o.value}>{o.label}</GSelectItem>
                        ))}
                      </GSelectContent>
                    </GSelect>
                  </div>
                  <div className="sm:col-span-2">
                    <GLabel>Day of Week</GLabel>
                    <GSelect value={dow} onValueChange={setDow}>
                      <GSelectTrigger><GSelectValue /></GSelectTrigger>
                      <GSelectContent>
                        {DOW_OPTIONS.map((o) => (
                          <GSelectItem key={o.value} value={o.value}>{o.label}</GSelectItem>
                        ))}
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Next Run Times */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <Clock className="h-5 w-5" /> Next 10 Run Times
              </GCardTitle>
              <GCardDescription>
                Predicted execution times in your local timezone ({Intl.DateTimeFormat().resolvedOptions().timeZone})
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              {nextRuns.length > 0 ? (
                <div className="space-y-1.5">
                  {nextRuns.map((run, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mono",
                        i === 0 ? "bg-primary/10 font-semibold" : "bg-muted/50"
                      )}
                    >
                      <GBadge variant="outline" className="text-xs w-6 justify-center shrink-0">
                        {i + 1}
                      </GBadge>
                      <Play className="h-3 w-3 text-green-500 shrink-0" />
                      <span>
                        {run.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
                        {" "}
                        {run.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No upcoming runs found within the next year.</p>
              )}
            </GCardContent>
          </GCard>

          {/* Cron Syntax Reference */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <Timer className="h-5 w-5" /> Cron Syntax Quick Reference
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Character</th>
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Meaning</th>
                      <th className="pb-2 font-medium text-muted-foreground">Example</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-xs">
                    <tr className="border-b"><td className="py-2 pr-4 font-bold">*</td><td className="py-2 pr-4 font-sans">Any value</td><td className="py-2"><code>* * * * *</code> = every minute</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-bold">,</td><td className="py-2 pr-4 font-sans">List</td><td className="py-2"><code>1,15</code> = 1st and 15th</td></tr>
                    <tr className="border-b"><td className="py-2 pr-4 font-bold">-</td><td className="py-2 pr-4 font-sans">Range</td><td className="py-2"><code>1-5</code> = Mon through Fri</td></tr>
                    <tr><td className="py-2 pr-4 font-bold">/</td><td className="py-2 pr-4 font-sans">Step</td><td className="py-2"><code>*/5</code> = every 5th</td></tr>
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>
        </div>

        {/* Right: Presets */}
        <div>
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Quick Presets
              </GCardTitle>
              <GCardDescription>One-click common schedules</GCardDescription>
            </GCardHeader>
            <GCardContent className="space-y-3">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-1.5">
                {presetCategories.map((cat) => (
                  <GButton
                    key={cat}
                    variant={presetFilter === cat ? "default" : "outline"}
                    size="sm"
                    className="text-xs h-7"
                    onClick={() => setPresetFilter(cat)}
                  >
                    {cat}
                  </GButton>
                ))}
              </div>

              {/* Preset List */}
              <div className="space-y-1 max-h-[520px] overflow-y-auto">
                {filteredPresets.map((preset) => (
                  <button
                    key={preset.expression + preset.name}
                    onClick={() => applyPreset(preset)}
                    className={cn(
                      "w-full text-left text-sm px-3 py-2.5 rounded-md transition-colors flex items-center justify-between gap-2",
                      expression === preset.expression
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    )}
                  >
                    <span className="truncate">{preset.name}</span>
                    <code className={cn(
                      "text-xs font-mono shrink-0",
                      expression === preset.expression ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}>
                      {preset.expression}
                    </code>
                  </button>
                ))}
              </div>
            </GCardContent>
          </GCard>
        </div>
      </div>
    </div>
  )
}
