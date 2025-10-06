import { AnniversaryCalculator } from "@/components/anniversary-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Anniversary Calculator - Calculate Relationship Duration | FastTools",
  description:
    "Free Anniversary Calculator to calculate how long you've been together and when your next anniversary is. Perfect for couples and relationships. Try it now!",
  keywords:
    "anniversary calculator, relationship calculator, how long together, anniversary date, relationship duration, couple calculator, free anniversary calculator",
  openGraph: {
    title: "Anniversary Calculator - Calculate Relationship Duration",
    description: "Calculate how long you've been together and when your next anniversary is with our free tool.",
    type: "website",
  },
}

export default function AnniversaryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
            { label: "Anniversary Calculator", href: "/fun-tools/anniversary" },
          ]}
        />

        <div className="max-w-2xl mx-auto mt-8 space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Anniversary Calculator</h1>
            <p className="text-base text-muted-foreground text-pretty">
              Calculate how long you've been together and when your next anniversary is. Perfect for couples!
            </p>
          </div>

          <AdSpace slot="content" className="h-24" />

          <AnniversaryCalculator />

          <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
            <div className="p-6 rounded-lg bg-muted/30 border border-border">
              <h2 className="text-xl font-bold mb-4 text-foreground">About Anniversary Calculator</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our Anniversary Calculator helps you track your relationship milestones by calculating exactly how long
                you've been together in years, months, and days. It also shows when your next anniversary is and how
                many days until then!
              </p>
              <h3 className="text-lg font-bold mb-3 text-foreground">Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Calculate time together in years, months, and days</li>
                <li>See total days you've been together</li>
                <li>Find out when your next anniversary is</li>
                <li>Count down days until your next anniversary</li>
                <li>Share your milestone with loved ones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
