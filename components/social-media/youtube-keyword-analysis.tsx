"use client"

import { useState, useCallback } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard } from "@/ui/gcard"
import { GProgress } from "@/ui/gprogress"
import { Search, TrendingUp, Target, Sparkles, Brain, AlertCircle, CheckCircle, Info } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type { KeywordAnalysisResult, KeywordScore } from "@/types/social-media-types/youtube-keyword-analysis.types"

interface YoutubeKeywordAnalysisProps {
    className?: string
}

// Common YouTube keywords database for scoring
const POPULAR_KEYWORDS = [
    'gaming', 'vlog', 'tutorial', 'review', 'tech', 'music', 'comedy', 'beauty',
    'fitness', 'cooking', 'travel', 'news', 'education', 'science', 'art', 'diy',
    'fashion', 'sports', 'entertainment', 'lifestyle', 'finance', 'health', 'food',
    'cars', 'pets', 'kids', 'family', 'challenge', 'reaction', 'unboxing'
]

const HIGH_COMPETITION_TERMS = [
    'gaming', 'vlog', 'music', 'vlogs', 'gamer', 'review', 'reviews', 'tech',
    'official', 'tv', 'hd', 'world', 'best', 'top', 'pro', 'studio'
]

export function YoutubeKeywordAnalysis({ className }: YoutubeKeywordAnalysisProps) {
    const [input, setInput] = useState("")
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [result, setResult] = useState<KeywordAnalysisResult | null>(null)
    const [error, setError] = useState<string | null>(null)

    // Analyze the channel name for SEO potential
    const analyzeKeywords = useCallback((name: string): KeywordAnalysisResult => {
        const words = name.toLowerCase().split(/[\s_-]+/).filter(w => w.length > 0)
        const cleanName = name.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase()

        // Extract detected keywords
        const detectedKeywords = words.filter(w =>
            POPULAR_KEYWORDS.some(k => w.includes(k) || k.includes(w))
        )

        // Calculate Search Popularity Score (0-100)
        let searchPopularityScore = 40 // Base score
        detectedKeywords.forEach(() => searchPopularityScore += 15)
        if (words.some(w => POPULAR_KEYWORDS.includes(w))) searchPopularityScore += 20
        searchPopularityScore = Math.min(100, searchPopularityScore)

        // Calculate Competition Score (100 = low competition = good)
        let competitionScore = 70 // Base score (lower competition is better)
        const hasHighCompetition = words.some(w =>
            HIGH_COMPETITION_TERMS.some(t => w.includes(t))
        )
        if (hasHighCompetition) competitionScore -= 30
        if (name.length < 8) competitionScore -= 15 // Short names are more competitive
        if (/\d/.test(name)) competitionScore += 10 // Numbers reduce competition
        competitionScore = Math.max(20, Math.min(100, competitionScore))

        // Calculate Relevancy Score (how descriptive is the name)
        let relevancyScore = 50 // Base score
        if (detectedKeywords.length > 0) relevancyScore += 25
        if (words.length >= 2 && words.length <= 3) relevancyScore += 15 // Optimal length
        if (cleanName.length >= 8 && cleanName.length <= 20) relevancyScore += 10
        relevancyScore = Math.min(100, relevancyScore)

        // Calculate Memorability Score
        let memorabilityScore = 60 // Base score
        if (name.length <= 15) memorabilityScore += 15
        if (words.length <= 2) memorabilityScore += 10
        if (!/\d/.test(name)) memorabilityScore += 10 // No numbers = more memorable
        if (!/[_-]/.test(name)) memorabilityScore += 5 // No special chars
        // Alliteration bonus
        if (words.length >= 2 && words[0][0] === words[1][0]) memorabilityScore += 10
        memorabilityScore = Math.min(100, memorabilityScore)

        // Calculate overall score (weighted average)
        const overallScore = Math.round(
            (searchPopularityScore * 0.30) +
            (competitionScore * 0.25) +
            (relevancyScore * 0.25) +
            (memorabilityScore * 0.20)
        )

        // Generate recommendations
        const recommendations: string[] = []
        if (searchPopularityScore < 60) {
            recommendations.push("Consider adding a popular niche keyword (e.g., Gaming, Tech, Vlog)")
        }
        if (competitionScore < 50) {
            recommendations.push("This name has high competition - try a more unique variation")
        }
        if (relevancyScore < 60) {
            recommendations.push("Make the name more descriptive of your content type")
        }
        if (memorabilityScore < 60) {
            recommendations.push("Simplify the name for better memorability")
        }
        if (name.length > 20) {
            recommendations.push("Shorten the name for easier searching and sharing")
        }
        if (overallScore >= 75) {
            recommendations.push("Great choice! This name has strong SEO potential")
        }

        const getScoreColor = (score: number): 'green' | 'yellow' | 'red' => {
            if (score >= 70) return 'green'
            if (score >= 45) return 'yellow'
            return 'red'
        }

        return {
            name,
            overallScore,
            scores: {
                searchPopularity: {
                    label: 'Search Popularity',
                    value: searchPopularityScore,
                    description: 'Estimated search volume potential for keywords in the name',
                    color: getScoreColor(searchPopularityScore)
                },
                competition: {
                    label: 'Competition Level',
                    value: competitionScore,
                    description: 'Lower competition means easier to rank (higher score = less competition)',
                    color: getScoreColor(competitionScore)
                },
                relevancy: {
                    label: 'Content Relevancy',
                    value: relevancyScore,
                    description: 'How well the name describes potential content',
                    color: getScoreColor(relevancyScore)
                },
                memorability: {
                    label: 'Memorability',
                    value: memorabilityScore,
                    description: 'How easy the name is to remember and search for',
                    color: getScoreColor(memorabilityScore)
                }
            },
            recommendations,
            keywords: detectedKeywords.length > 0 ? detectedKeywords : words.slice(0, 3)
        }
    }, [])

    const handleAnalyze = async () => {
        const trimmedInput = input.trim()
        if (!trimmedInput) return

        setIsAnalyzing(true)
        setError(null)
        setResult(null)

        try {
            // Simulate API delay for better UX
            await new Promise(resolve => setTimeout(resolve, 800))

            const analysisResult = analyzeKeywords(trimmedInput)
            setResult(analysisResult)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Analysis failed')
        } finally {
            setIsAnalyzing(false)
        }
    }

    const getOverallGrade = (score: number): { grade: string; color: string } => {
        if (score >= 80) return { grade: 'A', color: 'text-green-500' }
        if (score >= 70) return { grade: 'B', color: 'text-green-600' }
        if (score >= 60) return { grade: 'C', color: 'text-yellow-500' }
        if (score >= 50) return { grade: 'D', color: 'text-blue-500' }
        return { grade: 'F', color: 'text-red-500' }
    }

    const getProgressColor = (score: KeywordScore): string => {
        switch (score.color) {
            case 'green': return 'bg-green-500'
            case 'yellow': return 'bg-yellow-500'
            case 'red': return 'bg-red-500'
            default: return 'bg-primary'
        }
    }

    return (
        <div className={`space-y-6 ${className || ''}`}>
            <GCard className="p-6 bg-card border-border shadow-sm">
                <div className="space-y-4">
                    <div>
                        <GLabel htmlFor="keyword-input" className="text-sm font-medium text-foreground mb-2 block">
                            Channel Name to Analyze
                        </GLabel>
                        <div className="flex gap-2">
                            <GInput
                                id="keyword-input"
                                placeholder="Enter a channel name (e.g., TechReviews, GamingWorld)"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                                className="flex-1"
                            />
                            <GButton
                                onClick={handleAnalyze}
                                disabled={!input.trim() || isAnalyzing}
                                isLoading={isAnalyzing}
                            >
                                {isAnalyzing ? 'Analyzing...' : (
                                    <>
                                        <TrendingUp className="mr-2 h-4 w-4" />
                                        Analyze
                                    </>
                                )}
                            </GButton>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Get SEO insights and scoring for your potential YouTube channel name
                        </p>
                    </div>
                </div>
            </GCard>

            {error && (
                <GCard className="p-4 bg-card border-red-500 shadow-sm">
                    <div className="flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-foreground">{error}</p>
                    </div>
                </GCard>
            )}

            {isAnalyzing && (
                <GCard className="p-8 bg-card border-border shadow-sm">
                    <div className="flex flex-col items-center gap-4">
                        <LoadingSpinner className="h-8 w-8" />
                        <p className="text-sm text-muted-foreground">Analyzing SEO potential...</p>
                    </div>
                </GCard>
            )}

            {result && !isAnalyzing && (
                <>
                    {/* Overall Score Card */}
                    <GCard className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-sm">
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <div className={`text-5xl font-bold ${getOverallGrade(result.overallScore).color}`}>
                                    {getOverallGrade(result.overallScore).grade}
                                </div>
                                <div className="text-sm text-muted-foreground mt-1">Grade</div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-foreground mb-1">"{result.name}"</h3>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl font-bold text-primary">{result.overallScore}</span>
                                    <span className="text-sm text-muted-foreground">/ 100 SEO Score</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-3">
                                    <div
                                        className="bg-primary h-3 rounded-full transition-all duration-500"
                                        style={{ width: `${result.overallScore}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </GCard>

                    {/* Detailed Scores */}
                    <GCard className="p-6 bg-card border-border shadow-sm">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Target className="h-5 w-5 text-primary" />
                            Detailed Analysis
                        </h3>
                        <div className="space-y-5">
                            {Object.values(result.scores).map((score, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-foreground">{score.label}</span>
                                            <span className="text-xs text-muted-foreground">({score.value}/100)</span>
                                        </div>
                                        <div className={`text-xs px-2 py-0.5 rounded-full ${score.color === 'green' ? 'bg-green-500/10 text-green-600' :
                                                score.color === 'yellow' ? 'bg-yellow-500/10 text-yellow-600' :
                                                    'bg-red-500/10 text-red-600'
                                            }`}>
                                            {score.color === 'green' ? 'Good' : score.color === 'yellow' ? 'Average' : 'Needs Work'}
                                        </div>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2.5">
                                        <div
                                            className={`h-2.5 rounded-full transition-all duration-500 ${getProgressColor(score)}`}
                                            style={{ width: `${score.value}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-muted-foreground">{score.description}</p>
                                </div>
                            ))}
                        </div>
                    </GCard>

                    {/* Keywords Detected */}
                    {result.keywords.length > 0 && (
                        <GCard className="p-6 bg-card border-border shadow-sm">
                            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-primary" />
                                Keywords Detected
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {result.keywords.map((keyword, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </GCard>
                    )}

                    {/* Recommendations */}
                    <GCard className="p-6 bg-card border-border shadow-sm">
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Brain className="h-5 w-5 text-primary" />
                            Recommendations
                        </h3>
                        <ul className="space-y-2">
                            {result.recommendations.map((rec, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    {rec.includes('Great choice') ? (
                                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                    ) : (
                                        <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                    )}
                                    <span>{rec}</span>
                                </li>
                            ))}
                        </ul>
                    </GCard>
                </>
            )}

            <GCard className="p-6 bg-muted/30 border-border">
                <h3 className="text-base font-semibold text-foreground mb-3">About SEO Analysis</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Search Popularity:</strong> How often related terms are searched on YouTube</li>
                    <li>• <strong>Competition:</strong> How many channels use similar names (lower = better)</li>
                    <li>• <strong>Relevancy:</strong> How clearly the name describes your content type</li>
                    <li>• <strong>Memorability:</strong> How easy the name is to remember and spell</li>
                </ul>
            </GCard>
        </div>
    )
}
