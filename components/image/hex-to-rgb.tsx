"use client"

import { useState, useEffect } from "react"
import { GInput } from "@/ui/ginput"
import { GCard } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"

import { Copy, Check, Palette, Sparkles } from "lucide-react"

type CopiedState = {
  [key: string]: boolean
}

const SAMPLE_COLORS = [
  { name: "Primary Blue", hex: "#2563eb" },
  { name: "Success Green", hex: "#10b981" },
  { name: "Warning Orange", hex: "#f59e0b" },
  { name: "Danger Red", hex: "#ef4444" },
  { name: "Purple", hex: "#8b5cf6" },
  { name: "Pink", hex: "#ec4899" },
]

export function HexToRGB() {
  const [inputMode, setInputMode] = useState<"hex" | "rgb" | "hsl">("hex")

  // GInput states
  const [hexInput, setHexInput] = useState("#2563eb")
  const [rgbR, setRgbR] = useState("37")
  const [rgbG, setRgbG] = useState("99")
  const [rgbB, setRgbB] = useState("235")
  const [hslH, setHslH] = useState("217")
  const [hslS, setHslS] = useState("83")
  const [hslL, setHslL] = useState("53")
  const [alpha, setAlpha] = useState("1")

  // Output states
  const [hex, setHex] = useState("#2563eb")
  const [rgb, setRgb] = useState({ r: 37, g: 99, b: 235 })
  const [hsl, setHsl] = useState({ h: 217, s: 83, l: 53 })

  const [copied, setCopied] = useState<CopiedState>({})
  const [error, setError] = useState("")

  // Color conversion functions
  const hexToRgb = (hexValue: string) => {
    const cleanHex = hexValue.replace("#", "")
    if (cleanHex.length !== 6) return null

    const r = parseInt(cleanHex.substring(0, 2), 16)
    const g = parseInt(cleanHex.substring(2, 4), 16)
    const b = parseInt(cleanHex.substring(4, 6), 16)

    return { r, g, b }
  }

  const rgbToHex = (r: number, g: number, b: number) => {
    const toHex = (n: number) => {
      const hex = Math.max(0, Math.min(255, n)).toString(16)
      return hex.length === 1 ? "0" + hex : hex
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255
    g /= 255
    b /= 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0
    let s = 0
    const l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6
          break
        case g:
          h = ((b - r) / d + 2) / 6
          break
        case b:
          h = ((r - g) / d + 4) / 6
          break
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    }
  }

  const hslToRgb = (h: number, s: number, l: number) => {
    s /= 100
    l /= 100

    const c = (1 - Math.abs(2 * l - 1)) * s
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
    const m = l - c / 2

    let r = 0
    let g = 0
    let b = 0

    if (h >= 0 && h < 60) {
      r = c
      g = x
      b = 0
    } else if (h >= 60 && h < 120) {
      r = x
      g = c
      b = 0
    } else if (h >= 120 && h < 180) {
      r = 0
      g = c
      b = x
    } else if (h >= 180 && h < 240) {
      r = 0
      g = x
      b = c
    } else if (h >= 240 && h < 300) {
      r = x
      g = 0
      b = c
    } else if (h >= 300 && h < 360) {
      r = c
      g = 0
      b = x
    }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
    }
  }

  // Update all formats when input changes
  useEffect(() => {
    try {
      setError("")

      if (inputMode === "hex") {
        const rgbResult = hexToRgb(hexInput)
        if (rgbResult) {
          setRgb(rgbResult)
          setHex(hexInput)
          const hslResult = rgbToHsl(rgbResult.r, rgbResult.g, rgbResult.b)
          setHsl(hslResult)
        } else {
          setError("Invalid hex color")
        }
      } else if (inputMode === "rgb") {
        const r = parseInt(rgbR) || 0
        const g = parseInt(rgbG) || 0
        const b = parseInt(rgbB) || 0

        if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
          setError("RGB values must be between 0-255")
          return
        }

        setRgb({ r, g, b })
        setHex(rgbToHex(r, g, b))
        const hslResult = rgbToHsl(r, g, b)
        setHsl(hslResult)
      } else if (inputMode === "hsl") {
        const h = parseInt(hslH) || 0
        const s = parseInt(hslS) || 0
        const l = parseInt(hslL) || 0

        if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) {
          setError("HSL values out of range")
          return
        }

        setHsl({ h, s, l })
        const rgbResult = hslToRgb(h, s, l)
        setRgb(rgbResult)
        setHex(rgbToHex(rgbResult.r, rgbResult.g, rgbResult.b))
      }
    } catch (err) {
      setError("Invalid color input")
    }
  }, [inputMode, hexInput, rgbR, rgbG, rgbB, hslH, hslS, hslL])

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied({ ...copied, [key]: true })
    setTimeout(() => {
      setCopied({ ...copied, [key]: false })
    }, 2000)
  }

  const loadSampleColor = (sampleHex: string) => {
    setInputMode("hex")
    setHexInput(sampleHex)
  }

  const alphaValue = parseFloat(alpha) || 1

  return (
    <div className="space-y-6">
      {/* Sample Colors */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <GLabel>Quick Colors</GLabel>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {SAMPLE_COLORS.map((sample) => (
            <button
              key={sample.hex}
              onClick={() => loadSampleColor(sample.hex)}
              className="group relative"
            >
              <div
                className="h-12 w-full rounded-lg border-2 border-border hover:border-primary transition-all cursor-pointer"
                style={{ backgroundColor: sample.hex }}
              />
              <span className="text-xs text-muted-foreground mt-1 block truncate group-hover:text-foreground">
                {sample.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* GInput Section */}
      <GCard className="p-4 sm:p-6">
        <GTabs value={inputMode} onValueChange={(v) => setInputMode(v as any)}>
          <GTabsList className="grid w-full grid-cols-3">
            <GTabsTrigger value="hex">Hex</GTabsTrigger>
            <GTabsTrigger value="rgb">RGB</GTabsTrigger>
            <GTabsTrigger value="hsl">HSL</GTabsTrigger>
          </GTabsList>

          <GTabsContent value="hex" className="space-y-4 mt-4">
            <div className="space-y-2">
              <GLabel>Hex Color Code</GLabel>
              <div className="flex gap-2">
                <GInput
                  type="text"
                  placeholder="#2563eb"
                  value={hexInput}
                  onChange={(e) => setHexInput(e.target.value)}
                  className="font-mono border-2 border-primary/30 focus:border-primary"
                />
                <input
                  type="color"
                  value={hex}
                  onChange={(e) => {
                    setInputMode("hex")
                    setHexInput(e.target.value)
                  }}
                  className="w-16 h-10 rounded border-2 border-border cursor-pointer"
                />
              </div>
            </div>
          </GTabsContent>

          <GTabsContent value="rgb" className="space-y-4 mt-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-2">
                <GLabel>R (0-255)</GLabel>
                <GInput
                  type="number"
                  min="0"
                  max="255"
                  value={rgbR}
                  onChange={(e) => setRgbR(e.target.value)}
                  className="border-2 border-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <GLabel>G (0-255)</GLabel>
                <GInput
                  type="number"
                  min="0"
                  max="255"
                  value={rgbG}
                  onChange={(e) => setRgbG(e.target.value)}
                  className="border-2 border-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <GLabel>B (0-255)</GLabel>
                <GInput
                  type="number"
                  min="0"
                  max="255"
                  value={rgbB}
                  onChange={(e) => setRgbB(e.target.value)}
                  className="border-2 border-primary/30 focus:border-primary"
                />
              </div>
            </div>
          </GTabsContent>

          <GTabsContent value="hsl" className="space-y-4 mt-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-2">
                <GLabel>H (0-360)</GLabel>
                <GInput
                  type="number"
                  min="0"
                  max="360"
                  value={hslH}
                  onChange={(e) => setHslH(e.target.value)}
                  className="border-2 border-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <GLabel>S (0-100)</GLabel>
                <GInput
                  type="number"
                  min="0"
                  max="100"
                  value={hslS}
                  onChange={(e) => setHslS(e.target.value)}
                  className="border-2 border-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <GLabel>L (0-100)</GLabel>
                <GInput
                  type="number"
                  min="0"
                  max="100"
                  value={hslL}
                  onChange={(e) => setHslL(e.target.value)}
                  className="border-2 border-primary/30 focus:border-primary"
                />
              </div>
            </div>
          </GTabsContent>
        </GTabs>

        {/* Alpha Channel */}
        <div className="mt-4 space-y-2">
          <GLabel>Alpha / Opacity (0-1)</GLabel>
          <div className="flex items-center gap-3">
            <GInput
              type="number"
              min="0"
              max="1"
              step="0.01"
              value={alpha}
              onChange={(e) => setAlpha(e.target.value)}
              className="w-24"
            />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={alpha}
              onChange={(e) => setAlpha(e.target.value)}
              className="flex-1"
            />
            <span className="text-sm text-muted-foreground w-12">{Math.round(alphaValue * 100)}%</span>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-destructive/10 border border-destructive rounded-lg">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}
      </GCard>

      {/* Color Preview */}
      <GCard className="p-6">
        <div className="flex items-center gap-4">
          <div
            className="h-32 w-32 rounded-lg border-2 border-border shadow-lg flex-shrink-0"
            style={{ backgroundColor: hex, opacity: alphaValue }}
          />
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Color Preview</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Current color with {Math.round(alphaValue * 100)}% opacity
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs pt-2">
              <div className="p-2 bg-muted rounded">
                <div className="font-semibold">Red</div>
                <div className="text-muted-foreground">{rgb.r}</div>
              </div>
              <div className="p-2 bg-muted rounded">
                <div className="font-semibold">Green</div>
                <div className="text-muted-foreground">{rgb.g}</div>
              </div>
              <div className="p-2 bg-muted rounded">
                <div className="font-semibold">Blue</div>
                <div className="text-muted-foreground">{rgb.b}</div>
              </div>
            </div>
          </div>
        </div>
      </GCard>

      {/* Output Formats */}
      <GCard className="p-6 space-y-4">
        <h3 className="font-semibold text-lg">All Color Formats</h3>

        <div className="space-y-3">
          {/* Hex */}
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Hex</p>
              <p className="font-mono text-base font-medium">{hex}</p>
            </div>
            <GButton
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(hex, "hex")}
              style={{
                backgroundColor: hex,
                borderColor: hex,
                color: hsl.l > 50 ? '#000000' : '#FFFFFF'
              }}
              className="hover:opacity-80 transition-opacity"
            >
              {copied.hex ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </GButton>
          </div>

          {/* RGB */}
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">RGB</p>
              <p className="font-mono text-base font-medium">rgb({rgb.r}, {rgb.g}, {rgb.b})</p>
            </div>
            <GButton
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, "rgb")}
              style={{
                backgroundColor: hex,
                borderColor: hex,
                color: hsl.l > 50 ? '#000000' : '#FFFFFF'
              }}
              className="hover:opacity-80 transition-opacity"
            >
              {copied.rgb ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </GButton>
          </div>

          {/* RGBA */}
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">RGBA</p>
              <p className="font-mono text-base font-medium">rgba({rgb.r}, {rgb.g}, {rgb.b}, {alphaValue})</p>
            </div>
            <GButton
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alphaValue})`, "rgba")}
              style={{
                backgroundColor: hex,
                borderColor: hex,
                color: hsl.l > 50 ? '#000000' : '#FFFFFF'
              }}
              className="hover:opacity-80 transition-opacity"
            >
              {copied.rgba ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </GButton>
          </div>

          {/* HSL */}
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">HSL</p>
              <p className="font-mono text-base font-medium">hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</p>
            </div>
            <GButton
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`, "hsl")}
              style={{
                backgroundColor: hex,
                borderColor: hex,
                color: hsl.l > 50 ? '#000000' : '#FFFFFF'
              }}
              className="hover:opacity-80 transition-opacity"
            >
              {copied.hsl ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </GButton>
          </div>

          {/* HSLA */}
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">HSLA</p>
              <p className="font-mono text-base font-medium">hsla({hsl.h}, {hsl.s}%, {hsl.l}%, {alphaValue})</p>
            </div>
            <GButton
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(`hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${alphaValue})`, "hsla")}
              style={{
                backgroundColor: hex,
                borderColor: hex,
                color: hsl.l > 50 ? '#000000' : '#FFFFFF'
              }}
              className="hover:opacity-80 transition-opacity"
            >
              {copied.hsla ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </GButton>
          </div>

          {/* CSS Variable */}
          <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">CSS Variable</p>
              <p className="font-mono text-base font-medium">--color-primary: {hex};</p>
            </div>
            <GButton
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(`--color-primary: ${hex};`, "css")}
              style={{
                backgroundColor: hex,
                borderColor: hex,
                color: hsl.l > 50 ? '#000000' : '#FFFFFF'
              }}
              className="hover:opacity-80 transition-opacity"
            >
              {copied.css ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </GButton>
          </div>
        </div>
      </GCard>
    </div>
  )
}
