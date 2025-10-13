"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
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
    <div className="space-y-6">
      {/* Input Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-blue-500" />
            Pregnancy Conception Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="method">Calculation Method</Label>
              <Select value={calculationMethod} onValueChange={(value: "dueDate" | "lmp" | "ultrasound") => setCalculationMethod(value)}>
                <SelectTrigger>
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
              <div>
                <Label htmlFor="dueDate">Your Due Date</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            )}

            {calculationMethod === "lmp" && (
              <div>
                <Label htmlFor="lmpDate">First Day of Last Menstrual Period</Label>
                <Input
                  id="lmpDate"
                  type="date"
                  value={lmpDate}
                  onChange={(e) => setLmpDate(e.target.value)}
                />
              </div>
            )}

            {calculationMethod === "ultrasound" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="ultrasoundDate">Ultrasound Date</Label>
                  <Input
                    id="ultrasoundDate"
                    type="date"
                    value={ultrasoundDate}
                    onChange={(e) => setUltrasoundDate(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="gestationalAge">Gestational Age at Ultrasound (weeks)</Label>
                  <Input
                    id="gestationalAge"
                    type="number"
                    placeholder="e.g., 12"
                    value={gestationalAge}
                    onChange={(e) => setGestationalAge(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <Button onClick={calculateConception} className="flex-1">
                <Calculator className="mr-2 h-4 w-4" />
                Calculate Conception Date
              </Button>
              <Button variant="outline" onClick={clearAll}>
                Clear All
              </Button>
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
                <Heart className="h-5 w-5 text-pink-500" />
                Conception Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Estimated Conception Date</Label>
                  <div className="text-lg font-semibold text-blue-600">
                    {formatDate(result.conceptionDate)}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Conception Range</Label>
                  <div className="text-sm text-muted-foreground">
                    {formatDate(result.conceptionRange.start)} - {formatDate(result.conceptionRange.end)}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Current Gestational Age</Label>
                  <div className="text-lg font-semibold text-green-600">
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

              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <span className="font-medium">Next Milestone</span>
                </div>
                <p className="text-sm text-muted-foreground">{result.nextMilestone}</p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={copyResult} variant="outline" size="sm">
                  Copy Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Current Symptoms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-purple-500" />
                Common Symptoms This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-2">
                {result.symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <AlertCircle className="h-4 w-4 text-orange-500" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-5 w-5 text-green-500" />
                  Nutrition Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.nutrition.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-blue-500" />
                  Exercise Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.exercise.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-purple-500" />
                  Health Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.health.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  Lifestyle Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.recommendations.lifestyle.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
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
                      {formatDate(item.conceptionDate)} - {item.trimester}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.weeksPregnant} weeks, {item.daysPregnant} days
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
            Important Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                  Medical Disclaimer
                </p>
                <p className="text-blue-700 dark:text-blue-300">
                  This calculator provides estimates only. Always consult with your healthcare provider for accurate pregnancy dating and medical advice.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Conception Date:</strong> The estimated date when fertilization occurred, typically 11-21 days after the first day of your last menstrual period.
            </p>
            <p>
              <strong>Conception Range:</strong> A 4-day window during which sexual intercourse likely led to conception, accounting for sperm viability (3-5 days).
            </p>
            <p>
              <strong>Gestational Age:</strong> The age of the pregnancy calculated from the first day of the last menstrual period, not the actual conception date.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
