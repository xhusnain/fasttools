"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Copy, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function LoveCalculator() {
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const [result, setResult] = useState<{
    percentage: number
    message: string
    emoji: string
  } | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [copied, setCopied] = useState(false)

  const calculateLove = () => {
    if (!name1 || !name2) return

    setIsCalculating(true)

    setTimeout(() => {
      // Fun algorithm: use name lengths and character codes
      const combined = (name1 + name2).toLowerCase()
      let sum = 0
      for (let i = 0; i < combined.length; i++) {
        sum += combined.charCodeAt(i)
      }
      const percentage = sum % 101 // 0-100

      let message = ""
      let emoji = ""

      if (percentage < 20) {
        message = "Not much chemistry here... but who knows what the future holds!"
        emoji = "💔"
      } else if (percentage < 40) {
        message = "There's potential, but it might take some work!"
        emoji = "💛"
      } else if (percentage < 60) {
        message = "A decent match! You could make it work with effort."
        emoji = "💕"
      } else if (percentage < 80) {
        message = "Great compatibility! You two are meant for each other!"
        emoji = "💖"
      } else {
        message = "Perfect match! This is true love! 🎉"
        emoji = "❤️"
      }

      setResult({
        percentage,
        message,
        emoji,
      })
      setIsCalculating(false)
    }, 1000)
  }

  const copyResult = () => {
    if (!result) return
    const text = `${name1} + ${name2} = ${result.percentage}% Love Match! ${result.emoji}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareResult = () => {
    if (!result) return
    const text = `${name1} + ${name2} = ${result.percentage}% Love Match! ${result.emoji}`
    if (navigator.share) {
      navigator.share({ text })
    }
  }

  return (
    <Card className="border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">Love Calculator</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Calculate the love compatibility between two people (just for fun!)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name1" className="text-sm font-medium text-foreground">
              First Name
            </Label>
            <Input
              id="name1"
              type="text"
              placeholder="Enter first name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className="h-11 text-sm"
            />
          </div>

          <div className="flex items-center justify-center">
            <Heart className="h-6 w-6 text-primary fill-primary" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name2" className="text-sm font-medium text-foreground">
              Second Name
            </Label>
            <Input
              id="name2"
              type="text"
              placeholder="Enter second name"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className="h-11 text-sm"
            />
          </div>

          <Button
            onClick={calculateLove}
            disabled={!name1 || !name2 || isCalculating}
            className="w-full h-11 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {isCalculating ? (
              <>
                <LoadingSpinner className="mr-2" />
                Calculating Love...
              </>
            ) : (
              <>
                <Heart className="mr-2 h-4 w-4" />
                Calculate Love Match
              </>
            )}
          </Button>
        </div>

        {result && (
          <div className="p-6 rounded-lg bg-accent border border-primary/10 space-y-4 animate-fade-in">
            <div className="text-center space-y-2">
              <p className="text-6xl">{result.emoji}</p>
              <p className="text-sm text-muted-foreground">
                {name1} + {name2}
              </p>
              <p className="text-5xl font-bold text-primary">{result.percentage}%</p>
              <p className="text-sm text-muted-foreground">Love Match</p>
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
