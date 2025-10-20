import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AgeInHoursCalculator } from "@/components/age-in-hours-calculator"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Age in Hours Calculator | Hours, Minutes, Seconds | FastTools",
  description:
    "Calculate your exact age in hours, minutes, and seconds. Fun and precise age converter with birthday countdown and shareable results.",
  keywords: [
    // Primary Keywords (20)
    "age in hours",
    "free age in hours calculator",
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
    
    // Secondary Keywords (20)
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
    
    // Long-tail Keywords (20)
    "free online age in hours calculator",
    "best age in hours calculator online",
    "age in hours calculator with live preview",
    "free age in hours calculator tool online",
    "online age in hours calculator free",
    "age in hours calculator online free",
    "age in minutes calculator free",
    "age in seconds calculator free",
    "how old am I in hours free",
    "age calculator free online",
    "time since birth calculator free",
    "time duration since date calculator free",
    "date difference in hours calculator free",
    "age converter free online",
    "birthday countdown calculator free",
    "age tracker free online",
    "calculate hours lived free",
    "calculate minutes lived free",
    "how many seconds old free",
    "hours between dates calculator free",
    
    // Additional SEO Keywords
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
  alternates: { canonical: "https://www.fasttools.store/date-time-tools/age-in-hours" },
  openGraph: {
    title: "Free Age in Hours Calculator | Hours, Minutes, Seconds Old | FastTools",
    description: "Calculate your exact age in hours, minutes, and seconds. Fun and precise age converter with birthday countdown and shareable results.",
    type: "website",
    url: "https://www.fasttools.store/date-time-tools/age-in-hours",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Age in Hours Calculator - Hours, Minutes, Seconds Old",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Age in Hours Calculator | Hours, Minutes, Seconds Old | FastTools",
    description: "Calculate your exact age in hours, minutes, and seconds. Fun and precise age converter with birthday countdown and shareable results.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Age in Hours Calculator",
      alternateName: "Age Calculator in Hours, Minutes, Seconds",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/date-time-tools/age-in-hours",
      description:
        "Calculate exact age in hours, minutes, and seconds with shareable results and birthday countdown.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Age in hours/minutes/seconds", 
        "Birthday countdown", 
        "Copy/share results",
        "Live age calculation",
        "Milestone tracking",
        "Fun age facts",
        "Social sharing",
        "Mobile friendly",
        "Real-time updates",
        "Educational content"
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
      downloadUrl: "https://www.fasttools.store/date-time-tools/age-in-hours",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "age in hours, free age in hours calculator, age in minutes, age in seconds, age calculator, time since birth, birthday countdown",
      about: {
        "@type": "Thing",
        name: "Age Calculation",
        description: "Free online tools for calculating age in various time units including hours, minutes, and seconds"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function AgeInHoursPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Age in Hours", href: "/date-time-tools/age-in-hours" },
          ]}
        />

        <div className="mt-8 space-y-8">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Age in Hours Calculator — Hours, Minutes, Seconds Old</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">See your exact age in hours, minutes, and seconds with a live calculation.</p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <AgeInHoursCalculator />

          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

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
