import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YoutubeThumbnailDownloader } from "@/components/youtube-thumbnail-downloader"
import { AdSpace } from "@/components/ad-space"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ImageIcon, Download, Copy, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "YouTube Thumbnail Downloader - Download HD Thumbnails | FastTools",
  description:
    "Download YouTube video thumbnails in all available quality sizes. Get maximum quality (1280x720), high quality, medium, and standard thumbnails instantly.",
    keywords :[
        "youtube thumbnail downloader",
        "youtube thumbnail download",
        "youtube thumbnail grabber",
        "free youtube thumbnail downloader",
        "youtube thumbnail downloader hd",
        "youtube thumbnail downloader 4k",
        "youtube thumbnail downloader online",
        "youtube thumbnail downloader no ads",
        "youtube thumbnail downloader tool",
        "youtube thumbnail downloader app",
        "youtube thumbnail downloader extension",
        "youtube thumbnail downloader for shorts",
        "youtube thumbnail downloader for live videos",
        "download youtube video thumbnail",
        "get youtube thumbnail online",
        "youtube thumbnail image downloader",
        "youtube thumbnail hd download",
        "youtube thumbnail url viewer",
        "youtube thumbnail preview tool",
        "youtube thumbnail downloader free online",
        "youtube thumbnail viewer and downloader",
        "download youtube thumbnail without watermark",
        "youtube video thumbnail downloader hd 1080p",
        "youtube thumbnail downloader without copyright",
        "youtube thumbnail downloader generator",
        "youtube thumbnail extractor",
        "youtube thumbnail downloader chrome extension",
        "youtube thumbnail downloader api",
        "youtube thumbnail download site",
        "best youtube thumbnail downloader online"
    ],
    openGraph: {
      title: "YouTube Thumbnail Downloader - Download HD Thumbnails",
      description: "Download YouTube video thumbnails in all available quality sizes. Get maximum quality (1280x720), high quality, medium, and standard thumbnails instantly.",
      url: "https://www.fasttools.store/social-media-tools/youtube-thumbnail",
      siteName: "FastTools",
      images: [
        {
          url: "https://www.fasttools.store/og-image.png",
          width: 1200,
          height: 630,
          alt: "YouTube Thumbnail Downloader - Download HD Thumbnails",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "YouTube Thumbnail Downloader - Download HD Thumbnails",
      description: "Download YouTube video thumbnails in all available quality sizes. Get maximum quality (1280x720), high quality, medium, and standard thumbnails instantly.",
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
      canonical: "https://www.fasttools.store/social-media-tools/youtube-thumbnail",
    },
}

export default function YoutubeThumbnailPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Thumbnail Downloader",
    "description": "Download YouTube video thumbnails in all available quality sizes. Get maximum quality (1280x720), high quality, medium, and standard thumbnails instantly.",
    "url": "https://www.fasttools.store/social-media-tools/youtube-thumbnail",
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
      "Download YouTube thumbnails",
      "Multiple quality sizes",
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
            { label: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 lg:flex-[2] space-y-6">
              {/* Hero Section */}
              <div className="text-center space-y-5 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                  <ImageIcon className="h-4 w-4 animate-pulse" />
                  <span>YouTube Tools</span>
                  <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  YouTube Thumbnail Downloader
                </h1>

                <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                  Download YouTube video thumbnails in all available quality sizes. Get HD thumbnails instantly for your content creation needs.
                </p>
                
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                    <ImageIcon className="h-4 w-4 text-primary" />
                    <span className="text-primary font-medium text-sm">HD Quality</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-green-500 shadow">
                    <Download className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-medium text-sm">Instant Download</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                    <Copy className="h-4 w-4 text-accent" />
                    <span className="text-accent font-medium text-sm">Free Forever</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                    <ArrowRight className="h-4 w-4 text-secondary-accent" />
                    <span className="text-secondary-accent font-medium text-sm">All Sizes</span>
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
                    <ImageIcon className="h-5 w-5 text-primary" />
                    YouTube Thumbnail Downloader
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Enter a YouTube video URL or ID to download thumbnails in all available quality sizes
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <YoutubeThumbnailDownloader />
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
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">How Our YouTube Thumbnail Downloader Works</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Our YouTube thumbnail downloader extracts thumbnails directly from YouTube's CDN servers. 
                    It supports all available quality sizes including maximum quality (1280x720), high quality, medium, and standard resolutions.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Multiple Quality Options</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Get thumbnails in all available sizes: Maximum Quality (1280x720), High Quality (480x360), 
                    Medium Quality (320x180), and Standard Quality (640x480) for different use cases.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Instant Access</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    No registration required. Simply paste a YouTube URL or video ID and get instant access 
                    to all available thumbnail sizes with download and copy options.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">Perfect for Content Creators</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Whether you're a YouTuber, designer, or content creator, our thumbnail downloader helps you 
                    access high-quality thumbnails for inspiration, analysis, or content creation purposes.
                  </p>

                  <h3 className="text-lg font-bold mb-3 text-card-foreground">Thumbnail Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Download thumbnails in all available quality sizes</li>
                    <li>Copy thumbnail URLs for direct use</li>
                    <li>Maximum quality (1280x720) for best results</li>
                    <li>Works with any YouTube video URL or ID</li>
                    <li>Instant processing and download</li>
                    <li>No registration or login required</li>
                  </ul>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-5 animate-fade-in-up animation-delay-300">
                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">Frequently Asked Questions</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">How do I download YouTube thumbnails?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Simply paste the YouTube video URL or video ID into our downloader tool and click "Get Thumbnails". 
                        Our tool will automatically extract all available thumbnail sizes including maximum quality (1280x720), 
                        high quality (480x360), medium quality (320x180), and standard quality (640x480). You can then 
                        download any thumbnail size you need or copy the direct URL for immediate use.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">What thumbnail sizes are available?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our YouTube thumbnail downloader provides access to all available thumbnail sizes: Maximum Quality 
                        (1280x720 pixels) for the highest resolution, High Quality (480x360 pixels) for standard HD viewing, 
                        Medium Quality (320x180 pixels) for smaller displays, and Standard Quality (640x480 pixels) for 
                        compatibility with older systems. The maximum quality thumbnail is recommended for most use cases 
                        as it provides the best clarity and detail.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Can I download thumbnails from any YouTube video?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Yes, our tool works with any public YouTube video. Simply paste the video URL or video ID and 
                        our downloader will extract the thumbnails. The tool supports various YouTube URL formats including 
                        youtube.com/watch?v=, youtu.be/, and youtube.com/embed/ formats. It also works with just the 
                        11-character video ID if you have that available.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Is it legal to download YouTube thumbnails?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Downloading YouTube thumbnails for personal use, educational purposes, or content creation is 
                        generally acceptable. However, you should respect copyright laws and YouTube's Terms of Service. 
                        If you're using thumbnails for commercial purposes or republishing them, you may need permission 
                        from the original creator. Our tool is designed to help content creators access thumbnails for 
                        inspiration, analysis, and legitimate creative purposes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Why would I need to download YouTube thumbnails?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Content creators download YouTube thumbnails for various reasons: analyzing successful thumbnail 
                        designs for inspiration, creating thumbnail templates based on proven layouts, conducting A/B 
                        testing research, archiving thumbnail designs for reference, creating compilation videos or 
                        presentations about YouTube trends, and studying visual elements that drive high click-through rates. 
                        Designers and marketers also use thumbnails for competitive analysis and trend research.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">What's the difference between thumbnail qualities?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Maximum Quality (1280x720) offers the highest resolution with crisp details, perfect for 
                        detailed analysis or high-quality presentations. High Quality (480x360) provides good clarity 
                        for most viewing purposes. Medium Quality (320x180) is suitable for smaller displays or 
                        quick previews. Standard Quality (640x480) offers compatibility with older systems. For 
                        content creation and analysis, maximum quality is recommended as it preserves all visual 
                        details and text readability.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Can I download thumbnails from private or unlisted videos?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our tool can only access thumbnails from public YouTube videos. Private, unlisted, or age-restricted 
                        videos may not be accessible through our downloader. If a video is set to private or requires 
                        authentication, the thumbnail extraction will not work. This is a limitation of YouTube's 
                        public API and CDN access, not our tool. For best results, ensure the video is publicly 
                        available and accessible without login requirements.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">How can I improve my YouTube thumbnail design?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Effective YouTube thumbnails use high contrast colors, clear focal subjects, readable text 
                        (especially on mobile), consistent branding, and emotional expressions. Study successful 
                        thumbnails in your niche, use bright colors that stand out, limit text to 3-5 words, 
                        ensure faces are clearly visible, and maintain consistent visual style across your channel. 
                        A/B test different designs and track performance in YouTube Analytics to optimize your 
                        click-through rates.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">What should I do if thumbnails don't load?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        If thumbnails don't load, check that the YouTube URL is correct and the video is public. 
                        Try refreshing the page or clearing your browser cache. Some videos may have restricted 
                        access or be temporarily unavailable. Ensure you're using a valid YouTube URL format 
                        and that the video hasn't been deleted or made private. If the issue persists, try 
                        a different video URL to test if the problem is specific to that video.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">Can I use downloaded thumbnails for my own videos?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        While you can download thumbnails for analysis and inspiration, using someone else's 
                        thumbnail design for your own videos may violate copyright laws. Instead, use downloaded 
                        thumbnails as reference material to create your own original designs. Study successful 
                        elements like color schemes, text placement, and visual composition, then create unique 
                        thumbnails that incorporate these proven techniques while maintaining your own creative 
                        identity and brand consistency.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-card-foreground">What are the best practices for YouTube thumbnail optimization?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Optimize thumbnails by ensuring they're visually appealing at small sizes (mobile viewing), 
                        using high contrast between text and background, including emotional faces or expressions, 
                        maintaining consistent branding across your channel, testing different designs with A/B 
                        testing, keeping text minimal and readable, using bright colors that stand out in search 
                        results, and ensuring the thumbnail accurately represents your video content. Monitor 
                        your click-through rates in YouTube Analytics to measure thumbnail performance and 
                        continuously improve your designs based on data-driven insights.
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
