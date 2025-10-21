import { MetaTagGenerator } from "@/components/meta-tag-generator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Free Meta Tag Generator | Create SEO-Friendly Meta Tags Online",
  description:
    "Generate SEO-optimized meta tags for your website including title, description, Open Graph, and Twitter cards. Improve search rankings with proper meta tags.",
  keywords:
    "meta tag generator, seo meta tags, open graph tags, twitter cards, meta description generator, seo tools, title tag generator, meta title, meta description, og:title, og:description, og:image, og:url, twitter:title, twitter:description, twitter:image, canonical url, robots meta tag, viewport meta tag, charset meta, favicon meta, apple touch icon, hreflang, language meta, theme-color meta, social share preview, serp snippet preview, improve click-through rate, structured data basics, json-ld basics, schema awareness, site verification meta, google site verification, bing site verification, yandex verification, pinterest verification, meta length checker, title length counter, description length counter, best meta practices, homepage meta, blog post meta, product page meta, category page meta, multilingual meta, seo checklist, on-page seo, technical seo, content optimization",
  openGraph: {
    title: "Free Meta Tag Generator - Create SEO Meta Tags",
    description: "Generate complete meta tags for better SEO and social media sharing",
    url: "https://www.fasttools.store/seo-tools/meta-tags",
    type: "website",
    images: [
      {
        url: "https://www.fasttools.store/og-images/meta-tag-generator.png",
        width: 1200,
        height: 630,
        alt: "Free Meta Tag Generator - Create SEO Meta Tags",
      },
    ],
  },
}

export default function MetaTagGeneratorPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "SEO Tools", href: "/seo-tools" },
            { label: "Meta Tag Generator", href: "/seo-tools/meta-tags" },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Meta Tag Generator</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Create SEO-friendly meta tags for your website to improve search engine visibility and social media
              sharing.
            </p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <MetaTagGenerator />

          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Why Meta Tags Matter for SEO</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Meta tags are HTML elements that provide information about your web page to search engines and social
              media platforms. They play a crucial role in SEO and how your content appears in search results and when
              shared on social media.
            </p>
            <h3 className="text-xl font-bold mb-3 text-foreground">Key Meta Tags:</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Title Tag:</strong> The most important meta tag, displayed as the clickable headline in search
                results
              </li>
              <li>
                <strong>Meta Description:</strong> A brief summary of your page content shown in search results
              </li>
              <li>
                <strong>Open Graph Tags:</strong> Control how your content appears when shared on Facebook and LinkedIn
              </li>
              <li>
                <strong>Twitter Cards:</strong> Optimize how your content looks when shared on Twitter
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
