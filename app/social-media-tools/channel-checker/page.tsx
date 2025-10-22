import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YoutubeChannelChecker } from "@/components/youtube-channel-checker"
import { AdSpace } from "@/components/ad-space"
import { Link, Zap, Target, Shield, Globe, Clock, FileText, Hash, Lightbulb, Copy, Users, Code, Download, ExternalLink, Palette, BarChart3, Smartphone, Settings, Eye } from "lucide-react"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "YouTube Channel Name Checker – Check Name Availability Instantly (Free Tool)",
  description: "Check if your desired YouTube channel name is available. Get alternative suggestions and find the perfect name for your channel. Free, fast, and comprehensive.",
  keywords: [
    "youtube channel name checker",
    "youtube name availability",
    "check youtube name",
    "youtube channel name",
    "youtube username checker",
    "channel name ideas",
    "channel branding",
    "youtube brand name",
    "youtube handle checker",
    "username availability",
    "cross-platform name check",
    "name generator",
    "channel identity",
    "brand consistency",
    "creator tools",
    "youtube seo",
    "channel setup",
    "naming tips",
    "unique channel names",
    "short channel names",
    "memorable names",
    "niche channel names",
    "gaming channel names",
    "vlog channel names",
    "tech channel names",
    "education channel names",
    "music channel names",
    "lifestyle channel names",
    "beauty channel names",
    "travel channel names",
    "finance channel names",
    "fitness channel names",
    "food channel names",
    "art channel names",
    "photography channel names",
    "productivity channel names",
    "kids channel names",
    "language channel names",
    "review channel names",
    "tutorial channel names",
    "how to name a channel"
  ],
  openGraph: {
    title: "YouTube Channel Name Checker – Check Name Availability Instantly (Free Tool)",
    description: "Check if your desired YouTube channel name is available. Get alternative suggestions and find the perfect name for your channel. Free, fast, and comprehensive.",
    url: "https://www.fasttools.store/social-media-tools/channel-checker",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.png",
        width: 1200,
        height: 630,
        alt: "YouTube Channel Name Checker – Check Name Availability Instantly (Free Tool)",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Channel Name Checker – Check Name Availability Instantly (Free Tool)",
    description: "Check if your desired YouTube channel name is available. Get alternative suggestions and find the perfect name for your channel.",
    images: ["https://www.fasttools.store/og-image.png"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/social-media-tools/channel-checker",
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
}

export default function ChannelCheckerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Channel Name Checker",
    "description": "Check if your desired YouTube channel name is available. Get alternative suggestions and find the perfect name for your channel.",
    "applicationCategory": "WebTool",
    "operatingSystem": "All",
    "url": "https://www.fasttools.store/social-media-tools/channel-checker",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Social Media Tools", href: "/social-media-tools" },
            { label: "Channel Name Checker", href: "/social-media-tools/channel-checker" },
          ]}
        />

        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
            <Link className="h-3 w-3" />
            Social Media Tool
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
            YouTube Channel Name Checker – Check Name Availability Instantly (Free Tool)
          </h1>
          <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed mb-6">
            Check if your desired YouTube channel name is available. Get alternative suggestions and find the perfect name for your channel. Free, fast, and comprehensive.
          </p>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium text-sm">Instant Check</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-green-500 shadow">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-green-600 font-medium text-sm">100% Free</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
              <Globe className="h-4 w-4 text-accent" />
              <span className="text-accent font-medium text-sm">All Platforms</span>
            </div>
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
              <Clock className="h-4 w-4 text-secondary-accent" />
              <span className="text-secondary-accent font-medium text-sm">No Registration</span>
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

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            <YoutubeChannelChecker />

            {/* Mobile/Tablet Ad - After tool */}
            <div className="block xl:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
            </div>

            {/* How to Use Section */}
            <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-200">
              <h2 className="text-xl font-bold mb-4 text-card-foreground">How to Use YouTube Channel Name Checker</h2>
              <div className="space-y-6">
                {/* Step 1: Enter Channel Name */}
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    1. Enter Your Desired Channel Name
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Channel Name:</strong> Type the exact name you want to check for availability on YouTube.</p>
                    <p><strong>Name Variations:</strong> Try different spellings, abbreviations, or variations of your preferred name.</p>
                    <p><strong>Character Limits:</strong> YouTube channel names can be up to 100 characters long.</p>
                  </div>
                </div>

                {/* Step 2: Check Availability */}
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    2. Check Availability Status
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Available:</strong> Green checkmark indicates the name is available for use.</p>
                    <p><strong>Taken:</strong> Red X shows the name is already in use by another channel.</p>
                    <p><strong>Invalid:</strong> Warning icon appears for names that violate YouTube's guidelines.</p>
                  </div>
                </div>

                {/* Step 3: Get Suggestions */}
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    3. Explore Alternative Suggestions
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Similar Names:</strong> Get suggestions based on your original name with slight variations.</p>
                    <p><strong>Niche-Specific:</strong> Find names tailored to your content category (gaming, tech, lifestyle, etc.).</p>
                    <p><strong>Trending Names:</strong> Discover popular naming patterns in your niche.</p>
                  </div>
                </div>

                {/* Step 4: Cross-Platform Check */}
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    4. Cross-Platform Availability
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Social Media:</strong> Check if the same name is available on Instagram, TikTok, Twitter, and other platforms.</p>
                    <p><strong>Domain Names:</strong> Verify if matching domain names are available for your website.</p>
                    <p><strong>Brand Consistency:</strong> Ensure consistent branding across all your online presence.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Section */}
            <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-300">
              <h2 className="text-xl font-bold mb-4 text-card-foreground">Advanced Features & Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Instant Availability Check</h3>
                    <p className="text-sm text-muted-foreground">Real-time checking of YouTube channel name availability with immediate results and status indicators.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Smart Name Suggestions</h3>
                    <p className="text-sm text-muted-foreground">AI-powered suggestions based on your input, niche, and trending naming patterns for optimal channel names.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cross-Platform Checking</h3>
                    <p className="text-sm text-muted-foreground">Check name availability across YouTube, Instagram, TikTok, Twitter, and other major social media platforms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Hash className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Niche-Specific Names</h3>
                    <p className="text-sm text-muted-foreground">Get channel name suggestions tailored to specific niches like gaming, tech, lifestyle, education, and more.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Trending Analysis</h3>
                    <p className="text-sm text-muted-foreground">Discover popular naming patterns and trending keywords in your content category for better discoverability.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Guideline Compliance</h3>
                    <p className="text-sm text-muted-foreground">Automatic checking against YouTube's community guidelines and naming policies to ensure compliance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Copy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">One-Click Copy</h3>
                    <p className="text-sm text-muted-foreground">Instantly copy suggested names with visual feedback. Save time when setting up your channel.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">No Registration Required</h3>
                    <p className="text-sm text-muted-foreground">Start checking names immediately without creating an account. Your searches remain private and secure.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases Section */}
            <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
              <h2 className="text-xl font-bold mb-4 text-card-foreground">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">New Content Creators</h3>
                    <p className="text-sm text-muted-foreground">Find the perfect channel name when starting your YouTube journey. Get suggestions that reflect your content and personality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Brand Consistency</h3>
                    <p className="text-sm text-muted-foreground">Ensure your channel name is available across all social media platforms for consistent branding and recognition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Rebranding Projects</h3>
                    <p className="text-sm text-muted-foreground">Find new names when rebranding your existing channel or expanding to new content categories.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Channels</h3>
                    <p className="text-sm text-muted-foreground">Create professional channel names for businesses, educational institutions, and organizations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-500">
              <h2 className="text-xl font-bold mb-4 text-card-foreground">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How accurate is the YouTube channel name availability checker?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our checker provides real-time results by querying YouTube's database directly. While we strive for 100% accuracy, there may be rare cases where a name becomes unavailable between checks due to rapid registrations. We recommend checking availability just before creating your channel.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Can I check names for other platforms besides YouTube?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes! Our tool checks name availability across multiple platforms including Instagram, TikTok, Twitter, Facebook, and more. This helps you maintain consistent branding across all your social media accounts and ensures your chosen name is available everywhere you need it.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">What makes a good YouTube channel name?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A great YouTube channel name should be memorable, easy to pronounce, relevant to your content, and available across platforms. Keep it short (under 20 characters), avoid numbers and special characters, and make sure it reflects your brand or content niche. Consider how it will look in thumbnails and search results.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How do I get better name suggestions?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our AI-powered suggestion engine analyzes your input and generates names based on your niche, trending keywords, and successful naming patterns. Try entering different variations of your preferred name, include relevant keywords from your content category, and experiment with different styles (professional, casual, creative) to get more diverse suggestions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Is it safe to use the suggested names?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All our suggestions are checked against YouTube's community guidelines and naming policies. However, we recommend reviewing YouTube's terms of service and ensuring your chosen name doesn't infringe on any trademarks or copyrights. When in doubt, consult with a legal professional for business-related channels.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Can I save or bookmark my favorite names?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    While our tool doesn't have a built-in save feature, you can easily copy any suggested names using the one-click copy button and save them in your notes app, spreadsheet, or any other tool you prefer. This helps you compare options and make the best decision for your channel.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">What if my preferred name is taken but I really want it?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If your preferred name is taken, try adding descriptive words related to your content (e.g., "TechReviews" instead of "Tech"), using abbreviations, or incorporating your location or specialty. You can also check if the existing channel is active - inactive channels might eventually become available, though this is not guaranteed.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How often should I check name availability?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Check availability as close as possible to when you plan to create your channel, especially for popular names. Names can become unavailable quickly, so avoid checking too far in advance. If you're planning a channel launch, check availability a few days before and have backup options ready.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Can I check domain name availability too?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes! Our tool also checks if matching domain names are available, which is crucial for building a complete online presence. Having a matching domain name helps with branding consistency and makes it easier for your audience to find your website.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Is the channel name checker completely free?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, our YouTube channel name checker is completely free to use with no hidden fees, registration requirements, or usage limits. You can check as many names as you want and get unlimited suggestions to help you find the perfect channel name for your content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Desktop Ad - Top Sidebar */}
            <div className="hidden xl:block">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="sidebar" className="w-full h-64 border border-border rounded-xl shadow-sm bg-card" />
            </div>

            {/* Desktop Ad - Bottom Sidebar */}
            <div className="hidden xl:block">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="sidebar" className="w-full h-64 border border-border rounded-xl shadow-sm bg-card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
