import {NextRequest, NextResponse} from 'next/server'
import {getCachedData, setCachedData, getRandomUserAgent} from '@/lib/instagram-security'

const validateUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9._]{1,30}$/
  return usernameRegex.test(username) && username.length >= 1 && username.length <= 30
}

const getUserAgent = (): string => {
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  ]
  return userAgents[Math.floor(Math.random() * userAgents.length)]
}

const parseInstagramHTML = (html: string, username: string) => {
  const result: any = {
    username: username,
    fullName: '',
    biography: '',
    followers: 0,
    following: 0,
    posts: 0,
    isVerified: false,
    profilePicUrl: null,
    isPrivate: false,
    userId: null,
  }

  const ogImageMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i)
  if (ogImageMatch) {
    result.profilePicUrl = ogImageMatch[1]
      .replace(/&amp;/g, '&')
      .replace(/\\u0026/g, '&')
      .replace(/\\\//g, '/')
  }

  const ogTitleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']+)["']/i)
  if (ogTitleMatch) {
    const title = ogTitleMatch[1]
    result.fullName = title
      .replace(/&#064;/g, '@')
      .replace(/&amp;/g, '&')
      .split('(')[0]
      .split('•')[0]
      .split('|')[0]
      .trim()
    
    if (result.fullName.toLowerCase() === 'instagram' || result.fullName.toLowerCase() === username.toLowerCase()) {
      result.fullName = username.charAt(0).toUpperCase() + username.slice(1)
    }
  }

  const ogDescMatch = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i)
  if (ogDescMatch) {
    result.biography = ogDescMatch[1]
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim()
  }

  const jsonLdMatch = html.match(/<script\s+type=["']application\/ld\+json["']\s*>([\s\S]*?)<\/script>/i)
  if (jsonLdMatch) {
    try {
      const jsonLd = JSON.parse(jsonLdMatch[1])
      if (jsonLd['@type'] === 'Person' || jsonLd['@type'] === 'ProfilePage') {
        if (jsonLd.name && !result.fullName) {
          result.fullName = jsonLd.name
        }
        if (jsonLd.image && !result.profilePicUrl) {
          result.profilePicUrl = jsonLd.image
        }
        if (jsonLd.description && !result.biography) {
          result.biography = jsonLd.description
        }
      }
    } catch (e) {
    }
  }

  const sharedDataPatterns = [
    /window\._sharedData\s*=\s*({.+?});/s,
    /window\.__additionalDataLoaded\('[^']+',\s*({.+?})\)/s,
    /<script[^>]*>window\._sharedData\s*=\s*({.+?});<\/script>/s,
  ]

  for (const pattern of sharedDataPatterns) {
    const match = html.match(pattern)
    if (match) {
      try {
        const jsonData = JSON.parse(match[1])
        
        const userPaths = [
          jsonData?.entry_data?.ProfilePage?.[0]?.graphql?.user,
          jsonData?.graphql?.user,
          jsonData?.user,
          jsonData?.data?.user,
          jsonData?.ProfilePage?.[0]?.graphql?.user,
          jsonData?.require?.[0]?.[3]?.[1]?.graphql?.user,
        ]

        for (const user of userPaths) {
          if (user && (user.username === username || user.username)) {
            if (!result.profilePicUrl) {
              result.profilePicUrl = user.profile_pic_url_hd || 
                                    user.profile_pic_url || 
                                    user.profile_pic_url_large ||
                                    null
            }

            if (!result.fullName) {
              result.fullName = user.full_name || user.fullName || ''
            }

            if (!result.biography) {
              result.biography = user.biography || user.bio || ''
            }

            result.followers = user.edge_followed_by?.count || 
                              user.follower_count || 
                              user.followers || 
                              0
            result.following = user.edge_follow?.count || 
                             user.following_count || 
                             user.following || 
                             0
            result.posts = user.edge_owner_to_timeline_media?.count || 
                          user.media_count || 
                          user.posts || 
                          0

            result.isVerified = user.is_verified || user.isVerified || false
            result.isPrivate = user.is_private || user.isPrivate || false
            result.userId = user.id || user.pk || user.userId || null

            break
          }
        }
      } catch (e) {
      }
    }
  }

  const scriptJsonMatches = html.matchAll(/<script[^>]*type=["']application\/json["'][^>]*>([\s\S]*?)<\/script>/gi)
  for (const match of scriptJsonMatches) {
    try {
      const jsonData = JSON.parse(match[1])
      
      const findUserInObject = (obj: any): any => {
        if (!obj || typeof obj !== 'object') return null
        
        if (obj.username === username || (obj.username && obj.profile_pic_url)) {
          return obj
        }
        
        for (const key in obj) {
          if (key === 'user' && obj[key]?.username) {
            return obj[key]
          }
          const found = findUserInObject(obj[key])
          if (found) return found
        }
        
        return null
      }
      
      const user = findUserInObject(jsonData)
      if (user) {
        if (!result.profilePicUrl) {
          result.profilePicUrl = user.profile_pic_url_hd || user.profile_pic_url || null
        }
        if (!result.fullName) {
          result.fullName = user.full_name || ''
        }
        if (!result.biography) {
          result.biography = user.biography || ''
        }
        result.followers = user.edge_followed_by?.count || user.follower_count || result.followers
        result.following = user.edge_follow?.count || user.following_count || result.following
        result.posts = user.edge_owner_to_timeline_media?.count || user.media_count || result.posts
        result.isVerified = user.is_verified || result.isVerified
        result.isPrivate = user.is_private || result.isPrivate
        result.userId = user.id || user.pk || result.userId
      }
    } catch (e) {
    }
  }

  if (result.followers === 0) {
    const followerPatterns = [
      /"edge_followed_by":\{"count":(\d+)\}/,
      /"follower_count":(\d+)/,
      /"followers":\s*(\d+)/,
      /(\d+)\s*followers/i,
    ]
    for (const pattern of followerPatterns) {
      const match = html.match(pattern)
      if (match) {
        result.followers = parseInt(match[1])
        break
      }
    }
  }

  if (result.following === 0) {
    const followingPatterns = [
      /"edge_follow":\{"count":(\d+)\}/,
      /"following_count":(\d+)/,
      /"following":\s*(\d+)/,
    ]
    for (const pattern of followingPatterns) {
      const match = html.match(pattern)
      if (match) {
        result.following = parseInt(match[1])
        break
      }
    }
  }

  if (result.posts === 0) {
    const postsPatterns = [
      /"edge_owner_to_timeline_media":\{"count":(\d+)\}/,
      /"media_count":(\d+)/,
      /"posts":\s*(\d+)/,
    ]
    for (const pattern of postsPatterns) {
      const match = html.match(pattern)
      if (match) {
        result.posts = parseInt(match[1])
        break
      }
    }
  }

  if (result.profilePicUrl) {
    result.profilePicUrl = result.profilePicUrl
      .replace(/\\u0026/g, '&')
      .replace(/\\\//g, '/')
      .replace(/&amp;/g, '&')
    
    const isDefaultPic = result.profilePicUrl.includes('YW5vbnltb3VzX3Byb2ZpbGVfcGlj') || 
                         result.profilePicUrl.includes('anonymous_profile_pic') ||
                         result.profilePicUrl.includes('anonymous')
    
    if (isDefaultPic) {
      result.isDefaultProfilePic = true
    }
  }

  if (!result.fullName) {
    result.fullName = username.charAt(0).toUpperCase() + username.slice(1)
  }

  return result
}

const extractUsernameFromInput = (input: string): string => {
  if (!input) return ''
  
  const trimmed = input.trim()
  
  const urlPatterns = [
    /instagram\.com\/([a-zA-Z0-9._]+)/,
    /instagram\.com\/p\/([a-zA-Z0-9._]+)/,
    /^https?:\/\/(www\.)?instagram\.com\/([a-zA-Z0-9._]+)/,
  ]
  
  for (const pattern of urlPatterns) {
    const match = trimmed.match(pattern)
    if (match) {
      const extracted = (match[1] || match[2] || match[0]).split('?')[0].split('/').pop()
      if (extracted) {
        return extracted.toLowerCase()
      }
    }
  }
  
  return trimmed.replace('@', '').trim().toLowerCase()
}

const fetchInstagramProfile = async (username: string) => {
  const cleanUsername = extractUsernameFromInput(username)

  if (!validateUsername(cleanUsername)) {
    throw new Error('Invalid username format')
  }

  const cacheKey = `instagram_profile_${cleanUsername}`
  const cachedData = getCachedData(cacheKey)
  if (cachedData) {
    return cachedData
  }

  const instagramUrl = `https://www.instagram.com/${cleanUsername}/`
  
  const headers = {
    'User-Agent': getUserAgent(),
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'DNT': '1',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Cache-Control': 'max-age=0',
    'Referer': 'https://www.google.com/',
    'Origin': 'https://www.instagram.com',
  }

  try {
    const response = await fetch(instagramUrl, {
      method: 'GET',
      headers: headers,
      signal: AbortSignal.timeout(20000),
      redirect: 'follow',
    })

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found')
      }
      if (response.status === 403) {
        throw new Error('Access forbidden - Instagram may be blocking requests')
      }
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const html = await response.text()
    
    if (!html || html.length < 1000) {
      throw new Error('Invalid response from Instagram')
    }

    if (html.includes('Log in to Instagram') || html.includes('login') && html.includes('password')) {
      throw new Error('Instagram requires login - cannot access profile')
    }

    const profileData = parseInstagramHTML(html, cleanUsername)

    try {
      const graphqlUrl = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${cleanUsername}`
      const graphqlResponse = await fetch(graphqlUrl, {
        method: 'GET',
        headers: {
          'User-Agent': getUserAgent(),
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-IG-App-ID': '936619743392459',
          'X-Instagram-AJAX': '1',
          'Referer': `https://www.instagram.com/${cleanUsername}/`,
        },
        signal: AbortSignal.timeout(10000),
      })

      if (graphqlResponse.ok) {
        const graphqlData = await graphqlResponse.json()
        const user = graphqlData?.data?.user
        if (user) {
          const newProfilePicUrl = user.profile_pic_url_hd || user.profile_pic_url || profileData.profilePicUrl
          profileData.profilePicUrl = newProfilePicUrl
          
          if (newProfilePicUrl) {
            const isDefaultPic = newProfilePicUrl.includes('YW5vbnltb3VzX3Byb2ZpbGVfcGlj') || 
                                 newProfilePicUrl.includes('anonymous_profile_pic') ||
                                 newProfilePicUrl.includes('anonymous')
            profileData.isDefaultProfilePic = isDefaultPic
          }
          
          profileData.fullName = user.full_name || profileData.fullName
          profileData.biography = user.biography || profileData.biography
          
          profileData.followers = user.edge_followed_by?.count || user.follower_count || profileData.followers || 0
          profileData.following = user.edge_follow?.count || user.following_count || profileData.following || 0
          profileData.posts = user.edge_owner_to_timeline_media?.count || user.media_count || profileData.posts || 0
          
          profileData.isVerified = user.is_verified !== undefined ? user.is_verified : profileData.isVerified
          profileData.isPrivate = user.is_private !== undefined ? user.is_private : profileData.isPrivate
          profileData.userId = user.id || user.pk || profileData.userId
        }
      }
    } catch (graphqlError) {
      if (profileData.biography && (profileData.followers === 0 || profileData.following === 0 || profileData.posts === 0)) {
        const bio = profileData.biography
        
        const followersMatch = bio.match(/([\d.]+)\s*([KM])?\s*Followers/i)
        if (followersMatch && profileData.followers === 0) {
          let followers = parseFloat(followersMatch[1])
          if (followersMatch[2] === 'K') followers *= 1000
          if (followersMatch[2] === 'M') followers *= 1000000
          profileData.followers = Math.floor(followers)
        }
        
        const followingMatch = bio.match(/([\d,]+)\s*Following/i)
        if (followingMatch && profileData.following === 0) {
          profileData.following = parseInt(followingMatch[1].replace(/,/g, '')) || 0
        }
        
        const postsMatch = bio.match(/([\d,]+)\s*Posts/i)
        if (postsMatch && profileData.posts === 0) {
          profileData.posts = parseInt(postsMatch[1].replace(/,/g, '')) || 0
        }
      }
    }

    if (!profileData.profilePicUrl || profileData.profilePicUrl.includes('placeholder') || profileData.profilePicUrl.includes('__a=1')) {
      const imageUrlMatches = html.match(/https?:\/\/[^"'\s]+scontent[^"'\s]+\.(jpg|jpeg|png|webp)/gi)
      if (imageUrlMatches && imageUrlMatches.length > 0) {
        const profilePicCandidate = imageUrlMatches.find(url => 
          url.includes('profile') || 
          url.match(/s\d+x\d+/)
        )
        if (profilePicCandidate) {
          profileData.profilePicUrl = profilePicCandidate
        }
      }
    }

    if (profileData.profilePicUrl && !profileData.profilePicUrl.includes('placeholder')) {
      setCachedData(cacheKey, profileData, 300000)
      return profileData
    } else {
      profileData.profilePicUrl = `https://via.placeholder.com/400x400/6366f1/ffffff?text=${cleanUsername.charAt(0).toUpperCase()}`
      setCachedData(cacheKey, profileData, 60000)
      return profileData
    }

  } catch (error: any) {
    const fallbackData = {
      username: cleanUsername,
      fullName: cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1),
      biography: '',
      followers: 0,
      following: 0,
      posts: 0,
      isVerified: false,
      profilePicUrl: `https://via.placeholder.com/400x400/6366f1/ffffff?text=${cleanUsername.charAt(0).toUpperCase()}`,
      isPrivate: false,
      userId: null,
    }

    setCachedData(cacheKey, fallbackData, 60000)
    return fallbackData
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username')

    if (!username) {
      return NextResponse.json(
        { error: 'Username parameter is required' },
        { status: 400 }
      )
    }

    const profileData = await fetchInstagramProfile(username)

    return NextResponse.json({
      success: true,
      data: profileData
    })

  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('not found') || error.message.includes('User not found')) {
        return NextResponse.json(
          { error: 'User not found. Please check the username and try again.' },
          { status: 404 }
        )
      }

      if (error.message.includes('Invalid username')) {
        return NextResponse.json(
          { error: 'Invalid username format. Please check and try again.' },
          { status: 400 }
        )
      }

      if (error.message.includes('login') || error.message.includes('forbidden')) {
        return NextResponse.json(
          { error: 'Instagram is blocking access. Please try again later.' },
          { status: 403 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Failed to fetch Instagram profile. Please try again.' },
      { status: 500 }
    )
  }
}

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
