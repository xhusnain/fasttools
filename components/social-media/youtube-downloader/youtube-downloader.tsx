"use client"

import { useState } from "react"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { GAlert, GAlertDescription } from "@/ui/galert"

import { Download, Loader2, AlertCircle, Video, Music } from "lucide-react"
import { API } from "@/services/api/api.service"

export interface YoutubeDownloaderProps {
    compact?: boolean
}

export function YoutubeDownloader({ compact = false }: YoutubeDownloaderProps) {
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [result, setResult] = useState<any>(null)

    const validateUrl = (inputUrl: string): boolean => {
        if (!inputUrl.trim()) {
            setError("Please enter a YouTube URL")
            return false
        }

        const youtubePatterns = [
            /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[a-zA-Z0-9_-]+/i,
            /^https?:\/\/(www\.)?youtube\.com\/shorts\/[a-zA-Z0-9_-]+/i,
            /^https?:\/\/youtu\.be\/[a-zA-Z0-9_-]+/i,
            /^https?:\/\/(www\.)?youtube\.com\/embed\/[a-zA-Z0-9_-]+/i,
            /^https?:\/\/(www\.)?youtube\.com\/v\/[a-zA-Z0-9_-]+/i,
        ]

        if (!youtubePatterns.some(pattern => pattern.test(inputUrl.trim()))) {
            setError("Please enter a valid YouTube video URL")
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
            const response = await API.Downloader.download('youtube', url.trim()) as any

            if (response.status && (response.mp4 || response.mp3 || response.video || response.audio || response.result)) {
                // Handle mp4/mp3 response format (YouTube specific)
                if (response.mp4 || response.mp3) {
                    setResult(response)
                }
                // Handle direct response format (video/audio arrays at root level)
                else if (response.video || response.audio) {
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
                        <GLabel htmlFor="youtube-url" className="text-base font-semibold">
                            YouTube URL
                        </GLabel>
                        <div className="flex gap-2">
                            <GInput
                                id="youtube-url"
                                type="text"
                                placeholder="https://www.youtube.com/watch?v=..."
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
                                <div className="relative w-full aspect-video max-w-2xl mx-auto rounded-lg overflow-hidden border">
                                    <img src={result.thumbnail} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                            )}

                            <div className="space-y-2">
                                {result.title && (
                                    <p className="text-sm font-medium line-clamp-2">{result.title}</p>
                                )}

                                <div className="grid gap-2">
                                    {/* Handle mp4 field (YouTube specific) */}
                                    {result.mp4 && (
                                        <GButton
                                            onClick={async () => await downloadFile(result.mp4, `youtube-video-${Date.now()}.mp4`)}
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Download className="mr-2 h-5 w-5" />
                                            Download Video (MP4)
                                        </GButton>
                                    )}

                                    {/* Handle mp3 field (YouTube specific) */}
                                    {result.mp3 && (
                                        <GButton
                                            onClick={async () => await downloadFile(result.mp3, `youtube-audio-${Date.now()}.mp3`)}
                                            variant="outline"
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Music className="mr-2 h-5 w-5" />
                                            Download Audio (MP3)
                                        </GButton>
                                    )}

                                    {/* Handle video array */}
                                    {result.video && Array.isArray(result.video) && result.video.length > 0 && (
                                        <GButton
                                            onClick={async () => await downloadFile(result.video[0], `youtube-video-${Date.now()}.mp4`)}
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Download className="mr-2 h-5 w-5" />
                                            Download Video
                                        </GButton>
                                    )}

                                    {/* Handle legacy format with result.url */}
                                    {result.url && !result.video && !result.mp4 && (
                                        <GButton
                                            onClick={async () => await downloadFile(result.url, `youtube-${Date.now()}.mp4`)}
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Download className="mr-2 h-5 w-5" />
                                            Download Video
                                        </GButton>
                                    )}

                                    {/* Handle audio array */}
                                    {result.audio && Array.isArray(result.audio) && result.audio.length > 0 && (
                                        <GButton
                                            onClick={async () => await downloadFile(result.audio[0], `youtube-audio-${Date.now()}.mp3`)}
                                            variant="outline"
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Music className="mr-2 h-5 w-5" />
                                            Download Audio (MP3)
                                        </GButton>
                                    )}

                                    {/* Handle legacy music field */}
                                    {result.music && !result.audio && !result.mp3 && (
                                        <GButton
                                            onClick={async () => await downloadFile(result.music, `youtube-audio-${Date.now()}.mp3`)}
                                            variant="outline"
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Music className="mr-2 h-5 w-5" />
                                            Download Audio (MP3)
                                        </GButton>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </GCard>

            {!compact && (
                <GCard className="p-6 bg-card border border-border">
                    <h3 className="text-lg font-bold text-foreground mb-4">How to Use</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                        <li>Open YouTube and find the video you want to download</li>
                        <li>Copy the video URL from your browser's address bar</li>
                        <li>Paste it into the input field above</li>
                        <li>Click Download to save the video or audio</li>
                    </ol>
                </GCard>
            )}
        </div>
    )
}
