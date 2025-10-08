import { AnniversaryCalculator } from "@/components/anniversary-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Anniversary Calculator | Relationship Duration & Next Anniversary | FastTools",
  description:
    "Calculate how long you've been together in years, months, and days. See next anniversary date and days remaining.",
  keywords: [
    // Primary Keywords (20)
    "anniversary calculator",
    "free anniversary calculator",
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
    "free anniversary calculator",
    "anniversary date calculator",
    "relationship milestone calculator",
    "couple anniversary calculator",
    
    // Secondary Keywords (20)
    "anniversary calculator online",
    "relationship calculator online",
    "how long together online",
    "anniversary date online",
    "relationship duration online",
    "couple calculator online",
    "days until anniversary online",
    "next anniversary calculator online",
    "milestone anniversaries online",
    "1 year anniversary online",
    "5 year anniversary online",
    "10 year anniversary online",
    "wedding anniversary calculator online",
    "dating anniversary calculator online",
    "share anniversary result online",
    "free anniversary calculator online",
    "anniversary date calculator online",
    "relationship milestone calculator online",
    "couple anniversary calculator online",
    "anniversary countdown online",
    
    // Long-tail Keywords (20)
    "free online anniversary calculator",
    "best anniversary calculator online",
    "anniversary calculator with live preview",
    "free anniversary calculator tool online",
    "online anniversary calculator free",
    "anniversary calculator online free",
    "relationship calculator free online",
    "how long together free online",
    "anniversary date free online",
    "relationship duration free online",
    "couple calculator free online",
    "days until anniversary free online",
    "next anniversary calculator free online",
    "milestone anniversaries free online",
    "1 year anniversary free online",
    "5 year anniversary free online",
    "10 year anniversary free online",
    "wedding anniversary calculator free online",
    "dating anniversary calculator free online",
    "share anniversary result free online",
    
    // Additional SEO Keywords
    "anniversary countdown",
    "anniversary reminder",
    "anniversary tracker",
    "anniversary planner",
    "anniversary date calculator",
    "relationship milestone calculator",
    "couple anniversary calculator",
    "anniversary countdown online",
    "anniversary reminder online",
    "anniversary tracker online",
    "anniversary planner online",
    "anniversary date calculator online",
    "relationship milestone calculator online",
    "couple anniversary calculator online",
    "anniversary countdown free",
    "anniversary reminder free",
    "anniversary tracker free",
    "anniversary planner free",
    "anniversary date calculator free",
    "relationship milestone calculator free",
    "couple anniversary calculator free",
    "anniversary countdown tool",
    "anniversary reminder tool",
    "anniversary tracker tool",
    "anniversary planner tool",
    "anniversary date calculator tool",
    "relationship milestone calculator tool",
    "couple anniversary calculator tool",
    "anniversary countdown online tool",
    "anniversary reminder online tool",
    "anniversary tracker online tool",
    "anniversary planner online tool",
    "anniversary date calculator online tool",
    "relationship milestone calculator online tool",
    "couple anniversary calculator online tool",
    "anniversary countdown free tool",
    "anniversary reminder free tool",
    "anniversary tracker free tool",
    "anniversary planner free tool",
    "anniversary date calculator free tool",
    "relationship milestone calculator free tool",
    "couple anniversary calculator free tool",
    "anniversary countdown tool tool",
    "anniversary reminder tool tool",
    "anniversary tracker tool tool",
    "anniversary planner tool tool",
    "anniversary date calculator tool tool",
    "relationship milestone calculator tool tool",
    "couple anniversary calculator tool tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/fun-tools/anniversary" },
  openGraph: {
    title: "Free Anniversary Calculator | Relationship Duration & Next Anniversary | FastTools",
    description: "Calculate how long you've been together in years, months, and days. See next anniversary date and days remaining.",
    url: "https://fasttools.store/fun-tools/anniversary",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Anniversary Calculator - Relationship Duration & Next Anniversary",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Anniversary Calculator | Relationship Duration & Next Anniversary | FastTools",
    description: "Calculate how long you've been together in years, months, and days. See next anniversary date and days remaining.",
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Anniversary Calculator",
      alternateName: "Relationship Calculator",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/fun-tools/anniversary",
      description:
        "Calculate relationship duration and next anniversary with days remaining.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Duration in years/months/days", 
        "Next anniversary", 
        "Days remaining",
        "Anniversary calculator",
        "Relationship calculator",
        "How long together",
        "Anniversary date",
        "Relationship duration",
        "Couple calculator",
        "Milestone anniversaries"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://fasttools.store/fun-tools/anniversary",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "anniversary calculator, free anniversary calculator, relationship calculator, how long together, anniversary date, relationship duration, couple calculator",
      about: {
        "@type": "Thing",
        name: "Relationship and Anniversary Tools",
        description: "Free online tools for relationship tracking, anniversary calculations, and couple milestones"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
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

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <AnniversaryCalculator />

          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
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
