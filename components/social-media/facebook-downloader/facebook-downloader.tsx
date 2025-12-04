"use client"

import { useState } from "react"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { GAlert, GAlertDescription } from "@/ui/galert"

import { Download, Loader2, AlertCircle, Video } from "lucide-react"
import { API } from "@/services/api/api.service"

export interface FacebookDownloaderProps {
  compact?: boolean
}

export function FacebookDownloader({ compact = false }: FacebookDownloaderProps) {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)

  const validateUrl = (inputUrl: string): boolean => {
    if (!inputUrl.trim()) {
      setError("Please enter a Facebook URL")
      return false
    }

    const trimmedUrl = inputUrl.trim().toLowerCase()

    // Check if URL contains facebook.com or fb.watch
    if (!trimmedUrl.includes('facebook.com') && !trimmedUrl.includes('fb.watch')) {
      setError("Please enter a valid Facebook video URL")
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
      const response = await API.Downloader.download('facebook', url.trim()) as any

      if (response.status && (response.Normal_video || response.HD || response.result)) {
        // Handle direct response format (Normal_video/HD at root level)
        if (response.Normal_video || response.HD) {
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
            <GLabel htmlFor="facebook-url" className="text-base font-semibold">
              Facebook URL
            </GLabel>
            <div className="flex gap-2">
              <GInput
                id="facebook-url"
                type="text"
                placeholder="https://www.facebook.com/watch?v=..."
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
                <div className="relative w-full aspect-video max-w-md mx-auto rounded-lg overflow-hidden border">
                  <img src={result.thumbnail} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="space-y-2">
                {result.title && (
                  <p className="text-sm font-medium line-clamp-2">{result.title}</p>
                )}

                {/* Handle new format with Normal_video and HD */}
                {(result.Normal_video || result.HD) ? (
                  <div className="grid gap-2">
                    {result.HD && (
                      <GButton
                        onClick={async () => await downloadFile(result.HD, `facebook-hd-${Date.now()}.mp4`)}
                        className="w-full"
                        size="lg"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download HD Quality
                      </GButton>
                    )}
                    {result.Normal_video && (
                      <GButton
                        onClick={async () => await downloadFile(result.Normal_video, `facebook-sd-${Date.now()}.mp4`)}
                        variant="outline"
                        className="w-full"
                        size="lg"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download SD Quality
                      </GButton>
                    )}
                  </div>
                ) : (
                  /* Handle legacy format with result.url */
                  result.url && (
                    <GButton
                      onClick={async () => await downloadFile(result.url, `facebook-${Date.now()}.mp4`)}
                      className="w-full"
                      size="lg"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Video
                    </GButton>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </GCard>

      {!compact && (
        <GCard className="p-6 bg-card border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">How to Use</h3>
          <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
            <li>Go to Facebook and find the video you want to download</li>
            <li>Click on the video to open it</li>
            <li>Copy the URL from your browser's address bar</li>
            <li>Paste it into the input field above and click Download</li>
          </ol>
        </GCard>
      )}
    </div>
  )
}
