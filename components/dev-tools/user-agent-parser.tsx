"use client"

import { useState, useCallback, useEffect } from "react"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { UAParser } from "ua-parser-js"
import { Monitor, Settings, Laptop, Cpu, Smartphone, X, MonitorPlay } from "lucide-react"

const DEFAULT_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"

function InfoCard({
  icon: Icon,
  title,
  primary,
  secondary,
  fallback = "No data available",
}: {
  icon: React.ElementType
  title: string
  primary?: string
  secondary?: string
  fallback?: string
}) {
  const hasData = primary || secondary
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-muted-foreground mb-2">
        <Icon className="h-5 w-5" />
        <span className="text-sm font-medium">{title}</span>
      </div>
      {hasData ? (
        <div className="space-y-0.5">
          {primary && <p className="text-base font-medium text-foreground">{primary}</p>}
          {secondary && (
            <p className="text-sm text-muted-foreground">{secondary}</p>
          )}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground italic">{fallback}</p>
      )}
    </div>
  )
}

export function UserAgentParser() {
  const [ua, setUa] = useState(DEFAULT_UA)
  const [parsed, setParsed] = useState<ReturnType<UAParser["getResult"]> | null>(null)

  useEffect(() => {
    if (typeof navigator !== "undefined") setUa(navigator.userAgent)
  }, [])

  const parse = useCallback(() => {
    if (!ua.trim()) {
      setParsed(null)
      return
    }
    try {
      const result = new UAParser(ua.trim()).getResult()
      setParsed(result)
    } catch {
      setParsed(null)
    }
  }, [ua])

  useEffect(() => {
    parse()
  }, [parse])

  const useMyBrowser = () => {
    if (typeof navigator !== "undefined") setUa(navigator.userAgent)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <GLabel className="text-base font-medium">User agent string</GLabel>
          <button
            type="button"
            onClick={useMyBrowser}
            className="text-sm text-primary hover:underline flex items-center gap-1.5"
          >
            <MonitorPlay className="h-4 w-4" />
            Use my browser
          </button>
        </div>
        <div className="relative">
          <GInput
            value={ua}
            onChange={(e) => setUa(e.target.value)}
            placeholder="Paste your user agent string here..."
            className="pr-10 font-mono text-sm"
          />
          <button
            type="button"
            onClick={() => setUa("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-muted/70 text-muted-foreground hover:text-foreground"
            title="Clear"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {parsed && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard
            icon={Monitor}
            title="Browser"
            primary={parsed.browser.name || undefined}
            secondary={parsed.browser.version || undefined}
            fallback="No browser detected"
          />
          <InfoCard
            icon={Settings}
            title="Engine"
            primary={parsed.engine.name || undefined}
            secondary={parsed.engine.version || undefined}
            fallback="No engine detected"
          />
          <InfoCard
            icon={Laptop}
            title="OS"
            primary={parsed.os.name || undefined}
            secondary={parsed.os.version || undefined}
            fallback="No OS detected"
          />
          <InfoCard
            icon={Smartphone}
            title="Device"
            primary={
              parsed.device.model || parsed.device.vendor
                ? [parsed.device.model, parsed.device.vendor].filter(Boolean).join(" • ")
                : undefined
            }
            secondary={
              parsed.device.type || (parsed.device.model || parsed.device.vendor ? "No device type available" : undefined)
            }
            fallback="No device type available"
          />
          <InfoCard
            icon={Cpu}
            title="CPU"
            primary={parsed.cpu.architecture || undefined}
            fallback="No CPU architecture available"
          />
        </div>
      )}
    </div>
  )
}
