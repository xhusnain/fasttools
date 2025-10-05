"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Activity, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface BMIResult {
  bmi: number
  category: string
  color: string
  healthyRange: string
}

export function BMICalculator() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
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

      if (bmi < 18.5) {
        category = "Underweight"
        color = "text-blue-600"
        healthyRange = "18.5 - 24.9"
      } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight"
        color = "text-green-600"
        healthyRange = "18.5 - 24.9"
      } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight"
        color = "text-orange-600"
        healthyRange = "18.5 - 24.9"
      } else {
        category = "Obese"
        color = "text-red-600"
        healthyRange = "18.5 - 24.9"
      }

      setResult({
        bmi: Number.parseFloat(bmi.toFixed(1)),
        category,
        color,
        healthyRange,
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const text = `My BMI is ${result.bmi} (${result.category})`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-border hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Activity className="h-5 w-5 text-primary" />
            Calculate Your BMI
          </CardTitle>
          <CardDescription className="text-sm">Enter your weight and height to calculate BMI</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            <button
              onClick={() => setUnit("metric")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                unit === "metric" ? "bg-background shadow-sm" : "hover:bg-background/50"
              }`}
            >
              Metric (kg/cm)
            </button>
            <button
              onClick={() => setUnit("imperial")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                unit === "imperial" ? "bg-background shadow-sm" : "hover:bg-background/50"
              }`}
            >
              Imperial (lbs/in)
            </button>
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight" className="text-sm font-medium">
              Weight {unit === "metric" ? "(kg)" : "(lbs)"}
            </Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === "metric" ? "70" : "154"}
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="height" className="text-sm font-medium">
              Height {unit === "metric" ? "(cm)" : "(inches)"}
            </Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === "metric" ? "170" : "67"}
              className="h-11"
            />
          </div>

          <Button
            onClick={calculateBMI}
            className="w-full h-11 text-sm font-medium shadow-md hover:shadow-lg transition-all"
            disabled={!weight || !height || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Calculating...
              </>
            ) : (
              "Calculate BMI"
            )}
          </Button>
        </CardContent>
      </Card>

      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-xl">Your BMI Result</CardTitle>
            <CardDescription className="text-sm">Body Mass Index calculation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="text-5xl font-bold text-primary mb-2">{result.bmi}</div>
              <div className={`text-lg font-semibold ${result.color}`}>{result.category}</div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Healthy BMI Range</span>
                <span className="font-semibold text-sm">{result.healthyRange}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                BMI is a screening tool. Consult a healthcare provider for personalized health advice.
              </p>
            </div>

            <Button
              onClick={copyResult}
              variant="outline"
              className="w-full h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Result
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
