"use client"

import { useState, useEffect } from "react"
import { GButton } from "@/components/globalcomponents/gbutton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  Flame,
  Utensils,
  Home,
  Car,
  ShoppingBag,
  ChefHat,
  ForkKnife
} from "lucide-react"

interface CalorieResult {
  bmr: number
  tdee: number
  activityLevel: string
  weightLoss: {
    mild: number
    moderate: number
    aggressive: number
  }
  weightGain: {
    mild: number
    moderate: number
    aggressive: number
  }
  equation: string
  accuracy: string
  recommendations: {
    nutrition: string[]
    exercise: string[]
    lifestyle: string[]
  }
  zigzagPlan: {
    high: number
    low: number
    schedule: string[]
  }
  mealPlans: {
    breakfast: string[]
    lunch: string[]
    dinner: string[]
    snacks: string[]
  }
}

interface ActivityLevel {
  name: string
  multiplier: number
  description: string
}

interface FoodItem {
  name: string
  calories: number
  serving: string
  category: string
}

export default function CalorieCalculator() {
  const [age, setAge] = useState("")
  const [gender, setGender] = useState<"male" | "female">("male")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bodyFat, setBodyFat] = useState("")
  const [unitSystem, setUnitSystem] = useState<"metric" | "imperial">("metric")
  const [equation, setEquation] = useState<"mifflin" | "harris" | "katch">("mifflin")
  const [activityLevel, setActivityLevel] = useState("moderate")
  const [result, setResult] = useState<CalorieResult | null>(null)
  const [history, setHistory] = useState<CalorieResult[]>([])
  const [foodConverter, setFoodConverter] = useState({ calories: "", kj: "" })

  const activityLevels: ActivityLevel[] = [
    {
      name: "Sedentary",
      multiplier: 1.2,
      description: "Little or no exercise"
    },
    {
      name: "Light Activity",
      multiplier: 1.375,
      description: "Exercise 1-3 times/week"
    },
    {
      name: "Moderate Activity",
      multiplier: 1.55,
      description: "Exercise 4-5 times/week"
    },
    {
      name: "Very Active",
      multiplier: 1.725,
      description: "Daily exercise or intense exercise 3-4 times/week"
    },
    {
      name: "Extremely Active",
      multiplier: 1.9,
      description: "Intense exercise 6-7 times/week or physical job"
    }
  ]

  const commonFoods: FoodItem[] = [
    { name: "Apple", calories: 59, serving: "1 (4 oz.)", category: "Fruit" },
    { name: "Banana", calories: 151, serving: "1 (6 oz.)", category: "Fruit" },
    { name: "Orange", calories: 53, serving: "1 (4 oz.)", category: "Fruit" },
    { name: "Broccoli", calories: 45, serving: "1 cup", category: "Vegetable" },
    { name: "Carrots", calories: 50, serving: "1 cup", category: "Vegetable" },
    { name: "Chicken Breast", calories: 136, serving: "2 oz.", category: "Protein" },
    { name: "Egg", calories: 78, serving: "1 large", category: "Protein" },
    { name: "Rice", calories: 206, serving: "1 cup cooked", category: "Grain" },
    { name: "Bread", calories: 75, serving: "1 slice", category: "Grain" },
    { name: "Milk", calories: 102, serving: "1 cup", category: "Dairy" }
  ]

  const calculateCalories = () => {
    if (!age || !height || !weight) return

    try {
      const ageNum = parseInt(age)
      const heightNum = parseFloat(height)
      const weightNum = parseFloat(weight)
      const bodyFatNum = bodyFat ? parseFloat(bodyFat) : null

      // Convert units if needed
      const heightCm = unitSystem === "imperial" ? heightNum * 2.54 : heightNum
      const weightKg = unitSystem === "imperial" ? weightNum * 0.453592 : weightNum

      let bmr = 0
      let equationName = ""
      let accuracy = ""

      if (equation === "mifflin") {
        if (gender === "male") {
          bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageNum + 5
        } else {
          bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageNum - 161
        }
        equationName = "Mifflin-St Jeor Equation"
        accuracy = "Most accurate for general population"
      } else if (equation === "harris") {
        if (gender === "male") {
          bmr = 13.397 * weightKg + 4.799 * heightCm - 5.677 * ageNum + 88.362
        } else {
          bmr = 9.247 * weightKg + 3.098 * heightCm - 4.330 * ageNum + 447.593
        }
        equationName = "Revised Harris-Benedict Equation"
        accuracy = "Good for general population"
      } else if (equation === "katch" && bodyFatNum !== null) {
        bmr = 370 + 21.6 * (1 - bodyFatNum / 100) * weightKg
        equationName = "Katch-McArdle Formula"
        accuracy = "Most accurate for lean individuals with known body fat %"
      } else {
        return
      }

      // Get activity multiplier
      const activity = activityLevels.find(a => a.name.toLowerCase().includes(activityLevel.toLowerCase()))
      const multiplier = activity ? activity.multiplier : 1.55
      const tdee = bmr * multiplier

      // Weight management calculations
      const weightLoss = {
        mild: Math.round(tdee - 250), // 0.5 lb/week
        moderate: Math.round(tdee - 500), // 1 lb/week
        aggressive: Math.round(tdee - 750) // 1.5 lb/week
      }

      const weightGain = {
        mild: Math.round(tdee + 250), // 0.5 lb/week
        moderate: Math.round(tdee + 500), // 1 lb/week
        aggressive: Math.round(tdee + 750) // 1.5 lb/week
      }

      // Zigzag calorie cycling
      const zigzagPlan = {
        high: Math.round(tdee + 200),
        low: Math.round(tdee - 200),
        schedule: [
          "Monday: High Calorie Day",
          "Tuesday: Low Calorie Day",
          "Wednesday: High Calorie Day",
          "Thursday: Low Calorie Day",
          "Friday: Low Calorie Day",
          "Saturday: Low Calorie Day",
          "Sunday: Low Calorie Day"
        ]
      }

      // Generate recommendations
      const recommendations = generateRecommendations(bmr, tdee, ageNum, gender)
      const mealPlans = generateMealPlans(tdee)

      const newResult: CalorieResult = {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        activityLevel: activity?.name || "Moderate Activity",
        weightLoss,
        weightGain,
        equation: equationName,
        accuracy,
        recommendations,
        zigzagPlan,
        mealPlans
      }

      setResult(newResult)
      setHistory(prev => [newResult, ...prev.slice(0, 4)])
    } catch (error) {
      console.error("Calculation error:", error)
    }
  }

  const generateRecommendations = (bmr: number, tdee: number, age: number, gender: string) => {
    const nutrition: string[] = []
    const exercise: string[] = []
    const lifestyle: string[] = []

    // Nutrition recommendations
    nutrition.push("Eat 5-6 small meals throughout the day to maintain metabolism")
    nutrition.push("Include lean proteins (chicken, fish, beans) in every meal")
    nutrition.push("Consume complex carbohydrates (oats, quinoa, sweet potatoes)")
    nutrition.push("Stay hydrated with 8-10 glasses of water daily")
    nutrition.push("Include healthy fats (avocado, nuts, olive oil)")
    nutrition.push("Focus on whole, unprocessed foods for better satiety")

    // Exercise recommendations
    exercise.push("Combine cardio and strength training for optimal results")
    exercise.push("Aim for 150 minutes of moderate cardio per week")
    exercise.push("Include 2-3 strength training sessions weekly")
    exercise.push("Add high-intensity interval training (HIIT) 1-2 times/week")
    exercise.push("Incorporate daily movement and walking")
    exercise.push("Track your workouts to monitor calorie burn")

    // Lifestyle recommendations
    lifestyle.push("Get 7-9 hours of quality sleep nightly")
    lifestyle.push("Manage stress through meditation or yoga")
    lifestyle.push("Avoid prolonged sitting - take breaks every hour")
    lifestyle.push("Consider meal prep for consistent nutrition")
    lifestyle.push("Track your progress with a food and exercise journal")
    lifestyle.push("Plan your meals and snacks in advance")

    return { nutrition, exercise, lifestyle }
  }

  const generateMealPlans = (tdee: number) => {
    const breakfast = [
      "Oatmeal with berries and nuts",
      "Greek yogurt with granola",
      "Whole grain toast with avocado",
      "Smoothie with protein powder"
    ]

    const lunch = [
      "Grilled chicken salad",
      "Quinoa bowl with vegetables",
      "Turkey and vegetable wrap",
      "Lentil soup with whole grain bread"
    ]

    const dinner = [
      "Baked salmon with sweet potato",
      "Stir-fried vegetables with tofu",
      "Grilled chicken with brown rice",
      "Vegetable curry with quinoa"
    ]

    const snacks = [
      "Apple with almond butter",
      "Greek yogurt with berries",
      "Mixed nuts and dried fruit",
      "Vegetable sticks with hummus"
    ]

    return { breakfast, lunch, dinner, snacks }
  }

  const convertCalories = () => {
    if (foodConverter.calories) {
      const calories = parseFloat(foodConverter.calories)
      const kj = (calories * 4.1868).toFixed(2)
      setFoodConverter({ calories: foodConverter.calories, kj })
    } else if (foodConverter.kj) {
      const kj = parseFloat(foodConverter.kj)
      const calories = (kj / 4.1868).toFixed(2)
      setFoodConverter({ calories, kj: foodConverter.kj })
    }
  }

  const copyResult = () => {
    if (result) {
      const text = `Calorie Calculator Results:
BMR: ${result.bmr} calories/day
TDEE: ${result.tdee} calories/day
Activity Level: ${result.activityLevel}
Equation: ${result.equation}

Weight Loss Goals:
Mild (0.5 lb/week): ${result.weightLoss.mild} calories/day
Moderate (1 lb/week): ${result.weightLoss.moderate} calories/day
Aggressive (1.5 lb/week): ${result.weightLoss.aggressive} calories/day

Weight Gain Goals:
Mild (0.5 lb/week): ${result.weightGain.mild} calories/day
Moderate (1 lb/week): ${result.weightGain.moderate} calories/day
Aggressive (1.5 lb/week): ${result.weightGain.aggressive} calories/day`
      navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setAge("")
    setHeight("")
    setWeight("")
    setBodyFat("")
    setResult(null)
  }

  return (
    <div className="space-y-3 sm:space-y-4 md:space-y-5 bg-card rounded-lg p-2 sm:p-3 md:p-4 w-full overflow-hidden">
      {/* Main Calculator */}
      <Card className="bg-card border-border w-full overflow-hidden">
        <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base md:text-lg break-words">
            <Calculator className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground flex-shrink-0" />
            <span className="break-words">Advanced Calorie Calculator</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
          {/* Unit System Selection */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full overflow-hidden">
            <div className="flex-1 space-y-1.5 min-w-0 w-full sm:w-auto">
              <Label className="text-heading-accent text-xs">Unit System</Label>
              <Select value={unitSystem} onValueChange={(value: "metric" | "imperial") => setUnitSystem(value)}>
                <SelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                  <SelectItem value="imperial">Imperial (lbs, ft/in)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1 space-y-1.5 min-w-0 w-full sm:w-auto">
              <Label className="text-heading-accent text-xs">Calculation Method</Label>
              <Select value={equation} onValueChange={(value: "mifflin" | "harris" | "katch") => setEquation(value)}>
                <SelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mifflin">Mifflin-St Jeor (Most Accurate)</SelectItem>
                  <SelectItem value="harris">Harris-Benedict (Classic)</SelectItem>
                  <SelectItem value="katch">Katch-McArdle (Requires Body Fat %)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full">
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="age" className="text-heading-accent text-xs">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="15"
                max="80"
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-xs sm:text-sm h-9"
              />
              <p className="text-xs text-muted-foreground mt-0.5">ages 15 - 80</p>
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <Label className="text-heading-accent text-xs">Gender</Label>
              <Select value={gender} onValueChange={(value: "male" | "female") => setGender(value)}>
                <SelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full">
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="height" className="text-heading-accent text-xs">Height</Label>
              <Input
                id="height"
                type="number"
                placeholder={unitSystem === "metric" ? "180" : "5.9"}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-xs sm:text-sm h-9"
              />
              <p className="text-xs text-muted-foreground mt-0.5 break-words">
                {unitSystem === "metric" ? "cm" : "ft (e.g., 5.9 for 5'9\")"}
              </p>
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="weight" className="text-heading-accent text-xs">Weight</Label>
              <Input
                id="weight"
                type="number"
                placeholder={unitSystem === "metric" ? "70" : "154"}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-xs sm:text-sm h-9"
              />
              <p className="text-xs text-muted-foreground mt-0.5">
                {unitSystem === "metric" ? "kg" : "lbs"}
              </p>
            </div>
          </div>

          {equation === "katch" && (
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="bodyFat" className="text-heading-accent text-xs">Body Fat Percentage</Label>
              <Input
                id="bodyFat"
                type="number"
                placeholder="15"
                value={bodyFat}
                onChange={(e) => setBodyFat(e.target.value)}
                min="3"
                max="50"
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-xs sm:text-sm h-9"
              />
              <p className="text-xs text-muted-foreground mt-0.5">Required for Katch-McArdle formula</p>
            </div>
          )}

          <div className="space-y-1.5 w-full min-w-0">
            <Label className="text-heading-accent text-xs">Activity Level</Label>
            <Select value={activityLevel} onValueChange={setActivityLevel}>
              <SelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {activityLevels.map((level) => (
                  <SelectItem key={level.name} value={level.name.toLowerCase()}>
                    {level.name}: {level.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full pt-1">
            <GButton onClick={calculateCalories} className="flex-1 w-full sm:w-auto text-xs sm:text-sm h-9">
              <Calculator className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Calculate Calories
            </GButton>
            <GButton variant="outline" onClick={clearAll} className="w-full sm:w-auto text-xs sm:text-sm h-9">
              Clear All
            </GButton>
          </div>
        </CardContent>
      </Card>

      {/* Food Energy Converter */}
      <Card className="bg-card border-border w-full overflow-hidden">
        <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base md:text-lg break-words">
            <ForkKnife className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground flex-shrink-0" />
            <span className="break-words">Food Energy Converter</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 px-2 sm:px-3 md:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="calories" className="text-heading-accent text-xs">Calories (kcal)</Label>
              <Input
                id="calories"
                type="number"
                placeholder="100"
                value={foodConverter.calories}
                onChange={(e) => setFoodConverter({ ...foodConverter, calories: e.target.value })}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-xs sm:text-sm h-9"
              />
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <Label htmlFor="kj" className="text-heading-accent text-xs">Kilojoules (kJ)</Label>
              <Input
                id="kj"
                type="number"
                placeholder="418.68"
                value={foodConverter.kj}
                onChange={(e) => setFoodConverter({ ...foodConverter, kj: e.target.value })}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-xs sm:text-sm h-9"
              />
            </div>
          </div>
          <GButton onClick={convertCalories} className="w-full text-xs sm:text-sm h-9">
            <Calculator className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Convert Energy Units
          </GButton>
          <div className="text-xs sm:text-sm text-foreground text-center">
            1 Calorie = 4.1868 Kilojoules
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <div className="space-y-3 sm:space-y-4">
          {/* Main Results */}
          <Card className="bg-card border-border">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base md:text-lg">
                <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                Calorie Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs sm:text-sm font-medium text-foreground">Basal Metabolic Rate (BMR)</Label>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    {result.bmr.toLocaleString()} calories/day
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Energy needed at rest</p>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs sm:text-sm font-medium text-foreground">Total Daily Energy Expenditure (TDEE)</Label>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    {result.tdee.toLocaleString()} calories/day
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">With {result.activityLevel}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 border-t border-border">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-muted-foreground">Equation Used</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-heading-accent">{result.equation}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-muted-foreground">Accuracy</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-foreground">{result.accuracy}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-muted-foreground">Activity Level</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-indigo-400">{result.activityLevel}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <GButton onClick={copyResult} variant="outline" size="sm" className="text-xs sm:text-sm h-8">
                  <Copy className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Copy Results
                </GButton>
              </div>
            </CardContent>
          </Card>

          {/* Weight Management */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Card className="bg-card border-border">
              <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
                <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
                  <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                  Weight Loss Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 px-2 sm:px-3 md:px-4">
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-red-800 rounded-lg">
                  <div>
                    <span className="font-medium text-foreground text-xs sm:text-sm">Mild Deficit</span>
                    <p className="text-xs text-foreground">0.5 lb/week</p>
                  </div>
                  <Badge variant="destructive" className="bg-red-900 text-foreground text-xs">{result.weightLoss.mild.toLocaleString()} cal/day</Badge>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-red-800 rounded-lg">
                  <div>
                    <span className="font-medium text-foreground text-xs sm:text-sm">Moderate Deficit</span>
                    <p className="text-xs text-foreground">1 lb/week</p>
                  </div>
                  <Badge variant="destructive" className="bg-red-900 text-foreground text-xs">{result.weightLoss.moderate.toLocaleString()} cal/day</Badge>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-red-800 rounded-lg">
                  <div>
                    <span className="font-medium text-foreground text-xs sm:text-sm">Aggressive Deficit</span>
                    <p className="text-xs text-foreground">1.5 lb/week</p>
                  </div>
                  <Badge variant="destructive" className="bg-red-900 text-foreground text-xs">{result.weightLoss.aggressive.toLocaleString()} cal/day</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
                <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
                  <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                  Weight Gain Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 px-2 sm:px-3 md:px-4">
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-green-800 rounded-lg">
                  <div>
                    <span className="font-medium text-heading-accent text-xs sm:text-sm">Mild Surplus</span>
                    <p className="text-xs text-foreground">0.5 lb/week</p>
                  </div>
                  <Badge variant="default" className="bg-green-900 text-heading-accent text-xs">{result.weightGain.mild.toLocaleString()} cal/day</Badge>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-green-800 rounded-lg">
                  <div>
                    <span className="font-medium text-heading-accent text-xs sm:text-sm">Moderate Surplus</span>
                    <p className="text-xs text-foreground">1 lb/week</p>
                  </div>
                  <Badge variant="default" className="bg-green-900 text-heading-accent text-xs">{result.weightGain.moderate.toLocaleString()} cal/day</Badge>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-green-800 rounded-lg">
                  <div>
                    <span className="font-medium text-heading-accent text-xs sm:text-sm">Aggressive Surplus</span>
                    <p className="text-xs text-foreground">1.5 lb/week</p>
                  </div>
                  <Badge variant="default" className="bg-green-900 text-heading-accent text-xs">{result.weightGain.aggressive.toLocaleString()} cal/day</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Zigzag Calorie Cycling */}
          <Card className="bg-card border-border">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
                <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                Zigzag Calorie Cycling Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="p-2 sm:p-2.5 bg-card border border-purple-800 rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1 text-xs sm:text-sm">High Calorie Days</h3>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{result.zigzagPlan.high.toLocaleString()} cal</div>
                  <p className="text-xs text-foreground">2 days per week</p>
                </div>
                <div className="p-2 sm:p-2.5 bg-card border border-blue-800 rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1 text-xs sm:text-sm">Low Calorie Days</h3>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{result.zigzagPlan.low.toLocaleString()} cal</div>
                  <p className="text-xs text-foreground">5 days per week</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1.5 text-heading-accent text-xs sm:text-sm">Weekly Schedule</h3>
                <div className="space-y-0.5">
                  {result.zigzagPlan.schedule.map((day, index) => (
                    <div key={index} className="text-xs sm:text-sm text-foreground">{day}</div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Meal Plans */}
          <Card className="bg-card border-border">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
                <ChefHat className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                Sample Meal Plans
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Breakfast Options</h4>
                  <ul className="space-y-1 text-xs">
                    {result.mealPlans.breakfast.map((meal, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{meal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Lunch Options</h4>
                  <ul className="space-y-1 text-xs">
                    {result.mealPlans.lunch.map((meal, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{meal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Dinner Options</h4>
                  <ul className="space-y-1 text-xs">
                    {result.mealPlans.dinner.map((meal, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{meal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Snack Options</h4>
                  <ul className="space-y-1 text-xs">
                    {result.mealPlans.snacks.map((snack, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{snack}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="bg-card border-border">
            <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
                <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                Personalized Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Nutrition</h4>
                  <ul className="space-y-1 text-xs">
                    {result.recommendations.nutrition.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Exercise</h4>
                  <ul className="space-y-1 text-xs">
                    {result.recommendations.exercise.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">Lifestyle</h4>
                  <ul className="space-y-1 text-xs">
                    {result.recommendations.lifestyle.map((rec, index) => (
                      <li key={index} className="flex items-start gap-1.5">
                        <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Common Foods Section */}
      <Card className="bg-card border-border w-full overflow-hidden">
        <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
            <Apple className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
            Common Foods & Calories
          </CardTitle>
        </CardHeader>
        <CardContent className="px-2 sm:px-3 md:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {commonFoods.map((food, index) => (
              <div key={index} className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-border rounded-lg">
                <div>
                  <span className="font-medium text-foreground text-xs sm:text-sm">{food.name}</span>
                  <p className="text-xs text-muted-foreground">{food.serving} - {food.category}</p>
                </div>
                <Badge variant="secondary" className="bg-border text-foreground text-xs">{food.calories} cal</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* History Section */}
      {history.length > 0 && (
        <Card className="bg-card border-border w-full overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5 text-foreground" />
              Recent Calculations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-card border border-border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">
                      BMR: {item.bmr.toLocaleString()} cal/day | TDEE: {item.tdee.toLocaleString()} cal/day
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.equation} - {item.activityLevel}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
                    className="text-sm"
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Information Section */}
      <Card className="bg-card border-border w-full overflow-hidden">
        <CardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
            <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
            Calorie Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 px-2 sm:px-3 md:px-4">
          <div className="p-2 sm:p-2.5 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-1.5 sm:gap-2">
              <Info className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-xs sm:text-sm">
                <p className="font-medium text-foreground mb-1">
                  Professional Calorie Analysis
                </p>
                <p className="text-foreground">
                  This calculator provides accurate calorie calculations using three different equations: Mifflin-St Jeor (most accurate), Harris-Benedict (classic), and Katch-McArdle (for lean individuals with known body fat percentage).
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-foreground space-y-1.5">
            <p>
              <strong className="text-foreground">BMR:</strong> Basal Metabolic Rate - calories burned at rest for basic body functions.
            </p>
            <p>
              <strong className="text-foreground">TDEE:</strong> Total Daily Energy Expenditure - total calories needed including activity.
            </p>
            <p>
              <strong className="text-foreground">Weight Management:</strong> Calorie targets for safe weight loss or gain goals.
            </p>
            <p>
              <strong className="text-foreground">Zigzag Cycling:</strong> Alternating high and low calorie days to prevent metabolic adaptation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
