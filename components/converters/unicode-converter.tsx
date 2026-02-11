"use client"

import { useState } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { textToUnicode, unicodeToText } from "@/lib/unicode-converter"
import { RotateCcw } from "lucide-react"

export function UnicodeConverter() {
  const [textInput, setTextInput] = useState("")
  const [unicodeInput, setUnicodeInput] = useState("")

  const unicodeOutput = textInput ? textToUnicode(textInput) : ""
  const { result: textOutput, error: unicodeError } = unicodeToText(unicodeInput)

  const handleClear = () => {
    setTextInput("")
    setUnicodeInput("")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Text to Unicode
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Parse and convert text to unicode and vice-versa.
          </p>
        </div>
        <GButton variant="outline" size="sm" onClick={handleClear}>
          <RotateCcw className="h-3.5 w-3.5 mr-1" />
          Clear
        </GButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            Text to Unicode
          </h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Enter text to convert to unicode
            </GLabel>
            <GTextarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="e.g. 'Hello Avengers'"
              className="mt-1 min-h-[100px] font-mono text-sm"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Unicode from your text
            </GLabel>
            <GTextarea
              value={unicodeOutput}
              readOnly
              placeholder="The unicode representation of your text will be here"
              className="mt-1 min-h-[100px] font-mono text-sm bg-muted/30"
            />
          </div>
          {unicodeOutput && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(unicodeOutput)
              }}
            >
              Copy unicode to clipboard
            </GButton>
          )}
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            Unicode to Text
          </h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Enter unicode to convert to text
            </GLabel>
            <GTextarea
              value={unicodeInput}
              onChange={(e) => setUnicodeInput(e.target.value)}
              placeholder="e.g. U+0048 U+0065 U+006C U+006C U+006F"
              className={`mt-1 min-h-[100px] font-mono text-sm ${unicodeError ? "border-red-500" : ""}`}
            />
            {unicodeError && (
              <p className="mt-1 text-xs text-red-500">{unicodeError}</p>
            )}
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Text from your Unicode
            </GLabel>
            <GTextarea
              value={textOutput}
              readOnly
              placeholder="The text representation of your unicode will be here"
              className="mt-1 min-h-[100px] font-mono text-sm bg-muted/30"
            />
          </div>
          {textOutput && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(textOutput)
              }}
            >
              Copy text to clipboard
            </GButton>
          )}
        </div>
      </div>
    </div>
  )
}
