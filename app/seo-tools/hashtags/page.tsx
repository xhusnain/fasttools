import { HashtagGenerator } from "@/components/hashtag-generator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Free Hashtag Generator | Create Social Media Hashtags Online",
  description:
    "Generate relevant hashtags for Instagram, Twitter, Facebook, and LinkedIn. Increase your social media reach and engagement with trending hashtags.",
  keywords:
    "hashtag generator, instagram hashtags, twitter hashtags, social media hashtags, trending hashtags, hashtag ideas, hashtag finder, best hashtags, tiktok hashtags, youtube hashtags, facebook hashtags, linkedin hashtags, niche hashtags, viral hashtags, growth hashtags, reels hashtags, shorts hashtags, discover hashtags, related hashtags, hashtag suggestions, hashtag strategy, hashtag groups, caption hashtags, branded hashtags, campaign hashtags, community hashtags, event hashtags, location hashtags, geo hashtags, seasonal hashtags, holiday hashtags, industry hashtags, content hashtags, seo hashtags, reach optimization, engagement boost, social growth tools, creator tools, influencer hashtags, small business hashtags, ecommerce hashtags, marketing hashtags, digital marketing hashtags, blog hashtags, travel hashtags, fashion hashtags, fitness hashtags, food hashtags, photography hashtags, tech hashtags, education hashtags, finance hashtags",
  openGraph: {
    title: "Free Hashtag Generator - Create Social Media Hashtags",
    description: "Generate trending hashtags for your social media posts",
    url: "https://www.fasttools.store/seo-tools/hashtags",
    type: "website",
    images: [
      {
        url: "https://www.fasttools.store/og-images/hashtag-generator.png",
        width: 1200,
        height: 630,
        alt: "Free Hashtag Generator - Create Social Media Hashtags",
      },
    ],
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

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <HashtagGenerator />

          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Why Use Hashtags?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hashtags help categorize content and make it discoverable to users interested in specific topics. They're
              essential for increasing visibility on platforms like Instagram, Twitter, and LinkedIn.
            </p>
            <h3 className="text-xl font-semibold text-foreground">How to Pick Better Hashtags</h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Mix broad, niche, and branded hashtags to balance reach and relevance</li>
              <li>Favor hashtags your target audience actually follows or searches</li>
              <li>Rotate sets to avoid repetition and improve discoverability over time</li>
              <li>Keep to platform best practices (e.g., 3–5 focused hashtags on Instagram)</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
