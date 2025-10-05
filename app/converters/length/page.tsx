import { LengthConverter } from "@/components/length-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Length Converter - Meters, Feet, Inches, CM | ToolifyHub",
  description:
    "Free online length converter. Convert between meters, feet, inches, centimeters, kilometers, miles, yards, and millimeters instantly.",
  keywords: "length converter, meter to feet, cm to inches, distance converter, unit converter, measurement converter",
}

export default function LengthConverterPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "Length Converter", href: "/converters/length" },
          ]}
        />

        <AdSpace slot="header" className="mb-8 h-24" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Length Converter</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Convert between different length units including meters, feet, inches, centimeters, and more.
            </p>
          </div>

          <LengthConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">About Length Converter</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our length converter tool helps you convert between metric and imperial units quickly and accurately.
              Perfect for construction, travel, education, and everyday measurements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
