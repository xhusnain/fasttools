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
        images?: string[]
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

      // Debug logging
      console.log('X Download API Response:', data)

      if (!data.success) {
        throw new Error(data.message || "Failed to fetch download links")
      }

      // Check if we have any media at all (be more lenient)
      const hasVideo = data.videoUrl && (typeof data.videoUrl === 'string' || typeof data.videoUrl === 'object')
      const hasImage = data.imageUrl && (typeof data.imageUrl === 'string' || typeof data.imageUrl === 'object')
      const hasImages = data.images && Array.isArray(data.images) && data.images.length > 0

      if (!hasVideo && !hasImage && !hasImages) {
        console.log('No media found in response:', { videoUrl: data.videoUrl, imageUrl: data.imageUrl, images: data.images })
        throw new Error("No downloadable media found for this URL")
      }

      // Ensure all URLs are strings, not objects
      const ensureString = (value: any): string | undefined => {
        if (!value) return undefined
        if (typeof value === 'string') {
          // Validate it's actually a URL
          if (value.startsWith('http://') || value.startsWith('https://')) {
            return value
          }
          return undefined
        }
        if (typeof value === 'object') {
          // Try common URL properties
          if (value.url && typeof value.url === 'string' && (value.url.startsWith('http://') || value.url.startsWith('https://'))) {
            return value.url
          }
          if (value.media_url && typeof value.media_url === 'string' && (value.media_url.startsWith('http://') || value.media_url.startsWith('https://'))) {
            return value.media_url
          }
          if (value.url_https && typeof value.url_https === 'string' && (value.url_https.startsWith('http://') || value.url_https.startsWith('https://'))) {
            return value.url_https
          }
          // Try to find any string property that looks like a URL
          for (const key in value) {
            if (typeof value[key] === 'string' && (value[key].startsWith('http://') || value[key].startsWith('https://'))) {
              return value[key]
            }
          }
        }
        return undefined
      }

      // Ensure images array contains only strings
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
              // Try common URL properties
              if (img.url && typeof img.url === 'string' && (img.url.startsWith('http://') || img.url.startsWith('https://'))) {
                return img.url
              }
              if (img.media_url && typeof img.media_url === 'string' && (img.media_url.startsWith('http://') || img.media_url.startsWith('https://'))) {
                return img.media_url
              }
              if (img.url_https && typeof img.url_https === 'string' && (img.url_https.startsWith('http://') || img.url_https.startsWith('https://'))) {
                return img.url_https
              }
              // Try to find any string property that looks like a URL
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

      console.log('Setting result data:', resultData)
      setResult(resultData)
      setVideoLoadError(false)

    } catch (e: any) {
      setError(e?.message || "Failed to fetch download links. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const startCountdownAndDownload = async (url: string | any, filename: string, downloadType: string) => {
    // Ensure url is a string
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

    const sanitizedFilename = filename
      .replace(/[^\x00-\x7F]/g, '')
      .replace(/[<>:"/\\|?*]/g, '')
      .replace(/\s+/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '')
      .substring(0, 100)
      || 'x_media'

    setError(null)
    
    // Skip countdown for proxy URLs - they download directly
    if (urlString.includes('dl.snapcdn.app') || urlString.includes('download?token=')) {
      setDownloadingStates(prev => ({ ...prev, [downloadType]: true }))
      performDownload(urlString, sanitizedFilename, downloadType)
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
        
        performDownload(urlString, sanitizedFilename, downloadType)
      }
    }, 1000)

    performBackgroundDownload(urlString, sanitizedFilename, downloadType)
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
          'Referer': 'https://twitter.com/'
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

      // For proxy URLs, use direct download without fetch
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

      // For direct media URLs, try fetch first
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': '*/*',
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

      throw new Error('Download failed. The media URL may be expired or inaccessible.')
      
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
                Downloading X/Twitter content may violate copyright laws and X/Twitter's terms of service. This tool is for
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
            <Label htmlFor="post-url" className="text-xs sm:text-sm font-medium text-foreground">
              X/Twitter Post URL
            </Label>
            <Input
              id="post-url"
              type="text"
              placeholder="https://twitter.com/username/status/... or https://x.com/username/status/..."
              value={postUrl}
              onChange={(e) => setPostUrl(e.target.value)}
              className={`mt-2 ${compact ? "h-10 sm:h-11" : "h-12 sm:h-14"} text-sm sm:text-base border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20`}
            />
          </div>

          <Button
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
              {/* Debug info - remove in production */}
              {process.env.NODE_ENV === 'development' && (
                <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
                  Debug: videoUrl={result.videoUrl ? 'exists' : 'null'}, imageUrl={result.imageUrl ? 'exists' : 'null'}, images={result.images?.length || 0}
                </div>
              )}
              
              {/* Show video preview if we have a video URL */}
              {result.videoUrl && !videoLoadError && (
                <div className="flex justify-center">
                  <div className={`relative ${compact ? "w-full max-w-xs" : "w-full max-w-sm"} rounded-md border overflow-hidden bg-black`}>
                    <video
                      src={result.videoUrl}
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
              
              {/* Show image preview if we have images */}
              {!result.videoUrl && (result.imageUrl || (result.images && result.images.length > 0)) && (
                <div className="flex justify-center">
                  <div className={`${compact ? "w-full max-w-xs" : "w-full max-w-sm"} rounded-md border overflow-hidden`}>
                    {result.images && result.images.length > 1 ? (
                      <div className="grid grid-cols-2 gap-1">
                        {result.images.slice(0, 4).map((img, idx) => {
                          const imgSrc = typeof img === 'string' ? img : (typeof img === 'object' && img.url ? img.url : String(img))
                          if (!imgSrc || !imgSrc.startsWith('http')) return null
                          return (
                            <img
                              key={idx}
                              src={imgSrc}
                              alt={`X post image ${idx + 1}`}
                              className="w-full h-32 object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                          )
                        })}
                      </div>
                    ) : (
                      <img
                        src={result.imageUrl || (result.images && result.images[0] && typeof result.images[0] === 'string' ? result.images[0] : typeof result.images?.[0] === 'object' && result.images[0].url ? result.images[0].url : undefined) || result.thumbnail}
                        alt={result.title || "X post image"}
                        className={`${compact ? "h-32" : "h-40 xs:h-44 sm:h-48"} w-full object-cover`}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
              
              {/* Fallback to thumbnail if available */}
              {(videoLoadError || (!result.videoUrl && !result.imageUrl && (!result.images || result.images.length === 0))) && result.thumbnail && (
                <div className="flex justify-center">
                  <img
                    src={result.thumbnail}
                    alt={result.title || "X post preview"}
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
                
                {/* Video download button */}
                {result.videoUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      startCountdownAndDownload(result.videoUrl!, (result.title || "x-video") + ".mp4", "video")
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
                
                {/* Single image download button */}
                {result.imageUrl && !result.images && (
                  <button
                    type="button"
                    onClick={() => {
                      const ext = result.imageUrl!.includes('.jpg') ? '.jpg' : result.imageUrl!.includes('.png') ? '.png' : '.jpg'
                      startCountdownAndDownload(result.imageUrl!, (result.title || "x-image") + ext, "image")
                    }}
                    disabled={downloadingStates.image || countdownStates.image !== undefined}
                    className="inline-flex items-center justify-center w-full h-10 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
                        <ImageIcon className="mr-2 h-4 w-4" />
                        Download Image
                      </>
                    )}
                  </button>
                )}
                
                {/* Multiple images download buttons */}
                {result.images && result.images.length > 0 && (
                  <div className="space-y-2">
                    {result.images.map((img, idx) => {
                      // Ensure img is a string
                      const imgUrl = typeof img === 'string' ? img : (typeof img === 'object' && img.url ? img.url : String(img))
                      if (!imgUrl || !imgUrl.startsWith('http')) return null
                      
                      return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          const ext = imgUrl.includes('.jpg') ? '.jpg' : imgUrl.includes('.png') ? '.png' : '.jpg'
                          startCountdownAndDownload(imgUrl, (result.title || "x-image") + `-${idx + 1}${ext}`, `image-${idx}`)
                        }}
                        disabled={downloadingStates[`image-${idx}`] || countdownStates[`image-${idx}`] !== undefined}
                        className="inline-flex items-center justify-center w-full h-10 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {countdownStates[`image-${idx}`] !== undefined ? (
                          <>
                            <LoadingSpinner className="mr-2 h-4 w-4" />
                            Preparing Download... ({countdownStates[`image-${idx}`]}s)
                          </>
                        ) : downloadingStates[`image-${idx}`] ? (
                          <>
                            <LoadingSpinner className="mr-2 h-4 w-4" />
                            Downloading Image {idx + 1}...
                          </>
                        ) : (
                          <>
                            <ImageIcon className="mr-2 h-4 w-4" />
                            Download Image {idx + 1}
                          </>
                        )}
                      </button>
                      )
                    })}
                  </div>
                )}
                
                {/* Show message if result exists but no valid media URLs */}
                {!result.videoUrl && !result.imageUrl && (!result.images || result.images.length === 0) && (
                  <div className="text-center p-4 bg-muted/50 border border-border rounded-md">
                    <p className="text-sm text-foreground font-medium mb-2">Media found but unable to extract URLs</p>
                    <p className="text-xs text-muted-foreground">
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
        <Card className="p-6 bg-card border border-border shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-3">Important Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
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

