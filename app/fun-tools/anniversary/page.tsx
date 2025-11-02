import { AnniversaryCalculator } from "@/components/anniversary-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Calendar, Clock, Gift } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "FastTools - Anniversary Calculator | Free Relationship Duration Tool",
  description:
    "FastTools Anniversary Calculator - Calculate how long you've been together in years, months, and days. See next anniversary date and days remaining.",
  keywords: [
    "fasttools",
    "fast tools",
      "anniversary calculator",
    "free anniversary calculator",
    "relationship calculator",
    "how long together",
    "anniversary date",
    "relationship duration",
    "couple calculator",
    "days until anniversary",
    "next anniversary calculator",
    "milestone anniversaries",
    "1 year anniversary",
    "5 year anniversary",
    "10 year anniversary",
    "wedding anniversary calculator",
    "dating anniversary calculator",
    "share anniversary result",
    "free anniversary calculator",
    "anniversary date calculator",
    "relationship milestone calculator",
    "couple anniversary calculator",
      "anniversary calculator",
      "wedding anniversary calculator",
      "relationship anniversary calculator",
      "work anniversary calculator",
      "next wedding anniversary date",
      "how long married calculator",
      "calculate anniversary years months days",
      "anniversary date calculator",
      "anniversary counter",
      "anniversary calculator online",
      "free anniversary calculator",
      "anniversary calculator tool",
      "anniversary calculator app",
      "1 year anniversary calculator",
      "6 month anniversary calculator",
      "100 days anniversary calculator",
      "calculate wedding anniversary months",
      "anniversary calculator years months weeks days",
      "event anniversary calculator",
      "anniversary date difference calculator"
  ],
  alternates: { canonical: "https://www.fasttools.store/fun-tools/anniversary" },
  openGraph: {
    title: "Anniversary Calculator | Relationship Duration | FastTools",
    description: "Calculate how long you've been together in years, months, and days. See next anniversary date and days remaining.",
    url: "https://www.fasttools.store/fun-tools/anniversary",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Anniversary Calculator - Relationship Duration & Next Anniversary",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anniversary Calculator | Relationship Duration | FastTools",
    description: "Calculate how long you've been together in years, months, and days. See next anniversary date and days remaining.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Anniversary Calculator",
      alternateName: "Relationship Calculator",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/fun-tools/anniversary",
      description:
        "Calculate relationship duration and next anniversary with days remaining.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Duration in years/months/days", 
        "Next anniversary", 
        "Days remaining",
        "Anniversary calculator",
        "Relationship calculator",
        "How long together",
        "Anniversary date",
        "Relationship duration",
        "Couple calculator",
        "Milestone anniversaries"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/fun-tools/anniversary",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "anniversary calculator, free anniversary calculator, relationship calculator, how long together, anniversary date, relationship duration, couple calculator",
      about: {
        "@type": "Thing",
        name: "Relationship and Anniversary Tools",
        description: "Free online tools for relationship tracking, anniversary calculations, and couple milestones"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function AnniversaryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
            { label: "Anniversary Calculator", href: "/fun-tools/anniversary" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 lg:flex-[2] space-y-6">
              {/* Hero Section */}
              <div className="text-center space-y-5 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                  <Heart className="h-4 w-4 animate-pulse" />
                  <span>Relationship Tools</span>
                  <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Anniversary Calculator
                </h1>

                <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                  Calculate how long you've been together and discover when your next anniversary is. Perfect for couples celebrating their love!
                </p>
                
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-primary font-medium text-sm">Accurate</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-heading-accent-border shadow">
                    <Clock className="h-4 w-4 text-heading-accent" />
                    <span className="text-heading-accent font-medium text-sm">Real-Time</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                    <Gift className="h-4 w-4 text-accent" />
                    <span className="text-accent font-medium text-sm">Free Forever</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                    <ArrowRight className="h-4 w-4 text-secondary-accent" />
                    <span className="text-secondary-accent font-medium text-sm">Share Ready</span>
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet Ad - Top of Page */}
              <div className="block xl:hidden mb-6">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
              </div>

              {/* Tool Card */}
              <Card className="border border-border shadow-lg bg-card hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold text-card-foreground flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Anniversary Calculator
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Enter your relationship start date to calculate your time together and next anniversary
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <AnniversaryCalculator />
                </CardContent>
              </Card>

              {/* Mobile/Tablet Ad - After tool */}
              <div className="block xl:hidden my-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
              </div>

              {/* FAQ Section */}
              <div className="space-y-5 animate-fade-in-up animation-delay-300">
                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">Complete Guide to Anniversary Calculators: Everything You Need to Know</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How accurate is the anniversary calculator?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Our anniversary calculator provides precise accuracy by calculating relationship duration in years, months, days, hours, minutes, and seconds. The calculation accounts for different month lengths, leap years, and handles edge cases like February 29th birthdays to ensure complete accuracy. The tool uses advanced date algorithms that consider the exact number of days in each month and properly handles leap year calculations. Whether you've been together for seconds, minutes, hours, days, months, or years, you can trust that our calculator provides the most accurate relationship duration possible, giving you confidence in your milestone celebrations.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Can I use this calculator for any type of relationship?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Absolutely! Our anniversary calculator is designed to work for any type of relationship milestone. Whether you're celebrating a dating anniversary, engagement anniversary, wedding anniversary, friendship anniversary, or any other significant relationship milestone, the tool will calculate your time together accurately. The calculator doesn't make assumptions about the type of relationship - it simply calculates the duration between your start date and today. This versatility makes it perfect for couples at any stage of their relationship, from first dates to decades of marriage, and even for celebrating friendships and other meaningful connections.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How does the calculator handle leap years and different month lengths?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Our anniversary calculator intelligently handles leap years and varying month lengths to ensure accurate calculations. The system automatically detects leap years and adjusts calculations accordingly, properly accounting for February 29th in leap years and February 28th in non-leap years. Different month lengths (28, 29, 30, or 31 days) are handled precisely, ensuring that your relationship duration is calculated with complete accuracy regardless of which months your anniversary spans. This sophisticated date handling ensures that whether your relationship started in February or spans multiple leap years, you'll always get the correct duration calculation.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Is my relationship information secure and private?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Your privacy and data security are our top priorities. All relationship information entered into our anniversary calculator is processed locally in your browser and is never stored on our servers or shared with third parties. We don't collect, store, or transmit any personal information, ensuring complete privacy protection. The anniversary calculations happen entirely on your device, and no data is sent to external servers. This means your relationship dates, names, and any other information remain completely private and secure while you use our tool. You can calculate your anniversaries with complete confidence knowing your personal information is protected.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Can I share my anniversary results with friends and family?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Yes! Our anniversary calculator includes built-in sharing features that allow you to easily share your relationship milestone with friends and family. You can copy the anniversary text to share via text message, email, or social media platforms. The shared message includes your exact relationship duration and next anniversary date, making it perfect for celebrating milestones and letting loved ones know about your special dates. This feature is particularly useful for anniversary party planning, creating excitement around upcoming celebrations, and keeping family and friends informed about your relationship milestones.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What happens if I enter a future start date by mistake?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Our anniversary calculator includes built-in validation to prevent future start dates from being entered. The date input field automatically restricts selection to dates up to today, ensuring you can only enter valid relationship start dates from the past. If you accidentally try to enter a future date, the system will prevent the input and guide you to select a proper start date. This validation helps maintain accuracy and prevents confusion in anniversary calculations. The tool is designed to be user-friendly and intuitive, with clear guidance to help you enter the correct information for accurate relationship duration results.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Can I use this tool on mobile devices and tablets?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Yes! Our anniversary calculator is fully responsive and optimized for all devices, including smartphones, tablets, and desktop computers. The interface automatically adapts to different screen sizes, ensuring optimal viewing and functionality across all platforms. On mobile devices, the calculator displays in a user-friendly format with touch-friendly buttons and readable text sizes. The tool works seamlessly on iOS, Android, and all major mobile browsers, providing the same accurate anniversary calculation experience regardless of how you access it. Whether you're checking your anniversary on the go or planning celebrations from home, you'll have full access to all features.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How does the calculator determine the next anniversary date?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Our anniversary calculator intelligently determines your next anniversary by calculating the next occurrence of your relationship start date. The system looks at the current year and determines whether your anniversary date has already passed this year. If it has passed, it calculates the anniversary for next year. If it hasn't passed yet, it uses this year's date. The calculator also handles leap year considerations, ensuring that if your anniversary falls on February 29th, it properly calculates the next occurrence whether it's in a leap year or not. This ensures you always get the correct next anniversary date for planning celebrations and milestones.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What time zone does the anniversary calculator use?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">The anniversary calculator uses your local device time zone for all calculations, ensuring the anniversary calculations are accurate for your specific location. This means the relationship duration and next anniversary calculations will reflect the correct time based on where you are located, taking into account your local time zone settings. The tool automatically detects your device's time zone and uses it for all anniversary calculations, so you don't need to worry about time zone conversions or adjustments. This local time zone approach ensures that the anniversary calculations are always relevant and accurate for your specific location and circumstances.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I use the anniversary calculator for celebration planning?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Our anniversary calculator is an excellent resource for anniversary celebration planning and organization. Use it to track how much time you have left to plan decorations, book venues, order gifts, and coordinate with family and friends. The detailed breakdown showing years, months, and days helps you create realistic timelines for celebration preparation tasks. Share the anniversary information with family members and friends to build excitement and keep everyone informed about the upcoming celebration. The tool also helps you determine the perfect timing for sending out invitations and reminders, ensuring your anniversary planning stays on schedule and creates maximum anticipation for the special day.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Is there a limit to how far back I can calculate an anniversary?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">There's no practical limit to how far back you can calculate an anniversary using our tool. Whether you're calculating anniversaries for relationships that started days ago, months ago, years ago, or even decades ago, the tool will provide accurate calculations. The anniversary calculator works for any start date, from very recent relationships to very old ones, and will always calculate the time together and next anniversary correctly. This flexibility makes the tool useful for long-term relationship tracking, milestone anniversary preparations, and celebrating significant relationship achievements. You can calculate anniversaries for relationships of any duration, from new couples to those celebrating decades together.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Sidebar with AdSense (sticky, lowered start) */}
            <div className="hidden lg:block w-72">
              <div className="sticky top-32 space-y-6">
                <div>
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                </div>
                <div>
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
