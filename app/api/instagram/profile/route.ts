import { NextRequest, NextResponse } from 'next/server'
import {
  getRandomUserAgent,
  getCachedData,
  setCachedData
} from '@/lib/instagram-security'

const validateUsername = (username: string): boolean => {

  const usernameRegex = /^[a-zA-Z0-9._]{1,30}$/
  return usernameRegex.test(username) && username.length >= 1 && username.length <= 30
}

const fetchInstagramProfile = async (username: string) => {
  const cleanUsername = username.replace('@', '').trim().toLowerCase()

  if (!validateUsername(cleanUsername)) {
    throw new Error('Invalid username format')
  }

  const cacheKey = `instagram_profile_${cleanUsername}`
  const cachedData = getCachedData(cacheKey)
  if (cachedData) {
    return cachedData
  }

  const endpoints = [
    `https://www.instagram.com/${cleanUsername}/?__a=1&__d=dis`,
    `https://www.instagram.com/${cleanUsername}/`,
    `https://www.instagram.com/api/v1/users/web_profile_info/?username=${cleanUsername}`
  ]

  for (const url of endpoints) {
    try {

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': getRandomUserAgent(),
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,**;q=0.8',
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

        if (response.ok) {
          const html = await response.text()

          const scriptMatches = html.match(/<script[^>]*>window\._sharedData\s*=\s*({.+?});<\/script>/g)
          if (scriptMatches) {
            for (const match of scriptMatches) {
              try {
                const jsonMatch = match.match(/window\._sharedData\s*=\s*({.+?});/)
                if (jsonMatch) {
                  const jsonData = JSON.parse(jsonMatch[1])
                  const user = jsonData?.entry_data?.ProfilePage?.[0]?.graphql?.user

                  if (user && user.username === cleanUsername) {

                    let profilePicUrl = user.profile_pic_url_hd || user.profile_pic_url || `https://via.placeholder.com/400x400/6366f1/ffffff?text=${cleanUsername.charAt(0).toUpperCase()}`

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
              } catch (e) {}
            }
          }

          const additionalDataMatches = html.match(/<script[^>]*>window\.__additionalDataLoaded[^<]*<\/script>/g)
          if (additionalDataMatches) {
            for (const match of additionalDataMatches) {
              try {
                const jsonMatch = match.match(/window\.__additionalDataLoaded\('\/[^']+',\s*({.+?})\)/)
                if (jsonMatch) {
                  const jsonData = JSON.parse(jsonMatch[1])
                  const user = jsonData?.graphql?.user

                  if (user && user.username === cleanUsername) {

                    let profilePicUrl = user.profile_pic_url_hd || user.profile_pic_url || `https://via.placeholder.com/400x400/6366f1/ffffff?text=${cleanUsername.charAt(0).toUpperCase()}`

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
              } catch (e) {}
            }
          }

          const metaMatch = html.match(/<meta property="og:image" content="([^"]+)"/)
          let profilePicUrl = metaMatch ? metaMatch[1] : `https://via.placeholder.com/400x400/6366f1/ffffff?text=${cleanUsername.charAt(0).toUpperCase()}`

          if (profilePicUrl && profilePicUrl.includes('&amp;')) {
            profilePicUrl = profilePicUrl.replace(/&amp;/g, '&')
          }

          const titleMatch = html.match(/<title>([^<]+)</)
          let fullName = cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1)
          if (titleMatch) {
            const title = titleMatch[1]
            const nameMatch = title.match(/^([^(]+)/)
            if (nameMatch) {
              fullName = nameMatch[1].trim()
            }
          }

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

          const verifiedMatch = html.match(/"is_verified":true/)
          const isVerified = !!verifiedMatch

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

          setCachedData(cacheKey, profileData, 300000)

          return profileData
        }
      } catch (error) {
        continue
      }
    }
  } catch (error) {
    console.error('HTML parsing method failed:', error)
  }

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

const parseHtmlResponse = (html: string, username: string) => {
  try {

    const scriptMatch = html.match(/window\._sharedData\s*=\s*({.+?});/)
    if (scriptMatch) {
      const data = JSON.parse(scriptMatch[1])
      return data
    }

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
    console.error('Instagram API Error:', error)

    if (error instanceof Error) {

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
