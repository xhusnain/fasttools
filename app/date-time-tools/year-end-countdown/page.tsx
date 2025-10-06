import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { YearEndCountdown } from "@/components/year-end-countdown"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Year End Countdown - Live Countdown to New Year | FastTools",
  description:
    "Free live countdown to the end of the year. See exactly how many days, hours, minutes, and seconds are left until the new year begins.",
  keywords:
    "year end countdown, new year countdown, countdown timer, days until new year, time until new year, year progress",
  openGraph: {
    title: "Year End Countdown - Live Countdown to New Year",
    description: "Free live countdown to the end of the year. See exactly how much time is left until the new year.",
    type: "website",
  },
}

export default function YearEndCountdownPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdSpace position="header" />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Year End Countdown", href: "/date-time-tools/year-end-countdown" },
          ]}
        />

        <div className="mt-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Year End Countdown</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Live countdown to the end of {new Date().getFullYear()}. See exactly how much time is left in the current
              year with real-time updates.
            </p>
          </div>

          <YearEndCountdown />

          <AdSpace position="content" />
        </div>
      </div>
    </div>
  )
}
