import { FutureAgePredictor } from "@/components/future-age-predictor"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Future Age Predictor - Calculate Your Age in Any Year | FastTools",
  description:
    "Predict how old you'll be in any future year with our free Future Age Predictor. Fun and easy way to visualize your age in the future. Try it now!",
  keywords:
    "future age predictor, age calculator, future age, how old will i be, age prediction, calculate future age, free age predictor",
  openGraph: {
    title: "Future Age Predictor - Calculate Your Age in Any Year",
    description: "Predict how old you'll be in any future year with our free Future Age Predictor tool.",
    type: "website",
  },
}

export default function FutureAgePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Fun Tools", href: "/fun-tools" },
            { label: "Future Age Predictor", href: "/fun-tools/future-age" },
          ]}
        />

        <div className="max-w-2xl mx-auto mt-8 space-y-8">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Future Age Predictor</h1>
            <p className="text-base text-muted-foreground text-pretty">
              Discover how old you'll be in any future year. Perfect for planning milestones and visualizing your
              future!
            </p>
          </div>

          <AdSpace slot="content" className="h-24" />

          <FutureAgePredictor />

          <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
            <div className="p-6 rounded-lg bg-muted/30 border border-border">
              <h2 className="text-xl font-bold mb-4 text-foreground">About Future Age Predictor</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our Future Age Predictor is a fun tool that helps you calculate how old you'll be in any future year.
                Whether you're planning for retirement, curious about milestone birthdays, or just want to see how old
                you'll be in a specific year, this tool makes it easy and fun!
              </p>
              <h3 className="text-lg font-bold mb-3 text-foreground">How to Use:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Enter your birth date</li>
                <li>Enter the target year you want to know your age for</li>
                <li>Click "Predict My Future Age" to see the result</li>
                <li>Share your result with friends and family!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
