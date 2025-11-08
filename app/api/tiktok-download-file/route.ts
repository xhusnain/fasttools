import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    let requestBody
    try {
      requestBody = await request.json()
    } catch (jsonError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    const { url, filename } = requestBody

    if (!url || !filename) {
      return NextResponse.json(
        { error: 'URL and filename are required' },
        { status: 400 }
      )
    }

    const sanitizedFilename = filename
      .replace(/[^\x00-\x7F]/g, '')
      .replace(/[<>:"/\\|?*]/g, '') // Remove invalid filename characters
.replace(/\s+/g, '_')
.replace(/_+/g, '_')
.replace(/^_|_$/g, '')
.substring(0, 100)
|| 'tiktok_download'

    try {
      const urlObj = new URL(url)

      if (urlObj.hostname.includes('tiktok.com') && !urlObj.pathname.includes('.')) {
        return NextResponse.json(
          { error: 'This appears to be a TikTok page URL, not a direct media URL. Please use the TikTok downloader to get the direct media URL first.' },
          { status: 400 }
        )
      }
    } catch (urlError) {
      return NextResponse.json(
        { error: 'Invalid URL provided' },
        { status: 400 }
      )
    }

    let response;

    try {

      response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': '**',
            'Referer': 'https://www.tiktok.com/'
          }
        })
      } catch (secondError) {

        try {
          response = await fetch(url, {
            method: 'GET',
            headers: {
              'User-Agent': 'Mozilla/5.0 (compatible; TikTokDownloader/1.0)',
              'Accept': '*/*'
            }
          })
        } catch (thirdError) {
          return NextResponse.json(
            { error: 'Unable to fetch file. The content may be private, restricted, or the URL may be invalid.' },
            { status: 403 }
          )
        }
      }
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch file: ${response.status} ${response.statusText}` },
        { status: response.status }
      )
    }

    const contentType = response.headers.get('content-type') || ''
    if (!contentType.includes('video') && !contentType.includes('audio') && !contentType.includes('image') && !contentType.includes('application/octet-stream')) {
      return NextResponse.json(
        { error: 'Invalid file type received. The URL may not be a direct video/audio/image file.' },
        { status: 400 }
      )
    }

    const buffer = await response.arrayBuffer()

    if (buffer.byteLength === 0) {
      return NextResponse.json(
        { error: 'Empty file received' },
        { status: 400 }
      )
    }

    const headers = new Headers()
    headers.set('Content-Type', contentType || 'application/octet-stream')
    headers.set('Content-Disposition', `attachment; filename="${sanitizedFilename}"`)
    headers.set('Content-Length', buffer.byteLength.toString())
    headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    headers.set('Pragma', 'no-cache')
    headers.set('Expires', '0')

    return new NextResponse(buffer, {
      status: 200,
      headers,
    })

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Internal server error. Please try again later.'

    try {
      return NextResponse.json(
        {
          error: errorMessage,
          details: error instanceof Error ? error.stack : String(error),
          timestamp: new Date().toISOString()
        },
        { status: 500 }
      )
    } catch (jsonError) {
      return new Response('Internal server error', { status: 500 })
    }
  }
}
