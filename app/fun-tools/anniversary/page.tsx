import { AnniversaryCalculator } from "@/components/anniversary-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Anniversary Calculator — Relationship Duration & Next Anniversary | SmartToolboxes",
  description:
    "Calculate how long you've been together in years, months, and days. See next anniversary date and days remaining.",
  keywords: [
    "anniversary calculator",
    "relationship calculator",
    "how long together",
    "anniversary date",
    "relationship duration",
    "couple calculator",
    "days until anniversary",
    "next anniversary calculator",
    "milestone anniversaries",
    "1 year anniversary",
    "5 year anniversary",
    "10 year anniversary",
    "wedding anniversary calculator",
    "dating anniversary calculator",
    "share anniversary result",
    "free anniversary calculator"
  ],
  alternates: { canonical: "https://www.fasttools.store/fun-tools/anniversary" },
  openGraph: {
    title: "Anniversary Calculator — Relationship Duration",
    description: "See how long you’ve been together and your next anniversary.",
    type: "website",
    url: "https://www.fasttools.store/fun-tools/anniversary",
  },
  twitter: { card: "summary_large_image", title: "Anniversary Calculator", description: "Calculate relationship duration and next anniversary." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Anniversary Calculator",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/fun-tools/anniversary",
      description:
        "Calculate relationship duration and next anniversary with days remaining.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Duration in years/months/days", "Next anniversary", "Days remaining"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function AnniversaryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
            { label: "Anniversary Calculator", href: "/fun-tools/anniversary" },
          ]}
        />

        <div className="max-w-2xl mx-auto mt-8 space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Anniversary Calculator</h1>
            <p className="text-base text-muted-foreground text-pretty">
              Calculate how long you've been together and when your next anniversary is. Perfect for couples!
            </p>
          </div>

          <AdSpace slot="content" className="h-24" />

          <AnniversaryCalculator />

          {/* Center Content Ad */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24" />
          </div>

          <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
            <div className="p-6 rounded-lg bg-muted/30 border border-border">
              <h2 className="text-xl font-bold mb-4 text-foreground">About Anniversary Calculator</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our Anniversary Calculator helps you track your relationship milestones by calculating exactly how long
                you've been together in years, months, and days. It also shows when your next anniversary is and how
                many days until then!
              </p>
              <h3 className="text-lg font-bold mb-3 text-foreground">Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Calculate time together in years, months, and days</li>
                <li>See total days you've been together</li>
                <li>Find out when your next anniversary is</li>
                <li>Count down days until your next anniversary</li>
                <li>Share your milestone with loved ones</li>
              </ul>
              <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Related Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><Link href="/fun-tools/birthday-countdown">Birthday Countdown</Link></li>
                <li><Link href="/fun-tools/love-calculator">Love Calculator</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Content Ad */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full h-24" />
          </div>
        </div>
      </div>
    </div>
  )
}
