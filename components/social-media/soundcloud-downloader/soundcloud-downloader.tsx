"use client"

import { useState } from "react"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { GAlert, GAlertDescription } from "@/ui/galert"

import { Download, Loader2, AlertCircle, Music, Image as ImageIcon } from "lucide-react"
import { API } from "@/services/api/api.service"

export interface SoundcloudDownloaderProps {
  compact?: boolean
}

export function SoundcloudDownloader({ compact = false }: SoundcloudDownloaderProps) {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)

  const validateUrl = (inputUrl: string): boolean => {
    if (!inputUrl.trim()) {
      setError("Please enter a Soundcloud URL")
      return false
    }

    const soundcloudPattern = /^https?:\/\/(www\.|m\.)?soundcloud\.com\/[\w-]+\/[\w-]+/i

    if (!soundcloudPattern.test(inputUrl.trim())) {
      setError("Please enter a valid Soundcloud track URL")
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
      const response = await API.Downloader.download('soundcloud', url.trim()) as any

      if (response.status && response.result) {
        setResult(response.result)
      } else if (response.status && (response.audio || response.downloadMp3)) {
        // Handle flat response if it ever comes that way
        setResult(response)
      } else {
        setError("Failed to fetch download links. Please check the URL or try again later.")
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

  // extract author from URL helper
  const getAuthorFromUrl = (url: string) => {
    try {
      const parts = url.split('soundcloud.com/')
      if (parts.length > 1) {
        const path = parts[1]
        const artist = path.split('/')[0]
        return artist.replace(/-/g, ' ')
      }
    } catch (e) {
      return 'Artist'
    }
    return 'Artist'
  }


  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      <GCard className="p-6 sm:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <GLabel htmlFor="soundcloud-url" className="text-base font-semibold">
              Soundcloud Track URL
            </GLabel>
            <div className="flex gap-2">
              <GInput
                id="soundcloud-url"
                type="text"
                placeholder="https://soundcloud.com/artist/track"
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
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Music className="h-4 w-4" />
                <span>Track ready for download!</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 p-4 rounded-lg border bg-card/50">
                {result.thumbnail && (
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                    <img src={result.thumbnail} alt={result.title || "Track art"} className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="flex-1 space-y-3">
                  <div className="space-y-1">
                    {result.title && (
                      <h3 className="font-semibold text-lg line-clamp-2">{result.title}</h3>
                    )}
                    <p className="text-sm text-muted-foreground capitalize">
                      By {result.author || getAuthorFromUrl(url)}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {/* Handle 'downloadMp3' or 'audio' string format */}
                    {(result.downloadMp3 || result.audio) && (
                      <GButton
                        onClick={() => downloadFile(result.downloadMp3 || result.audio, `${result.title || 'soundcloud-track'}.mp3`)}
                        className="w-full sm:w-auto"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download MP3
                      </GButton>
                    )}

                    {/* Handle 'downloadArtwork' */}
                    {result.downloadArtwork && (
                      <GButton
                        onClick={() => downloadFile(result.downloadArtwork, `${result.title || 'soundcloud-art'}.jpg`)}
                        className="w-full sm:w-auto"
                        variant="outline"
                      >
                        <ImageIcon className="mr-2 h-4 w-4" />
                        Download Cover Art
                      </GButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </GCard>

      {!compact && (
        <GCard className="p-6 bg-card border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">How to Download from Soundcloud</h3>
          <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
            <li>Go to Soundcloud and find the track you want to save</li>
            <li>Copy the track's URL from the address bar or share button (e.g., https://soundcloud.com/artist/song)</li>
            <li>Paste the link into the box above</li>
            <li>Click "Download" to save the MP3 file to your device</li>
          </ol>
        </GCard>
      )}
    </div>
  )
}
