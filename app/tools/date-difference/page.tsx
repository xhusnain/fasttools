import { DateDifferenceCalculator } from "@/components/date-difference-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { CheckCircle, Calendar, Briefcase, Target, BookOpen, Clock, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Date Difference Calculator - Calculate Days Between Dates | Free Online Tool | FastTools",
  description:
    "Calculate the exact difference between two dates in years, months, days, weeks, and hours. Free date difference calculator with business days, multiple date formats, and accurate results. Perfect for project planning and event countdowns.",
  keywords: [
    "date difference calculator",
    "days between dates", 
    "date calculator",
    "time between dates",
    "business days calculator",
    "date arithmetic",
    "leap year calculation",
    "project timeline calculator",
    "event countdown",
    "date format converter",
    "free date calculator",
    "accurate date difference",
    "weekend calculator",
    "holiday calculator"
  ],
  openGraph: {
    title: "Date Difference Calculator | Free Online Tool | FastTools",
    description: "Calculate the exact difference between two dates in years, months, and days with business day options and multiple date formats.",
    type: "website",
    url: "https://fasttools.store/tools/date-difference",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Date Difference Calculator - FastTools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Date Difference Calculator | Free Online Tool",
    description: "Calculate the exact difference between two dates with business day options and multiple date formats.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/tools/date-difference"
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
  }
}

export default function DateDifferencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Date Difference Calculator",
    description: "Calculate the exact difference between two dates in years, months, days, weeks, and hours with business day options and multiple date formats.",
    url: "https://fasttools.store/tools/date-difference",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
    version: "1.0",
    featureList: [
      "Calculate date differences in years, months, days",
      "Business days calculation with weekend options",
      "Multiple date format support (US, EU, ISO)",
      "Leap year handling",
      "Time zone support",
      "Free to use with no registration"
    ],
    screenshot: "https://fasttools.store/og-image.svg",
    softwareHelp: {
      "@type": "HowTo",
      name: "How to Calculate Date Differences",
      description: "Learn how to calculate accurate date differences between any two dates",
      step: [
        {
          "@type": "HowToStep",
          name: "Enter Start Date",
          text: "Select or enter the start date using the date picker"
        },
        {
          "@type": "HowToStep", 
          name: "Enter End Date",
          text: "Select or enter the end date using the date picker"
        },
        {
          "@type": "HowToStep",
          name: "Choose Options",
          text: "Select business days only and Saturday options if needed"
        },
        {
          "@type": "HowToStep",
          name: "Calculate",
          text: "Click calculate to get the exact date difference"
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
        name: "How accurate is the date difference calculation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our calculator provides 100% accurate results by accounting for leap years, varying month lengths, and precise date arithmetic. It handles all edge cases including leap year birthdays and month-end scenarios."
        }
      },
      {
        "@type": "Question",
        name: "What's the difference between calendar days and business days?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Calendar days include all days (including weekends), while business days exclude weekends and holidays. Business days are typically Monday through Friday, with optional Saturday inclusion."
        }
      },
      {
        "@type": "Question",
        name: "Can I calculate differences across different time zones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our calculator handles time zone differences by converting all dates to UTC for accurate calculations. You can input dates in any timezone and get precise results."
        }
      },
      {
        "@type": "Question",
        name: "How do leap years affect date calculations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Leap years add an extra day (February 29th) every 4 years, with exceptions for century years. Our calculator automatically accounts for leap years in all calculations."
        }
      },
      {
        "@type": "Question",
        name: "Is the date difference calculator free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our date difference calculator is completely free to use with no registration required. You can calculate unlimited date differences without any restrictions."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Tools", href: "/tools" },
            { label: "Date Difference Calculator", href: "/tools/date-difference" },
          ]}
        />

        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Date Difference Calculator</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Calculate the exact time difference between two dates. Perfect for project planning, event countdowns, and
              tracking milestones.
            </p>
          </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div>
            <DateDifferenceCalculator />
            
            {/* Center Content Ad */}
            <div className="my-8">
              <AdSpace slot="content" className="w-full h-24" />
            </div>
          </div>
          <div className="space-y-6">
            <AdSpace slot="sidebar" className="h-96 sticky top-4" />
          </div>
        </div>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Additional Content Sections */}
        <div className="mt-12 space-y-8">
          {/* How to Use Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">How to Use the Date Difference Calculator</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">Step-by-Step Guide</h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span>Select your preferred date format (US, EU, or ISO)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span>Enter your start date using the date picker</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span>Enter your end date using the date picker</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <span>Choose business days options if needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                    <span>Click "Calculate Date Difference" to get results</span>
                  </li>
                </ol>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border-2 border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">Pro Tips</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Use business days for work-related calculations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Include Saturday if your business operates 6 days a week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Choose the date format that matches your region</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Copy results for easy sharing and documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Common Use Cases for Date Difference Calculator</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Briefcase className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">Project Management</h3>
                </div>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  Calculate project timelines, milestone dates, and delivery schedules with business day calculations.
                </p>
                <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                  <li>• Project duration tracking</li>
                  <li>• Milestone countdowns</li>
                  <li>• Deadline calculations</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border-2 border-orange-200 dark:border-orange-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <Calendar className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200">Event Planning</h3>
                </div>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                  Track time remaining until important events, holidays, birthdays, and special occasions.
                </p>
                <ul className="text-xs text-orange-600 dark:text-orange-400 space-y-1">
                  <li>• Wedding countdowns</li>
                  <li>• Holiday planning</li>
                  <li>• Birthday preparations</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl border-2 border-teal-200 dark:border-teal-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                    <Target className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200">Contract Management</h3>
                </div>
                <p className="text-sm text-teal-700 dark:text-teal-300 mb-3">
                  Calculate contract durations, renewal dates, and payment schedules with precise date arithmetic.
                </p>
                <ul className="text-xs text-teal-600 dark:text-teal-400 space-y-1">
                  <li>• Contract duration tracking</li>
                  <li>• Renewal date calculations</li>
                  <li>• Payment schedule planning</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <BookOpen className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200">Academic Planning</h3>
                </div>
                <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-3">
                  Track semester lengths, assignment deadlines, and academic calendar periods for students and educators.
                </p>
                <ul className="text-xs text-indigo-600 dark:text-indigo-400 space-y-1">
                  <li>• Semester duration tracking</li>
                  <li>• Assignment deadline planning</li>
                  <li>• Academic year calculations</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-xl border-2 border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">Personal Milestones</h3>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
                  Track personal achievements, anniversaries, and life milestones with accurate date calculations.
                </p>
                <ul className="text-xs text-yellow-600 dark:text-yellow-400 space-y-1">
                  <li>• Anniversary tracking</li>
                  <li>• Achievement milestones</li>
                  <li>• Personal goal deadlines</li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 rounded-xl border-2 border-pink-200 dark:border-pink-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-pink-800 dark:text-pink-200">Financial Planning</h3>
                </div>
                <p className="text-sm text-pink-700 dark:text-pink-300 mb-3">
                  Calculate investment periods, loan durations, and financial goal timelines with business day precision.
                </p>
                <ul className="text-xs text-pink-600 dark:text-pink-400 space-y-1">
                  <li>• Investment period tracking</li>
                  <li>• Loan duration calculations</li>
                  <li>• Financial goal timelines</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Related Tools and Calculators</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">Age Calculator</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Calculate exact age in years, months, and days from birth date.
                </p>
                <a href="/tools/age-calculator" className="text-primary hover:underline text-sm">
                  Try Age Calculator →
                </a>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">Workday Calculator</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Calculate business days between two dates, excluding weekends.
                </p>
                <a href="/tools/workday-calculator" className="text-primary hover:underline text-sm">
                  Try Workday Calculator →
                </a>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">Time Duration Calculator</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Calculate time duration between two times in hours and minutes.
                </p>
                <a href="/tools/time-duration-calculator" className="text-primary hover:underline text-sm">
                  Try Time Duration Calculator →
                </a>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">Date to Day Finder</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Find out what day of the week any date falls on.
                </p>
                <a href="/tools/date-to-day-finder" className="text-primary hover:underline text-sm">
                  Try Date to Day Finder →
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Date Difference Calculation Methods Explained</h2>
            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Calendar Days vs Business Days</h3>
                <p className="text-sm text-muted-foreground">
                  Calendar days include all days (including weekends), while business days exclude weekends and holidays. 
                  Business days are typically Monday through Friday, with optional Saturday inclusion.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Leap Year Handling</h3>
                <p className="text-sm text-muted-foreground">
                  Our calculator automatically accounts for leap years, which add an extra day (February 29th) every 4 years, 
                  with exceptions for century years.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Date Format Support</h3>
                <p className="text-sm text-muted-foreground">
                  We support multiple date formats including US (MM/DD/YYYY), EU (DD/MM/YYYY), and ISO (YYYY-MM-DD) formats 
                  for international compatibility.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">How accurate is the date difference calculation?</h3>
                <p className="text-sm text-muted-foreground">
                  Our calculator provides 100% accurate results by accounting for leap years, varying month lengths, 
                  and precise date arithmetic. It handles all edge cases including leap year birthdays and month-end scenarios.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">What's the difference between calendar days and business days?</h3>
                <p className="text-sm text-muted-foreground">
                  Calendar days include all days (including weekends), while business days exclude weekends and holidays. 
                  Business days are typically Monday through Friday, with optional Saturday inclusion.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Can I calculate differences across different time zones?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, our calculator handles time zone differences by converting all dates to UTC for accurate calculations. 
                  You can input dates in any timezone and get precise results.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Is the date difference calculator free to use?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, our date difference calculator is completely free to use with no registration required. 
                  You can calculate unlimited date differences without any restrictions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Date Difference Calculator for Different Purposes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Project Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Calculate project timelines, milestone dates, and delivery schedules with business day calculations.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Event Countdowns</h3>
                <p className="text-sm text-muted-foreground">
                  Track time remaining until important events, holidays, birthdays, and special occasions.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Contract Management</h3>
                <p className="text-sm text-muted-foreground">
                  Calculate contract durations, renewal dates, and payment schedules with precise date arithmetic.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Academic Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Track semester lengths, assignment deadlines, and academic calendar periods for students and educators.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Tips for Accurate Date Calculations</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Use Consistent Date Formats</h4>
                  <p className="text-sm text-muted-foreground">Always use the same date format for both start and end dates to avoid confusion.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Account for Time Zones</h4>
                  <p className="text-sm text-muted-foreground">Consider time zone differences when calculating dates across different regions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Verify Leap Years</h4>
                  <p className="text-sm text-muted-foreground">Check if your date range includes leap years, as they affect the total number of days.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-primary">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Choose the Right Calculation Type</h4>
                  <p className="text-sm text-muted-foreground">Select calendar days for general purposes or business days for work-related calculations.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}
