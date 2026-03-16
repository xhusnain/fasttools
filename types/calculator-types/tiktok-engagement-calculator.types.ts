export interface TikTokEngagementResult {
  engagementRate: number
  totalEngagements: number
  likes: number
  comments: number
  shares: number
  saves: number
  views: number
  followers: number
  likesToCommentsRatio: number
  viewsToEngagementRatio: number
  estimatedReach: number
  influencerTier: InfluencerTier
  rating: EngagementRating
  platformComparison: PlatformComparison[]
  perPostAverage: PerPostAverage
}

export interface InfluencerTier {
  name: string
  range: string
  description: string
}

export interface EngagementRating {
  label: string
  color: string
  description: string
}

export interface PlatformComparison {
  platform: string
  avgEngagementRate: number
  yourRate: number
  performance: string
}

export interface PerPostAverage {
  avgLikes: number
  avgComments: number
  avgShares: number
  avgSaves: number
  avgViews: number
}
