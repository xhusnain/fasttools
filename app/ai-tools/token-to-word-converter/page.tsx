"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, RefreshCw } from "lucide-react"
import { toast } from "sonner"

export default function TokenConverter() {
  const [tokens, setTokens] = useState<string>("")
  const [words, setWords] = useState<string>("")
  const [mode, setMode] = useState<"tokens-to-words" | "words-to-tokens">("tokens-to-words")

  // Conversion factor: ~0.75 words per token (English)
  const FACTOR = 0.75

  const handleConvert = () => {
    if (mode === "tokens-to-words") {
      const tokenCount = parseInt(tokens.replace(/,/g, ""), 10)
      if (isNaN(tokenCount)) return
      const wordCount = Math.round(tokenCount * FACTOR)
      setWords(wordCount.toLocaleString())
    } else {
      const wordCount = parseInt(words.replace(/,/g, ""), 10)
      if (isNaN(wordCount)) return
      const tokenCount = Math.round(wordCount / FACTOR)
      setTokens(tokenCount.toLocaleString())
    }
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard")
  }

  const handleReset = () => {
    setTokens("")
    setWords("")
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          AI Token to Word Converter
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Instantly convert between LLM tokens and word counts. Essential for estimating API costs for OpenAI, Claude, and Gemini.
        </p>
      </div>

      <Card className="border-2 shadow-lg">
        <CardHeader>
          <Tabs defaultValue="tokens-to-words" onValueChange={(v) => {
            setMode(v as any)
            handleReset()
          }} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tokens-to-words">Tokens → Words</TabsTrigger>
              <TabsTrigger value="words-to-tokens">Words → Tokens</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid gap-6 md:grid-cols-2 items-end">
            <div className="space-y-2">
              <Label htmlFor="input-val" className="text-lg">
                {mode === "tokens-to-words" ? "Tokens (Input)" : "Words (Input)"}
              </Label>
              <Input
                id="input-val"
                placeholder={mode === "tokens-to-words" ? "e.g. 1000" : "e.g. 750"}
                value={mode === "tokens-to-words" ? tokens : words}
                onChange={(e) => {
                  const val = e.target.value
                  if (mode === "tokens-to-words") setTokens(val)
                  else setWords(val)
                }}
                className="text-xl h-12"
                type="number"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-lg">
                {mode === "tokens-to-words" ? "Est. Words" : "Est. Tokens"}
              </Label>
              <div className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-muted/50 px-3 py-2 text-xl ring-offset-background">
                <span className="font-mono font-bold">
                  {mode === "tokens-to-words" ? (words || "0") : (tokens || "0")}
                </span>
                <Button variant="ghost" size="icon" onClick={() => handleCopy(mode === "tokens-to-words" ? words : tokens)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleConvert} className="flex-1 h-12 text-lg" size="lg">
              Convert
            </Button>
            <Button onClick={handleReset} variant="outline" size="icon" className="h-12 w-12">
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <section className="mt-16 prose dark:prose-invert max-w-none">
        <h2>How AI Tokens Work</h2>
        <p>
          Large Language Models (LLMs) like GPT-4, Claude 3, and Gemini don't read words like humans do. They process text in chunks called <strong>tokens</strong>.
        </p>
        <ul>
          <li><strong>1 Token ≈ 0.75 words</strong> (English)</li>
          <li><strong>1000 Tokens ≈ 750 words</strong></li>
          <li><strong>1 Word ≈ 1.33 tokens</strong></li>
        </ul>
        <p>
          This calculator uses the standard conversion rate used by OpenAI. However, token counts can vary depending on the complexity of the text, special characters, and the specific model's tokenizer.
        </p>

        <h3>Why Calculate Tokens?</h3>
        <p>
          <strong>Cost Estimation:</strong> API pricing is per 1M tokens. Knowing your word count helps you budget.<br />
          <strong>Context Limits:</strong> Models have context windows (e.g., 128k tokens). This tool helps you ensure your prompt fits.
        </p>
      </section>
    </div>
  )
}
