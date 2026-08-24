"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GTextarea } from "@/ui/gtextarea"
import { GCard } from "@/ui/gcard"
import { GAlert, GAlertDescription } from "@/ui/galert"
import { AlertCircle, CheckCircle, Copy, RefreshCw, Wand2 } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

export type PromptTargetKey = "sora" | "veo" | "midjourney" | "nano-banana" | "general"

const TARGETS: Array<{ value: PromptTargetKey; label: string; icon: string; description: string }> = [
  { value: "sora", label: "Sora 2", icon: "🎬", description: "OpenAI video — cinematic shots" },
  { value: "veo", label: "Veo 3", icon: "📹", description: "Google video with audio" },
  { value: "midjourney", label: "Midjourney", icon: "🎨", description: "Images with --parameters" },
  { value: "nano-banana", label: "Nano Banana", icon: "🍌", description: "Gemini image gen & editing" },
  { value: "general", label: "ChatGPT / Claude", icon: "💬", description: "Text & task prompts" },
]

interface AiPromptGeneratorProps {
  defaultTarget?: PromptTargetKey
}

export function AiPromptGenerator({ defaultTarget = "general" }: AiPromptGeneratorProps) {
  const [idea, setIdea] = useState("")
  const [target, setTarget] = useState<PromptTargetKey>(defaultTarget)
  const [prompts, setPrompts] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const generatePrompts = async () => {
    if (!idea.trim()) return

    setLoading(true)
    setError(null)
    setPrompts([])

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generate-prompt",
          data: { idea, targetModel: target },
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate prompts")
      }

      if (data.prompts && Array.isArray(data.prompts)) {
        setPrompts(data.prompts)
      } else {
        throw new Error("Invalid response format")
      }
    } catch (requestError) {
      console.error("Error generating prompts:", requestError)
      setError(requestError instanceof Error ? requestError.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const copyPrompt = async (prompt: string, index: number) => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (copyError) {
      console.error("Failed to copy:", copyError)
    }
  }

  const selectedTarget = TARGETS.find((item) => item.value === target)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <GLabel htmlFor="prompt-idea" className="text-base font-semibold">
          Describe Your Idea
        </GLabel>
        <GTextarea
          id="prompt-idea"
          placeholder="A rough idea is enough... e.g. 'a fox running through a snowy forest at dawn', 'logo for a coffee brand', 'an email asking my landlord to fix the heating'"
          value={idea}
          onChange={(event) => setIdea(event.target.value)}
          className="min-h-[120px] text-base border-2 border-primary/30 focus:border-primary"
          disabled={loading}
          maxLength={600}
        />
        <p className="text-sm text-muted-foreground">
          Plain language works — the generator adds the camera work, lighting, structure, and parameters for you.
        </p>
      </div>

      <div className="space-y-4">
        <GLabel className="text-base font-semibold">Target Model</GLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {TARGETS.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setTarget(item.value)}
              disabled={loading}
              aria-pressed={target === item.value}
              className={`p-3 rounded-lg border transition-all text-left ${
                target === item.value
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border hover:border-primary/30 hover:bg-accent"
              } ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              <p className={`text-xs ${target === item.value ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {item.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      <GButton
        onClick={generatePrompts}
        disabled={loading || !idea.trim()}
        className="w-full h-12 text-base font-semibold"
        size="lg"
      >
        {loading ? (
          <>
            <LoadingSpinner className="mr-2" />
            Writing Prompts...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-5 w-5" />
            Generate {selectedTarget?.label} Prompts
          </>
        )}
      </GButton>

      {error && (
        <GAlert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <GAlertDescription>{error}</GAlertDescription>
        </GAlert>
      )}

      {prompts.length > 0 && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-heading-accent" />
              Ready-to-Paste Prompts
            </h3>
            <GButton
              variant="outline"
              size="sm"
              onClick={generatePrompts}
              disabled={loading}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Regenerate
            </GButton>
          </div>

          <div className="grid gap-4">
            {prompts.map((prompt, index) => (
              <GCard key={index} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm leading-relaxed flex-1 whitespace-pre-wrap">{prompt}</p>
                  <GButton
                    variant="outline"
                    size="sm"
                    onClick={() => copyPrompt(prompt, index)}
                    className="flex-shrink-0"
                    aria-label={`Copy prompt ${index + 1}`}
                  >
                    {copiedIndex === index ? (
                      <CheckCircle className="h-4 w-4 text-heading-accent" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </GButton>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  For {selectedTarget?.label} • {prompt.length} characters
                </div>
              </GCard>
            ))}
          </div>

          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Paste a prompt as-is, or splice the best phrases from each variation into your own.
            </p>
          </div>
        </div>
      )}

      {loading && (
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <LoadingSpinner className="h-4 w-4" />
            <span className="text-sm font-medium">Engineering your prompts...</span>
          </div>
        </div>
      )}
    </div>
  )
}
