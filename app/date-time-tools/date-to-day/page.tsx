import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { DateToDayFinder } from "@/components/date-to-day-finder"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Date to Day Finder — What Day of the Week Is This Date? | SmartToolboxes",
  description:
    "Find the weekday for any date. Check past and future dates, holidays, and schedule planning with accurate weekday results.",
  keywords: [
    "date to day finder",
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
    "free weekday finder"
  ],
  alternates: { canonical: "https://www.fasttools.store/date-time-tools/date-to-day" },
  openGraph: {
    title: "Date to Day Finder — Weekday for Any Date",
    description: "Instantly find the weekday for any past or future date.",
    type: "website",
    url: "https://www.fasttools.store/date-time-tools/date-to-day",
  },
  twitter: { card: "summary_large_image", title: "Date to Day Finder", description: "Find the weekday for any date." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Date to Day Finder",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/date-time-tools/date-to-day",
      description:
        "Find the day of the week for any date with holiday and schedule planning context.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Past/future dates", "Week number", "Copy/share results"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function DateToDayPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdSpace slot="header" className="h-20" />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Date to Day Finder", href: "/date-time-tools/date-to-day" },
          ]}
        />

        <div className="mt-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Date to Day Finder — Weekday for Any Date</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Check the weekday for any past or future date. Great for planning and curious minds.</p>
          </div>

          <DateToDayFinder />

          <AdSpace slot="content" className="h-24" />

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
