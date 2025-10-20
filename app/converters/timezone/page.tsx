import { TimezoneConverter } from "@/components/timezone-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Time Zone Converter | Convert Time Zones | FastTools",
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
    "free online timezone converter",
    "best timezone converter online",
    "timezone converter with live preview",
    "free timezone converter tool online",
    "online timezone converter free",
    "timezone converter online free",
    "time zone converter free online",
    "world clock free online",
    "time converter free online",
    "international time free online",
    "utc converter free online",
    "gmt to est free online",
    "est to pst free online",
    "pst to ist free online",
    "ist to gmt free online",
    "meeting time converter free online",
    "schedule across time zones free online",
    "remote team scheduling free online",
    "daylight saving time free online",
    "dst adjustments free online"
  ],
  alternates: { canonical: "https://www.fasttools.store/converters/timezone" },
  openGraph: {
    title: "Free Time Zone Converter | Convert Time Across Time Zones | FastTools",
    description: "Convert time between time zones worldwide. Ideal for scheduling international meetings and remote teamwork.",
    url: "https://www.fasttools.store/converters/timezone",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Time Zone Converter - Convert Time Across Time Zones",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Time Zone Converter | Convert Time Across Time Zones | FastTools",
    description: "Convert time between time zones worldwide. Ideal for scheduling international meetings and remote teamwork.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Time Zone Converter",
      alternateName: "World Clock & Time Zone Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/converters/timezone",
      description:
        "Convert time across global time zones with daylight saving awareness for meetings and travel.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "City/time zone list", 
        "DST handling", 
        "Copy results", 
        "Mobile friendly",
        "International meetings",
        "Remote team scheduling",
        "Travel planning",
        "Business hours overlap",
        "Calendar integration",
        "Multiple time zones"
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
      downloadUrl: "https://www.fasttools.store/converters/timezone",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "timezone converter, free timezone converter, time zone converter, world clock, time converter, international time, utc converter, meeting time converter",
      about: {
        "@type": "Thing",
        name: "Time Zone Conversion",
        description: "Free online tools for converting time between different time zones and scheduling international meetings"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function TimezoneConverterPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "Time Zone Converter", href: "/converters/timezone" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1 lg:flex-[2] space-y-5 sm:space-y-6">
              {/* Hero */}
              <div className="text-center space-y-5 animate-fade-in-up">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">Time Zone Converter — Global Time & Meeting Planner</h1>
                <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">Convert time zones with DST awareness. Plan international meetings in seconds.</p>
          </div>

              {/* Mobile/Tablet Ad - Top */}
              <div className="block xl:hidden mb-6">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
          </div>

              {/* Tool */}
              <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
              <TimezoneConverter />
              </div>

              {/* Mobile/Tablet Ad - Mid */}
              <div className="block xl:hidden my-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
              </div>

              {/* Content Sections */}
              <div className="space-y-5 animate-fade-in-up">
                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-base md:text-xl font-bold mb-3 text-card-foreground">How to Use the Time Zone Converter</h2>
                  <h3 className="text-base md:text-lg font-bold mb-2.5 text-card-foreground">1) Pick Locations and Date/Time</h3>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm">
                  <li>Select source and destination cities or time zones.</li>
                    <li>Pick date/time to account for DST changes.</li>
                </ul>
                  <h3 className="text-base md:text-lg font-bold mt-4 mb-2.5 text-card-foreground">2) Compare and Share</h3>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm">
                    <li>See business‑hours overlap for remote teams.</li>
                    <li>Copy converted time or add to your calendar.</li>
                </ul>
                </div>

                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-base md:text-xl font-bold mb-3 text-card-foreground">Understanding Time Zones</h2>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm">
                    <li><strong>UTC:</strong> Global reference standard.</li>
                    <li><strong>GMT:</strong> Historical reference, often interchangeable with UTC.</li>
                    <li><strong>DST:</strong> Seasonal offset changes (±1 hour).</li>
                    <li><strong>Offset:</strong> Difference from UTC, e.g., UTC+2.</li>
                </ul>
                </div>

                {/* 10‑Item FAQ */}
                <div className="p-6 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground">Time Zone Converter FAQ</h2>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">1) UTC vs GMT—what should I use?</h3>
                      <p>UTC is the modern atomic‑time standard used by computers and APIs; GMT is a historical solar‑time label. For scheduling and code, prefer UTC; for human‑friendly labels GMT is acceptable if offsets are clear.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">2) Does the converter handle future DST changes?</h3>
                      <p>Yes—rules are sourced from authoritative data and applied by date. For meetings far in the future, re‑check close to the event in case a region updates its DST law.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">3) How can I find overlapping work hours for two teams?</h3>
                      <p>Convert a candidate time to both zones and compare against local business hours. Try several candidates and pick the widest overlap; rotate meeting times periodically to share inconvenience.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">4) Why is my calendar showing a different time?</h3>
                      <p>Calendars cache time zone settings per device and account. Ensure the event is saved in UTC or in the organizer’s zone and that all attendees’ devices use automatic time zone updates.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">5) What’s the safest way to write times in emails?</h3>
                      <p>Include the local time, zone abbreviation, and UTC: “10:00 AM PT (UTC‑7)”. Provide a clickable calendar link so recipients view it in their zone automatically.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">6) Do countries ever change time zones abruptly?</h3>
                      <p>Yes—governments occasionally shift base offsets or DST policies. Reconfirm times near political changes and avoid hard‑coding offsets in code; use time zone databases instead.</p>
                    </div>
                  <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">7) How do I convert recurring meetings safely?</h3>
                      <p>Store the canonical event in UTC, then let each client render local time with its current zone rules. This prevents drift when DST transitions occur.</p>
                  </div>
                  <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">8) What if a city has multiple aliases (e.g., “Kiev” vs “Kyiv”)?</h3>
                      <p>Time databases maintain canonical zone IDs even if city names change. Search by country/region when in doubt and prefer IANA IDs in integrations.</p>
                  </div>
                  <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">9) How should I note half‑hour and 45‑minute offsets?</h3>
                      <p>Some regions use offsets like UTC+5:30 or UTC+5:45. Always include the full offset (hours:minutes) in invites and documentation.</p>
                  </div>
                  <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">10) Tips for travel and on‑call schedules</h3>
                      <p>Switch devices to automatic time zone, keep a UTC watch for reference, and specify coverage windows in UTC. Confirm local holidays when planning critical calls.</p>
                    </div>
                  </div>
              </div>

                {/* Mobile Bottom Ad */}
                <div className="block xl:hidden mt-8">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
            </div>

                {/* Related Tools */}
                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-base md:text-xl font-bold mb-3 text-card-foreground">Related Tools</h2>
                  <ul className="list-disc pl-5 text-muted-foreground text-sm">
                  <li><Link href="/converters/currency">Currency Converter</Link></li>
                  <li><Link href="/date-time-tools/workday-calculator">Workday Calculator</Link></li>
                  <li><Link href="/date-time-tools/age-in-hours">Age in Hours Calculator</Link></li>
                </ul>
                </div>
              </div>
            </div>

            {/* Desktop Sidebar with AdSense */}
            <div className="hidden lg:block w-64 xl:w-72">
              <div className="sticky top-32 space-y-6">
                <div>
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                </div>
                <div>
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}