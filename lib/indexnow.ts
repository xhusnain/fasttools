/**
 * IndexNow API Integration
 * 
 * This module handles:
 * - Extracting URLs from sitemaps
 * - Submitting URLs to IndexNow API
 * - Managing API key and key file
 */

const INDEXNOW_API_URL = 'https://api.indexnow.org/IndexNow'
const BASE_URL = 'https://www.fasttools.store'
const INDEXNOW_API_KEY = '977d14c55f1dcd71171724c3e6ae4adf'

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
      // According to IndexNow docs, keyLocation is optional if key file is at root: /{key}.txt
      // But we'll include it explicitly to be clear
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
      
      // Include keyLocation explicitly (IndexNow will verify the key file at this location)
      payload.keyLocation = config.keyLocation

      const response = await fetch(INDEXNOW_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      if (response.status === 200 || response.status === 202) {
        totalSubmitted += batch.length
        console.log(`✅ Successfully submitted ${batch.length} URLs to IndexNow (status: ${response.status})`)
      } else if (response.status === 400) {
        const error = `Bad request: Invalid format`
        errors.push(error)
        console.error(`❌ ${error}`)
      } else if (response.status === 403) {
        // Try to get more details from the response
        let errorDetails = 'Forbidden: API key not valid'
        try {
          const errorBody = await response.json()
          if (errorBody.message) {
            errorDetails = `Forbidden: ${errorBody.message}`
          }
        } catch {
          // Ignore JSON parsing errors
        }
        
        errors.push(errorDetails)
        console.error(`❌ ${errorDetails}`)
        console.error(`❌ Note: If you see "User is unauthorized to access the site", you may need to:`)
        console.error(`   1. Verify your site in Bing Webmaster Tools first`)
        console.error(`   2. Ensure the key file is accessible at: ${config.keyLocation}`)
        console.error(`   3. Wait a few minutes after deploying the key file for IndexNow to verify it`)
      } else if (response.status === 422) {
        const error = `Unprocessable Entity: URLs don't belong to host or key mismatch`
        errors.push(error)
        console.error(`❌ ${error}`)
      } else if (response.status === 429) {
        const error = `Too Many Requests: Rate limit exceeded`
        errors.push(error)
        console.error(`❌ ${error}`)
      } else {
        const error = `Unexpected status: ${response.status} ${response.statusText}`
        errors.push(error)
        console.error(`❌ ${error}`)
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
  const host = new URL(baseUrl).hostname
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
      console.error(`❌ Failed to submit URLs: ${result.message}`)
      if (result.message?.includes('Forbidden') || result.message?.includes('403') || result.message?.includes('unauthorized')) {
        console.error(`❌ This usually means:`)
        console.error(`   1. The site needs to be verified in Bing Webmaster Tools first`)
        console.error(`   2. The key file is not accessible at: ${config.keyLocation}`)
        console.error(`   3. The key in the file doesn't match the API key being sent`)
        console.error(`   4. IndexNow needs time to verify the key file after deployment`)
        console.error(`   `)
        console.error(`   To fix:`)
        console.error(`   - Go to https://www.bing.com/webmasters`)
        console.error(`   - Add and verify your site (www.fasttools.store)`)
        console.error(`   - Ensure the key file is accessible: ${config.keyLocation}`)
        console.error(`   - Wait a few minutes after verification before submitting URLs`)
      }
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

