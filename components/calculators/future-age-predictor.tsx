"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"

import { Calendar, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

import { FutureAgeResult } from "@/types/calculator-types/future-age-predictor.types"

export function FutureAgePredictor() {
  const [birthDate, setBirthDate] = useState("")
  const [targetYear, setTargetYear] = useState("")
  const [result, setResult] = useState<FutureAgeResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [errors, setErrors] = useState<{
    birthDate: string
    targetYear: string
  }>({
    birthDate: "",
    targetYear: ""
  })

  const validateInputs = () => {
    const newErrors = {
      birthDate: "",
      targetYear: ""
    }

    // Validate birth date
    if (!birthDate) {
      newErrors.birthDate = "Birth date is required"
    } else {
      const birth = new Date(birthDate)
      const today = new Date()
      if (birth > today) {
        newErrors.birthDate = "Birth date cannot be in the future"
      }
    }

    // Validate target year
    if (!targetYear) {
      newErrors.targetYear = "Target year is required"
    } else {
      const year = Number.parseInt(targetYear)
      const currentYear = new Date().getFullYear()
      if (year < currentYear) {
        newErrors.targetYear = "Target year must be in the future"
      }
    }

    setErrors(newErrors)
    return !newErrors.birthDate && !newErrors.targetYear
  }

  const calculateFutureAge = () => {
    if (!validateInputs()) return

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
    <GCard className="border border-border shadow-sm">
      <GCardHeader>
        <GCardTitle className="text-xl text-foreground">Future Age Predictor</GCardTitle>
        <GCardDescription className="text-sm text-muted-foreground">
          Discover how old you'll be in any future year
        </GCardDescription>
      </GCardHeader>
      <GCardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <GLabel htmlFor="birthDate" className="text-sm font-medium text-foreground">
              Your Birth Date
            </GLabel>
            <GInput
              id="birthDate"
              type="date"
              value={birthDate}
              onChange={(e) => {
                setBirthDate(e.target.value)
                if (errors.birthDate) {
                  setErrors(prev => ({ ...prev, birthDate: "" }))
                }
              }}
              className={`h-11 text-sm border-primary focus:border-primary focus:ring-orange-500 ${errors.birthDate ? 'border-orange-600' : ''}`}
              max={new Date().toISOString().split("T")[0]}
            />
            {errors.birthDate && (
              <p className="text-xs text-foreground mt-1">{errors.birthDate}</p>
            )}
          </div>

          <div className="space-y-2">
            <GLabel htmlFor="targetYear" className="text-sm font-medium text-foreground">
              Target Year
            </GLabel>
            <GInput
              id="targetYear"
              type="number"
              placeholder="e.g., 2050"
              value={targetYear}
              onChange={(e) => {
                setTargetYear(e.target.value)
                if (errors.targetYear) {
                  setErrors(prev => ({ ...prev, targetYear: "" }))
                }
              }}
              className={`h-11 text-sm border-primary focus:border-primary focus:ring-orange-500 ${errors.targetYear ? 'border-orange-600' : ''}`}
              min={new Date().getFullYear()}
            />
            {errors.targetYear && (
              <p className="text-xs text-foreground mt-1">{errors.targetYear}</p>
            )}
          </div>

          <GButton
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
          </GButton>
        </div>

        {result && (
          <div className="p-6 rounded-lg bg-gradient-to-br from-primary to-primary/90 border border-orange-400 space-y-4 animate-fade-in shadow-lg">
            <div className="text-center space-y-2">
              <p className="text-sm text-white/90">In the year {result.year}, you will be</p>
              <p className="text-5xl font-bold text-white drop-shadow-lg">{result.age}</p>
              <p className="text-sm text-white/90">years old</p>
            </div>

            <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-sm text-center text-white font-medium">{result.message}</p>
            </div>

            <div className="flex gap-2">
              <GButton
                onClick={copyResult}
                variant="outline"
                className="flex-1 h-10 text-sm font-medium hover:bg-white/20 transition-all bg-white/10 border-white/30 text-white hover:text-white"
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
              </GButton>
              <GButton
                onClick={shareResult}
                className="flex-1 h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all bg-white text-foreground hover:bg-white/90"
              >
                Share Result
              </GButton>
            </div>
          </div>
        )}
      </GCardContent>
    </GCard>
  )
}
