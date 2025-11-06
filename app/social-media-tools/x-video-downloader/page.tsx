import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { XVideoDownloader } from "@/components/x-video-downloader"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Zap, Target, AlertCircle, Video, CheckCircle, FileText, Shield, Download } from "lucide-react"
import { getCurrentYear } from "@/lib/utils"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: `X Video Downloader – Free HD Download Tool | FastTools (${getCurrentYear()})`,
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
}

export default function XVideoDownloaderPage() {
  // BreadcrumbList Schema
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

  // FAQ Schema for Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to download X videos without watermark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paste the X/Twitter video post URL into our X video downloader, click 'Get Download Links', then click 'Download Video'. Our free X video downloader and Twitter video downloader automatically extracts videos without watermarks whenever available from X/Twitter's source."
        }
      },
      {
        "@type": "Question",
        "name": "Is the X video downloader free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our X video downloader free and Twitter video downloader free service is 100% free with no hidden costs, registration requirements, or subscription fees. Our free X downloader and free Twitter downloader works instantly without login."
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
          "text": "Yes, for personal use, educational purposes, or your own content. Always respect copyright laws and only download content you have rights to use. Our X video downloader and Twitter video downloader is designed for legitimate use cases."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best X video downloader in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FastTools X Video Downloader is among the best free X video downloaders in 2025, offering unlimited downloads, HD quality, fast processing under 2 seconds, no registration required, and works on all devices including PC, Mac, iPhone, and Android."
        }
      },
      {
        "@type": "Question",
        "name": "Does the X downloader work on iPhone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our X video downloader for iPhone works perfectly on all iOS devices. Simply paste the X/Twitter video URL in Safari or any mobile browser, and download X videos directly to your iPhone."
        }
      },
      {
        "@type": "Question",
        "name": "How fast is the X video download process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Very fast! Most X/Twitter videos are processed and ready for download in under 2 seconds. Our optimized X video downloader and Twitter video downloader ensures quick, reliable downloads."
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
      {/* Structured Data - WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Structured Data - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Structured Data - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <nav aria-label="Breadcrumb">
              <Breadcrumbs
                items={[
                  { label: "Social Media Tools", href: "/social-media-tools" },
                  { label: "X Video Downloader", href: "/social-media-tools/x-video-downloader" },
                ]}
              />
            </nav>

            {/* Hero Section */}
            <header className="text-center mb-8">
              <GHeader
                title="X Video Downloader – HD Videos Without Watermark"
                description="Download X (Twitter) videos in HD without watermark for free. Fast, secure, and easy-to-use online X/Twitter video downloader. Our free X video downloader and Twitter video downloader works on PC, Android, iPhone, and all devices. Perfect for creators, marketers, and social media enthusiasts. Download X videos and Twitter videos instantly with our free X downloader and Twitter downloader."
                titleSize="medium"
                descriptionSize="small"
              />
            </header>

            {/* Stats Counter */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-primary/5 rounded-lg mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2M+</div>
                <div className="text-sm text-muted-foreground">Videos Downloaded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">&lt;2s</div>
                <div className="text-sm text-muted-foreground">Avg. Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            {/* Main Layout */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <main className="flex-1 space-y-8" role="main">
                {/* Mobile Ad Space - shows above content on mobile */}
                <aside className="lg:hidden mb-6" aria-label="Advertisement">
                  <AdSpace slot="content" className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28" />
                </aside>
                <section aria-label="X Video Downloader Tool">
                  <XVideoDownloader />
                </section>

                {/* Pro Tips Box */}
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    Pro Tips:
                  </h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ For best quality, download original tweets (not retweets)</li>
                    <li>✓ Copy the full URL including /status/numbers</li>
                    <li>✓ Works with both x.com and twitter.com links</li>
                    <li>✓ Right-click video → Save As for custom filename</li>
                  </ul>
                </div>

                {/* How to Use Section */}
                <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-200">
                <h2 className="text-xl font-bold mb-4 text-foreground">How to Use X Video Downloader</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent mb-2">1. Paste X/Twitter URL</h3>
                      <p className="text-sm text-muted-foreground">Copy and paste any X/Twitter post link containing a video into the input field above. Our tool supports both x.com and twitter.com URLs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent mb-2">2. Get Download Links</h3>
                      <p className="text-sm text-muted-foreground">Click the button to fetch download links for the video.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent mb-2">3. Download Video</h3>
                      <p className="text-sm text-muted-foreground">Click "Download Video" to save the video in MP4 format.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent mb-2">4. Safe & Secure</h3>
                      <p className="text-sm text-muted-foreground">All downloads are processed securely in your browser.</p>
                    </div>
                  </div>
                </div>
                </div>

                {/* Key Features Section */}
                <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-300">
                  <h2 className="text-xl font-bold mb-4 text-foreground">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-heading-accent mb-2">No Watermark Downloads</h3>
                      <p className="text-sm text-muted-foreground">Download X/Twitter videos without any watermarks for clean, professional content. Get the original quality video directly from the source. Save videos instantly with our free tool.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-heading-accent mb-2">HD Video Quality</h3>
                      <p className="text-sm text-muted-foreground">Download videos in the highest available quality. Automatically selects HD quality when available.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-heading-accent mb-2">HD Video Download MP4</h3>
                      <p className="text-sm text-muted-foreground">Get videos in HD resolution for the best viewing experience. Our X HD video downloader preserves original quality.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-heading-accent mb-2">Secure X Media Saver</h3>
                      <p className="text-sm text-muted-foreground">Secure downloads processed directly in your browser with no data storage. Our X media fetcher is completely safe and private.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Video className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-heading-accent mb-2">Fast X Downloader Online</h3>
                      <p className="text-sm text-muted-foreground">Average processing time under 2 seconds per post for quick downloads. Works without login. Download videos instantly with our free tool.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-heading-accent mb-2">Secure & Private</h3>
                      <p className="text-sm text-muted-foreground">All downloads are processed securely in your browser. We never store your URLs or downloaded videos. Complete privacy guaranteed.</p>
                  </div>
                </div>
                  </div>
                </div>

                {/* Security & Privacy Section */}
                <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-300">
                  <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Security & Privacy Guarantee
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">No Data Storage</h3>
                      <p className="text-sm text-muted-foreground">We never store your URLs or downloaded videos</p>
                    </div>
                    <div className="text-center p-4">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">HTTPS Encryption</h3>
                      <p className="text-sm text-muted-foreground">All downloads use secure HTTPS protocol</p>
                    </div>
                    <div className="text-center p-4">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">No Tracking</h3>
                      <p className="text-sm text-muted-foreground">Anonymous downloads, zero tracking cookies</p>
                    </div>
                  </div>
                </div>

                {/* Technical Specifications Section */}
                <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-300">
                  <h2 className="text-xl font-bold mb-4 text-foreground">Technical Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-heading-accent">Supported Formats</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Video: MP4 (H.264/H.265)</li>
                        <li>• Quality: 240p to 1080p HD</li>
                        <li>• Both x.com and twitter.com URLs</li>
                        <li>• Image formats: JPG, PNG (when available)</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-heading-accent">Performance</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Processing: Under 2 seconds</li>
                        <li>• Success Rate: 99.5%</li>
                        <li>• Uptime: 99.9%</li>
                        <li>• No file size limits</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mobile Download Guide */}
                <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                  <h2 className="text-xl font-bold mb-4 text-foreground">📱 How to Download X Videos on Mobile</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold mb-2">📱 iPhone/iOS (Safari)</h3>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Open X app, find video post</li>
                        <li>Tap Share → Copy Link</li>
                        <li>Open Safari, visit fasttools.store/x-video-downloader</li>
                        <li>Paste URL, tap Download</li>
                        <li>Long-press video → Save to Photos</li>
                      </ol>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold mb-2">🤖 Android (Chrome)</h3>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Open X app, find video post</li>
                        <li>Tap Share → Copy Link</li>
                        <li>Open Chrome, visit fasttools.store</li>
                        <li>Paste URL, tap Download</li>
                        <li>Video saves to Downloads folder</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Use Cases Section */}
                <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-xl font-bold mb-4 text-foreground">Who Uses X Video Downloader?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                      <Video className="h-5 w-5 text-primary" />
                      Content Creators
                    </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                      Content creators use our tool to analyze competitor content, study viral video trends, gather inspiration for their own videos, and repurpose content across platforms. Understand what makes content successful and adapt strategies for your own channel.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Marketers & Social Media Managers
                    </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                      Marketers use our tool for presentations, campaign analysis, competitor research, and content curation. Collect video content for marketing reports, social media strategies, and client presentations without watermarks.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Educators & Researchers
                    </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                      Educators and researchers use our tool to preserve educational content, create offline learning materials, and analyze social media trends for academic purposes. Download videos for study materials, presentations, or research projects under fair use guidelines.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Personal Users
                    </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                      Personal users save memorable moments, create personal video collections, and access content offline. Our free tool makes it easy to save your favorite videos for later viewing without internet connection.
                    </p>
                  </div>
                </div>
                </div>

                {/* Comparison Section */}
                <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-xl font-bold mb-4 text-foreground">Why Choose FastTools X Video Downloader?</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  When comparing X video downloaders, FastTools stands out as the best free X video downloader in 2025. Here's how we compare to other X downloader tools:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-muted/50 border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-heading-accent border-r border-border">Feature</th>
                        <th className="text-center py-3 px-4 font-semibold text-primary border-r border-border">FastTools</th>
                        <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Other Downloaders</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 border-r border-border">Processing Speed</td>
                        <td className="text-center py-3 px-4 text-heading-accent font-semibold border-r border-border">Under 2 seconds</td>
                        <td className="text-center py-3 px-4">5-15 seconds</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 border-r border-border">Cost</td>
                        <td className="text-center py-3 px-4 text-heading-accent font-semibold border-r border-border">100% Free</td>
                        <td className="text-center py-3 px-4">Free/Premium</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 border-r border-border">Registration Required</td>
                        <td className="text-center py-3 px-4 text-heading-accent font-semibold border-r border-border">No</td>
                        <td className="text-center py-3 px-4">Often Required</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 border-r border-border">Download Limits</td>
                        <td className="text-center py-3 px-4 text-heading-accent font-semibold border-r border-border">Unlimited</td>
                        <td className="text-center py-3 px-4">Daily Limits</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 border-r border-border">Watermark Removal</td>
                        <td className="text-center py-3 px-4 text-heading-accent font-semibold border-r border-border">Yes</td>
                        <td className="text-center py-3 px-4">Varies</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 border-r border-border">Mobile Support</td>
                        <td className="text-center py-3 px-4 text-heading-accent font-semibold border-r border-border">Full Support</td>
                        <td className="text-center py-3 px-4">Limited</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-r border-border">Video Quality</td>
                        <td className="text-center py-3 px-4 text-heading-accent font-semibold border-r border-border">HD (Highest Available)</td>
                        <td className="text-center py-3 px-4">SD/HD (Premium)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>

                {/* Troubleshooting Section */}
                <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Troubleshooting: Common Issues & Solutions
                </h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2">Video Not Downloading? Here's Why</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      If your X video downloader isn't working, try these solutions:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li><strong>Post doesn't contain a video:</strong> Our X downloader only works with video posts. Image-only posts are not supported.</li>
                      <li><strong>Private or restricted post:</strong> Ensure the X/Twitter post is public and accessible.</li>
                      <li><strong>Invalid URL format:</strong> Make sure you're using the full post URL from x.com or twitter.com.</li>
                      <li><strong>Region restrictions:</strong> Some videos may be geo-blocked in certain regions.</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2">Supported Link Formats</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      Our X video downloader supports these URL formats:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                      <li><code className="bg-muted px-1 rounded">https://x.com/username/status/1234567890</code></li>
                      <li><code className="bg-muted px-1 rounded">https://twitter.com/username/status/1234567890</code></li>
                      <li><code className="bg-muted px-1 rounded">https://x.com/username/status/1234567890/video/1</code></li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2">Quality Options Explained</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our X video downloader automatically selects the highest available quality (HD when available, SD as fallback). The quality depends on the original video's upload resolution. We preserve the best quality available from X/Twitter's servers.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2">Download Failed - Solutions</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      If downloads fail, try these steps:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
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

                {/* FAQ Section */}
                <div className="p-6 rounded-lg bg-card border border-border shadow-lg animate-fade-in-up animation-delay-500">
                <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                Frequently Asked Questions
              </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Can I download X/Twitter videos without watermark using your X downloader?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yes! Our X video downloader and Twitter video downloader supports no-watermark downloads whenever available from X/Twitter's source. You'll get clean, professional-quality videos perfect for repurposing. Use our X downloader or Twitter downloader to download X videos and Twitter videos without any watermarks.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Is the X downloader free and does it work without login?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Absolutely! Our X video downloader free and Twitter video downloader free service is 100% free with no hidden costs, registration requirements, or subscription fees. Our free X downloader and free Twitter downloader works instantly without login - just paste the X/Twitter post URL and download X videos or Twitter videos.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Does the X downloader work on mobile devices like iPhone and Android?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yes! Our X video downloader for iPhone and Twitter video downloader for Android works perfectly on all mobile devices. Our free X downloader and free Twitter downloader app works across iPhone, Android, tablets, and all mobile browsers including Safari, Chrome, and Firefox mobile. Download X videos and Twitter videos directly to your mobile device.
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
                    No limits! You can download as many X/Twitter videos as you want. Our free X video downloader and Twitter video downloader doesn't impose daily or monthly restrictions on our free service. Download X videos and Twitter videos unlimited times.
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
                      Yes, for personal use, educational purposes, or your own content. Always respect copyright laws and only download content you have rights to use. Our X video downloader and Twitter video downloader is designed for legitimate use cases like downloading your own videos or content you have permission to download.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">What is the best X video downloader in 2025?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      FastTools X Video Downloader is among the best free X video downloaders in 2025, offering unlimited downloads, HD quality, fast processing under 2 seconds, no registration required, and works on all devices. Our X downloader vs other downloaders comparison shows we're faster, completely free, and more reliable than most alternatives.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">How to download X videos without watermark?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Simply paste the X/Twitter video post URL into our X video downloader, click 'Get Download Links', then click 'Download Video'. Our free X video downloader and Twitter video downloader automatically extracts videos without watermarks whenever available from X/Twitter's source. No watermark removal needed - we get the original quality video directly.
                  </p>
                </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Can I download X videos without login?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Absolutely! Our X downloader without login works instantly - just paste the X/Twitter video post URL and download. No registration, no account creation, no login required. Our free X downloader and free Twitter downloader is completely anonymous and private.
                  </p>
                </div>
                </div>
              </div>

              {/* Legal & Copyright Section */}
              <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-xl font-bold mb-4 text-foreground">Legal & Copyright Information</h2>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Fair Use & Legal Compliance:</strong> This tool is provided for 
                    personal, educational, and fair use purposes only. Users are responsible 
                    for ensuring they have the right to download and use any content.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">✓ Acceptable Use:</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Your own videos</li>
                        <li>• Educational research</li>
                        <li>• With creator permission</li>
                        <li>• Fair use purposes</li>
                        <li>• Personal backup</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">✗ Prohibited Use:</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Commercial redistribution without permission</li>
                        <li>• Copyright infringement</li>
                        <li>• Violating X/Twitter Terms of Service</li>
                        <li>• Mass downloading without authorization</li>
                        <li>• Reselling downloaded content</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs mt-4 p-3 bg-muted/50 rounded-lg">
                    <strong>Important:</strong> We do not host, store, or distribute any videos. We only provide links 
                    to publicly available content hosted on X/Twitter's servers. Users are solely responsible for 
                    ensuring their use complies with all applicable laws and platform terms of service.
                  </p>
                </div>
              </div>

              {/* Related Tools Section */}
                <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-xl font-bold mb-4 text-foreground">Related Social Media Tools</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Explore our other social media downloaders and tools for a complete content creation workflow:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href="/social-media-tools/tiktok-downloader" className="p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md">
                    <h3 className="font-semibold text-heading-accent mb-2">TikTok Video Downloader</h3>
                    <p className="text-sm text-muted-foreground">Download TikTok videos without watermark for educational purposes and content inspiration.</p>
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

              {/* Sidebar - shows ad on desktop */}
              <aside className="w-full lg:w-80 space-y-6" aria-label="Sidebar">
                <div className="hidden lg:block sticky top-32">
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

