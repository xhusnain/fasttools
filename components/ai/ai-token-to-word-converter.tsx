"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GTabs, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { Copy, RefreshCw } from "lucide-react"
import { toast } from "sonner"

const WORDS_PER_TOKEN = 0.75

function normalizeNumber(value: string): string {
  return value.replace(/[^\d.,]/g, "")
}

function parseNumericValue(value: string): number | null {
  if (!value.trim()) {
    return null
  }

  const parsed = Number(value.replace(/,/g, ""))
  return Number.isFinite(parsed) ? parsed : null
}

export function AiTokenToWordConverter() {
  const [mode, setMode] = useState<"tokens-to-words" | "words-to-tokens">(
    "tokens-to-words"
  )
  const [tokens, setTokens] = useState("")
  const [words, setWords] = useState("")

  const handleConvert = () => {
    if (mode === "tokens-to-words") {
      const tokenCount = parseNumericValue(tokens)
      if (tokenCount === null) {
        return
      }
      const convertedWords = Math.round(tokenCount * WORDS_PER_TOKEN)
      setWords(convertedWords.toLocaleString())
      return
    }

    const wordCount = parseNumericValue(words)
    if (wordCount === null) {
      return
    }
    const convertedTokens = Math.round(wordCount / WORDS_PER_TOKEN)
    setTokens(convertedTokens.toLocaleString())
  }

  const reset = () => {
    setTokens("")
    setWords("")
  }

  const copyOutput = async () => {
    const output = mode === "tokens-to-words" ? words : tokens
    if (!output) {
      return
    }

    await navigator.clipboard.writeText(output)
    toast.success("Converted value copied")
  }

  const currentInput = mode === "tokens-to-words" ? tokens : words
  const currentOutput = mode === "tokens-to-words" ? words : tokens

  return (
    <GCard className="border-2 border-primary/20">
      <GCardHeader>
        <GTabs
          value={mode}
          onValueChange={(value) => {
            setMode(value as "tokens-to-words" | "words-to-tokens")
            reset()
          }}
          className="w-full"
        >
          <GTabsList className="grid w-full grid-cols-2">
            <GTabsTrigger value="tokens-to-words">Tokens to Words</GTabsTrigger>
            <GTabsTrigger value="words-to-tokens">Words to Tokens</GTabsTrigger>
          </GTabsList>
        </GTabs>
      </GCardHeader>

      <GCardContent className="space-y-6 pt-2">
        <div className="grid gap-5 md:grid-cols-2 items-end">
          <div className="space-y-2">
            <GLabel htmlFor="token-word-input" className="text-sm font-medium">
              {mode === "tokens-to-words" ? "Tokens" : "Words"}
            </GLabel>
            <GInput
              id="token-word-input"
              inputMode="decimal"
              placeholder={mode === "tokens-to-words" ? "e.g. 1000" : "e.g. 750"}
              value={currentInput}
              onChange={(event) => {
                const cleaned = normalizeNumber(event.target.value)
                if (mode === "tokens-to-words") {
                  setTokens(cleaned)
                } else {
                  setWords(cleaned)
                }
              }}
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <GLabel className="text-sm font-medium">
              {mode === "tokens-to-words" ? "Estimated Words" : "Estimated Tokens"}
            </GLabel>
            <div className="flex h-11 items-center justify-between rounded-md border border-input bg-muted/50 px-3">
              <span className="font-mono text-base">{currentOutput || "0"}</span>
              <GButton
                variant="ghost"
                size="icon"
                onClick={() => void copyOutput()}
                disabled={!currentOutput}
                aria-label="Copy converted value"
              >
                <Copy className="h-4 w-4" />
              </GButton>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <GButton onClick={handleConvert} className="flex-1" size="lg">
            Convert
          </GButton>
          <GButton onClick={reset} variant="outline" size="icon" aria-label="Reset values">
            <RefreshCw className="h-4 w-4" />
          </GButton>
        </div>

        <div className="text-xs text-muted-foreground space-y-1 rounded-lg border border-border bg-muted/30 p-3">
          <p>Estimated ratio used: 1 token is approximately 0.75 English words.</p>
          <p>
            Actual token counts vary by model tokenizer, punctuation, language,
            and formatting.
          </p>
        </div>
      </GCardContent>
    </GCard>
  )
}
