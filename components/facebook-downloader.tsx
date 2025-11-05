"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Download, AlertTriangle, Video } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

type FacebookDownloaderProps = {
  compact?: boolean
}

export function FacebookDownloader({ compact = false }: FacebookDownloaderProps) {
  const [videoUrl, setVideoUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<
    | null
    | {
        videoUrl?: string
        hdUrl?: string
        normalUrl?: string
        thumbnail?: string
        title?: string
        downloading?: boolean
        downloadStarted?: boolean
      }
  >(null)
  const [downloadingStates, setDownloadingStates] = useState<{
    video?: boolean
    [key: string]: boolean | undefined
  }>({})
  const [countdownStates, setCountdownStates] = useState<{
    video?: number
    [key: string]: number | undefined
  }>({})
  const [videoLoadError, setVideoLoadError] = useState(false)

  const isLikelyFacebookUrl = (url: string) => {
    const pattern = /^(https?:\/\/)?(www\.)?(facebook\.com|fb\.com|m\.facebook\.com)\/.+/i
    return pattern.test(url.trim())
  }

  const handleFetch = async () => {
    setError(null)
    setResult(null)
    setVideoLoadError(false)
    if (!isLikelyFacebookUrl(videoUrl)) {
      setError("Please enter a valid Facebook video URL.")
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/facebook-download', {
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

      if (!data.videoUrl) {
        throw new Error("No downloadable video found for this URL")
      }

      setResult({
        videoUrl: data.hdUrl || data.videoUrl, // Prefer HD URL
        hdUrl: data.hdUrl,
        normalUrl: data.normalUrl,
        thumbnail: data.thumbnail,
        title: data.title,
        downloading: false,
        downloadStarted: false
      })
      setVideoLoadError(false)

    } catch (e: any) {
      setError(e?.message || "Failed to fetch download links. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const startCountdownAndDownload = async (url: string, filename: string, downloadType: string) => {
    if (!url) return

    const sanitizedFilename = filename
      .replace(/[^\x00-\x7F]/g, '')
      .replace(/[<>:"/\\|?*]/g, '')
      .replace(/\s+/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '')
      .substring(0, 100)
      || 'facebook_video'

    setError(null)
    
    // Skip countdown for proxy URLs (like dl.snapcdn.app) - they download directly
    // This avoids CORS errors during countdown and makes download faster
    if (url.includes('dl.snapcdn.app') || url.includes('download?token=')) {
      setDownloadingStates(prev => ({ ...prev, [downloadType]: true }))
      performDownload(url, sanitizedFilename, downloadType)
      return
    }

    // For direct URLs, use countdown
    setCountdownStates(prev => ({ ...prev, [downloadType]: 15 }))

    let countdown = 15
    const countdownInterval = setInterval(() => {
      countdown--
      setCountdownStates(prev => ({ ...prev, [downloadType]: countdown }))
      
      if (countdown <= 0) {
        clearInterval(countdownInterval)
        setCountdownStates(prev => ({ ...prev, [downloadType]: undefined }))
        setDownloadingStates(prev => ({ ...prev, [downloadType]: true }))
        
        performDownload(url, sanitizedFilename, downloadType)
      }
    }, 1000)

    performBackgroundDownload(url, sanitizedFilename, downloadType)
  }

  const performBackgroundDownload = async (url: string, filename: string, downloadType: string) => {
    // Skip background download for proxy URLs to avoid CORS errors
    if (url.includes('dl.snapcdn.app') || url.includes('download?token=')) {
      return
    }
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': '*/*',
          'Referer': 'https://www.facebook.com/'
        }
      })

      if (response.ok) {
        const blob = await response.blob()
        if (blob.size > 0) {
          ;(window as any)[`downloadedBlob_${downloadType}`] = blob
        }
      }
    } catch (error) {
      // Silent fail - background download is not critical
    }
  }

  const performDownload = async (url: string, filename: string, downloadType: string) => {
    try {
      const preDownloadedBlob = (window as any)[`downloadedBlob_${downloadType}`]
      
      if (preDownloadedBlob) {
        const objectUrl = URL.createObjectURL(preDownloadedBlob)
        
        const link = document.createElement("a")
        link.href = objectUrl
        link.download = filename
        link.style.display = 'none'
        
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        setTimeout(() => {
          URL.revokeObjectURL(objectUrl)
          delete (window as any)[`downloadedBlob_${downloadType}`]
        }, 1000)
        
        setTimeout(() => {
          setDownloadingStates(prev => ({ ...prev, [downloadType]: false }))
          setResult(prev => prev ? { ...prev, downloadStarted: true } : null)
        }, 500)
        
        return
      }

      // For proxy URLs (like dl.snapcdn.app), use direct download without fetch
      // This avoids CORS errors and works better with these URLs
      if (url.includes('dl.snapcdn.app') || url.includes('download?token=')) {
        try {
          const link = document.createElement("a")
          link.href = url
          link.download = filename
          link.target = '_blank'
          link.rel = 'noopener noreferrer'
          link.style.display = 'none'
          
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          
          setTimeout(() => {
            setDownloadingStates(prev => ({ ...prev, [downloadType]: false }))
            setResult(prev => prev ? { ...prev, downloadStarted: true } : null)
          }, 500)
          
          return
        } catch (linkError) {
          throw new Error('Download failed. Please try again.')
        }
      }

      // For direct video URLs, try fetch first
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': '*/*',
            'Referer': 'https://www.facebook.com/'
          },
          mode: 'cors'
        })

        if (response.ok) {
          const blob = await response.blob()
          
          if (blob.size > 0) {
            const objectUrl = URL.createObjectURL(blob)
            
            const link = document.createElement("a")
            link.href = objectUrl
            link.download = filename
            link.style.display = 'none'
            
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            
            setTimeout(() => {
              URL.revokeObjectURL(objectUrl)
            }, 1000)
            
            setTimeout(() => {
              setDownloadingStates(prev => ({ ...prev, [downloadType]: false }))
              setResult(prev => prev ? { ...prev, downloadStarted: true } : null)
            }, 500)
            
            return
          }
        }
      } catch (directError) {
        // If fetch fails, try direct link as fallback
        try {
          const link = document.createElement("a")
          link.href = url
          link.download = filename
          link.target = '_blank'
          link.rel = 'noopener noreferrer'
          link.style.display = 'none'
          
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          
          setTimeout(() => {
            setDownloadingStates(prev => ({ ...prev, [downloadType]: false }))
            setResult(prev => prev ? { ...prev, downloadStarted: true } : null)
          }, 500)
          
          return
        } catch (linkError) {
          // Fall through to error
        }
      }

      throw new Error('Download failed. The video URL may be expired or inaccessible.')
      
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Download failed. Please try again."
      setError(errorMessage)
      setDownloadingStates(prev => ({ ...prev, [downloadType]: false }))
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {!compact && (
        <Card className="p-4 sm:p-5 md:p-6 bg-card border border-border shadow-sm">
          <div className="flex gap-2 sm:gap-3">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm font-medium text-foreground">Legal Disclaimer</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Downloading Facebook content may violate copyright laws and Facebook's terms of service. This tool is for
                educational purposes only. Always respect content creators' rights and only download content you have
                permission to use. Use downloaded content responsibly and give proper credit to original creators.
              </p>
            </div>
          </div>
        </Card>
      )}

      <Card className={`p-4 sm:p-5 md:p-6 bg-card border-border shadow-sm ${compact ? "" : ""}`}>
        <div className="space-y-3 sm:space-y-4">
          <div>
            <Label htmlFor="video-url" className="text-xs sm:text-sm font-medium text-foreground">
              Facebook Video URL
            </Label>
            <Input
              id="video-url"
              type="text"
              placeholder="https://www.facebook.com/watch/?v=... or https://www.facebook.com/.../videos/..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className={`mt-2 ${compact ? "h-10 sm:h-11" : "h-12 sm:h-14"} text-sm sm:text-base border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20`}
            />
          </div>

          <Button
            onClick={handleFetch}
            disabled={!videoUrl || loading}
            className={`w-full ${compact ? "h-10 sm:h-11" : "h-12 sm:h-14"} text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-all`}
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden xs:inline">Processing content... (Usually takes 1-3 seconds)</span>
                <span className="xs:hidden">Processing...</span>
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
                      <li>Make sure the Facebook video is public and accessible</li>
                      <li>Try refreshing the page and attempting again</li>
                      <li>Check your internet connection</li>
                      <li>Try a different Facebook video URL</li>
                      <li>Disable any ad blockers or browser extensions</li>
                      <li>Some videos may be region-restricted or age-restricted</li>
                      <li>Try copying the URL directly from Facebook app</li>
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
              {/* Show video preview if we have a video URL - prefer HD for preview */}
              {(result.hdUrl || result.videoUrl || result.normalUrl) && !videoLoadError && (
                <div className="flex justify-center">
                  <div className={`relative ${compact ? "w-full max-w-xs" : "w-full max-w-sm"} rounded-md border overflow-hidden bg-black`}>
                    <video
                      src={result.hdUrl || result.videoUrl || result.normalUrl}
                      controls
                      className={`${compact ? "h-32" : "h-40 xs:h-44 sm:h-48"} w-full object-contain`}
                      preload="metadata"
                      onError={() => setVideoLoadError(true)}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}
              {/* Fallback to thumbnail image if available */}
              {(videoLoadError || (!result.videoUrl && !result.hdUrl && !result.normalUrl)) && result.thumbnail && (
                <div className="flex justify-center">
                  <img
                    src={result.thumbnail}
                    alt={result.title || "Facebook video preview"}
                    className={`${compact ? "w-full max-w-xs h-32 object-cover rounded-md border" : "w-full max-w-sm h-40 xs:h-44 sm:h-48 object-cover rounded-md border"}`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              )}
              <div className="space-y-2">
                {result.downloadStarted && (
                  <div className="text-center p-3 bg-muted/50 border border-border rounded-md">
                    <p className="text-sm text-foreground font-medium">✅ Download started! Check your downloads folder.</p>
                  </div>
                )}
                {result.hdUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      startCountdownAndDownload(result.hdUrl!, (result.title || "facebook-video") + "-HD.mp4", "video")
                    }}
                    disabled={downloadingStates.video || countdownStates.video !== undefined}
                    className="inline-flex items-center justify-center w-full h-10 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {countdownStates.video !== undefined ? (
                      <>
                        <LoadingSpinner className="mr-2 h-4 w-4" />
                        Preparing Download... ({countdownStates.video}s)
                      </>
                    ) : downloadingStates.video ? (
                      <>
                        <LoadingSpinner className="mr-2 h-4 w-4" />
                        Downloading Video...
                      </>
                    ) : (
                      <>
                        <Video className="mr-2 h-4 w-4" />
                        Download Video (HD)
                      </>
                    )}
                  </button>
                )}
                {result.normalUrl && !result.hdUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      startCountdownAndDownload(result.normalUrl!, (result.title || "facebook-video") + ".mp4", "video")
                    }}
                    disabled={downloadingStates.video || countdownStates.video !== undefined}
                    className="inline-flex items-center justify-center w-full h-10 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {countdownStates.video !== undefined ? (
                      <>
                        <LoadingSpinner className="mr-2 h-4 w-4" />
                        Preparing Download... ({countdownStates.video}s)
                      </>
                    ) : downloadingStates.video ? (
                      <>
                        <LoadingSpinner className="mr-2 h-4 w-4" />
                        Downloading Video...
                      </>
                    ) : (
                      <>
                        <Video className="mr-2 h-4 w-4" />
                        Download Video
                      </>
                    )}
                  </button>
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
            <li>• How to use: paste Facebook video link → Get Download Links → choose Download Video.</li>
            <li>• Works best with public videos; private or restricted content may not load.</li>
            <li>• Use downloads responsibly; you are responsible for permissions and compliance.</li>
            <li>• Only download your own content or content you are authorized to use.</li>
          </ul>
        </Card>
      )}
    </div>
  )
}

