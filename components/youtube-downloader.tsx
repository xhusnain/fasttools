"use client"

import { useState } from "react"
import { GButton as Button } from "@/components/globalcomponents/gbutton"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Download, AlertTriangle, Music, Video, List } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type YoutubeDownloaderProps = {
  compact?: boolean
}

interface PlaylistVideo {
  id: string
  title: string
  thumbnail: string
  duration: string
  author: string
  url: string
}

export function YoutubeDownloader({ compact = false }: YoutubeDownloaderProps) {
  const [activeTab, setActiveTab] = useState<"single" | "playlist">("single")

  // Single video state
  const [videoUrl, setVideoUrl] = useState("")
  const [format, setFormat] = useState<"mp4" | "mp3">("mp4")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<{
    videoUrl?: string
    audioUrl?: string
    title?: string
    author?: string
    thumbnail?: string
    videoId?: string
    downloading?: boolean
    downloadStarted?: boolean
  } | null>(null)
  const [downloadingStates, setDownloadingStates] = useState<{
    video?: boolean
    audio?: boolean
  }>({})

  // Playlist state
  const [playlistUrl, setPlaylistUrl] = useState("")
  const [playlistFormat, setPlaylistFormat] = useState<"mp4" | "mp3">("mp4")
  const [playlistLoading, setPlaylistLoading] = useState(false)
  const [playlistError, setPlaylistError] = useState<string | null>(null)
  const [playlistVideos, setPlaylistVideos] = useState<PlaylistVideo[]>([])
  const [selectedVideos, setSelectedVideos] = useState<Set<string>>(new Set())
  const [playlistDownloading, setPlaylistDownloading] = useState(false)
  const [playlistProgress, setPlaylistProgress] = useState({
    current: 0,
    total: 0,
    percentage: 0,
    currentVideoTitle: '',
    currentVideoIndex: 0,
    videoProgress: 0
  })

  const isLikelyYoutubeUrl = (url: string) => {
    const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/i
    return pattern.test(url.trim())
  }

  // Clean YouTube URL by extracting video ID (removes playlist parameters)
  const cleanYouTubeUrl = (url: string): string => {
    const trimmed = url.trim()
    if (trimmed.includes('playlist?list=') && !trimmed.includes('watch?v=')) {
      return trimmed
    }

    const videoIdMatch = trimmed.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/)
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/watch?v=${videoIdMatch[1]}`
    }

    return trimmed
  }

  // Single video download handler
  const handleSingleVideoFetch = async () => {
    setError(null)
    setResult(null)
    if (!isLikelyYoutubeUrl(videoUrl)) {
      setError("Please enter a valid YouTube video URL.")
      return
    }

    const cleanedUrl = cleanYouTubeUrl(videoUrl)

    setLoading(true)
    try {
      const response = await fetch('/api/youtube-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: cleanedUrl,
          format: format
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `Server error: ${response.status}`)
      }

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.message || "Failed to fetch download links")
      }

      if (data.isPlaylist) {
        throw new Error("This is a playlist URL. Please use the 'Playlist Download' tab for playlists.")
      }

      if (!data.videoUrl && !data.audioUrl && !data.videoId) {
        throw new Error("No downloadable content found for this URL")
      }

      setResult({
        videoUrl: data.videoUrl,
        audioUrl: data.audioUrl,
        title: data.title,
        author: data.author,
        thumbnail: data.thumbnail,
        videoId: data.videoId,
        downloading: false,
        downloadStarted: false
      })

    } catch (e: any) {
      setError(e?.message || "Failed to fetch download links. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Single video download - direct browser download (no server bandwidth)
  const handleSingleVideoDownload = async () => {
    if (!result?.videoId || !result?.title) {
      setError("Please fetch video information first")
      return
    }

    setDownloadingStates(prev => ({ ...prev, [format === 'mp4' ? 'video' : 'audio']: true }))
    setError(null)

    try {
      // Step 1: Get direct download URL from server (lightweight, no file download)
      const response = await fetch('/api/youtube-download-file', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: cleanYouTubeUrl(videoUrl),
          format: format,
          videoId: result.videoId,
          title: result.title
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || 'Failed to get download URL')
      }

      const data = await response.json()

      if (!data.success || !data.downloadUrl) {
        throw new Error(data.message || 'No download URL received')
      }

      // Note: HLS detection is now handled on the backend
      // The backend will try multiple strategies to find a direct URL
      // If it fails, it will return an error message

      // Step 2: Download via streaming proxy (for direct video URLs)
      // Use GET request with query parameters to avoid POST body issues
      // This approach is simpler and avoids Range header complications
      console.log('Starting download via streaming proxy...')

      const safeFilename = encodeURIComponent(data.filename || `${result.title || 'youtube-video'}.${format}`)
      const encodedVideoUrl = encodeURIComponent(data.downloadUrl)

      // Create a direct download link using GET request
      // This avoids fetch() Range header issues
      const proxyDownloadUrl = `/api/youtube-proxy-download?url=${encodedVideoUrl}&filename=${safeFilename}`

      // Create a temporary anchor element and trigger download
      const a = document.createElement('a')
      a.href = proxyDownloadUrl
      a.download = data.filename || `${result.title || 'youtube-video'}.${format}`
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()

      // Clean up after download starts
      setTimeout(() => {
        document.body.removeChild(a)
      }, 1000)

      setResult(prev => prev ? { ...prev, downloadStarted: true } : null)
      setDownloadingStates(prev => ({ ...prev, [format === 'mp4' ? 'video' : 'audio']: false }))

    } catch (e: any) {
      console.error('Download error:', e)
      setError(e?.message || "Download failed. Please try again.")
      setDownloadingStates(prev => ({ ...prev, [format === 'mp4' ? 'video' : 'audio']: false }))
    }
  }

  // Fetch playlist videos
  const handleFetchPlaylist = async () => {
    setPlaylistError(null)
    setPlaylistVideos([])
    setSelectedVideos(new Set())

    if (!isLikelyYoutubeUrl(playlistUrl)) {
      setPlaylistError("Please enter a valid YouTube playlist URL.")
      return
    }

    const isPlaylistPage = playlistUrl.includes('playlist?list=') && !playlistUrl.includes('watch?v=')
    if (!isPlaylistPage) {
      setPlaylistError("Please provide a valid YouTube playlist URL (e.g., https://www.youtube.com/playlist?list=...)")
      return
    }

    setPlaylistLoading(true)

    try {
      const response = await fetch('/api/youtube-playlist-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: playlistUrl.trim()
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || 'Failed to fetch playlist')
      }

      const data = await response.json()

      if (!data.success || !data.videos || data.videos.length === 0) {
        throw new Error(data.message || 'No videos found in playlist')
      }

      setPlaylistVideos(data.videos)
      // Select all videos by default
      setSelectedVideos(new Set(data.videos.map((v: PlaylistVideo) => v.id)))

    } catch (e: any) {
      setPlaylistError(e?.message || "Failed to fetch playlist. Please try again.")
    } finally {
      setPlaylistLoading(false)
    }
  }

  // Toggle video selection
  const toggleVideoSelection = (videoId: string) => {
    setSelectedVideos(prev => {
      const newSet = new Set(prev)
      if (newSet.has(videoId)) {
        newSet.delete(videoId)
      } else {
        newSet.add(videoId)
      }
      return newSet
    })
  }

  // Select/Deselect all
  const toggleSelectAll = () => {
    if (selectedVideos.size === playlistVideos.length) {
      setSelectedVideos(new Set())
    } else {
      setSelectedVideos(new Set(playlistVideos.map(v => v.id)))
    }
  }

  // Download selected videos - Client-side download (zero server bandwidth)
  // This uses the SAME logic as single video downloads - no server bandwidth usage
  const handleDownloadSelected = async () => {
    if (selectedVideos.size === 0) {
      setPlaylistError("Please select at least one video to download")
      return
    }

    setPlaylistError(null)
    setPlaylistDownloading(true)

    // Get selected videos with their titles
    const selectedVideosList = playlistVideos.filter(v => selectedVideos.has(v.id))
    const totalVideos = selectedVideosList.length

    console.log('🚀 Frontend: Starting CLIENT-SIDE playlist download', 'Total videos:', totalVideos)
    console.log('⚠️  This should NOT call /api/youtube-download-selected - all downloads are client-side!')

    setPlaylistProgress({
      current: 0,
      total: totalVideos,
      percentage: 0,
      currentVideoTitle: '',
      currentVideoIndex: 0,
      videoProgress: 0
    })

    try {
      // Download each video one by one on the client side - EXACTLY like single video downloads
      for (let i = 0; i < selectedVideosList.length; i++) {
        const video = selectedVideosList[i]
        const videoUrl = video.url
        const videoTitle = video.title

        console.log(`📥 Processing video ${i + 1}/${totalVideos}: ${videoTitle}`)

        // Update progress
        setPlaylistProgress({
          current: i,
          total: totalVideos,
          percentage: Math.floor((i / totalVideos) * 100),
          currentVideoTitle: videoTitle,
          currentVideoIndex: i + 1,
          videoProgress: 0
        })

        try {
          // Step 1: Get direct download URL from server (lightweight API call, no file download)
          console.log(`  → Step 1: Getting direct URL for video ${i + 1}...`)
          const response = await fetch('/api/youtube-download-file', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              url: videoUrl,
              format: playlistFormat, // Use selected format (mp4 or mp3)
              videoId: video.id,
              title: videoTitle
            })
          })

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw new Error(errorData.message || `Failed to get download URL for video ${i + 1}`)
          }

          const data = await response.json()

          if (!data.success || !data.downloadUrl) {
            throw new Error(data.message || `No download URL received for video ${i + 1}`)
          }

          // Check if this is an HLS manifest
          if (data.isHLS || data.downloadUrl.includes('manifest.googlevideo.com') || data.downloadUrl.includes('.m3u8')) {
            throw new Error(`Video ${i + 1} (${videoTitle}) uses HLS format and cannot be downloaded directly.`)
          }

          console.log(`  ✅ Got direct URL for video ${i + 1}, starting browser download...`)

          // Step 2: Download via streaming proxy (direct browser download)
          // This is the SAME approach as single video downloads
          const fileExtension = playlistFormat === 'mp3' ? 'mp3' : 'mp4'
          const safeFilename = encodeURIComponent(data.filename || `${videoTitle || 'youtube-video'}.${fileExtension}`)
          const encodedVideoUrl = encodeURIComponent(data.downloadUrl)

          // Create a direct download link using GET request (same as single videos)
          const proxyDownloadUrl = `/api/youtube-proxy-download?url=${encodedVideoUrl}&filename=${safeFilename}`

          console.log(`  → Step 2: Triggering browser download via proxy: ${proxyDownloadUrl.substring(0, 80)}...`)

          // Create a temporary anchor element and trigger download (same as single videos)
          const a = document.createElement('a')
          a.href = proxyDownloadUrl
          a.download = data.filename || `${videoTitle || 'youtube-video'}.${fileExtension}`
          a.style.display = 'none'
          document.body.appendChild(a)
          a.click()

          // Clean up after download starts
          setTimeout(() => {
            try {
              document.body.removeChild(a)
            } catch (e) {
              // Element may have already been removed
            }
          }, 1000)

          console.log(`  ✅ Download triggered for video ${i + 1}: ${data.filename}`)

          // Update progress after download starts
          setPlaylistProgress({
            current: i + 1,
            total: totalVideos,
            percentage: Math.floor(((i + 1) / totalVideos) * 100),
            currentVideoTitle: videoTitle,
            currentVideoIndex: i + 1,
            videoProgress: 100
          })

          // Small delay between downloads to avoid overwhelming the browser
          if (i < selectedVideosList.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000)) // Increased delay to 1s
          }

        } catch (videoError: any) {
          console.error(`❌ Error downloading video ${i + 1}:`, videoError)
          setPlaylistError(`Failed to download video ${i + 1} (${videoTitle}): ${videoError.message}`)
          // Continue with next video instead of stopping
        }
      }

      console.log('✅ All playlist downloads initiated (client-side)')

      // All downloads completed
      setPlaylistProgress({
        current: totalVideos,
        total: totalVideos,
        percentage: 100,
        currentVideoTitle: '',
        currentVideoIndex: totalVideos,
        videoProgress: 100
      })

    } catch (e: any) {
      console.error('❌ Playlist download error:', e)
      setPlaylistError(e?.message || "Failed to download videos. Please try again.")
    } finally {
      setPlaylistDownloading(false)
    }
  }

  return (
    <div className="space-y-6">
      {!compact && (
        <Card className="p-6 bg-card border border-border shadow-sm">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Legal Disclaimer</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Downloading YouTube videos may violate copyright laws and YouTube's terms of service. This tool is for
                educational purposes only. Always respect content creators' rights and only download videos you have
                permission to use. Use downloaded content responsibly and give proper credit to original creators.
              </p>
            </div>
          </div>
        </Card>
      )}

      <Card className={`p-6 bg-card border-border shadow-sm`}>
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "single" | "playlist")} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="single" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Single Video
            </TabsTrigger>
            <TabsTrigger value="playlist" className="flex items-center gap-2">
              <List className="h-4 w-4" />
              Playlist
            </TabsTrigger>
          </TabsList>

          {/* Single Video Tab */}
          <TabsContent value="single" className="space-y-4 mt-4">
            <div>
              <Label htmlFor="video-url" className="text-sm font-medium text-foreground">
                YouTube Video URL
              </Label>
              <Input
                id="video-url"
                type="text"
                placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className={`mt-2 ${compact ? "h-11" : "h-14"} text-base border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20`}
              />
            </div>

            <div>
              <Label htmlFor="format" className="text-sm font-medium text-foreground">
                Download Format
              </Label>
              <Select value={format} onValueChange={(value: "mp4" | "mp3") => setFormat(value)}>
                <SelectTrigger className={`mt-2 ${compact ? "h-11" : "h-14"} text-base border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20`}>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mp4">MP4 (Video)</SelectItem>
                  <SelectItem value="mp3">MP3 (Audio Only)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSingleVideoFetch}
              disabled={!videoUrl || loading}
              className={`w-full ${compact ? "h-11" : "h-14"} text-base font-medium shadow-sm hover:shadow-md transition-all`}
            >
              {loading ? (
                <>
                  <LoadingSpinner className="mr-2" />
                  Processing video...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Get Video Info
                </>
              )}
            </Button>

            {error && (
              <div className="text-sm text-muted-foreground bg-muted/50 border border-border rounded-md p-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Error</p>
                    <p className="mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {result && (
              <div className="space-y-3">
                {result.thumbnail && (
                  <div className="flex justify-center">
                    <img
                      src={result.thumbnail}
                      alt={result.title || "YouTube thumbnail"}
                      className={`${compact ? "w-full max-w-xs h-32 object-cover rounded-md border" : "w-full max-w-sm h-40 xs:h-44 sm:h-48 object-cover rounded-md border"}`}
                    />
                  </div>
                )}
                {result.title && (
                  <div className="text-center p-3 bg-muted/50 border border-border rounded-md">
                    <p className="text-sm font-medium text-foreground">{result.title}</p>
                    {result.author && (
                      <p className="text-xs text-muted-foreground mt-1">by {result.author}</p>
                    )}
                  </div>
                )}
                <div className="space-y-2">
                  {result.downloadStarted && (
                    <div className="text-center p-3 bg-green-500/10 border border-green-500/20 rounded-md">
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">✅ Download started! Your browser will download the file directly.</p>
                    </div>
                  )}
                  <Button
                    onClick={handleSingleVideoDownload}
                    disabled={downloadingStates[format === 'mp4' ? 'video' : 'audio'] || !result.videoId}
                    className="w-full h-10"
                  >
                    {downloadingStates[format === 'mp4' ? 'video' : 'audio'] ? (
                      <>
                        <LoadingSpinner className="mr-2 h-4 w-4" />
                        Downloading {format.toUpperCase()}...
                      </>
                    ) : (
                      <>
                        {format === 'mp4' ? <Download className="mr-2 h-4 w-4" /> : <Music className="mr-2 h-4 w-4" />}
                        Download {format.toUpperCase()}
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>

          {/* Playlist Tab */}
          <TabsContent value="playlist" className="space-y-4 mt-4">
            <div>
              <Label htmlFor="playlist-url" className="text-sm font-medium text-foreground">
                YouTube Playlist URL
              </Label>
              <Input
                id="playlist-url"
                type="text"
                placeholder="https://www.youtube.com/playlist?list=..."
                value={playlistUrl}
                onChange={(e) => setPlaylistUrl(e.target.value)}
                className={`mt-2 ${compact ? "h-11" : "h-14"} text-base border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20`}
              />
            </div>

            <div>
              <Label htmlFor="playlist-format" className="text-sm font-medium text-foreground">
                Download Format
              </Label>
              <Select value={playlistFormat} onValueChange={(value: "mp4" | "mp3") => setPlaylistFormat(value)}>
                <SelectTrigger className={`mt-2 ${compact ? "h-11" : "h-14"} text-base border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20`}>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mp4">MP4 (Video)</SelectItem>
                  <SelectItem value="mp3">MP3 (Audio Only)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleFetchPlaylist}
              disabled={!playlistUrl || playlistLoading}
              className={`w-full ${compact ? "h-11" : "h-14"} text-base font-medium shadow-sm hover:shadow-md transition-all`}
            >
              {playlistLoading ? (
                <>
                  <LoadingSpinner className="mr-2" />
                  Loading playlist...
                </>
              ) : (
                <>
                  <List className="mr-2 h-5 w-5" />
                  Load Playlist
                </>
              )}
            </Button>

            {playlistError && (
              <div className="text-sm text-muted-foreground bg-muted/50 border border-border rounded-md p-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Error</p>
                    <p className="mt-1">{playlistError}</p>
                  </div>
                </div>
              </div>
            )}

            {playlistVideos.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 border border-border rounded-md">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">
                      {selectedVideos.size} of {playlistVideos.length} videos selected
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleSelectAll}
                    className="h-8"
                  >
                    {selectedVideos.size === playlistVideos.length ? 'Deselect All' : 'Select All'}
                  </Button>
                </div>

                <div className="max-h-96 overflow-y-auto space-y-2 border border-border rounded-md p-3">
                  {playlistVideos.map((video) => (
                    <div
                      key={video.id}
                      className="flex items-start gap-3 p-3 rounded-md border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => toggleVideoSelection(video.id)}
                    >
                      <Checkbox
                        checked={selectedVideos.has(video.id)}
                        onCheckedChange={() => toggleVideoSelection(video.id)}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-1"
                      />
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-24 h-16 object-cover rounded border flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground line-clamp-2">{video.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{video.author}</p>
                        <p className="text-xs text-muted-foreground">{video.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {playlistProgress.total > 0 && (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Downloading {playlistProgress.current} of {playlistProgress.total} videos...</span>
                        <span>{Math.round(playlistProgress.percentage)}%</span>
                      </div>
                      <Progress value={playlistProgress.percentage} className="h-3" />
                    </div>
                    {playlistProgress.currentVideoTitle && (
                      <div className="space-y-2 p-3 bg-muted/50 border border-border rounded-md">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-medium text-foreground">
                            {playlistProgress.currentVideoIndex > 0 && (
                              <>Video {playlistProgress.currentVideoIndex}: </>
                            )}
                            <span className="text-muted-foreground">
                              {playlistProgress.currentVideoTitle.length > 60
                                ? playlistProgress.currentVideoTitle.substring(0, 60) + '...'
                                : playlistProgress.currentVideoTitle}
                            </span>
                          </span>
                          <span className="text-primary font-medium">
                            {playlistProgress.videoProgress > 0 ? `${Math.round(playlistProgress.videoProgress)}%` : 'Starting...'}
                          </span>
                        </div>
                        {playlistProgress.videoProgress > 0 && (
                          <Progress value={playlistProgress.videoProgress} className="h-2" />
                        )}
                      </div>
                    )}
                  </div>
                )}

                <Button
                  onClick={handleDownloadSelected}
                  disabled={selectedVideos.size === 0 || playlistDownloading}
                  className="w-full h-12 text-base font-medium shadow-sm hover:shadow-md transition-all"
                >
                  {playlistDownloading ? (
                    <>
                      <LoadingSpinner className="mr-2" />
                      Downloading {selectedVideos.size} video{selectedVideos.size !== 1 ? 's' : ''}...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-5 w-5" />
                      Download Selected ({selectedVideos.size})
                    </>
                  )}
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </Card>

      {!compact && (
        <Card className="p-6 bg-card border border-border shadow-sm">
          <h3 className="text-base font-semibold text-foreground mb-3">Important Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <li>• <strong>Single Video:</strong> Download one video at a time in MP4 or MP3 format with progress tracking.</li>
            <li>• <strong>Playlist:</strong> Preview all videos, select which ones to download, and track progress for each video.</li>
            <li>• Works best with public videos; private or age-restricted content may not load.</li>
            <li>• Use downloads responsibly; you are responsible for permissions and compliance.</li>
            <li>• Only download your own content or content you are authorized to use.</li>
          </ul>
        </Card>
      )}
    </div>
  )
}

