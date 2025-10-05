import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ZodiacSignFinder } from "@/components/zodiac-sign-finder"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Zodiac Sign Finder - Discover Your Zodiac Sign by Birth Date | ToolifyHub",
  description:
    "Free online zodiac sign finder. Discover your zodiac sign based on your birth date with detailed traits, element, and characteristics.",
  keywords:
    "zodiac sign finder, zodiac calculator, astrology sign, horoscope sign, birth sign, zodiac by date, star sign finder",
  openGraph: {
    title: "Zodiac Sign Finder - Discover Your Zodiac Sign by Birth Date",
    description: "Free online zodiac sign finder. Discover your zodiac sign based on your birth date.",
    type: "website",
  },
}

export default function ZodiacSignPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdSpace position="header" />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Date & Time Tools", href: "/date-time-tools" },
            { label: "Zodiac Sign Finder", href: "/date-time-tools/zodiac-sign" },
          ]}
        />

        <div className="mt-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Zodiac Sign Finder</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover your zodiac sign based on your birth date. Learn about your element, traits, and astrological
              characteristics.
            </p>
          </div>

          <ZodiacSignFinder />

          <AdSpace position="content" />
        </div>
      </div>
    </div>
  )
}
