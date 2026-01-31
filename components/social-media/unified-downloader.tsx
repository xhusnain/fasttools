"use client"

import { useState } from "react"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { GAlert, GAlertDescription } from "@/ui/galert"
import { Download, Loader2, AlertCircle, Video, Music, List, FileVideo, ChevronRight, ArrowRight } from "lucide-react"
import { API } from "@/services/api/api.service"
import { downloadBlob } from "@/lib/download-utils"
import type { DownloadResponse, VideoItem, AudioItem, PlaylistEntry, SocialMediaPlatform } from "@/types"
import Link from "next/link"

export interface UnifiedDownloaderProps {
  compact?: boolean
  defaultPlatform?: SocialMediaPlatform
  placeholder?: string
  mode?: 'single' | 'playlist'
}

function detectPlatform(url: string): SocialMediaPlatform | null {
  const lowerUrl = url.toLowerCase().trim()

  if (lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be")) return "youtube"
  if (lowerUrl.includes("tiktok.com") || lowerUrl.includes("vm.tiktok") || lowerUrl.includes("vt.tiktok")) return "tiktok"
  if (lowerUrl.includes("instagram.com")) return "instagram"
  if (lowerUrl.includes("facebook.com") || lowerUrl.includes("fb.com") || lowerUrl.includes("fb.watch")) return "facebook"
  if (lowerUrl.includes("twitter.com") || lowerUrl.includes("x.com") || lowerUrl.includes("t.co")) return "twitter"
  if (lowerUrl.includes("pinterest.com") || lowerUrl.includes("pin.it")) return "pinterest"
  if (lowerUrl.includes("soundcloud.com")) return "soundcloud"
  if (lowerUrl.includes("douyin.com")) return "douyin"
  if (lowerUrl.includes("capcut.com")) return "capcut"
  if (lowerUrl.includes("threads.net")) return "threads"

  return null
}

function isYouTubePlaylistUrl(url: string): boolean {
  const lowerUrl = url.toLowerCase().trim()
  if (lowerUrl.includes("youtube.com/playlist")) return true
  if (lowerUrl.includes("list=")) return true
  return false
}

function isYouTubeSingleVideoUrl(url: string): boolean {
  const lowerUrl = url.toLowerCase().trim()
  if (!lowerUrl.includes("youtube.com") && !lowerUrl.includes("youtu.be")) return false
  if (isYouTubePlaylistUrl(url)) return false
  return lowerUrl.includes("watch?v=") || lowerUrl.includes("youtu.be/") || lowerUrl.includes("/shorts/") || lowerUrl.includes("/embed/")
}

const platformPatterns: Record<SocialMediaPlatform, RegExp[]> = {
  youtube: [/youtube\.com|youtu\.be/i],
  tiktok: [/tiktok\.com|vm\.tiktok|vt\.tiktok/i],
  instagram: [/instagram\.com/i],
  facebook: [/facebook\.com|fb\.com|fb\.watch/i],
  twitter: [/twitter\.com|x\.com|t\.co/i],
  pinterest: [/pinterest\.com|pin\.it/i],
  soundcloud: [/soundcloud\.com/i],
  douyin: [/douyin\.com/i],
  capcut: [/capcut\.com/i],
  threads: [/threads\.net/i],
  xiaohongshu: [/xiaohongshu\.com/i],
  snackvideo: [/snackvideo\.com/i],
  cocofun: [/cocofun\.com/i],
  gdrive: [/drive\.google\.com/i],
}

function validateUrl(url: string, platform: SocialMediaPlatform): boolean {
  const patterns = platformPatterns[platform]
  if (!patterns) return false
  return patterns.some(pattern => pattern.test(url))
}

const platformNames: Record<SocialMediaPlatform, string> = {
  youtube: "YouTube",
  tiktok: "TikTok",
  instagram: "Instagram",
  facebook: "Facebook",
  twitter: "X/Twitter",
  pinterest: "Pinterest",
  soundcloud: "SoundCloud",
  douyin: "Douyin",
  capcut: "CapCut",
  threads: "Threads",
  xiaohongshu: "Xiaohongshu",
  snackvideo: "SnackVideo",
  cocofun: "CocoFun",
  gdrive: "Google Drive",
}

const platformDownloaderUrls: Record<SocialMediaPlatform, string> = {
  youtube: "/social-media-tools/youtube-downloader",
  tiktok: "/social-media-tools/tiktok-downloader",
  instagram: "/social-media-tools/instagram-downloader",
  facebook: "/social-media-tools/facebook-downloader",
  twitter: "/social-media-tools/x-video-downloader",
  pinterest: "/social-media-tools/pinterest-downloader",
  soundcloud: "/social-media-tools/soundcloud-downloader",
  douyin: "/social-media-tools/douyin-downloader",
  capcut: "/social-media-tools/capcut-downloader",
  threads: "/social-media-tools/x-video-downloader",
  xiaohongshu: "/social-media-tools/xiaohongshu-downloader",
  snackvideo: "/social-media-tools/snackvideo-downloader",
  cocofun: "/social-media-tools/cocofun-downloader",
  gdrive: "/social-media-tools/gdrive-downloader",
}

function normalizeDownloadResponse(data: any): DownloadResponse {
  return {
    ...data,
    videos: data.videos || [],
    audios: data.audios || [],
  } as DownloadResponse
}

export function UnifiedDownloader({ 
  compact = false, 
  defaultPlatform,
  placeholder = "Paste video URL here...",
  mode = 'single'
}: UnifiedDownloaderProps) {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [urlTypeError, setUrlTypeError] = useState<string | null>(null)
  const [result, setResult] = useState<DownloadResponse | null>(null)
  const [downloadingUrl, setDownloadingUrl] = useState<string | null>(null)
  const [downloadingEntry, setDownloadingEntry] = useState<{ entryId: string; type: 'video' | 'audio' } | null>(null)
  const [platform, setPlatform] = useState<SocialMediaPlatform | null>(defaultPlatform || null)
  const [allEntries, setAllEntries] = useState<PlaylistEntry[]>([])

  const handleUrlChange = (inputUrl: string) => {
    setUrl(inputUrl)
    setUrlTypeError(null)
    setError(null)
    
    if (inputUrl.trim()) {
      const detected = detectPlatform(inputUrl)
      if (detected) {
        if (defaultPlatform && detected !== defaultPlatform) {
          const detectedName = platformNames[detected] || detected
          const expectedName = platformNames[defaultPlatform] || defaultPlatform
          setError(`This is a ${detectedName} URL. Please use the ${detectedName} Downloader for this URL.`)
          return
        }
        
        setPlatform(detected)
        
        if (detected === 'youtube' && defaultPlatform === 'youtube') {
          if (mode === 'single' && isYouTubePlaylistUrl(inputUrl)) {
            setUrlTypeError("This is a playlist URL. For playlists, please use the YouTube Playlist Downloader.")
          } else if (mode === 'playlist' && isYouTubeSingleVideoUrl(inputUrl)) {
            setUrlTypeError("This is a single video URL. For single videos, please use the YouTube Video Downloader.")
          }
        }
      } else if (!defaultPlatform) {
        setError("Unsupported platform. Please enter a URL from YouTube, TikTok, Instagram, Facebook, Twitter, Pinterest, SoundCloud, or other supported platforms.")
      } else {
        const expectedName = platformNames[defaultPlatform] || defaultPlatform
        setError(`Please enter a valid ${expectedName} URL.`)
      }
    }
  }

  const handleFetchInfo = async () => {
    setError(null)
    setResult(null)
    setUrlTypeError(null)
    setAllEntries([])

    if (!url.trim()) {
      setError("Please enter a URL")
      return
    }

    const detectedPlatform = platform || detectPlatform(url)
    if (!detectedPlatform) {
      if (defaultPlatform) {
        const expectedName = platformNames[defaultPlatform] || defaultPlatform
        setError(`Could not detect platform. Please enter a valid ${expectedName} URL.`)
      } else {
        setError("Could not detect platform. Please enter a valid URL from a supported platform.")
      }
      return
    }

    if (defaultPlatform && detectedPlatform !== defaultPlatform) {
      const detectedName = platformNames[detectedPlatform] || detectedPlatform
      const expectedName = platformNames[defaultPlatform] || defaultPlatform
      setError(`This is a ${detectedName} URL. Please use the ${detectedName} Downloader for this URL.`)
      return
    }

    if (detectedPlatform === 'youtube' && defaultPlatform === 'youtube') {
      if (mode === 'single' && isYouTubePlaylistUrl(url)) {
        setUrlTypeError("This is a playlist URL. For playlists, please use the YouTube Playlist Downloader.")
        return
      } else if (mode === 'playlist' && isYouTubeSingleVideoUrl(url)) {
        setUrlTypeError("This is a single video URL. For single videos, please use the YouTube Video Downloader.")
        return
      }
    }

    if (!validateUrl(url, detectedPlatform)) {
      const platformName = platformNames[detectedPlatform] || detectedPlatform
      setError(`Please enter a valid ${platformName} URL`)
      return
    }

    setLoading(true)

    try {
      const isPlaylist = mode === 'playlist' || (detectedPlatform === 'youtube' && isYouTubePlaylistUrl(url))
      const data = await API.Downloader.download(
        detectedPlatform, 
        url.trim(),
        isPlaylist ? { limit: 10 } : undefined
      )
      
      const normalizedData = normalizeDownloadResponse(data)
      
      setResult(normalizedData)
      if (normalizedData.isPlaylist && normalizedData.entries) {
        setAllEntries(normalizedData.entries as PlaylistEntry[])
      }
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Failed to fetch media information. Please check the URL and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleLoadMore = async () => {
    if (!result || !result.isPlaylist || !url.trim() || !platform) return

    setLoadingMore(true)

    try {
      const currentOffset = allEntries.length
      const limit = result.limit || 10
      
      const data = await API.Downloader.download(platform, url.trim(), {
        offset: currentOffset,
        limit: limit,
        nextPageToken: result.nextPageToken
      })
      
      const normalizedData = normalizeDownloadResponse(data)
      
      if (normalizedData.isPlaylist && normalizedData.entries) {
        const newEntries = [...allEntries, ...(normalizedData.entries as PlaylistEntry[])]
        setAllEntries(newEntries)
        setResult(prev => prev ? {
          ...prev,
          entries: normalizedData.entries,
          hasMore: normalizedData.hasMore,
          nextPageToken: normalizedData.nextPageToken,
          offset: normalizedData.offset,
          limit: normalizedData.limit
        } : null)
      }
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Failed to load more entries. Please try again.")
    } finally {
      setLoadingMore(false)
    }
  }

  const handleDownload = async (item: VideoItem | AudioItem, title?: string) => {
    setDownloadingUrl(item.url)

    try {
      const cleanTitle = (title || result?.title || 'download').replace(/[^a-z0-9]/gi, '_')
      const filename = `${cleanTitle}.${item.extension}`
      await downloadBlob(item.url, filename, item.httpHeaders)
    } catch (error: any) {
      console.error(error)
      setError("Download failed. Please try again.")
    } finally {
      setDownloadingUrl(null)
    }
  }

  const handlePlaylistEntryDownload = async (entry: PlaylistEntry, type: 'video' | 'audio') => {
    setDownloadingEntry({ entryId: entry.id, type })

    try {
      const items = type === 'audio' ? entry.audios : entry.videos
      if (!items || items.length === 0) {
        setError(`No ${type} available for this entry`)
        return
      }

      const item = items[0]
      const cleanTitle = entry.title.replace(/[^a-z0-9]/gi, '_')
      const filename = `${cleanTitle}.${item.extension}`
      await downloadBlob(item.url, filename, item.httpHeaders)
    } catch (error: any) {
      console.error(error)
      setError("Download failed. Please try again.")
    } finally {
      setDownloadingEntry(null)
    }
  }

  const getVideos = (): VideoItem[] => {
    if (!result) return []
    return result.videos || []
  }

  const getAudios = (): AudioItem[] => {
    if (!result) return []
    return result.audios || []
  }

  const getPlatformName = (): string => {
    if (platform) {
      return platform.charAt(0).toUpperCase() + platform.slice(1)
    }
    return "Media"
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      <GCard className="p-6 sm:p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <GLabel htmlFor="media-url" className="text-base font-semibold">
              {getPlatformName()} URL
            </GLabel>
            <div className="flex flex-col sm:flex-row gap-2">
              <GInput
                id="media-url"
                type="text"
                placeholder={placeholder}
                value={url}
                onChange={(e) => handleUrlChange(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleFetchInfo()}
                className="flex-1"
                disabled={loading}
              />
              <GButton
                onClick={handleFetchInfo}
                disabled={loading || !url.trim()}
                className="px-6 w-full sm:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
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

          {urlTypeError && (
            <GAlert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <GAlertDescription className="flex flex-col gap-2">
                <span>{urlTypeError}</span>
                {mode === 'single' && isYouTubePlaylistUrl(url) && (
                  <a 
                    href="/social-media-tools/youtube-playlist-downloader" 
                    className="text-primary hover:underline font-medium"
                  >
                    Click here to go to YouTube Playlist Downloader →
                  </a>
                )}
                {mode === 'playlist' && isYouTubeSingleVideoUrl(url) && (
                  <a 
                    href="/social-media-tools/youtube-downloader" 
                    className="text-primary hover:underline font-medium"
                  >
                    Click here to go to YouTube Video Downloader →
                  </a>
                )}
              </GAlertDescription>
            </GAlert>
          )}

          {error && !urlTypeError && (
            <GAlert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <GAlertDescription className="flex flex-col gap-2">
                <span>{error}</span>
                {(() => {
                  const detectedPlatform = platform || detectPlatform(url)
                  if (detectedPlatform && defaultPlatform && detectedPlatform !== defaultPlatform) {
                    const downloaderUrl = platformDownloaderUrls[detectedPlatform]
                    if (downloaderUrl) {
                      const platformName = platformNames[detectedPlatform] || detectedPlatform
                      return (
                        <Link href={downloaderUrl} className="text-primary hover:underline font-medium flex items-center">
                          Click here to go to {platformName} Downloader <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      )
                    }
                  }
                  return null
                })()}
              </GAlertDescription>
            </GAlert>
          )}

          {result && result.isPlaylist && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <List className="h-5 w-5" /> Playlist: {result.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Showing {allEntries.length} of {result.playlistEntryCount || allEntries.length} videos
                  {result.uploader && ` • ${result.uploader}`}
                  {result.viewCount && ` • ${result.viewCount.toLocaleString()} views`}
                </p>
              </div>

              <div className="grid gap-2 max-h-[600px] overflow-y-auto pr-2 rounded-md border p-2">
                {allEntries.map((entry, i) => (
                  <div key={entry.id || i} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 hover:bg-muted/50 rounded-md transition-colors border-b last:border-0 border-border/50">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="h-16 w-28 bg-muted rounded overflow-hidden shrink-0 relative">
                        {entry.thumbnail ? (
                          <img src={entry.thumbnail} alt={entry.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <FileVideo className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-2" title={entry.title}>{entry.title}</p>
                        {entry.uploader && (
                          <p className="text-xs text-muted-foreground mt-1">{entry.uploader}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 w-full sm:w-auto">
                      {entry.audios && entry.audios.length > 0 && (
                        <GButton
                          size="sm"
                          variant="secondary"
                          className="flex-1 sm:flex-none"
                          disabled={!!downloadingEntry}
                          onClick={() => handlePlaylistEntryDownload(entry, 'audio')}
                        >
                          {downloadingEntry?.entryId === entry.id && downloadingEntry?.type === 'audio' ? (
                            <Loader2 className="h-3 w-3 mr-2 animate-spin" />
                          ) : (
                            <Music className="h-3 w-3 mr-2" />
                          )}
                          MP3
                        </GButton>
                      )}
                      {entry.videos && entry.videos.length > 0 && (
                        <GButton
                          size="sm"
                          variant="outline"
                          className="flex-1 sm:flex-none"
                          disabled={!!downloadingEntry}
                          onClick={() => handlePlaylistEntryDownload(entry, 'video')}
                        >
                          {downloadingEntry?.entryId === entry.id && downloadingEntry?.type === 'video' ? (
                            <Loader2 className="h-3 w-3 mr-2 animate-spin" />
                          ) : (
                            <Video className="h-3 w-3 mr-2" />
                          )}
                          Video
                        </GButton>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {(result.hasMore || (result.playlistEntryCount && allEntries.length < result.playlistEntryCount)) && (
                <div className="flex justify-center pt-4">
                  <GButton
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    {loadingMore ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Loading more...
                      </>
                    ) : (
                      <>
                        Load More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </GButton>
                </div>
              )}

              {!result.hasMore && result.playlistEntryCount && allEntries.length >= result.playlistEntryCount && (
                <div className="text-center text-sm text-muted-foreground py-2">
                  All {result.playlistEntryCount} videos loaded
                </div>
              )}
            </div>
          )}

          {result && !result.isPlaylist && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex flex-col md:flex-row gap-6">
                {result.thumbnail && (
                  <div className="w-full md:w-1/3">
                    <div className="relative aspect-video rounded-lg overflow-hidden border">
                      <img src={result.thumbnail} alt={result.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
                <div className={`w-full ${result.thumbnail ? 'md:w-2/3' : ''} space-y-4`}>
                  <div>
                    <h3 className="text-xl font-bold line-clamp-2 mb-2">{result.title}</h3>
                    {result.description && (
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-2">{result.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      {result.uploader && <span>{result.uploader}</span>}
                      {result.duration && (
                        <span>• {Math.floor(result.duration / 60)}:{(result.duration % 60).toString().padStart(2, '0')}</span>
                      )}
                      {result.viewCount && (
                        <span>• {result.viewCount.toLocaleString()} views</span>
                      )}
                    </div>
                  </div>

                  {getAudios().length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {getAudios().map((audio, index) => (
                        <GButton
                          key={index}
                          onClick={() => handleDownload(audio)}
                          variant="secondary"
                          className="w-full sm:w-auto"
                          disabled={!!downloadingUrl}
                        >
                          {downloadingUrl === audio.url ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          ) : (
                            <Music className="mr-2 h-4 w-4" />
                          )}
                          Download {audio.extension.toUpperCase()} {audio.quality !== 'unknown' ? `(${audio.quality})` : ''}
                        </GButton>
                      ))}
                    </div>
                  )}

                  {getVideos().length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold flex items-center gap-2">
                        <Video className="h-4 w-4" /> Video Quality Options
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {getVideos().map((video, index) => (
                          <GButton
                            key={index}
                            variant="outline"
                            size="sm"
                            className="justify-between"
                            disabled={!!downloadingUrl}
                            onClick={() => handleDownload(video)}
                          >
                            <span className="flex items-center">
                              {video.quality} ({video.extension})
                              {downloadingUrl === video.url && (
                                <Loader2 className="ml-2 h-3 w-3 animate-spin" />
                              )}
                            </span>
                            {video.formattedSize || (video.size && (
                              <span className="text-xs text-muted-foreground">
                                {video.formattedSize || `~${(video.size / 1024 / 1024).toFixed(1)} MB`}
                              </span>
                            ))}
                          </GButton>
                        ))}
                      </div>
                    </div>
                  )}

                  {getVideos().length === 0 && getAudios().length === 0 && (
                    <GAlert>
                      <AlertCircle className="h-4 w-4" />
                      <GAlertDescription>No media files available for download.</GAlertDescription>
                    </GAlert>
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
            <li>Open {getPlatformName()} and find the {platform === 'youtube' ? 'video or playlist' : 'content'} you want to download</li>
            <li>Copy the URL from your browser's address bar</li>
            <li>Paste it into the input field above and click "Get Info"</li>
            <li>Choose your preferred format (Audio or Video Quality) to start downloading</li>
          </ol>
        </GCard>
      )}
    </div>
  )
}
