"use client"

import { useState, useEffect } from "react"
import { useTranslations } from 'next-intl'
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GBadge } from "@/ui/gbadge"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { calculateBMR, activityLevels } from "@/lib/calculators"

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




interface FoodItem {
  name: string
  calories: number
  serving: string
  category: string
}

export default function CalorieCalculator() {
  const t = useTranslations('calorieCalculator')
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



  const commonFoods: FoodItem[] = [
    { name: t('componentFoodApple'), calories: 59, serving: t('componentFoodServing1'), category: t('componentFoodCategoryFruit') },
    { name: t('componentFoodBanana'), calories: 151, serving: t('componentFoodServing2'), category: t('componentFoodCategoryFruit') },
    { name: t('componentFoodOrange'), calories: 53, serving: t('componentFoodServing1'), category: t('componentFoodCategoryFruit') },
    { name: t('componentFoodBroccoli'), calories: 45, serving: t('componentFoodServing3'), category: t('componentFoodCategoryVegetable') },
    { name: t('componentFoodCarrots'), calories: 50, serving: t('componentFoodServing3'), category: t('componentFoodCategoryVegetable') },
    { name: t('componentFoodChicken'), calories: 136, serving: t('componentFoodServing4'), category: t('componentFoodCategoryProtein') },
    { name: t('componentFoodEgg'), calories: 78, serving: t('componentFoodServing5'), category: t('componentFoodCategoryProtein') },
    { name: t('componentFoodRice'), calories: 206, serving: t('componentFoodServing6'), category: t('componentFoodCategoryGrain') },
    { name: t('componentFoodBread'), calories: 75, serving: t('componentFoodServing7'), category: t('componentFoodCategoryGrain') },
    { name: t('componentFoodMilk'), calories: 102, serving: t('componentFoodServing3'), category: t('componentFoodCategoryDairy') }
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

      const { bmr, equationName, accuracy } = calculateBMR({
        weight: weightKg,
        height: heightCm,
        age: ageNum,
        gender,
        equation,
        bodyFat: bodyFatNum || undefined
      })

      if (bmr === 0) return

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
          t('componentZigzagMonday'),
          t('componentZigzagTuesday'),
          t('componentZigzagWednesday'),
          t('componentZigzagThursday'),
          t('componentZigzagFriday'),
          t('componentZigzagSaturday'),
          t('componentZigzagSunday')
        ]
      }

      // Generate recommendations
      const recommendations = generateRecommendations(bmr, tdee, ageNum, gender)
      const mealPlans = generateMealPlans(tdee)

      // Translate activity level name
      const activityNameMap: Record<string, string> = {
        'Sedentary': t('componentActivitySedentary'),
        'Light Activity': t('componentActivityLight'),
        'Moderate Activity': t('componentActivityModerate'),
        'Very Active': t('componentActivityVery'),
        'Extremely Active': t('componentActivityExtra')
      }
      const translatedActivityLevel = activity ? (activityNameMap[activity.name] || activity.name) : t('componentActivityModerate')

      const newResult: CalorieResult = {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        activityLevel: translatedActivityLevel,
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
    nutrition.push(t('componentRecNutrition1'))
    nutrition.push(t('componentRecNutrition2'))
    nutrition.push(t('componentRecNutrition3'))
    nutrition.push(t('componentRecNutrition4'))
    nutrition.push(t('componentRecNutrition5'))
    nutrition.push(t('componentRecNutrition6'))

    // Exercise recommendations
    exercise.push(t('componentRecExercise1'))
    exercise.push(t('componentRecExercise2'))
    exercise.push(t('componentRecExercise3'))
    exercise.push(t('componentRecExercise4'))
    exercise.push(t('componentRecExercise5'))
    exercise.push(t('componentRecExercise6'))

    // Lifestyle recommendations
    lifestyle.push(t('componentRecLifestyle1'))
    lifestyle.push(t('componentRecLifestyle2'))
    lifestyle.push(t('componentRecLifestyle3'))
    lifestyle.push(t('componentRecLifestyle4'))
    lifestyle.push(t('componentRecLifestyle5'))
    lifestyle.push(t('componentRecLifestyle6'))

    return { nutrition, exercise, lifestyle }
  }

  const generateMealPlans = (tdee: number) => {
    const breakfast = [
      t('componentMeal1'),
      t('componentMeal2'),
      t('componentMeal3'),
      t('componentMeal4')
    ]

    const lunch = [
      t('componentMeal5'),
      t('componentMeal6'),
      t('componentMeal7'),
      t('componentMeal8')
    ]

    const dinner = [
      t('componentMeal9'),
      t('componentMeal10'),
      t('componentMeal11'),
      t('componentMeal12')
    ]

    const snacks = [
      t('componentMeal13'),
      t('componentMeal14'),
      t('componentMeal15'),
      t('componentMeal16')
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
      const text = `${t('componentCopyTextBMR')}
${t('componentCopyTextBMRValue')} ${result.bmr} ${t('componentCaloriesPerDay')}
${t('componentCopyTextTDEEValue')} ${result.tdee} ${t('componentCaloriesPerDay')}
${t('componentCopyTextActivityLevel')} ${result.activityLevel}
${t('componentCopyTextEquation')} ${result.equation}

${t('componentCopyTextWeightLoss')}
${t('componentCopyTextMild')} ${result.weightLoss.mild} ${t('componentCaloriesPerDay')}
${t('componentCopyTextModerate')} ${result.weightLoss.moderate} ${t('componentCaloriesPerDay')}
${t('componentCopyTextAggressive')} ${result.weightLoss.aggressive} ${t('componentCaloriesPerDay')}

${t('componentCopyTextWeightGain')}
${t('componentCopyTextMild')} ${result.weightGain.mild} ${t('componentCaloriesPerDay')}
${t('componentCopyTextModerate')} ${result.weightGain.moderate} ${t('componentCaloriesPerDay')}
${t('componentCopyTextAggressive')} ${result.weightGain.aggressive} ${t('componentCaloriesPerDay')}`
      void navigator.clipboard.writeText(text)
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
      <GCard className="bg-card border-border w-full overflow-hidden">
        <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base md:text-lg break-words">
            <Calculator className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground flex-shrink-0" />
            <span className="break-words">{t('componentTitle')}</span>
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-3 sm:space-y-4 px-2 sm:px-3 md:px-4">
          {/* Unit System Selection */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full overflow-hidden">
            <div className="flex-1 space-y-1.5 min-w-0 w-full sm:w-auto">
              <GLabel className="text-heading-accent text-xs">{t('componentUnitSystem')}</GLabel>
              <GSelect value={unitSystem} onValueChange={(value: "metric" | "imperial") => setUnitSystem(value)}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="metric">{t('componentMetric')}</GSelectItem>
                  <GSelectItem value="imperial">{t('componentImperial')}</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
            <div className="flex-1 space-y-1.5 min-w-0 w-full sm:w-auto">
              <GLabel className="text-heading-accent text-xs">{t('componentCalculationMethod')}</GLabel>
              <GSelect value={equation} onValueChange={(value: "mifflin" | "harris" | "katch") => setEquation(value)}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="mifflin">{t('componentMifflin')}</GSelectItem>
                  <GSelectItem value="harris">{t('componentHarris')}</GSelectItem>
                  <GSelectItem value="katch">{t('componentKatch')}</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          {/* GInput Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full">
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="age" className="text-heading-accent text-xs">{t('componentAge')}</GLabel>
              <GInput
                id="age"
                type="number"
                placeholder="25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="15"
                max="80"
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-xs sm:text-sm h-9"
              />
              <p className="text-xs text-muted-foreground mt-0.5">{t('componentAgeRange')}</p>
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel className="text-heading-accent text-xs">{t('componentGender')}</GLabel>
              <GSelect value={gender} onValueChange={(value: "male" | "female") => setGender(value)}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="male">{t('componentMale')}</GSelectItem>
                  <GSelectItem value="female">{t('componentFemale')}</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full">
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="height" className="text-heading-accent text-xs">{t('componentHeight')}</GLabel>
              <GInput
                id="height"
                type="number"
                placeholder={unitSystem === "metric" ? "180" : "5.9"}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-xs sm:text-sm h-9"
              />
              <p className="text-xs text-muted-foreground mt-0.5 break-words">
                {unitSystem === "metric" ? t('componentHeightMetric') : t('componentHeightImperial')}
              </p>
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="weight" className="text-heading-accent text-xs">{t('componentWeight')}</GLabel>
              <GInput
                id="weight"
                type="number"
                placeholder={unitSystem === "metric" ? "70" : "154"}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-xs sm:text-sm h-9"
              />
              <p className="text-xs text-muted-foreground mt-0.5">
                {unitSystem === "metric" ? t('componentWeightMetric') : t('componentWeightImperial')}
              </p>
            </div>
          </div>

          {equation === "katch" && (
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="bodyFat" className="text-heading-accent text-xs">{t('componentBodyFat')}</GLabel>
              <GInput
                id="bodyFat"
                type="number"
                placeholder="15"
                value={bodyFat}
                onChange={(e) => setBodyFat(e.target.value)}
                min="3"
                max="50"
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-xs sm:text-sm h-9"
              />
              <p className="text-xs text-muted-foreground mt-0.5">{t('componentBodyFatRequired')}</p>
            </div>
          )}

          <div className="space-y-1.5 w-full min-w-0">
            <GLabel className="text-heading-accent text-xs">{t('componentActivityLevel')}</GLabel>
            <GSelect value={activityLevel} onValueChange={setActivityLevel}>
              <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm h-9">
                <GSelectValue />
              </GSelectTrigger>
              <GSelectContent>
                {activityLevels.map((level) => {
                  const activityNameMap: Record<string, string> = {
                    'Sedentary': t('componentActivitySedentary'),
                    'Light Activity': t('componentActivityLight'),
                    'Moderate Activity': t('componentActivityModerate'),
                    'Very Active': t('componentActivityVery'),
                    'Extremely Active': t('componentActivityExtra')
                  }
                  const activityDescMap: Record<string, string> = {
                    'Sedentary': t('componentActivitySedentaryDesc'),
                    'Light Activity': t('componentActivityLightDesc'),
                    'Moderate Activity': t('componentActivityModerateDesc'),
                    'Very Active': t('componentActivityVeryDesc'),
                    'Extremely Active': t('componentActivityExtraDesc')
                  }
                  const translatedName = activityNameMap[level.name] || level.name
                  const translatedDesc = activityDescMap[level.name] || level.description
                  return (
                    <GSelectItem key={level.name} value={level.name.toLowerCase()}>
                      {translatedName}: {translatedDesc}
                    </GSelectItem>
                  )
                })}
              </GSelectContent>
            </GSelect>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full pt-1">
            <GButton onClick={calculateCalories} className="flex-1 w-full sm:w-auto text-xs sm:text-sm h-9">
              <Calculator className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              {t('componentCalculate')}
            </GButton>
            <GButton variant="outline" onClick={clearAll} className="w-full sm:w-auto text-xs sm:text-sm h-9">
              {t('componentClear')}
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Food Energy Converter */}
      <GCard className="bg-card border-border w-full overflow-hidden">
        <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base md:text-lg break-words">
            <ForkKnife className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground flex-shrink-0" />
            <span className="break-words">{t('componentFoodConverterTitle')}</span>
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-3 px-2 sm:px-3 md:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="calories" className="text-heading-accent text-xs">{t('componentCalories')}</GLabel>
              <GInput
                id="calories"
                type="number"
                placeholder="100"
                value={foodConverter.calories}
                onChange={(e) => setFoodConverter({ ...foodConverter, calories: e.target.value })}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-xs sm:text-sm h-9"
              />
            </div>
            <div className="space-y-1.5 w-full min-w-0">
              <GLabel htmlFor="kj" className="text-heading-accent text-xs">{t('componentKilojoules')}</GLabel>
              <GInput
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
            {t('componentConvert')}
          </GButton>
          <div className="text-xs sm:text-sm text-foreground text-center">
            {t('componentConversionRate')}
          </div>
        </GCardContent>
      </GCard>

      {/* Results Section */}
      {result && (
        <div className="space-y-3 sm:space-y-4">
          {/* Main Results */}
          <GCard className="bg-card border-border">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base md:text-lg">
                <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                {t('componentResultsTitle')}
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-3 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5">
                  <GLabel className="text-xs sm:text-sm font-medium text-foreground">{t('componentBMR')}</GLabel>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    {result.bmr.toLocaleString()} {t('componentCaloriesPerDay')}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{t('componentBMRDesc')}</p>
                </div>
                <div className="space-y-1.5">
                  <GLabel className="text-xs sm:text-sm font-medium text-foreground">{t('componentTDEE')}</GLabel>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    {result.tdee.toLocaleString()} {t('componentCaloriesPerDay')}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{t('componentTDEEDesc', { activityLevel: result.activityLevel })}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 border-t border-border">
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-muted-foreground">{t('componentEquationUsed')}</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-heading-accent">{result.equation}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-muted-foreground">{t('componentAccuracy')}</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-foreground">{result.accuracy}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-muted-foreground">{t('componentActivityLevel')}</div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-primary">{result.activityLevel}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <GButton onClick={copyResult} variant="outline" size="sm" className="text-xs sm:text-sm h-8">
                  <Copy className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {t('componentCopyResults')}
                </GButton>
              </div>
            </GCardContent>
          </GCard>

          {/* Weight Management */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <GCard className="bg-card border-border">
              <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
                <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
                  <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                  {t('componentWeightLossTitle')}
                </GCardTitle>
              </GCardHeader>
              <GCardContent className="space-y-2 px-2 sm:px-3 md:px-4">
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-destructive/30 rounded-lg">
                  <div>
                    <span className="font-medium text-foreground text-xs sm:text-sm">{t('componentMildDeficit')}</span>
                    <p className="text-xs text-foreground">0.5 lb/week</p>
                  </div>
                  <GBadge variant="destructive" className="bg-destructive/20 text-foreground text-xs">{result.weightLoss.mild.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-destructive/30 rounded-lg">
                  <div>
                    <span className="font-medium text-foreground text-xs sm:text-sm">{t('componentModerateDeficit')}</span>
                    <p className="text-xs text-foreground">1 lb/week</p>
                  </div>
                  <GBadge variant="destructive" className="bg-destructive/20 text-foreground text-xs">{result.weightLoss.moderate.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-destructive/30 rounded-lg">
                  <div>
                    <span className="font-medium text-foreground text-xs sm:text-sm">{t('componentAggressiveDeficit')}</span>
                    <p className="text-xs text-foreground">1.5 lb/week</p>
                  </div>
                  <GBadge variant="destructive" className="bg-destructive/20 text-foreground text-xs">{result.weightLoss.aggressive.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
              </GCardContent>
            </GCard>

            <GCard className="bg-card border-border">
              <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
                <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
                  <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                  {t('componentWeightGainTitle')}
                </GCardTitle>
              </GCardHeader>
              <GCardContent className="space-y-2 px-2 sm:px-3 md:px-4">
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-secondary-accent/30 rounded-lg">
                  <div>
                    <span className="font-medium text-heading-accent text-xs sm:text-sm">{t('componentMildSurplus')}</span>
                    <p className="text-xs text-foreground">0.5 lb/week</p>
                  </div>
                  <GBadge variant="default" className="bg-secondary-accent/20 text-heading-accent text-xs">{result.weightGain.mild.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-secondary-accent/30 rounded-lg">
                  <div>
                    <span className="font-medium text-heading-accent text-xs sm:text-sm">{t('componentModerateSurplus')}</span>
                    <p className="text-xs text-foreground">1 lb/week</p>
                  </div>
                  <GBadge variant="default" className="bg-secondary-accent/20 text-heading-accent text-xs">{result.weightGain.moderate.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-secondary-accent/30 rounded-lg">
                  <div>
                    <span className="font-medium text-heading-accent text-xs sm:text-sm">{t('componentAggressiveSurplus')}</span>
                    <p className="text-xs text-foreground">1.5 lb/week</p>
                  </div>
                  <GBadge variant="default" className="bg-secondary-accent/20 text-heading-accent text-xs">{result.weightGain.aggressive.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
              </GCardContent>
            </GCard>
          </div>

          {/* Zigzag Calorie Cycling */}
          <GCard className="bg-card border-border">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
                <BarChart3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                {t('componentZigzagTitle')}
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-3 px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="p-2 sm:p-2.5 bg-card border border-accent/30 rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1 text-xs sm:text-sm">{t('componentZigzagHigh')}</h3>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{result.zigzagPlan.high.toLocaleString()} cal</div>
                  <p className="text-xs text-foreground">{t('componentZigzagHighDesc')}</p>
                </div>
                <div className="p-2 sm:p-2.5 bg-card border border-primary/30 rounded-lg">
                  <h3 className="font-semibold text-heading-accent mb-1 text-xs sm:text-sm">{t('componentZigzagLow')}</h3>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">{result.zigzagPlan.low.toLocaleString()} cal</div>
                  <p className="text-xs text-foreground">{t('componentZigzagLowDesc')}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1.5 text-heading-accent text-xs sm:text-sm">{t('componentZigzagSchedule')}</h3>
                <div className="space-y-0.5">
                  {result.zigzagPlan.schedule.map((day, index) => (
                    <div key={index} className="text-xs sm:text-sm text-foreground">{day}</div>
                  ))}
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Meal Plans */}
          <GCard className="bg-card border-border">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
                <ChefHat className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                {t('componentMealPlansTitle')}
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">{t('componentBreakfast')}</h4>
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
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">{t('componentLunch')}</h4>
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
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">{t('componentDinner')}</h4>
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
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">{t('componentSnacks')}</h4>
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
            </GCardContent>
          </GCard>

          {/* Recommendations */}
          <GCard className="bg-card border-border">
            <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
              <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
                <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
                {t('componentRecommendationsTitle')}
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">{t('componentNutrition')}</h4>
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
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">{t('componentExercise')}</h4>
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
                  <h4 className="font-semibold mb-2 text-heading-accent text-xs sm:text-sm">{t('componentLifestyle')}</h4>
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
            </GCardContent>
          </GCard>
        </div>
      )}

      {/* Common Foods Section */}
      <GCard className="bg-card border-border w-full overflow-hidden">
        <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
            <Apple className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
            {t('componentCommonFoodsTitle')}
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="px-2 sm:px-3 md:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {commonFoods.map((food, index) => (
              <div key={index} className="flex justify-between items-center p-2 sm:p-2.5 bg-card border border-border rounded-lg">
                <div>
                  <span className="font-medium text-foreground text-xs sm:text-sm">{food.name}</span>
                  <p className="text-xs text-muted-foreground">{food.serving} - {food.category}</p>
                </div>
                <GBadge variant="secondary" className="bg-border text-foreground text-xs">{food.calories} cal</GBadge>
              </div>
            ))}
          </div>
        </GCardContent>
      </GCard>

      {/* History Section */}
      {history.length > 0 && (
        <GCard className="bg-card border-border w-full overflow-hidden">
          <GCardHeader>
            <GCardTitle className="flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5 text-foreground" />
              {t('componentHistoryTitle')}
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-card border border-border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">
                      {t('componentBMR')}: {item.bmr.toLocaleString()} {t('componentCalPerDay')} | {t('componentTDEE')}: {item.tdee.toLocaleString()} {t('componentCalPerDay')}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.equation} - {item.activityLevel}
                    </div>
                  </div>
                  <GButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
                    className="text-sm"
                  >
                    {t('componentViewDetails')}
                  </GButton>
                </div>
              ))}
            </div>
          </GCardContent>
        </GCard>
      )}

      {/* Information Section */}
      <GCard className="bg-card border-border w-full overflow-hidden">
        <GCardHeader className="px-2 sm:px-3 md:px-4 pb-2">
          <GCardTitle className="flex items-center gap-1.5 sm:gap-2 text-foreground text-sm sm:text-base">
            <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground" />
            {t('componentFeaturesTitle')}
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-2 px-2 sm:px-3 md:px-4">
          <div className="p-2 sm:p-2.5 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-1.5 sm:gap-2">
              <Info className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-xs sm:text-sm">
                <p className="font-medium text-foreground mb-1">
                  {t('componentFeaturesTitle')}
                </p>
                <p className="text-foreground">
                  {t('componentFeaturesDesc')}
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-foreground space-y-1.5">
            <p>
              <strong className="text-foreground">{t('componentBMR')}:</strong> {t('componentBMRDesc')}
            </p>
            <p>
              <strong className="text-foreground">{t('componentTDEE')}:</strong> {t('componentTDEEDesc')}
            </p>
            <p>
              <strong className="text-foreground">{t('componentWeightLossTitle')}/{t('componentWeightGainTitle')}:</strong> {t('componentWeightManagementDesc')}
            </p>
            <p>
              <strong className="text-foreground">{t('componentZigzagTitle')}:</strong> {t('componentZigzagDesc')}
            </p>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
