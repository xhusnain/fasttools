"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Clock, Copy, Check, Calculator, Calendar, Globe, Timer, Zap, Target, TrendingUp, BarChart3, PieChart, ArrowUp, ArrowDown, Minus, Plus, Settings, Sparkles } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

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
    <div className="space-y-6">
      {/* Current Time Display */}
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
            <Timer className="h-4 w-4" />
            <span className="text-sm font-medium">Current Time (UTC):</span>
            <span className="text-lg font-bold">{currentTime}</span>
          </div>
        </CardContent>
      </Card>

      {/* Calculation Type Selector */}
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
            {typeInfo.title}
          </CardTitle>
          <CardDescription className="text-base">{typeInfo.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Calculation Type Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {[
              { type: "time-duration", label: "Duration", shortLabel: "Duration", icon: Clock },
              { type: "time-addition", label: "Addition", shortLabel: "Add", icon: Plus },
              { type: "time-subtraction", label: "Subtraction", shortLabel: "Subtract", icon: Minus },
              { type: "business-hours", label: "Business", shortLabel: "Business", icon: Target },
              { type: "timezone-conversion", label: "Timezone", shortLabel: "TZ", icon: Globe },
              { type: "work-days", label: "Work Days", shortLabel: "Work", icon: Calendar },
              { type: "overtime-calculator", label: "Overtime", shortLabel: "OT", icon: TrendingUp }
            ].map(({ type, label, shortLabel, icon: Icon }) => (
              <Button
                key={type}
                variant={calculationType === type ? "default" : "outline"}
                onClick={() => setCalculationType(type as CalculationType)}
                className={`h-10 sm:h-11 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  calculationType === type
                    ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg"
                    : "hover:bg-primary/10"
                }`}
              >
                <Icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{shortLabel}</span>
              </Button>
            ))}
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            {calculationType === "time-duration" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="starttime" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                      <Clock className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    Start Time
                  </Label>
                  <Input
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endtime" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">
                      <Target className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    End Time
                  </Label>
                  <Input
                    id="endtime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
              </>
            )}

            {calculationType === "time-addition" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="starttime" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                      <Clock className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    Start Time
                  </Label>
                  <Input
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timetoadd" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">
                      <Plus className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    Time to Add
                  </Label>
                  <Input
                    id="timetoadd"
                    type="time"
                    value={timeToAdd}
                    onChange={(e) => setTimeToAdd(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
              </>
            )}

            {calculationType === "time-subtraction" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="starttime" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                      <Clock className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    Start Time
                  </Label>
                  <Input
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timetosubtract" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-red-100 dark:bg-red-900/30 rounded">
                      <Minus className="h-3 w-3 text-red-600 dark:text-red-400" />
                    </div>
                    Time to Subtract
                  </Label>
                  <Input
                    id="timetosubtract"
                    type="time"
                    value={timeToSubtract}
                    onChange={(e) => setTimeToSubtract(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
              </>
            )}

            {calculationType === "business-hours" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="starttime" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                      <Clock className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    Start Time
                  </Label>
                  <Input
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endtime" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">
                      <Target className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    End Time
                  </Label>
                  <Input
                    id="endtime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessstart" className="text-sm font-medium">Business Start</Label>
                    <Input
                      id="businessstart"
                      type="time"
                      value={businessStart}
                      onChange={(e) => setBusinessStart(e.target.value)}
                      className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessend" className="text-sm font-medium">Business End</Label>
                    <Input
                      id="businessend"
                      type="time"
                      value={businessEnd}
                      onChange={(e) => setBusinessEnd(e.target.value)}
                      className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                    />
                  </div>
                </div>
              </>
            )}

            {calculationType === "overtime-calculator" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="starttime" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                      <Clock className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    Start Time
                  </Label>
                  <Input
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endtime" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">
                      <Target className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    End Time
                  </Label>
                  <Input
                    id="endtime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="overtimethreshold" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-purple-100 dark:bg-purple-900/30 rounded">
                      <TrendingUp className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                    </div>
                    Overtime Threshold (hours)
                  </Label>
                  <Input
                    id="overtimethreshold"
                    type="number"
                    value={overtimeThreshold}
                    onChange={(e) => setOvertimeThreshold(e.target.value)}
                    placeholder="40"
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
              </>
            )}

            {calculationType === "timezone-conversion" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="starttime" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                      <Clock className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    Time
                  </Label>
                  <Input
                    id="starttime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone1" className="text-sm font-medium">From Timezone</Label>
                    <Input
                      id="timezone1"
                      type="text"
                      value={timezone1}
                      onChange={(e) => setTimezone1(e.target.value)}
                      placeholder="UTC"
                      className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone2" className="text-sm font-medium">To Timezone</Label>
                    <Input
                      id="timezone2"
                      type="text"
                      value={timezone2}
                      onChange={(e) => setTimezone2(e.target.value)}
                      placeholder="EST"
                      className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                    />
                  </div>
                </div>
              </>
            )}

            {calculationType === "work-days" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="startdate" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                      <Calendar className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    Start Date
                  </Label>
                  <Input
                    id="startdate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enddate" className="text-sm font-medium flex items-center gap-2">
                    <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">
                      <Target className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    End Date
                  </Label>
                  <Input
                    id="enddate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 focus-visible:ring-primary hover:border-primary/50"
                  />
                </div>
              </>
            )}
          </div>

          <Button
            onClick={calculateDuration}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            disabled={!isFormValid() || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculating...</span>
                <span className="sm:hidden">Calc...</span>
              </>
            ) : (
              <>
                <Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculate {typeInfo.title}</span>
                <span className="sm:hidden">Calculate</span>
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <IconComponent className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              {typeInfo.title} Result
            </CardTitle>
            <CardDescription className="text-base">{result.explanation}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Result Display */}
            <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {result.hours}h {result.minutes}m
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {result.totalHours.toFixed(2)} total hours
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-3 p-4 sm:p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-800 dark:text-slate-200">Calculation Details</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <span className="text-sm text-blue-800 dark:text-blue-200">Hours</span>
                  <span className="font-semibold text-sm text-blue-900 dark:text-blue-100">{result.hours}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                  <span className="text-sm text-green-800 dark:text-green-200">Minutes</span>
                  <span className="font-semibold text-sm text-green-900 dark:text-green-100">{result.minutes}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <span className="text-sm text-purple-800 dark:text-purple-200">Total Minutes</span>
                  <span className="font-semibold text-sm text-purple-900 dark:text-purple-100">{result.totalMinutes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-800">
                  <span className="text-sm text-orange-800 dark:text-orange-200">Total Seconds</span>
                  <span className="font-semibold text-sm text-orange-900 dark:text-orange-100">{result.totalSeconds.toLocaleString()}</span>
                </div>
                {result.overtimeHours > 0 && (
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 rounded-lg border border-red-200 dark:border-red-800">
                    <span className="text-sm text-red-800 dark:text-red-200">Overtime Hours</span>
                    <span className="font-semibold text-sm text-red-900 dark:text-red-100">{result.overtimeHours.toFixed(2)}</span>
                  </div>
                )}
                {result.regularHours > 0 && (
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/30 rounded-lg border border-cyan-200 dark:border-cyan-800">
                    <span className="text-sm text-cyan-800 dark:text-cyan-200">Regular Hours</span>
                    <span className="font-semibold text-sm text-cyan-900 dark:text-cyan-100">{result.regularHours.toFixed(2)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Formula Display */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-sm sm:text-base font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Formula Used:</div>
              <div className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-mono bg-white/50 dark:bg-slate-800/50 p-2 rounded border">
                {result.formula}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                onClick={copyResult}
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-300 border-2 hover:bg-green-100 dark:hover:bg-green-900/30 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Copied!</span>
                    <span className="sm:hidden">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Copy Result</span>
                    <span className="sm:hidden">Copy</span>
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
