import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { LinkInBioGenerator } from "@/components/link-in-bio-generator"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Link in Bio Generator - Create Your Bio Link Page | FastTools",
  description:
    "Create a beautiful link in bio page for your social media profiles. Free link in bio generator with customizable design.",
  keywords:
    "link in bio, bio link generator, link in bio page, social media links, instagram link in bio, linktree alternative, bio page builder, multi link page, personal landing page, creator landing page, portfolio links, single page links, link hub, bio url, easy bio page, link in bio templates, link in bio design, mobile-first landing page, track clicks, utm links, call to action buttons, social icons, ecommerce links, affiliate links, newsletter signup link, youtube links, tiktok links, instagram links, twitter links, facebook links, fast link in bio, free link in bio, creator tools, influencer tools, small business tools, brand page, custom domain bio, branding options, dark mode bio page, qr code for bio, bio page seo, open graph image for bio, social preview for bio, bio page best practices",
}

export default function LinkInBioPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Social Media Tools", href: "/social-media-tools" },
          { label: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
        ]}
      />

      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Link in Bio Generator</h1>
        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          Create a beautiful link in bio page for your social media profiles. Perfect for Instagram, TikTok, and other
          platforms.
        </p>
      </div>

      {/* First Ad Space - After Hero Content */}
      <div className="mb-8">
        <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
      </div>

      <LinkInBioGenerator />
      
      {/* Second Ad Space - After Tool */}
      <div className="my-8">
        <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
      </div>

      <div className="mt-10 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">Tips for a High-Converting Bio Link Page</h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Put your primary CTA above the fold with a clear button label</li>
          <li>Limit links to your highest-value destinations to reduce choice overload</li>
          <li>Add recognizable social icons and consistent brand visuals</li>
          <li>Use UTM parameters to measure performance by source and campaign</li>
        </ul>
      </div>

    </div>
  )
}
