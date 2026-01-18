"use client"

import { useState } from "react"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { GAlert, GAlertDescription } from "@/ui/galert"

import { Download, Loader2, AlertCircle, Video, Image as ImageIcon } from "lucide-react"
import { API } from "@/services/api/api.service"
import { downloadBlob } from "@/lib/download-utils"

export interface PinterestDownloaderProps {
    compact?: boolean
}

export function PinterestDownloader({ compact = false }: PinterestDownloaderProps) {
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [result, setResult] = useState<any>(null)

    const validateUrl = (inputUrl: string): boolean => {
        if (!inputUrl.trim()) {
            setError("Please enter a Pinterest URL")
            return false
        }

        const pinterestPatterns = [
            /^https?:\/\/(www\.)?pinterest\.(com|co\.uk|ca|au|de|fr|es|it|jp|kr|br|mx|at|ch|nz|ie|se|no|dk|fi|nl|be|pt|ru|pl|in)\/pin\/[0-9]+/i,
            /^https?:\/\/pin\.it\/[a-zA-Z0-9]+/i,
            /^https?:\/\/(www\.)?pinterest\.[a-z.]+\/[^/]+\/[^/]+/i,
        ]

        if (!pinterestPatterns.some(pattern => pattern.test(inputUrl.trim()))) {
            setError("Please enter a valid Pinterest pin URL")
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
            const response = await API.Downloader.download('pinterest', url.trim()) as any

            if (response.status) {
                // Extract the actual data from nested response
                // Format: { status: true, result: { success: true, result: { image, images, video_url, videos, ... } } }
                let data = response

                // Handle nested result.result structure (Pinterest specific)
                if (response.result?.result) {
                    data = response.result.result
                } else if (response.result) {
                    data = response.result
                }


                // Check for video content - check multiple possible locations
                let videoUrl = data.video_url || data.videoUrl || data.originalVideoUrl || data.mp4

                // Check videos array/object
                if (!videoUrl && data.videos) {
                    if (Array.isArray(data.videos) && data.videos.length > 0) {
                        videoUrl = data.videos[0]?.url || data.videos[0]
                    } else if (typeof data.videos === 'object') {
                        videoUrl = data.videos.video_list?.[0]?.url || data.videos.url
                    }
                }

                // Check video array
                if (!videoUrl && data.video) {
                    videoUrl = Array.isArray(data.video) ? data.video[0] : data.video
                }

                // Check images object for video (sometimes stored there)
                if (!videoUrl && data.images && typeof data.images === 'object') {
                    if (data.images.video) {
                        videoUrl = data.images.video
                    }
                }

                // Check for image content
                let imageUrl = data.image || data.imageUrl

                // Check images object for highest quality image
                if (!imageUrl && data.images) {
                    if (typeof data.images === 'object' && !Array.isArray(data.images)) {
                        imageUrl = data.images.orig?.url || data.images.orig ||
                            data.images['736x']?.url || data.images['736x'] ||
                            data.images['564x']?.url || data.images['564x'] ||
                            data.images['474x']?.url || data.images['474x']
                    } else if (Array.isArray(data.images) && data.images.length > 0) {
                        imageUrl = data.images[0]?.url || data.images[0]
                    }
                }

                // Extract user info
                let userInfo = null
                if (data.user) {
                    userInfo = {
                        username: data.user.username || data.user.name,
                        fullName: data.user.full_name || data.user.fullName || data.user.display_name,
                        profileImage: data.user.avatar_url || data.user.profile_image || data.user.image_medium_url || data.user.avatar || data.user.image,
                        profileUrl: data.user.profile_url || data.user.profileUrl,
                        followerCount: data.user.follower_count || data.user.followers,
                    }
                }

                if (videoUrl) {
                    setResult({
                        type: 'video',
                        videoUrl: videoUrl,
                        thumbnail: data.image || data.thumbnail || imageUrl,
                        title: data.title,
                        description: data.description,
                        user: userInfo,
                    })
                } else if (imageUrl) {
                    setResult({
                        type: 'image',
                        imageUrl: imageUrl,
                        thumbnail: imageUrl,
                        title: data.title,
                        description: data.description,
                        user: userInfo,
                    })
                } else {
                    setError("Could not extract media from this pin. Please try another URL.")
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
                        <GLabel htmlFor="pinterest-url" className="text-base font-semibold">
                            Pinterest URL
                        </GLabel>
                        <div className="flex gap-2">
                            <GInput
                                id="pinterest-url"
                                type="text"
                                placeholder="https://www.pinterest.com/pin/..."
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
                                {result.type === 'video' ? (
                                    <Video className="h-4 w-4" />
                                ) : (
                                    <ImageIcon className="h-4 w-4" />
                                )}
                                <span>{result.type === 'video' ? 'Video' : 'Image'} ready for download!</span>
                            </div>

                            {result.thumbnail && (
                                <div className="relative w-full aspect-video max-w-2xl mx-auto rounded-lg overflow-hidden border">
                                    <img src={result.thumbnail} alt="Preview" className="w-full h-full object-contain bg-muted" />
                                </div>
                            )}

                            <div className="space-y-2">
                                {result.title && (
                                    <p className="text-sm font-medium line-clamp-2">{result.title}</p>
                                )}

                                {result.description && result.description.trim() && (
                                    <p className="text-xs text-muted-foreground line-clamp-2">{result.description}</p>
                                )}

                                {/* User Info */}
                                {result.user && (result.user.username || result.user.fullName) && (
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border">
                                        {result.user.profileImage && (
                                            <img
                                                src={result.user.profileImage}
                                                alt={result.user.username || 'Creator'}
                                                className="w-12 h-12 rounded-full object-cover border-2 border-border"
                                            />
                                        )}
                                        <div className="flex-1 min-w-0">
                                            {result.user.fullName && (
                                                <p className="text-sm font-semibold truncate">{result.user.fullName}</p>
                                            )}
                                            {result.user.username && (
                                                <p className="text-xs text-muted-foreground truncate">@{result.user.username}</p>
                                            )}
                                            {result.user.followerCount && (
                                                <p className="text-xs text-muted-foreground">{result.user.followerCount.toLocaleString()} followers</p>
                                            )}
                                        </div>
                                        {result.user.profileUrl && (
                                            <a
                                                href={result.user.profileUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-primary hover:underline flex items-center gap-1"
                                            >
                                                View Profile
                                            </a>
                                        )}
                                    </div>
                                )}

                                <div className="grid gap-2">
                                    {result.type === 'video' && result.videoUrl && (
                                        <GButton
                                            onClick={async () => await downloadBlob(result.videoUrl, `pinterest-video-${Date.now()}.mp4`)}
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Download className="mr-2 h-5 w-5" />
                                            Download Video (MP4)
                                        </GButton>
                                    )}

                                    {result.type === 'image' && result.imageUrl && (
                                        <GButton
                                            onClick={async () => await downloadBlob(result.imageUrl, `pinterest-image-${Date.now()}.jpg`)}
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Download className="mr-2 h-5 w-5" />
                                            Download Image (HD)
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
                        <li>Open Pinterest and find the pin (image or video) you want to download</li>
                        <li>Copy the pin URL from your browser's address bar or tap Share → Copy Link</li>
                        <li>Paste it into the input field above</li>
                        <li>Click Download to save the image or video to your device</li>
                    </ol>
                </GCard>
            )}
        </div>
    )
}
