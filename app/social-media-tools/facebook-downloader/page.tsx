import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FacebookDownloader } from "@/components/facebook-downloader"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { getCurrentYear } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "FastTools - Facebook Video Downloader | Free HD Videos",
  description: "FastTools Facebook Video Downloader - Download Facebook videos in HD quality for free. Fast, secure, works on all devices. Perfect for creators and marketers.",
  keywords: [
    "fasttools",
    "fast tools",
    "facebook video downloader",
    "download facebook video",
    "facebook downloader",
    "free facebook downloader",
    "facebook video download online",
    "facebook downloader free",
    "facebook video download hd mp4",
    "facebook video download",
    "facebook downloader hd",
    "best facebook downloader",
    "fast facebook downloader",
    "facebook downloader for pc",
    "facebook downloader for iphone",
    "facebook downloader for android",
    "facebook downloader app",
    "facebook downloader without login",
    "facebook mp4 downloader",
    "facebook hd video downloader",
    "facebook downloader online free",
    "facebook downloader hd quality",
    "facebook downloader fast free",
    "facebook downloader safe",
    "facebook downloader secure",
    "facebook video fetcher",
    "facebook video saver",
    "save facebook video",
    "facebook video extractor",
    `facebook downloader ${getCurrentYear()}`,
    "video downloader facebook",
    "facebook video save tool",
    "facebook backup tool",
    "facebook content downloader",
    "facebook social media downloader",
    "facebook link downloader",
    "download facebook videos",
    "facebook download online free",
    "fasttools facebook downloader",
    `facebook video downloader ${getCurrentYear()}`,
    "free facebook video downloader",
    "facebook downloader online",
    "facebook video saver online",
    "facebook video download tool",
    "facebook downloader website",
    "facebook video downloader free",
    "facebook downloader chrome",
    "facebook downloader browser",
    "facebook downloader mobile",
    "facebook video downloader pc",
    "facebook downloader mac",
    "facebook video downloader android",
    "facebook downloader ios",
    "facebook video downloader iphone"
  ],
  openGraph: {
    title: "Facebook Video Downloader – HD Videos | FastTools",
    description: "Download Facebook videos in HD quality for free. Fast, secure, and easy-to-use online Facebook downloader for videos. Works on PC, Android, iPhone, and all devices. Perfect for creators, marketers, and social media enthusiasts.",
    url: "https://www.fasttools.store/social-media-tools/facebook-downloader",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.png",
        width: 1200,
        height: 630,
        alt: "Facebook Video Downloader – Download HD Facebook Videos Free",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Video Downloader – HD Videos | FastTools",
    description: "Download Facebook videos in HD quality for free. Fast, secure, and easy-to-use online Facebook downloader for videos. Works on PC, Android, iPhone, and all devices.",
    images: ["https://www.fasttools.store/og-image.png"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/social-media-tools/facebook-downloader",
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

export default function FacebookDownloaderPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Facebook Video Downloader - FastTools",
    "description": "Free Facebook video downloader to save videos in HD quality. Fast, secure, and works on all devices.",
    "url": "https://www.fasttools.store/social-media-tools/facebook-downloader",
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
      "Download Facebook videos",
      "HD video quality up to 1080p",
      "Works on all devices and browsers",
      "No registration required",
      "Fast processing under 2 seconds",
      "Secure and private downloads",
      "Supports all Facebook video formats",
      "Mobile-friendly interface",
      "Educational and research use",
      "Content creator tools",
      "Social media marketing",
      "Video backup and archiving",
      "Cross-platform compatibility",
      "Real-time processing",
      "High success rate",
      "Privacy-focused design",
      "Free forever"
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Social Media Tools", href: "/social-media-tools" },
              { label: "Facebook Downloader", href: "/social-media-tools/facebook-downloader" },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center mb-8">
            <GHeader
              title="Facebook Video Downloader – HD Videos"
              description="Download Facebook videos in HD quality for free. Fast, secure, and easy-to-use online Facebook downloader for videos. Works on PC, Android, iPhone, and all devices. Perfect for creators, marketers, and social media enthusiasts."
              titleSize="medium"
              descriptionSize="small"
            />
          </div>

          {/* Mobile Ad Space */}
          <div className="lg:hidden mb-6">
            <AdSpace slot="content" className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28" />
          </div>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <FacebookDownloader />
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 space-y-6">
              <div className="sticky top-32">
                <AdSpace slot="sidebar" className="h-96 border border-border rounded-xl shadow-sm bg-card" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

