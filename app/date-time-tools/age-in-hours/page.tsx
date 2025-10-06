import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AgeInHoursCalculator } from "@/components/age-in-hours-calculator"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Age in Hours Calculator - Calculate Your Age in Hours, Minutes & Seconds | FastTools",
  description:
    "Free online age in hours calculator. Calculate your exact age in hours, minutes, and seconds. Fun and unique way to see how long you've been alive.",
  keywords:
    "age in hours, age in minutes, age in seconds, age calculator, time calculator, how old am I in hours, age converter",
  openGraph: {
    title: "Age in Hours Calculator - Calculate Your Age in Hours, Minutes & Seconds",
    description: "Free online age in hours calculator. Calculate your exact age in hours, minutes, and seconds.",
    type: "website",
  },
}

export default function AgeInHoursPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdSpace position="header" />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Age in Hours", href: "/date-time-tools/age-in-hours" },
          ]}
        />

        <div className="mt-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Age in Hours Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Calculate your exact age in hours, minutes, and seconds. A fun and unique way to see how long you've been
              alive!
            </p>
          </div>

          <AgeInHoursCalculator />

          <AdSpace position="content" />
        </div>
      </div>
    </div>
  )
}
