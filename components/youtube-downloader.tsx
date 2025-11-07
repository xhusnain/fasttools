"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
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
  const [singleVideoProgress, setSingleVideoProgress] = useState(0)

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
    setSingleVideoProgress(0)
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

  // Single video download with progress
  const handleSingleVideoDownload = async () => {
    if (!result?.videoId || !result?.title) {
      setError("Please fetch video information first")
      return
    }

    setDownloadingStates(prev => ({ ...prev, [format === 'mp4' ? 'video' : 'audio']: true }))
    setError(null)
    setSingleVideoProgress(0)

    // Declare progress interval outside try block so it's accessible in catch
    let progressInterval: NodeJS.Timeout | null = null
    let isComplete = false

    try {
      // Generate download ID on frontend so we can start polling immediately
      const downloadId = `download_${Date.now()}_${Math.random().toString(36).substring(7)}`
      
      console.log('Frontend: Starting download with ID:', downloadId)
      
      // Start with initial progress
      setSingleVideoProgress(5)

      // Start polling for progress immediately
      
      progressInterval = setInterval(async () => {
        if (isComplete) {
          if (progressInterval) clearInterval(progressInterval)
          return
        }
        
        try {
          const progressResponse = await fetch(`/api/youtube-download-progress?id=${encodeURIComponent(downloadId)}`)
          if (progressResponse.ok) {
            const progressData = await progressResponse.json()
            if (progressData.progress !== undefined) {
              // Always update progress - React will handle re-rendering
              const newProgress = Math.max(0, Math.min(100, progressData.progress)) // Clamp between 0-100
              console.log('Progress update received:', newProgress + '%', 'Status:', progressData.status, 'Download ID:', downloadId)
              
              // Force update even if value is same (in case of React optimization)
              setSingleVideoProgress(prev => {
                if (prev !== newProgress) {
                  console.log('Updating progress from', prev + '%', 'to', newProgress + '%')
                  return newProgress
                }
                return prev // Return same value if unchanged
              })
              
              // Stop polling if complete or error
              if (progressData.status === 'complete' || progressData.status === 'error') {
                console.log('Download complete or error, stopping polling')
                isComplete = true
                if (progressInterval) clearInterval(progressInterval)
              }
            } else {
              console.log('Progress data missing progress field:', progressData)
            }
          } else {
            const errorText = await progressResponse.text().catch(() => '')
            console.log('Progress endpoint returned:', progressResponse.status, errorText)
          }
        } catch (e) {
          console.error('Progress polling error:', e)
          // Ignore progress polling errors but log them
        }
      }, 500) // Poll every 500ms

      const response = await fetch('/api/youtube-download-file', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: cleanYouTubeUrl(videoUrl),
          format: format,
          videoId: result.videoId,
          title: result.title,
          downloadId: downloadId // Send download ID to backend
        })
      })

      if (!response.ok) {
        isComplete = true
        if (progressInterval) clearInterval(progressInterval)
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || 'Download failed')
      }

      // Check if we can track progress via Content-Length
      const contentLength = response.headers.get('content-length')
      const total = contentLength ? parseInt(contentLength, 10) : 0

      // Track HTTP download progress (for the final file transfer)
      // This will be 90-100% since yt-dlp progress is 0-90%
      if (total > 0 && response.body) {
        const reader = response.body.getReader()
        const chunks: Uint8Array[] = []
        let receivedLength = 0

        while (true) {
          const { done, value } = await reader.read()
          
          if (done) break
          
          chunks.push(value)
          receivedLength += value.length
          
          // Update progress: 90% to 98% (yt-dlp already did 0-90%)
          const httpProgress = 90 + Math.floor((receivedLength / total) * 8)
          setSingleVideoProgress(Math.min(httpProgress, 98))
        }

        // Clear progress polling
        isComplete = true
        if (progressInterval) clearInterval(progressInterval)

        // Combine chunks into blob
        const blob = new Blob(chunks)
        setSingleVideoProgress(99)
        
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${result.title || 'youtube-video'}.${format}`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)

        setSingleVideoProgress(100)
      } else {
        // Fallback: download without progress tracking
        const blob = await response.blob()
        
        // Clear progress polling
        isComplete = true
        if (progressInterval) clearInterval(progressInterval)
        
        setSingleVideoProgress(99)
        
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${result.title || 'youtube-video'}.${format}`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)

        setSingleVideoProgress(100)
      }

      setResult(prev => prev ? { ...prev, downloadStarted: true } : null)
      
      // Reset downloading state immediately after successful download
      setDownloadingStates(prev => ({ ...prev, [format === 'mp4' ? 'video' : 'audio']: false }))
      
      setTimeout(() => {
        setSingleVideoProgress(0)
      }, 2000)
    } catch (e: any) {
      setError(e?.message || "Download failed. Please try again.")
      setSingleVideoProgress(0)
      // Make sure to clear any intervals
      if (progressInterval) clearInterval(progressInterval)
      // Reset downloading state on error too
      setDownloadingStates(prev => ({ ...prev, [format === 'mp4' ? 'video' : 'audio']: false }))
    } finally {
      // Ensure state is reset even if something unexpected happens
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

  // Download selected videos
  const handleDownloadSelected = async () => {
    if (selectedVideos.size === 0) {
      setPlaylistError("Please select at least one video to download")
      return
    }

    setPlaylistError(null)
    setPlaylistDownloading(true)
    
    // Get selected videos with their titles
    const selectedVideosList = playlistVideos.filter(v => selectedVideos.has(v.id))
    const videosToDownload = selectedVideosList.map(v => v.url)
    const videoTitles = selectedVideosList.map(v => v.title)
    const totalVideos = videosToDownload.length

    // Generate download ID for progress tracking
    const downloadId = `playlist_${Date.now()}_${Math.random().toString(36).substring(7)}`
    
    console.log('Frontend: Starting playlist download with ID:', downloadId, 'Total videos:', totalVideos)
    
    setPlaylistProgress({ 
      current: 0, 
      total: totalVideos, 
      percentage: 0,
      currentVideoTitle: '',
      currentVideoIndex: 0,
      videoProgress: 0
    })

    // Declare progress interval outside try block
    let progressInterval: NodeJS.Timeout | null = null
    let isComplete = false
    
    progressInterval = setInterval(async () => {
      if (isComplete) {
        if (progressInterval) clearInterval(progressInterval)
        return
      }
      
      try {
        const progressResponse = await fetch(`/api/youtube-download-progress?id=${encodeURIComponent(downloadId)}`)
        if (progressResponse.ok) {
          const progressData = await progressResponse.json()
          if (progressData.progress !== undefined) {
            const newProgress = Math.max(0, Math.min(100, progressData.progress))
            console.log('Playlist progress update:', newProgress + '%', 'Video:', progressData.currentVideoTitle, 'Video progress:', progressData.videoProgress + '%')
            
            setPlaylistProgress({
              current: progressData.currentVideoIndex || 0,
              total: progressData.totalVideos || totalVideos,
              percentage: newProgress,
              currentVideoTitle: progressData.currentVideoTitle || '',
              currentVideoIndex: progressData.currentVideoIndex || 0,
              videoProgress: progressData.videoProgress || 0
            })
            
            // Stop polling if complete or error
            if (progressData.status === 'complete' || progressData.status === 'error') {
              isComplete = true
              if (progressInterval) clearInterval(progressInterval)
            }
          }
        }
      } catch (e) {
        console.error('Playlist progress polling error:', e)
      }
    }, 500) // Poll every 500ms

    try {
      const response = await fetch('/api/youtube-download-selected', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videos: videosToDownload,
          format: playlistFormat,
          videoTitles: videoTitles,
          downloadId: downloadId
        })
      })

      if (!response.ok) {
        isComplete = true
        if (progressInterval) clearInterval(progressInterval)
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || 'Download failed')
      }

      const blob = await response.blob()
      isComplete = true
      if (progressInterval) clearInterval(progressInterval)
      
      setPlaylistProgress({ 
        current: totalVideos, 
        total: totalVideos, 
        percentage: 100,
        currentVideoTitle: '',
        currentVideoIndex: totalVideos,
        videoProgress: 100
      })
      
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      
      const contentType = response.headers.get('content-type') || ''
      const isZip = contentType.includes('application/zip')
      a.download = isZip ? `youtube-videos-${Date.now()}.zip` : `youtube-video.${playlistFormat}`
      
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

      setTimeout(() => {
        setPlaylistProgress({ 
          current: 0, 
          total: 0, 
          percentage: 0,
          currentVideoTitle: '',
          currentVideoIndex: 0,
          videoProgress: 0
        })
      }, 2000)

    } catch (e: any) {
      setPlaylistError(e?.message || "Download failed. Please try again.")
      setPlaylistProgress({ 
        current: 0, 
        total: 0, 
        percentage: 0,
        currentVideoTitle: '',
        currentVideoIndex: 0,
        videoProgress: 0
      })
      if (progressInterval) clearInterval(progressInterval)
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
                  {singleVideoProgress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Downloading...</span>
                        <span>{Math.round(singleVideoProgress)}%</span>
                      </div>
                      <Progress value={singleVideoProgress} className="h-2" />
                    </div>
                  )}
                  {result.downloadStarted && (
                    <div className="text-center p-3 bg-green-500/10 border border-green-500/20 rounded-md">
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">✅ Download started! Check your downloads folder.</p>
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

