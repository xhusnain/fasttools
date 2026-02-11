"use client"

import { useState, useMemo } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { CopyButton } from "@/components/common/copy-button"
import {
  convertBase,
  parseInputWithPrefix,
  getBitLength,
  getByteLength,
  BASE_PRESETS,
} from "@/lib/integer-base-converter"
import type { ConversionRowProps } from "@/types/converter-types/integer-base-converter.types"
import {
  Binary,
  Download,
  RotateCcw,
  Settings,
  Minus,
  Plus,
  Info,
} from "lucide-react"

function safeConvert(
  value: string,
  fromBase: number,
  toBase: number,
  options: { hexUppercase?: boolean; addPrefix?: boolean; digitGrouping?: boolean } = {}
): string {
  if (!value.trim()) return ""
  try {
    return convertBase({ value, fromBase, toBase, ...options })
  } catch {
    return ""
  }
}

function ConversionRow({ label, value, suffix, copyId }: ConversionRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-3 border-b border-border/60 last:border-0">
      <div className="flex items-center justify-between sm:justify-start sm:min-w-[140px]">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {suffix && (
          <span className="text-xs text-muted-foreground ml-1">{suffix}</span>
        )}
      </div>
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <GInput
          value={value}
          readOnly
          className="font-mono text-sm bg-muted/50 border-border flex-1"
        />
        {value && (
          <CopyButton
            text={value.replace(/[_ ]/g, "")}
            id={copyId}
            className="shrink-0"
          />
        )}
      </div>
    </div>
  )
}

export function IntegerBaseConverter() {
  const [input, setInput] = useState("42")
  const [inputBase, setInputBase] = useState(10)
  const [customBase, setCustomBase] = useState(12)
  const [hexUppercase, setHexUppercase] = useState(false)
  const [addPrefix, setAddPrefix] = useState(false)
  const [digitGrouping, setDigitGrouping] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const options = { hexUppercase, addPrefix, digitGrouping }

  const parsed = useMemo(() => parseInputWithPrefix(input), [input])
  const effectiveBase = input.trim() && parsed.prefix ? parsed.base : inputBase

  const valueForConversion = useMemo(() => {
    if (!input.trim()) return ""
    const digits = parsed.prefix ? parsed.value : input.replace(/[_,\s]/g, "")
    return (parsed.isNegative ? "-" : "") + digits
  }, [input, parsed])

  const handleInputChange = (value: string) => {
    setInput(value)
  }

  const binaryResult = useMemo(
    () => safeConvert(valueForConversion, effectiveBase, 2, options),
    [valueForConversion, effectiveBase, options]
  )
  const bitLength = binaryResult ? getBitLength(binaryResult.replace(/[-_\s]/g, "")) : 0
  const byteLength = bitLength ? getByteLength(bitLength) : 0

  const conversions = useMemo(
    () => [
      {
        label: "Binary (2)",
        value: binaryResult,
        base: 2,
        suffix: binaryResult ? `${bitLength} bits, ${byteLength} bytes` : undefined,
      },
      {
        label: "Octal (8)",
        value: safeConvert(valueForConversion, effectiveBase, 8, options),
        base: 8,
      },
      {
        label: "Decimal (10)",
        value: safeConvert(valueForConversion, effectiveBase, 10, options),
        base: 10,
      },
      {
        label: "Hexadecimal (16)",
        value: safeConvert(valueForConversion, effectiveBase, 16, options),
        base: 16,
      },
      {
        label: "Base 36",
        value: safeConvert(valueForConversion, effectiveBase, 36, options),
        base: 36,
      },
      {
        label: "Base 64",
        value: safeConvert(valueForConversion, effectiveBase, 64, options),
        base: 64,
      },
      {
        label: `Custom (${customBase})`,
        value: safeConvert(valueForConversion, effectiveBase, customBase, options),
        base: customBase,
      },
    ],
    [valueForConversion, effectiveBase, customBase, binaryResult, bitLength, byteLength, options]
  )

  const error = useMemo(() => {
    if (!valueForConversion) return null
    try {
      convertBase({
        value: valueForConversion,
        fromBase: effectiveBase,
        toBase: 10,
      })
      return null
    } catch (e) {
      return e instanceof Error ? e.message : "Invalid input"
    }
  }, [valueForConversion, effectiveBase])

  const downloadAll = () => {
    const lines = conversions
      .filter((c) => c.value)
      .map((c) => `${c.label}: ${c.value.replace(/[_ ]/g, "")}`)
    if (binaryResult && bitLength) {
      lines.unshift(`Bits: ${bitLength}, Bytes: ${byteLength}`)
    }
    const content = [
      "Integer Base Converter - FastTools",
      "================================",
      "",
      `Input: ${input} (base ${effectiveBase})`,
      "",
      ...lines,
      "",
      `Generated: ${new Date().toLocaleString()}`,
    ].join("\n")

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "base-conversion-results.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  const reset = () => {
    setInput("42")
    setInputBase(10)
    setCustomBase(12)
    setHexUppercase(false)
    setAddPrefix(false)
    setDigitGrouping(false)
  }

  const clampBase = (v: number) => Math.max(2, Math.min(64, Math.floor(v)))

  return (
    <div className="space-y-6">
      <GCard className="border border-border shadow bg-card rounded-3xl">
        <GCardHeader className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Binary className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <GCardTitle className="text-lg sm:text-xl font-bold text-card-foreground">
                  Integer Base Converter
                </GCardTitle>
                <GCardDescription className="text-muted-foreground text-sm">
                  Convert numbers between binary, octal, decimal, hex, and bases 2–64
                </GCardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <GButton
                onClick={() => setShowSettings(!showSettings)}
                variant="outline"
                size="sm"
                className="h-8 px-3 text-xs border-border text-foreground hover:bg-accent/10"
              >
                <Settings className="h-3 w-3 sm:mr-1" />
                Settings
              </GButton>
              <GButton
                onClick={reset}
                variant="outline"
                size="sm"
                className="h-8 px-3 text-xs border-border text-foreground hover:bg-accent/10"
              >
                <RotateCcw className="h-3 w-3 sm:mr-1" />
                Reset
              </GButton>
              <GButton
                onClick={downloadAll}
                disabled={!input.trim() || !!error}
                size="sm"
                className="h-8 px-3 text-xs bg-primary hover:bg-primary/90 text-white"
              >
                <Download className="h-3 w-3 sm:mr-1" />
                Export
              </GButton>
            </div>
          </div>
        </GCardHeader>
        <GCardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-[1fr,auto]">
              <div className="space-y-2">
                <GLabel className="text-sm font-medium">Input number</GLabel>
                <GInput
                  value={input}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder="e.g. 42, 0x2a, 0b101010, -255"
                  className="font-mono"
                />
                {parsed.prefix && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Info className="h-3 w-3" />
                    Auto-detected base {parsed.base} from prefix {parsed.prefix}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-medium">Input base</GLabel>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setInputBase(clampBase(inputBase - 1))}
                    className="h-10 w-10 rounded-lg border border-border bg-muted/50 hover:bg-muted flex items-center justify-center text-foreground disabled:opacity-50"
                    disabled={inputBase <= 2}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <GInput
                    type="number"
                    min={2}
                    max={64}
                    value={inputBase}
                    onChange={(e) => setInputBase(clampBase(Number(e.target.value) || 10))}
                    className="w-20 text-center font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setInputBase(clampBase(inputBase + 1))}
                    className="h-10 w-10 rounded-lg border border-border bg-muted/50 hover:bg-muted flex items-center justify-center text-foreground disabled:opacity-50"
                    disabled={inputBase >= 64}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {BASE_PRESETS.map((preset) => (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => setInputBase(preset.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    inputBase === preset.value
                      ? "bg-primary text-white"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                  }`}
                >
                  {preset.label} ({preset.value})
                </button>
              ))}
            </div>
          </div>

          {showSettings && (
            <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-3">
              <h4 className="text-sm font-semibold text-foreground">Display options</h4>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hexUppercase}
                    onChange={(e) => setHexUppercase(e.target.checked)}
                    className="rounded border-border"
                  />
                  <span className="text-sm">Hex uppercase</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addPrefix}
                    onChange={(e) => setAddPrefix(e.target.checked)}
                    className="rounded border-border"
                  />
                  <span className="text-sm">Add prefix (0x, 0b, 0o)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={digitGrouping}
                    onChange={(e) => setDigitGrouping(e.target.checked)}
                    className="rounded border-border"
                  />
                  <span className="text-sm">Digit grouping</span>
                </label>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <GLabel className="text-sm font-medium">Custom base (2–64):</GLabel>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setCustomBase(clampBase(customBase - 1))}
                className="h-9 w-9 rounded-lg border border-border bg-muted/50 hover:bg-muted flex items-center justify-center text-foreground disabled:opacity-50"
                disabled={customBase <= 2}
              >
                <Minus className="h-3 w-3" />
              </button>
              <GInput
                type="number"
                min={2}
                max={64}
                value={customBase}
                onChange={(e) => setCustomBase(clampBase(Number(e.target.value) || 10))}
                className="w-16 text-center font-mono text-sm"
              />
              <button
                type="button"
                onClick={() => setCustomBase(clampBase(customBase + 1))}
                className="h-9 w-9 rounded-lg border border-border bg-muted/50 hover:bg-muted flex items-center justify-center text-foreground disabled:opacity-50"
                disabled={customBase >= 64}
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="space-y-0 rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-4 py-2 bg-muted/50 border-b border-border">
              <h4 className="text-sm font-semibold text-foreground">Conversion results</h4>
            </div>
            <div className="p-4 divide-y divide-border/60">
              {conversions.map((c) => (
                <ConversionRow
                  key={c.label}
                  label={c.label}
                  value={c.value}
                  base={c.base}
                  suffix={c.suffix}
                  copyId={`copy-${c.label.replace(/\s+/g, "-").toLowerCase()}`}
                />
              ))}
            </div>
          </div>
        </GCardContent>
      </GCard>
    </div>
  )
}
