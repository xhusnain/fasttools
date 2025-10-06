import { TimezoneConverter } from "@/components/timezone-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Time Zone Converter - Convert Time Between Time Zones | FastTools",
  description:
    "Free online time zone converter. Convert time between different time zones worldwide. Perfect for scheduling international meetings.",
  keywords: "timezone converter, time zone converter, world clock, time converter, international time, UTC converter",
}

export default function TimezoneConverterPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "Time Zone Converter", href: "/converters/timezone" },
          ]}
        />

        <AdSpace slot="header" className="mb-8 h-24" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Time Zone Converter</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Convert time between different time zones worldwide. Perfect for international meetings and travel
              planning.
            </p>
          </div>

          <TimezoneConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">About Time Zone Converter</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our time zone converter helps you convert time between different time zones around the world. Perfect for
              scheduling international meetings, coordinating with remote teams, and planning travel.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
