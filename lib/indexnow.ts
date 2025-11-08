import sitemap from '@/app/sitemap'

const INDEXNOW_API_URL = 'https://api.indexnow.org/IndexNow'
const INDEXNOW_API_KEY = 'cf40da0a93bd49748db36add6b8d12bc'
const INDEXNOW_HOST = 'fasttools.store'
const INDEXNOW_KEY_LOCATION = 'https://www.fasttools.store/cf40da0a93bd49748db36add6b8d12bc.txt'

export interface IndexNowResponse {
  success: boolean
  statusCode?: number
  message?: string
  submittedUrls?: number
}

async function getAllSitemapUrls(): Promise<string[]> {
  const allUrls = new Set<string>()
  
  try {
    const sitemapData = sitemap()
    const pageUrls = sitemapData.map(item => item.url)
    pageUrls.forEach(url => allUrls.add(url))
  } catch (error) {
    console.error('Failed to get URLs from sitemap.ts:', error)
  }
  
  return Array.from(allUrls)
}

export async function submitToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  if (urls.length === 0) {
    return {
      success: false,
      message: 'No URLs to submit',
    }
  }

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
        host: INDEXNOW_HOST,
        key: INDEXNOW_API_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: batch,
      }

      const response = await fetch(INDEXNOW_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      let responseText = ''
      let responseBody: any = null
      try {
        responseText = await response.text()
        if (responseText) {
          try {
            responseBody = JSON.parse(responseText)
          } catch {
          }
        }
      } catch {
      }

      if (response.status === 200 || response.status === 202) {
        totalSubmitted += batch.length
      } else {
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
        
        if (!errorMsg) {
          errorMsg = `${response.status} ${response.statusText}`
        }
        
        errors.push(errorMsg)
        console.error(`IndexNow API Error (${response.status}):`)
        if (errorCode) {
          console.error(`Code: ${errorCode}`)
        }
        console.error(`Message: ${errorMsg}`)
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error'
      errors.push(errorMsg)
      console.error('Error submitting batch to IndexNow:', errorMsg)
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

export async function submitSitemapsToIndexNow(): Promise<IndexNowResponse> {
  try {
    const urls = await getAllSitemapUrls()
    
    if (urls.length === 0) {
      return {
        success: false,
        message: 'No URLs found in sitemaps',
      }
    }
    
    const result = await submitToIndexNow(urls)
    return result
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error in submitSitemapsToIndexNow:', errorMsg)
    return {
      success: false,
      message: errorMsg,
    }
  }
}
