import { Breadcrumbs } from "@/components/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Download,
  ArrowRight,
  Youtube
} from "lucide-react"

export const metadata: Metadata = {
  title: "Downloaders",
  description: "Download videos and media from popular platforms. Free YouTube, TikTok, Instagram, Facebook, and X/Twitter downloader tools to save your favorite content.",
  keywords: [
    "youtube downloader",
    "youtube video downloader",
    "youtube mp3 downloader",
    "download youtube videos",
    "download youtube audio",
    "tiktok downloader",
    "instagram downloader",
    "x video downloader",
    "twitter downloader",
    "facebook downloader",
    "video downloader",
    "media downloader",
    "free downloader",
    "social media downloader",
    "video saver",
    "online downloader",
    "instagram video downloader",
    "instagram image downloader",
    "download instagram posts",
    "download instagram reels",
    "download x videos",
    "download twitter videos"
  ],
  openGraph: {
    title: "Downloaders",
    description: "Download videos and media from popular platforms. Free YouTube, TikTok, Instagram, Facebook, and X/Twitter downloader tools to save your favorite content.",
    type: "website",
    url: "/downloaders",
    siteName: "FastTools",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FastTools - Free Online Tools Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Downloaders",
    description: "Download videos and media from popular platforms. Free YouTube, TikTok, Instagram, Facebook, and X/Twitter downloader tools to save your favorite content.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/downloaders",
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

const downloaders = [
  {
    id: "youtube-downloader",
    name: "YouTube Downloader",
    description: "Download YouTube videos in MP4 and extract MP3 audio in high quality",
    icon: Youtube,
    href: "/social-media-tools/youtube-downloader",
  },
  {
    id: "tiktok-downloader",
    name: "TikTok Downloader",
    description: "Download TikTok videos without watermark in high quality",
    icon: Download,
    href: "/social-media-tools/tiktok-downloader",
  },
  {
    id: "instagram-downloader",
    name: "Instagram Downloader",
    description: "Download Instagram posts, reels, and images in HD quality",
    icon: Download,
    href: "/social-media-tools/instagram-downloader",
  },
  {
    id: "facebook-downloader",
    name: "Facebook Downloader",
    description: "Download Facebook videos in HD quality",
    icon: Download,
    href: "/social-media-tools/facebook-downloader",
  },
  {
    id: "x-video-downloader",
    name: "X Video Downloader",
    description: "Download X/Twitter videos in HD without watermark",
    icon: Download,
    href: "/social-media-tools/x-video-downloader",
  },
]

export default function DownloadersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FastTools Downloaders",
    description: "Free video and media download tools",
    url: "https://www.fasttools.store/downloaders",
    numberOfItems: downloaders.length,
    itemListElement: downloaders.map((downloader, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: downloader.name,
      description: downloader.description,
      url: `https://www.fasttools.store${downloader.href}`
    }))
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.fasttools.store/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Downloaders",
        item: "https://www.fasttools.store/downloaders"
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumbs
            items={[
              { label: "Downloaders", href: "/downloaders" },
            ]}
          />

          <div className="max-w-6xl mx-auto mt-8 md:mt-12">
            {/* Title Section */}
            <div className="mb-12 md:mb-16">
              <GHeader
                title="Free Downloaders"
                description="Download videos and media from YouTube, TikTok, Instagram, Facebook, and X/Twitter. Fast, free, and easy to use."
                titleSize="large"
                descriptionSize="medium"
                color="orange"
              />
            </div>

            {/* Downloaders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {downloaders.map((downloader) => {
                const Icon = downloader.icon
                return (
                  <Link
                    key={downloader.id}
                    href={downloader.href}
                    className="bg-card border border-border/40 rounded-xl p-6 hover:border-border/70 transition-all duration-300 group relative h-full flex flex-col"
                  >
                    {/* Icon in top-right */}
                    <div className="absolute top-4 right-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pr-12 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-heading-accent mb-3 group-hover:text-heading-accent transition-colors">
                        {downloader.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {downloader.description}
                      </p>
                      <div className="flex items-center gap-2 text-foreground group-hover:text-foreground transition-colors">
                        <span className="text-sm font-bold">Try Now</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* More Coming Soon Section */}
            <div className="mt-16 md:mt-20 p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">More Coming Soon</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  We're constantly adding new downloaders to help you save your favorite content. If you need a downloader that's not available, please email us and we'll make it for you.
                </p>
                <a
                  href="mailto:support@fasttools.store"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-foreground font-bold rounded-lg hover:bg-primary transition-colors"
                >
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




