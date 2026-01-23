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
import { calculateBMR, activityLevels } from "@/lib/calculators"

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



export default function BMRCalculator() {
  const t = useTranslations('bmrCalculator')
  const [age, setAge] = useState("")
  const [gender, setGender] = useState<"male" | "female">("male")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bodyFat, setBodyFat] = useState("")
  const [unitSystem, setUnitSystem] = useState<"metric" | "imperial">("metric")
  const [equation, setEquation] = useState<"mifflin" | "harris" | "katch">("mifflin")
  const [result, setResult] = useState<BMRResult | null>(null)
  const [history, setHistory] = useState<BMRResult[]>([])



  const handleCalculateBMR = () => {
    if (!age || !height || !weight) return

    try {
      const ageNum = parseInt(age)
      const heightNum = parseFloat(height)
      const weightNum = parseFloat(weight)
      const bodyFatNum = bodyFat ? parseFloat(bodyFat) : null

      const weightKg = unitSystem === "metric" ? weightNum : weightNum * 0.453592
      const heightCm = unitSystem === "metric" ? heightNum : heightNum * 2.54

      const { bmr, equationName, accuracy } = calculateBMR({
        weight: weightKg,
        height: heightCm,
        age: ageNum,
        gender,
        equation,
        bodyFat: bodyFatNum || undefined
      })

      if (bmr === 0) return

      const tdee = bmr * 1.55

      const weightLoss = {
        mild: Math.round(tdee - 250),
        moderate: Math.round(tdee - 500),
        aggressive: Math.round(tdee - 750)
      }

      const weightGain = {
        mild: Math.round(tdee + 250),
        moderate: Math.round(tdee + 500),
        aggressive: Math.round(tdee + 750)
      }

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
    nutrition.push(t('componentRecNutrition1'))
    nutrition.push(t('componentRecNutrition2'))
    nutrition.push(t('componentRecNutrition3'))
    nutrition.push(t('componentRecNutrition4'))
    nutrition.push(t('componentRecNutrition5'))

    // Exercise recommendations
    exercise.push(t('componentRecExercise1'))
    exercise.push(t('componentRecExercise2'))
    exercise.push(t('componentRecExercise3'))
    exercise.push(t('componentRecExercise4'))
    exercise.push(t('componentRecExercise5'))

    // Lifestyle recommendations
    lifestyle.push(t('componentRecLifestyle1'))
    lifestyle.push(t('componentRecLifestyle2'))
    lifestyle.push(t('componentRecLifestyle3'))
    lifestyle.push(t('componentRecLifestyle4'))
    lifestyle.push(t('componentRecLifestyle5'))

    return { nutrition, exercise, lifestyle }
  }

  const copyResult = () => {
    if (result) {
      const text = `${t('componentCopyTextBMR')}
${t('componentCopyTextBMRValue')} ${result.bmr} ${t('componentCaloriesPerDay')}
${t('componentCopyTextTDEEValue')} ${result.tdee} ${t('componentCaloriesPerDay')}
${t('componentCopyTextEquation')} ${result.equation}
${t('componentCopyTextAccuracy')} ${result.accuracy}

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
    <div className="space-y-4 sm:space-y-6 md:space-y-8 bg-card rounded-xl p-3 sm:p-4 md:p-6 w-full overflow-hidden">
      {/* Main Calculator */}
      <GCard className="bg-card border-border w-full overflow-hidden">
        <GCardHeader className="px-3 sm:px-4 md:px-6 pb-3">
          <GCardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
            <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-foreground flex-shrink-0" />
            <span className="break-words">{t('componentTitle')}</span>
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-4 sm:space-y-6 px-3 sm:px-4 md:px-6">
          {/* Unit System Selection */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full overflow-hidden">
            <div className="flex-1 space-y-2 min-w-0 w-full sm:w-auto">
              <GLabel className="text-heading-accent text-xs sm:text-sm">{t('componentUnitSystem')}</GLabel>
              <GSelect value={unitSystem} onValueChange={(value: "metric" | "imperial") => setUnitSystem(value)}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="metric">{t('componentMetric')}</GSelectItem>
                  <GSelectItem value="imperial">{t('componentImperial')}</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
            <div className="flex-1 space-y-2 min-w-0 w-full sm:w-auto">
              <GLabel className="text-heading-accent text-xs sm:text-sm">{t('componentCalculationMethod')}</GLabel>
              <GSelect value={equation} onValueChange={(value: "mifflin" | "harris" | "katch") => setEquation(value)}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
            <div className="space-y-2 w-full min-w-0">
              <GLabel htmlFor="age" className="text-heading-accent text-xs sm:text-sm">{t('componentAge')}</GLabel>
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
              <p className="text-xs text-muted-foreground mt-1">{t('componentAgeRange')}</p>
            </div>
            <div className="space-y-2 w-full min-w-0">
              <GLabel className="text-heading-accent text-xs sm:text-sm">{t('componentGender')}</GLabel>
              <GSelect value={gender} onValueChange={(value: "male" | "female") => setGender(value)}>
                <GSelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="male">{t('componentMale')}</GSelectItem>
                  <GSelectItem value="female">{t('componentFemale')}</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
            <div className="space-y-2 w-full min-w-0">
              <GLabel htmlFor="height" className="text-heading-accent text-xs sm:text-sm">{t('componentHeight')}</GLabel>
              <GInput
                id="height"
                type="number"
                placeholder={unitSystem === "metric" ? "180" : "5.9"}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
              />
              <p className="text-xs text-muted-foreground mt-1 break-words">
                {unitSystem === "metric" ? t('componentHeightMetric') : t('componentHeightImperial')}
              </p>
            </div>
            <div className="space-y-2 w-full min-w-0">
              <GLabel htmlFor="weight" className="text-heading-accent text-xs sm:text-sm">{t('componentWeight')}</GLabel>
              <GInput
                id="weight"
                type="number"
                placeholder={unitSystem === "metric" ? "70" : "154"}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
              />
              <p className="text-xs text-muted-foreground mt-1">
                {unitSystem === "metric" ? t('componentWeightMetric') : t('componentWeightImperial')}
              </p>
            </div>
          </div>

          {equation === "katch" && (
            <div className="space-y-2 w-full min-w-0">
              <GLabel htmlFor="bodyFat" className="text-heading-accent text-xs sm:text-sm">{t('componentBodyFat')}</GLabel>
              <GInput
                id="bodyFat"
                type="number"
                placeholder="15"
                value={bodyFat}
                onChange={(e) => setBodyFat(e.target.value)}
                min="3"
                max="50"
                className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
              />
              <p className="text-xs text-muted-foreground mt-1">{t('componentBodyFatRequired')}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <GButton onClick={handleCalculateBMR} className="flex-1 w-full sm:w-auto text-sm sm:text-base">
              <Calculator className="mr-2 h-4 w-4" />
              {t('componentCalculate')}
            </GButton>
            <GButton variant="outline" onClick={clearAll} className="w-full sm:w-auto text-sm sm:text-base">
              {t('componentClear')}
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Main Results */}
          <GCard className="bg-card border-border">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground">
                <Flame className="h-5 w-5 text-foreground" />
                {t('componentResultsTitle')}
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <GLabel className="text-sm font-medium">{t('componentBMR')}</GLabel>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">
                    {result.bmr.toLocaleString()} {t('componentCaloriesPerDay')}
                  </div>
                  <p className="text-sm text-muted-foreground">{t('componentBMRDesc')}</p>
                </div>
                <div className="space-y-2">
                  <GLabel className="text-sm font-medium">{t('componentTDEE')}</GLabel>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">
                    {result.tdee.toLocaleString()} {t('componentCaloriesPerDay')}
                  </div>
                  <p className="text-sm text-muted-foreground">{t('componentTDEEDesc')}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">{t('componentEquationUsed')}</div>
                  <div className="text-lg font-semibold text-heading-accent">{result.equation}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">{t('componentAccuracy')}</div>
                  <div className="text-lg font-semibold text-foreground">{result.accuracy}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">{t('componentActivityLevel')}</div>
                  <div className="text-lg font-semibold text-primary">{result.activityLevel}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <GButton onClick={copyResult} variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  {t('componentCopyResults')}
                </GButton>
              </div>
            </GCardContent>
          </GCard>

          {/* Activity Levels */}
          <GCard className="bg-card border-border">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground">
                <Activity className="h-5 w-5 text-foreground" />
                {t('componentActivityLevelsTitle')}
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="space-y-3">
                {activityLevels.map((level, index) => {
                  // Map activity names to translation keys
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
                    <div key={index} className="flex justify-between items-center p-3 bg-card border border-border rounded-lg">
                      <div>
                        <span className="font-medium">{translatedName}</span>
                        <p className="text-sm text-muted-foreground">{translatedDesc}</p>
                      </div>
                      <GBadge variant="secondary">
                        {Math.round(result.bmr * level.multiplier).toLocaleString()} {t('componentCalPerDay')}
                      </GBadge>
                    </div>
                  )
                })}
              </div>
            </GCardContent>
          </GCard>

          {/* Weight Management */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <GCard className="bg-card border-border">
              <GCardHeader>
                <GCardTitle className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="h-5 w-5 text-foreground" />
                  {t('componentWeightLossTitle')}
                </GCardTitle>
              </GCardHeader>
              <GCardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-card border border-border rounded-lg">
                  <div>
                    <span className="font-medium text-foreground">{t('componentMildDeficit')}</span>
                    <p className="text-sm text-foreground">0.5 lb/week</p>
                  </div>
                  <GBadge variant="destructive">{result.weightLoss.mild.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
                <div className="flex justify-between items-center p-3 bg-card border border-border rounded-lg">
                  <div>
                    <span className="font-medium text-foreground">{t('componentModerateDeficit')}</span>
                    <p className="text-sm text-foreground">1 lb/week</p>
                  </div>
                  <GBadge variant="destructive">{result.weightLoss.moderate.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
                <div className="flex justify-between items-center p-3 bg-card border border-border rounded-lg">
                  <div>
                    <span className="font-medium text-foreground">{t('componentAggressiveDeficit')}</span>
                    <p className="text-sm text-foreground">1.5 lb/week</p>
                  </div>
                  <GBadge variant="destructive">{result.weightLoss.aggressive.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
              </GCardContent>
            </GCard>

            <GCard className="bg-card border-border">
              <GCardHeader>
                <GCardTitle className="flex items-center gap-2 text-foreground">
                  <Target className="h-5 w-5 text-foreground" />
                  {t('componentWeightGainTitle')}
                </GCardTitle>
              </GCardHeader>
              <GCardContent className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-card border border-border rounded-lg">
                  <div>
                    <span className="font-medium text-heading-accent">{t('componentMildSurplus')}</span>
                    <p className="text-sm text-foreground">0.5 lb/week</p>
                  </div>
                  <GBadge variant="default">{result.weightGain.mild.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
                <div className="flex justify-between items-center p-3 bg-card border border-border rounded-lg">
                  <div>
                    <span className="font-medium text-heading-accent">{t('componentModerateSurplus')}</span>
                    <p className="text-sm text-foreground">1 lb/week</p>
                  </div>
                  <GBadge variant="default">{result.weightGain.moderate.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
                <div className="flex justify-between items-center p-3 bg-card border border-border rounded-lg">
                  <div>
                    <span className="font-medium text-heading-accent">{t('componentAggressiveSurplus')}</span>
                    <p className="text-sm text-foreground">1.5 lb/week</p>
                  </div>
                  <GBadge variant="default">{result.weightGain.aggressive.toLocaleString()} {t('componentCalPerDay')}</GBadge>
                </div>
              </GCardContent>
            </GCard>
          </div>

          {/* Recommendations */}
          <GCard className="bg-card border-border">
            <GCardHeader>
              <GCardTitle className="flex items-center gap-2 text-foreground">
                <Heart className="h-5 w-5 text-foreground" />
                {t('componentRecommendationsTitle')}
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-heading-accent">{t('componentNutrition')}</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.nutrition.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">{t('componentExercise')}</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.exercise.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">{t('componentLifestyle')}</h4>
                  <ul className="space-y-2 text-sm">
                    {result.recommendations.lifestyle.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
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
              {t('componentHistoryTitle')}
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-card border border-border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">
                      {t('componentBMR')}: {item.bmr.toLocaleString()} {t('componentCalPerDay')}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.equation} - {item.accuracy}
                    </div>
                  </div>
                  <GButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
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
      <GCard className="bg-card border-border">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2 text-foreground">
            <Info className="h-5 w-5 text-foreground" />
            {t('componentFeaturesTitle')}
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-3">
          <div className="p-4 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">
                  {t('componentFeaturesTitle')}
                </p>
                <p className="text-foreground">
                  {t('componentFeaturesDesc')}
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>{t('componentBMR')}:</strong> {t('componentBMRDesc')}
            </p>
            <p>
              <strong>{t('componentTDEE')}:</strong> {t('componentTDEEDesc')}
            </p>
            <p>
              <strong>{t('componentActivityLevel')}:</strong> {t('componentActivityLevelsDesc')}
            </p>
            <p>
              <strong>{t('componentWeightLossTitle')}/{t('componentWeightGainTitle')}:</strong> {t('componentWeightManagementDesc')}
            </p>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
