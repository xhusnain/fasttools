"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, Heart, Brain, Dumbbell, Moon,
  Apple, Wine, Cigarette, Activity, TrendingUp, TrendingDown,
  Shield, AlertTriangle, Zap, Clock, Star, Smile, Users
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type {
  BiologicalAgeResult, AgeRating, CategoryScore,
  AgeRecommendation, LongevityEstimate
} from "@/types/calculator-types/biological-age-calculator.types"

type SleepQuality = "poor" | "fair" | "good" | "excellent"
type StressLevel = "high" | "moderate" | "low" | "minimal"
type ExerciseFreq = "none" | "light" | "moderate" | "active" | "athlete"
type DietQuality = "poor" | "average" | "good" | "excellent"
type SmokingStatus = "heavy" | "light" | "former" | "never"
type AlcoholIntake = "heavy" | "moderate" | "light" | "none"
type SocialConnection = "isolated" | "low" | "moderate" | "strong"

export function BiologicalAgeCalculator() {
  const [chronologicalAge, setChronologicalAge] = useState("")
  const [restingHR, setRestingHR] = useState("")
  const [bmi, setBmi] = useState("")
  const [sleepHours, setSleepHours] = useState("7")
  const [sleepQuality, setSleepQuality] = useState<SleepQuality>("good")
  const [exerciseFreq, setExerciseFreq] = useState<ExerciseFreq>("moderate")
  const [stressLevel, setStressLevel] = useState<StressLevel>("moderate")
  const [dietQuality, setDietQuality] = useState<DietQuality>("good")
  const [smokingStatus, setSmokingStatus] = useState<SmokingStatus>("never")
  const [alcoholIntake, setAlcoholIntake] = useState<AlcoholIntake>("light")
  const [socialConnection, setSocialConnection] = useState<SocialConnection>("moderate")

  const [result, setResult] = useState<BiologicalAgeResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const selectButton = (selected: boolean) =>
    `px-3 py-1.5 rounded-lg border text-xs transition-all ${
      selected ? "border-primary bg-primary/10 text-foreground font-medium" : "border-border hover:border-primary/50 bg-card text-muted-foreground"
    }`

  const calculateBioAge = () => {
    if (!chronologicalAge || !restingHR) return
    setIsCalculating(true)

    setTimeout(() => {
      const age = Number.parseFloat(chronologicalAge)
      const rhr = Number.parseFloat(restingHR) || 72
      const bodyMass = Number.parseFloat(bmi) || 24
      const sleep = Number.parseFloat(sleepHours) || 7

      let ageModifier = 0

      // Cardiovascular (RHR) — strongest biomarker
      // Optimal: 50-60, Average: 70-80, Poor: 85+
      const cardioScore = rhr <= 55 ? 10 : rhr <= 62 ? 8 : rhr <= 70 ? 6 : rhr <= 78 ? 4 : rhr <= 85 ? 2 : 0
      if (rhr <= 55) ageModifier -= 3
      else if (rhr <= 62) ageModifier -= 1.5
      else if (rhr <= 70) ageModifier -= 0
      else if (rhr <= 78) ageModifier += 1
      else if (rhr <= 85) ageModifier += 2.5
      else ageModifier += 4

      // BMI
      const bmiScore = bodyMass >= 18.5 && bodyMass <= 24.9 ? 10 : bodyMass >= 25 && bodyMass <= 27 ? 7 : bodyMass >= 17 && bodyMass < 18.5 ? 6 : bodyMass > 27 && bodyMass <= 30 ? 4 : 2
      if (bodyMass >= 18.5 && bodyMass <= 24.9) ageModifier -= 1
      else if (bodyMass >= 25 && bodyMass <= 27) ageModifier += 0.5
      else if (bodyMass > 27 && bodyMass <= 30) ageModifier += 1.5
      else if (bodyMass > 30) ageModifier += 3
      else ageModifier += 1

      // Sleep
      const sleepOptimal = sleep >= 7 && sleep <= 8.5
      const sleepScore = sleepOptimal && sleepQuality === "excellent" ? 10 : sleepOptimal && sleepQuality === "good" ? 8 : sleepQuality === "fair" ? 5 : sleepQuality === "poor" ? 2 : 6
      if (sleepOptimal && sleepQuality === "excellent") ageModifier -= 2
      else if (sleepOptimal && sleepQuality === "good") ageModifier -= 1
      else if (sleepQuality === "fair") ageModifier += 1.5
      else if (sleepQuality === "poor") ageModifier += 3
      else if (sleep < 6) ageModifier += 2.5
      else if (sleep > 9) ageModifier += 1

      // Exercise
      const exerciseScoreMap: Record<ExerciseFreq, { score: number; mod: number }> = {
        athlete: { score: 10, mod: -3 },
        active: { score: 9, mod: -2 },
        moderate: { score: 7, mod: -0.5 },
        light: { score: 4, mod: 1 },
        none: { score: 1, mod: 3.5 },
      }
      const exerciseData = exerciseScoreMap[exerciseFreq]
      ageModifier += exerciseData.mod

      // Stress
      const stressScoreMap: Record<StressLevel, { score: number; mod: number }> = {
        minimal: { score: 10, mod: -1.5 },
        low: { score: 8, mod: -0.5 },
        moderate: { score: 5, mod: 1 },
        high: { score: 2, mod: 3 },
      }
      const stressData = stressScoreMap[stressLevel]
      ageModifier += stressData.mod

      // Diet
      const dietScoreMap: Record<DietQuality, { score: number; mod: number }> = {
        excellent: { score: 10, mod: -2 },
        good: { score: 7, mod: -0.5 },
        average: { score: 4, mod: 1 },
        poor: { score: 1, mod: 3 },
      }
      const dietData = dietScoreMap[dietQuality]
      ageModifier += dietData.mod

      // Smoking
      const smokingScoreMap: Record<SmokingStatus, { score: number; mod: number }> = {
        never: { score: 10, mod: -1 },
        former: { score: 6, mod: 1 },
        light: { score: 3, mod: 4 },
        heavy: { score: 0, mod: 8 },
      }
      const smokingData = smokingScoreMap[smokingStatus]
      ageModifier += smokingData.mod

      // Alcohol
      const alcoholScoreMap: Record<AlcoholIntake, { score: number; mod: number }> = {
        none: { score: 9, mod: -0.5 },
        light: { score: 8, mod: 0 },
        moderate: { score: 5, mod: 1.5 },
        heavy: { score: 1, mod: 4 },
      }
      const alcoholData = alcoholScoreMap[alcoholIntake]
      ageModifier += alcoholData.mod

      // Social connection
      const socialScoreMap: Record<SocialConnection, { score: number; mod: number }> = {
        strong: { score: 10, mod: -2 },
        moderate: { score: 7, mod: -0.5 },
        low: { score: 4, mod: 1.5 },
        isolated: { score: 1, mod: 3.5 },
      }
      const socialData = socialScoreMap[socialConnection]
      ageModifier += socialData.mod

      const biologicalAge = Math.round(Math.max(age - 15, Math.min(age + 20, age + ageModifier)))
      const ageDifference = Math.abs(biologicalAge - age)
      const ageDirection: "younger" | "older" | "same" = biologicalAge < age ? "younger" : biologicalAge > age ? "older" : "same"

      const getAgeRating = (): AgeRating => {
        const diff = biologicalAge - age
        if (diff <= -5) return { label: "Exceptional", color: "text-green-500", description: "Your body is significantly younger than your years. Keep it up!" }
        if (diff <= -2) return { label: "Excellent", color: "text-green-500", description: "You're aging slower than average. Strong lifestyle habits." }
        if (diff <= 0) return { label: "Good", color: "text-blue-500", description: "Your biological age matches or beats your chronological age." }
        if (diff <= 3) return { label: "Average", color: "text-yellow-500", description: "Room for improvement. Small changes can make a big difference." }
        if (diff <= 7) return { label: "Below Average", color: "text-orange-500", description: "Multiple factors are accelerating your aging. Focus on the biggest risks." }
        return { label: "Concerning", color: "text-red-500", description: "Significant accelerated aging. Consider consulting a healthcare professional." }
      }

      const categoryScores: CategoryScore[] = [
        { category: "Cardiovascular", score: cardioScore, maxScore: 10, impact: rhr <= 65 ? -2 : rhr > 80 ? 3 : 0, label: rhr <= 65 ? "Strong" : rhr > 80 ? "Weak" : "Average" },
        { category: "Body Composition", score: bmiScore, maxScore: 10, impact: bodyMass >= 18.5 && bodyMass <= 25 ? -1 : 1.5, label: bodyMass >= 18.5 && bodyMass <= 25 ? "Optimal" : "Needs work" },
        { category: "Sleep", score: sleepScore, maxScore: 10, impact: sleepQuality === "excellent" ? -2 : sleepQuality === "poor" ? 3 : 0, label: sleepQuality === "excellent" || sleepQuality === "good" ? "Good" : "Poor" },
        { category: "Exercise", score: exerciseData.score, maxScore: 10, impact: exerciseData.mod, label: exerciseFreq === "athlete" || exerciseFreq === "active" ? "Strong" : exerciseFreq === "none" ? "Critical" : "Moderate" },
        { category: "Stress", score: stressData.score, maxScore: 10, impact: stressData.mod, label: stressLevel === "minimal" || stressLevel === "low" ? "Low" : "High" },
        { category: "Nutrition", score: dietData.score, maxScore: 10, impact: dietData.mod, label: dietQuality === "excellent" || dietQuality === "good" ? "Good" : "Poor" },
        { category: "Smoking", score: smokingData.score, maxScore: 10, impact: smokingData.mod, label: smokingStatus === "never" ? "None" : smokingStatus === "heavy" ? "Critical" : "Risk" },
        { category: "Alcohol", score: alcoholData.score, maxScore: 10, impact: alcoholData.mod, label: alcoholIntake === "none" || alcoholIntake === "light" ? "Low" : "High" },
        { category: "Social Health", score: socialData.score, maxScore: 10, impact: socialData.mod, label: socialConnection === "strong" ? "Strong" : socialConnection === "isolated" ? "Critical" : "Moderate" },
      ]

      const topStrengths = categoryScores.filter(c => c.score >= 8).sort((a, b) => b.score - a.score).slice(0, 3).map(c => c.category)
      const topRisks = categoryScores.filter(c => c.score <= 4).sort((a, b) => a.score - b.score).slice(0, 3).map(c => c.category)

      const recommendations: AgeRecommendation[] = []
      if (rhr > 75) recommendations.push({ category: "Cardio", action: "Add 150+ min/week of zone 2 cardio to lower resting heart rate", impact: "-2 to -4 years", priority: "high" })
      if (sleepQuality === "poor" || sleep < 6) recommendations.push({ category: "Sleep", action: "Prioritise 7-8.5 hours of quality sleep with consistent schedule", impact: "-2 to -3 years", priority: "high" })
      if (exerciseFreq === "none" || exerciseFreq === "light") recommendations.push({ category: "Exercise", action: "Start with 3× per week strength training + daily walking", impact: "-2 to -4 years", priority: "high" })
      if (smokingStatus === "heavy" || smokingStatus === "light") recommendations.push({ category: "Smoking", action: "Quit smoking — single biggest impact on biological age", impact: "-4 to -8 years", priority: "high" })
      if (stressLevel === "high") recommendations.push({ category: "Stress", action: "Implement daily meditation, breathwork, or nature walks", impact: "-1 to -3 years", priority: "medium" })
      if (dietQuality === "poor" || dietQuality === "average") recommendations.push({ category: "Diet", action: "Increase vegetables, reduce processed food, add omega-3 sources", impact: "-1 to -3 years", priority: "medium" })
      if (alcoholIntake === "heavy" || alcoholIntake === "moderate") recommendations.push({ category: "Alcohol", action: "Reduce to ≤4 drinks/week or eliminate entirely", impact: "-1 to -4 years", priority: "medium" })
      if (bodyMass > 28) recommendations.push({ category: "Weight", action: "Aim for gradual weight loss (0.5-1 lb/week) through diet + exercise", impact: "-1 to -3 years", priority: "medium" })
      if (socialConnection === "isolated" || socialConnection === "low") recommendations.push({ category: "Social", action: "Join a community, call friends weekly, find an accountability partner", impact: "-1 to -3 years", priority: "low" })

      const avgLifeExpectancy = 78.5
      const lifeModifier = -(biologicalAge - age) * 0.8
      const longevityEstimate: LongevityEstimate = {
        estimatedLifeExpectancy: Math.round(avgLifeExpectancy + lifeModifier),
        averageLifeExpectancy: avgLifeExpectancy,
        potentialYearsGained: Math.round(Math.max(0, lifeModifier))
      }

      const totalScore = categoryScores.reduce((sum, c) => sum + c.score, 0)
      const maxTotal = categoryScores.reduce((sum, c) => sum + c.maxScore, 0)
      const comparisonPercentile = Math.round((totalScore / maxTotal) * 100)

      setResult({
        biologicalAge,
        chronologicalAge: age,
        ageDifference,
        ageDirection,
        ageRating: getAgeRating(),
        categoryScores,
        topStrengths,
        topRisks,
        recommendations,
        longevityEstimate,
        comparisonPercentile
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `Biological Age Analysis`,
      `=======================`,
      `Chronological Age: ${result.chronologicalAge}`,
      `Biological Age: ${result.biologicalAge}`,
      `Difference: ${result.ageDifference} years ${result.ageDirection}`,
      `Rating: ${result.ageRating.label}`,
      `Health Score: ${result.comparisonPercentile}%`,
      ``,
      `Strengths: ${result.topStrengths.join(", ") || "None identified"}`,
      `Risks: ${result.topRisks.join(", ") || "None identified"}`,
      ``,
      `Est. Life Expectancy: ${result.longevityEstimate.estimatedLifeExpectancy} years`,
      ``,
      `Generated by FastTools Biological Age Calculator`
    ]
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Activity className="h-6 w-6 text-foreground" />
            </div>
            Biological Age Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Estimate your biological age based on lifestyle, fitness, sleep, stress, diet & habits
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Core Metrics */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Heart className="h-4 w-4" /> Core Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="chronologicalAge" className="text-sm font-semibold text-heading-accent">Your Age</GLabel>
                <GInput id="chronologicalAge" type="number" value={chronologicalAge} onChange={(e) => setChronologicalAge(e.target.value)} placeholder="e.g., 35" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="restingHR" className="text-sm font-semibold text-heading-accent">Resting Heart Rate (bpm)</GLabel>
                <GInput id="restingHR" type="number" value={restingHR} onChange={(e) => setRestingHR(e.target.value)} placeholder="e.g., 68" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                <div className="text-xs text-muted-foreground">Measure first thing in the morning</div>
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="bmi" className="text-sm font-semibold text-heading-accent">BMI</GLabel>
                <GInput id="bmi" type="number" step="0.1" value={bmi} onChange={(e) => setBmi(e.target.value)} placeholder="e.g., 23.5" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                <div className="text-xs text-muted-foreground">Use our BMI Calculator if unsure</div>
              </div>
            </div>
          </div>

          {/* Sleep */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Moon className="h-4 w-4" /> Sleep
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="sleepHours" className="text-sm font-semibold text-heading-accent">Hours Per Night</GLabel>
                <GInput id="sleepHours" type="number" step="0.5" value={sleepHours} onChange={(e) => setSleepHours(e.target.value)} placeholder="7" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Sleep Quality</GLabel>
                <div className="flex flex-wrap gap-1.5">
                  {(["poor", "fair", "good", "excellent"] as SleepQuality[]).map(q => (
                    <button key={q} onClick={() => setSleepQuality(q)} className={selectButton(sleepQuality === q)}>
                      {q.charAt(0).toUpperCase() + q.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lifestyle */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Dumbbell className="h-4 w-4" /> Lifestyle
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Exercise Frequency</GLabel>
                <div className="flex flex-wrap gap-1.5">
                  {([
                    { v: "none", l: "None" }, { v: "light", l: "1-2×/wk" }, { v: "moderate", l: "3-4×/wk" },
                    { v: "active", l: "5-6×/wk" }, { v: "athlete", l: "Daily+" }
                  ] as { v: ExerciseFreq; l: string }[]).map(e => (
                    <button key={e.v} onClick={() => setExerciseFreq(e.v)} className={selectButton(exerciseFreq === e.v)}>{e.l}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Stress Level</GLabel>
                <div className="flex flex-wrap gap-1.5">
                  {(["high", "moderate", "low", "minimal"] as StressLevel[]).map(s => (
                    <button key={s} onClick={() => setStressLevel(s)} className={selectButton(stressLevel === s)}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Diet Quality</GLabel>
                <div className="flex flex-wrap gap-1.5">
                  {(["poor", "average", "good", "excellent"] as DietQuality[]).map(d => (
                    <button key={d} onClick={() => setDietQuality(d)} className={selectButton(dietQuality === d)}>
                      {d.charAt(0).toUpperCase() + d.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Social Connection</GLabel>
                <div className="flex flex-wrap gap-1.5">
                  {([
                    { v: "isolated", l: "Isolated" }, { v: "low", l: "Low" }, { v: "moderate", l: "Moderate" }, { v: "strong", l: "Strong" }
                  ] as { v: SocialConnection; l: string }[]).map(s => (
                    <button key={s.v} onClick={() => setSocialConnection(s.v)} className={selectButton(socialConnection === s.v)}>{s.l}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Habits */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Shield className="h-4 w-4" /> Habits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Smoking</GLabel>
                <div className="flex flex-wrap gap-1.5">
                  {([
                    { v: "never", l: "Never" }, { v: "former", l: "Former" }, { v: "light", l: "Light" }, { v: "heavy", l: "Heavy" }
                  ] as { v: SmokingStatus; l: string }[]).map(s => (
                    <button key={s.v} onClick={() => setSmokingStatus(s.v)} className={selectButton(smokingStatus === s.v)}>{s.l}</button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Alcohol Intake</GLabel>
                <div className="flex flex-wrap gap-1.5">
                  {([
                    { v: "none", l: "None" }, { v: "light", l: "1-4/wk" }, { v: "moderate", l: "5-10/wk" }, { v: "heavy", l: "10+/wk" }
                  ] as { v: AlcoholIntake; l: string }[]).map(a => (
                    <button key={a.v} onClick={() => setAlcoholIntake(a.v)} className={selectButton(alcoholIntake === a.v)}>{a.l}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <GButton
            onClick={calculateBioAge}
            disabled={isCalculating || !chronologicalAge || !restingHR}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
          >
            {isCalculating ? (
              <><LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Analyzing...</>
            ) : (
              <><Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Calculate Biological Age</>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Age Display */}
          {(() => {
            const bg = result.ageDirection === "younger" ? "bg-green-500/10 border-green-500/30" : result.ageDirection === "same" ? "bg-blue-500/10 border-blue-500/30" : "bg-orange-500/10 border-orange-500/30"
            const Icon = result.ageDirection === "younger" ? TrendingDown : result.ageDirection === "same" ? Shield : TrendingUp
            return (
              <GCard className={`shadow-lg border animate-fade-in-up ${bg}`}>
                <GCardContent className="py-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon className={`h-6 w-6 ${result.ageRating.color}`} />
                      <span className={`text-lg font-bold ${result.ageRating.color}`}>{result.ageRating.label}</span>
                    </div>
                    <div className="text-5xl sm:text-6xl font-bold text-foreground">{result.biologicalAge}</div>
                    <div className="text-sm text-muted-foreground mt-1">Biological Age</div>
                    <div className="text-lg font-medium text-foreground mt-3">
                      {result.ageDirection === "younger"
                        ? `${result.ageDifference} years younger than your age of ${result.chronologicalAge}`
                        : result.ageDirection === "older"
                        ? `${result.ageDifference} years older than your age of ${result.chronologicalAge}`
                        : `Matches your chronological age of ${result.chronologicalAge}`
                      }
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{result.ageRating.description}</div>
                  </div>
                </GCardContent>
              </GCard>
            )
          })()}

          {/* Health Score + Longevity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GCard className="shadow-lg border-border bg-card">
              <GCardContent className="py-5 text-center">
                <Star className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground">{result.comparisonPercentile}%</div>
                <div className="text-sm text-muted-foreground">Overall Health Score</div>
                <div className="w-full bg-border rounded-full h-2 mt-3">
                  <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{ width: `${result.comparisonPercentile}%` }} />
                </div>
              </GCardContent>
            </GCard>
            <GCard className="shadow-lg border-border bg-card">
              <GCardContent className="py-5 text-center">
                <Clock className="h-5 w-5 text-green-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground">{result.longevityEstimate.estimatedLifeExpectancy}</div>
                <div className="text-sm text-muted-foreground">Est. Life Expectancy</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Avg: {result.longevityEstimate.averageLifeExpectancy} · {result.longevityEstimate.potentialYearsGained > 0 ? `+${result.longevityEstimate.potentialYearsGained} years gained` : "Room for improvement"}
                </div>
              </GCardContent>
            </GCard>
          </div>

          {/* Category Scores */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><Activity className="h-4 w-4 text-foreground" /></div>
                Category Breakdown
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-2.5">
              {result.categoryScores.map((cat) => {
                const pct = (cat.score / cat.maxScore) * 100
                const color = pct >= 80 ? "bg-green-500" : pct >= 60 ? "bg-blue-500" : pct >= 40 ? "bg-yellow-500" : "bg-red-500"
                return (
                  <div key={cat.category} className="flex items-center gap-3">
                    <div className="w-28 text-xs font-medium text-foreground">{cat.category}</div>
                    <div className="flex-1 bg-border rounded-full h-3 relative">
                      <div className={`${color} h-3 rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="w-12 text-xs text-right font-medium text-foreground">{cat.score}/{cat.maxScore}</div>
                    <div className={`w-14 text-[10px] text-right font-medium ${cat.impact <= -1 ? "text-green-500" : cat.impact >= 2 ? "text-red-500" : "text-muted-foreground"}`}>
                      {cat.impact > 0 ? `+${cat.impact}yr` : cat.impact < 0 ? `${cat.impact}yr` : "—"}
                    </div>
                  </div>
                )
              })}
            </GCardContent>
          </GCard>

          {/* Strengths & Risks */}
          {(result.topStrengths.length > 0 || result.topRisks.length > 0) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {result.topStrengths.length > 0 && (
                <GCard className="shadow-lg border-green-500/20 bg-card">
                  <GCardContent className="py-4">
                    <h4 className="text-sm font-semibold text-green-500 flex items-center gap-1.5 mb-2"><Zap className="h-4 w-4" /> Strengths</h4>
                    <ul className="space-y-1">{result.topStrengths.map(s => <li key={s} className="text-xs text-foreground flex items-center gap-1.5"><Smile className="h-3 w-3 text-green-500" /> {s}</li>)}</ul>
                  </GCardContent>
                </GCard>
              )}
              {result.topRisks.length > 0 && (
                <GCard className="shadow-lg border-red-500/20 bg-card">
                  <GCardContent className="py-4">
                    <h4 className="text-sm font-semibold text-red-500 flex items-center gap-1.5 mb-2"><AlertTriangle className="h-4 w-4" /> Risk Areas</h4>
                    <ul className="space-y-1">{result.topRisks.map(r => <li key={r} className="text-xs text-foreground flex items-center gap-1.5"><AlertTriangle className="h-3 w-3 text-red-500" /> {r}</li>)}</ul>
                  </GCardContent>
                </GCard>
              )}
            </div>
          )}

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <GCard className="shadow-lg border-border bg-card">
              <GCardHeader className="pb-3">
                <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                  <div className="p-1.5 bg-primary/10 rounded-lg"><TrendingDown className="h-4 w-4 text-foreground" /></div>
                  How to Lower Your Biological Age
                </GCardTitle>
              </GCardHeader>
              <GCardContent className="space-y-2">
                {result.recommendations.map((rec, i) => (
                  <div key={i} className={`p-3 rounded-lg border ${rec.priority === "high" ? "border-red-500/30 bg-red-500/5" : rec.priority === "medium" ? "border-yellow-500/30 bg-yellow-500/5" : "border-blue-500/30 bg-blue-500/5"}`}>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="text-xs font-semibold text-foreground">{rec.category}</div>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${rec.priority === "high" ? "bg-red-500/20 text-red-500" : rec.priority === "medium" ? "bg-yellow-500/20 text-yellow-500" : "bg-blue-500/20 text-blue-500"}`}>
                        {rec.priority.toUpperCase()} · {rec.impact}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{rec.action}</div>
                  </div>
                ))}
              </GCardContent>
            </GCard>
          )}

          <GCard className="shadow-lg border-border bg-card">
            <GCardContent className="py-4">
              <GButton onClick={copyResult} className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card">
                {copied ? <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</> : <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Results</>}
              </GButton>
              <p className="text-[10px] text-muted-foreground mt-3 text-center">
                This is an estimate based on lifestyle factors, not a medical diagnosis. Consult a healthcare professional for clinical biological age testing (epigenetic clocks, blood biomarkers).
              </p>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
