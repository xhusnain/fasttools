"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard } from "@/ui/gcard"
import { GAlert, GAlertDescription } from "@/ui/galert"

import { Download, Copy, Check, ImageIcon, AlertCircle } from "lucide-react"

export function YoutubeThumbnailDownloader() {
  const [videoUrl, setVideoUrl] = useState("")
  const [thumbnails, setThumbnails] = useState<{ quality: string; url: string; size: string }[]>([])
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isValidating, setIsValidating] = useState(false)

  const extractVideoId = (url: string): string | null => {
    const trimmedUrl = url.trim()

    const patterns = [
      // youtube.com/watch?v=VIDEO_ID
      /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/i,
      // youtu.be/VIDEO_ID
      /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/i,
      // youtube.com/embed/VIDEO_ID
      /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/i,
      // youtube.com/v/VIDEO_ID
      /(?:youtube\.com\/v\/)([a-zA-Z0-9_-]{11})/i,
      // youtube.com/shorts/VIDEO_ID
      /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/i,
      // Direct video ID (11 characters)
      /^([a-zA-Z0-9_-]{11})$/,
    ]

    for (const pattern of patterns) {
      const match = trimmedUrl.match(pattern)
      if (match && match[1]) {
        return match[1]
      }
    }
    return null
  }

  const validateYouTubeUrl = (url: string): { valid: boolean; message?: string } => {
    if (!url || url.trim() === "") {
      return { valid: false, message: "Please enter a YouTube URL or video ID" }
    }

    const trimmedUrl = url.trim()

    // YouTube URL patterns
    const urlPatterns = [
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/i,
      /^[a-zA-Z0-9_-]{11}$/, // Direct video ID
    ]

    // Check if it matches any URL pattern
    const isUrlPattern = urlPatterns.some(pattern => pattern.test(trimmedUrl))

    if (!isUrlPattern && !/^[a-zA-Z0-9_-]{11}$/.test(trimmedUrl)) {
      return { valid: false, message: "Invalid YouTube URL format. Please enter a valid YouTube URL or 11-character video ID" }
    }

    // Extract video ID to verify format
    const videoId = extractVideoId(trimmedUrl)
    if (!videoId) {
      return { valid: false, message: "Could not extract video ID. Please check your URL format" }
    }

    // Verify video ID is exactly 11 characters (YouTube standard)
    if (videoId.length !== 11) {
      return { valid: false, message: "Invalid video ID format. YouTube video IDs must be 11 characters" }
    }

    return { valid: true }
  }

  const handleExtract = () => {
    setError(null)
    setIsValidating(true)

    // Validate URL first
    const validation = validateYouTubeUrl(videoUrl)

    if (!validation.valid) {
      setError(validation.message || "Invalid YouTube URL")
      setIsValidating(false)
      setThumbnails([])
      return
    }

    setLoading(true)
    setIsValidating(false)

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
        setError(null)
      } else {
        setThumbnails([])
        setError("Could not extract video ID from the provided URL")
      }
      setLoading(false)
    }, 500)
  }

  const copyToClipboard = (url: string) => {
    void navigator.clipboard.writeText(url)
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
      {/* Main Downloader GCard */}
      <GCard className="border-2 border-border bg-card shadow-2xl">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center shadow-lg">
                <ImageIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  YouTube Thumbnail Downloader
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Download YouTube video thumbnails in all available quality sizes
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <GLabel htmlFor="video-url" className="text-sm font-medium text-foreground">
                YouTube Video URL or ID
              </GLabel>
              <GInput
                id="video-url"
                type="text"
                placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ or dQw4w9WgXcQ"
                value={videoUrl}
                onChange={(e) => {
                  setVideoUrl(e.target.value)
                  setError(null) // Clear error when user types
                  setThumbnails([]) // Clear thumbnails when URL changes
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && videoUrl.trim() && !loading) {
                    handleExtract()
                  }
                }}
                className={`h-10 sm:h-11 text-sm bg-background text-foreground placeholder:text-muted-foreground ${error ? "border-destructive focus-visible:ring-destructive" : "border-border"
                  }`}
              />
              {error && (
                <GAlert variant="destructive" className="mt-2">
                  <AlertCircle className="h-4 w-4" />
                  <GAlertDescription className="text-sm">{error}</GAlertDescription>
                </GAlert>
              )}
            </div>

            <GButton
              onClick={handleExtract}
              disabled={!videoUrl.trim() || loading || isValidating}
              isLoading={loading}
              className="w-full h-10 sm:h-11 text-sm font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {loading ? (
                <>
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
            </GButton>
          </div>
        </div>
      </GCard>

      {thumbnails.length > 0 && (
        <div className="space-y-4 sm:space-y-6 animate-fade-in">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground text-center">Available Thumbnails</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {thumbnails.map((thumbnail, index) => (
              <GCard key={index} className="p-3 sm:p-4 bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="space-y-3 sm:space-y-4">
                  <img
                    src={thumbnail.url}
                    alt={`${thumbnail.quality} thumbnail`}
                    className="w-full rounded-lg border border-border shadow-md"
                    loading="lazy"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm sm:text-base font-medium text-foreground">{thumbnail.quality}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{thumbnail.size}</p>
                    </div>
                    <div className="flex gap-2">
                      <GButton
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(thumbnail.url)}
                        className="h-8 sm:h-9 text-xs sm:text-sm bg-card border-border text-foreground hover:bg-secondary"
                      >
                        {copied === thumbnail.url ? <Check className="h-3 w-3 sm:h-4 sm:w-4" /> : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                      </GButton>
                      <GButton
                        size="sm"
                        onClick={() => downloadImage(thumbnail.url, thumbnail.quality)}
                        className="h-8 sm:h-9 text-xs sm:text-sm bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground"
                      >
                        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                      </GButton>
                    </div>
                  </div>
                </div>
              </GCard>
            ))}
          </div>
        </div>
      )}

      <GCard className="p-4 sm:p-6 bg-card border border-border shadow-lg">
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">How to Use</h3>
        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <li>• Paste a YouTube video URL or video ID</li>
          <li>• Click "Get Thumbnails" to extract all available sizes</li>
          <li>• Download or copy the thumbnail URL you need</li>
          <li>• Maximum quality (1280x720) is recommended for best results</li>
        </ul>
      </GCard>
    </div>
  )
}
