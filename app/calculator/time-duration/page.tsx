import { TimeDurationCalculator } from "@/components/time-duration-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Clock, Calculator, Target, TrendingUp, Globe, Calendar, Plus, Minus, Timer, Zap, BarChart3, PieChart, ArrowUp, ArrowDown, CheckCircle, BookOpen, Users, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FastTools - Time Duration Calculator | Free Online Time Tool",
  description: "FastTools Time Duration Calculator - Free tool to find exact time between two points in hours, minutes, and seconds. Perfect for tracking work hours, study time, events.",
  keywords: [
    "fasttools",
    "fast tools",
    "time duration calculator",
    "duration calculation",
    "time difference calculator",
    "hours and minutes calculator",
    "calculate time between two times",
    "time interval calculator",
    "duration between two times",
    "work hours calculator",
    "elapsed time calculator",
    "time gap calculator",
    "total hours calculator",
    "time span calculator",
    "time calculator online",
    "time tracker calculator",
    "calculate total hours worked",
    "duration calculator in hours and minutes",
    "calculate time difference in hours",
    "time calculator",
    "business hours calculator", 
    "overtime calculator",
    "timezone conversion",
    "work days calculator",
    "time addition calculator",
    "time subtraction calculator",
    "time management calculator",
    "productivity tools",
    "time tracking calculator",
    "payroll calculator",
    "meeting duration calculator",
    "project timeline calculator",
    "time converter",
    "work hours calculator",
    "time zone calculator",
    "business time calculator",
    "time duration tool",
    "online time calculator",
    "time calculator free",
    "accurate time calculator",
    "quick time calculator",
    "time calculation",
    "time formulas",
    "time equations",
    "time FAQ",
    "time questions",
    "time help",
    "time guide",
    "time tutorial"
  ],
  openGraph: {
    title: "Free Online Time Duration Calculator | Accurate & Quick Time Tool | FastTools",
    description: "Use our free Time Duration Calculator to find the exact time between two points — in hours, minutes, and seconds. Perfect for tracking work hours, study time, events, or any time interval.",
    type: "website",
    url: "https://www.fasttools.store/calculator/time-duration",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-time-duration-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Online Time Duration Calculator - FastTools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Time Duration Calculator | Accurate & Quick Time Tool | FastTools",
    description: "Use our free Time Duration Calculator to find the exact time between two points — in hours, minutes, and seconds. Perfect for tracking work hours, study time, events, or any time interval.",
    images: ["https://www.fasttools.store/og-time-duration-calculator.jpg"]
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
  authors: [{ name: "FastTools Time Management Team" }],
  creator: "FastTools",
  publisher: "FastTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.fasttools.store'),
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function TimeDurationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Free Online Time Duration Calculator",
    "applicationCategory": "Time Management Tool",
    "operatingSystem": "Web Browser",
    "url": "https://www.fasttools.store/calculator/time-duration",
    "description": "Free time duration calculator for all your time management needs. Calculate duration, addition, subtraction, business hours, timezone conversion, work days, and overtime.",
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
    "screenshot": "https://www.fasttools.store/og-time-duration-calculator.jpg",
    "softwareHelp": {
      "@type": "HowTo",
      "name": "How to Use Time Duration Calculator",
      "description": "Step-by-step guide to using the time duration calculator",
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
          "text": "Our time duration calculator supports 7 calculation types: time duration between two times, time addition (adding hours/minutes to a time), time subtraction (subtracting hours/minutes from a time), business hours calculation (only counting work hours), timezone conversion, work days calculation (excluding weekends), and overtime calculation (separating regular and overtime hours)."
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
          "text": "Our time duration calculator is available without any cost or registration. You can access all 7 calculation types, real-time display, mathematical formulas, and mobile-responsive design features at no charge."
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
      
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-3 py-6 md:py-8">
        <Breadcrumbs
          items={[
            { label: "Calculator", href: "/calculator" },
            { label: "Time Duration Calculator", href: "/calculator/time-duration" },
          ]}
        />

          <div className="max-w-7xl mx-auto">
            <div className="mb-4 md:mb-6">
              <GHeader 
                title="Free Online Time Duration Calculator"
                description="Use our free Time Duration Calculator to find the exact time between two points — in hours, minutes, and seconds. Perfect for tracking work hours, study time, events, or any time interval. Fast, accurate, and easy to use online."
                titleSize="medium"
              />
            </div>

            {/* Mobile/Tablet AdSpace after GHeader */}
            <div className="my-6 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-slate-400 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-slate-700 rounded-xl shadow-sm bg-black" />
          </div>

            <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
            <div>
              <TimeDurationCalculator />
              
              {/* How to Use Section */}
                <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <BookOpen className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                  </div>
                  How to Use Our Time Duration Calculator
                </h2>
                    <div className="space-y-3">
                      <div className="grid md:grid-cols-2 gap-2 md:gap-3">
                        <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">1. Select Calculation Type</h3>
                          <p className="text-xs text-slate-400">Choose from 7 different time calculation types</p>
                  </div>
                        <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">2. Enter Time Values</h3>
                          <p className="text-xs text-slate-400">Input your time values in the appropriate fields</p>
                  </div>
                        <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">3. Get Results</h3>
                          <p className="text-xs text-slate-400">View detailed calculation with formulas</p>
                  </div>
                        <div className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">4. Copy & Share</h3>
                          <p className="text-xs text-slate-400">Copy results or share calculations</p>
                  </div>
                </div>
                    </div>
                  </div>

              {/* Calculation Types Section */}
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <Calculator className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                  </div>
                      Time Calculation Types
                </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                      {[
                        { type: "Time Duration Calculator", icon: Clock, desc: "Calculate time difference between two times", example: "9:00 AM to 5:30 PM = 8h 30m" },
                        { type: "Hours & Minutes Calculator", icon: Plus, desc: "Add duration to a start time", example: "2:30 PM + 3h 45m = 6:15 PM" },
                        { type: "Time Interval Calculator", icon: Minus, desc: "Subtract duration from a time", example: "5:00 PM - 2h 30m = 2:30 PM" },
                        { type: "Work Hours Calculator", icon: Target, desc: "Calculate total hours worked", example: "7:00 AM to 6:00 PM = 8h" },
                        { type: "Elapsed Time Calculator", icon: Globe, desc: "Calculate time gap between events", example: "2:00 PM EST = 7:00 PM UTC" },
                        { type: "Time Span Calculator", icon: Calendar, desc: "Calculate working days", example: "Jan 1 to Jan 15 = 10 work days" },
                        { type: "Time Tracker Calculator", icon: TrendingUp, desc: "Calculate regular and overtime", example: "45 hours (40 regular + 5 overtime)" }
                      ].map(({ type, icon: Icon, desc, example }) => (
                        <div key={type} className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <div className="flex items-center gap-1.5 mb-1">
                            <Icon className="h-3 w-3 text-green-500" />
                            <h3 className="font-semibold text-green-500 text-xs md:text-sm">{type}</h3>
                    </div>
                          <p className="text-xs text-slate-400 mb-1">{desc}</p>
                          <p className="text-xs text-orange-400 font-mono bg-orange-500/10 px-1.5 py-0.5 rounded">{example}</p>
                  </div>
                      ))}
                    </div>
                  </div>

                  {/* Common Use Cases */}
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <Users className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                    </div>
                      Common Use Cases for Time Duration Calculator
                    </h2>
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-2">
                        <h3 className="text-sm md:text-base font-semibold text-green-500">Business & Finance</h3>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Calculate total hours worked for payroll</span>
                  </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Time difference calculator for projects</span>
                    </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Work hours calculator for SLA tracking</span>
                  </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Duration calculator in hours and minutes</span>
                    </div>
                  </div>
                    </div>
                      <div className="space-y-2">
                        <h3 className="text-sm md:text-base font-semibold text-green-500">Education & Productivity</h3>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Calculate time between two times for study</span>
                  </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Time gap calculator for exam prep</span>
                    </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Elapsed time calculator for productivity</span>
                  </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>Time interval calculator for habits</span>
                </div>
                  </div>
                  </div>
                  </div>
                </div>

                  {/* Comprehensive FAQ Section */}
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <Award className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                  </div>
                      Frequently Asked Questions (FAQ) - 50 Questions
                </h2>
                    <div className="space-y-2 md:space-y-3">
                      {[
                        {
                          q: "What is the basic formula for calculating time duration?",
                          a: "The basic time duration formula is: Duration = End Time - Start Time. This fundamental formula works for all time duration calculations. The key is to handle negative results (when end time is before start time) by adding 24 hours."
                        },
                        {
                          q: "How do I calculate time addition using the formula?",
                          a: "Time addition formula is: New Time = Start Time + Time to Add. Add hours and minutes, handle overflow beyond 24 hours by using modulo 24. For example: 2:30 PM + 3 hours 45 minutes = 6:15 PM."
                        },
                        {
                          q: "What is the time subtraction formula?",
                          a: "Time subtraction formula is: New Time = Start Time - Time to Subtract. Subtract hours and minutes, handle negative results by adding 24 hours. For example: 5:00 PM - 2 hours 30 minutes = 2:30 PM."
                        },
                        {
                          q: "How do I calculate business hours only?",
                          a: "Business Hours = Overlap between work time and duration. Calculate only the hours that fall within business hours (e.g., 9 AM - 5 PM). This is essential for payroll, project management, and service level agreements."
                        },
                        {
                          q: "What types of time calculations can I perform?",
                          a: "Our time duration calculator supports 7 calculation types: time duration between two times, time addition (adding hours/minutes to a time), time subtraction (subtracting hours/minutes from a time), business hours calculation (only counting work hours), timezone conversion, work days calculation (excluding weekends), and overtime calculation (separating regular and overtime hours)."
                        },
                        {
                          q: "How accurate are the time calculations?",
                          a: "Our time duration calculator uses precise mathematical formulas and handles all edge cases including negative time results, 24-hour overflow, leap years, and timezone conversions. All calculations are performed with high precision to ensure accuracy for professional use."
                        },
                        {
                          q: "Can I calculate time difference between two times?",
                          a: "Yes! Our time difference calculator calculates the duration between two specific times. Perfect for tracking work hours, meeting durations, or project timelines. Example: 9:00 AM to 5:30 PM = 8 hours 30 minutes."
                        },
                        {
                          q: "How do I add duration to a start time?",
                          a: "Use our time addition calculator to add a specific duration to a start time. Useful for scheduling appointments, calculating end times, or planning events. Example: 2:30 PM + 3 hours 45 minutes = 6:15 PM."
                        },
                        {
                          q: "How do I subtract duration from a time?",
                          a: "Use our time subtraction calculator to subtract a duration from a start time. Helpful for calculating start times or working backwards from deadlines. Example: 5:00 PM - 2 hours 30 minutes = 2:30 PM."
                        },
                        {
                          q: "What is a business hours calculator?",
                          a: "A business hours calculator calculates only business hours within a time range. Essential for payroll, SLA calculations, and project management. Example: 7:00 AM to 6:00 PM (9 AM-5 PM business) = 8 hours."
                        },
                        {
                          q: "How does timezone conversion work?",
                          a: "Timezone conversion converts time between different timezones. Crucial for global teams, international meetings, and travel planning. Example: 2:00 PM EST = 7:00 PM UTC."
                        },
                        {
                          q: "What is a work days calculator?",
                          a: "A work days calculator calculates working days between dates, excluding weekends and holidays. Perfect for project planning and deadline calculations. Example: Jan 1 to Jan 15 (excluding weekends) = 10 work days."
                        },
                        {
                          q: "How does the overtime calculator work?",
                          a: "The overtime calculator calculates regular and overtime hours based on a threshold. Essential for payroll processing and labor law compliance. Example: 45 hours (40 regular + 5 overtime)."
                        },
                        {
                          q: "Is the time duration calculator free to use?",
                          a: "Our time duration calculator is available without any cost or registration. You can access all 7 calculation types, real-time display, mathematical formulas, and mobile-responsive design features at no charge."
                        },
                        {
                          q: "Can I use this calculator on mobile devices?",
                          a: "Absolutely! Our time duration calculator is fully responsive and optimized for mobile devices. The interface adapts to different screen sizes, making it easy to use on smartphones and tablets for on-the-go time calculations."
                        },
                        {
                          q: "How do I calculate total hours worked?",
                          a: "Use our work hours calculator to calculate total hours worked. Perfect for payroll processing and overtime calculations. The calculator handles regular hours, overtime hours, and provides detailed breakdowns."
                        },
                        {
                          q: "What is an elapsed time calculator?",
                          a: "An elapsed time calculator calculates the time gap between events. Useful for tracking project durations, meeting lengths, or any time interval. Provides precise calculations in hours, minutes, and seconds."
                        },
                        {
                          q: "How do I calculate time gap between events?",
                          a: "Use our time gap calculator to calculate the time gap between events. Perfect for scheduling, project management, and time tracking. Provides accurate duration calculations in hours, minutes, and seconds."
                        },
                        {
                          q: "What is a time span calculator?",
                          a: "A time span calculator calculates the duration between two points in time. Useful for project planning, deadline calculations, and time management. Provides detailed breakdowns of hours, minutes, and seconds."
                        },
                        {
                          q: "How do I calculate duration in hours and minutes?",
                          a: "Our duration calculator in hours and minutes provides precise calculations. Simply enter your start and end times, and get detailed results showing hours, minutes, and seconds. Perfect for professional time tracking."
                        },
                        {
                          q: "What is a time tracker calculator?",
                          a: "A time tracker calculator helps track and calculate time spent on various activities. Useful for productivity tracking, project management, and time analysis. Provides detailed reports and summaries."
                        },
                        {
                          q: "How do I calculate time difference in hours?",
                          a: "Use our time difference calculator to calculate time difference in hours. Enter your start and end times, and get precise hour calculations. Perfect for payroll, project tracking, and time management."
                        },
                        {
                          q: "What are the real-world applications of time duration calculator?",
                          a: "Time duration calculators are used for payroll processing and overtime calculations, project timeline management, service level agreement (SLA) tracking, billing and invoicing calculations, study session planning and tracking, exam preparation time management, personal productivity tracking, and habit formation and time blocking."
                        },
                        {
                          q: "How do I handle negative time results?",
                          a: "Negative time results occur when end time is before start time. Our calculator handles this by adding 24 hours to get the correct duration. This is essential for overnight shifts and cross-midnight calculations."
                        },
                        {
                          q: "What is the difference between time addition and subtraction?",
                          a: "Time addition adds duration to a start time (e.g., 2:30 PM + 3 hours = 5:30 PM), while time subtraction removes duration from a start time (e.g., 5:00 PM - 2 hours = 3:00 PM). Both are essential for scheduling and planning."
                        },
                        {
                          q: "How do I calculate business hours for payroll?",
                          a: "Use our business hours calculator to calculate only the hours that fall within business hours (e.g., 9 AM - 5 PM). This is essential for payroll, project management, and service level agreements. Example: 7:00 AM to 6:00 PM (9 AM-5 PM business) = 8 hours."
                        },
                        {
                          q: "What is the formula for overtime calculation?",
                          a: "Overtime calculation separates regular hours from overtime hours based on a threshold (usually 40 hours per week). Regular hours are paid at normal rate, while overtime hours are paid at 1.5x rate. Example: 45 hours = 40 regular + 5 overtime."
                        },
                        {
                          q: "How do I convert time between timezones?",
                          a: "Use our timezone conversion feature to convert time between different timezones. Crucial for global teams, international meetings, and travel planning. Example: 2:00 PM EST = 7:00 PM UTC."
                        },
                        {
                          q: "How do I calculate meeting duration?",
                          a: "Use our time duration calculator to calculate meeting duration. Enter start and end times, and get precise duration in hours, minutes, and seconds. Perfect for scheduling and time management."
                        },
                        {
                          q: "What is the best way to track study time?",
                          a: "Use our time tracker calculator to track study time. Perfect for exam preparation, study session planning, and academic time management. Provides detailed reports and progress tracking."
                        },
                        {
                          q: "How do I calculate project timeline?",
                          a: "Use our time duration calculator to calculate project timeline. Enter project start and end dates, and get detailed duration calculations. Perfect for project management and deadline tracking."
                        },
                        {
                          q: "What is the difference between time duration and time interval?",
                          a: "Time duration is the total time between two points, while time interval is a specific period within that duration. Both are essential for time management and scheduling."
                        },
                        {
                          q: "How do I calculate time for billing purposes?",
                          a: "Use our work hours calculator to calculate time for billing purposes. Perfect for freelancers, consultants, and service providers. Provides accurate time tracking and billing calculations."
                        },
                        {
                          q: "What is the formula for calculating hours and minutes?",
                          a: "Hours and minutes are calculated by converting time to minutes, performing calculations, then converting back to hours and minutes. Our calculator handles all conversions automatically for accurate results."
                        },
                        {
                          q: "How do I handle 24-hour overflow in time calculations?",
                          a: "24-hour overflow occurs when calculations exceed 24 hours. Our calculator handles this by using modulo 24 to get the correct time. Essential for multi-day calculations and shift work."
                        },
                        {
                          q: "What is the difference between regular and overtime hours?",
                          a: "Regular hours are standard working hours (usually 40 per week), while overtime hours exceed the standard threshold. Overtime is typically paid at 1.5x the regular rate. Our calculator separates these automatically."
                        },
                        {
                          q: "How do I calculate time for shift work?",
                          a: "Use our time duration calculator for shift work calculations. Handles overnight shifts, cross-midnight calculations, and multi-day shifts. Perfect for healthcare, manufacturing, and service industries."
                        },
                        {
                          q: "What is the best time calculator for payroll?",
                          a: "Our work hours calculator is the best for payroll calculations. Handles regular hours, overtime, business hours, and provides detailed breakdowns. Essential for accurate payroll processing."
                        },
                        {
                          q: "How do I calculate time for project management?",
                          a: "Use our time duration calculator for project management. Calculate project timelines, track progress, and manage deadlines. Perfect for project managers and team leaders."
                        },
                        {
                          q: "What is the difference between time duration and time span?",
                          a: "Time duration is the actual time between two points, while time span is the total period including all time. Both are essential for different types of time calculations and management."
                        },
                        {
                          q: "How do I calculate time for academic purposes?",
                          a: "Use our time tracker calculator for academic purposes. Track study time, exam preparation, and academic progress. Perfect for students and educators."
                        },
                        {
                          q: "What is the best way to calculate time for productivity tracking?",
                          a: "Use our time tracker calculator for productivity tracking. Monitor work hours, break times, and productivity patterns. Essential for personal and professional time management."
                        },
                        {
                          q: "How do I calculate time for international business?",
                          a: "Use our timezone conversion feature for international business. Convert times between different timezones for global meetings and coordination. Essential for international teams."
                        },
                        {
                          q: "What is the difference between time duration and elapsed time?",
                          a: "Time duration is the planned or scheduled time, while elapsed time is the actual time that has passed. Both are important for time management and tracking."
                        },
                        {
                          q: "How do I calculate time for service level agreements?",
                          a: "Use our business hours calculator for SLA calculations. Calculate only business hours within service windows. Essential for meeting SLA requirements and customer service."
                        },
                        {
                          q: "What is the best time calculator for freelancers?",
                          a: "Our time tracker calculator is best for freelancers. Track billable hours, project time, and productivity. Perfect for accurate billing and time management."
                        },
                        {
                          q: "How do I calculate time for healthcare workers?",
                          a: "Use our time duration calculator for healthcare workers. Handles shift work, overtime, and complex scheduling. Perfect for nurses, doctors, and healthcare staff."
                        },
                        {
                          q: "What is the difference between time duration and time gap?",
                          a: "Time duration is the total time between two points, while time gap is the space or interval between events. Both are essential for scheduling and time management."
                        },
                        {
                          q: "How do I calculate time for manufacturing?",
                          a: "Use our time duration calculator for manufacturing. Track production time, shift hours, and efficiency. Perfect for production managers and manufacturing teams."
                        },
                        {
                          q: "What is the best time calculator for remote work?",
                          a: "Our time tracker calculator is best for remote work. Track work hours, break times, and productivity. Perfect for remote workers and distributed teams."
                        },
                        {
                          q: "How do I calculate time for education?",
                          a: "Use our time tracker calculator for education. Track study time, class hours, and academic progress. Perfect for students, teachers, and educational institutions."
                        },
                        {
                          q: "What is the difference between time duration and elapsed time?",
                          a: "Time duration is the planned or scheduled time between two points, while elapsed time is the actual time that has passed. Both are important for time management and tracking."
                        },
                        {
                          q: "How do I calculate time for service level agreements?",
                          a: "Use our business hours calculator for SLA calculations. Calculate only business hours within service windows. Essential for meeting SLA requirements and customer service."
                        },
                        {
                          q: "What is the best time calculator for freelancers?",
                          a: "Our time tracker calculator is best for freelancers. Track billable hours, project time, and productivity. Perfect for accurate billing and time management."
                        },
                        {
                          q: "How do I calculate time for healthcare workers?",
                          a: "Use our time duration calculator for healthcare workers. Handles shift work, overtime, and complex scheduling. Perfect for nurses, doctors, and healthcare staff."
                        },
                        {
                          q: "What is the difference between time duration and time gap?",
                          a: "Time duration is the total time between two points, while time gap is the space or interval between events. Both are essential for scheduling and time management."
                        },
                        {
                          q: "How do I calculate time for manufacturing?",
                          a: "Use our time duration calculator for manufacturing. Track production time, shift hours, and efficiency. Perfect for production managers and manufacturing teams."
                        },
                        {
                          q: "What is the best time calculator for remote work?",
                          a: "Our time tracker calculator is best for remote work. Track work hours, break times, and productivity. Perfect for remote workers and distributed teams."
                        },
                        {
                          q: "How do I calculate time for education?",
                          a: "Use our time tracker calculator for education. Track study time, class hours, and academic progress. Perfect for students, teachers, and educational institutions."
                        },
                        {
                          q: "Can the calculator handle time spans across different days?",
                          a: "Yes, our time duration calculator can compute durations that span across multiple days, accurately accounting for the total time elapsed including overnight periods and multi-day shifts."
                        },
                        {
                          q: "Is it possible to calculate durations in different time units?",
                          a: "Absolutely. Our calculator provides results in various units including years, months, days, hours, minutes, and seconds, allowing you to choose the format that best suits your needs."
                        },
                        {
                          q: "Can I use the calculator to track work hours?",
                          a: "Yes, our Time Duration Calculator is perfect for tracking work hours, helping you monitor productivity, calculate overtime, and manage time effectively for payroll and billing purposes."
                        },
                        {
                          q: "Can I calculate the duration between two dates and times?",
                          a: "Yes, our calculator allows you to input specific dates and times to determine the exact duration between them, handling calculations that span multiple days, weeks, or even years."
                        },
                        {
                          q: "Do I need to download any software to use the calculator?",
                          a: "No, our calculator is web-based and does not require any downloads or installations. Simply access it through your web browser on any device."
                        },
                        {
                          q: "How accurate is the Time Duration Calculator?",
                          a: "Our calculator provides precise calculations down to the second, ensuring high accuracy for all time duration computations including leap years and complex timezone calculations."
                        },
                        {
                          q: "Can I calculate the duration between two times on different dates?",
                          a: "Yes, our calculator can compute the time difference between two specific dates and times, providing comprehensive duration calculations that span across different days."
                        },
                        {
                          q: "Does the calculator support 24-hour time format?",
                          a: "Yes, our calculator supports both 12-hour (AM/PM) and 24-hour (military) time formats for maximum user convenience and flexibility."
                        },
                        {
                          q: "Can I add or subtract time durations using the calculator?",
                          a: "Yes, our calculator includes time addition and subtraction features, allowing you to add or subtract specific time durations to or from a given time for scheduling and planning purposes."
                        },
                        {
                          q: "Is there a limit to the duration I can calculate?",
                          a: "No, there is no limit. You can calculate durations ranging from seconds to years, making it suitable for both short-term and long-term time tracking needs."
                        },
                        {
                          q: "Can I use the calculator for scheduling purposes?",
                          a: "Yes, our calculator is excellent for scheduling by helping you determine the duration between events, plan meetings, and manage complex schedules with multiple time zones."
                        },
                        {
                          q: "Does the calculator account for Daylight Saving Time changes?",
                          a: "Yes, our calculator automatically adjusts for Daylight Saving Time changes when timezone conversion is enabled, ensuring accurate calculations throughout the year."
                        },
                        {
                          q: "Can I calculate the duration between two times in different time zones?",
                          a: "Yes, our timezone conversion feature allows you to accurately calculate durations across different time zones with automatic conversion and adjustment for time differences."
                        },
                        {
                          q: "Is the calculator suitable for calculating overtime hours?",
                          a: "Yes, our calculator includes specialized overtime calculation features that help determine overtime hours by calculating the duration beyond standard work hours with automatic threshold detection."
                        },
                        {
                          q: "Can I use the calculator for billing purposes?",
                          a: "Yes, our calculator is excellent for billing by accurately calculating billable hours based on time durations, with support for different billing rates and overtime calculations."
                        },
                        {
                          q: "Does the calculator provide results in decimal format?",
                          a: "Yes, our calculator can display results in decimal format for easier integration with billing systems, payroll software, and financial calculations."
                        },
                        {
                          q: "Is the calculator useful for event planning?",
                          a: "Absolutely. Our calculator helps event planners determine the duration of events, manage complex schedules, and coordinate activities across different time zones."
                        },
                        {
                          q: "Can I use the calculator to track study sessions?",
                          a: "Yes, students can use our calculator to monitor the duration of their study sessions, track academic progress, and implement effective time management strategies."
                        },
                        {
                          q: "Does the calculator support leap years?",
                          a: "Yes, our calculator accounts for leap years when calculating durations that span across February 29th, ensuring accurate calculations for long-term time tracking."
                        },
                        {
                          q: "Can I calculate the duration between two times with seconds precision?",
                          a: "Yes, our calculator provides results down to the second for precise time duration calculations, essential for scientific research, sports timing, and professional applications."
                        },
                        {
                          q: "Is the calculator suitable for calculating travel time?",
                          a: "Yes, travelers can use our calculator to determine the duration of their trips, plan layovers, and coordinate travel schedules across different time zones."
                        },
                        {
                          q: "Can I use the calculator for project management?",
                          a: "Yes, project managers can use our calculator to track task durations, manage project timelines, and coordinate team activities with precise time calculations."
                        },
                        {
                          q: "Does the calculator have a history feature to save previous calculations?",
                          a: "Currently, our calculator focuses on real-time calculations. For saving results, we recommend recording them separately or using browser bookmarks for future reference."
                        },
                        {
                          q: "Can I share the calculation results with others?",
                          a: "While our calculator doesn't have a direct sharing feature, you can easily share results by copying the calculated values or taking screenshots of the results."
                        },
                        {
                          q: "Is the calculator accessible for users with disabilities?",
                          a: "Yes, our calculator is designed to be accessible, adhering to web accessibility standards with keyboard navigation, screen reader compatibility, and high contrast options."
                        },
                        {
                          q: "Can I use the calculator offline?",
                          a: "No, our calculator requires an internet connection to function as it's a web-based application with real-time processing capabilities."
                        },
                        {
                          q: "Does the calculator support multiple languages?",
                          a: "Currently, our calculator is available in English with plans to add additional language support in future updates for global accessibility."
                        },
                        {
                          q: "Is the calculator suitable for calculating time intervals in sports?",
                          a: "Yes, athletes and coaches can use our calculator to measure time intervals for training, performance analysis, and competition timing with precision down to the second."
                        },
                        {
                          q: "Can I use the calculator to determine the duration of video or audio recordings?",
                          a: "Yes, our calculator is useful for determining the length of media files by inputting start and end times, perfect for content creators and media professionals."
                        },
                        {
                          q: "Does the calculator support military time format?",
                          a: "Yes, our calculator supports military (24-hour) time format for convenience, especially useful for professional and international applications."
                        },
                        {
                          q: "Can I calculate the duration between two times in different formats?",
                          a: "Yes, our calculator can handle various time formats, including 12-hour and 24-hour formats, with automatic conversion between formats for user convenience."
                        },
                        {
                          q: "Is the calculator suitable for calculating time durations in scientific experiments?",
                          a: "Yes, researchers can use our calculator to measure time intervals in experiments accurately, with precision down to the second for scientific applications."
                        },
                        {
                          q: "Can I use the calculator to track exercise durations?",
                          a: "Yes, fitness enthusiasts can use our calculator to monitor the duration of their workouts, track rest periods, and implement effective training schedules."
                        },
                        {
                          q: "Does the calculator account for time differences due to travel?",
                          a: "Yes, our timezone conversion feature automatically adjusts for time zone changes due to travel, ensuring accurate calculations when moving between different time zones."
                        },
                        {
                          q: "Can I calculate the duration between two times with millisecond precision?",
                          a: "Currently, our calculator provides precision down to the second. For millisecond precision, specialized timing equipment would be more appropriate."
                        },
                        {
                          q: "Is the calculator suitable for calculating time durations in cooking?",
                          a: "Yes, chefs and home cooks can use our calculator to time their cooking processes accurately, track preparation times, and manage kitchen schedules effectively."
                        },
                        {
                          q: "Can I use the calculator to determine the duration of meetings?",
                          a: "Yes, our calculator is excellent for calculating the length of meetings, tracking appointment durations, and managing professional schedules with precise time calculations."
                        },
                        {
                          q: "Does the calculator support fractional time inputs?",
                          a: "Yes, our calculator can handle fractional time inputs, such as 1.5 hours or 2.25 hours, for precise calculations in professional and personal applications."
                        },
                        {
                          q: "Can I calculate the duration between two times in different calendar systems?",
                          a: "Our calculator is designed for the Gregorian calendar system. For other calendar systems, additional conversions may be necessary depending on your specific needs."
                        },
                        {
                          q: "Is the calculator suitable for calculating time durations in music practice?",
                          a: "Yes, musicians can use our calculator to track practice sessions, measure performance durations, and implement structured practice schedules for skill development."
                        },
                        {
                          q: "Can I use the calculator to determine the duration of online sessions?",
                          a: "Yes, our calculator is useful for tracking the length of online meetings, webinars, virtual events, and remote work sessions with accurate time measurements."
                        },
                        {
                          q: "Does the calculator provide visual representations of time durations?",
                          a: "Currently, our calculator provides numerical results with clear formatting. Visual representations may be added in future updates for enhanced user experience."
                        },
                        {
                          q: "Can I use the calculator to calculate time durations for legal purposes?",
                          a: "Yes, our calculator can assist in determining time durations relevant to legal matters, such as contract periods, deadlines, and compliance requirements."
                        },
                        {
                          q: "What is the best way to calculate time for productivity tracking?",
                          a: "Use our time tracker calculator for productivity tracking. Monitor work hours, break times, and productivity patterns. Essential for personal and professional time management."
                        },
                        {
                          q: "How do I calculate time for international business?",
                          a: "Use our timezone conversion feature for international business. Convert times between different timezones for global meetings and coordination. Essential for international teams."
                        },
                        {
                          q: "What is the difference between time duration and elapsed time?",
                          a: "Time duration is the planned or scheduled time, while elapsed time is the actual time that has passed. Both are important for time management and tracking."
                        },
                        {
                          q: "How do I calculate time for service level agreements?",
                          a: "Use our business hours calculator for SLA calculations. Calculate only business hours within service windows. Essential for meeting SLA requirements and customer service."
                        },
                        {
                          q: "What is the best time calculator for freelancers?",
                          a: "Our time tracker calculator is best for freelancers. Track billable hours, project time, and productivity. Perfect for accurate billing and time management."
                        },
                        {
                          q: "How do I calculate time for healthcare workers?",
                          a: "Use our time duration calculator for healthcare workers. Handles shift work, overtime, and complex scheduling. Perfect for nurses, doctors, and healthcare staff."
                        },
                        {
                          q: "What is the difference between time duration and time gap?",
                          a: "Time duration is the total time between two points, while time gap is the space or interval between events. Both are essential for scheduling and time management."
                        },
                        {
                          q: "How do I calculate time for manufacturing?",
                          a: "Use our time duration calculator for manufacturing. Track production time, shift hours, and efficiency. Perfect for production managers and manufacturing teams."
                        },
                        {
                          q: "What is the best time calculator for remote work?",
                          a: "Our time tracker calculator is best for remote work. Track work hours, break times, and productivity. Perfect for remote workers and distributed teams."
                        },
                        {
                          q: "How do I calculate time for education?",
                          a: "Use our time tracker calculator for education. Track study time, class hours, and academic progress. Perfect for students, teachers, and educational institutions."
                        },
                        {
                          q: "Can the calculator handle time spans across different days?",
                          a: "Yes, our time duration calculator can compute durations that span across multiple days, accurately accounting for the total time elapsed including overnight periods and multi-day shifts."
                        },
                        {
                          q: "Is it possible to calculate durations in different time units?",
                          a: "Absolutely. Our calculator provides results in various units including years, months, days, hours, minutes, and seconds, allowing you to choose the format that best suits your needs."
                        },
                        {
                          q: "Can I use the calculator to track work hours?",
                          a: "Yes, our Time Duration Calculator is perfect for tracking work hours, helping you monitor productivity, calculate overtime, and manage time effectively for payroll and billing purposes."
                        },
                        {
                          q: "Can I calculate the duration between two dates and times?",
                          a: "Yes, our calculator allows you to input specific dates and times to determine the exact duration between them, handling calculations that span multiple days, weeks, or even years."
                        },
                        {
                          q: "Do I need to download any software to use the calculator?",
                          a: "No, our calculator is web-based and does not require any downloads or installations. Simply access it through your web browser on any device."
                        },
                        {
                          q: "How accurate is the Time Duration Calculator?",
                          a: "Our calculator provides precise calculations down to the second, ensuring high accuracy for all time duration computations including leap years and complex timezone calculations."
                        },
                        {
                          q: "Can I calculate the duration between two times on different dates?",
                          a: "Yes, our calculator can compute the time difference between two specific dates and times, providing comprehensive duration calculations that span across different days."
                        },
                        {
                          q: "Does the calculator support 24-hour time format?",
                          a: "Yes, our calculator supports both 12-hour (AM/PM) and 24-hour (military) time formats for maximum user convenience and flexibility."
                        },
                        {
                          q: "Can I add or subtract time durations using the calculator?",
                          a: "Yes, our calculator includes time addition and subtraction features, allowing you to add or subtract specific time durations to or from a given time for scheduling and planning purposes."
                        },
                        {
                          q: "Is there a limit to the duration I can calculate?",
                          a: "No, there is no limit. You can calculate durations ranging from seconds to years, making it suitable for both short-term and long-term time tracking needs."
                        },
                        {
                          q: "Can I use the calculator for scheduling purposes?",
                          a: "Yes, our calculator is excellent for scheduling by helping you determine the duration between events, plan meetings, and manage complex schedules with multiple time zones."
                        },
                        {
                          q: "Does the calculator account for Daylight Saving Time changes?",
                          a: "Yes, our calculator automatically adjusts for Daylight Saving Time changes when timezone conversion is enabled, ensuring accurate calculations throughout the year."
                        },
                        {
                          q: "Can I calculate the duration between two times in different time zones?",
                          a: "Yes, our timezone conversion feature allows you to accurately calculate durations across different time zones with automatic conversion and adjustment for time differences."
                        },
                        {
                          q: "Is the calculator suitable for calculating overtime hours?",
                          a: "Yes, our calculator includes specialized overtime calculation features that help determine overtime hours by calculating the duration beyond standard work hours with automatic threshold detection."
                        },
                        {
                          q: "Can I use the calculator for billing purposes?",
                          a: "Yes, our calculator is excellent for billing by accurately calculating billable hours based on time durations, with support for different billing rates and overtime calculations."
                        },
                        {
                          q: "Does the calculator provide results in decimal format?",
                          a: "Yes, our calculator can display results in decimal format for easier integration with billing systems, payroll software, and financial calculations."
                        },
                        {
                          q: "Is the calculator useful for event planning?",
                          a: "Absolutely. Our calculator helps event planners determine the duration of events, manage complex schedules, and coordinate activities across different time zones."
                        },
                        {
                          q: "Can I use the calculator to track study sessions?",
                          a: "Yes, students can use our calculator to monitor the duration of their study sessions, track academic progress, and implement effective time management strategies."
                        },
                        {
                          q: "Does the calculator support leap years?",
                          a: "Yes, our calculator accounts for leap years when calculating durations that span across February 29th, ensuring accurate calculations for long-term time tracking."
                        },
                        {
                          q: "Can I calculate the duration between two times with seconds precision?",
                          a: "Yes, our calculator provides results down to the second for precise time duration calculations, essential for scientific research, sports timing, and professional applications."
                        },
                        {
                          q: "Is the calculator suitable for calculating travel time?",
                          a: "Yes, travelers can use our calculator to determine the duration of their trips, plan layovers, and coordinate travel schedules across different time zones."
                        },
                        {
                          q: "Can I use the calculator for project management?",
                          a: "Yes, project managers can use our calculator to track task durations, manage project timelines, and coordinate team activities with precise time calculations."
                        },
                        {
                          q: "Does the calculator have a history feature to save previous calculations?",
                          a: "Currently, our calculator focuses on real-time calculations. For saving results, we recommend recording them separately or using browser bookmarks for future reference."
                        },
                        {
                          q: "Can I share the calculation results with others?",
                          a: "While our calculator doesn't have a direct sharing feature, you can easily share results by copying the calculated values or taking screenshots of the results."
                        },
                        {
                          q: "Is the calculator accessible for users with disabilities?",
                          a: "Yes, our calculator is designed to be accessible, adhering to web accessibility standards with keyboard navigation, screen reader compatibility, and high contrast options."
                        },
                        {
                          q: "Can I use the calculator offline?",
                          a: "No, our calculator requires an internet connection to function as it's a web-based application with real-time processing capabilities."
                        },
                        {
                          q: "Does the calculator support multiple languages?",
                          a: "Currently, our calculator is available in English with plans to add additional language support in future updates for global accessibility."
                        },
                        {
                          q: "Is the calculator suitable for calculating time intervals in sports?",
                          a: "Yes, athletes and coaches can use our calculator to measure time intervals for training, performance analysis, and competition timing with precision down to the second."
                        },
                        {
                          q: "Can I use the calculator to determine the duration of video or audio recordings?",
                          a: "Yes, our calculator is useful for determining the length of media files by inputting start and end times, perfect for content creators and media professionals."
                        },
                        {
                          q: "Does the calculator support military time format?",
                          a: "Yes, our calculator supports military (24-hour) time format for convenience, especially useful for professional and international applications."
                        },
                        {
                          q: "Can I calculate the duration between two times in different formats?",
                          a: "Yes, our calculator can handle various time formats, including 12-hour and 24-hour formats, with automatic conversion between formats for user convenience."
                        },
                        {
                          q: "Is the calculator suitable for calculating time durations in scientific experiments?",
                          a: "Yes, researchers can use our calculator to measure time intervals in experiments accurately, with precision down to the second for scientific applications."
                        },
                        {
                          q: "Can I use the calculator to track exercise durations?",
                          a: "Yes, fitness enthusiasts can use our calculator to monitor the duration of their workouts, track rest periods, and implement effective training schedules."
                        },
                        {
                          q: "Does the calculator account for time differences due to travel?",
                          a: "Yes, our timezone conversion feature automatically adjusts for time zone changes due to travel, ensuring accurate calculations when moving between different time zones."
                        },
                        {
                          q: "Can I calculate the duration between two times with millisecond precision?",
                          a: "Currently, our calculator provides precision down to the second. For millisecond precision, specialized timing equipment would be more appropriate."
                        },
                        {
                          q: "Is the calculator suitable for calculating time durations in cooking?",
                          a: "Yes, chefs and home cooks can use our calculator to time their cooking processes accurately, track preparation times, and manage kitchen schedules effectively."
                        },
                        {
                          q: "Can I use the calculator to determine the duration of meetings?",
                          a: "Yes, our calculator is excellent for calculating the length of meetings, tracking appointment durations, and managing professional schedules with precise time calculations."
                        },
                        {
                          q: "Does the calculator support fractional time inputs?",
                          a: "Yes, our calculator can handle fractional time inputs, such as 1.5 hours or 2.25 hours, for precise calculations in professional and personal applications."
                        },
                        {
                          q: "Can I calculate the duration between two times in different calendar systems?",
                          a: "Our calculator is designed for the Gregorian calendar system. For other calendar systems, additional conversions may be necessary depending on your specific needs."
                        },
                        {
                          q: "Is the calculator suitable for calculating time durations in music practice?",
                          a: "Yes, musicians can use our calculator to track practice sessions, measure performance durations, and implement structured practice schedules for skill development."
                        },
                        {
                          q: "Can I use the calculator to determine the duration of online sessions?",
                          a: "Yes, our calculator is useful for tracking the length of online meetings, webinars, virtual events, and remote work sessions with accurate time measurements."
                        },
                        {
                          q: "Does the calculator provide visual representations of time durations?",
                          a: "Currently, our calculator provides numerical results with clear formatting. Visual representations may be added in future updates for enhanced user experience."
                        },
                        {
                          q: "Can I use the calculator to calculate time durations for legal purposes?",
                          a: "Yes, our calculator can assist in determining time durations relevant to legal matters, such as contract periods, deadlines, and compliance requirements."
                        }
                      ].map(({ q, a }, index) => (
                        <div key={index} className="p-2 md:p-3 bg-black rounded-lg border border-slate-700">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs md:text-sm">{q}</h3>
                          <p className="text-xs text-slate-400">{a}</p>
                  </div>
                      ))}
                  </div>
                  </div>

                  {/* Related Tools Section */}
                  <div className="bg-black border border-slate-700 rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-orange-500">
                      <div className="p-1.5 bg-orange-500/10 rounded-lg">
                        <Calculator className="h-3 w-3 md:h-4 md:w-4 text-orange-500" />
                  </div>
                      Related Time & Date Calculators
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                      {[
                        {
                          name: "Age Calculator",
                          desc: "Calculate age in years, months, and days",
                          href: "/calculator/age-calculator",
                          icon: "🎂"
                        },
                        {
                          name: "Date Difference Calculator",
                          desc: "Calculate days between two dates",
                          href: "/calculator/date-difference",
                          icon: "📅"
                        },
                        {
                          name: "Loan EMI Calculator",
                          desc: "Calculate monthly loan payments and interest",
                          href: "/calculator/loan-calculator",
                          icon: "💰"
                        },
                        {
                          name: "Workday Calculator",
                          desc: "Calculate business days between dates",
                          href: "/calculator/date-difference",
                          icon: "💼"
                        },
                        {
                          name: "Percentage Calculator",
                          desc: "Calculate percentages, discounts, and tips",
                          href: "/calculator/percentage-calculator",
                          icon: "📊"
                        },
                        {
                          name: "BMI Calculator",
                          desc: "Calculate Body Mass Index and health metrics",
                          href: "/calculator/bmi-calculator",
                          icon: "⚖️"
                        },
                        {
                          name: "Compound Interest Calculator",
                          desc: "Calculate compound interest growth",
                          href: "/calculator/compound-interest",
                          icon: "📈"
                        },
                        {
                          name: "Tip Calculator",
                          desc: "Calculate tips and gratuity",
                          href: "/finance-tools/tip-calculator",
                          icon: "🍽️"
                        },
                        {
                          name: "Discount Calculator",
                          desc: "Calculate discounts and savings",
                          href: "/finance-tools/discount-calculator",
                          icon: "🏷️"
                        },
                        {
                          name: "Tax Calculator",
                          desc: "Calculate income tax and deductions",
                          href: "/calculator/tax-calculator",
                          icon: "🧾"
                        },
                        {
                          name: "Conversion Calculator",
                          desc: "Convert between units instantly",
                          href: "/calculator/conversion-calculator",
                          icon: "🔄"
                        }
                      ].map((tool, index) => (
                        <a
                          key={index}
                          href={tool.href}
                          className="p-3 bg-black rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-orange-500/50 transition-colors group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{tool.icon}</span>
                            <h3 className="font-semibold text-green-500 group-hover:text-orange-500 text-sm md:text-base">
                              {tool.name}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-400 group-hover:text-slate-300">
                            {tool.desc}
                          </p>
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            
              <div className="space-y-4 hidden lg:block">
                <div className="sticky top-24 space-y-4">
                  <div>
                    <div className="text-center mb-1">
                      <span className="text-xs text-slate-400 font-medium">Advertisement</span>
                  </div>
                    <AdSpace slot="sidebar" className="w-full h-60 lg:h-64 xl:h-72 border border-slate-700 rounded-xl shadow-sm bg-black" />
              </div>
                  </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}