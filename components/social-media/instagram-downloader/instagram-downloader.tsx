"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GButton as Button } from "@/components/globalcomponents/gbutton"
import { Download, Loader2, AlertCircle, Video } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { API } from "@/services/api/api.service"

export interface InstagramDownloaderProps {
  compact?: boolean
}

export function InstagramDownloader({ compact = false }: InstagramDownloaderProps) {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)

  const validateUrl = (inputUrl: string): boolean => {
    if (!inputUrl.trim()) {
      setError("Please enter an Instagram URL")
      return false
    }

    const instagramPatterns = [
      /^https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)\/[a-zA-Z0-9_-]+/i,
      /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._]+\/[a-zA-Z0-9_-]+/i,
    ]

    if (!instagramPatterns.some(pattern => pattern.test(inputUrl.trim()))) {
      setError("Please enter a valid Instagram post, reel, or video URL")
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
      const response = await API.Downloader.download('instagram', url.trim()) as any

      if (response.status && response.result) {
        // Handle both array and object results
        setResult(response.result)
      } else {
        setError("Failed to fetch download links. Please try again.")
      }
    } catch (err: any) {
      setError(err.message || "Failed to download. Please check the URL and try again.")
    } finally {
      setLoading(false)
    }
  }

  const downloadFile = (fileUrl: string, filename: string) => {
    const link = document.createElement("a")
    link.href = fileUrl
    link.download = filename
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      <Card className="p-6 sm:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="instagram-url" className="text-base font-semibold">
              Instagram URL
            </Label>
            <div className="flex gap-2">
              <Input
                id="instagram-url"
                type="text"
                placeholder="https://www.instagram.com/p/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleDownload()}
                className="flex-1"
                disabled={loading}
              />
              <Button
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
              </Button>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Video className="h-4 w-4" />
                <span>Download ready!</span>
              </div>

              {/* Handle array results (multiple media items) */}
              {Array.isArray(result) ? (
                <div className="space-y-4">
                  {result.length === 1 ? (
                    // Single media item
                    <div className="space-y-4">
                      {result[0].thumbnail && (
                        <div className="relative w-full aspect-video max-w-2xl mx-auto rounded-lg overflow-hidden border bg-black">
                          <video
                            src={result[0].url}
                            poster={result[0].thumbnail}
                            controls
                            className="w-full h-full"
                            preload="metadata"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}
                      <Button
                        onClick={() => downloadFile(result[0].url, `instagram-${Date.now()}.mp4`)}
                        className="w-full"
                        size="lg"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Video
                      </Button>
                    </div>
                  ) : (
                    // Multiple media items (carousel)
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Carousel Post ({result.length} items)</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                        {result.map((item: any, index: number) => (
                          <div key={index} className="space-y-2">
                            {item.thumbnail && (
                              <div className="relative w-full aspect-video rounded-lg overflow-hidden border bg-black">
                                <video
                                  src={item.url}
                                  poster={item.thumbnail}
                                  controls
                                  className="w-full h-full"
                                  preload="metadata"
                                >
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            )}
                            <Button
                              onClick={() => downloadFile(item.url, `instagram-${index + 1}-${Date.now()}.mp4`)}
                              className="w-full"
                              size="sm"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download Item {index + 1}
                            </Button>
                          </div>
                        ))}
                      </div>
                      <Button
                        onClick={() => {
                          result.forEach((item: any, index: number) => {
                            setTimeout(() => downloadFile(item.url, `instagram-${index + 1}-${Date.now()}.mp4`), index * 500)
                          })
                        }}
                        className="w-full"
                        variant="outline"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download All Items
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                // Handle single object result (legacy format)
                <div className="space-y-4">
                  {result.thumbnail && (
                    <div className="relative w-full aspect-video max-w-2xl mx-auto rounded-lg overflow-hidden border bg-black">
                      {result.url ? (
                        <video
                          src={result.url}
                          poster={result.thumbnail}
                          controls
                          className="w-full h-full"
                          preload="metadata"
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img src={result.thumbnail} alt="Preview" className="w-full h-full object-cover" />
                      )}
                    </div>
                  )}

                  <div className="space-y-2">
                    {result.title && (
                      <p className="text-sm font-medium">{result.title}</p>
                    )}

                    {result.url && (
                      <Button
                        onClick={() => downloadFile(result.url, `instagram-${Date.now()}.mp4`)}
                        className="w-full"
                        size="lg"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Video
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Card>

      {!compact && (
        <Card className="p-6 bg-card border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">How to Use</h3>
          <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
            <li>Copy the Instagram post, reel, or video URL</li>
            <li>Paste it into the input field above</li>
            <li>Click the Download button</li>
            <li>Save the video to your device</li>
          </ol>
        </Card>
      )}
    </div>
  )
}
