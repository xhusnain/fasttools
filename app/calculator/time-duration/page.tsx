import { TimeDurationCalculator } from "@/components/time-duration-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Clock, Calculator, Target, TrendingUp, Globe, Calendar, Plus, Minus, Timer, Zap, BarChart3, PieChart, ArrowUp, ArrowDown, CheckCircle, BookOpen, Users, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced Time Duration Calculator | 7 Calculation Types | Free Online Tool | FastTools",
  description: "Calculate time duration with 7 advanced calculation types: duration, addition, subtraction, business hours, timezone conversion, work days, and overtime calculations. Free online time calculator with real-time display and mathematical formulas.",
  keywords: "time duration calculator, time calculator, business hours calculator, overtime calculator, timezone conversion, work days calculator, time addition, time subtraction, time management, productivity tools, time tracking, payroll calculator, meeting duration calculator, project timeline calculator",
  openGraph: {
    title: "Advanced Time Duration Calculator - 7 Calculation Types | FastTools",
    description: "Calculate time duration with 7 advanced calculation types: duration, addition, subtraction, business hours, timezone conversion, work days, and overtime calculations. Free online tool with real-time display.",
    type: "website",
    url: "https://www.fasttools.store/calculator/time-duration",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Advanced Time Duration Calculator - FastTools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Time Duration Calculator - 7 Calculation Types | FastTools",
    description: "Calculate time duration with 7 advanced calculation types: duration, addition, subtraction, business hours, timezone conversion, work days, and overtime calculations.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/time-duration"
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

export default function TimeDurationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Advanced Time Duration Calculator",
    "applicationCategory": "Time Management Tool",
    "operatingSystem": "Web Browser",
    "url": "https://www.fasttools.store/calculator/time-duration",
    "description": "Advanced time duration calculator with 7 calculation types including duration, addition, subtraction, business hours, timezone conversion, work days, and overtime calculations.",
    "featureList": [
      "Time Duration Calculation",
      "Time Addition & Subtraction", 
      "Business Hours Calculator",
      "Timezone Conversion",
      "Work Days Calculator",
      "Overtime Calculator",
      "Real-time Current Time Display",
      "Mathematical Formula Display",
      "Mobile-Responsive Design",
      "Professional Time Management"
    ],
    "screenshot": "https://www.fasttools.store/og-image.svg",
    "softwareHelp": {
      "@type": "HowTo",
      "name": "How to Use Time Duration Calculator",
      "description": "Step-by-step guide to using the advanced time duration calculator",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Select Calculation Type",
          "text": "Choose from 7 calculation types: Duration, Addition, Subtraction, Business Hours, Timezone Conversion, Work Days, or Overtime Calculator"
        },
        {
          "@type": "HowToStep", 
          "name": "Enter Time Values",
          "text": "Input the required time values based on your selected calculation type"
        },
        {
          "@type": "HowToStep",
          "name": "Calculate Results", 
          "text": "Click calculate to get detailed results with formulas and explanations"
        }
      ]
    },
    "author": {
      "@type": "Organization",
      "name": "FastTools",
      "url": "https://www.fasttools.store"
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "version": "2.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of time calculations can I perform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our advanced time duration calculator supports 7 calculation types: time duration between two times, time addition (adding hours/minutes to a time), time subtraction (subtracting hours/minutes from a time), business hours calculation (only counting work hours), timezone conversion, work days calculation (excluding weekends), and overtime calculation (separating regular and overtime hours)."
        }
      },
      {
        "@type": "Question", 
        "name": "How accurate are the time calculations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our time duration calculator uses precise mathematical formulas and handles all edge cases including negative time results, 24-hour overflow, leap years, and timezone conversions. All calculations are performed with high precision to ensure accuracy for professional use."
        }
      },
      {
        "@type": "Question",
        "name": "Can I calculate business hours only?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Yes! Our business hours calculator allows you to set custom business hours (e.g., 9 AM to 5 PM) and calculates only the time that falls within those hours. This is perfect for payroll, project management, and SLA calculations."
        }
      },
      {
        "@type": "Question",
        "name": "Is the time duration calculator free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our advanced time duration calculator is completely free to use with no registration required. All 7 calculation types, real-time display, mathematical formulas, and mobile-responsive design are available at no cost."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this calculator on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our time duration calculator is fully responsive and optimized for mobile devices. The interface adapts to different screen sizes, making it easy to use on smartphones and tablets for on-the-go time calculations."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Calculator", href: "/calculator" },
            { label: "Time Duration Calculator", href: "/calculator/time-duration" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Advanced Time Duration Calculator</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Calculate time duration with 7 advanced calculation types: duration, addition, subtraction, business hours, timezone conversion, work days, and overtime calculations. Free online time calculator with real-time display and mathematical formulas.
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
              <TimeDurationCalculator />
              
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
              
              {/* How to Use Section */}
              <section className="mt-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  How to Use Our Time Duration Calculator
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Step 1: Select Calculation Type
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200">
                      Choose from 7 calculation types: Duration, Addition, Subtraction, Business Hours, Timezone Conversion, Work Days, or Overtime Calculator.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Step 2: Enter Time Values
                    </h3>
                    <p className="text-green-800 dark:text-green-200">
                      Input the required time values based on your selected calculation type. The interface adapts to show relevant input fields.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Step 3: Get Results
                    </h3>
                    <p className="text-purple-800 dark:text-purple-200">
                      Click calculate to get detailed results with mathematical formulas, explanations, and professional formatting.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                    <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Pro Tips
                    </h3>
                    <p className="text-orange-800 dark:text-orange-200">
                      Use the real-time current time display for quick reference. Copy results for easy sharing and documentation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Calculation Types Section */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  Advanced Calculation Types
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Time Duration Calculator
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200 mb-4">
                      Calculate the duration between two specific times. Perfect for tracking work hours, meeting durations, or project timelines.
                    </p>
                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-blue-200 dark:border-blue-700">
                      <code className="text-blue-800 dark:text-blue-200 font-mono text-sm">
                        Example: 9:00 AM to 5:30 PM = 8 hours 30 minutes
                      </code>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <Plus className="h-5 w-5" />
                      Time Addition Calculator
                    </h3>
                    <p className="text-green-800 dark:text-green-200 mb-4">
                      Add a specific duration to a start time. Useful for scheduling appointments, calculating end times, or planning events.
                    </p>
                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-green-200 dark:border-green-700">
                      <code className="text-green-800 dark:text-green-200 font-mono text-sm">
                        Example: 2:30 PM + 3 hours 45 minutes = 6:15 PM
                      </code>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                    <h3 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <Minus className="h-5 w-5" />
                      Time Subtraction Calculator
                    </h3>
                    <p className="text-red-800 dark:text-red-200 mb-4">
                      Subtract a duration from a start time. Helpful for calculating start times or working backwards from deadlines.
                    </p>
                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-red-200 dark:border-red-700">
                      <code className="text-red-800 dark:text-red-200 font-mono text-sm">
                        Example: 5:00 PM - 2 hours 30 minutes = 2:30 PM
                      </code>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Business Hours Calculator
                    </h3>
                    <p className="text-purple-800 dark:text-purple-200 mb-4">
                      Calculate only business hours within a time range. Essential for payroll, SLA calculations, and project management.
                    </p>
                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-purple-200 dark:border-purple-700">
                      <code className="text-purple-800 dark:text-purple-200 font-mono text-sm">
                        Example: 7:00 AM to 6:00 PM (9 AM-5 PM business) = 8 hours
                      </code>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                    <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Timezone Conversion
                    </h3>
                    <p className="text-orange-800 dark:text-orange-200 mb-4">
                      Convert time between different timezones. Crucial for global teams, international meetings, and travel planning.
                    </p>
                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-orange-200 dark:border-orange-700">
                      <code className="text-orange-800 dark:text-orange-200 font-mono text-sm">
                        Example: 2:00 PM EST = 7:00 PM UTC
                      </code>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
                    <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-100 mb-3 flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Work Days Calculator
                    </h3>
                    <p className="text-cyan-800 dark:text-cyan-200 mb-4">
                      Calculate working days between dates, excluding weekends and holidays. Perfect for project planning and deadline calculations.
                    </p>
                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-cyan-200 dark:border-cyan-700">
                      <code className="text-cyan-800 dark:text-cyan-200 font-mono text-sm">
                        Example: Jan 1 to Jan 15 (excluding weekends) = 10 work days
                      </code>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
                    <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-100 mb-3 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Overtime Calculator
                    </h3>
                    <p className="text-pink-800 dark:text-pink-200 mb-4">
                      Calculate regular and overtime hours based on a threshold. Essential for payroll processing and labor law compliance.
                    </p>
                    <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-lg border border-pink-200 dark:border-pink-700">
                      <code className="text-pink-800 dark:text-pink-200 font-mono text-sm">
                        Example: 45 hours (40 regular + 5 overtime)
                      </code>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Use Cases Section */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  Common Use Cases
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Business & Finance</h3>
                    <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>Payroll processing and overtime calculations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>Project timeline management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>Service level agreement (SLA) tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>Billing and invoicing calculations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">Education & Productivity</h3>
                    <ul className="space-y-2 text-green-800 dark:text-green-200">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Study session planning and tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Exam preparation time management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Personal productivity tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Habit formation and time blocking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">What types of time calculations can I perform?</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Our advanced time duration calculator supports 7 calculation types: time duration between two times, time addition (adding hours/minutes to a time), time subtraction (subtracting hours/minutes from a time), business hours calculation (only counting work hours), timezone conversion, work days calculation (excluding weekends), and overtime calculation (separating regular and overtime hours).
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">How accurate are the time calculations?</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Our time duration calculator uses precise mathematical formulas and handles all edge cases including negative time results, 24-hour overflow, leap years, and timezone conversions. All calculations are performed with high precision to ensure accuracy for professional use.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Can I calculate business hours only?</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Yes! Our business hours calculator allows you to set custom business hours (e.g., 9 AM to 5 PM) and calculates only the time that falls within those hours. This is perfect for payroll, project management, and SLA calculations.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Is the time duration calculator free to use?</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Yes, our advanced time duration calculator is completely free to use with no registration required. All 7 calculation types, real-time display, mathematical formulas, and mobile-responsive design are available at no cost.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl border border-slate-200 dark:border-slate-600">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Can I use this calculator on mobile devices?</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Absolutely! Our time duration calculator is fully responsive and optimized for mobile devices. The interface adapts to different screen sizes, making it easy to use on smartphones and tablets for on-the-go time calculations.
                    </p>
                  </div>
                </div>
              </section>
              
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
            </div>
            
            {/* Sticky Sidebar Container */}
            <div className="sticky top-4 space-y-6">
              {/* Top Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Timer className="h-3 w-3 text-white" />
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

              {/* Time Tips */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Clock className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Time Tips</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Business Hours</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300">Use business hours calculator for payroll and SLA tracking</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">Overtime Tracking</div>
                    <div className="text-xs text-green-700 dark:text-green-300">Set custom thresholds for regular vs overtime hours</div>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Timezone Conversion</div>
                    <div className="text-xs text-purple-700 dark:text-purple-300">Perfect for global teams and international meetings</div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Key Features</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>7 Calculation Types</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Real-time Current Time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Mathematical Formulas</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Mobile Responsive</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Professional Results</span>
                  </div>
                </div>
              </div>

              {/* Bottom Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border-2 border-dashed border-green-300 dark:border-green-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Featured</div>
                    <AdSpace slot="sidebar" className="h-72 rounded-xl overflow-hidden" />
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
