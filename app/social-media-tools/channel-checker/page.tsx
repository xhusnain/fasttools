import { Metadata } from 'next';
import dynamic from "next/dynamic"

const YoutubeChannelChecker = dynamic(() => import("@/components/social-media/youtube-channel-checker").then(mod => mod.YoutubeChannelChecker), {
  loading: () => <div className="min-h-[600px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GImage } from "@/ui/gimage"
import {
  Search, CheckCircle, Globe, Zap, Target, Shield,
  Lightbulb, Trophy, Scale, LayoutGrid, AtSign, BarChart3, TrendingUp, Users, Brain, RefreshCw, AlertCircle, XCircle
} from "lucide-react"
import { GTable } from "@/ui/gtable"

const toolConfig = createToolConfig({
  toolName: "YouTube Channel Name Checker",
  description: "Check if your YouTube channel name and handle are available in seconds. Get AI suggestions if taken.",
  metaTitle: "YouTube Channel Name Checker - Free Availability Tool",
  metaDescription: "Check if your YouTube channel name is available instantly. Verify handles (@username), get AI suggestions, and secure your brand. 100% free tool.",
  path: "/social-media-tools/channel-checker",
  schemaOptions: {
    applicationCategory: "WebApplication", // Updated from UtilitiesApplication
    ratingValue: "4.8",
    ratingCount: "1250", // Updated based on request
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  },
  video: {
    id: "qNapObaVmPc",
    title: "How to Check YouTube Channel Name Availability | FastTools Tutorial",
    description: "Learn how to use our YouTube Channel Name Checker to find the perfect available channel name. Watch this quick tutorial to see how to check username availability, generate creative ideas, and secure your YouTube handle instantly."
  },

  header: {
    title: "YouTube Channel Name Checker - Free Availability Tool",
    description: "Instantly check if your desired YouTube channel name and handle (@username) are free to claim. Get smart AI suggestions if taken.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Channel Name Checker", href: "/social-media-tools/channel-checker" },
  ],

  content: {
    overview: "Finding a unique YouTube channel name is the first step to building your digital legacy. Our free YouTube Channel Name Checker helps you verify availability across all formats—including the critical @handle system—in real-time. Whether you're starting a gaming channel, a tech vlog, or a personal brand, we ensure your identity is unique, SEO-friendly, and future-proof.",

    howToSteps: [
      "Type your channel name idea (e.g., 'TechDaily') in the search box above.",
      "Click 'Check Availability' to search YouTube's database instantly.",
      "Review the results for Name, Handle (@), and URL status, and claim your name if available."
    ],

    features: [
      "Handle Verification: Check the critical @username system that ensures your uniqueness.",
      "Real-Time Results: Instant database queries for up-to-the-second accuracy.",
      "Smart AI Suggestions: Get intelligent alternatives if your name is taken.",
      "SEO Analysis: Score your name's searchability (0-100) to maximize growth.",
      "Batch Checking: Test multiple names at once (comma-separated).",
      "100% Free: Unlimited checks, no login required."
    ],

    useCases: [
      "New Creators: Find a name that is available and unique.",
      "Rebranding: Verify availability before changing your channel identity.",
      "Agency Brainstorming: Quickly generate and check names for clients.",
      "Brand Protection: Ensure no one else is using your trademarked handle."
    ],

    aboutTool: (
      <div className="space-y-12">

        {/* Can Two YouTubers Have the Same Name Section */}
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-primary" />
            Can Two YouTubers Have the Same Name?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            This is one of the most common questions - and the answer is both <strong>yes AND no</strong>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Channel Names (Display Names)
              </h4>
              <p className="text-sm text-muted-foreground">
                Multiple channels <strong>CAN</strong> share the same display name. Search "Music Vibes" and you'll find dozens.
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                <XCircle className="h-4 w-4" />
                Handles (@username)
              </h4>
              <p className="text-sm text-muted-foreground">
                Must be <strong>globally unique</strong>. Only ONE channel can have @TechDaily across all of YouTube.
              </p>
            </div>
          </div>
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Why This Matters:</strong> Even if someone has a channel called "Tech Daily," the handle <code>@TechDaily</code> or <code>@Tech_Daily</code> might still be available. Our tool checks all three formats (Name, Handle, Custom URL) so you know exactly what you can claim.
            </p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Understanding YouTube Names: What You Need to Know
          </h2>
          <p className="text-muted-foreground">Many creators get confused about YouTube's three identity systems. Here is the breakdown:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">1. Display Name</h3>
              <p className="text-sm text-muted-foreground">What appears on your channel page. Can be changed anytime. Not unique.</p>
              <p className="text-xs text-muted-foreground bg-muted p-2 rounded">Example: "Tech Reviews Daily"</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">2. Handle (@username)</h3>
              <p className="text-sm text-muted-foreground">Your unique identifier starting with @. Used for mentions. Must be unique.</p>
              <p className="text-xs text-muted-foreground bg-muted p-2 rounded">Example: @TechReviewsDaily</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">3. Custom URL</h3>
              <p className="text-sm text-muted-foreground">Your channel's web address. Must be unique. Requires 100+ subscribers.</p>
              <p className="text-xs text-muted-foreground bg-muted p-2 rounded">Example: youtube.com/c/TechReviewsDaily</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm text-muted-foreground bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
            <Lightbulb className="h-4 w-4 text-yellow-600 mt-0.5" />
            <span><strong>Pro Tip:</strong> Secure your @handle first, as it's the hardest to change and most important for branding.</span>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Common Questions Answered
          </h2>

          <div className="space-y-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">How do I check my YouTube channel name?</h3>
              <p className="text-sm text-muted-foreground mb-2"><strong>If you already have a channel:</strong> Go to YouTube, click your profile picture, and select "Your Channel". Your name is at the top.</p>
              <p className="text-sm text-muted-foreground"><strong>If you're starting a new channel:</strong> Use our tool above to verify your desired name is available before creating your channel.</p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">What if my desired name is taken?</h3>
              <p className="text-sm text-muted-foreground mb-3">Don't worry! Our tool provides intelligent alternatives:</p>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Add "The" prefix → TheYourName</li>
                <li>Add "Official" → YourNameOfficial</li>
                <li>Add niche suffix → YourNameGaming, YourNameTV</li>
                <li>Use underscores → Your_Name</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Can I change my YouTube name later?</h3>
              <p className="text-sm text-muted-foreground">Yes, but with limits. Display names can be changed anytime. Handles can be changed twice every 14 days. <strong>Warning:</strong> Frequent name changes confuse subscribers and hurt your brand.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Monetization Requirements</h4>
                <p className="text-xs text-muted-foreground">To make money, you need 1,000 subscribers and 4,000 watch hours. But first, secure a great name to help you grow!</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-sm mb-1">Minimum Age</h4>
                <p className="text-xs text-muted-foreground">13+ in most countries. Channels featuring children under 13 must be managed by parents/guardians.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Tips for Choosing the Perfect YouTube Name
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg border border-green-200 bg-green-50/50 dark:bg-green-900/10 dark:border-green-800">
              <h3 className="text-green-700 dark:text-green-400 font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> DO
              </h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Keep it Short (2-3 words max)</li>
                <li>✓ Make it memorable & easy to spell</li>
                <li>✓ Check @handle across all platforms</li>
                <li>✓ Include relevant keywords ("Tech", "Gaming")</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border border-red-200 bg-red-50/50 dark:bg-red-900/10 dark:border-red-800">
              <h3 className="text-red-700 dark:text-red-400 font-bold mb-3 flex items-center gap-2">
                <XCircle className="h-5 w-5" /> DON'T
              </h3>
              <ul className="space-y-2 text-sm">
                <li>✗ Use random numbers ("TechGuy2004")</li>
                <li>✗ Copy popular creators ("PewDiePie55")</li>
                <li>✗ Be too specific ("Fortnite2024Tips")</li>
                <li>✗ Forget to check trademarks</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            YouTube Naming Trends in 2025
          </h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 whitespace-nowrap">Naming Style</th>
                  <th className="p-3 whitespace-nowrap">Trend</th>
                  <th className="p-3 whitespace-nowrap">Examples</th>
                  <th className="p-3 whitespace-nowrap">Why It Works</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 whitespace-nowrap">Abstract Brands</td>
                  <td className="p-3 text-green-500 font-bold whitespace-nowrap">Rising 📈</td>
                  <td className="p-3 whitespace-nowrap">Veritasium, MKBHD</td>
                  <td className="p-3 whitespace-nowrap">Memorable, scalable</td>
                </tr>
                <tr>
                  <td className="p-3 whitespace-nowrap">Real Names</td>
                  <td className="p-3 font-medium whitespace-nowrap">Stable ➖</td>
                  <td className="p-3 whitespace-nowrap">Marques Brownlee</td>
                  <td className="p-3 whitespace-nowrap">Trust, authority</td>
                </tr>
                <tr>
                  <td className="p-3 whitespace-nowrap">Portmanteau</td>
                  <td className="p-3 text-green-500 font-bold whitespace-nowrap">Rising 📈</td>
                  <td className="p-3 whitespace-nowrap">Netflix, Instagram</td>
                  <td className="p-3 whitespace-nowrap">Unique, brandable</td>
                </tr>
                <tr>
                  <td className="p-3 whitespace-nowrap">SEO/Descriptive</td>
                  <td className="p-3 text-red-500 font-medium whitespace-nowrap">Declining 📉</td>
                  <td className="p-3 whitespace-nowrap">TechReviews2024</td>
                  <td className="p-3 whitespace-nowrap">Generic, dated</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-sm text-muted-foreground italic">
            <strong>Expert Insight:</strong> Unique brand names now outperform generic SEO names. YouTube's algorithm favors engagement and brand loyalty over keyword matching.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Check Your Name's SEO Potential
          </h2>
          <p className="text-muted-foreground">Our tool gives you a comprehensive <strong>SEO Score (0-100)</strong>. Here's what we analyze:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-card border rounded-lg">
              <h4 className="font-semibold mb-1 text-primary">🔍 Searchability</h4>
              <p className="text-xs text-muted-foreground">How often keywords in your name are searched. Higher = more organic discovery.</p>
            </div>
            <div className="p-4 bg-card border rounded-lg">
              <h4 className="font-semibold mb-1 text-primary">🎯 Competition</h4>
              <p className="text-xs text-muted-foreground">How many similar channels exist? Higher score = less competition, easier to rank.</p>
            </div>
            <div className="p-4 bg-card border rounded-lg">
              <h4 className="font-semibold mb-1 text-primary">💡 Memorability</h4>
              <p className="text-xs text-muted-foreground">Is it short, simple, and easy to recall? Scored on length and complexity.</p>
            </div>
            <div className="p-4 bg-card border rounded-lg">
              <h4 className="font-semibold mb-1 text-primary">⭐ Uniqueness</h4>
              <p className="text-xs text-muted-foreground">Does it stand out from existing channels? Measures how distinctive your name is.</p>
            </div>
          </div>
        </article>

        <article className="space-y-6 p-6 bg-muted/20 rounded-xl border border-border">
          <h2 className="text-2xl font-bold text-foreground">Why Choose Our Checker?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">Handle-Specific Checking ⭐</h4>
                <p className="text-xs text-muted-foreground">Most tools check old URLs. We verify the new @handle system YouTube prioritizes.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">SEO Scoring System ⭐</h4>
                <p className="text-xs text-muted-foreground">We're the only checker that scores your name's search potential.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">Batch Checking</h4>
                <p className="text-xs text-muted-foreground">Test 10+ options in seconds (comma-separated).</p>
              </div>
            </div>
            <div className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">Zero Data Collection</h4>
                <p className="text-xs text-muted-foreground">We don't store your searches. Your brand ideas stay private.</p>
              </div>
            </div>
          </div>
        </article>

        {/* Text based Trust Signals as requested */}
        <div className="mt-8 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold mb-4">Trust Signals</h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground text-center">
            <li className="flex flex-col items-center gap-1">
              <Users className="h-5 w-5 text-primary" />
              <span>50,000+ names checked monthly</span>
            </li>
            <li className="flex flex-col items-center gap-1">
              <Zap className="h-5 w-5 text-primary" />
              <span>100% accurate real-time results</span>
            </li>
            <li className="flex flex-col items-center gap-1">
              <Shield className="h-5 w-5 text-primary" />
              <span>Zero data collection</span>
            </li>
            <li className="flex flex-col items-center gap-1">
              <Trophy className="h-5 w-5 text-primary" />
              <span>Used by top creators</span>
            </li>
          </ul>
          <p className="text-xs text-center text-muted-foreground mt-4">Last updated: January 2026</p>
        </div>

      </div>
    ),

    faqs: [
      {
        question: "Is this tool completely free?",
        answer: "Yes, forever. No hidden fees, limits, or login requirements. Check unlimited names for free."
      },
      {
        question: "How accurate are the results?",
        answer: "We query YouTube's public data in real-time for maximum accuracy. However, we always recommend verifying directly on YouTube immediately before creating your channel, as names can be claimed within seconds."
      },
      {
        question: "Does this work for YouTube Shorts?",
        answer: "Yes. Shorts use the same channel system, so your channel name and handle apply to all your content."
      },
      {
        question: "Can I check multiple names at once?",
        answer: "Absolutely. Enter names separated by commas or new lines to batch check several options simultaneously in our tool."
      },
      {
        question: "What's the difference between checking a name and verifying a channel?",
        answer: "\"Checking a name\" means verifying it's available to claim. \"Verifying a channel\" means getting the official checkmark badge, which typically requires 100,000+ subscribers."
      },
      {
        question: "Do you store my search history?",
        answer: "No. We respect your privacy and don't log or store any searches. Your brand ideas stay private."
      },
      {
        question: "Why is my name available here but taken when I try to register?",
        answer: "Two possible reasons: (1) Someone claimed it between your check and signup - always act fast! (2) There's a slight spelling difference you didn't notice. Double-check carefully."
      },
      {
        question: "Can I use this for business channels?",
        answer: "Yes. Whether personal, business, or brand channels - our tool works for all YouTube channel types."
      },
      {
        question: "How to check if a YouTube channel name is taken?",
        answer: "Enter your desired name in our tool above and click 'Check Availability.' We'll instantly verify if the name, @handle, and custom URL are available across YouTube's entire database."
      },
      {
        question: "Can two YouTubers have the same name?",
        answer: "Display names can be duplicated, but handles (@username) and custom URLs must be unique. Our tool checks all three to ensure you understand your complete availability."
      },
      {
        question: "What if my desired name is taken?",
        answer: "Our AI suggests intelligent alternatives based on your original idea. Try adding prefixes ('The', 'Official'), suffixes ('TV', 'HQ'), or slightly modifying the name while maintaining your brand identity."
      },
      {
        question: "Does this check the new YouTube Handle system?",
        answer: "Absolutely. We specifically check @handles, which are now the primary way users identify channels. This is crucial because even if a display name exists, the @handle might still be available."
      },
      {
        question: "What makes a good YouTube channel name?",
        answer: "A good name is short (2-3 words), memorable, easy to spell and pronounce, unique but searchable, and available as a @handle across other platforms like Instagram and TikTok."
      }
    ],

    relatedTools: [
      { name: "YouTube Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
    ]
  }
})

export const metadata: Metadata = toolConfig.metadata

export default function ChannelCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeChannelChecker />)} />
}
