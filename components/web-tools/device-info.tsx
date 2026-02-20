"use client"

import { useEffect, useState } from "react"
import { Copy, Check, Monitor, Smartphone } from "lucide-react"
import { getDeviceInfo, type DeviceInfo } from "@/lib/device-info"

function InfoCard({
  label,
  value,
  mono = false,
}: {
  label: string
  value: string | number | undefined
  mono?: boolean
}) {
  if (value == null || value === "") return null
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-4">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p
        className={`text-base font-semibold break-all ${mono ? "font-mono text-sm" : ""}`}
        title={String(value)}
      >
        {String(value)}
      </p>
    </div>
  )
}

function SectionGrid({
  title,
  icon: Icon,
  items,
}: {
  title: string
  icon: React.ElementType
  items: Array<{ label: string; value: string | number | undefined; mono?: boolean }>
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
        <Icon className="h-4 w-4 text-muted-foreground" />
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item) => (
          <InfoCard
            key={item.label}
            label={item.label}
            value={item.value}
            mono={item.mono}
          />
        ))}
      </div>
    </div>
  )
}

export function DeviceInfo() {
  const [info, setInfo] = useState<DeviceInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let mounted = true
    getDeviceInfo().then((data) => {
      if (mounted) {
        setInfo(data)
        setLoading(false)
      }
    })
    return () => {
      mounted = false
    }
  }, [])

  const handleCopyUserAgent = async () => {
    if (info?.device.userAgent) {
      await navigator.clipboard.writeText(info.device.userAgent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (loading || !info) {
    return (
      <div className="flex flex-col items-center justify-center py-16" aria-live="polite">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
        <p className="text-muted-foreground mt-4 text-sm">Detecting your device...</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Device Information
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            View browser, operating system, and display diagnostics for this
            device.
          </p>
        </div>
        {info.device.userAgent && (
          <button
            onClick={handleCopyUserAgent}
            type="button"
            aria-label="Copy user agent string"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-border hover:bg-muted/50 transition-colors"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? "Copied" : "Copy user agent"}
          </button>
        )}
      </div>

      <SectionGrid
        title="Screen"
        icon={Monitor}
        items={[
          { label: "Screen size", value: info.screen.screenSize },
          { label: "Orientation", value: info.screen.orientation },
          { label: "Orientation angle", value: info.screen.orientationAngle },
          { label: "Color depth", value: info.screen.colorDepth },
          { label: "Pixel ratio", value: info.screen.pixelRatio },
          { label: "Window size", value: info.screen.windowSize },
        ]}
      />

      <SectionGrid
        title="Browser & Device"
        icon={Smartphone}
        items={[
          { label: "Browser vendor", value: info.device.browserVendor },
          { label: "Browser", value: info.device.browserName },
          { label: "Languages", value: info.device.languages },
          { label: "Platform", value: info.device.platform },
          { label: "OS", value: info.device.osName },
          { label: "User agent", value: info.device.userAgent, mono: true },
          ...(info.device.hardwareConcurrency != null
            ? [{ label: "CPU cores", value: info.device.hardwareConcurrency, mono: false as const }]
            : []),
          ...(info.device.deviceMemory != null
            ? [{ label: "Device memory", value: `~${info.device.deviceMemory} GB`, mono: false as const }]
            : []),
          ...(info.device.timeZone
            ? [{ label: "Timezone", value: info.device.timeZone, mono: false as const }]
            : []),
          ...(info.device.connectionType
            ? [{ label: "Connection", value: info.device.connectionType, mono: false as const }]
            : []),
          ...(info.device.batteryLevel != null
            ? [
                {
                  label: "Battery",
                  value: `${Math.round(info.device.batteryLevel)}%${info.device.isCharging ? " (charging)" : ""}`,
                  mono: false as const,
                },
              ]
            : []),
        ]}
      />
    </div>
  )
}
