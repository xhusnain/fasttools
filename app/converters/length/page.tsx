import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const LengthConverter = dynamic(
  () => import("@/components/converters/length-converter").then((mod) => mod.LengthConverter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Length Converter",
  description:
    "Convert between metric and imperial length units including meter, centimeter, feet, inch, kilometer, and mile.",
  metaTitle: "Length Converter (Metric and Imperial Units)",
  metaDescription:
    "Free length converter for metric and imperial units. Convert meters, feet, inches, kilometers, miles, and more instantly.",
  path: "/converters/length",
  keywords: [
    "length converter",
    "meter to feet converter",
    "inch to cm converter",
    "km to miles converter",
    "unit conversion length",
    "metric imperial converter",
  ],

  header: {
    title: "Length Converter",
    description:
      "Convert length values quickly across common metric and imperial units.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Length Converter", href: "/converters/length" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Length conversion tool for metric and imperial units with precision controls.",
    alternateName: ["Unit Length Converter", "Metric Imperial Converter"],
    featureList: [
      "Metric and imperial conversion",
      "Precision settings",
      "Bidirectional unit conversion",
      "Copy and download results",
      "No signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A Length Converter is a free tool that converts between common distance and length units including meters, feet, inches, centimeters, kilometers, and miles.",
    quickAnswer:
      "Enter a value and select the source unit to see instant conversions across all length units. Supports metric (mm, cm, m, km) and imperial (in, ft, yd, mi) systems. Results update in real time.",
    keyTakeaways: [
      "Converts between metric and imperial length units instantly",
      "1 inch = 2.54 cm, 1 foot = 30.48 cm, 1 mile = 1.609 km",
      "Results update in real time as you type",
      "Useful for construction, travel, education, and everyday calculations",
      "Supports millimeters through kilometers and inches through miles",
    ],
    overview:
      "This length converter helps convert values between common distance units for construction, education, travel, and daily calculations. Results update instantly as input changes.",

    howToSteps: [
      "Enter the source value.",
      "Choose source and target units.",
      "Review the converted output instantly.",
      "Use precision settings for more or fewer decimal places.",
    ],

    features: [
      "Metric and imperial unit support",
      "Instant conversion updates",
      "Unit swap button",
      "Adjustable precision",
      "Copy and export result options",
      "Mobile and desktop friendly interface",
    ],

    useCases: [
      "Construction and engineering measurements",
      "Academic conversion tasks",
      "Travel distance comparisons",
      "Product dimensions and packaging checks",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Measurement systems differ by country and industry. This tool keeps
          conversions consistent and quick when moving between metric and
          imperial formats.
        </p>
      </div>
    ),

    proTip:
      "For reporting, keep higher precision during calculation and round only in final presentation.",

    faqs: [
      {
        question: "Which units are included?",
        answer:
          "The tool supports common units such as millimeter, centimeter, meter, kilometer, inch, feet, yard, and mile.",
      },
      {
        question: "Can I convert feet to meters and back?",
        answer:
          "Yes. Choose feet as source and meter as target, or reverse the units using swap.",
      },
      {
        question: "Can I control decimal precision?",
        answer:
          "Yes. Use the settings control to adjust decimal places.",
      },
      {
        question: "Is this length converter free?",
        answer: "Yes. It is free with no signup required.",
      },
      {
        question: "Does it work on mobile?",
        answer: "Yes. The converter is responsive for mobile and desktop use.",
      },
    ],

    relatedTools: [
      { name: "Temperature Converter", href: "/converters/temperature" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Time Zone Converter", href: "/converters/timezone" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function LengthConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<LengthConverter />)} />
}
