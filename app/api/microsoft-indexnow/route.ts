import { NextRequest, NextResponse } from 'next/server'
import sitemap from '../../sitemap'
import { whatsappNotification } from '@/lib/whatsapp-notification'

const INDEXNOW_CONFIG = {
  host: 'www.fasttools.store',
  key: '718738721511411284005e8672266791',
  keyLocation: 'https://www.fasttools.store/718738721511411284005e8672266791.txt',
  apiUrl: 'https://api.indexnow.org/indexnow'
}

interface IndexNowRequest {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

export async function POST(request: NextRequest) {
  try {
    // Get all URLs from sitemap
    const sitemapData = sitemap()
    const urlList = sitemapData.map(page => page.url)

    // Prepare IndexNow request payload
    const indexNowPayload: IndexNowRequest = {
      host: INDEXNOW_CONFIG.host,
      key: INDEXNOW_CONFIG.key,
      keyLocation: INDEXNOW_CONFIG.keyLocation,
      urlList: urlList
    }

    console.log(`Submitting ${urlList.length} URLs to Microsoft IndexNow`)

    // Submit to Microsoft IndexNow API
    const response = await fetch(INDEXNOW_CONFIG.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'FastTools-IndexNow/1.0'
      },
      body: JSON.stringify(indexNowPayload)
    })

    if (response.ok) {
      console.log('Successfully submitted URLs to Microsoft IndexNow')
      
      // Send WhatsApp notification on success
      const successData = {
        submittedUrls: urlList.length,
        timestamp: new Date().toISOString(),
        triggeredBy: 'manual'
      }
      
      // Send WhatsApp notification (don't await to avoid blocking response)
      whatsappNotification.sendNotification({
        phoneNumber: process.env.WHATSAPP_PHONE_NUMBER || '',
        message: whatsappNotification.formatIndexNowSuccessMessage(successData)
      }).then(result => {
        console.log('WhatsApp notification result:', result)
      }).catch(error => {
        console.error('WhatsApp notification error:', error)
      })
      
      return NextResponse.json({
        success: true,
        message: `Successfully submitted ${urlList.length} URLs to Microsoft IndexNow`,
        submittedUrls: urlList.length,
        timestamp: new Date().toISOString(),
        whatsappNotification: 'sent'
      })
    } else {
      const errorText = await response.text()
      console.error('IndexNow API error:', response.status, errorText)
      return NextResponse.json({
        success: false,
        message: 'Failed to submit URLs to Microsoft IndexNow',
        error: errorText,
        status: response.status
      }, { status: response.status })
    }

  } catch (error) {
    console.error('IndexNow submission error:', error)
    return NextResponse.json({
      success: false,
      message: 'Internal server error while submitting to IndexNow',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Handle Vercel cron job calls (GET requests from cron)
export async function GET(request: NextRequest) {
  try {
    // Check if this is a Vercel cron call
    const cronSecret = request.headers.get('authorization')
    const isVercelCron = cronSecret === `Bearer ${process.env.CRON_SECRET}`

    if (isVercelCron) {
      console.log('Vercel cron job triggered - running IndexNow submission')
      
      // Get all URLs from sitemap
      const sitemapData = sitemap()
      const urlList = sitemapData.map(page => page.url)

      // Prepare IndexNow request payload
      const indexNowPayload: IndexNowRequest = {
        host: INDEXNOW_CONFIG.host,
        key: INDEXNOW_CONFIG.key,
        keyLocation: INDEXNOW_CONFIG.keyLocation,
        urlList: urlList
      }

      console.log(`Cron job: Submitting ${urlList.length} URLs to Microsoft IndexNow`)

      // Submit to Microsoft IndexNow API
      const response = await fetch(INDEXNOW_CONFIG.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'FastTools-IndexNow-Cron/1.0'
        },
        body: JSON.stringify(indexNowPayload)
      })

      if (response.ok) {
        console.log('Cron job: Successfully submitted URLs to Microsoft IndexNow')
        
        // Send WhatsApp notification on cron success
        const successData = {
          submittedUrls: urlList.length,
          timestamp: new Date().toISOString(),
          triggeredBy: 'vercel-cron'
        }
        
        // Send WhatsApp notification (don't await to avoid blocking response)
        whatsappNotification.sendNotification({
          phoneNumber: process.env.WHATSAPP_PHONE_NUMBER || '',
          message: whatsappNotification.formatIndexNowSuccessMessage(successData)
        }).then(result => {
          console.log('Cron job WhatsApp notification result:', result)
        }).catch(error => {
          console.error('Cron job WhatsApp notification error:', error)
        })
        
        return NextResponse.json({
          success: true,
          message: `Cron job: Successfully submitted ${urlList.length} URLs to Microsoft IndexNow`,
          submittedUrls: urlList.length,
          timestamp: new Date().toISOString(),
          triggeredBy: 'vercel-cron',
          whatsappNotification: 'sent'
        })
      } else {
        const errorText = await response.text()
        console.error('Cron job: IndexNow API error:', response.status, errorText)
        return NextResponse.json({
          success: false,
          message: 'Cron job: Failed to submit URLs to Microsoft IndexNow',
          error: errorText,
          status: response.status
        }, { status: response.status })
      }
    }

    // Regular GET request for testing
    const sitemapData = sitemap()
    const urlList = sitemapData.map(page => page.url)

    return NextResponse.json({
      message: 'Microsoft IndexNow API is ready',
      totalUrls: urlList.length,
      sampleUrls: urlList.slice(0, 5),
      keyLocation: INDEXNOW_CONFIG.keyLocation,
      timestamp: new Date().toISOString(),
      cronSchedule: 'Daily at 12:01 AM Pakistan time (1 19 * * * UTC)'
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error retrieving sitemap data',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
