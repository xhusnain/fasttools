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
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      {/* Main Downloader Card */}
      <Card className="border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                <ImageIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  YouTube Thumbnail Downloader
                </h2>
                <p className="text-white/80 text-sm sm:text-base">
                  Download YouTube video thumbnails in all available quality sizes
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="video-url" className="text-sm font-medium text-white">
                YouTube Video URL or ID
              </Label>
              <Input
                id="video-url"
                type="text"
                placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ or dQw4w9WgXcQ"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="h-10 sm:h-11 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>

            <Button
              onClick={handleExtract}
              disabled={!videoUrl || loading}
              className="w-full h-10 sm:h-11 text-sm font-medium bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {loading ? (
                <>
                  <LoadingSpinner className="mr-2" />
                  <span className="hidden sm:inline">Extracting Thumbnails...</span>
                  <span className="sm:hidden">Extracting...</span>
                </>
              ) : (
                <>
                  <ImageIcon className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Get Thumbnails</span>
                  <span className="sm:hidden">Get Thumbnails</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {thumbnails.length > 0 && (
        <div className="space-y-4 sm:space-y-6 animate-fade-in">
          <h3 className="text-lg sm:text-xl font-semibold text-white text-center">Available Thumbnails</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {thumbnails.map((thumbnail, index) => (
              <Card key={index} className="p-3 sm:p-4 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="space-y-3 sm:space-y-4">
                  <img
                    src={thumbnail.url || "/placeholder.svg"}
                    alt={`${thumbnail.quality} thumbnail`}
                    className="w-full rounded-lg border border-white/20 shadow-md"
                    loading="lazy"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm sm:text-base font-medium text-white">{thumbnail.quality}</p>
                      <p className="text-xs sm:text-sm text-white/70">{thumbnail.size}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(thumbnail.url)}
                        className="h-8 sm:h-9 text-xs sm:text-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        {copied === thumbnail.url ? <Check className="h-3 w-3 sm:h-4 sm:w-4" /> : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => downloadImage(thumbnail.url, thumbnail.quality)}
                        className="h-8 sm:h-9 text-xs sm:text-sm bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                      >
                        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-lg">
        <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">How to Use</h3>
        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/80 leading-relaxed">
          <li>• Paste a YouTube video URL or video ID</li>
          <li>• Click "Get Thumbnails" to extract all available sizes</li>
          <li>• Download or copy the thumbnail URL you need</li>
          <li>• Maximum quality (1280x720) is recommended for best results</li>
        </ul>
      </Card>
    </div>
  )
}
