"use client"

import { useState } from "react"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { GAlert, GAlertDescription } from "@/ui/galert"

import { Download, Loader2, AlertCircle, Video, Music } from "lucide-react"
import { API } from "@/services/api/api.service"

export interface DouyinDownloaderProps {
    compact?: boolean
}

export function DouyinDownloader({ compact = false }: DouyinDownloaderProps) {
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [result, setResult] = useState<any>(null)

    const validateUrl = (inputUrl: string): boolean => {
        if (!inputUrl.trim()) {
            setError("Please enter a Douyin URL")
            return false
        }

        const douyinPatterns = [
            /^https?:\/\/(www\.)?douyin\.com\/video\/\d+/i,
            /^https?:\/\/(v\.)?douyin\.com\/[a-zA-Z0-9]+\/?/i,
            /^https?:\/\/(www\.)?iesdouyin\.com\/share\/video\/\d+/i,
        ]

        if (!douyinPatterns.some(pattern => pattern.test(inputUrl.trim()))) {
            setError("Please enter a valid Douyin video URL")
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
            const response = await API.Downloader.download('douyin', url.trim()) as any

            if (response.status) {
                // Helper to decode HTML entities
                const cleanUrl = (url: any) => {
                    if (!url || typeof url !== 'string') return ""
                    return url.replace(/&amp;/g, "&")
                }

                const getQualityLabel = (quality: string, index: number, url: string) => {
                    if (url && url.includes('.mp3')) return "Audio (MP3)"
                    if (index === 0) return "HD Video (No Watermark)"
                    if (index === 1) return "SD Video (No Watermark)"
                    return quality || `Option ${index + 1}`
                }

                // Handle nested structure from user report: { result: { data: { ... } } }
                if (response.result?.data) {
                    const data = response.result.data

                    let videoData: any[] = [];
                    if (Array.isArray(data.links) && data.links.length > 0) {
                        console.log('Douyin Links:', data.links)
                        // Check if the first item is an object (Quality options) or string (Images)
                        if (typeof data.links[0] === 'object' && data.links[0] !== null) {
                            videoData = data.links.map((link: any, index: number) => ({
                                ...link,
                                label: getQualityLabel(link.quality, index, link.url),
                                url: cleanUrl(link.url)
                            }));
                        } else {
                            // It's strings (Images)
                            videoData = data.links.map(cleanUrl);
                        }
                    }

                    // Try multiple fields for thumbnail (Strictly static covers)
                    const thumbnail = cleanUrl(data.origin_cover) || cleanUrl(data.thumbnail) || cleanUrl(data.cover);

                    setResult({
                        title: data.title,
                        thumbnail: thumbnail,
                        video: videoData,
                        ...data
                    })
                    return
                }

                // Handle direct response format (video/audio arrays at root level)
                if (response.video || response.audio) {
                    setResult(response)
                } else if (response.result) {
                    // Handle nested result format
                    setResult(response.result)
                } else {
                    setError("Failed to fetch download links. Please try again.")
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
                        <GLabel htmlFor="douyin-url" className="text-base font-semibold">
                            Douyin URL
                        </GLabel>
                        <div className="flex gap-2">
                            <GInput
                                id="douyin-url"
                                type="text"
                                placeholder="https://v.douyin.com/..."
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
                        <div className="space-y-4 pt-4 border-t border-border">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                <Video className="h-4 w-4" />
                                <span>Download ready!</span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                {/* Left Column: Thumbnail */}
                                <div>
                                    {result.thumbnail ? (
                                        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border shadow-sm">
                                            <img
                                                src={result.thumbnail}
                                                alt="Video Preview"
                                                className="w-full h-full object-cover"
                                                referrerPolicy="no-referrer"
                                                onError={(e) => {
                                                    // Fallback if image fails to load
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border">
                                            <span className="text-muted-foreground text-sm">No Preview Available</span>
                                        </div>
                                    )}
                                </div>

                                {/* Right Column: Details & Buttons */}
                                <div className="space-y-6">
                                    {result.title && (
                                        <div className="space-y-2">
                                            <h3 className="font-semibold text-lg leading-tight">{result.title}</h3>
                                        </div>
                                    )}

                                    <div className="space-y-3">
                                        {/* Handle video array (can be single video or multiple images) */}
                                        {result.video && Array.isArray(result.video) && result.video.length > 0 && (
                                            <>
                                                {/* Check if video array contains objects (Quality options) or strings (Images) */}
                                                {typeof result.video[0] === 'object' ? (
                                                    <div className="grid gap-3">
                                                        {result.video.map((video: any, index: number) => (
                                                            <GButton
                                                                key={index}
                                                                onClick={async () => await downloadFile(video.url, `douyin-video-${index + 1}-${Date.now()}.mp4`)}
                                                                className="w-full h-12 text-base justify-between"
                                                                size="lg"
                                                                variant={index === 0 ? "default" : "secondary"}
                                                            >
                                                                <span className="flex items-center">
                                                                    {video.label?.includes('Audio') ? <Music className="mr-2 h-5 w-5" /> : <Download className="mr-2 h-5 w-5" />}
                                                                    {video.label || video.quality || `Quality ${index + 1}`}
                                                                </span>
                                                                {(index === 0 || video.label?.includes('HD')) ? <span className="bg-primary-foreground/20 text-xs px-2 py-0.5 rounded">HD</span> : null}
                                                            </GButton>
                                                        ))}
                                                    </div>
                                                ) : result.video.length === 1 ? (
                                                    // Single video (legacy string format)
                                                    <GButton
                                                        onClick={async () => await downloadFile(result.video[0], `douyin-video-${Date.now()}.mp4`)}
                                                        className="w-full h-12"
                                                        size="lg"
                                                    >
                                                        <Download className="mr-2 h-5 w-5" />
                                                        Download Video
                                                    </GButton>
                                                ) : (
                                                    // Multiple images (photo carousel)
                                                    <div className="space-y-4">
                                                        <div className="flex items-center justify-between">
                                                            <p className="font-medium text-foreground">Photo Carousel</p>
                                                            <span className="text-sm text-muted-foreground">{result.video.length} images</span>
                                                        </div>
                                                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-60 overflow-y-auto p-1">
                                                            {result.video.map((imageUrl: string, index: number) => (
                                                                <div key={index} className="relative group aspect-square rounded overflow-hidden border cursor-pointer hover:ring-2 ring-primary transition-all" onClick={() => window.open(imageUrl, '_blank')}>
                                                                    <img
                                                                        src={imageUrl}
                                                                        alt={`Image ${index + 1}`}
                                                                        className="w-full h-full object-cover"
                                                                        referrerPolicy="no-referrer"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <GButton
                                                            onClick={async () => {
                                                                for (let index = 0; index < result.video.length; index++) {
                                                                    await downloadFile(result.video[index], `douyin-image-${index + 1}-${Date.now()}.jpg`)
                                                                    if (index < result.video.length - 1) {
                                                                        await new Promise(resolve => setTimeout(resolve, 500))
                                                                    }
                                                                }
                                                            }}
                                                            className="w-full h-12"
                                                        >
                                                            <Download className="mr-2 h-5 w-5" />
                                                            Download All Images
                                                        </GButton>
                                                    </div>
                                                )}
                                            </>
                                        )}

                                        {/* Handle legacy format with result.url */}
                                        {result.url && !result.video && (
                                            <GButton
                                                onClick={async () => await downloadFile(result.url, `douyin-${Date.now()}.mp4`)}
                                                className="w-full h-12"
                                                size="lg"
                                            >
                                                <Download className="mr-2 h-5 w-5" />
                                                Download Video
                                            </GButton>
                                        )}

                                        {/* Handle audio array or legacy music field */}
                                        {((result.audio && Array.isArray(result.audio) && result.audio.length > 0) || result.music) && (
                                            <GButton
                                                onClick={async () => {
                                                    const audioUrl = result.audio && result.audio.length > 0 ? result.audio[0] : result.music
                                                    await downloadFile(audioUrl, `douyin-audio-${Date.now()}.mp3`)
                                                }}
                                                variant="outline"
                                                className="w-full h-12"
                                                size="lg"
                                            >
                                                <Music className="mr-2 h-5 w-5" />
                                                Download Audio
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
                    <h3 className="text-lg font-bold text-foreground mb-4">How to Use</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                        <li>Open Douyin and find the video you want to download</li>
                        <li>Tap the Share button and copy the link</li>
                        <li>Paste it into the input field above</li>
                        <li>Click Download to save the video</li>
                    </ol>
                </GCard>
            )}
        </div>
    )
}
