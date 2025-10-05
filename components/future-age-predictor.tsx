"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function FutureAgePredictor() {
  const [birthDate, setBirthDate] = useState("")
  const [targetYear, setTargetYear] = useState("")
  const [result, setResult] = useState<{
    age: number
    year: number
    message: string
  } | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [copied, setCopied] = useState(false)

  const calculateFutureAge = () => {
    if (!birthDate || !targetYear) return

    setIsCalculating(true)

    setTimeout(() => {
      const birth = new Date(birthDate)
      const target = Number.parseInt(targetYear)
      const birthYear = birth.getFullYear()
      const futureAge = target - birthYear

      let message = ""
      if (futureAge < 0) {
        message = "You weren't born yet in that year!"
      } else if (futureAge < 18) {
        message = "You'll be a young person full of potential!"
      } else if (futureAge < 30) {
        message = "You'll be in your prime years!"
      } else if (futureAge < 50) {
        message = "You'll be experienced and wise!"
      } else if (futureAge < 70) {
        message = "You'll be enjoying your golden years!"
      } else {
        message = "You'll be a living legend!"
      }

      setResult({
        age: futureAge,
        year: target,
        message,
      })
      setIsCalculating(false)
    }, 800)
  }

  const copyResult = () => {
    if (!result) return
    const text = `In ${result.year}, I will be ${result.age} years old! ${result.message}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareResult = () => {
    if (!result) return
    const text = `In ${result.year}, I will be ${result.age} years old! ${result.message}`
    if (navigator.share) {
      navigator.share({ text })
    }
  }

  return (
    <Card className="border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">Future Age Predictor</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Discover how old you'll be in any future year
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="birthDate" className="text-sm font-medium text-foreground">
              Your Birth Date
            </Label>
            <Input
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="h-11 text-sm"
              max={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetYear" className="text-sm font-medium text-foreground">
              Target Year
            </Label>
            <Input
              id="targetYear"
              type="number"
              placeholder="e.g., 2050"
              value={targetYear}
              onChange={(e) => setTargetYear(e.target.value)}
              className="h-11 text-sm"
              min={new Date().getFullYear()}
              max={2100}
            />
          </div>

          <Button
            onClick={calculateFutureAge}
            disabled={!birthDate || !targetYear || isCalculating}
            className="w-full h-11 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {isCalculating ? (
              <>
                <LoadingSpinner className="mr-2" />
                Predicting...
              </>
            ) : (
              <>
                <Calendar className="mr-2 h-4 w-4" />
                Predict My Future Age
              </>
            )}
          </Button>
        </div>

        {result && (
          <div className="p-6 rounded-lg bg-accent border border-primary/10 space-y-4 animate-fade-in">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">In the year {result.year}, you will be</p>
              <p className="text-5xl font-bold text-primary">{result.age}</p>
              <p className="text-sm text-muted-foreground">years old</p>
            </div>

            <div className="p-4 rounded-lg bg-card border border-border">
              <p className="text-sm text-center text-foreground font-medium">{result.message}</p>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={copyResult}
                variant="outline"
                className="flex-1 h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
              <Button
                onClick={shareResult}
                className="flex-1 h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all"
              >
                Share Result
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
