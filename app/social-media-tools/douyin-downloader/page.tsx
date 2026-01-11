import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { DouyinDownloader } from "@/components/social-media/douyin-downloader/douyin-downloader"
import { Smartphone, Download, Zap, Film } from "lucide-react"
import Image from "next/image"

const toolConfig = createToolConfig({
    toolName: "Douyin Downloader (抖音下载) - No Watermark HD",
    description: "Download Douyin videos (Chinese TikTok) without watermark. 抖音视频下载无水印 (Douyin Video Download No Watermark). Free, fast, and secure HD saver.",
    metaTitle: "Douyin Downloader (抖音下载) - No Watermark Video Saver Online",
    metaDescription: "Download Douyin videos without watermark (抖音无水印下载). Fast, free, and secure online Douyin downloader. Save HD videos from Chinese TikTok. 免费在线抖音视频下载工具。",
    path: "/social-media-tools/douyin-downloader",

    header: {
        title: "Douyin Downloader (抖音下载)",
        description: "Download Douyin videos without watermark in HD. 免费下载抖音无水印视频. The fastest online tool for saving Chinese TikTok content.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    schemaOptions: {
        applicationCategory: "MultimediaApplication",
        price: "0",
        ratingValue: "4.8",
        ratingCount: "1500"
    },

    breadcrumbs: [
        { label: "Social Media Tools", href: "/social-media-tools" },
        { label: "Douyin Downloader", href: "/social-media-tools/douyin-downloader" },
    ],

    content: {
        overview: "A Douyin Downloader (抖音下载器) is a specialized tool designed to bypass region restrictions and remove watermarks from videos hosted on Douyin (the Chinese version of TikTok). FastTools provides this by offering a direct link parser that extracts the original HD video file. Our Douyin Downloader (抖音下载器) is the ultimate tool for saving videos from 'Chinese TikTok' without the distracting watermark. Douyin (抖音) is the premier short-video platform in China, but sharing content elsewhere often carries a watermark. Our tool removes it automatically, giving you the pristine, original HD file. Whether you need 抖音无水印 (Douyin no watermark) videos for editing, archiving, or sharing, our service provides a fast and free solution.",

        howToSteps: [
            "Find Video: Open the Douyin app and find the video you want to save.",
            "Copy Link: Tap the 'Share' arrow icon and select 'Copy Link' (复制链接).",
            "Paste & Download: Paste the link into the box above and click download. We handle the watermark removal automatically."
        ],

        features: [
            "No Watermark (无水印): Advanced technology to remove the Douyin logo cleanly.",
            "HD Quality (高清视频): Download videos in the highest resolution available (1080p+).",
            "Free & Fast (免费快速): No registration needed, unlimited downloads in seconds.",
            "Mobile Optimized: Works perfectly on iPhone (iOS) and Android devices.",
            "Chinese Support: Specifically optimized for Douyin's servers and URL structure."
        ],

        useCases: [
            "Content Creation: Use clean Douyin footage for reaction videos or compilations.",
            "Archiving: Save your favorite 抖音 (Douyin) trends and memes.",
            "Cross-Platform: Share cool Chinese TikTok videos to Instagram easily.",
            "Offline Viewing: Watch downloaded videos without internet."
        ],

        aboutTool: (
            <div className="space-y-12">
                <article className="p-8 rounded-xl bg-card border border-border/60 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                        <Zap className="h-6 w-6 text-yellow-500" />
                        Why Use a Douyin Downloader (抖音下载器)?
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Douyin (抖音) is a hub of viral creativity in China. However, the app forces a watermark on saved videos. Our <strong>Douyin Downloader No Watermark</strong> (抖音无水印下载) solves this by fetching the original file directly from the server.
                        </p>
                        <p>
                            For Chinese users and global creators alike, having a reliable <strong>Douyin video saver</strong> is essential. We allow you to resolve douyin links (抖音解析) and extract the raw MP4 file instantly.
                        </p>
                    </div>
                </article>

                <div className="overflow-x-auto my-8">
                    <h3 className="text-xl font-semibold text-heading-accent mb-4">FastTools vs. Competitors</h3>
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="text-xs uppercase bg-muted text-muted-foreground">
                            <tr>
                                <th className="px-6 py-3 border border-border">Feature</th>
                                <th className="px-6 py-3 border border-border bg-primary/10 text-primary font-bold">FastTools</th>
                                <th className="px-6 py-3 border border-border">Other Downloaders</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-card border-b border-border">
                                <td className="px-6 py-4 font-medium">Server Location</td>
                                <td className="px-6 py-4 text-green-500 font-bold">Optimized for China</td>
                                <td className="px-6 py-4 text-muted-foreground">Often Blocked</td>
                            </tr>
                            <tr className="bg-card border-b border-border">
                                <td className="px-6 py-4 font-medium">Watermark</td>
                                <td className="px-6 py-4 text-green-500 font-bold">Removed completely</td>
                                <td className="px-6 py-4 text-muted-foreground">Often Fails</td>
                            </tr>
                            <tr className="bg-card border-b border-border">
                                <td className="px-6 py-4 font-medium">Cost</td>
                                <td className="px-6 py-4 text-green-500 font-bold">Free</td>
                                <td className="px-6 py-4 text-muted-foreground">Paid / VIP</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="my-8">
                    <Image
                        src="/images/tools/douyin-downloader.png"
                        alt="Douyin Downloader No Watermark Feature Card"
                        width={800}
                        height={450}
                        className="rounded-xl shadow-lg border border-border/50"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <article className="space-y-6">
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                            <Film className="h-5 w-5 text-blue-500" />
                            Douyin vs TikTok
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Douyin and TikTok are separate apps. You cannot use a standard TikTok downloader for Douyin links (v.douyin.com). Our tool is specifically built to handle <strong>Douyin video download</strong> requests, bypassing the unique restrictions of the Chinese platform.
                        </p>
                    </article>

                    <article className="space-y-6">
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                            <Smartphone className="h-5 w-5 text-purple-500" />
                            Universal Compatibility
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Whether you are searching for "抖音视频下载" on Baidu or "Douyin Downloader" on Google, our tool works on all devices. It is fully compatible with iOS (Safari), Android (Chrome), Windows, and macOS.
                        </p>
                    </article>
                </div>
            </div>
        ),

        faqs: [
            {
                question: "How to download Douyin videos without watermark? (如何下载抖音无水印视频?)",
                answer: "Simply copy the video link from the Douyin app (click share > 复制链接), paste it into our tool, and tap Download. We will parse the video and provide a clean MP4 file."
            },
            {
                question: "Is this tool free? (这个工具是免费的吗?)",
                answer: "Yes, it is 100% free. You can use our Douyin Downloader (抖音下载器) as many times as you want without any cost or registration."
            },
            {
                question: "Can I download images/photos from Douyin? (可以下载抖音图片吗?)",
                answer: "Yes! Our tool automatically detects if a link is a photo carousel (图文) and allows you to download all images in HD quality."
            },
            {
                question: "Where are videos saved? (视频保存在哪里?)",
                answer: "On mobile, videos are saved to your 'Files' app or Gallery depending on your browser settings. On PC, they are saved to your default 'Downloads' folder."
            },
            {
                question: "Why can't I download some videos?",
                answer: "Ensure the video is public. Private videos or videos from private accounts cannot be accessed by any online downloader."
            }
        ],

        relatedTools: [
            { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
            { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
            { name: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" }
        ]
    }
})

export const metadata = toolConfig.metadata

export default function DouyinDownloaderPage() {
    return <ToolPageLayout {...toolConfig.getLayoutProps(<DouyinDownloader />)} />
}
