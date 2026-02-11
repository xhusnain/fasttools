"use client"

import { useState } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { CopyButton } from "@/components/common/copy-button"
import { textToBinary, binaryToText, isValidBinary } from "@/lib/ascii-binary-converter"
import { RotateCcw } from "lucide-react"

export function AsciiBinaryConverter() {
  const [textInput, setTextInput] = useState("")
  const [binaryInput, setBinaryInput] = useState("")

  const binaryOutput = textInput ? textToBinary(textInput) : ""
  const textOutput =
    binaryInput && isValidBinary(binaryInput) ? binaryToText(binaryInput) : ""
  const binaryError =
    binaryInput && !isValidBinary(binaryInput)
      ? "Enter valid binary (8-bit groups, e.g. 01001000 01100101)"
      : null

  const handleClear = () => {
    setTextInput("")
    setBinaryInput("")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Text to ASCII Binary
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Convert text to its ASCII binary representation and vice-versa.
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
            Text to ASCII binary
          </h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Enter text to convert to binary
            </GLabel>
            <GTextarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="e.g. 'Hello world'"
              className="mt-1 min-h-[100px] font-mono text-sm"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Binary from your text
            </GLabel>
            <GTextarea
              value={binaryOutput}
              readOnly
              placeholder="The binary representation of your text will be here"
              className="mt-1 min-h-[100px] font-mono text-sm bg-muted/30"
            />
          </div>
          {binaryOutput && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(binaryOutput)
              }}
            >
              Copy binary to clipboard
            </GButton>
          )}
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            ASCII binary to text
          </h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Enter binary to convert to text
            </GLabel>
            <GTextarea
              value={binaryInput}
              onChange={(e) => setBinaryInput(e.target.value)}
              placeholder="e.g. '01001000 01100101 01101100 01101100 01101111'"
              className={`mt-1 min-h-[100px] font-mono text-sm ${binaryError ? "border-red-500" : ""}`}
            />
            {binaryError && (
              <p className="mt-1 text-xs text-red-500">{binaryError}</p>
            )}
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Text from your binary
            </GLabel>
            <GTextarea
              value={textOutput}
              readOnly
              placeholder="The text representation of your binary will be here"
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
