"use client"

import { useState } from "react"
import { GButton as Button } from "@/components/globalcomponents/gbutton"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Copy, Hash } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function AiHashtagSuggester() {
  const [caption, setCaption] = useState("")
  const [platform, setPlatform] = useState("instagram")
  const [hashtags, setHashtags] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const generateHashtags = async () => {
    if (!caption.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/ai/generate-hashtags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caption, platform }),
      })

      const data = await response.json()
      setHashtags(data.hashtags)
    } catch (error) {
      console.error("Error generating hashtags:", error)
    } finally {
      setLoading(false)
    }
  }

  const copyHashtags = () => {
    navigator.clipboard.writeText(hashtags.join(" "))
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="caption">Your Caption or Post Content</Label>
          <Textarea
            id="caption"
            placeholder="Paste your caption or describe your post content..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="min-h-[120px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="platform">Platform</Label>
          <select
            id="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full h-11 px-3 rounded-md border border-input bg-background"
          >
            <option value="instagram">Instagram</option>
            <option value="tiktok">TikTok</option>
            <option value="twitter">Twitter/X</option>
            <option value="linkedin">LinkedIn</option>
          </select>
        </div>

        <Button onClick={generateHashtags} disabled={loading || !caption.trim()} className="w-full h-11 text-base">
          {loading ? (
            <>
              <LoadingSpinner className="mr-2" />
              Generating Hashtags...
            </>
          ) : (
            <>
              <Hash className="mr-2 h-5 w-5" />
              Generate Hashtags
            </>
          )}
        </Button>
      </div>

      {hashtags.length > 0 && (
        <Card className="p-6 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Suggested Hashtags ({hashtags.length})</h3>
            <Button variant="outline" size="sm" onClick={copyHashtags}>
              <Copy className="h-4 w-4 mr-2" />
              Copy All
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                onClick={() => navigator.clipboard.writeText(tag)}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Click any hashtag to copy it individually, or copy all at once.
          </p>
        </Card>
      )}
    </div>
  )
}
