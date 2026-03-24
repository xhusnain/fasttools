"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Activity, Copy, Check, Calculator, Heart, Target, Scale, TrendingUp,
  Flame, Zap, Dumbbell, Info, ChevronDown, ChevronUp, Utensils, BarChart3
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

type Gender = "male" | "female"
type Unit = "metric" | "imperial"
type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "veryActive" | "extraActive"
type Goal = "lose" | "mildLose" | "maintain" | "mildGain" | "gain"
type Formula = "mifflin" | "harris" | "katch"
type MacroPreset = "balanced" | "lowCarb" | "highProtein" | "keto" | "custom"

interface FormulaResult {
  name: string
  bmr: number
  tdee: number
}

interface MacroBreakdown {
  protein: number
  carbs: number
  fat: number
  proteinCal: number
  carbsCal: number
  fatCal: number
  proteinPct: number
  carbsPct: number
  fatPct: number
}

interface TDEEResult {
  bmr: number
  tdee: number
  goalCalories: number
  formula: string
  allFormulas: FormulaResult[]
  macros: MacroBreakdown
  bmi: number
  lbm: number | null
  goalLabel: string
  activityLabel: string
  mealSplit: { meals: number; perMeal: MacroBreakdown }
}

const ACTIVITY_LEVELS: Record<ActivityLevel, { label: string; multiplier: number; description: string }> = {
  sedentary: { label: "Sedentary", multiplier: 1.2, description: "Little or no exercise, desk job" },
  light: { label: "Lightly Active", multiplier: 1.375, description: "Light exercise 1-3 days/week" },
  moderate: { label: "Moderately Active", multiplier: 1.55, description: "Moderate exercise 3-5 days/week" },
  active: { label: "Very Active", multiplier: 1.725, description: "Hard exercise 6-7 days/week" },
  veryActive: { label: "Extra Active", multiplier: 1.9, description: "Very hard exercise, physical job" },
  extraActive: { label: "Athlete", multiplier: 2.0, description: "Professional athlete, 2x/day training" },
}

const GOAL_ADJUSTMENTS: Record<Goal, { label: string; multiplier: number; description: string }> = {
  lose: { label: "Lose Weight", multiplier: 0.75, description: "-25% deficit (aggressive)" },
  mildLose: { label: "Mild Weight Loss", multiplier: 0.85, description: "-15% deficit (steady)" },
  maintain: { label: "Maintain Weight", multiplier: 1.0, description: "Eat at maintenance" },
  mildGain: { label: "Lean Bulk", multiplier: 1.1, description: "+10% surplus (lean)" },
  gain: { label: "Bulk", multiplier: 1.2, description: "+20% surplus (aggressive)" },
}

const MACRO_PRESETS: Record<MacroPreset, { label: string; protein: number; carbs: number; fat: number; description: string }> = {
  balanced: { label: "Balanced", protein: 30, carbs: 40, fat: 30, description: "30/40/30 — general health" },
  lowCarb: { label: "Low Carb", protein: 35, carbs: 25, fat: 40, description: "35/25/40 — lower carb approach" },
  highProtein: { label: "High Protein", protein: 40, carbs: 35, fat: 25, description: "40/35/25 — muscle building" },
  keto: { label: "Keto", protein: 25, carbs: 5, fat: 70, description: "25/5/70 — ketogenic diet" },
  custom: { label: "Custom", protein: 30, carbs: 40, fat: 30, description: "Set your own ratios" },
}

function calculateBMR(formula: Formula, weightKg: number, heightCm: number, age: number, gender: Gender, bodyFatPct: number | null): number {
  if (formula === "katch" && bodyFatPct !== null) {
    const lbm = weightKg * (1 - bodyFatPct / 100)
    return 370 + 21.6 * lbm
  }
  if (formula === "harris") {
    if (gender === "male") {
      return 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * age
    }
    return 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.330 * age
  }
  // Mifflin-St Jeor (default)
  if (gender === "male") {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5
  }
  return 10 * weightKg + 6.25 * heightCm - 5 * age - 161
}

function calculateMacros(calories: number, weightKg: number, proteinPct: number, carbsPct: number, fatPct: number): MacroBreakdown {
  const proteinCal = calories * (proteinPct / 100)
  const carbsCal = calories * (carbsPct / 100)
  const fatCal = calories * (fatPct / 100)
  return {
    protein: Math.round(proteinCal / 4),
    carbs: Math.round(carbsCal / 4),
    fat: Math.round(fatCal / 9),
    proteinCal: Math.round(proteinCal),
    carbsCal: Math.round(carbsCal),
    fatCal: Math.round(fatCal),
    proteinPct,
    carbsPct,
    fatPct,
  }
}

function getMealSplit(macros: MacroBreakdown, meals: number): MacroBreakdown {
  return {
    protein: Math.round(macros.protein / meals),
    carbs: Math.round(macros.carbs / meals),
    fat: Math.round(macros.fat / meals),
    proteinCal: Math.round(macros.proteinCal / meals),
    carbsCal: Math.round(macros.carbsCal / meals),
    fatCal: Math.round(macros.fatCal / meals),
    proteinPct: macros.proteinPct,
    carbsPct: macros.carbsPct,
    fatPct: macros.fatPct,
  }
}

export function TDEEMacroCalculator() {
  const [unit, setUnit] = useState<Unit>("imperial")
  const [gender, setGender] = useState<Gender>("male")
  const [age, setAge] = useState("")
  const [weight, setWeight] = useState("")
  const [heightCm, setHeightCm] = useState("")
  const [heightFt, setHeightFt] = useState("")
  const [heightIn, setHeightIn] = useState("")
  const [bodyFat, setBodyFat] = useState("")
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>("moderate")
  const [goal, setGoal] = useState<Goal>("maintain")
  const [formula, setFormula] = useState<Formula>("mifflin")
  const [macroPreset, setMacroPreset] = useState<MacroPreset>("balanced")
  const [customProtein, setCustomProtein] = useState("30")
  const [customCarbs, setCustomCarbs] = useState("40")
  const [customFat, setCustomFat] = useState("30")
  const [meals, setMeals] = useState("3")
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [result, setResult] = useState<TDEEResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculate = () => {
    const ageNum = Number.parseInt(age)
    if (!age || !weight || ageNum < 15 || ageNum > 100) return

    // Convert to metric
    let weightKg: number
    let heightCmVal: number
    if (unit === "metric") {
      weightKg = Number.parseFloat(weight)
      heightCmVal = Number.parseFloat(heightCm)
    } else {
      weightKg = Number.parseFloat(weight) * 0.453592
      const ft = Number.parseFloat(heightFt) || 0
      const inches = Number.parseFloat(heightIn) || 0
      heightCmVal = (ft * 12 + inches) * 2.54
    }

    if (!weightKg || !heightCmVal || weightKg <= 0 || heightCmVal <= 0) return

    setIsCalculating(true)

    setTimeout(() => {
      const bfPct = bodyFat ? Number.parseFloat(bodyFat) : null

      // Calculate BMR for all formulas
      const formulas: Formula[] = ["mifflin", "harris"]
      if (bfPct !== null && bfPct > 0) formulas.push("katch")

      const allFormulas: FormulaResult[] = formulas.map((f) => {
        const names: Record<Formula, string> = {
          mifflin: "Mifflin-St Jeor",
          harris: "Harris-Benedict",
          katch: "Katch-McArdle",
        }
        const bmr = calculateBMR(f, weightKg, heightCmVal, ageNum, gender, bfPct)
        const tdee = bmr * ACTIVITY_LEVELS[activityLevel].multiplier
        return { name: names[f], bmr: Math.round(bmr), tdee: Math.round(tdee) }
      })

      // Use selected formula
      const selectedFormula = formulas.includes(formula) ? formula : "mifflin"
      const bmr = calculateBMR(selectedFormula, weightKg, heightCmVal, ageNum, gender, bfPct)
      const tdee = bmr * ACTIVITY_LEVELS[activityLevel].multiplier
      const goalCalories = Math.round(tdee * GOAL_ADJUSTMENTS[goal].multiplier)

      // Calculate macros
      let proteinPct: number, carbsPct: number, fatPct: number
      if (macroPreset === "custom") {
        proteinPct = Number.parseFloat(customProtein) || 30
        carbsPct = Number.parseFloat(customCarbs) || 40
        fatPct = Number.parseFloat(customFat) || 30
      } else {
        proteinPct = MACRO_PRESETS[macroPreset].protein
        carbsPct = MACRO_PRESETS[macroPreset].carbs
        fatPct = MACRO_PRESETS[macroPreset].fat
      }

      const macros = calculateMacros(goalCalories, weightKg, proteinPct, carbsPct, fatPct)

      // BMI
      const heightM = heightCmVal / 100
      const bmi = weightKg / (heightM * heightM)

      // LBM
      const lbm = bfPct !== null ? weightKg * (1 - bfPct / 100) : null

      const mealsNum = Number.parseInt(meals) || 3
      const mealSplit = getMealSplit(macros, mealsNum)

      const formulaNames: Record<Formula, string> = {
        mifflin: "Mifflin-St Jeor",
        harris: "Harris-Benedict",
        katch: "Katch-McArdle",
      }

      setResult({
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        goalCalories,
        formula: formulaNames[selectedFormula],
        allFormulas,
        macros,
        bmi: Number.parseFloat(bmi.toFixed(1)),
        lbm: lbm !== null ? Number.parseFloat(lbm.toFixed(1)) : null,
        goalLabel: GOAL_ADJUSTMENTS[goal].label,
        activityLabel: ACTIVITY_LEVELS[activityLevel].label,
        mealSplit: { meals: mealsNum, perMeal: mealSplit },
      })

      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `TDEE Results (${result.formula})
BMR: ${result.bmr} cal/day
TDEE: ${result.tdee} cal/day
Goal (${result.goalLabel}): ${result.goalCalories} cal/day
Protein: ${result.macros.protein}g (${result.macros.proteinPct}%)
Carbs: ${result.macros.carbs}g (${result.macros.carbsPct}%)
Fat: ${result.macros.fat}g (${result.macros.fatPct}%)`
    void navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isValid = age && weight && (unit === "metric" ? heightCm : heightFt)

  return (
    <div className="space-y-8">
      {/* Calculator Input */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader className="pb-4">
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Flame className="h-6 w-6 text-foreground" />
            </div>
            TDEE & Macro Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Calculate your Total Daily Energy Expenditure and personalized macronutrient targets using science-backed equations
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-8">
          {/* Unit Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-heading-accent" />
              <GLabel className="text-base font-semibold text-foreground">Measurement Units</GLabel>
            </div>
            <div className="flex gap-2 p-1 bg-card border border-border rounded-lg">
              <button
                onClick={() => setUnit("imperial")}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${unit === "imperial" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"}`}
              >
                Imperial (lbs/ft)
              </button>
              <button
                onClick={() => setUnit("metric")}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${unit === "metric" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"}`}
              >
                Metric (kg/cm)
              </button>
            </div>
          </div>

          {/* Gender */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-heading-accent" />
              <GLabel className="text-base font-semibold text-foreground">Biological Sex</GLabel>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setGender("male")}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${gender === "male" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"}`}
              >
                Male
              </button>
              <button
                onClick={() => setGender("female")}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${gender === "female" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"}`}
              >
                Female
              </button>
            </div>
          </div>

          {/* Age, Weight, Height */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3">
              <GLabel htmlFor="tdee-age" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Calculator className="h-4 w-4 text-heading-accent" />
                Age (years)
              </GLabel>
              <GInput
                id="tdee-age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="25"
                min="15"
                max="100"
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="space-y-3">
              <GLabel htmlFor="tdee-weight" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Scale className="h-4 w-4 text-heading-accent" />
                Weight {unit === "metric" ? "(kg)" : "(lbs)"}
              </GLabel>
              <GInput
                id="tdee-weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={unit === "metric" ? "70" : "154"}
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          {/* Height */}
          {unit === "metric" ? (
            <div className="space-y-3">
              <GLabel htmlFor="tdee-height-cm" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Target className="h-4 w-4 text-heading-accent" />
                Height (cm)
              </GLabel>
              <GInput
                id="tdee-height-cm"
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                placeholder="175"
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-primary"
              />
            </div>
          ) : (
            <div className="space-y-3">
              <GLabel className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Target className="h-4 w-4 text-heading-accent" />
                Height
              </GLabel>
              <div className="grid grid-cols-2 gap-3">
                <GInput
                  id="tdee-height-ft"
                  type="number"
                  value={heightFt}
                  onChange={(e) => setHeightFt(e.target.value)}
                  placeholder="5 ft"
                  min="3"
                  max="8"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-primary"
                />
                <GInput
                  id="tdee-height-in"
                  type="number"
                  value={heightIn}
                  onChange={(e) => setHeightIn(e.target.value)}
                  placeholder="10 in"
                  min="0"
                  max="11"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
          )}

          {/* Activity Level */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-heading-accent" />
              <GLabel className="text-base font-semibold text-foreground">Activity Level</GLabel>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(Object.entries(ACTIVITY_LEVELS) as [ActivityLevel, typeof ACTIVITY_LEVELS[ActivityLevel]][]).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setActivityLevel(key)}
                  className={`py-3 px-3 rounded-lg text-sm font-medium transition-all text-left ${
                    activityLevel === key
                      ? "bg-primary text-white shadow-sm ring-2 ring-primary/30"
                      : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                  }`}
                >
                  <div className="font-semibold text-xs sm:text-sm">{val.label}</div>
                  <div className={`text-[10px] sm:text-xs mt-0.5 ${activityLevel === key ? "text-white/80" : "text-muted-foreground"}`}>
                    {val.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-heading-accent" />
              <GLabel className="text-base font-semibold text-foreground">Goal</GLabel>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {(Object.entries(GOAL_ADJUSTMENTS) as [Goal, typeof GOAL_ADJUSTMENTS[Goal]][]).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setGoal(key as Goal)}
                  className={`py-3 px-3 rounded-lg text-sm font-medium transition-all text-left ${
                    goal === key
                      ? "bg-primary text-white shadow-sm ring-2 ring-primary/30"
                      : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                  }`}
                >
                  <div className="font-semibold text-xs sm:text-sm">{val.label}</div>
                  <div className={`text-[10px] sm:text-xs mt-0.5 ${goal === key ? "text-white/80" : "text-muted-foreground"}`}>
                    {val.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Advanced Options Toggle */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            Advanced Options (Body Fat %, Formula, Macro Split)
          </button>

          {showAdvanced && (
            <div className="space-y-6 p-4 rounded-lg border border-border bg-muted/20">
              {/* Body Fat % */}
              <div className="space-y-3">
                <GLabel htmlFor="tdee-bf" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                  <Dumbbell className="h-4 w-4 text-heading-accent" />
                  Body Fat % (optional)
                </GLabel>
                <GInput
                  id="tdee-bf"
                  type="number"
                  value={bodyFat}
                  onChange={(e) => setBodyFat(e.target.value)}
                  placeholder="e.g. 20"
                  min="3"
                  max="60"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-primary"
                />
                <p className="text-xs text-muted-foreground">Enables the Katch-McArdle formula for a more accurate calculation based on lean body mass.</p>
              </div>

              {/* Formula Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-heading-accent" />
                  <GLabel className="text-base font-semibold text-foreground">BMR Equation</GLabel>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => setFormula("mifflin")}
                    className={`py-3 px-3 rounded-lg text-sm font-medium transition-all text-left ${formula === "mifflin" ? "bg-primary text-white shadow-sm ring-2 ring-primary/30" : "bg-card text-muted-foreground hover:bg-secondary border border-border"}`}
                  >
                    <div className="font-semibold">Mifflin-St Jeor</div>
                    <div className={`text-xs mt-0.5 ${formula === "mifflin" ? "text-white/80" : "text-muted-foreground"}`}>Most accurate for general population</div>
                  </button>
                  <button
                    onClick={() => setFormula("harris")}
                    className={`py-3 px-3 rounded-lg text-sm font-medium transition-all text-left ${formula === "harris" ? "bg-primary text-white shadow-sm ring-2 ring-primary/30" : "bg-card text-muted-foreground hover:bg-secondary border border-border"}`}
                  >
                    <div className="font-semibold">Harris-Benedict</div>
                    <div className={`text-xs mt-0.5 ${formula === "harris" ? "text-white/80" : "text-muted-foreground"}`}>Revised 1984, widely used</div>
                  </button>
                  <button
                    onClick={() => setFormula("katch")}
                    disabled={!bodyFat}
                    className={`py-3 px-3 rounded-lg text-sm font-medium transition-all text-left ${formula === "katch" ? "bg-primary text-white shadow-sm ring-2 ring-primary/30" : !bodyFat ? "bg-muted text-muted-foreground/50 border border-border cursor-not-allowed" : "bg-card text-muted-foreground hover:bg-secondary border border-border"}`}
                  >
                    <div className="font-semibold">Katch-McArdle</div>
                    <div className={`text-xs mt-0.5 ${formula === "katch" ? "text-white/80" : "text-muted-foreground"}`}>{bodyFat ? "Uses lean body mass" : "Requires body fat %"}</div>
                  </button>
                </div>
              </div>

              {/* Macro Preset */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-heading-accent" />
                  <GLabel className="text-base font-semibold text-foreground">Macro Split</GLabel>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {(Object.entries(MACRO_PRESETS) as [MacroPreset, typeof MACRO_PRESETS[MacroPreset]][]).map(([key, val]) => (
                    <button
                      key={key}
                      onClick={() => setMacroPreset(key as MacroPreset)}
                      className={`py-3 px-3 rounded-lg text-sm font-medium transition-all text-left ${
                        macroPreset === key
                          ? "bg-primary text-white shadow-sm ring-2 ring-primary/30"
                          : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                      }`}
                    >
                      <div className="font-semibold text-xs sm:text-sm">{val.label}</div>
                      <div className={`text-[10px] sm:text-xs mt-0.5 ${macroPreset === key ? "text-white/80" : "text-muted-foreground"}`}>
                        {val.description}
                      </div>
                    </button>
                  ))}
                </div>

                {macroPreset === "custom" && (
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <div className="space-y-1">
                      <GLabel className="text-xs font-semibold text-heading-accent">Protein %</GLabel>
                      <GInput
                        type="number"
                        value={customProtein}
                        onChange={(e) => setCustomProtein(e.target.value)}
                        min="5"
                        max="60"
                        className="h-10 text-sm bg-card border-border text-foreground"
                      />
                    </div>
                    <div className="space-y-1">
                      <GLabel className="text-xs font-semibold text-heading-accent">Carbs %</GLabel>
                      <GInput
                        type="number"
                        value={customCarbs}
                        onChange={(e) => setCustomCarbs(e.target.value)}
                        min="5"
                        max="70"
                        className="h-10 text-sm bg-card border-border text-foreground"
                      />
                    </div>
                    <div className="space-y-1">
                      <GLabel className="text-xs font-semibold text-heading-accent">Fat %</GLabel>
                      <GInput
                        type="number"
                        value={customFat}
                        onChange={(e) => setCustomFat(e.target.value)}
                        min="5"
                        max="80"
                        className="h-10 text-sm bg-card border-border text-foreground"
                      />
                    </div>
                    {Number(customProtein) + Number(customCarbs) + Number(customFat) !== 100 && (
                      <p className="col-span-3 text-xs text-red-500 font-medium">Percentages must total 100% (currently {Number(customProtein) + Number(customCarbs) + Number(customFat)}%)</p>
                    )}
                  </div>
                )}
              </div>

              {/* Meals per day */}
              <div className="space-y-3">
                <GLabel htmlFor="tdee-meals" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                  <Utensils className="h-4 w-4 text-heading-accent" />
                  Meals Per Day
                </GLabel>
                <div className="flex gap-2">
                  {["2", "3", "4", "5", "6"].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMeals(m)}
                      className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${meals === m ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Calculate Button */}
          <GButton
            onClick={calculate}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
            disabled={!isValid || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2 sm:mr-3" />
                <span className="hidden sm:inline">Calculating TDEE & Macros...</span>
                <span className="sm:hidden">Calculating...</span>
              </>
            ) : (
              <>
                <Flame className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculate TDEE & Macros</span>
                <span className="sm:hidden">Calculate</span>
              </>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-6 animate-fade-in-up">
          {/* Primary Results */}
          <GCard className="shadow-lg border-border bg-card overflow-hidden">
            <GCardHeader className="pb-4 bg-muted/30 border-b border-border">
              <GCardTitle className="text-2xl flex items-center gap-3 text-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-foreground" />
                </div>
                Your Results
              </GCardTitle>
              <GCardDescription className="text-base text-muted-foreground mt-1">
                Calculated using {result.formula} equation &middot; {result.activityLabel} &middot; {result.goalLabel}
              </GCardDescription>
            </GCardHeader>
            <GCardContent className="space-y-6 pt-6">
              {/* Hero Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted border-2 border-blue-500/20">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">BMR</div>
                  <div className="text-3xl sm:text-4xl font-black text-foreground">{result.bmr.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">cal/day</div>
                </div>
                <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted border-2 border-orange-500/20">
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">TDEE</div>
                  <div className="text-3xl sm:text-4xl font-black text-foreground">{result.tdee.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">cal/day</div>
                </div>
                <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-card to-muted border-2 border-primary/30">
                  <div className="text-xs font-bold text-heading-accent uppercase tracking-wider mb-1">{result.goalLabel}</div>
                  <div className="text-3xl sm:text-4xl font-black text-heading-accent">{result.goalCalories.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">cal/day</div>
                </div>
              </div>

              {/* Macro Breakdown */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Daily Macro Targets
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl border border-border bg-card text-center">
                    <div className="text-xs font-bold text-blue-500 uppercase">Protein</div>
                    <div className="text-2xl sm:text-3xl font-black text-foreground mt-1">{result.macros.protein}g</div>
                    <div className="text-xs text-muted-foreground mt-1">{result.macros.proteinPct}% &middot; {result.macros.proteinCal} cal</div>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card text-center">
                    <div className="text-xs font-bold text-amber-500 uppercase">Carbs</div>
                    <div className="text-2xl sm:text-3xl font-black text-foreground mt-1">{result.macros.carbs}g</div>
                    <div className="text-xs text-muted-foreground mt-1">{result.macros.carbsPct}% &middot; {result.macros.carbsCal} cal</div>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-card text-center">
                    <div className="text-xs font-bold text-green-500 uppercase">Fat</div>
                    <div className="text-2xl sm:text-3xl font-black text-foreground mt-1">{result.macros.fat}g</div>
                    <div className="text-xs text-muted-foreground mt-1">{result.macros.fatPct}% &middot; {result.macros.fatCal} cal</div>
                  </div>
                </div>

                {/* Macro Bar */}
                <div className="w-full h-4 rounded-full overflow-hidden flex bg-muted">
                  <div className="h-full bg-blue-500 transition-all" style={{ width: `${result.macros.proteinPct}%` }} />
                  <div className="h-full bg-amber-500 transition-all" style={{ width: `${result.macros.carbsPct}%` }} />
                  <div className="h-full bg-green-500 transition-all" style={{ width: `${result.macros.fatPct}%` }} />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> Protein {result.macros.proteinPct}%</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block" /> Carbs {result.macros.carbsPct}%</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Fat {result.macros.fatPct}%</span>
                </div>
              </div>

              {/* Per-Meal Breakdown */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Per-Meal Breakdown ({result.mealSplit.meals} meals/day)
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg border border-border bg-muted/30 text-center">
                    <div className="text-xs font-bold text-blue-500 uppercase">Protein</div>
                    <div className="text-xl font-black text-foreground">{result.mealSplit.perMeal.protein}g</div>
                  </div>
                  <div className="p-3 rounded-lg border border-border bg-muted/30 text-center">
                    <div className="text-xs font-bold text-amber-500 uppercase">Carbs</div>
                    <div className="text-xl font-black text-foreground">{result.mealSplit.perMeal.carbs}g</div>
                  </div>
                  <div className="p-3 rounded-lg border border-border bg-muted/30 text-center">
                    <div className="text-xs font-bold text-green-500 uppercase">Fat</div>
                    <div className="text-xl font-black text-foreground">{result.mealSplit.perMeal.fat}g</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  ~{Math.round(result.goalCalories / result.mealSplit.meals)} calories per meal
                </p>
              </div>

              {/* Formula Comparison */}
              {result.allFormulas.length > 1 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Formula Comparison
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-3 font-semibold text-foreground">Equation</th>
                          <th className="text-right p-3 font-semibold text-foreground">BMR</th>
                          <th className="text-right p-3 font-semibold text-foreground">TDEE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.allFormulas.map((f) => (
                          <tr key={f.name} className={`border-b border-border ${f.name === result.formula ? "bg-primary/5" : ""}`}>
                            <td className="p-3 text-foreground">
                              {f.name}
                              {f.name === result.formula && <span className="ml-2 text-[10px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-full">Selected</span>}
                            </td>
                            <td className="p-3 text-right font-mono text-foreground">{f.bmr.toLocaleString()}</td>
                            <td className="p-3 text-right font-mono text-foreground">{f.tdee.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    TDEE estimates typically have a ±10-15% margin of error. Use these numbers as a starting point and adjust based on real-world results after 2-3 weeks.
                  </p>
                </div>
              )}

              {/* Additional Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl border border-border bg-card space-y-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase">BMI</div>
                  <div className="text-lg font-bold text-foreground">{result.bmi}</div>
                </div>
                {result.lbm !== null && (
                  <div className="p-4 rounded-xl border border-border bg-card space-y-1">
                    <div className="text-xs font-bold text-muted-foreground uppercase">Lean Body Mass</div>
                    <div className="text-lg font-bold text-foreground">{result.lbm} kg</div>
                  </div>
                )}
                <div className="p-4 rounded-xl border border-border bg-card space-y-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase">Protein/lb</div>
                  <div className="text-lg font-bold text-foreground">
                    {(result.macros.protein / (unit === "metric" ? Number.parseFloat(weight) * 2.20462 : Number.parseFloat(weight))).toFixed(2)}g
                  </div>
                </div>
              </div>

              {/* Copy Button */}
              <GButton
                onClick={copyResult}
                variant="outline"
                className="w-full h-11 text-sm font-medium border-border hover:bg-secondary transition-all"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Copied to Clipboard
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Results
                  </>
                )}
              </GButton>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
