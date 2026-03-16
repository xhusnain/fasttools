export interface BiologicalAgeResult {
  biologicalAge: number
  chronologicalAge: number
  ageDifference: number
  ageDirection: "younger" | "older" | "same"
  ageRating: AgeRating
  categoryScores: CategoryScore[]
  topStrengths: string[]
  topRisks: string[]
  recommendations: AgeRecommendation[]
  longevityEstimate: LongevityEstimate
  comparisonPercentile: number
}

export interface AgeRating {
  label: string
  color: string
  description: string
}

export interface CategoryScore {
  category: string
  score: number
  maxScore: number
  impact: number
  label: string
}

export interface AgeRecommendation {
  category: string
  action: string
  impact: string
  priority: "high" | "medium" | "low"
}

export interface LongevityEstimate {
  estimatedLifeExpectancy: number
  averageLifeExpectancy: number
  potentialYearsGained: number
}
