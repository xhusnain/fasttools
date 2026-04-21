"use client"

import { useState, useCallback, useMemo } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GTabs, GTabsList, GTabsTrigger, GTabsContent } from "@/ui/gtabs"
import { GSlider } from "@/ui/gslider"
import { GInput } from "@/ui/ginput"
import { GBadge } from "@/ui/gbadge"
import {
  Copy,
  Check,
  Plus,
  Trash2,
  Shuffle,
  RotateCcw,
} from "lucide-react"

// ── Types ──────────────────────────────────────────────────────────────────────

type GradientType = "linear" | "radial" | "conic"
type RadialShape = "ellipse" | "circle"
type RadialSize = "farthest-corner" | "closest-corner" | "farthest-side" | "closest-side"

interface ColorStop {
  id: string
  color: string
  position: number
}

type CopiedKey = "css" | "tailwind" | "scss" | "hex" | null

// ── Presets ────────────────────────────────────────────────────────────────────

const PRESETS: { name: string; type: GradientType; stops: Omit<ColorStop, "id">[]; angle?: number }[] = [
  { name: "Sunset", type: "linear", angle: 135, stops: [{ color: "#ff6b6b", position: 0 }, { color: "#feca57", position: 50 }, { color: "#ff9ff3", position: 100 }] },
  { name: "Ocean", type: "linear", angle: 135, stops: [{ color: "#667eea", position: 0 }, { color: "#764ba2", position: 100 }] },
  { name: "Forest", type: "linear", angle: 160, stops: [{ color: "#0f9b58", position: 0 }, { color: "#00bf72", position: 100 }] },
  { name: "Aurora", type: "linear", angle: 120, stops: [{ color: "#a8edea", position: 0 }, { color: "#fed6e3", position: 100 }] },
  { name: "Midnight", type: "linear", angle: 135, stops: [{ color: "#0c0c0c", position: 0 }, { color: "#1a1a2e", position: 50 }, { color: "#16213e", position: 100 }] },
  { name: "Peach", type: "linear", angle: 135, stops: [{ color: "#ffecd2", position: 0 }, { color: "#fcb69f", position: 100 }] },
  { name: "Cool Sky", type: "linear", angle: 180, stops: [{ color: "#2980b9", position: 0 }, { color: "#6dd5fa", position: 50 }, { color: "#ffffff", position: 100 }] },
  { name: "Citrus", type: "linear", angle: 90, stops: [{ color: "#f7971e", position: 0 }, { color: "#ffd200", position: 100 }] },
  { name: "Berry", type: "linear", angle: 135, stops: [{ color: "#6a3093", position: 0 }, { color: "#a044ff", position: 100 }] },
  { name: "Mint", type: "linear", angle: 135, stops: [{ color: "#00b09b", position: 0 }, { color: "#96c93d", position: 100 }] },
  { name: "Rose", type: "linear", angle: 135, stops: [{ color: "#f953c6", position: 0 }, { color: "#b91d73", position: 100 }] },
  { name: "Steel", type: "linear", angle: 135, stops: [{ color: "#616161", position: 0 }, { color: "#9bc5c3", position: 100 }] },
  { name: "Radial Halo", type: "radial", stops: [{ color: "#f093fb", position: 0 }, { color: "#f5576c", position: 100 }] },
  { name: "Radial Aqua", type: "radial", stops: [{ color: "#4facfe", position: 0 }, { color: "#00f2fe", position: 100 }] },
  { name: "Conic Rainbow", type: "conic", angle: 0, stops: [{ color: "#ff0000", position: 0 }, { color: "#ffff00", position: 25 }, { color: "#00ff00", position: 50 }, { color: "#0000ff", position: 75 }, { color: "#ff0000", position: 100 }] },
  { name: "Neon", type: "linear", angle: 90, stops: [{ color: "#00f5a0", position: 0 }, { color: "#00d9f5", position: 100 }] },
  { name: "Fire", type: "linear", angle: 0, stops: [{ color: "#f12711", position: 0 }, { color: "#f5af19", position: 100 }] },
  { name: "Lavender", type: "linear", angle: 135, stops: [{ color: "#e0c3fc", position: 0 }, { color: "#8ec5fc", position: 100 }] },
  { name: "Deep Space", type: "radial", stops: [{ color: "#000000", position: 0 }, { color: "#0d1b2a", position: 50 }, { color: "#1b263b", position: 100 }] },
  { name: "Lemon", type: "linear", angle: 45, stops: [{ color: "#f6d365", position: 0 }, { color: "#fda085", position: 100 }] },
]

// ── Helpers ────────────────────────────────────────────────────────────────────

let _id = 0
function uid() { return `s${++_id}` }

function randomHex(): string {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")
}

function buildCssValue(type: GradientType, stops: ColorStop[], angle: number, radialShape: RadialShape, radialSize: RadialSize): string {
  const stopsStr = stops
    .slice()
    .sort((a, b) => a.position - b.position)
    .map(s => `${s.color} ${s.position}%`)
    .join(", ")

  if (type === "linear") return `linear-gradient(${angle}deg, ${stopsStr})`
  if (type === "radial") return `radial-gradient(${radialShape} ${radialSize} at center, ${stopsStr})`
  return `conic-gradient(from ${angle}deg, ${stopsStr})`
}

function hexToTailwindApprox(hex: string): string {
  // Return the hex directly inside arbitrary value syntax
  return hex
}

function buildTailwindValue(type: GradientType, stops: ColorStop[], angle: number): string {
  const sorted = stops.slice().sort((a, b) => a.position - b.position)
  if (type !== "linear" || sorted.length < 2) return "/* Use CSS output for radial/conic */"
  const from = sorted[0].color
  const to = sorted[sorted.length - 1].color
  const via = sorted.length === 3 ? sorted[1].color : null
  const angleClass =
    angle === 0 ? "bg-gradient-to-t" :
    angle === 45 ? "bg-gradient-to-tr" :
    angle === 90 ? "bg-gradient-to-r" :
    angle === 135 ? "bg-gradient-to-br" :
    angle === 180 ? "bg-gradient-to-b" :
    angle === 225 ? "bg-gradient-to-bl" :
    angle === 270 ? "bg-gradient-to-l" :
    angle === 315 ? "bg-gradient-to-tl" :
    `bg-[linear-gradient(${angle}deg,var(--tw-gradient-stops))]`

  const fromClass = `from-[${from}]`
  const toClass = `to-[${to}]`
  const viaClass = via ? ` via-[${via}]` : ""
  return `${angleClass} ${fromClass}${viaClass} ${toClass}`
}

// ── Main Component ─────────────────────────────────────────────────────────────

export function CssGradientGenerator() {
  const [gradientType, setGradientType] = useState<GradientType>("linear")
  const [angle, setAngle] = useState(135)
  const [radialShape, setRadialShape] = useState<RadialShape>("ellipse")
  const [radialSize, setRadialSize] = useState<RadialSize>("farthest-corner")
  const [stops, setStops] = useState<ColorStop[]>([
    { id: uid(), color: "#667eea", position: 0 },
    { id: uid(), color: "#764ba2", position: 100 },
  ])
  const [copied, setCopied] = useState<CopiedKey>(null)
  const [activeOutputTab, setActiveOutputTab] = useState("css")

  // ── Derived values ──────────────────────────────────────────────────────────

  const cssValue = useMemo(
    () => buildCssValue(gradientType, stops, angle, radialShape, radialSize),
    [gradientType, stops, angle, radialShape, radialSize]
  )

  const cssProperty = `background: ${cssValue};`
  const tailwindValue = useMemo(() => buildTailwindValue(gradientType, stops, angle), [gradientType, stops, angle])
  const scssValue = `$gradient: ${cssValue};\n\n.element {\n  background: $gradient;\n}`

  // ── Stop management ─────────────────────────────────────────────────────────

  const updateStop = useCallback((id: string, field: "color" | "position", value: string | number) => {
    setStops(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s))
  }, [])

  const addStop = useCallback(() => {
    const sorted = stops.slice().sort((a, b) => a.position - b.position)
    // Insert midpoint between last two stops
    const last = sorted[sorted.length - 1]
    const secondLast = sorted[sorted.length - 2]
    const midPos = Math.round((last.position + secondLast.position) / 2)
    setStops(prev => [...prev, { id: uid(), color: randomHex(), position: midPos }])
  }, [stops])

  const removeStop = useCallback((id: string) => {
    setStops(prev => prev.length > 2 ? prev.filter(s => s.id !== id) : prev)
  }, [])

  // ── Copy helper ─────────────────────────────────────────────────────────────

  const copyText = useCallback((text: string, key: CopiedKey) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }, [])

  // ── Random gradient ─────────────────────────────────────────────────────────

  const randomize = useCallback(() => {
    const count = 2 + Math.floor(Math.random() * 2) // 2–3 stops
    const newStops: ColorStop[] = Array.from({ length: count }, (_, i) => ({
      id: uid(),
      color: randomHex(),
      position: Math.round((i / (count - 1)) * 100),
    }))
    setStops(newStops)
    setAngle(Math.round(Math.random() * 360))
  }, [])

  // ── Load preset ─────────────────────────────────────────────────────────────

  const loadPreset = useCallback((preset: typeof PRESETS[0]) => {
    setGradientType(preset.type)
    if (preset.angle !== undefined) setAngle(preset.angle)
    setStops(preset.stops.map(s => ({ ...s, id: uid() })))
  }, [])

  // ── Render ──────────────────────────────────────────────────────────────────

  const sortedStops = useMemo(() => stops.slice().sort((a, b) => a.position - b.position), [stops])

  return (
    <div className="space-y-6">
      {/* Live Preview */}
      <GCard>
        <GCardHeader className="border-b pb-4">
          <GCardTitle className="text-base">Live Preview</GCardTitle>
        </GCardHeader>
        <GCardContent className="pt-4">
          <div
            className="w-full rounded-lg border"
            style={{ background: cssValue, height: "180px" }}
          />
          {/* Gradient bar with stop markers */}
          <div className="relative mt-3 h-8 rounded-md overflow-hidden border" style={{ background: cssValue }}>
            {sortedStops.map(stop => (
              <div
                key={stop.id}
                className="absolute top-0 h-full w-0.5 bg-white/80 shadow"
                style={{ left: `${stop.position}%`, transform: "translateX(-50%)" }}
              />
            ))}
          </div>
        </GCardContent>
      </GCard>

      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Type + Stops */}
        <GCard>
          <GCardHeader className="border-b pb-4">
            <GCardTitle className="text-base">Gradient Settings</GCardTitle>
          </GCardHeader>
          <GCardContent className="pt-4 space-y-5">
            {/* Gradient type */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <div className="flex gap-2 flex-wrap">
                {(["linear", "radial", "conic"] as GradientType[]).map(t => (
                  <GButton
                    key={t}
                    size="sm"
                    variant={gradientType === t ? "default" : "outline"}
                    onClick={() => setGradientType(t)}
                    className="capitalize"
                  >
                    {t}
                  </GButton>
                ))}
              </div>
            </div>

            {/* Angle (linear + conic) */}
            {(gradientType === "linear" || gradientType === "conic") && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    {gradientType === "conic" ? "Starting Angle" : "Angle"}
                  </label>
                  <span className="text-sm text-muted-foreground font-mono">{angle}°</span>
                </div>
                <GSlider
                  min={0}
                  max={360}
                  step={1}
                  value={[angle]}
                  onValueChange={([v]) => setAngle(v)}
                />
                <div className="flex flex-wrap gap-1 mt-1">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
                    <button
                      key={a}
                      onClick={() => setAngle(a)}
                      className={`text-xs px-2 py-0.5 rounded border transition-colors ${angle === a ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"}`}
                    >
                      {a}°
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Radial shape + size */}
            {gradientType === "radial" && (
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Shape</label>
                  <div className="flex gap-2">
                    {(["ellipse", "circle"] as RadialShape[]).map(s => (
                      <GButton
                        key={s}
                        size="sm"
                        variant={radialShape === s ? "default" : "outline"}
                        onClick={() => setRadialShape(s)}
                        className="capitalize flex-1"
                      >
                        {s}
                      </GButton>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Size</label>
                  <select
                    value={radialSize}
                    onChange={e => setRadialSize(e.target.value as RadialSize)}
                    className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="farthest-corner">Farthest Corner</option>
                    <option value="closest-corner">Closest Corner</option>
                    <option value="farthest-side">Farthest Side</option>
                    <option value="closest-side">Closest Side</option>
                  </select>
                </div>
              </div>
            )}

            {/* Color stops */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Color Stops</label>
                <GButton size="xs" variant="outline" onClick={addStop} leftIcon={<Plus className="h-3 w-3" />}>
                  Add Stop
                </GButton>
              </div>
              <div className="space-y-3">
                {sortedStops.map(stop => (
                  <div key={stop.id} className="flex items-center gap-3">
                    {/* Color picker */}
                    <div className="relative">
                      <input
                        type="color"
                        value={stop.color}
                        onChange={e => updateStop(stop.id, "color", e.target.value)}
                        className="sr-only"
                        id={`color-${stop.id}`}
                      />
                      <label
                        htmlFor={`color-${stop.id}`}
                        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border shadow-sm hover:ring-2 hover:ring-ring transition-all"
                        style={{ backgroundColor: stop.color }}
                        title="Click to change color"
                      />
                    </div>
                    {/* Hex input */}
                    <GInput
                      value={stop.color}
                      onChange={e => {
                        const v = e.target.value
                        if (/^#[0-9a-fA-F]{0,6}$/.test(v)) updateStop(stop.id, "color", v)
                      }}
                      className="w-24 font-mono text-sm h-9"
                      maxLength={7}
                    />
                    {/* Position */}
                    <div className="flex-1 flex items-center gap-2">
                      <GSlider
                        min={0}
                        max={100}
                        step={1}
                        value={[stop.position]}
                        onValueChange={([v]) => updateStop(stop.id, "position", v)}
                        className="flex-1"
                      />
                      <span className="text-xs text-muted-foreground font-mono w-8 text-right">{stop.position}%</span>
                    </div>
                    {/* Remove */}
                    <GButton
                      size="icon"
                      variant="ghost"
                      onClick={() => removeStop(stop.id)}
                      disabled={stops.length <= 2}
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </GButton>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-1">
              <GButton variant="outline" size="sm" onClick={randomize} leftIcon={<Shuffle className="h-3.5 w-3.5" />}>
                Random
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => { setGradientType("linear"); setAngle(135); setStops([{ id: uid(), color: "#667eea", position: 0 }, { id: uid(), color: "#764ba2", position: 100 }]) }} leftIcon={<RotateCcw className="h-3.5 w-3.5" />}>
                Reset
              </GButton>
            </div>
          </GCardContent>
        </GCard>

        {/* Right: Output */}
        <div className="space-y-4">
          <GCard>
            <GCardHeader className="border-b pb-4">
              <GCardTitle className="text-base">CSS Output</GCardTitle>
            </GCardHeader>
            <GCardContent className="pt-4">
              <GTabs value={activeOutputTab} onValueChange={setActiveOutputTab}>
                <GTabsList className="w-full">
                  <GTabsTrigger value="css" className="flex-1">CSS</GTabsTrigger>
                  <GTabsTrigger value="tailwind" className="flex-1">Tailwind</GTabsTrigger>
                  <GTabsTrigger value="scss" className="flex-1">SCSS</GTabsTrigger>
                </GTabsList>

                <GTabsContent value="css" className="mt-3 space-y-3">
                  <pre className="rounded-md bg-muted p-3 text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap break-all">
                    {cssProperty}
                  </pre>
                  <GButton
                    size="sm"
                    className="w-full"
                    onClick={() => copyText(cssProperty, "css")}
                    leftIcon={copied === "css" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  >
                    {copied === "css" ? "Copied!" : "Copy CSS"}
                  </GButton>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p className="font-medium">Just the value:</p>
                    <pre className="rounded-md bg-muted p-2 text-xs font-mono overflow-x-auto whitespace-pre-wrap break-all">{cssValue}</pre>
                    <GButton size="xs" variant="outline" className="w-full mt-1" onClick={() => copyText(cssValue, "hex")} leftIcon={copied === "hex" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}>
                      {copied === "hex" ? "Copied!" : "Copy Value Only"}
                    </GButton>
                  </div>
                </GTabsContent>

                <GTabsContent value="tailwind" className="mt-3 space-y-3">
                  {gradientType !== "linear" && (
                    <p className="text-xs text-muted-foreground bg-muted/50 rounded-md p-2">Tailwind utility classes only support linear gradients directly. Use the CSS value for radial/conic gradients.</p>
                  )}
                  <pre className="rounded-md bg-muted p-3 text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap break-all">
                    {tailwindValue}
                  </pre>
                  <GButton
                    size="sm"
                    className="w-full"
                    onClick={() => copyText(tailwindValue, "tailwind")}
                    leftIcon={copied === "tailwind" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  >
                    {copied === "tailwind" ? "Copied!" : "Copy Tailwind Classes"}
                  </GButton>
                </GTabsContent>

                <GTabsContent value="scss" className="mt-3 space-y-3">
                  <pre className="rounded-md bg-muted p-3 text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap break-all">
                    {scssValue}
                  </pre>
                  <GButton
                    size="sm"
                    className="w-full"
                    onClick={() => copyText(scssValue, "scss")}
                    leftIcon={copied === "scss" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  >
                    {copied === "scss" ? "Copied!" : "Copy SCSS"}
                  </GButton>
                </GTabsContent>
              </GTabs>
            </GCardContent>
          </GCard>
        </div>
      </div>

      {/* Preset Gallery */}
      <GCard>
        <GCardHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <GCardTitle className="text-base">Gradient Presets</GCardTitle>
            <GBadge variant="secondary">{PRESETS.length} presets</GBadge>
          </div>
        </GCardHeader>
        <GCardContent className="pt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {PRESETS.map(preset => (
              <button
                key={preset.name}
                onClick={() => loadPreset(preset)}
                className="group relative rounded-lg overflow-hidden border hover:ring-2 hover:ring-primary transition-all focus:outline-none focus:ring-2 focus:ring-ring"
                style={{ height: "72px", background: buildCssValue(preset.type, preset.stops.map((s, i) => ({ ...s, id: String(i) })), preset.angle ?? 135, "ellipse", "farthest-corner") }}
                title={`Load "${preset.name}" preset`}
              >
                <span className="absolute inset-0 flex items-end justify-center pb-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-black/60 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">{preset.name}</span>
                </span>
              </button>
            ))}
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
