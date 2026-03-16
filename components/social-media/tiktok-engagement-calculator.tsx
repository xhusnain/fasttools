"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, Heart, MessageCircle, Share2, Bookmark,
  Eye, Users, TrendingUp, BarChart3, Target, Award, Zap,
  ArrowUpRight, ArrowDownRight, Star
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type {
  TikTokEngagementResult, InfluencerTier, EngagementRating,
  PlatformComparison, PerPostAverage
} from "@/types/calculator-types/tiktok-engagement-calculator.types"

type CalcMode = "single" | "average"

export function TikTokEngagementCalculator() {
  const [mode, setMode] = useState<CalcMode>("single")
  const [followers, setFollowers] = useState("")
  const [likes, setLikes] = useState("")
  const [comments, setComments] = useState("")
  const [shares, setShares] = useState("")
  const [saves, setSaves] = useState("")
  const [views, setViews] = useState("")
  const [numberOfPosts, setNumberOfPosts] = useState("1")

  const [result, setResult] = useState<TikTokEngagementResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const getInfluencerTier = (followerCount: number): InfluencerTier => {
    if (followerCount < 1000) return { name: "Nano", range: "0 – 1K", description: "New creator building an audience" }
    if (followerCount < 10000) return { name: "Nano", range: "1K – 10K", description: "Niche community builder with high trust" }
    if (followerCount < 50000) return { name: "Micro", range: "10K – 50K", description: "Growing creator with engaged niche following" }
    if (followerCount < 100000) return { name: "Mid-Tier", range: "50K – 100K", description: "Established creator with brand deal potential" }
    if (followerCount < 500000) return { name: "Macro", range: "100K – 500K", description: "Professional creator with significant reach" }
    if (followerCount < 1000000) return { name: "Macro", range: "500K – 1M", description: "Top-tier creator with major brand partnerships" }
    return { name: "Mega", range: "1M+", description: "Celebrity-level creator with massive global reach" }
  }

  const getEngagementRating = (rate: number): EngagementRating => {
    if (rate >= 10) return { label: "Viral", color: "text-purple-500", description: "Exceptional — content is breaking through the algorithm" }
    if (rate >= 6) return { label: "Excellent", color: "text-green-500", description: "Well above average — strong audience connection" }
    if (rate >= 4) return { label: "Good", color: "text-blue-500", description: "Healthy engagement — performing above platform average" }
    if (rate >= 2) return { label: "Average", color: "text-yellow-500", description: "Typical TikTok engagement — room for improvement" }
    if (rate >= 1) return { label: "Below Average", color: "text-orange-500", description: "Content may not be resonating — test new formats" }
    return { label: "Low", color: "text-red-500", description: "Significantly below average — review content strategy" }
  }

  const calculateEngagement = () => {
    if (!followers || !likes) return
    setIsCalculating(true)

    setTimeout(() => {
      const followerCount = Number.parseFloat(followers) || 0
      const totalLikes = Number.parseFloat(likes) || 0
      const totalComments = Number.parseFloat(comments) || 0
      const totalShares = Number.parseFloat(shares) || 0
      const totalSaves = Number.parseFloat(saves) || 0
      const totalViews = Number.parseFloat(views) || 0
      const postCount = Math.max(1, Number.parseFloat(numberOfPosts) || 1)

      const totalEngagements = totalLikes + totalComments + totalShares + totalSaves

      // Primary engagement rate formula: (Total Engagements / Followers) × 100
      // If views provided, also calculate view-based rate
      const engagementRate = followerCount > 0 ? (totalEngagements / followerCount) * 100 : 0

      const likesToCommentsRatio = totalComments > 0 ? totalLikes / totalComments : 0
      const viewsToEngagementRatio = totalViews > 0 ? (totalEngagements / totalViews) * 100 : 0

      // Estimated reach (TikTok typically reaches 15-30% of followers + viral bonus)
      const baseReach = followerCount * 0.2
      const viralMultiplier = engagementRate > 6 ? 1.5 : engagementRate > 3 ? 1.2 : 1.0
      const estimatedReach = Math.round(baseReach * viralMultiplier)

      const influencerTier = getInfluencerTier(followerCount)
      const rating = getEngagementRating(engagementRate)

      // Platform comparison
      const platformComparison: PlatformComparison[] = [
        {
          platform: "TikTok",
          avgEngagementRate: 4.25,
          yourRate: engagementRate,
          performance: engagementRate >= 4.25 ? "Above Avg" : "Below Avg"
        },
        {
          platform: "Instagram Reels",
          avgEngagementRate: 1.23,
          yourRate: engagementRate,
          performance: engagementRate >= 1.23 ? "Above Avg" : "Below Avg"
        },
        {
          platform: "YouTube Shorts",
          avgEngagementRate: 3.80,
          yourRate: engagementRate,
          performance: engagementRate >= 3.80 ? "Above Avg" : "Below Avg"
        },
        {
          platform: "X (Twitter)",
          avgEngagementRate: 0.05,
          yourRate: engagementRate,
          performance: engagementRate >= 0.05 ? "Above Avg" : "Below Avg"
        },
        {
          platform: "Facebook",
          avgEngagementRate: 0.06,
          yourRate: engagementRate,
          performance: engagementRate >= 0.06 ? "Above Avg" : "Below Avg"
        }
      ]

      const perPostAverage: PerPostAverage = {
        avgLikes: Math.round(totalLikes / postCount),
        avgComments: Math.round(totalComments / postCount),
        avgShares: Math.round(totalShares / postCount),
        avgSaves: Math.round(totalSaves / postCount),
        avgViews: Math.round(totalViews / postCount)
      }

      setResult({
        engagementRate: Number.parseFloat(engagementRate.toFixed(2)),
        totalEngagements,
        likes: totalLikes,
        comments: totalComments,
        shares: totalShares,
        saves: totalSaves,
        views: totalViews,
        followers: followerCount,
        likesToCommentsRatio: Number.parseFloat(likesToCommentsRatio.toFixed(1)),
        viewsToEngagementRatio: Number.parseFloat(viewsToEngagementRatio.toFixed(2)),
        estimatedReach,
        influencerTier,
        rating,
        platformComparison,
        perPostAverage
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `TikTok Engagement Rate Analysis`,
      `================================`,
      `Engagement Rate: ${result.engagementRate}% (${result.rating.label})`,
      `Total Engagements: ${result.totalEngagements.toLocaleString()}`,
      `Followers: ${result.followers.toLocaleString()}`,
      `Influencer Tier: ${result.influencerTier.name} (${result.influencerTier.range})`,
      ``,
      `Likes: ${result.likes.toLocaleString()} | Comments: ${result.comments.toLocaleString()}`,
      `Shares: ${result.shares.toLocaleString()} | Saves: ${result.saves.toLocaleString()}`,
      result.views > 0 ? `Views: ${result.views.toLocaleString()}` : "",
      ``,
      `Generated by FastTools TikTok Engagement Rate Calculator`
    ].filter(Boolean)
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"
    if (num >= 1000) return (num / 1000).toFixed(1) + "K"
    return num.toLocaleString()
  }

  return (
    <div className="space-y-8">
      {/* Main Calculator Card */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Zap className="h-6 w-6 text-foreground" />
            </div>
            TikTok Engagement Rate Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Calculate your TikTok engagement rate, compare against benchmarks, and see your influencer tier
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Mode Toggle */}
          <div className="space-y-3">
            <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
              <Target className="h-4 w-4" />
              Calculation Mode
            </GLabel>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => { setMode("single"); setNumberOfPosts("1") }}
                className={`p-3 rounded-lg border-2 transition-all duration-300 text-left ${
                  mode === "single"
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border hover:border-primary/50 bg-card text-muted-foreground"
                }`}
              >
                <BarChart3 className={`h-5 w-5 mb-1 ${mode === "single" ? "text-primary" : "text-muted-foreground"}`} />
                <div className="text-sm font-medium">Single Post</div>
                <div className="text-xs text-muted-foreground">Analyze one video</div>
              </button>
              <button
                onClick={() => setMode("average")}
                className={`p-3 rounded-lg border-2 transition-all duration-300 text-left ${
                  mode === "average"
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border hover:border-primary/50 bg-card text-muted-foreground"
                }`}
              >
                <TrendingUp className={`h-5 w-5 mb-1 ${mode === "average" ? "text-primary" : "text-muted-foreground"}`} />
                <div className="text-sm font-medium">Multiple Posts</div>
                <div className="text-xs text-muted-foreground">Average across posts</div>
              </button>
            </div>
          </div>

          {/* Follower Count */}
          <div className="space-y-2">
            <GLabel htmlFor="followers" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
              <Users className="h-4 w-4" />
              Total Followers
            </GLabel>
            <GInput
              id="followers"
              type="number"
              value={followers}
              onChange={(e) => setFollowers(e.target.value)}
              placeholder="e.g., 50000"
              className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
            />
          </div>

          {/* Engagement Metrics */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Heart className="h-4 w-4" />
              {mode === "average" ? "Total Across All Posts" : "Post Metrics"}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="likes" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                  <Heart className="h-3.5 w-3.5 text-red-500" /> Likes
                </GLabel>
                <GInput
                  id="likes"
                  type="number"
                  value={likes}
                  onChange={(e) => setLikes(e.target.value)}
                  placeholder="e.g., 5000"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="comments" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                  <MessageCircle className="h-3.5 w-3.5 text-blue-500" /> Comments
                </GLabel>
                <GInput
                  id="comments"
                  type="number"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="e.g., 200"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="shares" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                  <Share2 className="h-3.5 w-3.5 text-green-500" /> Shares
                </GLabel>
                <GInput
                  id="shares"
                  type="number"
                  value={shares}
                  onChange={(e) => setShares(e.target.value)}
                  placeholder="e.g., 100"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="saves" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                  <Bookmark className="h-3.5 w-3.5 text-yellow-500" /> Saves
                </GLabel>
                <GInput
                  id="saves"
                  type="number"
                  value={saves}
                  onChange={(e) => setSaves(e.target.value)}
                  placeholder="e.g., 50"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Optional: Views & Post Count */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <GLabel htmlFor="views" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5 text-purple-500" /> Views (optional)
              </GLabel>
              <GInput
                id="views"
                type="number"
                value={views}
                onChange={(e) => setViews(e.target.value)}
                placeholder="e.g., 100000"
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
              />
              <div className="text-xs text-muted-foreground">For view-based engagement rate</div>
            </div>
            {mode === "average" && (
              <div className="space-y-2">
                <GLabel htmlFor="numberOfPosts" className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                  <BarChart3 className="h-3.5 w-3.5" /> Number of Posts
                </GLabel>
                <GInput
                  id="numberOfPosts"
                  type="number"
                  value={numberOfPosts}
                  onChange={(e) => setNumberOfPosts(e.target.value)}
                  placeholder="e.g., 10"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
                <div className="text-xs text-muted-foreground">Totals will be divided by this number</div>
              </div>
            )}
          </div>

          {/* Calculate Button */}
          <GButton
            onClick={calculateEngagement}
            disabled={isCalculating || !followers || !likes}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
          >
            {isCalculating ? (
              <>
                <LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Analyzing Engagement...
              </>
            ) : (
              <>
                <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Calculate Engagement Rate
              </>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Engagement Rating Banner */}
          {(() => {
            const ratingBg = result.rating.label === "Viral" ? "bg-purple-500/10 border-purple-500/30"
              : result.rating.label === "Excellent" ? "bg-green-500/10 border-green-500/30"
              : result.rating.label === "Good" ? "bg-blue-500/10 border-blue-500/30"
              : result.rating.label === "Average" ? "bg-yellow-500/10 border-yellow-500/30"
              : result.rating.label === "Below Average" ? "bg-orange-500/10 border-orange-500/30"
              : "bg-red-500/10 border-red-500/30"
            return (
              <GCard className={`shadow-lg border animate-fade-in-up ${ratingBg}`}>
                <GCardContent className="py-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <Star className={`h-8 w-8 ${result.rating.color}`} />
                      <div>
                        <div className={`text-2xl font-bold ${result.rating.color}`}>{result.rating.label}</div>
                        <div className="text-sm text-muted-foreground">{result.rating.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Influencer Tier</span>
                      </div>
                      <div className="text-lg font-bold text-foreground">{result.influencerTier.name}</div>
                      <div className="text-xs text-muted-foreground">{result.influencerTier.range} followers</div>
                    </div>
                  </div>
                </GCardContent>
              </GCard>
            )
          })()}

          {/* Primary Metrics */}
          <GCard className="shadow-lg border-border animate-fade-in-up bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-foreground" />
                </div>
                Engagement Analysis
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              {/* Main Rate Display */}
              <div className="text-center p-6 rounded-xl bg-card border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">Engagement Rate</div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground">{result.engagementRate}%</div>
                <div className="text-sm text-muted-foreground mt-2">
                  {formatNumber(result.totalEngagements)} engagements / {formatNumber(result.followers)} followers
                </div>
              </div>

              {/* Engagement Breakdown */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-card border border-red-700 text-center">
                  <Heart className="h-4 w-4 text-red-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{formatNumber(mode === "average" ? result.perPostAverage.avgLikes : result.likes)}</div>
                  <div className="text-xs text-muted-foreground">{mode === "average" ? "Avg " : ""}Likes</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-blue-700 text-center">
                  <MessageCircle className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{formatNumber(mode === "average" ? result.perPostAverage.avgComments : result.comments)}</div>
                  <div className="text-xs text-muted-foreground">{mode === "average" ? "Avg " : ""}Comments</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-green-700 text-center">
                  <Share2 className="h-4 w-4 text-green-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{formatNumber(mode === "average" ? result.perPostAverage.avgShares : result.shares)}</div>
                  <div className="text-xs text-muted-foreground">{mode === "average" ? "Avg " : ""}Shares</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-yellow-700 text-center">
                  <Bookmark className="h-4 w-4 text-yellow-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{formatNumber(mode === "average" ? result.perPostAverage.avgSaves : result.saves)}</div>
                  <div className="text-xs text-muted-foreground">{mode === "average" ? "Avg " : ""}Saves</div>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {result.views > 0 && (
                  <div className="p-3 rounded-lg bg-card border border-purple-700">
                    <div className="flex items-center gap-1 mb-1">
                      <Eye className="h-3.5 w-3.5 text-purple-500" />
                      <span className="text-xs text-muted-foreground">View-Based ER</span>
                    </div>
                    <div className="text-xl font-bold text-foreground">{result.viewsToEngagementRatio}%</div>
                    <div className="text-[10px] text-muted-foreground">engagements / views</div>
                  </div>
                )}
                <div className="p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-1 mb-1">
                    <Heart className="h-3.5 w-3.5 text-red-500" />
                    <span className="text-xs text-muted-foreground">Like:Comment</span>
                  </div>
                  <div className="text-xl font-bold text-foreground">{result.likesToCommentsRatio}:1</div>
                  <div className="text-[10px] text-muted-foreground">{result.likesToCommentsRatio < 20 ? "High conversation" : result.likesToCommentsRatio < 50 ? "Normal ratio" : "Passive audience"}</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-1 mb-1">
                    <Users className="h-3.5 w-3.5 text-blue-500" />
                    <span className="text-xs text-muted-foreground">Est. Reach</span>
                  </div>
                  <div className="text-xl font-bold text-foreground">{formatNumber(result.estimatedReach)}</div>
                  <div className="text-[10px] text-muted-foreground">per post</div>
                </div>
              </div>

              {/* Formula */}
              <div className="p-3 bg-muted rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-heading-accent mb-2">Formula Used</h4>
                <code className="block text-xs text-muted-foreground font-mono">
                  Engagement Rate = ((Likes + Comments + Shares + Saves) / Followers) × 100
                </code>
                {result.views > 0 && (
                  <code className="block text-xs text-muted-foreground font-mono mt-1">
                    View-Based ER = ((Likes + Comments + Shares + Saves) / Views) × 100
                  </code>
                )}
              </div>

              {/* Copy Button */}
              <GButton
                onClick={copyResult}
                className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card"
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5" />
                    Copy Results
                  </>
                )}
              </GButton>
            </GCardContent>
          </GCard>

          {/* Platform Comparison */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-4 w-4 text-foreground" />
                </div>
                Cross-Platform Comparison
              </GCardTitle>
              <GCardDescription className="text-sm text-muted-foreground">
                Your engagement rate compared to platform averages
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Platform</th>
                      <th className="text-right py-2 px-2 font-semibold text-muted-foreground">Avg ER</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Your Rate</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">vs Avg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.platformComparison.map((p) => {
                      const diff = p.yourRate - p.avgEngagementRate
                      const isAbove = diff >= 0
                      return (
                        <tr key={p.platform} className={`border-b border-border ${p.platform === "TikTok" ? "bg-primary/5" : ""}`}>
                          <td className="py-2 px-2 font-medium text-foreground">
                            {p.platform}
                            {p.platform === "TikTok" && <span className="ml-1 text-[10px] text-primary">YOUR PLATFORM</span>}
                          </td>
                          <td className="py-2 px-2 text-right text-muted-foreground">{p.avgEngagementRate}%</td>
                          <td className="py-2 px-2 text-right text-heading-accent font-semibold">{p.yourRate}%</td>
                          <td className="py-2 px-2 text-right">
                            <span className={`flex items-center justify-end gap-0.5 font-medium ${isAbove ? "text-green-500" : "text-red-500"}`}>
                              {isAbove ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                              {isAbove ? "+" : ""}{diff.toFixed(2)}%
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">
                Source: Average engagement rates based on 2025-2026 industry reports. Rates vary by niche, follower count, and content type.
              </p>
            </GCardContent>
          </GCard>

          {/* TikTok Benchmark by Follower Count */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <Award className="h-4 w-4 text-foreground" />
                </div>
                TikTok Engagement Benchmarks by Follower Count
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Tier</th>
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Followers</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Avg ER</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Typical Likes/Post</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tier: "Nano", followers: "1K – 10K", er: "8 – 15%", likes: "100 – 1,500", isUser: result.followers < 10000 },
                      { tier: "Micro", followers: "10K – 50K", er: "5 – 10%", likes: "500 – 5,000", isUser: result.followers >= 10000 && result.followers < 50000 },
                      { tier: "Mid-Tier", followers: "50K – 100K", er: "4 – 7%", likes: "2K – 7K", isUser: result.followers >= 50000 && result.followers < 100000 },
                      { tier: "Macro", followers: "100K – 1M", er: "3 – 5%", likes: "5K – 50K", isUser: result.followers >= 100000 && result.followers < 1000000 },
                      { tier: "Mega", followers: "1M+", er: "1 – 3%", likes: "10K – 300K+", isUser: result.followers >= 1000000 },
                    ].map((row) => (
                      <tr key={row.tier} className={`border-b border-border ${row.isUser ? "bg-primary/5" : ""}`}>
                        <td className="py-2 px-2 font-medium text-foreground">
                          {row.tier}
                          {row.isUser && <span className="ml-1 text-[10px] text-primary">YOU</span>}
                        </td>
                        <td className="py-2 px-2 text-foreground">{row.followers}</td>
                        <td className="py-2 px-2 text-right text-heading-accent font-semibold">{row.er}</td>
                        <td className="py-2 px-2 text-right text-foreground">{row.likes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">
                Smaller accounts generally have higher engagement rates due to more personal audience connections. Mega accounts trade engagement % for massive absolute reach.
              </p>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
