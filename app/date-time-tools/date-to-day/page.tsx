import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { DateToDayFinder } from "@/components/date-to-day-finder"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Date to Day Finder - Find Day of Week for Any Date | FastTools",
  description:
    "Free online date to day finder. Discover what day of the week any date falls on. Perfect for planning events and exploring historical dates.",
  keywords:
    "date to day finder, day of week calculator, what day was, day finder, date calculator, day of week finder, historical dates",
  openGraph: {
    title: "Date to Day Finder - Find Day of Week for Any Date",
    description: "Free online date to day finder. Discover what day of the week any date falls on.",
    type: "website",
  },
}

export default function DateToDayPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdSpace position="header" />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Date to Day Finder", href: "/date-time-tools/date-to-day" },
          ]}
        />

        <div className="mt-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Date to Day Finder</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Find out what day of the week any date falls on. Perfect for planning events, checking historical dates,
              or satisfying your curiosity.
            </p>
          </div>

          <DateToDayFinder />

          <AdSpace position="content" />
        </div>
      </div>
    </div>
  )
}
