"use client"

import { useState } from "react"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { GAlert, GAlertDescription } from "@/ui/galert"

import { Download, Loader2, AlertCircle, Video, Music } from "lucide-react"
import { API } from "@/services/api/api.service"
import { downloadBlob } from "@/lib/download-utils"

export interface CapcutDownloaderProps {
    compact?: boolean
}

export function CapcutDownloader({ compact = false }: CapcutDownloaderProps) {
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [result, setResult] = useState<any>(null)

    const validateUrl = (inputUrl: string): boolean => {
        if (!inputUrl.trim()) {
            setError("Please enter a CapCut URL")
            return false
        }

        const capcutPatterns = [
            /^https?:\/\/(www\.)?capcut\.com\/t\/[a-zA-Z0-9]+/i,
            /^https?:\/\/(www\.)?capcut\.com\/template-detail\/[a-zA-Z0-9]+/i,
            /^https?:\/\/(www\.)?capcut\.com\/share\/[a-zA-Z0-9]+/i,
            /^https?:\/\/(www\.)?capcut\.net\/[a-zA-Z0-9]+/i,
        ]

        if (!capcutPatterns.some(pattern => pattern.test(inputUrl.trim()))) {
            setError("Please enter a valid CapCut video or template URL")
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
            const response = await API.Downloader.download('capcut', url.trim()) as any

            if (response.status && (response.originalVideoUrl || response.mp4 || response.mp3 || response.video || response.audio || response.result)) {
                // Handle originalVideoUrl response format (CapCut specific)
                if (response.originalVideoUrl) {
                    setResult({
                        videoUrl: response.originalVideoUrl,
                        thumbnail: response.coverUrl,
                        title: response.title,
                        authorName: response.authorName
                    })
                }
                // Handle mp4/mp3 response format
                else if (response.mp4 || response.mp3) {
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



    return (
        <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <GCard className="p-6 sm:p-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <GLabel htmlFor="capcut-url" className="text-base font-semibold">
                            CapCut URL
                        </GLabel>
                        <div className="flex gap-2">
                            <GInput
                                id="capcut-url"
                                type="text"
                                placeholder="https://www.capcut.com/t/..."
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

                            {(result.thumbnail || result.coverUrl) && (
                                <div className="relative w-full aspect-video max-w-2xl mx-auto rounded-lg overflow-hidden border">
                                    <img src={result.thumbnail || result.coverUrl} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                            )}

                            <div className="space-y-2">
                                {result.title && (
                                    <p className="text-sm font-medium line-clamp-2">{result.title}</p>
                                )}
                                {result.authorName && (
                                    <p className="text-xs text-muted-foreground">By: {result.authorName}</p>
                                )}

                                <div className="grid gap-2">
                                    {/* Handle originalVideoUrl/videoUrl field (CapCut specific) */}
                                    {(result.videoUrl || result.originalVideoUrl) && (
                                        <GButton
                                            onClick={async () => await downloadBlob(result.videoUrl || result.originalVideoUrl, `capcut-video-${Date.now()}.mp4`)}
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Download className="mr-2 h-5 w-5" />
                                            Download Video (MP4)
                                        </GButton>
                                    )}
                                    {/* Handle mp4 field */}
                                    {result.mp4 && (
                                        <GButton
                                            onClick={async () => await downloadBlob(result.mp4, `capcut-video-${Date.now()}.mp4`)}
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Download className="mr-2 h-5 w-5" />
                                            Download Video (MP4)
                                        </GButton>
                                    )}

                                    {/* Handle mp3 field */}
                                    {result.mp3 && (
                                        <GButton
                                            onClick={async () => await downloadBlob(result.mp3, `capcut-audio-${Date.now()}.mp3`)}
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
                                            onClick={async () => await downloadBlob(result.video[0], `capcut-video-${Date.now()}.mp4`)}
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
                                            onClick={async () => await downloadBlob(result.url, `capcut-${Date.now()}.mp4`)}
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
                                            onClick={async () => await downloadBlob(result.audio[0], `capcut-audio-${Date.now()}.mp3`)}
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
                                            onClick={async () => await downloadBlob(result.music, `capcut-audio-${Date.now()}.mp3`)}
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
                        <li>Open CapCut and find the video or template you want to download</li>
                        <li>Copy the video URL from the share button or browser address bar</li>
                        <li>Paste it into the input field above</li>
                        <li>Click Download to save the video or audio</li>
                    </ol>
                </GCard>
            )}
        </div>
    )
}
