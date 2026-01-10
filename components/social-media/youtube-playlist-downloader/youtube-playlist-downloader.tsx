"use client"

import { useState } from "react"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { GAlert, GAlertDescription } from "@/ui/galert"
import { Download, Loader2, AlertCircle, Video, Music, List, FileVideo } from "lucide-react"
import { YouTubeService, PlaylistInfo, VideoInfo, PlaylistEntry } from "@/services/youtube.service"
import { env } from "@/config/env"

export interface YoutubePlaylistDownloaderProps {
    compact?: boolean
}



export function YoutubePlaylistDownloader({ compact = false }: YoutubePlaylistDownloaderProps) {
    const [url, setUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [downloadingAllType, setDownloadingAllType] = useState<'video' | 'audio' | null>(null)
    const [downloadingItem, setDownloadingItem] = useState<{ id: string, type: 'video' | 'audio' } | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [playlistInfo, setPlaylistInfo] = useState<PlaylistInfo | null>(null)
    const [currentProgress, setCurrentProgress] = useState<string | null>(null)

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
            const data = await YouTubeService.getInfo(url.trim(), 'playlist');

            if ('entries' in data) {
                const cleanEntries = data.entries.filter((e: any) =>
                    e.title !== '[Private video]' &&
                    e.title !== '[Deleted video]' &&
                    e.title !== '[Unavailable video]'
                );
                data.entries = cleanEntries;
                setPlaylistInfo(data as PlaylistInfo)
            } else {
                setError("URL provided is not a playlist.");
            }
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
        setCurrentProgress(`0/${playlistInfo.entries.length}`)

        // Process videos one by one with delay
        for (let i = 0; i < playlistInfo.entries.length; i++) {
            setCurrentProgress(`${i + 1}/${playlistInfo.entries.length}`)
            const entry = playlistInfo.entries[i];
            try {
                // Determine format
                // For now we just use best available via direct url service
                // Audio extraction would ideally need a separate backend flag, but direct URL returns video+audio usually

                const directUrl = await YouTubeService.getDirectDownloadUrl(`https://www.youtube.com/watch?v=${entry.id}`);

                // Construct original URL from ID (most reliable)
                const originalUrl = `https://www.youtube.com/watch?v=${entry.id}`;
                const cleanTitle = entry.title.replace(/[^a-z0-9]/gi, '_');
                const extension = type === 'audio' ? 'mp3' : 'mp4';
                const filename = `${cleanTitle}.${extension}`;
                const streamUrl = YouTubeService.getStreamUrl(originalUrl, filename, undefined, type);

                const link = document.createElement('a');
                link.href = streamUrl;
                link.target = '_blank';
                link.download = filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Wait 1 second just to be safe between downloads
                if (i < playlistInfo.entries.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
            } catch (e) {
                console.error(`Failed to download ${entry.title}`, e);
                // Continue to next video even if one fails
            }
        }

        setDownloadingAllType(null)
        setCurrentProgress(null)
    }

    const handleSingleDownload = async (entry: any, type: 'video' | 'audio') => {
        setDownloadingItem({ id: entry.id, type });
        try {
            // Construct original URL from ID
            const originalUrl = `https://www.youtube.com/watch?v=${entry.id}`;
            const cleanTitle = entry.title.replace(/[^a-z0-9]/gi, '_');
            const isAudio = type === 'audio'; // type arg from handleSingleDownload
            const extension = isAudio ? 'mp3' : 'mp4';
            const filename = `${cleanTitle}.${extension}`;
            const streamUrl = YouTubeService.getStreamUrl(originalUrl, filename, undefined, type);

            const link = document.createElement('a');
            link.href = streamUrl;
            link.target = '_blank';
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (e) {
            console.error(e)
            setError("Failed to download video")
        } finally {
            setDownloadingItem(null);
        }
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
                                        {downloadingAllType === 'audio' && currentProgress ? `Downloading ${currentProgress}` : 'Download All MP3'}
                                    </GButton>
                                    <GButton
                                        size="sm"
                                        variant="outline"
                                        disabled={!!downloadingAllType}
                                        onClick={() => handleDownloadAll('video')}
                                    >
                                        {downloadingAllType === 'video' ? <Loader2 className="mr-2 h-4 w-4 animate-spin text-blue-500" /> : <Video className="mr-2 h-4 w-4" />}
                                        {downloadingAllType === 'video' && currentProgress ? `Downloading ${currentProgress}` : 'Download All Video'}
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
