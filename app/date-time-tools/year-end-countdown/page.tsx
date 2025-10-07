import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YearEndCountdown } from "@/components/year-end-countdown"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Year End Countdown — Live New Year Countdown Timer | SmartToolboxes",
  description:
    "Live countdown to the end of the year. See days, hours, minutes, and seconds left until New Year with automatic updates.",
  keywords: [
    "year end countdown",
    "new year countdown",
    "countdown timer",
    "days until new year",
    "time until new year",
    "year progress",
    "holiday countdown",
    "christmas and new year countdown",
    "countdown to midnight",
    "new year eve timer",
    "live countdown widget",
    "share countdown",
    "event countdown",
    "free countdown timer",
    "web countdown clock"
  ],
  alternates: { canonical: "https://www.fasttools.store/date-time-tools/year-end-countdown" },
  openGraph: {
    title: "Year End Countdown — Live New Year Timer",
    description: "See exactly how long until the New Year.",
    type: "website",
    url: "https://www.fasttools.store/date-time-tools/year-end-countdown",
  },
  twitter: { card: "summary_large_image", title: "Year End Countdown", description: "Live countdown to New Year." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Year End Countdown",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/date-time-tools/year-end-countdown",
      description:
        "Live countdown to the end of the year showing days, hours, minutes and seconds left.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Live timer", "Auto updates", "Share"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function YearEndCountdownPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdSpace position="header" />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Year End Countdown", href: "/date-time-tools/year-end-countdown" },
          ]}
        />

        <div className="mt-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Year End Countdown — Live New Year Timer</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">See how much time is left in {new Date().getFullYear()} with real‑time updates.</p>
          </div>

          <YearEndCountdown />

          <AdSpace position="content" />

          <div className="prose prose-sm max-w-none mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use</h2>
            <p className="text-muted-foreground">The timer updates automatically. Keep the page open to watch the countdown.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/date-time-tools/date-to-day">Date to Day Finder</Link></li>
              <li><Link href="/date-time-tools/workday-calculator">Workday Calculator</Link></li>
              <li><Link href="/converters/timezone">Time Zone Converter</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
