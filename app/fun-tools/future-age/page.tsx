import { FutureAgePredictor } from "@/components/future-age-predictor"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Future Age Predictor — How Old Will I Be in a Year? | SmartToolboxes",
  description:
    "See how old you'll be in any future year. Fun age prediction with milestones, planning ideas, and shareable results.",
  keywords: [
    "future age predictor",
    "how old will I be",
    "age calculator",
    "future age",
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
    "age chart future",
    "birthday year age",
    "date difference age",
    "target year age",
    "event planning age",
    "wedding year age",
    "anniversary age",
    "fun age tool",
    "share age result",
    "free age predictor",
    "online age predictor"
  ],
  alternates: { canonical: "https://www.fasttools.store/fun-tools/future-age" },
  openGraph: {
    title: "Future Age Predictor — How Old Will I Be?",
    description: "Enter a year and instantly see your age with milestone ideas.",
    type: "website",
    url: "https://www.fasttools.store/fun-tools/future-age",
  },
  twitter: { card: "summary_large_image", title: "Future Age Predictor", description: "See your age in any future year." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Future Age Predictor",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/fun-tools/future-age",
      description:
        "Calculate how old you will be in any future year and share fun milestones.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Enter target year", "See age instantly", "Share result"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
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

          <AdSpace slot="content" className="h-24" />

          <FutureAgePredictor />

          {/* Center Content Ad */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24" />
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

          {/* Bottom Content Ad */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full h-24" />
          </div>
        </div>
      </div>
    </div>
  )
}
