"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, DollarSign, Users, TrendingUp, Heart,
  BarChart3, Target, Award, Zap, Eye, Star, Calendar,
  ArrowUpRight, FileText
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type {
  InfluencerRateResult, Platform, ContentType, NicheMultiplier,
  InfluencerTier, ContentTypeRate, PlatformRate, MonthlyEarnings, MediaKitSummary
} from "@/types/calculator-types/influencer-rate-calculator.types"

const platforms: { id: Platform; label: string; icon: string }[] = [
  { id: "tiktok", label: "TikTok", icon: "🎵" },
  { id: "instagram", label: "Instagram", icon: "📸" },
  { id: "youtube", label: "YouTube", icon: "▶️" },
  { id: "x", label: "X (Twitter)", icon: "𝕏" },
  { id: "facebook", label: "Facebook", icon: "📘" },
]

const contentTypes: Record<Platform, { id: ContentType; label: string }[]> = {
  tiktok: [
    { id: "post", label: "TikTok Video" },
    { id: "story", label: "TikTok Story" },
  ],
  instagram: [
    { id: "post", label: "Feed Post" },
    { id: "reel", label: "Reel" },
    { id: "story", label: "Story" },
  ],
  youtube: [
    { id: "video", label: "Dedicated Video" },
    { id: "short", label: "YouTube Short" },
    { id: "post", label: "Integration / Mention" },
  ],
  x: [
    { id: "post", label: "Post / Tweet" },
    { id: "thread", label: "Thread" },
  ],
  facebook: [
    { id: "post", label: "Feed Post" },
    { id: "reel", label: "Reel" },
    { id: "video", label: "Video" },
  ],
}

const niches: { id: NicheMultiplier; label: string; multiplier: number }[] = [
  { id: "general", label: "General / Lifestyle", multiplier: 1.0 },
  { id: "fashion", label: "Fashion & Style", multiplier: 1.15 },
  { id: "beauty", label: "Beauty & Skincare", multiplier: 1.2 },
  { id: "tech", label: "Tech & Software", multiplier: 1.35 },
  { id: "finance", label: "Finance & Business", multiplier: 1.5 },
  { id: "health", label: "Health & Fitness", multiplier: 1.1 },
  { id: "food", label: "Food & Cooking", multiplier: 1.05 },
  { id: "travel", label: "Travel", multiplier: 1.1 },
  { id: "gaming", label: "Gaming", multiplier: 1.0 },
  { id: "education", label: "Education", multiplier: 1.25 },
  { id: "parenting", label: "Parenting & Family", multiplier: 1.15 },
]

// Base CPM rates by platform ($ per 1,000 followers)
const baseCPMByPlatform: Record<Platform, number> = {
  tiktok: 12,
  instagram: 10,
  youtube: 20,
  x: 6,
  facebook: 8,
}

// Content type multipliers relative to standard post
const contentTypeMultiplier: Record<ContentType, number> = {
  post: 1.0,
  story: 0.5,
  reel: 1.3,
  short: 0.7,
  video: 2.5,
  thread: 1.4,
}

export function InfluencerRateCalculator() {
  const [platform, setPlatform] = useState<Platform>("tiktok")
  const [contentType, setContentType] = useState<ContentType>("post")
  const [followers, setFollowers] = useState("")
  const [engagementRate, setEngagementRate] = useState("")
  const [niche, setNiche] = useState<NicheMultiplier>("general")
  const [postsPerWeek, setPostsPerWeek] = useState("2")

  const [result, setResult] = useState<InfluencerRateResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const getInfluencerTier = (count: number): InfluencerTier => {
    if (count < 1000) return { name: "Nano", range: "0 – 1K", description: "New creator" }
    if (count < 10000) return { name: "Nano", range: "1K – 10K", description: "Niche community builder" }
    if (count < 50000) return { name: "Micro", range: "10K – 50K", description: "Best ROI for brands" }
    if (count < 100000) return { name: "Mid-Tier", range: "50K – 100K", description: "Scalable partnerships" }
    if (count < 500000) return { name: "Macro", range: "100K – 500K", description: "Broad reach campaigns" }
    if (count < 1000000) return { name: "Macro", range: "500K – 1M", description: "Major brand deals" }
    return { name: "Mega", range: "1M+", description: "Celebrity-level creator" }
  }

  const calculateRate = () => {
    if (!followers || !engagementRate) return
    setIsCalculating(true)

    setTimeout(() => {
      const followerCount = Number.parseFloat(followers) || 0
      const er = Number.parseFloat(engagementRate) || 0
      const weeklyPosts = Number.parseFloat(postsPerWeek) || 2
      const nicheData = niches.find(n => n.id === niche) || niches[0]

      const tier = getInfluencerTier(followerCount)

      // Base rate = (Followers / 1000) × Platform CPM
      const platformCPM = baseCPMByPlatform[platform]
      const baseRate = (followerCount / 1000) * platformCPM

      // Engagement multiplier: higher ER = higher rate
      // Average ER is ~4% for TikTok, ~1.2% for Instagram
      const avgER = platform === "tiktok" ? 4.25 : platform === "instagram" ? 1.23 : platform === "youtube" ? 3.8 : platform === "x" ? 0.05 : 0.06
      const erMultiplier = Math.max(0.5, Math.min(2.5, er / avgER))

      // Content type multiplier
      const ctMultiplier = contentTypeMultiplier[contentType]

      // Niche multiplier
      const nicheMulti = nicheData.multiplier

      // Final estimated rate
      const estimatedRate = baseRate * erMultiplier * ctMultiplier * nicheMulti

      // Rate range (±25%)
      const rateRange = {
        min: Math.round(estimatedRate * 0.75),
        max: Math.round(estimatedRate * 1.25)
      }

      // CPM and CPE
      const cpm = followerCount > 0 ? (estimatedRate / followerCount) * 1000 : 0
      const estimatedEngagements = followerCount * (er / 100)
      const cpe = estimatedEngagements > 0 ? estimatedRate / estimatedEngagements : 0

      // Estimated reach & impressions
      const reachRate = platform === "tiktok" ? 0.20 : platform === "instagram" ? 0.15 : platform === "youtube" ? 0.25 : 0.05
      const estimatedReach = Math.round(followerCount * reachRate * (er > avgER ? 1.3 : 1.0))
      const estimatedImpressions = Math.round(estimatedReach * 1.5)

      // Rates by content type for this platform
      const rateByContentType: ContentTypeRate[] = contentTypes[platform].map(ct => ({
        type: ct.label,
        rate: Math.round(baseRate * erMultiplier * contentTypeMultiplier[ct.id] * nicheMulti),
        description: ct.id === "story" ? "24hr visibility, swipe-up" : ct.id === "reel" || ct.id === "short" ? "Short-form, high reach" : ct.id === "video" ? "Long-form, deep integration" : ct.id === "thread" ? "Multi-post, educational" : "Standard feed placement"
      }))

      // Cross-platform comparison
      const platformComparison: PlatformRate[] = platforms.map(p => {
        const pCPM = baseCPMByPlatform[p.id]
        const pAvgER = p.id === "tiktok" ? 4.25 : p.id === "instagram" ? 1.23 : p.id === "youtube" ? 3.8 : p.id === "x" ? 0.05 : 0.06
        const pERMulti = Math.max(0.5, Math.min(2.5, er / pAvgER))
        return {
          platform: p.label,
          estimatedRate: Math.round((followerCount / 1000) * pCPM * pERMulti * nicheMulti),
          avgCPM: pCPM
        }
      })

      // Monthly earnings potential
      const monthlyPosts = Math.round(weeklyPosts * 4.33)
      const monthlyEarnings: MonthlyEarnings = {
        postsPerWeek: weeklyPosts,
        monthlyPosts,
        monthlyEarnings: Math.round(estimatedRate * monthlyPosts),
        annualEarnings: Math.round(estimatedRate * monthlyPosts * 12)
      }

      // Media kit summary
      const mediaKitSummary: MediaKitSummary = {
        followers: followerCount,
        engagementRate: er,
        estimatedCPM: Number.parseFloat(cpm.toFixed(2)),
        suggestedRate: Math.round(estimatedRate),
        tier: tier.name,
        niche: nicheData.label
      }

      setResult({
        estimatedRate: Math.round(estimatedRate),
        rateRange,
        cpm: Number.parseFloat(cpm.toFixed(2)),
        cpe: Number.parseFloat(cpe.toFixed(2)),
        estimatedReach,
        estimatedImpressions,
        platform,
        contentType,
        influencerTier: tier,
        nicheAdjustment: nicheMulti,
        rateByContentType,
        platformComparison,
        monthlyEarningsPotential: monthlyEarnings,
        mediaKitSummary
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `Influencer Sponsorship Rate Estimate`,
      `=====================================`,
      `Platform: ${platforms.find(p => p.id === result.platform)?.label}`,
      `Tier: ${result.influencerTier.name} (${result.influencerTier.range})`,
      ``,
      `Suggested Rate: $${result.estimatedRate}/post`,
      `Rate Range: $${result.rateRange.min} – $${result.rateRange.max}`,
      `CPM: $${result.cpm}`,
      `CPE: $${result.cpe}`,
      ``,
      `Monthly Potential (${result.monthlyEarningsPotential.postsPerWeek} posts/week):`,
      `  Monthly: $${result.monthlyEarningsPotential.monthlyEarnings.toLocaleString()}`,
      `  Annual: $${result.monthlyEarningsPotential.annualEarnings.toLocaleString()}`,
      ``,
      `Generated by FastTools Influencer Rate Calculator`
    ]
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount)
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"
    if (num >= 1000) return (num / 1000).toFixed(1) + "K"
    return num.toLocaleString()
  }

  return (
    <div className="space-y-8">
      {/* Main Calculator */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <DollarSign className="h-6 w-6 text-foreground" />
            </div>
            Influencer Sponsorship Rate Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Calculate how much to charge (or pay) for sponsored posts based on followers, engagement, platform & niche
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Platform Selection */}
          <div className="space-y-3">
            <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
              <Target className="h-4 w-4" />
              Platform
            </GLabel>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {platforms.map((p) => (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => { setPlatform(p.id); setContentType(contentTypes[p.id][0].id) }}
                  aria-pressed={platform === p.id}
                  className={`p-3 rounded-lg border transition-all duration-300 text-center ${
                    platform === p.id
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"
                  }`}
                >
                  <div className="text-lg mb-0.5">{p.icon}</div>
                  <div className="text-xs font-medium">{p.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Type */}
          <div className="space-y-3">
            <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
              <FileText className="h-4 w-4" />
              Content Type
            </GLabel>
            <div className="flex flex-wrap gap-2">
              {contentTypes[platform].map((ct) => (
                <button
                  type="button"
                  key={ct.id}
                  onClick={() => setContentType(ct.id)}
                  aria-pressed={contentType === ct.id}
                  className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                    contentType === ct.id
                      ? "border-primary bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"
                  }`}
                >
                  {ct.label}
                </button>
              ))}
            </div>
          </div>

          {/* Core Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                placeholder="e.g., 25000"
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <GLabel htmlFor="engagementRate" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
                <Heart className="h-4 w-4" />
                Engagement Rate (%)
              </GLabel>
              <GInput
                id="engagementRate"
                type="number"
                step="0.1"
                value={engagementRate}
                onChange={(e) => setEngagementRate(e.target.value)}
                placeholder="e.g., 7.5"
                className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
              />
              <div className="text-xs text-muted-foreground">Use our TikTok ER Calculator to find this</div>
            </div>
          </div>

          {/* Niche */}
          <div className="space-y-3">
            <GLabel className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
              <Star className="h-4 w-4" />
              Niche / Industry
            </GLabel>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {niches.map((n) => (
                <button
                  type="button"
                  key={n.id}
                  onClick={() => setNiche(n.id)}
                  aria-pressed={niche === n.id}
                  className={`px-3 py-2 rounded-lg border text-xs transition-all ${
                    niche === n.id
                      ? "border-primary bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"
                  }`}
                >
                  {n.label}
                  {n.multiplier > 1 && (
                    <span className={`ml-1 text-[10px] ${niche === n.id ? "text-primary-foreground/80" : "text-primary"}`}>+{Math.round((n.multiplier - 1) * 100)}%</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Per Week */}
          <div className="space-y-2">
            <GLabel htmlFor="postsPerWeek" className="text-sm font-semibold flex items-center gap-2 text-heading-accent">
              <Calendar className="h-4 w-4" />
              Sponsored Posts Per Week (for earnings estimate)
            </GLabel>
            <GInput
              id="postsPerWeek"
              type="number"
              value={postsPerWeek}
              onChange={(e) => setPostsPerWeek(e.target.value)}
              placeholder="2"
              className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500 max-w-xs"
            />
          </div>

          {/* Calculate */}
          <GButton
            onClick={calculateRate}
            disabled={isCalculating || !followers || !engagementRate}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
          >
            {isCalculating ? (
              <>
                <LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Calculating Rate...
              </>
            ) : (
              <>
                <Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Calculate Sponsorship Rate
              </>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Tier Badge */}
          <GCard className="shadow-lg border border-primary/20 animate-fade-in-up bg-card">
            <GCardContent className="py-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">{result.influencerTier.name} Influencer</div>
                    <div className="text-sm text-muted-foreground">{result.influencerTier.range} followers — {result.influencerTier.description}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Niche Premium</div>
                  <div className="text-lg font-bold text-foreground">
                    {result.nicheAdjustment > 1 ? `+${Math.round((result.nicheAdjustment - 1) * 100)}%` : "Base rate"}
                  </div>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Primary Rate */}
          <GCard className="shadow-lg border-border animate-fade-in-up bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <DollarSign className="h-4 w-4 text-foreground" />
                </div>
                Your Suggested Sponsorship Rate
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              {/* Main Rate */}
              <div className="text-center p-6 rounded-xl bg-card border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">Estimated Rate Per Post</div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground">{formatCurrency(result.estimatedRate)}</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Range: {formatCurrency(result.rateRange.min)} – {formatCurrency(result.rateRange.max)}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-card border border-blue-700 text-center">
                  <div className="text-xs text-muted-foreground mb-1">CPM</div>
                  <div className="text-xl font-bold text-foreground">${result.cpm}</div>
                  <div className="text-[10px] text-muted-foreground">per 1K followers</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-green-700 text-center">
                  <div className="text-xs text-muted-foreground mb-1">CPE</div>
                  <div className="text-xl font-bold text-foreground">${result.cpe}</div>
                  <div className="text-[10px] text-muted-foreground">per engagement</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-purple-700 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Est. Reach</div>
                  <div className="text-xl font-bold text-foreground">{formatNumber(result.estimatedReach)}</div>
                  <div className="text-[10px] text-muted-foreground">per post</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-primary text-center">
                  <div className="text-xs text-muted-foreground mb-1">Impressions</div>
                  <div className="text-xl font-bold text-foreground">{formatNumber(result.estimatedImpressions)}</div>
                  <div className="text-[10px] text-muted-foreground">estimated</div>
                </div>
              </div>

              {/* Earnings Potential */}
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="text-sm font-semibold text-heading-accent flex items-center gap-1.5">
                      <TrendingUp className="h-4 w-4" />
                      Earnings Potential ({result.monthlyEarningsPotential.postsPerWeek} sponsored posts/week)
                    </div>
                  </div>
                  <div className="flex gap-4 text-right">
                    <div>
                      <div className="text-lg font-bold text-foreground">{formatCurrency(result.monthlyEarningsPotential.monthlyEarnings)}</div>
                      <div className="text-xs text-muted-foreground">per month</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">{formatCurrency(result.monthlyEarningsPotential.annualEarnings)}</div>
                      <div className="text-xs text-muted-foreground">per year</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <GButton
                onClick={copyResult}
                className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card"
              >
                {copied ? (
                  <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</>
                ) : (
                  <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Results</>
                )}
              </GButton>
            </GCardContent>
          </GCard>

          {/* Rate by Content Type */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <BarChart3 className="h-4 w-4 text-foreground" />
                </div>
                Rates by Content Type ({platforms.find(p => p.id === platform)?.label})
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Content Type</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Rate</th>
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.rateByContentType.map((ct) => (
                      <tr key={ct.type} className="border-b border-border">
                        <td className="py-2 px-2 font-medium text-foreground">{ct.type}</td>
                        <td className="py-2 px-2 text-right text-heading-accent font-semibold">{formatCurrency(ct.rate)}</td>
                        <td className="py-2 px-2 text-muted-foreground">{ct.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* Cross-Platform Comparison */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <Zap className="h-4 w-4 text-foreground" />
                </div>
                Cross-Platform Rate Comparison
              </GCardTitle>
              <GCardDescription className="text-sm text-muted-foreground">
                Your estimated rate on each platform with the same followers & engagement
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Platform</th>
                      <th className="text-right py-2 px-2 font-semibold text-muted-foreground">Base CPM</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Est. Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.platformComparison.map((p) => {
                      const isSelected = p.platform === platforms.find(pl => pl.id === platform)?.label
                      return (
                        <tr key={p.platform} className={`border-b border-border ${isSelected ? "bg-primary/5" : ""}`}>
                          <td className="py-2 px-2 font-medium text-foreground">
                            {p.platform}
                            {isSelected && <span className="ml-1 text-[10px] text-primary">SELECTED</span>}
                          </td>
                          <td className="py-2 px-2 text-right text-muted-foreground">${p.avgCPM}</td>
                          <td className="py-2 px-2 text-right text-heading-accent font-semibold">{formatCurrency(p.estimatedRate)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">
                Rates assume same follower count and engagement rate across platforms. Actual rates vary by platform-specific audience quality.
              </p>
            </GCardContent>
          </GCard>

          {/* Media Kit Summary */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <FileText className="h-4 w-4 text-foreground" />
                </div>
                Media Kit Summary
              </GCardTitle>
              <GCardDescription className="text-sm text-muted-foreground">
                Key stats for your media kit or rate card
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-muted rounded-lg border border-border text-center">
                  <div className="text-xs text-muted-foreground">Followers</div>
                  <div className="text-lg font-bold text-foreground">{formatNumber(result.mediaKitSummary.followers)}</div>
                </div>
                <div className="p-3 bg-muted rounded-lg border border-border text-center">
                  <div className="text-xs text-muted-foreground">Engagement Rate</div>
                  <div className="text-lg font-bold text-foreground">{result.mediaKitSummary.engagementRate}%</div>
                </div>
                <div className="p-3 bg-muted rounded-lg border border-border text-center">
                  <div className="text-xs text-muted-foreground">Tier</div>
                  <div className="text-lg font-bold text-foreground">{result.mediaKitSummary.tier}</div>
                </div>
                <div className="p-3 bg-muted rounded-lg border border-border text-center">
                  <div className="text-xs text-muted-foreground">Niche</div>
                  <div className="text-lg font-bold text-foreground">{result.mediaKitSummary.niche}</div>
                </div>
                <div className="p-3 bg-muted rounded-lg border border-border text-center">
                  <div className="text-xs text-muted-foreground">CPM</div>
                  <div className="text-lg font-bold text-foreground">${result.mediaKitSummary.estimatedCPM}</div>
                </div>
                <div className="p-3 bg-muted rounded-lg border border-border text-center">
                  <div className="text-xs text-muted-foreground">Rate/Post</div>
                  <div className="text-lg font-bold text-foreground">{formatCurrency(result.mediaKitSummary.suggestedRate)}</div>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Formula */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardContent className="py-4">
              <h4 className="text-xs font-semibold text-heading-accent mb-2">Formula Used</h4>
              <div className="space-y-1">
                <code className="block text-xs text-muted-foreground font-mono">
                  Base Rate = (Followers ÷ 1,000) × Platform CPM
                </code>
                <code className="block text-xs text-muted-foreground font-mono">
                  ER Multiplier = Your ER ÷ Platform Avg ER (capped 0.5x – 2.5x)
                </code>
                <code className="block text-xs text-muted-foreground font-mono">
                  Final Rate = Base Rate × ER Multiplier × Content Type × Niche Premium
                </code>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
