"use client"

import { useState } from "react"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { GAlert, GAlertDescription } from "@/ui/galert"

import { Download, Loader2, AlertCircle, Video, Music } from "lucide-react"
import { API } from "@/services/api/api.service"

export interface TiktokDownloaderProps {
  compact?: boolean
}

export function TiktokDownloader({ compact = false }: TiktokDownloaderProps) {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)

  const validateUrl = (inputUrl: string): boolean => {
    if (!inputUrl.trim()) {
      setError("Please enter a TikTok URL")
      return false
    }

    const tiktokPatterns = [
      /^https?:\/\/(www\.|vm\.)?tiktok\.com\/@[\w.-]+\/video\/\d+/i,
      /^https?:\/\/(vm|vt)\.tiktok\.com\/[a-zA-Z0-9]+\/?/i,
      /^https?:\/\/(www\.)?tiktok\.com\/.*\/video\/\d+/i,
    ]

    if (!tiktokPatterns.some(pattern => pattern.test(inputUrl.trim()))) {
      setError("Please enter a valid TikTok video URL")
      return false
    }

    return true
  }

  const handleDownload = async () => {
    setError(null)
    setResult(null)

    if (!validateUrl(url)) return

    setLoading(true)

    try {
      const response = await API.Downloader.download('tiktok', url.trim()) as any

      if (response.status && (response.video || response.audio || response.result)) {
        // Handle direct response format (video/audio arrays at root level)
        if (response.video || response.audio) {
          setResult(response)
        } else if (response.result) {
          // Handle nested result format
          setResult(response.result)
        }
      } else {
        setError("Failed to fetch download links. Please try again.")
      }
    } catch (err: any) {
      setError(err.message || "Failed to download. Please check the URL and try again.")
    } finally {
      setLoading(false)
    }
  }

  const downloadFile = async (fileUrl: string, filename: string) => {
    try {
      // Fetch the file as a blob to handle cross-origin downloads
      const response = await fetch(fileUrl)
      const blob = await response.blob()

      // Create a blob URL
      const blobUrl = URL.createObjectURL(blob)

      // Create and trigger download
      const link = document.createElement("a")
      link.href = blobUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Clean up the blob URL
      setTimeout(() => URL.revokeObjectURL(blobUrl), 100)
    } catch (error) {
      // Fallback to direct link if fetch fails
      const link = document.createElement("a")
      link.href = fileUrl
      link.download = filename
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      <GCard className="p-6 sm:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <GLabel htmlFor="tiktok-url" className="text-base font-semibold">
              TikTok URL
            </GLabel>
            <div className="flex gap-2">
              <GInput
                id="tiktok-url"
                type="text"
                placeholder="https://www.tiktok.com/@username/video/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleDownload()}
                className="flex-1"
                disabled={loading}
              />
              <GButton
                onClick={handleDownload}
                disabled={loading || !url.trim()}
                className="px-6"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </>
                )}
              </GButton>
            </div>
          </div>

          {error && (
            <GAlert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <GAlertDescription>{error}</GAlertDescription>
            </GAlert>
          )}

          {result && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Video className="h-4 w-4" />
                <span>Download ready!</span>
              </div>

              {result.thumbnail && (
                <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden border">
                  <img src={result.thumbnail} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="space-y-2">
                {result.title && (
                  <p className="text-sm font-medium line-clamp-2">{result.title}</p>
                )}

                <div className="grid gap-2">
                  {/* Handle video array (can be single video or multiple images) */}
                  {result.video && Array.isArray(result.video) && result.video.length > 0 && (
                    <>
                      {result.video.length === 1 ? (
                        // Single video
                        <GButton
                          onClick={async () => await downloadFile(result.video[0], `tiktok-video-${Date.now()}.mp4`)}
                          className="w-full"
                          size="lg"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Download Video
                        </GButton>
                      ) : (
                        // Multiple images (photo carousel)
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Photo Carousel ({result.video.length} images)</p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                            {result.video.map((imageUrl: string, index: number) => (
                              <div key={index} className="relative group">
                                <img
                                  src={imageUrl}
                                  alt={`Image ${index + 1}`}
                                  className="w-full aspect-square object-cover rounded border"
                                />
                                <GButton
                                  onClick={async () => await downloadFile(imageUrl, `tiktok-image-${index + 1}-${Date.now()}.jpg`)}
                                  size="sm"
                                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Download className="h-4 w-4" />
                                </GButton>
                              </div>
                            ))}
                          </div>
                          <GButton
                            onClick={async () => {
                              for (let index = 0; index < result.video.length; index++) {
                                await downloadFile(result.video[index], `tiktok-image-${index + 1}-${Date.now()}.jpg`)
                                if (index < result.video.length - 1) {
                                  await new Promise(resolve => setTimeout(resolve, 500))
                                }
                              }
                            }}
                            className="w-full"
                            variant="outline"
                          >
                            <Download className="mr-2 h-5 w-5" />
                            Download All Images
                          </GButton>
                        </div>
                      )}
                    </>
                  )}

                  {/* Handle legacy format with result.url */}
                  {result.url && !result.video && (
                    <GButton
                      onClick={async () => await downloadFile(result.url, `tiktok-${Date.now()}.mp4`)}
                      className="w-full"
                      size="lg"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Video
                    </GButton>
                  )}

                  {/* Handle audio array or legacy music field */}
                  {((result.audio && Array.isArray(result.audio) && result.audio.length > 0) || result.music) && (
                    <GButton
                      onClick={async () => {
                        const audioUrl = result.audio && result.audio.length > 0 ? result.audio[0] : result.music
                        await downloadFile(audioUrl, `tiktok-audio-${Date.now()}.mp3`)
                      }}
                      variant="outline"
                      className="w-full"
                      size="lg"
                    >
                      <Music className="mr-2 h-5 w-5" />
                      Download Audio
                    </GButton>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </GCard>

      {!compact && (
        <GCard className="p-6 bg-card border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">How to Use</h3>
          <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
            <li>Open TikTok and find the video you want to download</li>
            <li>Tap the Share button and copy the link</li>
            <li>Paste it into the input field above</li>
            <li>Click Download to save the video</li>
          </ol>
        </GCard>
      )}
    </div>
  )
}
