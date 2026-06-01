"use client"

import { useEffect, useMemo, useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GBadge } from "@/ui/gbadge"
import { Check, Clock, Copy } from "lucide-react"

// ── helpers ────────────────────────────────────────────────────────────────
type Unit = "seconds" | "milliseconds" | "microseconds"

/** Guess whether a numeric timestamp is in s / ms / µs based on its magnitude. */
function detectUnit(raw: string): Unit {
  const digits = raw.replace(/\D/g, "").length
  if (digits >= 16) return "microseconds"
  if (digits >= 14) return "milliseconds"
  if (digits >= 12) return "milliseconds"
  return "seconds"
}

function toMillis(value: number, unit: Unit): number {
  if (unit === "seconds") return value * 1000
  if (unit === "microseconds") return Math.floor(value / 1000)
  return value
}

function relativeTime(ms: number): string {
  const diff = ms - Date.now()
  const abs = Math.abs(diff)
  const units: Array<[number, Intl.RelativeTimeFormatUnit]> = [
    [1000 * 60 * 60 * 24 * 365, "year"],
    [1000 * 60 * 60 * 24 * 30, "month"],
    [1000 * 60 * 60 * 24 * 7, "week"],
    [1000 * 60 * 60 * 24, "day"],
    [1000 * 60 * 60, "hour"],
    [1000 * 60, "minute"],
    [1000, "second"],
  ]
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" })
  for (const [unitMs, unit] of units) {
    if (abs >= unitMs || unit === "second") {
      return rtf.format(Math.round(diff / unitMs), unit)
    }
  }
  return "just now"
}

function dayOfYear(d: Date): number {
  const start = Date.UTC(d.getUTCFullYear(), 0, 0)
  return Math.floor((d.getTime() - start) / 86400000)
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border/60 py-2 last:border-0">
      <span className="text-muted-foreground text-xs shrink-0 w-40">{label}</span>
      <span className="font-mono text-sm flex-1 break-all">{value}</span>
      <button
        onClick={copy}
        className="text-muted-foreground hover:text-foreground shrink-0"
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}

function formatBreakdown(ms: number) {
  const d = new Date(ms)
  if (isNaN(d.getTime())) return null
  return {
    iso: d.toISOString(),
    utc: d.toUTCString(),
    local: d.toLocaleString(undefined, { dateStyle: "full", timeStyle: "long" }),
    seconds: String(Math.floor(ms / 1000)),
    millis: String(ms),
    relative: relativeTime(ms),
    dayOfWeek: d.toLocaleDateString(undefined, { weekday: "long" }),
    dayOfYear: `${dayOfYear(d)} of ${d.getUTCFullYear()}`,
  }
}

// ── component ────────────────────────────────────────────────────────────────
export function TimestampConverter() {
  const [now, setNow] = useState<number | null>(null)
  const [tsInput, setTsInput] = useState("")
  const [unit, setUnit] = useState<Unit>("seconds")
  const [dateInput, setDateInput] = useState("")

  // live current timestamp
  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  // auto-detect unit when the user types a timestamp
  useEffect(() => {
    if (tsInput.trim()) setUnit(detectUnit(tsInput))
  }, [tsInput])

  const tsResult = useMemo(() => {
    const raw = tsInput.trim()
    if (!raw || !/^-?\d+$/.test(raw)) return null
    const ms = toMillis(Number(raw), unit)
    return formatBreakdown(ms)
  }, [tsInput, unit])

  const dateResult = useMemo(() => {
    if (!dateInput) return null
    const ms = new Date(dateInput).getTime()
    if (isNaN(ms)) return null
    return formatBreakdown(ms)
  }, [dateInput])

  const nowSeconds = now != null ? Math.floor(now / 1000) : null

  return (
    <div className="space-y-6">
      {/* Current time */}
      <GCard>
        <GCardHeader>
          <GCardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" /> Current Unix Timestamp
          </GCardTitle>
          <GCardDescription>Live — the number of seconds since Jan 1, 1970 (UTC).</GCardDescription>
        </GCardHeader>
        <GCardContent>
          <div className="flex flex-wrap items-end gap-x-8 gap-y-3">
            <div>
              <span className="text-muted-foreground text-xs">Seconds</span>
              <p className="font-mono text-3xl font-bold tabular-nums">{nowSeconds ?? "—"}</p>
            </div>
            <div>
              <span className="text-muted-foreground text-xs">Milliseconds</span>
              <p className="font-mono text-lg tabular-nums">{now ?? "—"}</p>
            </div>
            {nowSeconds != null && (
              <GButton
                variant="outline"
                onClick={() => setTsInput(String(nowSeconds))}
                className="ml-auto"
              >
                Use this
              </GButton>
            )}
          </div>
        </GCardContent>
      </GCard>

      {/* Timestamp -> date */}
      <GCard>
        <GCardHeader className="pb-3">
          <GCardTitle className="text-base">Timestamp → Date</GCardTitle>
          <GCardDescription>Paste a Unix timestamp. The unit is auto-detected.</GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <div className="flex-1 min-w-[200px]">
              <GInput
                value={tsInput}
                onChange={(e) => setTsInput(e.target.value)}
                placeholder="e.g. 1748520000"
                inputMode="numeric"
              />
            </div>
            <div className="flex gap-1.5">
              {(["seconds", "milliseconds", "microseconds"] as Unit[]).map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  className={`rounded-md px-2.5 py-1 text-xs border ${
                    unit === u
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {u === "seconds" ? "s" : u === "milliseconds" ? "ms" : "µs"}
                </button>
              ))}
            </div>
          </div>

          {tsInput.trim() && !tsResult && (
            <p className="text-sm text-red-500">Enter a valid integer timestamp.</p>
          )}

          {tsResult && (
            <div className="rounded-lg bg-muted/50 px-4 py-1">
              <CopyRow label="Local time" value={tsResult.local} />
              <CopyRow label="UTC (ISO 8601)" value={tsResult.iso} />
              <CopyRow label="UTC string" value={tsResult.utc} />
              <CopyRow label="Relative" value={tsResult.relative} />
              <CopyRow label="Day of week" value={tsResult.dayOfWeek} />
              <CopyRow label="Day of year" value={tsResult.dayOfYear} />
            </div>
          )}
        </GCardContent>
      </GCard>

      {/* Date -> timestamp */}
      <GCard>
        <GCardHeader className="pb-3">
          <GCardTitle className="text-base">Date → Timestamp</GCardTitle>
          <GCardDescription>Pick a date and time to get its Unix timestamp.</GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-4">
          <GInput
            type="datetime-local"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            step="1"
          />
          {dateResult && (
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <div>
                <span className="text-muted-foreground text-xs">Seconds</span>
                <p className="font-mono text-2xl font-bold">{dateResult.seconds}</p>
                <GBadge variant="outline" className="mt-1 text-[10px]">most common</GBadge>
              </div>
              <div>
                <span className="text-muted-foreground text-xs">Milliseconds</span>
                <p className="font-mono text-lg">{dateResult.millis}</p>
              </div>
              <div className="w-full">
                <CopyRow label="ISO 8601 (UTC)" value={dateResult.iso} />
              </div>
            </div>
          )}
        </GCardContent>
      </GCard>
    </div>
  )
}
