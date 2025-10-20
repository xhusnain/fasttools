import type { Metadata } from "next"
import Link from "next/link"
import { Clock, Calendar, Briefcase, Timer, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Date & Time Tools: Age, Workdays & More | FastTools",
  description:
    "Free date & time tools: age in hours, year‑end countdown, workdays, date‑to‑day finder, and zodiac sign.",
  keywords: [
    // Primary Keywords (20)
    "date tools",
    "time tools",
    "free date tools",
    "free time tools",
    "age in hours",
    "year end countdown",
    "workday calculator",
    "date to day finder",
    "zodiac sign finder",
    "date calculator",
    "time calculator",
    "age calculator",
    "birthday calculator",
    "date difference calculator",
    "time difference calculator",
    "business days calculator",
    "weekday calculator",
    "calendar tools",
    "date time tools",
    "online date tools",
    
    // Secondary Keywords (20)
    "age in hours calculator",
    "year end countdown timer",
    "workday calculator online",
    "date to day finder online",
    "zodiac sign finder online",
    "age calculator online",
    "birthday calculator online",
    "date difference calculator online",
    "time difference calculator online",
    "business days calculator online",
    "weekday calculator online",
    "calendar tools online",
    "date time tools online",
    "online date time tools",
    "free date time tools",
    "date time calculator",
    "age in hours online",
    "countdown timer online",
    "workday calculator free",
    "zodiac sign calculator",
    
    // Long-tail Keywords (20)
    "free online date time tools",
    "best date time tools online",
    "date time tools with live preview",
    "free date time tools online",
    "online date time tools free",
    "date time tools online free",
    "age in hours calculator free",
    "year end countdown free",
    "workday calculator free online",
    "date to day finder free online",
    "zodiac sign finder free online",
    "age calculator free online",
    "birthday calculator free online",
    "date difference calculator free online",
    "time difference calculator free online",
    "business days calculator free online",
    "weekday calculator free online",
    "calendar tools free online",
    "date time tools for students",
    "date time tools for business",
    
    // Additional SEO Keywords
    "date conversion tools",
    "time conversion tools",
    "age calculation tools",
    "birthday tools",
    "anniversary calculator",
    "days between dates",
    "hours between times",
    "minutes between times",
    "seconds between times",
    "age in days",
    "age in minutes",
    "age in seconds",
    "countdown to birthday",
    "countdown to anniversary",
    "countdown to holiday",
    "countdown to event",
    "business hours calculator",
    "working days calculator",
    "holiday calculator",
    "weekend calculator",
    "leap year calculator",
    "date format converter",
    "time format converter",
    "timezone date tools",
    "international date tools",
    "date validation tools",
    "time validation tools",
    "date comparison tools",
    "time comparison tools",
    "date sorting tools",
    "time sorting tools",
    "date filtering tools",
    "time filtering tools",
    "date analysis tools",
    "time analysis tools",
    "date reporting tools",
    "time reporting tools",
    "date visualization tools",
    "time visualization tools",
    "date statistics tools",
    "time statistics tools"
  ],
  openGraph: {
    title: "Free Date & Time Tools | Age Calculator, Workday Calculator & More | FastTools",
    description:
      "Free online date and time tools including age in hours calculator, year end countdown, workday calculator, date to day finder, and zodiac sign finder. Fast, accurate, and easy to use.",
    url: "https://www.fasttools.store/date-time-tools",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Date & Time Tools - Age Calculator, Workday Calculator & More",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Date & Time Tools | Age Calculator, Workday Calculator & More | FastTools",
    description: "Free online date and time tools including age in hours calculator, year end countdown, workday calculator, date to day finder, and zodiac sign finder.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/date-time-tools",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Date & Time Tools | Age Calculator, Workday Calculator & More | FastTools",
  description: "Free online date and time tools including age in hours calculator, year end countdown, workday calculator, date to day finder, and zodiac sign finder. Fast, accurate, and easy to use.",
  url: "https://www.fasttools.store/date-time-tools",
  mainEntity: {
    "@type": "ItemList",
    name: "Date & Time Tools Collection",
    description: "Comprehensive collection of free online date and time tools for calculations, conversions, and time-related operations",
    numberOfItems: 5,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Age in Hours Calculator", description: "Calculate your age in hours, minutes, and seconds with live updates", url: "https://www.fasttools.store/date-time-tools/age-in-hours" },
      { "@type": "ListItem", position: 2, name: "Year End Countdown", description: "Live countdown to the end of the year with precise time remaining", url: "https://www.fasttools.store/date-time-tools/year-end-countdown" },
      { "@type": "ListItem", position: 3, name: "Workday Calculator", description: "Calculate business days between dates, excluding weekends and holidays", url: "https://www.fasttools.store/date-time-tools/workday-calculator" },
      { "@type": "ListItem", position: 4, name: "Date to Day Finder", description: "Find out what day of the week any date falls on for planning and scheduling", url: "https://www.fasttools.store/date-time-tools/date-to-day" },
      { "@type": "ListItem", position: 5, name: "Zodiac Sign Finder", description: "Discover your zodiac sign based on your birth date with detailed traits", url: "https://www.fasttools.store/date-time-tools/zodiac-sign" }
    ]
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fasttools.store" },
      { "@type": "ListItem", position: 2, name: "Date & Time Tools", item: "https://www.fasttools.store/date-time-tools" }
    ]
  },
  about: {
    "@type": "Thing",
    name: "Date and Time Calculations",
    description: "Free online tools for date and time calculations, age calculations, workday calculations, and time-related operations"
  },
  isPartOf: {
    "@type": "WebSite",
    name: "FastTools",
    url: "https://www.fasttools.store"
  }
}

export default function DateTimeToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
            <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24 border border-border/60 rounded-xl shadow-sm" />
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
            <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          {/* SEO Content Section */}
          <div className="prose prose-slate max-w-none space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Why Choose Our Date & Time Tools?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our comprehensive collection of <strong>date and time tools</strong> is designed to help you calculate, convert, and understand time-related 
                information quickly and accurately. Whether you're planning projects, celebrating milestones, or 
                exploring astrology, our <strong>free date time tools</strong> provide the precision and ease of use you need for any time-related calculation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Free to use</strong> with no registration required</li>
                <li><strong>Accurate calculations</strong> with real-time updates and precise algorithms</li>
                <li><strong>Mobile-friendly</strong> and responsive design for all devices</li>
                <li><strong>Fast, instant results</strong> with no waiting time</li>
                <li><strong>Share and copy results</strong> easily for your projects and records</li>
                <li><strong>Educational and fun</strong> for all ages and skill levels</li>
                <li><strong>Multiple formats</strong> supporting various date and time formats</li>
                <li><strong>Timezone support</strong> for international calculations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Comprehensive Date & Time Tool Categories</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>date time tools</strong> are organized into specialized categories to meet all your time-related needs:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Age & Birthday Calculators</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Calculate precise age in various units including hours, minutes, seconds, days, and years. Perfect for milestone celebrations, 
                age verification, and fun calculations.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Business & Workday Tools</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Calculate business days, workdays, and working hours between dates. Essential for project planning, deadline tracking, 
                and business calculations.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Calendar & Date Tools</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Find day of the week, calculate date differences, and perform various calendar operations. Useful for planning, 
                scheduling, and historical research.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Countdown & Timer Tools</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Live countdowns to important dates, year-end countdowns, and event timers. Great for motivation, 
                anticipation, and time awareness.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Astrology & Zodiac Tools</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discover zodiac signs, astrological information, and personality traits based on birth dates. 
                Fun and educational for astrology enthusiasts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Popular Date & Time Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Discover our most popular <strong>date time tools</strong> that help thousands of users every day:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Age in Hours Calculator</h3>
                  <p className="text-sm text-muted-foreground">Calculate your exact age in hours, minutes, and seconds with live updates. Perfect for milestone celebrations and fun calculations.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Workday Calculator</h3>
                  <p className="text-sm text-muted-foreground">Calculate business days between dates, excluding weekends and holidays. Essential for project planning and deadline tracking.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Zodiac Sign Finder</h3>
                  <p className="text-sm text-muted-foreground">Discover your zodiac sign based on your birth date with detailed traits and astrological information.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Year End Countdown</h3>
                  <p className="text-sm text-muted-foreground">Live countdown to the end of the year with precise time remaining. Great for motivation and time awareness.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Date to Day Finder</h3>
                  <p className="text-sm text-muted-foreground">Find out what day of the week any date falls on. Perfect for planning, scheduling, and historical research.</p>
                </div>
                <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                  <h3 className="font-semibold text-foreground mb-2">Time Difference Calculator</h3>
                  <p className="text-sm text-muted-foreground">Calculate precise time differences between dates and times. Useful for project tracking and time management.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Advanced Date & Time Features</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>date time tools</strong> include advanced features for professional and personal use:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Timezone Support:</strong> Calculate times across different timezones</li>
                <li><strong>Leap Year Handling:</strong> Accurate calculations including leap years</li>
                <li><strong>Holiday Awareness:</strong> Business day calculations excluding holidays</li>
                <li><strong>Multiple Formats:</strong> Support for various date and time formats</li>
                <li><strong>Real-time Updates:</strong> Live countdowns and age calculations</li>
                <li><strong>Export Options:</strong> Copy and share results easily</li>
                <li><strong>Mobile Optimization:</strong> Perfect experience on all devices</li>
                <li><strong>Educational Content:</strong> Learn about time, dates, and calendars</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Use Cases for Our Date & Time Tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>free date time tools</strong> are perfect for various professional and personal applications:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Business & Professional</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Project planning and deadline tracking</li>
                <li>Business day calculations for contracts</li>
                <li>Employee age verification and HR processes</li>
                <li>Meeting scheduling and time zone coordination</li>
                <li>Financial calculations and interest periods</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Personal & Educational</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Birthday and anniversary celebrations</li>
                <li>Age calculations for milestones</li>
                <li>Countdown to special events</li>
                <li>Astrology and zodiac sign discovery</li>
                <li>Historical date research and planning</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">Academic & Research</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Historical date calculations</li>
                <li>Research timeline planning</li>
                <li>Academic project scheduling</li>
                <li>Data analysis and time series</li>
                <li>Statistical time calculations</li>
              </ul>
            </div>
          </div>

          {/* Final Ad Space - Bottom Content */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>
        </div>
        </div>

        {/* Comprehensive Date & Time Tools Section */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Comprehensive Date & Time Tools</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="h-5 w-5 text-blue-500" />
                  Age in Hours Calculator Guide
                </CardTitle>
                <CardDescription>
                  Complete guide to calculating age in hours, minutes, and seconds with precision.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master age calculation with our comprehensive guide covering time units, conversion methods, 
                  practical examples, and applications. Perfect for personal interest and scientific research.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/date-time-tools/workday-calculator">Try Workday Calculator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  Year End Countdown Guide
                </CardTitle>
                <CardDescription>
                  Master year end countdown with comprehensive guide to New Year celebrations and countdown timers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about countdown timers, New Year traditions, time zones, celebration ideas, and technical 
                  aspects. Perfect for event planning and entertainment.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/date-time-tools/year-end-countdown">Try Year End Countdown</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-500" />
                  Workday Calculator Guide
                </CardTitle>
                <CardDescription>
                  Complete guide to workday calculation for business operations and legal compliance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master workday calculation with our comprehensive guide covering business days, holidays, 
                  legal considerations, and practical applications for professionals.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/date-time-tools/workday-calculator">Try Workday Calculator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-pink-500" />
                  Zodiac Sign Finder Guide
                </CardTitle>
                <CardDescription>
                  Complete guide to zodiac signs, astrology, and personality traits based on birth dates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master zodiac sign calculation with our comprehensive guide covering all 12 signs, elements, 
                  compatibility, personality traits, and modern astrology applications.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/date-time-tools/zodiac-sign">Try Zodiac Sign Finder</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  Date to Day Finder Guide
                </CardTitle>
                <CardDescription>
                  Complete guide to finding what day of the week any date falls on with historical examples.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master date to day calculation with our comprehensive guide covering algorithms, calendar systems, 
                  historical dates, and practical applications for research and planning.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/date-time-tools/date-to-day">Try Date to Day Finder</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
