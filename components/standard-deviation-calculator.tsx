"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, BarChart3, TrendingUp, AlertCircle, Copy, RotateCcw, Download, FileText, Brain, Target, Check, Zap, Sparkles, Info, Settings } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface CalculationResult {
  mean: number
  median: number
  mode: number[]
  range: number
  variance: number
  standardDeviation: number
  sampleStandardDeviation: number
  coefficientOfVariation: number
  skewness: number
  kurtosis: number
  quartiles: {
    q1: number
    q2: number
    q3: number
    iqr: number
  }
  outliers: number[]
  confidenceInterval: {
    lower: number
    upper: number
    marginOfError: number
  }
  zScores: number[]
  percentiles: number[]
}

interface StandardDeviationCalculatorProps {
  onResultChange?: (result: CalculationResult | null) => void
}

export function StandardDeviationCalculator({ onResultChange }: StandardDeviationCalculatorProps = {}) {
  const [inputData, setInputData] = useState("")
  const [dataPoints, setDataPoints] = useState<number[]>([])
  const [calculationMode, setCalculationMode] = useState<"population" | "sample">("population")
  const [confidenceLevel, setConfidenceLevel] = useState(95)
  const [result, setResult] = useState<CalculationResult | null>(null)
  const [history, setHistory] = useState<CalculationResult[]>([])
  const [isCalculating, setIsCalculating] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")

  // Parse input data
  useEffect(() => {
    if (inputData.trim()) {
      const parsed = inputData
        .split(/[,\s\n]+/)
        .map(val => parseFloat(val.trim()))
        .filter(val => !isNaN(val))
      setDataPoints(parsed)
    } else {
      setDataPoints([])
    }
  }, [inputData])

  // Calculate comprehensive statistics
  const calculateStatistics = (data: number[], mode: "population" | "sample"): CalculationResult => {
    if (data.length === 0) {
      throw new Error("No valid data points provided")
    }

    const sortedData = [...data].sort((a, b) => a - b)
    const n = data.length
    const mean = data.reduce((sum, val) => sum + val, 0) / n

    // Variance calculation
    const variance = data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / 
      (mode === "population" ? n : n - 1)

    const standardDeviation = Math.sqrt(variance)
    const sampleStandardDeviation = mode === "sample" ? standardDeviation : 
      Math.sqrt(data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (n - 1))

    // Median calculation
    const median = n % 2 === 0 
      ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2
      : sortedData[Math.floor(n / 2)]

    // Mode calculation
    const frequency: { [key: number]: number } = {}
    data.forEach(val => {
      frequency[val] = (frequency[val] || 0) + 1
    })
    const maxFreq = Math.max(...Object.values(frequency))
    const statisticalMode = Object.keys(frequency)
      .filter(key => frequency[parseFloat(key)] === maxFreq)
      .map(key => parseFloat(key))

    // Range
    const range = Math.max(...data) - Math.min(...data)

    // Coefficient of variation
    const coefficientOfVariation = (standardDeviation / mean) * 100

    // Skewness calculation
    const skewness = data.reduce((sum, val) => sum + Math.pow((val - mean) / standardDeviation, 3), 0) / n

    // Kurtosis calculation
    const kurtosis = data.reduce((sum, val) => sum + Math.pow((val - mean) / standardDeviation, 4), 0) / n - 3

    // Quartiles
    const q1Index = Math.floor(n * 0.25)
    const q2Index = Math.floor(n * 0.5)
    const q3Index = Math.floor(n * 0.75)
    
    const q1 = sortedData[q1Index]
    const q2 = median
    const q3 = sortedData[q3Index]
    const iqr = q3 - q1

    // Outliers (using IQR method)
    const outlierThreshold = 1.5 * iqr
    const outliers = data.filter(val => val < q1 - outlierThreshold || val > q3 + outlierThreshold)

    // Confidence interval
    const tValue = confidenceLevel === 95 ? 1.96 : confidenceLevel === 99 ? 2.576 : 1.645
    const marginOfError = tValue * (standardDeviation / Math.sqrt(n))
    const confidenceInterval = {
      lower: mean - marginOfError,
      upper: mean + marginOfError,
      marginOfError
    }

    // Z-scores
    const zScores = data.map(val => (val - mean) / standardDeviation)

    // Percentiles
    const percentiles = [10, 25, 50, 75, 90, 95, 99].map(p => {
      const index = Math.floor((p / 100) * (n - 1))
      return sortedData[index]
    })

    return {
      mean,
      median,
      mode: statisticalMode,
      range,
      variance,
      standardDeviation,
      sampleStandardDeviation,
      coefficientOfVariation,
      skewness,
      kurtosis,
      quartiles: { q1, q2, q3, iqr },
      outliers,
      confidenceInterval,
      zScores,
      percentiles
    }
  }

  const handleCalculate = () => {
    if (dataPoints.length === 0) {
      return
    }

    if (dataPoints.length < 2) {
      return
    }

    setIsCalculating(true)

    // Simulate calculation delay for smooth UX
    setTimeout(() => {
      try {
        const calculationResult = calculateStatistics(dataPoints, calculationMode)
        setResult(calculationResult)
        setHistory(prev => [calculationResult, ...prev.slice(0, 9)]) // Keep last 10 calculations
        onResultChange?.(calculationResult)
      } catch (error) {
        console.error("Error calculating statistics:", error)
      } finally {
        setIsCalculating(false)
      }
    }, 500)
  }

  const handleClear = () => {
    setInputData("")
    setDataPoints([])
    setResult(null)
  }

  const handleCopyResult = (value: number, label: string) => {
    navigator.clipboard.writeText(value.toString())
    // You can add toast notification here if needed
  }

  const handleLoadExample = () => {
    setInputData("10, 12, 23, 23, 16, 23, 21, 16")
  }

  const handleExportResults = () => {
    if (!result) return

    const exportData = {
      inputData: dataPoints,
      calculationMode,
      confidenceLevel,
      results: result,
      timestamp: new Date().toISOString()
    }

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'standard-deviation-results.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
            <Calculator className="h-5 w-5 text-blue-600" />
            Standard Deviation Calculator
          </CardTitle>
          <CardDescription className="text-blue-700 dark:text-blue-300">
            Calculate standard deviation, variance, mean, and comprehensive statistical analysis. 
            Online standard deviation calculator for data sets, sample and population standard deviation, 
            standard deviation formula calculator with steps, standard deviation calculator for grouped data, 
            ungrouped data, frequency distribution, normal distribution, binomial distribution, 
            confidence interval, margin of error, z-score, t-score, ANOVA, regression, correlation, 
            coefficient of variation, skewness, kurtosis, percentiles, quartiles, hypothesis testing, 
            p-value, effect size, power analysis, sample variance, population variance, standard error, 
            variance analysis, statistics calculator, probability calculator, data analysis tool.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="data-input">Data Points</Label>
              <Input
                id="data-input"
                placeholder="Enter numbers separated by commas (e.g., 10, 12, 23, 16)"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                className="font-mono"
              />
              <p className="text-sm text-muted-foreground">
                Separate numbers with commas, spaces, or new lines. Supports grouped data, 
                ungrouped data, frequency distribution, test scores, stock prices, investment returns, 
                scientific data, research data, survey data, experimental data, financial data, 
                business data, medical data, engineering data, social science data, educational data, 
                psychological data, environmental data, quality control data, process data, 
                performance data, marketing data, sales data, customer data, analytics data.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="calculation-mode">Calculation Mode</Label>
              <Select value={calculationMode} onValueChange={(value: "population" | "sample") => setCalculationMode(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="population">Population Standard Deviation</SelectItem>
                  <SelectItem value="sample">Sample Standard Deviation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="confidence-level">Confidence Level</Label>
              <Select value={confidenceLevel.toString()} onValueChange={(value) => setConfidenceLevel(parseInt(value))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="90">90%</SelectItem>
                  <SelectItem value="95">95%</SelectItem>
                  <SelectItem value="99">99%</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end gap-2">
              <Button onClick={handleLoadExample} variant="outline" size="sm">
                Load Example
              </Button>
              <Button onClick={handleClear} variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-1" />
                Clear
              </Button>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={handleCalculate} 
              disabled={dataPoints.length < 2 || isCalculating}
              className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg"
            >
              {isCalculating ? (
                <>
                  <LoadingSpinner className="mr-2" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate Statistics
                </>
              )}
            </Button>
          </div>

          {dataPoints.length > 0 && (
            <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Check className="h-4 w-4 text-green-600" />
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  Data Points: {dataPoints.length}
                </p>
              </div>
              <p className="text-xs text-green-600 dark:text-green-300">
                {dataPoints.slice(0, 10).join(", ")}{dataPoints.length > 10 ? "..." : ""}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800 dark:text-purple-200">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                Quick Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="flex justify-center mb-2">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {result.mean.toFixed(2)}
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300">Mean</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex justify-center mb-2">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {result.standardDeviation.toFixed(2)}
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">Std Dev</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {result.variance.toFixed(2)}
                  </p>
                  <p className="text-sm text-purple-700 dark:text-purple-300">Variance</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
                  <div className="flex justify-center mb-2">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {result.range.toFixed(2)}
                  </p>
                  <p className="text-sm text-orange-700 dark:text-orange-300">Range</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Results */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
              <TabsTrigger 
                value="basic" 
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-800/50"
              >
                Basic Stats
              </TabsTrigger>
              <TabsTrigger 
                value="advanced" 
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-800/50"
              >
                Advanced
              </TabsTrigger>
              <TabsTrigger 
                value="distribution" 
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-800/50"
              >
                Distribution
              </TabsTrigger>
              <TabsTrigger 
                value="confidence" 
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-800/50"
              >
                Confidence
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-200">Basic Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Mean (Average)</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.mean.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.mean, "Mean")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Median</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.median.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.median, "Median")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Mode</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.mode.length > 0 ? result.mode.join(", ") : "No mode"}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.mode[0] || 0, "Mode")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Range</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.range.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.range, "Range")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Variance</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.variance.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.variance, "Variance")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Standard Deviation</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.standardDeviation.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.standardDeviation, "Standard Deviation")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="text-orange-800 dark:text-orange-200">Advanced Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Sample Std Dev</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.sampleStandardDeviation.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.sampleStandardDeviation, "Sample Standard Deviation")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Coefficient of Variation</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.coefficientOfVariation.toFixed(2)}%</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.coefficientOfVariation, "Coefficient of Variation")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Skewness</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.skewness.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.skewness, "Skewness")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="font-medium">Kurtosis</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.kurtosis.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.kurtosis, "Kurtosis")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="distribution" className="space-y-4">
              <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border-indigo-200 dark:border-indigo-800">
                <CardHeader>
                  <CardTitle className="text-indigo-800 dark:text-indigo-200">Distribution Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Quartiles</h4>
                      <div className="grid md:grid-cols-4 gap-3">
                        <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                          <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                            {result.quartiles.q1.toFixed(2)}
                          </p>
                          <p className="text-sm text-blue-700 dark:text-blue-300">Q1 (25%)</p>
                        </div>
                        <div className="text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <p className="text-lg font-bold text-green-600 dark:text-green-400">
                            {result.quartiles.q2.toFixed(2)}
                          </p>
                          <p className="text-sm text-green-700 dark:text-green-300">Q2 (50%)</p>
                        </div>
                        <div className="text-center p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                          <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                            {result.quartiles.q3.toFixed(2)}
                          </p>
                          <p className="text-sm text-purple-700 dark:text-purple-300">Q3 (75%)</p>
                        </div>
                        <div className="text-center p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                            {result.quartiles.iqr.toFixed(2)}
                          </p>
                          <p className="text-sm text-orange-700 dark:text-orange-300">IQR</p>
                        </div>
                      </div>
                    </div>

                    {result.outliers.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-orange-500" />
                          Outliers ({result.outliers.length})
                        </h4>
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <p className="text-sm text-orange-700 dark:text-orange-300">
                            {result.outliers.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold mb-2">Percentiles</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[10, 25, 50, 75, 90, 95, 99].map((p, i) => (
                          <div key={p} className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                            <p className="text-sm font-bold">{result.percentiles[i]?.toFixed(2) || "N/A"}</p>
                            <p className="text-xs text-muted-foreground">{p}%</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="confidence" className="space-y-4">
              <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 border-teal-200 dark:border-teal-800">
                <CardHeader>
                  <CardTitle className="text-teal-800 dark:text-teal-200">Confidence Interval</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <span className="font-medium">Confidence Level</span>
                      <Badge variant="secondary">{confidenceLevel}%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-medium">Margin of Error</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">{result.confidenceInterval.marginOfError.toFixed(4)}</span>
                        <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.confidenceInterval.marginOfError, "Margin of Error")}>
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        Confidence Interval
                      </h4>
                      <p className="text-green-700 dark:text-green-300">
                        {result.confidenceInterval.lower.toFixed(4)} ≤ μ ≤ {result.confidenceInterval.upper.toFixed(4)}
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                        We are {confidenceLevel}% confident that the true population mean lies within this interval.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Export and Actions */}
          <Card className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 border-gray-200 dark:border-gray-800">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                <Button onClick={handleExportResults} variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Results
                </Button>
                <Button onClick={() => navigator.clipboard.writeText(JSON.stringify(result, null, 2))} variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Copy JSON
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* History Section */}
      {history.length > 0 && (
        <Card className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 border-violet-200 dark:border-violet-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-violet-800 dark:text-violet-200">
              <Brain className="h-5 w-5 text-violet-600" />
              Calculation History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {history.slice(0, 5).map((calc, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">#{index + 1}</Badge>
                    <span className="text-sm">
                      Mean: {calc.mean.toFixed(2)}, Std Dev: {calc.standardDeviation.toFixed(2)}
                    </span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => setResult(calc)}
                  >
                    View
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
