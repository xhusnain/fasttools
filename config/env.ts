// Environment variable validation and helpers

export const env = {
  // Site Configuration
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.fasttools.store",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "fasttools.store",

  // AI Configuration
  openaiApiKey: process.env.OPENAI_API_KEY || " ",
  geminiApiKey: process.env.GEMINI_API_KEY || "***REMOVED***",

  // Currency Converter
  exchangeRateApiKey: process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY,

  // Social Media APIs
  youtubeApiKey: process.env.YOUTUBE_API_KEY,
  instagramApiKey: process.env.INSTAGRAM_API_KEY,

  // API Configuration
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  pythonApiUrl: process.env.NEXT_PUBLIC_PYTHON_API_URL || "http://localhost:8000",

  // Analytics
  gaId: process.env.NEXT_PUBLIC_GA_ID || "G-4G804HZ22C",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,

  // Environment
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const
