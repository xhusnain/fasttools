// Environment variable validation and helpers

export const env = {
  // Site Configuration
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "ToolifyHub",

  // AI Configuration
  openaiApiKey: process.env.OPENAI_API_KEY,

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
    warnings.push("OPENAI_API_KEY is not set - AI tools will not work")
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
export function isFeatureAvailable(feature: "ai" | "currency" | "analytics" | "youtube"): boolean {
  switch (feature) {
    case "ai":
      return !!env.openaiApiKey
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
