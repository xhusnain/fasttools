"use client"

import { useState, useEffect, useCallback } from "react"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface KeyInfo {
  key: string
  keyCode: number
  which: number
  code: string
  location: number
  repeat: boolean
  isComposing: boolean
  modifiers: string
}

function CopyButton({
  text,
  onCopy,
}: {
  text: string
  onCopy: () => void
}) {
  const [copied, setCopied] = useState(false)
  const handleClick = async () => {
    if (text) {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      onCopy?.()
      setTimeout(() => setCopied(false), 2000)
    }
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="p-1.5 rounded hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
      title="Copy"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-600" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  )
}

function InfoRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5 border-b border-border/50 last:border-0">
      <span className="text-sm text-muted-foreground shrink-0">{label}</span>
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-sm font-mono truncate">{value}</span>
        <CopyButton text={value} onCopy={() => {}} />
      </div>
    </div>
  )
}

export function KeycodeInfo() {
  const [keyInfo, setKeyInfo] = useState<KeyInfo | null>(null)
  const [displayKey, setDisplayKey] = useState<string>("")

  const getModifiers = useCallback((e: KeyboardEvent): string => {
    const parts: string[] = []
    if (e.metaKey) parts.push("Meta")
    if (e.altKey) parts.push("Alt")
    if (e.ctrlKey) parts.push("Ctrl")
    if (e.shiftKey) parts.push("Shift")
    return parts.join(" + ") || "—"
  }, [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const keyCode = typeof e.keyCode === "number" ? e.keyCode : 0
      const modifiers = getModifiers(e)
      setKeyInfo({
        key: e.key || "—",
        keyCode,
        which: typeof e.which === "number" ? e.which : keyCode,
        code: e.code || "—",
        location: e.location ?? 0,
        repeat: e.repeat,
        isComposing: e.isComposing,
        modifiers,
      })
      setDisplayKey(e.key || e.code || "—")
    },
    [getModifiers]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className="space-y-6">
      {/* Interactive key capture area */}
      <div
        tabIndex={0}
        role="button"
        onKeyDown={(e) => handleKeyDown(e.nativeEvent)}
        className={cn(
          "flex flex-col items-center justify-center min-h-[180px] rounded-xl border-2 border-dashed border-border",
          "bg-muted/30 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",
          "cursor-pointer transition-colors"
        )}
      >
        <span className="text-4xl font-bold text-foreground mb-2">
          {displayKey || "—"}
        </span>
        <p className="text-sm text-muted-foreground">
          Press the key on your keyboard you want to get info about this key
        </p>
      </div>

      {/* Output panel */}
      <div className="rounded-xl border bg-card p-4">
        <div className="space-y-0">
          {keyInfo ? (
            <>
              <InfoRow label="Key :" value={keyInfo.key} />
              <InfoRow label="Keycode :" value={String(keyInfo.keyCode)} />
              <InfoRow label="Which :" value={String(keyInfo.which)} />
              <InfoRow label="Code :" value={keyInfo.code} />
              <InfoRow label="Location :" value={String(keyInfo.location)} />
              <InfoRow label="Repeat :" value={String(keyInfo.repeat)} />
              <InfoRow label="Is composing :" value={String(keyInfo.isComposing)} />
              <InfoRow label="Modifiers :" value={keyInfo.modifiers} />
            </>
          ) : (
            <p className="text-sm text-muted-foreground py-4 text-center">
              Press any key to see javascript keycode, code, location and modifiers
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
