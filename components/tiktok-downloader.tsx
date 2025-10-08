"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Download, AlertTriangle } from "lucide-react"
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
      // TikWM public endpoint. Returns JSON with urls and metadata.
      // Docs (community-known): GET https://www.tikwm.com/api/?url=<tiktok_url>
      const endpoint = `https://www.tikwm.com/api/?url=${encodeURIComponent(videoUrl.trim())}`
      const res = await fetch(endpoint, {
        method: "GET",
        mode: "cors",
        headers: {
          "Accept": "application/json",
        },
      })

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`)
      }

      const json = await res.json()
      // Expected shape: { code: 0, data: { play, wmplay, music, cover, title } }
      if (!json || json.code !== 0 || !json.data) {
        throw new Error("Unexpected response from upstream API.")
      }

      const data = json.data as {
        play?: string
        wmplay?: string
        music?: string
        cover?: string
        title?: string
      }

      if (!data.play && !data.wmplay) {
        throw new Error("No downloadable video found for this URL.")
      }

      let coverUrl = data.cover

      // Fallback: Try TikTok oEmbed for thumbnail if cover missing
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
        noWatermarkUrl: data.play || "",
        watermarkUrl: data.wmplay,
        musicUrl: data.music,
        coverUrl,
        title: data.title,
      })
    } catch (e: any) {
      setError(e?.message || "Failed to fetch download links. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const triggerDownload = async (url: string, filename: string) => {
    try {
      // Prefer blob downloads to avoid opening new tabs and to honor the filename
      const response = await fetch(url, { mode: "cors" })
      if (!response.ok) throw new Error("download fetch failed")
      const blob = await response.blob()
      const objectUrl = URL.createObjectURL(blob)
      const anchor = document.createElement("a")
      anchor.href = objectUrl
      anchor.download = filename
      document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
      URL.revokeObjectURL(objectUrl)
    } catch (e) {
      // Fallback: attempt same‑tab navigation with download attribute
      const fallback = document.createElement("a")
      fallback.href = url
      fallback.download = filename
      fallback.target = "_self"
      document.body.appendChild(fallback)
      fallback.click()
      fallback.remove()
    }
  }

  return (
    <div className="space-y-6">
      {!compact && (
        <Card className="p-6 bg-red-50 border-red-200">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-sm font-medium text-red-900">Legal Disclaimer</p>
              <p className="text-sm text-red-800 leading-relaxed">
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
              TikTok Video URL
            </Label>
            <Input
              id="video-url"
              type="text"
              placeholder="https://www.tiktok.com/@username/video/..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className={`mt-2 ${compact ? "h-11" : "h-14"} text-base`}
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
                Fetching links...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Get Download Links
              </>
            )}
          </Button>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
              {error}
            </div>
          )}

          {result && (
            <div className="space-y-4">
              {result.coverUrl && (
                <img
                  src={result.coverUrl}
                  alt={result.title || "TikTok cover"}
                  className={`${compact ? "w-full h-40 object-cover rounded-md border" : "w-full rounded-md border"}`}
                />
              )}
              <div className="space-y-2">
                {result.noWatermarkUrl && (
                  <button
                    type="button"
                    onClick={() => triggerDownload(result.noWatermarkUrl!, (result.title || "tiktok-video") + "-nowm.mp4")}
                    className="inline-flex items-center justify-center w-full h-11 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                  >
                    Download Video (No Watermark)
                  </button>
                )}
                {result.watermarkUrl && (
                  <button
                    type="button"
                    onClick={() => triggerDownload(result.watermarkUrl!, (result.title || "tiktok-video") + "-wm.mp4")}
                    className="inline-flex items-center justify-center w-full h-11 rounded-md border font-medium hover:bg-muted/50 transition-colors"
                  >
                    Download Video (Watermark)
                  </button>
                )}
                {result.musicUrl && (
                  <button
                    type="button"
                    onClick={() => triggerDownload(result.musicUrl!, (result.title || "tiktok-audio") + ".mp3")}
                    className="inline-flex items-center justify-center w-full h-11 rounded-md border font-medium hover:bg-muted/50 transition-colors"
                  >
                    Download Audio (MP3)
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>

      {!compact && (
        <Card className="p-6 bg-muted/30 border-border">
          <h3 className="text-base font-semibold text-foreground mb-3">Important Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <li>• How to use: paste TikTok link → Get Download Links → choose option.</li>
            <li>• Works best with public videos; private or age-restricted content may not load.</li>
            <li>• Use downloads responsibly; you are responsible for permissions and compliance.</li>
            <li>• Only download your own content or content you are authorized to use.</li>
          </ul>
        </Card>
      )}
    </div>
  )
}
