import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { LinkInBioGenerator } from "@/components/link-in-bio-generator"

export const metadata: Metadata = {
  title: "Link in Bio Generator - Create Your Bio Link Page | FastTools",
  description:
    "Create a beautiful link in bio page for your social media profiles. Free link in bio generator with customizable design.",
  keywords:
    "link in bio, bio link generator, link in bio page, social media links, instagram link in bio, linktree alternative",
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

      <LinkInBioGenerator />
    </div>
  )
}
