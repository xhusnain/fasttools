import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YoutubeThumbnailDownloader } from "@/components/youtube-thumbnail-downloader"

export const metadata: Metadata = {
  title: "YouTube Thumbnail Downloader - Download HD Thumbnails | ToolifyHub",
  description:
    "Download YouTube video thumbnails in all available quality sizes. Get maximum quality (1280x720), high quality, medium, and standard thumbnails instantly.",
  keywords:
    "youtube thumbnail downloader, download youtube thumbnail, youtube thumbnail, video thumbnail, hd thumbnail, youtube thumbnail extractor",
}

export default function YoutubeThumbnailPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Social Media Tools", href: "/social-media-tools" },
          { label: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
        ]}
      />

      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          YouTube Thumbnail Downloader
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          Download YouTube video thumbnails in all available quality sizes. Get HD thumbnails instantly for your content
          creation needs.
        </p>
      </div>

      <YoutubeThumbnailDownloader />
    </div>
  )
}
