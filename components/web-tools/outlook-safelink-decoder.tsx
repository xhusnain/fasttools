"use client"

import { useState, useMemo } from "react"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { decodeSafelink } from "@/lib/safelink-decoder"
import { Copy, Check, RotateCcw } from "lucide-react"

const SAMPLE_LINK =
  "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fexample.com%2Fdocs%3Fid%3D42&data=abc"

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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Outlook Safe Links Decoder
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Paste a Safe Links URL and extract the original destination.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GButton variant="outline" size="sm" onClick={() => setInput(SAMPLE_LINK)}>
            Sample
          </GButton>
          <GButton variant="outline" size="sm" onClick={() => setInput("")}>
            <RotateCcw className="h-3.5 w-3.5 mr-1" />
            Clear
          </GButton>
        </div>
      </div>

      <div className="space-y-2">
        <GLabel className="text-base font-medium">Safe Links URL input</GLabel>
        <GInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste Outlook Safe Links URL..."
          className="font-mono text-sm"
          aria-label="Outlook Safe Links URL input"
        />
      </div>

      <div className="space-y-2">
        <GLabel className="text-base font-medium">Decoded destination URL</GLabel>
        <div className="flex gap-2">
          <div
            aria-live="polite"
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
            aria-label="Copy decoded URL"
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
