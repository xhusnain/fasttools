import type { Metadata } from "next"
import dynamic from "next/dynamic"

const XDownloader = dynamic(() => import("@/components/social-media/x-downloader/x-downloader").then(mod => mod.XDownloader), {
  loading: () => <div className="min-h-150 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import {
  Shield, Zap, Target, AlertCircle, CheckCircle,Smartphone, Star, Scale, Info, Settings,
  Globe, Video, Download
} from "lucide-react"

const toolConfig = createToolConfig({
  toolName: "X Video Downloader (Twitter) - Download HD 1080p & GIFs",
  description: "Download X (Twitter) videos and GIFs in HD 1080p. Save X videos to iPhone, Android, or PC instantly. No login required, 100% free.",
  metaTitle: "X Video Downloader (Twitter) - Download Videos & GIFs HD",
  metaDescription: "Best X Video Downloader (Twitter) to save videos and GIFs in HD 1080p. Download private X videos, save to camera roll. Free, fast, no login.",
  path: "/social-media-tools/x-video-downloader",

  header: {
    title: "X Video Downloader (Twitter) - Download HD 1080p",
    description: "The fastest way to download videos and GIFs from X (formerly Twitter). Save in full HD 1080p. Works on iPhone, Android, PC. No login required.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "X Video Downloader", href: "/social-media-tools/x-video-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    price: "0",
    ratingValue: "4.8",
    ratingCount: "13500",
    alternateName: "Twitter Video Downloader, X Saver, Tweet Video Saver, X GIF Downloader",
    featureList: [
      "No Watermark",
      "HD 1080p Quality",
      "GIF Downloader",
      "Private Video Support",
      "Anonymous"
    ],
    softwareRequirements: "Modern Web Browser (Chrome, Safari, Edge, Firefox)"
  },

  content: {
    overview: (
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          <strong>FastTools X Video Downloader</strong> (formerly Twitter Video Downloader) is the easiest way to save content from X.com. Whether it's a funny meme video, a news clip, or a <strong>GIF</strong>, our tool extracts the highest quality file (up to 1080p) directly from X's servers.
        </p>
        <p className="text-muted-foreground leading-relaxed">
           X (Twitter) compresses videos for playback, but often stores a higher quality version. We find that HD version and let you download it as an <strong>MP4</strong> file to your device. We also convert X GIFs into MP4s so you can share them on other platforms like WhatsApp or Instagram.
        </p>
      </div>
    ),

    howToSteps: [
      "Find the X/Twitter Post: Open the X app or website. Go to the tweet containing the video or GIF.",
      "Copy the Link: Tap the 'Share' icon (arrow) and select 'Copy Link'.",
      "Paste in FastTools: Paste the URL into our X Downloader input box above.",
      "Download: Click 'Get Video'. Choose 'HD 1080p' for best quality or 'SD' for data saving."
    ],

    features: [
      "HD 1080p Downloads: Get the crispest video quality available.",
      "Twitter GIF Downloader: Save GIFs as MP4 video files (since X converts all GIFs to video).",
      "No Watermark: Clean downloads with no branding.",
      "Universal Support: Works on x.com and twitter.com links.",
      "Mobile Ready: Save directly to iPhone Photos (via Safari) or Android Gallery.",
      "100% Anonymous: We don't notify the user or track your downloads.",
      "Fast Processing: Direct CDN access means no waiting in queues."
    ],

    useCases: [
      "Content Curation: Save viral X videos to repost on TikTok or Reels.",
      "News Archiving: Keep important news clips offline.",
      "Meme Collection: Build your library of reaction GIFs and videos.",
      "Offline Viewing: Watch videos later without using data."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Info className="h-6 w-6 text-primary" />
            Download Twitter GIFs (X GIF Saver)
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Did you know that "GIFs" on X are actually small looping videos? That's why you can't right-click and save them as images. Our <strong>X GIF Downloader</strong> detects these loops and lets you download them as <strong>MP4 files</strong>. This format is perfect because it's high quality, small file size, and works on every social media platform.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            X.com vs Twitter.com Links
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Since the rebrand to X, links can look like `x.com/user/status/...` or `twitter.com/user/status/...`.
          </p>
          <div className="p-4 bg-muted/50 rounded-lg border border-border">
            <h4 className="font-semibold text-heading-accent mb-2">We Support Both!</h4>
            <p className="text-sm text-muted-foreground">
              FastTools is fully updated for the X rebrand. You can paste links from either domain, and our engine will automatically detect and process the video. No need to edit the URL manually.
            </p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Smartphone className="h-6 w-6 text-primary" />
            How to Save to iPhone Camera Roll?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2">The iOS Trick</h4>
              <p className="text-sm text-muted-foreground">
                1. Open this page in <strong>Safari</strong>.<br/>
                2. Download the video (it goes to Safari's Downloads manager).<br/>
                3. Tap the 'Aa' or 'Download' icon in the address bar.<br/>
                4. Tap the video {">"} Share icon {">"} <strong>"Save Video"</strong>.<br/>
                5. Check your Photos app!
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2">Android Users</h4>
              <p className="text-sm text-muted-foreground">
                It's simple on Android. Use <strong>Chrome</strong>. The video will download directly to your notification shade and Gallery app.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Star className="h-6 w-6 text-primary" />
            FastTools vs The Rest
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-heading-accent border-r border-border">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-primary border-r border-border">FastTools</th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Others</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 px-4 border-r border-border">Resolution</td>
                  <td className="text-center py-3 px-4 text-heading-accent font-semibold border-r border-border">True 1080p HD</td>
                  <td className="text-center py-3 px-4">Often 720p Upscaled</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 border-r border-border">GIF Support</td>
                  <td className="text-center py-3 px-4 text-heading-accent font-semibold border-r border-border">Yes (MP4 Convert)</td>
                  <td className="text-center py-3 px-4">Hit or Miss</td>
                </tr>
                 <tr className="border-b border-border">
                  <td className="py-3 px-4 border-r border-border">Ads</td>
                  <td className="text-center py-3 px-4 text-heading-accent font-semibold border-r border-border">Minimal</td>
                  <td className="text-center py-3 px-4">Popup Spam</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-primary" />
            Troubleshooting Downloads
          </h2>
           <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2">"Video Not Found"?</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                <li><strong>Private Account:</strong> If the user has a padlock icon, public tools cannot download it.</li>
                <li><strong>Sensitive Content:</strong> Some age-restricted content requires login to view, which blocks downloaders.</li>
                <li><strong>Wrong Link:</strong> Make sure you copied the link to the <em>specific tweet</em>, not the profile.</li>
              </ul>
            </div>
          </div>
        </article>

      </div>
    ),

    proTip: "To find the highest quality version of a video, try to find the original uploader's tweet. Retweets sometimes link to a compressed version. Our tool always attempts to fetch the best stream available, but the source matters!",

    faqs: [
      {
        question: "How to download X videos in 1080p?",
        answer: "Paste the link into FastTools. If the original video was uploaded in 1080p, we will show you a 'Download HD' button. Click that to get the full resolution file."
      },
      {
        question: "Can I download GIFs from Twitter?",
        answer: "Yes! Paste the tweet link containing the GIF. We automatically convert the GIF to an MP4 video file so you can save and share it anywhere."
      },
      {
        question: "Is this tool free?",
        answer: "Yes, 100% free. Unlimited downloads, no subscription needed."
      },
      {
        question: "How to download private X videos?",
        answer: "Public tools cannot access private accounts. You must follow the user to see the video. Downloading requires specialized browser extensions for private content."
      },
      {
        question: "Where is the file saved?",
        answer: "It goes to your browser's default download folder. On PC, check 'Downloads'. On Phone, check 'Files' or 'Gallery'."
      }
    ],

    relatedTools: [
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "Facebook Video Downloader", href: "/social-media-tools/facebook-downloader" },
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" }
    ]
  }
})

export const metadata: Metadata = toolConfig.metadata

export default function XVideoDownloaderPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<XDownloader />)} />
}
