"use client"

import { useState } from "react"
import { GButton as Button } from "@/components/globalcomponents/gbutton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Copy, Check, Tag, AlertCircle } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface ExtractedData {
  success: boolean
  videoId: string
  tags: string[]
  count: number
  error?: string
}

export function YoutubeTagExtractor() {
  const [videoUrl, setVideoUrl] = useState("")
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleExtract = async () => {
    if (!videoUrl.trim()) return

    setLoading(true)
    setError(null)
    setExtractedData(null)

    try {
      const response = await fetch('/api/youtube-tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: videoUrl.trim() }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to extract tags')
      }

      setExtractedData(data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const copyAllTags = () => {
    if (extractedData?.tags) {
      navigator.clipboard.writeText(extractedData.tags.join(", "))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const copyTag = (tag: string) => {
    navigator.clipboard.writeText(tag)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-border shadow-sm">
        <div className="space-y-4">
          <div>
            <Label htmlFor="video-url" className="text-sm font-medium text-foreground">
              YouTube Video URL
            </Label>
            <Input
              id="video-url"
              type="text"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="mt-2 h-11 text-base border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <Button
            onClick={handleExtract}
            disabled={!videoUrl.trim() || loading}
            className="w-full h-11 text-base font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Extracting Tags...
              </>
            ) : (
              <>
                <Tag className="mr-2 h-5 w-5" />
                Extract Tags
              </>
            )}
          </Button>
        </div>
      </Card>

      {error && (
        <Card className="p-6 bg-red-50 border-red-200 shadow-sm animate-fade-in">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-foreground mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Error</h3>
              <p className="text-sm text-foreground">{error}</p>
            </div>
          </div>
        </Card>
      )}

      {extractedData && extractedData.success && (
        <Card className="p-6 bg-card border-border shadow-sm animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                Extracted Tags ({extractedData.count})
              </h3>
              <Button size="sm" variant="outline" onClick={copyAllTags} className="h-9 text-sm bg-transparent">
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy All
                  </>
                )}
              </Button>
            </div>

            <div className="p-3 bg-muted/30 rounded-lg border border-border">
              <p className="text-xs text-muted-foreground mb-1">Video ID: {extractedData.videoId}</p>
              <p className="text-sm text-muted-foreground">These are the actual tags used by the video creator</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {extractedData.tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => copyTag(tag)}
                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                  title="Click to copy this tag"
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground font-mono break-all">{extractedData.tags.join(", ")}</p>
            </div>
          </div>
        </Card>
      )}

      <Card className="p-6 bg-muted/30 border-border">
        <h3 className="text-base font-semibold text-foreground mb-3">How to Use</h3>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>• Paste a YouTube video URL (supports watch, shorts, and youtu.be links)</li>
          <li>• Click "Extract Tags" to get all actual video tags</li>
          <li>• Click individual tags or "Copy All" to copy tags</li>
          <li>• Use these tags for SEO research and content ideas</li>
          <li>• Works with public videos only (private/unlisted videos cannot be accessed)</li>
        </ul>
      </Card>
    </div>
  )
}
