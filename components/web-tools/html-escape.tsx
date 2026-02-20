"use client"

import { useState } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { escapeHtml, unescapeHtml } from "@/lib/html-escape"
import { RotateCcw } from "lucide-react"

const SAMPLE_ESCAPE = `<script>alert("xss")</script>`
const SAMPLE_UNESCAPE = "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"

export function HtmlEscape() {
  const [escapeInput, setEscapeInput] = useState("")
  const [unescapeInput, setUnescapeInput] = useState("")

  const escaped = escapeHtml(escapeInput)
  const unescaped = unescapeHtml(unescapeInput)

  const handleClear = () => {
    setEscapeInput("")
    setUnescapeInput("")
  }

  const handleEscapeSample = () => {
    setEscapeInput(SAMPLE_ESCAPE)
    setUnescapeInput(escapeHtml(SAMPLE_ESCAPE))
  }

  const handleUnescapeSample = () => {
    setUnescapeInput(SAMPLE_UNESCAPE)
    setEscapeInput(unescapeHtml(SAMPLE_UNESCAPE))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            HTML Escape/Unescape
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Convert special characters to HTML entities and decode entities back
            to readable text.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GButton variant="outline" size="sm" onClick={handleEscapeSample}>
            Escape sample
          </GButton>
          <GButton variant="outline" size="sm" onClick={handleUnescapeSample}>
            Unescape sample
          </GButton>
          <GButton variant="outline" size="sm" onClick={handleClear}>
            <RotateCcw className="h-3.5 w-3.5 mr-1" />
            Clear
          </GButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            Escape to entities
          </h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">Input text</GLabel>
            <GTextarea
              value={escapeInput}
              onChange={(e) => setEscapeInput(e.target.value)}
              placeholder={"Enter text with < > & \" ' to escape..."}
              className="mt-1 min-h-[140px] font-mono text-sm"
              aria-label="Text to escape"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">Escaped output</GLabel>
            <GTextarea
              value={escaped}
              readOnly
              placeholder="Escaped HTML entities will appear here"
              className="mt-1 min-h-[140px] font-mono text-sm bg-muted/30"
              aria-label="Escaped output"
            />
          </div>
          {escaped && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(escaped)
              }}
            >
              Copy
            </GButton>
          )}
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            Unescape entities
          </h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">Encoded input</GLabel>
            <GTextarea
              value={unescapeInput}
              onChange={(e) => setUnescapeInput(e.target.value)}
              placeholder="Enter &lt; &gt; &amp; &quot; &#39; etc. to decode..."
              className="mt-1 min-h-[140px] font-mono text-sm"
              aria-label="Encoded text to unescape"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">Decoded output</GLabel>
            <GTextarea
              value={unescaped}
              readOnly
              placeholder="Plain text will appear here"
              className="mt-1 min-h-[140px] font-mono text-sm bg-muted/30"
              aria-label="Decoded output"
            />
          </div>
          {unescaped && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(unescaped)
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
