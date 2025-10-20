import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { DateToDayFinder } from "@/components/date-to-day-finder"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Free Date to Day Finder | What Day of the Week Is This Date? | FastTools",
  description:
    "Find the weekday for any date. Check past and future dates, holidays, and schedule planning with accurate weekday results.",
  keywords: [
    // Primary Keywords (20)
    "date to day finder",
    "free date to day finder",
    "day of week calculator",
    "what day was",
    "what day is",
    "weekday calculator",
    "day finder",
    "date calculator",
    "day of week finder",
    "what day of week",
    "what day is june 1",
    "what day was 1990-01-01",
    "what day is christmas",
    "what weekday is my birthday",
    "find weekday for date",
    "calculate weekday from date",
    "gregorian calendar weekday",
    "leap year weekday",
    "week number and weekday",
    "iso week date",
    
    // Secondary Keywords (20)
    "workday vs weekend",
    "business day vs weekend",
    "past date weekday",
    "future date weekday",
    "holiday weekday",
    "birthday weekday",
    "anniversary weekday",
    "school timetable day",
    "event planning weekday",
    "meeting schedule day",
    "free weekday finder",
    "weekday finder online",
    "day of week finder online",
    "date to day finder online",
    "weekday calculator online",
    "day finder online",
    "date calculator online",
    "day of week calculator online",
    "what day was online",
    "what day is online",
    
    // Long-tail Keywords (20)
    "free online date to day finder",
    "best date to day finder online",
    "date to day finder with live preview",
    "free date to day finder tool online",
    "online date to day finder free",
    "date to day finder online free",
    "day of week calculator free online",
    "weekday calculator free online",
    "day finder free online",
    "date calculator free online",
    "day of week finder free online",
    "what day was free online",
    "what day is free online",
    "weekday finder free online",
    "day of week finder free online",
    "date to day finder free online",
    "weekday calculator free online",
    "day finder free online",
    "date calculator free online",
    "day of week calculator free online",
    
    // Additional SEO Keywords
    "what day is june 1",
    "what day was 1990-01-01",
    "what day is christmas",
    "what weekday is my birthday",
    "find weekday for date",
    "calculate weekday from date",
    "gregorian calendar weekday",
    "leap year weekday",
    "week number and weekday",
    "iso week date",
    "workday vs weekend",
    "business day vs weekend",
    "past date weekday",
    "future date weekday",
    "holiday weekday",
    "birthday weekday",
    "anniversary weekday",
    "school timetable day",
    "event planning weekday",
    "meeting schedule day",
    "free weekday finder",
    "weekday finder online",
    "day of week finder online",
    "date to day finder online",
    "weekday calculator online",
    "day finder online",
    "date calculator online",
    "day of week calculator online",
    "what day was online",
    "what day is online",
    "weekday finder free",
    "day of week finder free",
    "date to day finder free",
    "weekday calculator free",
    "day finder free",
    "date calculator free",
    "day of week calculator free",
    "what day was free",
    "what day is free",
    "weekday finder tool",
    "day of week finder tool",
    "date to day finder tool",
    "weekday calculator tool",
    "day finder tool",
    "date calculator tool",
    "day of week calculator tool",
    "what day was tool",
    "what day is tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/date-time-tools/date-to-day" },
  openGraph: {
    title: "Free Date to Day Finder | What Day of the Week Is This Date? | FastTools",
    description: "Find the weekday for any date. Check past and future dates, holidays, and schedule planning with accurate weekday results.",
    type: "website",
    url: "https://www.fasttools.store/date-time-tools/date-to-day",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Date to Day Finder - What Day of the Week Is This Date?",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Date to Day Finder | What Day of the Week Is This Date? | FastTools",
    description: "Find the weekday for any date. Check past and future dates, holidays, and schedule planning with accurate weekday results.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Date to Day Finder",
      alternateName: "Weekday Finder",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/date-time-tools/date-to-day",
      description:
        "Find the day of the week for any date with holiday and schedule planning context.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Past/future dates", 
        "Week number", 
        "Copy/share results",
        "Holiday planning",
        "Schedule planning",
        "Event planning",
        "Birthday finder",
        "Anniversary finder",
        "Leap year support",
        "Gregorian calendar"
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
      downloadUrl: "https://www.fasttools.store/date-time-tools/date-to-day",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "date to day finder, free date to day finder, day of week calculator, weekday calculator, day finder, date calculator",
      about: {
        "@type": "Thing",
        name: "Date and Day Calculation",
        description: "Free online tools for finding the day of the week for any date"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function DateToDayPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Date to Day Finder", href: "/date-time-tools/date-to-day" },
          ]}
        />

        <div className="mt-8 space-y-8">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Date to Day Finder — Weekday for Any Date</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Check the weekday for any past or future date. Great for planning and curious minds.</p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <DateToDayFinder />

          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="prose prose-sm max-w-none mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use</h2>
            <h3 className="text-xl font-semibold mb-2 text-foreground">1) Select a Date</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Pick any date to instantly see its weekday and week number.</li>
              <li>Use this for birthdays, anniversaries, and event planning.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Explore More</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Check related holidays or observe workday/weekend context.</li>
              <li>Copy or share the result for your calendar.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/date-time-tools/workday-calculator">Workday Calculator</Link></li>
              <li><Link href="/date-time-tools/year-end-countdown">Year End Countdown</Link></li>
              <li><Link href="/converters/timezone">Time Zone Converter</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
