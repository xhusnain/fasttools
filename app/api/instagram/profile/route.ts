import { NextRequest, NextResponse } from 'next/server'
import { 
  getRandomUserAgent,
  getCachedData,
  setCachedData
} from '@/lib/instagram-security'

// Validate username
const validateUsername = (username: string): boolean => {
  // Instagram username validation
  const usernameRegex = /^[a-zA-Z0-9._]{1,30}$/
  return usernameRegex.test(username) && username.length >= 1 && username.length <= 30
}

// Fetch Instagram profile data with multiple fallback methods
const fetchInstagramProfile = async (username: string) => {
  const cleanUsername = username.replace('@', '').trim().toLowerCase()
  
  if (!validateUsername(cleanUsername)) {
    throw new Error('Invalid username format')
  }

  // Check cache first
  const cacheKey = `instagram_profile_${cleanUsername}`
  const cachedData = getCachedData(cacheKey)
  if (cachedData) {
    console.log('Returning cached data for:', cleanUsername)
    return cachedData
  }

  // Try multiple endpoints and methods
  const endpoints = [
    `https://www.instagram.com/${cleanUsername}/?__a=1&__d=dis`,
    `https://www.instagram.com/${cleanUsername}/`,
    `https://www.instagram.com/api/v1/users/web_profile_info/?username=${cleanUsername}`
  ]

  for (const url of endpoints) {
    try {
      console.log(`Trying endpoint: ${url}`)
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': getRandomUserAgent(),
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Accept-Encoding': 'gzip, deflate, br',
          'DNT': '1',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Referer': 'https://www.instagram.com/',
        },
        redirect: 'follow',
        timeout: 15000, // 15 second timeout
      })

      console.log(`Response status: ${response.status}`)

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found or account is private')
        }
        continue // Try next endpoint
      }

      const contentType = response.headers.get('content-type')
      console.log(`Content type: ${contentType}`)

      let data
      if (contentType?.includes('application/json')) {
        data = await response.json()
      } else {
        // Parse HTML response for profile data
        const html = await response.text()
        data = parseHtmlResponse(html, cleanUsername)
      }

      // Extract profile information
      const user = data?.graphql?.user || data?.user || data
      if (!user) {
        continue // Try next endpoint
      }

      // Check if account is private
      if (user.is_private) {
        throw new Error('Account is private')
      }

      // Extract profile picture URLs
      let profilePicUrl = user.profile_pic_url_hd || user.profile_pic_url || user.profile_pic_url_large
      if (!profilePicUrl) {
        continue // Try next endpoint
      }

      // Decode HTML entities in the URL
      if (profilePicUrl && profilePicUrl.includes('&amp;')) {
        profilePicUrl = profilePicUrl.replace(/&amp;/g, '&')
      }


      const profileData = {
        username: user.username || cleanUsername,
        fullName: user.full_name || user.fullName || '',
        biography: user.biography || user.bio || '',
        followers: user.edge_followed_by?.count || user.followers_count || 0,
        following: user.edge_follow?.count || user.following_count || 0,
        posts: user.edge_owner_to_timeline_media?.count || user.media_count || 0,
        isVerified: user.is_verified || false,
        profilePicUrl: profilePicUrl,
        isPrivate: user.is_private || false,
      }
      
      // Cache the result for 5 minutes
      setCachedData(cacheKey, profileData, 300000)
      
      return profileData

    } catch (error) {
      console.error(`Error with endpoint ${url}:`, error)
      continue // Try next endpoint
    }
  }

  // If all endpoints fail, try to extract data from Instagram's public page
  console.log('All endpoints failed, trying HTML parsing method')
  
  try {
    // Try different user agents and approaches
    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Instagram 85.0.0.21.100 Android (24/7.0; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226743)',
    ]

    for (const userAgent of userAgents) {
      try {
        console.log(`Trying with user agent: ${userAgent.substring(0, 50)}...`)
        
        const htmlResponse = await fetch(`https://www.instagram.com/${cleanUsername}/`, {
          method: 'GET',
          headers: {
            'User-Agent': userAgent,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Referer': 'https://www.instagram.com/',
          },
          timeout: 15000,
        })

        if (htmlResponse.ok) {
          const html = await htmlResponse.text()
          console.log(`HTML response received (${html.length} chars), parsing...`)
          
          // Look for the actual profile data in various script tags
          const scriptMatches = html.match(/<script[^>]*>window\._sharedData\s*=\s*({.+?});<\/script>/g)
          if (scriptMatches) {
            for (const match of scriptMatches) {
              try {
                const jsonMatch = match.match(/window\._sharedData\s*=\s*({.+?});/)
                if (jsonMatch) {
                  const jsonData = JSON.parse(jsonMatch[1])
                  const user = jsonData?.entry_data?.ProfilePage?.[0]?.graphql?.user
                  
                  if (user && user.username === cleanUsername) {
                    console.log('Found user data in _sharedData:', {
                      username: user.username,
                      fullName: user.full_name,
                      followers: user.edge_followed_by?.count,
                      posts: user.edge_owner_to_timeline_media?.count
                    })
                    
                    let profilePicUrl = user.profile_pic_url_hd || user.profile_pic_url || `https://via.placeholder.com/400x400/6366f1/ffffff?text=${cleanUsername.charAt(0).toUpperCase()}`
                    
                    // Decode HTML entities in the URL
                    if (profilePicUrl && profilePicUrl.includes('&amp;')) {
                      profilePicUrl = profilePicUrl.replace(/&amp;/g, '&')
                    }
                    
                    return {
                      username: user.username || cleanUsername,
                      fullName: user.full_name || '',
                      biography: user.biography || '',
                      followers: user.edge_followed_by?.count || 0,
                      following: user.edge_follow?.count || 0,
                      posts: user.edge_owner_to_timeline_media?.count || 0,
                      isVerified: user.is_verified || false,
                      profilePicUrl: profilePicUrl,
                      isPrivate: user.is_private || false,
                    }
                  }
                }
              } catch (e) {
                console.log('Error parsing _sharedData:', e)
              }
            }
          }
          
          // Try alternative script tag patterns
          const additionalDataMatches = html.match(/<script[^>]*>window\.__additionalDataLoaded[^<]*<\/script>/g)
          if (additionalDataMatches) {
            for (const match of additionalDataMatches) {
              try {
                const jsonMatch = match.match(/window\.__additionalDataLoaded\('\/[^']+',\s*({.+?})\)/)
                if (jsonMatch) {
                  const jsonData = JSON.parse(jsonMatch[1])
                  const user = jsonData?.graphql?.user
                  
                  if (user && user.username === cleanUsername) {
                    console.log('Found user data in __additionalDataLoaded')
                    
                    let profilePicUrl = user.profile_pic_url_hd || user.profile_pic_url || `https://via.placeholder.com/400x400/6366f1/ffffff?text=${cleanUsername.charAt(0).toUpperCase()}`
                    
                    // Decode HTML entities in the URL
                    if (profilePicUrl && profilePicUrl.includes('&amp;')) {
                      profilePicUrl = profilePicUrl.replace(/&amp;/g, '&')
                    }
                    
                    return {
                      username: user.username || cleanUsername,
                      fullName: user.full_name || '',
                      biography: user.biography || '',
                      followers: user.edge_followed_by?.count || 0,
                      following: user.edge_follow?.count || 0,
                      posts: user.edge_owner_to_timeline_media?.count || 0,
                      isVerified: user.is_verified || false,
                      profilePicUrl: profilePicUrl,
                      isPrivate: user.is_private || false,
                    }
                  }
                }
              } catch (e) {
                console.log('Error parsing __additionalDataLoaded:', e)
              }
            }
          }
          
          // Extract profile picture from meta tags as fallback
          const metaMatch = html.match(/<meta property="og:image" content="([^"]+)"/)
          let profilePicUrl = metaMatch ? metaMatch[1] : `https://via.placeholder.com/400x400/6366f1/ffffff?text=${cleanUsername.charAt(0).toUpperCase()}`
          
          // Decode HTML entities in the URL
          if (profilePicUrl && profilePicUrl.includes('&amp;')) {
            profilePicUrl = profilePicUrl.replace(/&amp;/g, '&')
            console.log('Decoded profile picture URL:', profilePicUrl.substring(0, 100) + '...')
          }
          
          // Try to extract more data from the HTML using regex patterns
          const titleMatch = html.match(/<title>([^<]+)</)
          let fullName = cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1)
          if (titleMatch) {
            const title = titleMatch[1]
            const nameMatch = title.match(/^([^(]+)/)
            if (nameMatch) {
              fullName = nameMatch[1].trim()
            }
          }
          
          // Look for follower count in the HTML using various patterns
          const followersPatterns = [
            /"edge_followed_by":\{"count":(\d+)\}/,
            /"follower_count":(\d+)/,
            /"followers":\s*(\d+)/,
            /(\d+)\s*followers/i
          ]
          
          let followers = 0
          for (const pattern of followersPatterns) {
            const match = html.match(pattern)
            if (match) {
              followers = parseInt(match[1])
              break
            }
          }
          
          const followingPatterns = [
            /"edge_follow":\{"count":(\d+)\}/,
            /"following_count":(\d+)/,
            /"following":\s*(\d+)/,
            /(\d+)\s*following/i
          ]
          
          let following = 0
          for (const pattern of followingPatterns) {
            const match = html.match(pattern)
            if (match) {
              following = parseInt(match[1])
              break
            }
          }
          
          const postsPatterns = [
            /"edge_owner_to_timeline_media":\{"count":(\d+)\}/,
            /"media_count":(\d+)/,
            /"posts":\s*(\d+)/,
            /(\d+)\s*posts/i
          ]
          
          let posts = 0
          for (const pattern of postsPatterns) {
            const match = html.match(pattern)
            if (match) {
              posts = parseInt(match[1])
              break
            }
          }
          
          // Look for verification status
          const verifiedMatch = html.match(/"is_verified":true/)
          const isVerified = !!verifiedMatch
          
          // Look for biography
          const bioPatterns = [
            /"biography":"([^"]+)"/,
            /"bio":"([^"]+)"/,
            /<meta name="description" content="([^"]+)"/,
          ]
          
          let biography = 'Profile data extracted from Instagram page'
          for (const pattern of bioPatterns) {
            const match = html.match(pattern)
            if (match && match[1] && match[1].length > 0) {
              biography = match[1]
              break
            }
          }
          
          console.log('Successfully extracted data from HTML:', {
            username: cleanUsername,
            fullName,
            followers,
            following,
            posts,
            isVerified,
            biography: biography.substring(0, 100) + (biography.length > 100 ? '...' : ''),
            profilePicUrl: profilePicUrl.includes('placeholder') ? 'placeholder' : 'real'
          })
          
          const profileData = {
            username: cleanUsername,
            fullName: fullName,
            biography: biography,
            followers: followers,
            following: following,
            posts: posts,
            isVerified: isVerified,
            profilePicUrl: profilePicUrl,
            isPrivate: false,
          }
          
          // Cache the result for 5 minutes
          setCachedData(cacheKey, profileData, 300000)
          
          return profileData
        }
      } catch (error) {
        console.log(`Error with user agent ${userAgent.substring(0, 30)}:`, error)
        continue
      }
    }
  } catch (error) {
    console.error('HTML parsing method failed:', error)
  }
  
  // Final fallback - use a placeholder with the username initial
  console.log('All methods failed, using final fallback')
  const profilePicUrl = `https://via.placeholder.com/400x400/6366f1/ffffff?text=${cleanUsername.charAt(0).toUpperCase()}`
  
  return {
    username: cleanUsername,
    fullName: cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1),
    biography: 'Profile data unavailable - Instagram API restricted',
    followers: 0,
    following: 0,
    posts: 0,
    isVerified: false,
    profilePicUrl: profilePicUrl,
    isPrivate: false,
  }
}

// Parse HTML response to extract profile data
const parseHtmlResponse = (html: string, username: string) => {
  try {
    // Look for JSON data in script tags
    const scriptMatch = html.match(/window\._sharedData\s*=\s*({.+?});/)
    if (scriptMatch) {
      const data = JSON.parse(scriptMatch[1])
      return data
    }

    // Look for additional data patterns
    const additionalDataMatch = html.match(/window\.__additionalDataLoaded\('\/',\s*({.+?})\)/)
    if (additionalDataMatch) {
      const data = JSON.parse(additionalDataMatch[1])
      return data
    }

    return null
  } catch (error) {
    console.error('Error parsing HTML response:', error)
    return null
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get username from query parameters
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username')

    console.log(`Instagram API request for username: ${username}`)

    if (!username) {
      console.log('No username provided')
      return NextResponse.json(
        { error: 'Username parameter is required' },
        { status: 400 }
      )
    }

    // Fetch Instagram profile
    console.log('Starting Instagram profile fetch...')
    const profileData = await fetchInstagramProfile(username)
    console.log('Profile fetch successful:', profileData.username)

    // Return profile data
    return NextResponse.json({
      success: true,
      data: profileData
    })

  } catch (error) {
    console.error('Instagram API Error:', error)
    
    // Return appropriate error response
    if (error instanceof Error) {
      console.log('Error message:', error.message)
      
      if (error.message.includes('not found') || error.message.includes('private')) {
        return NextResponse.json(
          { error: error.message },
          { status: 404 }
        )
      }
      

      if (error.message.includes('Invalid username')) {
        return NextResponse.json(
          { error: 'Invalid username format. Please check and try again.' },
          { status: 400 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to fetch Instagram profile. Please try again.' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
