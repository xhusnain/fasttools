import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { Shield, Smartphone, Monitor, List, CheckCircle2 } from "lucide-react"
import { YoutubePlaylistDownloader } from "@/components/social-media/youtube-playlist-downloader/youtube-playlist-downloader";

const toolConfig = createToolConfig({
    toolName: "YouTube Playlist Downloader - Download Entire Playlists Free",
    description: "Download YouTube playlists online for free. Convert entire playlists to MP3 or MP4. Fast, safe, and works on all devices including iPhone, Android, and PC.",
    metaTitle: "YouTube Playlist Downloader - Download Videos & MP3s from Playlists",
    metaDescription: "Free YouTube Playlist Downloader. Download all videos from a YouTube playlist in HD MP4 or MP3 format. No software installation needed. Fast and secure.",
    path: "/social-media-tools/youtube-playlist-downloader",

    header: {
        title: "YouTube Playlist Downloader",
        description: "Download videos from any YouTube playlist. Save entire learning courses, music albums, or video series as MP3 or MP4 files. No account or software required.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    breadcrumbs: [
        { label: "Social Media Tools", href: "/social-media-tools" },
        { label: "YouTube Playlist Downloader", href: "/social-media-tools/youtube-playlist-downloader" },
    ],

    content: {
        overview: "Downloading videos one by one is tedious. Our YouTube Playlist Downloader simplifies the process by letting you see all videos in a playlist and download them efficiently. Whether you're archiving a music playlist, saving an educational course, or keeping a collection of entertainment videos, this tool helps you grab the content you need in high quality (HD, 1080p, 4K) or as MP3 audio.",

        howToSteps: [
            "Find the Playlist: Go to YouTube and open the playlist you want to download.",
            "Copy the Link: Copy the playlist URL from the address bar. It should contain 'list=...'",
            "Paste & Load: Paste the link into the box above and click 'Get Info'.",
            "Download: Browse the list of videos and click the MP3 or Video button for each item you want to save."
        ],

        features: [
            "Batch Processing: View all videos in a playlist instantly without loading each page manually.",
            "HD & 4K Video Support: Download videos in the highest available quality, up to 4K resolution.",
            "MP3 Audio Extraction: Convert playlist videos directly to MP3 format for music or podcasts.",
            "No Software Needed: Works entirely in your browser. No sketchy extensions or programs to install.",
            "Cross-Platform: Works on iPhone, iPad, Android, Windows, Mac, and Linux.",
            "Safe & Secure: No ads, no malware, and strict privacy protection."
        ],

        useCases: [
            "Music Collections: Download your favorite music playlists for offline listening.",
            "Online Courses: Save full tutorial series or lectures to watch without buffering.",
            "Watch Later Lists: Archive your 'Watch Later' or custom playlists for travel or archive.",
            "Content Backup: Creators can backup their own series of videos easily."
        ],

        aboutTool: (
            <div className="space-y-8">
                {/* Hero Image - reusing existing one or generic placeholder logic if specific one not available */}
                <div className="relative w-full aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-lg">
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                        <div className="text-center">
                            <List className="h-16 w-16 mx-auto mb-4 opacity-50" />
                            <p>YouTube Playlist Downloader</p>
                        </div>
                    </div>
                </div>

                <article className="p-6 rounded-lg bg-card border border-border shadow-sm">
                    <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        Why use a Playlist Downloader?
                    </h2>
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Manually visiting 50 different video pages to download a course is time-consuming. A playlist downloader fetches the metadata for every video at once, presenting you with a clean list where you can quickly grab the specific files you need.
                        </p>
                    </div>
                </article>
            </div>
        ),

        faqs: [
            {
                question: "Can I download the entire playlist with one click?",
                answer: "Due to browser limitations and server load, we provide a list of all videos where you can download them individually or in sequence. This ensures you get the specific quality and format you want for each video."
            },
            {
                question: "Is there a limit to the playlist size?",
                answer: "We support playlists with up to 100 videos directly. For larger playlists, you may only see the first batch of videos."
            },
            {
                question: "Does it work with private playlists?",
                answer: "No, the playlist must be Public or Unlisted. We cannot access Private playlists that require your Google account login."
            },
            {
                question: "Is it free?",
                answer: "Yes, this tool is 100% free to use with no hidden fees."
            }
        ],

        relatedTools: [
            { name: "YouTube Video Downloader", href: "/social-media-tools/youtube-downloader" },
            { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
            { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" }
        ]
    }
})

export const metadata = toolConfig.metadata

export default function YoutubePlaylistDownloaderPage() {
    return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubePlaylistDownloader />)} />
}
