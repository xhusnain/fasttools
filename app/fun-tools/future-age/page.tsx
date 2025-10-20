import { FutureAgePredictor } from "@/components/future-age-predictor"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Future Age Predictor | How Old Will I Be? | FastTools",
  description:
    "See how old you'll be in any future year. Fun age prediction with milestones, planning ideas, and shareable results.",
    keywords: [
        "future age predictor",
        "free future age predictor",
        "how old will I be",
        "age calculator",
        "calculate future age",
        "age in 2030",
        "age in 2040",
        "how old will I be in 10 years",
        "age milestones",
        "30th birthday",
        "40th birthday",
        "50th birthday",
        "retirement planning age",
        "college class of age",
        "kids age in year",
        "timeline age",
        "birthday year age",
        "date difference age",
        "target year age",
        "event planning age",
        "wedding year age",
        "anniversary age",
        "fun age tool",
        "share age result",
        "online age predictor",
        "future age predictor online",
        "age calculator online",
        "calculate future age online",
        "free online future age predictor",
        "best future age predictor online",
        "future age predictor with live preview",
        "age calculator free online",
        "how old will I be free online",
        "age in 2030 free online",
        "age milestones free online",
        "retirement planning age free online",
        "college class of age free online",
        "kids age in year free online",
        "timeline age free online",
        "future age tool",
        "age calculator tool",
        "how old will I be tool",
        "calculate future age tool",
        "online age predictor tool",
        "share age result tool",
        "fun age tool online",
        "future age predictor free online",
        "age milestones online",
        "30th birthday online",
        "50th birthday online",
        "retirement planning age online",
        "kids age in year online"
    ],

  alternates: { canonical: "https://www.fasttools.store/fun-tools/future-age" },
  openGraph: {
    title: "Future Age Predictor | How Old Will I Be? | FastTools",
    description: "See how old you'll be in any future year. Fun age prediction with milestones, planning ideas, and shareable results.",
    url: "https://www.fasttools.store/fun-tools/future-age",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Future Age Predictor - How Old Will I Be in a Year?",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Age Predictor | How Old Will I Be? | FastTools",
    description: "See how old you'll be in any future year. Fun age prediction with milestones, planning ideas, and shareable results.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Future Age Predictor",
      alternateName: "Age Calculator",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/fun-tools/future-age",
      description:
        "Calculate how old you will be in any future year and share fun milestones.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Enter target year", 
        "See age instantly", 
        "Share result",
        "Future age predictor",
        "How old will I be",
        "Age calculator",
        "Future age",
        "Age milestones",
        "Birthday planning",
        "Age timeline"
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
      downloadUrl: "https://www.fasttools.store/fun-tools/future-age",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "future age predictor, free future age predictor, how old will I be, age calculator, future age, calculate future age, age milestones",
      about: {
        "@type": "Thing",
        name: "Age Prediction and Planning",
        description: "Free online tools for age prediction, birthday planning, and milestone calculations"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function FutureAgePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
            { label: "Future Age Predictor", href: "/fun-tools/future-age" },
          ]}
        />

        <div className="max-w-2xl mx-auto mt-8 space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Future Age Predictor</h1>
            <p className="text-base text-muted-foreground text-pretty">
              Discover how old you'll be in any future year. Perfect for planning milestones and visualizing your
              future!
            </p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <FutureAgePredictor />

          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
            <div className="p-6 rounded-lg bg-muted/30 border border-border">
              <h2 className="text-xl font-bold mb-4 text-foreground">About Future Age Predictor</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our Future Age Predictor is a fun tool that helps you calculate how old you'll be in any future year.
                Whether you're planning for retirement, curious about milestone birthdays, or just want to see how old
                you'll be in a specific year, this tool makes it easy and fun!
              </p>
              <h3 className="text-lg font-bold mb-3 text-foreground">How to Use:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Enter your birth date</li>
                <li>Enter the target year you want to know your age for</li>
                <li>Click "Predict My Future Age" to see the result</li>
                <li>Share your result with friends and family!</li>
              </ol>
              <h3 className="text-lg font-bold mt-6 mb-3 text-foreground">Related Tools</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><Link href="/fun-tools/birthday-countdown">Birthday Countdown</Link></li>
                <li><Link href="/date-time-tools/age-in-hours">Age in Hours</Link></li>
                <li><Link href="/date-time-tools/date-to-day">Date to Day Finder</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
