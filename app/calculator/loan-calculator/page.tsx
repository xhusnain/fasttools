import { EMICalculator } from "@/components/emi-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced EMI Calculator | Home Loan, Car Loan & Personal Loan Calculator | FastTools",
  description:
    "Calculate EMI for home loans, car loans, personal loans, and education loans worldwide. Get detailed amortization schedule, yearly payment breakdown, visual charts, and comprehensive loan analysis. Free online EMI calculator with advanced features.",
  keywords: [
    "EMI calculator",
    "loan calculator",
    "home loan EMI calculator",
    "car loan EMI calculator",
    "personal loan EMI calculator",
    "education loan EMI calculator",
    "loan amortization schedule",
    "EMI calculation formula",
    "loan payment calculator",
    "free EMI calculator",
    "online loan calculator",
    "EMI calculator with prepayment",
    "loan interest calculator",
    "home loan calculator",
    "car loan calculator", 
    "personal loan calculator",
    "education loan calculator",
    "loan amortization calculator",
    "mortgage calculator"
  ],
  openGraph: {
    title: "Advanced EMI Calculator - Calculate Monthly Payments | FastTools",
    description: "Calculate your monthly loan payments (EMI) with our free online calculator. Works for all types of loans.",
    type: "website",
    url: "https://fasttools.store/calculator/loan-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced EMI Calculator - Calculate Monthly Payments",
    description: "Calculate your monthly loan payments (EMI) with our free online calculator.",
  },
  alternates: {
    canonical: "https://fasttools.store/calculator/loan-calculator",
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
          item: "https://fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Calculator",
          item: "https://fasttools.store/calculator"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Loan Calculator",
          item: "https://fasttools.store/calculator/loan-calculator"
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
            { label: "Calculator", href: "/calculator" },
            { label: "Loan Calculator", href: "/calculator/loan-calculator" },
          ]}
        />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Advanced EMI Calculator | Home Loan, Car Loan & Personal Loan Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate your Equated Monthly Installment (EMI) for home loans, car loans, personal loans, and education loans worldwide. 
            Get detailed amortization schedule, yearly payment breakdown, visual charts, and comprehensive loan analysis with our free online EMI calculator.
          </p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                <AdSpace slot="content" className="w-full h-24" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
          <div>
            <EMICalculator />
            
            {/* Center Content Ad */}
            <div className="my-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Recommended</div>
                    <AdSpace slot="content" className="w-full h-24" />
                  </div>
                </div>
              </div>
            </div>

            {/* What is EMI Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                What is EMI?
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  <strong>Equated Monthly Installment (EMI)</strong> is the amount payable every month to the bank or any other financial institution 
                  until the loan amount is fully paid off. It consists of the interest on loan as well as part of the principal amount to be repaid.
                </p>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  The sum of principal amount and interest is divided by the tenure, i.e., number of months, in which the loan has to be repaid. 
                  This amount has to be paid monthly. The interest component of the EMI would be larger during the initial months and gradually 
                  reduce with each payment.
                </p>
                <div className="bg-slate-800 dark:bg-slate-700 p-4 rounded-lg border border-slate-600">
                  <h3 className="text-white font-semibold mb-2">EMI Formula</h3>
                  <div className="text-white font-mono text-sm">
                    EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
                  </div>
                  <div className="text-slate-300 text-xs mt-2">
                    Where: P = Principal Loan Amount, r = Monthly Interest Rate, n = Loan Tenure in Months
                  </div>
                </div>
              </div>
            </section>

            {/* How to Use EMI Calculator Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                How to Use Our EMI Calculator?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Step-by-Step Guide</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium">Select Loan Type</h4>
                        <p className="text-sm text-muted-foreground">Choose between Home Loan, Car Loan, Personal Loan, or Education Loan</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Enter Loan Amount</h4>
                        <p className="text-sm text-muted-foreground">Input the principal loan amount you wish to borrow</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Set Interest Rate</h4>
                        <p className="text-sm text-muted-foreground">Enter the annual interest rate offered by your lender</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-medium">Choose Tenure</h4>
                        <p className="text-sm text-muted-foreground">Select the loan tenure in years</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Features & Benefits</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">Instant EMI calculation with accurate results</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">Detailed amortization schedule</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">Yearly and monthly payment breakdown</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">Visual charts and payment analysis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">Support for different loan types</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Loan Types Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  </svg>
                </span>
                Types of Loans Supported
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="font-semibold text-blue-800 dark:text-blue-200">Home Loan</span>
                  </div>
                  <p className="text-sm text-blue-700 dark:text-blue-300">For purchasing or constructing residential property</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <span className="font-semibold text-green-800 dark:text-green-200">Car Loan</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-300">For purchasing new or used vehicles</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="font-semibold text-purple-800 dark:text-purple-200">Personal Loan</span>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300">For personal expenses and financial needs</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="font-semibold text-orange-800 dark:text-orange-200">Education Loan</span>
                  </div>
                  <p className="text-sm text-orange-700 dark:text-orange-300">For higher education and academic expenses</p>
                </div>
              </div>
            </section>

            {/* Floating Rate EMI Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                  <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Floating Rate EMI Calculation
              </h2>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  For floating or variable rate loans, we recommend calculating EMI by considering two opposite scenarios:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Optimistic Scenario</h3>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Assume interest rates decrease by 1-3%. Calculate EMI under this condition to plan for potential savings.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Pessimistic Scenario</h3>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Assume interest rates increase by 1-3%. Ensure you can afford the higher EMI without financial stress.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                  <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">What is the difference between EMI in Arrears and EMI in Advance?</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    EMI in Arrears is paid at the end of each month, while EMI in Advance is paid at the beginning. 
                    This affects the interest calculation, especially for car loans.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">How accurate is the EMI calculation?</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Our EMI calculator uses the standard EMI formula and provides accurate results. However, actual EMI may vary slightly due to processing fees and other charges.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Can I calculate EMI for different loan amounts and tenures?</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Yes, you can input any loan amount (₹1L to ₹10Cr) and tenure (1-30 years) to calculate EMI for various scenarios.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">What is included in the amortization schedule?</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    The schedule shows monthly/yearly breakdown of principal, interest, total payment, remaining balance, and percentage of loan paid.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="space-y-6">
            {/* Sticky Sidebar Container */}
            <div className="sticky top-4 space-y-6">
              {/* Top Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                    <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                  </div>
                </div>
              </div>

              {/* EMI Tips */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">EMI Tips</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">Lower EMI</div>
                    <div className="text-xs text-green-700 dark:text-green-300">Choose longer tenure for lower monthly payments</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Prepayment</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">Make prepayments to reduce total interest</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Compare Rates</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">Compare interest rates from multiple lenders</div>
                  </div>
                </div>
              </div>

              {/* Loan Types Quick Guide */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Loan Types</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Home Loan</span>
                    </div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">6.5% - 12% | 5-30 years</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      <span className="text-sm font-semibold text-green-800 dark:text-green-200">Car Loan</span>
                    </div>
                    <div className="text-xs text-green-700 dark:text-green-300">7% - 15% | 1-7 years</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-sm font-semibold text-purple-800 dark:text-purple-200">Personal Loan</span>
                    </div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">10% - 24% | 1-5 years</div>
                  </div>
                </div>
              </div>

              {/* Additional Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                    <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">Recommended</div>
                <AdSpace slot="content" className="w-full h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
