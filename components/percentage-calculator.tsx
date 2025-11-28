"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GButton } from "@/components/globalcomponents/gbutton"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Percent, Copy, Check, Calculator, TrendingUp, TrendingDown, Target, DollarSign, BarChart3, PieChart, ArrowUp, ArrowDown, Minus, Plus } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

type CalculationType = "basic" | "increase" | "decrease" | "difference" | "markup" | "margin" | "compound"

interface CalculationResult {
  type: string
  result: number
  originalValue: number
  percentage: number
  newValue?: number
  difference?: number
  formula: string
  explanation: string
}

export function PercentageCalculator() {
  const [calculationType, setCalculationType] = useState<CalculationType>("basic")
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [percentage, setPercentage] = useState("")
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculatePercentage = () => {
    setIsCalculating(true)

    setTimeout(() => {
      let calculationResult: CalculationResult

      switch (calculationType) {
        case "basic":
          if (!value1 || !percentage) return
          const v1 = Number.parseFloat(value1)
          const p1 = Number.parseFloat(percentage)
          const res1 = (v1 * p1) / 100
          calculationResult = {
            type: "Basic Percentage",
            result: Number.parseFloat(res1.toFixed(2)),
            originalValue: v1,
            percentage: p1,
            formula: `${p1}% × ${v1} = ${res1.toFixed(2)}`,
            explanation: `${p1}% of ${v1} equals ${res1.toFixed(2)}`
          }
          break

        case "increase":
          if (!value1 || !percentage) return
          const v2 = Number.parseFloat(value1)
          const p2 = Number.parseFloat(percentage)
          const increase = (v2 * p2) / 100
          const newVal = v2 + increase
          calculationResult = {
            type: "Percentage Increase",
            result: Number.parseFloat(increase.toFixed(2)),
            originalValue: v2,
            percentage: p2,
            newValue: Number.parseFloat(newVal.toFixed(2)),
            difference: Number.parseFloat(increase.toFixed(2)),
            formula: `${v2} + (${v2} × ${p2}%) = ${newVal.toFixed(2)}`,
            explanation: `${v2} increased by ${p2}% equals ${newVal.toFixed(2)}`
          }
          break

        case "decrease":
          if (!value1 || !percentage) return
          const v3 = Number.parseFloat(value1)
          const p3 = Number.parseFloat(percentage)
          const decrease = (v3 * p3) / 100
          const newVal2 = v3 - decrease
          calculationResult = {
            type: "Percentage Decrease",
            result: Number.parseFloat(decrease.toFixed(2)),
            originalValue: v3,
            percentage: p3,
            newValue: Number.parseFloat(newVal2.toFixed(2)),
            difference: Number.parseFloat(decrease.toFixed(2)),
            formula: `${v3} - (${v3} × ${p3}%) = ${newVal2.toFixed(2)}`,
            explanation: `${v3} decreased by ${p3}% equals ${newVal2.toFixed(2)}`
          }
          break

        case "difference":
          if (!value1 || !value2) return
          const v4 = Number.parseFloat(value1)
          const v5 = Number.parseFloat(value2)
          const diff = Math.abs(v5 - v4)
          const avg = (v4 + v5) / 2
          const percentDiff = (diff / avg) * 100
          calculationResult = {
            type: "Percentage Difference",
            result: Number.parseFloat(percentDiff.toFixed(2)),
            originalValue: v4,
            percentage: Number.parseFloat(percentDiff.toFixed(2)),
            newValue: v5,
            difference: Number.parseFloat(diff.toFixed(2)),
            formula: `|${v4} - ${v5}| / ((${v4} + ${v5}) / 2) × 100 = ${percentDiff.toFixed(2)}%`,
            explanation: `The percentage difference between ${v4} and ${v5} is ${percentDiff.toFixed(2)}%`
          }
          break

        case "markup":
          if (!value1 || !percentage) return
          const cost = Number.parseFloat(value1)
          const markupPercent = Number.parseFloat(percentage)
          const markup = (cost * markupPercent) / 100
          const sellingPrice = cost + markup
          calculationResult = {
            type: "Markup Calculation",
            result: Number.parseFloat(markup.toFixed(2)),
            originalValue: cost,
            percentage: markupPercent,
            newValue: Number.parseFloat(sellingPrice.toFixed(2)),
            difference: Number.parseFloat(markup.toFixed(2)),
            formula: `Cost: ${cost}, Markup: ${markupPercent}%, Selling Price: ${sellingPrice.toFixed(2)}`,
            explanation: `A ${markupPercent}% markup on cost ${cost} results in selling price ${sellingPrice.toFixed(2)}`
          }
          break

        case "margin":
          if (!value1 || !percentage) return
          const sellingPriceMargin = Number.parseFloat(value1)
          const marginPercent = Number.parseFloat(percentage)
          const margin = (sellingPriceMargin * marginPercent) / 100
          const costMargin = sellingPriceMargin - margin
          calculationResult = {
            type: "Margin Calculation",
            result: Number.parseFloat(margin.toFixed(2)),
            originalValue: sellingPriceMargin,
            percentage: marginPercent,
            newValue: Number.parseFloat(costMargin.toFixed(2)),
            difference: Number.parseFloat(margin.toFixed(2)),
            formula: `Selling Price: ${sellingPriceMargin}, Margin: ${marginPercent}%, Cost: ${costMargin.toFixed(2)}`,
            explanation: `A ${marginPercent}% margin on selling price ${sellingPriceMargin} results in cost ${costMargin.toFixed(2)}`
          }
          break

        case "compound":
          if (!value1 || !percentage || !value2) return
          const principal = Number.parseFloat(value1)
          const rate = Number.parseFloat(percentage)
          const time = Number.parseFloat(value2)
          const compound = principal * Math.pow(1 + (rate / 100), time)
          const interest = compound - principal
          calculationResult = {
            type: "Compound Interest",
            result: Number.parseFloat(compound.toFixed(2)),
            originalValue: principal,
            percentage: rate,
            newValue: Number.parseFloat(compound.toFixed(2)),
            difference: Number.parseFloat(interest.toFixed(2)),
            formula: `${principal} × (1 + ${rate}%)^${time} = ${compound.toFixed(2)}`,
            explanation: `Principal ${principal} at ${rate}% for ${time} periods = ${compound.toFixed(2)}`
          }
          break

        default:
          return
      }

      setResult(calculationResult)
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (result === null) return
    const text = `${result.type}: ${result.explanation}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getCalculationTypeInfo = () => {
    switch (calculationType) {
      case "basic":
        return { title: "Basic Percentage", description: "Find what percentage of a number is", icon: Percent }
      case "increase":
        return { title: "Percentage Increase", description: "Calculate increase by percentage", icon: TrendingUp }
      case "decrease":
        return { title: "Percentage Decrease", description: "Calculate decrease by percentage", icon: TrendingDown }
      case "difference":
        return { title: "Percentage Difference", description: "Find difference between two values", icon: Target }
      case "markup":
        return { title: "Markup Calculation", description: "Calculate selling price with markup", icon: DollarSign }
      case "margin":
        return { title: "Margin Calculation", description: "Calculate cost from selling price", icon: BarChart3 }
      case "compound":
        return { title: "Compound Interest", description: "Calculate compound interest", icon: PieChart }
      default:
        return { title: "Percentage Calculator", description: "Advanced percentage calculations", icon: Calculator }
    }
  }

  const getInputLabels = () => {
    switch (calculationType) {
      case "basic":
        return { label1: "Percentage (%)", label2: "Of Value", placeholder1: "25", placeholder2: "1000" }
      case "increase":
        return { label1: "Original Value", label2: "Increase by (%)", placeholder1: "1000", placeholder2: "10" }
      case "decrease":
        return { label1: "Original Value", label2: "Decrease by (%)", placeholder1: "1000", placeholder2: "10" }
      case "difference":
        return { label1: "Value 1", label2: "Value 2", placeholder1: "100", placeholder2: "120" }
      case "markup":
        return { label1: "Cost Price", label2: "Markup (%)", placeholder1: "100", placeholder2: "25" }
      case "margin":
        return { label1: "Selling Price", label2: "Margin (%)", placeholder1: "125", placeholder2: "20" }
      case "compound":
        return { label1: "Principal Amount", label2: "Interest Rate (%)", label3: "Time Periods", placeholder1: "1000", placeholder2: "5", placeholder3: "3" }
      default:
        return { label1: "Value 1", label2: "Value 2", placeholder1: "100", placeholder2: "25" }
    }
  }

  const isFormValid = () => {
    switch (calculationType) {
      case "basic":
      case "increase":
      case "decrease":
      case "markup":
      case "margin":
        return value1 && percentage
      case "difference":
        return value1 && value2
      case "compound":
        return value1 && percentage && value2
      default:
        return false
    }
  }

  const typeInfo = getCalculationTypeInfo()
  const inputLabels = getInputLabels()
  const IconComponent = typeInfo.icon

  return (
    <div className="space-y-6">
      {/* Calculation Type Selector */}
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <IconComponent className="h-5 w-5 text-foreground" />
            </div>
            {typeInfo.title}
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground">{typeInfo.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Calculation Type Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { type: "basic", label: "Basic", icon: Percent },
              { type: "increase", label: "Increase", icon: TrendingUp },
              { type: "decrease", label: "Decrease", icon: TrendingDown },
              { type: "difference", label: "Difference", icon: Target },
              { type: "markup", label: "Markup", icon: DollarSign },
              { type: "margin", label: "Margin", icon: BarChart3 },
              { type: "compound", label: "Compound", icon: PieChart }
            ].map(({ type, label, icon: Icon }) => (
              <GButton
                key={type}
                variant={calculationType === type ? "default" : "outline"}
                onClick={() => setCalculationType(type as CalculationType)}
                className={`h-10 text-xs sm:text-sm font-medium transition-all duration-300 ${calculationType === type
                  ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg border-primary"
                  : "hover:bg-secondary border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{label}</span>
              </GButton>
            ))}
          </div>

          {/* Input Fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="value1" className="text-sm font-medium flex items-center gap-2 text-heading-accent">
                <div className="p-1 bg-secondary-accent/10 rounded">
                  <Calculator className="h-3 w-3 text-heading-accent" />
                </div>
                {inputLabels.label1}
              </Label>
              <Input
                id="value1"
                type="number"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder={inputLabels.placeholder1}
                className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary hover:border-primary/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="percentage" className="text-sm font-medium flex items-center gap-2 text-heading-accent">
                <div className="p-1 bg-secondary-accent/10 rounded">
                  <Percent className="h-3 w-3 text-heading-accent" />
                </div>
                {inputLabels.label2}
              </Label>
              <Input
                id="percentage"
                type="number"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                placeholder={inputLabels.placeholder2}
                className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary hover:border-primary/50"
              />
            </div>

            {calculationType === "compound" && (
              <div className="space-y-2">
                <Label htmlFor="value2" className="text-sm font-medium flex items-center gap-2 text-heading-accent">
                  <div className="p-1 bg-secondary-accent/10 rounded">
                    <Target className="h-3 w-3 text-heading-accent" />
                  </div>
                  {inputLabels.label3}
                </Label>
                <Input
                  id="value2"
                  type="number"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                  placeholder={inputLabels.placeholder3}
                  className="h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary hover:border-primary/50"
                />
              </div>
            )}
          </div>

          <GButton
            onClick={calculatePercentage}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
            disabled={!isFormValid() || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculating...</span>
                <span className="sm:hidden">Calc...</span>
              </>
            ) : (
              <>
                <Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculate {typeInfo.title}</span>
                <span className="sm:hidden">Calculate</span>
              </>
            )}
          </GButton>
        </CardContent>
      </Card>

      {/* Results */}
      {result && !isCalculating && (
        <Card className="shadow-lg border-border animate-fade-in-up bg-card">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-foreground">
              <div className="p-2 bg-primary/10 rounded-lg">
                <IconComponent className="h-5 w-5 text-foreground" />
              </div>
              {result.type} Result
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">{result.explanation}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Result Display */}
            <div className="text-center p-6 sm:p-8 rounded-xl bg-card border border-primary/20">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {result.result.toLocaleString()}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {result.type === "Basic Percentage" && `${result.percentage}% of ${result.originalValue}`}
                {result.type === "Percentage Increase" && `Increase: ${result.difference?.toLocaleString()}`}
                {result.type === "Percentage Decrease" && `Decrease: ${result.difference?.toLocaleString()}`}
                {result.type === "Percentage Difference" && `Difference: ${result.difference?.toLocaleString()}`}
                {result.type === "Markup Calculation" && `Markup: ${result.difference?.toLocaleString()}`}
                {result.type === "Margin Calculation" && `Margin: ${result.difference?.toLocaleString()}`}
                {result.type === "Compound Interest" && `Total: ${result.newValue?.toLocaleString()}`}
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-3 p-4 sm:p-6 bg-card rounded-lg border border-border">
              <div className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-heading-accent">Calculation Details</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-accent">
                  <span className="text-sm text-foreground">Original Value</span>
                  <span className="font-semibold text-sm text-foreground">{result.originalValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-secondary-accent">
                  <span className="text-sm text-heading-accent">Percentage</span>
                  <span className="font-semibold text-sm text-heading-accent">{result.percentage}%</span>
                </div>
                {result.newValue && (
                  <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-primary">
                    <span className="text-sm text-foreground">Final Value</span>
                    <span className="font-semibold text-sm text-foreground">{result.newValue.toLocaleString()}</span>
                  </div>
                )}
                {result.difference && (
                  <div className="flex justify-between items-center p-3 bg-card rounded-lg border border-primary">
                    <span className="text-sm text-foreground">Difference</span>
                    <span className="font-semibold text-sm text-foreground">{result.difference.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Formula Display */}
            <div className="p-4 sm:p-6 bg-card rounded-xl border border-border">
              <div className="text-sm sm:text-base font-semibold text-heading-accent mb-2">Formula Used:</div>
              <div className="text-xs sm:text-sm text-foreground font-mono bg-card border border-border p-2 rounded">
                {result.formula}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <GButton
                onClick={copyResult}
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-300 border border-secondary-accent hover:bg-secondary text-heading-accent bg-card"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Copied!</span>
                    <span className="sm:hidden">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Copy Result</span>
                    <span className="sm:hidden">Copy</span>
                  </>
                )}
              </GButton>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
