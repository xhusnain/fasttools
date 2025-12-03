"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GAlert, GAlertDescription } from "@/ui/galert"

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
import { LoadingSpinner } from "@/components/common/loading-spinner"

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
          // @ts-ignore
          dimensions = { length: od, width: od, height: ht, diameter: od, innerDiameter: id }
          break

        case "stairs":
          if (!run || !rise || !width || !steps) return
          const r = Number.parseFloat(run) / 12 // Convert inches to feet
          const ri = Number.parseFloat(rise) / 12 // Convert inches to feet
          const stairW = Number.parseFloat(width) / 12 // Convert inches to feet
          const s = Number.parseFloat(steps)
          const platDepth = Number.parseFloat(platformDepth) / 12 || 0 // Convert inches to feet
          const stepVolume = (r * ri * stairW * s) / 2
          const platformVolume = platDepth * stairW * 1 // Platform depth in feet
          volume = (stepVolume + platformVolume) * qty
          formula = `V = ((run × rise × width × steps) / 2 + platform) × qty = ${volume.toFixed(2)} ${unit === "metric" ? "m³" : "ft³"}`
          explanation = "Volume = ((Run × Rise × Width × Steps) / 2 + Platform Volume) × Quantity"
          dimensions = { length: r * s, width: stairW, height: ri * s }
          break

        case "curb":
          if (!curbDepth || !gutterWidth || !curbHeight || !flagThickness || !length) return
          const cd = Number.parseFloat(curbDepth) / 12 // Convert inches to feet
          const gw = Number.parseFloat(gutterWidth) / 12 // Convert inches to feet
          const ch = Number.parseFloat(curbHeight) / 12 // Convert inches to feet
          const ft = Number.parseFloat(flagThickness) / 12 // Convert inches to feet
          const len = Number.parseFloat(length) // Already in feet
          const curbVolume = (cd * ch * len) + (gw * ft * len)
          volume = curbVolume * qty
          formula = `V = (curb_depth × curb_height × length + gutter_width × flag_thickness × length) × qty = ${volume.toFixed(2)} ${unit === "metric" ? "m³" : "ft³"}`
          explanation = "Volume = (Curb Depth × Curb Height × Length + Gutter Width × Flag Thickness × Length) × Quantity"
          dimensions = { length: len, width: cd + gw, height: Math.max(ch, ft) }
          break
      }

      const density = unit === "metric" ? 2400 : 150 // kg/m³ or lbs/ft³
      const weight = volume * density
      const bags = Math.ceil(volume * (unit === "metric" ? 0.6 : 0.45)) // 60L bags or 0.45 ft³ bags
      const cost = bags * (unit === "metric" ? 8 : 6) // Cost per bag

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
      {/* Main Calculator GCard */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader className="pb-3 px-3 sm:px-6">
          <GCardTitle className="flex items-center gap-1.5 text-base">
            <div className="p-1 bg-primary/10 rounded">
              <Calculator className="h-3.5 w-3.5 text-foreground" />
            </div>
            Concrete Calculator
          </GCardTitle>
          <GCardDescription className="text-xs text-muted-foreground">
            Calculate volume, weight, materials, and cost.
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6 px-3 sm:px-6">
          {/* Calculation Type Selection */}
          <div className="space-y-2">
            <GLabel className="text-[11px] font-medium text-heading-accent">Calculation Type</GLabel>
            <GSelect value={calculationType} onValueChange={(value: CalculationType) => setCalculationType(value)}>
              <GSelectTrigger className="w-full h-8 text-xs border-border bg-background text-foreground">
                <GSelectValue placeholder="GSelect calculation type" />
              </GSelectTrigger>
              <GSelectContent>
                <GSelectItem value="slab">Slabs, Square Footings, or Walls</GSelectItem>
                <GSelectItem value="column">Hole, Column, or Round Footings</GSelectItem>
                <GSelectItem value="tube">Circular Slab or Tube</GSelectItem>
                <GSelectItem value="curb">Curb and Gutter Barrier</GSelectItem>
                <GSelectItem value="stairs">Stairs</GSelectItem>
                <GSelectItem value="footing">Foundation Footings</GSelectItem>
                <GSelectItem value="wall">Retaining Walls</GSelectItem>
                <GSelectItem value="driveway">Driveways and Patios</GSelectItem>
              </GSelectContent>
            </GSelect>
          </div>

          {/* Unit Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel className="text-[11px] font-medium text-heading-accent">Unit System</GLabel>
              <GSelect value={unit} onValueChange={(value: "metric" | "imperial") => setUnit(value)}>
                <GSelectTrigger className="h-8 text-xs border-border bg-background text-foreground">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="imperial">Imperial (ft, in, lbs)</GSelectItem>
                  <GSelectItem value="metric">Metric (m, cm, kg)</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
            <div className="space-y-2">
              <GLabel className="text-[11px] font-medium text-heading-accent">Concrete Mix</GLabel>
              <GSelect value={concreteMix} onValueChange={setConcreteMix}>
                <GSelectTrigger className="h-8 text-xs border-border bg-background text-foreground">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  {Object.entries(concreteMixes).map(([key, mix]) => (
                    <GSelectItem key={key} value={key}>
                      {mix.name} - {mix.strength}
                    </GSelectItem>
                  ))}
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          {/* Dynamic GInput Fields Based on Calculation Type */}
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
                  <GLabel htmlFor="length" className="text-[10px] text-muted-foreground">Length (l)</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="length"
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      placeholder="5"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <GSelect defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <GSelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="width" className="text-[10px] text-muted-foreground">Width (w)</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="width"
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="2.5"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <GSelect defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <GSelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="height" className="text-[10px] text-muted-foreground">Thickness or Height (h)</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="5"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <GSelect defaultValue={unit === "metric" ? "centimeters" : "inches"}>
                      <GSelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value={unit === "metric" ? "centimeters" : "inches"}>
                          {unit === "metric" ? "cm" : "in"}
                        </GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="quantity" className="text-[10px] text-muted-foreground">Quantity</GLabel>
                  <GInput
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
                  <GLabel htmlFor="diameter" className="text-[10px] text-muted-foreground">Diameter (d)</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="diameter"
                      type="number"
                      value={diameter}
                      onChange={(e) => setDiameter(e.target.value)}
                      placeholder="2.5"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <GSelect defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <GSelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="height" className="text-[10px] text-muted-foreground">Depth or Height (h)</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="6"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <GSelect defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <GSelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="quantity" className="text-[10px] text-muted-foreground">Quantity</GLabel>
                  <GInput
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
                  <GLabel htmlFor="diameter" className="text-[10px] text-muted-foreground">Outer Diameter (d1)</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="diameter"
                      type="number"
                      value={diameter}
                      onChange={(e) => setDiameter(e.target.value)}
                      placeholder="5"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <GSelect defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <GSelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="innerDiameter" className="text-[10px] text-muted-foreground">Inner Diameter (d2)</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="innerDiameter"
                      type="number"
                      value={innerDiameter}
                      onChange={(e) => setInnerDiameter(e.target.value)}
                      placeholder="4"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <GSelect defaultValue={unit === "metric" ? "meters" : "feet"}>
                      <GSelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value={unit === "metric" ? "meters" : "feet"}>
                          {unit === "metric" ? "m" : "ft"}
                        </GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="height" className="text-[10px] text-muted-foreground">Length or Height (h)</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="6"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <GSelect defaultValue={unit === "metric" ? "centimeters" : "inches"}>
                      <GSelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value={unit === "metric" ? "centimeters" : "inches"}>
                          {unit === "metric" ? "cm" : "in"}
                        </GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="quantity">Quantity</GLabel>
                  <GInput
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
                  <GLabel htmlFor="run" className="text-[10px] text-muted-foreground">Run</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="run"
                      type="number"
                      value={run}
                      onChange={(e) => setRun(e.target.value)}
                      placeholder="12"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <GSelect defaultValue="inches">
                      <GSelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="inches">in</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="rise" className="text-[10px] text-muted-foreground">Rise</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="rise"
                      type="number"
                      value={rise}
                      onChange={(e) => setRise(e.target.value)}
                      placeholder="6"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <GSelect defaultValue="inches">
                      <GSelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="inches">in</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="width" className="text-[10px] text-muted-foreground">Width</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="width"
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="50"
                      className="flex-1 h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                    <GSelect defaultValue="inches">
                      <GSelectTrigger className="w-full sm:w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="inches">in</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="steps" className="text-[10px] text-muted-foreground">Number of Steps</GLabel>
                  <GInput
                    id="steps"
                    type="number"
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                    placeholder="5"
                    className="h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="platformDepth" className="text-[10px] text-muted-foreground">Platform Depth</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="platformDepth"
                      type="number"
                      value={platformDepth}
                      onChange={(e) => setPlatformDepth(e.target.value)}
                      placeholder="5"
                    />
                    <GSelect defaultValue="inches">
                      <GSelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="inches">in</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
              </div>
            )}

            {(calculationType === "curb") && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <GLabel htmlFor="curbDepth" className="text-[10px] text-muted-foreground">Curb Depth</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="curbDepth"
                      type="number"
                      value={curbDepth}
                      onChange={(e) => setCurbDepth(e.target.value)}
                      placeholder="4"
                    />
                    <GSelect defaultValue="inches">
                      <GSelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="inches">in</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="gutterWidth" className="text-[10px] text-muted-foreground">Gutter Width</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="gutterWidth"
                      type="number"
                      value={gutterWidth}
                      onChange={(e) => setGutterWidth(e.target.value)}
                      placeholder="10"
                    />
                    <GSelect defaultValue="inches">
                      <GSelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="inches">in</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="curbHeight" className="text-[10px] text-muted-foreground">Curb Height</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="curbHeight"
                      type="number"
                      value={curbHeight}
                      onChange={(e) => setCurbHeight(e.target.value)}
                      placeholder="4"
                    />
                    <GSelect defaultValue="inches">
                      <GSelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="inches">in</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="flagThickness" className="text-[10px] text-muted-foreground">Flag Thickness</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="flagThickness"
                      type="number"
                      value={flagThickness}
                      onChange={(e) => setFlagThickness(e.target.value)}
                      placeholder="5"
                    />
                    <GSelect defaultValue="inches">
                      <GSelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="inches">in</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="length" className="text-[10px] text-muted-foreground">Length</GLabel>
                  <div className="flex flex-col sm:flex-row gap-1.5">
                    <GInput
                      id="length"
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      placeholder="10"
                    />
                    <GSelect defaultValue="feet">
                      <GSelectTrigger className="w-16 h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="feet">ft</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                </div>
                <div className="space-y-1">
                  <GLabel htmlFor="quantity">Quantity</GLabel>
                  <GInput
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <GButton onClick={calculateConcrete} disabled={isCalculating} className="w-full flex-1 h-9 text-xs font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground">
              {isCalculating ? <LoadingSpinner size="sm" className="mr-1 h-3 w-3" /> : <Calculator className="mr-1 h-3 w-3" />}
              Calculate Concrete Needed
            </GButton>
            <GButton variant="outline" onClick={clearForm} className="w-full sm:w-auto h-9 text-xs border-border bg-card text-foreground hover:bg-secondary">
              Clear
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Results Section */}
      {result && (
        <GCard className="shadow-lg border-border bg-card">
          <GCardHeader className="pb-3 px-3 sm:px-6">
            <GCardTitle className="flex items-center gap-1.5 text-base sm:text-lg text-foreground">
              <div className="p-1 sm:p-1.5 bg-primary/10 rounded-lg">
                <BarChart3 className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-foreground" />
              </div>
              Results
            </GCardTitle>
          </GCardHeader>
          <GCardContent className="space-y-6 px-3 sm:px-6">
            {/* Main Results */}
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

            {/* Material Breakdown */}
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

            {/* Formula and Explanation */}
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

            {/* Recommendations */}
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

            {/* Action Buttons */}
            <div className="flex gap-3">
              <GButton onClick={copyResult} variant="outline" className="flex-1 h-9 text-xs font-medium border border-border hover:bg-secondary text-heading-accent bg-card">
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
              </GButton>
            </div>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
