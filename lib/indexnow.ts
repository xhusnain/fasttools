/**
 * IndexNow API Integration
 * 
 * This module handles:
 * - Extracting URLs from sitemaps
 * - Submitting URLs to IndexNow API
 * - Managing API key and key file
 */

const INDEXNOW_API_URL = 'https://api.indexnow.org/indexnow'
const BASE_URL = 'https://www.fasttools.store'
const INDEXNOW_API_KEY = 'cf40da0a93bd49748db36add6b8d12bc'

export interface IndexNowConfig {
  apiKey: string
  keyLocation: string
  host: string
}

export interface IndexNowResponse {
  success: boolean
  statusCode?: number
  message?: string
  submittedUrls?: number
}

/**
 * Extract URLs from XML sitemap content
 */
export function extractUrlsFromSitemap(xmlContent: string): string[] {
  const urls: string[] = []
  
  // Match all <loc>...</loc> tags
  const locRegex = /<loc>(.*?)<\/loc>/gi
  let match
  
  while ((match = locRegex.exec(xmlContent)) !== null) {
    const url = match[1].trim()
    if (url && url.startsWith('http')) {
      urls.push(url)
    }
  }
  
  return urls
}

/**
 * Extract image URLs from image sitemap
 */
export function extractImageUrlsFromSitemap(xmlContent: string): string[] {
  const urls: string[] = []
  
  // Match all <image:loc>...</image:loc> tags
  const imageLocRegex = /<image:loc>(.*?)<\/image:loc>/gi
  let match
  
  while ((match = imageLocRegex.exec(xmlContent)) !== null) {
    const url = match[1].trim()
    if (url && url.startsWith('http')) {
      urls.push(url)
    }
  }
  
  return urls
}

/**
 * Fetch sitemap and extract URLs
 */
export async function fetchSitemapUrls(sitemapUrl: string): Promise<string[]> {
  try {
    const response = await fetch(sitemapUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; IndexNow-Bot/1.0)',
      },
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`)
    }
    
    const xmlContent = await response.text()
    return extractUrlsFromSitemap(xmlContent)
  } catch (error) {
    console.error(`Error fetching sitemap ${sitemapUrl}:`, error)
    throw error
  }
}

/**
 * Fetch image sitemap and extract URLs (both page URLs and image URLs)
 */
export async function fetchImageSitemapUrls(sitemapUrl: string): Promise<{ pageUrls: string[], imageUrls: string[] }> {
  try {
    const response = await fetch(sitemapUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; IndexNow-Bot/1.0)',
      },
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch image sitemap: ${response.status} ${response.statusText}`)
    }
    
    const xmlContent = await response.text()
    const pageUrls = extractUrlsFromSitemap(xmlContent)
    const imageUrls = extractImageUrlsFromSitemap(xmlContent)
    
    return { pageUrls, imageUrls }
  } catch (error) {
    console.error(`Error fetching image sitemap ${sitemapUrl}:`, error)
    throw error
  }
}

/**
 * Submit URLs to IndexNow API
 * IndexNow accepts up to 10,000 URLs per request
 */
export async function submitToIndexNow(
  urls: string[],
  config: IndexNowConfig
): Promise<IndexNowResponse> {
  if (urls.length === 0) {
    return {
      success: false,
      message: 'No URLs to submit',
    }
  }

  // IndexNow accepts up to 10,000 URLs per request
  const BATCH_SIZE = 10000
  const batches: string[][] = []
  
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    batches.push(urls.slice(i, i + BATCH_SIZE))
  }

  let totalSubmitted = 0
  const errors: string[] = []

  for (const batch of batches) {
    try {
      // Build payload according to IndexNow documentation
      // keyLocation is optional when key file is at root: /{key}.txt
      const payload: {
        host: string
        key: string
        keyLocation?: string
        urlList: string[]
      } = {
        host: config.host,
        key: config.apiKey,
        urlList: batch,
      }
      
      // Debug: Log the exact payload (for troubleshooting)
      console.log(`📤 Payload:`, JSON.stringify({
        host: payload.host,
        key: payload.key.substring(0, 8) + '...',
        keyLength: payload.key.length,
        urlCount: payload.urlList.length,
        firstUrl: payload.urlList[0],
      }))

      const response = await fetch(INDEXNOW_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      // Read response body once (can only be read once)
      let responseText = ''
      let responseBody: any = null
      try {
        responseText = await response.text()
        if (responseText) {
          try {
            responseBody = JSON.parse(responseText)
          } catch {
            // Not JSON, use text as-is
          }
        }
      } catch {
        // Ignore reading errors
      }

      if (response.status === 200 || response.status === 202) {
        totalSubmitted += batch.length
        console.log(`✅ Successfully submitted ${batch.length} URLs to IndexNow (status: ${response.status})`)
      } else {
        // Extract error message from response
        let errorMsg = ''
        let errorCode = ''
        
        if (responseBody) {
          if (responseBody.code) {
            errorCode = responseBody.code
          }
          if (responseBody.message) {
            errorMsg = responseBody.message
          }
        }
        
        if (!errorMsg && responseText) {
          errorMsg = responseText
        }
        
        // Default error messages based on status code
        if (!errorMsg) {
          switch (response.status) {
            case 400:
              errorMsg = 'Bad request: Invalid format'
              break
            case 403:
              errorMsg = 'Forbidden: API key not valid'
              break
            case 422:
              errorMsg = "Unprocessable Entity: URLs don't belong to host or key mismatch"
              break
            case 429:
              errorMsg = 'Too Many Requests: Rate limit exceeded'
              break
            default:
              errorMsg = `Unexpected status: ${response.status} ${response.statusText}`
          }
        }
        
        errors.push(errorMsg)
        console.error(`❌ IndexNow API Error (${response.status}):`)
        if (errorCode) {
          console.error(`   Code: ${errorCode}`)
        }
        console.error(`   Message: ${errorMsg}`)
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error'
      errors.push(errorMsg)
      console.error(`❌ Error submitting batch to IndexNow:`, errorMsg)
    }
  }

  if (errors.length > 0 && totalSubmitted === 0) {
    return {
      success: false,
      message: errors.join('; '),
      submittedUrls: 0,
    }
  }

  return {
    success: totalSubmitted > 0,
    message: errors.length > 0 ? errors.join('; ') : 'All URLs submitted successfully',
    submittedUrls: totalSubmitted,
  }
}

/**
 * Get all URLs from both sitemaps
 */
export async function getAllSitemapUrls(baseUrl: string = BASE_URL): Promise<string[]> {
  const sitemapUrl = `${baseUrl}/sitemap.xml`
  const imageSitemapUrl = `${baseUrl}/image-sitemap.xml`
  
  const allUrls = new Set<string>()
  
  try {
    // Fetch regular sitemap
    console.log(`📥 Fetching sitemap from ${sitemapUrl}`)
    const sitemapUrls = await fetchSitemapUrls(sitemapUrl)
    sitemapUrls.forEach(url => allUrls.add(url))
    console.log(`✅ Found ${sitemapUrls.length} URLs in sitemap.xml`)
  } catch (error) {
    console.error(`❌ Failed to fetch regular sitemap:`, error)
  }
  
  try {
    // Fetch image sitemap (both page URLs and image URLs)
    console.log(`📥 Fetching image sitemap from ${imageSitemapUrl}`)
    const { pageUrls, imageUrls } = await fetchImageSitemapUrls(imageSitemapUrl)
    pageUrls.forEach(url => allUrls.add(url))
    imageUrls.forEach(url => allUrls.add(url))
    console.log(`✅ Found ${pageUrls.length} page URLs and ${imageUrls.length} image URLs in image-sitemap.xml`)
  } catch (error) {
    console.error(`❌ Failed to fetch image sitemap:`, error)
  }
  
  return Array.from(allUrls)
}

/**
 * Create IndexNow configuration
 */
export function getIndexNowConfig(): IndexNowConfig {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || BASE_URL
  const urlObj = new URL(baseUrl)
  // Use hostname without www for IndexNow (IndexNow prefers non-www hostname)
  let host = urlObj.hostname
  if (host.startsWith('www.')) {
    host = host.substring(4) // Remove 'www.' prefix
  }
  const keyLocation = `${baseUrl}/${INDEXNOW_API_KEY}.txt`
  
  return {
    apiKey: INDEXNOW_API_KEY,
    keyLocation,
    host,
  }
}

/**
 * Verify that the key file is accessible
 */
async function verifyKeyFile(keyLocation: string): Promise<boolean> {
  try {
    const response = await fetch(keyLocation, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; IndexNow-Verifier/1.0)',
      },
    })
    
    if (!response.ok) {
      console.warn(`⚠️  Key file not accessible at ${keyLocation} (status: ${response.status})`)
      return false
    }
    
    const content = await response.text()
    const expectedKey = INDEXNOW_API_KEY.trim()
    const actualKey = content.trim()
    
    if (actualKey !== expectedKey) {
      console.warn(`⚠️  Key file content mismatch. Expected: ${expectedKey}, Got: ${actualKey}`)
      return false
    }
    
    console.log(`✅ Key file verified at ${keyLocation}`)
    return true
  } catch (error) {
    console.warn(`⚠️  Could not verify key file: ${error instanceof Error ? error.message : 'Unknown error'}`)
    return false
  }
}

/**
 * Main function to submit all sitemap URLs to IndexNow
 */
export async function submitSitemapsToIndexNow(): Promise<IndexNowResponse> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || BASE_URL
    const config = getIndexNowConfig()
    
    console.log(`🚀 Starting IndexNow submission for ${baseUrl}`)
    console.log(`🔑 Using API key: ${config.apiKey.substring(0, 8)}...`)
    console.log(`📍 Key location: ${config.keyLocation}`)
    console.log(`🌐 Host (for IndexNow): ${config.host}`)
    
    // Verify key file is accessible (optional check, but helpful for debugging)
    const keyFileAccessible = await verifyKeyFile(config.keyLocation)
    if (!keyFileAccessible) {
      console.warn(`⚠️  Warning: Key file may not be accessible. IndexNow may reject the submission.`)
      console.warn(`⚠️  Make sure the site is deployed and the key file is accessible at: ${config.keyLocation}`)
    }
    
    // Get all URLs from sitemaps
    const urls = await getAllSitemapUrls(baseUrl)
    console.log(`📋 Total unique URLs to submit: ${urls.length}`)
    
    if (urls.length === 0) {
      return {
        success: false,
        message: 'No URLs found in sitemaps',
      }
    }
    
    // Submit to IndexNow
    const result = await submitToIndexNow(urls, config)
    
    if (result.success) {
      console.log(`✅ Successfully submitted ${result.submittedUrls} URLs to IndexNow`)
    } else {
      console.error(`❌ Failed to submit URLs to IndexNow`)
      console.error(`❌ Error: ${result.message}`)
    }
    
    return result
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error'
    console.error(`❌ Error in submitSitemapsToIndexNow:`, errorMsg)
    return {
      success: false,
      message: errorMsg,
    }
  }
}

