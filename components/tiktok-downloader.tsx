"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Download, AlertTriangle, Music, Image } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

type TiktokDownloaderProps = {
  compact?: boolean
}

export function TiktokDownloader({ compact = false }: TiktokDownloaderProps) {
  const [videoUrl, setVideoUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<
    | null
    | {
        noWatermarkUrl: string
        watermarkUrl?: string
        musicUrl?: string
        coverUrl?: string
        title?: string
        downloading?: boolean
        downloadStarted?: boolean
        imageUrl?: string
        images?: string[]
        isImage?: boolean
        type?: string
      }
  >(null)

  const isLikelyTiktokUrl = (url: string) => {
    // Accept typical TikTok URL patterns including vm.tiktok, vt.tiktok shorteners
    const pattern = /^(https?:\/\/)?(www\.)?(m\.)?(vm\.|vt\.)?tiktok\.com\/.+/i
    return pattern.test(url.trim())
  }

  const handleFetch = async () => {
    setError(null)
    setResult(null)
    if (!isLikelyTiktokUrl(videoUrl)) {
      setError("Please enter a valid TikTok video URL.")
      return
    }

    setLoading(true)
    try {
      // Use our own API endpoint to avoid CORS issues
      const response = await fetch('/api/tiktok-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: videoUrl.trim()
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `Server error: ${response.status}`)
      }

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || "Failed to fetch download links")
      }

      if (!data.videoUrl && !data.watermarkUrl && !data.imageUrl) {
        throw new Error("No downloadable content found for this URL")
      }

      // Get thumbnail from TikTok oEmbed
      let coverUrl = data.coverUrl
      if (!coverUrl) {
        try {
          const oembedRes = await fetch(
            `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl.trim())}`,
            { method: "GET", mode: "cors", headers: { Accept: "application/json" } },
          )
          if (oembedRes.ok) {
            const oembed = await oembedRes.json()
            if (oembed && oembed.thumbnail_url) {
              coverUrl = oembed.thumbnail_url as string
            }
          }
        } catch {}
      }

      setResult({
        noWatermarkUrl: data.videoUrl || "",
        watermarkUrl: data.watermarkUrl,
        musicUrl: data.musicUrl,
        coverUrl,
        title: data.title,
        imageUrl: data.imageUrl,
        images: data.images,
        isImage: data.isImage,
        type: data.type,
      })

    } catch (e: any) {
      setError(e?.message || "Failed to fetch download links. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const triggerDownload = async (url: string, filename: string) => {
    if (!url) return

    // Sanitize filename on frontend as well
    const sanitizedFilename = filename
      .replace(/[^\x00-\x7F]/g, '') // Remove non-ASCII characters
      .replace(/[<>:"/\\|?*]/g, '') // Remove invalid filename characters
      .replace(/\s+/g, '_') // Replace spaces with underscores
      .replace(/_+/g, '_') // Replace multiple underscores with single
      .replace(/^_|_$/g, '') // Remove leading/trailing underscores
      .substring(0, 100) // Limit length
      || 'tiktok_download' // Fallback if empty

    
    setError(null)
    setResult(prev => prev ? { ...prev, downloading: true } : null)

    try {
      // Use proxy download (most reliable method)
      const response = await fetch('/api/tiktok-download-file', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
          filename: sanitizedFilename
        })
      })
      
      
      if (!response.ok) {
        let errorData = {}
        try {
          errorData = await response.json()
        } catch (jsonError) {
          // Failed to parse error response
        }
        
        const errorMessage = `Download failed`
        throw new Error(errorMessage)
      }
      
      const blob = await response.blob()
      
      if (blob.size === 0) {
        throw new Error('Empty file received. The content may be private or restricted.')
      }
      
      const objectUrl = URL.createObjectURL(blob)
      
      // Create download link
      const link = document.createElement("a")
      link.href = objectUrl
      link.download = sanitizedFilename
      link.style.display = 'none'
      
      // Add to DOM, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Clean up object URL
      setTimeout(() => {
        URL.revokeObjectURL(objectUrl)
      }, 1000)
      
      // Show success message
      setTimeout(() => {
        setResult(prev => prev ? { ...prev, downloading: false, downloadStarted: true } : null)
      }, 500)
      
    } catch (e) {
      // Show error instead of opening new tab
      const errorMessage = e instanceof Error ? e.message : "Download failed. Please try again."
      setError(errorMessage)
      setResult(prev => prev ? { ...prev, downloading: false } : null)
    }
  }

  return (
    <div className="space-y-6">
      {!compact && (
        <Card className="p-6 bg-card border border-border shadow-sm">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Legal Disclaimer</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Downloading TikTok videos may violate copyright laws and TikTok's terms of service. This tool is for
                educational purposes only. Always respect content creators' rights and only download videos you have
                permission to use. Use downloaded content responsibly and give proper credit to original creators.
              </p>
            </div>
          </div>
        </Card>
      )}

      <Card className={`p-6 bg-card border-border shadow-sm ${compact ? "" : ""}`}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="video-url" className="text-sm font-medium text-foreground">
              TikTok Video/Image URL
            </Label>
            <Input
              id="video-url"
              type="text"
              placeholder="https://www.tiktok.com/@username/video/... or https://vt.tiktok.com/..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className={`mt-2 ${compact ? "h-11" : "h-14"} text-base border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20`}
            />
          </div>

          <Button
            onClick={handleFetch}
            disabled={!videoUrl || loading}
            className={`w-full ${compact ? "h-11" : "h-14"} text-base font-medium shadow-sm hover:shadow-md transition-all`}
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Processing content...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Get Download Links
              </>
            )}
          </Button>

          {error && (
            <div className="text-sm text-muted-foreground bg-muted/50 border border-border rounded-md p-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-medium text-foreground">Download Failed</p>
                  <p className="mt-1">{error}</p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <p><strong>Troubleshooting tips:</strong></p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>Make sure the TikTok video is public and accessible</li>
                      <li>Try refreshing the page and attempting again</li>
                      <li>Check your internet connection</li>
                      <li>Try a different TikTok video URL</li>
                      <li>Disable any ad blockers or browser extensions</li>
                      <li>Some videos may be region-restricted or age-restricted</li>
                      <li>Try copying the URL directly from TikTok app</li>
                    </ul>
                  </div>
                  <Button
                    onClick={handleFetch}
                    disabled={loading}
                    variant="outline"
                    size="sm"
                    className="mt-3"
                  >
                    {loading ? (
                      <>
                        <LoadingSpinner className="mr-2 h-3 w-3" />
                        Retrying...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-3 w-3" />
                        Try Again
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-3">
              {result.coverUrl && (
                <div className="flex justify-center">
                  <img
                    src={result.coverUrl}
                    alt={result.title || "TikTok cover"}
                    className={`${compact ? "w-full max-w-xs h-32 object-cover rounded-md border" : "w-full max-w-sm h-40 xs:h-44 sm:h-48 object-cover rounded-md border"}`}
                  />
                </div>
              )}
              <div className="space-y-2">
                {result.downloadStarted && (
                  <div className="text-center p-3 bg-muted/50 border border-border rounded-md">
                    <p className="text-sm text-foreground font-medium">✅ Download started! Check your downloads folder.</p>
                  </div>
                )}
                {(result.noWatermarkUrl || result.watermarkUrl) && (
                  <button
                    type="button"
                    onClick={() => triggerDownload(result.noWatermarkUrl || result.watermarkUrl!, (result.title || "tiktok-video") + ".mp4")}
                    disabled={result.downloading}
                    className="inline-flex items-center justify-center w-full h-10 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {result.downloading ? (
                      <>
                        <LoadingSpinner className="mr-2 h-4 w-4" />
                        Starting Download...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Download Video
                      </>
                    )}
                  </button>
                )}
                {result.musicUrl && (
                  <button
                    type="button"
                    onClick={() => triggerDownload(result.musicUrl!, (result.title || "tiktok-audio") + ".mp3")}
                    disabled={result.downloading}
                    className="inline-flex items-center justify-center w-full h-10 rounded-md border font-medium hover:bg-muted/50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {result.downloading ? (
                      <>
                        <LoadingSpinner className="mr-2 h-4 w-4" />
                        Starting Download...
                      </>
                    ) : (
                      <>
                        <Music className="mr-2 h-4 w-4" />
                        Download MP3
                      </>
                    )}
                  </button>
                )}
                {result.imageUrl && (
                  <div className="space-y-3">
                    <div className="relative group">
                      <img
                        src={result.imageUrl}
                        alt={result.title || "TikTok Image"}
                        className="w-full max-w-sm mx-auto h-48 object-cover rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 text-black px-3 py-1 rounded text-sm font-medium">
                          TikTok Image
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => triggerDownload(result.imageUrl!, (result.title || "tiktok-image") + ".jpg")}
                      disabled={result.downloading}
                      className="w-full max-w-sm mx-auto block inline-flex items-center justify-center h-10 rounded-md border font-medium hover:bg-muted/50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {result.downloading ? (
                        <>
                          <LoadingSpinner className="mr-2 h-4 w-4" />
                          Starting Download...
                        </>
                      ) : (
                        <>
                          <Image className="mr-2 h-4 w-4" />
                          Download Image
                        </>
                      )}
                    </button>
                  </div>
                )}
                {result.images && result.images.length > 0 && (
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-foreground">Multiple Images ({result.images.length}):</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {result.images.map((imageUrl, index) => (
                        <div key={index} className="space-y-2">
                          <div className="relative group">
                            <img
                              src={imageUrl}
                              alt={`TikTok Image ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="bg-white/90 text-black px-2 py-1 rounded text-xs font-medium">
                                Image {index + 1}
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => triggerDownload(imageUrl, (result.title || "tiktok-image") + `-${index + 1}.jpg`)}
                            disabled={result.downloading}
                            className="w-full inline-flex items-center justify-center h-8 rounded-md border font-medium hover:bg-muted/50 transition-colors text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {result.downloading ? (
                              <>
                                <LoadingSpinner className="mr-1 h-3 w-3" />
                                Downloading...
                              </>
                            ) : (
                              <>
                                <Image className="mr-1 h-3 w-3" />
                                Download
                              </>
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>

      {!compact && (
        <Card className="p-6 bg-card border border-border shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-3">Important Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <li>• How to use: paste TikTok link → Get Download Links → choose Download Video or Download MP3.</li>
            <li>• Works best with public videos; private or age-restricted content may not load.</li>
            <li>• Use downloads responsibly; you are responsible for permissions and compliance.</li>
            <li>• Only download your own content or content you are authorized to use.</li>
          </ul>
        </Card>
      )}
    </div>
  )
}
