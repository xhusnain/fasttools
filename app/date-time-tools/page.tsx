import type { Metadata } from "next"
import Link from "next/link"
import { Clock, Calendar, Briefcase, Timer, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Date & Time Tools - Free Online Date and Time Calculators | FastTools",
  description:
    "Free online date and time tools including age in hours calculator, year end countdown, workday calculator, date to day finder, and zodiac sign finder. Fast, accurate, and easy to use.",
  keywords:
    "date tools, time tools, age in hours, year end countdown, workday calculator, date to day finder, zodiac sign finder, date calculator, time calculator",
  openGraph: {
    title: "Date & Time Tools - Free Online Date and Time Calculators",
    description:
      "Free online date and time tools including age in hours calculator, year end countdown, workday calculator, and more.",
    type: "website",
  },
}

const tools = [
  {
    title: "Age in Hours Calculator",
    description: "Calculate your age in hours, minutes, and seconds. Fun and unique way to see your age.",
    href: "/date-time-tools/age-in-hours",
    icon: Clock,
  },
  {
    title: "Year End Countdown",
    description: "Live countdown to the end of the year. See exactly how much time is left in the current year.",
    href: "/date-time-tools/year-end-countdown",
    icon: Timer,
  },
  {
    title: "Workday Calculator",
    description: "Calculate the number of workdays between two dates, excluding weekends.",
    href: "/date-time-tools/workday-calculator",
    icon: Briefcase,
  },
  {
    title: "Date to Day Finder",
    description: "Find out what day of the week any date falls on. Perfect for planning and history.",
    href: "/date-time-tools/date-to-day",
    icon: Calendar,
  },
  {
    title: "Zodiac Sign Finder",
    description: "Discover your zodiac sign based on your birth date with detailed traits and information.",
    href: "/date-time-tools/zodiac-sign",
    icon: Sparkles,
  },
]

export default function DateTimeToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
          ]}
        />

        <div className="mt-8 space-y-6">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Date & Time Tools</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Free online date and time calculators and tools. Calculate age in hours, countdown to year end, find
              workdays, and more.
            </p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} className="group">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 border-border bg-card/80 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Second Ad Space - Between Tools and Content */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          {/* SEO Content Section */}
          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Why Choose Our Date & Time Tools?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our date and time tools are designed to help you calculate, convert, and understand time-related 
                information quickly and accurately. Whether you're planning projects, celebrating milestones, or 
                exploring astrology, our tools provide the precision and ease of use you need.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Free to use with no registration required</li>
                <li>Accurate calculations with real-time updates</li>
                <li>Mobile-friendly and responsive design</li>
                <li>Fast, instant results</li>
                <li>Share and copy results easily</li>
                <li>Educational and fun for all ages</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Popular Date & Time Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discover our most popular date and time tools that help thousands of users every day:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Age in Hours Calculator</h3>
                  <p className="text-sm text-muted-foreground">Calculate your exact age in hours, minutes, and seconds with live updates.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Workday Calculator</h3>
                  <p className="text-sm text-muted-foreground">Calculate business days between dates, excluding weekends and holidays.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Zodiac Sign Finder</h3>
                  <p className="text-sm text-muted-foreground">Discover your zodiac sign based on your birth date with detailed traits.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Year End Countdown</h3>
                  <p className="text-sm text-muted-foreground">Live countdown to the end of the year with precise time remaining.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Ad Space - Bottom Content */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}
