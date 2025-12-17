/**
 * YouTube Keyword Analysis Types
 * Types for the SEO keyword analysis component
 */

export interface KeywordScore {
    label: string
    value: number // 0-100
    description: string
    color: 'green' | 'yellow' | 'red'
}

export interface KeywordAnalysisResult {
    name: string
    overallScore: number
    scores: {
        searchPopularity: KeywordScore
        competition: KeywordScore
        relevancy: KeywordScore
        memorability: KeywordScore
    }
    recommendations: string[]
    keywords: string[]
}

export interface KeywordAnalysisState {
    input: string
    isAnalyzing: boolean
    result: KeywordAnalysisResult | null
    error: string | null
}
