import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { InstagramDpViewer } from "@/components/instagram-dp-viewer"
import { AdSpace } from "@/components/ad-space"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, User, Eye, Download, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "FastTools - Instagram DP Viewer | Free View & Download Profile Pictures",
  description:
    "FastTools Instagram DP Viewer - View and download Instagram profile pictures in HD quality. Free Instagram DP viewer tool for public accounts.",
  keywords:[
      "fasttools",
      "fast tools",
      "instagram dp viewer",
      "instagram profile picture viewer",
      "instagram dp downloader",
      "instagram profile picture downloader",
      "insta dp viewer",
      "insta dp downloader",
      "download instagram dp",
      "instagram profile picture download hd",
      "view instagram profile picture full size",
      "instagram dp viewer online",
      "instagram dp viewer hd",
      "instagram dp viewer 4k",
      "full insta dp viewer",
      "instagram profile picture viewer no login",
      "instagram dp viewer private accounts",
      "instagram dp viewer app",
      "instagram dp viewer tool",
      "instagram dp viewer free",
      "instagram dp viewer for pc",
      "instagram dp viewer for mobile",
      "instagram profile picture zoom",
      "instagram dp zoom viewer",
      "download full size instagram profile picture",
      "instagram profile photo downloader",
      "instagram dp viewer without account",
      "instagram dp viewer high resolution",
      "anonymous instagram dp viewer",
      "instagram dp hd download",
      "instagram dp viewer extension",
      "best instagram dp viewer online",
      "view instagram dp",
      "dp viewer instagram",
      "ig dp viewer",
      "instagram profile dp viewer",
      "dp viewer",
      "instagram image viewer",
      "insta dp.view",
      "ig dp viewe"
  ],
  openGraph: {
    title: "Instagram DP Viewer | View & Download Profile Pictures",
    description: "View and download Instagram profile pictures in HD quality. Free Instagram DP viewer tool for public accounts. No login required!",
    url: "https://www.fasttools.store/social-media-tools/instagram-dp",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.png",
        width: 1200,
        height: 630,
        alt: "Instagram DP Viewer - View & Download Profile Pictures",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram DP Viewer | View & Download Profile Pictures",
    description: "View and download Instagram profile pictures in HD quality. Free Instagram DP viewer tool for public accounts.",
    images: ["https://www.fasttools.store/og-image.png"],
    creator: "@fasttools",
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
    canonical: "https://www.fasttools.store/social-media-tools/instagram-dp",
  },
}

export default function InstagramDpPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Instagram DP Viewer",
    "description": "View and download Instagram profile pictures in HD quality. Free Instagram DP viewer tool for public accounts.",
    "url": "https://www.fasttools.store/social-media-tools/instagram-dp",
    "applicationCategory": "SocialMediaTool",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://www.fasttools.store"
    },
    "featureList": [
      "View Instagram profile pictures",
      "Download Instagram DPs",
      "HD quality images",
      "No login required",
      "Free to use",
      "Works on all devices"
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Social Media Tools", href: "/social-media-tools" },
            { label: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 lg:flex-[2] space-y-6">
              {/* Hero Section */}
              <div className="text-center space-y-5 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                  <User className="h-4 w-4 animate-pulse" />
                  <span>Instagram Tools</span>
                  <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Instagram DP Viewer
                </h1>

                <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                  View and download Instagram profile pictures in HD quality. Works with public Instagram accounts.
                </p>
                
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                    <Eye className="h-4 w-4 text-primary" />
                    <span className="text-primary font-medium text-sm">HD Quality</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-green-500 shadow">
                    <Download className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-medium text-sm">Instant Download</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                    <Shield className="h-4 w-4 text-accent" />
                    <span className="text-accent font-medium text-sm">Privacy Safe</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                    <ArrowRight className="h-4 w-4 text-secondary-accent" />
                    <span className="text-secondary-accent font-medium text-sm">Public Only</span>
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
                    <User className="h-5 w-5 text-primary" />
                    Instagram DP Viewer
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Enter an Instagram username to view and download profile pictures in HD quality
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <InstagramDpViewer />
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
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">How Our Instagram DP Viewer Works</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Our Instagram DP viewer (also known as insta dp viewer or ig dp viewer) allows you to view instagram dp and download profile pictures from public Instagram accounts. 
                    This free dp viewer tool respects user privacy and only works with publicly available profile pictures.
                    Whether you search for "instagram image viewer" or "instagram profile dp viewer", our tool provides the best solution to view dp from any public Instagram account.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Privacy-First Approach</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    We prioritize user privacy and only access profile pictures from public accounts. 
                    Private accounts and restricted content are not accessible through our dp viewer instagram tool.
                    Our insta dp.view service is designed to be safe, secure, and compliant with Instagram's terms of service.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">HD Quality Downloads with IG DP Viewer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Download profile pictures in their original high-definition quality using our instagram profile dp viewer. 
                    Perfect for content creators, designers, or anyone who needs high-quality profile images.
                    Our ig dp viewer ensures you get the best quality images for your creative projects.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">Perfect for Content Creators</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Whether you're a content creator, designer, or marketer, our Instagram DP viewer helps you 
                    access profile pictures for legitimate purposes like inspiration, analysis, or content creation.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">DP Viewer Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>View profile pictures in HD quality</li>
                    <li>Download images instantly</li>
                    <li>Works with any public Instagram account</li>
                    <li>No registration or login required</li>
                    <li>Privacy-safe and respectful</li>
                    <li>Mobile and desktop friendly</li>
                  </ul>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-5 animate-fade-in-up animation-delay-300">
                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">Frequently Asked Questions</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">How do I view Instagram profile pictures?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Simply enter the Instagram username (with or without @) into our DP viewer tool and click "View Profile Picture". 
                        Our tool will display the profile picture in high quality, and you can download it if needed. 
                        The tool only works with public Instagram accounts to respect user privacy.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Is it legal to download Instagram profile pictures?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Downloading profile pictures from public Instagram accounts is generally legal for personal use, 
                        educational purposes, or content creation. However, you should respect copyright laws and Instagram's 
                        Terms of Service. If you're using profile pictures for commercial purposes or republishing them, 
                        you may need permission from the original creator. Our tool is designed to help users access 
                        publicly available profile pictures for legitimate purposes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Can I download profile pictures from private accounts?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        No, our Instagram DP viewer only works with public Instagram accounts. Private accounts, 
                        restricted accounts, or accounts that require authentication are not accessible through our tool. 
                        This is a privacy protection feature that respects Instagram's privacy settings and user preferences. 
                        For best results, ensure the account you're trying to view is set to public.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">What quality are the downloaded profile pictures?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our tool downloads profile pictures in their original high-definition quality. Instagram typically 
                        stores profile pictures in high resolution (up to 1080x1080 pixels), and our viewer preserves 
                        this quality when displaying and downloading images. The downloaded images maintain their 
                        original clarity and detail, perfect for content creation or analysis purposes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Why would I need to download Instagram profile pictures?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Content creators download Instagram profile pictures for various legitimate reasons: analyzing 
                        successful profile designs for inspiration, creating profile templates based on proven layouts, 
                        conducting brand research and competitive analysis, archiving profile designs for reference, 
                        creating presentations about social media trends, and studying visual elements that drive engagement. 
                        Designers and marketers also use profile pictures for trend research and brand analysis.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Is my privacy protected when using this tool?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Yes, your privacy is completely protected. We don't store any user data, downloaded images, 
                        or usernames you search for. All searches are processed in real-time without logging or 
                        storing information. The tool operates entirely in your browser, ensuring that your search 
                        history and downloaded content remain private and secure on your device.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Do I need to install any software to use this tool?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        No, our Instagram DP viewer is completely web-based and doesn't require any software installation. 
                        Simply visit our website, enter the Instagram username, and view or download the profile picture. 
                        The tool works directly in your web browser on any device - desktop, tablet, or mobile phone. 
                        No downloads, installations, or registrations are required.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">What should I do if the profile picture doesn't load?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        If the profile picture doesn't load, check that the Instagram username is correct and the account 
                        is public. Try refreshing the page or clearing your browser cache. Some accounts may have 
                        restricted access or be temporarily unavailable. Ensure you're using a valid Instagram username 
                        format and that the account hasn't been deleted or made private. If the issue persists, 
                        try a different username to test if the problem is specific to that account.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Can I use downloaded profile pictures for my own content?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        While you can download profile pictures for analysis and inspiration, using someone else's 
                        profile picture for your own content may violate copyright laws. Instead, use downloaded 
                        profile pictures as reference material to create your own original designs. Study successful 
                        elements like color schemes, composition, and visual style, then create unique profile pictures 
                        that incorporate these proven techniques while maintaining your own creative identity.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">How can I improve my own Instagram profile picture?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Effective Instagram profile pictures use high contrast colors, clear focal subjects, 
                        readable elements (especially on mobile), consistent branding, and emotional expressions. 
                        Study successful profile pictures in your niche, use bright colors that stand out, 
                        ensure faces or logos are clearly visible, and maintain consistent visual style across 
                        your brand. Consider how your profile picture appears at small sizes and test different 
                        designs to optimize engagement and recognition.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">What are the best practices for Instagram profile pictures?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Optimize your Instagram profile picture by ensuring it's visually appealing at small sizes 
                        (mobile viewing), using high contrast between elements, including clear focal subjects, 
                        maintaining consistent branding across your social media presence, testing different designs 
                        to see what works best, keeping the design simple and recognizable, using bright colors 
                        that stand out in feeds, and ensuring the profile picture accurately represents your brand 
                        or personal identity. Monitor your profile engagement to measure the effectiveness of your 
                        profile picture choices.
                      </p>
                    </div>
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
