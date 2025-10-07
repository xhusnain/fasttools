import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YoutubeThumbnailDownloader } from "@/components/youtube-thumbnail-downloader"

export const metadata: Metadata = {
  title: "YouTube Thumbnail Downloader - Download HD Thumbnails | FastTools",
  description:
    "Download YouTube video thumbnails in all available quality sizes. Get maximum quality (1280x720), high quality, medium, and standard thumbnails instantly.",
  keywords:
    "youtube thumbnail downloader, download youtube thumbnail, youtube thumbnail, video thumbnail, hd thumbnail, youtube thumbnail extractor, thumbnail saver, youtube image downloader, mq hq maxresdefault, 1280x720 thumbnail, channel thumbnail, video cover image, social preview image, og:image helper, thumbnail quality checker, creator tools, content repurposing, design reference, brand consistency, thumbnail archive, download your own thumbnails, youtube seo, increase ctr, high contrast thumbnails, readable text on thumbnail, mobile-friendly thumbnail, template thumbnails, thumbnail ideas, thumbnail a/b test, fast downloader, free thumbnail download, online youtube thumbnail tool",
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
      <div className="mt-10 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">Thumbnail Best Practices</h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Use high-contrast visuals with clear focal subjects</li>
          <li>Limit text to a few impactful words; ensure legibility on mobile</li>
          <li>Maintain consistent branding across your channel</li>
          <li>A/B test designs and track CTR in YouTube Analytics</li>
        </ul>
      </div>
    </div>
  )
}
