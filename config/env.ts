// Environment variable validation and helpers

export const env = {
  // AI Configuration
  geminiApiKey: process.env.GEMINI_API_KEY || "***REMOVED***",

  // Environment
  isProduction: process.env.NODE_ENV === "production",
} as const
