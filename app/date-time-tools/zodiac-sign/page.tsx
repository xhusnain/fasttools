import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ZodiacSignFinder } from "@/components/zodiac-sign-finder"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Zodiac Sign Finder — Find Your Zodiac by Birth Date | SmartToolboxes",
  description:
    "Find your zodiac sign from your birth date. Learn dates, elements, modalities, and typical traits for each sun sign.",
  keywords: [
    "zodiac sign finder",
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
    "aquarius dates",
    "pisces dates",
    "element and modality",
    "sun sign traits",
    "zodiac compatibility basics",
    "rising sign vs sun sign",
    "moon sign vs sun sign",
    "western astrology zodiac",
    "free zodiac finder"
  ],
  alternates: { canonical: "https://www.fasttools.store/date-time-tools/zodiac-sign" },
  openGraph: {
    title: "Zodiac Sign Finder — Find Your Sign",
    description: "Find your zodiac by birth date and learn sign basics.",
    type: "website",
    url: "https://www.fasttools.store/date-time-tools/zodiac-sign",
  },
  twitter: { card: "summary_large_image", title: "Zodiac Sign Finder", description: "Discover your zodiac sign by birth date." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Zodiac Sign Finder",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/date-time-tools/zodiac-sign",
      description:
        "Find your zodiac (sun) sign from your birth date and learn key sign traits.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Find sign by date", "Sign dates list", "Copy/Share"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function ZodiacSignPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdSpace position="header" />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Zodiac Sign Finder", href: "/date-time-tools/zodiac-sign" },
          ]}
        />

        <div className="mt-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Zodiac Sign Finder — Find Your Sign</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">Discover your zodiac sign by birth date and learn its element, modality, and signature traits.</p>
          </div>

          <ZodiacSignFinder />

          <AdSpace position="content" />

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
