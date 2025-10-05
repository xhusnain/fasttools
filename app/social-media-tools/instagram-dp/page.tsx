import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { InstagramDpViewer } from "@/components/instagram-dp-viewer"

export const metadata: Metadata = {
  title: "Instagram DP Viewer - View & Download Profile Pictures in HD | ToolifyHub",
  description:
    "View and download Instagram profile pictures in HD quality. Free Instagram DP viewer tool for public accounts.",
  keywords:
    "instagram dp viewer, instagram profile picture, instagram dp download, view instagram profile picture, instagram dp hd",
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

      <InstagramDpViewer />
    </div>
  )
}
