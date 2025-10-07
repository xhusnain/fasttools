import { TimezoneConverter } from "@/components/timezone-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Time Zone Converter — Convert Time Across Time Zones | SmartToolboxes",
  description:
    "Convert time between time zones worldwide. Ideal for scheduling international meetings and remote teamwork.",
  keywords: [
    "timezone converter",
    "time zone converter",
    "world clock",
    "time converter",
    "international time",
    "utc converter",
    "gmt to est",
    "est to pst",
    "pst to ist",
    "ist to gmt",
    "meeting time converter",
    "schedule across time zones",
    "remote team scheduling",
    "daylight saving time",
    "dst adjustments",
    "24 hour clock",
    "12 hour clock",
    "military time conversion",
    "time difference calculator",
    "convert date and time",
    "city time converter",
    "country time converter",
    "time zone map",
    "world time zones list",
    "free timezone converter",
    "convert utc to local time",
    "local time to utc",
    "convert gmt to pst",
    "convert est to cet",
    "convert cet to ist",
    "convert sgt to pst",
    "convert aedt to ist",
    "convert bst to ist",
    "convert mst to est",
    "convert ist to est",
    "convert ist to pst",
    "convert utc to est",
    "convert utc to pst",
    "convert utc to gmt",
    "time zones by country",
    "work hours overlap calculator",
    "world meeting planner",
    "best time to meet tool",
    "schedule across continents",
    "flight time zones conversion",
    "calendar time zone support",
    "outlook google calendar timezone",
    "remote team timezones",
    "international call time",
    "time zone abbreviation list",
    "dst start end dates",
    "summer time vs standard time"
  ],
  alternates: { canonical: "https://www.smarttoolboxes.com/converters/timezone" },
  openGraph: {
    title: "Time Zone Converter — Global Time Conversion",
    description: "Convert time between cities and time zones with DST awareness.",
    url: "https://www.smarttoolboxes.com/converters/timezone",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Time Zone Converter", description: "Plan meetings across time zones easily." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Time Zone Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/converters/timezone",
      description:
        "Convert time across global time zones with daylight saving awareness for meetings and travel.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["City/time zone list", "DST handling", "Copy results", "Mobile friendly"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.smarttoolboxes.com" },
    }),
  },
}

export default function TimezoneConverterPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "Time Zone Converter", href: "/converters/timezone" },
          ]}
        />

        <AdSpace slot="header" className="mb-8 h-24" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Time Zone Converter — Global Time & Meeting Planner</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">Convert time zones accurately with DST awareness. Plan international meetings in seconds.</p>
          </div>

          <TimezoneConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use the Time Zone Converter</h2>
            <h3 className="text-xl font-semibold mb-2 text-foreground">1) Pick Locations and Date/Time</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Select source and destination cities or time zones.</li>
              <li>Choose a date/time to account for DST changes.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Compare and Share</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>See overlapping business hours for remote teams.</li>
              <li>Copy converted time or add to calendar.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Tips for Scheduling Across Time Zones</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Rotate meeting times to share inconvenience fairly.</li>
              <li>Confirm DST windows around spring/fall transitions.</li>
              <li>Prefer 24‑hour time to avoid AM/PM confusion.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/converters/currency">Currency Converter</Link></li>
              <li><Link href="/date-time-tools/workday-calculator">Workday Calculator</Link></li>
              <li><Link href="/date-time-tools/age-in-hours">Age in Hours Calculator</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
