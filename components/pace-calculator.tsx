"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calculator,
  Clock,
  MapPin,
  Target,
  TrendingUp,
  Heart,
  Zap,
  Trophy,
  Activity,
  Timer,
  Route,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Info,
  Copy,
  Download
} from "lucide-react"

interface PaceResult {
  pace: string
  pacePerMile: string
  pacePerKm: string
  time: string
  distance: number
  speed: number
  heartRateZone: string
  trainingZone: string
  caloriesBurned: number
  vo2Max: number
  racePrediction: {
    [key: string]: string
  }
}

interface MultipointSegment {
  distance: number
  time: string
  pace: string
  split: string
}

export default function PaceCalculator() {
  const [calculationMode, setCalculationMode] = useState<"basic" | "multipoint" | "converter" | "finish">("basic")
  const [time, setTime] = useState("")
  const [distance, setDistance] = useState("")
  const [pace, setPace] = useState("")
  const [paceUnit, setPaceUnit] = useState<"perMile" | "perKm">("perMile")
  const [distanceUnit, setDistanceUnit] = useState<"miles" | "km">("km")
  const [result, setResult] = useState<PaceResult | null>(null)
  const [multipointSegments, setMultipointSegments] = useState<MultipointSegment[]>([])
  const [currentDistance, setCurrentDistance] = useState("")
  const [elapsedTime, setElapsedTime] = useState("")
  const [fullDistance, setFullDistance] = useState("")
  const [weight, setWeight] = useState("")
  const [age, setAge] = useState("")
  const [history, setHistory] = useState<PaceResult[]>([])

  const formatTimeInput = (value: string) => {

    const numbers = value.replace(/\D/g, '')

    if (!numbers) return ''

    const limitedNumbers = numbers.slice(0, 6)

    if (limitedNumbers.length <= 2) {
      return limitedNumbers
    } else if (limitedNumbers.length <= 4) {
      return `${limitedNumbers.slice(0, 2)}:${limitedNumbers.slice(2)}`
    } else {
      return `${limitedNumbers.slice(0, 2)}:${limitedNumbers.slice(2, 4)}:${limitedNumbers.slice(4)}`
    }
  }

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTimeInput(e.target.value)
    setTime(formatted)
  }

  const formatMinutesSecondsInput = (value: string) => {

    const numbers = value.replace(/\D/g, '')

    if (!numbers) return ''

    const limitedNumbers = numbers.slice(0, 4)

    if (limitedNumbers.length <= 2) {
      return limitedNumbers
    } else {
      return `${limitedNumbers.slice(0, 2)}:${limitedNumbers.slice(2)}`
    }
  }

  const handleMinutesSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatMinutesSecondsInput(e.target.value)
    setElapsedTime(formatted)
  }

  const calculatePace = () => {
    if (!time || !distance) return

    try {
      const timeInSeconds = parseTimeToSeconds(time)
      const distanceInKm = distanceUnit === "miles" ? parseFloat(distance) * 1.60934 : parseFloat(distance)
      const distanceInMiles = distanceUnit === "km" ? parseFloat(distance) * 0.621371 : parseFloat(distance)

      const pacePerKm = timeInSeconds / distanceInKm
      const pacePerMile = timeInSeconds / distanceInMiles

      const paceKmFormatted = formatPace(pacePerKm)
      const paceMileFormatted = formatPace(pacePerMile)

      const speedKmh = (distanceInKm / timeInSeconds) * 3600
      const speedMph = (distanceInMiles / timeInSeconds) * 3600

      const maxHR = 220 - (age ? parseInt(age) : 30)
      const heartRateZone = calculateHeartRateZone(speedKmh, maxHR)
      const trainingZone = calculateTrainingZone(speedKmh, maxHR)

      const weightKg = weight ? parseFloat(weight) : 70
      const caloriesBurned = calculateCaloriesBurned(distanceInKm, weightKg, timeInSeconds)

      const vo2Max = calculateVO2Max(distanceInKm, timeInSeconds, age ? parseInt(age) : 30)

      const racePrediction = calculateRacePredictions(pacePerKm)

      const newResult: PaceResult = {
        pace: paceUnit === "perKm" ? paceKmFormatted : paceMileFormatted,
        pacePerMile: paceMileFormatted,
        pacePerKm: paceKmFormatted,
        time: time,
        distance: parseFloat(distance),
        speed: paceUnit === "perKm" ? speedKmh : speedMph,
        heartRateZone,
        trainingZone,
        caloriesBurned,
        vo2Max,
        racePrediction
      }

      setResult(newResult)
      setHistory(prev => [newResult, ...prev.slice(0, 4)])
    } catch (error) {
      console.error("Calculation error:", error)
    }
  }

  const calculateMultipoint = () => {
    if (multipointSegments.length < 2) return

    const segments = multipointSegments.map((segment, index) => {
      if (!segment.distance || !segment.time) return null

      const timeInSeconds = parseTimeToSeconds(segment.time)
      const pacePerKm = timeInSeconds / segment.distance
      const paceFormatted = formatPace(pacePerKm)

      const split = index === 0 ? segment.time :
        formatTime(parseTimeToSeconds(segment.time) - parseTimeToSeconds(multipointSegments[index - 1]?.time || "0:00"))

      return {
        ...segment,
        pace: paceFormatted,
        split
      }
    }).filter(Boolean)

    setMultipointSegments(segments as MultipointSegment[])
  }

  const calculateFinishTime = () => {
    if (!currentDistance || !elapsedTime || !fullDistance) return

    try {
      const currentDist = parseFloat(currentDistance)
      const elapsed = parseTimeToSeconds(elapsedTime)
      const fullDist = parseFloat(fullDistance)

      const currentPace = elapsed / currentDist
      const remainingDistance = fullDist - currentDist
      const estimatedFinishTime = elapsed + (currentPace * remainingDistance)

      const finishTimeFormatted = formatTime(estimatedFinishTime)
      const totalTimeFormatted = formatTime(estimatedFinishTime)

    } catch (error) {
      console.error("Finish time calculation error:", error)
    }
  }

  const parseTimeToSeconds = (timeStr: string): number => {
    const parts = timeStr.split(':').map(Number)
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1]
    } else if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2]
    }
    return 0
  }

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  const formatPace = (paceInSeconds: number): string => {
    const minutes = Math.floor(paceInSeconds / 60)
    const seconds = Math.floor(paceInSeconds % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const calculateHeartRateZone = (speed: number, maxHR: number): string => {
    const intensity = Math.min(speed / 20, 1)
    const hr = Math.floor(maxHR * (0.5 + intensity * 0.4))
    return `${hr} bpm (${Math.floor(intensity * 100)}% max)`
  }

  const calculateTrainingZone = (speed: number, maxHR: number): string => {
    if (speed < 8) return "Recovery Zone (50-60% max HR)"
    if (speed < 12) return "Aerobic Base (60-70% max HR)"
    if (speed < 16) return "Aerobic Threshold (70-80% max HR)"
    if (speed < 20) return "Lactate Threshold (80-90% max HR)"
    return "VO2 Max (90-100% max HR)"
  }

  const calculateCaloriesBurned = (distance: number, weight: number, timeInSeconds: number): number => {
    const speed = (distance / timeInSeconds) * 3600
    const met = speed < 8 ? 6 : speed < 12 ? 8 : speed < 16 ? 10 : 12
    return Math.round((met * weight * timeInSeconds) / 3600)
  }

  const calculateVO2Max = (distance: number, timeInSeconds: number, age: number): number => {
    const speed = (distance / timeInSeconds) * 3600
    const maxHR = 220 - age

    return Math.round(15.3 * (maxHR / (timeInSeconds / 60)) - 0.028 * age)
  }

  const calculateRacePredictions = (pacePerKm: number): { [key: string]: string } => {
    const predictions: { [key: string]: string } = {}

    const distances = {
      "5K": 5,
      "10K": 10,
      "Half Marathon": 21.0975,
      "Marathon": 42.195
    }

    Object.entries(distances).forEach(([race, dist]) => {
      const timeInSeconds = pacePerKm * dist
      predictions[race] = formatTime(timeInSeconds)
    })

    return predictions
  }

  const addMultipointSegment = () => {
    setMultipointSegments(prev => [...prev, { distance: 0, time: "", pace: "", split: "" }])
  }

  const updateMultipointSegment = (index: number, field: keyof MultipointSegment, value: string | number) => {
    setMultipointSegments(prev => prev.map((segment, i) =>
      i === index ? { ...segment, [field]: value } : segment
    ))
  }

  const copyResult = () => {
    if (result) {
      const text = `Pace Calculator Results:
Pace: ${result.pace} ${paceUnit === "perKm" ? "per km" : "per mile"}
Time: ${result.time}
Distance: ${result.distance} ${distanceUnit}
Speed: ${result.speed.toFixed(1)} ${paceUnit === "perKm" ? "km/h" : "mph"}
Heart Rate Zone: ${result.heartRateZone}
Training Zone: ${result.trainingZone}
Calories Burned: ${result.caloriesBurned}
VO2 Max: ${result.vo2Max}`
      navigator.clipboard.writeText(text)
    }
  }

  const clearAll = () => {
    setTime("")
    setDistance("")
    setPace("")
    setCurrentDistance("")
    setElapsedTime("")
    setFullDistance("")
    setWeight("")
    setAge("")
    setResult(null)
    setMultipointSegments([])
  }

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 bg-card rounded-xl p-3 sm:p-4 md:p-6 w-full overflow-hidden">
      {}
      <Card className="bg-card border-border w-full overflow-hidden">
        <CardHeader className="px-3 sm:px-4 md:px-6 pb-3">
          <CardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg md:text-xl break-words">
            <Calculator className="h-4 w-4 sm:h-5 sm:w-5 text-foreground flex-shrink-0" />
            <span className="break-words">Advanced Pace Calculator</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-3 sm:px-4 md:px-6 space-y-4 sm:space-y-6">
          <Tabs value={calculationMode} onValueChange={(value: "basic" | "multipoint" | "converter" | "finish") => setCalculationMode(value)}>
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-card border border-border">
              <TabsTrigger value="basic" className="text-xs sm:text-sm">Basic Pace</TabsTrigger>
              <TabsTrigger value="multipoint" className="text-xs sm:text-sm">Multipoint</TabsTrigger>
              <TabsTrigger value="converter" className="text-xs sm:text-sm">Converter</TabsTrigger>
              <TabsTrigger value="finish" className="text-xs sm:text-sm">Finish Time</TabsTrigger>
            </TabsList>

            {}
            <TabsContent value="basic" className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2 w-full min-w-0">
                  <Label htmlFor="time" className="text-heading-accent text-xs sm:text-sm">Time (hh:mm:ss)</Label>
                  <Input
                    id="time"
                    placeholder="0:50:25"
                    value={time}
                    onChange={handleTimeChange}
                    className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
                  />
                </div>
                <div className="space-y-2 w-full min-w-0">
                  <Label htmlFor="distance" className="text-heading-accent text-xs sm:text-sm">Distance</Label>
                  <div className="flex gap-2">
                    <Input
                      id="distance"
                      placeholder="5"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary flex-1 text-sm"
                    />
                    <Select value={distanceUnit} onValueChange={(value: "miles" | "km") => setDistanceUnit(value)}>
                      <SelectTrigger className="w-20 sm:w-24 border-border bg-card text-foreground text-xs sm:text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="km">km</SelectItem>
                        <SelectItem value="miles">miles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="space-y-2 w-full min-w-0">
                  <Label htmlFor="weight" className="text-heading-accent text-xs sm:text-sm">Weight (kg)</Label>
                  <Input
                    id="weight"
                    placeholder="70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
                  />
                </div>
                <div className="space-y-2 w-full min-w-0">
                  <Label htmlFor="age" className="text-heading-accent text-xs sm:text-sm">Age</Label>
                  <Input
                    id="age"
                    placeholder="30"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
                  />
                </div>
                <div className="space-y-2 w-full min-w-0">
                  <Label className="text-heading-accent text-xs sm:text-sm">Pace Unit</Label>
                  <Select value={paceUnit} onValueChange={(value: "perMile" | "perKm") => setPaceUnit(value)}>
                    <SelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="perKm">Per Kilometer</SelectItem>
                      <SelectItem value="perMile">Per Mile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <Button onClick={calculatePace} className="flex-1 w-full sm:w-auto text-sm sm:text-base">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate Pace
                </Button>
                <Button variant="outline" onClick={clearAll} className="w-full sm:w-auto text-sm sm:text-base">
                  Clear All
                </Button>
              </div>
            </TabsContent>

            {}
            <TabsContent value="multipoint" className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                {multipointSegments.map((segment, index) => (
                  <div key={index} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 border border-border rounded-lg bg-card w-full overflow-hidden">
                    <div className="space-y-2 w-full min-w-0">
                      <Label className="text-heading-accent text-xs sm:text-sm">Distance (km)</Label>
                      <Input
                        value={segment.distance}
                        onChange={(e) => updateMultipointSegment(index, 'distance', parseFloat(e.target.value) || 0)}
                        className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
                      />
                    </div>
                    <div className="space-y-2 w-full min-w-0">
                      <Label className="text-heading-accent text-xs sm:text-sm">Time (mm:ss)</Label>
                      <Input
                        value={segment.time}
                        onChange={(e) => updateMultipointSegment(index, 'time', formatMinutesSecondsInput(e.target.value))}
                        className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
                      />
                    </div>
                    <div className="space-y-2 w-full min-w-0">
                      <Label className="text-heading-accent text-xs sm:text-sm">Pace</Label>
                      <Input value={segment.pace} disabled className="border-border bg-card text-foreground w-full text-sm" />
                    </div>
                    <div className="space-y-2 w-full min-w-0">
                      <Label className="text-heading-accent text-xs sm:text-sm">Split</Label>
                      <Input value={segment.split} disabled className="border-border bg-card text-foreground w-full text-sm" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <Button onClick={addMultipointSegment} className="w-full sm:w-auto text-sm sm:text-base">
                  <Route className="mr-2 h-4 w-4" />
                  Add Segment
                </Button>
                <Button onClick={calculateMultipoint} className="w-full sm:w-auto text-sm sm:text-base">
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate All
                </Button>
              </div>
            </TabsContent>

            {}
            <TabsContent value="converter" className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2 w-full min-w-0">
                  <Label htmlFor="paceInput" className="text-heading-accent text-xs sm:text-sm">Pace</Label>
                  <Input
                    id="paceInput"
                    placeholder="5:30"
                    value={pace}
                    onChange={(e) => setPace(e.target.value)}
                    className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary w-full text-sm"
                  />
                </div>
                <div className="space-y-2 w-full min-w-0">
                  <Label className="text-heading-accent text-xs sm:text-sm">From</Label>
                  <Select value={paceUnit} onValueChange={(value: "perMile" | "perKm") => setPaceUnit(value)}>
                    <SelectTrigger className="border-border bg-card text-foreground w-full text-xs sm:text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="perKm">Per Kilometer</SelectItem>
                      <SelectItem value="perMile">Per Mile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="text-center p-3 sm:p-4 bg-card border border-border rounded-lg w-full overflow-hidden">
                <div className="text-2xl font-bold">
                  {pace && paceUnit === "perMile"
                    ? formatPace(parseTimeToSeconds(pace) * 1.60934)
                    : pace && paceUnit === "perKm"
                    ? formatPace(parseTimeToSeconds(pace) / 1.60934)
                    : "?"
                  }
                </div>
                <div className="text-sm text-muted-foreground">
                  {paceUnit === "perMile" ? "Per Kilometer" : "Per Mile"}
                </div>
              </div>
            </TabsContent>

            {}
            <TabsContent value="finish" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentDistance" className="text-heading-accent">Current Distance (km)</Label>
                  <Input
                    id="currentDistance"
                    placeholder="1"
                    value={currentDistance}
                    onChange={(e) => setCurrentDistance(e.target.value)}
                    className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="elapsedTime" className="text-heading-accent">Elapsed Time (mm:ss)</Label>
                  <Input
                    id="elapsedTime"
                    placeholder="6:15"
                    value={elapsedTime}
                    onChange={handleMinutesSecondsChange}
                    className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fullDistance" className="text-heading-accent">Full Distance (km)</Label>
                  <Input
                    id="fullDistance"
                    placeholder="5"
                    value={fullDistance}
                    onChange={(e) => setFullDistance(e.target.value)}
                    className="border-border bg-card text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <Button onClick={calculateFinishTime} className="w-full">
                <Timer className="mr-2 h-4 w-4" />
                Calculate Finish Time
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {}
      {result && (
        <div className="space-y-6">
          {}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Target className="h-5 w-5 text-foreground" />
                Pace Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Pace</Label>
                  <div className="text-2xl font-bold text-foreground">
                    {result.pace} {paceUnit === "perKm" ? "per km" : "per mile"}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Speed</Label>
                  <div className="text-2xl font-bold text-heading-accent">
                    {result.speed.toFixed(1)} {paceUnit === "perKm" ? "km/h" : "mph"}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Heart Rate Zone</Label>
                  <div className="text-lg font-semibold text-foreground">
                    {result.heartRateZone}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Training Zone</Label>
                  <div className="text-lg font-semibold text-foreground">
                    {result.trainingZone}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Calories Burned</div>
                  <div className="text-xl font-bold text-foreground">{result.caloriesBurned}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">VO2 Max</div>
                  <div className="text-xl font-bold text-indigo-600">{result.vo2Max}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Distance</div>
                  <div className="text-xl font-bold text-teal-600">{result.distance} {distanceUnit}</div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={copyResult} variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Results
                </Button>
              </div>
            </CardContent>
          </Card>

          {}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Trophy className="h-5 w-5 text-foreground" />
                Race Time Predictions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(result.racePrediction).map(([race, time]) => (
                  <div key={race} className="flex justify-between items-center p-3 bg-card border border-border rounded-lg">
                    <span className="font-medium">{race}</span>
                    <Badge variant="secondary">{time}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Heart className="h-5 w-5 text-foreground" />
                Training Zones & Heart Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 bg-muted rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-heading-accent">Recovery Zone</h4>
                    <p className="text-sm text-heading-accent">50-60% max HR - Easy pace for recovery</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-foreground">Aerobic Base</h4>
                    <p className="text-sm text-foreground">60-70% max HR - Builds aerobic fitness</p>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-semibold text-foreground">Aerobic Threshold</h4>
                    <p className="text-sm text-foreground">70-80% max HR - Comfortable hard pace</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-foreground">Lactate Threshold</h4>
                    <p className="text-sm text-foreground">80-90% max HR - Race pace training</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {}
      {history.length > 0 && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5 text-foreground" />
              Recent Calculations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {history.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-card border border-border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">
                      {item.pace} - {item.distance} {distanceUnit}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.time} - {item.speed.toFixed(1)} {paceUnit === "perKm" ? "km/h" : "mph"}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setResult(item)}
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Info className="h-5 w-5 text-foreground" />
            Advanced Pace Calculator Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-card border border-border rounded-lg">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-foreground mb-1">
                  Professional Training Features
                </p>
                <p className="text-foreground">
                  This calculator provides advanced athletic-level analysis including heart rate zones, VO2 Max estimation, race predictions, and training zone recommendations for serious athletes and coaches.
                </p>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong>Pace:</strong> Time per unit distance (e.g., minutes per mile or kilometer).
            </p>
            <p>
              <strong>Heart Rate Zones:</strong> Training intensity levels based on maximum heart rate.
            </p>
            <p>
              <strong>VO2 Max:</strong> Maximum oxygen uptake capacity, a key indicator of cardiovascular fitness.
            </p>
            <p>
              <strong>Race Predictions:</strong> Estimated finish times for different race distances based on current pace.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
