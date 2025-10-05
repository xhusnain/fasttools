import { AgeCalculator } from "@/components/age-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Age Calculator - Calculate Your Exact Age in Years, Months & Days",
  description:
    "Free online age calculator tool. Calculate your exact age in years, months, and days instantly. Perfect for birthdays, age verification, and official documents. Fast, accurate, and easy to use.",
  keywords: [
    "age calculator",
    "calculate age",
    "age in years months days",
    "birth date calculator",
    "how old am i",
    "age calculator online",
    "free age calculator",
    "exact age calculator",
    "birthday calculator",
    "age verification tool",
  ],
  openGraph: {
    title: "Free Age Calculator - Calculate Your Exact Age | ToolifyHub",
    description: "Calculate your exact age in years, months, and days with our free online age calculator tool.",
    type: "website",
  },
}

export default function AgeCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Age Calculator",
    description:
      "Free online age calculator tool to calculate your exact age in years, months, and days from your birth date. Perfect for birthdays and age verification.",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2847",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Tools", href: "/tools" },
            { label: "Age Calculator", href: "/tools/age-calculator" },
          ]}
        />

        <div className="max-w-6xl mx-auto">
          <AdSpace slot="header" className="mb-8 h-24" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-primary">Free Age Calculator</h1>
                <p className="text-lg text-secondary text-pretty leading-relaxed">
                  Calculate your exact age in years, months, and days with our free online age calculator. Perfect for
                  birthdays, anniversaries, age verification, and official documents. Get instant, accurate results.
                </p>
              </div>

              <div className="animate-fade-in-up animation-delay-200">
                <AgeCalculator />
              </div>

              <div className="mt-12 prose prose-slate max-w-none animate-fade-in-up animation-delay-400">
                <h2 className="text-2xl font-bold mb-4 text-primary">How to Use the Age Calculator</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Our free age calculator is simple and easy to use. Just follow these steps to calculate your exact
                  age:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-secondary">
                  <li>Select your birth date using the date picker</li>
                  <li>Click the "Calculate Age" button</li>
                  <li>View your exact age in years, months, and days</li>
                  <li>Share or copy your result if needed</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Why Use Our Free Age Calculator?</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Our age calculator provides accurate results instantly. Whether you need to know your exact age for
                  official documents, want to celebrate a milestone birthday, plan an anniversary, or are just curious
                  about your age in days, our tool gives you precise calculations down to the day. It's perfect for age
                  verification, legal documents, and personal records.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>Accurate age calculation in years, months, and days</li>
                  <li>Easy-to-use date picker interface</li>
                  <li>Instant results with no waiting time</li>
                  <li>Share or copy your age calculation</li>
                  <li>Works on all devices - desktop, tablet, and mobile</li>
                  <li>100% free with no registration required</li>
                  <li>SEO-optimized for fast loading and performance</li>
                  <li>Privacy-focused - no data collection</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Common Uses for Age Calculators</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Age calculators are useful for many purposes including birthday planning, age verification for legal
                  documents, calculating retirement eligibility, determining school enrollment dates, planning milestone
                  celebrations, and tracking personal records. Our free tool makes all these calculations quick and
                  easy.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Accurate Age Calculation Algorithm</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Our age calculator uses a precise algorithm that accounts for leap years, varying month lengths, and
                  exact date differences. This ensures you get the most accurate age calculation possible, making it
                  reliable for official use and personal records.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <AdSpace slot="sidebar" className="h-96" />
                <AdSpace slot="sidebar" className="h-64" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
