import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { WorkdayCalculator } from "@/components/workday-calculator"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Workday Calculator | Business Days Between Dates | FastTools",
  description:
    "Calculate business days between dates, excluding weekends and optional holidays. Ideal for project planning, HR, and delivery timelines.",
  keywords: [
    // Primary Keywords (20)
    "workday calculator",
    "free workday calculator",
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
    
    // Secondary Keywords (20)
    "workdays in a month",
    "workdays in a year",
    "business days between dates",
    "working days calculator",
    "weekday counter",
    "business day finder",
    "work day calculator",
    "business hours calculator",
    "working hours calculator",
    "office hours calculator",
    "business time calculator",
    "work time calculator",
    "business day tracker",
    "work day tracker",
    "business day counter",
    "work day counter",
    "business day finder",
    "work day finder",
    "business day calculator",
    "work day calculator",
    
    // Long-tail Keywords (20)
    "free online workday calculator",
    "best workday calculator online",
    "workday calculator with holidays",
    "free workday calculator tool online",
    "online workday calculator free",
    "workday calculator online free",
    "business days calculator free online",
    "working days calculator free online",
    "weekday calculator free online",
    "business day counter free online",
    "work days between dates free online",
    "exclude weekends calculator free online",
    "exclude holidays calculator free online",
    "holiday calendar calculator free online",
    "lead time calculator free online",
    "turnaround time calculator free online",
    "sla business days calculator free online",
    "shipping business days calculator free online",
    "project schedule business days calculator free online",
    "hr working days calculator free online",
    
    // Additional SEO Keywords
    "office days calculator",
    "work schedule calculator",
    "date difference business days",
    "deadline business days",
    "workdays in a month",
    "workdays in a year",
    "business days between dates",
    "working days between dates",
    "weekdays between dates",
    "business days in month",
    "working days in month",
    "weekdays in month",
    "business days in year",
    "working days in year",
    "weekdays in year",
    "business days remaining",
    "working days remaining",
    "weekdays remaining",
    "business days passed",
    "working days passed",
    "weekdays passed",
    "business days left",
    "working days left",
    "weekdays left",
    "business days count",
    "working days count",
    "weekdays count",
    "business days total",
    "working days total",
    "weekdays total",
    "business days calculation",
    "working days calculation",
    "weekdays calculation",
    "business days formula",
    "working days formula",
    "weekdays formula",
    "business days algorithm",
    "working days algorithm",
    "weekdays algorithm"
  ],
  alternates: { canonical: "https://www.fasttools.store/date-time-tools/workday-calculator" },
  openGraph: {
    title: "Free Workday Calculator | Business Days Between Dates | FastTools",
    description: "Calculate business days between dates, excluding weekends and optional holidays. Ideal for project planning, HR, and delivery timelines.",
    type: "website",
    url: "https://www.fasttools.store/date-time-tools/workday-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Workday Calculator - Business Days Between Dates",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Workday Calculator | Business Days Between Dates | FastTools",
    description: "Calculate business days between dates, excluding weekends and optional holidays. Ideal for project planning, HR, and delivery timelines.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Workday Calculator",
      alternateName: "Business Days Calculator",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/date-time-tools/workday-calculator",
      description:
        "Calculate business days between dates excluding weekends and optional holidays.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Exclude weekends", 
        "Optional holidays", 
        "Copy results",
        "Project planning",
        "HR calculations",
        "Delivery timelines",
        "SLA tracking",
        "Lead time calculation",
        "Turnaround time",
        "Business day counter"
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
      downloadUrl: "https://www.fasttools.store/date-time-tools/workday-calculator",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "workday calculator, free workday calculator, business days calculator, working days between dates, weekday calculator, business day counter",
      about: {
        "@type": "Thing",
        name: "Business Day Calculation",
        description: "Free online tools for calculating business days between dates, excluding weekends and holidays"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function WorkdayCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Workday Calculator", href: "/date-time-tools/workday-calculator" },
          ]}
        />

        <div className="mt-8 space-y-8">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Workday Calculator — Business Days Between Dates</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Compute business days between two dates with optional holidays excluded.</p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <WorkdayCalculator />

          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

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
