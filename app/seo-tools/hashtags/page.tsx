import { HashtagGenerator } from "@/components/hashtag-generator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Hashtag Generator | Create Social Media Hashtags Online",
  description:
    "Generate relevant hashtags for Instagram, Twitter, Facebook, and LinkedIn. Increase your social media reach and engagement with trending hashtags.",
  keywords: "hashtag generator, instagram hashtags, twitter hashtags, social media hashtags, trending hashtags",
  openGraph: {
    title: "Free Hashtag Generator - Create Social Media Hashtags",
    description: "Generate trending hashtags for your social media posts",
    type: "website",
  },
}

export default function HashtagGeneratorPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "SEO Tools", href: "/seo-tools" },
            { label: "Hashtag Generator", href: "/seo-tools/hashtags" },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Hashtag Generator</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Generate relevant hashtags for your social media posts to increase reach and engagement.
            </p>
          </div>

          <AdSpace slot="content" className="mb-8 h-24" />

          <HashtagGenerator />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Why Use Hashtags?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hashtags help categorize content and make it discoverable to users interested in specific topics. They're
              essential for increasing visibility on platforms like Instagram, Twitter, and LinkedIn.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
