interface WhatsAppNotificationData {
  phoneNumber: string
  message: string
  apiKey?: string
}

interface WhatsAppResponse {
  success: boolean
  messageId?: string
  error?: string
}

export class WhatsAppNotificationService {
  private accessToken: string
  private phoneNumberId: string
  private baseUrl: string

  constructor(accessToken?: string, phoneNumberId?: string) {
    // Using WhatsApp Business API (official)
    this.accessToken = accessToken || process.env.WHATSAPP_ACCESS_TOKEN || ''
    this.phoneNumberId = phoneNumberId || process.env.WHATSAPP_PHONE_NUMBER_ID || ''
    this.baseUrl = process.env.WHATSAPP_API_URL || 'https://graph.facebook.com/v18.0'
  }

  async sendNotification(data: WhatsAppNotificationData): Promise<WhatsAppResponse> {
    try {
      // Using WhatsApp Business API (official)
      if (this.accessToken && this.phoneNumberId) {
        return await this.sendViaBusinessAPI(data)
      }

      // Fallback: Return error if not configured
      return {
        success: false,
        error: 'WhatsApp Business API not configured. Please set WHATSAPP_ACCESS_TOKEN and WHATSAPP_PHONE_NUMBER_ID environment variables.'
      }

    } catch (error) {
      console.error('WhatsApp notification error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  private async sendViaBusinessAPI(data: WhatsAppNotificationData): Promise<WhatsAppResponse> {
    try {
      // Format phone number for WhatsApp API (remove any non-digits and ensure proper format)
      const formattedPhone = data.phoneNumber.replace(/\D/g, '')
      
      const response = await fetch(`${this.baseUrl}/${this.phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: formattedPhone,
          type: 'text',
          text: {
            body: data.message
          }
        })
      })

      if (response.ok) {
        const result = await response.json()
        return {
          success: true,
          messageId: result.messages?.[0]?.id
        }
      } else {
        const error = await response.text()
        console.error('WhatsApp Business API error:', response.status, error)
        return {
          success: false,
          error: `WhatsApp API Error: ${response.status} - ${error}`
        }
      }
    } catch (error) {
      console.error('WhatsApp Business API call failed:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'WhatsApp API call failed'
      }
    }
  }


  // Format IndexNow success message
  formatIndexNowSuccessMessage(data: {
    submittedUrls: number
    timestamp: string
    triggeredBy?: string
  }): string {
    const trigger = data.triggeredBy === 'vercel-cron' ? '🕐 Scheduled Cron Job' : '🔧 Manual Trigger'
    
    return `✅ *IndexNow Success!*

${trigger}
📊 *URLs Submitted:* ${data.submittedUrls}
⏰ *Time:* ${new Date(data.timestamp).toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}
🌐 *Site:* www.fasttools.store

All URLs have been successfully submitted to Microsoft IndexNow for faster indexing! 🚀`
  }

  // Format IndexNow error message
  formatIndexNowErrorMessage(data: {
    error: string
    timestamp: string
    triggeredBy?: string
  }): string {
    const trigger = data.triggeredBy === 'vercel-cron' ? '🕐 Scheduled Cron Job' : '🔧 Manual Trigger'
    
    return `❌ *IndexNow Error!*

${trigger}
🚨 *Error:* ${data.error}
⏰ *Time:* ${new Date(data.timestamp).toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}
🌐 *Site:* www.fasttools.store

Please check the logs and fix the issue! 🔧`
  }
}

// Export singleton instance
export const whatsappNotification = new WhatsAppNotificationService()
