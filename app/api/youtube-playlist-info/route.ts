import { NextRequest, NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export const maxDuration = 60
export const dynamic = 'force-dynamic'

interface PlaylistVideo {
  id: string
  title: string
  thumbnail: string
  duration: string
  author: string
  url: string
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json(
        { success: false, message: 'URL is required' },
        { status: 400 }
      )
    }

    const isPlaylistPage = url.includes('playlist?list=') && !url.includes('watch?v=')
    if (!isPlaylistPage) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid YouTube playlist URL' },
        { status: 400 }
      )
    }

    const projectRoot = process.cwd()
    const binPath = path.join(projectRoot, 'bin')
    const currentPath = process.env.PATH || ''
    process.env.PATH = `${binPath}:${currentPath}`

    const ytDlpPath = path.join(binPath, 'yt-dlp')

    try {

      const command = `"${ytDlpPath}" --flat-playlist --dump-json --no-warnings --no-check-certificate "${url}"`

      const { stdout, stderr } = await execAsync(command, {
        maxBuffer: 10 * 1024 * 1024,
        timeout: 60000
      })

      if (stderr && !stderr.includes('WARNING')) {
        console.error('yt-dlp stderr:', stderr)
      }

      const lines = stdout.trim().split('\n').filter(line => line.trim())
      const videos: PlaylistVideo[] = []

      for (const line of lines) {
        try {
          const videoData = JSON.parse(line)

          videos.push({
            id: videoData.id || videoData.url?.split('v=')[1]?.split('&')[0] || '',
            title: videoData.title || 'Untitled',
            thumbnail: videoData.thumbnail || `https://img.youtube.com/vi/${videoData.id}/default.jpg`,
            duration: videoData.duration_string || videoData.duration || 'Unknown',
            author: videoData.channel || videoData.uploader || 'Unknown',
            url: videoData.url || `https://www.youtube.com/watch?v=${videoData.id}`
          })
        } catch (parseError) {
          console.error('Error parsing video data:', parseError)
          continue
        }
      }

      if (videos.length === 0) {
        return NextResponse.json(
          {
            success: false,
            message: 'No videos found in playlist. The playlist may be empty, private, or unavailable.'
          },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        videos,
        count: videos.length
      })

    } catch (execError: any) {
      console.error('yt-dlp exec error:', execError)

      let errorMessage = 'Failed to fetch playlist information.'

      if (execError.code === 'ETIMEDOUT' || execError.signal === 'SIGTERM') {
        errorMessage = 'Request timed out. The playlist may be too large. Please try a smaller playlist.'
      } else if (execError.message?.includes('yt-dlp')) {
        errorMessage = 'Download tool error. Please ensure yt-dlp is properly installed.'
      }

      return NextResponse.json(
        {
          success: false,
          message: errorMessage,
          error: execError.message
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Playlist info API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error. Please try again later.'
      },
      { status: 500 }
    )
  }
}

