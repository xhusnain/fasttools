"use client"

import { useState, useMemo } from "react"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { decodeSafelink } from "@/lib/safelink-decoder"
import { Copy, Check } from "lucide-react"

export function OutlookSafelinkDecoder() {
  const [input, setInput] = useState("")

  const result = useMemo(() => decodeSafelink(input), [input])

  const [copied, setCopied] = useState(false)
  const copyOutput = () => {
    const text = result.error ? `Error: ${result.error}` : result.url
    if (text) {
      navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <GLabel className="text-base font-medium">
          Your input Outlook SafeLink Url:
        </GLabel>
        <GInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your input Outlook SafeLink Url..."
          className="font-mono text-sm"
        />
      </div>

      <div className="space-y-2">
        <GLabel className="text-base font-medium">Output decoded URL:</GLabel>
        <div className="flex gap-2">
          <div
            className={`
              flex-1 min-h-[44px] px-3 py-2.5 rounded-md border font-mono text-sm
              flex items-center
              ${result.error
                ? "border-red-500/50 bg-red-500/5 text-red-600 dark:text-red-400"
                : "border-border bg-muted/30 text-foreground"
              }
            `}
          >
            {result.error ? `Error: ${result.error}` : result.url || "—"}
          </div>
          <button
            type="button"
            onClick={copyOutput}
            className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-md border border-border hover:bg-muted transition-colors"
            title="Copy"
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <Copy className="h-5 w-5 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
