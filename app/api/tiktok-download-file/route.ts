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

    // Sanitize filename to remove Unicode characters and special characters
    const sanitizedFilename = filename
      .replace(/[^\x00-\x7F]/g, '') // Remove non-ASCII characters
      .replace(/[<>:"/\\|?*]/g, '') // Remove invalid filename characters
      .replace(/\s+/g, '_') // Replace spaces with underscores
      .replace(/_+/g, '_') // Replace multiple underscores with single
      .replace(/^_|_$/g, '') // Remove leading/trailing underscores
      .substring(0, 100) // Limit length
      || 'tiktok_download' // Fallback if empty

    // Validate URL
    try {
      const urlObj = new URL(url)
      
      // Check if this looks like a TikTok page URL instead of a direct media URL
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

    // Try multiple approaches to fetch the file
    let response;
    
    try {
      // First attempt: Direct fetch with TikTok-specific headers
      response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Accept-Encoding': 'gzip, deflate, br',
          'Referer': 'https://www.tiktok.com/',
          'Origin': 'https://www.tiktok.com',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'cross-site',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Range': 'bytes=0-'
        },
        redirect: 'follow'
      })
    } catch (fetchError) {
      // Second attempt: Try with different headers
      try {
        response = await fetch(url, {
          method: 'GET',
          headers: {
            'User-Agent': 'TikTok 26.1.0 rv:261017 (iPhone; iOS 14.4; en_US) Cronet',
            'Accept': '*/*',
            'Referer': 'https://www.tiktok.com/'
          }
        })
      } catch (secondError) {
        // Third attempt: Minimal headers
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

    // Check if we got a valid response
    const contentType = response.headers.get('content-type') || ''
    if (!contentType.includes('video') && !contentType.includes('audio') && !contentType.includes('image') && !contentType.includes('application/octet-stream')) {
      return NextResponse.json(
        { error: 'Invalid file type received. The URL may not be a direct video/audio/image file.' },
        { status: 400 }
      )
    }

    // Get the file content as buffer
    const buffer = await response.arrayBuffer()
    
    if (buffer.byteLength === 0) {
      return NextResponse.json(
        { error: 'Empty file received' },
        { status: 400 }
      )
    }
    
    // Set appropriate headers for download
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
