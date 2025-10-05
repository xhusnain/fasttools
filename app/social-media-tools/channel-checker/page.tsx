import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YoutubeChannelChecker } from "@/components/youtube-channel-checker"

export const metadata: Metadata = {
  title: "YouTube Channel Name Checker - Check Name Availability | ToolifyHub",
  description:
    "Check if your desired YouTube channel name is available. Get alternative suggestions if your name is taken. Free YouTube channel name checker.",
  keywords:
    "youtube channel name checker, youtube name availability, check youtube name, youtube channel name, youtube username checker",
}

export default function ChannelCheckerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Social Media Tools", href: "/social-media-tools" },
          { label: "Channel Name Checker", href: "/social-media-tools/channel-checker" },
        ]}
      />

      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          YouTube Channel Name Checker
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
          Check if your desired YouTube channel name is available. Get alternative suggestions and find the perfect name
          for your channel.
        </p>
      </div>

      <YoutubeChannelChecker />
    </div>
  )
}
