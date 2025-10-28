import { NextResponse } from 'next/server';

const CONFIG = {
  host: 'fasttools.store',
  baseUrl: 'https://www.fasttools.store',
  apiKey: '8b4ac52646554f4fb3479eeebcadb3c2',
  keyLocation: 'https://fasttools.store/8b4ac52646554f4fb3479eeebcadb3c2.txt',
  indexNowEndpoint: 'https://api.indexnow.org/indexnow',
  sitemapUrl: 'https://www.fasttools.store/sitemap.xml',
  imageSitemapUrl: 'https://www.fasttools.store/image-sitemap.xml',
  batchSize: 10000,
};

// Extract URLs from XML sitemap
function extractUrlsFromSitemap(xmlContent: string): string[] {
  const urls: string[] = [];
  const urlMatches = xmlContent.match(/<loc>(.*?)<\/loc>/g);
  
  if (urlMatches) {
    urlMatches.forEach((match) => {
      const url = match.replace(/<\/?loc>/g, '').trim();
      if (!match.includes('image:loc') && url.startsWith('http')) {
        urls.push(url);
      }
    });
  }
  
  return urls;
}

// Extract unique image URLs from image sitemap
function extractImageUrlsFromSitemap(xmlContent: string): string[] {
  const urls = new Set<string>();
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

// Submit URLs to IndexNow
async function submitToIndexNow(urls: string[]): Promise<{ success: boolean; statusCode: number; message: string }> {
  const payload = {
    host: CONFIG.host,
    key: CONFIG.apiKey,
    urlList: urls,
  };
  
  try {
    const response = await fetch(CONFIG.indexNowEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });
    
    const statusCode = response.status;
    let message = '';
    
    switch (statusCode) {
      case 200:
      case 202:
        message = `Successfully submitted ${urls.length} URLs to IndexNow`;
        return { success: true, statusCode, message };
      
      case 400:
        message = 'Bad Request: Invalid format';
        break;
      
      case 403:
        message = 'Forbidden: API key not valid or key file not accessible';
        break;
      
      case 422:
        message = 'Unprocessable Entity: URLs don\'t belong to host or key mismatch';
        break;
      
      case 429:
        message = 'Too Many Requests: Rate limit exceeded';
        break;
      
      default:
        message = `Unexpected status code: ${statusCode}`;
    }
    
    return { success: false, statusCode, message };
    
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function GET(request: Request) {
  const startTime = Date.now();
  
  try {
    // Security: Check for authorization token (optional but recommended)
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    
    // You can add a secret token for extra security
    // if (token !== process.env.INDEXNOW_TOKEN) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    
    // Fetch sitemaps
    const sitemapResponse = await fetch(CONFIG.sitemapUrl);
    const sitemapContent = await sitemapResponse.text();
    const sitemapUrls = extractUrlsFromSitemap(sitemapContent);
    
    const imageSitemapResponse = await fetch(CONFIG.imageSitemapUrl);
    const imageSitemapContent = await imageSitemapResponse.text();
    const imageUrls = extractImageUrlsFromSitemap(imageSitemapContent);
    
    // Combine and deduplicate
    const allUrls = [...new Set([...sitemapUrls, ...imageUrls])];
    
    if (allUrls.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'No URLs found to submit',
        stats: {
          sitemapUrls: 0,
          imageUrls: 0,
          totalUrls: 0,
          submitted: 0,
        },
      });
    }
    
    // Split into batches and submit
    const batches: string[][] = [];
    for (let i = 0; i < allUrls.length; i += CONFIG.batchSize) {
      batches.push(allUrls.slice(i, i + CONFIG.batchSize));
    }
    
    const results = [];
    for (let i = 0; i < batches.length; i++) {
      const result = await submitToIndexNow(batches[i]);
      results.push(result);
      
      // Wait between batches to avoid rate limiting
      if (i < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    const successfulBatches = results.filter(r => r.success).length;
    const totalSubmitted = results.filter(r => r.success).reduce((sum, r) => sum + CONFIG.batchSize, 0);
    
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    
    // Send email notification
    const emailTemplate = successfulBatches > 0 ? 'indexnow_success' : 'indexnow_failure';
    const emailData = successfulBatches > 0 ? {
      totalUrls: allUrls.length,
      sitemapUrls: sitemapUrls.length,
      imageUrls: imageUrls.length,
      batches: batches.length,
      duration: `${duration}s`,
      timestamp: new Date().toLocaleString(),
    } : {
      error: results.find(r => !r.success)?.message || 'Unknown error',
      totalUrls: allUrls.length,
      failedBatches: batches.length - successfulBatches,
      timestamp: new Date().toLocaleString(),
      details: JSON.stringify(results, null, 2),
    };

    // Send email asynchronously (don't wait for it)
    fetch(`${CONFIG.baseUrl}/api/send-mail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ template: emailTemplate, data: emailData }),
    }).catch(err => console.error('[IndexNow] Failed to send email:', err));

    return NextResponse.json({
      success: successfulBatches > 0,
      message: successfulBatches > 0 
        ? `Successfully submitted URLs to IndexNow` 
        : 'Failed to submit URLs',
      stats: {
        sitemapUrls: sitemapUrls.length,
        imageUrls: imageUrls.length,
        totalUrls: allUrls.length,
        batches: batches.length,
        successfulBatches,
        failedBatches: batches.length - successfulBatches,
        duration: `${duration}s`,
      },
      results: results.map((r, i) => ({
        batch: i + 1,
        success: r.success,
        statusCode: r.statusCode,
        message: r.message,
      })),
    });
    
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error',
        error: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  // Same logic as GET, but for POST requests
  return GET(request);
}

