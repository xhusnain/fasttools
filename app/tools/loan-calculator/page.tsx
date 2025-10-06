import { LoanCalculator } from "@/components/loan-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Loan EMI Calculator - Calculate Monthly Payments | Finance Tool | ToolifyHub",
  description:
    "Calculate your loan EMI (monthly payment) instantly with our free loan calculator. Works for home loans, car loans, personal loans. Get accurate EMI, interest, and total payment breakdown. Fast, accurate, and easy to use.",
  keywords: [
    "loan calculator",
    "EMI calculator",
    "mortgage calculator",
    "loan payment calculator",
    "interest calculator",
    "home loan calculator",
    "car loan calculator",
    "personal loan calculator",
    "free loan calculator",
    "online loan calculator",
    "loan EMI calculator",
    "monthly payment calculator"
  ],
  openGraph: {
    title: "Free Loan EMI Calculator - Calculate Monthly Payments | ToolifyHub",
    description: "Calculate your monthly loan payments (EMI) with our free online calculator. Works for all types of loans.",
    type: "website",
    url: "https://toolifyhub.com/tools/loan-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Loan EMI Calculator - Calculate Monthly Payments",
    description: "Calculate your monthly loan payments (EMI) with our free online calculator.",
  },
  alternates: {
    canonical: "https://toolifyhub.com/tools/loan-calculator",
  },
}

export default function LoanCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Loan EMI Calculator",
    description: "Free online loan EMI calculator to calculate your monthly loan payments. Works for all types of loans.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "980",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://toolifyhub.com"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: "https://toolifyhub.com/tools"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Loan Calculator",
          item: "https://toolifyhub.com/tools/loan-calculator"
        }
      ]
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Tools", href: "/tools" },
            { label: "Loan Calculator", href: "/tools/loan-calculator" },
          ]}
        />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Loan EMI Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate your monthly loan payment (EMI) for home loans, car loans, or personal loans. Get instant results
            with total interest and payment breakdown.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div>
            <LoanCalculator />
          </div>
          <div className="space-y-6">
            <AdSpace slot="sidebar" className="h-96 sticky top-4" />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
