export type Platform = "tiktok" | "instagram" | "youtube" | "x" | "facebook"
export type ContentType = "post" | "story" | "reel" | "short" | "video" | "thread"
export type NicheMultiplier = "general" | "fashion" | "tech" | "finance" | "health" | "food" | "travel" | "gaming" | "beauty" | "education" | "parenting"

export interface InfluencerRateResult {
  estimatedRate: number
  rateRange: { min: number; max: number }
  cpm: number
  cpe: number
  estimatedReach: number
  estimatedImpressions: number
  platform: Platform
  contentType: ContentType
  influencerTier: InfluencerTier
  nicheAdjustment: number
  rateByContentType: ContentTypeRate[]
  platformComparison: PlatformRate[]
  monthlyEarningsPotential: MonthlyEarnings
  mediaKitSummary: MediaKitSummary
}

export interface InfluencerTier {
  name: string
  range: string
  description: string
}

export interface ContentTypeRate {
  type: string
  rate: number
  description: string
}

export interface PlatformRate {
  platform: string
  estimatedRate: number
  avgCPM: number
}

export interface MonthlyEarnings {
  postsPerWeek: number
  monthlyPosts: number
  monthlyEarnings: number
  annualEarnings: number
}

export interface MediaKitSummary {
  followers: number
  engagementRate: number
  estimatedCPM: number
  suggestedRate: number
  tier: string
  niche: string
}
