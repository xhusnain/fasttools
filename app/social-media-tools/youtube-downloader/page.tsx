import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { AlertCircle, Shield, Zap, Smartphone, Monitor, Music, Video } from "lucide-react"
import dynamic from "next/dynamic"

const YoutubeDownloader = dynamic(() => import("@/components/social-media/youtube-downloader/youtube-downloader").then(mod => mod.YoutubeDownloader), {
    loading: () => <div className="min-h-[600px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
})

const toolConfig = createToolConfig({
    toolName: "YouTube Downloader - Download YouTube Videos Free | YouTube to MP4, MP3",
    description: "Fast & Free YouTube Downloader. Download videos in 8K/4K/HD, convert to MP3/MP4, and save Shorts. No software required, works on iPhone, Android, & PC.",
    metaTitle: "YouTube Downloader - Download YouTube Videos Free | YouTube to MP4, MP3",
    metaDescription: "Fast & Free YouTube Downloader. Download videos in 8K/4K/HD, convert to MP3/MP4, and save Shorts. No software required, works on iPhone, Android, & PC.",
    path: "/social-media-tools/youtube-downloader",

    header: {
        title: "YouTube Downloader - Download YouTube Videos Free | YouTube to MP4, MP3",
        description: "Fast & Free YouTube Downloader. Download videos in 8K/4K/HD, convert to MP3/MP4, and save Shorts. No software required, works on iPhone, Android, & PC. Simply paste the URL and download instantly.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    breadcrumbs: [
        { label: "Social Media Tools", href: "/social-media-tools" },
        { label: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" },
    ],

    schemaOptions: {
        applicationCategory: "MultimediaApplication",
        price: "0",
        ratingValue: "4.9",
        ratingCount: "50000",
        alternateName: "YouTube Ripper, YT to MP4, YouTube Saver, YouTube Video Downloader",
        featureList: [
            "8K Video Support",
            "MP3 Extraction (320kbps support)",
            "Shorts Downloader",
            "No Software Required",
            "Audio Muxing (No Silent Videos)",
            "Unlimited Free Downloads",
            "Cross-Platform (iOS, Android, PC)"
        ],
        softwareRequirements: "Modern Web Browser (Chrome, Safari, Edge, Firefox)"
    },

    content: {
        overview: "YouTube Downloader is a premium, free online tool designed for speed and quality. While YouTube doesn't offer a native way to save content, our downloader bridges that gap, allowing you to download YouTube videos, convert YouTube to MP4, and extract audio as MP3 files instantly. We support resolutions up to 8K HDR and ensure every download is a complete file with both video and audio—solving the common 'silent video' issue found in other tools. Whether you're archiving content, saving tutorials for offline study, or keeping your favorite music videos, FastTools provides a secure, ad-light, and unlimited experience. No registration is needed; just paste your link and get your file in seconds. Works flawlessly on iPhone, Android, Mac, and Windows.",

        howToSteps: [
            "Find the video: Open YouTube and navigate to the video or Short you want to download. Ensure the content is publicly available.",
            "Copy the URL: Tap 'Share' and select 'Copy Link', or copy the address directly from your browser bar (supports youtube.com and youtu.be links).",
            "Open FastTools: Go to our YouTube Downloader page in any browser (Chrome, Safari, etc.) on your phone or PC.",
            "Paste & Process: Paste the link into the input box. Our tool instantly fetches the highest quality video and audio streams available from YouTube's CDNs.",
            "Download: Select 'MP4' for video (up to 8K) or 'MP3' for audio. Click the download button, and the file will save directly to your device's Photos app or Downloads folder."
        ],

        features: [
            "Download in Max Quality (Up to 8K): Don't settle for blurry videos. We fetch the highest resolution available—from standard HD (720p) and Full HD (1080p) up to crystal-clear 4K and 8K HDR (VP9/AV1 codecs).",
            "Complete Files with Audio: Many downloaders return silent files for 1080p+ videos due to YouTube's streaming tech. We automatically 'mux' (merge) video and audio tracks, ensuring you get a perfect, playable file every time.",
            "YouTube to MP3 Converter: Need just the sound? Extract high-fidelity audio from any video. We convert to universally compatible MP3 format (AAC/Opus source) without unnecessary re-encoding that degrades quality.",
            "100% Free & Unlimited: No hidden fees, no daily limits, and no 'premium' speed caps. Download as many videos as you want, completely free.",
            "iPhone & Android Ready: Optimized for mobile. On iPhone (iOS 14+), save directly to the Files or Photos app. On Android, files go straight to your Downloads folder for easy access.",
            "Safe & Secure: No shady software installers or browser extensions required. Everything happens in your browser, keeping your device safe from malware found in desktop downloader apps.",
            "Instant Processing: Our real-time engine resolves download links in under 3 seconds, eliminating long queue times."
        ],

        useCases: [
            "Offline Travel Entertainment: Download movies and vlogs for flights or road trips where internet is spotty.",
            "Students & Researchers: Archive educational tutorials, lectures, and documentaries for distraction-free offline study.",
            "Content Creators: Download your own uploaded videos to create high-quality backups or repurpose content for other platforms.",
            "Music Collections: Build a personal library of live performances, covers, and podcasts."
        ],

        aboutTool: (
            <div className="space-y-8">
                {/* Hero Image */}
                <div className="relative w-full aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-lg">
                    <img
                        src="/images/youtube-downloader-hero.png"
                        alt="YouTube Video Downloader - Download HD videos and MP3 audio"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Safety Section */}
                <article className="p-6 rounded-lg bg-card border border-border shadow-sm">
                    <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-500" />
                        Is This YouTube Downloader Safe?
                    </h2>
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong>Yes, purely browser-based.</strong> We've stripped away the risks associated with traditional downloaders. No .exe files, no extensions, and no intrusive notification requests. Your download is processed securely over HTTPS, and we do not store your user data or download history.
                        </p>
                    </div>
                </article>

                {/* Technical Comparison */}
                <article className="space-y-6">
                    <div className="overflow-x-auto my-8">
                        <h3 className="text-xl font-semibold text-heading-accent mb-4">Why Choose FastTools?</h3>
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="text-xs uppercase bg-muted text-muted-foreground">
                                <tr>
                                    <th className="px-6 py-3 border border-border">Feature</th>
                                    <th className="px-6 py-3 border border-border bg-primary/10 text-primary font-bold">FastTools</th>
                                    <th className="px-6 py-3 border border-border">Others</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-card border-b border-border">
                                    <td className="px-6 py-4 font-medium">Video Quality</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">Up to 8K HDR (Original Quality)</td>
                                    <td className="px-6 py-4 text-muted-foreground">Often capped at 720p</td>
                                </tr>
                                <tr className="bg-card border-b border-border">
                                    <td className="px-6 py-4 font-medium">Audio Support</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">Auto-Merge (Video + Sound)</td>
                                    <td className="px-6 py-4 text-muted-foreground">Silent 1080p downloads</td>
                                </tr>
                                <tr className="bg-card border-b border-border">
                                    <td className="px-6 py-4 font-medium">Shorts Support</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">Full Support</td>
                                    <td className="px-6 py-4 text-muted-foreground">Hit or Miss</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-heading-accent">Why no sound on some downloads?</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            YouTube splits high-quality video (1080p+) and audio into separate streams to save bandwidth (DASH technology). Basic downloaders only grab the video stream. FastTools is advanced—we download both and stitch them together on the fly, so you get a perfect file.
                        </p>
                    </div>
                </article >

                {/* Device Guides */}
                < article className="space-y-6" >
                    <h2 className="text-2xl font-bold text-foreground">How to Download on Any Device</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-5 rounded-lg bg-card border border-border">
                            <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                                <Smartphone className="h-5 w-5" />
                                iPhone & iPad (iOS)
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Use Safari. Paste the link, click download, and when the prompt appears, tap "Download". The file moves to your <strong>Files app</strong> (or iCloud Drive). From there, you can "Save Video" to your Photos tint.
                            </p>
                        </div>

                        <div className="p-5 rounded-lg bg-card border border-border">
                            <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                                <Smartphone className="h-5 w-5" />
                                Android
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Use Chrome (or any browser). Downloads are straightforward—files save instantly to your "Downloads" folder and appear in your Gallery/Photos app.
                            </p>
                        </div>
                    </div>
                </article >
            </div >
        ),

        proTip: "Tip: For the absolute best quality, choose the highest resolution listed (even if file size is larger). You can always compress it later, but you can't add quality back to a blurry video. For audio, standard MP3 is universally compatible, but M4A often provides slightly better quality at the same file size.",

        faqs: [
            {
                question: "Is this YouTube Downloader free?",
                answer: "Yes, 100% free. There are no limits on the number of videos or the duration of content you can download."
            },
            {
                question: "How do I download YouTube videos on iPhone?",
                answer: "Open Safari, visit fasttools.store/youtube-downloader, paste your link, and hit download. The video saves to the 'Downloads' manager in Safari. Tap the magnifying glass icon to find the file in your Files app, then tap 'Share' > 'Save Video' to move it to your Photos."
            },
            {
                question: "Why do you support up to 8K?",
                answer: "We believe in future-proofing. Even if you don't have an 8K screen yet, downloading the highest quality 'master' file ensures your archive looks great on any screen for years to come."
            },
            {
                question: "Can I download audio only?",
                answer: "Absolutely. Choose the 'MP3' option after pasting your link. We extract the audio track directly from the video source for the clearest sound."
            },
            {
                question: "Is it safe to use?",
                answer: "Yes. We don't ask for personal info, we don't install anything on your device, and we use secure connections. It's just a simple tool to help you save content you love."
            }
        ],

        relatedTools: [
            { name: "YouTube Playlist Downloader", href: "/social-media-tools/youtube-playlist-downloader" },
            { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
            { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
            { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" }
        ]
    }
})

export const metadata: Metadata = toolConfig.metadata

export default function YoutubeDownloaderPage() {
    return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeDownloader />)} />
}
