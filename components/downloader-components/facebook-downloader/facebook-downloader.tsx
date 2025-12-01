"use client"

import { useState } from "react"
import { GButton as Button } from "@/components/globalcomponents/gbutton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Download, AlertTriangle, Video } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { fbdown } from "ab-downloader"
import type {
  FacebookDownloaderProps,
  FacebookVideoResult,
  DownloadingStates,
  CountdownStates
} from "./types"



export function FacebookDownloader({ compact = false }: FacebookDownloaderProps) {
  const [videoUrl, setVideoUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<FacebookVideoResult | null>(null)
  const [downloadingStates, setDownloadingStates] = useState<DownloadingStates>({})
  const [countdownStates, setCountdownStates] = useState<CountdownStates>({})
  const [videoLoadError, setVideoLoadError] = useState(false)

  const isLikelyFacebookUrl = (url: string) => {
    const pattern = /^(https?:\/\/)?(www\.)?(facebook\.com|fb\.com|m\.facebook\.com)\/.+/i
    return pattern.test(url.trim())
  }

  const handleFetch = async () => {
    setError(null)
    setResult(null)
    setVideoLoadError(false)

    const trimmedUrl = videoUrl.trim()

    if (!isLikelyFacebookUrl(trimmedUrl)) {
      setError("Please enter a valid Facebook video URL.")
      return
    }

    setLoading(true)
    try {
      let data = null
      try {
        data = await fbdown(trimmedUrl)
      } catch (firstError: any) {

        const shareMatch = trimmedUrl.match(/facebook\.com\/share\/v\/([^\/\?]+)/i)
        if (shareMatch) {
          const watchUrl = `https://www.facebook.com/watch/?v=${shareMatch[1]}`
          try {
            data = await fbdown(watchUrl)
          } catch (secondError: any) {
            throw firstError
          }
        } else {
          throw firstError
        }
      }

      if (!data) {
        throw new Error('No video found for this Facebook URL. The video may be private or the URL format is not supported.')
      }


      if (typeof data === 'object' && (data as any).error) {
        throw new Error((data as any).error || 'Failed to download video')
      }


      if (typeof data === 'object' && (data as any).status === 'error') {
        throw new Error((data as any).message || 'Failed to download video')
      }


      let videoUrl: string | null = null
      let title: string | undefined = undefined
      let thumbnail: string | undefined = undefined
      let hdUrl: string | undefined = undefined
      let normalUrl: string | undefined = undefined

      if (typeof data === 'string') {

        videoUrl = data
      } else if (typeof data === 'object') {
        const dataObj = data as any

        videoUrl = dataObj.HD || dataObj.Normal_video || dataObj.hd || dataObj.normal_video ||
          dataObj.url || dataObj.video || dataObj.videoUrl || dataObj.download || dataObj.sd || null
        title = dataObj.title || dataObj.caption || dataObj.description
        thumbnail = dataObj.thumbnail || dataObj.cover || dataObj.preview || dataObj.image
        hdUrl = dataObj.HD
        normalUrl = dataObj.Normal_video


        if (!videoUrl) {
          const findVideoUrl = (obj: any, depth: number = 0): string | null => {
            if (!obj || depth > 5) return null

            if (typeof obj === 'string') {

              if ((obj.includes('.mp4') || obj.includes('video') || obj.includes('fbcdn') || obj.includes('fbexternal')) &&
                (obj.startsWith('http://') || obj.startsWith('https://'))) {
                return obj
              }
            }

            if (typeof obj === 'object') {
              for (const key in obj) {
                const value = obj[key]
                const keyLower = key.toLowerCase()


                if (keyLower.includes('video') || keyLower.includes('url') || keyLower.includes('download') ||
                  keyLower.includes('stream') || keyLower.includes('hd') || keyLower.includes('sd') || keyLower.includes('link')) {
                  if (typeof value === 'string' &&
                    (value.includes('.mp4') || value.includes('video') || value.includes('fbcdn') || value.includes('fbexternal')) &&
                    (value.startsWith('http://') || value.startsWith('https://'))) {
                    return value
                  }
                }

                const found = findVideoUrl(value, depth + 1)
                if (found) return found
              }
            }

            return null
          }
          videoUrl = findVideoUrl(data)
        }
      }

      if (!videoUrl) {
        throw new Error('No video URL found in the response. The video may be private, restricted, or the URL format may not be supported. Please ensure the video is public and try again.')
      }

      setResult({
        videoUrl: hdUrl || videoUrl,
        hdUrl: hdUrl,
        normalUrl: normalUrl,
        thumbnail: thumbnail,
        title: title,
        downloading: false,
        downloadStarted: false
      })
      setVideoLoadError(false)

    } catch (e: any) {
      const errorMessage = e?.message || 'Failed to download Facebook video'

      if (errorMessage.includes('private')) {
        setError('This Facebook video appears to be private or restricted. Please ensure the video is public.')
      } else if (errorMessage.includes('not found') || errorMessage.includes('404')) {
        setError('Facebook video not found. Please check the URL and ensure the video exists and is public.')
      } else {
        setError(errorMessage)
      }
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


    if (url.includes('dl.snapcdn.app') || url.includes('download?token=')) {
      setDownloadingStates(prev => ({ ...prev, [downloadType]: true }))
      performDownload(url, sanitizedFilename, downloadType)
      return
    }


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
          ; (window as any)[`downloadedBlob_${downloadType}`] = blob
        }
      }
    } catch (error) {

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
            isLoading={loading}
            className={`w-full ${compact ? "h-10 sm:h-11" : "h-12 sm:h-14"} text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-all`}
          >
            {loading ? (
              <>
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
                    isLoading={loading}
                  >
                    {loading ? "Retrying..." : (
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

