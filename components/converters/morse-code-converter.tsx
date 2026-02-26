"use client"

import { useState, useCallback } from "react"
import { GInput } from "@/ui/ginput"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GTextarea } from "@/ui/gtextarea"
import { CopyButton } from "@/components/common/copy-button"
import { RotateCcw, Volume2 } from "lucide-react"

const MORSE_MAP: Record<string, string> = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
}

const REVERSE_MORSE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(MORSE_MAP).map(([k, v]) => [v, k])
)

const MORSE_LETTERS = Object.keys(MORSE_MAP).filter((k) => /^[A-Z]$/.test(k))
const MORSE_NUMBERS = Object.keys(MORSE_MAP).filter((k) => /^[0-9]$/.test(k))
const MORSE_PUNCTUATION = Object.keys(MORSE_MAP).filter(
  (k) => !/^[A-Z0-9]$/.test(k)
)

function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split("")
    .map((char) => {
      if (char === " ") return "/"
      return MORSE_MAP[char] || ""
    })
    .filter(Boolean)
    .join(" ")
}

function morseToText(morse: string): string {
  return morse
    .split(" / ")
    .map((word) =>
      word
        .split(" ")
        .map((code) => REVERSE_MORSE_MAP[code] || "")
        .join("")
    )
    .join(" ")
}

const SAMPLE_TEXT = "HELLO WORLD"
const SAMPLE_MORSE = ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."

export function MorseCodeConverter() {
  const [textInput, setTextInput] = useState("")
  const [morseInput, setMorseInput] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)

  const morseOutput = textInput.trim() ? textToMorse(textInput) : ""
  const textOutput = morseInput.trim() ? morseToText(morseInput) : ""

  const handleLoadSample = useCallback(() => {
    setTextInput(SAMPLE_TEXT)
    setMorseInput("")
  }, [])

  const handleLoadMorseSample = useCallback(() => {
    setMorseInput(SAMPLE_MORSE)
    setTextInput("")
  }, [])

  const handleClear = useCallback(() => {
    setTextInput("")
    setMorseInput("")
  }, [])

  const playMorseAudio = useCallback(async (morse: string) => {
    if (!morse || typeof window === "undefined") return
    setIsPlaying(true)

    const ctx = new AudioContext()
    const dotDuration = 0.08
    const dashDuration = dotDuration * 3
    const symbolGap = dotDuration
    const letterGap = dotDuration * 3
    const wordGap = dotDuration * 7

    let time = ctx.currentTime

    for (const char of morse) {
      if (char === ".") {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.frequency.value = 600
        gain.gain.value = 0.5
        osc.start(time)
        osc.stop(time + dotDuration)
        time += dotDuration + symbolGap
      } else if (char === "-") {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.frequency.value = 600
        gain.gain.value = 0.5
        osc.start(time)
        osc.stop(time + dashDuration)
        time += dashDuration + symbolGap
      } else if (char === " ") {
        time += letterGap - symbolGap
      } else if (char === "/") {
        time += wordGap - letterGap
      }
    }

    setTimeout(() => {
      setIsPlaying(false)
      ctx.close()
    }, (time - ctx.currentTime) * 1000 + 100)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Text to Morse Code
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Convert text to Morse code dots and dashes, or decode Morse back to
            text.
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
            Text to Morse
          </h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Enter text to convert to Morse code
            </GLabel>
            <div className="relative mt-1">
              <GInput
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="e.g. HELLO WORLD"
                className="font-mono pr-8"
              />
              {textInput && (
                <button
                  type="button"
                  onClick={() => setTextInput("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear"
                >
                  &times;
                </button>
              )}
            </div>
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Morse code output
            </GLabel>
            <div className="mt-1 min-h-[60px] px-3 py-2.5 rounded-lg border border-input bg-muted/30 text-foreground font-mono text-sm flex items-start justify-between gap-2">
              <span className="break-all leading-relaxed">
                {morseOutput || "—"}
              </span>
              {morseOutput && (
                <CopyButton text={morseOutput} id="copy-text-to-morse" />
              )}
            </div>
          </div>
          {morseOutput && (
            <div className="flex items-center gap-2">
              <GButton
                variant="default"
                size="sm"
                onClick={() => playMorseAudio(morseOutput)}
                disabled={isPlaying}
              >
                <Volume2 className="h-3.5 w-3.5 mr-1" />
                {isPlaying ? "Playing..." : "Play Audio"}
              </GButton>
            </div>
          )}
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            Morse to Text
          </h3>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Enter Morse code (use spaces between letters, / between words)
            </GLabel>
            <div className="mt-1">
              <GTextarea
                value={morseInput}
                onChange={(e) => setMorseInput(e.target.value)}
                placeholder="e.g. .... . .-.. .-.. --- / .-- --- .-. .-.. -.."
                className="font-mono min-h-[60px]"
              />
            </div>
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Decoded text
            </GLabel>
            <div className="mt-1 min-h-[44px] px-3 py-2.5 rounded-lg border border-input bg-muted/30 text-foreground font-mono text-sm flex items-center justify-between gap-2">
              <span className="truncate">{textOutput || "—"}</span>
              {textOutput && (
                <CopyButton text={textOutput} id="copy-morse-to-text" />
              )}
            </div>
          </div>
          <GButton
            variant="outline"
            size="sm"
            onClick={handleLoadMorseSample}
          >
            Load sample
          </GButton>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Morse Code Reference
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Letters
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-sm">
              {MORSE_LETTERS.map((letter) => (
                <button
                  key={letter}
                  type="button"
                  onClick={() => setTextInput((prev) => prev + letter)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted border border-border hover:border-primary/30 transition-colors text-left"
                >
                  <span className="font-mono font-bold text-foreground">
                    {letter}
                  </span>
                  <span className="text-muted-foreground font-mono truncate ml-2 text-xs">
                    {MORSE_MAP[letter]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Numbers
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-sm">
              {MORSE_NUMBERS.map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setTextInput((prev) => prev + num)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted border border-border hover:border-primary/30 transition-colors text-left"
                >
                  <span className="font-mono font-bold text-foreground">
                    {num}
                  </span>
                  <span className="text-muted-foreground font-mono truncate ml-2 text-xs">
                    {MORSE_MAP[num]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Punctuation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-sm">
              {MORSE_PUNCTUATION.map((punct) => (
                <button
                  key={punct}
                  type="button"
                  onClick={() => setTextInput((prev) => prev + punct)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted border border-border hover:border-primary/30 transition-colors text-left"
                >
                  <span className="font-mono font-bold text-foreground">
                    {punct}
                  </span>
                  <span className="text-muted-foreground font-mono truncate ml-2 text-xs">
                    {MORSE_MAP[punct]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}