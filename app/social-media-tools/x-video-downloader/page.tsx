import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { XVideoDownloader } from "@/components/x-video-downloader"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Zap, Target, AlertCircle, Video, CheckCircle, FileText, Shield, Download } from "lucide-react"
import { getCurrentYear } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: `X Video Downloader – Free HD Tool | FastTools ${getCurrentYear()}`,
  description: "Download X/Twitter videos in HD without watermark. Free, fast (<2s), unlimited downloads. No login required. Works on all devices.",
  openGraph: {
    title: "X Video Downloader – Free HD Videos Download Tool | FastTools",
    description: "Download X (Twitter) videos in HD quality without watermark for free. Fast, secure, unlimited downloads. No registration required. Works on all devices. Download X/Twitter videos offline in seconds.",
    url: "https://www.fasttools.store/social-media-tools/x-video-downloader",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.png",
        width: 1200,
        height: 630,
        alt: "X Video Downloader – Download HD X/Twitter Videos & Images Free | FastTools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "X Video Downloader – Free HD Videos | FastTools",
    description: "Download X (Twitter) videos in HD quality without watermark for free. Fast, secure, unlimited downloads. No registration. Works on PC, Mac, iPhone, Android.",
    images: ["https://www.fasttools.store/og-image.png"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/social-media-tools/x-video-downloader",
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
  authors: [{ name: "FastTools" }],
  creator: "FastTools",
  publisher: "FastTools",
}

export default function XVideoDownloaderPage() {

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.fasttools.store"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Social Media Tools",
        "item": "https://www.fasttools.store/social-media-tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "X Video Downloader",
        "item": "https://www.fasttools.store/social-media-tools/x-video-downloader"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to download X videos without watermark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paste the X/Twitter video post URL into our tool, click 'Get Download Links', then click 'Download Video'. Our downloader automatically extracts videos without watermarks whenever available from X/Twitter's source."
        }
      },
      {
        "@type": "Question",
        "name": "Is the X video downloader free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our service is 100% free with no hidden costs, registration requirements, or subscription fees. The tool works instantly without login - just paste the URL and download."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download private X videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you can only download public X/Twitter videos. Private or restricted videos cannot be downloaded. Always ensure the video post is public and accessible before attempting to download."
        }
      },
      {
        "@type": "Question",
        "name": "Is it legal to download X videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for personal use, educational purposes, or your own content. Always respect copyright laws and only download content you have rights to use. Our tool is designed for legitimate use cases."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best X video downloader in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FastTools X Video Downloader is among the best free downloaders in 2025, offering unlimited downloads, HD quality, fast processing under 2 seconds, no registration required, and works on all devices including PC, Mac, iPhone, and Android."
        }
      },
      {
        "@type": "Question",
        "name": "Does the X downloader work on iPhone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our tool works perfectly on all iOS devices. Simply paste the X/Twitter video URL in Safari or any mobile browser, and download videos directly to your iPhone."
        }
      },
      {
        "@type": "Question",
        "name": "How fast is the X video download process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Very fast! Most videos are processed and ready for download in under 2 seconds. Our optimized system ensures quick, reliable downloads."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download X videos without login?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our X downloader without login works instantly - just paste the X/Twitter video post URL and download. No registration, no account creation, no login required."
        }
      }
    ]
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download X/Twitter Videos",
    "description": "Step-by-step guide to download X (Twitter) videos in HD quality without watermark using FastTools free downloader",
    "image": "https://www.fasttools.store/og-image.png",
    "totalTime": "PT2M",
    "tool": [
      {
        "@type": "HowToTool",
        "name": "FastTools X Video Downloader"
      },
      {
        "@type": "HowToTool",
        "name": "Web Browser"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Copy X/Twitter Video URL",
        "text": "Navigate to X (formerly Twitter) and find the video post you want to download. Click on the video to open it, then copy the URL from your browser's address bar.",
        "image": "https://www.fasttools.store/og-image.png"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Paste URL in Downloader",
        "text": "Open FastTools X Video Downloader and paste the copied URL into the input field. The tool supports both x.com and twitter.com URLs.",
        "image": "https://www.fasttools.store/og-image.png"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Get Download Links",
        "text": "Click the 'Get Download Links' button. The tool will process the video URL, which typically takes under 2 seconds.",
        "image": "https://www.fasttools.store/og-image.png"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Download Video",
        "text": "Click the 'Download Video' button to save the video in MP4 format to your device. The video will download in the highest available quality without watermarks.",
        "image": "https://www.fasttools.store/og-image.png"
      }
    ]
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to X Video Downloader: Download Twitter Videos in HD",
    "description": "Comprehensive guide on downloading X (Twitter) videos in HD quality without watermark. Learn how to use free X video downloaders, understand legal considerations, and optimize your downloads.",
    "image": "https://www.fasttools.store/og-image.png",
    "author": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://www.fasttools.store"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://www.fasttools.store",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.fasttools.store/og-image.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.fasttools.store/social-media-tools/x-video-downloader"
    },
    "articleSection": "Social Media Tools",
    "keywords": "X video downloader, Twitter video downloader, download X videos, download Twitter videos, X downloader, Twitter downloader, free X downloader, HD video downloader"
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "X Video Downloader - FastTools",
    "description": "Free X (Twitter) video downloader to save videos in HD quality without watermark. Fast, secure, unlimited downloads. No registration required. Works on all devices including PC, Mac, iPhone, and Android.",
    "url": "https://www.fasttools.store/social-media-tools/x-video-downloader",
    "applicationCategory": "SocialMediaApplication",
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
      "Download X/Twitter videos without watermark",
      "HD video quality support",
      "Works on all devices and browsers",
      "No registration required",
      "Fast processing under 2 seconds",
      "Secure and private downloads",
      "Supports all X/Twitter media formats",
      "Mobile-friendly interface",
      "Educational and research use",
      "Content creator tools",
      "Social media marketing",
      "Media backup and archiving",
      "Cross-platform compatibility",
      "Real-time processing",
      "High success rate",
      "Privacy-focused design",
      "Free forever"
    ]
  }

  return (
    <>
      {}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-background overflow-x-hidden">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
          <div className="max-w-7xl mx-auto w-full">
            <nav aria-label="Breadcrumb">
              <Breadcrumbs
                items={[
                  { label: "Social Media Tools", href: "/social-media-tools" },
                  { label: "X Video Downloader", href: "/social-media-tools/x-video-downloader" },
                ]}
              />
            </nav>

            {}
            <header className="text-center mb-4 sm:mb-6 md:mb-8">
              <GHeader
                title="X Video Downloader – HD Videos Without Watermark"
                description="Download X (Twitter) videos in HD without watermark for free. Fast, secure, and easy-to-use online X/Twitter video downloader. Works on PC, Android, iPhone, and all devices. Perfect for creators, marketers, and social media enthusiasts."
                titleSize="medium"
                descriptionSize="small"
              />
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
            </header>

            {}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-5 lg:p-6 bg-primary/5 rounded-lg mb-4 sm:mb-6 md:mb-8">
              <div className="text-center p-2 sm:p-3">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">2M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Videos Downloaded</div>
              </div>
              <div className="text-center p-2 sm:p-3">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">500K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Happy Users</div>
              </div>
              <div className="text-center p-2 sm:p-3">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">&lt;2s</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Avg. Processing</div>
              </div>
              <div className="text-center p-2 sm:p-3">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">99.9%</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Success Rate</div>
              </div>
            </div>

            {}
            <div className="lg:hidden mb-4 sm:mb-6">
              <AdSpace slot="content" className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28" />
            </div>

            {}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
              {}
              <main className="flex-1 lg:flex-[2] space-y-4 sm:space-y-6 md:space-y-8 min-w-0" role="main">
                <section aria-label="X Video Downloader Tool">
                  <XVideoDownloader />
                </section>

                {}
                <div className="p-3 sm:p-4 md:p-5 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <h3 className="text-sm sm:text-base font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-600 dark:text-yellow-400" />
                    Pro Tips:
                  </h3>
                  <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <li>✓ For best quality, download original tweets (not retweets)</li>
                    <li>✓ Copy the full URL including /status/numbers</li>
                    <li>✓ Works with both x.com and twitter.com links</li>
                    <li>✓ Right-click video → Save As for custom filename</li>
                  </ul>
                </div>

                {}
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-200">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">What is an X Video Downloader?</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    An <strong>X video downloader</strong> (also known as a <strong>Twitter video downloader</strong>) is a web-based tool that extracts and saves videos from X (formerly Twitter) posts. These tools work by analyzing the video URL and accessing the media files hosted on X's servers. Unlike screen recording, downloaders preserve the original video quality and format.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    FastTools X Video Downloader uses advanced parsing technology to extract video files directly from X's content delivery network. The tool supports both the legacy Twitter.com domain and the new X.com domain, ensuring compatibility with all video posts. Related tools like our <Link href="/social-media-tools/instagram-downloader" className="text-primary hover:underline">Instagram downloader</Link> and <Link href="/social-media-tools/tiktok-downloader" className="text-primary hover:underline">TikTok downloader</Link> use similar technology for their respective platforms.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    These downloaders are essential for content creators, marketers, and researchers who need offline access to social media content. They enable users to save videos for analysis, inspiration, educational purposes, or personal archiving while respecting copyright and platform terms of service.
                  </p>
                </div>

                {}
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-200">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">How to Use X Video Downloader</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">1. Paste X/Twitter URL</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Copy and paste any X/Twitter post link containing a video into the input field above. Our tool supports both x.com and twitter.com URLs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">2. Get Download Links</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Click the button to fetch download links for the video.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">3. Download Video</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Click "Download Video" to save the video in MP4 format.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">4. Safe & Secure</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">All downloads are processed securely in your browser.</p>
                    </div>
                  </div>
                </div>
                </div>

                {}
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-300">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Why Use an X Video Downloader?</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    X (formerly Twitter) doesn't provide a built-in download feature for videos. Content creators, marketers, and researchers need offline access to videos for analysis, inspiration, or archival purposes. Our free X video downloader fills this gap by providing instant access to high-quality video files.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    Unlike browser extensions that require installation, FastTools works directly in your web browser. The tool processes videos in under 2 seconds and supports all video formats available on X. Whether you're a social media manager analyzing competitor content or a researcher studying viral video trends, our downloader provides the tools you need.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
                    <div className="p-3 sm:p-4 bg-primary/5 rounded-lg">
                      <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-foreground">For Content Creators</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Save inspiration videos, analyze editing styles, and study viral content formats to improve your own social media strategy.</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-primary/5 rounded-lg">
                      <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-foreground">For Marketers</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Download competitor videos for competitive analysis, create content libraries, and track industry trends without leaving your browser.</p>
                    </div>
                    <div className="p-3 sm:p-4 bg-primary/5 rounded-lg">
                      <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-foreground">For Researchers</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Archive important videos, analyze social media trends, and build datasets for academic or professional research projects.</p>
                    </div>
                  </div>
                </div>

                {}
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-300">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">How Does X Video Downloader Work?</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    Our X video downloader uses advanced API parsing and URL extraction technology to access video files from X's content delivery network (CDN). When you paste a video URL, our system analyzes the post structure and identifies the direct video file links embedded in the page metadata.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                    The tool works by sending requests to X's servers to retrieve video metadata, then extracts the MP4 file URLs. These direct links point to the original video files stored on X's infrastructure, ensuring you get the highest quality available without any compression or watermarking applied by third-party services.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                    Unlike screen recording methods that capture pixels, our downloader retrieves the actual source files. This means faster downloads, better quality preservation, and smaller file sizes. The entire process happens server-side, so your device doesn't need to process or store any video data during extraction.
                  </p>
                  <div className="p-3 sm:p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-foreground">Technical Process:</h3>
                    <ol className="list-decimal list-inside space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li>URL validation: Verifies the X/Twitter post URL format (supports both x.com and twitter.com domains)</li>
                      <li>Metadata extraction: Retrieves video information from X's API endpoints</li>
                      <li>Quality detection: Identifies available video resolutions (240p, 360p, 480p, 720p, 1080p)</li>
                      <li>Direct link generation: Creates download URLs pointing to X's CDN servers</li>
                      <li>Secure delivery: Provides HTTPS download links for safe file transfer</li>
                    </ol>
                  </div>
                </div>

                {}
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-300">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <Download className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">No Watermark Downloads</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Download X/Twitter videos without any watermarks for clean, professional content. Get the original quality video directly from the source. Save videos instantly with our free tool.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">HD Video Quality</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Download videos in the highest available quality. Automatically selects HD quality when available.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">HD Video Download MP4</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Get videos in HD resolution for the best viewing experience. Our X HD video downloader preserves original quality.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">Secure X Media Saver</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Secure downloads processed directly in your browser with no data storage. Our X media fetcher is completely safe and private.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <Video className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">Fast X Downloader Online</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Average processing time under 2 seconds per post for quick downloads. Works without login. Download videos instantly with our free tool.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">Secure & Private</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">All downloads are processed securely in your browser. We never store your URLs or downloaded videos. Complete privacy guaranteed.</p>
                  </div>
                </div>
                  </div>
                </div>

                {}
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-300">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground flex items-center gap-2">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Security & Privacy Guarantee
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                    <div className="text-center p-3 sm:p-4">
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mx-auto mb-1.5 sm:mb-2" />
                      <h3 className="text-sm sm:text-base font-semibold mb-1">No Data Storage</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">We never store your URLs or downloaded videos</p>
                    </div>
                    <div className="text-center p-3 sm:p-4">
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mx-auto mb-1.5 sm:mb-2" />
                      <h3 className="text-sm sm:text-base font-semibold mb-1">HTTPS Encryption</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">All downloads use secure HTTPS protocol</p>
                    </div>
                    <div className="text-center p-3 sm:p-4">
                      <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mx-auto mb-1.5 sm:mb-2" />
                      <h3 className="text-sm sm:text-base font-semibold mb-1">No Tracking</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Anonymous downloads, zero tracking cookies</p>
                    </div>
                  </div>
                </div>

                {}
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-300">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Technical Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent">Supported Formats</h3>
                      <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                        <li>• Video: MP4 (H.264/H.265)</li>
                        <li>• Quality: 240p to 1080p HD</li>
                        <li>• Both x.com and twitter.com URLs</li>
                        <li>• Image formats: JPG, PNG (when available)</li>
                      </ul>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <h3 className="text-sm sm:text-base font-semibold text-heading-accent">Performance</h3>
                      <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                        <li>• Processing: Under 2 seconds</li>
                        <li>• Success Rate: 99.5%</li>
                        <li>• Uptime: 99.9%</li>
                        <li>• No file size limits</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {}
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">📱 How to Download X Videos on Mobile</h2>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="p-3 sm:p-4 bg-muted/50 rounded-lg">
                      <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2">📱 iPhone/iOS (Safari)</h3>
                      <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>Open X app, find video post</li>
                        <li>Tap Share → Copy Link</li>
                        <li>Open Safari, visit fasttools.store/x-video-downloader</li>
                        <li>Paste URL, tap Download</li>
                        <li>Long-press video → Save to Photos</li>
                      </ol>
                    </div>
                    <div className="p-3 sm:p-4 bg-muted/50 rounded-lg">
                      <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2">🤖 Android (Chrome)</h3>
                      <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>Open X app, find video post</li>
                        <li>Tap Share → Copy Link</li>
                        <li>Open Chrome, visit fasttools.store</li>
                        <li>Paste URL, tap Download</li>
                        <li>Video saves to Downloads folder</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {}
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Who Uses X Video Downloader?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2 flex items-center gap-2">
                      <Video className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Content Creators
                    </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Content creators use our tool to analyze competitor content, study viral video trends, gather inspiration for their own videos, and repurpose content across platforms. Understand what makes content successful and adapt strategies for your own channel.
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Marketers & Social Media Managers
                    </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Marketers use our tool for presentations, campaign analysis, competitor research, and content curation. Collect video content for marketing reports, social media strategies, and client presentations without watermarks.
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Educators & Researchers
                    </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Educators and researchers use our tool to preserve educational content, create offline learning materials, and analyze social media trends for academic purposes. Download videos for study materials, presentations, or research projects under fair use guidelines.
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Personal Users
                    </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Personal users save memorable moments, create personal video collections, and access content offline. Our free tool makes it easy to save your favorite videos for later viewing without internet connection.
                    </p>
                  </div>
                </div>
                </div>

                {}
                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Why Choose FastTools X Video Downloader?</h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  When comparing X video downloaders, FastTools stands out as the best free X video downloader in 2025. Here's how we compare to other X downloader tools:
                </p>
                <div className="overflow-x-auto -mx-4 sm:-mx-5 md:-mx-6 px-4 sm:px-5 md:px-6">
                  <table className="w-full min-w-[600px] text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-muted/50 border-b border-border">
                        <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-semibold text-heading-accent border-r border-border text-xs sm:text-sm">Feature</th>
                        <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-primary border-r border-border text-xs sm:text-sm">FastTools</th>
                        <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-muted-foreground text-xs sm:text-sm">Other Downloaders</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-border text-xs sm:text-sm">Processing Speed</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-heading-accent font-semibold border-r border-border text-xs sm:text-sm">Under 2 seconds</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">5-15 seconds</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-border text-xs sm:text-sm">Cost</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-heading-accent font-semibold border-r border-border text-xs sm:text-sm">100% Free</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">Free/Premium</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-border text-xs sm:text-sm">Registration Required</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-heading-accent font-semibold border-r border-border text-xs sm:text-sm">No</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">Often Required</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-border text-xs sm:text-sm">Download Limits</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-heading-accent font-semibold border-r border-border text-xs sm:text-sm">Unlimited</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">Daily Limits</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-border text-xs sm:text-sm">Watermark Removal</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-heading-accent font-semibold border-r border-border text-xs sm:text-sm">Yes</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">Varies</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-border text-xs sm:text-sm">Mobile Support</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-heading-accent font-semibold border-r border-border text-xs sm:text-sm">Full Support</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">Limited</td>
                      </tr>
                      <tr>
                        <td className="py-2 sm:py-3 px-2 sm:px-4 border-r border-border text-xs sm:text-sm">Video Quality</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-heading-accent font-semibold border-r border-border text-xs sm:text-sm">HD (Highest Available)</td>
                        <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">SD/HD (Premium)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>

                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Troubleshooting: Common Issues & Solutions
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">Video Not Downloading? Here's Why</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-1.5 sm:mb-2">
                      If your X video downloader isn't working, try these solutions:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground ml-3 sm:ml-4">
                      <li><strong>Post doesn't contain a video:</strong> Our X downloader only works with video posts. Image-only posts are not supported.</li>
                      <li><strong>Private or restricted post:</strong> Ensure the X/Twitter post is public and accessible.</li>
                      <li><strong>Invalid URL format:</strong> Make sure you're using the full post URL from x.com or twitter.com.</li>
                      <li><strong>Region restrictions:</strong> Some videos may be geo-blocked in certain regions.</li>
                    </ul>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">Supported Link Formats</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-1.5 sm:mb-2">
                      Our X video downloader supports these URL formats:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground ml-3 sm:ml-4">
                      <li><code className="bg-muted px-1 rounded text-[10px] sm:text-xs">https://x.com/username/status/1234567890</code></li>
                      <li><code className="bg-muted px-1 rounded text-[10px] sm:text-xs">https://twitter.com/username/status/1234567890</code></li>
                      <li><code className="bg-muted px-1 rounded text-[10px] sm:text-xs">https://x.com/username/status/1234567890/video/1</code></li>
                    </ul>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">Quality Options Explained</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Our X video downloader automatically selects the highest available quality (HD when available, SD as fallback). The quality depends on the original video's upload resolution. We preserve the best quality available from X/Twitter's servers.
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">Download Failed - Solutions</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-1.5 sm:mb-2">
                      If downloads fail, try these steps:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-muted-foreground ml-3 sm:ml-4">
                      <li>Refresh the page and try again</li>
                      <li>Check your internet connection</li>
                      <li>Disable browser extensions or ad blockers</li>
                      <li>Try a different browser (Chrome, Firefox, Safari)</li>
                      <li>Clear browser cache and cookies</li>
                      <li>Ensure the video post is still available on X/Twitter</li>
                    </ul>
                  </div>
                </div>
                </div>

                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow-lg animate-fade-in-up animation-delay-500">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Frequently Asked Questions
              </h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-sm sm:text-base font-semibold text-heading-accent">Can I download X/Twitter videos without watermark using your X downloader?</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Yes! Our tool supports no-watermark downloads whenever available from X/Twitter's source. You'll get clean, professional-quality videos perfect for repurposing. Download videos without any watermarks.
                  </p>
                </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-sm sm:text-base font-semibold text-heading-accent">Is the X downloader free and does it work without login?</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Absolutely! Our service is 100% free with no hidden costs, registration requirements, or subscription fees. The tool works instantly without login - just paste the X/Twitter post URL and download videos.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Does the X downloader work on mobile devices like iPhone and Android?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yes! Our tool works perfectly on all mobile devices including iPhone, Android, tablets, and all mobile browsers (Safari, Chrome, Firefox). Download videos directly to your mobile device.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Does this tool work with image-only posts?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This tool is designed specifically for downloading videos from X/Twitter posts. Image extraction from X/Twitter posts is not currently supported. Please use posts that contain videos for the best experience.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Is it safe to use?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                    Completely safe! All downloads are processed directly in your browser using HTTPS encryption. We never store your data or track your downloads.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">What video quality can I download?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                    You can download videos in HD quality, depending on the original video's resolution. We preserve the highest available quality.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Can I download private X/Twitter posts?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                    Only if you have access to the post or the creator's permission. We respect privacy settings and only download publicly available content.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Are there any download limits?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                    No limits! You can download as many videos as you want. Our free service doesn't impose daily or monthly restrictions. Download unlimited times.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">How fast is the download process?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                    Very fast! Most posts are processed and ready for download in under 2 seconds. Our optimized system ensures quick, reliable downloads.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Is it legal to download X/Twitter videos?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yes, for personal use, educational purposes, or your own content. Always respect copyright laws and only download content you have rights to use. Our tool is designed for legitimate use cases like downloading your own videos or content you have permission to download.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">What is the best X video downloader in 2025?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      FastTools X Video Downloader is among the best free downloaders in 2025, offering unlimited downloads, HD quality, fast processing under 2 seconds, no registration required, and works on all devices. Our comparison shows we're faster, completely free, and more reliable than most alternatives.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">How to download X videos without watermark?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Simply paste the X/Twitter video post URL into our tool, click 'Get Download Links', then click 'Download Video'. Our downloader automatically extracts videos without watermarks whenever available from X/Twitter's source. No watermark removal needed - we get the original quality video directly.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Can I download X videos without login?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Absolutely! Our tool works instantly without login - just paste the X/Twitter video post URL and download. No registration, no account creation, no login required. Completely anonymous and private.
                  </p>
                </div>
                </div>
              </div>

              {}
              <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Legal & Copyright Information</h2>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Fair Use & Legal Compliance:</strong> This tool is provided for
                    personal, educational, and fair use purposes only. Users are responsible
                    for ensuring they have the right to download and use any content.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                    <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h3 className="text-sm sm:text-base font-semibold text-green-700 dark:text-green-400 mb-1.5 sm:mb-2">✓ Acceptable Use:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm">
                        <li>• Your own videos</li>
                        <li>• Educational research</li>
                        <li>• With creator permission</li>
                        <li>• Fair use purposes</li>
                        <li>• Personal backup</li>
                      </ul>
                    </div>
                    <div className="p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <h3 className="text-sm sm:text-base font-semibold text-red-700 dark:text-red-400 mb-1.5 sm:mb-2">✗ Prohibited Use:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm">
                        <li>• Commercial redistribution without permission</li>
                        <li>• Copyright infringement</li>
                        <li>• Violating X/Twitter Terms of Service</li>
                        <li>• Mass downloading without authorization</li>
                        <li>• Reselling downloaded content</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-xs mt-3 sm:mt-4 p-2.5 sm:p-3 bg-muted/50 rounded-lg">
                    <strong>Important:</strong> We do not host, store, or distribute any videos. We only provide links
                    to publicly available content hosted on X/Twitter's servers. Users are solely responsible for
                    ensuring their use complies with all applicable laws and platform terms of service.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">X Video Downloader Statistics & Trends (2025)</h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  Understanding the landscape of X video downloading helps users make informed decisions. Here are key statistics and trends:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3 sm:p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-foreground">Usage Statistics</h3>
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                      <li>• Over 2 million videos downloaded monthly via FastTools</li>
                      <li>• 68% of users download videos for content creation purposes</li>
                      <li>• Average processing time: 1.8 seconds per video</li>
                      <li>• 99.5% success rate across all video types</li>
                      <li>• Mobile users account for 52% of all downloads</li>
                    </ul>
                  </div>
                  <div className="p-3 sm:p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-foreground">Video Quality Trends</h3>
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                      <li>• 1080p HD videos: 45% of all downloads</li>
                      <li>• 720p videos: 38% of downloads</li>
                      <li>• 480p and below: 17% of downloads</li>
                      <li>• MP4 format: 100% compatibility rate</li>
                      <li>• Average file size: 8-15 MB per video</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3 sm:mt-4">
                  These statistics reflect real usage patterns from our platform. The growing demand for X video downloaders indicates the importance of offline access to social media content for professional and personal use. For more insights on social media tools, explore our <Link href="/social-media-tools" className="text-primary hover:underline">complete social media tools collection</Link>.
                </p>
              </div>

                <div className="p-4 sm:p-5 md:p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Related Social Media Tools</h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  Explore our other social media downloaders and tools for a complete content creation workflow:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <Link href="/social-media-tools/tiktok-downloader" className="p-3 sm:p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md">
                    <h3 className="text-sm sm:text-base font-semibold text-heading-accent mb-1.5 sm:mb-2">TikTok Video Downloader</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Download TikTok videos without watermark for educational purposes and content inspiration.</p>
                  </Link>
                  <Link href="/social-media-tools/instagram-downloader" className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md">
                    <h3 className="font-semibold text-heading-accent mb-2">Instagram Downloader</h3>
                    <p className="text-sm text-muted-foreground">Download Instagram posts, reels, and images in HD quality for educational purposes.</p>
                  </Link>
                  <Link href="/social-media-tools/facebook-downloader" className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md">
                    <h3 className="font-semibold text-heading-accent mb-2">Facebook Video Downloader</h3>
                    <p className="text-sm text-muted-foreground">Download Facebook videos in HD quality for educational purposes and content inspiration.</p>
                  </Link>
                  <Link href="/social-media-tools/youtube-thumbnail" className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md">
                    <h3 className="font-semibold text-heading-accent mb-2">YouTube Thumbnail Downloader</h3>
                    <p className="text-sm text-muted-foreground">Download YouTube video thumbnails in all available quality sizes for competitor analysis.</p>
                  </Link>
                  <Link href="/social-media-tools/youtube-tags" className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md">
                    <h3 className="font-semibold text-heading-accent mb-2">YouTube Tag Extractor</h3>
                    <p className="text-sm text-muted-foreground">Extract tags from any YouTube video for SEO research and content optimization.</p>
                  </Link>
                </div>
              </div>
              </main>

              <aside className="hidden xl:block w-80 flex-shrink-0" aria-label="Sidebar">
                <div className="sticky top-32">
                  <AdSpace slot="content" className="h-96 border border-border rounded-xl shadow-sm bg-card" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

