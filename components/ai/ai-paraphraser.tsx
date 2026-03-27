"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GTextarea } from "@/ui/gtextarea"
import { GBadge } from "@/ui/gbadge"
import { cn } from "@/lib/utils"
import {
  Check,
  Copy,
  FileText,
  Loader2,
  RotateCcw,
  Sparkles,
  Wand2,
} from "lucide-react"

const MODES = [
  { id: "standard", label: "Standard", description: "Balanced rewrite preserving meaning", icon: "S" },
  { id: "fluency", label: "Fluency", description: "Improve grammar and readability", icon: "F" },
  { id: "formal", label: "Formal", description: "Professional, business tone", icon: "Fo" },
  { id: "creative", label: "Creative", description: "Expressive, varied vocabulary", icon: "C" },
  { id: "academic", label: "Academic", description: "Scholarly, research-paper style", icon: "A" },
  { id: "shorten", label: "Shorten", description: "Concise, remove filler words", icon: "Sh" },
  { id: "expand", label: "Expand", description: "Add detail and elaboration", icon: "E" },
]

export function AIParaphraser() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [selectedMode, setSelectedMode] = useState("standard")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

  const wordCount = (text: string) => text.trim() ? text.trim().split(/\s+/).length : 0

  const handleParaphrase = async () => {
    if (!inputText.trim()) return

    setIsLoading(true)
    setError("")
    setOutputText("")

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "paraphrase",
          data: { text: inputText.trim(), mode: selectedMode },
        }),
      })

      const result = await response.json()

      if (result.paraphrasedText) {
        setOutputText(result.paraphrasedText)
      } else if (result.error) {
        setError(result.error)
      } else {
        setError("Failed to paraphrase. Please try again.")
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

  return (
    <div className="space-y-6">
      {/* Mode Selector */}
      <GCard>
        <GCardHeader className="pb-3">
          <GCardTitle className="text-base flex items-center gap-2">
            <Wand2 className="h-5 w-5" /> Rewrite Mode
          </GCardTitle>
          <GCardDescription>Choose how you want your text rewritten.</GCardDescription>
        </GCardHeader>
        <GCardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {MODES.map((mode) => (
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
                <div className="text-sm font-medium">{mode.label}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">{mode.description}</div>
              </button>
            ))}
          </div>
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
              <span className="text-xs text-muted-foreground">
                {wordCount(inputText)} words &middot; {inputText.length}/5000
              </span>
            </div>
          </GCardHeader>
          <GCardContent className="space-y-3">
            <GTextarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value.slice(0, 5000))}
              placeholder="Paste or type the text you want to rewrite..."
              rows={10}
              className="resize-none"
            />
            <div className="flex gap-2">
              <GButton
                onClick={handleParaphrase}
                disabled={isLoading || !inputText.trim()}
                className="flex-1 sm:flex-none"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-1.5 animate-spin" /> Rewriting...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-1.5" /> Paraphrase
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
                <Sparkles className="h-4 w-4 text-primary" /> Paraphrased Text
                {outputText && (
                  <GBadge variant="outline" className="text-xs capitalize">{selectedMode}</GBadge>
                )}
              </GCardTitle>
              {outputText && (
                <span className="text-xs text-muted-foreground">{wordCount(outputText)} words</span>
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
              placeholder={isLoading ? "Generating..." : "Paraphrased text will appear here..."}
              rows={10}
              className="resize-none"
            />
            {outputText && (
              <div className="flex gap-2">
                <GButton variant="outline" size="sm" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                  {copied ? "Copied!" : "Copy"}
                </GButton>
                <GButton variant="outline" size="sm" onClick={() => { setInputText(outputText); setOutputText("") }}>
                  <RotateCcw className="h-4 w-4 mr-1" /> Re-paraphrase
                </GButton>
              </div>
            )}
          </GCardContent>
        </GCard>
      </div>
    </div>
  )
}
