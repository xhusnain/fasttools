"use client"

import { useState } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { RotateCcw } from "lucide-react"

function encodeUrl(str: string): string {
  try {
    return encodeURIComponent(str)
  } catch {
    return ""
  }
}

function decodeUrl(str: string): string {
  try {
    return decodeURIComponent(str.replace(/\+/g, " "))
  } catch {
    return ""
  }
}

export function UrlEncoder() {
  const [encodeInput, setEncodeInput] = useState("Hello world :)")
  const [decodeInput, setDecodeInput] = useState("Hello%20world%20%3A)")

  const encoded = encodeUrl(encodeInput)
  const decoded = decodeUrl(decodeInput)

  const handleClear = () => {
    setEncodeInput("")
    setDecodeInput("")
  }

  const handleEncodeSample = () => {
    const sample = "Hello world :)"
    setEncodeInput(sample)
    setDecodeInput(encodeUrl(sample))
  }

  const handleDecodeSample = () => {
    const sample = "Hello%20world%20%3A)"
    setDecodeInput(sample)
    setEncodeInput(decodeUrl(sample))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            URL Encoder/Decoder
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Convert plain text to percent-encoding and decode it back instantly.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GButton variant="outline" size="sm" onClick={handleEncodeSample}>
            Encode sample
          </GButton>
          <GButton variant="outline" size="sm" onClick={handleDecodeSample}>
            Decode sample
          </GButton>
          <GButton variant="outline" size="sm" onClick={handleClear}>
            <RotateCcw className="h-3.5 w-3.5 mr-1" />
            Clear
          </GButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">Encode</h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">Input text</GLabel>
            <GTextarea
              value={encodeInput}
              onChange={(e) => setEncodeInput(e.target.value)}
              placeholder="Enter text to encode..."
              className="mt-1 min-h-[120px] font-mono text-sm"
              aria-label="Text to encode"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">Encoded output</GLabel>
            <GTextarea
              value={encoded}
              readOnly
              placeholder="Encoded output will appear here"
              className="mt-1 min-h-[120px] font-mono text-sm bg-muted/30"
              aria-label="Encoded output"
            />
          </div>
          {encoded && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(encoded)
              }}
            >
              Copy
            </GButton>
          )}
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">Decode</h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">Encoded input</GLabel>
            <GTextarea
              value={decodeInput}
              onChange={(e) => setDecodeInput(e.target.value)}
              placeholder="Enter URL-encoded string to decode..."
              className="mt-1 min-h-[120px] font-mono text-sm"
              aria-label="Encoded text to decode"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">Decoded output</GLabel>
            <GTextarea
              value={decoded}
              readOnly
              placeholder="Decoded output will appear here"
              className="mt-1 min-h-[120px] font-mono text-sm bg-muted/30"
              aria-label="Decoded output"
            />
          </div>
          {decoded && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(decoded)
              }}
            >
              Copy
            </GButton>
          )}
        </div>
      </div>
    </div>
  )
}
