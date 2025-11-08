"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Copy, Check, Sparkles, Star, Gift, Flower2, Palette } from "lucide-react"
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
  const [theme, setTheme] = useState("pink")
  const [isSharedResult, setIsSharedResult] = useState(false)

  const themes = {
    pink: {
      name: "Romantic Pink",
      gradient: "from-pink-500 to-rose-500",
      bg: "from-pink-500/20 to-rose-500/20",
      border: "border-pink-400/30",
      text: "text-foreground",
      button: "from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
      icon: "text-foreground"
    },
    red: {
      name: "Passionate Red",
      gradient: "from-red-500 to-pink-500",
      bg: "from-red-500/20 to-pink-500/20",
      border: "border-red-400/30",
      text: "text-foreground",
      button: "from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600",
      icon: "text-foreground"
    },
    purple: {
      name: "Mystical Purple",
      gradient: "from-purple-500 to-pink-500",
      bg: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-400/30",
      text: "text-foreground",
      button: "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      icon: "text-foreground"
    },
    rose: {
      name: "Elegant Rose",
      gradient: "from-rose-500 to-pink-500",
      bg: "from-rose-500/20 to-pink-500/20",
      border: "border-rose-400/30",
      text: "text-rose-300",
      button: "from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600",
      icon: "text-rose-400"
    }
  }

  const currentTheme = themes[theme as keyof typeof themes]

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const resultParam = urlParams.get('result')

    if (resultParam) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(resultParam))
        setName1(decodedData.name1 || '')
        setName2(decodedData.name2 || '')
        setTheme(decodedData.theme || 'pink')
        setResult({
          percentage: decodedData.percentage || 0,
          message: decodedData.message || '',
          emoji: decodedData.emoji || '💕'
        })
        setIsSharedResult(true)
      } catch (error) {
        console.error('Error loading shared result:', error)
      }
    }
  }, [])

  const calculateLove = () => {
    if (!name1 || !name2) return

    setIsCalculating(true)

    setTimeout(() => {

      const combined = (name1 + name2).toLowerCase()
      let sum = 0
      for (let i = 0; i < combined.length; i++) {
        sum += combined.charCodeAt(i)
      }
      const percentage = sum % 101

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

    const shareData = {
      name1,
      name2,
      percentage: result.percentage,
      message: result.message,
      emoji: result.emoji,
      theme
    }

    const jsonString = JSON.stringify(shareData)
    const encodedData = encodeURIComponent(jsonString)
    const shareUrl = `https:

    const text = `Check out our love match! ${name1} + ${name2} = ${result.percentage}% Love Match! ${result.emoji}\n\nSee your own love match: ${shareUrl}`

    if (navigator.share) {
      navigator.share({
        text,
        url: shareUrl
      })
    } else {

      navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  return (
    <Card className={`border-2 ${currentTheme.border} shadow-xl bg-gradient-to-br ${currentTheme.bg} backdrop-blur-xl`}>
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className={`h-6 w-6 ${currentTheme.icon} animate-pulse`} />
          <Sparkles className={`h-5 w-5 ${currentTheme.icon} animate-spin`} />
          <Heart className={`h-6 w-6 ${currentTheme.icon} animate-pulse`} />
        </div>
        <CardTitle className="text-2xl font-bold text-white">Romantic Love Calculator</CardTitle>
        <CardDescription className="text-sm text-white/80">
          {isSharedResult ? "Viewing a shared love match result!" : "Calculate the love compatibility between two people (just for fun!)"}
        </CardDescription>
        {isSharedResult && (
          <div className="mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/30">
            <p className="text-xs text-heading-accent font-medium flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              Shared Love Result
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        {}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-white flex items-center gap-2">
            <Palette className={`h-4 w-4 ${currentTheme.icon}`} />
            Choose Your Love Theme
            <div className={`ml-2 w-2 h-2 rounded-full bg-gradient-to-r ${currentTheme.gradient} animate-pulse`}></div>
          </Label>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className={`h-11 bg-white/10 border-2 ${currentTheme.border} text-white`}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-muted/95 backdrop-blur-xl border-gray-700/50 shadow-xl">
              {Object.entries(themes).map(([key, themeData]) => (
                <SelectItem key={key} value={key} className="text-white hover:bg-muted/50 focus:bg-muted/50">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${themeData.gradient}`}></div>
                    <span className="text-white">{themeData.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {}
          <div className={`p-3 rounded-lg bg-gradient-to-r ${currentTheme.bg} border ${currentTheme.border} mt-2`}>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentTheme.gradient}`}></div>
              <span>Current theme: {currentTheme.name}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name1" className="text-sm font-medium text-white flex items-center gap-2">
              <Star className="h-4 w-4" />
              First Name
            </Label>
            <Input
              id="name1"
              type="text"
              placeholder="Enter first name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              className={`h-11 text-sm bg-white/10 border-2 ${currentTheme.border} text-white placeholder:text-white/60 focus:border-2 focus:${currentTheme.border.replace('/30', '/50')}`}
            />
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Heart className={`h-6 w-6 ${currentTheme.icon} fill-current animate-pulse`} />
              <span className="text-white/80 text-sm font-medium">+</span>
              <Heart className={`h-6 w-6 ${currentTheme.icon} fill-current animate-pulse`} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name2" className="text-sm font-medium text-white flex items-center gap-2">
              <Gift className="h-4 w-4" />
              Second Name
            </Label>
            <Input
              id="name2"
              type="text"
              placeholder="Enter second name"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              className={`h-11 text-sm bg-white/10 border-2 ${currentTheme.border} text-white placeholder:text-white/60 focus:border-2 focus:${currentTheme.border.replace('/30', '/50')}`}
            />
          </div>

          <Button
            onClick={calculateLove}
            disabled={!name1 || !name2 || isCalculating}
            className={`w-full h-12 text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${currentTheme.button} text-white`}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner className="mr-2" />
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 animate-spin" />
                  Calculating Love...
                </span>
              </>
            ) : (
              <>
                <Heart className="mr-2 h-4 w-4" />
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Calculate Love Match
                </span>
              </>
            )}
          </Button>
        </div>

        {result && (
          <div className={`p-6 rounded-xl bg-gradient-to-br ${currentTheme.bg} border-2 ${currentTheme.border} space-y-4 animate-fade-in shadow-lg`}>
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Flower2 className={`h-5 w-5 ${currentTheme.icon}`} />
                <Sparkles className={`h-4 w-4 ${currentTheme.icon} animate-pulse`} />
                <Flower2 className={`h-5 w-5 ${currentTheme.icon}`} />
              </div>
              <p className="text-6xl">{result.emoji}</p>
              <p className="text-sm text-white/80 font-medium">
                {name1} + {name2}
              </p>
              <p className={`text-6xl font-black ${currentTheme.text}`}>{result.percentage}%</p>
              <p className="text-sm text-white/80 font-medium">Love Match</p>
            </div>

            <div className="p-4 rounded-lg bg-white/10 border border-white/20 backdrop-blur-xl">
              <p className="text-sm text-center text-white font-medium">{result.message}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={copyResult}
                variant="outline"
                className="flex-1 h-11 text-sm font-medium hover:bg-white/20 transition-all bg-white/10 border-white/30 text-white"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Text
                  </>
                )}
              </Button>
              <Button
                onClick={shareResult}
                className={`flex-1 h-11 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${currentTheme.button} text-white`}
              >
                <Heart className="mr-2 h-4 w-4" />
                Share URL
              </Button>
            </div>

            {}
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-white/70 text-center">
                💕 Share this URL to let others see your love match result!
              </p>
            </div>

            {}
            {isSharedResult && (
              <div className="mt-4">
                <Button
                  onClick={() => {
                    setName1('')
                    setName2('')
                    setResult(null)
                    setIsSharedResult(false)

                    window.history.replaceState({}, document.title, window.location.pathname)
                  }}
                  className={`w-full h-11 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white`}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Try Your Own Love Match
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
