import { HashtagCounter } from "@/components/hashtag-counter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Hash, Code, Globe, Calculator } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Instagram Hashtag Counter | Free Hashtag Extractor Tool | FastTools",
  description:
    "Free Instagram hashtag counter and extractor tool. Count hashtags from Instagram posts, extract hashtags, and generate AI hashtags for better reach.",
  keywords: [
      "instagram hashtag counter",
      "instagram hashtag extractor",
      "instagram hashtag generator",
      "instagram hashtag tracker",
      "instagram hashtag analytics",
      "instagram hashtag tool",
      "free instagram hashtag counter",
      "free instagram hashtag generator",
      "free instagram hashtag tracker",
      "instagram hashtag search tool",
      "instagram hashtag analyzer",
      "instagram hashtag counter online",
      "instagram hashtag extractor online",
      "instagram hashtag counter free",
      "instagram hashtag extractor free",
      "ai instagram hashtag generator",
      "instagram hashtag scraper",
      "instagram hashtag stats",
      "instagram hashtag tracker tool",
      "instagram hashtag analysis tool",
      "hashtag counter tool",
      "social media hashtag counter",
      "trending instagram hashtags",
      "top instagram hashtags",
      "real time instagram hashtag tracker",
      "instagram hashtag performance tracker",
      "instagram hashtag analytics tool",
      "instagram data extractor",
      "instagram hashtag scraper online",
      "instagram hashtag finder"
  ],
  alternates: { canonical: "https://www.fasttools.store/social-media-tools/hashtag-counter" },
  openGraph: {
    title: "Instagram Hashtag Counter | Free Hashtag Extractor & Counter Tool | FastTools",
    description: "Free Instagram hashtag counter and extractor tool. Count hashtags from Instagram posts, extract hashtags, and generate AI hashtags for better reach.",
    url: "https://www.fasttools.store/social-media-tools/hashtag-counter",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Instagram Hashtag Counter - Free Hashtag Extractor & Counter Tool",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Hashtag Counter | Free Hashtag Extractor & Counter Tool | FastTools",
    description: "Free Instagram hashtag counter and extractor tool. Count hashtags from Instagram posts, extract hashtags, and generate AI hashtags for better reach.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Instagram Hashtag Counter",
      alternateName: "Hashtag Extractor for Instagram",
      applicationCategory: "SocialMediaApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/social-media-tools/hashtag-counter",
      description:
        "Free Instagram hashtag counter and extractor tool. Count hashtags from Instagram posts, extract hashtags, and generate AI hashtags for better reach.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Instagram hashtag counter",
        "Hashtag extractor for Instagram", 
        "Instagram tag extractor",
        "Instagram tags extractor",
        "Instagram hashtag for posts count",
        "Count hashtags",
        "Extract hashtags",
        "AI hashtag generator",
        "Social media tools",
        "Instagram tools",
        "Hashtag analyzer",
        "Free hashtag counter"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/social-media-tools/hashtag-counter",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "instagram hashtag counter, hashtag counter, instagram hashtag extractor, instagram tag extractor, instagram tags extractor, hashtag extractor for instagram, instagram hashtag for posts count, hashtags, free hashtag counter, count hashtags, extract hashtags, hashtag analyzer, social media tools",
      about: {
        "@type": "Thing",
        name: "Social Media and Hashtag Tools",
        description: "Free online tools for social media management, hashtag analysis, and Instagram optimization"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function HashtagCounterPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Social Media Tools", href: "/social-media-tools" },
            { label: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 lg:flex-[2] space-y-6">
              {/* Hero Section */}
              <div className="text-center space-y-5 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                  <Hash className="h-4 w-4 animate-pulse" />
                  <span>Social Media Hashtag Tools</span>
                  <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Instagram Hashtag Counter & Extractor
                </h1>

                <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                  Count hashtags from Instagram posts, extract hashtags from captions, and generate AI-powered hashtags for better reach and engagement on social media.
                </p>
                
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                    <Hash className="h-4 w-4 text-primary" />
                    <span className="text-primary font-medium text-sm">30 Limit</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-green-500 shadow">
                    <Globe className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-medium text-sm">All Platforms</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                    <Calculator className="h-4 w-4 text-accent" />
                    <span className="text-accent font-medium text-sm">Free Forever</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                    <ArrowRight className="h-4 w-4 text-secondary-accent" />
                    <span className="text-secondary-accent font-medium text-sm">AI Powered</span>
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet Ad - Top of Page */}
              <div className="block xl:hidden mb-6">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
              </div>

              {/* Tool Card */}
              <Card className="border border-border shadow-lg bg-card hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold text-card-foreground flex items-center gap-2">
                    <Hash className="h-5 w-5 text-primary" />
                    Hashtag Counter & Extractor
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Paste your text to count hashtags, extract hashtags, and generate AI-powered suggestions
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <HashtagCounter />
                </CardContent>
              </Card>

              {/* Mobile/Tablet Ad - After tool */}
              <div className="block xl:hidden my-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
              </div>

              {/* Content Sections */}
              <div className="space-y-5 animate-fade-in-up animation-delay-200">
                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">How Our Hashtag Counter Works</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Our advanced hashtag counter analyzes your text to identify, count, and extract all hashtags. 
                    It uses intelligent parsing to handle various hashtag formats and provides instant results.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Smart Detection Engine</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    The tool automatically detects hashtags regardless of format, removes duplicates, and provides 
                    accurate counts for Instagram's 30-hashtag limit and other platform requirements.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">AI-Powered Generation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Generate relevant hashtags using AI technology. Our system analyzes your content and suggests 
                    trending, niche, and platform-specific hashtags for maximum reach.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">Perfect for Social Media Optimization</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Use this tool for Instagram posts, Twitter content, TikTok videos, LinkedIn articles, and more. 
                    Optimize your hashtag strategy across all social media platforms.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Platform-Specific Optimization</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Get hashtag suggestions tailored for each platform. Instagram (30 limit), Twitter (1-2 recommended), 
                    TikTok (3-5 trending), LinkedIn (3-5 professional), and more.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Content Creator Benefits</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Save time with instant hashtag extraction, avoid duplicate hashtags, and discover new trending 
                    hashtags to boost your content's visibility and engagement.
                  </p>
                </div>

                {/* FAQ Section */}
                <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground flex items-center gap-2">
                    <div className="h-6 w-6 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Hash className="h-4 w-4 text-accent" />
                    </div>
                    Complete Guide to Hashtag Counter Tools: Everything You Need to Know
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What exactly is a hashtag counter and why do I need one?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">A hashtag counter is a specialized tool that analyzes text content to identify, count, and extract hashtags automatically. It's essential for social media optimization because different platforms have specific hashtag limits - Instagram allows 30 hashtags, Twitter works best with 1-2 hashtags, and TikTok performs well with 3-5 hashtags. Using a hashtag counter helps you stay within these limits, avoid duplicate hashtags, and optimize your content for maximum reach. The tool also provides insights into hashtag density, helps identify trending hashtags, and ensures your posts comply with platform guidelines for better visibility and engagement.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How does the hashtag extraction process work technically?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">The hashtag extraction process uses advanced text parsing algorithms to identify hashtag patterns in your content. The system scans text for the '#' symbol followed by alphanumeric characters, spaces, or special characters, then extracts each unique hashtag while filtering out duplicates. The tool handles various formats including hashtags with numbers, underscores, and mixed case letters. It also accounts for hashtags that might be split across lines or embedded within longer text. The extraction process is instant and works with any text length, from short captions to long-form content, providing accurate counts and clean hashtag lists for easy copying and use.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What are the optimal hashtag strategies for different social media platforms?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Each social media platform has unique hashtag strategies for maximum effectiveness. Instagram performs best with 20-30 hashtags, mixing popular hashtags (1M+ posts) with niche hashtags (10K-100K posts) for balanced reach. Twitter works optimally with 1-2 relevant hashtags to avoid appearing spammy while maintaining engagement. TikTok thrives with 3-5 trending hashtags that align with current challenges or viral content. LinkedIn favors 3-5 professional hashtags related to industry topics and career development. Facebook works well with 1-3 hashtags for better organic reach. YouTube benefits from 3-5 descriptive hashtags in video descriptions. Pinterest uses 2-5 keyword-rich hashtags for better discoverability in search results.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I use hashtag counters to improve my content's reach and engagement?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Hashtag counters help improve content reach by ensuring optimal hashtag usage and preventing common mistakes. Use the tool to analyze competitor content and identify successful hashtag patterns in your niche. Track hashtag performance by monitoring which hashtags generate the most engagement and adjusting your strategy accordingly. The counter helps you maintain consistent hashtag density across posts, avoid repetitive hashtag sets, and discover new trending hashtags relevant to your content. By staying within platform limits and using diverse hashtag combinations, you can increase discoverability, attract targeted audiences, and improve overall engagement rates. Regular analysis helps refine your hashtag strategy for better long-term performance.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What's the difference between popular, niche, and branded hashtags?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Understanding hashtag categories is crucial for effective social media strategy. Popular hashtags have millions of posts and offer broad reach but intense competition - examples include #love, #instagood, or #photooftheday. Niche hashtags have fewer posts (10K-100K) and target specific communities with higher engagement rates - like #veganrecipes or #minimalistliving. Branded hashtags are unique to your brand or campaign and help build community and track user-generated content - such as #NikeJustDoIt or #ShareACoke. The optimal strategy combines all three types: use 40% popular hashtags for reach, 40% niche hashtags for targeted engagement, and 20% branded hashtags for community building. This balanced approach maximizes both visibility and meaningful engagement.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How do I avoid hashtag spam and maintain authenticity in my posts?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Avoiding hashtag spam requires strategic thinking and authenticity. Focus on relevance - only use hashtags that directly relate to your content, audience, and brand. Avoid generic hashtags like #followme or #like4like that don't add value. Don't repeat the same hashtag sets across all posts; instead, create varied combinations based on specific content themes. Use hashtag counters to identify and remove duplicate hashtags that might appear spammy. Research hashtag meanings before using them to ensure they align with your brand values. Monitor hashtag performance and remove underperforming hashtags from your rotation. Create custom hashtag sets for different content types (product posts, behind-the-scenes, user-generated content) to maintain variety and authenticity.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Can hashtag counters help with competitor analysis and market research?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Absolutely! Hashtag counters are valuable tools for competitive analysis and market research. Use them to analyze competitor posts and identify which hashtags they use most frequently, helping you discover successful hashtag strategies in your industry. Track trending hashtags in your niche by monitoring what hashtags competitors use for their most engaging posts. Identify hashtag gaps where competitors aren't using relevant hashtags that you could leverage. Analyze hashtag performance patterns across different content types and posting times. Use the data to create comprehensive hashtag libraries organized by content category, season, or campaign type. This research helps you stay competitive, discover new opportunities, and refine your hashtag strategy based on proven success patterns in your market.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What are the best practices for hashtag placement and formatting?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Hashtag placement and formatting significantly impact content performance. For Instagram, place hashtags either in the caption or first comment - both methods work equally well for reach. Use line breaks or periods to separate hashtags from your main caption text for better readability. On Twitter, integrate hashtags naturally within your tweet text rather than adding them at the end. TikTok works best with hashtags in the caption, while LinkedIn prefers hashtags integrated into post text. Format hashtags consistently using proper capitalization (#SocialMediaMarketing vs #socialmediamarketing) for better readability and professionalism. Avoid special characters or spaces within hashtags as they break the hashtag functionality. Use a mix of hashtag lengths - short hashtags for broad reach and longer, more specific hashtags for targeted audiences.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I track hashtag performance and measure ROI from hashtag usage?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Tracking hashtag performance requires systematic monitoring and analysis. Use social media analytics tools to measure reach, impressions, and engagement rates for posts with different hashtag combinations. Track which hashtags drive the most website traffic, conversions, or follower growth. Monitor hashtag-specific metrics like hashtag reach, hashtag impressions, and hashtag engagement rates when available. Create hashtag performance reports comparing different hashtag strategies over time. Use A/B testing to compare posts with different hashtag sets and measure performance differences. Track branded hashtag usage to measure user-generated content and community engagement. Monitor competitor hashtag performance to identify opportunities and benchmark your results. Regular analysis helps optimize hashtag strategies and demonstrate ROI from hashtag investments.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What are common hashtag mistakes that hurt content performance?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Common hashtag mistakes can significantly hurt content performance and engagement. Using too many hashtags on platforms like Twitter or LinkedIn can appear spammy and reduce reach. Including irrelevant hashtags that don't match your content confuses algorithms and attracts wrong audiences. Repeating the same hashtag sets across all posts limits reach and appears robotic to followers. Using banned or shadowbanned hashtags can hide your content from search results entirely. Ignoring hashtag character limits or using hashtags with special characters breaks functionality. Not researching hashtag meanings can lead to inappropriate associations with your brand. Using only popular hashtags without niche alternatives limits targeted reach. Failing to monitor hashtag performance means missing optimization opportunities. Avoiding these mistakes through careful hashtag research, testing, and monitoring helps maintain strong content performance.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How do I create an effective hashtag strategy for long-term social media success?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Creating an effective long-term hashtag strategy requires planning, research, and continuous optimization. Start by defining your target audience and researching hashtags they use and follow. Create hashtag libraries organized by content category, season, campaign, or audience segment. Develop branded hashtags for campaigns and community building. Research trending hashtags in your industry and identify seasonal or event-based hashtags for timely content. Test different hashtag combinations and track performance to identify what works best for your audience. Create hashtag templates for different content types to maintain consistency while allowing flexibility. Monitor competitor hashtag strategies and industry trends to stay current. Regularly audit and update your hashtag strategy based on performance data and platform algorithm changes. Document successful hashtag combinations for future use and create guidelines for your team. A well-planned strategy evolves with your brand and audience while maintaining core principles for consistent success.</p>
                    </div>
                  </div>
                  <div className="mt-6 block xl:hidden">
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Sidebar with AdSense (sticky, lowered start) */}
            <div className="hidden lg:block w-72">
              <div className="sticky top-32 space-y-6">
                <div>
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                </div>
                <div>
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}