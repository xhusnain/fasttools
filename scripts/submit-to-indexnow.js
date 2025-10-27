/**
 * Bing IndexNow Submission Script
 * 
 * This script submits all URLs from the site's sitemap and image sitemap to Microsoft IndexNow API
 * Run with: npm run index-now
 * 
 * Features:
 * - Fetches all URLs from sitemap
 * - Fetches all unique image URLs from image sitemap
 * - Submits URLs in batches (max 10,000 per request as per IndexNow spec)
 * - Proper error handling and logging
 * - Color-coded console output for better visibility
 */

const https = require('https');
const http = require('http');

// Configuration
const CONFIG = {
  host: 'www.fasttools.store',
  baseUrl: 'https://www.fasttools.store',
  apiKey: '8b4ac52646554f4fb3479eeebcadb3c2',
  keyLocation: 'https://www.fasttools.store/8b4ac52646554f4fb3479eeebcadb3c2.txt',
  indexNowEndpoint: 'https://api.indexnow.org/indexnow',
  sitemapUrl: 'https://www.fasttools.store/sitemap.xml',
  imageSitemapUrl: 'https://www.fasttools.store/image-sitemap.xml',
  batchSize: 10000, // IndexNow allows up to 10,000 URLs per request
};

// Console color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Logging utilities
function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logSuccess(message) {
  log(`✓ ${message}`, colors.green);
}

function logError(message) {
  log(`✗ ${message}`, colors.red);
}

function logInfo(message) {
  log(`ℹ ${message}`, colors.blue);
}

function logWarning(message) {
  log(`⚠ ${message}`, colors.yellow);
}

function logHeader(message) {
  log(`\n${'='.repeat(60)}`, colors.cyan);
  log(message, colors.bright + colors.cyan);
  log('='.repeat(60), colors.cyan);
}

// HTTP/HTTPS request helper
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(data);
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// POST request helper
function makePostRequest(url, data) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const postData = JSON.stringify(data);
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || 443,
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData),
      },
    };
    
    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body: responseData,
        });
      });
    });
    
    req.on('error', (err) => {
      reject(err);
    });
    
    req.write(postData);
    req.end();
  });
}

// Extract URLs from XML sitemap
function extractUrlsFromSitemap(xmlContent) {
  const urls = [];
  const urlMatches = xmlContent.match(/<loc>(.*?)<\/loc>/g);
  
  if (urlMatches) {
    urlMatches.forEach((match) => {
      const url = match.replace(/<\/?loc>/g, '').trim();
      // Only include page URLs, not image URLs (image:loc tags)
      if (!match.includes('image:loc') && url.startsWith('http')) {
        urls.push(url);
      }
    });
  }
  
  return urls;
}

// Extract unique image URLs from image sitemap
function extractImageUrlsFromSitemap(xmlContent) {
  const urls = new Set(); // Use Set to avoid duplicates
  
  // Match image:loc tags
  const imageMatches = xmlContent.match(/<image:loc>(.*?)<\/image:loc>/g);
  
  if (imageMatches) {
    imageMatches.forEach((match) => {
      const url = match.replace(/<\/?image:loc>/g, '').trim();
      if (url.startsWith('http')) {
        urls.add(url);
      }
    });
  }
  
  return Array.from(urls);
}

// Fetch sitemap URLs
async function fetchSitemapUrls() {
  try {
    logInfo(`Fetching sitemap from: ${CONFIG.sitemapUrl}`);
    const sitemapContent = await makeRequest(CONFIG.sitemapUrl);
    const urls = extractUrlsFromSitemap(sitemapContent);
    logSuccess(`Found ${urls.length} URLs in main sitemap`);
    return urls;
  } catch (error) {
    logError(`Failed to fetch sitemap: ${error.message}`);
    throw error;
  }
}

// Fetch image sitemap URLs
async function fetchImageSitemapUrls() {
  try {
    logInfo(`Fetching image sitemap from: ${CONFIG.imageSitemapUrl}`);
    const imageSitemapContent = await makeRequest(CONFIG.imageSitemapUrl);
    const imageUrls = extractImageUrlsFromSitemap(imageSitemapContent);
    logSuccess(`Found ${imageUrls.length} unique image URLs in image sitemap`);
    return imageUrls;
  } catch (error) {
    logError(`Failed to fetch image sitemap: ${error.message}`);
    throw error;
  }
}

// Split URLs into batches
function splitIntoBatches(urls, batchSize) {
  const batches = [];
  for (let i = 0; i < urls.length; i += batchSize) {
    batches.push(urls.slice(i, i + batchSize));
  }
  return batches;
}

// Submit URLs to IndexNow
async function submitToIndexNow(urls) {
  const payload = {
    host: CONFIG.host,
    key: CONFIG.apiKey,
    keyLocation: CONFIG.keyLocation,
    urlList: urls,
  };
  
  try {
    logInfo(`Submitting ${urls.length} URLs to IndexNow...`);
    
    const response = await makePostRequest(CONFIG.indexNowEndpoint, payload);
    
    // Handle different status codes
    switch (response.statusCode) {
      case 200:
        logSuccess(`Successfully submitted ${urls.length} URLs`);
        return { success: true, count: urls.length };
      
      case 202:
        logSuccess(`URLs accepted for processing (${urls.length} URLs)`);
        return { success: true, count: urls.length };
      
      case 400:
        logError(`Bad Request: Invalid format`);
        logError(`Response: ${response.body}`);
        return { success: false, error: 'Bad Request', count: 0 };
      
      case 403:
        logError(`Forbidden: API key not valid`);
        logError(`Make sure the key file exists at: ${CONFIG.keyLocation}`);
        logError(`Response: ${response.body}`);
        return { success: false, error: 'Forbidden', count: 0 };
      
      case 422:
        logError(`Unprocessable Entity: URLs don't belong to host or key mismatch`);
        logError(`Response: ${response.body}`);
        return { success: false, error: 'Unprocessable Entity', count: 0 };
      
      case 429:
        logWarning(`Too Many Requests: Rate limit exceeded`);
        logWarning(`Please try again later`);
        logError(`Response: ${response.body}`);
        return { success: false, error: 'Too Many Requests', count: 0 };
      
      default:
        logWarning(`Unexpected status code: ${response.statusCode} ${response.statusMessage}`);
        logInfo(`Response: ${response.body}`);
        return { success: false, error: `HTTP ${response.statusCode}`, count: 0 };
    }
  } catch (error) {
    logError(`Failed to submit to IndexNow: ${error.message}`);
    return { success: false, error: error.message, count: 0 };
  }
}

// Main execution function
async function main() {
  const startTime = Date.now();
  
  logHeader('Bing IndexNow Submission Script');
  log(`Started at: ${new Date().toLocaleString()}`, colors.dim);
  
  try {
    // Verify configuration
    logHeader('Configuration');
    logInfo(`Host: ${CONFIG.host}`);
    logInfo(`Base URL: ${CONFIG.baseUrl}`);
    logInfo(`API Key: ${CONFIG.apiKey.substring(0, 8)}...`);
    logInfo(`Key Location: ${CONFIG.keyLocation}`);
    logInfo(`IndexNow Endpoint: ${CONFIG.indexNowEndpoint}`);
    
    // Fetch all URLs
    logHeader('Fetching URLs');
    const [sitemapUrls, imageUrls] = await Promise.all([
      fetchSitemapUrls(),
      fetchImageSitemapUrls(),
    ]);
    
    // Combine all URLs and remove duplicates
    const allUrls = [...new Set([...sitemapUrls, ...imageUrls])];
    
    logHeader('URL Summary');
    logInfo(`Main sitemap URLs: ${sitemapUrls.length}`);
    logInfo(`Image URLs: ${imageUrls.length}`);
    logInfo(`Total unique URLs: ${allUrls.length}`);
    
    if (allUrls.length === 0) {
      logWarning('No URLs found to submit');
      return;
    }
    
    // Split into batches
    const batches = splitIntoBatches(allUrls, CONFIG.batchSize);
    logInfo(`Split into ${batches.length} batch(es) of max ${CONFIG.batchSize} URLs each`);
    
    // Submit each batch
    logHeader('Submitting to IndexNow');
    const results = [];
    
    for (let i = 0; i < batches.length; i++) {
      log(`\nBatch ${i + 1}/${batches.length}:`, colors.bright);
      const result = await submitToIndexNow(batches[i]);
      results.push(result);
      
      // Wait a bit between batches to avoid rate limiting
      if (i < batches.length - 1) {
        logInfo('Waiting 2 seconds before next batch...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    // Summary
    logHeader('Submission Summary');
    const successfulSubmissions = results.filter(r => r.success).length;
    const totalSubmittedUrls = results.reduce((sum, r) => sum + r.count, 0);
    const failedSubmissions = results.filter(r => !r.success).length;
    
    if (successfulSubmissions > 0) {
      logSuccess(`Successful batches: ${successfulSubmissions}/${batches.length}`);
      logSuccess(`Total URLs submitted: ${totalSubmittedUrls}/${allUrls.length}`);
    }
    
    if (failedSubmissions > 0) {
      logError(`Failed batches: ${failedSubmissions}/${batches.length}`);
      
      // Log specific errors
      results.forEach((result, index) => {
        if (!result.success) {
          logError(`  Batch ${index + 1}: ${result.error}`);
        }
      });
    }
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    logHeader('Complete');
    log(`Finished at: ${new Date().toLocaleString()}`, colors.dim);
    log(`Total time: ${duration}s`, colors.dim);
    
    // Exit with appropriate code
    process.exit(failedSubmissions > 0 ? 1 : 0);
    
  } catch (error) {
    logHeader('Error');
    logError(`Fatal error: ${error.message}`);
    if (error.stack) {
      log(error.stack, colors.dim);
    }
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main };

