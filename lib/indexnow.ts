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
      const payload = {
        host: config.host,
        key: config.apiKey,
        keyLocation: config.keyLocation,
        urlList: batch,
      }

      const response = await fetch(INDEXNOW_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      if (response.status === 200) {
        totalSubmitted += batch.length
        console.log(`✅ Successfully submitted ${batch.length} URLs to IndexNow`)
      } else if (response.status === 400) {
        const error = `Bad request: Invalid format`
        errors.push(error)
        console.error(`❌ ${error}`)
      } else if (response.status === 403) {
        const error = `Forbidden: API key not valid (key not found or key mismatch)`
        errors.push(error)
        console.error(`❌ ${error}`)
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
 * Main function to submit all sitemap URLs to IndexNow
 */
export async function submitSitemapsToIndexNow(): Promise<IndexNowResponse> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || BASE_URL
    const config = getIndexNowConfig()
    
    console.log(`🚀 Starting IndexNow submission for ${baseUrl}`)
    console.log(`🔑 Using API key: ${config.apiKey.substring(0, 8)}...`)
    console.log(`📍 Key location: ${config.keyLocation}`)
    
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

