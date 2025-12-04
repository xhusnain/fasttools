"use client"

import { useState } from "react"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { GAlert, GAlertDescription } from "@/ui/galert"

import { Download, Loader2, AlertCircle, Video } from "lucide-react"
import { API } from "@/services/api/api.service"

export interface XDownloaderProps {
  compact?: boolean
}

export function XDownloader({ compact = false }: XDownloaderProps) {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)

  const validateUrl = (inputUrl: string): boolean => {
    if (!inputUrl.trim()) {
      setError("Please enter an X (Twitter) URL")
      return false
    }

    const twitterPatterns = [
      /^https?:\/\/(www\.)?(twitter|x)\.com\/[\w]+\/status\/\d+/i,
      /^https?:\/\/t\.co\/[\w]+/i,
    ]

    if (!twitterPatterns.some(pattern => pattern.test(inputUrl.trim()))) {
      setError("Please enter a valid X (Twitter) post URL")
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
      const response = await API.Downloader.download('twitter', url.trim()) as any

      if (response.status && (response.url || response.result)) {
        if (response.url && Array.isArray(response.url)) {
          setResult(response)
        } else if (response.result) {
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
      const response = await fetch(fileUrl)
      const blob = await response.blob()

      const blobUrl = URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = blobUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setTimeout(() => URL.revokeObjectURL(blobUrl), 100)
    } catch (error) {
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
            <GLabel htmlFor="x-url" className="text-base font-semibold">
              X (Twitter) URL
            </GLabel>
            <div className="flex gap-2">
              <GInput
                id="x-url"
                type="text"
                placeholder="https://x.com/username/status/..."
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

                {Array.isArray(result.url) && result.url.length > 0 ? (
                  <div className="grid gap-2">
                    {result.url.map((quality: any, index: number) => {
                      const isHD = quality.hd !== undefined
                      const videoUrl = quality.hd || quality.sd
                      const qualityLabel = isHD ? 'HD' : 'SD'

                      return (
                        <GButton
                          key={index}
                          onClick={async () => await downloadFile(videoUrl, `x-${qualityLabel.toLowerCase()}-${Date.now()}.mp4`)}
                          className="w-full"
                          size="lg"
                          variant={isHD ? "default" : "outline"}
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Download {qualityLabel} Quality
                        </GButton>
                      )
                    })}
                  </div>
                ) : (
                  result.url && typeof result.url === 'string' && (
                    <GButton
                      onClick={async () => await downloadFile(result.url, `x-${Date.now()}.mp4`)}
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
            <li>Find the video tweet you want to download</li>
            <li>Click on the share button and copy the link</li>
            <li>Paste it into the input field above</li>
            <li>Click Download to save the video</li>
          </ol>
        </GCard>
      )}
    </div>
  )
}
