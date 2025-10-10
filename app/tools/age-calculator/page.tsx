import { AgeCalculator } from "@/components/age-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Age Calculator - Calculate Your Exact Age in Years, Months & Days | FastTools",
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
    "age in days calculator",
    "age in hours calculator",
    "precise age calculator",
    "age calculator with time",
    "birthday age calculator",
    "age calculator years months days",
    "how old calculator",
    "age finder",
    "birthday finder",
    "age verification",
  ],
  openGraph: {
    title: "Free Age Calculator - Calculate Your Exact Age | FastTools",
    description: "Calculate your exact age in years, months, and days with our free online age calculator tool.",
    type: "website",
    url: "https://toolify-hub.com/tools/age-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://toolify-hub.com/og-age-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Age Calculator - FastTools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Age Calculator - Calculate Your Exact Age | FastTools",
    description: "Calculate your exact age in years, months, and days with our free online age calculator tool.",
    images: ["https://toolify-hub.com/og-age-calculator.jpg"],
  },
  alternates: {
    canonical: "https://toolify-hub.com/tools/age-calculator",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    url: "https://toolify-hub.com/tools/age-calculator",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://toolify-hub.com"
    },
    datePublished: "2024-01-01",
    dateModified: "2024-12-19",
    version: "2.0",
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
    featureList: [
      "Calculate exact age in years, months, and days",
      "Instant age calculation",
      "Mobile-friendly interface",
      "No registration required",
      "Free to use",
      "Accurate calculations"
    ],
    screenshot: "https://toolify-hub.com/age-calculator-screenshot.jpg",
    softwareHelp: {
      "@type": "HowTo",
      name: "How to Use Age Calculator",
      description: "Step-by-step guide to calculate your age",
      step: [
        {
          "@type": "HowToStep",
          name: "Enter Birth Date",
          text: "Select your birth date using the date picker"
        },
        {
          "@type": "HowToStep", 
          name: "Calculate Age",
          text: "Click the calculate button to get your exact age"
        },
        {
          "@type": "HowToStep",
          name: "View Results",
          text: "See your age in years, months, and days"
        }
      ]
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I calculate my exact age?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To calculate your exact age, enter your birth date in our age calculator and click calculate. The tool will show your age in years, months, and days."
        }
      },
      {
        "@type": "Question", 
        name: "Is the age calculator free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our age calculator is completely free to use. No registration or payment required."
        }
      },
      {
        "@type": "Question",
        name: "How accurate is the age calculator?",
        acceptedAnswer: {
          "@type": "Answer", 
          text: "Our age calculator is highly accurate and accounts for leap years, varying month lengths, and exact date differences to provide precise calculations."
        }
      },
      {
        "@type": "Question",
        name: "Can I calculate age in different formats?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our calculator shows age in years, months, and days, giving you a comprehensive breakdown of your exact age."
        }
      },
      {
        "@type": "Question",
        name: "What can I use the age calculator for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The age calculator is perfect for birthday planning, age verification for documents, calculating retirement eligibility, school enrollment, and personal records."
        }
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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

              {/* Center Content Ad */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-24" />
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

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Related Tools and Calculators</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Explore our collection of related date and time tools to enhance your productivity:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li><a href="/date-time-tools/age-in-hours" className="text-blue-600 hover:text-blue-800 underline">Age in Hours Calculator</a> - Calculate your age in hours for precise time tracking</li>
                  <li><a href="/tools/date-difference" className="text-blue-600 hover:text-blue-800 underline">Date Difference Calculator</a> - Find the difference between any two dates</li>
                  <li><a href="/tools/time-duration" className="text-blue-600 hover:text-blue-800 underline">Time Duration Calculator</a> - Calculate duration between two times</li>
                  <li><a href="/date-time-tools/date-to-day" className="text-blue-600 hover:text-blue-800 underline">Date to Day Finder</a> - Find what day of the week any date falls on</li>
                  <li><a href="/date-time-tools/workday-calculator" className="text-blue-600 hover:text-blue-800 underline">Workday Calculator</a> - Calculate business days between dates</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Age Calculation Methods Explained</h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Understanding how age is calculated helps you appreciate the accuracy of our tool. Age calculation involves several factors:
                </p>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li><strong>Leap Years:</strong> Our calculator accounts for leap years (years divisible by 4, except century years not divisible by 400)</li>
                  <li><strong>Month Variations:</strong> Different months have different numbers of days (28-31 days)</li>
                  <li><strong>Precise Date Calculation:</strong> We calculate exact differences between birth date and current date</li>
                  <li><strong>Time Zone Considerations:</strong> Calculations are based on the current date and time</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">How do I calculate my exact age?</h3>
                    <p className="text-secondary">To calculate your exact age, enter your birth date in our age calculator and click calculate. The tool will show your age in years, months, and days.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Is the age calculator free to use?</h3>
                    <p className="text-secondary">Yes, our age calculator is completely free to use. No registration or payment required.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">How accurate is the age calculator?</h3>
                    <p className="text-secondary">Our age calculator is highly accurate and accounts for leap years, varying month lengths, and exact date differences to provide precise calculations.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Can I calculate age in different formats?</h3>
                    <p className="text-secondary">Yes, our calculator shows age in years, months, and days, giving you a comprehensive breakdown of your exact age.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">What can I use the age calculator for?</h3>
                    <p className="text-secondary">The age calculator is perfect for birthday planning, age verification for documents, calculating retirement eligibility, school enrollment, and personal records.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Age Calculator for Different Purposes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Legal and Official Use</h3>
                    <ul className="list-disc list-inside space-y-1 text-secondary text-sm">
                      <li>Age verification for documents</li>
                      <li>Legal age requirements</li>
                      <li>Official record keeping</li>
                      <li>Government form completion</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Personal and Social Use</h3>
                    <ul className="list-disc list-inside space-y-1 text-secondary text-sm">
                      <li>Birthday planning and celebrations</li>
                      <li>Milestone tracking</li>
                      <li>Personal record keeping</li>
                      <li>Social media age verification</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Business and Professional</h3>
                    <ul className="list-disc list-inside space-y-1 text-secondary text-sm">
                      <li>Employee age verification</li>
                      <li>Retirement planning</li>
                      <li>Insurance calculations</li>
                      <li>HR record keeping</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Educational Use</h3>
                    <ul className="list-disc list-inside space-y-1 text-secondary text-sm">
                      <li>School enrollment age verification</li>
                      <li>Student record keeping</li>
                      <li>Academic milestone tracking</li>
                      <li>Educational planning</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Tips for Accurate Age Calculation</h2>
                <ul className="list-disc list-inside space-y-2 text-secondary">
                  <li>Always use your exact birth date for the most accurate results</li>
                  <li>Consider time zones if you were born in a different time zone</li>
                  <li>Account for leap years in your calculations</li>
                  <li>Use our tool for official documents and legal purposes</li>
                  <li>Keep a record of your calculated age for future reference</li>
                </ul>
              </div>

              {/* Bottom Content Ad */}
              <div className="mt-8">
                <AdSpace slot="content" className="w-full h-24" />
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
