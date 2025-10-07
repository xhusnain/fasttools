import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AiCaptionGenerator } from "@/components/ai-caption-generator"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Free AI Caption Generator - Create Engaging Social Media Captions | SmartToolboxes",
  description:
    "Generate viral social media captions with AI. Create engaging Instagram, Facebook, Twitter, and LinkedIn captions instantly. Boost your social media engagement with our free AI caption generator.",
  keywords: [
    "AI caption generator",
    "social media captions",
    "Instagram captions",
    "Facebook captions",
    "Twitter captions",
    "LinkedIn captions",
    "TikTok captions",
    "viral captions",
    "engaging captions",
    "AI content creation",
    "social media marketing",
    "caption ideas",
    "post captions",
    "social media copy",
    "content generator",
    "free caption generator",
    "automated captions",
    "AI writing tool",
    "social media automation",
    "caption templates",
    "viral post generator",
    "social media engagement",
    "content marketing",
    "digital marketing",
    "social media strategy",
    "caption writing",
    "content creation tool",
    "AI social media",
    "post ideas generator",
    "social media content",
    "caption optimization",
    "social media copywriting",
    "viral content generator",
    "social media trends",
    "content planning",
    "social media management",
    "AI copywriting",
    "social media automation",
    "content strategy",
    "social media growth",
    "viral marketing",
    "social media tips",
    "content calendar",
    "social media planning",
    "AI marketing",
    "digital content creation",
    "social media optimization",
    "viral social media",
    "content marketing tool",
    "social media branding",
    "AI content strategy"
  ],
  openGraph: {
    title: "Free AI Caption Generator - Create Viral Social Media Captions",
    description: "Generate engaging social media captions with AI. Perfect for Instagram, Facebook, Twitter, and LinkedIn. Boost your engagement instantly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Caption Generator - Create Viral Social Media Captions",
    description: "Generate engaging social media captions with AI. Perfect for Instagram, Facebook, Twitter, and LinkedIn.",
  },
}

export default function CaptionGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Caption Generator",
    description: "Generate engaging social media captions with AI. Create viral captions for Instagram, Facebook, Twitter, and LinkedIn instantly.",
    applicationCategory: "SocialMediaApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1923",
    },
    featureList: [
      "AI-powered caption generation",
      "Multiple caption options",
      "Social media platform optimization",
      "Viral caption templates",
      "Engagement-focused content",
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
            { label: "Caption Generator", href: "/ai-tools/caption-generator" },
          ]}
        />

        <div className="max-w-6xl mx-auto">
          <AdSpace slot="header" className="mb-8 h-24" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-primary">Free AI Caption Generator</h1>
                <p className="text-lg text-secondary text-pretty leading-relaxed">
                  Generate viral social media captions with AI. Create engaging Instagram, Facebook, Twitter, and LinkedIn captions instantly. 
                  Boost your social media engagement with our free AI-powered caption generator.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-200">
                <AiCaptionGenerator />
              </div>

              <div className="mt-12 prose prose-slate max-w-none animate-fade-in-up animation-delay-400">
                <h2 className="text-2xl font-bold mb-4 text-primary">How to Use the AI Caption Generator</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Our AI caption generator is designed to help you create engaging social media content that drives engagement. 
                  Simply follow these steps to generate viral captions:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-secondary">
                  <li>Upload your image or describe your content</li>
                  <li>Select your target social media platform</li>
                  <li>Choose your caption style (professional, casual, funny, etc.)</li>
                  <li>Click "Generate Captions" to get multiple options</li>
                  <li>Copy and use your favorite caption</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Why Use Our AI Caption Generator?</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Creating engaging social media captions can be time-consuming and challenging. Our AI caption generator 
                  helps you create viral content that increases engagement, drives traffic, and builds your social media presence. 
                  Perfect for influencers, businesses, content creators, and social media managers.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>AI-powered caption generation for all social media platforms</li>
                  <li>Multiple caption styles and tones</li>
                  <li>Platform-specific optimization (Instagram, Facebook, Twitter, LinkedIn, TikTok)</li>
                  <li>Viral caption templates and trending formats</li>
                  <li>Engagement-focused content suggestions</li>
                  <li>Free to use with no registration required</li>
                  <li>Instant results with multiple options</li>
                  <li>SEO-optimized for better discoverability</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Best Practices for Social Media Captions</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  To maximize engagement with your social media captions, consider these proven strategies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>Start with a hook to grab attention in the first few words</li>
                  <li>Use relevant hashtags (but don't overdo it)</li>
                  <li>Ask questions to encourage comments</li>
                  <li>Include a call-to-action</li>
                  <li>Match your brand voice and tone</li>
                  <li>Use emojis strategically to add personality</li>
                  <li>Keep captions concise but engaging</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Platform-Specific Caption Strategies</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Different social media platforms have different best practices for captions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li><strong>Instagram:</strong> Focus on storytelling and visual appeal</li>
                  <li><strong>Facebook:</strong> Encourage discussion and community engagement</li>
                  <li><strong>Twitter:</strong> Keep it concise and use trending hashtags</li>
                  <li><strong>LinkedIn:</strong> Professional tone with industry insights</li>
                  <li><strong>TikTok:</strong> Trendy, fun, and engaging content</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Related Tools</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Enhance your social media strategy with our other AI-powered tools:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li><a href="/ai-tools/hashtag-suggester" className="text-primary hover:underline">AI Hashtag Suggester</a> - Generate relevant hashtags for your posts</li>
                  <li><a href="/seo-tools/hashtags" className="text-primary hover:underline">Hashtag Generator</a> - Create trending hashtag combinations</li>
                  <li><a href="/seo-tools/blog-titles" className="text-primary hover:underline">Blog Title Generator</a> - Create compelling headlines</li>
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
