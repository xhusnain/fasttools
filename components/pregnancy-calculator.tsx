"use client"

import { useState, useEffect } from "react"
import { GButton } from "@/components/globalcomponents/gbutton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Calculator, Heart, Baby, Stethoscope, Clock, AlertCircle, CheckCircle, Info, TrendingUp, Target } from "lucide-react"

interface PregnancyResult {
  dueDate: Date
  conceptionDate: Date
  gestationalAge: number
  weeksPregnant: number
  daysPregnant: number
  trimester: string
  pregnancyProgress: number
  nextMilestone: string
  weightGainRecommendation: {
    min: number
    max: number
    category: string
  }
  symptoms: string[]
  recommendations: {
    nutrition: string[]
    exercise: string[]
    health: string[]
    lifestyle: string[]
  }
  upcomingAppointments: string[]
  fetalDevelopment: string[]
}

export default function PregnancyCalculator() {
  const [calculationMethod, setCalculationMethod] = useState<"dueDate" | "lmp" | "ultrasound" | "conception" | "ivf">("dueDate")
  const [dueDate, setDueDate] = useState("")
  const [lmpDate, setLmpDate] = useState("")
  const [ultrasoundDate, setUltrasoundDate] = useState("")
  const [gestationalAge, setGestationalAge] = useState("")
  const [conceptionDate, setConceptionDate] = useState("")
  const [ivfDate, setIvfDate] = useState("")
  const [currentWeight, setCurrentWeight] = useState("")
  const [prePregnancyWeight, setPrePregnancyWeight] = useState("")
  const [height, setHeight] = useState("")
  const [result, setResult] = useState<PregnancyResult | null>(null)
  const [history, setHistory] = useState<PregnancyResult[]>([])

  const calculatePregnancy = () => {
    let calculatedDueDate: Date
    let calculatedConceptionDate: Date
    let gestationalAgeWeeks: number

    console.log("Calculating pregnancy with method:", calculationMethod)
    console.log("Due date:", dueDate)
    console.log("Pre-pregnancy weight:", prePregnancyWeight)
    console.log("Height:", height)

    try {
      if (calculationMethod === "dueDate" && dueDate) {
        calculatedDueDate = new Date(dueDate)
        calculatedConceptionDate = new Date(calculatedDueDate.getTime() - (266 * 24 * 60 * 60 * 1000))
        gestationalAgeWeeks = Math.floor((new Date().getTime() - calculatedConceptionDate.getTime()) / (7 * 24 * 60 * 60 * 1000))
      } else if (calculationMethod === "lmp" && lmpDate) {
        const lmp = new Date(lmpDate)
        calculatedConceptionDate = new Date(lmp.getTime() + (14 * 24 * 60 * 60 * 1000))
        calculatedDueDate = new Date(lmp.getTime() + (280 * 24 * 60 * 60 * 1000))
        gestationalAgeWeeks = Math.floor((new Date().getTime() - lmp.getTime()) / (7 * 24 * 60 * 60 * 1000))
      } else if (calculationMethod === "ultrasound" && ultrasoundDate && gestationalAge) {
        const ultrasound = new Date(ultrasoundDate)
        const ageWeeks = parseInt(gestationalAge)
        calculatedConceptionDate = new Date(ultrasound.getTime() - (ageWeeks * 7 * 24 * 60 * 60 * 1000))
        calculatedDueDate = new Date(calculatedConceptionDate.getTime() + (266 * 24 * 60 * 60 * 1000))
        gestationalAgeWeeks = ageWeeks + Math.floor((new Date().getTime() - ultrasound.getTime()) / (7 * 24 * 60 * 60 * 1000))
      } else if (calculationMethod === "conception" && conceptionDate) {
        calculatedConceptionDate = new Date(conceptionDate)
        calculatedDueDate = new Date(calculatedConceptionDate.getTime() + (266 * 24 * 60 * 60 * 1000))
        gestationalAgeWeeks = Math.floor((new Date().getTime() - calculatedConceptionDate.getTime()) / (7 * 24 * 60 * 60 * 1000))
      } else if (calculationMethod === "ivf" && ivfDate) {
        const ivf = new Date(ivfDate)
        calculatedConceptionDate = ivf
        calculatedDueDate = new Date(ivf.getTime() + (266 * 24 * 60 * 60 * 1000))
        gestationalAgeWeeks = Math.floor((new Date().getTime() - ivf.getTime()) / (7 * 24 * 60 * 60 * 1000))
      } else {
        return
      }

      const weeksPregnant = Math.max(0, gestationalAgeWeeks)
      const daysPregnant = Math.max(0, Math.floor((new Date().getTime() - calculatedConceptionDate.getTime()) / (24 * 60 * 60 * 1000)))
      const pregnancyProgress = Math.min(100, (weeksPregnant / 40) * 100)

      let trimester = ""
      let nextMilestone = ""
      let symptoms: string[] = []
      let recommendations = {
        nutrition: [] as string[],
        exercise: [] as string[],
        health: [] as string[],
        lifestyle: [] as string[]
      }
      let upcomingAppointments: string[] = []
      let fetalDevelopment: string[] = []

      if (weeksPregnant < 13) {
        trimester = "First Trimester"
        nextMilestone = "First trimester screening (11-14 weeks)"
        symptoms = [
          "Morning sickness and nausea",
          "Fatigue and exhaustion",
          "Breast tenderness",
          "Frequent urination",
          "Food aversions and cravings",
          "Mood swings"
        ]
        upcomingAppointments = [
          "Initial prenatal visit (8-12 weeks)",
          "First trimester screening (11-14 weeks)",
          "Genetic counseling (if needed)"
        ]
        fetalDevelopment = [
          "Neural tube formation",
          "Heart begins beating",
          "Major organs start developing",
          "Limbs and facial features form"
        ]
        recommendations = {
          nutrition: [
            "Take prenatal vitamins with folic acid (400-800 mcg daily)",
            "Eat small, frequent meals to manage nausea",
            "Include iron-rich foods (lean meats, spinach, beans)",
            "Stay hydrated with 8-10 glasses of water daily",
            "Avoid raw fish, undercooked meats, and unpasteurized dairy"
          ],
          exercise: [
            "Light walking for 30 minutes daily",
            "Prenatal yoga or gentle stretching",
            "Pelvic floor exercises (Kegels)",
            "Avoid high-impact activities",
            "Listen to your body and rest when needed"
          ],
          health: [
            "Schedule first prenatal appointment",
            "Discuss any medications with healthcare provider",
            "Avoid alcohol, smoking, and recreational drugs",
            "Get adequate sleep (7-9 hours nightly)",
            "Manage stress through relaxation techniques"
          ],
          lifestyle: [
            "Create a pregnancy journal",
            "Start researching childbirth classes",
            "Inform your employer about pregnancy",
            "Begin thinking about birth preferences",
            "Connect with other expectant mothers"
          ]
        }
      } else if (weeksPregnant < 27) {
        trimester = "Second Trimester"
        nextMilestone = "Anatomy scan (18-22 weeks)"
        symptoms = [
          "Energy boost and reduced nausea",
          "Baby bump becomes visible",
          "Feeling baby movements (quickening)",
          "Backaches and round ligament pain",
          "Nasal congestion",
          "Skin changes"
        ]
        upcomingAppointments = [
          "Anatomy scan (18-22 weeks)",
          "Glucose screening test (24-28 weeks)",
          "Regular prenatal visits every 4 weeks"
        ]
        fetalDevelopment = [
          "Rapid growth and development",
          "Fetal movements begin",
          "Hair, eyebrows, and eyelashes form",
          "Fetus can hear sounds"
        ]
        recommendations = {
          nutrition: [
            "Increase protein intake (75-100g daily)",
            "Add more calcium-rich foods (dairy, leafy greens)",
            "Include omega-3 fatty acids (fish, walnuts)",
            "Eat colorful fruits and vegetables",
            "Continue prenatal vitamins"
          ],
          exercise: [
            "Moderate-intensity activities (swimming, cycling)",
            "Prenatal fitness classes",
            "Strength training with light weights",
            "Continue pelvic floor exercises",
            "Avoid exercises lying flat on back"
          ],
          health: [
            "Regular prenatal check-ups every 4 weeks",
            "Monitor blood pressure and weight gain",
            "Discuss travel plans with healthcare provider",
            "Plan for maternity leave",
            "Consider genetic testing options"
          ],
          lifestyle: [
            "Start shopping for maternity clothes",
            "Begin planning nursery",
            "Research pediatricians",
            "Attend childbirth education classes",
            "Practice relaxation and breathing techniques"
          ]
        }
      } else {
        trimester = "Third Trimester"
        nextMilestone = "Weekly prenatal visits (36+ weeks)"
        symptoms = [
          "Increased fatigue and difficulty sleeping",
          "Shortness of breath",
          "Frequent urination and backaches",
          "Braxton Hicks contractions",
          "Swelling in feet and ankles",
          "Nesting instincts"
        ]
        upcomingAppointments = [
          "Weekly prenatal visits (36+ weeks)",
          "Group B strep test (35-37 weeks)",
          "Final ultrasound (if needed)"
        ]
        fetalDevelopment = [
          "Rapid weight gain and growth",
          "Brain development accelerates",
          "Lungs mature and practice breathing",
          "Fetus positions for birth"
        ]
        recommendations = {
          nutrition: [
            "Small, frequent meals to manage heartburn",
            "Increase fiber to prevent constipation",
            "Continue protein and calcium intake",
            "Stay hydrated but reduce evening fluids",
            "Prepare for breastfeeding nutrition"
          ],
          exercise: [
            "Gentle walking and swimming",
            "Prenatal yoga and stretching",
            "Pelvic tilts and squats",
            "Avoid high-impact activities",
            "Focus on preparation for labor"
          ],
          health: [
            "Weekly prenatal visits",
            "Monitor for signs of preterm labor",
            "Prepare hospital bag",
            "Finalize birth plan",
            "Discuss pain management options"
          ],
          lifestyle: [
            "Install car seat and prepare nursery",
            "Pack hospital bag",
            "Arrange childcare for other children",
            "Practice labor positions",
            "Prepare for postpartum period"
          ]
        }
      }

      // Calculate weight gain recommendation
      const preWeight = parseFloat(prePregnancyWeight)
      const heightInMeters = parseFloat(height) / 100
      const bmi = preWeight / (heightInMeters * heightInMeters)

      let weightGainRecommendation = { min: 0, max: 0, category: "" }
      if (bmi < 18.5) {
        weightGainRecommendation = { min: 28, max: 40, category: "Underweight (BMI < 18.5)" }
      } else if (bmi >= 18.5 && bmi < 25) {
        weightGainRecommendation = { min: 25, max: 35, category: "Normal weight (BMI 18.5-24.9)" }
      } else if (bmi >= 25 && bmi < 30) {
        weightGainRecommendation = { min: 15, max: 25, category: "Overweight (BMI 25-29.9)" }
      } else {
        weightGainRecommendation = { min: 11, max: 20, category: "Obese (BMI ≥ 30)" }
      }

      const newResult: PregnancyResult = {
        dueDate: calculatedDueDate,
        conceptionDate: calculatedConceptionDate,
        gestationalAge: gestationalAgeWeeks,
        weeksPregnant,
        daysPregnant,
        trimester,
        pregnancyProgress,
        nextMilestone,
        weightGainRecommendation,
        symptoms,
        recommendations,
        upcomingAppointments,
        fetalDevelopment
      }

      setResult(newResult)
      setHistory(prev => [newResult, ...prev.slice(0, 4)])
      console.log("Calculation successful:", newResult)
    } catch (error) {
      console.error("Calculation error:", error)
    }
  }

  const clearAll = () => {
    setDueDate("")
    setLmpDate("")
    setUltrasoundDate("")
    setGestationalAge("")
    setConceptionDate("")
    setIvfDate("")
    setCurrentWeight("")
    setPrePregnancyWeight("")
    setHeight("")
    setResult(null)
  }

  const copyResult = () => {
    if (result) {
      const text = `Pregnancy Calculator Results:
Due Date: ${result.dueDate.toLocaleDateString()}
Conception Date: ${result.conceptionDate.toLocaleDateString()}
Current Gestational Age: ${result.weeksPregnant} weeks, ${result.daysPregnant} days
Trimester: ${result.trimester}
Pregnancy Progress: ${result.pregnancyProgress.toFixed(1)}%
Next Milestone: ${result.nextMilestone}`
      navigator.clipboard.writeText(text)
    }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="space-y-4">
      {/* Input Section */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-2 px-3 sm:px-6">
          <CardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg">
            <Calculator className="h-4 w-4 text-foreground" />
            Pregnancy Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 px-3 sm:px-6">
          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="method" className="text-[11px] font-medium text-heading-accent">Calculation Method</Label>
              <Select value={calculationMethod} onValueChange={(value: "dueDate" | "lmp" | "ultrasound" | "conception" | "ivf") => setCalculationMethod(value)}>
                <SelectTrigger className="h-8 text-xs border-border bg-card text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dueDate">Due Date</SelectItem>
                  <SelectItem value="lmp">Last Menstrual Period</SelectItem>
                  <SelectItem value="ultrasound">Ultrasound Date</SelectItem>
                  <SelectItem value="conception">Conception Date</SelectItem>
                  <SelectItem value="ivf">IVF Transfer Date</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {calculationMethod === "dueDate" && (
              <div className="space-y-1">
                <Label htmlFor="dueDate" className="text-[11px] font-medium text-heading-accent">Your Due Date</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="h-7 text-xs border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                />
              </div>
            )}

            {calculationMethod === "lmp" && (
              <div className="space-y-1">
                <Label htmlFor="lmpDate" className="text-[11px] font-medium text-heading-accent">First Day of Last Menstrual Period</Label>
                <Input
                  id="lmpDate"
                  type="date"
                  value={lmpDate}
                  onChange={(e) => setLmpDate(e.target.value)}
                  className="h-7 text-xs border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                />
              </div>
            )}

            {calculationMethod === "ultrasound" && (
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="ultrasoundDate" className="text-[11px] font-medium text-heading-accent">Ultrasound Date</Label>
                  <Input
                    id="ultrasoundDate"
                    type="date"
                    value={ultrasoundDate}
                    onChange={(e) => setUltrasoundDate(e.target.value)}
                    className="h-7 text-xs border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="gestationalAge" className="text-[11px] font-medium text-heading-accent">Gestational Age at Ultrasound (weeks)</Label>
                  <Input
                    id="gestationalAge"
                    type="number"
                    placeholder="e.g., 12"
                    value={gestationalAge}
                    onChange={(e) => setGestationalAge(e.target.value)}
                    className="h-7 text-xs border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            )}

            {calculationMethod === "conception" && (
              <div className="space-y-1">
                <Label htmlFor="conceptionDate" className="text-[11px] font-medium text-heading-accent">Conception Date</Label>
                <Input
                  id="conceptionDate"
                  type="date"
                  value={conceptionDate}
                  onChange={(e) => setConceptionDate(e.target.value)}
                  className="h-7 text-xs border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                />
              </div>
            )}

            {calculationMethod === "ivf" && (
              <div className="space-y-1">
                <Label htmlFor="ivfDate" className="text-[11px] font-medium text-heading-accent">IVF Transfer Date</Label>
                <Input
                  id="ivfDate"
                  type="date"
                  value={ivfDate}
                  onChange={(e) => setIvfDate(e.target.value)}
                  className="h-7 text-xs border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                />
              </div>
            )}

            {/* Weight and Height for BMI calculation */}
            <div className="grid md:grid-cols-3 gap-3">
              <div className="space-y-1">
                <Label htmlFor="prePregnancyWeight" className="text-[11px] font-medium text-heading-accent">Pre-Pregnancy Weight (kg)</Label>
                <Input
                  id="prePregnancyWeight"
                  type="number"
                  placeholder="e.g., 65"
                  value={prePregnancyWeight}
                  onChange={(e) => setPrePregnancyWeight(e.target.value)}
                  className="h-7 text-xs border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="currentWeight" className="text-[11px] font-medium text-heading-accent">Current Weight (kg)</Label>
                <Input
                  id="currentWeight"
                  type="number"
                  placeholder="e.g., 68"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(e.target.value)}
                  className="h-7 text-xs border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="height" className="text-[11px] font-medium text-heading-accent">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="e.g., 165"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="h-7 text-xs border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <GButton onClick={calculatePregnancy} className="flex-1 h-9 text-xs font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white">
                <Calculator className="mr-1 h-3 w-3" />
                Calculate
              </GButton>
              <GButton variant="outline" onClick={clearAll} className="h-9 text-xs border-border bg-card text-foreground hover:bg-secondary">
                Clear
              </GButton>
            </div>
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
                <Heart className="h-5 w-5 text-foreground" />
                Pregnancy Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Due Date</Label>
                  <div className="text-lg font-semibold text-foreground">
                    {formatDate(result.dueDate)}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Conception Date</Label>
                  <div className="text-lg font-semibold text-heading-accent">
                    {formatDate(result.conceptionDate)}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Current Gestational Age</Label>
                  <div className="text-lg font-semibold text-foreground">
                    {result.weeksPregnant} weeks, {result.daysPregnant} days
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Trimester</Label>
                  <Badge variant="secondary" className="text-sm">
                    {result.trimester}
                  </Badge>
                </div>
              </div>

              {/* Pregnancy Progress */}
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Pregnancy Progress</span>
                  <span className="text-sm text-muted-foreground">{result.pregnancyProgress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${result.pregnancyProgress}%` }}
                  ></div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-foreground" />
                  <span className="font-medium">Next Milestone</span>
                </div>
                <p className="text-sm text-muted-foreground">{result.nextMilestone}</p>
              </div>

              <div className="flex gap-2 pt-4">
                <GButton onClick={copyResult} variant="outline" size="sm">
                  Copy Results
                </GButton>
              </div>
            </CardContent>
          </Card>

          {/* Weight Gain Recommendation */}
          {prePregnancyWeight && height && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-heading-accent" />
                  Weight Gain Recommendation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted rounded-lg border border-secondary-accent/30">
                  <div className="text-sm">
                    <p className="font-medium text-heading-accent mb-2">
                      Recommended Weight Gain: {result.weightGainRecommendation.min}-{result.weightGainRecommendation.max} pounds
                    </p>
                    <p className="text-heading-accent">
                      Based on your pre-pregnancy BMI category: {result.weightGainRecommendation.category}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Current Symptoms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-foreground" />
                Common Symptoms This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-2">
                {result.symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <AlertCircle className="h-4 w-4 text-foreground" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fetal Development */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Baby className="h-5 w-5 text-foreground" />
                Fetal Development This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.fetalDevelopment.map((development, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                    <span>{development}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.upcomingAppointments.map((appointment, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{appointment}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-5 w-5 text-heading-accent" />
                  Nutrition Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.nutrition.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-foreground" />
                  Exercise Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.exercise.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-foreground" />
                  Health Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.health.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-foreground" />
                  Lifestyle Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.lifestyle.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* History Section */}
      {history.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              Recent Calculations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">
                      {formatDate(item.dueDate)} - {item.trimester}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.weeksPregnant} weeks, {item.daysPregnant} days
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
          </CardContent>
        </Card>
      )}

      {/* Information Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-foreground" />
            Important Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-muted rounded-lg border border-accent/30">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">
                  Medical Disclaimer
                </p>
                <p className="text-foreground">
                  The information shown here is approximate and intended for informational purposes. For precise timeline calculations and health guidance, please speak directly with your medical professional.
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground space-y-2">
            <p>
              <strong className="text-heading-accent">Baby's Anticipated Arrival:</strong> This shows the projected birth date, usually calculated as roughly 280 days (or about nine calendar months) from when your last period started.
            </p>
            <p>
              <strong className="text-heading-accent">How Far Along:</strong> Measured from day one of your last period start date, matching the standard method doctors use to track pregnancy advancement.
            </p>
            <p>
              <strong className="text-heading-accent">Healthy Weight Ranges:</strong> These suggestions factor in your body mass index from before conception and match guidelines from recognized health organizations.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
