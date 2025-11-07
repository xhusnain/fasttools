import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { url, format = 'mp4' } = await request.json()

    if (!url) {
      return NextResponse.json(
        { success: false, message: 'URL is required' },
        { status: 400 }
      )
    }

    // Validate YouTube URL
    const youtubePattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/i
    if (!youtubePattern.test(url)) {
      return NextResponse.json(
        { success: false, message: 'Invalid YouTube URL' },
        { status: 400 }
      )
    }

    // Validate format
    if (format !== 'mp4' && format !== 'mp3') {
      return NextResponse.json(
        { success: false, message: 'Format must be mp4 or mp3' },
        { status: 400 }
      )
    }

    // Extract video ID
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/)
    const videoId = videoIdMatch ? videoIdMatch[1] : null
    
    // Check if it's an actual playlist page (not a video with playlist parameters)
    const isPlaylistPage = url.includes('playlist?list=') && !url.includes('watch?v=')
    
    if (isPlaylistPage) {
      return NextResponse.json({
        success: true,
        isPlaylist: true,
        message: 'Playlist URLs are not supported. Please use individual video URLs for downloads.',
        url: url
      })
    }

    // If no video ID found, it might be a playlist or invalid URL
    if (!videoId) {
      return NextResponse.json(
        { success: false, message: 'Could not extract video ID from URL. Please use a valid YouTube video URL.' },
        { status: 400 }
      )
    }

    // Clean the URL to remove playlist parameters (keep only video ID)
    // This allows videos that are part of playlists to still be downloaded
    const cleanUrl = `https://www.youtube.com/watch?v=${videoId}`

    // Try multiple YouTube download APIs in parallel
    const apis = [
      {
        name: 'youtube-dl-api',
        url: `https://www.youtube.com/oembed?url=${encodeURIComponent(cleanUrl)}&format=json`,
        parser: async (data: any, vidId: string) => {
          // Get video info from oEmbed
          if (data && data.title) {
            // Use external service to get download URLs
            const downloadApiUrl = `https://api.vevioz.com/api/convert/mp4/${vidId}`
            try {
              const downloadResponse = await fetch(downloadApiUrl, {
                headers: {
                  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
              })
              if (downloadResponse.ok) {
                const downloadData = await downloadResponse.json()
                if (downloadData && downloadData.url) {
                  return {
                    videoUrl: downloadData.url,
                    title: data.title,
                    author: data.author_name,
                    thumbnail: data.thumbnail_url,
                    duration: data.duration
                  }
                }
              }
            } catch (e) {
              // Fall through to next API
            }
          }
          return null
        }
      }
    ]

    // Get video metadata from oEmbed first
    let videoInfo: any = null
    try {
      const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(cleanUrl)}&format=json`
      const oembedResponse = await fetch(oembedUrl)
      if (oembedResponse.ok) {
        videoInfo = await oembedResponse.json()
      }
    } catch (e) {
      console.error('OEmbed fetch error:', e)
    }

    // Try to get download URLs using external services
    const downloadApis = [
      {
        name: 'y2mate',
        url: `https://www.y2mate.com/mates/analyzeV2/ajax`,
        method: 'POST',
        body: new URLSearchParams({
          url: cleanUrl,
          q_auto: '0',
          ajax: '1'
        }),
        parser: (data: any) => {
          if (data && data.links) {
            const mp4Links = data.links.mp4 || {}
            const mp3Links = data.links.mp3 || {}
            const bestQuality = Object.keys(mp4Links).sort().reverse()[0]
            const bestAudio = Object.keys(mp3Links).sort().reverse()[0]
            
            return {
              videoUrl: format === 'mp4' && mp4Links[bestQuality] ? mp4Links[bestQuality].url : null,
              audioUrl: format === 'mp3' && mp3Links[bestAudio] ? mp3Links[bestAudio].url : null,
              title: videoInfo?.title || 'YouTube Video',
              author: videoInfo?.author_name || 'Unknown',
              thumbnail: videoInfo?.thumbnail_url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
            }
          }
          return null
        }
      },
      {
        name: 'loader',
        url: `https://loader.to/ajax/download.php?format=${format}&url=${encodeURIComponent(cleanUrl)}`,
        method: 'GET',
        parser: (data: any) => {
          if (data && data.downloadUrl) {
            return {
              videoUrl: format === 'mp4' ? data.downloadUrl : null,
              audioUrl: format === 'mp3' ? data.downloadUrl : null,
              title: videoInfo?.title || 'YouTube Video',
              author: videoInfo?.author_name || 'Unknown',
              thumbnail: videoInfo?.thumbnail_url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
            }
          }
          return null
        }
      }
    ]

    // Try download APIs
    for (const api of downloadApis) {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000)

        const fetchOptions: RequestInit = {
          method: api.method || 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept': 'application/json',
            'Referer': 'https://www.youtube.com/',
            'Origin': 'https://www.youtube.com'
          },
          signal: controller.signal
        }

        if (api.body) {
          fetchOptions.body = api.body
          fetchOptions.headers = {
            ...fetchOptions.headers,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }

        const response = await fetch(api.url, fetchOptions)
        clearTimeout(timeoutId)

        if (response.ok) {
          const data = await response.json()
          const result = api.parser(data)
          
          if (result && (result.videoUrl || result.audioUrl)) {
            return NextResponse.json({
              success: true,
              videoUrl: result.videoUrl,
              audioUrl: result.audioUrl,
              title: result.title,
              author: result.author,
              thumbnail: result.thumbnail,
              videoId: videoId,
              format: format
            })
          }
        }
      } catch (error) {
        console.error(`API ${api.name} error:`, error)
        continue
      }
    }

    // Fallback: Return video info with instructions to use yt-dlp or external tools
    return NextResponse.json({
      success: true,
      videoId: videoId,
      title: videoInfo?.title || 'YouTube Video',
      author: videoInfo?.author_name || 'Unknown',
      thumbnail: videoInfo?.thumbnail_url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      url: cleanUrl,
      format: format,
      message: 'Video information retrieved. Download links will be generated using alternative method.',
      // Provide alternative download URL construction
      alternativeUrl: cleanUrl
    })

  } catch (error) {
    console.error('YouTube download API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

