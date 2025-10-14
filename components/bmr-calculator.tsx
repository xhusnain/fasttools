"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
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
  Flame,
  Scale,
  Ruler,
  Calendar
} from "lucide-react"

interface BMRResult {
  bmr: number
  tdee: number
  activityLevel: string
  caloriesPerDay: number
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
}

interface ActivityLevel {
  name: string
  multiplier: number
  description: string
}

export default function BMRCalculator() {
  const [age, setAge] = useState("")
  const [gender, setGender] = useState<"male" | "female">("male")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bodyFat, setBodyFat] = useState("")
  const [unitSystem, setUnitSystem] = useState<"metric" | "imperial">("metric")
  const [equation, setEquation] = useState<"mifflin" | "harris" | "katch">("mifflin")
  const [result, setResult] = useState<BMRResult | null>(null)
  const [history, setHistory] = useState<BMRResult[]>([])

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

  const calculateBMR = () => {
    if (!age || !height || !weight) return

    try {
      const ageNum = parseInt(age)
      const heightNum = parseFloat(height)
      const weightNum = parseFloat(weight)
      const bodyFatNum = bodyFat ? parseFloat(bodyFat) : null

      let bmr = 0
      let equationName = ""
      let accuracy = ""

      // Convert units if needed
      const heightCm = unitSystem === "imperial" ? heightNum * 2.54 : heightNum
      const weightKg = unitSystem === "imperial" ? weightNum * 0.453592 : weightNum

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

      // Calculate TDEE for different activity levels
      const tdee = bmr * 1.55 // Moderate activity as default
      
      // Weight management calculations
      const weightLoss = {
        mild: Math.round(bmr * 1.2 - 250), // 0.5 lb/week
        moderate: Math.round(bmr * 1.2 - 500), // 1 lb/week
        aggressive: Math.round(bmr * 1.2 - 750) // 1.5 lb/week
      }

      const weightGain = {
        mild: Math.round(bmr * 1.2 + 250), // 0.5 lb/week
        moderate: Math.round(bmr * 1.2 + 500), // 1 lb/week
        aggressive: Math.round(bmr * 1.2 + 750) // 1.5 lb/week
      }

      // Generate recommendations
      const recommendations = generateRecommendations(bmr, ageNum, gender)

      const newResult: BMRResult = {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        activityLevel: "Moderate Activity",
        caloriesPerDay: Math.round(tdee),
        weightLoss,
        weightGain,
        equation: equationName,
        accuracy,
        recommendations
      }

      setResult(newResult)
      setHistory(prev => [newResult, ...prev.slice(0, 4)])
    } catch (error) {
      console.error("Calculation error:", error)
    }
  }

  const generateRecommendations = (bmr: number, age: number, gender: string) => {
    const nutrition: string[] = []
    const exercise: string[] = []
    const lifestyle: string[] = []

    // Nutrition recommendations
    nutrition.push("Eat 5-6 small meals throughout the day to maintain metabolism")
    nutrition.push("Include lean proteins (chicken, fish, beans) in every meal")
    nutrition.push("Consume complex carbohydrates (oats, quinoa, sweet potatoes)")
    nutrition.push("Stay hydrated with 8-10 glasses of water daily")
    nutrition.push("Include healthy fats (avocado, nuts, olive oil)")

    // Exercise recommendations
    exercise.push("Combine cardio and strength training for optimal results")
    exercise.push("Aim for 150 minutes of moderate cardio per week")
    exercise.push("Include 2-3 strength training sessions weekly")
    exercise.push("Add high-intensity interval training (HIIT) 1-2 times/week")
    exercise.push("Incorporate daily movement and walking")

    // Lifestyle recommendations
    lifestyle.push("Get 7-9 hours of quality sleep nightly")
    lifestyle.push("Manage stress through meditation or yoga")
    lifestyle.push("Avoid prolonged sitting - take breaks every hour")
    lifestyle.push("Consider meal prep for consistent nutrition")
    lifestyle.push("Track your progress with a food and exercise journal")

    return { nutrition, exercise, lifestyle }
  }

  const copyResult = () => {
    if (result) {
      const text = `BMR Calculator Results:
BMR: ${result.bmr} calories/day
TDEE: ${result.tdee} calories/day
Equation: ${result.equation}
Accuracy: ${result.accuracy}

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
    <div className="space-y-6">
      {/* Main Calculator */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Advanced BMR Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Unit System Selection */}
          <div className="flex gap-4">
            <div className="flex-1">
              <Label>Unit System</Label>
              <Select value={unitSystem} onValueChange={(value: "metric" | "imperial") => setUnitSystem(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                  <SelectItem value="imperial">Imperial (lbs, ft/in)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label>Calculation Method</Label>
              <Select value={equation} onValueChange={(value: "mifflin" | "harris" | "katch") => setEquation(value)}>
                <SelectTrigger>
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
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="15"
                max="80"
              />
              <p className="text-xs text-muted-foreground mt-1">ages 15 - 80</p>
            </div>
            <div>
              <Label>Gender</Label>
              <Select value={gender} onValueChange={(value: "male" | "female") => setGender(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                type="number"
                placeholder={unitSystem === "metric" ? "180" : "5.9"}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                {unitSystem === "metric" ? "cm" : "ft (e.g., 5.9 for 5'9\")"}
              </p>
            </div>
            <div>
              <Label htmlFor="weight">Weight</Label>
              <Input
                id="weight"
                type="number"
                placeholder={unitSystem === "metric" ? "70" : "154"}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                {unitSystem === "metric" ? "kg" : "lbs"}
              </p>
            </div>
          </div>

          {equation === "katch" && (
            <div>
              <Label htmlFor="bodyFat">Body Fat Percentage</Label>
              <Input
                id="bodyFat"
                type="number"
                placeholder="15"
                value={bodyFat}
                onChange={(e) => setBodyFat(e.target.value)}
                min="3"
                max="50"
              />
              <p className="text-xs text-muted-foreground mt-1">Required for Katch-McArdle formula</p>
            </div>
          )}

          <div className="flex gap-2">
            <Button onClick={calculateBMR} className="flex-1">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate BMR
            </Button>
            <Button variant="outline" onClick={clearAll}>
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Main Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-500" />
                BMR Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Basal Metabolic Rate</Label>
                  <div className="text-3xl font-bold text-orange-600">
                    {result.bmr.toLocaleString()} calories/day
                  </div>
                  <p className="text-sm text-muted-foreground">Energy needed at rest</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Total Daily Energy Expenditure</Label>
                  <div className="text-3xl font-bold text-blue-600">
                    {result.tdee.toLocaleString()} calories/day
                  </div>
                  <p className="text-sm text-muted-foreground">With moderate activity</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Equation Used</div>
                  <div className="text-lg font-semibold text-green-600">{result.equation}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Accuracy</div>
                  <div className="text-lg font-semibold text-purple-600">{result.accuracy}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Activity Level</div>
                  <div className="text-lg font-semibold text-indigo-600">{result.activityLevel}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={copyResult} variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Activity Levels */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-500" />
                Daily Calorie Needs by Activity Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {activityLevels.map((level, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <span className="font-medium">{level.name}</span>
                      <p className="text-sm text-muted-foreground">{level.description}</p>
                    </div>
                    <Badge variant="secondary">
                      {Math.round(result.bmr * level.multiplier).toLocaleString()} cal/day
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weight Management */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-red-500" />
                  Weight Loss Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                  <div>
                    <span className="font-medium text-red-800 dark:text-red-200">Mild Deficit</span>
                    <p className="text-sm text-red-600 dark:text-red-400">0.5 lb/week</p>
                  </div>
                  <Badge variant="destructive">{result.weightLoss.mild.toLocaleString()} cal/day</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div>
                    <span className="font-medium text-orange-800 dark:text-orange-200">Moderate Deficit</span>
                    <p className="text-sm text-orange-600 dark:text-orange-400">1 lb/week</p>
                  </div>
                  <Badge variant="destructive">{result.weightLoss.moderate.toLocaleString()} cal/day</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                  <div>
                    <span className="font-medium text-red-800 dark:text-red-200">Aggressive Deficit</span>
                    <p className="text-sm text-red-600 dark:text-red-400">1.5 lb/week</p>
                  </div>
                  <Badge variant="destructive">{result.weightLoss.aggressive.toLocaleString()} cal/day</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-500" />
                  Weight Gain Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <div>
                    <span className="font-medium text-green-800 dark:text-green-200">Mild Surplus</span>
                    <p className="text-sm text-green-600 dark:text-green-400">0.5 lb/week</p>
                  </div>
                  <Badge variant="default">{result.weightGain.mild.toLocaleString()} cal/day</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div>
                    <span className="font-medium text-blue-800 dark:text-blue-200">Moderate Surplus</span>
                    <p className="text-sm text-blue-600 dark:text-blue-400">1 lb/week</p>
                  </div>
                  <Badge variant="default">{result.weightGain.moderate.toLocaleString()} cal/day</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div>
                    <span className="font-medium text-purple-800 dark:text-purple-200">Aggressive Surplus</span>
                    <p className="text-sm text-purple-600 dark:text-purple-400">1.5 lb/week</p>
                  </div>
                  <Badge variant="default">{result.weightGain.aggressive.toLocaleString()} cal/day</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-500" />
                Personalized Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Nutrition</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.nutrition.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Exercise</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.exercise.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-600">Lifestyle</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.lifestyle.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* History Section */}
      {history.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gray-500" />
              Recent Calculations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">
                      BMR: {item.bmr.toLocaleString()} cal/day
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.equation} - {item.accuracy}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            BMR Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Professional BMR Analysis
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  This calculator provides accurate BMR calculations using three different equations: Mifflin-St Jeor (most accurate), Harris-Benedict (classic), and Katch-McArdle (for lean individuals with known body fat percentage).
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>BMR:</strong> Basal Metabolic Rate - calories burned at rest for basic body functions.
            </p>
            <p>
              <strong>TDEE:</strong> Total Daily Energy Expenditure - total calories needed including activity.
            </p>
            <p>
              <strong>Activity Levels:</strong> From sedentary to extremely active with corresponding calorie multipliers.
            </p>
            <p>
              <strong>Weight Management:</strong> Calorie targets for safe weight loss or gain goals.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
