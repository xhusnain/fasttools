import { Metadata } from 'next';
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import {
  Download, Shield, Zap, Target, AlertCircle, Globe, Video, CheckCircle,
  FileText, Settings, Smartphone, Monitor, Info, BookOpen, Scale, Wrench,
  Star, Code, Link as LinkIcon, Music, Image, Lock, Film
} from "lucide-react"

const toolConfig = createToolConfig({
  toolName: "Facebook Video Downloader (4K/HD) - Download Reels, Stories & Private",
  description: "The #1 Facebook Downloader. Save FB Videos in 4K & 1080p. Download Facebook Reels, Stories, and Private videos without watermark. Convert to MP3. Free & Secure.",
  metaTitle: "Facebook Video Downloader (4K/HD) - Download Reels, Stories & Private",
  metaDescription: "Best Facebook Downloader 2026. Save FB Videos in 4K/1080p. Download Reels, Stories, and Private videos without watermark. Convert Facebook to MP3. Free & Fast.",
  path: "/social-media-tools/facebook-downloader",

  header: {
    title: "Facebook Video Downloader (4K/HD) - Save Reels & Private",
    description: "The most advanced Facebook Saver. Download Videos, Reels, Stories, and Private content in original 4K/1080p quality. No software needed.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Facebook Downloader", href: "/social-media-tools/facebook-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    price: "0",
    ratingValue: "4.9",
    ratingCount: "25000",
    alternateName: "Facebook Reels Downloader, FB Story Saver, Private Video Downloader, FB to MP3",
    featureList: [
      "4K & 1080p Support",
      "Reels & Shorts Downloader",
      "Story Saver",
      "Private Video Download",
      "Facebook to MP3",
      "No Watermark"
    ],
    softwareRequirements: "Modern Web Browser (Chrome, Safari, Edge, Firefox)"
  },

  content: {
    overview: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          <strong>FastTools Facebook Downloader</strong> is the ultimate all-in-one solution for saving Facebook content. Unlike basic tools that only grab standard definition videos, our engine connects directly to Facebook's CDN to extract <strong>4K, 2K, and 1080p HD</strong> video files.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We cover everything: <strong>Facebook Reels</strong> (with audio), <strong>FB Stories</strong> (anonymous saving), and even <strong>Private Group Videos</strong>. Whether you need to convert a music video to <strong>MP3</strong> or archive a <strong>Facebook Live</strong> stream, FastTools does it instantly and for free.
        </p>

        {/* Variants Grid - Linking to specific functionalities or sub-pages if they exist, or just anchors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          <div className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all group">
            <div className="flex items-center gap-2 mb-2">
              <Film className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-foreground group-hover:text-primary">Reels Downloader</h3>
            </div>
            <p className="text-xs text-muted-foreground">Download FB Reels & Shorts in HD with full audio.</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all group">
            <div className="flex items-center gap-2 mb-2">
              <Image className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-foreground group-hover:text-primary">Story Saver</h3>
            </div>
            <p className="text-xs text-muted-foreground">Save Facebook Stories anonymously before they vanish.</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all group">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-foreground group-hover:text-primary">Private Video</h3>
            </div>
            <p className="text-xs text-muted-foreground">Download videos from private groups or profiles.</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all group">
            <div className="flex items-center gap-2 mb-2">
              <Music className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-foreground group-hover:text-primary">Facebook to MP3</h3>
            </div>
            <p className="text-xs text-muted-foreground">Extract high-quality audio from any FB video.</p>
          </div>
        </div>
      </div>
    ),

    howToSteps: [
      "Find the Video: Open the Facebook app or website. Locate the Video, Reel, or Story you want to save.",
      "Copy Link: Tap the 'Share' button (arrow icon) and select 'Copy Link'. For private videos, you may need the source code (see guide below).",
      "Paste & Process: Paste the URL into the FastTools input box above and click 'Download'.",
      "Select Format: Choose your desired quality (4K, 1080p, 720p) or format (MP3 Audio).",
      "Save: Click the download button. The file will save directly to your 'Downloads' folder or Gallery."
    ],

    features: [
      "4K & 1080p HD Quality: Don't settle for blurry pixels. We fetch the highest resolution available (up to 4K) directly from the source.",
      "Facebook Reels Downloader: Save short-form Reels videos to your phone to repost on TikTok or YouTube Shorts.",
      "Story Saver (Anonymous): Download Stories from friends or pages without them knowing you've seen or saved them.",
      "Private Video Support: Advanced algorithm to help you download videos from private groups you are a member of.",
      "Facebook to MP3 Converter: Extract audio tracks, podcasts, or music from Facebook Watch videos in high-quality MP3 format.",
      "No Watermark: All downloads are clean and free of watermarks or logos.",
      "Cross-Platform: Works perfectly on Android (Chrome), iPhone (Safari), Windows, and Mac.",
      "Unlimited & Free: No daily limits, no hidden costs. Download as much as you want."
    ],

    useCases: [
      "Content Creators: Repurpose viral Facebook Reels for your other social channels.",
      "Archivists: Save Facebook Live videos and memories before they are deleted.",
      "Offline Viewing: Download long Facebook Watch episodes to view during travel.",
      "Audio Lovers: Convert speeches, podcasts, and music covers to MP3 for your playlist.",
      "Marketers: Analyze competitor ads and video strategies by saving them for reference."
    ],

    aboutTool: (
      <div className="space-y-12">
        
        {/* Reels Section */}
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Film className="h-6 w-6 text-primary" />
            Facebook Reels Downloader (Audio Included)
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Facebook Reels are exploding in popularity, but the app doesn't let you save them easily—and when it does, it often removes the audio due to licensing. <strong>FastTools solves this.</strong> Our Facebook Reels Downloader extracts the raw MP4 file with the original audio track perfectly synced. Just paste the Reel link, and get a share-ready video for WhatsApp Status or TikTok.
          </p>
        </article>

        {/* Private Video Section - The Hook */}
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Lock className="h-6 w-6 text-primary" />
            How to Download Private Facebook Videos?
          </h2>
          <div className="p-5 bg-muted/30 rounded-lg border border-border">
            <h4 className="font-semibold text-heading-accent mb-3">Why are some videos "Private"?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Videos in private groups or from users with "Friends Only" privacy settings cannot be accessed by standard public downloaders. However, if *you* can see the video, you can download it using the "Source Code" method on a computer.
            </p>
            <h4 className="font-semibold text-heading-accent mb-2">The Private Download Trick (PC/Mac):</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-2">
              <li>Open the private video in your browser (Chrome/Firefox).</li>
              <li>Press <strong>CTRL + U</strong> (Windows) or <strong>Command + Option + U</strong> (Mac) to view "Page Source".</li>
              <li>Select All (CTRL+A) and Copy (CTRL+C) the entire text code.</li>
              <li>Paste this code into a "Private Video Downloader" tool (Feature Coming Soon to FastTools interface).</li>
            </ol>
            <p className="text-xs text-muted-foreground mt-3 italic">
              <strong>Security Note:</strong> Never give your Facebook password to any app. Our method uses the page source, which is safe and doesn't require login credentials.
            </p>
          </div>
        </article>

        {/* Facebook Watch / Live */}
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Video className="h-6 w-6 text-primary" />
            Download Facebook Live & Watch Videos
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Missed a live stream? Once a Facebook Live broadcast ends and is posted to the timeline, it becomes a regular video. You can use FastTools to download these long-form videos (Facebook Watch) in <strong>HD quality</strong> to watch offline. This is perfect for long tutorials, gaming streams, or church services you want to keep.
          </p>
        </article>

        {/* Audio / MP3 */}
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Music className="h-6 w-6 text-primary" />
            Facebook to MP3 Converter
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Sometimes you just need the sound. Whether it's a cover song, a podcast snippet, or a motivational speech, our tool doubles as a <strong>Facebook to MP3 converter</strong>. We strip the video track and give you a high-quality audio file (up to 320kbps) compatible with any music player.
          </p>
        </article>

        {/* Competitor Comparison */}
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">FastTools vs. SnapSave vs. Apps</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="text-xs uppercase bg-muted text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 border border-border">Feature</th>
                  <th className="px-6 py-3 border border-border bg-primary/10 text-primary font-bold">FastTools</th>
                  <th className="px-6 py-3 border border-border">SnapSave/FDown</th>
                  <th className="px-6 py-3 border border-border">Play Store Apps</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-card border-b border-border">
                  <td className="px-6 py-4 font-medium">Video Quality</td>
                  <td className="px-6 py-4 text-green-500 font-bold">Up to 4K (Original)</td>
                  <td className="px-6 py-4">Up to 4K</td>
                  <td className="px-6 py-4 text-red-500">Often 720p</td>
                </tr>
                <tr className="bg-card border-b border-border">
                  <td className="px-6 py-4 font-medium">Privacy</td>
                  <td className="px-6 py-4 text-green-500 font-bold">No Login Needed</td>
                  <td className="px-6 py-4">No Login Needed</td>
                  <td className="px-6 py-4 text-red-500">Requires Login</td>
                </tr>
                <tr className="bg-card border-b border-border">
                  <td className="px-6 py-4 font-medium">Reels Audio</td>
                  <td className="px-6 py-4 text-green-500 font-bold">Synced Audio</td>
                  <td className="px-6 py-4">Variable</td>
                  <td className="px-6 py-4">Often Muted</td>
                </tr>
                <tr className="bg-card border-b border-border">
                  <td className="px-6 py-4 font-medium">Speed</td>
                  <td className="px-6 py-4 text-green-500 font-bold">Instant (Web)</td>
                  <td className="px-6 py-4">Instant</td>
                  <td className="px-6 py-4 text-red-500">Slow (App Install)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* Mobile Guide */}
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">How to Download on Mobile (iPhone & Android)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg bg-card border border-border">
              <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                iPhone / iPad (iOS)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>No App Needed:</strong> Open <strong>Safari</strong>. Paste the link and download. The video saves to Safari's Download Manager (the 'Aa' icon). Tap the file, click Share, and select <strong>"Save Video"</strong> to move it to your Photos/Camera Roll.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Android
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Easy Mode:</strong> Use <strong>Chrome</strong>. Paste the link and click download. The file goes straight to your "Downloads" folder and appears instantly in your Gallery. It's faster and safer than installing APKs.
              </p>
            </div>
          </div>
        </article>

      </div>
    ),

    proTip: "Always check the video quality settings on the original Facebook video before copying the link. If the original was uploaded in low quality, we can't make it HD. But if it's 4K on Facebook, FastTools will grab that 4K file for you. For downloading private videos, using a computer is much easier than mobile due to the source code copying requirement.",

    faqs: [
      {
        question: "How to download Facebook Reels with audio?",
        answer: "Simply copy the Reel link and paste it into FastTools. Our advanced extractor grabs the full MP4 file with the original audio track included and synced."
      },
      {
        question: "Can I download private Facebook videos?",
        answer: "Yes, but it requires a special method. You cannot just paste a private link. You typically need to copy the 'Page Source' of the video while logged in on a computer. We are working on a dedicated tool for this."
      },
      {
        question: "Why does the video play instead of downloading?",
        answer: "This is a browser setting. If it plays, right-click (or long-press on mobile) the video player and select 'Save Video As'. effectively bypassing the player."
      },
      {
        question: "Is this Facebook Downloader safe?",
        answer: "Yes. We do not ask for your Facebook password, we don't track your download history, and we don't install software on your device. It's completely browser-based and secure."
      },
      {
        question: "Where are videos saved on Android/iPhone?",
        answer: "On Android: 'Downloads' folder and Gallery. On iPhone: 'Files' app (you must manually save to Photos from there)."
      },
      {
        question: "Can I download Live videos?",
        answer: "Yes, but only *after* the live stream has finished processing and is posted to the timeline. You cannot download a stream while it is live."
      }
    ],

    relatedTools: [
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" },
      { name: "X Video Downloader", href: "/social-media-tools/x-video-downloader" }
    ]
  }
})

export const metadata: Metadata = toolConfig.metadata

export default function FacebookDownloaderPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<UnifiedDownloader defaultPlatform="facebook" placeholder="https://www.facebook.com/watch?v=..." />)} />
}
