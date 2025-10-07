import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YoutubeTagExtractor } from "@/components/youtube-tag-extractor"

export const metadata: Metadata = {
  title: "YouTube Tag Extractor - Extract Video Tags for SEO | FastTools",
  description:
    "Extract tags from any YouTube video for SEO research and content ideas. Free YouTube tag extractor tool for content creators.",
  keywords:
    "youtube tag extractor, youtube tags, video tags, youtube seo, extract youtube tags, youtube tag generator, tags finder, keyword research, video keyword ideas, seo for youtube, ranking tags, long-tail youtube tags, competitor tags, channel tags, niche tags, trending tags, suggested tags, metadata optimization, title and tag alignment, description keywords, topic clusters, content ideas, video discoverability, shorts tags, reels tags, how to find youtube tags, youtube seo tools, creator tools, audience reach, search intent, youtube algorithm, video optimization, increase views, improve impressions, click-through rate, tags best practices, safe tagging, avoid keyword stuffing, multilingual tags, localization tags, brand tags",
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
      <div className="mt-10 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">How to Use Tags Effectively</h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Use a mix of broad, specific, and branded terms</li>
          <li>Align tags with your title, description, and actual content</li>
          <li>Update tags when the video focus changes over time</li>
          <li>Avoid irrelevant tags that can hurt discoverability</li>
        </ul>
      </div>
    </div>
  )
}
