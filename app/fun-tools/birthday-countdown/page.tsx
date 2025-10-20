import { BirthdayCountdown } from "@/components/birthday-countdown"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Birthday Countdown | Real-Time Timer | FastTools",
  description:
    "Live birthday countdown showing days, hours, minutes, and seconds until your next birthday. Share the timer with friends.",
  keywords: [
    // Primary Keywords (20)
    "birthday countdown",
    "free birthday countdown",
    "birthday timer",
    "days until birthday",
    "countdown to birthday",
    "birthday counter",
    "happy birthday timer",
    "share birthday countdown",
    "birthday reminder",
    "next birthday date",
    "live countdown",
    "party countdown",
    "celebration timer",
    "free birthday countdown",
    "birthday countdown timer",
    "birthday countdown app",
    "birthday countdown widget",
    "birthday countdown online",
    "birthday countdown free",
    "birthday countdown tool",
    
    // Secondary Keywords (20)
    "birthday countdown online",
    "birthday timer online",
    "days until birthday online",
    "countdown to birthday online",
    "birthday counter online",
    "happy birthday timer online",
    "share birthday countdown online",
    "birthday reminder online",
    "next birthday date online",
    "live countdown online",
    "party countdown online",
    "celebration timer online",
    "free birthday countdown online",
    "birthday countdown timer online",
    "birthday countdown app online",
    "birthday countdown widget online",
    "birthday countdown online online",
    "birthday countdown free online",
    "birthday countdown tool online",
    "birthday countdown calculator online",
    
    // Long-tail Keywords (20)
    "free online birthday countdown",
    "best birthday countdown online",
    "birthday countdown with live preview",
    "free birthday countdown tool online",
    "online birthday countdown free",
    "birthday countdown online free",
    "birthday timer free online",
    "days until birthday free online",
    "countdown to birthday free online",
    "birthday counter free online",
    "happy birthday timer free online",
    "share birthday countdown free online",
    "birthday reminder free online",
    "next birthday date free online",
    "live countdown free online",
    "party countdown free online",
    "celebration timer free online",
    "free birthday countdown free online",
    "birthday countdown timer free online",
    "birthday countdown app free online",
    
    // Additional SEO Keywords
    "birthday countdown widget",
    "birthday countdown online",
    "birthday countdown free",
    "birthday countdown tool",
    "birthday countdown calculator",
    "birthday countdown online",
    "birthday timer online",
    "days until birthday online",
    "countdown to birthday online",
    "birthday counter online",
    "happy birthday timer online",
    "share birthday countdown online",
    "birthday reminder online",
    "next birthday date online",
    "live countdown online",
    "party countdown online",
    "celebration timer online",
    "free birthday countdown online",
    "birthday countdown timer online",
    "birthday countdown app online",
    "birthday countdown widget online",
    "birthday countdown online online",
    "birthday countdown free online",
    "birthday countdown tool online",
    "birthday countdown calculator online",
    "birthday countdown free",
    "birthday timer free",
    "days until birthday free",
    "countdown to birthday free",
    "birthday counter free",
    "happy birthday timer free",
    "share birthday countdown free",
    "birthday reminder free",
    "next birthday date free",
    "live countdown free",
    "party countdown free",
    "celebration timer free",
    "free birthday countdown free",
    "birthday countdown timer free",
    "birthday countdown app free",
    "birthday countdown widget free",
    "birthday countdown online free",
    "birthday countdown free free",
    "birthday countdown tool free",
    "birthday countdown calculator free",
    "birthday countdown tool",
    "birthday timer tool",
    "days until birthday tool",
    "countdown to birthday tool",
    "birthday counter tool",
    "happy birthday timer tool",
    "share birthday countdown tool",
    "birthday reminder tool",
    "next birthday date tool",
    "live countdown tool",
    "party countdown tool",
    "celebration timer tool",
    "free birthday countdown tool",
    "birthday countdown timer tool",
    "birthday countdown app tool",
    "birthday countdown widget tool",
    "birthday countdown online tool",
    "birthday countdown free tool",
    "birthday countdown tool tool",
    "birthday countdown calculator tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/fun-tools/birthday-countdown" },
  openGraph: {
    title: "Free Birthday Countdown | Real‑Time Birthday Timer | FastTools",
    description: "Live birthday countdown showing days, hours, minutes, and seconds until your next birthday. Share the timer with friends.",
    url: "https://www.fasttools.store/fun-tools/birthday-countdown",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Birthday Countdown - Real‑Time Birthday Timer",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Birthday Countdown | Real‑Time Birthday Timer | FastTools",
    description: "Live birthday countdown showing days, hours, minutes, and seconds until your next birthday. Share the timer with friends.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Birthday Countdown",
      alternateName: "Birthday Timer",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/fun-tools/birthday-countdown",
      description:
        "Live countdown to your next birthday with share options.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Live timer", 
        "Share link", 
        "Next birthday date",
        "Birthday countdown",
        "Birthday timer",
        "Days until birthday",
        "Countdown to birthday",
        "Birthday counter",
        "Happy birthday timer",
        "Celebration timer"
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
      downloadUrl: "https://www.fasttools.store/fun-tools/birthday-countdown",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "birthday countdown, free birthday countdown, birthday timer, days until birthday, countdown to birthday, birthday counter, happy birthday timer",
      about: {
        "@type": "Thing",
        name: "Birthday and Celebration Tools",
        description: "Free online tools for birthday countdowns, celebrations, and party planning"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function BirthdayCountdownPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
            { label: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
          ]}
        />

        <div className="max-w-2xl mx-auto mt-8 space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Birthday Countdown</h1>
            <p className="text-base text-muted-foreground text-pretty">
              Real-time countdown to your next birthday in days, hours, minutes, and seconds!
            </p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <BirthdayCountdown />

          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
            <div className="p-6 rounded-lg bg-muted/30 border border-border">
              <h2 className="text-xl font-bold mb-4 text-foreground">About Birthday Countdown</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our Birthday Countdown tool provides a real-time countdown to your next birthday, showing exactly how
                many days, hours, minutes, and seconds are left. Perfect for building excitement and sharing with
                friends and family!
              </p>
              <h3 className="text-lg font-bold mb-3 text-foreground">Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Real-time countdown that updates every second</li>
                <li>Shows days, hours, minutes, and seconds</li>
                <li>Displays your next birthday date</li>
                <li>Easy sharing options for social media</li>
              </ul>
              <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Related Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><Link href="/fun-tools/future-age">Future Age Predictor</Link></li>
                <li><Link href="/fun-tools/anniversary">Anniversary Calculator</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
