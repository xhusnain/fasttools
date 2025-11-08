import { BirthdayCountdown } from "@/components/birthday-countdown"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Cake, Clock, Calendar, Gift } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "FastTools - Birthday Countdown | Free Real-Time Timer",
  description:
    "FastTools Birthday Countdown - Live birthday countdown showing days, hours, minutes, and seconds until your next birthday. Share the timer with friends.",
    keywords: [
      "fasttools",
      "fast tools",
        "birthday countdown",
        "free birthday countdown",
        "birthday timer",
        "days until birthday",
        "countdown to birthday",
        "birthday counter",
        "happy birthday timer",
        "share birthday countdown",
        "birthday reminder",
        "next birthday date",
        "live countdown",
        "party countdown",
        "celebration timer",
        "birthday countdown timer",
        "birthday countdown timer",
        "birthday countdown clock",
        "birthday countdown online",
        "free birthday countdown timer",
        "birthday countdown widget",
        "birthday countdown app",
        "birthday countdown generator",
        "birthday countdown calculator",
        "birthday countdown full screen",
        "birthday countdown for WhatsApp",
        "birthday countdown free download",
        "birthday countdown share link",
        "birthday countdown tool",
        "online birthday countdown timer",
        "birthday countdown timer online free",
        "birthday countdown timer download",
        "birthday countdown timer app",
        "birthday countdown timer widget online",
        "birthday countdown timer full screen black background",
        "birthday countdown timer aesthetic"
    ],

  alternates: { canonical: "https://www.fasttools.store/fun-tools/birthday-countdown" },
  openGraph: {
    title: "Free Birthday Countdown | Real‑Time Birthday Timer | FastTools",
    description: "Live birthday countdown showing days, hours, minutes, and seconds until your next birthday. Share the timer with friends.",
    url: "https://www.fasttools.store/fun-tools/birthday-countdown",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Birthday Countdown - Real‑Time Birthday Timer",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Birthday Countdown | Real‑Time Birthday Timer | FastTools",
    description: "Live birthday countdown showing days, hours, minutes, and seconds until your next birthday. Share the timer with friends.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Birthday Countdown",
      alternateName: "Birthday Timer",
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/fun-tools/birthday-countdown",
      description:
        "Live countdown to your next birthday with share options.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Live timer",
        "Share link",
        "Next birthday date",
        "Birthday countdown",
        "Birthday timer",
        "Days until birthday",
        "Countdown to birthday",
        "Birthday counter",
        "Happy birthday timer",
        "Celebration timer"
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
      downloadUrl: "https://www.fasttools.store/fun-tools/birthday-countdown",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "birthday countdown, free birthday countdown, birthday timer, days until birthday, countdown to birthday, birthday counter, happy birthday timer",
      about: {
        "@type": "Thing",
        name: "Birthday and Celebration Tools",
        description: "Free online tools for birthday countdowns, celebrations, and party planning"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function BirthdayCountdownPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
            { label: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 lg:flex-[2] space-y-6">
              {}
              <div className="text-center space-y-5 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                  <Cake className="h-4 w-4 animate-pulse" />
                  <span>Fun Birthday Tools</span>
                  <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Birthday Countdown Timer
                </h1>

                <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                  Real-time countdown to your next birthday showing days, hours, minutes, and seconds. Share the excitement with friends and family!
                </p>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-primary font-medium text-sm">Real-Time</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-heading-accent-border shadow">
                    <Calendar className="h-4 w-4 text-heading-accent" />
                    <span className="text-heading-accent font-medium text-sm">Live Updates</span>
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

              {}
              <div className="block xl:hidden mb-6">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
              </div>

              {}
              <Card className="border border-border shadow-lg bg-card hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold text-card-foreground flex items-center gap-2">
                    <Cake className="h-5 w-5 text-primary" />
                    Birthday Countdown Timer
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Enter your birth date to see the real-time countdown to your next birthday
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <BirthdayCountdown />
                </CardContent>
              </Card>

              {}
              <div className="block xl:hidden my-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
              </div>

              {}
              <div className="space-y-5 animate-fade-in-up animation-delay-300">
                <div className="p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl font-bold mb-4 text-card-foreground">Complete Guide to Birthday Countdown Tools: Everything You Need to Know</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How accurate is the birthday countdown timer?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Our birthday countdown timer provides precise accuracy down to the second, updating in real-time to show exactly how much time remains until your next birthday. The calculation accounts for leap years, different month lengths, and time zone considerations to ensure complete accuracy. The timer automatically adjusts for daylight saving time changes and handles edge cases like leap year birthdays (February 29th) by calculating the next occurrence correctly. Whether you're counting down days, hours, minutes, or seconds, you can trust that our tool provides the most accurate countdown possible.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Can I share my birthday countdown with friends and family?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Absolutely! Our birthday countdown tool includes built-in sharing features that allow you to easily share your countdown with friends and family. You can copy the countdown text to share via text message, email, or social media platforms. The shared message includes your exact countdown details and next birthday date, making it perfect for building excitement and letting loved ones know how much time is left until your special day. This feature is particularly useful for birthday party planning, creating anticipation, and keeping everyone informed about your upcoming celebration.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How does the tool handle leap year birthdays?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Our birthday countdown tool intelligently handles leap year birthdays (February 29th) by calculating the next occurrence of your birthday. If you were born on February 29th, the tool will count down to February 28th in non-leap years and February 29th in leap years. This ensures accurate countdown calculations regardless of whether the current year is a leap year or not. The system automatically detects leap years and adjusts the countdown accordingly, so you'll always get the correct time remaining until your next birthday celebration, whether it falls on the 28th or 29th of February.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Is my birth date information secure and private?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Your privacy and data security are our top priorities. All birth date information entered into our birthday countdown tool is processed locally in your browser and is never stored on our servers or shared with third parties. We don't collect, store, or transmit any personal information, ensuring complete privacy protection. The countdown calculations happen entirely on your device, and no data is sent to external servers. This means your birth date remains completely private and secure while you use our tool. You can use the countdown timer with complete confidence knowing your personal information is protected.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Can I use this tool on mobile devices and tablets?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Yes! Our birthday countdown tool is fully responsive and optimized for all devices, including smartphones, tablets, and desktop computers. The interface automatically adapts to different screen sizes, ensuring optimal viewing and functionality across all platforms. On mobile devices, the countdown displays in a user-friendly format with touch-friendly buttons and readable text sizes. The tool works seamlessly on iOS, Android, and all major mobile browsers, providing the same accurate countdown experience regardless of how you access it. Whether you're checking your countdown on the go or planning from home, you'll have full access to all features.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What happens if I enter a future birth date by mistake?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Our birthday countdown tool includes built-in validation to prevent future birth dates from being entered. The date input field automatically restricts selection to dates up to today, ensuring you can only enter valid birth dates from the past. If you accidentally try to enter a future date, the system will prevent the input and guide you to select a proper birth date. This validation helps maintain accuracy and prevents confusion in countdown calculations. The tool is designed to be user-friendly and intuitive, with clear guidance to help you enter the correct information for accurate countdown results.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How often does the countdown update?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">The birthday countdown timer updates every second in real-time, providing you with the most current and accurate countdown possible. You'll see the seconds tick down continuously, and the minutes, hours, and days will adjust automatically as time progresses. This real-time updating ensures you always have the most precise countdown information available. The timer continues running as long as you keep the page open, giving you a live countdown experience. This feature is particularly exciting as your birthday approaches, allowing you to watch the final moments count down in real-time.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Can I use this tool for someone else's birthday countdown?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Absolutely! Our birthday countdown tool can be used for anyone's birthday, not just your own. Simply enter the birth date of the person whose birthday you want to count down to, and the tool will calculate the exact time remaining until their next birthday. This feature is perfect for parents counting down to their children's birthdays, friends planning surprise parties, or anyone wanting to track upcoming celebrations. The tool works the same way regardless of whose birthday you're counting down to, providing accurate results for any birth date entered. This versatility makes it a valuable tool for birthday planning and celebration preparation.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">What time zone does the countdown use?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">The birthday countdown timer uses your local device time zone for all calculations, ensuring the countdown is accurate for your specific location. This means the countdown will reflect the correct time remaining based on where you are located, taking into account your local time zone settings. The tool automatically detects your device's time zone and uses it for all countdown calculations, so you don't need to worry about time zone conversions or adjustments. This local time zone approach ensures that the countdown is always relevant and accurate for your specific location and circumstances.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I use the countdown for birthday party planning?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">Our birthday countdown tool is an excellent resource for birthday party planning and organization. Use it to track how much time you have left to plan decorations, send invitations, order cakes, and coordinate with guests. The detailed breakdown showing days, hours, minutes, and seconds helps you create realistic timelines for party preparation tasks. Share the countdown with family members and friends to build excitement and keep everyone informed about the upcoming celebration. The tool also helps you determine the perfect timing for sending out invitations and reminders, ensuring your party planning stays on schedule and creates maximum anticipation for the special day.</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">Is there a limit to how far in advance I can count down?</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">There's no practical limit to how far in advance you can count down to a birthday using our tool. Whether you're counting down days, weeks, months, or even years until someone's next birthday, the tool will provide accurate calculations. The countdown works for any birth date, from recent births to very old birth dates, and will always calculate the time remaining until the next occurrence of that birthday. This flexibility makes the tool useful for long-term planning, milestone birthday preparations, and tracking significant upcoming celebrations. You can start counting down months or even years in advance for major milestone birthdays or special celebrations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
