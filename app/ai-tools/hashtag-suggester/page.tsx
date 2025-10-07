import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AiHashtagSuggester } from "@/components/ai-hashtag-suggester"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Free AI Hashtag Generator - Generate Viral Hashtags for Social Media | SmartToolboxes",
  description:
    "Generate trending hashtags with AI for Instagram, TikTok, Twitter, and LinkedIn. Boost your social media reach and engagement with our free AI hashtag generator. Get viral hashtag suggestions instantly.",
  keywords: [
    "AI hashtag generator",
    "hashtag generator",
    "Instagram hashtags",
    "TikTok hashtags",
    "Twitter hashtags",
    "LinkedIn hashtags",
    "social media hashtags",
    "viral hashtags",
    "trending hashtags",
    "hashtag research",
    "hashtag strategy",
    "social media marketing",
    "hashtag analytics",
    "hashtag optimization",
    "free hashtag generator",
    "AI hashtag tool",
    "hashtag suggestions",
    "social media growth",
    "hashtag research tool",
    "hashtag finder",
    "popular hashtags",
    "niche hashtags",
    "branded hashtags",
    "hashtag tracking",
    "social media engagement",
    "content marketing",
    "digital marketing",
    "social media strategy",
    "hashtag best practices",
    "hashtag tips",
    "social media automation",
    "AI marketing tools",
    "social media optimization",
    "hashtag performance",
    "social media analytics",
    "content strategy",
    "social media planning",
    "hashtag trends",
    "social media growth",
    "viral marketing",
    "social media tips",
    "content calendar",
    "social media management",
    "AI content creation",
    "digital content strategy",
    "social media branding",
    "hashtag campaigns",
    "social media ROI",
    "content optimization"
  ],
  openGraph: {
    title: "Free AI Hashtag Generator - Generate Viral Hashtags for Social Media",
    description: "Generate trending hashtags with AI for Instagram, TikTok, Twitter, and LinkedIn. Boost your social media reach instantly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Hashtag Generator - Generate Viral Hashtags for Social Media",
    description: "Generate trending hashtags with AI for Instagram, TikTok, Twitter, and LinkedIn. Boost your social media reach instantly.",
  },
}

export default function HashtagSuggesterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Hashtag Generator",
    description: "Generate trending hashtags with AI for Instagram, TikTok, Twitter, and LinkedIn. Boost your social media reach and engagement.",
    applicationCategory: "SocialMediaApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "1654",
    },
    featureList: [
      "AI-powered hashtag generation",
      "Platform-specific hashtag optimization",
      "Trending hashtag suggestions",
      "Niche hashtag research",
      "Hashtag performance analytics",
      "Free to use",
      "No registration required"
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "AI Tools", href: "/ai-tools" },
            { label: "Hashtag Suggester", href: "/ai-tools/hashtag-suggester" },
          ]}
        />

        <div className="max-w-6xl mx-auto">
          <AdSpace slot="header" className="mb-8 h-24" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-primary">Free AI Hashtag Generator</h1>
                <p className="text-lg text-secondary text-pretty leading-relaxed">
                  Generate trending hashtags with AI for Instagram, TikTok, Twitter, and LinkedIn. Boost your social media reach 
                  and engagement with our free AI-powered hashtag generator. Get viral hashtag suggestions instantly.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-200">
                <AiHashtagSuggester />
              </div>

              <div className="mt-12 prose prose-slate max-w-none animate-fade-in-up animation-delay-400">
                <h2 className="text-2xl font-bold mb-4 text-primary">How to Use the AI Hashtag Generator</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Our AI hashtag generator helps you find the perfect hashtags to maximize your social media reach and engagement. 
                  Follow these simple steps to get trending hashtag suggestions:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-secondary">
                  <li>Enter your content description or caption</li>
                  <li>Select your target social media platform</li>
                  <li>Choose your content category or niche</li>
                  <li>Click "Generate Hashtags" to get AI-powered suggestions</li>
                  <li>Copy and use the most relevant hashtags</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Why Use Our AI Hashtag Generator?</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Hashtags are crucial for social media success, but finding the right ones can be time-consuming and challenging. 
                  Our AI hashtag generator analyzes trending patterns, niche-specific keywords, and platform algorithms to suggest 
                  hashtags that will boost your reach and engagement. Perfect for influencers, businesses, content creators, and social media managers.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>AI-powered hashtag generation for all social media platforms</li>
                  <li>Trending hashtag suggestions based on current popularity</li>
                  <li>Niche-specific hashtag research and recommendations</li>
                  <li>Platform optimization (Instagram, TikTok, Twitter, LinkedIn)</li>
                  <li>Hashtag performance analytics and insights</li>
                  <li>Mix of popular and niche hashtags for better reach</li>
                  <li>Free to use with no registration required</li>
                  <li>Instant results with multiple hashtag options</li>
                  <li>SEO-optimized for better discoverability</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Hashtag Strategy Best Practices</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  To maximize your social media reach with hashtags, follow these proven strategies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>Use a mix of popular and niche hashtags</li>
                  <li>Research trending hashtags in your industry</li>
                  <li>Create branded hashtags for your business</li>
                  <li>Use platform-specific hashtag limits (Instagram: 30, Twitter: 2-3, LinkedIn: 3-5)</li>
                  <li>Monitor hashtag performance and adjust your strategy</li>
                  <li>Engage with posts using your target hashtags</li>
                  <li>Use location-based hashtags when relevant</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Platform-Specific Hashtag Strategies</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Different social media platforms have different hashtag best practices:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li><strong>Instagram:</strong> Use 20-30 hashtags, mix of popular and niche</li>
                  <li><strong>TikTok:</strong> Focus on trending hashtags and challenges</li>
                  <li><strong>Twitter:</strong> Use 1-2 highly relevant hashtags</li>
                  <li><strong>LinkedIn:</strong> Use 3-5 professional hashtags</li>
                  <li><strong>Facebook:</strong> Use 1-2 hashtags, focus on community building</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Related Tools</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Enhance your social media strategy with our other AI-powered tools:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li><a href="/ai-tools/caption-generator" className="text-primary hover:underline">AI Caption Generator</a> - Create engaging social media captions</li>
                  <li><a href="/seo-tools/hashtags" className="text-primary hover:underline">Hashtag Generator</a> - Generate hashtag combinations</li>
                  <li><a href="/seo-tools/keyword-density" className="text-primary hover:underline">Keyword Density Checker</a> - Analyze keyword usage</li>
                  <li><a href="/social-media-tools/link-in-bio" className="text-primary hover:underline">Link in Bio Generator</a> - Create professional bio pages</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <AdSpace slot="sidebar" className="h-96" />
                <AdSpace slot="sidebar" className="h-64" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
