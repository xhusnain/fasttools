import { HashtagCounter } from "@/components/hashtag-counter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Instagram Hashtag Counter - Count & Extract Hashtags | FastTools",
  description:
    "Free Instagram Hashtag Counter to count and extract hashtags from your posts. Perfect for social media management and Instagram optimization. Try it now!",
  keywords:
    "hashtag counter, instagram hashtags, count hashtags, extract hashtags, social media tools, instagram tools, hashtag analyzer, free hashtag counter",
  openGraph: {
    title: "Instagram Hashtag Counter - Count & Extract Hashtags",
    description: "Count and extract hashtags from your Instagram posts with our free Hashtag Counter tool.",
    type: "website",
  },
}

export default function HashtagCounterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
            { label: "Hashtag Counter", href: "/fun-tools/hashtag-counter" },
          ]}
        />

        <div className="max-w-2xl mx-auto mt-8 space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Instagram Hashtag Counter</h1>
            <p className="text-base text-muted-foreground text-pretty">
              Count and extract hashtags from your Instagram posts. Perfect for social media management!
            </p>
          </div>

          <AdSpace slot="content" className="h-24" />

          <HashtagCounter />

          <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
            <div className="p-6 rounded-lg bg-muted/30 border border-border">
              <h2 className="text-xl font-bold mb-4 text-foreground">About Instagram Hashtag Counter</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our Instagram Hashtag Counter helps you quickly count and extract all unique hashtags from your
                Instagram captions. Perfect for social media managers, influencers, and anyone who wants to optimize
                their Instagram posts!
              </p>
              <h3 className="text-lg font-bold mb-3 text-foreground">Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Count total unique hashtags in your caption</li>
                <li>Extract and display all hashtags separately</li>
                <li>Copy all hashtags with one click</li>
                <li>Perfect for Instagram's 30 hashtag limit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
