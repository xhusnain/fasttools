"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  Calculator, 
  Plus, 
  Minus, 
  X, 
  Divide, 
  Copy,
  RotateCcw,
  AlertCircle,
  CheckCircle,
  Info,
  Zap
} from "lucide-react"

interface Fraction {
  numerator: number
  denominator: number
}

interface FractionResult {
  operation: string
  fraction1: Fraction
  fraction2: Fraction
  result: Fraction
  decimal: number
  percentage: number
  simplified: Fraction
  mixedNumber: string
  error?: string
}

export default function FractionCalculator() {
  const [operation, setOperation] = useState("add")
  const [fraction1, setFraction1] = useState<Fraction>({ numerator: 0, denominator: 0 })
  const [fraction2, setFraction2] = useState<Fraction>({ numerator: 0, denominator: 0 })
  const [result, setResult] = useState<FractionResult | null>(null)
  const [history, setHistory] = useState<FractionResult[]>([])
  const [showAdvanced, setShowAdvanced] = useState(false)

  // Helper function to find GCD
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b)
  }

  // Helper function to find LCM
  const lcm = (a: number, b: number): number => {
    return Math.abs(a * b) / gcd(a, b)
  }

  // Helper function to simplify fraction
  const simplifyFraction = (numerator: number, denominator: number): Fraction => {
    if (denominator === 0) return { numerator: 0, denominator: 1 }
    
    const divisor = gcd(Math.abs(numerator), Math.abs(denominator))
    return {
      numerator: numerator / divisor,
      denominator: denominator / divisor
    }
  }

  // Helper function to convert to mixed number
  const toMixedNumber = (numerator: number, denominator: number): string => {
    if (denominator === 0) return "Undefined"
    
    const whole = Math.floor(numerator / denominator)
    const remainder = numerator % denominator
    
    if (whole === 0) {
      return `${numerator}/${denominator}`
    } else if (remainder === 0) {
      return whole.toString()
    } else {
      return `${whole} ${Math.abs(remainder)}/${denominator}`
    }
  }

  // Helper function to format number
  const formatNumber = (num: number): string => {
    if (isNaN(num) || !isFinite(num)) return "N/A"
    return num.toFixed(6).replace(/\.?0+$/, '')
  }

  // Calculate fraction operations
  const calculateFraction = useCallback(async () => {
    try {
      const { numerator: n1, denominator: d1 } = fraction1
      const { numerator: n2, denominator: d2 } = fraction2

      // Check if inputs are empty or invalid - don't calculate if all fields are 0
      if (n1 === 0 && d1 === 0 && n2 === 0 && d2 === 0) {
        setResult(null)
        return
      }

      // Validation
      if (d1 === 0 || d2 === 0) {
        setResult({
          operation,
          fraction1,
          fraction2,
          result: { numerator: 0, denominator: 1 },
          decimal: 0,
          percentage: 0,
          simplified: { numerator: 0, denominator: 1 },
          mixedNumber: "Undefined",
          error: "Denominator cannot be zero"
        })
        return
      }

      let resultNumerator: number
      let resultDenominator: number

      switch (operation) {
        case "add":
          resultDenominator = lcm(d1, d2)
          resultNumerator = (n1 * (resultDenominator / d1)) + (n2 * (resultDenominator / d2))
          break
        case "subtract":
          resultDenominator = lcm(d1, d2)
          resultNumerator = (n1 * (resultDenominator / d1)) - (n2 * (resultDenominator / d2))
          break
        case "multiply":
          resultNumerator = n1 * n2
          resultDenominator = d1 * d2
          break
        case "divide":
          if (n2 === 0) {
            setResult({
              operation,
              fraction1,
              fraction2,
              result: { numerator: 0, denominator: 1 },
              decimal: 0,
              percentage: 0,
              simplified: { numerator: 0, denominator: 1 },
              mixedNumber: "Undefined",
              error: "Cannot divide by zero"
            })
            return
          }
          resultNumerator = n1 * d2
          resultDenominator = d1 * n2
          break
        default:
          return
      }

      const simplified = simplifyFraction(resultNumerator, resultDenominator)
      const decimal = simplified.numerator / simplified.denominator
      const percentage = decimal * 100
      const mixedNumber = toMixedNumber(simplified.numerator, simplified.denominator)

      const newResult: FractionResult = {
        operation,
        fraction1,
        fraction2,
        result: simplified,
        decimal,
        percentage,
        simplified,
        mixedNumber
      }

      setResult(newResult)
      
      // Add to history
      setHistory(prev => [newResult, ...prev.slice(0, 9)])
    } catch (error) {
      console.error("Calculation error:", error)
    }
  }, [operation, fraction1, fraction2])

  // Auto-calculate when inputs change
  useEffect(() => {
    const timer = setTimeout(() => {
      calculateFraction()
    }, 500)
    return () => clearTimeout(timer)
  }, [calculateFraction])

  const resetCalculator = () => {
    setFraction1({ numerator: 0, denominator: 0 })
    setFraction2({ numerator: 0, denominator: 0 })
    setResult(null)
    setHistory([])
  }

  const copyResult = () => {
    if (result) {
      const resultText = `Fraction Calculator Results:
Operation: ${operation.toUpperCase()}
${fraction1.numerator}/${fraction1.denominator} ${operation} ${fraction2.numerator}/${fraction2.denominator}
Result: ${result.result.numerator}/${result.result.denominator}
Decimal: ${result.decimal}
Percentage: ${result.percentage}%
Mixed Number: ${result.mixedNumber}`
      
      navigator.clipboard.writeText(resultText)
    }
  }

  const handleFractionChange = (fraction: "fraction1" | "fraction2", field: "numerator" | "denominator", value: string) => {
    const numValue = parseFloat(value) || 0
    if (fraction === "fraction1") {
      setFraction1(prev => ({ ...prev, [field]: numValue }))
    } else {
      setFraction2(prev => ({ ...prev, [field]: numValue }))
    }
  }

  const getOperationSymbol = (op: string) => {
    switch (op) {
      case "add": return "+"
      case "subtract": return "-"
      case "multiply": return "×"
      case "divide": return "÷"
      default: return "+"
    }
  }

  return (
    <div className="space-y-6">
      {/* Calculator Display */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Calculator className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Fraction Calculator</h2>
                <p className="text-sm text-muted-foreground">Add, subtract, multiply, and divide fractions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Zap className="h-3 w-3 mr-1" />
                Auto-calculate
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Operation Selection */}
          <div className="space-y-2">
            <Label htmlFor="operation">Operation</Label>
            <Select value={operation} onValueChange={setOperation}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select operation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="add">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Addition
                  </div>
                </SelectItem>
                <SelectItem value="subtract">
                  <div className="flex items-center gap-2">
                    <Minus className="h-4 w-4" />
                    Subtraction
                  </div>
                </SelectItem>
                <SelectItem value="multiply">
                  <div className="flex items-center gap-2">
                    <X className="h-4 w-4" />
                    Multiplication
                  </div>
                </SelectItem>
                <SelectItem value="divide">
                  <div className="flex items-center gap-2">
                    <Divide className="h-4 w-4" />
                    Division
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Fraction Inputs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* First Fraction */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">First Fraction</Label>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="numerator1">Numerator</Label>
                  <Input
                    id="numerator1"
                    type="number"
                    value={fraction1.numerator === 0 ? "" : fraction1.numerator}
                    onChange={(e) => handleFractionChange("fraction1", "numerator", e.target.value)}
                    className="h-10 md:h-12 text-center text-base md:text-lg font-semibold"
                    placeholder="Enter numerator"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-px bg-gray-300 dark:bg-gray-600"></div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="denominator1">Denominator</Label>
                  <Input
                    id="denominator1"
                    type="number"
                    value={fraction1.denominator === 0 ? "" : fraction1.denominator}
                    onChange={(e) => handleFractionChange("fraction1", "denominator", e.target.value)}
                    className="h-10 md:h-12 text-center text-base md:text-lg font-semibold"
                    placeholder="Enter denominator"
                  />
                </div>
              </div>
            </div>

            {/* Second Fraction */}
            <div className="space-y-4">
              <Label className="text-base font-semibold">Second Fraction</Label>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="numerator2">Numerator</Label>
                  <Input
                    id="numerator2"
                    type="number"
                    value={fraction2.numerator === 0 ? "" : fraction2.numerator}
                    onChange={(e) => handleFractionChange("fraction2", "numerator", e.target.value)}
                    className="h-10 md:h-12 text-center text-base md:text-lg font-semibold"
                    placeholder="Enter numerator"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-px bg-gray-300 dark:bg-gray-600"></div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="denominator2">Denominator</Label>
                  <Input
                    id="denominator2"
                    type="number"
                    value={fraction2.denominator === 0 ? "" : fraction2.denominator}
                    onChange={(e) => handleFractionChange("fraction2", "denominator", e.target.value)}
                    className="h-10 md:h-12 text-center text-base md:text-lg font-semibold"
                    placeholder="Enter denominator"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={calculateFraction} 
              className="flex-1 h-10 md:h-12 text-sm md:text-base font-semibold"
              size="lg"
            >
              <Calculator className="h-4 w-4 mr-2" />
              Calculate
            </Button>
            <Button variant="outline" onClick={resetCalculator} className="h-10 md:h-12 text-sm md:text-base">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            {result && (
              <Button variant="outline" onClick={copyResult} className="h-10 md:h-12 text-sm md:text-base">
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results Display */}
      {result && (
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              {result.error ? (
                <AlertCircle className="h-5 w-5 text-red-600" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-600" />
              )}
              <CardTitle className="text-xl">Fraction Calculation Results</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {result.error ? (
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-600 mb-2">Calculation Error</h3>
                <p className="text-red-600">{result.error}</p>
              </div>
            ) : (
              <>
                {/* Operation Display */}
                <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 border border-green-200 dark:border-green-700">
                  <div className="text-center text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                    {fraction1.numerator}/{fraction1.denominator} {getOperationSymbol(operation)} {fraction2.numerator}/{fraction2.denominator}
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {/* Simplified Result */}
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3 md:p-4 border border-green-200 dark:border-green-700">
                    <div className="text-xs md:text-sm font-medium text-green-700 dark:text-green-300 mb-2">Simplified Result</div>
                    <div className="text-lg md:text-2xl font-bold text-green-800 dark:text-green-200 text-center">
                      {result.result.numerator}/{result.result.denominator}
                    </div>
                  </div>

                  {/* Decimal Result */}
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3 md:p-4 border border-green-200 dark:border-green-700">
                    <div className="text-xs md:text-sm font-medium text-green-700 dark:text-green-300 mb-2">Decimal</div>
                    <div className="text-lg md:text-2xl font-bold text-green-800 dark:text-green-200 text-center">
                      {formatNumber(result.decimal)}
                    </div>
                  </div>

                  {/* Percentage Result */}
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3 md:p-4 border border-green-200 dark:border-green-700">
                    <div className="text-xs md:text-sm font-medium text-green-700 dark:text-green-300 mb-2">Percentage</div>
                    <div className="text-lg md:text-2xl font-bold text-green-800 dark:text-green-200 text-center">
                      {formatNumber(result.percentage)}%
                    </div>
                  </div>

                  {/* Mixed Number */}
                  <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3 md:p-4 border border-green-200 dark:border-green-700">
                    <div className="text-xs md:text-sm font-medium text-green-700 dark:text-green-300 mb-2">Mixed Number</div>
                    <div className="text-lg md:text-2xl font-bold text-green-800 dark:text-green-200 text-center">
                      {result.mixedNumber}
                    </div>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {/* History */}
      {history.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Calculation History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {history.map((calc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex-1">
                    <div className="text-sm font-medium">
                      {calc.fraction1.numerator}/{calc.fraction1.denominator} {getOperationSymbol(calc.operation)} {calc.fraction2.numerator}/{calc.fraction2.denominator}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      = {calc.result.numerator}/{calc.result.denominator} ({formatNumber(calc.decimal)})
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const resultText = `Fraction: ${calc.fraction1.numerator}/${calc.fraction1.denominator} ${getOperationSymbol(calc.operation)} ${calc.fraction2.numerator}/${calc.fraction2.denominator} = ${calc.result.numerator}/${calc.result.denominator}`
                      navigator.clipboard.writeText(resultText)
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
