import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { url, filename } = await request.json()

    if (!url || !filename) {
      return NextResponse.json(
        { error: 'URL and filename are required' },
        { status: 400 }
      )
    }

    console.log('Attempting to download:', url)

    // Try multiple approaches to fetch the file
    let response;
    
    try {
      // First attempt: Direct fetch with proper headers
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
          'Pragma': 'no-cache'
        },
        redirect: 'follow'
      })
    } catch (fetchError) {
      console.error('Direct fetch failed:', fetchError)
      
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
        console.error('Second fetch attempt failed:', secondError)
        return NextResponse.json(
          { error: 'Unable to fetch video file. The video may be private or restricted.' },
          { status: 403 }
        )
      }
    }

    if (!response.ok) {
      console.error('Response not ok:', response.status, response.statusText)
      return NextResponse.json(
        { error: `Failed to fetch file: ${response.status} ${response.statusText}` },
        { status: response.status }
      )
    }

    // Check if we got a valid response
    const contentType = response.headers.get('content-type') || ''
    if (!contentType.includes('video') && !contentType.includes('audio') && !contentType.includes('application/octet-stream')) {
      console.error('Invalid content type:', contentType)
      return NextResponse.json(
        { error: 'Invalid file type received. The URL may not be a direct video/audio file.' },
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
    headers.set('Content-Disposition', `attachment; filename="${filename}"`)
    headers.set('Content-Length', buffer.byteLength.toString())
    headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    headers.set('Pragma', 'no-cache')
    headers.set('Expires', '0')

    console.log('Successfully downloaded file:', filename, 'Size:', buffer.byteLength)

    return new NextResponse(buffer, {
      status: 200,
      headers,
    })

  } catch (error) {
    console.error('TikTok download file API error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
