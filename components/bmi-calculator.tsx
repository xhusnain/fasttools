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
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Activity className="h-6 w-6 text-foreground" />
            </div>
            BMI Calculator
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground">
            Calculate your Body Mass Index with advanced metrics including BMI Prime and Ponderal Index
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Unit Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-heading-accent" />
              <Label className="text-base font-semibold text-foreground">Measurement Units</Label>
            </div>
            <div className="flex gap-2 p-1 bg-card border border-border rounded-lg">
              <button
                onClick={() => setUnit("metric")}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  unit === "metric" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                }`}
              >
                Metric (kg/cm)
              </button>
              <button
                onClick={() => setUnit("imperial")}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                  unit === "imperial" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                }`}
              >
                Imperial (lbs/in)
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3">
              <Label htmlFor="weight" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Scale className="h-4 w-4 text-heading-accent" />
                Weight {unit === "metric" ? "(kg)" : "(lbs)"}
              </Label>
              <Input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={unit === "metric" ? "70" : "154"}
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-orange-500"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="height" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Target className="h-4 w-4 text-heading-accent" />
                Height {unit === "metric" ? "(cm)" : "(inches)"}
              </Label>
              <Input
                id="height"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder={unit === "metric" ? "170" : "67"}
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3">
              <Label htmlFor="age" className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Heart className="h-4 w-4 text-heading-accent" />
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
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-orange-500"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-sm sm:text-base font-semibold flex items-center gap-2 text-heading-accent">
                <Zap className="h-4 w-4 text-heading-accent" />
                Gender (Optional)
              </Label>
              <div className="flex gap-2">
                <button
                  onClick={() => setGender("male")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    gender === "male" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    gender === "female" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                  }`}
                >
                  Female
                </button>
                <button
                  onClick={() => setGender("other")}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                    gender === "other" ? "bg-primary text-white shadow-sm" : "bg-card text-muted-foreground hover:bg-secondary border border-border"
                  }`}
                >
                  Other
                </button>
              </div>
            </div>
          </div>

          <Button
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
          </Button>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-border animate-fade-in-up bg-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl flex items-center gap-3 text-foreground">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Activity className="h-6 w-6 text-foreground" />
              </div>
              Your BMI Result
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Comprehensive Body Mass Index analysis with advanced metrics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Main BMI Display */}
            <div className="text-center p-6 sm:p-8 rounded-xl bg-card border-2 border-primary/20">
              <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2">{result.bmi}</div>
              <div className={`text-lg sm:text-xl font-semibold ${result.color} mb-2`}>{result.category}</div>
              <div className="text-sm text-muted-foreground">kg/m²</div>
            </div>

            {/* Advanced Metrics */}
            <div className="space-y-4 p-4 sm:p-6 bg-card rounded-xl border-2 border-border">
              <h3 className="text-base sm:text-lg font-semibold text-center mb-3 sm:mb-4 flex items-center justify-center gap-2 text-heading-accent">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-heading-accent" />
                Advanced Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-blue-700">
                  <span className="text-sm font-medium text-foreground">BMI Prime</span>
                  <span className="font-bold text-sm text-foreground">{result.bmiPrime}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-primary">
                  <span className="text-sm font-medium text-foreground">Ponderal Index</span>
                  <span className="font-bold text-sm text-foreground">{result.ponderalIndex}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-green-700">
                  <span className="text-sm font-medium text-heading-accent">Healthy Range</span>
                  <span className="font-bold text-sm text-heading-accent">{result.healthyRange}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-primary">
                  <span className="text-sm font-medium text-foreground">Risk Level</span>
                  <span className="font-bold text-sm text-foreground">{result.riskLevel}</span>
                </div>
              </div>
            </div>

            {/* Healthy Weight Range */}
            <div className="space-y-4 p-4 sm:p-6 bg-card rounded-xl border-2 border-border">
              <h3 className="text-base sm:text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-heading-accent" />
                Healthy Weight Range
              </h3>
              <div className="text-center p-4 bg-card rounded-lg border border-green-700">
                <div className="text-lg sm:text-xl font-bold text-heading-accent">{result.healthyWeightRange}</div>
                <div className="text-sm text-muted-foreground mt-1">Recommended weight for your height</div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="space-y-4 p-4 sm:p-6 bg-card rounded-xl border-2 border-border">
              <h3 className="text-base sm:text-lg font-semibold text-heading-accent flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-heading-accent" />
                Health Recommendations
              </h3>
              <div className="space-y-2">
                {result.recommendations.map((recommendation, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-card rounded-lg border border-border">
                    <Sparkles className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{recommendation}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-card rounded-xl border-2 border-amber-700">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-amber-300">
                  <strong>Disclaimer:</strong> BMI is a screening tool and should not be used as the sole indicator of health. 
                  Consult a healthcare provider for personalized health advice and comprehensive health assessment.
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-10 sm:h-12 text-sm sm:text-base font-semibold hover:bg-secondary transition-all duration-300 border-2 border-border text-foreground hover:text-white"
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
