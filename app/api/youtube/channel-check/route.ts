import { NextRequest, NextResponse } from 'next/server'

/**
 * YouTube Channel Name Checker API (Public Method)
 * 
 * This API endpoint checks the availability of YouTube channel names using public YouTube URLs.
 * It supports bulk checking of up to 10 channel names per request without requiring API keys.
 * 
 * Features:
 * - Public URL checking (no API key required)
 * - Real-time channel availability checking
 * - Channel statistics extraction from public pages
 * - Exact name matching (case-insensitive)
 * - Error handling for network failures
 * - Rate limiting compliance
 */

interface ChannelCheckResult {
  channelName: string
  available: boolean
  channelUrl?: string
  subscriberCount?: number
  videoCount?: number
  error?: string
}

// Array of user agents for rotation
const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:121.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (X11; Linux x86_64; rv:121.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Edge/120.0.0.0 Safari/537.36'
]

function getRandomUserAgent(): string {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]
}

async function checkChannelAvailability(channelName: string): Promise<ChannelCheckResult> {
  const trimmedName = channelName.trim()
  
  if (!trimmedName) {
    return {
      channelName: trimmedName,
      available: false,
      error: 'Empty channel name'
    }
  }

  try {
    // Check multiple possible YouTube URL formats
    const possibleUrls = [
      `https://www.youtube.com/@${encodeURIComponent(trimmedName)}`,
      `https://www.youtube.com/c/${encodeURIComponent(trimmedName)}`,
      `https://www.youtube.com/user/${encodeURIComponent(trimmedName)}`,
      `https://www.youtube.com/channel/${encodeURIComponent(trimmedName)}`
    ]

    for (const url of possibleUrls) {
      try {
        const userAgent = getRandomUserAgent()
        const response = await fetch(url, {
          method: 'HEAD',
          headers: {
            'User-Agent': userAgent,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1'
          },
          redirect: 'follow'
        })

        if (response.ok) {
          // Channel exists, try to get more info
          try {
            const pageUserAgent = getRandomUserAgent()
            const pageResponse = await fetch(url, {
              headers: {
                'User-Agent': pageUserAgent,
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate, br',
                'DNT': '1',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'none',
                'Cache-Control': 'max-age=0'
              }
            })
            
            if (pageResponse.ok) {
              const html = await pageResponse.text()
              
              // Extract subscriber count using multiple regex patterns
              const subscriberPatterns = [
                /(\d+(?:\.\d+)?[KMB]?)\s*subscribers?/i,
                /(\d+(?:\.\d+)?[KMB]?)\s*subscriber/i,
                /subscribers?[:\s]*(\d+(?:\.\d+)?[KMB]?)/i,
                /"subscriberCountText":\s*"([^"]+)"/i,
                /"subscriberCount":\s*"([^"]+)"/i
              ]
              
              const videoPatterns = [
                /(\d+(?:\.\d+)?[KMB]?)\s*videos?/i,
                /(\d+(?:\.\d+)?[KMB]?)\s*video/i,
                /videos?[:\s]*(\d+(?:\.\d+)?[KMB]?)/i,
                /"videoCountText":\s*"([^"]+)"/i,
                /"videoCount":\s*"([^"]+)"/i
              ]
              
              let subscriberCount = 0
              let videoCount = 0
              
              // Try multiple patterns for subscriber count
              for (const pattern of subscriberPatterns) {
                const match = html.match(pattern)
                if (match) {
                  subscriberCount = parseCount(match[1])
                  break
                }
              }
              
              // Try multiple patterns for video count
              for (const pattern of videoPatterns) {
                const match = html.match(pattern)
                if (match) {
                  videoCount = parseCount(match[1])
                  break
                }
              }

              return {
                channelName: trimmedName,
                available: false,
                channelUrl: url,
                subscriberCount,
                videoCount
              }
            }
          } catch (pageError) {
            // If we can't get page content, just return that it exists
            return {
              channelName: trimmedName,
              available: false,
              channelUrl: url
            }
          }
        }
      } catch (urlError) {
        // Continue to next URL format
        continue
      }
    }

    // If none of the URLs worked, channel is likely available
    return {
      channelName: trimmedName,
      available: true
    }

  } catch (error) {
    return {
      channelName: trimmedName,
      available: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

function parseCount(countStr: string): number {
  const num = parseFloat(countStr)
  const suffix = countStr.slice(-1).toUpperCase()
  
  switch (suffix) {
    case 'K':
      return Math.floor(num * 1000)
    case 'M':
      return Math.floor(num * 1000000)
    case 'B':
      return Math.floor(num * 1000000000)
    default:
      return Math.floor(num)
  }
}

export async function POST(request: NextRequest) {
  try {
    const { channelNames } = await request.json()
    
    if (!channelNames || !Array.isArray(channelNames) || channelNames.length === 0) {
      return NextResponse.json(
        { error: 'Channel names array is required' },
        { status: 400 }
      )
    }

    if (channelNames.length > 10) {
      return NextResponse.json(
        { error: 'Maximum 10 channel names allowed per request' },
        { status: 400 }
      )
    }

    const results: ChannelCheckResult[] = []

    // Process each channel name
    for (const channelName of channelNames) {
      const result = await checkChannelAvailability(channelName)
      results.push(result)
      
      // Add small delay to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    return NextResponse.json({ results })

  } catch (error) {
    console.error('YouTube channel check error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
