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

  const calculateStatistics = (data: number[], mode: "population" | "sample"): CalculationResult => {
    if (data.length === 0) {
      throw new Error("No valid data points provided")
    }

    const sortedData = [...data].sort((a, b) => a - b)
    const n = data.length
    const mean = data.reduce((sum, val) => sum + val, 0) / n

    const variance = data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) /
      (mode === "population" ? n : n - 1)

    const standardDeviation = Math.sqrt(variance)
    const sampleStandardDeviation = mode === "sample" ? standardDeviation :
      Math.sqrt(data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (n - 1))

    const median = n % 2 === 0
      ? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2
      : sortedData[Math.floor(n / 2)]

    const frequency: { [key: number]: number } = {}
    data.forEach(val => {
      frequency[val] = (frequency[val] || 0) + 1
    })
    const maxFreq = Math.max(...Object.values(frequency))
    const statisticalMode = Object.keys(frequency)
      .filter(key => frequency[parseFloat(key)] === maxFreq)
      .map(key => parseFloat(key))

    const range = Math.max(...data) - Math.min(...data)

    const coefficientOfVariation = (standardDeviation / mean) * 100

    const skewness = data.reduce((sum, val) => sum + Math.pow((val - mean) / standardDeviation, 3), 0) / n

    const kurtosis = data.reduce((sum, val) => sum + Math.pow((val - mean) / standardDeviation, 4), 0) / n - 3

    const q1Index = Math.floor(n * 0.25)
    const q2Index = Math.floor(n * 0.5)
    const q3Index = Math.floor(n * 0.75)

    const q1 = sortedData[q1Index]
    const q2 = median
    const q3 = sortedData[q3Index]
    const iqr = q3 - q1

    const outlierThreshold = 1.5 * iqr
    const outliers = data.filter(val => val < q1 - outlierThreshold || val > q3 + outlierThreshold)

    const tValue = confidenceLevel === 95 ? 1.96 : confidenceLevel === 99 ? 2.576 : 1.645
    const marginOfError = tValue * (standardDeviation / Math.sqrt(n))
    const confidenceInterval = {
      lower: mean - marginOfError,
      upper: mean + marginOfError,
      marginOfError
    }

    const zScores = data.map(val => (val - mean) / standardDeviation)

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

    setTimeout(() => {
      try {
        const calculationResult = calculateStatistics(dataPoints, calculationMode)
        setResult(calculationResult)
        setHistory(prev => [calculationResult, ...prev.slice(0, 9)])
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
    <div className="space-y-4">
      {}
      <Card className="bg-card border-border">
        <CardHeader className="pb-2 px-3 sm:px-6">
          <CardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg">
            <Calculator className="h-4 w-4 text-foreground" />
            Standard Deviation Calculator
          </CardTitle>
          <CardDescription className="text-muted-foreground text-xs">
            Calculate standard deviation, variance, mean, and comprehensive statistical analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 px-3 sm:px-6">
          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="data-input" className="text-[11px] font-medium text-heading-accent">Data Points</Label>
              <Input
                id="data-input"
                placeholder="10, 12, 23, 16"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                className="font-mono h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
              />
              <p className="text-[10px] text-muted-foreground">
                Input values with commas, spaces, or line breaks.
              </p>
            </div>

            <div className="space-y-1">
              <Label htmlFor="calculation-mode" className="text-[11px] font-medium text-heading-accent">Calculation Mode</Label>
              <Select value={calculationMode} onValueChange={(value: "population" | "sample") => setCalculationMode(value)}>
                <SelectTrigger className="h-7 text-xs border-border bg-background text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="population">Population Standard Deviation</SelectItem>
                  <SelectItem value="sample">Sample Standard Deviation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="confidence-level" className="text-[11px] font-medium text-heading-accent">Confidence Level</Label>
              <Select value={confidenceLevel.toString()} onValueChange={(value) => setConfidenceLevel(parseInt(value))}>
                <SelectTrigger className="h-7 text-xs border-border bg-background text-foreground">
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
              <Button onClick={handleLoadExample} variant="outline" size="sm" className="h-7 text-xs border-border bg-background text-foreground hover:bg-secondary">
                Example
              </Button>
              <Button onClick={handleClear} variant="outline" size="sm" className="h-7 text-xs border-border bg-background text-foreground hover:bg-secondary">
                <RotateCcw className="h-3 w-3 mr-1" />
                Clear
              </Button>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleCalculate}
              disabled={dataPoints.length < 2 || isCalculating}
              className="flex-1 h-9 text-xs font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground"
            >
              {isCalculating ? (
                <>
                  <LoadingSpinner className="mr-1 h-3 w-3" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="h-3 w-3 mr-1" />
                  Calculate
                </>
              )}
            </Button>
          </div>

          {dataPoints.length > 0 && (
            <div className="mt-3 p-3 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-1">
                <Check className="h-3.5 w-3.5 text-heading-accent" />
                <p className="text-xs font-medium text-heading-accent">
                  Data Points: {dataPoints.length}
                </p>
              </div>
              <p className="text-[10px] text-muted-foreground">
                {dataPoints.slice(0, 10).join(", ")}{dataPoints.length > 10 ? "..." : ""}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {}
      {result && (
        <div className="space-y-6">
          {}
          <Card className="bg-card border-border">
            <CardHeader className="pb-2 px-3 sm:px-6">
              <CardTitle className="flex items-center gap-2 text-foreground text-base">
                <BarChart3 className="h-4 w-4 text-foreground" />
                Quick Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="flex justify-center mb-2">
                    <Target className="h-6 w-6 text-heading-accent" />
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-foreground">
                    {result.mean.toFixed(2)}
                  </p>
                  <p className="text-xs text-heading-accent">Mean</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="flex justify-center mb-2">
                    <BarChart3 className="h-6 w-6 text-foreground" />
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-foreground">
                    {result.standardDeviation.toFixed(2)}
                  </p>
                  <p className="text-xs text-heading-accent">Std Dev</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="flex justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-foreground" />
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-foreground">
                    {result.variance.toFixed(2)}
                  </p>
                  <p className="text-xs text-heading-accent">Variance</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="flex justify-center mb-2">
                    <Zap className="h-6 w-6 text-foreground" />
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-foreground">
                    {result.range.toFixed(2)}
                  </p>
                  <p className="text-xs text-heading-accent">Range</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-primary/10 border border-primary/20">
              <TabsTrigger
                value="basic"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground hover:bg-secondary"
              >
                Basic Stats
              </TabsTrigger>
              <TabsTrigger
                value="advanced"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground hover:bg-secondary"
              >
                Advanced
              </TabsTrigger>
              <TabsTrigger
                value="distribution"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground hover:bg-secondary"
              >
                Distribution
              </TabsTrigger>
              <TabsTrigger
                value="confidence"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground hover:bg-secondary"
              >
                Confidence
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground text-base">Basic Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Mean (Average)</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.mean.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.mean, "Mean")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Median</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.median.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.median, "Median")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
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
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Range</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.range.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.range, "Range")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Variance</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.variance.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.variance, "Variance")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
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
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground text-base">Advanced Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Sample Std Dev</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.sampleStandardDeviation.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.sampleStandardDeviation, "Sample Standard Deviation")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
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
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Skewness</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono">{result.skewness.toFixed(4)}</span>
                          <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.skewness, "Skewness")}>
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
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
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground text-base">Distribution Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Quartiles</h4>
                      <div className="grid md:grid-cols-4 gap-3">
                        <div className="text-center p-3 bg-muted rounded-lg">
                          <p className="text-lg font-bold text-foreground">
                            {result.quartiles.q1.toFixed(2)}
                          </p>
                          <p className="text-sm text-foreground">Q1 (25%)</p>
                        </div>
                        <div className="text-center p-3 bg-muted rounded-lg">
                          <p className="text-lg font-bold text-heading-accent">
                            {result.quartiles.q2.toFixed(2)}
                          </p>
                          <p className="text-sm text-heading-accent">Q2 (50%)</p>
                        </div>
                        <div className="text-center p-3 bg-muted rounded-lg">
                          <p className="text-lg font-bold text-foreground">
                            {result.quartiles.q3.toFixed(2)}
                          </p>
                          <p className="text-sm text-foreground">Q3 (75%)</p>
                        </div>
                        <div className="text-center p-3 bg-muted rounded-lg">
                          <p className="text-lg font-bold text-foreground">
                            {result.quartiles.iqr.toFixed(2)}
                          </p>
                          <p className="text-sm text-foreground">IQR</p>
                        </div>
                      </div>
                    </div>

                    {result.outliers.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-foreground" />
                          Outliers ({result.outliers.length})
                        </h4>
                        <div className="p-3 bg-muted rounded-lg">
                          <p className="text-sm text-foreground">
                            {result.outliers.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold mb-2">Percentiles</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[10, 25, 50, 75, 90, 95, 99].map((p, i) => (
                          <div key={p} className="text-center p-2 bg-muted rounded">
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
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground text-base">Confidence Interval</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium">Confidence Level</span>
                      <Badge variant="secondary">{confidenceLevel}%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium">Margin of Error</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">{result.confidenceInterval.marginOfError.toFixed(4)}</span>
                        <Button size="sm" variant="ghost" onClick={() => handleCopyResult(result.confidenceInterval.marginOfError, "Margin of Error")}>
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-heading-accent mb-2">
                        Confidence Interval
                      </h4>
                      <p className="text-heading-accent">
                        {result.confidenceInterval.lower.toFixed(4)} ≤ μ ≤ {result.confidenceInterval.upper.toFixed(4)}
                      </p>
                      <p className="text-sm text-heading-accent mt-1">
                        We are {confidenceLevel}% confident that the true population mean lies within this interval.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {}
          <Card className="bg-card border-border">
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

      {}
      {history.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground text-base">
              <Brain className="h-4 w-4 text-foreground" />
              Calculation History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {history.slice(0, 5).map((calc, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
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
