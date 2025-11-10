import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AiCaptionGenerator } from "@/components/ai-caption-generator"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { 
  Sparkles, 
  Calculator, 
  BarChart3, 
  TrendingUp, 
  BookOpen, 
  Users, 
  Clock, 
  Target, 
  AlertCircle, 
  FileText, 
  Award, 
  Globe, 
  QrCode,
  Music,
  Heart
} from "lucide-react"

// Auto-update year
const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: `AI Caption Generator ${currentYear} | Free Instagram & TikTok Captions`,
  description:
    `FastTools AI Caption Generator - Generate viral social media captions with AI in ${currentYear}! Free AI-powered caption generator for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube & Pinterest. Create engaging captions with hashtags instantly. Perfect for influencers, marketers & content creators. No sign up required.`,
  keywords: [
        "fasttools",
        "fast tools",
        // --- Primary Focus Keywords ---
        "AI caption generator",
        "free AI caption generator",
        "AI social media caption generator",
        "AI content generator",
        "AI writing assistant",
        "AI content creator",
        "AI writing tool",
        "AI copywriting tool",
        "AI marketing tools",
        "AI social media tools",
        "AI content creation tool",
        "AI post caption generator",
        "AI productivity tools",
        "AI content marketing",
        "AI content planner",
        "AI text generator",
        "AI content strategy",
        "AI digital marketing tool",
        "AI automation tools",
        "AI social media manager",

        // --- Social Media Specific ---
        "Instagram caption generator",
        "Facebook caption generator",
        "LinkedIn caption generator",
        "TikTok caption generator",
        "YouTube caption generator",
        "Pinterest caption generator",
        "Twitter caption generator",
        "social media caption maker",
        "viral caption generator",
        "engaging caption generator",
        "creative caption generator",
        "caption ideas generator",
        "AI hashtag generator",
        "post caption maker",
        "social media copy generator",
        "AI content writing generator",

        // --- Long-tail & Niche Keywords ---
        "free AI caption generator for Instagram",
        "AI caption generator for businesses",
        "AI caption generator for influencers",
        "AI caption generator for content creators",
        "AI caption generator for marketers",
        "AI caption generator for agencies",
        "AI caption generator for small business",
        "AI caption generator for startups",
        "AI caption generator for brands",
        "AI caption generator for social media managers",
        "AI caption generator for e-commerce",
        "AI caption generator for fitness influencers",
        "AI caption generator for travel bloggers",
        "AI caption generator for food bloggers",
        "AI caption generator with templates",
        "viral post caption generator",
        "AI caption generator with hashtags",
        "best AI caption generator 2025",
        "free social media caption generator online",
        "AI-powered social media caption tool",

        // --- Related SEO & Engagement Keywords ---
        "caption writing tool",
        "social media content generator",
        "social media post ideas",
        "caption optimization tool",
        "social media copywriting",
        "content marketing AI",
        "social media automation",
        "digital content creation",
        "social media planning",
        "content strategy planner",
        "content calendar generator",
        "social media engagement tool",
        "viral content generator",
        "social media branding",
        "AI social media optimization",
        "automated caption generator",
        "social media AI tools",
        "AI content generation software",
        "caption creator online",
        "free caption maker",
        
        // --- Top User-Searched Keywords (Based on 2025 Trends) ---
        "caption generator with hashtags",
        "viral caption generator",
        "AI caption maker",
        "social media caption ideas",
        "caption generator for influencers",
        "AI caption generator no sign up",
        "Instagram caption ideas",
        "TikTok caption ideas",
        "catchy caption generator",
        "photo caption generator",
        "AI caption generator for reels",
        "short caption generator",
        "long caption generator",
        "motivational caption generator",
        "funny caption generator",
        "business caption generator",
        "caption generator for stories",
        "AI caption generator for posts",
        "caption generator with emojis",
        "trending caption generator",
        "AI bio generator",
        "Instagram bio generator"
    ],

  openGraph: {
    title: `Best Free AI Caption Generator ${currentYear} | Instagram, TikTok, Facebook & All Social Media`,
    description: `Generate viral social media captions with AI in ${currentYear}! Free AI-powered caption generator for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube & Pinterest. Create engaging captions with hashtags. Perfect for influencers, marketers & content creators. No sign up required.`,
    type: "website",
    url: "https://www.fasttools.store/ai-tools/caption-generator",
    siteName: "FastTools - Free Online Tools",
    locale: "en_US",
    countryName: "Global",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: `Best Free AI Caption Generator ${currentYear} - Create Viral Social Media Captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube & Pinterest`,
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Free AI Caption Generator ${currentYear} | All Social Media Platforms`,
    description: `Generate viral social media captions with AI! Free caption generator for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube & Pinterest. Create engaging captions with hashtags instantly. No sign up required. Perfect for influencers & marketers.`,
    images: ["https://www.fasttools.store/og-image.svg"],
    creator: "@FastTools",
    site: "@FastTools",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.fasttools.store/ai-tools/caption-generator",
  },
  category: "Social Media & Marketing",
  classification: "Social Media Tool",
  applicationName: "FastTools - AI Caption Generator",
  authors: [{ name: "FastTools" }],
  generator: "Next.js",
  publisher: "FastTools",
  creator: "FastTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: 'origin-when-cross-origin',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "AI Caption Generator",
    "mobile-web-app-capable": "yes",
    "application-name": `AI Caption Generator ${currentYear} - All Platforms`,
    "msapplication-TileColor": "#ff6b35",
    "theme-color": "#ff6b35",
    "msapplication-navbutton-color": "#ff6b35",
    "color-scheme": "dark light",
    "rating": "General",
    "distribution": "Global",
    "coverage": "Worldwide",
    "target": "all",
    "audience": "Social Media Managers, Influencers, Content Creators, Marketers, Businesses",
    "subject": "AI Social Media Caption Generation for All Platforms",
    "abstract": `Free AI-powered caption generator for all social media platforms. Generate viral captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube, and Pinterest. Perfect for influencers, marketers, and content creators.`,
  },
}

export default function CaptionGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `AI Caption Generator - All Social Media Platforms - ${currentYear}`,
    alternateName: ["Social Media Caption Generator", "Instagram Caption Maker", "TikTok Caption Tool", "Free Caption Generator"],
    description: `Generate viral social media captions with AI in ${currentYear}. Create engaging captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube & Pinterest instantly. Free AI-powered tool perfect for influencers, marketers, and content creators. No sign up required.`,
    applicationCategory: "SocialMediaApplication",
    operatingSystem: "Web Browser",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "2.0",
    softwareHelp: "https://www.fasttools.store/ai-tools/caption-generator#faq",
    datePublished: "2024-01-15",
    dateModified: new Date().toISOString().split('T')[0],
    url: "https://www.fasttools.store/ai-tools/caption-generator",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: `${currentYear + 10}-12-31`,
      description: "Free AI caption generator with unlimited usage for all social media platforms",
      validFrom: new Date().toISOString().split('T')[0],
      seller: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "3247",
      reviewCount: "1823",
      bestRating: "5",
      worstRating: "1"
    },
    featureList: [
      "AI-powered caption generation",
      "7 social media platforms support",
      "Instagram caption generator",
      "Facebook caption maker",
      "Twitter caption creator",
      "LinkedIn post generator",
      "TikTok caption generator",
      "Pinterest caption maker",
      "YouTube description generator",
      "Viral caption templates",
      "Engagement-focused content",
      "Free to use forever",
      "No registration required",
      "Platform-specific optimization",
      "Multiple caption styles",
      "Instant results",
      "Mobile optimized",
      "Real-time generation",
      "Trending hashtag integration",
      "Brand voice customization"
    ],
    creator: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      logo: "https://www.fasttools.store/logo.svg"
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      logo: "https://www.fasttools.store/logo.svg"
    },
    version: "2.1",
    downloadUrl: "https://www.fasttools.store/ai-tools/caption-generator",
    screenshot: "https://www.fasttools.store/og-image.svg",
    keywords: "AI caption generator, free AI caption generator, social media captions, Instagram captions, Facebook captions, Twitter captions, LinkedIn captions, TikTok captions, Pinterest captions, YouTube captions, viral captions, engaging captions, AI content creation, social media marketing, caption maker, post generator",
    about: {
      "@type": "Thing",
      name: "Social Media Content Creation",
      description: "AI-powered tools for creating engaging social media content and captions across all major platforms"
    },
    isPartOf: {
      "@type": "WebSite",
      name: "FastTools",
      url: "https://www.fasttools.store",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.fasttools.store/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    mainEntity: {
      "@type": "WebPage",
      name: "AI Caption Generator | Advanced Social Media Caption Generator",
      description: "Generate viral social media captions with AI in seconds. Create engaging Instagram, Facebook, Twitter, LinkedIn, TikTok, Pinterest & YouTube captions instantly.",
      url: "https://www.fasttools.store/ai-tools/caption-generator",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.fasttools.store"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "AI Tools",
            item: "https://www.fasttools.store/ai-tools"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Caption Generator",
            item: "https://www.fasttools.store/ai-tools/caption-generator"
          }
        ]
      }
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the AI caption generator free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our AI caption generator is completely free to use with no registration required. You can generate unlimited captions for your social media posts across all 7 supported platforms."
        }
      },
      {
        "@type": "Question",
        name: "What social media platforms does the AI caption generator support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI caption generator supports 7 major social media platforms: Instagram, Facebook, Twitter/X, LinkedIn, TikTok, Pinterest, and YouTube. Each platform gets optimized captions tailored to their specific audience and character limits."
        }
      },
      {
        "@type": "Question",
        name: "Can I use the generated captions commercially?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all captions generated by our AI are original and free from copyright restrictions. You can use them in your commercial social media marketing, business posts, and content creation without any limitations."
        }
      },
      {
        "@type": "Question",
        name: "How do I make my captions more engaging?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI automatically creates engaging captions using emotional triggers, relevant hashtags, calls-to-action, storytelling elements, and platform-specific best practices. You can also customize the generated captions to match your brand voice."
        }
      },
      {
        "@type": "Question",
        name: "How many captions can I generate at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can generate 5 unique, creative captions per request. Each caption is optimized for your chosen platform and includes different styles and approaches to give you variety in your content."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 xs:py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12">
          <Breadcrumbs
            items={[
              { label: "AI Tools", href: "/ai-tools" },
              { label: "AI Caption Generator - All Platforms", href: "/ai-tools/caption-generator" },
            ]}
          />

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 lg:flex-[2] space-y-6">
                {/* Hero Section */}
                <div className="text-center space-y-5 animate-fade-in-up">
                  <GHeader
                    title="Free AI Caption Generator - Create Viral Social Media Captions Instantly"
                    description="Generate viral social media captions with AI in 2025! Create engaging captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube & Pinterest. Boost engagement with our free AI-powered caption generator. No sign up required."
                    titleSize="medium"
                    descriptionSize="small"
                  />
                </div>

                {/* Mobile Ad Space */}
                <div className="lg:hidden">
                  <AdSpace slot="content" className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28" />
                </div>

                {/* Caption Generator Tool */}
                <div className="animate-fade-in-up animation-delay-200">
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                    <AiCaptionGenerator />
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-5 animate-fade-in-up animation-delay-400">
                  {/* How to Use Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-card rounded-lg flex-shrink-0">
                    <BookOpen className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  How to Use
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3">
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-2">Step 1: Describe Content</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground">Enter a detailed description of your image, video, or content idea. Be specific about the mood, theme, or message.</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-2">Step 2: Choose Platform</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground">Select from Instagram, Facebook, Twitter, LinkedIn, TikTok, Pinterest, or YouTube for optimized captions.</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-2">Step 3: Select Style</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground">Choose your caption style: professional, casual, funny, inspirational, or promotional.</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-2">Step 4: Generate & Use</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground">Get 5 unique captions instantly. Copy, customize, or regenerate until you find the perfect match.</p>
                  </div>
                  </div>
                  </div>

                  {/* Key Features Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-card rounded-lg flex-shrink-0">
                    <Target className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Key Features
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3">
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">AI-Powered Generation</h3>
                    </div>
                    <p className="text-xs xs:text-sm text-muted-foreground">Advanced AI creates engaging, platform-specific captions using emotional triggers and trending topics.</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-4 w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">7 Platforms Support</h3>
                    </div>
                    <p className="text-xs xs:text-sm text-muted-foreground">Optimized for Instagram, Facebook, Twitter, LinkedIn, TikTok, Pinterest, and YouTube.</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Viral Templates</h3>
                    </div>
                    <p className="text-xs xs:text-sm text-muted-foreground">Access trending caption formats and viral content templates for maximum engagement.</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Instant Results</h3>
                    </div>
                    <p className="text-xs xs:text-sm text-muted-foreground">Generate 5 unique captions in seconds with no waiting time or processing delays.</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Brand Voice</h3>
                    </div>
                    <p className="text-xs xs:text-sm text-muted-foreground">Customize captions to match your brand voice and maintain consistency across platforms.</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Free Forever</h3>
                    </div>
                    <p className="text-xs xs:text-sm text-muted-foreground">Completely free with no registration required, usage limits, or hidden costs.</p>
                  </div>
                  </div>
                  </div>

                  {/* Use Cases Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-card rounded-lg flex-shrink-0">
                    <BarChart3 className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Use Cases
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3">
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-2">Content Creators</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground">Generate engaging captions for YouTube, Instagram, TikTok, and other social media platforms to boost engagement.</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-2">Businesses</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground">Create professional captions for product launches, announcements, and marketing campaigns.</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-2">Influencers</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground">Maintain consistent brand voice across all platforms with AI-generated captions that match your style.</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border/30">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-2">Social Media Managers</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground">Save time and increase productivity by generating multiple caption options for client accounts.</p>
                  </div>
                </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="bg-card rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm border border-border/30">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-card rounded-lg flex-shrink-0">
                    <AlertCircle className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Is the AI caption generator free to use?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Yes, our AI caption generator is completely free to use with no registration required. You can generate unlimited captions for your social media posts across all 7 supported platforms.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">What social media platforms does the AI caption generator support?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Our AI caption generator supports 7 major social media platforms: Instagram, Facebook, Twitter/X, LinkedIn, TikTok, Pinterest, and YouTube. Each platform gets optimized captions tailored to their specific audience and character limits.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Can I use the generated captions commercially?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Yes, all captions generated by our AI are original and free from copyright restrictions. You can use them in your commercial social media marketing, business posts, and content creation without any limitations.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How do I make my captions more engaging?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Our AI automatically creates engaging captions using emotional triggers, relevant hashtags, calls-to-action, storytelling elements, and platform-specific best practices. You can also customize the generated captions to match your brand voice.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How many captions can I generate at once?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      You can generate 5 unique, creative captions per request. Each caption is optimized for your chosen platform and includes different styles and approaches to give you variety in your content.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Do AI-generated captions sound robotic or can they be human-like?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Modern AI caption generators are designed to produce human-like text that sounds natural and engaging. They utilize advanced language models to generate captions that are casual, witty, inspirational, or professional depending on your needs. However, we recommend reviewing and editing the AI-generated captions to ensure they align perfectly with your unique voice and brand personality.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Can AI caption generators add hashtags and emojis automatically?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Yes! Our AI caption generator can automatically suggest relevant hashtags and emojis based on your content and context. This feature helps enhance engagement by making your posts more discoverable and relatable. The AI analyzes your content to recommend trending hashtags and appropriate emojis that match your post's tone and message.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How accurate and relevant are AI-generated captions?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      The accuracy and relevance of AI-generated captions depend on the quality of the AI model and the specificity of your input. Our advanced AI system produces high-quality, contextually relevant captions, but we always recommend reviewing and customizing them to ensure they meet your standards and resonate perfectly with your target audience.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Can AI caption generators understand context and tailor captions for different content types?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Absolutely! Our advanced AI caption generator can analyze the context of your content and tailor captions accordingly. It can adjust the tone, style, and content to suit different types of posts - whether it's a promotional post, personal update, educational content, behind-the-scenes content, or inspirational piece. The AI considers your content type to generate the most appropriate captions.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How do AI caption generators compare to human writers?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      AI caption generators offer speed, scalability, and consistency, enabling you to produce large volumes of captions quickly while maintaining a uniform tone. Human writers bring creativity, emotional intelligence, and deep brand understanding. The most effective approach combines both: use AI for initial drafts and efficiency, then add human creativity and brand-specific touches for the best results.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Can AI caption generators align with my brand's voice or specific style?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Yes! Our AI caption generator allows you to customize the tone and style of generated captions to align with your brand's voice. You can specify your desired tone (professional, casual, funny, inspirational), provide context about your audience and goals, and the AI will generate captions that match your brand personality. You can also edit and personalize the results to ensure perfect brand alignment.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">What are the common pitfalls to avoid when using AI caption generators?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Common pitfalls include: over-relying on AI without adding personal touches (which can result in robotic-sounding captions), ignoring your audience's language and preferences, neglecting proper formatting for readability, using weak calls-to-action, and not reviewing captions for brand alignment. Always add your unique perspective and ensure captions resonate with your specific audience.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Can AI caption generators handle multiple languages?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Yes, many AI caption generators support multiple languages, allowing you to create captions in various languages to cater to diverse audiences. This feature is particularly beneficial for global brands and creators aiming to reach broader audiences. However, the accuracy and fluency can vary depending on the language, so it's advisable to review and edit captions to ensure they meet your standards.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How do AI caption generators stay updated with current trends?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      AI caption generators are trained on vast, continuously updated datasets that reflect current language usage, trends, and cultural nuances. Our system uses advanced machine learning algorithms that learn from user interactions and feedback, allowing it to adapt to evolving content strategies, trending topics, and audience preferences in real-time.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Are AI caption generators suitable for all types of content?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      AI caption generators are highly versatile and effective for most content types including social media posts, marketing materials, e-commerce listings, blog content, and general promotional materials. However, for highly specialized, sensitive, or controversial content, human oversight is recommended to ensure accuracy, appropriateness, and proper handling of complex topics.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How do AI caption generators handle humor and sarcasm?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Humor and sarcasm can be challenging for AI due to their nuanced and context-dependent nature. While AI caption generators can attempt to incorporate humor, the results may not always align perfectly with human expectations or cultural context. We recommend reviewing and adjusting such captions to ensure they resonate appropriately with your audience and maintain the intended tone.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Can AI caption generators improve over time with my usage?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Yes! Our AI caption generator utilizes advanced machine learning algorithms that learn from user feedback, interactions, and preferences. Over time, it can improve its suggestions to better align with your specific brand voice, audience preferences, and content style. The more you use it and provide feedback, the more personalized and effective the captions become.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How do AI caption generators handle sensitive or controversial topics?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      AI caption generators may not fully grasp the complexities and sensitivities of controversial topics. It's crucial to exercise caution and human judgment when creating captions on such subjects. We recommend reviewing all AI-generated content carefully to ensure it's handled appropriately, respectfully, and aligns with your brand values and audience expectations.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Are there any ethical concerns with using AI caption generators?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Ethical considerations include potential biases in AI models, maintaining authenticity of content, and the impact on human writers. It's important to use AI tools responsibly, ensure content is fair and accurate, maintain transparency about AI usage when appropriate, and always add human oversight to ensure ethical standards are met. We're committed to responsible AI usage and continuous improvement.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How can I measure the effectiveness of AI-generated captions?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Measure effectiveness through engagement metrics (likes, comments, shares, saves), conversion rates (website visits, purchases), audience feedback, and A/B testing comparing AI-generated vs. human-written captions. Track reach, impressions, click-through rates, and monitor which caption styles perform best with your audience to continuously improve your content strategy.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Can AI caption generators integrate with social media management tools?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Yes! Many AI caption generators offer integrations with popular social media management platforms, allowing you to create, schedule, and publish posts seamlessly. This integration streamlines your workflow, enhances efficiency in content management, and enables you to maintain consistent posting schedules while leveraging AI-powered caption generation.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">What's the future of AI caption generators?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      The future looks incredibly promising with advancements in AI and machine learning leading to more sophisticated, context-aware tools. We can expect improved language understanding, better integration with multimedia content, more personalized caption suggestions, enhanced cultural sensitivity, better handling of humor and emotion, and more seamless integration with various content platforms and workflows.
                    </p>
                  </div>

                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How can I use AI caption generators to increase Instagram engagement and followers?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Increasing Instagram engagement with AI caption generators requires a strategic approach that combines AI efficiency with authentic human creativity. First, use the AI to generate multiple caption variations for each post, then select the one that best resonates with your brand voice and audience preferences. Focus on creating captions that encourage interaction by incorporating strategic calls-to-action such as "Double tap if you agree," "Tag someone who needs to see this," or "Comment your thoughts below." The AI can help you craft these CTAs naturally within your captions. Additionally, leverage the AI's ability to suggest relevant hashtags that align with your content and target audience. Mix popular hashtags (100K-500K posts) with niche hashtags (10K-50K posts) to maximize discoverability while maintaining engagement quality. Use the AI to create caption hooks—the first line that appears before users click "more"—that are compelling enough to make users want to read the full caption. Incorporate storytelling elements, pose questions, share valuable tips, or create curiosity gaps that encourage users to engage. The AI can also help you maintain consistent posting schedules by generating captions in batches, allowing you to plan content calendars efficiently. Remember to add personal touches, genuine emotions, and authentic experiences to AI-generated captions to build deeper connections with your audience. Track your engagement metrics for different caption styles and use this data to refine your prompts to the AI generator, creating a feedback loop that continuously improves your caption quality and engagement rates over time.
                    </p>
                  </div>

                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">What are the best practices for creating viral TikTok captions using AI caption generators?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Creating viral TikTok captions with AI generators involves understanding TikTok's unique culture, trends, and user behavior patterns. TikTok captions should be concise, engaging, and trend-aware, typically ranging from 150-300 characters for maximum impact. Use the AI generator to create captions that incorporate trending sounds, popular challenges, or viral memes while maintaining authenticity to your content. The key is to front-load your most important message or hook in the first few words since TikTok displays limited text initially. AI can help you craft attention-grabbing opening lines like "POV:", "Wait for it...", "This changed everything:", or "Nobody talks about..." that immediately capture viewer interest. Incorporate trending hashtags strategically—use 3-5 relevant hashtags that combine broad trending tags (#FYP, #ForYou) with niche tags specific to your content vertical. The AI can suggest trending hashtag combinations based on your video description. For educational or tutorial content, use the AI to create value-driven captions that promise specific outcomes: "3 secrets to...", "How to... in 30 seconds", or "The trick nobody tells you about...". For entertainment content, lean into humor, relatability, and emotional resonance—areas where AI can provide creative starting points that you can personalize. TikTok thrives on authentic, conversational language, so edit AI-generated captions to match Gen Z communication styles, including casual abbreviations, lowercase styling, and conversational tone. Include strategic call-to-actions that encourage specific behaviors: "Follow for part 2," "Send this to someone who needs it," or "Use this sound for your version." The AI can also help you create caption patterns that establish recognizable branding, such as consistent opening phrases or signature sign-offs. Most importantly, stay current with TikTok trends by regularly updating your AI prompts to reflect current platform culture, as what works today may not work tomorrow. Combine AI efficiency with human cultural awareness, trend monitoring, and authentic personality to create captions that resonate with TikTok's dynamic audience and algorithm preferences.
                    </p>
                  </div>

                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How do professional marketers and influencers use AI caption generators to save time while maintaining quality?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Professional marketers and influencers leverage AI caption generators as powerful time-saving tools while maintaining high-quality, engaging content through strategic workflows and optimization techniques. The most successful professionals use AI generators as creative assistants rather than complete solutions, treating AI-generated captions as high-quality first drafts that they then personalize and refine. They typically batch-create content by generating 20-30 captions at once, organized by content themes, product launches, or campaign objectives, which dramatically reduces the mental load of creating captions on demand. Many professionals develop detailed prompt templates that consistently produce on-brand results—for example, specifying tone, target audience, content format, desired caption length, and key messaging points in their AI requests. This systematization ensures consistency while allowing for creative variation. Advanced users create content libraries categorized by purpose: product announcements, educational posts, engagement boosters, story captions, and seasonal content, using AI to populate each category efficiently. They also use AI generators for A/B testing caption variations, generating 3-5 different approaches for important posts and using analytics to determine which style resonates best with their audience. Time-conscious professionals use AI to repurpose content across platforms—taking a long-form caption generated for Instagram and asking the AI to adapt it for Twitter's character limits, LinkedIn's professional tone, or TikTok's casual style, ensuring cross-platform consistency without manual rewriting. Many influencers use AI generators to overcome creative blocks, starting their content creation sessions by generating 10-15 caption ideas to spark creativity, then combining elements from multiple AI suggestions with their own insights. Professional content teams often assign AI caption generation to junior team members who then pass results to senior strategists for refinement, creating an efficient assembly line that maximizes both speed and quality. They also maintain swipe files of their best-performing AI-generated captions, analyzing patterns in successful posts to continually refine their AI prompts for better results. The key to professional-level usage is understanding that AI saves time in the ideation and drafting phases while human expertise adds the authenticity, emotional intelligence, and strategic positioning that turns good captions into great ones. By integrating AI generators into structured workflows, professionals can produce 3-5x more content without sacrificing quality, allowing them to maintain consistent posting schedules, test more creative variations, and focus their creative energy on high-impact strategic decisions rather than routine caption writing.
                    </p>
                  </div>

                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Can AI caption generators help with creating captions for different industries like e-commerce, real estate, fitness, and food blogging?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      AI caption generators are incredibly versatile tools that can be optimized for virtually any industry vertical when used with the right prompting strategies and industry-specific knowledge. For e-commerce businesses, AI generators excel at creating product descriptions, promotional captions, and conversion-focused copy. Effective e-commerce captions should highlight product benefits, create urgency with limited-time offers, address common customer objections, and include clear calls-to-action like "Shop now," "Link in bio," or "Swipe up." AI can generate variations emphasizing different product features—one focusing on quality, another on value, another on exclusivity—allowing you to test which messaging resonates best with your audience. Include specific prompts about your target customer's pain points and desired outcomes to generate more effective sales-oriented captions. In real estate, AI caption generators can create property showcase captions that highlight unique features, neighborhood benefits, investment potential, and lifestyle advantages. Prompt the AI with specific property details like square footage, key amenities, location highlights, and price range to generate accurate, compelling captions. Real estate professionals can use AI to create caption series for property tours, market updates, homebuying tips, and client testimonials, maintaining consistent posting while showcasing expertise. For fitness industry professionals including personal trainers, gym owners, and wellness coaches, AI generators can create motivational captions, workout explanations, transformation story narratives, nutrition tips, and community-building content. The key is prompting the AI with specific fitness goals, target demographics, and motivational themes that resonate with your audience's aspirations. Fitness captions should inspire action, provide value through tips or insights, celebrate progress, and build community through relatable experiences. Food bloggers and restaurants can leverage AI to create recipe captions, dining experience descriptions, ingredient spotlights, cooking tips, and food photography narratives. Effective food captions should appeal to multiple senses, tell stories about ingredient sourcing or preparation methods, provide helpful cooking tips, and create cravings through vivid descriptions. Prompt the AI with specific cuisines, dietary preferences, cooking techniques, and flavor profiles to generate more authentic, engaging food content. Across all industries, the most successful users customize AI outputs with industry-specific terminology, insider knowledge, and authentic brand personality. They understand that while AI provides excellent structural frameworks and creative starting points, industry expertise and authentic voice differentiation come from human refinement. By combining AI efficiency with deep industry knowledge, professionals can maintain active social media presences that establish thought leadership, drive engagement, and convert followers into customers without spending hours daily on caption creation.
                    </p>
                  </div>

                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How can small businesses and solopreneurs compete with big brands using AI caption generators effectively?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-white/80 leading-relaxed">
                      Small businesses and solopreneurs can effectively compete with larger brands by leveraging AI caption generators to level the content creation playing field while capitalizing on their unique advantages of authenticity, agility, and personal connection. The key competitive advantage for smaller businesses is the ability to be more authentic, personal, and responsive than corporate brands—and AI generators can help you scale these strengths rather than replace them. Start by using AI to maintain consistency in your posting schedule, which is one area where small businesses often struggle against brands with dedicated content teams. Generate a week or month of captions in one sitting, ensuring you never miss posting opportunities due to time constraints. While big brands often rely on formal, polished language, small businesses can use AI generators to create conversational, personality-driven captions that feel more authentic and relatable. Prompt the AI to write in first-person perspective, share personal anecdotes, and use conversational language that reflects how you actually speak to customers. This authenticity is difficult for large corporations to replicate and creates deeper audience connections. Small businesses should also leverage AI to experiment more freely with content styles—big brands often have approval processes that slow innovation, while you can test new caption approaches, trending formats, and creative angles daily using AI-generated variations. Use the time saved by AI caption generation to engage more deeply with your audience through comments, DMs, and community building—activities where personal attention creates loyalty that large brands struggle to match. AI generators also enable small businesses to maintain presence across multiple platforms (Instagram, Facebook, LinkedIn, TikTok) without proportionally increasing time investment, expanding reach without expanding team size. Focus AI prompts on your unique value propositions—what makes your business different from competitors, your origin story, your values, your special expertise—areas where authenticity matters more than production polish. Small businesses can also use AI to create educational content that establishes expertise in niche areas where you outperform larger generalist competitors. Generate how-to guides, tips, industry insights, and problem-solving content that provides genuine value, positioning yourself as a trusted expert rather than just another seller. Leverage AI to respond to customer questions by generating FAQ content, product explanation captions, and educational series that address common concerns—building trust through helpful information. The most successful small businesses use AI caption generators to handle routine content (product announcements, promotions, general posts) efficiently while reserving their personal creativity for high-impact content that showcases their unique personality, customer relationships, and authentic brand story. Remember that your biggest competitive advantages aren't resources or reach—they're authenticity, flexibility, personal relationships, and niche expertise. AI caption generators free up your time to double down on these strengths while maintaining professional, consistent content that keeps your brand visible and competitive in crowded markets. By combining AI efficiency with genuine human connection, small businesses can build loyal communities that choose authentic relationships over corporate polish, creating sustainable competitive advantages that large brands cannot easily replicate.
                    </p>
                  </div>
                  </div>
                  </div>

                  {/* Related Tools Section */}
                  <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-card rounded-lg flex-shrink-0">
                    <Calculator className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Related AI & Content Tools
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3">
                  <a href="/ai-tools/qr-generator" className="p-2 xs:p-3 bg-card rounded-lg border border-border/30 hover:bg-blue-500/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <QrCode className="h-3 w-3 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">QR Code Generator</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Generate advanced QR codes with logos</p>
                  </a>
                  <a href="/ai-tools/lyrics-generator" className="p-2 xs:p-3 bg-card rounded-lg border border-border/30 hover:bg-purple-500/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Music className="h-3 w-3 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Lyrics Generator</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Generate song lyrics with AI</p>
                  </a>
                  <a href="/ai-tools/pet-names" className="p-2 xs:p-3 bg-card rounded-lg border border-border/30 hover:bg-primary/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Heart className="h-3 w-3 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Pet Name Generator</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Creative names for your pets</p>
                  </a>
                  <a href="/seo-tools/hashtags" className="p-2 xs:p-3 bg-card rounded-lg border border-border/30 hover:bg-red-500/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="h-3 w-3 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Hashtag Generator</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Create trending hashtag combinations</p>
                  </a>
                  <a href="/seo-tools/blog-titles" className="p-2 xs:p-3 bg-card rounded-lg border border-border/30 hover:bg-cyan-500/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="h-3 w-3 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm">Blog Title Generator</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Create compelling headlines</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Sidebar with AdSense (sticky, lowered start) */}
          <div className="hidden lg:block w-72">
            <div className="sticky top-24 space-y-6">
              <AdSpace slot="sidebar" className="w-full h-96 border border-border rounded-xl shadow-sm bg-card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}