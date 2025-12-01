"use client"

import { useState } from "react"
import { GButton } from "@/components/globalcomponents/gbutton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GCard } from "@/components/globalcomponents/gcard"
import { Download, AlertTriangle, Music, Image, Video } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { igdl } from "ab-downloader"
import type {
  InstagramDownloaderProps,
  InstagramMediaResult,
  DownloadingStates,
  CountdownStates
} from "./types"

export function InstagramDownloader({ compact = false }: InstagramDownloaderProps) {
  const [postUrl, setPostUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<InstagramMediaResult | null>(null)
  const [downloadingStates, setDownloadingStates] = useState<DownloadingStates>({})
  const [countdownStates, setCountdownStates] = useState<CountdownStates>({})

  const isLikelyInstagramUrl = (url: string) => {
    const pattern = /^(https?:\/\/)?(www\.)?(instagram\.com|instagr\.am)\/.+/i
    return pattern.test(url.trim())
  }

  const handleFetch = async () => {
    setError(null)
    setResult(null)

    const trimmedUrl = postUrl.trim()

    if (!isLikelyInstagramUrl(trimmedUrl)) {
      setError("Please enter a valid Instagram post URL.")
      return
    }

    setLoading(true)
    try {
      const data = await igdl(trimmedUrl)

      if (!data) {
        throw new Error('No content found for this Instagram URL')
      }

      let result: any = {
        success: true,
      }

      const extractUrl = (item: any, preferVideo: boolean = false): string | null => {
        if (!item) return null
        if (typeof item === 'string') return item

        if (preferVideo) {
          return item.video || item.videoUrl || item.url || item.download || item.downloadUrl ||
            item.media || item.image || item.imageUrl || item.src || item.link || null
        }

        return item.url || item.video || item.videoUrl || item.image || item.imageUrl || item.media ||
          item.download || item.downloadUrl || item.src || item.link || null
      }

      const isVideo = (item: any, url?: string | null): boolean => {
        if (!item && !url) return false

        if (item) {
          if (item.type === 'video' || item.type === 'reel' || item.video || item.videoUrl || item.isVideo) return true
          if (item.url && (item.url.includes('.mp4') || item.url.includes('video') || item.url.includes('reel'))) return true
        }

        if (url) {
          if (url.includes('.mp4') || url.includes('/video/') || url.includes('reel') || url.includes('video')) return true
        }

        return false
      }

      const urlContainsReel = trimmedUrl.toLowerCase().includes('/reel/')
      const urlContainsVideo = trimmedUrl.toLowerCase().includes('/p/') === false && (trimmedUrl.toLowerCase().includes('/reel/') || trimmedUrl.toLowerCase().includes('/tv/'))
      const isDefinitelyVideo = urlContainsReel || urlContainsVideo

      if (Array.isArray(data)) {
        result.media = data
        result.isMultiple = true

        const allImages: string[] = []
        const allVideos: string[] = []

        data.forEach((item: any) => {
          const url = extractUrl(item)
          if (url) {
            if (isDefinitelyVideo || isVideo(item, url)) {
              allVideos.push(url)
            } else {
              allImages.push(url)
            }
          }
        })

        result.images = allImages.length > 0 ? allImages : undefined
        result.videos = allVideos.length > 0 ? allVideos : undefined

        const firstItem = data[0]
        if (firstItem) {
          const firstUrl = extractUrl(firstItem)
          const isFirstVideo = isDefinitelyVideo || isVideo(firstItem, firstUrl)

          if (isFirstVideo) {
            result.videoUrl = firstUrl
            result.type = 'video'
            result.thumbnail = firstItem.thumbnail || firstItem.cover || firstItem.preview || firstItem.image || firstItem.poster || undefined
          } else {
            result.imageUrl = firstUrl
            result.type = 'image'
            result.thumbnail = firstItem.thumbnail || firstItem.cover || firstItem.preview || firstItem.image || firstUrl
          }
          result.title = firstItem.title || firstItem.caption || firstItem.description
        }

        if (result.images && result.images.length > 1) {
          result.isMultiple = true
        }
      } else if (typeof data === 'object') {
        if (data.media && Array.isArray(data.media) && data.media.length > 1) {
          result.media = data.media
          result.isMultiple = true

          const allImages: string[] = []
          const allVideos: string[] = []

          data.media.forEach((item: any) => {
            const url = extractUrl(item)
            if (url) {
              if (isVideo(item, url)) {
                allVideos.push(url)
              } else {
                allImages.push(url)
              }
            }
          })

          result.images = allImages.length > 0 ? allImages : undefined
          result.videos = allVideos.length > 0 ? allVideos : undefined

          const firstItem = data.media[0]
          if (firstItem) {
            const firstUrl = extractUrl(firstItem)
            const isFirstVideo = isVideo(firstItem, firstUrl)

            if (isFirstVideo) {
              result.videoUrl = firstUrl
              result.type = 'video'
            } else {
              result.imageUrl = firstUrl
              result.type = 'image'
            }
          }
        } else if (data.media && Array.isArray(data.media) && data.media.length === 1) {
          const item = data.media[0]
          const url = extractUrl(item)
          const isItemVideo = isDefinitelyVideo || isVideo(item, url)

          if (isItemVideo) {
            result.videoUrl = url
            result.type = 'video'
            result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || item.thumbnail || item.cover || undefined
          } else {
            result.imageUrl = url
            result.type = 'image'
            result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || url
          }
        } else {
          if (isDefinitelyVideo) {
            const videoUrl = extractUrl(data, true) || data.video || data.videoUrl || data.url || data.download || data.downloadUrl
            result.videoUrl = videoUrl
            result.type = 'video'
            result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || data.poster || undefined
          } else {
            let videoUrl = data.video || data.videoUrl
            let imageUrl = data.image || data.imageUrl
            const url = extractUrl(data)
            const isItemVideo = isVideo(data, url) || !!videoUrl

            if (isItemVideo || videoUrl) {
              result.videoUrl = videoUrl || url
              result.type = 'video'
              result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || data.poster || undefined
            } else {
              result.imageUrl = imageUrl || url
              result.type = 'image'
              result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || url
            }
          }
        }

        if (!result.thumbnail) {
          result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || (result.type === 'video' ? undefined : (result.imageUrl || result.videoUrl))
        }
        if (!result.title) {
          result.title = data.title || data.caption || data.description
        }
        if (!result.type) {
          result.type = data.type || (isDefinitelyVideo ? 'video' : (urlContainsReel ? 'video' : (result.videoUrl ? 'video' : 'image')))
        }
      } else if (typeof data === 'string') {
        result.imageUrl = data
        result.videoUrl = data
      }

      if (result.images && Array.isArray(result.images) && result.images.length > 0) {
        result.images = result.images.filter((imgUrl: string) => {
          if (!imgUrl) return false
          const lowerUrl = imgUrl.toLowerCase()
          return !lowerUrl.includes('.mp4') && !lowerUrl.includes('/video/') && !lowerUrl.includes('reel')
        })

        if (result.images.length > 0) {
          result.isMultiple = result.images.length > 1
          if (result.images.length > 1) {
            result.imageUrl = undefined
          } else if (result.images.length === 1) {
            result.imageUrl = result.images[0]
          }
        } else {
          result.images = undefined
        }
      }

      if (result.videos && Array.isArray(result.videos) && result.videos.length > 0) {
        result.videos = result.videos.filter((videoUrl: string) => {
          if (!videoUrl) return false
          const lowerUrl = videoUrl.toLowerCase()
          return lowerUrl.includes('.mp4') || lowerUrl.includes('/video/') || lowerUrl.includes('reel') || lowerUrl.includes('video')
        })

        if (result.videos.length === 0) {
          result.videos = undefined
        }
      }

      if (result.videoUrl || result.type === 'video' || isDefinitelyVideo) {
        result.imageUrl = undefined
        result.type = 'video'
        if (result.images && Array.isArray(result.images)) {
          result.images = undefined
        }
        if (!result.videoUrl && isDefinitelyVideo) {
          const videoUrl = extractUrl(data, true) || data.video || data.videoUrl || data.url || data.download || data.downloadUrl
          if (videoUrl) {
            result.videoUrl = videoUrl
          }
        }
      }

      setResult({
        videoUrl: result.videoUrl,
        imageUrl: result.imageUrl,
        thumbnail: result.thumbnail,
        title: result.title,
        media: result.media,
        videos: result.videos,
        images: result.images,
        isMultiple: result.isMultiple,
        type: result.type,
        downloading: false,
        downloadStarted: false
      })

    } catch (e: any) {
      const errorMessage = e?.message || 'Failed to download Instagram content'

      if (errorMessage.includes('private')) {
        setError('This Instagram post appears to be private or restricted. Please ensure the post is public.')
      } else if (errorMessage.includes('not found') || errorMessage.includes('404')) {
        setError('Instagram post not found. Please check the URL and ensure the post exists and is public.')
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
      || 'instagram_download'

    setError(null)
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
    try {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': '*/*',
            'Referer': 'https://www.instagram.com/'
          }
        })

        if (response.ok) {
          const blob = await response.blob()

          if (blob.size > 0) {
            ; (window as any)[`downloadedBlob_${downloadType}`] = blob
            return
          }
        }
      } catch (directError) {

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

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': '*/*',
            'Referer': 'https://www.instagram.com/'
          }
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

      }

      throw new Error('Download failed')

    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "Download failed. Please try again."
      setError(errorMessage)
      setDownloadingStates(prev => ({ ...prev, [downloadType]: false }))
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {!compact && (
        <GCard className="p-4 sm:p-5 md:p-6 bg-card border border-border shadow-sm">
          <div className="flex gap-2 sm:gap-3">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm font-medium text-foreground">Legal Disclaimer</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Downloading Instagram content may violate copyright laws and Instagram's terms of service. This tool is for
                educational purposes only. Always respect content creators' rights and only download content you have
                permission to use. Use downloaded content responsibly and give proper credit to original creators.
              </p>
            </div>
          </div>
        </GCard>
      )}

      <GCard className={`p-4 sm:p-5 md:p-6 bg-card border-border shadow-sm ${compact ? "" : ""}`}>
        <div className="space-y-3 sm:space-y-4">
          <div>
            <Label htmlFor="post-url" className="text-xs sm:text-sm font-medium text-foreground">
              Instagram Post URL
            </Label>
            <Input
              id="post-url"
              type="text"
              placeholder="https://www.instagram.com/p/... or https://www.instagram.com/reel/..."
              value={postUrl}
              onChange={(e) => setPostUrl(e.target.value)}
              className={`mt-2 ${compact ? "h-10 sm:h-11" : "h-12 sm:h-14"} text-sm sm:text-base border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20`}
            />
          </div>

          <GButton
            onClick={handleFetch}
            disabled={!postUrl || loading}
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
          </GButton>

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
                      <li>Make sure the Instagram post is public and accessible</li>
                      <li>Try refreshing the page and attempting again</li>
                      <li>Check your internet connection</li>
                      <li>Try a different Instagram post URL</li>
                      <li>Disable any ad blockers or browser extensions</li>
                      <li>Some posts may be region-restricted or age-restricted</li>
                      <li>Try copying the URL directly from Instagram app</li>
                    </ul>
                  </div>
                  <GButton
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
                  </GButton>
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-3">
              {result.thumbnail && (
                <div className="flex justify-center">
                  <img
                    src={result.thumbnail}
                    alt={result.title || "Instagram preview"}
                    className={`${compact ? "w-full max-w-xs h-32 object-cover rounded-md border" : "w-full max-w-sm h-40 xs:h-44 sm:h-48 object-cover rounded-md border"}`}
                    onError={(e) => {

                      if (result.type === 'video' || result.videoUrl) {
                        e.currentTarget.style.display = 'none'
                      }
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

                {(result.videoUrl || result.type === 'video') && (
                  <button
                    type="button"
                    onClick={() => {
                      startCountdownAndDownload(result.videoUrl!, (result.title || "instagram-video") + ".mp4", "video")
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

                {result.images && result.images.length > 0 && result.type !== 'video' && !result.videoUrl ? (
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-foreground">Multiple Images ({result.images.length}):</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {result.images.map((imageUrl, index) => (
                        <div key={index} className="space-y-2">
                          <div className="relative group">
                            <img
                              src={imageUrl}
                              alt={`Instagram Image ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-card/0 group-hover:bg-card/20 transition-colors duration-200 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="bg-white/90 text-black px-2 py-1 rounded text-xs font-medium">
                                Image {index + 1}
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => startCountdownAndDownload(imageUrl, (result.title || "instagram-image") + `-${index + 1}.jpg`, `image-${index}`)}
                            disabled={downloadingStates[`image-${index}`] || countdownStates[`image-${index}`] !== undefined}
                            className="w-full inline-flex items-center justify-center h-8 rounded-md border font-medium hover:bg-muted/50 transition-colors text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {countdownStates[`image-${index}`] !== undefined ? (
                              <>
                                <LoadingSpinner className="mr-1 h-3 w-3" />
                                Prep... ({countdownStates[`image-${index}`]}s)
                              </>
                            ) : downloadingStates[`image-${index}`] ? (
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
                ) : result.imageUrl && !result.isMultiple && result.type !== 'video' && !result.videoUrl ? (

                  <div className="space-y-3">
                    <div className="relative group">
                      <img
                        src={result.imageUrl}
                        alt={result.title || "Instagram Image"}
                        className="w-full max-w-sm mx-auto h-48 object-cover rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-card/0 group-hover:bg-card/20 transition-colors duration-200 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 text-black px-3 py-1 rounded text-sm font-medium">
                          Instagram Image
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => startCountdownAndDownload(result.imageUrl!, (result.title || "instagram-image") + ".jpg", "image")}
                      disabled={downloadingStates.image || countdownStates.image !== undefined}
                      className="w-full max-w-sm mx-auto block inline-flex items-center justify-center h-10 rounded-md border font-medium hover:bg-muted/50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {countdownStates.image !== undefined ? (
                        <>
                          <LoadingSpinner className="mr-2 h-4 w-4" />
                          Preparing Download... ({countdownStates.image}s)
                        </>
                      ) : downloadingStates.image ? (
                        <>
                          <LoadingSpinner className="mr-2 h-4 w-4" />
                          Downloading Image...
                        </>
                      ) : (
                        <>
                          <Image className="mr-2 h-4 w-4" />
                          Download Image
                        </>
                      )}
                    </button>
                  </div>
                ) : null}
                {result.videos && result.videos.length > 0 && (
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-foreground">Multiple Videos ({result.videos.length}):</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {result.videos.map((videoUrl, index) => (
                        <div key={index} className="space-y-2">
                          <button
                            type="button"
                            onClick={() => startCountdownAndDownload(videoUrl, (result.title || "instagram-video") + `-${index + 1}.mp4`, `video-${index}`)}
                            disabled={downloadingStates[`video-${index}`] || countdownStates[`video-${index}`] !== undefined}
                            className="w-full inline-flex items-center justify-center h-10 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {countdownStates[`video-${index}`] !== undefined ? (
                              <>
                                <LoadingSpinner className="mr-2 h-4 w-4" />
                                Prep... ({countdownStates[`video-${index}`]}s)
                              </>
                            ) : downloadingStates[`video-${index}`] ? (
                              <>
                                <LoadingSpinner className="mr-2 h-4 w-4" />
                                Downloading...
                              </>
                            ) : (
                              <>
                                <Video className="mr-2 h-4 w-4" />
                                Download Video {index + 1}
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
      </GCard>

      {!compact && (
        <GCard className="p-6 bg-card border border-border shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-3">Important Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <li>• How to use: paste Instagram link → Get Download Links → choose Download Video or Download Image.</li>
            <li>• Works best with public posts; private or restricted content may not load.</li>
            <li>• Use downloads responsibly; you are responsible for permissions and compliance.</li>
            <li>• Only download your own content or content you are authorized to use.</li>
          </ul>
        </GCard>
      )}
    </div>
  )
}

