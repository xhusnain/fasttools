import { HashtagCounter } from "@/components/hashtag-counter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"
import { Hash, Users, Zap, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "Instagram Hashtag Counter | Free Hashtag Extractor & Counter Tool | FastTools",
  description:
    "Free Instagram hashtag counter and extractor tool. Count hashtags from Instagram posts, extract hashtags, and generate AI hashtags for better reach.",
  keywords: [
    // Top Search Queries (Enhanced)
    "instagram hashtag counter",
    "hashtag counter",
    "instagram hashtag extractor",
    "instagram tag extractor", 
    "instagram tags extractor",
    "hashtag extractor for instagram",
    "instagram hashtag for posts count",
    "hashtags",
    "youtube video thumbnail downloader",
    "youtube tag generator",
    
    // Primary Keywords (20)
    "free hashtag counter",
    "instagram hashtags",
    "count hashtags",
    "extract hashtags",
    "hashtag analyzer",
    "hashtag frequency",
    "unique hashtags",
    "copy hashtags",
    "hashtag list",
    "hashtag limit 30",
    "instagram caption hashtags",
    "instagram comments hashtags",
    "social media tools",
    "instagram tools",
    "hashtag cleaner",
    "remove duplicate hashtags",
    "count tags online",
    "free hashtag counter",
    "hashtag counter online",
    
    // Secondary Keywords (20)
    "hashtag counter online",
    "instagram hashtags online",
    "count hashtags online",
    "extract hashtags online",
    "hashtag analyzer online",
    "hashtag frequency online",
    "unique hashtags online",
    "copy hashtags online",
    "hashtag list online",
    "hashtag limit 30 online",
    "instagram caption hashtags online",
    "instagram comments hashtags online",
    "social media tools online",
    "instagram tools online",
    "hashtag cleaner online",
    "remove duplicate hashtags online",
    "count tags online online",
    "free hashtag counter online",
    "hashtag counter online online",
    "hashtag counter free",
    
    // Long-tail Keywords (20)
    "free online hashtag counter",
    "best hashtag counter online",
    "hashtag counter with live preview",
    "free hashtag counter tool online",
    "online hashtag counter free",
    "hashtag counter online free",
    "instagram hashtags free online",
    "count hashtags free online",
    "extract hashtags free online",
    "hashtag analyzer free online",
    "hashtag frequency free online",
    "unique hashtags free online",
    "copy hashtags free online",
    "hashtag list free online",
    "hashtag limit 30 free online",
    "instagram caption hashtags free online",
    "instagram comments hashtags free online",
    "social media tools free online",
    "instagram tools free online",
    "hashtag cleaner free online",
    
    // Additional SEO Keywords
    "remove duplicate hashtags",
    "count tags online",
    "free hashtag counter",
    "hashtag counter online",
    "instagram hashtags online",
    "count hashtags online",
    "extract hashtags online",
    "hashtag analyzer online",
    "hashtag frequency online",
    "unique hashtags online",
    "copy hashtags online",
    "hashtag list online",
    "hashtag limit 30 online",
    "instagram caption hashtags online",
    "instagram comments hashtags online",
    "social media tools online",
    "instagram tools online",
    "hashtag cleaner online",
    "remove duplicate hashtags online",
    "count tags online online",
    "free hashtag counter online",
    "hashtag counter online online",
    "hashtag counter free",
    "instagram hashtags free",
    "count hashtags free",
    "extract hashtags free",
    "hashtag analyzer free",
    "hashtag frequency free",
    "unique hashtags free",
    "copy hashtags free",
    "hashtag list free",
    "hashtag limit 30 free",
    "instagram caption hashtags free",
    "instagram comments hashtags free",
    "social media tools free",
    "instagram tools free",
    "hashtag cleaner free",
    "remove duplicate hashtags free",
    "count tags online free",
    "free hashtag counter free",
    "hashtag counter online free",
    "hashtag counter tool",
    "instagram hashtags tool",
    "count hashtags tool",
    "extract hashtags tool",
    "hashtag analyzer tool",
    "hashtag frequency tool",
    "unique hashtags tool",
    "copy hashtags tool",
    "hashtag list tool",
    "hashtag limit 30 tool",
    "instagram caption hashtags tool",
    "instagram comments hashtags tool",
    "social media tools tool",
    "instagram tools tool",
    "hashtag cleaner tool",
    "remove duplicate hashtags tool",
    "count tags online tool",
    "free hashtag counter tool",
    "hashtag counter online tool",
    "hashtag counter tool tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/fun-tools/hashtag-counter" },
  openGraph: {
    title: "Instagram Hashtag Counter | Free Hashtag Extractor & Counter Tool | FastTools",
    description: "Free Instagram hashtag counter and extractor tool. Count hashtags from Instagram posts, extract hashtags, and generate AI hashtags for better reach.",
    url: "https://fasttools.store/fun-tools/hashtag-counter",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
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
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Instagram Hashtag Counter",
      alternateName: "Hashtag Extractor for Instagram",
      applicationCategory: "SocialMediaApplication",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/fun-tools/hashtag-counter",
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
        url: "https://fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://fasttools.store/fun-tools/hashtag-counter",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "instagram hashtag counter, hashtag counter, instagram hashtag extractor, instagram tag extractor, instagram tags extractor, hashtag extractor for instagram, instagram hashtag for posts count, hashtags, free hashtag counter, count hashtags, extract hashtags, hashtag analyzer, social media tools",
      about: {
        "@type": "Thing",
        name: "Social Media and Hashtag Tools",
        description: "Free online tools for social media management, hashtag analysis, and Instagram optimization"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
    }),
  },
}

export default function HashtagCounterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Rainbow Background */}
      <div className="relative overflow-hidden">
        {/* Rainbow Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 via-blue-500/20 to-cyan-500/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/15 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-400/10 via-transparent to-transparent"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-10 left-10 h-4 w-4 bg-pink-500 rounded-full animate-bounce animation-delay-100 shadow-lg shadow-pink-500/50"></div>
        <div className="absolute top-20 right-20 h-5 w-5 bg-blue-500 rounded-full animate-bounce animation-delay-500 shadow-lg shadow-blue-500/50"></div>
        <div className="absolute bottom-20 left-20 h-4 w-4 bg-yellow-500 rounded-full animate-bounce animation-delay-1000 shadow-lg shadow-yellow-500/50"></div>
        <div className="absolute bottom-10 right-10 h-3 w-3 bg-green-500 rounded-full animate-bounce animation-delay-1500 shadow-lg shadow-green-500/50"></div>
        
        <div className="container mx-auto px-4 py-8 relative">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Fun Tools", href: "/fun-tools" },
              { label: "Hashtag Counter", href: "/fun-tools/hashtag-counter" },
            ]}
          />

            <div className="max-w-6xl mx-auto mt-8 space-y-8">
              {/* Desktop Sidebar Ad */}
              <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
                <div className="text-center mb-2">
                  <span className="text-xs text-white/60 font-medium">Advertisement</span>
                </div>
                <AdSpace slot="sidebar" className="w-32 h-96 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" shape="vertical" />
              </div>
            {/* Hero Section */}
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/30 via-purple-500/30 via-blue-500/30 to-cyan-500/30 border border-pink-400/50 text-white text-sm font-bold mb-6">
                <Hash className="h-4 w-4 animate-pulse" />
                <span>AI-Powered Hashtag Tool</span>
                <div className="h-2 w-2 bg-green-400 rounded-full animate-ping"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 via-cyan-400 to-yellow-400 leading-tight">
                Instagram Hashtag Counter & Extractor
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 text-pretty max-w-3xl mx-auto leading-relaxed">
                Free Instagram hashtag counter and extractor tool. Count hashtags from Instagram posts, extract hashtags, and generate AI hashtags for better reach!
              </p>
              
              {/* Enhanced SEO Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/80">
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30">
                  <Hash className="h-4 w-4" />
                  <span>30 Hashtag Limit</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30">
                  <Users className="h-4 w-4" />
                  <span>100K+ Users</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/30">
                  <Zap className="h-4 w-4" />
                  <span>AI Powered</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-600/20 border border-pink-400/30">
                  <Target className="h-4 w-4" />
                  <span>Free Forever</span>
                </div>
              </div>
            </div>

            {/* First Ad Space - After Hero Content */}
            <div className="mb-8">
              <div className="text-center mb-2">
                <span className="text-xs text-white/60 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
            </div>

            <HashtagCounter />

            {/* Second Ad Space - After Tool */}
            <div className="my-8">
              <div className="text-center mb-2">
                <span className="text-xs text-white/60 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
            </div>

            <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
              <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                <h2 className="text-xl font-bold mb-4 text-white">Instagram Hashtag Counter & Extractor Tool</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Our free Instagram hashtag counter and extractor tool helps you quickly count hashtags from Instagram posts, 
                  extract hashtags from captions, and generate AI-powered hashtags for better reach. Perfect for Instagram 
                  hashtag for posts count, social media managers, influencers, and content creators!
                </p>
                <h3 className="text-lg font-bold mb-3 text-white">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li><strong>Instagram Hashtag Counter:</strong> Count total unique hashtags in your Instagram posts</li>
                  <li><strong>Instagram Hashtag Extractor:</strong> Extract all hashtags from Instagram captions</li>
                  <li><strong>Instagram Tag Extractor:</strong> Extract Instagram tags from any post content</li>
                  <li><strong>AI-Powered Generation:</strong> Generate relevant hashtags for all platforms</li>
                  <li><strong>Platform-Specific:</strong> Optimized hashtag suggestions for each platform</li>
                  <li><strong>One-Click Copy:</strong> Copy all hashtags with a single click</li>
                  <li><strong>Instagram Limit:</strong> Perfect for Instagram's 30 hashtag limit</li>
                </ul>
                <h3 className="text-lg font-bold mt-6 mb-3 text-white">Related Tools</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li><Link href="/seo-tools/hashtags" className="text-blue-300 hover:text-blue-200">Hashtag Generator</Link></li>
                  <li><Link href="/social-media-tools/youtube-tags" className="text-blue-300 hover:text-blue-200">YouTube Tag Generator</Link></li>
                  <li><Link href="/social-media-tools/youtube-thumbnail" className="text-blue-300 hover:text-blue-200">YouTube Video Thumbnail Downloader</Link></li>
                  <li><Link href="/ai-tools/caption-generator" className="text-blue-300 hover:text-blue-200">AI Caption Generator</Link></li>
                </ul>
              </div>

              {/* Top Search Queries Section */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 mt-6">
                <h2 className="text-xl font-bold mb-4 text-white">Instagram Hashtag Extractor & Counter Features</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Our Instagram hashtag extractor and counter tool is specifically designed to help you with Instagram hashtag for posts count, 
                  extract hashtags from Instagram posts, and optimize your Instagram hashtag strategy for maximum reach and engagement.
                </p>
                
                <h3 className="text-lg font-bold mb-3 text-white">Instagram Hashtag Tools:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li><strong>Instagram Hashtag Counter:</strong> Count hashtags in your Instagram posts instantly</li>
                  <li><strong>Instagram Hashtag Extractor:</strong> Extract all hashtags from Instagram captions</li>
                  <li><strong>Instagram Tag Extractor:</strong> Extract Instagram tags from any content</li>
                  <li><strong>Instagram Tags Extractor:</strong> Multiple tag extraction from Instagram posts</li>
                  <li><strong>Hashtag Extractor for Instagram:</strong> Specialized Instagram hashtag extraction</li>
                  <li><strong>Instagram Hashtag for Posts Count:</strong> Count hashtags specifically for Instagram posts</li>
                </ul>
              </div>

              {/* Middle Content Ad */}
              <div className="my-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-white/60 font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
              </div>

              {/* Enhanced SEO Content */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 mt-6">
                <h2 className="text-xl font-bold mb-4 text-white">Social Media Hashtag Strategy Guide</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Master hashtag optimization across all platforms with our comprehensive guide covering hashtag research, 
                  AI-powered generation, strategy development, and performance tracking for maximum engagement and reach.
                </p>
                
                <h3 className="text-lg font-bold mb-3 text-white">Hashtag Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li>Use 20-30 hashtags per post for maximum reach</li>
                  <li>Mix popular and niche hashtags for better targeting</li>
                  <li>Research competitor hashtags for inspiration</li>
                  <li>Track hashtag performance and adjust strategy</li>
                  <li>Use location-based hashtags for local businesses</li>
                  <li>Create branded hashtags for campaigns</li>
                  <li>Leverage AI-generated hashtags for better reach</li>
                </ul>

                <h3 className="text-lg font-bold mt-6 mb-3 text-white">Platform-Specific Strategies</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li><strong>Instagram:</strong> Use 20-30 hashtags, mix popular and niche</li>
                  <li><strong>Twitter:</strong> Use 1-2 relevant hashtags for better engagement</li>
                  <li><strong>TikTok:</strong> Use 3-5 trending hashtags for viral potential</li>
                  <li><strong>LinkedIn:</strong> Use 3-5 professional hashtags</li>
                  <li><strong>Facebook:</strong> Use 1-3 hashtags for better reach</li>
                  <li><strong>YouTube:</strong> Use 3-5 relevant hashtags in descriptions</li>
                </ul>
              </div>

              {/* YouTube Tools Section */}
              <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 mt-6">
                <h2 className="text-xl font-bold mb-4 text-white">YouTube Tools & Hashtag Optimization</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Enhance your YouTube content with our comprehensive YouTube tools including YouTube tag generator and 
                  YouTube video thumbnail downloader. Optimize your YouTube hashtags for better discoverability and reach.
                </p>
                
                <h3 className="text-lg font-bold mb-3 text-white">YouTube Optimization Tools:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li><strong>YouTube Tag Generator:</strong> Generate relevant tags for your YouTube videos</li>
                  <li><strong>YouTube Video Thumbnail Downloader:</strong> Download thumbnails from YouTube videos</li>
                  <li><strong>YouTube Hashtag Optimization:</strong> Optimize hashtags for YouTube descriptions</li>
                  <li><strong>YouTube SEO Tools:</strong> Improve your YouTube video discoverability</li>
                </ul>
                
                <div className="mt-4">
                  <Link href="/social-media-tools/youtube-tags" className="text-blue-300 hover:text-blue-200 text-sm font-medium">
                    → Try our YouTube Tag Generator
                  </Link>
                  <br />
                  <Link href="/social-media-tools/youtube-thumbnail" className="text-blue-300 hover:text-blue-200 text-sm font-medium">
                    → Try our YouTube Video Thumbnail Downloader
                  </Link>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 mt-6">
                <h2 className="text-xl font-bold mb-4 text-white">AI-Powered Hashtag Analytics</h2>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Our advanced hashtag counter and AI generator provides detailed analytics including unique hashtag count, 
                  duplicate detection, AI-powered suggestions, and performance insights to optimize your social media strategy.
                </p>
                
                <h3 className="text-lg font-bold mb-3 text-white">Advanced Features</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-white/80">
                  <li>Count total unique hashtags in your content</li>
                  <li>AI-powered hashtag generation for all platforms</li>
                  <li>Identify duplicate hashtags for cleanup</li>
                  <li>Extract hashtag list for easy copying</li>
                  <li>Analyze hashtag density and distribution</li>
                  <li>Platform-specific hashtag recommendations</li>
                  <li>Trending hashtag analysis and suggestions</li>
                </ul>
              </div>

              {/* Final Footer Ad */}
              <div className="mt-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-white/60 font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}