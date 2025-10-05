import { BirthdayCountdown } from "@/components/birthday-countdown"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Birthday Countdown - Real-Time Birthday Timer | ToolifyHub",
  description:
    "Free Birthday Countdown timer showing days, hours, minutes, and seconds until your next birthday. Real-time countdown with sharing options. Try it now!",
  keywords:
    "birthday countdown, birthday timer, days until birthday, birthday calculator, countdown to birthday, birthday counter, free birthday countdown",
  openGraph: {
    title: "Birthday Countdown - Real-Time Birthday Timer",
    description: "Count down to your next birthday in real-time with days, hours, minutes, and seconds!",
    type: "website",
  },
}

export default function BirthdayCountdownPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
            { label: "Birthday Countdown", href: "/fun-tools/birthday-countdown" },
          ]}
        />

        <div className="max-w-2xl mx-auto mt-8 space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Birthday Countdown</h1>
            <p className="text-base text-muted-foreground text-pretty">
              Real-time countdown to your next birthday in days, hours, minutes, and seconds!
            </p>
          </div>

          <AdSpace slot="content" className="h-24" />

          <BirthdayCountdown />

          <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
            <div className="p-6 rounded-lg bg-muted/30 border border-border">
              <h2 className="text-xl font-bold mb-4 text-foreground">About Birthday Countdown</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our Birthday Countdown tool provides a real-time countdown to your next birthday, showing exactly how
                many days, hours, minutes, and seconds are left. Perfect for building excitement and sharing with
                friends and family!
              </p>
              <h3 className="text-lg font-bold mb-3 text-foreground">Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Real-time countdown that updates every second</li>
                <li>Shows days, hours, minutes, and seconds</li>
                <li>Displays your next birthday date</li>
                <li>Easy sharing options for social media</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
