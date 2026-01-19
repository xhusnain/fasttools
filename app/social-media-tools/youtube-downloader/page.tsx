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
    toolName: "YouTube Video Downloader - Free HD MP4 & MP3 Download Online",
    description: "Download YouTube videos in HD, 4K, and 8K quality. Convert YouTube to MP4 or MP3 for free. Works on iPhone, Android, PC, and Mac. No software installation required. Safe, fast, and 100% free.",
    metaTitle: "YouTube Video Downloader - Free HD MP4 & MP3 Download Online",
    metaDescription: "Download YouTube videos in HD, 4K & 8K. Convert to MP4 or MP3 free. Works on all devices. No software needed.",
    path: "/social-media-tools/youtube-downloader",

    header: {
        title: "YouTube Video Downloader",
        description: "Download YouTube videos online in HD, 4K, or 8K quality. Convert any YouTube video to MP4 for offline viewing or extract audio as MP3. Works instantly on iPhone, Android, Windows PC, and Mac—no software installation needed.",
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
            "MP3 Extraction",
            "Shorts Downloader",
            "No Software Required",
            "Audio Muxing"
        ],
        softwareRequirements: "Modern Web Browser (Chrome, Safari, Edge, Firefox)"
    },

    content: {
        overview: "A YouTube Video Downloader is a specialized tool that allows users to save videos from YouTube in HD, 4K, and 8K quality, enabling offline viewing and audio extraction without software installation. FastTools provides this by offering a secure, high-speed, and free solution to download YouTube videos directly in your browser. Looking to save YouTube videos for offline viewing? Our free YouTube video downloader lets you download any public video in HD, Full HD (1080p), 4K, or even 8K quality—directly from your browser. Whether you want to save educational tutorials, music videos, documentaries, or entertainment content, this tool handles it all. Convert YouTube to MP4 for video or extract audio as MP3 for music and podcasts. Unlike sketchy web converters filled with ads and pop-ups, our downloader is completely safe, requires no software installation, and works on all devices including iPhone, iPad, Android phones, Windows PC, MacBook, and Linux.",

        howToSteps: [
            "Find Your Video: Open YouTube in your browser or app and navigate to the video you want to download.",
            "Copy the URL: Copy the video link from the address bar (youtube.com/watch?v=...) or tap Share → Copy Link on mobile.",
            "Paste & Analyze: Paste the URL into the input field above and click Download. We'll fetch all available formats.",
            "Choose Format: Select MP4 for video or MP3 for audio-only. Your download starts instantly—no waiting."
        ],

        features: [
            "HD, 4K & 8K Video Quality: Download YouTube videos in the highest resolution available. We support standard HD (720p), Full HD (1080p), 4K Ultra HD, and even 8K when the source video offers it. The quality you get depends on what the uploader provided.",
            "YouTube to MP4 Converter: Save videos in the universally compatible MP4 format. MP4 files play on virtually every device—iPhones, Android phones, Windows PCs, Macs, smart TVs, and gaming consoles. No codec issues or compatibility problems.",
            "YouTube to MP3 Audio Extractor: Want just the audio? Extract high-quality MP3 files from any YouTube video. Perfect for saving music, podcasts, audiobooks, lectures, or any audio content for offline listening.",
            "No Software Installation Required: Everything works directly in your browser. No need to download suspicious .exe files, browser extensions, or mobile apps. Just paste, click, and download—it's that simple.",
            "Works on All Devices: Whether you're on an iPhone, Android phone, iPad, Windows laptop, MacBook, or Chromebook—our YouTube downloader works seamlessly. Fully responsive design optimized for both mobile and desktop.",
            "YouTube Shorts Downloader: Download YouTube Shorts just like regular videos. Simply copy the Shorts URL (youtube.com/shorts/...) and paste it here. Same fast, easy process."
        ],

        useCases: [
            "Offline Viewing During Travel: Save videos before flights, road trips, or commutes where you won't have internet. Download educational content, entertainment, or your favorite creators' videos to watch anywhere, anytime.",
            "Educational Content & Research: Download tutorials, online courses, lectures, and educational documentaries for studying. Students and researchers can build personal libraries of learning materials for offline reference.",
            "Music & Podcast Archival: Extract audio from music videos, live performances, or podcast episodes. Build your own MP3 collection of content that might not be available on streaming services.",
            "Content Creator Backup: Back up your own YouTube videos as a safety measure. Keep local copies of content you've created in case of account issues or platform changes."
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

                {/* Safety Section - Addressing the #1 User Concern */}
                <article className="p-6 rounded-lg bg-card border border-border shadow-sm">
                    <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-500" />
                        Is This YouTube Downloader Safe?
                    </h2>
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong>Yes, absolutely.</strong> Unlike many free YouTube video downloaders that bombard you with pop-ups, fake "Download" buttons, and malware-laden ads, our tool is designed with security as the top priority. We don't require you to install any software, browser extensions, or mobile apps. Everything processes securely in your browser using HTTPS encryption.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong>How to spot unsafe downloaders:</strong> Be cautious of sites that ask you to "Allow Notifications" (these lead to spam), show multiple pop-up windows, or prompt you to download .exe files. Never search for "cracked" YouTube downloader software—these are commonly bundled with password-stealing malware. Stick to trusted, ad-free tools like ours.
                        </p>
                    </div>
                </article>

                {/* Technical Deep Dive - Establishes Expertise */}
                <article className="space-y-6">
                    <div className="overflow-x-auto my-8">
                        <h3 className="text-xl font-semibold text-heading-accent mb-4">FastTools vs. Competitors</h3>
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="text-xs uppercase bg-muted text-muted-foreground">
                                <tr>
                                    <th className="px-6 py-3 border border-border">Feature</th>
                                    <th className="px-6 py-3 border border-border bg-primary/10 text-primary font-bold">FastTools</th>
                                    <th className="px-6 py-3 border border-border">Generic Downloaders</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-card border-b border-border">
                                    <td className="px-6 py-4 font-medium">Video Quality</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">Up to 8K HDR</td>
                                    <td className="px-6 py-4 text-muted-foreground">Max 720p/1080p</td>
                                </tr>
                                <tr className="bg-card border-b border-border">
                                    <td className="px-6 py-4 font-medium">Audio Muxing</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">Auto-Merge Audio/Video</td>
                                    <td className="px-6 py-4 text-muted-foreground">Often Silent Videos</td>
                                </tr>
                                <tr className="bg-card border-b border-border">
                                    <td className="px-6 py-4 font-medium">Shorts Support</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">Full Support</td>
                                    <td className="px-6 py-4 text-muted-foreground">Limited/None</td>
                                </tr>
                                <tr className="bg-card border-b border-border">
                                    <td className="px-6 py-4 font-medium">Safety</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">No Ads/Malware</td>
                                    <td className="px-6 py-4 text-muted-foreground">Popups & Risks</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground">Understanding YouTube Video Downloads</h2>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-heading-accent">Why Do Some Downloaded Videos Have No Sound?</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            This is one of the most common frustrations with YouTube downloaders. Here's why it happens: YouTube uses a technology called DASH (Dynamic Adaptive Streaming over HTTP) that streams video and audio as <em>separate files</em>. High-quality videos (1080p and above) are often split this way to save bandwidth.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Basic downloaders might only grab the video track, leaving you with a silent file. Our downloader automatically "muxes" (merges) the video and audio streams together, ensuring you always get complete files with both picture and sound.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-heading-accent">What Video Quality Can I Download?</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            The maximum quality depends on what the original uploader provided. If a video was uploaded in 4K, you can download it in 4K. If it was uploaded in 720p, that's the maximum available. We always aim to provide the highest quality option.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            <strong>Resolution guide:</strong> 720p (HD) is good for phones and tablets. 1080p (Full HD) is ideal for laptops and monitors. 4K (Ultra HD) and 8K are best for large TVs or archival purposes where you want maximum quality.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-heading-accent">The "320kbps MP3" Myth</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Many people search for "YouTube to MP3 320kbps" believing this is the best audio quality. Here's the truth: <strong>YouTube doesn't stream audio at 320kbps.</strong> The actual audio quality on YouTube maxes out around 160kbps (Opus codec) or 128kbps (AAC codec).
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            When a converter claims to give you "320kbps MP3," it's simply converting the lower-quality source into a larger file—this doesn't improve quality and can actually introduce audio artifacts. The smart approach is to download audio in its native format for the best quality-to-size ratio.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-heading-accent">Complete Toolkit for Creators</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            Downloading videos is just one part of the creator journey. To truly optimize your channel, you need to analyze what works. Check out our <a href="/social-media-tools/youtube-tags" className="text-primary hover:underline">YouTube Tag Extractor</a> to spy on competitor keywords, or use the <a href="/social-media-tools/youtube-thumbnail" className="text-primary hover:underline">Thumbnail Downloader</a> to save high-res inspiration for your next video design.
                        </p>
                    </div>
                </article>

                {/* Device-Specific Guides */}
                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Device-Specific Download Guides</h2>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-5 rounded-lg bg-card border border-border">
                            <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                                <Smartphone className="h-5 w-5" />
                                YouTube Downloader for iPhone & iPad
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                iOS makes downloading tricky due to Apple's restrictions. Our web-based tool works in Safari—just paste the URL and download. The file saves directly to your Photos or Files app. No need for complicated Shortcuts or third-party apps.
                            </p>
                        </div>

                        <div className="p-5 rounded-lg bg-card border border-border">
                            <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                                <Smartphone className="h-5 w-5" />
                                YouTube Downloader for Android
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Android users have the easiest experience. Use our tool in Chrome or any browser. Downloads save to your Downloads folder and are playable in your gallery app. Works on Samsung, Pixel, OnePlus, Xiaomi, and all Android devices.
                            </p>
                        </div>

                        <div className="p-5 rounded-lg bg-card border border-border">
                            <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                                <Monitor className="h-5 w-5" />
                                YouTube Downloader for PC & Windows
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                On Windows, simply use Chrome, Firefox, or Edge. Copy the YouTube URL, paste it here, and click Download. Files save to your Downloads folder. No software installation, no registry changes, no bloatware.
                            </p>
                        </div>

                        <div className="p-5 rounded-lg bg-card border border-border">
                            <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                                <Monitor className="h-5 w-5" />
                                YouTube Downloader for Mac & MacBook
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Mac users can use Safari, Chrome, or Firefox. The process is identical to Windows—paste and download. Videos save in MP4 format that plays natively in QuickTime and all Mac media players.
                            </p>
                        </div>
                    </div>
                </article>

                {/* Legal Section - Builds Trust */}
                <article className="p-6 rounded-lg bg-card border border-border shadow-sm">
                    <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-primary" />
                        Legal Considerations & Fair Use
                    </h2>
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong>Is downloading YouTube videos legal?</strong> It depends on the content and how you use it. Downloading public domain content, Creative Commons videos, or your own uploads is completely legal. Downloading copyrighted material (music, movies, TV shows) for personal offline viewing exists in a legal grey area similar to recording TV shows on a VCR.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong>What's clearly not okay:</strong> Redistributing downloaded content, uploading it elsewhere, or using it commercially without permission. Always respect content creators' rights. If you're downloading music, consider supporting artists by purchasing their work or using licensed streaming services.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong>YouTube's Terms of Service:</strong> Technically, downloading videos violates YouTube's ToS. The primary risk is account termination, though this is extremely rare for individual users and typically only enforced against large-scale scrapers.
                        </p>
                    </div>
                </article>
            </div>
        ),

        faqs: [
            {
                question: "What is the safest YouTube video downloader to use?",
                answer: "The safest YouTube downloaders are web-based tools that don't require software installation. Avoid sites with pop-ups, fake download buttons, or requests to 'Allow Notifications.' Never download 'cracked' software—these commonly contain malware. Our tool processes everything in your browser with no downloads required."
            },
            {
                question: "Why does my downloaded YouTube video have no sound?",
                answer: "YouTube streams high-quality videos (1080p+) with separate video and audio tracks. Basic downloaders may only grab the video. Our tool automatically merges both tracks, so you always get complete files with sound. If you're using another tool and getting silent videos, look for one that supports 'muxing' or audio merging."
            },
            {
                question: "Can I download YouTube videos on iPhone without an app?",
                answer: "Yes! Our web-based YouTube downloader works directly in Safari on iPhone and iPad. Just paste the video URL and download—no apps, no Shortcuts, no Scriptable required. The video saves to your Photos or Files app depending on your iOS settings."
            },
            {
                question: "How do I download YouTube videos as MP3 audio files?",
                answer: "Simply paste the YouTube URL into our downloader and select the MP3/Audio option when available. We extract the audio track and convert it to a universally compatible format. This is perfect for music, podcasts, lectures, and any content where you only need the audio."
            },
            {
                question: "Can I download YouTube videos in 4K or 8K quality?",
                answer: "Yes, if the original video was uploaded in 4K or 8K. We provide the highest quality available from the source. Note that 4K/8K videos typically come in MKV or WebM format rather than MP4, which may require VLC or a modern media player."
            },
            {
                question: "Is YouTube to MP3 320kbps real?",
                answer: "No. YouTube's maximum audio quality is around 160kbps (Opus) or 128kbps (AAC). Tools claiming '320kbps' are just converting the same audio to a larger file—this doesn't improve quality and can actually reduce it. For best results, keep audio in its original format."
            },
            {
                question: "Can I download entire YouTube playlists at once?",
                answer: "Our web tool is optimized for individual videos. For bulk playlist downloads, power users often use command-line tools like yt-dlp, which can download entire channels or playlists automatically with a single command."
            },
            {
                question: "Why is my YouTube download so slow?",
                answer: "YouTube actively throttles non-browser downloads to discourage scrapers. If you're experiencing slow speeds, the source server may be rate-limiting. Try downloading during off-peak hours, or wait a few minutes and try again."
            },
            {
                question: "Can I download age-restricted or private YouTube videos?",
                answer: "Our tool only works with publicly accessible videos. Age-restricted content requires authentication, and private videos are only visible to authorized accounts. These restrictions are set by the uploader and YouTube's policies."
            },
            {
                question: "Is downloading YouTube videos legal?",
                answer: "It depends on the content. Downloading your own videos, public domain content, or Creative Commons material is legal. Downloading copyrighted content for personal offline viewing is a grey area. Redistributing or selling downloaded content is illegal. Always respect creators' rights."
            },
            {
                question: "What's the best format for saving YouTube videos?",
                answer: "MP4 is best for compatibility—it plays on virtually every device. For archival or maximum quality, MKV (Matroska) supports more codecs and is more resilient to corruption. If you're unsure, stick with MP4."
            },
            {
                question: "How do I download YouTube Shorts?",
                answer: "YouTube Shorts work exactly like regular videos. Copy the Shorts URL (youtube.com/shorts/...) and paste it into our downloader. The process is identical—we'll fetch the video and provide download options."
            }
        ],

        relatedTools: [
            { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
            { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
            { name: "Facebook Downloader", href: "/social-media-tools/facebook-downloader" },
            { name: "X Video Downloader", href: "/social-media-tools/x-video-downloader" }
        ]
    }
})

export const metadata: Metadata = toolConfig.metadata

export default function YoutubeDownloaderPage() {
    return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeDownloader />)} />
}
