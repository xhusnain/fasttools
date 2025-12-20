"use client"

import { useState, useEffect, useCallback } from "react"
import { Calendar, Clock, ThermometerSnowflake, Droplets, AlertTriangle, CheckCircle, AlertCircle, Timer, ChevronDown, ChevronUp } from "lucide-react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardHeader, GCardTitle, GCardDescription } from "@/ui/gcard"
import { cn } from "@/lib/utils"

type Unit = "lbs" | "kg"
type Method = "fridge" | "water"
type PanicLevel = "critical" | "urgent" | "warning" | "safe"

interface DefrostResult {
    hoursToDefrost: number
    startDate: Date
    formattedStartDate: string
    formattedStartTime: string
    panicLevel: PanicLevel
    hoursRemaining: number
}

// Holiday presets
const holidayPresets = [
    { name: "🎄 Christmas Day", date: "2025-12-25T14:00" },
    { name: "🦃 Thanksgiving 2025", date: "2025-11-27T14:00" },
    { name: "🎉 New Year's Day", date: "2026-01-01T13:00" },
]

// Weight presets
const weightPresets = [
    { name: "Small", weight: 10, emoji: "🦃" },
    { name: "Medium", weight: 15, emoji: "🦃🦃" },
    { name: "Large", weight: 20, emoji: "🦃🦃🦃" },
]

// Reference chart data
const referenceChart = [
    { weight: 10, fridge: "2 days", water: "5 hours" },
    { weight: 12, fridge: "2.5 days", water: "6 hours" },
    { weight: 15, fridge: "3 days", water: "7.5 hours" },
    { weight: 18, fridge: "3.5 days", water: "9 hours" },
    { weight: 20, fridge: "4 days", water: "10 hours" },
    { weight: 25, fridge: "5 days", water: "12.5 hours" },
]

export function TurkeyDefrostCalculator() {
    const [weight, setWeight] = useState("15")
    const [unit, setUnit] = useState<Unit>("lbs")
    const [method, setMethod] = useState<Method>("fridge")
    const [eatingTime, setEatingTime] = useState("")
    const [result, setResult] = useState<DefrostResult | null>(null)
    const [showEmergencyMode, setShowEmergencyMode] = useState(false)
    const [waterChangeTimer, setWaterChangeTimer] = useState<number | null>(null)
    const [timerRunning, setTimerRunning] = useState(false)
    const [showChart, setShowChart] = useState(false)

    // Set default eating time to closest Christmas 2pm
    useEffect(() => {
        const now = new Date()
        const currentYear = now.getFullYear()
        let christmas = new Date(currentYear, 11, 25, 14, 0, 0)

        if (now > christmas) {
            christmas.setFullYear(currentYear + 1)
        }

        const pad = (n: number) => n.toString().padStart(2, '0')
        const defaultTime = `${christmas.getFullYear()}-${pad(christmas.getMonth() + 1)}-${pad(christmas.getDate())}T14:00`

        setEatingTime(defaultTime)
    }, [])

    // Water change timer countdown
    useEffect(() => {
        if (!timerRunning || waterChangeTimer === null) return

        if (waterChangeTimer <= 0) {
            // Timer finished - alert!
            if (typeof window !== 'undefined' && 'Notification' in window) {
                new Notification('🦃 Time to change the water!', {
                    body: 'Change the cold water now to keep your turkey safe!',
                })
            }
            setWaterChangeTimer(30 * 60) // Reset to 30 minutes
            return
        }

        const interval = setInterval(() => {
            setWaterChangeTimer(prev => prev !== null ? prev - 1 : null)
        }, 1000)

        return () => clearInterval(interval)
    }, [timerRunning, waterChangeTimer])

    const calculateDefrostTime = useCallback(() => {
        if (!weight || !eatingTime) {
            setResult(null)
            return
        }

        const weightNum = parseFloat(weight)
        if (isNaN(weightNum) || weightNum <= 0) {
            setResult(null)
            return
        }

        let hours = 0
        if (method === "fridge") {
            hours = unit === "lbs" ? weightNum * (24 / 5) : weightNum * 10.5
        } else {
            hours = unit === "lbs" ? weightNum * 0.5 : weightNum * 1.1
        }

        const eatDate = new Date(eatingTime)
        const now = new Date()
        const cookAndPrepBufferHours = 5

        const finishDefrostingDate = new Date(eatDate.getTime() - (cookAndPrepBufferHours * 60 * 60 * 1000))
        const startDefrostingDate = new Date(finishDefrostingDate.getTime() - (hours * 60 * 60 * 1000))

        // Calculate hours remaining until we need to start
        const hoursUntilDeadline = (startDefrostingDate.getTime() - now.getTime()) / (1000 * 60 * 60)

        // Determine panic level
        let panicLevel: PanicLevel = "safe"
        if (hoursUntilDeadline < 0) {
            panicLevel = "critical" // Already past deadline
        } else if (hoursUntilDeadline < 12) {
            panicLevel = "urgent" // Less than 12 hours to start
        } else if (hoursUntilDeadline < 24) {
            panicLevel = "warning" // Less than 24 hours to start
        }

        setResult({
            hoursToDefrost: hours,
            startDate: startDefrostingDate,
            formattedStartDate: startDefrostingDate.toLocaleDateString("en-US", { weekday: 'long', month: 'short', day: 'numeric' }),
            formattedStartTime: startDefrostingDate.toLocaleTimeString("en-US", { hour: 'numeric', minute: '2-digit' }),
            panicLevel,
            hoursRemaining: Math.max(0, hoursUntilDeadline)
        })
    }, [weight, unit, method, eatingTime])

    useEffect(() => {
        calculateDefrostTime()
    }, [calculateDefrostTime])

    const addToCalendar = () => {
        if (!result) return

        const start = result.startDate
        const end = new Date(start.getTime() + (60 * 60 * 1000))

        const formatDate = (date: Date) => {
            return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
        }

        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            `DTSTART:${formatDate(start)}`,
            `DTEND:${formatDate(end)}`,
            `SUMMARY:🦃 Start Defrosting Turkey (${method === 'fridge' ? 'Fridge' : 'Cold Water'})`,
            `DESCRIPTION:Time to move your ${weight} ${unit} turkey to the ${method === 'fridge' ? 'fridge' : 'cold water'}! It needs approximately ${Math.round(result.hoursToDefrost)} hours to defrost.`,
            'BEGIN:VALARM',
            'TRIGGER:-PT15M',
            'ACTION:DISPLAY',
            'DESCRIPTION:Turkey Defrost Reminder',
            'END:VALARM',
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n')

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.setAttribute('download', 'turkey_defrost_reminder.ics')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const startWaterChangeTimer = () => {
        if (typeof window !== 'undefined' && 'Notification' in window) {
            Notification.requestPermission()
        }
        setWaterChangeTimer(30 * 60) // 30 minutes in seconds
        setTimerRunning(true)
    }

    const formatTimer = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const getPanicConfig = (level: PanicLevel) => {
        switch (level) {
            case "critical":
                return {
                    icon: AlertTriangle,
                    color: "text-red-500",
                    bg: "bg-red-500/20 border-red-500/50",
                    message: "🚨 TOO LATE for " + (method === "fridge" ? "fridge! Switch to COLD WATER NOW!" : "this method!"),
                }
            case "urgent":
                return {
                    icon: AlertCircle,
                    color: "text-orange-500",
                    bg: "bg-orange-500/20 border-orange-500/50",
                    message: "⚠️ Start defrosting TODAY or risk panic tomorrow!",
                }
            case "warning":
                return {
                    icon: Clock,
                    color: "text-yellow-500",
                    bg: "bg-yellow-500/20 border-yellow-500/50",
                    message: "🔔 Start defrosting TOMORROW morning",
                }
            default:
                return {
                    icon: CheckCircle,
                    color: "text-green-500",
                    bg: "bg-green-500/20 border-green-500/50",
                    message: "✅ You have plenty of time!",
                }
        }
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Urgency Banner */}
            {result && (
                <div className={cn(
                    "rounded-xl p-4 border-2 animate-in fade-in slide-in-from-top-2",
                    getPanicConfig(result.panicLevel).bg
                )}>
                    <div className="flex items-center gap-3">
                        {(() => {
                            const config = getPanicConfig(result.panicLevel)
                            const Icon = config.icon
                            return <Icon className={cn("h-6 w-6", config.color)} />
                        })()}
                        <p className={cn("font-bold text-lg", getPanicConfig(result.panicLevel).color)}>
                            {getPanicConfig(result.panicLevel).message}
                        </p>
                    </div>
                    {result.panicLevel === "critical" && method === "fridge" && (
                        <button
                            onClick={() => setMethod("water")}
                            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
                        >
                            🌊 Switch to Cold Water Method
                        </button>
                    )}
                </div>
            )}

            {/* Holiday Presets */}
            <div className="flex flex-wrap gap-2 justify-center">
                {holidayPresets.map((preset) => (
                    <button
                        key={preset.name}
                        onClick={() => setEatingTime(preset.date)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all",
                            eatingTime === preset.date
                                ? "bg-primary text-white shadow-lg scale-105"
                                : "bg-card border border-border hover:border-primary/50 hover:bg-primary/10"
                        )}
                    >
                        {preset.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Turkey Details Card */}
                <GCard className="h-full border-yellow-500/30">
                    <GCardHeader>
                        <GCardTitle className="flex items-center gap-2">
                            <span className="text-2xl">🦃</span> Turkey Details
                        </GCardTitle>
                        <GCardDescription>Enter weight and defrost method</GCardDescription>
                    </GCardHeader>
                    <GCardContent className="space-y-6">
                        {/* Weight Presets */}
                        <div className="flex gap-2 justify-center">
                            {weightPresets.map((preset) => (
                                <button
                                    key={preset.name}
                                    onClick={() => setWeight(preset.weight.toString())}
                                    className={cn(
                                        "px-3 py-2 rounded-lg text-sm font-medium transition-all flex flex-col items-center",
                                        weight === preset.weight.toString()
                                            ? "bg-primary text-white"
                                            : "bg-muted hover:bg-primary/20"
                                    )}
                                >
                                    <span>{preset.emoji}</span>
                                    <span>{preset.name}</span>
                                    <span className="text-xs opacity-70">{preset.weight} lbs</span>
                                </button>
                            ))}
                        </div>

                        <div className="space-y-2">
                            <GLabel>Weight</GLabel>
                            <div className="flex gap-2">
                                <GInput
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="e.g. 15"
                                    className="text-lg"
                                    min="0"
                                />
                                <div className="flex bg-muted rounded-md p-1 items-center">
                                    <button
                                        onClick={() => setUnit("lbs")}
                                        className={cn(
                                            "px-3 py-1.5 rounded-sm text-sm font-medium transition-all",
                                            unit === "lbs" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        lbs
                                    </button>
                                    <button
                                        onClick={() => setUnit("kg")}
                                        className={cn(
                                            "px-3 py-1.5 rounded-sm text-sm font-medium transition-all",
                                            unit === "kg" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        kg
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <GLabel>Defrost Method</GLabel>
                            <div className="grid grid-cols-2 gap-3">
                                <div
                                    onClick={() => setMethod("fridge")}
                                    className={cn(
                                        "cursor-pointer rounded-xl border-2 p-4 transition-all hover:bg-accent/50",
                                        method === "fridge" ? "border-primary bg-primary/10" : "border-transparent bg-secondary"
                                    )}
                                >
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <ThermometerSnowflake className={cn("h-6 w-6", method === "fridge" ? "text-primary" : "text-muted-foreground")} />
                                        <span className="font-medium">Fridge</span>
                                        <span className="text-xs text-muted-foreground">Safe & Easy. Takes days.</span>
                                    </div>
                                </div>

                                <div
                                    onClick={() => setMethod("water")}
                                    className={cn(
                                        "cursor-pointer rounded-xl border-2 p-4 transition-all hover:bg-accent/50",
                                        method === "water" ? "border-blue-500 bg-blue-500/10" : "border-transparent bg-secondary"
                                    )}
                                >
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <Droplets className={cn("h-6 w-6", method === "water" ? "text-blue-500" : "text-muted-foreground")} />
                                        <span className="font-medium">Cold Water</span>
                                        <span className="text-xs text-muted-foreground">Faster. Change water every 30m.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GCardContent>
                </GCard>

                {/* Timing Card */}
                <GCard className="h-full border-yellow-500/30">
                    <GCardHeader>
                        <GCardTitle className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" /> Timing
                        </GCardTitle>
                        <GCardDescription>When do you want to eat?</GCardDescription>
                    </GCardHeader>
                    <GCardContent className="space-y-6">
                        <div className="space-y-2">
                            <GLabel>Dinner Date & Time</GLabel>
                            <GInput
                                type="datetime-local"
                                value={eatingTime}
                                onChange={(e) => setEatingTime(e.target.value)}
                                className="text-lg"
                            />
                            <p className="text-xs text-muted-foreground">
                                We assume ~5 hours for prep, cooking, and resting before this time.
                            </p>
                        </div>

                        {result && (
                            <div className="bg-primary/10 rounded-lg p-6 border border-primary/20 space-y-2 animate-in fade-in slide-in-from-bottom-2">
                                <p className="text-sm font-medium text-primary uppercase tracking-wider">Defrosting Time</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                                        {Math.round(result.hoursToDefrost * 10) / 10}
                                    </span>
                                    <span className="text-muted-foreground font-medium">hours total</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    ({Math.ceil(result.hoursToDefrost / 24)} days)
                                </p>
                            </div>
                        )}
                    </GCardContent>
                </GCard>
            </div>

            {/* Result Card */}
            {result && (
                <div className="relative group">
                    <div className={cn(
                        "absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000",
                        result.panicLevel === "critical" ? "bg-gradient-to-r from-red-600 to-red-400" :
                            result.panicLevel === "urgent" ? "bg-gradient-to-r from-orange-600 to-orange-400" :
                                "bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400"
                    )}></div>
                    <GCard className="relative border-2 border-primary/20 bg-card/95 backdrop-blur-sm">
                        <GCardContent className="p-8">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="space-y-4 text-center md:text-left flex-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                        <Calendar className="h-4 w-4" />
                                        Deadline Calculated
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                                        Start defrosting on <br className="hidden md:block" />
                                        <span className="text-primary">{result.formattedStartDate}</span> at <span className="text-primary">{result.formattedStartTime}</span>
                                    </h3>
                                    <p className="text-muted-foreground text-lg">
                                        Your turkey will be fully thawed and ready to cook 5 hours before dinner.
                                    </p>
                                </div>

                                <div className="flex-shrink-0">
                                    <GButton
                                        size="xl"
                                        onClick={addToCalendar}
                                        className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white shadow-lg scale-100 hover:scale-105 transition-all w-full md:w-auto"
                                        leftIcon={<Calendar className="h-5 w-5" />}
                                    >
                                        Add to Calendar
                                    </GButton>
                                </div>
                            </div>
                        </GCardContent>
                    </GCard>
                </div>
            )}

            {/* Emergency Mode */}
            <div className="text-center">
                <button
                    onClick={() => setShowEmergencyMode(!showEmergencyMode)}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold shadow-lg transition-all hover:scale-105"
                >
                    🚨 HELP! My turkey is still frozen!
                </button>
            </div>

            {showEmergencyMode && (
                <GCard className="border-red-500/50 bg-red-500/5 animate-in fade-in slide-in-from-bottom-4">
                    <GCardHeader>
                        <GCardTitle className="text-red-400 flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5" /> Emergency Cold Water Thawing
                        </GCardTitle>
                    </GCardHeader>
                    <GCardContent className="space-y-4">
                        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                            <li><strong>Keep it wrapped</strong> - Leave turkey in its original packaging</li>
                            <li><strong>Submerge in cold water</strong> - Use a large container or clean sink</li>
                            <li><strong>Change water every 30 minutes</strong> - This keeps it safe!</li>
                            <li><strong>Allow 30 minutes per pound</strong> - A 15lb turkey takes ~7.5 hours</li>
                            <li><strong>Cook immediately</strong> - Once thawed, cook right away</li>
                        </ol>

                        <div className="flex items-center gap-4 p-4 bg-blue-500/20 rounded-xl">
                            <Timer className="h-8 w-8 text-blue-400" />
                            <div className="flex-1">
                                <p className="font-bold text-blue-300">Water Change Timer</p>
                                {timerRunning && waterChangeTimer !== null ? (
                                    <p className="text-3xl font-mono text-blue-400">{formatTimer(waterChangeTimer)}</p>
                                ) : (
                                    <p className="text-muted-foreground">Click to start 30-minute reminder</p>
                                )}
                            </div>
                            <button
                                onClick={timerRunning ? () => setTimerRunning(false) : startWaterChangeTimer}
                                className={cn(
                                    "px-4 py-2 rounded-lg font-bold",
                                    timerRunning ? "bg-red-500 text-white" : "bg-blue-500 text-white"
                                )}
                            >
                                {timerRunning ? "Stop" : "Start Timer"}
                            </button>
                        </div>
                    </GCardContent>
                </GCard>
            )}

            {/* Reference Chart */}
            <div className="text-center">
                <button
                    onClick={() => setShowChart(!showChart)}
                    className="flex items-center gap-2 mx-auto px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                    {showChart ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {showChart ? "Hide" : "Show"} Quick Reference Chart
                </button>
            </div>

            {showChart && (
                <GCard className="animate-in fade-in slide-in-from-bottom-4">
                    <GCardHeader>
                        <GCardTitle>🦃 Turkey Defrost Time Chart</GCardTitle>
                        <GCardDescription>Quick reference for common turkey sizes</GCardDescription>
                    </GCardHeader>
                    <GCardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-3 px-4 font-semibold">Weight (lbs)</th>
                                        <th className="text-left py-3 px-4 font-semibold">❄️ Fridge Time</th>
                                        <th className="text-left py-3 px-4 font-semibold">💧 Water Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {referenceChart.map((row) => (
                                        <tr key={row.weight} className="border-b border-border/50 hover:bg-muted/50">
                                            <td className="py-3 px-4 font-medium">{row.weight} lbs</td>
                                            <td className="py-3 px-4">{row.fridge}</td>
                                            <td className="py-3 px-4">{row.water}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4 text-center">
                            Based on USDA safety guidelines. Fridge: 24h/5lbs | Cold Water: 30min/lb
                        </p>
                    </GCardContent>
                </GCard>
            )}
        </div>
    )
}
