/**
 * IndexNow Submission Script
 * 
 * This script:
 * - Fetches URLs from sitemaps (sitemap.xml and image-sitemap.xml)
 * - Submits all URLs to IndexNow API
 * 
 * Usage:
 * - Run after build: npm run postbuild
 * - Run manually: node scripts/submit-indexnow.js
 * - Schedule via cron: 0 0 * * * node /path/to/scripts/submit-indexnow.js
 */

const https = require('https')
const http = require('http')

const INDEXNOW_API_URL = 'https://api.indexnow.org/IndexNow'
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.fasttools.store'
const INDEXNOW_API_KEY = '977d14c55f1dcd71171724c3e6ae4adf'

const host = new URL(BASE_URL).hostname
const keyLocation = `${BASE_URL}/${INDEXNOW_API_KEY}.txt`

/**
 * Extract URLs from XML sitemap content
 */
function extractUrlsFromSitemap(xmlContent) {
  const urls = []
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
function extractImageUrlsFromSitemap(xmlContent) {
  const urls = []
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
 * Fetch URL content
 */
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    
    client.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url}: ${res.statusCode} ${res.statusMessage}`))
        return
      }
      
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      
      res.on('end', () => {
        resolve(data)
      })
    }).on('error', (error) => {
      reject(error)
    })
  })
}

/**
 * Fetch sitemap and extract URLs
 */
async function fetchSitemapUrls(sitemapUrl) {
  try {
    console.log(`📥 Fetching sitemap from ${sitemapUrl}`)
    const xmlContent = await fetchUrl(sitemapUrl)
    const urls = extractUrlsFromSitemap(xmlContent)
    console.log(`✅ Found ${urls.length} URLs in sitemap`)
    return urls
  } catch (error) {
    console.error(`❌ Failed to fetch sitemap ${sitemapUrl}:`, error.message)
    return []
  }
}

/**
 * Fetch image sitemap and extract URLs
 */
async function fetchImageSitemapUrls(sitemapUrl) {
  try {
    console.log(`📥 Fetching image sitemap from ${sitemapUrl}`)
    const xmlContent = await fetchUrl(sitemapUrl)
    const pageUrls = extractUrlsFromSitemap(xmlContent)
    const imageUrls = extractImageUrlsFromSitemap(xmlContent)
    console.log(`✅ Found ${pageUrls.length} page URLs and ${imageUrls.length} image URLs in image sitemap`)
    return { pageUrls, imageUrls }
  } catch (error) {
    console.error(`❌ Failed to fetch image sitemap ${sitemapUrl}:`, error.message)
    return { pageUrls: [], imageUrls: [] }
  }
}

/**
 * Submit URLs to IndexNow API
 */
function submitToIndexNow(urls) {
  return new Promise((resolve, reject) => {
    if (urls.length === 0) {
      resolve({ success: false, message: 'No URLs to submit' })
      return
    }

    // IndexNow accepts up to 10,000 URLs per request
    const BATCH_SIZE = 10000
    const batches = []
    
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      batches.push(urls.slice(i, i + BATCH_SIZE))
    }

    let totalSubmitted = 0
    const errors = []
    let completedBatches = 0

    batches.forEach((batch, index) => {
      const payload = JSON.stringify({
        host: host,
        key: INDEXNOW_API_KEY,
        keyLocation: keyLocation,
        urlList: batch,
      })

      const urlObj = new URL(INDEXNOW_API_URL)
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || 443,
        path: urlObj.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(payload),
        },
      }

      const req = https.request(options, (res) => {
        let data = ''
        res.on('data', (chunk) => {
          data += chunk
        })

        res.on('end', () => {
          completedBatches++
          
          if (res.statusCode === 200) {
            totalSubmitted += batch.length
            console.log(`✅ Batch ${index + 1}/${batches.length}: Successfully submitted ${batch.length} URLs`)
          } else if (res.statusCode === 400) {
            errors.push(`Batch ${index + 1}: Bad request - Invalid format`)
            console.error(`❌ Batch ${index + 1}/${batches.length}: Bad request`)
          } else if (res.statusCode === 403) {
            errors.push(`Batch ${index + 1}: Forbidden - API key not valid`)
            console.error(`❌ Batch ${index + 1}/${batches.length}: Forbidden - API key not valid`)
          } else if (res.statusCode === 422) {
            errors.push(`Batch ${index + 1}: Unprocessable Entity - URLs don't belong to host`)
            console.error(`❌ Batch ${index + 1}/${batches.length}: Unprocessable Entity`)
          } else if (res.statusCode === 429) {
            errors.push(`Batch ${index + 1}: Too Many Requests - Rate limit exceeded`)
            console.error(`❌ Batch ${index + 1}/${batches.length}: Too Many Requests`)
          } else {
            errors.push(`Batch ${index + 1}: Unexpected status ${res.statusCode}`)
            console.error(`❌ Batch ${index + 1}/${batches.length}: Unexpected status ${res.statusCode}`)
          }

          if (completedBatches === batches.length) {
            if (errors.length > 0 && totalSubmitted === 0) {
              resolve({
                success: false,
                message: errors.join('; '),
                submittedUrls: 0,
              })
            } else {
              resolve({
                success: totalSubmitted > 0,
                message: errors.length > 0 ? errors.join('; ') : 'All URLs submitted successfully',
                submittedUrls: totalSubmitted,
              })
            }
          }
        })
      })

      req.on('error', (error) => {
        completedBatches++
        errors.push(`Batch ${index + 1}: ${error.message}`)
        console.error(`❌ Batch ${index + 1}/${batches.length}: Error -`, error.message)

        if (completedBatches === batches.length) {
          resolve({
            success: totalSubmitted > 0,
            message: errors.join('; '),
            submittedUrls: totalSubmitted,
          })
        }
      })

      req.write(payload)
      req.end()
    })
  })
}

/**
 * Main function
 */
async function main() {
  try {
    console.log(`🚀 Starting IndexNow submission for ${BASE_URL}`)
    console.log(`🔑 Using API key: ${INDEXNOW_API_KEY.substring(0, 8)}...`)
    console.log(`📍 Key location: ${keyLocation}`)
    
    const allUrls = new Set()
    
    // Fetch regular sitemap
    const sitemapUrl = `${BASE_URL}/sitemap.xml`
    const sitemapUrls = await fetchSitemapUrls(sitemapUrl)
    sitemapUrls.forEach(url => allUrls.add(url))
    
    // Fetch image sitemap
    const imageSitemapUrl = `${BASE_URL}/image-sitemap.xml`
    const { pageUrls, imageUrls } = await fetchImageSitemapUrls(imageSitemapUrl)
    pageUrls.forEach(url => allUrls.add(url))
    imageUrls.forEach(url => allUrls.add(url))
    
    const uniqueUrls = Array.from(allUrls)
    console.log(`📋 Total unique URLs to submit: ${uniqueUrls.length}`)
    
    if (uniqueUrls.length === 0) {
      console.error('❌ No URLs found in sitemaps')
      process.exit(1)
    }
    
    // Submit to IndexNow
    const result = await submitToIndexNow(uniqueUrls)
    
    if (result.success) {
      console.log(`✅ Successfully submitted ${result.submittedUrls} URLs to IndexNow`)
      process.exit(0)
    } else {
      console.error(`❌ Failed to submit URLs: ${result.message}`)
      // Don't fail the build, just log the error
      process.exit(0)
    }
  } catch (error) {
    console.error(`❌ Error:`, error.message)
    process.exit(1)
  }
}

// Run if executed directly
if (require.main === module) {
  main()
}

module.exports = { main }

