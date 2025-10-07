import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AgeInHoursCalculator } from "@/components/age-in-hours-calculator"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Age in Hours Calculator — Hours, Minutes, Seconds Old | SmartToolboxes",
  description:
    "Calculate your exact age in hours, minutes, and seconds. Fun and precise age converter with birthday countdown and shareable results.",
  keywords: [
    "age in hours",
    "age in minutes",
    "age in seconds",
    "how old am I in hours",
    "age calculator",
    "time since birth",
    "time duration since date",
    "date difference in hours",
    "age converter",
    "birthday countdown",
    "age tracker",
    "calculate hours lived",
    "calculate minutes lived",
    "how many seconds old",
    "hours between dates",
    "minutes between dates",
    "seconds between dates",
    "born on date hours old",
    "exact age calculator",
    "precise age calculator",
    "age by time units",
    "fun age facts",
    "time elapsed calculator",
    "life in hours",
    "life in minutes",
    "life in seconds",
    "age milestones",
    "10000 hours age",
    "one million minutes age",
    "seconds to years converter",
    "weeks to hours",
    "months to hours",
    "age math",
    "date and time calculator",
    "birthday to now",
    "how old am I right now",
    "real time age",
    "live age counter",
    "share age result",
    "free age calculator",
    "online age in hours",
    "age widget",
    "time tracker since birth",
    "age timeline",
    "duration since event",
    "anniversary in hours",
    "elapsed time calculator",
    "time since counter",
    "life statistics",
    "fun age tool",
    "birthday tool"
  ],
  alternates: { canonical: "https://www.smarttoolboxes.com/date-time-tools/age-in-hours" },
  openGraph: {
    title: "Age in Hours Calculator — Hours, Minutes, Seconds Old",
    description: "See exactly how many hours, minutes, and seconds you have lived.",
    type: "website",
    url: "https://www.smarttoolboxes.com/date-time-tools/age-in-hours",
  },
  twitter: { card: "summary_large_image", title: "Age in Hours Calculator", description: "Calculate your age in hours, minutes, and seconds." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Age in Hours Calculator",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/date-time-tools/age-in-hours",
      description:
        "Calculate exact age in hours, minutes, and seconds with shareable results and birthday countdown.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Age in hours/minutes/seconds", "Birthday countdown", "Copy/share results"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.smarttoolboxes.com" },
    }),
  },
}

export default function AgeInHoursPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdSpace position="header" />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Age in Hours", href: "/date-time-tools/age-in-hours" },
          ]}
        />

        <div className="mt-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Age in Hours Calculator — Hours, Minutes, Seconds Old</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">See your exact age in hours, minutes, and seconds with a live calculation.</p>
          </div>

          <AgeInHoursCalculator />

          <AdSpace position="content" />

          <div className="prose prose-sm max-w-none mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use</h2>
            <h3 className="text-xl font-semibold mb-2 text-foreground">1) Enter Your Birth Date and Time</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Provide your birth date and, optionally, time for higher precision.</li>
              <li>The tool calculates hours, minutes, and seconds lived since then.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Share Fun Milestones</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Discover milestones like 10,000 hours or one million minutes old.</li>
              <li>Copy and share results with friends and on social media.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Ideas & Use Cases</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Fun birthdays and anniversary facts.</li>
              <li>Educational time unit conversions for students.</li>
              <li>Life statistics for blogs and personal pages.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/date-time-tools/date-to-day">Date to Day Finder</Link></li>
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
