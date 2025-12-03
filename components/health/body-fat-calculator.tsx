"use client"

import { useState, useEffect } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GBadge } from "@/ui/gbadge"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"

import {
  Calculator,
  Clock,
  Activity,
  Target,
  TrendingUp,
  Heart,
  Zap,
  Trophy,
  Users,
  Timer,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Info,
  Copy,
  Download,
  Scale,
  Ruler,
  Calendar,
  Dumbbell,
  Apple,
  Coffee,
  Moon,
  Sun,
  Wind,
  Thermometer,
  Droplets,
  Leaf,
  Sparkles,
  Brain,
  Shield,
  Star,
  Flame
} from "lucide-react"

interface BodyFatResult {
  navyMethod: {
    percentage: number
    category: string
    fatMass: number
    leanMass: number
  }
  bmiMethod: {
    percentage: number
    bmi: number
  }
  idealBodyFat: {
    percentage: number
    fatToLose: number
  }
  recommendations: {
    nutrition: string[]
    exercise: string[]
    lifestyle: string[]
  }
  healthRisks: string[]
  improvementPlan: {
    shortTerm: string[]
    longTerm: string[]
  }
}

interface BodyFatCategory {
  name: string
  range: string
  description: string
  color: string
}

export default function BodyFatCalculator() {
  const [gender, setGender] = useState<"male" | "female">("male")
  const [age, setAge] = useState("")
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [neck, setNeck] = useState("")
  const [waist, setWaist] = useState("")
  const [hip, setHip] = useState("")
  const [unitSystem, setUnitSystem] = useState<"metric" | "imperial">("metric")
  const [result, setResult] = useState<BodyFatResult | null>(null)
  const [history, setHistory] = useState<BodyFatResult[]>([])

  const bodyFatCategories: BodyFatCategory[] = [
    {
      name: "Essential Fat",
      range: "2-5% (Men) / 10-13% (Women)",
      description: "Minimum required for basic physiological functions",
      color: "bg-destructive"
    },
    {
      name: "Athletes",
      range: "6-13% (Men) / 14-20% (Women)",
      description: "Elite athletic performance range",
      color: "bg-tertiary-accent"
    },
    {
      name: "Fitness",
      range: "14-17% (Men) / 21-24% (Women)",
      description: "Healthy, fit individuals",
      color: "bg-secondary-accent"
    },
    {
      name: "Average",
      range: "18-24% (Men) / 25-31% (Women)",
      description: "General population average",
      color: "bg-primary"
    },
    {
      name: "Obese",
      range: "25%+ (Men) / 32%+ (Women)",
      description: "Increased health risks",
      color: "bg-destructive"
    }
  ]

  const calculateBodyFat = () => {
    if (!age || !weight || !height || !neck || !waist) return
    if (gender === "female" && !hip) return

    try {
      const ageNum = parseInt(age)
      const weightNum = parseFloat(weight)
      const heightNum = parseFloat(height)
      const neckNum = parseFloat(neck)
      const waistNum = parseFloat(waist)
      const hipNum = hip ? parseFloat(hip) : 0

      // Convert units if needed
      const weightKg = unitSystem === "imperial" ? weightNum * 0.453592 : weightNum
      const heightCm = unitSystem === "imperial" ? heightNum * 2.54 : heightNum
      const neckCm = unitSystem === "imperial" ? neckNum * 2.54 : neckNum
      const waistCm = unitSystem === "imperial" ? waistNum * 2.54 : waistNum
      const hipCm = hip ? (unitSystem === "imperial" ? hipNum * 2.54 : hipNum) : 0

      // Calculate BMI
      const bmi = weightKg / Math.pow(heightCm / 100, 2)

      // U.S. Navy Method
      let navyPercentage = 0
      if (gender === "male") {
        navyPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waistCm - neckCm) + 0.15456 * Math.log10(heightCm)) - 450
      } else {
        navyPercentage = 495 / (1.29579 - 0.35004 * Math.log10(waistCm + hipCm - neckCm) + 0.22100 * Math.log10(heightCm)) - 450
      }

      // BMI Method
      let bmiPercentage = 0
      if (gender === "male") {
        bmiPercentage = 1.20 * bmi + 0.23 * ageNum - 16.2
      } else {
        bmiPercentage = 1.20 * bmi + 0.23 * ageNum - 5.4
      }

      // Get category
      const getCategory = (percentage: number) => {
        if (gender === "male") {
          if (percentage < 6) return "Essential Fat"
          if (percentage < 14) return "Athletes"
          if (percentage < 18) return "Fitness"
          if (percentage < 25) return "Average"
          return "Obese"
        } else {
          if (percentage < 14) return "Essential Fat"
          if (percentage < 21) return "Athletes"
          if (percentage < 25) return "Fitness"
          if (percentage < 32) return "Average"
          return "Obese"
        }
      }

      const category = getCategory(navyPercentage)
      const fatMass = (navyPercentage / 100) * weightKg
      const leanMass = weightKg - fatMass

      // Ideal body fat (Jackson & Pollock)
      const getIdealBodyFat = (age: number, gender: string) => {
        if (gender === "male") {
          if (age <= 20) return 8.5
          if (age <= 25) return 10.5
          if (age <= 30) return 12.7
          if (age <= 35) return 13.7
          if (age <= 40) return 15.3
          if (age <= 45) return 16.4
          if (age <= 50) return 18.9
          return 20.9
        } else {
          if (age <= 20) return 17.7
          if (age <= 25) return 18.4
          if (age <= 30) return 19.3
          if (age <= 35) return 21.5
          if (age <= 40) return 22.2
          if (age <= 45) return 22.9
          if (age <= 50) return 25.2
          return 26.3
        }
      }

      const idealBodyFat = getIdealBodyFat(ageNum, gender)
      const fatToLose = Math.max(0, (navyPercentage - idealBodyFat) / 100 * weightKg)

      // Generate recommendations
      const recommendations = generateRecommendations(navyPercentage, category, ageNum, gender)
      const healthRisks = generateHealthRisks(navyPercentage, category)
      const improvementPlan = generateImprovementPlan(navyPercentage, idealBodyFat)

      const newResult: BodyFatResult = {
        navyMethod: {
          percentage: Math.round(navyPercentage * 10) / 10,
          category,
          fatMass: Math.round(fatMass * 10) / 10,
          leanMass: Math.round(leanMass * 10) / 10
        },
        bmiMethod: {
          percentage: Math.round(bmiPercentage * 10) / 10,
          bmi: Math.round(bmi * 10) / 10
        },
        idealBodyFat: {
          percentage: idealBodyFat,
          fatToLose: Math.round(fatToLose * 10) / 10
        },
        recommendations,
        healthRisks,
        improvementPlan
      }

      setResult(newResult)
      setHistory(prev => [newResult, ...prev.slice(0, 4)])
    } catch (error) {
      console.error("Calculation error:", error)
    }
  }

  const generateRecommendations = (percentage: number, category: string, age: number, gender: string) => {
    const nutrition: string[] = []
    const exercise: string[] = []
    const lifestyle: string[] = []

    // Nutrition recommendations based on body fat percentage
    if (percentage > 25) {
      nutrition.push("Focus on a caloric deficit of 500-750 calories per day")
      nutrition.push("Increase protein intake to 1.6-2.2g per kg body weight")
      nutrition.push("Reduce refined carbohydrates and added sugars")
      nutrition.push("Include healthy fats from nuts, seeds, and olive oil")
      nutrition.push("Eat 5-6 small meals throughout the day")
    } else if (percentage < 15) {
      nutrition.push("Maintain adequate caloric intake for your activity level")
      nutrition.push("Focus on nutrient-dense foods for optimal health")
      nutrition.push("Ensure sufficient protein for muscle maintenance")
      nutrition.push("Include complex carbohydrates for energy")
      nutrition.push("Stay hydrated with 8-10 glasses of water daily")
    } else {
      nutrition.push("Maintain balanced macronutrient ratios")
      nutrition.push("Focus on whole, unprocessed foods")
      nutrition.push("Include lean proteins, complex carbs, and healthy fats")
      nutrition.push("Eat regular meals to maintain stable blood sugar")
      nutrition.push("Limit processed foods and added sugars")
    }

    // Exercise recommendations
    if (percentage > 25) {
      exercise.push("Combine cardio and strength training for optimal fat loss")
      exercise.push("Aim for 150-300 minutes of moderate cardio per week")
      exercise.push("Include 2-3 strength training sessions weekly")
      exercise.push("Add high-intensity interval training (HIIT) 1-2 times/week")
      exercise.push("Increase daily movement and NEAT activities")
    } else if (percentage < 15) {
      exercise.push("Focus on strength training to maintain muscle mass")
      exercise.push("Include moderate cardio for cardiovascular health")
      exercise.push("Avoid excessive cardio that may lead to muscle loss")
      exercise.push("Prioritize recovery and adequate rest")
      exercise.push("Consider sports-specific training if applicable")
    } else {
      exercise.push("Maintain balanced exercise routine")
      exercise.push("Include both cardio and strength training")
      exercise.push("Aim for 150 minutes of moderate activity per week")
      exercise.push("Add variety to prevent plateaus")
      exercise.push("Listen to your body and adjust intensity as needed")
    }

    // Lifestyle recommendations
    lifestyle.push("Get 7-9 hours of quality sleep nightly")
    lifestyle.push("Manage stress through meditation, yoga, or deep breathing")
    lifestyle.push("Avoid prolonged sitting - take breaks every hour")
    lifestyle.push("Stay hydrated throughout the day")
    lifestyle.push("Consider tracking your progress with measurements and photos")

    return { nutrition, exercise, lifestyle }
  }

  const generateHealthRisks = (percentage: number, category: string) => {
    const risks: string[] = []

    if (percentage > 30) {
      risks.push("Increased risk of cardiovascular disease")
      risks.push("Higher likelihood of type 2 diabetes")
      risks.push("Increased risk of certain cancers")
      risks.push("Higher blood pressure and cholesterol levels")
      risks.push("Increased risk of sleep apnea")
    } else if (percentage < 10) {
      risks.push("Potential hormonal imbalances")
      risks.push("Risk of nutrient deficiencies")
      risks.push("Possible immune system compromise")
      risks.push("Increased risk of bone density loss")
      risks.push("Potential fertility issues")
    } else {
      risks.push("Monitor for gradual changes over time")
      risks.push("Maintain regular health checkups")
      risks.push("Focus on maintaining current healthy range")
    }

    return risks
  }

  const generateImprovementPlan = (currentPercentage: number, idealPercentage: number) => {
    const shortTerm: string[] = []
    const longTerm: string[] = []

    if (currentPercentage > idealPercentage + 5) {
      shortTerm.push("Create a caloric deficit of 500-750 calories daily")
      shortTerm.push("Increase protein intake to preserve muscle mass")
      shortTerm.push("Start with 3-4 cardio sessions per week")
      shortTerm.push("Begin strength training 2-3 times weekly")
      shortTerm.push("Track food intake and measurements weekly")

      longTerm.push("Aim for 1-2 pounds of fat loss per week")
      longTerm.push("Gradually increase exercise intensity and duration")
      longTerm.push("Develop sustainable eating habits")
      longTerm.push("Build consistent exercise routine")
      longTerm.push("Monitor progress and adjust plan as needed")
    } else if (currentPercentage < idealPercentage - 5) {
      shortTerm.push("Ensure adequate caloric intake for your activity level")
      shortTerm.push("Focus on nutrient-dense foods")
      shortTerm.push("Reduce excessive cardio if applicable")
      shortTerm.push("Prioritize strength training for muscle building")
      shortTerm.push("Consult with healthcare professional if needed")

      longTerm.push("Gradually increase caloric intake if underweight")
      longTerm.push("Focus on building lean muscle mass")
      longTerm.push("Develop healthy relationship with food")
      longTerm.push("Monitor health markers regularly")
      longTerm.push("Consider working with nutritionist or trainer")
    } else {
      shortTerm.push("Maintain current healthy habits")
      shortTerm.push("Continue balanced exercise routine")
      shortTerm.push("Monitor for any changes over time")
      shortTerm.push("Focus on overall health and wellness")
      shortTerm.push("Regular health checkups")

      longTerm.push("Maintain long-term healthy lifestyle")
      longTerm.push("Continue monitoring body composition")
      longTerm.push("Adjust plan based on age and life changes")
      longTerm.push("Focus on sustainable health practices")
      longTerm.push("Share knowledge with family and friends")
    }

    return { shortTerm, longTerm }
  }

  const copyResult = () => {
    if (result) {
      const text = `Body Fat Calculator Results:
Navy Method: ${result.navyMethod.percentage}% (${result.navyMethod.category})
BMI Method: ${result.bmiMethod.percentage}%
Body Fat Mass: ${result.navyMethod.fatMass} kg
Lean Body Mass: ${result.navyMethod.leanMass} kg
Ideal Body Fat: ${result.idealBodyFat.percentage}%
Fat to Lose: ${result.idealBodyFat.fatToLose} kg`
      navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setAge("")
    setWeight("")
    setHeight("")
    setNeck("")
    setWaist("")
    setHip("")
    setResult(null)
  }

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 bg-card rounded-xl p-3 sm:p-4 md:p-6 w-full overflow-hidden">
      {/* Main Calculator */}
      <GCard className="bg-card border-border w-full overflow-hidden">
        <GCardHeader className="px-3 sm:px-4 md:px-6 pb-3">
          <GCardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
            <Scale className="h-4 w-4 sm:h-5 sm:w-5 text-foreground flex-shrink-0" />
            <span className="break-words">Advanced Body Fat Calculator</span>
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-4 sm:space-y-6 px-3 sm:px-4 md:px-6">
          {/* Unit System Selection */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full overflow-hidden">
            <div className="flex-1 space-y-2 min-w-0 w-full sm:w-auto">
              <GLabel className="text-heading-accent text-xs sm:text-sm">Unit System</GLabel>
              <GSelect value={unitSystem} onValueChange={(value: "metric" | "imperial") => setUnitSystem(value)}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="metric">Metric (kg, cm)</GSelectItem>
                  <GSelectItem value="imperial">Imperial (lbs, ft/in)</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
            <div className="flex-1 space-y-2 min-w-0 w-full sm:w-auto">
              <GLabel className="text-heading-accent text-xs sm:text-sm">Gender</GLabel>
              <GSelect value={gender} onValueChange={(value: "male" | "female") => setGender(value)}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="male">Male</GSelectItem>
                  <GSelectItem value="female">Female</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          {/* GInput Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
            <div className="space-y-2 w-full min-w-0">
              <GLabel htmlFor="age" className="text-heading-accent text-xs sm:text-sm">Age</GLabel>
              <GInput
                id="age"
                type="number"
                placeholder="25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="15"
                max="80"
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
              />
            </div>
            <div className="space-y-2 w-full min-w-0">
              <GLabel htmlFor="weight" className="text-heading-accent text-xs sm:text-sm">Weight</GLabel>
              <GInput
                id="weight"
                type="number"
                placeholder={unitSystem === "metric" ? "70" : "154"}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {unitSystem === "metric" ? "kg" : "lbs"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
            <div className="space-y-2 w-full min-w-0">
              <GLabel htmlFor="height" className="text-heading-accent text-xs sm:text-sm">Height</GLabel>
              <GInput
                id="height"
                type="number"
                placeholder={unitSystem === "metric" ? "178" : "5.9"}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
              />
              <p className="text-xs text-muted-foreground mt-1 break-words">
                {unitSystem === "metric" ? "cm" : "ft (e.g., 5.9 for 5'9\")"}
              </p>
            </div>
            <div className="space-y-2 w-full min-w-0">
              <GLabel htmlFor="neck" className="text-heading-accent text-xs sm:text-sm">Neck Circumference</GLabel>
              <GInput
                id="neck"
                type="number"
                placeholder={unitSystem === "metric" ? "50" : "19.7"}
                value={neck}
                onChange={(e) => setNeck(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {unitSystem === "metric" ? "cm" : "inches"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
            <div className="space-y-2 w-full min-w-0">
              <GLabel htmlFor="waist" className="text-heading-accent text-xs sm:text-sm">Waist Circumference</GLabel>
              <GInput
                id="waist"
                type="number"
                placeholder={unitSystem === "metric" ? "96" : "37.8"}
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {unitSystem === "metric" ? "cm" : "inches"}
              </p>
            </div>
            {gender === "female" && (
              <div className="space-y-2 w-full min-w-0">
                <GLabel htmlFor="hip" className="text-heading-accent text-xs sm:text-sm">Hip Circumference</GLabel>
                <GInput
                  id="hip"
                  type="number"
                  placeholder={unitSystem === "metric" ? "102" : "40.2"}
                  value={hip}
                  onChange={(e) => setHip(e.target.value)}
                  className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {unitSystem === "metric" ? "cm" : "inches"} (Required for women)
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <GButton onClick={calculateBodyFat} className="flex-1 w-full sm:w-auto text-sm sm:text-base">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Body Fat
            </GButton>
            <GButton variant="outline" onClick={clearAll} className="w-full sm:w-auto text-sm sm:text-base">
              Clear All
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Results Section */}
      {result && (
        <div className="space-y-4 sm:space-y-6">
          {/* Main Results */}
          <GCard className="bg-card border-border">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground">
                <Target className="h-5 w-5 text-foreground" />
                Body Fat Analysis Results
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <GLabel className="text-sm font-medium text-foreground">U.S. Navy Method</GLabel>
                  <div className="text-2xl sm:text-3xl font-bold text-heading-accent">
                    {result.navyMethod.percentage}%
                  </div>
                  <GBadge variant="secondary" className="text-sm bg-border text-foreground">
                    {result.navyMethod.category}
                  </GBadge>
                </div>
                <div className="space-y-2">
                  <GLabel className="text-sm font-medium text-foreground">BMI Method</GLabel>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">
                    {result.bmiMethod.percentage}%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    BMI: {result.bmiMethod.bmi}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Fat Mass</div>
                  <div className="text-lg font-semibold text-foreground">{result.navyMethod.fatMass} kg</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Lean Mass</div>
                  <div className="text-lg font-semibold text-foreground">{result.navyMethod.leanMass} kg</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Ideal Body Fat</div>
                  <div className="text-lg font-semibold text-foreground">{result.idealBodyFat.percentage}%</div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <GButton onClick={copyResult} variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Results
                </GButton>
              </div>
            </GCardContent>
          </GCard>

          {/* Body Fat Categories */}
          <GCard className="bg-card border-border">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground">
                <BarChart3 className="h-5 w-5 text-foreground" />
                Body Fat Categories
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="space-y-3">
                {bodyFatCategories.map((category, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-card border border-border rounded-lg">
                    <div>
                      <span className="font-medium text-foreground">{category.name}</span>
                      <p className="text-sm text-foreground">{category.description}</p>
                      <p className="text-xs text-muted-foreground">{category.range}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                  </div>
                ))}
              </div>
            </GCardContent>
          </GCard>

          {/* Health Risks */}
          {result.healthRisks.length > 0 && (
            <GCard className="bg-card border-border">
              <GCardHeader>
                <GCardTitle className="flex items-center gap-2 text-foreground">
                  <AlertCircle className="h-5 w-5 text-foreground" />
                  Health Considerations
                </GCardTitle>
              </GCardHeader>
              <GCardContent>
                <div className="space-y-2">
                  {result.healthRisks.map((risk, index) => (
                    <div key={index} className="flex items-start gap-2 p-3 bg-card border border-destructive/30 rounded-lg">
                      <AlertCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{risk}</span>
                    </div>
                  ))}
                </div>
              </GCardContent>
            </GCard>
          )}

          {/* Recommendations */}
          <GCard className="bg-card border-border">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground">
                <Heart className="h-5 w-5 text-foreground" />
                Personalized Recommendations
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent">Nutrition</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.nutrition.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent">Exercise</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.exercise.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent">Lifestyle</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.lifestyle.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Improvement Plan */}
          <GCard className="bg-card border-border">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground">
                <Trophy className="h-5 w-5 text-foreground" />
                Improvement Plan
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent">Short Term (1-3 months)</h4>
                  <ul className="space-y-2 text-sm">
                    {result.improvementPlan.shortTerm.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Timer className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent">Long Term (3-12 months)</h4>
                  <ul className="space-y-2 text-sm">
                    {result.improvementPlan.longTerm.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Target className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}

      {/* History Section */}
      {history.length > 0 && (
        <GCard className="bg-card border-border">
          <GCardHeader>
            <GCardTitle className="flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5 text-foreground" />
              Recent Calculations
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-card border border-border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">
                      Navy: {item.navyMethod.percentage}% ({item.navyMethod.category})
                    </div>
                    <div className="text-sm text-muted-foreground">
                      BMI: {item.bmiMethod.percentage}% | Fat Mass: {item.navyMethod.fatMass} kg
                    </div>
                  </div>
                  <GButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
                  >
                    View Details
                  </GButton>
                </div>
              ))}
            </div>
          </GCardContent>
        </GCard>
      )}

      {/* Information Section */}
      <GCard className="bg-card border-border">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2 text-foreground">
            <Info className="h-5 w-5 text-foreground" />
            Body Fat Calculator Features
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-3">
          <div className="p-4 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">
                  Professional Body Fat Analysis
                </p>
                <p className="text-foreground">
                  This calculator uses the U.S. Navy method and BMI method to provide accurate body fat percentage estimates. Results include fat mass, lean mass, ideal body fat, and personalized recommendations for optimal health.
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm text-foreground space-y-2">
            <p>
              <strong className="text-foreground">U.S. Navy Method:</strong> Most accurate for general population using circumference measurements.
            </p>
            <p>
              <strong className="text-foreground">BMI Method:</strong> Alternative calculation using BMI and age for body fat estimation.
            </p>
            <p>
              <strong className="text-foreground">Body Fat Categories:</strong> Essential fat, athletes, fitness, average, and obese ranges.
            </p>
            <p>
              <strong className="text-foreground">Health Analysis:</strong> Personalized recommendations based on your body fat percentage and health goals.
            </p>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
