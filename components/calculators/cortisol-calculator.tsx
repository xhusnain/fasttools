"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, Sun, Moon, Coffee, Dumbbell,
  Brain, Clock, AlertTriangle, Zap, TrendingUp, TrendingDown,
  Activity, Eye, Sunrise, Sunset
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type {
  CortisolResult, CortisolPeak, TimeWindow, HourlyCortisol, Recommendation
} from "@/types/calculator-types/cortisol-calculator.types"

function addMinutes(timeStr: string, minutes: number): string {
  const [h, m] = timeStr.split(":").map(Number)
  const total = h * 60 + m + minutes
  const normalised = ((total % 1440) + 1440) % 1440
  const hh = Math.floor(normalised / 60)
  const mm = normalised % 60
  return `${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}`
}

function formatTime12(time24: string): string {
  const [h, m] = time24.split(":").map(Number)
  const period = h >= 12 ? "PM" : "AM"
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h
  return `${hour12}:${m.toString().padStart(2, "0")} ${period}`
}

function minutesSinceMidnight(time: string): number {
  const [h, m] = time.split(":").map(Number)
  return h * 60 + m
}

export function CortisolCalculator() {
  const [wakeUpTime, setWakeUpTime] = useState("07:00")
  const [result, setResult] = useState<CortisolResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const presets = [
    { label: "5:00 AM", value: "05:00" },
    { label: "6:00 AM", value: "06:00" },
    { label: "6:30 AM", value: "06:30" },
    { label: "7:00 AM", value: "07:00" },
    { label: "7:30 AM", value: "07:30" },
    { label: "8:00 AM", value: "08:00" },
    { label: "9:00 AM", value: "09:00" },
    { label: "10:00 AM", value: "10:00" },
  ]

  const calculateCortisol = () => {
    setIsCalculating(true)

    setTimeout(() => {
      const wake = wakeUpTime

      // Cortisol peaks (based on circadian rhythm research)
      // Peak 1: 20-30 min after waking (CAR - Cortisol Awakening Response)
      // Peak 2: ~12:00 noon (secondary)
      // Peak 3: ~5:30 PM (late afternoon)
      const cortisolPeaks: CortisolPeak[] = [
        {
          time: formatTime12(addMinutes(wake, 30)),
          level: "high",
          label: "Cortisol Awakening Response (CAR)",
          description: "Cortisol surges 50-75% within 30 minutes of waking. Your body's natural alarm system — no caffeine needed."
        },
        {
          time: formatTime12(addMinutes(wake, 240)),
          level: "moderate",
          label: "Mid-Morning Dip",
          description: "Cortisol drops to moderate levels. This is when caffeine is most effective."
        },
        {
          time: formatTime12(addMinutes(wake, 420)),
          level: "moderate",
          label: "Midday Secondary Peak",
          description: "A smaller cortisol bump around noon. Energy naturally rises briefly."
        },
        {
          time: formatTime12(addMinutes(wake, 600)),
          level: "low",
          label: "Afternoon Trough",
          description: "Cortisol drops significantly. Many people experience the 'afternoon slump' here."
        },
        {
          time: formatTime12(addMinutes(wake, 780)),
          level: "low",
          label: "Evening Decline",
          description: "Cortisol continues falling, preparing the body for melatonin production and sleep."
        }
      ]

      // Optimal caffeine windows: AVOID during cortisol peaks, drink during dips
      // Avoid: first 90 min after waking (CAR), noon peak, after 2 PM (sleep disruption)
      const optimalCaffeineWindows: TimeWindow[] = [
        {
          start: formatTime12(addMinutes(wake, 90)),
          end: formatTime12(addMinutes(wake, 180)),
          label: "Best Coffee Window #1",
          description: "Cortisol has dropped from CAR peak. Caffeine is most effective here."
        },
        {
          start: formatTime12(addMinutes(wake, 330)),
          end: formatTime12(addMinutes(wake, 420)),
          label: "Best Coffee Window #2",
          description: "Between mid-morning dip and midday peak. Good for a second cup."
        }
      ]

      const avoidCaffeineWindows: TimeWindow[] = [
        {
          start: formatTime12(wake),
          end: formatTime12(addMinutes(wake, 90)),
          label: "Skip Coffee After Waking",
          description: "Cortisol is already surging (CAR). Caffeine here builds tolerance and increases jitters."
        },
        {
          start: formatTime12(addMinutes(wake, 480)),
          end: formatTime12(addMinutes(wake, 960)),
          label: "No Caffeine After Early Afternoon",
          description: "Caffeine has 5-7 hour half-life. Late coffee disrupts melatonin production and sleep quality."
        }
      ]

      // Optimal workout window: 2-4 hours after waking (cortisol + testosterone peak overlap)
      const optimalWorkoutWindow: TimeWindow = {
        start: formatTime12(addMinutes(wake, 120)),
        end: formatTime12(addMinutes(wake, 240)),
        label: "Peak Exercise Window",
        description: "Cortisol is elevated (fuel mobilisation), testosterone peaks, and body temperature is rising — ideal for performance."
      }

      // Focus windows: when cortisol supports alertness but isn't too high
      const optimalFocusWindows: TimeWindow[] = [
        {
          start: formatTime12(addMinutes(wake, 60)),
          end: formatTime12(addMinutes(wake, 180)),
          label: "Deep Work Window #1",
          description: "Post-CAR clarity. Cortisol supports sustained attention without jitters."
        },
        {
          start: formatTime12(addMinutes(wake, 300)),
          end: formatTime12(addMinutes(wake, 420)),
          label: "Deep Work Window #2",
          description: "Late morning focus zone before the midday energy dip."
        }
      ]

      // Melatonin onset: ~14-16 hours after waking
      const melatoninOnsetTime = formatTime12(addMinutes(wake, 870))
      // Ideal bedtime: ~16 hours after waking
      const idealBedtime = formatTime12(addMinutes(wake, 960))

      // 24-hour cortisol curve (relative levels 0-100)
      const cortisol24HourCurve: HourlyCortisol[] = []
      for (let i = 0; i < 24; i++) {
        const hourTime = addMinutes(wake, i * 60)
        let level: number

        if (i === 0) level = 55
        else if (i <= 1) level = 95 // CAR peak
        else if (i <= 2) level = 80
        else if (i <= 3) level = 60
        else if (i <= 4) level = 50
        else if (i <= 5) level = 45
        else if (i <= 6) level = 48 // small noon bump
        else if (i <= 7) level = 50
        else if (i <= 8) level = 42
        else if (i <= 9) level = 35
        else if (i <= 10) level = 30
        else if (i <= 11) level = 25
        else if (i <= 12) level = 22
        else if (i <= 13) level = 18
        else if (i <= 14) level = 15
        else if (i <= 15) level = 12
        else if (i <= 16) level = 10
        else if (i <= 17) level = 8
        else if (i <= 18) level = 7
        else if (i <= 19) level = 6
        else if (i <= 20) level = 5
        else if (i <= 21) level = 5
        else if (i <= 22) level = 8
        else level = 15 // pre-wake rise

        const label = level >= 70 ? "Peak" : level >= 40 ? "Elevated" : level >= 20 ? "Moderate" : "Low"

        cortisol24HourCurve.push({
          hour: formatTime12(hourTime),
          level,
          label
        })
      }

      // Personalised recommendations
      const recommendations: Recommendation[] = [
        {
          icon: "sunrise",
          title: "Wake & Get Sunlight",
          time: formatTime12(wake),
          description: "Get bright light within 10 minutes of waking. This synchronises your cortisol rhythm and boosts CAR."
        },
        {
          icon: "droplet",
          title: "Hydrate First",
          time: formatTime12(addMinutes(wake, 5)),
          description: "Drink 16-20oz of water before anything else. You're dehydrated after 7-8 hours of sleep."
        },
        {
          icon: "coffee",
          title: "First Coffee",
          time: formatTime12(addMinutes(wake, 90)),
          description: "Wait 90 minutes after waking for caffeine. Your CAR will handle alertness until then."
        },
        {
          icon: "brain",
          title: "Deep Work Block",
          time: `${formatTime12(addMinutes(wake, 60))} – ${formatTime12(addMinutes(wake, 180))}`,
          description: "Your most cognitively demanding tasks. Cortisol + adrenaline support peak mental performance."
        },
        {
          icon: "dumbbell",
          title: "Exercise",
          time: `${formatTime12(addMinutes(wake, 120))} – ${formatTime12(addMinutes(wake, 240))}`,
          description: "Cortisol aids fuel mobilisation, testosterone peaks — ideal for strength and HIIT training."
        },
        {
          icon: "coffee2",
          title: "Last Coffee",
          time: formatTime12(addMinutes(wake, 360)),
          description: `No caffeine after ${formatTime12(addMinutes(wake, 480))}. Caffeine's 5-7hr half-life will disrupt sleep.`
        },
        {
          icon: "sunset",
          title: "Dim Lights",
          time: formatTime12(addMinutes(wake, 780)),
          description: "Reduce blue light and bright overhead lights. Support natural melatonin production."
        },
        {
          icon: "moon",
          title: "Ideal Bedtime",
          time: idealBedtime,
          description: "16 hours after waking. Cortisol is at its lowest, melatonin is rising. Optimal sleep onset."
        }
      ]

      setResult({
        wakeUpTime: formatTime12(wake),
        cortisolPeaks,
        optimalCaffeineWindows,
        avoidCaffeineWindows,
        optimalWorkoutWindow,
        optimalFocusWindows,
        melatoninOnsetTime,
        idealBedtime,
        cortisol24HourCurve,
        recommendations
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `Cortisol Peak Time Schedule`,
      `===========================`,
      `Wake-up: ${result.wakeUpTime}`,
      ``,
      `Best Coffee: ${result.optimalCaffeineWindows.map(w => `${w.start} – ${w.end}`).join(" | ")}`,
      `Avoid Coffee: Before ${result.avoidCaffeineWindows[0].end} and after ${result.avoidCaffeineWindows[1].start}`,
      ``,
      `Best Workout: ${result.optimalWorkoutWindow.start} – ${result.optimalWorkoutWindow.end}`,
      `Deep Work: ${result.optimalFocusWindows.map(w => `${w.start} – ${w.end}`).join(" | ")}`,
      ``,
      `Melatonin Onset: ${result.melatoninOnsetTime}`,
      `Ideal Bedtime: ${result.idealBedtime}`,
      ``,
      `Generated by FastTools Cortisol Peak Time Calculator`
    ]
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getRecommendationIcon = (icon: string) => {
    switch (icon) {
      case "sunrise": return <Sunrise className="h-5 w-5 text-yellow-500" />
      case "droplet": return <Activity className="h-5 w-5 text-blue-500" />
      case "coffee": return <Coffee className="h-5 w-5 text-amber-600" />
      case "coffee2": return <Coffee className="h-5 w-5 text-orange-500" />
      case "brain": return <Brain className="h-5 w-5 text-purple-500" />
      case "dumbbell": return <Dumbbell className="h-5 w-5 text-green-500" />
      case "sunset": return <Sunset className="h-5 w-5 text-orange-400" />
      case "moon": return <Moon className="h-5 w-5 text-indigo-500" />
      default: return <Clock className="h-5 w-5 text-muted-foreground" />
    }
  }

  return (
    <div className="space-y-8">
      {/* Main Calculator */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sun className="h-6 w-6 text-foreground" />
            </div>
            Cortisol Peak Time Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Enter your wake-up time to get personalised caffeine, workout, focus, and sleep timing based on your cortisol rhythm
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Wake-up Time */}
          <div className="space-y-3">
            <GLabel htmlFor="wakeUpTime" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
              <Sunrise className="h-4 w-4" />
              What Time Do You Wake Up?
            </GLabel>
            <GInput
              id="wakeUpTime"
              type="time"
              value={wakeUpTime}
              onChange={(e) => setWakeUpTime(e.target.value)}
              className="h-12 text-lg bg-card border-border text-foreground focus:border-primary focus:ring-blue-500 max-w-xs"
            />
          </div>

          {/* Quick Presets */}
          <div className="space-y-2">
            <GLabel className="text-xs font-medium text-muted-foreground">Quick Presets</GLabel>
            <div className="flex flex-wrap gap-2">
              {presets.map((p) => (
                <button
                  type="button"
                  key={p.value}
                  onClick={() => setWakeUpTime(p.value)}
                  aria-pressed={wakeUpTime === p.value}
                  className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${
                    wakeUpTime === p.value
                      ? "border-primary bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Calculate */}
          <GButton
            onClick={calculateCortisol}
            disabled={isCalculating}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
          >
            {isCalculating ? (
              <><LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Analyzing Your Rhythm...</>
            ) : (
              <><Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Calculate My Schedule</>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Daily Timeline Recommendations */}
          <GCard className="shadow-lg border-primary/20 animate-fade-in-up bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <Clock className="h-4 w-4 text-foreground" />
                </div>
                Your Optimised Daily Schedule
              </GCardTitle>
              <GCardDescription className="text-sm text-muted-foreground">
                Based on waking at {result.wakeUpTime}
              </GCardDescription>
            </GCardHeader>
            <GCardContent className="space-y-3">
              {result.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="p-1.5 rounded-lg bg-muted flex-shrink-0 mt-0.5">
                    {getRecommendationIcon(rec.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="text-sm font-semibold text-foreground">{rec.title}</div>
                      <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full flex-shrink-0">
                        {rec.time}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{rec.description}</div>
                  </div>
                </div>
              ))}
            </GCardContent>
          </GCard>

          {/* Caffeine Windows */}
          <GCard className="shadow-lg border-border animate-fade-in-up bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <Coffee className="h-4 w-4 text-foreground" />
                </div>
                Caffeine Timing
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {result.optimalCaffeineWindows.map((w, i) => (
                  <div key={i} className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Coffee className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-semibold text-green-500">{w.label}</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{w.start} – {w.end}</div>
                    <div className="text-xs text-muted-foreground mt-1">{w.description}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {result.avoidCaffeineWindows.map((w, i) => (
                  <div key={i} className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span className="text-sm font-semibold text-red-500">{w.label}</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{w.start} – {w.end}</div>
                    <div className="text-xs text-muted-foreground mt-1">{w.description}</div>
                  </div>
                ))}
              </div>
            </GCardContent>
          </GCard>

          {/* Workout & Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GCard className="shadow-lg border-border bg-card">
              <GCardContent className="py-5">
                <div className="flex items-center gap-2 mb-3">
                  <Dumbbell className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-semibold text-foreground">Peak Exercise Window</span>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {result.optimalWorkoutWindow.start} – {result.optimalWorkoutWindow.end}
                </div>
                <div className="text-xs text-muted-foreground">{result.optimalWorkoutWindow.description}</div>
              </GCardContent>
            </GCard>
            <GCard className="shadow-lg border-border bg-card">
              <GCardContent className="py-5">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="h-5 w-5 text-indigo-500" />
                  <span className="text-sm font-semibold text-foreground">Sleep Timing</span>
                </div>
                <div className="text-lg font-bold text-foreground mb-0.5">
                  Melatonin onset: {result.melatoninOnsetTime}
                </div>
                <div className="text-2xl font-bold text-foreground">
                  Bedtime: {result.idealBedtime}
                </div>
                <div className="text-xs text-muted-foreground mt-1">16 hours after waking. Cortisol at lowest, melatonin rising.</div>
              </GCardContent>
            </GCard>
          </div>

          {/* Focus Windows */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <Brain className="h-4 w-4 text-foreground" />
                </div>
                Deep Focus Windows
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {result.optimalFocusWindows.map((w, i) => (
                  <div key={i} className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Brain className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-semibold text-purple-500">{w.label}</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{w.start} – {w.end}</div>
                    <div className="text-xs text-muted-foreground mt-1">{w.description}</div>
                  </div>
                ))}
              </div>
            </GCardContent>
          </GCard>

          {/* Cortisol Curve Visualisation */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <Activity className="h-4 w-4 text-foreground" />
                </div>
                24-Hour Cortisol Curve
              </GCardTitle>
              <GCardDescription className="text-sm text-muted-foreground">
                Relative cortisol levels throughout your day
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              <div className="space-y-1.5">
                {result.cortisol24HourCurve.filter((_, i) => i % 2 === 0 || i <= 4).map((entry, i) => {
                  const barColor = entry.level >= 70 ? "bg-red-500" : entry.level >= 40 ? "bg-yellow-500" : entry.level >= 20 ? "bg-blue-500" : "bg-indigo-500"
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <div className="text-[10px] text-muted-foreground w-16 text-right flex-shrink-0">{entry.hour}</div>
                      <div className="flex-1 bg-border rounded-full h-4 relative">
                        <div
                          className={`${barColor} h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-1.5`}
                          style={{ width: `${entry.level}%` }}
                        >
                          {entry.level >= 25 && (
                            <span className="text-[9px] text-white font-medium">{entry.label}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="flex items-center gap-4 mt-3 text-[10px] text-muted-foreground">
                <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 bg-red-500 rounded-full" /> Peak</div>
                <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" /> Elevated</div>
                <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 bg-blue-500 rounded-full" /> Moderate</div>
                <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 bg-indigo-500 rounded-full" /> Low</div>
              </div>
            </GCardContent>
          </GCard>

          {/* Cortisol Peaks Table */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-foreground" />
                </div>
                Cortisol Peaks & Dips
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Time</th>
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Level</th>
                      <th className="text-left py-2 px-2 font-semibold text-heading-accent">Phase</th>
                      <th className="text-left py-2 px-2 font-semibold text-foreground">What&apos;s Happening</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.cortisolPeaks.map((peak, i) => (
                      <tr key={i} className="border-b border-border">
                        <td className="py-2 px-2 font-medium text-foreground">{peak.time}</td>
                        <td className="py-2 px-2">
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                            peak.level === "high" ? "bg-red-500/10 text-red-500" :
                            peak.level === "moderate" ? "bg-yellow-500/10 text-yellow-500" :
                            "bg-blue-500/10 text-blue-500"
                          }`}>
                            {peak.level === "high" ? "HIGH" : peak.level === "moderate" ? "MED" : "LOW"}
                          </span>
                        </td>
                        <td className="py-2 px-2 text-heading-accent font-medium">{peak.label}</td>
                        <td className="py-2 px-2 text-muted-foreground">{peak.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* Copy */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardContent className="py-4">
              <GButton
                onClick={copyResult}
                className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card"
              >
                {copied ? (
                  <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</>
                ) : (
                  <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Schedule</>
                )}
              </GButton>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
