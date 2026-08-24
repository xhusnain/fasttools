"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import type { Tiktoken } from "js-tiktoken/lite"
import { GLabel } from "@/ui/glabel"
import { GTextarea } from "@/ui/gtextarea"
import { GCard } from "@/ui/gcard"
import { CheckCircle2, Info, XCircle } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

export type TokenModelKey = "gpt" | "gpt-legacy" | "claude" | "gemini" | "llama"

interface TokenModel {
  key: TokenModelKey
  label: string
  encoding: "o200k_base" | "cl100k_base"
  exact: boolean
  note: string
}

const MODELS: TokenModel[] = [
  {
    key: "gpt",
    label: "ChatGPT · GPT-5 / GPT-4o",
    encoding: "o200k_base",
    exact: true,
    note: "Exact count using the o200k_base tokenizer these models actually use.",
  },
  {
    key: "gpt-legacy",
    label: "GPT-4 / GPT-3.5",
    encoding: "cl100k_base",
    exact: true,
    note: "Exact count using the cl100k_base tokenizer these models actually use.",
  },
  {
    key: "claude",
    label: "Claude",
    encoding: "o200k_base",
    exact: false,
    note: "Estimate — Anthropic's tokenizer isn't public. Real Claude counts are typically within ±15% of this figure; the API response reports exact usage.",
  },
  {
    key: "gemini",
    label: "Gemini",
    encoding: "o200k_base",
    exact: false,
    note: "Estimate — Google's tokenizer isn't public. Use the countTokens API method for exact numbers; this figure is typically within ±15%.",
  },
  {
    key: "llama",
    label: "Llama / open models",
    encoding: "cl100k_base",
    exact: false,
    note: "Estimate — each open model ships its own tokenizer, so counts vary by model. This uses a comparable BPE vocabulary.",
  },
]

const CONTEXT_WINDOWS = [
  { name: "GPT-5 / GPT-4o", tokens: 128000 },
  { name: "Claude (Sonnet/Opus)", tokens: 200000 },
  { name: "Gemini 2.5 Pro", tokens: 1000000 },
  { name: "Llama 3.1", tokens: 128000 },
]

const SAMPLE_TEXT = "Paste anything here — an article, a prompt, code, or a whole document — and the token count updates as you type."

interface TokenCounterProps {
  defaultModel?: TokenModelKey
}

export function TokenCounter({ defaultModel = "gpt" }: TokenCounterProps) {
  const [text, setText] = useState("")
  const [modelKey, setModelKey] = useState<TokenModelKey>(defaultModel)
  const [encoders, setEncoders] = useState<Partial<Record<string, Tiktoken>>>({})
  const [loadingEncoder, setLoadingEncoder] = useState(false)
  const loadedRef = useRef<Set<string>>(new Set())

  const model = MODELS.find((item) => item.key === modelKey) ?? MODELS[0]

  useEffect(() => {
    const encodingName = model.encoding
    if (loadedRef.current.has(encodingName)) return
    loadedRef.current.add(encodingName)
    setLoadingEncoder(true)

    Promise.all([
      import("js-tiktoken/lite"),
      encodingName === "o200k_base"
        ? import("js-tiktoken/ranks/o200k_base")
        : import("js-tiktoken/ranks/cl100k_base"),
    ])
      .then(([lite, ranks]) => {
        setEncoders((prev) => ({ ...prev, [encodingName]: new lite.Tiktoken(ranks.default) }))
      })
      .catch((loadError) => {
        console.error("Failed to load tokenizer:", loadError)
        loadedRef.current.delete(encodingName)
      })
      .finally(() => setLoadingEncoder(false))
  }, [model.encoding])

  const encoder = encoders[model.encoding]

  const counts = useMemo(() => {
    const characters = text.length
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const tokens = encoder && text ? encoder.encode(text).length : 0
    return { characters, words, tokens }
  }, [text, encoder])

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <GLabel className="text-base font-semibold">Model</GLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {MODELS.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setModelKey(item.key)}
              aria-pressed={modelKey === item.key}
              className={`p-3 rounded-lg border text-left transition-all ${
                modelKey === item.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/30 hover:bg-accent"
              }`}
            >
              <span className="font-medium text-sm block">{item.label}</span>
              <span
                className={`text-xs ${
                  modelKey === item.key ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {item.exact ? "Exact" : "Estimate"}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <GLabel htmlFor="token-input" className="text-base font-semibold">
          Your Text
        </GLabel>
        <GTextarea
          id="token-input"
          placeholder={SAMPLE_TEXT}
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="min-h-[200px] text-base border-2 border-primary/30 focus:border-primary font-mono"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <GCard className="p-5 text-center">
          <div className="text-3xl font-bold text-primary">
            {loadingEncoder && !encoder ? <LoadingSpinner className="mx-auto h-7 w-7" /> : counts.tokens.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Tokens {model.exact ? "(exact)" : "(estimated)"}
          </div>
        </GCard>
        <GCard className="p-5 text-center">
          <div className="text-3xl font-bold">{counts.words.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground mt-1">Words</div>
        </GCard>
        <GCard className="p-5 text-center">
          <div className="text-3xl font-bold">{counts.characters.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground mt-1">Characters</div>
        </GCard>
      </div>

      <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 text-sm text-muted-foreground">
        <Info className="h-4 w-4 mt-0.5 shrink-0" />
        <p>{model.note}</p>
      </div>

      {counts.tokens > 0 && (
        <div className="space-y-3 animate-fade-in">
          <GLabel className="text-base font-semibold">Context Window Fit</GLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CONTEXT_WINDOWS.map((window) => {
              const fits = counts.tokens <= window.tokens
              const percent = Math.min(100, (counts.tokens / window.tokens) * 100)
              return (
                <GCard key={window.name} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{window.name}</span>
                    <span className="flex items-center gap-1.5 text-sm">
                      {fits ? (
                        <CheckCircle2 className="h-4 w-4 text-heading-accent" />
                      ) : (
                        <XCircle className="h-4 w-4 text-destructive" />
                      )}
                      {(window.tokens / 1000).toLocaleString()}k
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${fits ? "bg-primary" : "bg-destructive"}`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {percent < 1 ? "<1" : percent.toFixed(0)}% of the context window
                  </div>
                </GCard>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
