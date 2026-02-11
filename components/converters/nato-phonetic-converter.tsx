"use client"

import { useState, useCallback } from "react"
import { GInput } from "@/ui/ginput"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { CopyButton } from "@/components/common/copy-button"
import {
  textToNato,
  natoToText,
  NATO_LETTERS,
  NATO_NUMBERS,
  getNatoWord,
} from "@/lib/nato-phonetic-converter"
import { RotateCcw } from "lucide-react"

const SAMPLE_INPUT = "ABC123"
const SAMPLE_NATO = "Alpha Bravo Charlie One Two Three"

export function NatoPhoneticConverter() {
  const [textInput, setTextInput] = useState("")
  const [natoInput, setNatoInput] = useState("")

  const natoOutput = textInput.trim() ? textToNato(textInput) : ""
  const textOutput = natoInput.trim() ? natoToText(natoInput) : ""

  const handleLoadSample = useCallback(() => {
    setTextInput(SAMPLE_INPUT)
    setNatoInput("")
  }, [])

  const handleLoadNatoSample = useCallback(() => {
    setNatoInput(SAMPLE_NATO)
    setTextInput("")
  }, [])

  const handleClear = useCallback(() => {
    setTextInput("")
    setNatoInput("")
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Text to NATO Alphabet
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Transform text into the NATO phonetic alphabet for oral transmission.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GButton variant="outline" size="sm" onClick={handleLoadSample}>
            Sample
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
            Text to NATO Phonetic
          </h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Your text to convert to NATO phonetic alphabet
            </GLabel>
            <div className="relative mt-1">
              <GInput
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="e.g. fsfsfs or ABC123"
                className="font-mono pr-8"
              />
              {textInput && (
                <button
                  type="button"
                  onClick={() => setTextInput("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear"
                >
                  ×
                </button>
              )}
            </div>
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Your text in NATO phonetic alphabet
            </GLabel>
            <div className="mt-1 min-h-[44px] px-3 py-2.5 rounded-lg border border-input bg-muted/30 text-foreground font-mono text-sm flex items-center justify-between gap-2">
              <span className="truncate">
                {natoOutput || "—"}
              </span>
              {natoOutput && (
                <CopyButton text={natoOutput} id="copy-text-to-nato" />
              )}
            </div>
          </div>
          {natoOutput && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(natoOutput)
              }}
            >
              Copy NATO string
            </GButton>
          )}
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            NATO Phonetic to Text
          </h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              NATO words to convert back to text
            </GLabel>
            <div className="relative mt-1">
              <GInput
                value={natoInput}
                onChange={(e) => setNatoInput(e.target.value)}
                placeholder="e.g. Foxtrot Sierra Foxtrot Sierra"
                className="font-mono pr-8"
              />
              {natoInput && (
                <button
                  type="button"
                  onClick={() => setNatoInput("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear"
                >
                  ×
                </button>
              )}
            </div>
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Decoded text
            </GLabel>
            <div className="mt-1 min-h-[44px] px-3 py-2.5 rounded-lg border border-input bg-muted/30 text-foreground font-mono text-sm flex items-center justify-between gap-2">
              <span className="truncate">
                {textOutput || "—"}
              </span>
              {textOutput && (
                <CopyButton text={textOutput} id="copy-nato-to-text" />
              )}
            </div>
          </div>
          <GButton
            variant="outline"
            size="sm"
            onClick={handleLoadNatoSample}
          >
            Load sample
          </GButton>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">
          NATO Phonetic Alphabet Reference
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-sm">
          {NATO_LETTERS.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() =>
                setTextInput((prev) => prev + letter)
              }
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted border border-border hover:border-primary/30 transition-colors text-left"
            >
              <span className="font-mono font-bold text-foreground">{letter}</span>
              <span className="text-muted-foreground truncate ml-2">
                {getNatoWord(letter)}
              </span>
            </button>
          ))}
          {NATO_NUMBERS.map((num) => (
            <button
              key={num}
              type="button"
              onClick={() =>
                setTextInput((prev) => prev + num)
              }
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted border border-border hover:border-primary/30 transition-colors text-left"
            >
              <span className="font-mono font-bold text-foreground">{num}</span>
              <span className="text-muted-foreground truncate ml-2">
                {getNatoWord(num)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
