"use client"

import { useState, useRef, useEffect } from "react"
import { Copy, Check } from "lucide-react"
import { GButton } from "@/ui/gbutton"


interface ColorPickerProps {
  value: string
  onChange: (color: string) => void
  label?: string
  className?: string
  id?: string
}

interface HSL {
  h: number
  s: number
  l: number
}

interface RGB {
  r: number
  g: number
  b: number
}

// Global state to track which color picker is open
let globalOpenPickerId: string | null = null
const listeners: Set<(id: string | null) => void> = new Set()

const setGlobalOpenPicker = (id: string | null) => {
  globalOpenPickerId = id
  listeners.forEach(listener => listener(id))
}

const useGlobalOpenPicker = () => {
  const [openPickerId, setOpenPickerId] = useState<string | null>(globalOpenPickerId)

  useEffect(() => {
    const listener = (id: string | null) => setOpenPickerId(id)
    listeners.add(listener)
    return () => listeners.delete(listener)
  }, [])

  return openPickerId
}

export function ColorPicker({ value, onChange, label, className = "", id }: ColorPickerProps) {
  const [hsl, setHsl] = useState<HSL>({ h: 0, s: 100, l: 50 })
  const [copied, setCopied] = useState<string | null>(null)
  const pickerRef = useRef<HTMLDivElement>(null)
  const globalOpenPickerId = useGlobalOpenPicker()

  // Generate unique ID if not provided
  const pickerId = id || `color-picker-${Math.random().toString(36).substr(2, 9)}`
  const isOpen = globalOpenPickerId === pickerId

  // Convert hex to HSL
  const hexToHsl = (hex: string): HSL => {
    const r = parseInt(hex.slice(1, 3), 16) / 255
    const g = parseInt(hex.slice(3, 5), 16) / 255
    const b = parseInt(hex.slice(5, 7), 16) / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0
    let s = 0
    const l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break
        case g: h = (b - r) / d + 2; break
        case b: h = (r - g) / d + 4; break
      }
      h /= 6
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    }
  }

  // Convert HSL to hex
  const hslToHex = (h: number, s: number, l: number): string => {
    h /= 360
    s /= 100
    l /= 100

    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    let r, g, b

    if (s === 0) {
      r = g = b = l
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }

    const toHex = (c: number) => {
      const hex = Math.round(c * 255).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  // Convert HSL to RGB
  const hslToRgb = (h: number, s: number, l: number): RGB => {
    h /= 360
    s /= 100
    l /= 100

    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    let r, g, b

    if (s === 0) {
      r = g = b = l
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    }
  }

  // Convert RGB to CMYK
  const rgbToCmyk = (r: number, g: number, b: number) => {
    const c = 1 - (r / 255)
    const m = 1 - (g / 255)
    const y = 1 - (b / 255)
    const k = Math.min(c, m, y)

    return {
      c: Math.round((c - k) / (1 - k) * 100) || 0,
      m: Math.round((m - k) / (1 - k) * 100) || 0,
      y: Math.round((y - k) / (1 - k) * 100) || 0,
      k: Math.round(k * 100)
    }
  }

  // Convert HSL to HSV
  const hslToHsv = (h: number, s: number, l: number) => {
    const v = l + (s * Math.min(l, 100 - l)) / 100
    const s2 = v === 0 ? 0 : 2 * (1 - l / v) * 100

    return {
      h: Math.round(h),
      s: Math.round(s2),
      v: Math.round(v)
    }
  }

  // Initialize HSL from hex value
  useEffect(() => {
    if (value && value.match(/^#[0-9A-F]{6}$/i)) {
      setHsl(hexToHsl(value))
    }
  }, [value])

  // Handle saturation/lightness area click
  const handleSaturationClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const s = Math.round((x / rect.width) * 100)
    const l = Math.round(100 - (y / rect.height) * 100)

    const newHsl = { ...hsl, s: Math.max(0, Math.min(100, s)), l: Math.max(0, Math.min(100, l)) }
    setHsl(newHsl)
    onChange(hslToHex(newHsl.h, newHsl.s, newHsl.l))
  }

  // Handle hue slider change
  const handleHueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const h = parseInt(e.target.value)
    const newHsl = { ...hsl, h }
    setHsl(newHsl)
    onChange(hslToHex(newHsl.h, newHsl.s, newHsl.l))
  }

  // Copy color value
  const copyColor = (format: string, value: string) => {
    navigator.clipboard.writeText(value)
    setCopied(format)
    setTimeout(() => setCopied(null), 2000)
  }

  // Handle opening/closing picker
  const handleTogglePicker = () => {
    if (isOpen) {
      setGlobalOpenPicker(null)
    } else {
      setGlobalOpenPicker(pickerId)
    }
  }

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setGlobalOpenPicker(null)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const currentHex = hslToHex(hsl.h, hsl.s, hsl.l)
  const rgb = hslToRgb(hsl.h, hsl.s, hsl.l)
  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b)
  const hsv = hslToHsv(hsl.h, hsl.s, hsl.l)

  return (
    <div className={`relative ${className}`}>
      {/* Color Preview GButton */}
      <button
        onClick={handleTogglePicker}
        className="flex items-center gap-2 w-full p-3 rounded-lg border-2 border-primary hover:border-blue-600 transition-colors"
      >
        <div
          className="w-8 h-8 rounded border border-border"
          style={{ backgroundColor: currentHex }}
        />
        <span className="text-sm font-medium text-foreground">
          {label || "Select Color"}
        </span>
        <span className="text-sm text-muted-foreground ml-auto">
          {currentHex.toUpperCase()}
        </span>
      </button>

      {/* Color Picker Panel */}
      {isOpen && (
        <div
          ref={pickerRef}
          className="absolute top-full left-0 mt-2 p-4 bg-card border border-border rounded-lg shadow-lg z-50 w-80"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground">Color Picker</h3>
            <GButton
              size="sm"
              variant="ghost"
              onClick={() => setGlobalOpenPicker(null)}
              className="h-6 w-6 p-0"
            >
              ×
            </GButton>
          </div>

          {/* Main Color Selection Area */}
          <div className="space-y-4">
            {/* Current Color Preview */}
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded border border-border"
                style={{ backgroundColor: currentHex }}
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Selected Color</p>
                <p className="text-xs text-muted-foreground">{currentHex.toUpperCase()}</p>
              </div>
            </div>

            {/* Saturation/Lightness Area */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-foreground">Saturation & Lightness</label>
              <div
                className="relative w-full h-32 rounded border border-border cursor-crosshair"
                style={{
                  background: `linear-gradient(to right, white, hsl(${hsl.h}, 100%, 50%)), linear-gradient(to bottom, transparent, black)`
                }}
                onClick={handleSaturationClick}
              >
                <div
                  className="absolute w-3 h-3 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${hsl.s}%`,
                    top: `${100 - hsl.l}%`,
                    backgroundColor: currentHex
                  }}
                />
              </div>
            </div>

            {/* Hue Slider */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-foreground">Hue</label>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={hsl.h}
                  onChange={handleHueChange}
                  className="w-full h-6 appearance-none bg-transparent cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, 
                      hsl(0, 100%, 50%), 
                      hsl(60, 100%, 50%), 
                      hsl(120, 100%, 50%), 
                      hsl(180, 100%, 50%), 
                      hsl(240, 100%, 50%), 
                      hsl(300, 100%, 50%), 
                      hsl(360, 100%, 50%))`
                  }}
                />
                <div
                  className="absolute top-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${(hsl.h / 360) * 100}%`,
                    backgroundColor: `hsl(${hsl.h}, 100%, 50%)`
                  }}
                />
              </div>
            </div>

            {/* Color Format Display */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-foreground">Color Values</h4>

              {/* HEX */}
              <div className="flex items-center gap-2">
                <div className="w-12 text-xs font-medium text-muted-foreground">HEX</div>
                <div className="flex-1 px-2 py-1 bg-muted/50 rounded text-xs font-mono text-foreground">
                  {currentHex.toUpperCase()}
                </div>
                <GButton
                  size="sm"
                  variant="ghost"
                  onClick={() => copyColor('hex', currentHex.toUpperCase())}
                  className="h-6 w-6 p-0"
                >
                  {copied === 'hex' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </GButton>
              </div>

              {/* RGB */}
              <div className="flex items-center gap-2">
                <div className="w-12 text-xs font-medium text-muted-foreground">RGB</div>
                <div className="flex-1 px-2 py-1 bg-muted/50 rounded text-xs font-mono text-foreground">
                  {rgb.r}, {rgb.g}, {rgb.b}
                </div>
                <GButton
                  size="sm"
                  variant="ghost"
                  onClick={() => copyColor('rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`)}
                  className="h-6 w-6 p-0"
                >
                  {copied === 'rgb' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </GButton>
              </div>

              {/* CMYK */}
              <div className="flex items-center gap-2">
                <div className="w-12 text-xs font-medium text-muted-foreground">CMYK</div>
                <div className="flex-1 px-2 py-1 bg-muted/50 rounded text-xs font-mono text-foreground">
                  {cmyk.c}%, {cmyk.m}%, {cmyk.y}%, {cmyk.k}%
                </div>
                <GButton
                  size="sm"
                  variant="ghost"
                  onClick={() => copyColor('cmyk', `${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`)}
                  className="h-6 w-6 p-0"
                >
                  {copied === 'cmyk' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </GButton>
              </div>

              {/* HSV */}
              <div className="flex items-center gap-2">
                <div className="w-12 text-xs font-medium text-muted-foreground">HSV</div>
                <div className="flex-1 px-2 py-1 bg-muted/50 rounded text-xs font-mono text-foreground">
                  {hsv.h}°, {hsv.s}%, {hsv.v}%
                </div>
                <GButton
                  size="sm"
                  variant="ghost"
                  onClick={() => copyColor('hsv', `${hsv.h}°, ${hsv.s}%, ${hsv.v}%`)}
                  className="h-6 w-6 p-0"
                >
                  {copied === 'hsv' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </GButton>
              </div>

              {/* HSL */}
              <div className="flex items-center gap-2">
                <div className="w-12 text-xs font-medium text-muted-foreground">HSL</div>
                <div className="flex-1 px-2 py-1 bg-muted/50 rounded text-xs font-mono text-foreground">
                  {hsl.h}°, {hsl.s}%, {hsl.l}%
                </div>
                <GButton
                  size="sm"
                  variant="ghost"
                  onClick={() => copyColor('hsl', `${hsl.h}°, ${hsl.s}%, ${hsl.l}%`)}
                  className="h-6 w-6 p-0"
                >
                  {copied === 'hsl' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </GButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}