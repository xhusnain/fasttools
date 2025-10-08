import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { InstagramDpViewer } from "@/components/instagram-dp-viewer"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Instagram DP Viewer - View & Download Profile Pictures in HD | FastTools",
  description:
    "View and download Instagram profile pictures in HD quality. Free Instagram DP viewer tool for public accounts.",
  keywords:
    "instagram dp viewer, instagram profile picture, instagram dp download, view instagram profile picture, instagram dp hd, profile picture viewer, insta dp, instagram avatar, insta profile photo, instagram pfp, hd profile photo, download insta dp, public profile pictures, instagram tools, social media tools, creator tools, profile image, profile picture size, instagram photo size, high resolution profile, zoom profile picture, view full size dp, online dp viewer, fast instagram dp, free instagram dp viewer, instagram utilities, mobile profile picture, desktop profile picture, safe dp viewer, privacy-friendly dp viewer, no login dp viewer, instagram tips, instagram basics, profile optimization, brand profile image, creator profile image",
}

export default function InstagramDpPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Social Media Tools", href: "/social-media-tools" },
          { label: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
        ]}
      />

      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Instagram DP Viewer</h1>
        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          View and download Instagram profile pictures in HD quality. Works with public Instagram accounts.
        </p>
      </div>

      {/* First Ad Space - After Hero Content */}
      <div className="mb-8">
        <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
      </div>

      <InstagramDpViewer />
      
      {/* Second Ad Space - After Tool */}
      <div className="my-8">
        <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
      </div>

      <div className="mt-10 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">When and How to Use This Tool</h2>
        <p className="text-muted-foreground">Use this viewer for public profiles only, and respect user privacy.</p>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Check how your own avatar appears on different devices</li>
          <li>Ensure brand logos are crisp and legible at small sizes</li>
          <li>Avoid reusing content you don’t own without permission</li>
        </ul>
      </div>

    </div>
  )
}
