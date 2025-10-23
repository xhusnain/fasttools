import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { LinkInBioGenerator } from "@/components/link-in-bio-generator"
import { AdSpace } from "@/components/ad-space"
import { Link, Zap, Target, Shield, Globe, Clock, FileText, Hash, Lightbulb, Copy, Users, Code, Download, ExternalLink, Palette, BarChart3, Smartphone, Settings, Eye } from "lucide-react"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Free Link in Bio Generator – Create All-in-One Bio Page",
  description: "Create a free, customizable link in bio page for Instagram, TikTok, and more. Add unlimited links, social profiles, and buttons. Fast, secure, mobile-friendly.",
  keywords: [
    "link in bio generator",
    "free link in bio tool",
    "Instagram bio link",
    "TikTok bio link",
    "create link in bio",
    "bio link builder",
    "linktree alternative",
    "link in bio creator",
    "link in bio app",
    "link in bio website",
    "social media bio link",
    "link in bio for influencers",
    "bio page generator",
    "free bio link maker"
  ],
  openGraph: {
    title: "Free Link in Bio Generator – Create All-in-One Bio Page",
    description: "Create a free, customizable link in bio page for Instagram, TikTok, and more. Add unlimited links, social profiles, and buttons. Fast, secure, and mobile-friendly.",
    url: "https://www.fasttools.store/social-media-tools/link-in-bio",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Link in Bio Generator – Create All-in-One Bio Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Link in Bio Generator – Create All-in-One Bio Page",
    description: "Create a free, customizable link in bio page for Instagram, TikTok, and more. Add unlimited links, social profiles, and buttons.",
    images: ["https://www.fasttools.store/og-image.png"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/social-media-tools/link-in-bio",
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

export default function LinkInBioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Link in Bio Generator",
    "description": "Create a free, customizable link in bio page for Instagram, TikTok, and more. Add unlimited links, buttons, and social profiles easily.",
    "applicationCategory": "WebTool",
    "operatingSystem": "All",
    "url": "https://www.fasttools.store/social-media-tools/link-in-bio",
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
          { label: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
        ]}
      />

        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
            <Link className="h-3 w-3" />
            Social Media Tool
          </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
                    Free Link in Bio Generator – Create All-in-One Bio Page
                  </h1>
                  <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed mb-6">
                    Create a free, customizable link in bio page for Instagram, TikTok, and more. Add unlimited links, social profiles, and buttons. Fast, secure, and mobile-friendly.
                  </p>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium text-sm">Instant Creation</span>
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
      <LinkInBioGenerator />
      
            {/* Mobile/Tablet Ad - After tool */}
            <div className="block xl:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
            </div>

            {/* How to Use Section */}
            <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-200">
              <h2 className="text-xl font-bold mb-4 text-card-foreground">Complete Guide: How to Use Link in Bio Generator</h2>
              <div className="space-y-6">
                {/* Step 1: Basic Information */}
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    1. Basic Information Setup
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Profile Name:</strong> Enter your name, brand name, or business name that will appear as the main heading.</p>
                    <p><strong>Bio Description:</strong> Write a brief description about yourself, your business, or what visitors can expect to find.</p>
                    <p><strong>Website URL:</strong> Add your main website URL (optional) - this will appear as a prominent link button.</p>
                    <p><strong>Footer Text:</strong> Add custom footer text (optional) for additional information or branding.</p>
                  </div>
                </div>

                {/* Step 2: Theme Customization */}
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Palette className="h-5 w-5 text-primary" />
                    2. Theme & Color Customization
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Predefined Themes:</strong> Choose from 5 beautiful themes (Default, Dark, Ocean, Sunset, Forest) with pre-configured color schemes.</p>
                    <p><strong>Custom Colors:</strong> Create your own theme by customizing background, card, text, link, and hover colors using our professional color picker.</p>
                    <p><strong>Color Preview:</strong> See color scheme bars under each theme to preview the color combinations before selecting.</p>
                  </div>
                </div>

                {/* Step 3: Text Size Customization */}
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    3. Text Size Customization
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Heading Size:</strong> Adjust the size of your profile name (8-32px range).</p>
                    <p><strong>Bio Text Size:</strong> Control the size of your bio description (8-20px range).</p>
                    <p><strong>Footer Size:</strong> Set the size of your footer text (6-16px range).</p>
                    <p><strong>Link Button Size:</strong> Customize the text size of your link buttons (8-20px range).</p>
                  </div>
                </div>

                {/* Step 4: Adding Links */}
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Link className="h-5 w-5 text-primary" />
                    4. Adding Social Media & Email Links
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Social Media Links:</strong> Choose from 10+ popular platforms (Instagram, TikTok, YouTube, Twitter, Facebook, LinkedIn, Pinterest, Discord, Telegram) or add custom links.</p>
                    <p><strong>Email Links:</strong> Select from 8 email providers (Gmail, Yahoo, Outlook, Hotmail, iCloud, ProtonMail, AOL, Zoho) and enter your email address.</p>
                    <p><strong>Display Modes:</strong> Choose how each link appears - "Both" (icon + text), "Icon Only" (just the platform icon), or "Text Only" (text with icon inside button).</p>
                    <p><strong>Link Management:</strong> Edit link titles, URLs, and display modes. Delete unwanted links easily.</p>
                  </div>
                </div>

                {/* Step 5: Preview & Device Testing */}
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    5. Preview & Device Testing
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Live Preview:</strong> See real-time changes as you customize your bio page.</p>
                    <p><strong>Device Modes:</strong> Test how your bio page looks on Mobile, Tablet, and Desktop with device-specific dimensions and styling.</p>
                    <p><strong>Responsive Design:</strong> Your bio page automatically adapts to all screen sizes for optimal viewing experience.</p>
                  </div>
                </div>

                {/* Step 6: Generate & Share */}
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-primary" />
                    6. Generate HTML & Share Your Link
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Show HTML:</strong> View and copy the complete HTML code for your bio page.</p>
                    <p><strong>Copy Code:</strong> One-click copy functionality for easy implementation on your website.</p>
                    <p><strong>Share Your Link:</strong> Add the generated bio page URL to your Instagram, TikTok, Twitter, and other social media bios.</p>
                    <p><strong>Update Anytime:</strong> Modify your links, colors, or content anytime without changing your bio URL.</p>
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
                    <Palette className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Professional Color Customization</h3>
                    <p className="text-sm text-muted-foreground">Advanced color picker with HEX, RGB, CMYK, HSV, and HSL formats. Create unlimited custom themes with precise color control.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Smartphone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Multi-Device Preview</h3>
                    <p className="text-sm text-muted-foreground">Test your bio page on Mobile, Tablet, and Desktop with device-specific dimensions, fonts, and styling for perfect optimization.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Settings className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Precise Text Sizing</h3>
                    <p className="text-sm text-muted-foreground">Fine-tune every text element with individual size controls for headings, bio text, footer, and link buttons for perfect typography.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Flexible Display Modes</h3>
                    <p className="text-sm text-muted-foreground">Choose how each link appears: Both (icon + text), Icon Only (social media icons), or Text Only (button links with icons inside).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Clean HTML Generation</h3>
                    <p className="text-sm text-muted-foreground">Generate production-ready HTML code with inline CSS, responsive design, and optimized structure for easy implementation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Comprehensive Platform Support</h3>
                    <p className="text-sm text-muted-foreground">Support for 10+ social media platforms and 8 email providers with official brand logos and proper URL formatting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Copy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">One-Click Copy</h3>
                    <p className="text-sm text-muted-foreground">Instant HTML code copying with visual feedback. Copy individual elements or the complete bio page code in seconds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Privacy & Security</h3>
                    <p className="text-sm text-muted-foreground">No data collection, no registration required. Your bio page data stays private and secure on your device.</p>
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
                    <h3 className="font-semibold text-foreground mb-2">Content Creators</h3>
                    <p className="text-sm text-muted-foreground">Share your latest videos, blog posts, and social media profiles in one convenient link.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Influencers</h3>
                    <p className="text-sm text-muted-foreground">Promote your partnerships, affiliate links, and exclusive content to your followers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Small Businesses</h3>
                    <p className="text-sm text-muted-foreground">Direct customers to your website, online store, contact information, and social media.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Professionals</h3>
                    <p className="text-sm text-muted-foreground">Showcase your portfolio, resume, LinkedIn profile, and professional achievements.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-500">
              <h2 className="text-xl font-bold mb-4 text-card-foreground">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">What is a link in bio tool and why do I need one?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A link in bio tool allows you to share multiple links through a single URL in your social media bio. Most social media platforms like Instagram, TikTok, and Twitter only allow one link in your bio, but with our tool, you can direct your audience to multiple destinations including your website, blog, online store, other social media profiles, and more. This helps you maximize engagement and drive traffic to all your important content and platforms.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Is the link in bio generator completely free to use?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, our link in bio generator is completely free to use with no hidden fees or premium tiers. You can create unlimited bio pages, add unlimited links, customize themes, and access all features without any cost. We believe in providing powerful tools for creators, influencers, and businesses without financial barriers.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How many links can I add to my bio page?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You can add unlimited links to your bio page, but we recommend keeping it between 5-7 links for optimal user experience. Too many links can overwhelm your audience and reduce click-through rates. Focus on your most important destinations like your main website, latest content, social media profiles, and current promotions or campaigns.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Can I customize the appearance of my bio page?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Absolutely! Our link in bio generator offers extensive customization options including multiple themes, color schemes, layout options, and branding elements. You can choose from various templates, customize colors to match your brand, add your logo or profile picture, and select fonts and styles that represent your personal or business brand. This helps maintain consistency across all your online presence.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Is my bio page mobile-friendly and responsive?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, all bio pages created with our generator are fully responsive and optimized for mobile devices. Since most social media users access content on their phones, mobile optimization is crucial. Your bio page will look great and function perfectly on smartphones, tablets, and desktop computers, ensuring a seamless experience for all your visitors regardless of their device.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Can I track clicks and analytics on my bio page?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, our link in bio generator includes built-in analytics to help you track performance. You can see which links get the most clicks, monitor traffic sources, and understand your audience's behavior. This data helps you optimize your bio page by prioritizing your most popular links and understanding what content resonates with your audience.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How often should I update my bio page links?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You should update your bio page whenever you have new content, promotions, or priorities. For content creators, this might be weekly or even daily. For businesses, monthly updates are often sufficient. Regular updates keep your audience engaged and ensure they're always directed to your most current and relevant content. You can easily update links without changing your bio URL.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Can I use a custom domain for my bio page?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, our link in bio generator supports custom domains, allowing you to use your own branded URL instead of our default domain. This helps maintain brand consistency, improves credibility, and can enhance SEO. Custom domains also make your bio page look more professional and trustworthy to your audience.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">What types of links can I add to my bio page?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You can add any type of link to your bio page including websites, social media profiles, online stores, blog posts, YouTube videos, podcasts, newsletters, contact forms, booking pages, affiliate links, and more. The tool supports all standard web links and can handle various link formats. You can also add UTM parameters to track traffic sources and campaigns.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Is it safe to use affiliate links in my bio page?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, it's safe to use affiliate links in your bio page, but make sure to comply with FTC guidelines and platform policies. Always disclose affiliate relationships transparently, and ensure your affiliate links are relevant to your audience. Many successful influencers and creators use affiliate links in their bio pages as part of their monetization strategy.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Can I sell products directly through my bio page?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, you can link to your online store, e-commerce platforms, or product pages directly from your bio page. This is especially effective for influencers and businesses who want to drive sales. You can link to specific products, your entire store, or promotional pages. Some users even create dedicated landing pages for products and link to them from their bio page.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How do I optimize my bio page for better performance?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To optimize your bio page, place your most important links at the top, use clear and compelling button text, add social proof like follower counts or testimonials, use high-quality images, keep the design clean and uncluttered, and regularly update content based on analytics. A/B testing different layouts and link orders can also help improve performance.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Will using a bio page affect my website's SEO?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Using a bio page typically doesn't negatively impact your website's SEO. In fact, it can help by driving more traffic to your site and providing additional backlinks. However, make sure your bio page doesn't replace important direct links to your website. Use it as a supplement to enhance your social media presence and drive traffic to multiple destinations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Can I integrate my bio page with email marketing tools?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, you can link to newsletter signup pages, email marketing campaigns, and lead magnets from your bio page. This is an excellent way to grow your email list and nurture leads. You can link to specific email campaigns, newsletter subscriptions, or automated email sequences. Many creators use bio pages to promote their email content and build their subscriber base.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">What's the difference between a bio page and a landing page?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A bio page is designed to house multiple links and direct traffic to various destinations, while a landing page typically focuses on one specific goal like a product sale or email signup. Bio pages are more versatile and social media-focused, while landing pages are more conversion-focused. Many users create both and link to their landing pages from their bio page.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How can I make my bio page stand out from competitors?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To make your bio page stand out, use unique branding elements, create compelling call-to-action buttons, add social proof, use high-quality visuals, tell your story effectively, offer exclusive content or discounts, use creative link descriptions, and maintain consistent branding across all elements. Personal touches and authentic content help differentiate your bio page from generic alternatives.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Can I use my bio page for multiple social media platforms?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, you can use the same bio page across multiple social media platforms including Instagram, TikTok, Twitter, Facebook, LinkedIn, and more. This provides consistency and makes it easier to manage your online presence. However, you might want to customize certain elements or link orders based on the specific platform and audience you're targeting.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">What should I include in my bio page for maximum impact?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For maximum impact, include your main website, latest content or blog posts, social media profiles, contact information, current promotions or campaigns, newsletter signup, and any exclusive content or offers. Prioritize links based on your goals - whether that's driving sales, growing your audience, or promoting specific content. Keep the most important links at the top and use clear, action-oriented button text.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How do I get started with creating my first bio page?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Getting started is easy! Simply use our link in bio generator above, add your most important links, choose a theme that matches your brand, customize colors and layout, preview your page, and then copy the generated URL to use in your social media bios. Start with 3-5 essential links and expand as needed. The whole process takes just a few minutes and requires no technical knowledge.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">What are the different display modes and how do I use them?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our link in bio generator offers three display modes for each link: "Both" shows the platform icon alongside the link text, "Icon Only" displays just the social media icons in a clean grid layout, and "Text Only" shows button-style links with icons inside the buttons. You can mix and match these modes to create unique layouts. For example, use "Icon Only" for social media platforms and "Text Only" for important links like your website or newsletter signup.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How do I customize colors and create my own theme?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You can customize colors in two ways: choose from our 5 predefined themes (Default, Dark, Ocean, Sunset, Forest) or create a custom theme using our professional color picker. The custom color picker supports HEX, RGB, CMYK, HSV, and HSL formats, allowing you to precisely match your brand colors. You can customize background color, card background, text color, link button color, and hover effects. The color preview bars under each theme help you see the color combinations before selecting.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How do I test my bio page on different devices?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our multi-device preview feature lets you test your bio page on Mobile, Tablet, and Desktop views. Each device mode shows realistic dimensions and styling - Mobile (320px width), Tablet (768px width), and Desktop (1024px+ width). The preview updates in real-time as you make changes, and the generated HTML is fully responsive, automatically adapting to any screen size. This ensures your bio page looks perfect on all devices your visitors might use.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">How do I implement the generated HTML code on my website?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The generated HTML code is production-ready and includes all necessary CSS inline. Simply copy the HTML code using the "Copy Code" button and paste it into your website's HTML editor, content management system, or web page. The code is self-contained with responsive design, so it will work on any website without additional CSS files. You can also save the HTML as a standalone file and host it on any web server or use it as a landing page.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Can I add email links and how do they work?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes! Our email integration supports 8 major email providers: Gmail, Yahoo Mail, Outlook, Hotmail, iCloud, ProtonMail, AOL, and Zoho Mail. When you select an email provider, you'll be prompted to enter your email address. The generated link will open the user's default email client with your email address pre-filled in the "To" field, making it easy for visitors to contact you. Email links work with the same display modes as social media links, so you can choose how they appear on your bio page.
                  </p>
                </div>
              </div>
            </div>
          </div>

                  {/* Sidebar */}
                  <div className="hidden xl:block w-80">
                    <div className="sticky top-32 space-y-6">
                      <div>
                        <div className="text-center mb-2">
                          <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                        </div>
                        <AdSpace slot="sidebar" className="w-full h-64 border border-border rounded-xl shadow-sm bg-card" />
                      </div>
                      <div>
                        <div className="text-center mb-2">
                          <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                        </div>
                        <AdSpace slot="sidebar" className="w-full h-64 border border-border rounded-xl shadow-sm bg-card" />
                      </div>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  )
}
