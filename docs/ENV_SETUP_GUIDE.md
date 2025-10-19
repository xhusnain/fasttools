# Environment Variables Setup Guide

This guide will help you set up all the necessary API keys and configurations for fasttools.store.

## Quick Start

1. Copy `.env.example` to `.env.local`:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

2. Fill in the required API keys in `.env.local`

3. Restart your development server

## Required API Keys

### 1. OpenAI API Key (For AI Tools)

**Used by:** AI Meme Generator, Lyrics Generator, Caption Generator, Pet Name Generator, Hashtag Suggester

---

### 2. Google Gemini API Key (For Enhanced AI Tools)

**Used by:** Enhanced AI Caption Generator, Advanced AI Tools

**How to get:**
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign up or log in with Google account
3. Navigate to "Get API Key"
4. Create a new API key
5. Copy the key and add to `.env.local`:
   ```
   GEMINI_API_KEY=***REMOVED***
   ```

**Pricing:** Free tier includes 15 requests per minute, 1 million tokens per day

---

### 3. Exchange Rate API Key (For Currency Converter)

**Used by:** Currency Converter

**How to get:**
1. Go to [ExchangeRate-API](https://www.exchangerate-api.com/)
2. Sign up for free account
3. Copy your API key from dashboard
4. Add to `.env.local`:
   \`\`\`
   NEXT_PUBLIC_EXCHANGE_RATE_API_KEY=your-key-here
   \`\`\`

**Pricing:** Free tier includes 1,500 requests/month

---

## Optional API Keys

### 3. Google Analytics (For Traffic Tracking)

**How to get:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property
3. Get your Measurement ID (starts with G-)
4. Add to `.env.local`:
   \`\`\`
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   \`\`\`

---

### 4. YouTube Data API (For Enhanced YouTube Tools)

**How to get:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable YouTube Data API v3
4. Create credentials (API Key)
5. Add to `.env.local`:
   \`\`\`
   YOUTUBE_API_KEY=your-youtube-api-key
   \`\`\`

---

## Environment Variables Explained

### Site Configuration
- `NEXT_PUBLIC_SITE_URL`: Your website URL (use `http://localhost:3000` for development)
- `NEXT_PUBLIC_SITE_NAME`: Your site name (fasttools.store)

### AI Configuration
- `OPENAI_API_KEY`: OpenAI API key for AI-powered tools
- `GEMINI_API_KEY`: Google Gemini API key for enhanced AI features
- `XAI_API_KEY`: (Optional) xAI Grok API key
- `ANTHROPIC_API_KEY`: (Optional) Anthropic Claude API key

### Currency Converter
- `NEXT_PUBLIC_EXCHANGE_RATE_API_KEY`: Exchange rate API key for live currency rates

### Analytics
- `NEXT_PUBLIC_GA_ID`: Google Analytics Measurement ID
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager Container ID

### Social Media APIs
- `YOUTUBE_API_KEY`: YouTube Data API key
- `INSTAGRAM_API_KEY`: Instagram API key
- `TIKTOK_API_KEY`: TikTok API key

## Security Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use environment variables in Vercel** - Add them in Project Settings → Environment Variables
3. **Rotate keys regularly** - Change API keys periodically for security
4. **Use `NEXT_PUBLIC_` prefix** - Only for variables that need to be exposed to the browser

## Deployment (Vercel)

When deploying to Vercel:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add all required variables from `.env.local`
4. Redeploy your application

## Troubleshooting

### AI Tools Not Working
- Check if `OPENAI_API_KEY` is set correctly
- Verify your OpenAI account has credits
- Check browser console for error messages

### Currency Converter Showing Old Rates
- Add `NEXT_PUBLIC_EXCHANGE_RATE_API_KEY` for live rates
- Free tier without key uses cached rates

### Tools Loading Slowly
- Consider upgrading API plans for higher rate limits
- Check your internet connection
- Verify API keys are valid

## Cost Estimation

### Minimal Setup (Free Tier)
- OpenAI: ~$5/month for moderate usage
- Exchange Rate API: Free (1,500 requests/month)
- **Total: ~$5/month**

### Recommended Setup
- OpenAI: ~$20/month for heavy usage
- Exchange Rate API: $9/month (100,000 requests)
- Google Analytics: Free
- **Total: ~$29/month**

## Support

If you need help setting up environment variables:
1. Check the [Next.js Environment Variables docs](https://nextjs.org/docs/basic-features/environment-variables)
2. Review API provider documentation
3. Contact support at fasttools.store@outlook.com
