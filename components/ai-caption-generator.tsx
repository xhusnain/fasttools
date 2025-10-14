"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Copy, ImageIcon, Sparkles, AlertCircle, CheckCircle, RefreshCw } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Alert, AlertDescription } from "@/components/ui/alert"

const PLATFORMS = [
  { value: "instagram", label: "Instagram", icon: "📸", description: "Visual storytelling with hashtags" },
  { value: "facebook", label: "Facebook", icon: "👥", description: "Community-focused content" },
  { value: "twitter", label: "Twitter/X", icon: "🐦", description: "Concise and engaging" },
  { value: "linkedin", label: "LinkedIn", icon: "💼", description: "Professional insights" },
  { value: "tiktok", label: "TikTok", icon: "🎵", description: "Trendy and viral content" },
  { value: "pinterest", label: "Pinterest", icon: "📌", description: "Inspirational and searchable" },
  { value: "youtube", label: "YouTube", icon: "📺", description: "Video descriptions" },
]

export function AiCaptionGenerator() {
  const [description, setDescription] = useState("")
  const [platform, setPlatform] = useState("instagram")
  const [captions, setCaptions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const generateCaptions = async () => {
    if (!description.trim()) return

    setLoading(true)
    setError(null)
    setCaptions([])

    try {
      const response = await fetch("/api/ai/generate-captions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, platform }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate captions")
      }

      if (data.captions && Array.isArray(data.captions)) {
        setCaptions(data.captions)
      } else {
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console.error("Error generating captions:", error)
      setError(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const copyCaption = async (caption: string, index: number) => {
    try {
      await navigator.clipboard.writeText(caption)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
    }
  }

  const selectedPlatform = PLATFORMS.find(p => p.value === platform)

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="grid gap-6">
        <div className="space-y-3">
          <Label htmlFor="description" className="text-base font-semibold">
            Describe Your Content
          </Label>
          <Textarea
            id="description"
            placeholder="Describe your image or content... e.g., 'sunset at the beach with friends', 'coffee and laptop workspace', 'workout at the gym', 'delicious homemade pasta'"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[120px] text-base"
            disabled={loading}
          />
          <p className="text-sm text-muted-foreground">
            Be specific about what you want to share - the more details, the better the captions!
          </p>
        </div>

        <div className="space-y-3">
          <Label htmlFor="platform" className="text-base font-semibold">
            Choose Platform
          </Label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {PLATFORMS.map((p) => (
              <button
                key={p.value}
                onClick={() => setPlatform(p.value)}
                disabled={loading}
                className={`p-3 rounded-lg border-2 transition-all duration-200 text-left hover:scale-105 ${
                  platform === p.value
                    ? "border-primary bg-primary/10 shadow-md"
                    : "border-border hover:border-primary/50"
                } ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{p.icon}</span>
                  <span className="font-medium text-sm">{p.label}</span>
                </div>
                <p className="text-xs text-muted-foreground">{p.description}</p>
              </button>
            ))}
          </div>
        </div>

        <Button 
          onClick={generateCaptions} 
          disabled={loading || !description.trim()} 
          className="w-full h-12 text-base font-semibold"
          size="lg"
        >
          {loading ? (
            <>
              <LoadingSpinner className="mr-2" />
              Generating Captions...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Generate {selectedPlatform?.label} Captions
            </>
          )}
        </Button>
      </div>

      {/* Error Display */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Results Section */}
      {captions.length > 0 && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Generated Captions
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={generateCaptions}
              disabled={loading}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Regenerate
            </Button>
          </div>
          
          <div className="grid gap-4">
            {captions.map((caption, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm leading-relaxed flex-1 font-medium">{caption}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => copyCaption(caption, index)}
                    className="flex-shrink-0"
                  >
                    {copiedIndex === index ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Platform: {selectedPlatform?.label} • Length: {caption.length} characters
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Pro Tip:</strong> Mix and match elements from different captions to create your perfect post!
            </p>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <LoadingSpinner className="h-4 w-4" />
            <span className="text-sm font-medium">AI is crafting your captions...</span>
          </div>
        </div>
      )}
    </div>
  )
}
