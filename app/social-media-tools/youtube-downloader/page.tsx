import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { AlertCircle, Shield, Zap, Smartphone, Monitor, Music, Video, Star, CheckCircle } from "lucide-react"
import dynamic from "next/dynamic"

const YoutubeDownloader = dynamic(() => import("@/components/social-media/youtube-downloader/youtube-downloader").then(mod => mod.YoutubeDownloader), {
    loading: () => <div className="min-h-[600px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
})

const toolConfig = createToolConfig({
    toolName: "YouTube Video Downloader (4K & 1080p) - YouTube to MP3/MP4",
    description: "Best YouTube Downloader to save videos in 4K, 1080p, and 8K. Convert YouTube to MP3 audio instantly. Free, unlimited, and works on iPhone/Android/PC. No software required.",
    metaTitle: "YouTube Downloader (4K/1080p) - Convert YouTube to MP3 & MP4",
    metaDescription: "Download YouTube videos in 4K, 1080p, and 8K. Convert YouTube to MP3 instantly. Free YouTube Downloader for iPhone, Android, and PC. No limits.",
    path: "/social-media-tools/youtube-downloader",

    header: {
        title: "YouTube Video Downloader (4K & 1080p) - Save MP3/MP4",
        description: "The fastest way to download YouTube videos in 4K, 1080p, and 8K. Convert to MP3 audio instantly. Works on iPhone, Android, and PC. No software needed.",
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
        alternateName: "YouTube Ripper, YT to MP4, YouTube Saver, YouTube Video Downloader, YouTube to MP3",
        featureList: [
            "8K & 4K Video Support",
            "YouTube to MP3 Converter",
            "YouTube Shorts Downloader",
            "No Software Required",
            "Audio Muxing (No Silent Videos)",
            "Unlimited Free Downloads",
            "Cross-Platform (iOS, Android, PC)"
        ],
        softwareRequirements: "Modern Web Browser (Chrome, Safari, Edge, Firefox)"
    },

    content: {
        overview: (
            <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong>FastTools YouTube Downloader</strong> is the ultimate solution to save content from YouTube. Whether you need to download a <strong>4K educational video</strong>, save a <strong>music video as MP3</strong>, or keep a <strong>YouTube Short</strong> for offline viewing, our tool delivers the highest quality files instantly.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    Unlike other downloaders that limit quality to 720p or provide videos without sound, we use advanced technology to merge video and audio streams, giving you perfect <strong>1080p, 4K, and 8K files</strong>. We also offer a dedicated <strong>YouTube to MP3</strong> converter for high-fidelity audio extraction.
                </p>
            </div>
        ),

        howToSteps: [
            "Copy the YouTube URL: Open the YouTube app or website. Find the video or Short you want to download. Tap 'Share' and select 'Copy Link'.",
            "Paste into FastTools: Go to our YouTube Downloader and paste the link into the input box.",
            "Choose Format: Select 'Video' for MP4 (up to 8K) or 'Audio' for MP3.",
            "Download: Click the 'Download' button. The file will save directly to your device's storage."
        ],

        features: [
            "4K & 8K Downloader: Save videos in their original crystal-clear resolution (2160p, 4320p).",
            "YouTube to MP3: Convert any video into a high-quality audio file (320kbps supported).",
            "Shorts Downloader: Full support for downloading vertical YouTube Shorts videos.",
            "No Silent Videos: We automatically merge video and audio tracks for 1080p+ downloads.",
            "Unlimited Downloads: No daily limits, no speed throttling, and 100% free.",
            "Mobile Optimized: Works perfectly on iPhone (Safari) and Android (Chrome) without apps.",
            "Secure & Private: Browser-based processing means no malware risks from installing software."
        ],

        useCases: [
            "Travel: Watch movies and vlogs offline during flights or road trips.",
            "Education: Archive tutorials and lectures for distraction-free study.",
            "Content Creation: Download your own videos for backup or repurposing.",
            "Music: Build an offline playlist of your favorite tracks and podcasts."
        ],

        aboutTool: (
            <div className="space-y-8">
                {/* Safety Section */}
                <article className="p-6 rounded-lg bg-card border border-border shadow-sm">
                    <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-500" />
                        Is This YouTube Downloader Safe?
                    </h2>
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong>Yes, absolutely.</strong> We operate entirely in your browser. This means:
                            <ul className="list-disc list-inside mt-2 ml-2">
                                <li>No dangerous software (.exe) to install.</li>
                                <li>No browser extensions that track your history.</li>
                                <li>No account registration or personal data required.</li>
                            </ul>
                            Your connection is secured with SSL encryption, ensuring a safe and private experience.
                        </p>
                    </div>
                </article>

                {/* Technical Comparison */}
                <article className="space-y-6">
                    <div className="overflow-x-auto my-8">
                        <h3 className="text-xl font-semibold text-heading-accent mb-4">FastTools vs Generic Downloaders</h3>
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
                                    <td className="px-6 py-4 font-medium">Max Resolution</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">8K / 4K (Original)</td>
                                    <td className="px-6 py-4 text-muted-foreground">Often capped at 720p</td>
                                </tr>
                                <tr className="bg-card border-b border-border">
                                    <td className="px-6 py-4 font-medium">Audio in HD</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">Included (Auto-Merge)</td>
                                    <td className="px-6 py-4 text-muted-foreground">Silent (Video Only)</td>
                                </tr>
                                <tr className="bg-card border-b border-border">
                                    <td className="px-6 py-4 font-medium">Shorts Support</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">Full Support</td>
                                    <td className="px-6 py-4 text-muted-foreground">Often Fails</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article >

                <article className="space-y-6">
                     <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Music className="h-6 w-6 text-primary" />
                        YouTube to MP3 Converter (High Quality)
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        Looking for just the audio? Our tool doubles as a powerful <strong>YouTube to MP3 converter</strong>. We extract the audio track directly from the source video without re-encoding, ensuring you get the highest possible fidelity (often 128kbps, 192kbps, or 320kbps depending on the original upload).
                    </p>
                </article>

                {/* Device Guides */}
                < article className="space-y-6" >
                    <h2 className="text-2xl font-bold text-foreground">How to Download on Mobile</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="p-5 rounded-lg bg-card border border-border">
                            <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                                <Smartphone className="h-5 w-5" />
                                iPhone & iPad (iOS)
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Use <strong>Safari</strong>. Paste the link and tap download. The file goes to the 'Downloads' manager (top right 'Aa' icon). Open the file, tap 'Share', then 'Save Video' to move it to your Photos app.
                            </p>
                        </div>

                        <div className="p-5 rounded-lg bg-card border border-border">
                            <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                                <Smartphone className="h-5 w-5" />
                                Android
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Use <strong>Chrome</strong>. Downloads are simple: once you click download, the file saves instantly to your 'Downloads' folder and will show up in your Gallery app.
                            </p>
                        </div>
                    </div>
                </article >
            </div >
        ),

        proTip: "For the absolute best video quality, choose the highest resolution listed (even if file size is larger). You can always compress it later, but you can't add quality back to a blurry video. For audio, standard MP3 is universally compatible and great for music.",

        faqs: [
            {
                question: "Is this YouTube Downloader free?",
                answer: "Yes, 100% free. There are no limits on the number of videos you can download."
            },
            {
                question: "How do I download YouTube videos on iPhone?",
                answer: "Open Safari, visit our site, paste your link, and hit download. The video saves to the Safari Downloads manager. From there, you can save it to your Photos app."
            },
            {
                question: "Why do you support up to 8K?",
                answer: "We fetch the 'master' quality file. Even if you don't have an 8K screen, downloading the best quality ensures your video looks amazing on any device."
            },
            {
                question: "Can I convert YouTube to MP3?",
                answer: "Yes! Select the 'Audio' or 'MP3' option after pasting your link. We extract the high-quality audio track for you."
            },
            {
                question: "Why is there no sound on 1080p videos on other sites?",
                answer: "YouTube separates audio and video for high resolutions to save data. Most sites only grab the video. We automatically merge them back together so you get a perfect file."
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
