import { Metadata } from 'next';
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import Image from "next/image"
import { createToolConfig, UnifiedToolConfig } from "@/lib/create-tool-config"
import { Shield, Smartphone, Monitor, List, CheckCircle2 } from "lucide-react"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"


const configBody: UnifiedToolConfig = {
    toolName: "YouTube Playlist Downloader - Download Entire Playlists | MP4 & MP3",
    description: "Download YouTube playlists in bulk. Save 100+ videos at once to MP4 (4K/8K) or MP3. Free online batch downloader for PC, iPhone & Android. No software required.",
    metaTitle: "YouTube Playlist Downloader - Download Entire Playlists | MP4 & MP3",
    metaDescription: "Download YouTube playlists in bulk. Save 100+ videos at once to MP4 (4K/8K) or MP3. Free online batch downloader for PC, iPhone & Android. No software required.",
    path: "/social-media-tools/youtube-playlist-downloader",

    header: {
        title: "YouTube Playlist Downloader - Download Entire Playlists | MP4 & MP3",
        description: "Download YouTube playlists in bulk. Save 100+ videos at once to MP4 (4K/8K) or MP3. Free online batch downloader for PC, iPhone & Android. No software required.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    schemaOptions: {
        applicationCategory: "MultimediaApplication",
        price: "0",
        ratingValue: "4.8",
        ratingCount: "1250",
        alternateName: "YouTube Batch Downloader, Playlist Saver, Bulk YouTube Downloader",
        featureList: [
            "Bulk Downloading (100+ Videos)",
            "One-Click Playlist Fetch",
            "4K & 8K Batch Support",
            "MP3 Batch Conversion",
            "No Software Required"
        ],
        softwareRequirements: "Modern Web Browser"
    },

    breadcrumbs: [
        { label: "Social Media Tools", href: "/social-media-tools" },
        { label: "YouTube Playlist Downloader", href: "/social-media-tools/youtube-playlist-downloader" },
    ],

    content: {
        overview: "Downloading a YouTube playlist manually—video by video—is a tedious 3-hour chore. FastTools YouTube Playlist Downloader solves this by letting you grab entire collections in seconds. Whether it's a 50-video course, a music album, or a podcast series, our tool fetches every video instantly. You can batch download them as high-quality MP4s (up to 8K) or convert the whole list to MP3 audio. Best of all, it works directly in your browser—no sketchy software to install, no registration, and no limits on how many playlists you can save.",

        howToSteps: [
            "Get the Link: Go to YouTube and copy the URL of the playlist you want to save (looks like youtube.com/playlist?list=...).",
            "Paste & Analyze: Paste the link into FastTools and click 'Get Info'. We'll instantly fetch the metadata for all videos in the list.",
            "Choose Format: Select 'MP4' for video or 'MP3' for audio. You can choose different qualities for individual videos if needed.",
            "Batch Download: Click the download buttons next to the videos you want. Save them to your device instantly without waiting in queues."
        ],

        features: [
            "Batch Download 100+ Videos: Process massive playlists in one go. We support course lists, music compilations, and series without sweat.",
            "4K & 8K Quality Support: We don't compress your videos. If the playlist is in 4K, you get 4K downloads.",
            "MP3 Audio Extraction: Turn a YouTube music playlist into a local MP3 library. Perfect for offline listening.",
            "Browser-Based Engine: Unlike desktop apps that slow down your PC, our cloud-based tool does the heavy lifting. Works on Chrome, Safari, and Edge.",
            "Mobile Friendly: Works perfectly on iPhone (iOS 14+) and Android. Save playlists directly to your phone's storage.",
            "No Registration required: We don't ask for your email. Just paste the link and start downloading."
        ],

        useCases: [
            "Students: Download full MIT OpenCourseWare or Khan Academy playlists for offline study.",
            "Travelers: Save 'Watch Later' playlists for long flights without WiFi.",
            "Music Fans: Archive rare mixes and albums that aren't on Spotify.",
            "Digital Hoarders: Backup your favorite channels before they get deleted."
        ],

        aboutTool: (
            <div className="space-y-8">
                {/* Hero Image */}
                <div className="relative w-full aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-lg bg-muted">
                    <Image
                        src="/images/youtube-playlist-downloader-hero.png"
                        alt="YouTube Playlist Downloader Interface"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <article className="prose dark:prose-invert max-w-none">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                        Why use a Playlist Downloader?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        The average YouTube playlist has 30+ videos. Downloading these one by one would take hours of clicking, copying, and pasting. FastTools automates this. We parse the entire list, give you a clean dashboard of all videos, and let you save them with a single click. It's the difference between manual data entry and a one-click import.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Feature Comparison</h2>
                    <div className="overflow-x-auto my-8">
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
                                    <td className="px-6 py-4 font-medium">Batch Size</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">100+ Videos</td>
                                    <td className="px-6 py-4 text-muted-foreground">Limited (10-20)</td>
                                </tr>
                                <tr className="bg-card border-b border-border">
                                    <td className="px-6 py-4 font-medium">Platform</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">Web / No Install</td>
                                    <td className="px-6 py-4 text-muted-foreground">Requires .exe Install</td>
                                </tr>
                                <tr className="bg-card border-b border-border">
                                    <td className="px-6 py-4 font-medium">Cost</td>
                                    <td className="px-6 py-4 text-green-500 font-bold">100% Free</td>
                                    <td className="px-6 py-4 text-muted-foreground">Paid / Trial</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>
            </div>
        ),

        faqs: [
            {
                question: "Can I download an entire 500-video playlist?",
                answer: "Yes, but we fetch them in batches. Load the first 100, download them, then load the next batch. This ensures your browser doesn't crash from too much data at once."
            },
            {
                question: "Do I need to install an app?",
                answer: "No. FastTools runs entirely in your browser (Chrome, Safari, Firefox). It works on Windows, Mac, iPhone, and Android without any installation."
            },
            {
                question: "Is it really free?",
                answer: "Yes. We support the tool with unobtrusive ads so you don't have to pay a subscription."
            },
            {
                question: "Can I download private playlists?",
                answer: "No. The playlist must be 'Public' or 'Unlisted'. We cannot access private content that requires your Google login."
            }
        ],

        relatedTools: [
            { name: "YouTube Video Downloader", href: "/social-media-tools/youtube-downloader" },
            { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
            { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" }
        ]
    }
}

const toolConfig = createToolConfig(configBody)

export const metadata: Metadata = toolConfig.metadata

export default function YoutubePlaylistDownloaderPage() {
    return (
        <ToolPageLayout {...toolConfig.getLayoutProps(<UnifiedDownloader defaultPlatform="youtube" placeholder="Paste YouTube playlist URL (e.g., https://www.youtube.com/playlist?list=...)" mode="playlist" />)} />
    )
}
