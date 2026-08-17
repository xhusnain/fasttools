import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json(
        { error: 'YouTube URL is required' },
        { status: 400 }
      )
    }

    // Validate YouTube URL
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)[\w-]+/
    if (!youtubeRegex.test(url)) {
      return NextResponse.json(
        { error: 'Please provide a valid YouTube URL' },
        { status: 400 }
      )
    }

    // Extract video ID from URL
    let videoId = ''
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0] || ''
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || ''
    } else if (url.includes('youtube.com/shorts/')) {
      videoId = url.split('shorts/')[1]?.split('?')[0] || ''
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1]?.split('?')[0] || ''
    }

    if (!videoId) {
      return NextResponse.json(
        { error: 'Could not extract video ID from URL' },
        { status: 400 }
      )
    }

    // Fetch video metadata from YouTube
    try {
      const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate, br',
          'DNT': '1',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const html = await response.text()
      
      // Extract tags from the HTML using multiple methods
      const tags: string[] = []
      
      // Method 1: Look for keywords in meta tags
      const metaKeywordsMatch = html.match(/<meta name="keywords" content="([^"]+)"/i)
      if (metaKeywordsMatch) {
        const keywords = metaKeywordsMatch[1]
          .split(',')
          .map(k => k.trim())
          .filter(k => k.length > 0 && k.length < 100)
        tags.push(...keywords)
      }

      // Method 2: Look for video tags in JSON-LD structured data
      const jsonLdMatches = html.match(/<script type="application\/ld\+json"[^>]*>([^<]+)<\/script>/g)
      if (jsonLdMatches) {
        for (const match of jsonLdMatches) {
          try {
            const jsonContent = match.replace(/<script[^>]*>|<\/script>/g, '')
            const data = JSON.parse(jsonContent)
            if (data.keywords) {
              const keywords = Array.isArray(data.keywords) 
                ? data.keywords 
                : data.keywords.split(',').map((k: string) => k.trim())
              tags.push(...keywords.filter((k: string) => k.length > 0 && k.length < 100))
            }
          } catch (e) {
            // Continue if JSON parsing fails
          }
        }
      }

      // Method 3: Look for tags in video metadata (more specific patterns)
      const videoTagsPatterns = [
        /"keywords":\s*\[([^\]]+)\]/i,
        /"tags":\s*\[([^\]]+)\]/i,
        /keywords:\s*\[([^\]]+)\]/i,
        /tags:\s*\[([^\]]+)\]/i,
      ]

      for (const pattern of videoTagsPatterns) {
        const match = html.match(pattern)
        if (match) {
          const tagsString = match[1]
          const extractedTags = tagsString
            .split(',')
            .map(tag => tag.replace(/"/g, '').replace(/\\/g, '').trim())
            .filter(tag => tag.length > 0 && tag.length < 100)
          tags.push(...extractedTags)
        }
      }

      // Method 4: Look for tags in player response
      const playerResponseMatch = html.match(/"player_response":"([^"]+)"/)
      if (playerResponseMatch) {
        try {
          const playerResponse = JSON.parse(playerResponseMatch[1].replace(/\\/g, ''))
          if (playerResponse?.videoDetails?.keywords) {
            const keywords = Array.isArray(playerResponse.videoDetails.keywords)
              ? playerResponse.videoDetails.keywords
              : playerResponse.videoDetails.keywords.split(',').map((k: string) => k.trim())
            tags.push(...keywords.filter((k: string) => k.length > 0 && k.length < 100))
          }
        } catch (e) {
          // Continue if JSON parsing fails
        }
      }

      // Method 5: Look for tags in initial data
      const initialDataMatch = html.match(/var ytInitialData = ({.+?});/i)
      if (initialDataMatch) {
        try {
          const initialData = JSON.parse(initialDataMatch[1])
          // Navigate through the complex structure to find keywords.
          // Only treat a string/array as the tag list once we've descended
          // through a key that actually matched "keyword"/"tag" - otherwise
          // this would grab the first comma-containing string anywhere in
          // ytInitialData (e.g. a locale-formatted view/comment count like
          // "405,110,819 views"), splitting it into bogus numeric "tags".
          const findKeywords = (obj: any, matched: boolean): string[] => {
            if (matched && typeof obj === 'string' && obj.includes(',')) {
              return obj.split(',').map((k: string) => k.trim()).filter((k: string) => k.length > 0 && k.length < 100)
            }
            if (matched && Array.isArray(obj)) {
              return obj.filter((k: any) => typeof k === 'string' && k.length > 0 && k.length < 100)
            }
            if (typeof obj === 'object' && obj !== null) {
              for (const key in obj) {
                const isKeywordKey = key.toLowerCase().includes('keyword') || key.toLowerCase().includes('tag')
                const result = findKeywords(obj[key], matched || isKeywordKey)
                if (result.length > 0) return result
              }
            }
            return []
          }
          const foundKeywords = findKeywords(initialData, false)
          tags.push(...foundKeywords)
        } catch (e) {
          // Continue if JSON parsing fails
        }
      }

      // Remove duplicates and clean up tags
      const uniqueTags = [...new Set(tags)]
        .filter(tag => {
          // Filter out common non-tag content
          const lowerTag = tag.toLowerCase()
          return !lowerTag.includes('youtube') &&
                 !lowerTag.includes('video') &&
                 !lowerTag.includes('watch') &&
                 !lowerTag.includes('http') &&
                 !lowerTag.includes('www') &&
                 tag.length > 1 &&
                 tag.length < 100 &&
                 // Defensive filter: drop purely-numeric fragments and
                 // view/like/subscriber-count artifacts (e.g. "234" or
                 // "1,234 views") that can leak in from mis-parsed stats
                 !/^[\d,.\s]+$/.test(tag) &&
                 !/^[\d,.\s]+\s*(views?|likes?|subscribers?|comments?)$/i.test(tag)
        })
        .slice(0, 50) // Limit to 50 tags max

      if (uniqueTags.length === 0) {
        return NextResponse.json(
          { error: 'No tags found for this video. The video might be private, age-restricted, or have no tags.' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        videoId,
        tags: uniqueTags,
        count: uniqueTags.length
      })

    } catch (fetchError) {
      console.error('Error fetching YouTube video:', fetchError)
      return NextResponse.json(
        { error: 'Failed to fetch video metadata. The video might be private, restricted, or the URL might be invalid.' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('YouTube tag extraction error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
