import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AiHashtagSuggester } from "@/components/ai-hashtag-suggester"

export const metadata: Metadata = {
  title: "AI Hashtag Suggester - Generate Relevant Hashtags | FastTools",
  description:
    "Generate relevant hashtags for your social media posts with AI. Perfect for Instagram, TikTok, Twitter, and LinkedIn.",
  keywords: "hashtag generator, Instagram hashtags, TikTok hashtags, social media hashtags, AI hashtags",
}

export default function HashtagSuggesterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Tools", href: "/ai-tools" },
          { label: "Hashtag Suggester", href: "/ai-tools/hashtag-suggester" },
        ]}
      />

      <div className="mt-8 max-w-2xl mx-auto space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">AI Hashtag Suggester</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get relevant hashtag suggestions based on your caption or content. Boost your social media reach with AI.
          </p>
        </div>

        <AiHashtagSuggester />
      </div>
    </div>
  )
}
