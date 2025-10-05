"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Download, Copy, Check, ImageIcon } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function YoutubeThumbnailDownloader() {
  const [videoUrl, setVideoUrl] = useState("")
  const [thumbnails, setThumbnails] = useState<{ quality: string; url: string; size: string }[]>([])
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/,
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1]
    }
    return null
  }

  const handleExtract = () => {
    setLoading(true)
    setTimeout(() => {
      const videoId = extractVideoId(videoUrl)

      if (videoId) {
        setThumbnails([
          {
            quality: "Maximum Quality",
            url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
            size: "1280x720",
          },
          {
            quality: "High Quality",
            url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            size: "480x360",
          },
          {
            quality: "Medium Quality",
            url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
            size: "320x180",
          },
          {
            quality: "Standard Quality",
            url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
            size: "640x480",
          },
        ])
      } else {
        setThumbnails([])
      }
      setLoading(false)
    }, 500)
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopied(url)
    setTimeout(() => setCopied(null), 2000)
  }

  const downloadImage = (url: string, quality: string) => {
    const link = document.createElement("a")
    link.href = url
    link.download = `youtube-thumbnail-${quality.toLowerCase().replace(/\s+/g, "-")}.jpg`
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-border shadow-sm">
        <div className="space-y-4">
          <div>
            <Label htmlFor="video-url" className="text-sm font-medium text-foreground">
              YouTube Video URL or ID
            </Label>
            <Input
              id="video-url"
              type="text"
              placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ or dQw4w9WgXcQ"
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
                Extracting Thumbnails...
              </>
            ) : (
              <>
                <ImageIcon className="mr-2 h-5 w-5" />
                Get Thumbnails
              </>
            )}
          </Button>
        </div>
      </Card>

      {thumbnails.length > 0 && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground">Available Thumbnails</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {thumbnails.map((thumbnail, index) => (
              <Card key={index} className="p-4 bg-card border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <img
                    src={thumbnail.url || "/placeholder.svg"}
                    alt={`${thumbnail.quality} thumbnail`}
                    className="w-full rounded-lg border border-border"
                    loading="lazy"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{thumbnail.quality}</p>
                      <p className="text-xs text-muted-foreground">{thumbnail.size}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(thumbnail.url)}
                        className="h-9 text-sm"
                      >
                        {copied === thumbnail.url ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => downloadImage(thumbnail.url, thumbnail.quality)}
                        className="h-9 text-sm"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      <Card className="p-6 bg-muted/30 border-border">
        <h3 className="text-base font-semibold text-foreground mb-3">How to Use</h3>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>• Paste a YouTube video URL or video ID</li>
          <li>• Click "Get Thumbnails" to extract all available sizes</li>
          <li>• Download or copy the thumbnail URL you need</li>
          <li>• Maximum quality (1280x720) is recommended for best results</li>
        </ul>
      </Card>
    </div>
  )
}
