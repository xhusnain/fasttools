"use client"

import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GTabs, GTabsList, GTabsTrigger, GTabsContent } from "@/ui/gtabs"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GInput } from "@/ui/ginput"
import { GBadge } from "@/ui/gbadge"
import {
  Shuffle,
  Lock,
  Unlock,
  Copy,
  Check,
  Upload,
  Download,
  Palette,
  Sparkles,
  Trash2,
  Plus,
  Eye,
  Image as ImageIcon,
  Code,
} from "lucide-react"

// === COLOR UTILITIES ===
interface RGB { r: number; g: number; b: number }
interface HSL { h: number; s: number; l: number }

function hexToRgb(hex: string): RGB {
  const h = hex.replace("#", "")
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  }
}

function rgbToHex({ r, g, b }: RGB): string {
  return "#" + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("")
}

function rgbToHsl({ r, g, b }: RGB): HSL {
  const rn = r / 255, gn = g / 255, bn = b / 255
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn)
  let h = 0, s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case rn: h = (gn - bn) / d + (gn < bn ? 6 : 0); break
      case gn: h = (bn - rn) / d + 2; break
      case bn: h = (rn - gn) / d + 4; break
    }
    h /= 6
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

function hslToRgb({ h, s, l }: HSL): RGB {
  const hn = h / 360, sn = s / 100, ln = l / 100
  let r = 0, g = 0, b = 0
  if (sn === 0) {
    r = g = b = ln
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }
    const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn
    const p = 2 * ln - q
    r = hue2rgb(p, q, hn + 1 / 3)
    g = hue2rgb(p, q, hn)
    b = hue2rgb(p, q, hn - 1 / 3)
  }
  return { r: r * 255, g: g * 255, b: b * 255 }
}

function hexToHsl(hex: string): HSL {
  return rgbToHsl(hexToRgb(hex))
}

function hslToHex(hsl: HSL): string {
  return rgbToHex(hslToRgb(hsl))
}

function randomHex(): string {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
}

// Relative luminance for WCAG
function luminance({ r, g, b }: RGB): number {
  const [rs, gs, bs] = [r, g, b].map(v => {
    const s = v / 255
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

function contrastRatio(hex1: string, hex2: string): number {
  const l1 = luminance(hexToRgb(hex1))
  const l2 = luminance(hexToRgb(hex2))
  const [lighter, darker] = l1 > l2 ? [l1, l2] : [l2, l1]
  return (lighter + 0.05) / (darker + 0.05)
}

// === HARMONY GENERATORS ===
type HarmonyMode = "random" | "complementary" | "analogous" | "triadic" | "tetradic" | "monochromatic" | "split-complementary"

function generateHarmony(baseHex: string, mode: HarmonyMode, count: number = 5): string[] {
  const base = hexToHsl(baseHex)
  const colors: HSL[] = [base]

  switch (mode) {
    case "complementary":
      colors.push({ ...base, h: (base.h + 180) % 360 })
      // Fill rest with monochromatic variations of base and complement
      while (colors.length < count) {
        const source = colors[colors.length % 2]
        const lVariation = Math.max(10, Math.min(90, source.l + (colors.length - 2) * 15))
        colors.push({ ...source, l: lVariation })
      }
      break
    case "analogous":
      for (let i = 1; i < count; i++) {
        colors.push({ ...base, h: (base.h + i * 30) % 360 })
      }
      break
    case "triadic":
      colors.push({ ...base, h: (base.h + 120) % 360 })
      colors.push({ ...base, h: (base.h + 240) % 360 })
      while (colors.length < count) {
        const idx = colors.length % 3
        const l = Math.max(20, Math.min(80, colors[idx].l + 20))
        colors.push({ ...colors[idx], l })
      }
      break
    case "tetradic":
      colors.push({ ...base, h: (base.h + 90) % 360 })
      colors.push({ ...base, h: (base.h + 180) % 360 })
      colors.push({ ...base, h: (base.h + 270) % 360 })
      while (colors.length < count) {
        colors.push({ ...base, l: Math.max(20, Math.min(80, base.l + (colors.length - 4) * 20)) })
      }
      break
    case "monochromatic":
      for (let i = 1; i < count; i++) {
        const lShift = (i - (count - 1) / 2) * 15
        colors.push({ ...base, l: Math.max(10, Math.min(95, base.l + lShift)) })
      }
      break
    case "split-complementary":
      colors.push({ ...base, h: (base.h + 150) % 360 })
      colors.push({ ...base, h: (base.h + 210) % 360 })
      while (colors.length < count) {
        const idx = colors.length % 3
        colors.push({ ...colors[idx], l: Math.max(20, Math.min(80, colors[idx].l + 20)) })
      }
      break
    case "random":
    default:
      while (colors.length < count) {
        colors.push(hexToHsl(randomHex()))
      }
      break
  }

  return colors.slice(0, count).map(hslToHex)
}

// Extract dominant colors from image via canvas quantization
async function extractColorsFromImage(file: File, count: number = 5): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement("canvas")
      const size = 100
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext("2d")
      if (!ctx) return reject(new Error("Canvas not supported"))
      ctx.drawImage(img, 0, 0, size, size)
      const data = ctx.getImageData(0, 0, size, size).data

      // Simple color quantization: bucket colors into 4-bit channels
      const buckets = new Map<string, { count: number; r: number; g: number; b: number }>()
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const a = data[i + 3]
        if (a < 128) continue
        // Skip near-white and near-black pixels to get vivid colors
        const br = (r + g + b) / 3
        if (br < 20 || br > 235) continue

        const key = `${r >> 4}_${g >> 4}_${b >> 4}`
        const existing = buckets.get(key)
        if (existing) {
          existing.count++
          existing.r += r
          existing.g += g
          existing.b += b
        } else {
          buckets.set(key, { count: 1, r, g, b })
        }
      }

      const sorted = Array.from(buckets.values()).sort((a, b) => b.count - a.count)
      const colors = sorted.slice(0, count).map(b => rgbToHex({
        r: b.r / b.count,
        g: b.g / b.count,
        b: b.b / b.count,
      }))

      // Pad with random if not enough
      while (colors.length < count) colors.push(randomHex())
      resolve(colors)
    }
    img.onerror = () => reject(new Error("Failed to load image"))
    const reader = new FileReader()
    reader.onload = (e) => { img.src = e.target?.result as string }
    reader.readAsDataURL(file)
  })
}

// === COMPONENT ===
interface PaletteColor {
  hex: string
  locked: boolean
}

const HARMONY_OPTIONS: { value: HarmonyMode; label: string }[] = [
  { value: "random", label: "Random" },
  { value: "complementary", label: "Complementary" },
  { value: "analogous", label: "Analogous" },
  { value: "triadic", label: "Triadic" },
  { value: "tetradic", label: "Tetradic (Square)" },
  { value: "split-complementary", label: "Split Complementary" },
  { value: "monochromatic", label: "Monochromatic" },
]

export function ColorPaletteGenerator() {
  const [palette, setPalette] = useState<PaletteColor[]>([])
  const [harmonyMode, setHarmonyMode] = useState<HarmonyMode>("random")
  const [colorCount, setColorCount] = useState(5)
  const [selectedColor, setSelectedColor] = useState<number>(0)
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const [copiedExport, setCopiedExport] = useState<string | null>(null)
  const [exportFormat, setExportFormat] = useState<"css" | "tailwind" | "scss" | "json" | "hex">("css")
  const [imageError, setImageError] = useState("")
  const [mainTab, setMainTab] = useState("generate")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Generate initial palette
  useEffect(() => {
    setPalette(
      generateHarmony(randomHex(), "random", 5).map(hex => ({ hex, locked: false }))
    )
  }, [])

  const regenerate = useCallback(() => {
    setPalette((prev) => {
      const unlocked = prev.filter(p => !p.locked)
      const locked = prev.filter(p => p.locked)

      let newColors: string[]
      if (harmonyMode === "random") {
        newColors = unlocked.map(() => randomHex())
      } else {
        // Use first locked color as base, or random if none locked
        const base = locked[0]?.hex || randomHex()
        const allHarmony = generateHarmony(base, harmonyMode, colorCount)
        // Remove colors that match locked ones, use remaining for unlocked slots
        const lockedHexes = new Set(locked.map(l => l.hex.toLowerCase()))
        newColors = allHarmony.filter(c => !lockedHexes.has(c.toLowerCase())).slice(0, unlocked.length)
        while (newColors.length < unlocked.length) newColors.push(randomHex())
      }

      let colorIdx = 0
      return prev.map(p => p.locked ? p : { hex: newColors[colorIdx++] || randomHex(), locked: false })
    })
  }, [harmonyMode, colorCount])

  // Update palette count
  useEffect(() => {
    setPalette((prev) => {
      if (prev.length === colorCount) return prev
      if (prev.length < colorCount) {
        const toAdd = colorCount - prev.length
        return [...prev, ...Array(toAdd).fill(null).map(() => ({ hex: randomHex(), locked: false }))]
      }
      return prev.slice(0, colorCount)
    })
  }, [colorCount])

  // Spacebar to regenerate
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Space" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault()
        regenerate()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [regenerate])

  const toggleLock = useCallback((index: number) => {
    setPalette((prev) => prev.map((p, i) => i === index ? { ...p, locked: !p.locked } : p))
  }, [])

  const updateColor = useCallback((index: number, hex: string) => {
    setPalette((prev) => prev.map((p, i) => i === index ? { ...p, hex } : p))
  }, [])

  const removeColor = useCallback((index: number) => {
    setPalette((prev) => prev.filter((_, i) => i !== index))
    setColorCount((prev) => Math.max(2, prev - 1))
  }, [])

  const addColor = useCallback(() => {
    if (palette.length >= 10) return
    setPalette((prev) => [...prev, { hex: randomHex(), locked: false }])
    setColorCount((prev) => Math.min(10, prev + 1))
  }, [palette.length])

  const copyHex = useCallback(async (hex: string) => {
    await navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 1500)
  }, [])

  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImageError("")
    try {
      const colors = await extractColorsFromImage(file, colorCount)
      setPalette(colors.map(hex => ({ hex, locked: false })))
      setMainTab("generate")
    } catch {
      setImageError("Failed to extract colors from image. Try a different image.")
    }
  }, [colorCount])

  // Export generation
  const exportString = useMemo(() => {
    const colors = palette.map(p => p.hex)
    switch (exportFormat) {
      case "css":
        return `:root {\n${colors.map((c, i) => `  --color-${i + 1}: ${c};`).join("\n")}\n}`
      case "tailwind":
        return `// tailwind.config.js\ntheme: {\n  extend: {\n    colors: {\n${colors.map((c, i) => `      palette${i + 1}: "${c}",`).join("\n")}\n    }\n  }\n}`
      case "scss":
        return colors.map((c, i) => `$color-${i + 1}: ${c};`).join("\n")
      case "json":
        return JSON.stringify({
          palette: colors.map((c, i) => ({
            name: `color-${i + 1}`,
            hex: c,
            rgb: hexToRgb(c),
            hsl: hexToHsl(c),
          }))
        }, null, 2)
      case "hex":
      default:
        return colors.join(", ")
    }
  }, [palette, exportFormat])

  const copyExport = useCallback(async () => {
    await navigator.clipboard.writeText(exportString)
    setCopiedExport(exportFormat)
    setTimeout(() => setCopiedExport(null), 2000)
  }, [exportString, exportFormat])

  const downloadExport = useCallback(() => {
    const extensions: Record<string, string> = {
      css: "css", tailwind: "js", scss: "scss", json: "json", hex: "txt"
    }
    const blob = new Blob([exportString], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `palette.${extensions[exportFormat]}`
    a.click()
    URL.revokeObjectURL(url)
  }, [exportString, exportFormat])

  const selectedColorHex = palette[selectedColor]?.hex || "#000000"
  const whiteContrast = useMemo(() => contrastRatio(selectedColorHex, "#FFFFFF"), [selectedColorHex])
  const blackContrast = useMemo(() => contrastRatio(selectedColorHex, "#000000"), [selectedColorHex])

  function contrastRating(ratio: number): { grade: string; color: string } {
    if (ratio >= 7) return { grade: "AAA", color: "text-green-500" }
    if (ratio >= 4.5) return { grade: "AA", color: "text-green-500" }
    if (ratio >= 3) return { grade: "AA Large", color: "text-yellow-500" }
    return { grade: "Fail", color: "text-red-500" }
  }

  return (
    <div className="space-y-6">
      {/* Controls */}
      <GCard>
        <GCardHeader className="pb-3">
          <GCardTitle className="text-base flex items-center gap-2">
            <Palette className="h-4 w-4" /> Palette Controls
          </GCardTitle>
        </GCardHeader>
        <GCardContent>
          <div className="flex flex-wrap items-end gap-3">
            <div className="space-y-1.5 min-w-[200px]">
              <label className="text-xs text-muted-foreground">Harmony Mode</label>
              <GSelect value={harmonyMode} onValueChange={(v) => setHarmonyMode(v as HarmonyMode)}>
                <GSelectTrigger className="w-full">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  {HARMONY_OPTIONS.map((o) => (
                    <GSelectItem key={o.value} value={o.value}>{o.label}</GSelectItem>
                  ))}
                </GSelectContent>
              </GSelect>
            </div>

            <div className="space-y-1.5 min-w-[120px]">
              <label className="text-xs text-muted-foreground">Colors</label>
              <GSelect value={colorCount.toString()} onValueChange={(v) => setColorCount(parseInt(v))}>
                <GSelectTrigger className="w-full">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <GSelectItem key={n} value={n.toString()}>{n} colors</GSelectItem>
                  ))}
                </GSelectContent>
              </GSelect>
            </div>

            <GButton onClick={regenerate}>
              <Shuffle className="h-4 w-4 mr-1.5" /> Generate
            </GButton>

            <GButton variant="outline" onClick={addColor} disabled={palette.length >= 10}>
              <Plus className="h-4 w-4 mr-1.5" /> Add
            </GButton>

            <div className="flex-1" />

            <p className="text-xs text-muted-foreground">
              Press <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border text-[10px]">Space</kbd> to regenerate unlocked colors
            </p>
          </div>
        </GCardContent>
      </GCard>

      {/* Palette Display */}
      <div className="rounded-xl overflow-hidden border border-border">
        <div className="grid" style={{ gridTemplateColumns: `repeat(${palette.length}, 1fr)`, minHeight: "240px" }}>
          {palette.map((color, i) => {
            const hsl = hexToHsl(color.hex)
            const isDark = hsl.l < 50
            const textColor = isDark ? "text-white" : "text-black"
            const isSelected = selectedColor === i
            return (
              <div
                key={i}
                className={`group relative flex flex-col justify-end p-4 transition-all cursor-pointer ${isSelected ? "ring-2 ring-primary ring-inset z-10" : ""}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setSelectedColor(i)}
              >
                <div className={`absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity ${isSelected ? "opacity-100" : ""}`}>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleLock(i) }}
                    className={`p-1.5 rounded-md backdrop-blur-sm ${isDark ? "bg-white/20 text-white hover:bg-white/30" : "bg-black/20 text-black hover:bg-black/30"}`}
                    title={color.locked ? "Unlock color" : "Lock color"}
                  >
                    {color.locked ? <Lock className="h-3.5 w-3.5" /> : <Unlock className="h-3.5 w-3.5" />}
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); copyHex(color.hex) }}
                    className={`p-1.5 rounded-md backdrop-blur-sm ${isDark ? "bg-white/20 text-white hover:bg-white/30" : "bg-black/20 text-black hover:bg-black/30"}`}
                    title="Copy hex"
                  >
                    {copiedHex === color.hex ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                  {palette.length > 2 && (
                    <button
                      onClick={(e) => { e.stopPropagation(); removeColor(i) }}
                      className={`p-1.5 rounded-md backdrop-blur-sm ${isDark ? "bg-white/20 text-white hover:bg-white/30" : "bg-black/20 text-black hover:bg-black/30"}`}
                      title="Remove color"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                {color.locked && (
                  <div className={`absolute top-3 left-3 p-1 rounded backdrop-blur-sm ${isDark ? "bg-white/20 text-white" : "bg-black/20 text-black"}`}>
                    <Lock className="h-3 w-3" />
                  </div>
                )}

                <div className={textColor}>
                  <div className="font-mono font-bold text-sm uppercase tracking-wider">{color.hex}</div>
                  <div className="text-[11px] opacity-75">
                    RGB({Object.values(hexToRgb(color.hex)).map(v => Math.round(v)).join(", ")})
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Details + Export */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Selected Color Details */}
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-base flex items-center gap-2">
              <Eye className="h-4 w-4" /> Color Details
              <GBadge variant="outline" className="font-mono">{selectedColorHex}</GBadge>
            </GCardTitle>
          </GCardHeader>
          <GCardContent className="space-y-4">
            {/* Color picker + hex input */}
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={selectedColorHex}
                onChange={(e) => updateColor(selectedColor, e.target.value)}
                className="h-10 w-14 rounded border border-border cursor-pointer"
              />
              <GInput
                value={selectedColorHex}
                onChange={(e) => {
                  const v = e.target.value
                  if (/^#[0-9a-fA-F]{6}$/.test(v)) updateColor(selectedColor, v)
                  else if (/^[0-9a-fA-F]{6}$/.test(v)) updateColor(selectedColor, "#" + v)
                }}
                className="font-mono uppercase"
                maxLength={7}
              />
              <GButton variant="outline" size="sm" onClick={() => copyHex(selectedColorHex)}>
                {copiedHex === selectedColorHex ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </GButton>
            </div>

            {/* Value formats */}
            <div className="space-y-2 text-sm">
              {(() => {
                const rgb = hexToRgb(selectedColorHex)
                const hsl = hexToHsl(selectedColorHex)
                return (
                  <>
                    <DetailRow label="HEX" value={selectedColorHex.toUpperCase()} onCopy={() => copyHex(selectedColorHex)} copied={copiedHex === selectedColorHex} />
                    <DetailRow label="RGB" value={`rgb(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)})`} />
                    <DetailRow label="HSL" value={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`} />
                  </>
                )
              })()}
            </div>

            {/* WCAG Contrast */}
            <div className="pt-2 border-t border-border">
              <div className="text-xs font-medium mb-2 flex items-center gap-1.5">
                WCAG Contrast
                <GBadge variant="secondary" className="text-[10px]">Accessibility</GBadge>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <ContrastCard bg="#FFFFFF" fg={selectedColorHex} ratio={whiteContrast} rating={contrastRating(whiteContrast)} label="on White" />
                <ContrastCard bg="#000000" fg={selectedColorHex} ratio={blackContrast} rating={contrastRating(blackContrast)} label="on Black" />
              </div>
            </div>
          </GCardContent>
        </GCard>

        {/* Image Extract / Export */}
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-base flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Tools & Export
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <GTabs value={mainTab} onValueChange={setMainTab}>
              <GTabsList className="w-full">
                <GTabsTrigger value="generate" className="flex-1">
                  <Code className="h-3.5 w-3.5 mr-1.5" /> Export
                </GTabsTrigger>
                <GTabsTrigger value="image" className="flex-1">
                  <ImageIcon className="h-3.5 w-3.5 mr-1.5" /> From Image
                </GTabsTrigger>
              </GTabsList>

              <GTabsContent value="generate" className="space-y-3">
                <div className="flex items-center gap-2">
                  <GSelect value={exportFormat} onValueChange={(v) => setExportFormat(v as typeof exportFormat)}>
                    <GSelectTrigger className="w-full">
                      <GSelectValue />
                    </GSelectTrigger>
                    <GSelectContent>
                      <GSelectItem value="css">CSS Variables</GSelectItem>
                      <GSelectItem value="tailwind">Tailwind Config</GSelectItem>
                      <GSelectItem value="scss">SCSS Variables</GSelectItem>
                      <GSelectItem value="json">JSON</GSelectItem>
                      <GSelectItem value="hex">Plain Hex List</GSelectItem>
                    </GSelectContent>
                  </GSelect>
                  <GButton variant="outline" size="sm" onClick={copyExport}>
                    {copiedExport === exportFormat ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                    Copy
                  </GButton>
                  <GButton variant="outline" size="sm" onClick={downloadExport}>
                    <Download className="h-4 w-4 mr-1" />
                  </GButton>
                </div>
                <pre className="text-xs bg-muted/50 rounded-lg p-3 overflow-auto max-h-[260px] font-mono">
                  {exportString}
                </pre>
              </GTabsContent>

              <GTabsContent value="image" className="space-y-3">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer"
                >
                  <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm font-medium">Upload an image to extract colors</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    JPG, PNG, GIF, WebP
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                {imageError && (
                  <div className="text-sm text-red-500 bg-red-500/10 rounded-lg p-3">{imageError}</div>
                )}
                <p className="text-xs text-muted-foreground">
                  Extracts the {colorCount} most prominent colors from your image using color quantization.
                  Runs in the browser with Canvas after you choose a file.
                </p>
              </GTabsContent>
            </GTabs>
          </GCardContent>
        </GCard>
      </div>
    </div>
  )
}

function DetailRow({ label, value, onCopy, copied }: { label: string; value: string; onCopy?: () => void; copied?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-muted-foreground w-12">{label}</span>
      <code className="flex-1 text-xs font-mono bg-muted/50 px-2 py-1 rounded">{value}</code>
      {onCopy && (
        <button onClick={onCopy} className="p-1 text-muted-foreground hover:text-foreground">
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      )}
    </div>
  )
}

function ContrastCard({ bg, fg, ratio, rating, label }: { bg: string; fg: string; ratio: number; rating: { grade: string; color: string }; label: string }) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="p-3 text-center font-bold text-lg" style={{ backgroundColor: bg, color: fg }}>
        Aa
      </div>
      <div className="p-2 bg-card space-y-0.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{label}</span>
          <span className={`font-bold ${rating.color}`}>{rating.grade}</span>
        </div>
        <div className="text-[11px] font-mono text-muted-foreground">{ratio.toFixed(2)}:1</div>
      </div>
    </div>
  )
}
