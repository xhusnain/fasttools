import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { TiktokDownloader } from "@/components/tiktok-downloader"

export const metadata: Metadata = {
  title: "TikTok Video Downloader - Download Without Watermark | FastTools",
  description:
    "Download TikTok videos without watermark. Free TikTok downloader tool for educational purposes. Always respect content creator rights.",
  keywords:
    "tiktok downloader, download tiktok video, tiktok no watermark, tiktok video download, save tiktok video, tiktok saver, tiktok mp4 download, download reels, short video downloader, download tiktok hd, tiktok url download, social video downloader, creator tools, content repurposing, video for editing, download for educational use, save for analysis, caption backup, tiktok thumbnail, mobile downloader, desktop downloader, fast tiktok download, free tiktok downloader, online tiktok downloader, watermark remover (not modifying source), brand asset collection, editorial research, social media tools, video seo, content library, video archive, reuse your own content, download your own tiktoks, best practices, copyright respect, creator rights, fair use guidance",
}

export default function TiktokDownloaderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Social Media Tools", href: "/social-media-tools" },
          { label: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
        ]}
      />

      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">TikTok Video Downloader</h1>
        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          Download TikTok videos without watermark. For educational purposes only. Always respect content creator rights
          and copyright laws.
        </p>
      </div>

      <TiktokDownloader />
      <div className="mt-10 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">Usage Guidelines</h2>
        <p className="text-muted-foreground">
          Only download content you own or have permission to use. Follow platform terms and respect copyright laws in
          your region.
        </p>
      </div>
    </div>
  )
}
