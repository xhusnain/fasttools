import { NextRequest, NextResponse } from 'next/server'

export const maxDuration = 600
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get('url')
    const filename = searchParams.get('filename') || 'video.mp4'

    if (!url) {
      return NextResponse.json(
        { success: false, message: 'URL is required' },
        { status: 400 }
      )
    }

    if (!url.includes('googlevideo.com') && !url.includes('youtube.com')) {
      return NextResponse.json(
        { success: false, message: 'Invalid URL source' },
        { status: 400 }
      )
    }

    const isHLS = url.includes('manifest.googlevideo.com') || url.includes('.m3u8')

    if (isHLS) {
      return NextResponse.json(
        {
          success: false,
          message: 'This video uses HLS format which requires server-side processing.'
        },
        { status: 400 }
      )
    }

    const videoResponse = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': '**',
        'Referer': 'https://www.youtube.com/',
        'Origin': 'https://www.youtube.com'
      },
      redirect: 'follow'
    })

    if (!videoResponse.ok && videoResponse.status !== 206) {
      console.error('Failed to fetch video:', videoResponse.status, videoResponse.statusText)

      if (videoResponse.status === 416) {

        const retryResponse = await fetch(url, {
          method: 'GET',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        })

        if (retryResponse.ok || retryResponse.status === 206) {
          return createVideoResponse(retryResponse, filename || 'video.mp4')
        }
      }

      return NextResponse.json(
        { success: false, message: `Failed to fetch video: ${videoResponse.statusText}` },
        { status: videoResponse.status }
      )
    }

    return createVideoResponse(videoResponse, filename || 'video.mp4')

  } catch (error: any) {
    console.error('Proxy download error (POST):', error)
    return NextResponse.json(
      {
        success: false,
        message: error?.message || 'Internal server error. Please try again later.'
      },
      { status: 500 }
    )
  }
}

function createVideoResponse(videoResponse: Response, filename: string): NextResponse {

  let contentType = videoResponse.headers.get('content-type') || 'application/octet-stream'
  if (filename) {
    if (filename.endsWith('.mp4')) {
      contentType = 'video/mp4'
    } else if (filename.endsWith('.mp3')) {
      contentType = 'audio/mpeg'
    } else if (filename.endsWith('.m4a')) {
      contentType = 'audio/mp4'
    } else if (filename.endsWith('.webm')) {
      contentType = filename.includes('audio') ? 'audio/webm' : 'video/webm'
    }
  }

  const headers = new Headers({
    'Content-Type': contentType,
    'Content-Disposition': `attachment; filename="${filename}"`,
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  })

  const contentLength = videoResponse.headers.get('content-length')
  if (contentLength) {
    headers.set('Content-Length', contentLength)
  }

  const status = videoResponse.status === 206 ? 206 : 200

  return new NextResponse(videoResponse.body, {
    status,
    headers
  })
}
