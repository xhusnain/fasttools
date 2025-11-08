"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Download, AlertTriangle, Video, Image as ImageIcon } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

type XVideoDownloaderProps = {
  compact?: boolean
}

export function XVideoDownloader({ compact = false }: XVideoDownloaderProps) {
  const [postUrl, setPostUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<
    | null
    | {
        type?: 'video' | 'image' | 'mixed'
        videoUrl?: string
        imageUrl?: string
        images?: (string | { url?: string; media_url?: string; url_https?: string })[]
        thumbnail?: string
        title?: string
        downloading?: boolean
        downloadStarted?: boolean
      }
  >(null)
  const [downloadingStates, setDownloadingStates] = useState<{
    video?: boolean
    image?: boolean
    [key: string]: boolean | undefined
  }>({})
  const [countdownStates, setCountdownStates] = useState<{
    video?: number
    image?: number
    [key: string]: number | undefined
  }>({})
  const [videoLoadError, setVideoLoadError] = useState(false)

  const isLikelyXUrl = (url: string) => {
    const pattern = /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/.+/i
    return pattern.test(url.trim())
  }

  const handleFetch = async () => {
    setError(null)
    setResult(null)
    setVideoLoadError(false)
    if (!isLikelyXUrl(postUrl)) {
      setError("Please enter a valid X/Twitter post URL.")
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/x-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: postUrl.trim()
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

      const hasVideo = data.videoUrl && (typeof data.videoUrl === 'string' || typeof data.videoUrl === 'object')
      const hasImage = data.imageUrl && (typeof data.imageUrl === 'string' || typeof data.imageUrl === 'object')
      const hasImages = data.images && Array.isArray(data.images) && data.images.length > 0

      if (!hasVideo && !hasImage && !hasImages) {
        throw new Error("No downloadable media found for this URL")
      }

      const ensureString = (value: any): string | undefined => {
        if (!value) return undefined
        if (typeof value === 'string') {

          if (value.startsWith('http://') || value.startsWith('https://')) {
            return value
          }
          return undefined
        }
        if (typeof value === 'object') {

          if (value.url && typeof value.url === 'string' && (value.url.startsWith('http://') || value.url.startsWith('https://'))) {
            return value.url
          }
          if (value.media_url && typeof value.media_url === 'string' && (value.media_url.startsWith('http://') || value.media_url.startsWith('https://'))) {
            return value.media_url
          }
          if (value.url_https && typeof value.url_https === 'string' && (value.url_https.startsWith('http://') || value.url_https.startsWith('https://'))) {
            return value.url_https
          }

          for (const key in value) {
            if (typeof value[key] === 'string' && (value[key].startsWith('http://') || value[key].startsWith('https://'))) {
              return value[key]
            }
          }
        }
        return undefined
      }

      const ensureImagesArray = (images: any): string[] => {
        if (!images || !Array.isArray(images)) return []
        return images
          .map(img => {
            if (typeof img === 'string') {
              if (img.startsWith('http://') || img.startsWith('https://')) {
                return img
              }
              return null
            }
            if (typeof img === 'object') {

              if (img.url && typeof img.url === 'string' && (img.url.startsWith('http://') || img.url.startsWith('https://'))) {
                return img.url
              }
              if (img.media_url && typeof img.media_url === 'string' && (img.media_url.startsWith('http://') || img.media_url.startsWith('https://'))) {
                return img.media_url
              }
              if (img.url_https && typeof img.url_https === 'string' && (img.url_https.startsWith('http://') || img.url_https.startsWith('https://'))) {
                return img.url_https
              }

              for (const key in img) {
                if (typeof img[key] === 'string' && (img[key].startsWith('http://') || img[key].startsWith('https://'))) {
                  return img[key]
                }
              }
            }
            return null
          })
          .filter((url): url is string => url !== null && typeof url === 'string')
      }

      const resultData = {
        type: data.type || (data.videoUrl ? 'video' : 'image'),
        videoUrl: ensureString(data.videoUrl),
        imageUrl: ensureString(data.imageUrl),
        images: ensureImagesArray(data.images),
        thumbnail: ensureString(data.thumbnail),
        title: typeof data.title === 'string' ? data.title : undefined,
        downloading: false,
        downloadStarted: false
      }

      setResult(resultData)
      setVideoLoadError(false)

    } catch (e: any) {
      setError(e?.message || "Failed to fetch download links. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const startCountdownAndDownload = async (url: string | any, filename: string, downloadType: string) => {

    let urlString: string
    if (typeof url === 'string' && url) {
      urlString = url
    } else if (typeof url === 'object' && url) {
      urlString = url.url || url.media_url || String(url)
      if (!urlString || !urlString.startsWith('http')) {
        setError('Invalid media URL format. Please try again.')
        return
      }
    } else {
      setError('Invalid media URL. Please try again.')
      return
    }

    const filenameWithExt = filename.trim()
    let fileExtension: string
    let cleanFilename = filename

    const extMatch = filenameWithExt.match(/\.(mp4|jpg|jpeg|png|gif|webp)$/i)
    if (extMatch) {
      fileExtension = extMatch[0].toLowerCase()
      cleanFilename = filenameWithExt.substring(0, filenameWithExt.lastIndexOf('.'))
    } else {

      if (downloadType === 'video' || urlString.includes('.mp4') || urlString.includes('video')) {
        fileExtension = '.mp4'
      } else if (urlString.includes('.jpg') || urlString.includes('.jpeg')) {
        fileExtension = '.jpg'
      } else if (urlString.includes('.png')) {
        fileExtension = '.png'
      } else if (urlString.includes('.gif')) {
        fileExtension = '.gif'
      } else if (urlString.includes('.webp')) {
        fileExtension = '.webp'
      } else {

        fileExtension = downloadType === 'video' ? '.mp4' : '.jpg'
      }
    }

    let sanitizedFilename = cleanFilename
      .replace(/[^\x00-\x7F]/g, '')
      .replace(/[<>:"/\\|?*]/g, '') // Remove invalid filename characters
.replace(/\s+/g, '_')
.replace(/_+/g, '_')
.replace(/^_|_$/g, '')
.substring(0, 100)

    if (!sanitizedFilename || sanitizedFilename.length < 3) {
      sanitizedFilename = downloadType === 'video' ? 'x_video' : 'x_image'
    }

    const maxLength = 200 - fileExtension.length
    if (sanitizedFilename.length > maxLength) {
      sanitizedFilename = sanitizedFilename.substring(0, maxLength)
    }

    const finalFilename = sanitizedFilename + fileExtension

    setError(null)

    if (urlString.includes('dl.snapcdn.app') || urlString.includes('download?token=')) {
      setDownloadingStates(prev => ({ ...prev, [downloadType]: true }))
      void performDownload(urlString, finalFilename, downloadType)
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

        void performDownload(urlString, finalFilename, downloadType)
      }
    }, 1000)

    void performBackgroundDownload(urlString, finalFilename, downloadType)
  }

  const performBackgroundDownload = async (url: string, _filename: string, downloadType: string) => {

    if (url.includes('dl.snapcdn.app') || url.includes('download?token=')) {
      return
    }

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': '**',
            'Referer': 'https://twitter.com/'
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

      throw new Error('Download failed. The media URL may be expired or inaccessible.')

    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Download failed. Please try again."
      setError(errorMessage)
      setDownloadingStates(prev => ({ ...prev, [downloadType]: false }))
    }
  }

  return (
    <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
      {!compact && (
        <Card className="p-3 xs:p-4 sm:p-5 md:p-6 bg-card border border-border shadow-sm">
          <div className="flex gap-2 xs:gap-2.5 sm:gap-3">
            <AlertTriangle className="h-4 w-4 xs:h-[18px] xs:w-[18px] sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
              <p className="text-xs xs:text-sm font-medium text-foreground">Legal Disclaimer</p>
              <p className="text-[11px] xs:text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Downloading X/Twitter content may violate copyright laws and X/Twitter's terms of service. This tool is for
                educational purposes only. Always respect content creators' rights and only download content you have
                permission to use. Use downloaded content responsibly and give proper credit to original creators.
              </p>
            </div>
          </div>
        </Card>
      )}

      <Card className={`p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 bg-card border-border shadow-sm ${compact ? "" : ""}`}>
        <div className="space-y-3 xs:space-y-3.5 sm:space-y-4 md:space-y-5">
          <div>
            <Label htmlFor="post-url" className="text-xs xs:text-sm sm:text-base font-medium text-foreground block mb-1.5 xs:mb-2">
              X/Twitter Post URL
            </Label>
            <Input
              id="post-url"
              type="text"
              placeholder="https:
              value={postUrl}
              onChange={(e) => setPostUrl(e.target.value)}
              className={`mt-1 xs:mt-1.5 ${compact ? "h-10 xs:h-11 sm:h-12" : "h-11 xs:h-12 sm:h-[52px] md:h-14"} text-xs xs:text-sm sm:text-base px-3 xs:px-4 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20`}
            />
          </div>

          <Button
            onClick={handleFetch}
            disabled={!postUrl || loading}
            className={`w-full ${compact ? "h-10 xs:h-11 sm:h-12" : "h-11 xs:h-12 sm:h-[52px] md:h-14"} text-xs xs:text-sm sm:text-base md:text-lg font-medium shadow-sm hover:shadow-md transition-all px-4 xs:px-6`}
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                <span className="hidden xs:inline sm:hidden">Processing...</span>
                <span className="hidden sm:inline">Processing content... (Usually takes 1-3 seconds)</span>
                <span className="xs:hidden">Processing...</span>
              </>
            ) : (
              <>
                <Download className="mr-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                <span className="text-xs xs:text-sm sm:text-base">Get Download Links</span>
              </>
            )}
          </Button>

          {error && (
            <div className="text-xs xs:text-sm text-muted-foreground bg-muted/50 border border-border rounded-md p-2.5 xs:p-3 sm:p-4">
              <div className="flex items-start gap-2 xs:gap-2.5">
                <AlertTriangle className="h-3.5 w-3.5 xs:h-4 xs:w-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-xs xs:text-sm">Download Failed</p>
                  <p className="mt-1 text-[11px] xs:text-xs sm:text-sm break-words">{error}</p>
                  <div className="mt-2 xs:mt-2.5 text-[10px] xs:text-xs">
                    <p className="font-semibold mb-1"><strong>Troubleshooting tips:</strong></p>
                    <ul className="list-disc list-inside mt-1 space-y-0.5 xs:space-y-1 text-[10px] xs:text-xs leading-relaxed">
                      <li>Make sure the X/Twitter post contains a video (image-only posts are not supported)</li>
                      <li>Ensure the post is public and accessible</li>
                      <li>Try refreshing the page and attempting again</li>
                      <li>Check your internet connection</li>
                      <li>Try a different X/Twitter video post URL</li>
                      <li>Disable any ad blockers or browser extensions</li>
                      <li>Some posts may be region-restricted or age-restricted</li>
                      <li>Try copying the URL directly from X/Twitter app</li>
                    </ul>
                  </div>
                  <Button
                    onClick={handleFetch}
                    disabled={loading}
                    variant="outline"
                    size="sm"
                    className="mt-2.5 xs:mt-3 h-8 xs:h-9 text-xs xs:text-sm px-3 xs:px-4"
                  >
                    {loading ? (
                      <>
                        <LoadingSpinner className="mr-1.5 xs:mr-2 h-3 w-3 xs:h-3.5 xs:w-3.5" />
                        Retrying...
                      </>
                    ) : (
                      <>
                        <Download className="mr-1.5 xs:mr-2 h-3 w-3 xs:h-3.5 xs:w-3.5" />
                        Try Again
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-3 xs:space-y-3.5 sm:space-y-4">
              {}
              {process.env.NODE_ENV === 'development' && (
                <div className="text-[10px] xs:text-xs text-muted-foreground p-2 xs:p-2.5 bg-muted rounded">
                  Debug: videoUrl={result.videoUrl ? 'exists' : 'null'}, imageUrl={result.imageUrl ? 'exists' : 'null'}, images={result.images?.length || 0}
                </div>
              )}

              {}
              {result.videoUrl && !videoLoadError && (
                <div className="flex justify-center px-1">
                  <div className={`relative ${compact ? "w-full max-w-[280px] xs:max-w-xs" : "w-full max-w-[320px] xs:max-w-sm sm:max-w-md md:max-w-lg"} rounded-md border overflow-hidden bg-black`}>
                    <video
                      src={result.videoUrl}
                      controls
                      className={`${compact ? "h-32 xs:h-36 sm:h-40" : "h-36 xs:h-40 sm:h-48 md:h-56 lg:h-64"} w-full object-contain`}
                      preload="metadata"
                      onError={() => setVideoLoadError(true)}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}

              {}
              {!result.videoUrl && (result.imageUrl || (result.images && result.images.length > 0)) && (
                <div className="flex justify-center px-1">
                  <div className={`${compact ? "w-full max-w-[280px] xs:max-w-xs" : "w-full max-w-[320px] xs:max-w-sm sm:max-w-md md:max-w-lg"} rounded-md border overflow-hidden`}>
                    {result.images && result.images.length > 1 ? (
                      <div className="grid grid-cols-2 gap-0.5 xs:gap-1">
                        {result.images.slice(0, 4).map((img, idx) => {
                          const imgSrc = typeof img === 'string'
                            ? img
                            : (typeof img === 'object' && img !== null && 'url' in img && typeof img.url === 'string')
                              ? img.url
                              : String(img)
                          if (!imgSrc || !imgSrc.startsWith('http')) return null
                          return (
                            <img
                              key={idx}
                              src={imgSrc}
                              alt={`X post image ${idx + 1}`}
                              className="w-full h-28 xs:h-32 sm:h-36 md:h-40 object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                          )
                        })}
                      </div>
                    ) : (
                      <img
                        src={result.imageUrl ||
                          (result.images && result.images[0]
                            ? (typeof result.images[0] === 'string'
                                ? result.images[0]
                                : (typeof result.images[0] === 'object' && result.images[0] !== null && 'url' in result.images[0] && typeof result.images[0].url === 'string'
                                  ? result.images[0].url
                                  : undefined))
                            : undefined) ||
                          result.thumbnail}
                        alt={result.title || "X post image"}
                        className={`${compact ? "h-32 xs:h-36 sm:h-40" : "h-36 xs:h-40 sm:h-48 md:h-56 lg:h-64"} w-full object-cover`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    )}
                  </div>
                </div>
              )}

              {}
              {(videoLoadError || (!result.videoUrl && !result.imageUrl && (!result.images || result.images.length === 0))) && result.thumbnail && (
                <div className="flex justify-center px-1">
                  <img
                    src={result.thumbnail}
                    alt={result.title || "X post preview"}
                    className={`${compact ? "w-full max-w-[280px] xs:max-w-xs h-32 xs:h-36" : "w-full max-w-[320px] xs:max-w-sm sm:max-w-md md:max-w-lg h-36 xs:h-40 sm:h-48 md:h-56 object-cover rounded-md border"}`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
              )}

              <div className="space-y-2 xs:space-y-2.5 sm:space-y-3">
                {result.downloadStarted && (
                  <div className="text-center p-2.5 xs:p-3 sm:p-4 bg-muted/50 border border-border rounded-md">
                    <p className="text-xs xs:text-sm sm:text-base text-foreground font-medium">✅ Download started! Check your downloads folder.</p>
                  </div>
                )}

                {}
                {result.videoUrl && (
                  <button
                    type="button"
                    onClick={async () => {
                      const title = result.title || "x_video"
                      await startCountdownAndDownload(result.videoUrl!, title, "video")
                    }}
                    disabled={downloadingStates.video || countdownStates.video !== undefined}
                    className="inline-flex items-center justify-center w-full h-10 xs:h-11 sm:h-12 md:h-[52px] rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-xs xs:text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed px-3 xs:px-4 sm:px-6"
                  >
                    {countdownStates.video !== undefined ? (
                      <>
                        <LoadingSpinner className="mr-1.5 xs:mr-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                        <span className="text-xs xs:text-sm">Preparing Download... ({countdownStates.video}s)</span>
                      </>
                    ) : downloadingStates.video ? (
                      <>
                        <LoadingSpinner className="mr-1.5 xs:mr-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                        <span className="text-xs xs:text-sm">Downloading Video...</span>
                      </>
                    ) : (
                      <>
                        <Video className="mr-1.5 xs:mr-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                        <span className="text-xs xs:text-sm sm:text-base">Download Video</span>
                      </>
                    )}
                  </button>
                )}

                {}
                {result.imageUrl && !result.images && (
                  <button
                    type="button"
                    onClick={async () => {
                      const title = result.title || "x_image"
                      await startCountdownAndDownload(result.imageUrl!, title, "image")
                    }}
                    disabled={downloadingStates.image || countdownStates.image !== undefined}
                    className="inline-flex items-center justify-center w-full h-10 xs:h-11 sm:h-12 md:h-[52px] rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-xs xs:text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed px-3 xs:px-4 sm:px-6"
                  >
                    {countdownStates.image !== undefined ? (
                      <>
                        <LoadingSpinner className="mr-1.5 xs:mr-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                        <span className="text-xs xs:text-sm">Preparing Download... ({countdownStates.image}s)</span>
                      </>
                    ) : downloadingStates.image ? (
                      <>
                        <LoadingSpinner className="mr-1.5 xs:mr-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                        <span className="text-xs xs:text-sm">Downloading Image...</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="mr-1.5 xs:mr-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                        <span className="text-xs xs:text-sm sm:text-base">Download Image</span>
                      </>
                    )}
                  </button>
                )}

                {}
                {result.images && result.images.length > 0 && (
                  <div className="space-y-2 xs:space-y-2.5">
                    {result.images.map((img, idx) => {

                      const imgUrl = typeof img === 'string'
                        ? img
                        : (typeof img === 'object' && img !== null && 'url' in img && typeof img.url === 'string')
                          ? img.url
                          : String(img)
                      if (!imgUrl || !imgUrl.startsWith('http')) return null

                      return (
                      <button
                        key={idx}
                        type="button"
                        onClick={async () => {
                          const title = result.title ? `${result.title}_${idx + 1}` : `x_image_${idx + 1}`
                          await startCountdownAndDownload(imgUrl, title, `image-${idx}`)
                        }}
                        disabled={downloadingStates[`image-${idx}`] || countdownStates[`image-${idx}`] !== undefined}
                        className="inline-flex items-center justify-center w-full h-10 xs:h-11 sm:h-12 md:h-[52px] rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-xs xs:text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed px-3 xs:px-4 sm:px-6"
                      >
                        {countdownStates[`image-${idx}`] !== undefined ? (
                          <>
                            <LoadingSpinner className="mr-1.5 xs:mr-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                            <span className="text-xs xs:text-sm">Preparing Download... ({countdownStates[`image-${idx}`]}s)</span>
                          </>
                        ) : downloadingStates[`image-${idx}`] ? (
                          <>
                            <LoadingSpinner className="mr-1.5 xs:mr-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                            <span className="text-xs xs:text-sm">Downloading Image {idx + 1}...</span>
                          </>
                        ) : (
                          <>
                            <ImageIcon className="mr-1.5 xs:mr-2 h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
                            <span className="text-xs xs:text-sm sm:text-base">Download Image {idx + 1}</span>
                          </>
                        )}
                      </button>
                      )
                    })}
                  </div>
                )}

                {}
                {!result.videoUrl && !result.imageUrl && (!result.images || result.images.length === 0) && (
                  <div className="text-center p-3 xs:p-4 sm:p-5 bg-muted/50 border border-border rounded-md">
                    <p className="text-xs xs:text-sm sm:text-base text-foreground font-medium mb-1.5 xs:mb-2">Media found but unable to extract URLs</p>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground px-2">
                      The API returned a response, but we couldn't extract valid media URLs. Please check the browser console for details.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>

      {!compact && (
        <Card className="p-3 xs:p-4 sm:p-5 md:p-6 bg-card border border-border shadow-sm">
          <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-2 xs:mb-2.5 sm:mb-3">Important Information</h3>
          <ul className="space-y-1.5 xs:space-y-2 text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
            <li>• How to use: paste X/Twitter video post link → Get Download Links → Download Video.</li>
            <li>• Works with posts containing videos; image-only posts are not supported.</li>
            <li>• Works best with public posts; private or restricted content may not load.</li>
            <li>• Use downloads responsibly; you are responsible for permissions and compliance.</li>
            <li>• Only download your own content or content you are authorized to use.</li>
          </ul>
        </Card>
      )}
    </div>
  )
}

