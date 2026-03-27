"use client"

import { useCallback, useMemo, useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GBadge } from "@/ui/gbadge"
import { cn } from "@/lib/utils"
import {
  Baby,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Heart,
  Info,
  Shield,
  Sparkles,
  Target,
} from "lucide-react"

// ── Helpers ───────────────────────────────────────────────────────
const DAY_MS = 86_400_000

function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * DAY_MS)
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

function formatShort(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

function isSameDay(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function isInRange(date: Date, start: Date, end: Date): boolean {
  const t = date.getTime()
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime()
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime()
  return t >= s && t <= e
}

// ── Types ─────────────────────────────────────────────────────────
interface CycleData {
  cycleNumber: number
  periodStart: Date
  periodEnd: Date
  fertileStart: Date
  fertileEnd: Date
  ovulationDay: Date
  peakDays: Date[] // top 3 days
  pregnancyTestDate: Date
  estimatedDueDate: Date
  nextPeriod: Date
}

// ── Component ─────────────────────────────────────────────────────
export default function OvulationCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState("")
  const [cycleLength, setCycleLength] = useState("28")
  const [lutealPhase, setLutealPhase] = useState("14")
  const [periodLength, setPeriodLength] = useState("5")
  const [cycles, setCycles] = useState<CycleData[]>([])
  const [calendarMonth, setCalendarMonth] = useState<Date | null>(null)

  // ── Calculate ─────────────────────────────────────────────────
  const calculate = useCallback(() => {
    if (!lastPeriodDate) return
    const lmp = new Date(lastPeriodDate + "T00:00:00")
    const cl = parseInt(cycleLength) || 28
    const lp = parseInt(lutealPhase) || 14
    const pl = parseInt(periodLength) || 5

    const result: CycleData[] = []

    for (let i = 0; i < 6; i++) {
      const periodStart = addDays(lmp, i * cl)
      const periodEnd = addDays(periodStart, pl - 1)
      const ovulationDay = addDays(periodStart, cl - lp)
      const fertileStart = addDays(ovulationDay, -5)
      const fertileEnd = ovulationDay
      const peakDays = [addDays(ovulationDay, -2), addDays(ovulationDay, -1), ovulationDay]
      const pregnancyTestDate = addDays(ovulationDay, 14)
      const estimatedDueDate = addDays(ovulationDay, 266)
      const nextPeriod = addDays(periodStart, cl)

      result.push({
        cycleNumber: i + 1,
        periodStart,
        periodEnd,
        fertileStart,
        fertileEnd,
        ovulationDay,
        peakDays,
        pregnancyTestDate,
        estimatedDueDate,
        nextPeriod,
      })
    }

    setCycles(result)
    setCalendarMonth(new Date(lmp.getFullYear(), lmp.getMonth(), 1))
  }, [lastPeriodDate, cycleLength, lutealPhase, periodLength])

  // ── Calendar helpers ──────────────────────────────────────────
  const calendarDays = useMemo(() => {
    if (!calendarMonth || cycles.length === 0) return []

    const year = calendarMonth.getFullYear()
    const month = calendarMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const startDay = firstDay.getDay() // 0=Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const days: { date: Date; type: "period" | "fertile" | "ovulation" | "peak" | "normal" | "empty" }[] = []

    // Leading empty cells
    for (let i = 0; i < startDay; i++) {
      days.push({ date: new Date(0), type: "empty" })
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d)
      let type: "period" | "fertile" | "ovulation" | "peak" | "normal" = "normal"

      for (const cycle of cycles) {
        if (isSameDay(date, cycle.ovulationDay)) {
          type = "ovulation"
          break
        }
        if (cycle.peakDays.some((p) => isSameDay(date, p))) {
          type = "peak"
        }
        if (type === "normal" && isInRange(date, cycle.fertileStart, cycle.fertileEnd)) {
          type = "fertile"
        }
        if (isInRange(date, cycle.periodStart, cycle.periodEnd)) {
          type = "period"
          break
        }
      }
      days.push({ date, type })
    }

    return days
  }, [calendarMonth, cycles])

  const monthLabel = calendarMonth
    ? calendarMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : ""

  const prevMonth = () => {
    if (calendarMonth) setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1))
  }
  const nextMonth = () => {
    if (calendarMonth) setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1))
  }

  // ── Render ────────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      {/* Medical Disclaimer */}
      <div className="flex items-start gap-2.5 text-sm bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 rounded-lg p-4">
        <Shield className="h-5 w-5 mt-0.5 shrink-0" />
        <p>
          <strong>Medical Disclaimer:</strong> This calculator provides estimates based on average cycle data
          and is for informational purposes only. It is not medical advice and should not be used as
          contraception. Consult a healthcare provider for personalized fertility guidance. Based on
          guidelines from <strong>ACOG</strong>, <strong>WHO</strong>, and <strong>NHS</strong>.
        </p>
      </div>

      {/* Input Card */}
      <GCard>
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Enter Your Cycle Details
          </GCardTitle>
          <GCardDescription>
            Enter the first day of your last menstrual period and your average cycle length.
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <GLabel>First Day of Last Period *</GLabel>
              <GInput
                type="date"
                value={lastPeriodDate}
                onChange={(e) => setLastPeriodDate(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div>
              <GLabel>Average Cycle Length</GLabel>
              <GSelect value={cycleLength} onValueChange={setCycleLength}>
                <GSelectTrigger>
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  {Array.from({ length: 15 }, (_, i) => i + 21).map((d) => (
                    <GSelectItem key={d} value={String(d)}>
                      {d} days {d === 28 ? "(average)" : ""}
                    </GSelectItem>
                  ))}
                </GSelectContent>
              </GSelect>
            </div>
            <div>
              <GLabel>Luteal Phase Length</GLabel>
              <GSelect value={lutealPhase} onValueChange={setLutealPhase}>
                <GSelectTrigger>
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  {Array.from({ length: 8 }, (_, i) => i + 10).map((d) => (
                    <GSelectItem key={d} value={String(d)}>
                      {d} days {d === 14 ? "(average)" : ""}
                    </GSelectItem>
                  ))}
                </GSelectContent>
              </GSelect>
            </div>
            <div>
              <GLabel>Period Length</GLabel>
              <GSelect value={periodLength} onValueChange={setPeriodLength}>
                <GSelectTrigger>
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  {Array.from({ length: 7 }, (_, i) => i + 2).map((d) => (
                    <GSelectItem key={d} value={String(d)}>
                      {d} days {d === 5 ? "(average)" : ""}
                    </GSelectItem>
                  ))}
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          <GButton onClick={calculate} disabled={!lastPeriodDate} className="w-full sm:w-auto">
            <Target className="h-4 w-4 mr-1.5" /> Calculate Ovulation & Fertile Window
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {cycles.length > 0 && (
        <>
          {/* Current Cycle Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-pink-500">{formatShort(cycles[0].ovulationDay)}</div>
                <p className="text-xs text-muted-foreground mt-1">Ovulation Day</p>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-500">
                  {formatShort(cycles[0].fertileStart)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Fertile Window Start</p>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-500">{formatShort(cycles[0].nextPeriod)}</div>
                <p className="text-xs text-muted-foreground mt-1">Next Period</p>
              </GCardContent>
            </GCard>
            <GCard>
              <GCardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-500">{formatShort(cycles[0].pregnancyTestDate)}</div>
                <p className="text-xs text-muted-foreground mt-1">Pregnancy Test Date</p>
              </GCardContent>
            </GCard>
          </div>

          {/* Fertility Calendar */}
          <GCard>
            <GCardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <GCardTitle className="text-base flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-500" /> Fertility Calendar
                </GCardTitle>
                <div className="flex items-center gap-2">
                  <button onClick={prevMonth} className="p-1.5 rounded-md hover:bg-muted">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-sm font-medium min-w-[140px] text-center">{monthLabel}</span>
                  <button onClick={nextMonth} className="p-1.5 rounded-md hover:bg-muted">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </GCardHeader>
            <GCardContent>
              {/* Legend */}
              <div className="flex flex-wrap gap-3 mb-4 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" /> Period
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-green-400" /> Fertile Window
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" /> Peak Fertility
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-pink-500" /> Ovulation Day
                </span>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1.5">
                    {d}
                  </div>
                ))}
                {calendarDays.map((day, i) => {
                  if (day.type === "empty") return <div key={`e-${i}`} />

                  return (
                    <div
                      key={i}
                      className={cn(
                        "aspect-square flex items-center justify-center rounded-md text-sm font-medium transition-colors relative",
                        day.type === "period" && "bg-red-400/20 text-red-600 dark:text-red-400",
                        day.type === "fertile" && "bg-green-400/20 text-green-700 dark:text-green-400",
                        day.type === "peak" && "bg-emerald-500/25 text-emerald-700 dark:text-emerald-400 ring-1 ring-emerald-500/40",
                        day.type === "ovulation" && "bg-pink-500 text-white font-bold ring-2 ring-pink-400/50",
                        day.type === "normal" && "text-foreground hover:bg-muted"
                      )}
                    >
                      {day.date.getDate()}
                      {day.type === "ovulation" && (
                        <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-pink-300" />
                      )}
                    </div>
                  )
                })}
              </div>
            </GCardContent>
          </GCard>

          {/* 6-Month Forecast Table */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <Baby className="h-5 w-5" /> 6-Cycle Forecast
              </GCardTitle>
              <GCardDescription>
                Your predicted ovulation dates, fertile windows, and estimated due dates for the next 6 cycles.
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto -mx-6 px-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Cycle</th>
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Period Start</th>
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Fertile Window</th>
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Ovulation</th>
                      <th className="pb-2 pr-4 font-medium text-muted-foreground">Test Date</th>
                      <th className="pb-2 font-medium text-muted-foreground">Due Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cycles.map((c) => (
                      <tr key={c.cycleNumber} className="border-b last:border-0">
                        <td className="py-3 pr-4">
                          <GBadge variant="outline" className="text-xs">
                            #{c.cycleNumber}
                          </GBadge>
                        </td>
                        <td className="py-3 pr-4 text-red-500 font-medium">{formatDate(c.periodStart)}</td>
                        <td className="py-3 pr-4 text-green-600 dark:text-green-400">
                          {formatShort(c.fertileStart)} – {formatShort(c.fertileEnd)}
                        </td>
                        <td className="py-3 pr-4 font-bold text-pink-500">{formatDate(c.ovulationDay)}</td>
                        <td className="py-3 pr-4 text-purple-500">{formatDate(c.pregnancyTestDate)}</td>
                        <td className="py-3 text-blue-500">{formatDate(c.estimatedDueDate)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* Key Facts */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-base flex items-center gap-2">
                <Info className="h-5 w-5" /> Understanding Your Results
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Your Fertile Window</h4>
                  <p>
                    You have a 6-day fertile window each cycle: the 5 days before ovulation plus
                    ovulation day itself. Sperm can survive up to 5 days in the reproductive tract,
                    while the egg lives only 12–24 hours after release.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Peak Fertility Days</h4>
                  <p>
                    The 2 days before ovulation and ovulation day have the highest conception
                    probability (25–30% per cycle). These are highlighted as peak days in the
                    calendar above.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Pregnancy Test Timing</h4>
                  <p>
                    The best time to take a pregnancy test is 14 days after ovulation (14 DPO),
                    which is typically the first day of your missed period. Testing earlier increases
                    the risk of false negatives.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Estimated Due Date</h4>
                  <p>
                    If conception occurs during a given cycle, your estimated due date is 266 days
                    (38 weeks) after ovulation. This is equivalent to 280 days (40 weeks) from the
                    first day of your last period on a standard 28-day cycle.
                  </p>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Privacy */}
          <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-4">
            <Shield className="h-4 w-4 mt-0.5 shrink-0" />
            <p>
              <strong>100% Private:</strong> All calculations run in your browser. No cycle data is stored on any
              server. Your fertility information never leaves your device.
            </p>
          </div>
        </>
      )}
    </div>
  )
}
