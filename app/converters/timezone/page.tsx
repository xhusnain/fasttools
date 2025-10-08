import { TimezoneConverter } from "@/components/timezone-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Time Zone Converter | Convert Time Across Time Zones | FastTools",
  description:
    "Convert time between time zones worldwide. Ideal for scheduling international meetings and remote teamwork.",
  keywords: [
    // Primary Keywords (20)
    "timezone converter",
    "free timezone converter",
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
    
    // Secondary Keywords (20)
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
    
    // Long-tail Keywords (20)
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
    "dst adjustments free online",
    
    // Additional SEO Keywords
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
    "summer time vs standard time",
    "timezone converter online",
    "time zone converter online",
    "world clock online",
    "time converter online",
    "international time online",
    "utc converter online",
    "gmt to est online",
    "est to pst online",
    "pst to ist online",
    "ist to gmt online",
    "meeting time converter online",
    "schedule across time zones online",
    "remote team scheduling online",
    "daylight saving time online",
    "dst adjustments online",
    "24 hour clock online",
    "12 hour clock online",
    "military time conversion online",
    "time difference calculator online",
    "convert date and time online",
    "city time converter online",
    "country time converter online",
    "time zone map online",
    "world time zones list online",
    "free timezone converter online",
    "convert utc to local time online",
    "local time to utc online",
    "convert gmt to pst online",
    "convert est to cet online",
    "convert cet to ist online",
    "convert sgt to pst online",
    "convert aedt to ist online",
    "convert bst to ist online",
    "convert mst to est online",
    "convert ist to est online",
    "convert ist to pst online",
    "convert utc to est online",
    "convert utc to pst online",
    "convert utc to gmt online",
    "time zones by country online",
    "work hours overlap calculator online",
    "world meeting planner online",
    "best time to meet tool online",
    "schedule across continents online",
    "flight time zones conversion online",
    "calendar time zone support online",
    "outlook google calendar timezone online",
    "remote team timezones online",
    "international call time online",
    "time zone abbreviation list online",
    "dst start end dates online",
    "summer time vs standard time online"
  ],
  alternates: { canonical: "https://www.fasttools.store/converters/timezone" },
  openGraph: {
    title: "Free Time Zone Converter | Convert Time Across Time Zones | FastTools",
    description: "Convert time between time zones worldwide. Ideal for scheduling international meetings and remote teamwork.",
    url: "https://fasttools.store/converters/timezone",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
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
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Time Zone Converter",
      alternateName: "World Clock & Time Zone Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/converters/timezone",
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
      downloadUrl: "https://fasttools.store/converters/timezone",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "timezone converter, free timezone converter, time zone converter, world clock, time converter, international time, utc converter, meeting time converter",
      about: {
        "@type": "Thing",
        name: "Time Zone Conversion",
        description: "Free online tools for converting time between different time zones and scheduling international meetings"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
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

        <div className="max-w-6xl mx-auto">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Free Time Zone Converter — Global Time & Meeting Planner</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">Convert time zones accurately with DST awareness. Plan international meetings in seconds.</p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <TimezoneConverter />

              {/* Second Ad Space - After Tool */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
              </div>

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

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Understanding Time Zones</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Time zones are regions of the Earth that observe a uniform standard time. Understanding them is crucial for global communication:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>UTC (Coordinated Universal Time):</strong> The primary time standard by which the world regulates clocks</li>
                  <li><strong>GMT (Greenwich Mean Time):</strong> The mean solar time at the Royal Observatory in Greenwich, London</li>
                  <li><strong>DST (Daylight Saving Time):</strong> The practice of advancing clocks during warmer months</li>
                  <li><strong>Offset:</strong> The difference in hours and minutes from UTC</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Major Time Zones Around the World</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Here are the most commonly used time zones for international business and travel:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>UTC+0 (GMT):</strong> London, Dublin, Lisbon</li>
                  <li><strong>UTC+1 (CET):</strong> Paris, Berlin, Rome, Madrid</li>
                  <li><strong>UTC+2 (EET):</strong> Athens, Helsinki, Cairo</li>
                  <li><strong>UTC+3 (MSK):</strong> Moscow, Istanbul, Nairobi</li>
                  <li><strong>UTC+5:30 (IST):</strong> New Delhi, Mumbai, Bangalore</li>
                  <li><strong>UTC+8 (CST):</strong> Beijing, Singapore, Manila</li>
                  <li><strong>UTC+9 (JST):</strong> Tokyo, Seoul, Seoul</li>
                  <li><strong>UTC-5 (EST):</strong> New York, Toronto, Miami</li>
                  <li><strong>UTC-8 (PST):</strong> Los Angeles, Vancouver, Seattle</li>
                  <li><strong>UTC+10 (AEST):</strong> Sydney, Melbourne, Brisbane</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Daylight Saving Time (DST)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DST is the practice of advancing clocks during warmer months to extend evening daylight:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Spring Forward:</strong> Clocks move forward by 1 hour (lose 1 hour of sleep)</li>
                  <li><strong>Fall Back:</strong> Clocks move backward by 1 hour (gain 1 hour of sleep)</li>
                  <li><strong>Northern Hemisphere:</strong> DST typically runs from March to November</li>
                  <li><strong>Southern Hemisphere:</strong> DST typically runs from September to April</li>
                  <li><strong>Not All Countries:</strong> Some countries don't observe DST at all</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Tips for Scheduling Across Time Zones</h2>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Rotate meeting times to share inconvenience fairly.</li>
                  <li>Confirm DST windows around spring/fall transitions.</li>
                  <li>Prefer 24‑hour time to avoid AM/PM confusion.</li>
                  <li>Use time zone abbreviations consistently</li>
                  <li>Consider local holidays and working hours</li>
                  <li>Provide multiple time options for large meetings</li>
                  <li>Use calendar tools that handle time zones automatically</li>
                  <li>Double-check times during DST transition periods</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Common Time Zone Abbreviations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Understanding time zone abbreviations helps you communicate times clearly:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>UTC/GMT:</strong> Coordinated Universal Time / Greenwich Mean Time</li>
                  <li><strong>EST/EDT:</strong> Eastern Standard/Daylight Time (UTC-5/-4)</li>
                  <li><strong>CST/CDT:</strong> Central Standard/Daylight Time (UTC-6/-5)</li>
                  <li><strong>MST/MDT:</strong> Mountain Standard/Daylight Time (UTC-7/-6)</li>
                  <li><strong>PST/PDT:</strong> Pacific Standard/Daylight Time (UTC-8/-7)</li>
                  <li><strong>CET/CEST:</strong> Central European Time/Daylight Time (UTC+1/+2)</li>
                  <li><strong>IST:</strong> Indian Standard Time (UTC+5:30)</li>
                  <li><strong>JST:</strong> Japan Standard Time (UTC+9)</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Business Hours and Meeting Planning</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Effective meeting planning across time zones requires understanding business hours:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Standard Business Hours:</strong> 9 AM - 5 PM local time</li>
                  <li><strong>Global Teams:</strong> Find overlapping hours for all participants</li>
                  <li><strong>Flexible Scheduling:</strong> Consider early morning or evening meetings</li>
                  <li><strong>Time Zone Etiquette:</strong> Rotate meeting times to share inconvenience</li>
                  <li><strong>Advance Notice:</strong> Provide sufficient time for preparation</li>
                  <li><strong>Clear Communication:</strong> Always specify time zones in invitations</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Travel and Time Zone Considerations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When traveling across time zones, consider these factors:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Jet Lag:</strong> Allow time for adjustment to new time zones</li>
                  <li><strong>Flight Times:</strong> Consider time zone changes when booking flights</li>
                  <li><strong>Local Time:</strong> Always check local time at your destination</li>
                  <li><strong>Business Hours:</strong> Verify local business hours and holidays</li>
                  <li><strong>Communication:</strong> Inform contacts of your travel schedule</li>
                  <li><strong>Technology:</strong> Update devices to local time zones</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How do I convert time between different time zones?</h3>
                    <p className="text-muted-foreground">Use our time zone converter by selecting your source and destination cities, then enter the time you want to convert. The tool handles DST automatically.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">What's the difference between UTC and GMT?</h3>
                    <p className="text-muted-foreground">UTC is the modern standard, while GMT is based on solar time. For practical purposes, they're often used interchangeably, but UTC is more precise.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How does daylight saving time affect time zone conversion?</h3>
                    <p className="text-muted-foreground">DST changes the offset from UTC by 1 hour. Our converter automatically accounts for DST rules, but always double-check during transition periods.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Can I convert times for future dates?</h3>
                    <p className="text-muted-foreground">Yes, our converter can handle future dates and will account for DST changes that may occur between now and your target date.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">What if a country doesn't observe daylight saving time?</h3>
                    <p className="text-muted-foreground">Our converter knows which countries observe DST and which don't, so it will show the correct time regardless of DST status.                </p>
              </div>

            </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><Link href="/converters/currency">Currency Converter</Link></li>
                  <li><Link href="/date-time-tools/workday-calculator">Workday Calculator</Link></li>
                  <li><Link href="/date-time-tools/age-in-hours">Age in Hours Calculator</Link></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <AdSpace slot="sidebar" className="h-96 border border-border/60 rounded-xl shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}