import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { WorkdayCalculator } from "@/components/workday-calculator"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Workday Calculator — Business Days Between Dates | SmartToolboxes",
  description:
    "Calculate business days between dates, excluding weekends and optional holidays. Ideal for project planning, HR, and delivery timelines.",
  keywords: [
    "workday calculator",
    "business days calculator",
    "working days between dates",
    "weekday calculator",
    "business day counter",
    "work days between dates",
    "exclude weekends",
    "exclude holidays",
    "holiday calendar",
    "lead time calculator",
    "turnaround time calculator",
    "sla business days",
    "shipping business days",
    "project schedule business days",
    "hr working days",
    "office days calculator",
    "work schedule calculator",
    "date difference business days",
    "deadline business days",
    "workdays in a month",
    "workdays in a year",
    "free workday calculator"
  ],
  alternates: { canonical: "https://www.fasttools.store/date-time-tools/workday-calculator" },
  openGraph: {
    title: "Workday Calculator — Business Days",
    description: "Compute business days between two dates with optional holidays.",
    type: "website",
    url: "https://www.fasttools.store/date-time-tools/workday-calculator",
  },
  twitter: { card: "summary_large_image", title: "Workday Calculator", description: "Business days between dates with holiday options." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Workday Calculator",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/date-time-tools/workday-calculator",
      description:
        "Calculate business days between dates excluding weekends and optional holidays.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Exclude weekends", "Optional holidays", "Copy results"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function WorkdayCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdSpace slot="header" className="h-20" />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Workday Calculator", href: "/date-time-tools/workday-calculator" },
          ]}
        />

        <div className="mt-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Workday Calculator — Business Days Between Dates</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Compute business days between two dates with optional holidays excluded.</p>
          </div>

          <WorkdayCalculator />

          <AdSpace slot="content" className="h-24" />

          <div className="prose prose-sm max-w-none mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Calculate Business Days</h2>
            <h3 className="text-xl font-semibold mb-2 text-foreground">1) Select Start and End Dates</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Pick your date range; weekends are excluded by default.</li>
              <li>Add holidays if needed to match your region or company policy.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Review Results</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>See business days count and next/previous business day hints.</li>
              <li>Copy results for project plans and SLAs.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/date-time-tools/date-to-day">Date to Day Finder</Link></li>
              <li><Link href="/date-time-tools/year-end-countdown">Year End Countdown</Link></li>
              <li><Link href="/converters/timezone">Time Zone Converter</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
