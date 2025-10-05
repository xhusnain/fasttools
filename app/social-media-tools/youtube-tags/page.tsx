import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YoutubeTagExtractor } from "@/components/youtube-tag-extractor"

export const metadata: Metadata = {
  title: "YouTube Tag Extractor - Extract Video Tags for SEO | ToolifyHub",
  description:
    "Extract tags from any YouTube video for SEO research and content ideas. Free YouTube tag extractor tool for content creators.",
  keywords: "youtube tag extractor, youtube tags, video tags, youtube seo, extract youtube tags, youtube tag generator",
}

export default function YoutubeTagsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Social Media Tools", href: "/social-media-tools" },
          { label: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
        ]}
      />

      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">YouTube Tag Extractor</h1>
        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          Extract tags from any YouTube video for SEO research and content ideas. Perfect for content creators and
          marketers.
        </p>
      </div>

      <YoutubeTagExtractor />
    </div>
  )
}
