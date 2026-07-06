import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import {
  DollarSign, Users, TrendingUp, BarChart3, Target, Award,
  CheckCircle, AlertTriangle, Lightbulb, Heart, Star, FileText
} from "lucide-react"

const InfluencerRateCalculator = dynamic(
  () => import("@/components/social-media/influencer-rate-calculator").then(mod => mod.InfluencerRateCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Influencer Price Calculator — TikTok, Instagram & YouTube Rates"
const TOOL_NAME = "Influencer Sponsorship Rate Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Free influencer pricing calculator. Estimate sponsorship rates for TikTok, Instagram, YouTube & X. Based on followers, engagement rate, niche & content type. No signup.",
  path: "/social-media-tools/influencer-rate-calculator",
  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: TOOL_NAME, href: "/social-media-tools/influencer-rate-calculator" }
  ],
  schemaOptions: {
    name: "Influencer Sponsorship Rate Calculator | Creator Pricing & Brand Deal Estimator",
    alternateName: [
      "Influencer Rate Calculator",
      "Sponsorship Rate Calculator",
      "Creator Rate Card Calculator",
      "Micro-Influencer Pricing Tool",
      "Brand Deal Calculator",
      "TikTok Rate Calculator",
      "Instagram Sponsorship Calculator",
      "YouTube Brand Deal Estimator",
      "Creator Earnings Calculator",
      "UGC Rate Calculator",
      "Influencer Pricing Tool",
      "Affiliate Earnings Estimator",
      "Sponsored Post Rate Calculator",
      "CPM Influencer Tool",
      "Rate Card Generator",
    ],
    applicationCategory: "UtilityApplication",
    featureList: [
      "Calculate sponsorship rates for TikTok, Instagram, YouTube, X, Facebook",
      "Factor in engagement rate, niche, and content type",
      "Influencer tier classification (Nano to Mega)",
      "Rate comparison across content types (post, reel, story, video)",
      "Cross-platform rate comparison",
      "Monthly and annual earnings potential",
      "Media kit summary generator",
      "CPM and CPE calculation",
      "11 niche categories with premium multipliers",
      "Copy results to clipboard",
      "Free to use with no signup required"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Social Media Tools",
}

export default function InfluencerRateCalculatorPage() {
  const toolContent = {
    toolName: "Influencer Sponsorship Rate Calculator — Set Your Brand Deal Pricing",
    overview: "Calculate how much to charge for sponsored posts on TikTok, Instagram, YouTube, X, and Facebook. Factor in your follower count, engagement rate, content type, and niche to get a data-driven rate — plus cross-platform comparison, monthly earnings potential, and a ready-to-use media kit summary.",

    definition: "An influencer sponsorship rate is the amount a creator charges (or a brand pays) for a sponsored content placement. Rates are primarily determined by follower count, engagement rate, platform, content type, and niche — with engagement rate being the strongest predictor of fair pricing.",

    quickAnswer: "A micro-influencer with 25,000 TikTok followers and 7.5% engagement rate in the general niche can typically charge $400-$650 per sponsored TikTok video. Use this calculator to get a precise estimate based on your specific metrics, platform, and niche.",

    keyTakeaways: [
      "Engagement rate matters more than follower count — a nano creator with 12% ER often earns more per follower than a mega creator with 1.5% ER",
      "YouTube pays the highest per-post rates (2-3x TikTok/Instagram) because videos have longer shelf life and deeper integration",
      "Finance, tech, and education niches command 25-50% premium rates due to higher advertiser budgets",
      "Micro-influencers (10K-50K) offer brands the best ROI — highest engagement rates with meaningful reach",
      "Always quote a range (±25%) rather than a single number to leave room for negotiation"
    ],

    howToSteps: [
      "Select your platform (TikTok, Instagram, YouTube, X, or Facebook) and content type (post, reel, story, video, etc.).",
      "Enter your total follower count and engagement rate. Use our TikTok ER Calculator if you need to find your engagement rate.",
      "Choose your niche — high-value niches like finance and tech command premium rates.",
      "Click Calculate to see your suggested rate, rate range, CPM, earnings potential, and media kit summary."
    ],

    features: [
      "Multi-Platform Support: Calculate rates for TikTok, Instagram, YouTube, X, and Facebook in one tool.",
      "Content Type Pricing: Different rates for posts, reels, stories, videos, shorts, and threads.",
      "Niche Premiums: 11 niche categories with real market premium multipliers (finance +50%, tech +35%, beauty +20%).",
      "Engagement-Weighted Pricing: Your engagement rate vs platform average directly adjusts your rate up or down.",
      "Cross-Platform Comparison: See what your same audience would earn on every platform side-by-side.",
      "Earnings Projector: Monthly and annual earnings based on your posting frequency.",
      "Media Kit Generator: Ready-to-use summary with all key stats for your rate card.",
      "CPM & CPE Metrics: Cost Per Mille and Cost Per Engagement for brand-side evaluation."
    ],

    useCases: [
      "Creators: Set your sponsorship rates with confidence using data, not guesswork.",
      "Brand Managers: Evaluate whether an influencer's rates are fair based on their actual metrics.",
      "Marketing Agencies: Quickly estimate campaign budgets across multiple creators and platforms.",
      "Media Kit Creation: Generate rate card data to include in your professional media kit.",
      "Rate Negotiation: Back up your pricing with CPM, CPE, and platform benchmark data.",
      "Platform Strategy: Compare potential earnings across platforms to decide where to focus.",
      "Niche Evaluation: Understand how your niche premium affects your earning potential."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <DollarSign className="h-6 w-6 text-primary" />
            How Influencer Sponsorship Rates Work
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Influencer pricing is driven by a combination of <strong>reach</strong> (how many people see your content), <strong>engagement</strong> (how many interact with it), and <strong>audience value</strong> (how valuable your niche is to advertisers). The industry has settled on a CPM-based model with adjustments for these factors.
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border mt-4">
              <h3 className="font-semibold text-heading-accent mb-2">The Rate Formula</h3>
              <div className="space-y-2">
                <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                  Base Rate = (Followers ÷ 1,000) × Platform CPM
                </code>
                <code className="block bg-card p-3 rounded border border-border text-sm font-mono overflow-x-auto">
                  Adjusted Rate = Base Rate × ER Multiplier × Content Type × Niche Premium
                </code>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                The ER Multiplier compares your engagement rate to the platform average. Above-average ER increases your rate; below-average decreases it.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <BarChart3 className="h-6 w-6 text-primary" />
            Sponsorship Rate Benchmarks by Tier
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground font-semibold">
                <tr>
                  <th className="p-3">Tier</th>
                  <th className="p-3">Followers</th>
                  <th className="p-3">TikTok</th>
                  <th className="p-3">Instagram</th>
                  <th className="p-3">YouTube</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">Nano</td>
                  <td className="p-3">1K – 10K</td>
                  <td className="p-3">$50 – $200</td>
                  <td className="p-3">$50 – $150</td>
                  <td className="p-3">$100 – $500</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Micro</td>
                  <td className="p-3">10K – 50K</td>
                  <td className="p-3">$200 – $1,000</td>
                  <td className="p-3">$150 – $800</td>
                  <td className="p-3">$500 – $2,500</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Mid-Tier</td>
                  <td className="p-3">50K – 100K</td>
                  <td className="p-3">$1,000 – $2,500</td>
                  <td className="p-3">$800 – $2,000</td>
                  <td className="p-3">$2,500 – $5,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Macro</td>
                  <td className="p-3">100K – 1M</td>
                  <td className="p-3">$2,500 – $20,000</td>
                  <td className="p-3">$2,000 – $15,000</td>
                  <td className="p-3">$5,000 – $50,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Mega</td>
                  <td className="p-3">1M+</td>
                  <td className="p-3">$20,000 – $100,000+</td>
                  <td className="p-3">$15,000 – $100,000+</td>
                  <td className="p-3">$50,000 – $500,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Note:</strong> These are per-post ranges for standard sponsored content. Rates vary significantly by engagement rate, niche, content quality, and brand budget. Finance and tech niches typically pay 30-50% above these ranges.
          </p>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Star className="h-6 w-6 text-primary" />
            Niche Premiums: Why Your Industry Matters
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Not all followers are worth the same to advertisers. A finance creator&apos;s audience has higher purchasing power and conversion intent than a general entertainment audience. This translates directly into <strong>niche premium rates</strong>:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground font-semibold">
                  <tr>
                    <th className="p-3">Niche</th>
                    <th className="p-3">Premium</th>
                    <th className="p-3">Why Brands Pay More</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Finance & Business</td>
                    <td className="p-3 text-green-500 font-semibold">+50%</td>
                    <td className="p-3 text-muted-foreground">High-value products (SaaS, investing, insurance), high customer LTV</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Tech & Software</td>
                    <td className="p-3 text-green-500 font-semibold">+35%</td>
                    <td className="p-3 text-muted-foreground">Developer tools, SaaS subscriptions, high-ticket B2B products</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Education</td>
                    <td className="p-3 text-blue-500 font-semibold">+25%</td>
                    <td className="p-3 text-muted-foreground">Course platforms, edtech, professional development tools</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Beauty & Skincare</td>
                    <td className="p-3 text-blue-500 font-semibold">+20%</td>
                    <td className="p-3 text-muted-foreground">High repeat purchase rate, strong impulse buy behavior</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Fashion & Style</td>
                    <td className="p-3 text-yellow-500 font-semibold">+15%</td>
                    <td className="p-3 text-muted-foreground">Affiliate-friendly, seasonal campaigns, lifestyle brands</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">General / Entertainment</td>
                    <td className="p-3 text-muted-foreground font-semibold">Base rate</td>
                    <td className="p-3 text-muted-foreground">Broad audience, lower advertiser specificity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Target className="h-6 w-6 text-primary" />
            Why Micro-Influencers Get the Best Deals
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Micro-influencers (10K–50K followers) are the <strong>sweet spot of influencer marketing</strong>. Here&apos;s why brands increasingly prefer them over mega-influencers:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                <h3 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Micro (10K-50K)
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>5-10% average engagement rate</li>
                  <li>60% higher conversion rate than macro</li>
                  <li>Audience trusts recommendations more</li>
                  <li>$200-$1,000 per post = accessible for SMBs</li>
                  <li className="text-green-500 font-medium mt-2">Best CPE (Cost Per Engagement)</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/5">
                <h3 className="font-semibold text-orange-500 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Mega (1M+)
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>1-3% average engagement rate</li>
                  <li>Lower trust due to obvious sponsorship</li>
                  <li>$20K-$100K+ per post = enterprise only</li>
                  <li>High reach but low per-follower impact</li>
                  <li className="text-orange-500 font-medium mt-2">Best for awareness, not conversions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Lightbulb className="h-6 w-6 text-primary" />
            How to Negotiate Higher Sponsorship Rates
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Build a Strong Media Kit
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Include follower count, ER, demographics</li>
                <li>Show past brand collaboration results</li>
                <li>Include screenshot of analytics dashboard</li>
                <li>List your rates by content type upfront</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Prove Your Value
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Share conversion data from past campaigns</li>
                <li>Show save/share rates (high purchase intent)</li>
                <li>Highlight your niche authority and audience trust</li>
                <li>Offer case studies with concrete ROI numbers</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Award className="h-5 w-5" />
                Package Deals
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Bundle content types (post + 3 stories = 20% more)</li>
                <li>Offer multi-post packages at slight discount</li>
                <li>Include usage rights as a paid add-on (+25-50%)</li>
                <li>Charge extra for exclusivity periods</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Increase Your Leverage
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Grow engagement rate (more valuable than followers)</li>
                <li>Niche down for higher advertiser demand</li>
                <li>Build waitlist of interested brands</li>
                <li>Never accept first offer — always counter</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <DollarSign className="h-6 w-6 text-primary" />
            Understanding CPM, CPE, and Content Type Pricing
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Three key metrics drive influencer pricing conversations between creators and brands:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-heading-accent mb-2">CPM (Cost Per Mille)</h3>
                <p className="text-sm text-muted-foreground">
                  Cost per 1,000 followers. The baseline metric. TikTok avg: $12, Instagram: $10, YouTube: $20. Higher CPM = more valuable audience.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-heading-accent mb-2">CPE (Cost Per Engagement)</h3>
                <p className="text-sm text-muted-foreground">
                  Your rate divided by expected engagements. Brands use this to compare creators fairly. Lower CPE = better value for the brand.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-heading-accent mb-2">Content Multiplier</h3>
                <p className="text-sm text-muted-foreground">
                  YouTube videos pay 2.5x a standard post (longer shelf life). Reels pay 1.3x (high reach). Stories pay 0.5x (24hr visibility).
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    ),

    proTip: "Never share a single rate — always provide a range. Quote your rate as '$X – $Y depending on scope, usage rights, and exclusivity.' This gives you negotiation room and positions you as a professional who understands the variables that affect pricing.",

    faqs: [
      {
        question: "How much should a micro-influencer charge per post?",
        answer: "Micro-influencers (10K-50K followers) typically charge $200-$1,000 per TikTok video, $150-$800 per Instagram post/reel, and $500-$2,500 per YouTube video. The exact rate depends on engagement rate, niche, and content type. High-value niches like finance and tech can charge 30-50% more. Use this calculator with your specific metrics for a personalized estimate."
      },
      {
        question: "How is influencer sponsorship rate calculated?",
        answer: "The standard formula is: Rate = (Followers ÷ 1,000) × Platform CPM × Engagement Multiplier × Content Type Multiplier × Niche Premium. Platform CPM varies: TikTok ~$12, Instagram ~$10, YouTube ~$20. Engagement rate above the platform average increases your rate, while below average decreases it. Niche premiums range from 0% (general) to +50% (finance)."
      },
      {
        question: "What is a good CPM for influencer marketing?",
        answer: "Average CPMs by platform: TikTok $10-$15, Instagram $8-$12, YouTube $15-$25, X/Twitter $4-$8, Facebook $6-$10. 'Good' depends on the brand's goals — awareness campaigns accept higher CPMs for reach, while conversion campaigns demand lower CPMs with higher engagement rates. Micro-influencers often have lower CPMs but higher ROI due to better engagement."
      },
      {
        question: "Why do YouTube sponsorships pay more than TikTok?",
        answer: "YouTube videos have a much longer shelf life (months/years vs hours/days on TikTok), allowing deeper product integration (dedicated reviews, tutorials), and YouTube's audience tends to have higher purchase intent. A YouTube video might generate views and conversions for years, while a TikTok video's impact is concentrated in the first 48 hours. This longevity justifies 2-3x higher rates."
      },
      {
        question: "Should I charge different rates for different content types?",
        answer: "Yes. Industry standard multipliers: Dedicated YouTube video = 2.5x base rate (highest effort + longest shelf life), Instagram Reel/TikTok = 1.0-1.3x (standard), Instagram Story = 0.5x (24hr visibility, less production), Thread/carousel = 1.3-1.5x (more content, educational value). Always list rates by content type in your media kit."
      },
      {
        question: "How does engagement rate affect sponsorship pricing?",
        answer: "Engagement rate is the single biggest rate adjuster after follower count. A creator with 2x the platform average engagement rate can justify 2x higher rates because their audience is more likely to act on recommendations. Brands increasingly evaluate CPE (Cost Per Engagement) rather than CPM — making high-ER creators more valuable per dollar spent, even with smaller audiences."
      },
      {
        question: "What niche pays the most for influencer sponsorships?",
        answer: "Finance and business niches pay the highest premiums (+40-50%) because financial products (credit cards, investing apps, insurance) have very high customer lifetime values. Tech/software (+30-35%) is second due to high SaaS subscription values. Education (+25%) follows. Beauty (+20%) and fashion (+15%) pay premiums due to strong impulse purchase behavior. Gaming and general entertainment pay base rates."
      },
      {
        question: "How do I create a media kit for brand deals?",
        answer: "A professional media kit should include: (1) Your bio and niche positioning; (2) Follower count and engagement rate with screenshots; (3) Audience demographics (age, gender, location, interests); (4) Rate card by content type; (5) Past brand collaboration examples with results; (6) Content samples showing your style; (7) Contact information. Use this calculator's Media Kit Summary section as a starting point for your rate card data."
      },
      {
        question: "Should I accept free products instead of payment?",
        answer: "Generally no, unless: (1) You're a nano creator building your portfolio and the product aligns perfectly with your niche; (2) The product value is genuinely equivalent to your rate; (3) It's a brand you'd authentically use and recommend. Never accept 'exposure' as payment. Once you have 5K+ followers and decent engagement, always charge monetary rates. Free products should be a bonus on top of your fee, not a replacement."
      },
      {
        question: "How do usage rights affect influencer rates?",
        answer: "Usage rights are a significant add-on. Standard post = creator's channels only. If the brand wants to repurpose your content in their ads, website, or marketing materials, charge 25-100% extra depending on scope and duration. Typical pricing: Organic repost (brand's social channels) = +25%, Paid ads (boosted/promoted) = +50-75%, Full usage rights (website, print, TV) = +75-100%. Always negotiate usage rights separately from the base post rate."
      },
      {
        question: "What is an exclusivity clause and how should I price it?",
        answer: "Exclusivity means you can't work with competing brands for a set period. This limits your earning potential, so charge accordingly: 1-week exclusivity = +10-15% of post rate, 1-month exclusivity = +25-50%, 3-month exclusivity = +75-100%, 6+ months = negotiate a retainer. Always define 'competing' narrowly — 'no other energy drink brands' is fair, 'no other beverage brands' is too broad."
      },
      {
        question: "How often should I raise my sponsorship rates?",
        answer: "Review rates quarterly and raise when: (1) Your follower count has grown 20%+; (2) Your engagement rate has improved; (3) You've completed notable brand collaborations (social proof); (4) Demand exceeds your availability; (5) Your niche expertise has deepened. Typical annual increase: 15-30% for growing creators. Don't grandfather old rates for returning brands — your audience is more valuable now."
      },
      {
        question: "How do I find brands willing to sponsor micro-influencers?",
        answer: "Six approaches: (1) Join influencer platforms (AspireIQ, Grin, CreatorIQ, Upfluence); (2) Reach out directly to DTC brands in your niche via email/DM; (3) Tag brands organically in your content first to build relationship; (4) List yourself on creator marketplaces; (5) Network with other creators for referrals; (6) Create a 'Work with me' highlight/page with your media kit. Most micro-influencer deals start with the creator reaching out, not the brand."
      },
      {
        question: "What's the difference between flat rate and performance-based pricing?",
        answer: "Flat rate = fixed payment per post regardless of performance. Performance-based = payment tied to results (clicks, conversions, sales via affiliate link). Flat rate is standard and safer for creators — you get paid regardless of algorithm performance. Performance-based can pay more but carries risk. Many creators offer hybrid: flat base rate + performance bonus. Never accept pure performance-based unless the brand's product has proven high conversion rates."
      },
      {
        question: "How do I handle brands that lowball my rates?",
        answer: "Five strategies: (1) Thank them and share your rate card — don't apologize for your pricing; (2) Explain the value by sharing your CPE, engagement data, and past results; (3) Offer a smaller scope at their budget (1 story instead of a reel); (4) Propose a trial post at your rate with performance tracking; (5) Walk away professionally — underpricing devalues you and attracts more lowball offers. The brands who respect your rates become the best long-term partners."
      },
      {
        question: "Can I use this calculator for brand-side budgeting?",
        answer: "Yes. Brands and agencies can use this tool to estimate fair rates before outreach, build campaign budgets across multiple creators, compare rates across platforms, and evaluate whether a creator's quoted rate aligns with market benchmarks. Input the creator's public metrics (followers, engagement rate) to get a data-driven estimate of what they should reasonably charge."
      },
      {
        question: "Does follower count on multiple platforms stack for pricing?",
        answer: "Not directly — each platform is priced independently because audiences don't fully overlap. However, having large followings on multiple platforms lets you offer cross-platform packages at a premium. A common approach: price each platform's post at its individual rate, then offer a 10-15% bundle discount for multi-platform campaigns. This increases total deal value while giving the brand a perceived discount."
      },
      {
        question: "What's the average income for a full-time influencer?",
        answer: "Income varies dramatically by tier and niche. Rough averages for creators who monetize consistently: Nano (1K-10K): $1K-$5K/year from sponsorships. Micro (10K-50K): $10K-$50K/year. Mid-tier (50K-100K): $50K-$150K/year. Macro (100K-1M): $150K-$500K/year. Mega (1M+): $500K-$5M+/year. Most full-time creators also earn from affiliates, courses, merch, and platform monetization on top of sponsorships."
      },
      {
        question: "How do I report sponsorship income for taxes?",
        answer: "Sponsorship income is taxable self-employment income. In the US: (1) Report all payments on Schedule C; (2) Pay self-employment tax (15.3%) plus income tax; (3) Deduct business expenses (equipment, software, home office, travel); (4) Make quarterly estimated tax payments if you expect to owe $1,000+; (5) Free products received as payment are also taxable at fair market value. Consider using our Freelance Rate Calculator to factor taxes into your rate-setting."
      },
      {
        question: "Is this calculator accurate for creators outside the US?",
        answer: "The formula and relative comparisons work globally, but the dollar amounts reflect US market rates. International creators should adjust: UK/Australia/Canada rates are typically 70-90% of US rates. European rates vary by country (60-90% of US). Southeast Asia/LATAM rates are typically 30-50% of US rates for similar follower counts. The engagement-based adjustments and niche premiums remain directionally accurate worldwide."
      }
    ],

    relatedTools: [
      { name: "TikTok Engagement Calculator", href: "/social-media-tools/tiktok-engagement-calculator" },
      { name: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "ROAS Calculator", href: "/ad-tools/roas-calculator" },
      { name: "Freelance Rate Calculator", href: "/finance-tools/freelance-rate-calculator" },
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
      { name: "All Social Media Tools", href: "/social-media-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free Influencer Sponsorship Rate Calculator",
        description: "Calculate how much to charge for sponsored posts on TikTok, Instagram, YouTube & more. Based on followers, engagement, niche & content type.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "purple"
      }}
      breadcrumbs={[
        { label: "Social Media Tools", href: "/social-media-tools" },
        { label: TOOL_NAME, href: "/social-media-tools/influencer-rate-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <InfluencerRateCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Free influencer pricing calculator. Estimate sponsorship rates for TikTok, Instagram, YouTube & X. Based on followers, engagement rate, niche & content type. No signup.",
        path: "/social-media-tools/influencer-rate-calculator"
      }}
    />
  )
}
