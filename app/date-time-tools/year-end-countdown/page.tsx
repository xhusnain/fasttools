import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YearEndCountdown } from "@/components/year-end-countdown"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Year End Countdown | Live New Year Timer | FastTools",
  description:
    "Live countdown to the end of the year. See days, hours, minutes, and seconds left until New Year with automatic updates.",
  keywords: [
    // Primary Keywords (20)
    "year end countdown",
    "free year end countdown",
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
    "web countdown clock",
    "new year countdown timer",
    "year end timer",
    "countdown to new year",
    "new year countdown clock",
    
    // Secondary Keywords (20)
    "live countdown",
    "countdown widget",
    "countdown clock",
    "countdown display",
    "countdown screen",
    "countdown app",
    "countdown tool",
    "countdown calculator",
    "countdown tracker",
    "countdown monitor",
    "countdown display",
    "countdown board",
    "countdown panel",
    "countdown dashboard",
    "countdown interface",
    "countdown page",
    "countdown site",
    "countdown website",
    "countdown online",
    "countdown free",
    
    // Long-tail Keywords (20)
    "free online year end countdown",
    "best year end countdown online",
    "year end countdown with live preview",
    "free year end countdown tool online",
    "online year end countdown free",
    "year end countdown online free",
    "new year countdown free online",
    "countdown timer free online",
    "days until new year free online",
    "time until new year free online",
    "year progress free online",
    "holiday countdown free online",
    "christmas and new year countdown free online",
    "countdown to midnight free online",
    "new year eve timer free online",
    "live countdown widget free online",
    "share countdown free online",
    "event countdown free online",
    "free countdown timer online",
    "web countdown clock free online",
    
    // Additional SEO Keywords
    "new year countdown timer",
    "year end timer",
    "countdown to new year",
    "new year countdown clock",
    "live countdown",
    "countdown widget",
    "countdown clock",
    "countdown display",
    "countdown screen",
    "countdown app",
    "countdown tool",
    "countdown calculator",
    "countdown tracker",
    "countdown monitor",
    "countdown display",
    "countdown board",
    "countdown panel",
    "countdown dashboard",
    "countdown interface",
    "countdown page",
    "countdown site",
    "countdown website",
    "countdown online",
    "countdown free",
    "new year countdown timer free",
    "year end timer free",
    "countdown to new year free",
    "new year countdown clock free",
    "live countdown free",
    "countdown widget free",
    "countdown clock free",
    "countdown display free",
    "countdown screen free",
    "countdown app free",
    "countdown tool free",
    "countdown calculator free",
    "countdown tracker free",
    "countdown monitor free",
    "countdown display free",
    "countdown board free",
    "countdown panel free",
    "countdown dashboard free",
    "countdown interface free",
    "countdown page free",
    "countdown site free",
    "countdown website free",
    "countdown online free"
  ],
  alternates: { canonical: "https://www.fasttools.store/date-time-tools/year-end-countdown" },
  openGraph: {
    title: "Year End Countdown | Live New Year Timer | FastTools",
    description: "Live countdown to the end of the year. See days, hours, minutes, and seconds left until New Year with automatic updates.",
    type: "website",
    url: "https://www.fasttools.store/date-time-tools/year-end-countdown",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Year End Countdown - Live New Year Countdown Timer",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Year End Countdown | Live New Year Timer | FastTools",
    description: "Live countdown to the end of the year. See days, hours, minutes, and seconds left until New Year with automatic updates.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Year End Countdown",
      alternateName: "New Year Countdown Timer",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/date-time-tools/year-end-countdown",
      description:
        "Live countdown to the end of the year showing days, hours, minutes and seconds left.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Live timer", 
        "Auto updates", 
        "Share",
        "Real-time countdown",
        "New Year countdown",
        "Holiday countdown",
        "Event countdown",
        "Countdown widget",
        "Countdown clock",
        "Countdown display"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/date-time-tools/year-end-countdown",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "year end countdown, free year end countdown, new year countdown, countdown timer, days until new year, time until new year",
      about: {
        "@type": "Thing",
        name: "Countdown Timer",
        description: "Free online countdown timers for events, holidays, and special occasions"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function YearEndCountdownPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Year End Countdown", href: "/date-time-tools/year-end-countdown" },
          ]}
        />

        <div className="mt-8 space-y-8">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Year End Countdown — Live New Year Timer</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">See how much time is left in {new Date().getFullYear()} with real‑time updates.</p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <YearEndCountdown />

          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

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
