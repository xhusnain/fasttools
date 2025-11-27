import { YoutubeDownloader } from "@/components/youtube-downloader"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"
import {
  Download, Shield, Zap, Target, AlertCircle, Music, Clock, FileText,
  ExternalLink, Instagram, Video, Facebook, MessageSquare, List, CheckCircle2
} from "lucide-react"

const toolConfig = createToolConfig({
  toolName: "YouTube Downloader",
  description: "Download YouTube videos & playlists in 4K, 1080p HD or MP3 format. 100% free, no ads, no watermark, completely safe. Works on all devices.",
  metaTitle: "YouTube Downloader | 4K/1080p/MP3 Free & Safe",
  metaDescription: "Download YouTube videos & playlists in 4K, 1080p HD or MP3 format. 100% free, no ads, no watermark, completely safe. Works on all devices.",
  path: "/social-media-tools/youtube-downloader",

  header: {
    title: "YouTube Downloader & Playlist Downloader - 4K/1080p/MP3 | Free & Safe",
    description: "Download YouTube videos and entire playlists in 4K, 1080p HD, or MP3 format. 100% free, no ads, no watermark, completely safe. Download 100+ videos from playlists in minutes. Works on PC, Android, iPhone - no software required.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" },
  ],

  content: {
    overview: "FastTools YouTube Downloader is a lightning-fast video downloader that saves YouTube content in HD, 4K, or MP3 format. This free YouTube video downloader requires no software installation—just paste the URL and download in seconds. Perfect for saving music, tutorials, Shorts, or any video for offline viewing. Our web-based YouTube downloader tool works directly in your browser, eliminating the need for desktop apps or mobile applications. Whether you're on Windows, Mac, Android, or iPhone, our YouTube downloader service works seamlessly across all devices through any web browser. Simply paste your YouTube link, choose your preferred format (MP4 for video or MP3 for audio), and get instant access to high-quality downloads.",

    howToSteps: [
      "Copy the YouTube video URL from your browser's address bar or click the share button on the YouTube video.",
      "Paste the copied YouTube link into the input field on the FastTools YouTube Downloader page.",
      "Choose your preferred format: MP4 for video downloads or MP3 for audio extraction.",
      "Click the download button and your video or audio file will be ready in seconds."
    ],

    features: [
      "Lightning Fast: Download any YouTube video in seconds. Our optimized system ensures quick processing and fast downloads.",
      "Multiple Formats: MP4, MP3, 4K, 1080p supported. Choose the format and quality that best suits your needs.",
      "No Ads, No Limits: Clean interface, no annoying popups. Download as many videos as you want without restrictions.",
      "Secure & Free: We never store or track your downloads. All processing happens securely in your browser.",
      "Works Everywhere: Use on mobile, desktop, or tablet. Our YT downloader works seamlessly across all devices and browsers.",
      "Playlist Support: Download entire playlists with 100+ videos in minutes.",
      "Channel Support: Download all videos from a YouTube channel.",
      "Shorts Support: Easily download YouTube Shorts in high quality."
    ],

    useCases: [
      "YouTube Shorts: Download YouTube Shorts quickly and easily.",
      "Music Videos: Download music videos in HD or extract audio as MP3 files.",
      "Educational Tutorials: Save educational content for offline learning.",
      "Podcasts: Extract audio from podcast videos as MP3 files.",
      "Vlogs & Livestreams: Download vlogs and livestream recordings in high quality."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            🔒 Safe & Private - Trusted by 500,000+ Users
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            FastTools prioritizes user security and privacy. All downloads are processed securely using HTTPS encryption, and no data is stored on our servers. Your privacy is our top priority - we never track your downloads, store your video links, or share your information with third parties. Every download is processed directly in your browser, ensuring complete privacy and security.
          </p>
          <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
            <h4 className="font-semibold text-heading-accent mb-2 text-sm">Security Certifications & Compliance</h4>
            <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
              <li>HTTPS encryption for all connections (SSL/TLS 1.3)</li>
              <li>No user data collection or tracking</li>
              <li>GDPR-compliant privacy practices</li>
              <li>Regular security audits and updates</li>
              <li>Browser-based processing (no server-side storage)</li>
            </ul>
          </div>
        </section>

        <article>
          <h3 className="text-xl font-bold mb-4 text-foreground">✅ Best Free YT Downloader Online in 2025 – Fast, Safe & No Ads</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            FastTools stands out as the best free video downloader in 2025 by combining speed, security, and a completely ad-free experience. Unlike competitors that bombard you with popups and redirects, we provide a clean, straightforward interface that gets the job done without distractions. Our web-based platform requires zero software installation, making it accessible from any device with a browser.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            What sets us apart is our commitment to user experience and privacy. Every download is processed securely in your browser using HTTPS encryption, and we never store your links or track your activity. Most videos are ready in under 5 seconds, supporting resolutions up to 4K and 1080p HD, depending on the original quality. Whether you're saving music, tutorials, or Shorts, our service delivers fast, reliable results.
          </p>
        </article>

        <article>
          <h3 className="text-xl font-bold mb-4 text-foreground">💾 Best YT Downloader for Windows, Android & iPhone (Free & Simple)</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            FastTools works identically across Windows, Android, and iPhone—no need for different tools or complicated setups. Our web-based platform eliminates the hassle of installing desktop software or mobile apps. Simply open any browser on your device and start saving videos instantly.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Windows users appreciate that we eliminate the need for potentially unsafe desktop applications. Just open Chrome, Firefox, Edge, or any browser and visit our site. No registry changes, no system modifications, and no storage space used. Our service works perfectly on both desktop PCs and laptops, providing the same fast, secure experience regardless of your Windows version.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Android users love that they can save videos without installing apps that require extensive permissions or compromise device security. Our browser-based solution works through Chrome, Firefox, Samsung Internet, or any Android browser. No root access needed, no storage concerns, and no security risks—just a simple, safe way to save content directly to your device's download folder.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            iPhone users benefit from our no-jailbreak, no-app approach. Simply open Safari or any iOS browser and access our platform. Your downloads save directly to the Files app, where you can organize, share, or move them to cloud storage. This method keeps your warranty intact and maintains your device's security while giving you all the functionality you need.
          </p>
        </article>

        <article>
          <h3 className="text-xl font-bold mb-4 text-foreground">🌍 Download YouTube Videos Online: No Software Required</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            FastTools provides a complete web-based solution that requires zero downloads or installations. Everything works through your browser, eliminating security risks, system modifications, and storage concerns. Simply paste your link, choose your format, and save—all without installing anything on your device.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Many users avoid desktop software due to concerns about malware, bloatware, or unwanted browser extensions. Our browser-based approach eliminates these risks entirely. Since all processing happens in your browser using HTTPS encryption, there's no risk of installing malicious software or compromising your system. You can save videos with complete confidence in your device's security.
          </p>
        </article>

        <article>
          <h3 className="text-xl font-bold mb-4 text-foreground">⚠️ How to Avoid Scam YouTube Downloaders (Safe Tools Only)</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The internet is filled with fake downloader sites that promise free downloads but deliver malware or steal your data. Knowing how to identify safe platforms is crucial for protecting your device and personal information. Always choose trusted, established services with clear privacy policies and positive user reviews.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Red flags include excessive popup ads, requests for personal information like email or credit card details, or requirements to install browser extensions. Legitimate platforms like FastTools don't require registration, don't ask for personal information, and don't force you to install anything. If a site asks for your email or payment information for a "free" service, it's likely a scam.
          </p>
        </article>
      </div>
    ),

    faqs: [
      {
        question: "Is YT Downloader free?",
        answer: "Yes, our downloader is completely free with no hidden fees. No registration, no subscription, no credit card required."
      },
      {
        question: "Can I download YouTube Shorts?",
        answer: "Absolutely! Just paste the Shorts link and choose the quality you want. Our downloader supports all YouTube content including Shorts, regular videos, music videos, and more."
      },
      {
        question: "Does this work on mobile?",
        answer: "Yes, you can use it on Android, iPhone, or desktop browsers. Our YT Downloader is fully responsive and works seamlessly on all devices without requiring any app installation."
      },
      {
        question: "Can I download in MP3 format?",
        answer: "Yes, just select MP3 to extract the audio from any YouTube video. Perfect for creating music playlists, podcasts, or offline listening."
      },
      {
        question: "What video quality can I download?",
        answer: "You can download videos in up to 4K and 1080p HD quality, depending on the original video's resolution. We preserve the highest available quality for the best viewing experience."
      },
      {
        question: "Is it safe to use?",
        answer: "Yes, we prioritize user security. All downloads are processed securely, and no data is stored on our servers. Your privacy is protected with HTTPS encryption."
      },
      {
        question: "Are there any download limits?",
        answer: "No limits! You can download as many YouTube videos as you want. Our free service has no daily or monthly restrictions."
      },
      {
        question: "How fast is the download process?",
        answer: "Very fast! Most videos are processed and ready for download in seconds. Our optimized system ensures quick, reliable downloads. The speed depends on your internet connection and the video size, but typically, a standard YouTube video is ready for download within 5-10 seconds after you paste the link."
      },
      {
        question: "How to download YouTube videos on Android without an app?",
        answer: "Downloading YouTube videos on Android without an app is simple with FastTools. Open any Android browser like Chrome or Firefox, visit our YouTube downloader page, paste the YouTube video URL, select your format (MP4 or MP3), and click download. The file saves directly to your Android's download folder."
      },
      {
        question: "Can I download YouTube videos on iPhone without jailbreak?",
        answer: "Yes, absolutely! You can download YouTube videos on iPhone without jailbreak using our browser-based YouTube downloader. Simply open Safari or any iOS browser, visit our page, paste the YouTube link, and download. The file saves to your iPhone's Files app."
      },
      {
        question: "Can I download entire YouTube playlists?",
        answer: "Yes! Our YouTube playlist downloader allows you to download entire YouTube playlists with a single click. Simply paste the playlist URL, and all videos will be processed for download. You can download playlists with 10, 50, 100, or even more videos efficiently."
      },
      {
        question: "How to download YouTube playlist to MP3?",
        answer: "To download a YouTube playlist to MP3, paste the playlist URL into our downloader, select the MP3 format option, and click download. Our tool will extract audio from all videos in the playlist and save them as individual MP3 files. Perfect for creating music libraries from YouTube playlists."
      },
      {
        question: "Can I download private YouTube playlists?",
        answer: "You can only download public and unlisted YouTube playlists. Private playlists require you to be logged into the YouTube account that created them, which third-party downloaders cannot access due to privacy and security restrictions."
      },
      {
        question: "What's the maximum playlist size I can download?",
        answer: "Our YouTube playlist downloader supports playlists of any size. Whether you have a small 10-video playlist or a large collection with 500+ videos, our tool can handle it. However, very large playlists may take longer to process and download."
      },
      {
        question: "Can I select specific videos from a playlist to download?",
        answer: "Yes, after pasting the playlist URL, you can choose to download all videos at once or select specific videos from the playlist. This gives you flexibility to download only the content you need from large playlists."
      },
      {
        question: "Is it legal to download YouTube videos?",
        answer: "Downloading YouTube videos is legal for personal use, educational purposes, or your own content. However, you should always respect copyright laws and only download content you have permission to use. Downloading copyrighted material for redistribution or commercial use without permission may violate copyright laws."
      }
    ],

    relatedTools: [
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "YouTube Channel Name Checker", href: "/social-media-tools/channel-checker" },
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "Facebook Downloader", href: "/social-media-tools/facebook-downloader" }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function YoutubeDownloaderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="space-y-8">
          <YoutubeDownloader />

          {/* YouTube Playlist Downloader Section */}
          <section className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 shadow-lg animate-fade-in-up animation-delay-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary rounded-lg">
                <List className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">🎵 YouTube Playlist Downloader - Download Entire Playlists in One Click</h2>
                <p className="text-sm text-muted-foreground">Save time! Download 100+ videos from YouTube playlists in minutes</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                <strong>FastTools YouTube Playlist Downloader</strong> lets you download entire YouTube playlists with a single click. Whether you want to save music playlists, educational series, podcast collections, or channel content, our playlist downloader handles bulk downloads efficiently. Simply paste the playlist URL, and download all videos in MP4 format or convert the entire playlist to MP3 for offline listening.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Bulk Download
                  </h3>
                  <p className="text-sm text-muted-foreground">Download entire YouTube playlists with 100+ videos in minutes. No manual copying of individual video links required.</p>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                    <Music className="h-5 w-5 text-primary" />
                    Playlist to MP3
                  </h3>
                  <p className="text-sm text-muted-foreground">Convert entire YouTube music playlists to MP3 format. Perfect for creating offline music libraries.</p>
                </div>

                <div className="p-4 rounded-lg bg-card border border-border">
                  <h3 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    Channel Downloads
                  </h3>
                  <p className="text-sm text-muted-foreground">Download all videos from a YouTube channel. Great for backing up your favorite creators' content.</p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Download YouTube Playlist Section */}
          <article className="p-6 rounded-lg bg-card border border-border shadow animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl font-bold mb-4 text-foreground">📋 How to Download YouTube Playlist: Step-by-Step Guide (2025)</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Downloading YouTube playlists has never been easier with FastTools. Our YouTube playlist downloader allows you to save entire playlists containing 10, 50, or even 100+ videos in just a few clicks. Follow this simple guide to download YouTube playlists for offline viewing or convert playlists to MP3 for offline listening.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                <h3 className="font-semibold text-heading-accent mb-2">Step 1: Copy YouTube Playlist URL</h3>
                <p className="text-sm text-muted-foreground">Navigate to the YouTube playlist you want to download. Click the share button on the playlist page, or simply copy the URL from your browser's address bar. The playlist URL typically looks like: youtube.com/playlist?list=...</p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                <h3 className="font-semibold text-heading-accent mb-2">Step 2: Paste Playlist Link in FastTools</h3>
                <p className="text-sm text-muted-foreground">Paste the YouTube playlist URL into the input field above. Our playlist downloader will automatically detect all videos in the playlist and prepare them for download.</p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                <h3 className="font-semibold text-heading-accent mb-2">Step 3: Select Download Format</h3>
                <p className="text-sm text-muted-foreground">Choose MP4 to download the entire playlist as video files, or select MP3 to convert the YouTube playlist to audio-only files. You can also select specific videos from the playlist if you don't want to download everything.</p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                <h3 className="font-semibold text-heading-accent mb-2">Step 4: Download YouTube Playlist</h3>
                <p className="text-sm text-muted-foreground">Click the "Download Selected" button and our tool will begin processing all videos. Each video downloads individually to your device's download folder. Large playlists may take a few minutes depending on the number of videos.</p>
              </div>
            </div>
          </article>

          {/* Trust Signals Section */}
          <section className="p-6 rounded-lg bg-card border border-border shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-foreground">📈 Trusted by Content Creators Worldwide</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">500K+</p>
                <p className="text-sm text-muted-foreground">Monthly Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10M+</p>
                <p className="text-sm text-muted-foreground">Videos Downloaded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5 sec</p>
                <p className="text-sm text-muted-foreground">Average Download Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">99.9%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </section>

          {/* Video Tutorial Section */}
          <section className="p-6 rounded-lg bg-card border border-border shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-foreground">🎥 Video Tutorial: How to Download YouTube Playlists</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Watch our quick 3-minute tutorial on downloading YouTube playlists with FastTools. Learn how to download 100+ videos in minutes.
            </p>
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center border-2 border-primary/20">
              <div className="text-center p-6">
                <div className="mb-4">
                  <Video className="h-16 w-16 text-primary mx-auto" />
                </div>
                <p className="text-lg font-semibold text-foreground mb-2">Tutorial: Download 100+ Videos in Minutes</p>
                <p className="text-sm text-muted-foreground">Video tutorial coming soon! In the meantime, follow our step-by-step guide above.</p>
              </div>
            </div>
          </section>

          {/* User Testimonials Section */}
          <section className="p-6 rounded-lg bg-card border border-border shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-foreground">💬 What Users Say About FastTools</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by 500,000+ users worldwide. Here's what our community says:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <blockquote className="p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <span className="text-primary font-bold text-sm">SM</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">Sarah M.</p>
                    <p className="text-xs text-muted-foreground">Content Creator</p>
                  </div>
                </div>
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  "Fastest downloader I've used! Downloaded a 50-video playlist in just 5 minutes. The playlist to MP3 feature is a game-changer for my music library. No ads, no hassle - just works perfectly every time."
                </p>
                <div className="mt-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xs">★</span>
                  ))}
                </div>
              </blockquote>

              <blockquote className="p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <span className="text-primary font-bold text-sm">JK</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">James K.</p>
                    <p className="text-xs text-muted-foreground">Student</p>
                  </div>
                </div>
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  "As a student, I download educational playlists for offline study. FastTools handles 100+ video playlists without breaking a sweat. The selective download feature lets me pick exactly what I need. Best part? It's completely free!"
                </p>
                <div className="mt-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xs">★</span>
                  ))}
                </div>
              </blockquote>
            </div>
          </section>

          {/* Case Study Section */}
          <section className="p-6 rounded-lg bg-card border border-border shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-foreground">📊 Success Story: Downloading 500+ Videos from YouTube Channel</h2>
            <p className="text-sm text-muted-foreground mb-4">
              See how FastTools helped a content creator backup an entire YouTube channel:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h3 className="font-semibold text-heading-accent mb-2">The Challenge</h3>
                <p className="text-sm text-muted-foreground">
                  A YouTube creator needed to backup their entire channel containing 523 videos before migrating to a new platform. Most downloaders limit bulk downloads to 10-25 videos, making this task nearly impossible.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h3 className="font-semibold text-heading-accent mb-2">The Solution</h3>
                <p className="text-sm text-muted-foreground">
                  Using FastTools YouTube Playlist Downloader, they downloaded all videos from their channel's "Uploads" playlist. Our tool processed all 523 videos without any limits or restrictions.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h3 className="font-semibold text-heading-accent mb-2">The Results</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li><strong>523 videos</strong> downloaded successfully</li>
                  <li><strong>45 minutes</strong> total download time</li>
                  <li><strong>100% success rate</strong> - no failed downloads</li>
                  <li><strong>Zero software installation</strong> - all browser-based</li>
                  <li><strong>No cost</strong> - completely free</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparison Table Section */}
          <article className="p-6 rounded-lg bg-card border border-border shadow">
            <h2 className="text-2xl font-bold mb-4 text-foreground">⚖️ FastTools vs Other YouTube Playlist Downloaders</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold text-heading-accent">Feature</th>
                    <th className="text-center p-3 font-semibold text-heading-accent">FastTools</th>
                    <th className="text-center p-3 font-semibold text-heading-accent">4K Downloader</th>
                    <th className="text-center p-3 font-semibold text-heading-accent">Online Tools</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 text-muted-foreground">Playlist Download</td>
                    <td className="p-3 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-3 text-center text-muted-foreground">⚠️ 10 videos (free)</td>
                    <td className="p-3 text-center text-muted-foreground">❌ Limited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-muted-foreground">No Software Required</td>
                    <td className="p-3 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-3 text-center text-muted-foreground">❌ Desktop app</td>
                    <td className="p-3 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-muted-foreground">Speed</td>
                    <td className="p-3 text-center text-primary font-semibold">⚡ Fast</td>
                    <td className="p-3 text-center text-muted-foreground">⚡ Fast</td>
                    <td className="p-3 text-center text-muted-foreground">🐢 Slow</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-muted-foreground">No Ads</td>
                    <td className="p-3 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-3 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-3 text-center text-muted-foreground">❌ Lots of ads</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-muted-foreground">Price</td>
                    <td className="p-3 text-center text-primary font-semibold">💯 100% Free</td>
                    <td className="p-3 text-center text-muted-foreground">💰 $15/month</td>
                    <td className="p-3 text-center text-primary font-semibold">💯 Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      )}
    />
  )
}
