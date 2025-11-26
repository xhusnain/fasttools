import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { TimeDurationCalculator } from "@/components/time-duration-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Clock, Calculator, Target, TrendingUp, Globe, Calendar, Plus, Minus, Zap, BarChart3, CheckCircle, BookOpen, Users, Award, Copy } from "lucide-react"

const baseMetadata = createMetadata({
  title: "Time Duration Calculator | Free Online Time Tool",
  description:
    "Calculate exact time duration between two points in hours, minutes & seconds. Free online time duration calculator for work hours, study time, events, payroll, and project management. Accurate, fast, and easy to use.",
  path: "/calculator/time-duration",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Time Duration Calculator", href: "/calculator/time-duration" }
  ],
  schemaOptions: {
    name: "Time Duration Calculator",
    alternateName: "Free Online Time Duration Calculator",
    applicationCategory: "Time Management Tool",
    featureList: [
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
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Date & Time",
}

export default function TimeDurationPage() {
  const toolContent = {
    toolName: "Time Duration Calculator",
    overview: "Calculate exact time duration between two points in hours, minutes & seconds. Free online time duration calculator for work hours, study time, events, payroll, and project management. Accurate, fast, and easy to use.",

    howToSteps: [
      "Select Calculation Type: Choose from 7 calculation types: Duration, Addition, Subtraction, Business Hours, Timezone Conversion, Work Days, or Overtime Calculator",
      "Enter Time Values: Input the required time values based on your selected calculation type",
      "Calculate Results: Click calculate to get detailed results with formulas and explanations"
    ],

    features: [
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

    useCases: [
      "Business & Finance: Calculate total hours worked, track project timelines, ensure SLA tracking, get detailed billing breakdowns.",
      "Education & Productivity: Track study sessions, plan exam preparation, measure productivity, track habits.",
      "Additional Applications: Track conference lengths, manage deadlines, handle international scheduling."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Complete Guide to Time Duration Calculation</h2>
          <p className="text-muted-foreground mb-4">
            This tool helps you find the exact time span between any two points, whether you're tracking work hours, planning events, or managing project timelines. It provides precise results in hours, minutes, and seconds with support for various calculation types.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Understanding Time Duration Calculation</h3>
              <p className="text-muted-foreground mb-2">
                The fundamental formula is simple: Duration = End Time - Start Time. This principle works for all duration calculations, and the tool automatically handles edge cases like overnight shifts and cross-midnight scenarios.
              </p>
              <p className="text-muted-foreground">
                Results are displayed in multiple formats, showing both total hours and detailed breakdowns. This makes it perfect for professional use where precision matters.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Work Hours and Business Time Tracking</h3>
              <p className="text-muted-foreground mb-2">
                For professionals tracking work schedules, the business hours feature allows you to calculate total hours worked while excluding non-business hours. This is perfect for payroll processing, where you need to track only billable hours.
              </p>
              <p className="text-muted-foreground">
                The tool goes beyond basic calculations, helping freelancers, consultants, and service providers achieve accurate billing with precision that meets professional standards.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Advanced Time Calculations</h3>
              <p className="text-muted-foreground mb-2">
                Beyond basic duration, the tool offers advanced features. You can add specific durations to a start time or subtract time periods, making it invaluable for scheduling and planning.
              </p>
              <p className="text-muted-foreground mb-2">
                For global teams, the timezone conversion feature automatically handles time differences, making it easy to coordinate international meetings and schedules across different regions.
              </p>
              <p className="text-muted-foreground">
                The overtime feature separates regular hours from overtime hours based on your threshold, essential for payroll compliance. Meanwhile, the work days feature calculates business days between dates, excluding weekends and holidays.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Real-Time Calculation Examples</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Work Hours</h3>
              <p className="text-sm text-muted-foreground mb-2">Start: 9:00 AM | End: 5:30 PM</p>
              <p className="text-sm font-mono bg-primary/10 px-2 py-1 rounded inline-block">Result: 8h 30m</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Time Addition</h3>
              <p className="text-sm text-muted-foreground mb-2">Start: 2:30 PM | Add: 3h 45m</p>
              <p className="text-sm font-mono bg-primary/10 px-2 py-1 rounded inline-block">Result: 6:15 PM</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
              <p className="text-sm text-muted-foreground mb-2">7 AM - 6 PM (Biz: 9-5)</p>
              <p className="text-sm font-mono bg-primary/10 px-2 py-1 rounded inline-block">Result: 8 hours</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Calculator Features Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2 font-semibold text-foreground">Feature</th>
                  <th className="text-left p-2 font-semibold text-foreground">Basic Duration</th>
                  <th className="text-left p-2 font-semibold text-foreground">Business Hours</th>
                  <th className="text-left p-2 font-semibold text-foreground">Timezone Conversion</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="p-2 text-muted-foreground">Time Range</td>
                  <td className="p-2 text-foreground">Any time</td>
                  <td className="p-2 text-foreground">Business hours only</td>
                  <td className="p-2 text-foreground">Any timezone</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2 text-muted-foreground">Break Exclusion</td>
                  <td className="p-2 text-foreground">Manual</td>
                  <td className="p-2 text-foreground">Automatic</td>
                  <td className="p-2 text-foreground">Manual</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2 text-muted-foreground">Best For</td>
                  <td className="p-2 text-foreground">General use</td>
                  <td className="p-2 text-foreground">Payroll & billing</td>
                  <td className="p-2 text-foreground">Global teams</td>
                </tr>
                <tr>
                  <td className="p-2 text-muted-foreground">Precision</td>
                  <td className="p-2 text-foreground">Hours & minutes</td>
                  <td className="p-2 text-foreground">Hours & minutes</td>
                  <td className="p-2 text-foreground">Hours & minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "What types of time calculations can I perform?",
        answer: "Our time duration calculator supports 7 calculation types: time duration between two times, time addition (adding hours/minutes to a time), time subtraction (subtracting hours/minutes from a time), business hours calculation (only counting work hours), timezone conversion, work days calculation (excluding weekends), and overtime calculation (separating regular and overtime hours)."
      },
      {
        question: "How accurate are the time calculations?",
        answer: "Our time duration calculator uses precise mathematical formulas and handles all edge cases including negative time results, 24-hour overflow, leap years, and timezone conversions. All calculations are performed with high precision to ensure accuracy for professional use."
      },
      {
        question: "Can I calculate business hours only?",
        answer: "Yes! Our business hours calculator allows you to set custom business hours (e.g., 9 AM to 5 PM) and calculates only the time that falls within those hours. This is perfect for payroll, project management, and SLA calculations."
      },
      {
        question: "Is the time duration calculator free to use?",
        answer: "Our time duration calculator is available without any cost or registration. You can access all 7 calculation types, real-time display, mathematical formulas, and mobile-responsive design features at no charge."
      },
      {
        question: "Can I use this calculator on mobile devices?",
        answer: "Absolutely! Our time duration calculator is fully responsive and optimized for mobile devices. The interface adapts to different screen sizes, making it easy to use on smartphones and tablets for on-the-go time calculations."
      },
      {
        question: "What is the basic formula for calculating time duration?",
        answer: "The basic time duration formula is: Duration = End Time - Start Time. This fundamental formula works for all time duration calculations. The key is to handle negative results (when end time is before start time) by adding 24 hours."
      },
      {
        question: "How do I calculate time addition using the formula?",
        answer: "Time addition formula is: New Time = Start Time + Time to Add. Add hours and minutes, handle overflow beyond 24 hours by using modulo 24. For example: 2:30 PM + 3 hours 45 minutes = 6:15 PM."
      },
      {
        question: "What is the time subtraction formula?",
        answer: "Time subtraction formula is: New Time = Start Time - Time to Subtract. Subtract hours and minutes, handle negative results by adding 24 hours. For example: 5:00 PM - 2 hours 30 minutes = 2:30 PM."
      },
      {
        question: "How do I calculate business hours for payroll?",
        answer: "Use our business hours calculator to calculate only the hours that fall within business hours (e.g., 9 AM - 5 PM). This is essential for payroll, project management, and service level agreements."
      },
      {
        question: "How does timezone conversion work?",
        answer: "Timezone conversion converts time between different timezones. Crucial for global teams, international meetings, and travel planning. Example: 2:00 PM EST = 7:00 PM UTC."
      },
      {
        question: "What is a work days calculator?",
        answer: "A work days calculator calculates working days between dates, excluding weekends and holidays. Perfect for project planning and deadline calculations. Example: Jan 1 to Jan 15 (excluding weekends) = 10 work days."
      },
      {
        question: "How does the overtime calculator work?",
        answer: "The overtime calculator calculates regular and overtime hours based on a threshold (usually 40 hours per week). Regular hours are paid at normal rate, while overtime hours are paid at 1.5x rate. Example: 45 hours = 40 regular + 5 overtime."
      },
      {
        question: "How do I calculate total hours worked?",
        answer: "Use our work hours calculator to calculate total hours worked. Perfect for payroll processing and overtime calculations. The calculator handles regular hours, overtime hours, and provides detailed breakdowns."
      },
      {
        question: "What is an elapsed time calculator?",
        answer: "An elapsed time calculator calculates the time gap between events. Useful for tracking project durations, meeting lengths, or any time interval. Provides precise calculations in hours, minutes, and seconds."
      },
      {
        question: "How do I handle negative time results?",
        answer: "Negative time results occur when end time is before start time. Our calculator handles this by adding 24 hours to get the correct duration. This is essential for overnight shifts and cross-midnight calculations."
      },
      {
        question: "What is the difference between time addition and subtraction?",
        answer: "Time addition adds duration to a start time (e.g., 2:30 PM + 3 hours = 5:30 PM), while time subtraction removes duration from a start time (e.g., 5:00 PM - 2 hours = 3:00 PM). Both are essential for scheduling and planning."
      },
      {
        question: "How do I calculate time for shift work?",
        answer: "Use our time duration calculator for shift work calculations. Handles overnight shifts, cross-midnight calculations, and multi-day shifts. Perfect for healthcare, manufacturing, and service industries."
      },
      {
        question: "What is the best time calculator for payroll?",
        answer: "Our work hours calculator is the best for payroll calculations. Handles regular hours, overtime, business hours, and provides detailed breakdowns. Essential for accurate payroll processing."
      },
      {
        question: "How do I calculate time for project management?",
        answer: "Use our time duration calculator for project management. Calculate project timelines, track progress, and manage deadlines. Perfect for project managers and team leaders."
      },
      {
        question: "What is the difference between time duration and time span?",
        answer: "Time duration is the actual time between two points, while time span is the total period including all time. Both are essential for different types of time calculations and management."
      }
    ],

    relatedTools: [
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Date Difference Calculator", href: "/calculator/date-difference" },
      { name: "Loan EMI Calculator", href: "/calculator/loan-calculator" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Compound Interest Calculator", href: "/calculator/compound-interest" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Time Duration Calculator",
        description: "Calculate exact time duration between two points in hours, minutes & seconds. Free online time duration calculator for work hours, study time, events, payroll, and project management. Accurate, fast, and easy to use.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Time Duration Calculator", href: "/calculator/time-duration" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <TimeDurationCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Time Duration Calculator | Free Online Time Tool",
        description: "Calculate exact time duration between two points in hours, minutes & seconds. Free online time duration calculator for work hours, study time, events, payroll, and project management. Accurate, fast, and easy to use.",
        path: "/calculator/time-duration"
      }}
    />
  )
}
