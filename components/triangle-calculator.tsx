"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
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

interface TriangleData {
  sideA: number | null
  sideB: number | null
  sideC: number | null
  angleA: number | null
  angleB: number | null
  angleC: number | null
}

interface TriangleResult {
  sides: {
    a: number
    b: number
    c: number
  }
  angles: {
    A: number
    B: number
    C: number
  }
  area: number
  perimeter: number
  semiperimeter: number
  height: {
    a: number
    b: number
    c: number
  }
  median: {
    a: number
    b: number
    c: number
  }
  inradius: number
  circumradius: number
  triangleType: string
  isValid: boolean
  errorMessage?: string
}

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
    
    navigator.clipboard.writeText(resultText)
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
      className="space-y-6 md:space-y-8 focus:outline-none"
      onKeyDown={(e) => {
        if (e.key === 'Tab') {
          e.preventDefault()
        }
      }}
    >
      {/* Calculator Display */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Triangle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Triangle Calculator</h2>
                <p className="text-sm text-muted-foreground">Advanced triangle calculations with all properties</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Zap className="h-3 w-3 mr-1" />
                Advanced
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sides */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Ruler className="h-4 w-4" />
                Sides
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sideA" className="text-sm font-medium text-slate-700 dark:text-slate-300">Side a</Label>
                  <Input
                    id="sideA"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.sideA)}
                    onChange={(e) => handleInputChange('sideA', e.target.value)}
                    className="text-center h-12 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sideB" className="text-sm font-medium text-slate-700 dark:text-slate-300">Side b</Label>
                  <Input
                    id="sideB"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.sideB)}
                    onChange={(e) => handleInputChange('sideB', e.target.value)}
                    className="text-center h-12 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sideC" className="text-sm font-medium text-slate-700 dark:text-slate-300">Side c</Label>
                  <Input
                    id="sideC"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.sideC)}
                    onChange={(e) => handleInputChange('sideC', e.target.value)}
                    className="text-center h-12 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Angles */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Angles
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="angleA" className="text-sm font-medium text-slate-700 dark:text-slate-300">Angle A</Label>
                  <Input
                    id="angleA"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.angleA)}
                    onChange={(e) => handleInputChange('angleA', e.target.value)}
                    className="text-center h-12 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="angleB" className="text-sm font-medium text-slate-700 dark:text-slate-300">Angle B</Label>
                  <Input
                    id="angleB"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.angleB)}
                    onChange={(e) => handleInputChange('angleB', e.target.value)}
                    className="text-center h-12 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="angleC" className="text-sm font-medium text-slate-700 dark:text-slate-300">Angle C</Label>
                  <Input
                    id="angleC"
                    type="number"
                    placeholder="0"
                    value={formatValue(inputData.angleC)}
                    onChange={(e) => handleInputChange('angleC', e.target.value)}
                    className="text-center h-12 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Angle Unit Selection */}
          <div className="flex items-center gap-4">
            <Label htmlFor="angleUnit">Angle Unit:</Label>
            <Select value={angleUnit} onValueChange={(value: "degree" | "radian") => setAngleUnit(value)}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="degree">Degree °</SelectItem>
                <SelectItem value="radian">Radian</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={calculateTriangle} 
              disabled={isCalculating}
              className="flex-1 min-w-[120px]"
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate
                </>
              )}
            </Button>
            <Button variant="outline" onClick={resetCalculator}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            {result && (
              <Button variant="outline" onClick={copyResult}>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-blue-800 dark:text-blue-200 mb-1">Instructions:</p>
                <p className="text-blue-700 dark:text-blue-300">
                  Provide 3 values including at least one side. When radians are selected, angles can be entered as π/2, π/4, etc.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {result.isValid ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600" />
              )}
              Triangle Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result.isValid ? (
              <div className="space-y-6">
                {/* Basic Properties */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Sides</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Side a:</span>
                        <span className="font-mono">{formatNumber(result.sides.a)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Side b:</span>
                        <span className="font-mono">{formatNumber(result.sides.b)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Side c:</span>
                        <span className="font-mono">{formatNumber(result.sides.c)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Angles</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Angle A:</span>
                        <span className="font-mono">{formatNumber(result.angles.A)}°</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Angle B:</span>
                        <span className="font-mono">{formatNumber(result.angles.B)}°</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Angle C:</span>
                        <span className="font-mono">{formatNumber(result.angles.C)}°</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advanced Properties */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Area & Perimeter</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Area:</span>
                        <span className="font-mono">{formatNumber(result.area)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Perimeter:</span>
                        <span className="font-mono">{formatNumber(result.perimeter)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Semiperimeter:</span>
                        <span className="font-mono">{formatNumber(result.semiperimeter)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Radii</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Inradius:</span>
                        <span className="font-mono">{formatNumber(result.inradius)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Circumradius:</span>
                        <span className="font-mono">{formatNumber(result.circumradius)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Heights and Medians */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Heights</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Height to a:</span>
                        <span className="font-mono">{formatNumber(result.height.a)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Height to b:</span>
                        <span className="font-mono">{formatNumber(result.height.b)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Height to c:</span>
                        <span className="font-mono">{formatNumber(result.height.c)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Medians</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Median to a:</span>
                        <span className="font-mono">{formatNumber(result.median.a)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Median to b:</span>
                        <span className="font-mono">{formatNumber(result.median.b)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Median to c:</span>
                        <span className="font-mono">{formatNumber(result.median.c)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Triangle Type */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Triangle className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-green-800 dark:text-green-200">Triangle Type:</span>
                  </div>
                  <p className="text-green-700 dark:text-green-300 font-medium">{result.triangleType}</p>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-red-600 mb-2">Invalid Triangle</h3>
                <p className="text-red-500">{result.errorMessage}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* History */}
      {history.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Recent Calculations
            </CardTitle>
              <Button variant="outline" size="sm" onClick={clearHistory}>
                Clear History
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {history.slice(0, 5).map((calc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-medium">
                        {calc.sides.a} × {calc.sides.b} × {calc.sides.c}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Area: {calc.area} | Type: {calc.triangleType}
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      const resultText = `Triangle: a=${calc.sides.a}, b=${calc.sides.b}, c=${calc.sides.c}, Area=${calc.area}`
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
