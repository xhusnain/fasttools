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

export interface YoutubePlaylistDownloaderProps {
    compact?: boolean
}

interface PlaylistEntry {
    id: string
    title: string
    thumbnail: string
    duration: number
    uploader: string
    thumbnails?: { url: string }[]
    entries?: undefined // Playlist entries don't have nested entries usually in this context
}

interface PlaylistInfo {
    id: string
    title: string
    thumbnail: string
    view_count: number
    uploader: string
    description: string
    entries: PlaylistEntry[]
}

export function YoutubePlaylistDownloader({ compact = false }: YoutubePlaylistDownloaderProps) {
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [downloadingAllType, setDownloadingAllType] = useState<'video' | 'audio' | null>(null)
    const [downloadingItem, setDownloadingItem] = useState<{ id: string, type: 'video' | 'audio' } | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [playlistInfo, setPlaylistInfo] = useState<PlaylistInfo | null>(null)

    const validateUrl = (inputUrl: string): boolean => {
        if (!inputUrl.trim()) return false
        return inputUrl.includes("list=")
    }

    const handleFetchInfo = async () => {
        setError(null)
        setPlaylistInfo(null)

        if (!validateUrl(url)) {
            setError("Please enter a valid YouTube Playlist URL (must contain 'list=')")
            return
        }

        setLoading(true)

        try {
            // Use local API, force type to playlist
            const res = await fetch('/api/youtube/info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: url.trim(), type: 'playlist' })
            })

            if (!res.ok) {
                const err = await res.json()
                throw new Error(err.error || 'Failed to fetch playlist information')
            }

            const data = await res.json()

            // Filter out private/deleted videos
            if (data && data.entries) {
                data.entries = data.entries.filter((e: any) =>
                    e.title !== '[Private video]' &&
                    e.title !== '[Deleted video]' &&
                    e.title !== '[Unavailable video]'
                );
            }

            setPlaylistInfo(data)
        } catch (err: any) {
            console.error(err)
            setError(err.message || "Failed to fetch playlist information. Please check the URL.")
        } finally {
            setLoading(false)
        }
    }

    const handleDownloadAll = async (type: 'video' | 'audio') => {
        if (!playlistInfo || !playlistInfo.entries) return

        setDownloadingAllType(type)
        // No baseUrl needed for local API

        // We process sequentially with a delay to be gentle on the browser and server
        // Using hidden iframes avoids popup blockers which block window.open in loops
        // and avoids window.location.href cancelling previous requests
        for (const entry of playlistInfo.entries) {
            // Use Local API Direct Stream URL
            const dlUrl = `/api/youtube/download?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${entry.id}`)}&type=${type}&filename=${encodeURIComponent(entry.title?.replace(/[^a-z0-9]/gi, '_') || type)}`;

            // Create hidden iframe to trigger download as stream
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = dlUrl;
            document.body.appendChild(iframe);

            // waiting 10 seconds before next download as requested
            // also gives time for the download to initiate
            await new Promise(resolve => setTimeout(resolve, 10000));

            // Clean up iframe after a while (optional but good practice)
            setTimeout(() => {
                document.body.removeChild(iframe);
            }, 60000);
        }

        setDownloadingAllType(null)
        setDownloadingItem(null)
    }

    const handleSingleDownload = async (entry: any, type: 'video' | 'audio') => {
        const title = entry.title || 'download';
        const safeTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const downloadToken = `pl_${entry.id}_${Date.now()}`;

        // Local API URL
        const dlUrl = `/api/youtube/download?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${entry.id}`)}&type=${type}&filename=${encodeURIComponent(safeTitle)}&downloadToken=${downloadToken}`;

        setDownloadingItem({ id: entry.id, type });
        window.location.href = dlUrl; // Direct stream trigger

        // Poll for completion
        const checkCookie = setInterval(() => {
            if (document.cookie.includes(`download_started=${downloadToken}`)) {
                setDownloadingItem(prev => (prev?.id === entry.id && prev?.type === type) ? null : prev);
                clearInterval(checkCookie);
                document.cookie = `download_started=${downloadToken}; Path=/; Max-Age=0`;
            }
        }, 500);

        // Fallback cleanup
        setTimeout(() => {
            clearInterval(checkCookie);
            setDownloadingItem(prev => (prev?.id === entry.id && prev?.type === type) ? null : prev);
        }, 30000);
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <GCard className="p-6 sm:p-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <GLabel htmlFor="youtube-url" className="text-base font-semibold">
                            YouTube Playlist URL
                        </GLabel>
                        <div className="flex gap-2">
                            <GInput
                                id="youtube-url"
                                type="text"
                                placeholder="Paste YouTube Playlist URL (e.g., https://www.youtube.com/playlist?list=...)"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
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

                    {/* Playlist Result */}
                    {playlistInfo && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold flex items-center gap-2">
                                        <List className="h-5 w-5" /> Playlist: {playlistInfo.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Found {playlistInfo.entries?.length || 0} videos • {playlistInfo.uploader} • {playlistInfo.view_count?.toLocaleString()} views
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <GButton
                                        size="sm"
                                        variant="default"
                                        disabled={!!downloadingAllType}
                                        onClick={() => handleDownloadAll('audio')}
                                    >
                                        {downloadingAllType === 'audio' ? <Loader2 className="mr-2 h-4 w-4 animate-spin text-blue-500" /> : <Music className="mr-2 h-4 w-4" />}
                                        Download All MP3
                                    </GButton>
                                    <GButton
                                        size="sm"
                                        variant="outline"
                                        disabled={!!downloadingAllType}
                                        onClick={() => handleDownloadAll('video')}
                                    >
                                        {downloadingAllType === 'video' ? <Loader2 className="mr-2 h-4 w-4 animate-spin text-blue-500" /> : <Video className="mr-2 h-4 w-4" />}
                                        Download All Video
                                    </GButton>
                                </div>
                            </div>

                            <div className="grid gap-2 max-h-[600px] overflow-y-auto pr-2 rounded-md border p-2">
                                {playlistInfo.entries?.map((entry: PlaylistEntry, i: number) => (
                                    <div key={entry.id || i} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 hover:bg-muted/50 rounded-md transition-colors border-b last:border-0 border-border/50">
                                        <div className="flex items-center gap-3 flex-1 min-w-0">
                                            <div className="h-16 w-28 bg-muted rounded overflow-hidden flex-shrink-0 relative group">
                                                {entry.thumbnail || (entry.thumbnails && entry.thumbnails.length > 0) ? (
                                                    <img
                                                        src={entry.thumbnail || entry.thumbnails?.[entry.thumbnails.length - 1]?.url}
                                                        alt={entry.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : <div className="w-full h-full flex items-center justify-center"><FileVideo className="h-4 w-4" /></div>}
                                                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">
                                                    {entry.duration ? new Date(entry.duration * 1000).toISOString().substr(11, 8).replace(/^00:/, '') : ''}
                                                </span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium line-clamp-2" title={entry.title}>{entry.title}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{entry.uploader}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 w-full sm:w-auto">
                                            <GButton
                                                size="sm"
                                                variant="secondary"
                                                className="flex-1 sm:flex-none"
                                                disabled={Boolean(downloadingItem)}
                                                onClick={() => handleSingleDownload(entry, 'audio')}
                                            >
                                                {downloadingItem?.id === entry.id && downloadingItem?.type === 'audio' ? (
                                                    <Loader2 className="h-3 w-3 mr-2 animate-spin text-blue-500" />
                                                ) : (
                                                    <Music className="h-3 w-3 mr-2" />
                                                )}
                                                MP3
                                            </GButton>
                                            <GButton
                                                size="sm"
                                                variant="outline"
                                                className="flex-1 sm:flex-none"
                                                disabled={Boolean(downloadingItem)}
                                                onClick={() => handleSingleDownload(entry, 'video')}
                                            >
                                                {downloadingItem?.id === entry.id && downloadingItem?.type === 'video' ? (
                                                    <Loader2 className="h-3 w-3 mr-2 animate-spin text-blue-500" />
                                                ) : (
                                                    <Video className="h-3 w-3 mr-2" />
                                                )}
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
                    <h3 className="text-lg font-bold text-foreground mb-4">How to Download YouTube Playlists</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                        <li>Go to YouTube and find the playlist you want to download</li>
                        <li>Copy the URL from the browser's address bar (make sure it contains "list=")</li>
                        <li>Paste it into the input field above and click "Get Info"</li>
                        <li>Browse the list of videos and download them as MP3 or Video individually</li>
                    </ol>
                </GCard>
            )}
        </div>
    )
}
