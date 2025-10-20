import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ZodiacSignFinder } from "@/components/zodiac-sign-finder"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Zodiac Sign Finder | Find Your Zodiac by Birth Date | FastTools",
  description:
    "Find your zodiac sign from your birth date. Learn dates, elements, modalities, and typical traits for each sun sign.",
  keywords: [
    // Primary Keywords (20)
    "zodiac sign finder",
    "free zodiac sign finder",
    "zodiac calculator",
    "astrology sign",
    "horoscope sign",
    "birth sign",
    "zodiac by date",
    "star sign finder",
    "what is my zodiac sign",
    "zodiac sign dates",
    "aries dates",
    "taurus dates",
    "gemini dates",
    "cancer dates",
    "leo dates",
    "virgo dates",
    "libra dates",
    "scorpio dates",
    "sagittarius dates",
    "capricorn dates",
    
    // Secondary Keywords (20)
    "aquarius dates",
    "pisces dates",
    "element and modality",
    "sun sign traits",
    "zodiac compatibility basics",
    "rising sign vs sun sign",
    "moon sign vs sun sign",
    "western astrology zodiac",
    "free zodiac finder",
    "zodiac sign calculator",
    "astrology calculator",
    "horoscope calculator",
    "birth sign calculator",
    "zodiac by date calculator",
    "star sign calculator",
    "what is my zodiac sign calculator",
    "zodiac sign dates calculator",
    "aries dates calculator",
    "taurus dates calculator",
    "gemini dates calculator",
    
    // Long-tail Keywords (20)
    "free online zodiac sign finder",
    "best zodiac sign finder online",
    "zodiac sign finder with live preview",
    "free zodiac sign finder tool online",
    "online zodiac sign finder free",
    "zodiac sign finder online free",
    "zodiac calculator free online",
    "astrology sign free online",
    "horoscope sign free online",
    "birth sign free online",
    "zodiac by date free online",
    "star sign finder free online",
    "what is my zodiac sign free online",
    "zodiac sign dates free online",
    "aries dates free online",
    "taurus dates free online",
    "gemini dates free online",
    "cancer dates free online",
    "leo dates free online",
    "virgo dates free online",
    
    // Additional SEO Keywords
    "libra dates",
    "scorpio dates",
    "sagittarius dates",
    "capricorn dates",
    "aquarius dates",
    "pisces dates",
    "element and modality",
    "sun sign traits",
    "zodiac compatibility basics",
    "rising sign vs sun sign",
    "moon sign vs sun sign",
    "western astrology zodiac",
    "free zodiac finder",
    "zodiac sign calculator",
    "astrology calculator",
    "horoscope calculator",
    "birth sign calculator",
    "zodiac by date calculator",
    "star sign calculator",
    "what is my zodiac sign calculator",
    "zodiac sign dates calculator",
    "aries dates calculator",
    "taurus dates calculator",
    "gemini dates calculator",
    "cancer dates calculator",
    "leo dates calculator",
    "virgo dates calculator",
    "libra dates calculator",
    "scorpio dates calculator",
    "sagittarius dates calculator",
    "capricorn dates calculator",
    "aquarius dates calculator",
    "pisces dates calculator",
    "element and modality calculator",
    "sun sign traits calculator",
    "zodiac compatibility basics calculator",
    "rising sign vs sun sign calculator",
    "moon sign vs sun sign calculator",
    "western astrology zodiac calculator",
    "free zodiac finder calculator",
    "zodiac sign finder tool",
    "astrology sign finder tool",
    "horoscope sign finder tool",
    "birth sign finder tool",
    "zodiac by date finder tool",
    "star sign finder tool",
    "what is my zodiac sign finder tool",
    "zodiac sign dates finder tool",
    "aries dates finder tool",
    "taurus dates finder tool",
    "gemini dates finder tool",
    "cancer dates finder tool",
    "leo dates finder tool",
    "virgo dates finder tool",
    "libra dates finder tool",
    "scorpio dates finder tool",
    "sagittarius dates finder tool",
    "capricorn dates finder tool",
    "aquarius dates finder tool",
    "pisces dates finder tool",
    "element and modality finder tool",
    "sun sign traits finder tool",
    "zodiac compatibility basics finder tool",
    "rising sign vs sun sign finder tool",
    "moon sign vs sun sign finder tool",
    "western astrology zodiac finder tool",
    "free zodiac finder tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/date-time-tools/zodiac-sign" },
  openGraph: {
    title: "Free Zodiac Sign Finder | Find Your Zodiac by Birth Date | FastTools",
    description: "Find your zodiac sign from your birth date. Learn dates, elements, modalities, and typical traits for each sun sign.",
    type: "website",
    url: "https://www.fasttools.store/date-time-tools/zodiac-sign",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Zodiac Sign Finder - Find Your Zodiac by Birth Date",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Zodiac Sign Finder | Find Your Zodiac by Birth Date | FastTools",
    description: "Find your zodiac sign from your birth date. Learn dates, elements, modalities, and typical traits for each sun sign.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Zodiac Sign Finder",
      alternateName: "Astrology Sign Finder",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/date-time-tools/zodiac-sign",
      description:
        "Find your zodiac (sun) sign from your birth date and learn key sign traits.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Find sign by date", 
        "Sign dates list", 
        "Copy/Share",
        "Element and modality",
        "Sun sign traits",
        "Zodiac compatibility",
        "Rising sign info",
        "Moon sign info",
        "Western astrology",
        "Birth sign calculator"
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
      downloadUrl: "https://www.fasttools.store/date-time-tools/zodiac-sign",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "zodiac sign finder, free zodiac sign finder, zodiac calculator, astrology sign, horoscope sign, birth sign, zodiac by date",
      about: {
        "@type": "Thing",
        name: "Astrology and Zodiac",
        description: "Free online tools for finding zodiac signs, astrology calculations, and horoscope information"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function ZodiacSignPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Zodiac Sign Finder", href: "/date-time-tools/zodiac-sign" },
          ]}
        />

        <div className="mt-8 space-y-8">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Zodiac Sign Finder — Find Your Sign</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Discover your zodiac sign by birth date and learn its element, modality, and signature traits.</p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <ZodiacSignFinder />

          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="prose prose-sm max-w-none mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use</h2>
            <ol className="list-decimal pl-5 text-muted-foreground">
              <li>Enter your birth date to identify your zodiac (sun) sign.</li>
              <li>View sign dates, element (Fire, Earth, Air, Water), and modality (Cardinal, Fixed, Mutable).</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Signs and Date Ranges</h2>
            <p className="text-muted-foreground">Aries (Mar 21–Apr 19), Taurus (Apr 20–May 20), Gemini (May 21–Jun 20), Cancer (Jun 21–Jul 22), Leo (Jul 23–Aug 22), Virgo (Aug 23–Sep 22), Libra (Sep 23–Oct 22), Scorpio (Oct 23–Nov 21), Sagittarius (Nov 22–Dec 21), Capricorn (Dec 22–Jan 19), Aquarius (Jan 20–Feb 18), Pisces (Feb 19–Mar 20).</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/date-time-tools/date-to-day">Date to Day Finder</Link></li>
              <li><Link href="/date-time-tools/age-in-hours">Age in Hours</Link></li>
              <li><Link href="/date-time-tools/year-end-countdown">Year End Countdown</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
