import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YoutubeDownloader } from "@/components/youtube-downloader"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Download, Shield, Zap, Target, AlertCircle, Music, Clock, FileText } from "lucide-react"
import { getCurrentYear } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "FastTools - YouTube Downloader | Free HD Videos & MP3 Audio",
  description: "FastTools YouTube Downloader - Download YouTube videos in HD quality and extract MP3 audio for free. Fast, secure, works on all devices. Perfect for creators and marketers.",
  keywords: [
    "fasttools",
    "fast tools",
    "youtube video downloader",
    "download youtube video",
    "youtube downloader",
    "youtube mp4 downloader",
    "youtube mp3 downloader",
    "free youtube downloader",
    "youtube video download online",
    "youtube downloader free",
    "youtube video download hd mp4",
    "youtube video download",
    "youtube downloader hd",
    "best youtube downloader",
    "fast youtube downloader",
    "youtube downloader for pc",
    "youtube downloader for iphone",
    "youtube downloader for android",
    "youtube downloader app",
    "youtube downloader without login",
    "youtube mp4 downloader",
    "youtube mp3 downloader",
    "youtube to mp4 converter",
    "youtube to mp3 converter",
    "youtube audio extractor",
    "youtube sound downloader",
    "youtube music downloader",
    "youtube hd video downloader",
    "youtube downloader online free",
    "youtube downloader hd quality",
    "youtube downloader fast free",
    "youtube downloader safe",
    "youtube downloader secure",
    "youtube video fetcher",
    "youtube video saver",
    "save youtube video",
    "youtube video extractor",
    `youtube downloader ${getCurrentYear()}`,
    "video downloader youtube",
    "youtube video save tool",
    "youtube backup tool",
    "youtube content downloader",
    "youtube social media downloader",
    "youtube link downloader",
    "download youtube videos",
    "youtube download online free",
    "fasttools youtube downloader",
    `youtube video downloader ${getCurrentYear()}`,
    "free youtube video downloader",
    "youtube downloader no watermark free",
    "youtube video downloader hd",
    "youtube downloader online",
    "youtube video saver online",
    "youtube mp3 extractor",
    "youtube audio downloader",
    "youtube video download tool",
    "youtube downloader website",
    "youtube video downloader free",
    "youtube downloader chrome",
    "youtube downloader browser",
    "youtube video downloader app",
    "youtube downloader mobile",
    "youtube video downloader pc",
    "youtube downloader mac",
    "youtube video downloader android",
    "youtube downloader ios",
    "youtube video downloader iphone"
  ],

  openGraph: {
    title: "YouTube Downloader – HD Videos & MP3 Audio | FastTools",
    description: "Download YouTube videos in HD quality and extract MP3 audio for free. Fast, secure, and easy-to-use online YouTube downloader. Works on PC, Android, iPhone, and all devices. Perfect for creators, marketers, and social media enthusiasts.",
    url: "https://www.fasttools.store/social-media-tools/youtube-downloader",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.png",
        width: 1200,
        height: 630,
        alt: "YouTube Downloader – Download HD YouTube Videos & MP3 Audio Free",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Downloader – HD Videos & MP3 Audio | FastTools",
    description: "Download YouTube videos in HD quality and extract MP3 audio for free. Fast, secure, and easy-to-use online YouTube downloader. Works on PC, Android, iPhone, and all devices.",
    images: ["https://www.fasttools.store/og-image.png"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/social-media-tools/youtube-downloader",
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

export default function YoutubeDownloaderPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Social Media Tools", href: "/social-media-tools" },
              { label: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center mb-8">
            <GHeader
              title="YouTube Downloader – HD Videos & MP3 Audio"
              description="Download YouTube videos in HD quality and extract MP3 audio for free. Fast, secure, and easy-to-use online YouTube downloader. Works on PC, Android, iPhone, and all devices. Perfect for creators, marketers, and social media enthusiasts."
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
              <YoutubeDownloader />

              {/* How to Use Section */}
              <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-200">
                <h2 className="text-xl font-bold mb-4 text-foreground">How to Use YouTube Downloader</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent mb-2">1. Paste YouTube URL</h3>
                      <p className="text-sm text-muted-foreground">Copy and paste any YouTube video link into the input field above.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent mb-2">2. Select Format</h3>
                      <p className="text-sm text-muted-foreground">Choose MP4 for video or MP3 for audio-only download.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent mb-2">3. Get Download Link</h3>
                      <p className="text-sm text-muted-foreground">Click the button to fetch download links for the video or audio.</p>
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
                      <h3 className="font-semibold text-heading-accent mb-2">HD Video Download MP4</h3>
                      <p className="text-sm text-muted-foreground">Download YouTube videos in up to 1080p HD resolution for the best viewing experience. Our YouTube HD video downloader preserves original quality.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Music className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent mb-2">YouTube MP3 Downloader</h3>
                      <p className="text-sm text-muted-foreground">Extract audio from YouTube videos as MP3 files for music analysis. Our YouTube audio extractor works as a YouTube to MP3 converter.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent mb-2">Secure YouTube Video Saver</h3>
                      <p className="text-sm text-muted-foreground">Secure downloads processed directly in your browser with no data storage. Our YouTube video fetcher is completely safe and private.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent mb-2">Fast YouTube Downloader Online</h3>
                      <p className="text-sm text-muted-foreground">Average processing time under 5 seconds per video for quick downloads. Our fast YouTube downloader works without login.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases Section */}
              <div className="p-5 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-400">
                <h2 className="text-xl font-bold mb-4 text-foreground">Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2">Content Creators & YouTube Backup Tool</h3>
                    <p className="text-sm text-muted-foreground">Use our YouTube content downloader to backup your own videos and repurpose content for other platforms like Instagram Reels and TikTok. Perfect YouTube video save tool for creators.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2">Social Media Marketing & YouTube Video Extractor</h3>
                    <p className="text-sm text-muted-foreground">Analyze viral YouTube videos, study trends, and create marketing materials. Our YouTube social media downloader helps marketers save YouTube videos for analysis.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2">Educational Research & YouTube Audio Extractor</h3>
                    <p className="text-sm text-muted-foreground">Study social media trends and analyze content patterns. Use our YouTube audio saver to download YouTube audio for educational purposes under fair use.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <h3 className="font-semibold text-heading-accent mb-2">Personal Archiving & YouTube Link Downloader</h3>
                    <p className="text-sm text-muted-foreground">Save your favorite YouTube videos for offline viewing and create personal video collections. Our YouTube video saver works as a YouTube link downloader for personal use.</p>
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
                    <h3 className="font-semibold text-heading-accent">Is the YouTube downloader free and does it work without login?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Absolutely! Our YouTube downloader free service is 100% free with no hidden costs, registration requirements, or subscription fees. Our YouTube downloader without login works instantly - just paste the YouTube video URL and download. Use our YouTube downloader online free as much as you want.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Does the YouTube downloader work on mobile devices like iPhone and Android?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yes! Our YouTube downloader for iPhone and YouTube downloader for Android works perfectly on all mobile devices. Our YouTube downloader app works across iPhone, Android, tablets, and all mobile browsers including Safari, Chrome, and Firefox mobile. You can also use our YouTube downloader for PC on desktop computers.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Can I extract audio from YouTube videos using the YouTube MP3 downloader?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yes! Our YouTube MP3 downloader allows you to extract audio from YouTube videos. Choose the MP3 option to use our YouTube audio extractor and YouTube to MP3 converter. Perfect for music analysis, creating playlists, or studying viral sounds. Our YouTube sound downloader and YouTube music downloader works seamlessly.
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
                      You can download videos in up to 1080p HD quality, depending on the original video's resolution. We preserve the highest available quality.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Can I download private YouTube videos?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Only if you have access to the video or the creator's permission. We respect privacy settings and only download publicly available content.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Are there any download limits?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      No limits! You can download as many YouTube videos as you want. We don't impose daily or monthly restrictions on our free service.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">How fast is the download process?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Very fast! Most videos are processed and ready for download in under 5 seconds. Our optimized system ensures quick, reliable downloads.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Is it legal to download YouTube videos?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yes, for personal use, educational purposes, or your own content. Always respect copyright laws and only download content you have rights to use.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-heading-accent">Can I download YouTube playlists?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Currently, we support individual video downloads only. For playlists, please use individual video URLs for each video you want to download.
                    </p>
                  </div>
                </div>
              </div>
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
    </div>
  )
}

