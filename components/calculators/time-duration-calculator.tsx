"use client"

import { useState, useEffect } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"

import { Clock, Copy, Check, Calculator, Calendar, Globe, Timer, Zap, Target, TrendingUp, BarChart3, PieChart, ArrowUp, ArrowDown, Minus, Plus, Settings, Sparkles } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

type CalculationType = "time-duration" | "time-addition" | "time-subtraction" | "business-hours" | "timezone-conversion" | "work-days" | "overtime-calculator"

interface TimeDurationResult {
  hours: number
  minutes: number
  seconds: number
  totalMinutes: number
  totalSeconds: number
  totalHours: number
  businessDays: number
  workDays: number
  overtimeHours: number
  regularHours: number
  timezoneOffset: number
  formula: string
  explanation: string
}

export function TimeDurationCalculator() {
  const [calculationType, setCalculationType] = useState<CalculationType>("time-duration")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [timeToAdd, setTimeToAdd] = useState("")
  const [timeToSubtract, setTimeToSubtract] = useState("")
  const [timezone1, setTimezone1] = useState("UTC")
  const [timezone2, setTimezone2] = useState("UTC")
  const [businessStart, setBusinessStart] = useState("09:00")
  const [businessEnd, setBusinessEnd] = useState("17:00")
  const [workDays, setWorkDays] = useState("5")
  const [overtimeThreshold, setOvertimeThreshold] = useState("40")
  const [result, setResult] = useState<TimeDurationResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date()
      const timeString = now.toTimeString().slice(0, 8)
      setCurrentTime(timeString)
    }
    updateCurrentTime()
    const interval = setInterval(updateCurrentTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const calculateDuration = () => {
    setIsCalculating(true)

    setTimeout(() => {
      let calculationResult: TimeDurationResult

      switch (calculationType) {
        case "time-duration":
          if (!startTime || !endTime) return
          const [startHour, startMin] = startTime.split(":").map(Number)
          const [endHour, endMin] = endTime.split(":").map(Number)

          let totalMinutes = endHour * 60 + endMin - (startHour * 60 + startMin)
          if (totalMinutes < 0) totalMinutes += 24 * 60

          const hours = Math.floor(totalMinutes / 60)
          const minutes = totalMinutes % 60
          const seconds = 0
          const totalSeconds = totalMinutes * 60
          const totalHours = totalMinutes / 60

          calculationResult = {
            hours,
            minutes,
            seconds,
            totalMinutes,
            totalSeconds,
            totalHours,
            businessDays: 0,
            workDays: 0,
            overtimeHours: 0,
            regularHours: hours,
            timezoneOffset: 0,
            formula: `Duration = End Time - Start Time = ${endTime} - ${startTime} = ${hours}h ${minutes}m`,
            explanation: `Time duration between ${startTime} and ${endTime} is ${hours} hours and ${minutes} minutes`
          }
          break

        case "time-addition":
          if (!startTime || !timeToAdd) return
          const [addStartH, addStartM] = startTime.split(":").map(Number)
          const [addH, addM] = timeToAdd.split(":").map(Number)

          let newMinutes = (addStartH * 60 + addStartM) + (addH * 60 + addM)
          const newHours = Math.floor(newMinutes / 60) % 24
          const newMins = newMinutes % 60

          calculationResult = {
            hours: newHours,
            minutes: newMins,
            seconds: 0,
            totalMinutes: newMinutes,
            totalSeconds: newMinutes * 60,
            totalHours: newMinutes / 60,
            businessDays: 0,
            workDays: 0,
            overtimeHours: 0,
            regularHours: newHours,
            timezoneOffset: 0,
            formula: `New Time = Start Time + Time to Add = ${startTime} + ${timeToAdd} = ${newHours.toString().padStart(2, '0')}:${newMins.toString().padStart(2, '0')}`,
            explanation: `Adding ${timeToAdd} to ${startTime} results in ${newHours.toString().padStart(2, '0')}:${newMins.toString().padStart(2, '0')}`
          }
          break

        case "time-subtraction":
          if (!startTime || !timeToSubtract) return
          const [startHSub, startMSub] = startTime.split(":").map(Number)
          const [subH, subM] = timeToSubtract.split(":").map(Number)

          let subMinutes = (startHSub * 60 + startMSub) - (subH * 60 + subM)
          if (subMinutes < 0) subMinutes += 24 * 60

          const subHours = Math.floor(subMinutes / 60)
          const subMins = subMinutes % 60

          calculationResult = {
            hours: subHours,
            minutes: subMins,
            seconds: 0,
            totalMinutes: subMinutes,
            totalSeconds: subMinutes * 60,
            totalHours: subMinutes / 60,
            businessDays: 0,
            workDays: 0,
            overtimeHours: 0,
            regularHours: subHours,
            timezoneOffset: 0,
            formula: `New Time = Start Time - Time to Subtract = ${startTime} - ${timeToSubtract} = ${subHours.toString().padStart(2, '0')}:${subMins.toString().padStart(2, '0')}`,
            explanation: `Subtracting ${timeToSubtract} from ${startTime} results in ${subHours.toString().padStart(2, '0')}:${subMins.toString().padStart(2, '0')}`
          }
          break

        case "business-hours":
          if (!startTime || !endTime) return
          const [busStartH, busStartM] = businessStart.split(":").map(Number)
          const [busEndH, busEndM] = businessEnd.split(":").map(Number)
          const [busStartH2, busStartM2] = startTime.split(":").map(Number)
          const [busEndH2, busEndM2] = endTime.split(":").map(Number)

          const businessStartMinutes = busStartH * 60 + busStartM
          const businessEndMinutes = busEndH * 60 + busEndM
          const startMinutes = busStartH2 * 60 + busStartM2
          const endMinutes = busEndH2 * 60 + busEndM2

          let businessMinutes = 0
          if (startMinutes >= businessStartMinutes && endMinutes <= businessEndMinutes) {
            businessMinutes = endMinutes - startMinutes
          } else if (startMinutes < businessStartMinutes && endMinutes > businessEndMinutes) {
            businessMinutes = businessEndMinutes - businessStartMinutes
          } else if (startMinutes < businessStartMinutes && endMinutes <= businessEndMinutes) {
            businessMinutes = endMinutes - businessStartMinutes
          } else if (startMinutes >= businessStartMinutes && endMinutes > businessEndMinutes) {
            businessMinutes = businessEndMinutes - startMinutes
          }

          const busHours = Math.floor(businessMinutes / 60)
          const busMins = businessMinutes % 60

          calculationResult = {
            hours: busHours,
            minutes: busMins,
            seconds: 0,
            totalMinutes: businessMinutes,
            totalSeconds: businessMinutes * 60,
            totalHours: businessMinutes / 60,
            businessDays: Math.ceil(businessMinutes / (8 * 60)),
            workDays: Math.ceil(businessMinutes / (8 * 60)),
            overtimeHours: 0,
            regularHours: busHours,
            timezoneOffset: 0,
            formula: `Business Hours = Overlap between work time (${businessStart}-${businessEnd}) and duration (${startTime}-${endTime})`,
            explanation: `Business hours between ${startTime} and ${endTime} during work hours ${businessStart}-${businessEnd} is ${busHours}h ${busMins}m`
          }
          break

        case "overtime-calculator":
          if (!startTime || !endTime) return
          const [otStartH, otStartM] = startTime.split(":").map(Number)
          const [otEndH, otEndM] = endTime.split(":").map(Number)

          const otTotalMinutes = (otEndH * 60 + otEndM) - (otStartH * 60 + otStartM)
          const otTotalHours = otTotalMinutes / 60
          const threshold = Number.parseFloat(overtimeThreshold)

          const regularH = Math.min(otTotalHours, threshold)
          const overtimeH = Math.max(0, otTotalHours - threshold)

          calculationResult = {
            hours: Math.floor(otTotalHours),
            minutes: Math.round((otTotalHours % 1) * 60),
            seconds: 0,
            totalMinutes: otTotalMinutes,
            totalSeconds: otTotalMinutes * 60,
            totalHours: otTotalHours,
            businessDays: 0,
            workDays: 0,
            overtimeHours: overtimeH,
            regularHours: regularH,
            timezoneOffset: 0,
            formula: `Regular Hours = min(${otTotalHours.toFixed(2)}h, ${threshold}h) = ${regularH.toFixed(2)}h, Overtime = max(0, ${otTotalHours.toFixed(2)}h - ${threshold}h) = ${overtimeH.toFixed(2)}h`,
            explanation: `Total: ${otTotalHours.toFixed(2)}h, Regular: ${regularH.toFixed(2)}h, Overtime: ${overtimeH.toFixed(2)}h`
          }
          break

        case "timezone-conversion":
          if (!startTime || !timezone1 || !timezone2) return
          // Simple timezone conversion (UTC offset based)
          const [tzStartH, tzStartM] = startTime.split(":").map(Number)
          const tzStartMinutes = tzStartH * 60 + tzStartM
          const tzOffset = timezone1 === timezone2 ? 0 : 2 // Simple offset for demo
          const tzNewMinutes = (tzStartMinutes + tzOffset * 60) % (24 * 60)
          const tzNewHours = Math.floor(tzNewMinutes / 60)
          const tzNewMins = tzNewMinutes % 60

          calculationResult = {
            hours: tzNewHours,
            minutes: tzNewMins,
            seconds: 0,
            totalMinutes: tzNewMinutes,
            totalSeconds: tzNewMinutes * 60,
            totalHours: tzNewMinutes / 60,
            businessDays: 0,
            workDays: 0,
            overtimeHours: 0,
            regularHours: tzNewHours,
            timezoneOffset: tzOffset,
            formula: `Timezone Conversion: ${startTime} ${timezone1} = ${tzNewHours.toString().padStart(2, '0')}:${tzNewMins.toString().padStart(2, '0')} ${timezone2}`,
            explanation: `Converted ${startTime} from ${timezone1} to ${timezone2}: ${tzNewHours.toString().padStart(2, '0')}:${tzNewMins.toString().padStart(2, '0')}`
          }
          break

        case "work-days":
          if (!startDate || !endDate) return
          const start = new Date(startDate)
          const end = new Date(endDate)
          const diffTime = end.getTime() - start.getTime()
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
          const workDaysCount = Math.max(0, diffDays - Math.floor(diffDays / 7) * 2) // Exclude weekends

          calculationResult = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            totalMinutes: workDaysCount * 8 * 60, // 8 hours per work day
            totalSeconds: workDaysCount * 8 * 60 * 60,
            totalHours: workDaysCount * 8,
            businessDays: workDaysCount,
            workDays: workDaysCount,
            overtimeHours: 0,
            regularHours: workDaysCount * 8,
            timezoneOffset: 0,
            formula: `Work Days = Total Days - Weekend Days = ${diffDays} - ${Math.floor(diffDays / 7) * 2} = ${workDaysCount}`,
            explanation: `Work days between ${startDate} and ${endDate}: ${workDaysCount} days (${workDaysCount * 8} hours)`
          }
          break

        default:
          return
      }

      setResult(calculationResult)
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `${result.explanation}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getCalculationTypeInfo = () => {
    switch (calculationType) {
      case "time-duration":
        return { title: "Time Duration Calculator", description: "Calculate duration between two times", icon: Clock }
      case "time-addition":
        return { title: "Time Addition Calculator", description: "Add time to a specific time", icon: Plus }
      case "time-subtraction":
        return { title: "Time Subtraction Calculator", description: "Subtract time from a specific time", icon: Minus }
      case "business-hours":
        return { title: "Business Hours Calculator", description: "Calculate business hours only", icon: Target }
      case "timezone-conversion":
        return { title: "Timezone Conversion", description: "Convert time between timezones", icon: Globe }
      case "work-days":
        return { title: "Work Days Calculator", description: "Calculate working days", icon: Calendar }
      case "overtime-calculator":
        return { title: "Overtime Calculator", description: "Calculate regular and overtime hours", icon: TrendingUp }
      default:
        return { title: "Time Duration Calculator", description: "Advanced time calculations", icon: Clock }
    }
  }

  const isFormValid = () => {
    switch (calculationType) {
      case "time-duration":
      case "business-hours":
      case "overtime-calculator":
        return startTime && endTime
      case "time-addition":
        return startTime && timeToAdd
      case "time-subtraction":
        return startTime && timeToSubtract
      case "timezone-conversion":
        return startTime && timezone1 && timezone2
      case "work-days":
        return startDate && endDate
      default:
        return false
    }
  }

  const typeInfo = getCalculationTypeInfo()
  const IconComponent = typeInfo.icon

  return (
    <div className="space-y-4">
      {/* Current Time Display */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardContent className="p-3">
          <div className="flex items-center gap-2 text-heading-accent">
            <Timer className="h-3.5 w-3.5 text-heading-accent" />
            <span className="text-xs font-medium text-foreground">Current Time (UTC):</span>
            <span className="text-sm font-bold text-heading-accent">{currentTime}</span>
          </div>
        </GCardContent>
      </GCard>

      {/* Calculation Type Selector */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader className="pb-3">
          <GCardTitle className="flex items-center gap-2 text-lg text-heading-accent">
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <IconComponent className="h-4 w-4 text-heading-accent" />
            </div>
            {typeInfo.title}
          </GCardTitle>
          <GCardDescription className="text-sm text-muted-foreground">{typeInfo.description}</GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-4">
          {/* Calculation Type Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              { type: "time-duration", label: "Duration", shortLabel: "Duration", icon: Clock },
              { type: "time-addition", label: "Addition", shortLabel: "Add", icon: Plus },
              { type: "time-subtraction", label: "Subtraction", shortLabel: "Subtract", icon: Minus },
              { type: "business-hours", label: "Business", shortLabel: "Business", icon: Target },
              { type: "timezone-conversion", label: "Timezone", shortLabel: "TZ", icon: Globe },
              { type: "work-days", label: "Work Days", shortLabel: "Work", icon: Calendar },
              { type: "overtime-calculator", label: "Overtime", shortLabel: "OT", icon: TrendingUp }
            ].map(({ type, label, shortLabel, icon: Icon }) => (
              <GButton
                key={type}
                variant={calculationType === type ? "default" : "outline"}
                onClick={() => setCalculationType(type as CalculationType)}
                className={`h-9 text-xs font-medium transition-all duration-300 ${calculationType === type
                    ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg border-border"
                    : "hover:bg-secondary border-border bg-card text-muted-foreground hover:text-heading-accent"
                  }`}
              >
                <Icon className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{shortLabel}</span>
              </GButton>
            ))}
          </div>

          {/* GInput Fields */}
          <div className="space-y-3">
            {calculationType === "time-duration" && (
              <>
                <div className="space-y-1.5">
                  <GLabel htmlFor="starttime" className="text-xs font-medium flex items-center gap-1.5 text-heading-accent">
                    <div className="p-0.5 bg-green-500/10 rounded">
                      <Clock className="h-3 w-3 text-heading-accent" />
                    </div>
                    Start Time
                  </GLabel>
                  <GInput
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
                <div className="space-y-1.5">
                  <GLabel htmlFor="endtime" className="text-xs font-medium flex items-center gap-1.5 text-heading-accent">
                    <div className="p-0.5 bg-green-500/10 rounded">
                      <Target className="h-3 w-3 text-heading-accent" />
                    </div>
                    End Time
                  </GLabel>
                  <GInput
                    id="endtime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
              </>
            )}

            {calculationType === "time-addition" && (
              <>
                <div className="space-y-2">
                  <GLabel htmlFor="starttime" className="text-sm font-medium flex items-center gap-2 text-heading-accent">
                    <div className="p-1 bg-green-500/10 rounded">
                      <Clock className="h-3 w-3 text-heading-accent" />
                    </div>
                    Start Time
                  </GLabel>
                  <GInput
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
                <div className="space-y-2">
                  <GLabel htmlFor="timetoadd" className="text-xs font-medium flex items-center gap-1.5 text-heading-accent">
                    <div className="p-0.5 bg-green-500/10 rounded">
                      <Plus className="h-3 w-3 text-heading-accent" />
                    </div>
                    Time to Add
                  </GLabel>
                  <GInput
                    id="timetoadd"
                    type="time"
                    value={timeToAdd}
                    onChange={(e) => setTimeToAdd(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
              </>
            )}

            {calculationType === "time-subtraction" && (
              <>
                <div className="space-y-2">
                  <GLabel htmlFor="starttime" className="text-sm font-medium flex items-center gap-2 text-heading-accent">
                    <div className="p-1 bg-green-500/10 rounded">
                      <Clock className="h-3 w-3 text-heading-accent" />
                    </div>
                    Start Time
                  </GLabel>
                  <GInput
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
                <div className="space-y-2">
                  <GLabel htmlFor="timetosubtract" className="text-xs font-medium flex items-center gap-1.5 text-heading-accent">
                    <div className="p-0.5 bg-green-500/10 rounded">
                      <Minus className="h-3 w-3 text-heading-accent" />
                    </div>
                    Time to Subtract
                  </GLabel>
                  <GInput
                    id="timetosubtract"
                    type="time"
                    value={timeToSubtract}
                    onChange={(e) => setTimeToSubtract(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
              </>
            )}

            {calculationType === "business-hours" && (
              <>
                <div className="space-y-1.5">
                  <GLabel htmlFor="starttime" className="text-xs font-medium flex items-center gap-1.5 text-heading-accent">
                    <div className="p-0.5 bg-green-500/10 rounded">
                      <Clock className="h-3 w-3 text-heading-accent" />
                    </div>
                    Start Time
                  </GLabel>
                  <GInput
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
                <div className="space-y-1.5">
                  <GLabel htmlFor="endtime" className="text-xs font-medium flex items-center gap-1.5 text-heading-accent">
                    <div className="p-0.5 bg-green-500/10 rounded">
                      <Target className="h-3 w-3 text-heading-accent" />
                    </div>
                    End Time
                  </GLabel>
                  <GInput
                    id="endtime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <GLabel htmlFor="businessstart" className="text-xs font-medium text-heading-accent">Business Start</GLabel>
                    <GInput
                      id="businessstart"
                      type="time"
                      value={businessStart}
                      onChange={(e) => setBusinessStart(e.target.value)}
                      className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                    />
                  </div>
                  <div className="space-y-2">
                    <GLabel htmlFor="businessend" className="text-xs font-medium text-heading-accent">Business End</GLabel>
                    <GInput
                      id="businessend"
                      type="time"
                      value={businessEnd}
                      onChange={(e) => setBusinessEnd(e.target.value)}
                      className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                    />
                  </div>
                </div>
              </>
            )}

            {calculationType === "overtime-calculator" && (
              <>
                <div className="space-y-1.5">
                  <GLabel htmlFor="starttime" className="text-xs font-medium flex items-center gap-1.5 text-heading-accent">
                    <div className="p-0.5 bg-green-500/10 rounded">
                      <Clock className="h-3 w-3 text-heading-accent" />
                    </div>
                    Start Time
                  </GLabel>
                  <GInput
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
                <div className="space-y-1.5">
                  <GLabel htmlFor="endtime" className="text-xs font-medium flex items-center gap-1.5 text-heading-accent">
                    <div className="p-0.5 bg-green-500/10 rounded">
                      <Target className="h-3 w-3 text-heading-accent" />
                    </div>
                    End Time
                  </GLabel>
                  <GInput
                    id="endtime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
                <div className="space-y-2">
                  <GLabel htmlFor="overtimethreshold" className="text-xs font-medium flex items-center gap-1.5 text-heading-accent">
                    <div className="p-0.5 bg-green-500/10 rounded">
                      <TrendingUp className="h-3 w-3 text-heading-accent" />
                    </div>
                    Overtime Threshold (hours)
                  </GLabel>
                  <GInput
                    id="overtimethreshold"
                    type="number"
                    value={overtimeThreshold}
                    onChange={(e) => setOvertimeThreshold(e.target.value)}
                    placeholder="40"
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
              </>
            )}

            {calculationType === "timezone-conversion" && (
              <>
                <div className="space-y-2">
                  <GLabel htmlFor="starttime" className="text-sm font-medium flex items-center gap-2 text-heading-accent">
                    <div className="p-1 bg-green-500/10 rounded">
                      <Clock className="h-3 w-3 text-heading-accent" />
                    </div>
                    Time
                  </GLabel>
                  <GInput
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <GLabel htmlFor="timezone1" className="text-xs font-medium text-heading-accent">From Timezone</GLabel>
                    <GInput
                      id="timezone1"
                      type="text"
                      value={timezone1}
                      onChange={(e) => setTimezone1(e.target.value)}
                      placeholder="UTC"
                      className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                    />
                  </div>
                  <div className="space-y-2">
                    <GLabel htmlFor="timezone2" className="text-xs font-medium text-heading-accent">To Timezone</GLabel>
                    <GInput
                      id="timezone2"
                      type="text"
                      value={timezone2}
                      onChange={(e) => setTimezone2(e.target.value)}
                      placeholder="EST"
                      className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                    />
                  </div>
                </div>
              </>
            )}

            {calculationType === "work-days" && (
              <>
                <div className="space-y-2">
                  <GLabel htmlFor="startdate" className="text-xs font-medium flex items-center gap-1.5 text-heading-accent">
                    <div className="p-0.5 bg-green-500/10 rounded">
                      <Calendar className="h-3 w-3 text-heading-accent" />
                    </div>
                    Start Date
                  </GLabel>
                  <GInput
                    id="startdate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
                <div className="space-y-2">
                  <GLabel htmlFor="enddate" className="text-xs font-medium flex items-center gap-1.5 text-heading-accent">
                    <div className="p-0.5 bg-green-500/10 rounded">
                      <Target className="h-3 w-3 text-heading-accent" />
                    </div>
                    End Date
                  </GLabel>
                  <GInput
                    id="enddate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="h-9 text-sm px-3 py-2 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-border hover:border-border/50 ring-offset-1"
                  />
                </div>
              </>
            )}
          </div>

          <GButton
            onClick={calculateDuration}
            className="w-full h-10 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
            disabled={!isFormValid() || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-1.5 h-3.5 w-3.5" />
                <span>Calculating...</span>
              </>
            ) : (
              <>
                <Calculator className="mr-1.5 h-3.5 w-3.5" />
                <span>Calculate {typeInfo.title}</span>
              </>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <GCard className="shadow-lg border-border animate-fade-in-up bg-card">
          <GCardHeader className="pb-3">
            <GCardTitle className="text-lg flex items-center gap-2 text-heading-accent">
              <div className="p-1.5 bg-primary/10 rounded-lg">
                <IconComponent className="h-4 w-4 text-heading-accent" />
              </div>
              {typeInfo.title} Result
            </GCardTitle>
            <GCardDescription className="text-sm text-muted-foreground">{result.explanation}</GCardDescription>
          </GCardHeader>
          <GCardContent className="space-y-4">
            {/* Main Result Display */}
            <div className="text-center p-4 rounded-xl bg-card border border-border/20">
              <div className="text-2xl font-bold text-heading-accent mb-1">
                {result.hours}h {result.minutes}m
              </div>
              <div className="text-xs text-muted-foreground">
                {result.totalHours.toFixed(2)} total hours
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
              <div className="text-sm font-semibold mb-2 text-heading-accent">Calculation Details</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex justify-between items-center p-2 bg-card rounded-lg border border-border">
                  <span className="text-xs text-heading-accent">Hours</span>
                  <span className="font-semibold text-xs text-heading-accent">{result.hours}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-card rounded-lg border border-border">
                  <span className="text-xs text-heading-accent">Minutes</span>
                  <span className="font-semibold text-xs text-heading-accent">{result.minutes}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-card rounded-lg border border-border">
                  <span className="text-xs text-heading-accent">Total Minutes</span>
                  <span className="font-semibold text-xs text-heading-accent">{result.totalMinutes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-card rounded-lg border border-border">
                  <span className="text-xs text-heading-accent">Total Seconds</span>
                  <span className="font-semibold text-xs text-heading-accent">{result.totalSeconds.toLocaleString()}</span>
                </div>
                {result.overtimeHours > 0 && (
                  <div className="flex justify-between items-center p-2 bg-card rounded-lg border border-border">
                    <span className="text-xs text-heading-accent">Overtime Hours</span>
                    <span className="font-semibold text-xs text-heading-accent">{result.overtimeHours.toFixed(2)}</span>
                  </div>
                )}
                {result.regularHours > 0 && (
                  <div className="flex justify-between items-center p-2 bg-card rounded-lg border border-border">
                    <span className="text-xs text-heading-accent">Regular Hours</span>
                    <span className="font-semibold text-xs text-heading-accent">{result.regularHours.toFixed(2)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Formula Display */}
            <div className="p-3 bg-card rounded-xl border border-border">
              <div className="text-xs font-semibold text-heading-accent mb-1.5">Formula Used:</div>
              <div className="text-[10px] text-foreground font-mono bg-card border border-border p-1.5 rounded">
                {result.formula}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <GButton
                onClick={copyResult}
                className="flex-1 h-9 text-xs font-medium transition-all duration-300 border border-border hover:bg-secondary text-heading-accent bg-card"
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5" />
                    <span>Copy Result</span>
                  </>
                )}
              </GButton>
            </div>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
