"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calculator,
  Copy,
  Check,
  Building,
  Ruler,
  Weight,
  Volume,
  Target,
  Info,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  PieChart,
  Settings,
  Zap,
  Sparkles,
  Hammer,
  Wrench,
  Truck,
  Package
} from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

type CalculationType = "slab" | "column" | "tube" | "curb" | "stairs" | "footing" | "wall" | "driveway"

interface ConcreteResult {
  volume: number
  weight: number
  bags: number
  cost: number
  type: string
  formula: string
  explanation: string
  dimensions: {
    length: number
    width: number
    height: number
    diameter?: number
    innerDiameter?: number
  }
  materialBreakdown: {
    cement: number
    sand: number
    gravel: number
    water: number
  }
  curingTime: string
  strength: string
  recommendations: string[]
}

interface ConcreteMix {
  name: string
  cement: number
  sand: number
  gravel: number
  water: number
  strength: string
  description: string
}

export function ConcreteCalculator() {
  const [calculationType, setCalculationType] = useState<CalculationType>("slab")
  const [length, setLength] = useState("")
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [diameter, setDiameter] = useState("")
  const [innerDiameter, setInnerDiameter] = useState("")
  const [quantity, setQuantity] = useState("1")
  const [run, setRun] = useState("")
  const [rise, setRise] = useState("")
  const [steps, setSteps] = useState("")
  const [curbDepth, setCurbDepth] = useState("")
  const [gutterWidth, setGutterWidth] = useState("")
  const [curbHeight, setCurbHeight] = useState("")
  const [flagThickness, setFlagThickness] = useState("")
  const [platformDepth, setPlatformDepth] = useState("")
  const [unit, setUnit] = useState<"metric" | "imperial">("imperial")
  const [concreteMix, setConcreteMix] = useState("standard")
  const [result, setResult] = useState<ConcreteResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const concreteMixes: Record<string, ConcreteMix> = {
    standard: {
      name: "Standard Mix",
      cement: 1,
      sand: 2,
      gravel: 3,
      water: 0.5,
      strength: "3000 PSI",
      description: "General purpose concrete for most applications"
    },
    high_strength: {
      name: "High Strength Mix",
      cement: 1,
      sand: 1.5,
      gravel: 2.5,
      water: 0.4,
      strength: "4000+ PSI",
      description: "For structural applications requiring high strength"
    },
    lightweight: {
      name: "Lightweight Mix",
      cement: 1,
      sand: 1.5,
      gravel: 2,
      water: 0.6,
      strength: "2500 PSI",
      description: "Reduced weight for non-structural applications"
    },
    fiber_reinforced: {
      name: "Fiber Reinforced",
      cement: 1,
      sand: 2,
      gravel: 3,
      water: 0.5,
      strength: "3500 PSI",
      description: "Enhanced with fiber reinforcement for crack resistance"
    }
  }

  const calculateConcrete = () => {
    setIsCalculating(true)

    setTimeout(() => {
      let volume = 0
      let formula = ""
      let explanation = ""
      let dimensions = { length: 0, width: 0, height: 0 }

      const qty = Number.parseFloat(quantity) || 1

      switch (calculationType) {
        case "slab":
        case "footing":
        case "wall":
        case "driveway":
          if (!length || !width || !height) return
          const l = Number.parseFloat(length)
          const w = Number.parseFloat(width)
          const h = Number.parseFloat(height)
          volume = l * w * h * qty
          formula = `V = l × w × h × qty = ${l} × ${w} × ${h} × ${qty} = ${volume.toFixed(2)} ${unit === "metric" ? "m³" : "ft³"}`
          explanation = "Volume = Length × Width × Height × Quantity"
          dimensions = { length: l, width: w, height: h }
          break

        case "column":
          if (!diameter || !height) return
          const d = Number.parseFloat(diameter)
          const colH = Number.parseFloat(height)
          volume = Math.PI * Math.pow(d / 2, 2) * colH * qty
          formula = `V = π × (d/2)² × h × qty = π × (${d}/2)² × ${colH} × ${qty} = ${volume.toFixed(2)} ${unit === "metric" ? "m³" : "ft³"}`
          explanation = "Volume = π × (Diameter/2)² × Height × Quantity"
          dimensions = { length: d, width: d, height: colH }
          break

        case "tube":
          if (!diameter || !innerDiameter || !height) return
          const od = Number.parseFloat(diameter)
          const id = Number.parseFloat(innerDiameter)
          const ht = Number.parseFloat(height)
          const outerVolume = Math.PI * Math.pow(od / 2, 2) * ht
          const innerVolume = Math.PI * Math.pow(id / 2, 2) * ht
          volume = (outerVolume - innerVolume) * qty
          formula = `V = π × ((d1/2)² - (d2/2)²) × h × qty = π × ((${od}/2)² - (${id}/2)²) × ${ht} × ${qty} = ${volume.toFixed(2)} ${unit === "metric" ? "m³" : "ft³"}`
          explanation = "Volume = π × ((Outer Diameter/2)² - (Inner Diameter/2)²) × Height × Quantity"

            dimensions = { length: od, width: od, height: ht, diameter: od, innerDiameter: id }
          break

        case "stairs":
          if (!run || !rise || !width || !steps) return
          const r = Number.parseFloat(run) / 12
          const ri = Number.parseFloat(rise) / 12
          const stairW = Number.parseFloat(width) / 12
          const s = Number.parseFloat(steps)
          const platDepth = Number.parseFloat(platformDepth) / 12 || 0
          const stepVolume = (r * ri * stairW * s) / 2
          const platformVolume = platDepth * stairW * 1
          volume = (stepVolume + platformVolume) * qty
          formula = `V = ((run × rise × width × steps) / 2 + platform) × qty = ${volume.toFixed(2)} ${unit === "metric" ? "m³" : "ft³"}`
          explanation = "Volume = ((Run × Rise × Width × Steps) / 2 + Platform Volume) × Quantity"
          dimensions = { length: r * s, width: stairW, height: ri * s }
          break

        case "curb":
          if (!curbDepth || !gutterWidth || !curbHeight || !flagThickness || !length) return
          const cd = Number.parseFloat(curbDepth) / 12
          const gw = Number.parseFloat(gutterWidth) / 12
          const ch = Number.parseFloat(curbHeight) / 12
          const ft = Number.parseFloat(flagThickness) / 12
          const len = Number.parseFloat(length)
          const curbVolume = (cd * ch * len) + (gw * ft * len)
          volume = curbVolume * qty
          formula = `V = (curb_depth × curb_height × length + gutter_width × flag_thickness × length) × qty = ${volume.toFixed(2)} ${unit === "metric" ? "m³" : "ft³"}`
          explanation = "Volume = (Curb Depth × Curb Height × Length + Gutter Width × Flag Thickness × Length) × Quantity"
          dimensions = { length: len, width: cd + gw, height: Math.max(ch, ft) }
          break
      }

      const density = unit === "metric" ? 2400 : 150
      const weight = volume * density
      const bags = Math.ceil(volume * (unit === "metric" ? 0.6 : 0.45))
      const cost = bags * (unit === "metric" ? 8 : 6)

      const mix = concreteMixes[concreteMix]
      const materialBreakdown = {
        cement: volume * mix.cement * (unit === "metric" ? 0.3 : 0.2),
        sand: volume * mix.sand * (unit === "metric" ? 0.5 : 0.3),
        gravel: volume * mix.gravel * (unit === "metric" ? 0.8 : 0.5),
        water: volume * mix.water * (unit === "metric" ? 0.2 : 0.15)
      }

      const recommendations = []
      if (volume < 1) recommendations.push("Consider mixing by hand for small projects")
      if (volume > 10) recommendations.push("Consider ready-mix delivery for large projects")
      if (volume > 5) recommendations.push("Plan for multiple pours to avoid cold joints")
      recommendations.push(`Use ${mix.name} for ${mix.strength} strength`)
      recommendations.push("Allow 24-48 hours before removing forms")
      recommendations.push("Cure for 7 days minimum for optimal strength")

      setResult({
        volume: Number.parseFloat(volume.toFixed(3)),
        weight: Number.parseFloat(weight.toFixed(2)),
        bags: Math.ceil(bags),
        cost: Number.parseFloat(cost.toFixed(2)),
        type: calculationType,
        formula,
        explanation,
        dimensions,
        materialBreakdown,
        curingTime: "7-28 days for full strength",
        strength: mix.strength,
        recommendations
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return

    const text = `Concrete Calculator Results
Type: ${result.type.toUpperCase()}
Volume: ${result.volume} ${unit === "metric" ? "m³" : "ft³"}
Weight: ${result.weight} ${unit === "metric" ? "kg" : "lbs"}
Bags Needed: ${result.bags}
Estimated Cost: $${result.cost}
Strength: ${result.strength}
Curing Time: ${result.curingTime}

Formula: ${result.formula}
${result.explanation}

Material Breakdown:
- Cement: ${result.materialBreakdown.cement.toFixed(2)} ${unit === "metric" ? "kg" : "lbs"}
- Sand: ${result.materialBreakdown.sand.toFixed(2)} ${unit === "metric" ? "kg" : "lbs"}
- Gravel: ${result.materialBreakdown.gravel.toFixed(2)} ${unit === "metric" ? "kg" : "lbs"}
- Water: ${result.materialBreakdown.water.toFixed(2)} ${unit === "metric" ? "L" : "gal"}

Recommendations:
${result.recommendations.map(r => `• ${r}`).join('\n')}

Calculated with FastTools Concrete Calculator`

    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const clearForm = () => {
    setLength("")
    setWidth("")
    setHeight("")
    setDiameter("")
    setInnerDiameter("")
    setQuantity("1")
    setRun("")
    setRise("")
    setSteps("")
    setCurbDepth("")
    setGutterWidth("")
    setCurbHeight("")
    setFlagThickness("")
    setPlatformDepth("")
    setResult(null)
  }

  const getCalculationTypeLabel = (type: CalculationType) => {
    const labels = {
      slab: "Slabs, Square Footings, or Walls",
      column: "Hole, Column, or Round Footings",
      tube: "Circular Slab or Tube",
      curb: "Curb and Gutter Barrier",
      stairs: "Stairs",
      footing: "Foundation Footings",
      wall: "Retaining Walls",
      driveway: "Driveways and Patios"
    }
    return labels[type]
  }

  const getCalculationIcon = (type: CalculationType) => {
    const icons = {
      slab: Building,
      column: Target,
      tube: Volume,
      curb: Ruler,
      stairs: TrendingUp,
      footing: Hammer,
      wall: Wrench,
      driveway: Truck
    }
    return icons[type]
  }

  return (
    <div className="space-y-6">
      {}
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <CardHeader className="pb-3 px-3 sm:px-6">
          <CardTitle className="flex items-center gap-1.5 text-base">
            <div className="p-1 bg-primary/10 rounded">
              <Calculator className="h-3.5 w-3.5 text-foreground" />
            </div>
            Concrete Calculator
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            Calculate volume, weight, materials, and cost.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 px-3 sm:px-6">
          {}
          <div className="space-y-2">
            <Label className="text-[11px] font-medium text-heading-accent">Calculation Type</Label>
            <Select value={calculationType} onValueChange={(value: CalculationType) => setCalculationType(value)}>
              <SelectTrigger className="w-full h-8 text-xs border-border bg-background text-foreground">
                <SelectValue placeholder="Select calculation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slab">Slabs, Square Footings, or Walls</SelectItem>
                <SelectItem value="column">Hole, Column, or Round Footings</SelectItem>
                <SelectItem value="tube">Circular Slab or Tube</SelectItem>
                <SelectItem value="curb">Curb and Gutter Barrier</SelectItem>
                <SelectItem value="stairs">Stairs</SelectItem>
                <SelectItem value="footing">Foundation Footings</SelectItem>
                <SelectItem value="wall">Retaining Walls</SelectItem>
                <SelectItem value="driveway">Driveways and Patios</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-[11px] font-medium text-heading-accent">Unit System</Label>
              <Select value={unit} onValueChange={(value: "metric" | "imperial") => setUnit(value)}>
                <SelectTrigger className="h-8 text-xs border-border bg-background text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="imperial">Imperial (ft, in, lbs)</SelectItem>
                  <SelectItem value="metric">Metric (m, cm, kg)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-[11px] font-medium text-heading-accent">Concrete Mix</Label>
              <Select value={concreteMix} onValueChange={setConcreteMix}>
                <SelectTrigger className="h-8 text-xs border-border bg-background text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(concreteMixes).map(([key, mix]) => (
                    <SelectItem key={key} value={key}>
                      {mix.name} - {mix.strength}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm text-heading-accent flex items-center gap-1.5">
              {(() => {
                const IconComponent = getCalculationIcon(calculationType)
                return <IconComponent className="h-3.5 w-3.5" />
              })()}
              {getCalculationTypeLabel(calculationType)}
            </h3>

            {(calculationType === "slab" || calculationType === "footing" || calculationType === "wall" || calculationType === "driveway") && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="length" className="text-[10px] text-muted-foreground">Length (l)</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="length"
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      placeholder="5"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <Select defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <SelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="width" className="text-[10px] text-muted-foreground">Width (w)</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="width"
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="2.5"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <Select defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <SelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="height" className="text-[10px] text-muted-foreground">Thickness or Height (h)</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="5"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <Select defaultValue={unit === "metric" ? "centimeters" : "inches"}>
                      <SelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={unit === "metric" ? "centimeters" : "inches"}>
                          {unit === "metric" ? "cm" : "in"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="quantity" className="text-[10px] text-muted-foreground">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="1"
                    className="h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            )}

            {(calculationType === "column") && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="diameter" className="text-[10px] text-muted-foreground">Diameter (d)</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="diameter"
                      type="number"
                      value={diameter}
                      onChange={(e) => setDiameter(e.target.value)}
                      placeholder="2.5"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <Select defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <SelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="height" className="text-[10px] text-muted-foreground">Depth or Height (h)</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="6"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <Select defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <SelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="quantity" className="text-[10px] text-muted-foreground">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="1"
                    className="h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            )}

            {(calculationType === "tube") && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="diameter" className="text-[10px] text-muted-foreground">Outer Diameter (d1)</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="diameter"
                      type="number"
                      value={diameter}
                      onChange={(e) => setDiameter(e.target.value)}
                      placeholder="5"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <Select defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <SelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="innerDiameter" className="text-[10px] text-muted-foreground">Inner Diameter (d2)</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="innerDiameter"
                      type="number"
                      value={innerDiameter}
                      onChange={(e) => setInnerDiameter(e.target.value)}
                      placeholder="4"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <Select defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <SelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="height" className="text-[10px] text-muted-foreground">Length or Height (h)</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="6"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <Select defaultValue={unit === "metric" ? "centimeters" : "inches"}>
                      <SelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={unit === "metric" ? "centimeters" : "inches"}>
                          {unit === "metric" ? "cm" : "in"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="1"
                  />
                </div>
              </div>
            )}

            {(calculationType === "stairs") && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="run" className="text-[10px] text-muted-foreground">Run</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="run"
                      type="number"
                      value={run}
                      onChange={(e) => setRun(e.target.value)}
                      placeholder="12"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <Select defaultValue="inches">
                      <SelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inches">in</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="rise" className="text-[10px] text-muted-foreground">Rise</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="rise"
                      type="number"
                      value={rise}
                      onChange={(e) => setRise(e.target.value)}
                      placeholder="6"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <Select defaultValue="inches">
                      <SelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inches">in</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="width" className="text-[10px] text-muted-foreground">Width</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="width"
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="50"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <Select defaultValue="inches">
                      <SelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inches">in</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="steps" className="text-[10px] text-muted-foreground">Number of Steps</Label>
                  <Input
                    id="steps"
                    type="number"
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                    placeholder="5"
                    className="h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="platformDepth" className="text-[10px] text-muted-foreground">Platform Depth</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="platformDepth"
                      type="number"
                      value={platformDepth}
                      onChange={(e) => setPlatformDepth(e.target.value)}
                      placeholder="5"
                    />
                    <Select defaultValue="inches">
                      <SelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inches">in</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {(calculationType === "curb") && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="curbDepth" className="text-[10px] text-muted-foreground">Curb Depth</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="curbDepth"
                      type="number"
                      value={curbDepth}
                      onChange={(e) => setCurbDepth(e.target.value)}
                      placeholder="4"
                    />
                    <Select defaultValue="inches">
                      <SelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inches">in</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="gutterWidth" className="text-[10px] text-muted-foreground">Gutter Width</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="gutterWidth"
                      type="number"
                      value={gutterWidth}
                      onChange={(e) => setGutterWidth(e.target.value)}
                      placeholder="10"
                    />
                    <Select defaultValue="inches">
                      <SelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inches">in</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="curbHeight" className="text-[10px] text-muted-foreground">Curb Height</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="curbHeight"
                      type="number"
                      value={curbHeight}
                      onChange={(e) => setCurbHeight(e.target.value)}
                      placeholder="4"
                    />
                    <Select defaultValue="inches">
                      <SelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inches">in</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="flagThickness" className="text-[10px] text-muted-foreground">Flag Thickness</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="flagThickness"
                      type="number"
                      value={flagThickness}
                      onChange={(e) => setFlagThickness(e.target.value)}
                      placeholder="5"
                    />
                    <Select defaultValue="inches">
                      <SelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inches">in</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="length" className="text-[10px] text-muted-foreground">Length</Label>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <Input
                      id="length"
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      placeholder="10"
                    />
                    <Select defaultValue="feet">
                      <SelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="feet">ft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="1"
                  />
                </div>
              </div>
            )}
          </div>

          {}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={calculateConcrete} disabled={isCalculating} className="flex-1 h-9 text-xs font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground">
              {isCalculating ? <LoadingSpinner size="sm" className="mr-1 h-3 w-3" /> : <Calculator className="mr-1 h-3 w-3" />}
              Calculate
            </Button>
            <Button variant="outline" onClick={clearForm} className="w-full sm:w-auto h-9 text-xs border-border bg-card text-foreground hover:bg-secondary">
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>

      {}
      {result && (
        <Card className="shadow-lg border-border bg-card">
          <CardHeader className="pb-3 px-3 sm:px-6">
            <CardTitle className="flex items-center gap-1.5 text-base sm:text-lg text-foreground">
              <div className="p-1 sm:p-1.5 bg-primary/10 rounded-lg">
                <BarChart3 className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-foreground" />
              </div>
              Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 px-3 sm:px-6">
            {}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-card p-3 rounded-lg border border-border">
                <div className="flex items-center gap-1.5 mb-1">
                  <Volume className="h-3 w-3 text-heading-accent" />
                  <span className="text-xs font-medium text-heading-accent">Volume</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-foreground">
                  {result.volume} {unit === "metric" ? "m³" : "ft³"}
                </div>
              </div>
              <div className="bg-card p-3 rounded-lg border border-border">
                <div className="flex items-center gap-1.5 mb-1">
                  <Weight className="h-3 w-3 text-heading-accent" />
                  <span className="text-xs font-medium text-heading-accent">Weight</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-foreground">
                  {result.weight} {unit === "metric" ? "kg" : "lbs"}
                </div>
              </div>
              <div className="bg-card p-3 rounded-lg border border-border">
                <div className="flex items-center gap-1.5 mb-1">
                  <Package className="h-3 w-3 text-heading-accent" />
                  <span className="text-xs font-medium text-heading-accent">Bags</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-foreground">
                  {result.bags}
                </div>
              </div>
              <div className="bg-card p-3 rounded-lg border border-border">
                <div className="flex items-center gap-1.5 mb-1">
                  <Target className="h-3 w-3 text-heading-accent" />
                  <span className="text-xs font-medium text-heading-accent">Cost</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-foreground">
                  ${result.cost}
                </div>
              </div>
            </div>

            {}
            <div className="bg-card p-3 rounded-lg border border-border">
              <h3 className="font-semibold text-sm mb-2 text-heading-accent flex items-center gap-1.5">
                <PieChart className="h-3.5 w-3.5" />
                Material Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Cement</div>
                  <div className="text-sm font-semibold text-foreground">
                    {result.materialBreakdown.cement.toFixed(2)} {unit === "metric" ? "kg" : "lbs"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Sand</div>
                  <div className="text-sm font-semibold text-foreground">
                    {result.materialBreakdown.sand.toFixed(2)} {unit === "metric" ? "kg" : "lbs"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Gravel</div>
                  <div className="text-sm font-semibold text-foreground">
                    {result.materialBreakdown.gravel.toFixed(2)} {unit === "metric" ? "kg" : "lbs"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-muted-foreground">Water</div>
                  <div className="text-sm font-semibold text-foreground">
                    {result.materialBreakdown.water.toFixed(2)} {unit === "metric" ? "L" : "gal"}
                  </div>
                </div>
              </div>
            </div>

            {}
            <div className="bg-card p-3 rounded-lg border border-border">
              <h3 className="font-semibold text-sm mb-2 text-heading-accent flex items-center gap-1.5">
                <Info className="h-3.5 w-3.5" />
                Calculation Details
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="text-xs font-medium text-heading-accent mb-1">Formula Used:</div>
                  <div className="bg-muted p-2 rounded font-mono text-xs text-foreground">
                    {result.formula}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-medium text-heading-accent mb-1">Explanation:</div>
                  <div className="text-xs text-muted-foreground">{result.explanation}</div>
                </div>
              </div>
            </div>

            {}
            <div className="bg-card p-3 rounded-lg border border-border">
              <h3 className="font-semibold text-sm mb-2 text-heading-accent flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" />
                Recommendations
              </h3>
              <div className="space-y-1.5">
                {result.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1"></div>
                    <span className="text-xs text-muted-foreground">{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {}
            <div className="flex gap-3">
              <Button onClick={copyResult} variant="outline" className="flex-1 h-9 text-xs font-medium border border-border hover:bg-secondary text-heading-accent bg-card">
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5" />
                    Copy Results
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
