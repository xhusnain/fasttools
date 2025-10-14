// Environment variable validation and helpers

export const env = {
  // Site Configuration
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://fasttools.store",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "fasttools.store",

  // AI Configuration
  openaiApiKey: process.env.OPENAI_API_KEY,
  geminiApiKey: process.env.GEMINI_API_KEY,

  // Currency Converter
  exchangeRateApiKey: process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY,

  // Analytics
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,

  // Social Media APIs
  youtubeApiKey: process.env.YOUTUBE_API_KEY,
  instagramApiKey: process.env.INSTAGRAM_API_KEY,

  // Environment
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const

// Validation helper
export function validateEnv() {
  const warnings: string[] = []

  if (!env.openaiApiKey) {
    warnings.push("OPENAI_API_KEY is not set - OpenAI AI tools will not work")
  }

  if (!env.geminiApiKey) {
    warnings.push("GEMINI_API_KEY is not set - Gemini AI tools will not work")
  }

  if (!env.exchangeRateApiKey) {
    warnings.push("NEXT_PUBLIC_EXCHANGE_RATE_API_KEY is not set - Currency converter will use free tier with limits")
  }

  if (warnings.length > 0 && env.isDevelopment) {
    console.warn("⚠️  Environment Configuration Warnings:")
    warnings.forEach((warning) => console.warn(`   - ${warning}`))
    console.warn("\n   See ENV_SETUP_GUIDE.md for setup instructions\n")
  }

  return warnings
}

// Helper to check if a feature is available
export function isFeatureAvailable(feature: "ai" | "gemini" | "currency" | "analytics" | "youtube"): boolean {
  switch (feature) {
    case "ai":
      return !!env.openaiApiKey
    case "gemini":
      return !!env.geminiApiKey
    case "currency":
      return !!env.exchangeRateApiKey
    case "analytics":
      return !!env.gaId || !!env.gtmId
    case "youtube":
      return !!env.youtubeApiKey
    default:
      return false
  }
}
