"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GButton as Button } from "@/components/globalcomponents/gbutton"
import { Download, Loader2, AlertCircle, Video } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
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

    const facebookPatterns = [
      /^https?:\/\/(www\.|web\.|m\.)?facebook\.com\/.*\/videos\//i,
      /^https?:\/\/(www\.|web\.|m\.)?facebook\.com\/watch/i,
      /^https?:\/\/(www\.|web\.|m\.)?facebook\.com\/.*\/posts\//i,
      /^https?:\/\/fb\.watch\//i,
    ]

    if (!facebookPatterns.some(pattern => pattern.test(inputUrl.trim()))) {
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
      const response = await API.Downloader.download('facebook', url.trim())

      if (response.status && response.result) {
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
            <Label htmlFor="facebook-url" className="text-base font-semibold">
              Facebook URL
            </Label>
            <div className="flex gap-2">
              <Input
                id="facebook-url"
                type="text"
                placeholder="https://www.facebook.com/watch?v=..."
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

              {result.thumbnail && (
                <div className="relative w-full aspect-video max-w-md mx-auto rounded-lg overflow-hidden border">
                  <img src={result.thumbnail} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="space-y-2">
                {result.title && (
                  <p className="text-sm font-medium line-clamp-2">{result.title}</p>
                )}

                <Button
                  onClick={() => downloadFile(result.url, `facebook-${Date.now()}.mp4`)}
                  className="w-full"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Video
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      {!compact && (
        <Card className="p-6 bg-card border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">How to Use</h3>
          <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
            <li>Go to Facebook and find the video you want to download</li>
            <li>Click on the video to open it</li>
            <li>Copy the URL from your browser's address bar</li>
            <li>Paste it into the input field above and click Download</li>
          </ol>
        </Card>
      )}
    </div>
  )
}
