"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, ThermometerSnowflake, Droplets, ArrowRight, Download } from "lucide-react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardHeader, GCardTitle, GCardDescription } from "@/ui/gcard"
import { cn } from "@/lib/utils"

type Unit = "lbs" | "kg"
type Method = "fridge" | "water"

interface DefrostResult {
    hoursToDefrost: number
    startDate: Date
    formattedStartDate: string
    formattedStartTime: string
}

export function TurkeyDefrostCalculator() {
    const [weight, setWeight] = useState("")
    const [unit, setUnit] = useState<Unit>("lbs")
    const [method, setMethod] = useState<Method>("fridge")
    const [eatingTime, setEatingTime] = useState("")
    const [result, setResult] = useState<DefrostResult | null>(null)

    // Set default eating time to closest Christmas 2pm
    useEffect(() => {
        const now = new Date()
        const currentYear = now.getFullYear()
        // If it's already past Christmas, suggest next year
        const christmas = new Date(currentYear, 11, 25, 14, 0, 0) // Dec 25, 14:00

        if (now > christmas) {
            christmas.setFullYear(currentYear + 1)
        }

        // Format for datetime-local input: YYYY-MM-DDTHH:mm
        const pad = (n: number) => n.toString().padStart(2, '0')
        const defaultTime = `${christmas.getFullYear()}-${pad(christmas.getMonth() + 1)}-${pad(christmas.getDate())}T14:00`

        setEatingTime(defaultTime)
    }, [])

    useEffect(() => {
        calculateDefrostTime()
    }, [weight, unit, method, eatingTime])

    const calculateDefrostTime = () => {
        if (!weight || !eatingTime) {
            setResult(null)
            return
        }

        const weightNum = parseFloat(weight)
        if (isNaN(weightNum) || weightNum <= 0) {
            setResult(null)
            return
        }

        // Convert to kg for standardized calculation if needed, 
        // but calculating per unit logic is often cleaner based on guidelines.

        // Guidelines:
        // Fridge: 24 hours for every 5 lbs (approx 10-12h per kg) -> 4.8 hours per lb
        // Water: 30 mins per lb (approx 1h per kg) -> 0.5 hours per lb

        let hours = 0
        if (method === "fridge") {
            if (unit === "lbs") {
                hours = weightNum * (24 / 5) // 4.8 hours per lb
            } else {
                // 1 kg = 2.20462 lbs. 4.8 * 2.20462 = 10.58 hours per kg. 
                // Standard rule is ~10-12 hours per kg. Let's use 10.5h/kg
                hours = weightNum * 10.5
            }
        } else {
            // Water
            if (unit === "lbs") {
                hours = weightNum * 0.5 // 30 mins per lb
            } else {
                // 30 mins per lb = 0.5h per lb. 0.5 * 2.20462 = 1.1 hours per kg.
                // Standard rule is ~1 hour per kg. Let's use 1.1h/kg to be safe/consistent with lb rule.
                hours = weightNum * 1.1
            }
        }

        const eatDate = new Date(eatingTime)
        // Cooking time buffer? The user asked "To eat at...", this usually implies serving time.
        // Turkeys need cooking + resting. 
        // Let's assume the user inputs the time they want to START cooking or we should subtract cooking time?
        // The prompt says: "To eat at 2:00 PM... move your turkey... on Dec 23rd at 4:00 PM".
        // This implies we solve for X = EatTime - CookTime - RestTime - DefrostTime.
        // BUT the prompt example just says "How long to defrost". 
        // Usually "Defrosting Deadline" means "When must it be fully defrosted by". 
        // Turkeys need to be fully defrosted BEFORE cooking.
        // Cooking a turkey takes 3-5 hours. 
        // To keep it simple and accurate to the "Defrosting Deadline" logical name:
        // We calculate when to START defrosting so it FINISHES defrosting exactly when needed? 
        // Or normally people want it defrosted the morning of cooking.

        // Let's assume EAT TIME is the anchor. 
        // We should probably subtract ~4-5 hours for cooking/resting to get "Ready to Cook" time.
        // Then subtract defrost hours from "Ready to Cook" time.

        // Estimate: 4 hours for cooking + prep + resting (avg big turkey).
        const cookAndPrepBufferHours = 5

        const finishDefrostingDate = new Date(eatDate.getTime() - (cookAndPrepBufferHours * 60 * 60 * 1000))
        const startDefrostingDate = new Date(finishDefrostingDate.getTime() - (hours * 60 * 60 * 1000))

        setResult({
            hoursToDefrost: hours,
            startDate: startDefrostingDate,
            formattedStartDate: startDefrostingDate.toLocaleDateString("en-US", { weekday: 'long', month: 'short', day: 'numeric' }),
            formattedStartTime: startDefrostingDate.toLocaleTimeString("en-US", { hour: 'numeric', minute: '2-digit' })
        })
    }

    const addToCalendar = () => {
        if (!result) return

        const start = result.startDate
        const end = new Date(start.getTime() + (60 * 60 * 1000)) // 1 hour duration for event

        // Simple ICS format
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

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Unit & Method Method Card */}
                <GCard className="h-full">
                    <GCardHeader>
                        <GCardTitle>Turkey Details</GCardTitle>
                        <GCardDescription>Enter weight and how you plan to defrost</GCardDescription>
                    </GCardHeader>
                    <GCardContent className="space-y-6">
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
                                        method === "fridge" ? "border-primary bg-primary/5" : "border-transparent bg-secondary"
                                    )}
                                >
                                    <div className="flex flex-col items-center gap-2 text-center">
                                        <ThermometerSnowflake className={cn("h-6 w-6", method === "fridge" ? "text-primary" : "text-muted-foreground")} />
                                        <span className="font-medium">Fridge</span>
                                        <span className="text-xs text-muted-foreground">Very safe. Takes days.</span>
                                    </div>
                                </div>

                                <div
                                    onClick={() => setMethod("water")}
                                    className={cn(
                                        "cursor-pointer rounded-xl border-2 p-4 transition-all hover:bg-accent/50",
                                        method === "water" ? "border-blue-500 bg-blue-500/5" : "border-transparent bg-secondary"
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
                <GCard className="h-full">
                    <GCardHeader>
                        <GCardTitle>Timing</GCardTitle>
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
                            </div>
                        )}
                    </GCardContent>
                </GCard>
            </div>

            {/* Result Card - The Actionable Part */}
            {result && (
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
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
                                        This ensures your turkey is fully thawed and ready to cook 5 hours before your dinner time.
                                    </p>
                                </div>

                                <div className="flex-shrink-0">
                                    <GButton
                                        size="xl"
                                        onClick={addToCalendar}
                                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg scale-100 hover:scale-105 transition-all w-full md:w-auto"
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
        </div>
    )
}
