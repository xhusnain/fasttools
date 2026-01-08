"use client"

import { useState } from "react"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { GAlert, GAlertDescription } from "@/ui/galert"
import { Download, Loader2, AlertCircle, Video, Music, List, FileVideo } from "lucide-react"
import { API } from "@/services/api/api.service"
import { env } from "@/config/env"

export interface YoutubeDownloaderProps {
    compact?: boolean
}

interface VideoFormat {
    format_id: string
    format_note?: string
    ext: string
    filesize?: number
    filesize_approx?: number
    width?: number
    height?: number
    vcodec?: string
    acodec?: string
    url: string
}

interface VideoInfo {
    id: string
    title: string
    thumbnail: string
    formats: VideoFormat[]
    duration?: number
    description?: string
    view_count?: number
    uploader?: string
}

interface PlaylistInfo {
    id: string
    title: string
    entries: any[]
}

export function YoutubeDownloader({ compact = false }: YoutubeDownloaderProps) {
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
    const [playlistInfo, setPlaylistInfo] = useState<PlaylistInfo | null>(null)
    const [downloadingId, setDownloadingId] = useState<string | null>(null)
    const [downloadType, setDownloadType] = useState<'single' | 'playlist'>('single')

    const validateUrl = (inputUrl: string): boolean => {
        if (!inputUrl.trim()) return false
        // Basic naive check, backend does the real lifting
        return inputUrl.includes("youtube.com") || inputUrl.includes("youtu.be")
    }

    const detectType = (inputUrl: string) => {
        // Strict playlist detection: must explicitly be a playlist URL, 
        // OR have list param but NOT be a watch URL (watch URLs with list param are usually just playing a video from a playlist)
        const isWatchUrl = inputUrl.includes("watch?v=") || inputUrl.includes("youtu.be/");
        const hasListParam = inputUrl.includes("list=");

        if (hasListParam && !isWatchUrl) {
            setDownloadType('playlist')
            return 'playlist'
        }

        // If it's a playlist URL structure specifically
        if (inputUrl.includes("/playlist?list=")) {
            setDownloadType('playlist')
            return 'playlist'
        }

        setDownloadType('single')
        return 'single'
    }


    const handleFetchInfo = async () => {
        setError(null)
        setVideoInfo(null)
        setPlaylistInfo(null)

        if (!validateUrl(url)) {
            setError("Please enter a valid YouTube URL")
            return
        }

        const type = detectType(url)
        setLoading(true)

        try {
            // Use local API
            const res = await fetch('/api/youtube/info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: url.trim(), type: type })
            })

            if (!res.ok) {
                const err = await res.json()
                throw new Error(err.error || 'Failed to fetch video information')
            }

            const data = await res.json()

            if (type === 'playlist') {
                setPlaylistInfo(data)
            } else {
                setVideoInfo(data)
            }
        } catch (err: any) {
            console.error(err)
            setError(err.message || "Failed to fetch video information. Please check the URL.")
        } finally {
            setLoading(false)
        }
    }

    const handleDownload = async (formatId?: string, type: 'video' | 'audio' = 'video') => {
        // Determine a unique ID for the loading state
        const activeId = formatId || (type === 'audio' ? 'audio' : 'best');

        setDownloadingId(activeId)
        const downloadToken = Date.now().toString();

        const title = videoInfo?.title || playlistInfo?.title || 'download';
        const safeTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();

        // Use local API for download
        let downloadUrl = `/api/youtube/download?url=${encodeURIComponent(url.trim())}&type=${type}&filename=${encodeURIComponent(safeTitle)}&downloadToken=${downloadToken}`;

        if (formatId) {
            downloadUrl += `&formatId=${formatId}`;
        }

        // Trigger browser download immediately
        window.location.href = downloadUrl;

        // Poll for the cookie to know when to stop the loader
        const checkCookie = setInterval(() => {
            if (document.cookie.includes(`download_started=${downloadToken}`)) {
                setDownloadingId(null);
                clearInterval(checkCookie);
                document.cookie = `download_started=${downloadToken}; Path=/; Max-Age=0`;
            }
        }, 500); // Check every 500ms

        // Fallback cleanup after 30 seconds if cookie not found (sometimes cookies are blocked)
        setTimeout(() => {
            clearInterval(checkCookie);
            setDownloadingId(null);
        }, 30000);
    }

    // Filter formats to show unique resolutions and best audio
    const getUniqueVideoFormats = (formats: VideoFormat[]) => {
        if (!formats) return []

        // Filter for mp4 videos with audio or video-only that we might want (ignoring for now to keep simple)
        // Actually best to show "Best Video" and specific common resolutions
        const seenResolutions = new Set();
        const usefulFormats = formats
            .filter(f => f.vcodec !== 'none' && f.height) // Must have video
            .sort((a, b) => (b.height || 0) - (a.height || 0)); // Highest res first

        const distinct = [];
        for (const f of usefulFormats) {
            const res = `${f.height}p`;
            if (!seenResolutions.has(res) && f.ext === 'mp4') {
                seenResolutions.add(res);
                distinct.push(f);
            }
        }
        return distinct;
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
                                placeholder="Paste YouTube video or playlist URL..."
                                value={url}
                                onChange={(e) => {
                                    setUrl(e.target.value)
                                    detectType(e.target.value)
                                }}
                                onKeyDown={(e) => e.key === "Enter" && handleFetchInfo()}
                                className="flex-1"
                                disabled={loading}
                            />
                            <GButton
                                onClick={handleFetchInfo}
                                disabled={loading || !url.trim()}
                                className="px-6"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin text-blue-500" />
                                        Fetching...
                                    </>
                                ) : (
                                    <>
                                        <Download className="mr-2 h-4 w-4" />
                                        Get Info
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

                    {/* Single Video Result */}
                    {videoInfo && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-1/3">
                                    <div className="relative aspect-video rounded-lg overflow-hidden border">
                                        <img src={videoInfo.thumbnail} alt={videoInfo.title} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold line-clamp-2 mb-2">{videoInfo.title}</h3>
                                        <p className="text-sm text-muted-foreground">{videoInfo.uploader} • {/* Add duration logic if needed */}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <GButton
                                            onClick={() => handleDownload(undefined, 'audio')}
                                            variant="secondary"
                                            className="w-full sm:w-auto"
                                            disabled={!!downloadingId}
                                        >
                                            {downloadingId === 'audio' ? <Loader2 className="mr-2 h-4 w-4 animate-spin text-blue-500" /> : <Music className="mr-2 h-4 w-4" />}
                                            Download MP3 (Audio)
                                        </GButton>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-sm font-semibold flex items-center gap-2">
                                            <Video className="h-4 w-4" /> Video Quality Options
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {getUniqueVideoFormats(videoInfo.formats).map((format) => (
                                                <GButton
                                                    key={format.format_id}
                                                    variant="outline"
                                                    size="sm"
                                                    className="justify-between"
                                                    disabled={!!downloadingId}
                                                    onClick={() => handleDownload(format.format_id, 'video')}
                                                >
                                                    <span className="flex items-center">
                                                        {format.height}p ({format.ext})
                                                        {downloadingId === format.format_id && <Loader2 className="ml-2 h-3 w-3 animate-spin text-blue-500" />}
                                                    </span>
                                                    {(format.filesize || format.filesize_approx) ? (
                                                        <span className="text-xs text-muted-foreground">
                                                            ~{((format.filesize || format.filesize_approx!) / 1024 / 1024).toFixed(1)} MB
                                                        </span>
                                                    ) : null}
                                                </GButton>
                                            ))}
                                            {/* Fallback Best Video */}
                                            <GButton
                                                variant="default"
                                                size="sm"
                                                className="justify-between"
                                                disabled={!!downloadingId}
                                                onClick={() => handleDownload(undefined, 'video')}
                                            >
                                                <span>Best Quality</span>
                                                {downloadingId === 'best' ? <Loader2 className="h-4 w-4 animate-spin text-blue-500" /> : <span className="text-xs opacity-70">Auto</span>}
                                            </GButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Playlist Result */}
                    {playlistInfo && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    <List className="h-5 w-5" /> Playlist: {playlistInfo.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">Found {playlistInfo.entries?.length || 0} videos</p>
                            </div>

                            <div className="grid gap-2 max-h-[400px] overflow-y-auto pr-2 rounded-md border p-2">
                                {playlistInfo.entries?.map((entry: any, i: number) => (
                                    <div key={entry.id || i} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 hover:bg-muted/50 rounded-md transition-colors border-b last:border-0 border-border/50">
                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                            <div className="h-16 w-28 bg-muted rounded overflow-hidden flex-shrink-0">
                                                {entry.thumbnails && entry.thumbnails[0] ? (
                                                    <img src={entry.thumbnails[0].url} alt="" className="w-full h-full object-cover" />
                                                ) : <div className="w-full h-full flex items-center justify-center"><FileVideo className="h-4 w-4" /></div>}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium line-clamp-2">{entry.title}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{entry.uploader}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 w-full sm:w-auto">
                                            <GButton
                                                size="sm"
                                                variant="secondary"
                                                className="flex-1 sm:flex-none"
                                                onClick={() => {
                                                    const baseUrl = env.apiUrl || "http://localhost:3001";
                                                    const url = `${baseUrl}/youtube/download?url=${encodeURIComponent(entry.url || `https://www.youtube.com/watch?v=${entry.id}`)}&type=audio&filename=${encodeURIComponent(entry.title?.replace(/[^a-z0-9]/gi, '_') || 'audio')}`;
                                                    window.open(url, '_blank');
                                                }}
                                            >
                                                <Music className="h-3 w-3 mr-2" />
                                                MP3
                                            </GButton>
                                            <GButton
                                                size="sm"
                                                variant="outline"
                                                className="flex-1 sm:flex-none"
                                                onClick={() => {
                                                    const baseUrl = env.apiUrl || "http://localhost:3001";
                                                    const url = `${baseUrl}/youtube/download?url=${encodeURIComponent(entry.url || `https://www.youtube.com/watch?v=${entry.id}`)}&type=video&filename=${encodeURIComponent(entry.title?.replace(/[^a-z0-9]/gi, '_') || 'video')}`;
                                                    window.open(url, '_blank');
                                                }}
                                            >
                                                <Video className="h-3 w-3 mr-2" />
                                                Video
                                            </GButton>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </GCard>

            {!compact && (
                <GCard className="p-6 bg-card border border-border">
                    <h3 className="text-lg font-bold text-foreground mb-4">How to Use</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                        <li>Open YouTube and find the video or playlist you want to download</li>
                        <li>Copy the URL from your browser's address bar</li>
                        <li>Paste it into the input field above and click "Get Info"</li>
                        <li>Choose your preferred format (MP3 Audio or Video Quality) to start downloading</li>
                    </ol>
                </GCard>
            )}
        </div>
    )
}
