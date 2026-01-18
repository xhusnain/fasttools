"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GBadge } from "@/ui/gbadge"

import {
  Calculator,
  Triangle,
  Ruler,
  Info,
  Copy,
  RotateCcw,
  AlertCircle,
  CheckCircle,
  Zap
} from "lucide-react"

import { TriangleData, TriangleResult } from "@/types/calculator-types/triangle-calculator.types"

export default function TriangleCalculator() {
  const [inputData, setInputData] = useState<TriangleData>({
    sideA: null,
    sideB: null,
    sideC: null,
    angleA: null,
    angleB: null,
    angleC: null
  })

  const [angleUnit, setAngleUnit] = useState<"degree" | "radian">("degree")
  const [result, setResult] = useState<TriangleResult | null>(null)
  const [history, setHistory] = useState<TriangleResult[]>([])
  const [isCalculating, setIsCalculating] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const calculatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (calculatorRef.current) {
      calculatorRef.current.focus()
    }
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'Enter':
            e.preventDefault()
            calculateTriangle()
            break
          case 'r':
            e.preventDefault()
            resetCalculator()
            break
          case 'c':
            e.preventDefault()
            if (result) copyResult()
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [result])

  const toRadians = (degrees: number) => degrees * (Math.PI / 180)
  const toDegrees = (radians: number) => radians * (180 / Math.PI)

  const calculateTriangle = useCallback(async () => {
    setIsCalculating(true)

    try {
      const data = { ...inputData }

      // Convert angles to radians for calculations
      if (angleUnit === "degree") {
        if (data.angleA !== null) data.angleA = toRadians(data.angleA)
        if (data.angleB !== null) data.angleB = toRadians(data.angleB)
        if (data.angleC !== null) data.angleC = toRadians(data.angleC)
      }

      const result = await calculateTriangleValues(data)
      setResult(result)

      if (result.isValid) {
        setHistory(prev => [result, ...prev.slice(0, 9)]) // Keep last 10 calculations
      }
    } catch (error) {
      console.error('Calculation error:', error)
    } finally {
      setIsCalculating(false)
    }
  }, [inputData, angleUnit])

  const calculateTriangleValues = async (data: TriangleData): Promise<TriangleResult> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const { sideA, sideB, sideC, angleA, angleB, angleC } = data

          // Count provided values
          const providedSides = [sideA, sideB, sideC].filter(v => v !== null && v > 0).length
          const providedAngles = [angleA, angleB, angleC].filter(v => v !== null && v > 0).length

          if (providedSides + providedAngles < 3) {
            resolve({
              sides: { a: 0, b: 0, c: 0 },
              angles: { A: 0, B: 0, C: 0 },
              area: 0,
              perimeter: 0,
              semiperimeter: 0,
              height: { a: 0, b: 0, c: 0 },
              median: { a: 0, b: 0, c: 0 },
              inradius: 0,
              circumradius: 0,
              triangleType: "Invalid",
              isValid: false,
              errorMessage: "Please provide at least 3 values including at least one side"
            })
            return
          }

          let a = sideA || 0, b = sideB || 0, c = sideC || 0
          let A = angleA || 0, B = angleB || 0, C = angleC || 0

          // Solve triangle based on provided information
          if (providedSides === 3) {
            // SSS - All three sides provided
            // Check triangle inequality first
            if (a + b <= c || a + c <= b || b + c <= a) {
              resolve({
                sides: { a, b, c },
                angles: { A: NaN, B: NaN, C: NaN },
                area: NaN,
                perimeter: a + b + c,
                semiperimeter: (a + b + c) / 2,
                height: { a: NaN, b: NaN, c: NaN },
                median: { a: NaN, b: NaN, c: NaN },
                inradius: NaN,
                circumradius: NaN,
                triangleType: "Invalid",
                isValid: false,
                errorMessage: "Triangle inequality violated: sum of any two sides must be greater than the third side"
              })
              return
            }

            // Calculate angles using Law of Cosines
            const cosA = (b * b + c * c - a * a) / (2 * b * c)
            const cosB = (a * a + c * c - b * b) / (2 * a * c)
            const cosC = (a * a + b * b - c * c) / (2 * a * b)

            // Check if angles are valid (cosine values must be between -1 and 1)
            if (Math.abs(cosA) > 1 || Math.abs(cosB) > 1 || Math.abs(cosC) > 1) {
              resolve({
                sides: { a, b, c },
                angles: { A: NaN, B: NaN, C: NaN },
                area: NaN,
                perimeter: a + b + c,
                semiperimeter: (a + b + c) / 2,
                height: { a: NaN, b: NaN, c: NaN },
                median: { a: NaN, b: NaN, c: NaN },
                inradius: NaN,
                circumradius: NaN,
                triangleType: "Invalid",
                isValid: false,
                errorMessage: "Invalid triangle: angles cannot be calculated"
              })
              return
            }

            A = Math.acos(cosA)
            B = Math.acos(cosB)
            C = Math.acos(cosC)
          } else if (providedSides === 2 && providedAngles === 1) {
            // SAS or SSA
            if (sideA && sideB && angleC) {
              // SAS: a, b, C
              c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C))
              A = Math.acos((b * b + c * c - a * a) / (2 * b * c))
              B = Math.acos((a * a + c * c - b * b) / (2 * a * c))
            } else if (sideA && sideB && angleA) {
              // SSA: a, b, A
              B = Math.asin((b * Math.sin(A)) / a)
              C = Math.PI - A - B
              c = (a * Math.sin(C)) / Math.sin(A)
            } else if (sideA && sideC && angleB) {
              // SSA: a, c, B
              A = Math.asin((a * Math.sin(B)) / b)
              C = Math.PI - A - B
              b = (a * Math.sin(B)) / Math.sin(A)
            }
          } else if (providedSides === 1 && providedAngles === 2) {
            // ASA or AAS
            if (sideA && angleB && angleC) {
              // ASA: a, B, C
              A = Math.PI - B - C
              b = (a * Math.sin(B)) / Math.sin(A)
              c = (a * Math.sin(C)) / Math.sin(A)
            } else if (sideA && angleA && angleB) {
              // AAS: a, A, B
              C = Math.PI - A - B
              b = (a * Math.sin(B)) / Math.sin(A)
              c = (a * Math.sin(C)) / Math.sin(A)
            }
          }

          // Convert angles back to degrees if needed
          if (angleUnit === "degree") {
            A = toDegrees(A)
            B = toDegrees(B)
            C = toDegrees(C)
          }

          // Calculate additional properties
          const perimeter = a + b + c
          const semiperimeter = perimeter / 2

          // Calculate area using Heron's formula with validation
          const heronValue = semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c)
          let area = 0
          if (heronValue > 0) {
            area = Math.sqrt(heronValue)
          } else {
            // If Heron's formula fails, try base × height method
            // For now, set area to NaN if invalid
            area = NaN
          }

          // Heights (with validation)
          const heightA = (a > 0 && !isNaN(area)) ? (2 * area) / a : NaN
          const heightB = (b > 0 && !isNaN(area)) ? (2 * area) / b : NaN
          const heightC = (c > 0 && !isNaN(area)) ? (2 * area) / c : NaN

          // Medians (with validation)
          const medianA = (a > 0 && b > 0 && c > 0) ? 0.5 * Math.sqrt(2 * b * b + 2 * c * c - a * a) : NaN
          const medianB = (a > 0 && b > 0 && c > 0) ? 0.5 * Math.sqrt(2 * a * a + 2 * c * c - b * b) : NaN
          const medianC = (a > 0 && b > 0 && c > 0) ? 0.5 * Math.sqrt(2 * a * a + 2 * b * b - c * c) : NaN

          // Inradius and circumradius (with validation)
          const inradius = (!isNaN(area) && semiperimeter > 0) ? area / semiperimeter : NaN
          const circumradius = (!isNaN(area) && area > 0) ? (a * b * c) / (4 * area) : NaN

          // Determine triangle type
          let triangleType = "Scalene"
          if (Math.abs(a - b) < 0.001 && Math.abs(b - c) < 0.001) {
            triangleType = "Equilateral"
          } else if (Math.abs(a - b) < 0.001 || Math.abs(b - c) < 0.001 || Math.abs(a - c) < 0.001) {
            triangleType = "Isosceles"
          }

          // Check for right triangle
          const angles = [A, B, C]
          if (angles.some(angle => Math.abs(angle - 90) < 0.001)) {
            triangleType += " (Right)"
          } else if (angles.some(angle => angle > 90)) {
            triangleType += " (Obtuse)"
          } else {
            triangleType += " (Acute)"
          }

          resolve({
            sides: { a: Number(a.toFixed(6)), b: Number(b.toFixed(6)), c: Number(c.toFixed(6)) },
            angles: { A: Number(A.toFixed(6)), B: Number(B.toFixed(6)), C: Number(C.toFixed(6)) },
            area: Number(area.toFixed(6)),
            perimeter: Number(perimeter.toFixed(6)),
            semiperimeter: Number(semiperimeter.toFixed(6)),
            height: {
              a: Number(heightA.toFixed(6)),
              b: Number(heightB.toFixed(6)),
              c: Number(heightC.toFixed(6))
            },
            median: {
              a: Number(medianA.toFixed(6)),
              b: Number(medianB.toFixed(6)),
              c: Number(medianC.toFixed(6))
            },
            inradius: Number(inradius.toFixed(6)),
            circumradius: Number(circumradius.toFixed(6)),
            triangleType,
            isValid: true
          })
        } catch (error) {
          resolve({
            sides: { a: 0, b: 0, c: 0 },
            angles: { A: 0, B: 0, C: 0 },
            area: 0,
            perimeter: 0,
            semiperimeter: 0,
            height: { a: 0, b: 0, c: 0 },
            median: { a: 0, b: 0, c: 0 },
            inradius: 0,
            circumradius: 0,
            triangleType: "Invalid",
            isValid: false,
            errorMessage: "Invalid triangle configuration"
          })
        }
      }, 100)
    })
  }

  const resetCalculator = () => {
    setInputData({
      sideA: null,
      sideB: null,
      sideC: null,
      angleA: null,
      angleB: null,
      angleC: null
    })
    setResult(null)
  }

  const copyResult = () => {
    if (!result) return

    const resultText = `Triangle Calculator Results:
Sides: a=${result.sides.a}, b=${result.sides.b}, c=${result.sides.c}
Angles: A=${result.angles.A}°, B=${result.angles.B}°, C=${result.angles.C}°
Area: ${result.area}
Perimeter: ${result.perimeter}
Type: ${result.triangleType}`

    void navigator.clipboard.writeText(resultText)
  }

  const clearHistory = () => {
    setHistory([])
  }

  const formatValue = (value: number | null) => {
    if (value === null) return ""
    return value.toString()
  }

  const formatNumber = (value: number) => {
    if (isNaN(value) || value === null || value === undefined) return "N/A"
    return value.toFixed(6)
  }

  const handleInputChange = (field: keyof TriangleData, value: string) => {
    const numValue = value === "" ? null : parseFloat(value)
    setInputData(prev => ({ ...prev, [field]: numValue }))
  }

  // Auto-calculate when enough values are provided
  useEffect(() => {
    const { sideA, sideB, sideC, angleA, angleB, angleC } = inputData
    const providedSides = [sideA, sideB, sideC].filter(v => v !== null && v > 0).length
    const providedAngles = [angleA, angleB, angleC].filter(v => v !== null && v > 0).length

    if (providedSides + providedAngles >= 3 && providedSides >= 1) {
      // Debounce the calculation to avoid too many calls
      const timeoutId = setTimeout(() => {
        calculateTriangle()
      }, 500)

      return () => clearTimeout(timeoutId)
    }
  }, [inputData, calculateTriangle])

  return (
    <div
      ref={calculatorRef}
      tabIndex={0}
      className="space-y-4 focus:outline-none"
      onKeyDown={(e) => {
        if (e.key === 'Tab') {
          e.preventDefault()
        }
      }}
    >
      {/* Calculator Display */}
      <GCard className="bg-card border-border">
        <GCardHeader className="pb-2 px-3 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center">
                <Triangle className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-foreground">Triangle Calculator</h2>
                <p className="text-xs text-muted-foreground">Advanced triangle calculations</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GBadge variant="secondary" className="bg-primary/10 text-foreground border-primary/20 text-[10px] h-5">
                <Zap className="h-3 w-3 mr-1" />
                Advanced
              </GBadge>
            </div>
          </div>
        </GCardHeader>
        <GCardContent className="space-y-4 px-3 sm:px-6">
          {/* GInput Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sides */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold flex items-center gap-1.5 text-heading-accent">
                <Ruler className="h-3.5 w-3.5" />
                Sides
              </h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <GLabel htmlFor="sideA" className="text-[10px] font-medium text-muted-foreground">Side a</GLabel>
                  <GInput
                    id="sideA"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.sideA)}
                    onChange={(e) => handleInputChange('sideA', e.target.value)}
                    className="text-center h-8 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="sideB" className="text-[10px] font-medium text-muted-foreground">Side b</GLabel>
                  <GInput
                    id="sideB"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.sideB)}
                    onChange={(e) => handleInputChange('sideB', e.target.value)}
                    className="text-center h-8 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="sideC" className="text-[10px] font-medium text-muted-foreground">Side c</GLabel>
                  <GInput
                    id="sideC"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.sideC)}
                    onChange={(e) => handleInputChange('sideC', e.target.value)}
                    className="text-center h-8 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Angles */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold flex items-center gap-1.5 text-heading-accent">
                <Calculator className="h-3.5 w-3.5" />
                Angles
              </h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <GLabel htmlFor="angleA" className="text-[10px] font-medium text-muted-foreground">Angle A</GLabel>
                  <GInput
                    id="angleA"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.angleA)}
                    onChange={(e) => handleInputChange('angleA', e.target.value)}
                    className="text-center h-8 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="angleB" className="text-[10px] font-medium text-muted-foreground">Angle B</GLabel>
                  <GInput
                    id="angleB"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.angleB)}
                    onChange={(e) => handleInputChange('angleB', e.target.value)}
                    className="text-center h-8 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="angleC" className="text-[10px] font-medium text-muted-foreground">Angle C</GLabel>
                  <GInput
                    id="angleC"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.angleC)}
                    onChange={(e) => handleInputChange('angleC', e.target.value)}
                    className="text-center h-8 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Angle Unit Selection */}
          <div className="flex items-center gap-2">
            <GLabel htmlFor="angleUnit" className="text-xs text-muted-foreground">Angle Unit:</GLabel>
            <GSelect value={angleUnit} onValueChange={(value: "degree" | "radian") => setAngleUnit(value)}>
              <GSelectTrigger className="w-28 h-8 text-xs border-border bg-background text-foreground">
                <GSelectValue />
              </GSelectTrigger>
              <GSelectContent>
                <GSelectItem value="degree">Degree °</GSelectItem>
                <GSelectItem value="radian">Radian</GSelectItem>
              </GSelectContent>
            </GSelect>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <GButton
              onClick={calculateTriangle}
              disabled={isCalculating}
              className="flex-1 min-w-[100px] h-9 text-xs font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground"
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1"></div>
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="h-3 w-3 mr-1" />
                  Calculate
                </>
              )}
            </GButton>
            <GButton variant="outline" onClick={resetCalculator} className="h-9 text-xs border-border bg-card text-foreground hover:bg-secondary">
              <RotateCcw className="h-3 w-3 mr-1" />
              Reset
            </GButton>
            {result && (
              <GButton variant="outline" onClick={copyResult} className="h-9 text-xs border-border bg-card text-foreground hover:bg-secondary">
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </GButton>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-card border border-border rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-heading-accent mt-0.5 flex-shrink-0" />
              <div className="text-xs">
                <p className="font-medium text-heading-accent mb-1">Instructions:</p>
                <p className="text-muted-foreground">
                  Provide 3 values including at least one side. When radians are selected, angles can be entered as π/2, π/4, etc.
                </p>
              </div>
            </div>
          </div>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && (
        <GCard className="bg-card border-border">
          <GCardHeader className="pb-2 px-3 sm:px-6">
            <GCardTitle className="flex items-center gap-2 text-base text-foreground">
              {result.isValid ? (
                <CheckCircle className="h-4 w-4 text-heading-accent" />
              ) : (
                <AlertCircle className="h-4 w-4 text-foreground" />
              )}
              Triangle Results
            </GCardTitle>
          </GCardHeader>
          <GCardContent className="px-3 sm:px-6">
            {result.isValid ? (
              <div className="space-y-4">
                {/* Basic Properties */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
                    <h3 className="text-sm font-semibold text-heading-accent mb-2">Sides</h3>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Side a:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.sides.a)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Side b:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.sides.b)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Side c:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.sides.c)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
                    <h3 className="text-sm font-semibold text-heading-accent mb-2">Angles</h3>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Angle A:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.angles.A)}°</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Angle B:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.angles.B)}°</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Angle C:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.angles.C)}°</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advanced Properties */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
                    <h3 className="text-sm font-semibold text-heading-accent mb-2">Area & Perimeter</h3>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Area:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.area)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Perimeter:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.perimeter)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Semiperimeter:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.semiperimeter)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
                    <h3 className="text-sm font-semibold text-heading-accent mb-2">Radii</h3>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Inradius:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.inradius)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Circumradius:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.circumradius)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Heights and Medians */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
                    <h3 className="text-sm font-semibold text-heading-accent mb-2">Heights</h3>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Height to a:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.height.a)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Height to b:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.height.b)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Height to c:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.height.c)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
                    <h3 className="text-sm font-semibold text-heading-accent mb-2">Medians</h3>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Median to a:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.median.a)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Median to b:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.median.b)}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Median to c:</span>
                        <span className="font-mono text-foreground">{formatNumber(result.median.c)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Triangle Type */}
                <div className="bg-card border border-border rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Triangle className="h-3.5 w-3.5 text-heading-accent" />
                    <span className="font-semibold text-heading-accent text-sm">Triangle Type:</span>
                  </div>
                  <p className="text-foreground font-medium text-sm">{result.triangleType}</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <AlertCircle className="h-10 w-10 text-foreground mx-auto mb-3" />
                <h3 className="text-base font-semibold text-foreground mb-2">Invalid Triangle</h3>
                <p className="text-foreground text-sm">{result.errorMessage}</p>
              </div>
            )}
          </GCardContent>
        </GCard>
      )}

      {/* History */}
      {history.length > 0 && (
        <GCard className="bg-card border-border">
          <GCardHeader className="pb-2 px-3 sm:px-6">
            <div className="flex items-center justify-between">
              <GCardTitle className="flex items-center gap-2 text-base text-foreground">
                <Calculator className="h-4 w-4" />
                Recent Calculations
              </GCardTitle>
              <GButton variant="outline" size="sm" onClick={clearHistory} className="h-8 text-xs border-border bg-card text-foreground hover:bg-secondary">
                Clear
              </GButton>
            </div>
          </GCardHeader>
          <GCardContent className="px-3 sm:px-6">
            <div className="space-y-2">
              {history.slice(0, 5).map((calc, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-card rounded-lg border border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                      <span className="text-[10px] font-semibold text-foreground">{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-medium text-xs text-foreground">
                        {calc.sides.a} × {calc.sides.b} × {calc.sides.c}
                      </div>
                      <div className="text-[10px] text-muted-foreground">
                        Area: {calc.area} | Type: {calc.triangleType}
                      </div>
                    </div>
                  </div>
                  <GButton
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const resultText = `Triangle: a=${calc.sides.a}, b=${calc.sides.b}, c=${calc.sides.c}, Area=${calc.area}`
                      void navigator.clipboard.writeText(resultText)
                    }}
                    className="h-7 w-7 p-0 text-muted-foreground hover:text-heading-accent hover:bg-secondary"
                  >
                    <Copy className="h-3 w-3" />
                  </GButton>
                </div>
              ))}
            </div>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
