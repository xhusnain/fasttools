import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YoutubeChannelChecker } from "@/components/youtube-channel-checker"

export const metadata: Metadata = {
  title: "YouTube Channel Name Checker - Check Name Availability | FastTools",
  description:
    "Check if your desired YouTube channel name is available. Get alternative suggestions if your name is taken. Free YouTube channel name checker.",
  keywords:
    "youtube channel name checker, youtube name availability, check youtube name, youtube channel name, youtube username checker, channel name ideas, channel branding, youtube brand name, youtube handle checker, username availability, cross-platform name check, name generator, channel identity, brand consistency, creator tools, youtube seo, channel setup, naming tips, unique channel names, short channel names, memorable names, niche channel names, gaming channel names, vlog channel names, tech channel names, education channel names, music channel names, lifestyle channel names, beauty channel names, travel channel names, finance channel names, fitness channel names, food channel names, art channel names, photography channel names, productivity channel names, kids channel names, language channel names, review channel names, tutorial channel names, how to name a channel",
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
      <div className="mt-10 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">How to Pick a Great YouTube Channel Name</h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Keep it short, easy to pronounce, and easy to remember</li>
          <li>Check availability across platforms for brand consistency</li>
          <li>Avoid hard-to-spell words and special characters</li>
          <li>Reflect your niche and the value viewers can expect</li>
        </ul>
      </div>
    </div>
  )
}
