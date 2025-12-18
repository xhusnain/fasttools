"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"

import { Activity, Copy, Check, Calculator, Heart, Target, Scale, TrendingUp, AlertTriangle, CheckCircle, Info, Zap, Sparkles } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

interface BMIResult {
  bmi: number
  category: string
  color: string
  healthyRange: string
  bmiPrime: number
  ponderalIndex: number
  healthyWeightRange: string
  riskLevel: string
  recommendations: string[]
  age?: number
  gender?: string
}

interface BMICalculatorProps {
  onResultChange?: (result: BMIResult | null) => void
}

export function BMICalculator({ onResultChange }: BMICalculatorProps = {}) {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState<"male" | "female" | "other">("male")
  const [unit, setUnit] = useState<"metric" | "imperial">("metric")
  const [result, setResult] = useState<BMIResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateBMI = () => {
    if (!weight || !height) return

    setIsCalculating(true)

    setTimeout(() => {
      let bmi: number
      const w = Number.parseFloat(weight)
      const h = Number.parseFloat(height)

      if (unit === "metric") {
        bmi = w / ((h / 100) * (h / 100))
      } else {
        bmi = (w / (h * h)) * 703
      }

      let category = ""
      let color = ""
      let healthyRange = ""
      let riskLevel = ""
      let recommendations: string[] = []

      if (bmi < 16) {
        category = "Severe Thinness"
        color = "text-foreground"
        healthyRange = "18.5 - 24.9"
        riskLevel = "High"
        recommendations = ["Consult a healthcare professional immediately", "Focus on healthy weight gain", "Consider nutritional counseling"]
      } else if (bmi >= 16 && bmi < 17) {
        category = "Moderate Thinness"
        color = "text-foreground"
        healthyRange = "18.5 - 24.9"
        riskLevel = "Moderate"
        recommendations = ["Consult a healthcare professional", "Focus on healthy weight gain", "Increase caloric intake with nutritious foods"]
      } else if (bmi >= 17 && bmi < 18.5) {
        category = "Mild Thinness"
        color = "text-foreground"
        healthyRange = "18.5 - 24.9"
        riskLevel = "Low"
        recommendations = ["Consider healthy weight gain", "Focus on balanced nutrition", "Regular exercise"]
      } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight"
        color = "text-heading-accent"
        healthyRange = "18.5 - 24.9"
        riskLevel = "Low"
        recommendations = ["Maintain current lifestyle", "Continue balanced diet", "Regular physical activity"]
      } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight"
        color = "text-foreground"
        healthyRange = "18.5 - 24.9"
        riskLevel = "Moderate"
        recommendations = ["Consider weight loss", "Increase physical activity", "Focus on balanced diet"]
      } else if (bmi >= 30 && bmi < 35) {
        category = "Obese Class I"
        color = "text-foreground"
        healthyRange = "18.5 - 24.9"
        riskLevel = "High"
        recommendations = ["Consult healthcare professional", "Weight loss program", "Regular exercise", "Dietary changes"]
      } else if (bmi >= 35 && bmi < 40) {
        category = "Obese Class II"
        color = "text-foreground"
        healthyRange = "18.5 - 24.9"
        riskLevel = "Very High"
        recommendations = ["Immediate medical consultation", "Comprehensive weight management", "Professional guidance required"]
      } else {
        category = "Obese Class III"
        color = "text-foreground"
        healthyRange = "18.5 - 24.9"
        riskLevel = "Extremely High"
        recommendations = ["Urgent medical consultation", "Specialized treatment program", "Comprehensive health monitoring"]
      }

      // Calculate BMI Prime
      const bmiPrime = bmi / 25

      // Calculate Ponderal Index
      let ponderalIndex: number
      if (unit === "metric") {
        ponderalIndex = w / Math.pow(h / 100, 3)
      } else {
        ponderalIndex = h / Math.pow(w, 1 / 3)
      }

      // Calculate healthy weight range
      let healthyWeightRange = ""
      if (unit === "metric") {
        const minWeight = 18.5 * Math.pow(h / 100, 2)
        const maxWeight = 24.9 * Math.pow(h / 100, 2)
        healthyWeightRange = `${minWeight.toFixed(1)} - ${maxWeight.toFixed(1)} kg`
      } else {
        const minWeight = (18.5 * h * h) / 703
        const maxWeight = (24.9 * h * h) / 703
        healthyWeightRange = `${minWeight.toFixed(1)} - ${maxWeight.toFixed(1)} lbs`
      }

      const resultData = {
        bmi: Number.parseFloat(bmi.toFixed(1)),
        category,
        color,
        healthyRange,
        bmiPrime: Number.parseFloat(bmiPrime.toFixed(2)),
        ponderalIndex: Number.parseFloat(ponderalIndex.toFixed(1)),
        healthyWeightRange,
        riskLevel,
        recommendations,
        age: age ? Number.parseInt(age) : undefined,
        gender: gender
      }

      setResult(resultData)
      onResultChange?.(resultData)
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `My BMI is ${result.bmi} (${result.category})
BMI Prime: ${result.bmiPrime}
Ponderal Index: ${result.ponderalIndex}
Healthy Weight Range: ${result.healthyWeightRange}
Risk Level: ${result.riskLevel}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-8">
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader className="pb-4">
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Activity className="h-6 w-6 text-foreground" />
            </div>
            BMI Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Calculate your Body Mass Index with advanced metrics including BMI Prime and Ponderal Index
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
                onClick={() => setUnit("metric")}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${unit === "metric" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                  }`}
              >
                Metric (kg/cm)
              </button>
              <button
                onClick={() => setUnit("imperial")}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${unit === "imperial" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                  }`}
              >
                Imperial (lbs/in)
              </button>
            </div>
          </div>

          {/* GInput Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3">
              <GLabel htmlFor="weight" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Scale className="h-4 w-4 text-heading-accent" />
                Weight {unit === "metric" ? "(kg)" : "(lbs)"}
              </GLabel>
              <GInput
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={unit === "metric" ? "70" : "154"}
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="space-y-3">
              <GLabel htmlFor="height" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Target className="h-4 w-4 text-heading-accent" />
                Height {unit === "metric" ? "(cm)" : "(inches)"}
              </GLabel>
              <GInput
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder={unit === "metric" ? "170" : "67"}
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3">
              <GLabel htmlFor="age" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Heart className="h-4 w-4 text-heading-accent" />
                Age (Optional)
              </GLabel>
              <GInput
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="25"
                min="2"
                max="120"
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-primary"
              />
            </div>

            <div className="space-y-3">
              <GLabel className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Zap className="h-4 w-4 text-heading-accent" />
                Gender (Optional)
              </GLabel>
              <div className="flex gap-2">
                <button
                  onClick={() => setGender("male")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${gender === "male" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                    }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${gender === "female" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                    }`}
                >
                  Female
                </button>
                <button
                  onClick={() => setGender("other")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${gender === "other" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                    }`}
                >
                  Other
                </button>
              </div>
            </div>
          </div>

          <GButton
            onClick={calculateBMI}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
            disabled={!weight || !height || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2 sm:mr-3" />
                <span className="hidden sm:inline">Calculating BMI...</span>
                <span className="sm:hidden">Calculating...</span>
              </>
            ) : (
              <>
                <Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculate BMI</span>
                <span className="sm:hidden">Calculate</span>
              </>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {result && !isCalculating && (
        <GCard className="shadow-lg border-border animate-fade-in-up bg-card overflow-hidden">
          <GCardHeader className="pb-4 bg-muted/30 border-b border-border">
            <GCardTitle className="text-2xl flex items-center gap-3 text-foreground">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Activity className="h-6 w-6 text-foreground" />
              </div>
              Your Results
            </GCardTitle>
            <GCardDescription className="text-base text-muted-foreground mt-1">
              Personalized Body Mass Index analysis
            </GCardDescription>
          </GCardHeader>
          <GCardContent className="space-y-6 pt-6">
            {/* Main Result Hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-card to-muted border-2 border-primary/20 shadow-inner">
                <div className="text-6xl sm:text-7xl font-black text-foreground mb-2 tracking-tighter">{result.bmi}</div>
                <div className={`text-xl sm:text-2xl font-bold ${result.color} mb-1 uppercase tracking-wider`}>{result.category}</div>
                <div className="text-sm font-medium text-muted-foreground bg-background px-4 py-1 rounded-full border border-border">kg/m²</div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-border bg-card space-y-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                    <Target className="h-3 w-3" /> Healthy Range
                  </div>
                  <div className="text-lg font-bold text-heading-accent">{result.healthyRange}</div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card space-y-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                    <Scale className="h-3 w-3" /> Ideal Weight
                  </div>
                  <div className="text-lg font-bold text-foreground">{result.healthyWeightRange}</div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card space-y-1">
                  <div className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1">
                    <Activity className="h-3 w-3" /> Risk Level
                  </div>
                  <div className="text-lg font-bold text-foreground">{result.riskLevel}</div>
                </div>
              </div>
            </div>

            {/* Child/Teen Disclaimer - High Prominence */}
            {result.age && result.age < 20 && (
              <div className="p-4 bg-amber-500/10 border border-amber-500/50 rounded-xl flex items-start gap-3 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <strong className="block mb-1">Growth Warning for Ages 2-19:</strong>
                  Standard adult BMI categories don't apply. Children's results are typically interpreted via age-and-sex-specific percentiles. Consult a pediatrician for a full assessment.
                </div>
              </div>
            )}

            {/* Advanced Metrics Carousel-style or Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-muted/20 flex flex-col items-center text-center">
                <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">BMI Prime</div>
                <div className="text-xl font-bold text-foreground">{result.bmiPrime}</div>
              </div>
              <div className="p-4 rounded-xl border border-border bg-muted/20 flex flex-col items-center text-center">
                <div className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Ponderal Index</div>
                <div className="text-xl font-bold text-foreground">{result.ponderalIndex}</div>
              </div>
            </div>

            {/* Recommendations Section */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-muted-foreground uppercase flex items-center gap-2 px-1">
                <Sparkles className="h-4 w-4 text-primary" /> Key Recommendations
              </h4>
              <div className="grid gap-2">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-card border border-border rounded-xl transition-colors hover:border-primary/50 group">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-foreground font-medium">{recommendation}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <GButton
                onClick={copyResult}
                variant="outline"
                className="flex-1 h-12 rounded-xl border-2 hover:bg-muted font-bold transition-all"
              >
                {copied ? (
                  <><Check className="mr-2 h-5 w-5 text-green-500" /> Copied!</>
                ) : (
                  <><Copy className="mr-2 h-5 w-5" /> Share Results</>
                )}
              </GButton>
              <GButton
                variant="outline"
                className="flex-1 h-12 rounded-xl border-2 hover:bg-muted font-bold flex items-center justify-center gap-2"
                onClick={() => window.print()}
              >
                <Calculator className="h-5 w-5" /> Print PDF
              </GButton>
            </div>

            {/* Medical Disclaimer */}
            <div className="p-3 bg-muted/50 rounded-lg text-[10px] leading-relaxed text-muted-foreground text-center italic border border-border mt-4">
              BMI is a general screening tool, not a medical diagnosis. Variations in muscle mass, bone density, and overall body composition may affect accuracy. Always consult a healthcare professional.
            </div>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
