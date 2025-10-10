"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Activity, Copy, Check, Calculator, Heart, Target, Scale, TrendingUp, AlertTriangle, CheckCircle, Info, Zap, Sparkles } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

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
        color = "text-red-600"
        healthyRange = "18.5 - 24.9"
        riskLevel = "High"
        recommendations = ["Consult a healthcare professional immediately", "Focus on healthy weight gain", "Consider nutritional counseling"]
      } else if (bmi >= 16 && bmi < 17) {
        category = "Moderate Thinness"
        color = "text-orange-600"
        healthyRange = "18.5 - 24.9"
        riskLevel = "Moderate"
        recommendations = ["Consult a healthcare professional", "Focus on healthy weight gain", "Increase caloric intake with nutritious foods"]
      } else if (bmi >= 17 && bmi < 18.5) {
        category = "Mild Thinness"
        color = "text-yellow-600"
        healthyRange = "18.5 - 24.9"
        riskLevel = "Low"
        recommendations = ["Consider healthy weight gain", "Focus on balanced nutrition", "Regular exercise"]
      } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight"
        color = "text-green-600"
        healthyRange = "18.5 - 24.9"
        riskLevel = "Low"
        recommendations = ["Maintain current lifestyle", "Continue balanced diet", "Regular physical activity"]
      } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight"
        color = "text-orange-600"
        healthyRange = "18.5 - 24.9"
        riskLevel = "Moderate"
        recommendations = ["Consider weight loss", "Increase physical activity", "Focus on balanced diet"]
      } else if (bmi >= 30 && bmi < 35) {
        category = "Obese Class I"
        color = "text-red-600"
        healthyRange = "18.5 - 24.9"
        riskLevel = "High"
        recommendations = ["Consult healthcare professional", "Weight loss program", "Regular exercise", "Dietary changes"]
      } else if (bmi >= 35 && bmi < 40) {
        category = "Obese Class II"
        color = "text-red-700"
        healthyRange = "18.5 - 24.9"
        riskLevel = "Very High"
        recommendations = ["Immediate medical consultation", "Comprehensive weight management", "Professional guidance required"]
      } else {
        category = "Obese Class III"
        color = "text-red-800"
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
        ponderalIndex = h / Math.pow(w, 1/3)
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
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            BMI Calculator
          </CardTitle>
          <CardDescription className="text-base">
            Calculate your Body Mass Index with advanced metrics including BMI Prime and Ponderal Index
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Unit Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-primary" />
              <Label className="text-base font-semibold">Measurement Units</Label>
            </div>
            <div className="flex gap-2 p-1 bg-muted rounded-lg">
              <button
                onClick={() => setUnit("metric")}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  unit === "metric" ? "bg-background shadow-sm" : "hover:bg-background/50"
                }`}
              >
                Metric (kg/cm)
              </button>
              <button
                onClick={() => setUnit("imperial")}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  unit === "imperial" ? "bg-background shadow-sm" : "hover:bg-background/50"
                }`}
              >
                Imperial (lbs/in)
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3">
              <Label htmlFor="weight" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Scale className="h-4 w-4 text-primary" />
                Weight {unit === "metric" ? "(kg)" : "(lbs)"}
              </Label>
              <Input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={unit === "metric" ? "70" : "154"}
                className="h-10 sm:h-12 text-sm sm:text-base"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="height" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                Height {unit === "metric" ? "(cm)" : "(inches)"}
              </Label>
              <Input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder={unit === "metric" ? "170" : "67"}
                className="h-10 sm:h-12 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3">
              <Label htmlFor="age" className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                Age (Optional)
              </Label>
              <Input
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="25"
                min="2"
                max="120"
                className="h-10 sm:h-12 text-sm sm:text-base"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-sm sm:text-base font-semibold flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Gender (Optional)
              </Label>
              <div className="flex gap-2">
                <button
                  onClick={() => setGender("male")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    gender === "male" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    gender === "female" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  Female
                </button>
                <button
                  onClick={() => setGender("other")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    gender === "other" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  Other
                </button>
              </div>
            </div>
          </div>

          <Button
            onClick={calculateBMI}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
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
          </Button>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              Your BMI Result
            </CardTitle>
            <CardDescription className="text-base">
              Comprehensive Body Mass Index analysis with advanced metrics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Main BMI Display */}
            <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{result.bmi}</div>
              <div className={`text-lg sm:text-xl font-semibold ${result.color} mb-2`}>{result.category}</div>
              <div className="text-sm text-muted-foreground">kg/m²</div>
            </div>

            {/* Advanced Metrics */}
            <div className="space-y-4 p-4 sm:p-6 bg-white/50 dark:bg-slate-800/50 rounded-xl border-2 border-slate-200 dark:border-slate-700">
              <h3 className="text-base sm:text-lg font-semibold text-center mb-3 sm:mb-4 flex items-center justify-center gap-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Advanced Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">BMI Prime</span>
                  <span className="font-bold text-sm text-blue-900 dark:text-blue-100">{result.bmiPrime}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Ponderal Index</span>
                  <span className="font-bold text-sm text-purple-900 dark:text-purple-100">{result.ponderalIndex}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">Healthy Range</span>
                  <span className="font-bold text-sm text-green-900 dark:text-green-100">{result.healthyRange}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-800">
                  <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Risk Level</span>
                  <span className="font-bold text-sm text-orange-900 dark:text-orange-100">{result.riskLevel}</span>
                </div>
              </div>
            </div>

            {/* Healthy Weight Range */}
            <div className="space-y-4 p-4 sm:p-6 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h3 className="text-base sm:text-lg font-semibold text-cyan-700 dark:text-cyan-300 flex items-center gap-2">
                <Target className="h-4 w-4 sm:h-5 sm:w-5" />
                Healthy Weight Range
              </h3>
              <div className="text-center p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="text-lg sm:text-xl font-bold text-cyan-900 dark:text-cyan-100">{result.healthyWeightRange}</div>
                <div className="text-sm text-cyan-700 dark:text-cyan-300 mt-1">Recommended weight for your height</div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="space-y-4 p-4 sm:p-6 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl border-2 border-pink-200 dark:border-pink-800">
              <h3 className="text-base sm:text-lg font-semibold text-pink-700 dark:text-pink-300 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                Health Recommendations
              </h3>
              <div className="space-y-2">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-pink-200 dark:border-pink-700">
                    <Sparkles className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-pink-800 dark:text-pink-200">{recommendation}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl border-2 border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Disclaimer:</strong> BMI is a screening tool and should not be used as the sole indicator of health. 
                  Consult a healthcare provider for personalized health advice and comprehensive health assessment.
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-10 sm:h-12 text-sm sm:text-base font-semibold hover:bg-accent transition-all duration-300 border-2"
            >
              {copied ? (
                <>
                  <Check className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Result Copied to Clipboard!</span>
                  <span className="sm:hidden">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Copy Result to Clipboard</span>
                  <span className="sm:hidden">Copy Result</span>
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
