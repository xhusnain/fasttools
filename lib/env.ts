

export const env = {

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.fasttools.store",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "fasttools.store",

  openaiApiKey: process.env.OPENAI_API_KEY || " ",
  geminiApiKey: process.env.GEMINI_API_KEY || "***REMOVED***",

  exchangeRateApiKey: process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY,

  gaId: process.env.NEXT_PUBLIC_GA_ID || "G-4G804HZ22C",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,

  youtubeApiKey: process.env.YOUTUBE_API_KEY,
  instagramApiKey: process.env.INSTAGRAM_API_KEY,

  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const

