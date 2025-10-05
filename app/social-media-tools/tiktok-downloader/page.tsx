import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { TiktokDownloader } from "@/components/tiktok-downloader"

export const metadata: Metadata = {
  title: "TikTok Video Downloader - Download Without Watermark | ToolifyHub",
  description:
    "Download TikTok videos without watermark. Free TikTok downloader tool for educational purposes. Always respect content creator rights.",
  keywords: "tiktok downloader, download tiktok video, tiktok no watermark, tiktok video download, save tiktok video",
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
    </div>
  )
}
