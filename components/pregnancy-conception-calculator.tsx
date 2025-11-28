"use client"

import { useState, useEffect } from "react"
import { GButton } from "@/components/globalcomponents/gbutton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Calculator, Heart, Baby, Stethoscope, Clock, AlertCircle, CheckCircle, Info } from "lucide-react"

interface ConceptionResult {
  conceptionDate: Date
  conceptionRange: { start: Date; end: Date }
  gestationalAge: number
  trimester: string
  weeksPregnant: number
  daysPregnant: number
  nextMilestone: string
  symptoms: string[]
  recommendations: {
    nutrition: string[]
    exercise: string[]
    health: string[]
    lifestyle: string[]
  }
}

export default function PregnancyConceptionCalculator() {
  const [calculationMethod, setCalculationMethod] = useState<"dueDate" | "lmp" | "ultrasound">("dueDate")
  const [dueDate, setDueDate] = useState("")
  const [lmpDate, setLmpDate] = useState("")
  const [ultrasoundDate, setUltrasoundDate] = useState("")
  const [gestationalAge, setGestationalAge] = useState("")
  const [result, setResult] = useState<ConceptionResult | null>(null)
  const [history, setHistory] = useState<ConceptionResult[]>([])

  const calculateConception = () => {
    let conceptionDate: Date
    let gestationalAgeWeeks: number

    try {
      if (calculationMethod === "dueDate" && dueDate) {
        const due = new Date(dueDate)
        conceptionDate = new Date(due.getTime() - (266 * 24 * 60 * 60 * 1000)) // 266 days before due date
        gestationalAgeWeeks = Math.floor((new Date().getTime() - conceptionDate.getTime()) / (7 * 24 * 60 * 60 * 1000))
      } else if (calculationMethod === "lmp" && lmpDate) {
        const lmp = new Date(lmpDate)
        conceptionDate = new Date(lmp.getTime() + (14 * 24 * 60 * 60 * 1000)) // 14 days after LMP
        gestationalAgeWeeks = Math.floor((new Date().getTime() - lmp.getTime()) / (7 * 24 * 60 * 60 * 1000))
      } else if (calculationMethod === "ultrasound" && ultrasoundDate && gestationalAge) {
        const ultrasound = new Date(ultrasoundDate)
        const ageWeeks = parseInt(gestationalAge)
        conceptionDate = new Date(ultrasound.getTime() - (ageWeeks * 7 * 24 * 60 * 60 * 1000))
        gestationalAgeWeeks = ageWeeks + Math.floor((new Date().getTime() - ultrasound.getTime()) / (7 * 24 * 60 * 60 * 1000))
      } else {
        return
      }

      const conceptionRange = {
        start: new Date(conceptionDate.getTime() - (3 * 24 * 60 * 60 * 1000)),
        end: new Date(conceptionDate.getTime() + (1 * 24 * 60 * 60 * 1000))
      }

      const weeksPregnant = Math.max(0, gestationalAgeWeeks)
      const daysPregnant = Math.max(0, Math.floor((new Date().getTime() - conceptionDate.getTime()) / (24 * 60 * 60 * 1000)))

      let trimester = ""
      let nextMilestone = ""
      let symptoms: string[] = []
      let recommendations = {
        nutrition: [] as string[],
        exercise: [] as string[],
        health: [] as string[],
        lifestyle: [] as string[]
      }

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

      const newResult: ConceptionResult = {
        conceptionDate,
        conceptionRange,
        gestationalAge: gestationalAgeWeeks,
        trimester,
        weeksPregnant,
        daysPregnant,
        nextMilestone,
        symptoms,
        recommendations
      }

      setResult(newResult)
      setHistory(prev => [newResult, ...prev.slice(0, 4)])
    } catch (error) {
      console.error("Calculation error:", error)
    }
  }

  const clearAll = () => {
    setDueDate("")
    setLmpDate("")
    setUltrasoundDate("")
    setGestationalAge("")
    setResult(null)
  }

  const copyResult = () => {
    if (result) {
      const text = `Pregnancy Conception Calculator Results:
Conception Date: ${result.conceptionDate.toLocaleDateString()}
Conception Range: ${result.conceptionRange.start.toLocaleDateString()} - ${result.conceptionRange.end.toLocaleDateString()}
Current Gestational Age: ${result.weeksPregnant} weeks, ${result.daysPregnant} days
Trimester: ${result.trimester}
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
            Pregnancy Conception Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 px-3 sm:px-6">
          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="method" className="text-[11px] font-medium text-heading-accent">Calculation Method</Label>
              <Select value={calculationMethod} onValueChange={(value: "dueDate" | "lmp" | "ultrasound") => setCalculationMethod(value)}>
                <SelectTrigger className="h-8 text-xs border-border bg-card text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dueDate">Due Date</SelectItem>
                  <SelectItem value="lmp">Last Menstrual Period</SelectItem>
                  <SelectItem value="ultrasound">Ultrasound Date</SelectItem>
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

            <div className="flex gap-2">
              <GButton onClick={calculateConception} className="flex-1 h-9 text-xs font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white">
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
        <div className="space-y-4">
          {/* Main Results */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-2 px-3 sm:px-6">
              <CardTitle className="flex items-center gap-2 text-foreground text-base">
                <Heart className="h-4 w-4 text-foreground" />
                Conception Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 px-3 sm:px-6">
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-1 p-2 bg-card rounded-lg border border-border">
                  <Label className="text-xs font-medium text-heading-accent">Estimated Conception Date</Label>
                  <div className="text-sm sm:text-base font-semibold text-foreground">
                    {formatDate(result.conceptionDate)}
                  </div>
                </div>
                <div className="space-y-1 p-2 bg-card rounded-lg border border-border">
                  <Label className="text-xs font-medium text-heading-accent">Conception Range</Label>
                  <div className="text-xs text-muted-foreground">
                    {formatDate(result.conceptionRange.start)} - {formatDate(result.conceptionRange.end)}
                  </div>
                </div>
                <div className="space-y-1 p-2 bg-card rounded-lg border border-border">
                  <Label className="text-xs font-medium text-heading-accent">Current Gestational Age</Label>
                  <div className="text-sm sm:text-base font-semibold text-foreground">
                    {result.weeksPregnant} weeks, {result.daysPregnant} days
                  </div>
                </div>
                <div className="space-y-1 p-2 bg-card rounded-lg border border-border">
                  <Label className="text-xs font-medium text-heading-accent">Trimester</Label>
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-foreground border-primary/20">
                    {result.trimester}
                  </Badge>
                </div>
              </div>

              <div className="pt-3 border-t border-border">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-3.5 w-3.5 text-heading-accent" />
                  <span className="font-medium text-xs text-heading-accent">Next Milestone</span>
                </div>
                <p className="text-xs text-muted-foreground">{result.nextMilestone}</p>
              </div>

              <div className="flex gap-2 pt-3">
                <GButton onClick={copyResult} variant="outline" size="sm" className="h-8 text-xs border-border bg-card text-foreground hover:bg-secondary">
                  Copy Results
                </GButton>
              </div>
            </CardContent>
          </Card>

          {/* Current Symptoms */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-2 px-3 sm:px-6">
              <CardTitle className="flex items-center gap-2 text-foreground text-base">
                <Stethoscope className="h-4 w-4 text-foreground" />
                Common Symptoms This Week
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6">
              <div className="grid md:grid-cols-2 gap-2">
                {result.symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <AlertCircle className="h-3 w-3 text-heading-accent" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-card border-border">
              <CardHeader className="pb-2 px-3 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-foreground text-base">
                  <Baby className="h-4 w-4 text-foreground" />
                  Nutrition Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-6">
                <ul className="space-y-1.5">
                  {result.recommendations.nutrition.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-2 px-3 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-foreground text-base">
                  <Heart className="h-4 w-4 text-foreground" />
                  Exercise Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-6">
                <ul className="space-y-1.5">
                  {result.recommendations.exercise.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-2 px-3 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-foreground text-base">
                  <Stethoscope className="h-4 w-4 text-foreground" />
                  Health Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-6">
                <ul className="space-y-1.5">
                  {result.recommendations.health.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-2 px-3 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-foreground text-base">
                  <Calendar className="h-4 w-4 text-foreground" />
                  Lifestyle Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-6">
                <ul className="space-y-1.5">
                  {result.recommendations.lifestyle.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-heading-accent mt-0.5 flex-shrink-0" />
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
        <Card className="bg-card border-border">
          <CardHeader className="pb-2 px-3 sm:px-6">
            <CardTitle className="flex items-center gap-2 text-foreground text-base">
              <Clock className="h-4 w-4 text-foreground" />
              Recent Calculations
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 sm:px-6">
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-card rounded-lg border border-border">
                  <div className="space-y-1">
                    <div className="font-medium text-xs text-foreground">
                      {formatDate(item.conceptionDate)} - {item.trimester}
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      {item.weeksPregnant} weeks, {item.daysPregnant} days
                    </div>
                  </div>
                  <GButton
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
                    className="h-7 text-xs text-muted-foreground hover:text-heading-accent hover:bg-secondary"
                  >
                    View
                  </GButton>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Information Section */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-2 px-3 sm:px-6">
          <CardTitle className="flex items-center gap-2 text-foreground text-base">
            <Info className="h-4 w-4 text-foreground" />
            Important Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 px-3 sm:px-6">
          <div className="p-3 bg-card rounded-lg border border-border">
            <div className="flex items-start gap-2">
              <Info className="h-3.5 w-3.5 text-heading-accent mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <p className="font-medium text-heading-accent mb-1">
                  Medical Disclaimer
                </p>
                <p className="text-muted-foreground">
                  This calculator provides estimates only. Always consult with your healthcare provider for accurate pregnancy dating and medical advice.
                </p>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground space-y-2">
            <p>
              <strong className="text-heading-accent">Conception Date:</strong> The estimated date when fertilization occurred, typically 11-21 days after the first day of your last menstrual period.
            </p>
            <p>
              <strong className="text-heading-accent">Conception Range:</strong> A four-day timeframe during which fertilization most probably occurred, taking into consideration that sperm can remain viable in the reproductive tract for 3-5 days.
            </p>
            <p>
              <strong className="text-heading-accent">Gestational Age:</strong> The age of the pregnancy calculated from the first day of the last menstrual period, not the actual conception date.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
