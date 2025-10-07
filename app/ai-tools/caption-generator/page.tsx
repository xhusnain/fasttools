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
    "AI content strategy",
    "Instagram caption generator",
    "Facebook caption generator",
    "Twitter caption generator",
    "LinkedIn caption generator",
    "TikTok caption generator",
    "social media caption AI",
    "AI caption writer",
    "caption generator AI",
    "social media AI tool",
    "viral caption AI",
    "engaging caption AI",
    "AI social media tool",
    "caption AI generator",
    "social media AI caption",
    "AI viral caption",
    "AI engaging caption",
    "social media AI writer",
    "caption AI writer",
    "AI social media writer",
    "viral AI caption",
    "engaging AI caption",
    "social media AI content",
    "AI caption content",
    "social media AI content creator",
    "AI caption content creator",
    "social media AI content generator",
    "AI caption content generator",
    "social media AI content writer",
    "AI caption content writer",
    "social media AI content AI",
    "AI caption content AI",
    "social media AI AI",
    "AI caption AI",
    "social media AI AI AI",
    "AI caption AI AI",
    "social media AI AI AI AI",
    "AI caption AI AI AI",
    "social media AI AI AI AI",
    "AI caption AI AI AI AI",
    "social media AI AI AI AI AI",
    "AI caption AI AI AI AI AI",
    "AI AI AI AI AI"
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

              {/* Center Content Ad */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-24" />
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

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Caption Writing Psychology and Engagement</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Understanding the psychology behind engaging captions can significantly improve your social media performance:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>Use emotional triggers to create connection with your audience</li>
                  <li>Create curiosity gaps that encourage users to read more</li>
                  <li>Use storytelling techniques to make content more memorable</li>
                  <li>Include social proof elements like testimonials or user-generated content</li>
                  <li>Use power words that evoke strong emotional responses</li>
                  <li>Create urgency with time-sensitive language when appropriate</li>
                  <li>Use personal pronouns to create a direct connection</li>
                  <li>Include specific numbers and data to add credibility</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Content Types and Caption Strategies</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Different types of content require different caption approaches:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li><strong>Educational Content:</strong> Lead with the main benefit, use bullet points, include actionable tips</li>
                  <li><strong>Behind-the-Scenes:</strong> Share personal stories, show vulnerability, create authenticity</li>
                  <li><strong>Product Showcases:</strong> Highlight key features, use benefit-focused language, include social proof</li>
                  <li><strong>User-Generated Content:</strong> Thank the creator, highlight the community, encourage more submissions</li>
                  <li><strong>Inspirational Posts:</strong> Use motivational language, share personal experiences, include quotes</li>
                  <li><strong>Promotional Content:</strong> Create urgency, highlight value proposition, include clear call-to-action</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Advanced Caption Techniques</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Master these advanced techniques to create captions that drive maximum engagement:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>Use the "pattern interrupt" technique to grab attention</li>
                  <li>Create cliffhangers that encourage users to engage</li>
                  <li>Use the "before and after" format for transformation stories</li>
                  <li>Implement the "problem-agitation-solution" structure</li>
                  <li>Use the "what, why, how" framework for educational content</li>
                  <li>Create captions that encourage user-generated content</li>
                  <li>Use seasonal and trending topics to stay relevant</li>
                  <li>Implement A/B testing to optimize caption performance</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Measuring Caption Performance</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Track and analyze your caption performance to continuously improve your social media strategy:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>Monitor engagement rates (likes, comments, shares, saves)</li>
                  <li>Track reach and impressions to understand visibility</li>
                  <li>Analyze click-through rates on links in captions</li>
                  <li>Monitor comment sentiment and quality</li>
                  <li>Track follower growth attributed to specific captions</li>
                  <li>Use analytics tools to identify top-performing caption styles</li>
                  <li>Test different caption lengths and formats</li>
                  <li>Monitor hashtag performance within captions</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Is the AI caption generator free to use?</h3>
                    <p className="text-secondary">Yes, our AI caption generator is completely free to use with no registration required. You can generate unlimited captions for your social media posts.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Can I use the generated captions commercially?</h3>
                    <p className="text-secondary">Yes, all captions generated by our AI are original and free from copyright restrictions. You can use them in your commercial social media marketing.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">What social media platforms does the AI support?</h3>
                    <p className="text-secondary">Our AI supports all major social media platforms including Instagram, Facebook, Twitter, LinkedIn, TikTok, Pinterest, and more.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">How do I make my captions more engaging?</h3>
                    <p className="text-secondary">Use emotional triggers, ask questions, include calls-to-action, tell stories, use relevant hashtags, and match your brand voice consistently.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Can I customize the generated captions?</h3>
                    <p className="text-secondary">Absolutely! The AI-generated captions serve as a starting point. You can edit, modify, and personalize them to match your specific needs and brand voice.                </p>
              </div>

              {/* Bottom Content Ad */}
              <div className="mt-8">
                <AdSpace slot="content" className="w-full h-24" />
              </div>
            </div>

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