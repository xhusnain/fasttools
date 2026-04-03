"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GTextarea } from "@/ui/gtextarea"
import { GBadge } from "@/ui/gbadge"
import { GSlider } from "@/ui/gslider"
import { cn } from "@/lib/utils"
import {
  Check,
  Copy,
  FileText,
  Loader2,
  RotateCcw,
  Sparkles,
  List,
  AlignLeft,
  Lightbulb,
  Clock,
  Download,
} from "lucide-react"

const MODES = [
  { id: "paragraph", label: "Paragraph", description: "Flowing summary paragraph", icon: AlignLeft },
  { id: "bullets", label: "Bullet Points", description: "Key points as a list", icon: List },
  { id: "keypoints", label: "Key Takeaways", description: "Top insights extracted", icon: Lightbulb },
  { id: "tldr", label: "TL;DR", description: "One-sentence summary", icon: Clock },
]

const MAX_CHARS = 10000

function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).length
  const mins = Math.ceil(words / 238)
  return mins <= 1 ? "< 1 min" : `${mins} min`
}

function wordCount(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}

export function AISummarizer() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [selectedMode, setSelectedMode] = useState("paragraph")
  const [summaryLength, setSummaryLength] = useState(30) // percentage
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

  const handleSummarize = async () => {
    if (!inputText.trim()) return

    setIsLoading(true)
    setError("")
    setOutputText("")

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "summarize",
          data: {
            text: inputText.trim(),
            mode: selectedMode,
            lengthPercent: summaryLength,
          },
        }),
      })

      const result = await response.json()

      if (result.summary) {
        setOutputText(result.summary)
      } else if (result.error) {
        setError(result.error)
      } else {
        setError("Failed to summarize. Please try again.")
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleClear = () => {
    setInputText("")
    setOutputText("")
    setError("")
  }

  const handleDownload = () => {
    const blob = new Blob([outputText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `summary-${Date.now()}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  const inputWords = wordCount(inputText)
  const outputWords = wordCount(outputText)
  const reduction = inputWords > 0 && outputWords > 0
    ? Math.round((1 - outputWords / inputWords) * 100)
    : 0

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <GCard>
        <GCardHeader className="pb-3">
          <GCardTitle className="text-base flex items-center gap-2">
            <Sparkles className="h-5 w-5" /> Summary Mode
          </GCardTitle>
          <GCardDescription>Choose how you want your text summarized.</GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {MODES.map((mode) => {
              const Icon = mode.icon
              return (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={cn(
                    "text-left p-3 rounded-lg border transition-colors",
                    selectedMode === mode.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="text-sm font-medium flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5" />
                    {mode.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{mode.description}</div>
                </button>
              )
            })}
          </div>

          {/* Length Control */}
          {selectedMode !== "tldr" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground">Summary Length</label>
                <span className="text-sm font-medium">
                  {summaryLength <= 15 ? "Very Short" : summaryLength <= 30 ? "Short" : summaryLength <= 50 ? "Medium" : "Detailed"}
                  {" "}({summaryLength}%)
                </span>
              </div>
              <GSlider
                value={[summaryLength]}
                onValueChange={([v]) => setSummaryLength(v)}
                min={10}
                max={70}
                step={5}
              />
            </div>
          )}
        </GCardContent>
      </GCard>

      {/* Input / Output */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <GCard>
          <GCardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <GCardTitle className="text-base flex items-center gap-2">
                <FileText className="h-4 w-4" /> Original Text
              </GCardTitle>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{inputWords} words</span>
                <span>&middot;</span>
                <span>{inputText.length.toLocaleString()}/{MAX_CHARS.toLocaleString()}</span>
                {inputWords > 0 && (
                  <>
                    <span>&middot;</span>
                    <span className="flex items-center gap-0.5">
                      <Clock className="h-3 w-3" />
                      {readingTime(inputText)} read
                    </span>
                  </>
                )}
              </div>
            </div>
          </GCardHeader>
          <GCardContent className="space-y-3">
            <GTextarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value.slice(0, MAX_CHARS))}
              placeholder="Paste the article, essay, report, or any text you want to summarize..."
              rows={12}
              className="resize-none"
            />
            <div className="flex gap-2">
              <GButton
                onClick={handleSummarize}
                disabled={isLoading || !inputText.trim()}
                className="flex-1 sm:flex-none"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-1.5 animate-spin" /> Summarizing...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-1.5" /> Summarize
                  </>
                )}
              </GButton>
              <GButton variant="outline" onClick={handleClear} disabled={isLoading}>
                <RotateCcw className="h-4 w-4 mr-1" /> Clear
              </GButton>
            </div>
          </GCardContent>
        </GCard>

        {/* Output */}
        <GCard>
          <GCardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <GCardTitle className="text-base flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" /> Summary
                {outputText && (
                  <GBadge variant="outline" className="text-xs capitalize">{selectedMode}</GBadge>
                )}
              </GCardTitle>
              {outputText && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{outputWords} words</span>
                  <span>&middot;</span>
                  <span className="flex items-center gap-0.5">
                    <Clock className="h-3 w-3" />
                    {readingTime(outputText)} read
                  </span>
                </div>
              )}
            </div>
          </GCardHeader>
          <GCardContent className="space-y-3">
            {error && (
              <div className="text-sm text-red-500 bg-red-500/10 rounded-lg p-3">{error}</div>
            )}
            <GTextarea
              value={outputText}
              readOnly
              placeholder={isLoading ? "Generating summary..." : "Your summary will appear here..."}
              rows={12}
              className="resize-none"
            />
            {outputText && (
              <div className="flex flex-wrap items-center gap-2">
                <GButton variant="outline" size="sm" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                  {copied ? "Copied!" : "Copy"}
                </GButton>
                <GButton variant="outline" size="sm" onClick={handleDownload}>
                  <Download className="h-4 w-4 mr-1" /> Download .txt
                </GButton>
                <GButton variant="outline" size="sm" onClick={() => { setInputText(outputText); setOutputText("") }}>
                  <RotateCcw className="h-4 w-4 mr-1" /> Re-summarize
                </GButton>
                {reduction > 0 && (
                  <GBadge variant="secondary" className="ml-auto">
                    {reduction}% shorter
                  </GBadge>
                )}
              </div>
            )}
          </GCardContent>
        </GCard>
      </div>
    </div>
  )
}
