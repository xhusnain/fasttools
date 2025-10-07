import { LoveCalculator } from "@/components/love-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Love Calculator — Love Compatibility & Match Percentage | SmartToolboxes",
  description:
    "Fun love compatibility calculator. Enter two names to see your match percentage and share the result with friends.",
  keywords: [
    "love calculator",
    "love compatibility",
    "love match",
    "relationship calculator",
    "love percentage",
    "compatibility test",
    "love meter",
    "name compatibility",
    "crush calculator",
    "couple compatibility",
    "fun love test",
    "free love calculator",
    "online love meter",
    "romance compatibility"
  ],
  alternates: { canonical: "https://www.smarttoolboxes.com/fun-tools/love-calculator" },
  openGraph: {
    title: "Love Calculator — Compatibility & Match %",
    description: "Enter two names to see your love compatibility percentage.",
    type: "website",
    url: "https://www.smarttoolboxes.com/fun-tools/love-calculator",
  },
  twitter: { card: "summary_large_image", title: "Love Calculator", description: "See your love match percentage." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Love Calculator",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/fun-tools/love-calculator",
      description:
        "Fun love compatibility calculator that shows a match percentage based on names.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Enter two names", "Match percentage", "Share result"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.smarttoolboxes.com" },
    }),
  },
}

export default function LoveCalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
            { label: "Love Calculator", href: "/fun-tools/love-calculator" },
          ]}
        />

        <div className="max-w-2xl mx-auto mt-8 space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Love Calculator</h1>
            <p className="text-base text-muted-foreground text-pretty">
              Calculate the love compatibility between two people. Just for fun - see your love match percentage!
            </p>
          </div>

          <AdSpace slot="content" className="h-24" />

          <LoveCalculator />

          <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
            <div className="p-6 rounded-lg bg-muted/30 border border-border">
              <h2 className="text-xl font-bold mb-4 text-foreground">About Love Calculator</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our Love Calculator is a fun and entertaining tool that calculates the love compatibility between two
                people based on their names. While it's just for entertainment purposes, it's a great way to have fun
                with friends and share on social media!
              </p>
              <h3 className="text-lg font-bold mb-3 text-foreground">How It Works:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Enter the first person's name</li>
                <li>Enter the second person's name</li>
                <li>Click "Calculate Love Match" to see your compatibility percentage</li>
                <li>Share your results with friends!</li>
              </ol>
              <p className="text-xs text-muted-foreground mt-4 italic">
                Note: This is purely for entertainment purposes and should not be taken seriously!
              </p>
              <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Related Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><Link href="/fun-tools/anniversary">Anniversary Calculator</Link></li>
                <li><Link href="/fun-tools/birthday-countdown">Birthday Countdown</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
