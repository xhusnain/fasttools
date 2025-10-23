# WhatsApp Notification Setup Guide

This guide explains how to set up WhatsApp notifications for the IndexNow API using the official WhatsApp Business API.

## Environment Variables

Add these environment variables to your `.env.local` file and Vercel deployment:

```bash
# WhatsApp Business API Configuration
WHATSAPP_ACCESS_TOKEN=your_access_token_here
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id_here
WHATSAPP_API_URL=https://graph.facebook.com/v18.0
WHATSAPP_PHONE_NUMBER=923001234567  # Your WhatsApp number with country code
```

## Setup Steps

### 1. Create WhatsApp Business Account

1. **Go to [Facebook for Developers](https://developers.facebook.com/)**
2. **Create a new app** or use existing one
3. **Add WhatsApp Business product** to your app
4. **Complete business verification** (required for production)

### 2. Get Required Credentials

1. **Access Token:**
   - Go to WhatsApp > API Setup
   - Copy the temporary access token
   - For production, create a permanent token

2. **Phone Number ID:**
   - In WhatsApp > API Setup
   - Copy the Phone Number ID (not the actual phone number)

3. **Verify Phone Number:**
   - Add your business phone number
   - Complete verification process

### 3. Configure Environment Variables

```bash
# Required for WhatsApp Business API
WHATSAPP_ACCESS_TOKEN=EAAxxxxxxxxxxxxx  # Your access token
WHATSAPP_PHONE_NUMBER_ID=123456789012345  # Your phone number ID
WHATSAPP_API_URL=https://graph.facebook.com/v18.0

# Optional: Your WhatsApp number for notifications
WHATSAPP_PHONE_NUMBER=923001234567
```

### 4. Test the Setup

```bash
curl -X POST https://www.fasttools.store/api/test-whatsapp \
  -H "Content-Type: application/json" \
  -d '{"phoneNumber": "923001234567"}'
```

## Phone Number Format

- **Pakistan:** `923001234567` (92 + phone number without 0)
- **International:** Include country code without + sign
- **Example:** `923001234567` for Pakistan, `1234567890` for US

## Testing

### 1. Test WhatsApp API
```bash
POST /api/test-whatsapp
{
  "phoneNumber": "923001234567",
  "message": "Test message from FastTools!"
}
```

### 2. Test IndexNow with WhatsApp
```bash
POST /api/microsoft-indexnow
# This will trigger both IndexNow submission and WhatsApp notification
```

### 3. Test WhatsApp Webhook Directly
```bash
POST /api/whatsapp-webhook
{
  "phone": "923001234567",
  "text": "Direct webhook test message"
}
```

## WhatsApp Business API Benefits

- **Official API:** Direct integration with WhatsApp
- **Reliable:** No third-party dependencies
- **Scalable:** Handles high message volumes
- **Secure:** Enterprise-grade security
- **Rich Features:** Support for media, templates, etc.

## Message Format

The system sends formatted messages like:

```
✅ *IndexNow Success!*

🕐 Scheduled Cron Job
📊 *URLs Submitted:* 150
⏰ *Time:* 1/15/2024, 12:01:00 AM
🌐 *Site:* www.fasttools.store

All URLs have been successfully submitted to Microsoft IndexNow for faster indexing! 🚀
```

## Troubleshooting

### Common Issues

1. **No WhatsApp Message Received:**
   - Check phone number format (include country code)
   - Verify WhatsApp Business API credentials
   - Check Vercel function logs
   - Ensure business verification is complete

2. **Access Token Invalid:**
   - Verify access token is correct
   - Check if token has expired
   - Ensure proper permissions are granted

3. **Phone Number ID Error:**
   - Verify Phone Number ID is correct
   - Check if phone number is verified
   - Ensure it's the ID, not the actual number

4. **Phone Number Format Error:**
   - Use format: `923001234567` (no +, no spaces)
   - Include country code
   - Remove any special characters

### Debug Steps

1. **Check API Status:**
   ```bash
   GET /api/test-whatsapp
   ```

2. **Check Logs:**
   - Vercel function logs
   - Console logs in IndexNow API
   - WhatsApp Business API logs

3. **Test Webhook:**
   ```bash
   POST /api/whatsapp-webhook
   ```

4. **Verify Credentials:**
   - Test access token with Facebook Graph API
   - Check phone number verification status

## Security Notes

- Keep access tokens secure
- Use environment variables only
- Don't commit tokens to git
- Rotate tokens regularly
- Use permanent tokens for production

## Cost Considerations

- **WhatsApp Business API:** Pay-per-message model
- **Free Tier:** 1,000 messages per month
- **Pricing:** Varies by country (check official pricing)
- **Rate Limits:** 1,000 messages per day initially

## Support

If you need help:
1. Check the logs first
2. Test with the test endpoints
3. Verify environment variables
4. Check CallMeBot documentation
