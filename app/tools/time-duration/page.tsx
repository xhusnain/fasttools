import { TimeDurationCalculator } from "@/components/time-duration-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Time Duration Calculator - Calculate Time Between Hours | Free Tool",
  description:
    "Calculate time duration between two times. Free time calculator to find hours and minutes between start and end times. Perfect for work hours and time tracking.",
  keywords: "time calculator, duration calculator, hours calculator, time difference calculator",
  openGraph: {
    title: "Time Duration Calculator | Free Tool",
    description: "Calculate the duration between two times in hours and minutes.",
  },
}

export default function TimeDurationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "Time Duration Calculator", href: "/tools/time-duration" },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Time Duration Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate the time duration between two times. Perfect for tracking work hours, meeting durations, and time
            management.
          </p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          <div>
            <TimeDurationCalculator />
            
            {/* Center Content Ad */}
            <div className="my-8">
              <AdSpace slot="content" className="w-full h-24" />
            </div>
          </div>
          <div className="space-y-6">
            <AdSpace slot="sidebar" className="h-96 sticky top-4" />
          </div>
        </div>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>
      </div>
    </div>
  )
}
