"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Copy, Check, Tag } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function YoutubeTagExtractor() {
  const [videoUrl, setVideoUrl] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleExtract = () => {
    setLoading(true)
    setTimeout(() => {
      // Demo tags - in production, you'd extract actual tags from the video
      const demoTags = [
        "tutorial",
        "how to",
        "guide",
        "tips and tricks",
        "beginner friendly",
        "step by step",
        "2024",
        "learn",
        "education",
        "helpful",
        "easy",
        "quick",
        "best practices",
        "professional",
        "expert advice",
      ]
      setTags(demoTags)
      setLoading(false)
    }, 800)
  }

  const copyAllTags = () => {
    navigator.clipboard.writeText(tags.join(", "))
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
              className="mt-2 h-11 text-base"
            />
          </div>

          <Button
            onClick={handleExtract}
            disabled={!videoUrl || loading}
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

      {tags.length > 0 && (
        <Card className="p-6 bg-card border-border shadow-sm animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Extracted Tags ({tags.length})</h3>
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

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground font-mono break-all">{tags.join(", ")}</p>
            </div>
          </div>
        </Card>
      )}

      <Card className="p-6 bg-muted/30 border-border">
        <h3 className="text-base font-semibold text-foreground mb-3">How to Use</h3>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>• Paste a YouTube video URL</li>
          <li>• Click "Extract Tags" to get all video tags</li>
          <li>• Copy individual tags or all tags at once</li>
          <li>• Use these tags for SEO research and content ideas</li>
        </ul>
      </Card>
    </div>
  )
}
