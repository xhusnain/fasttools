import type { Metadata } from "next"
import { GToolCard } from "@/ui/gtool-card"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import {
  DollarSign,
  Globe,
  HardDrive,
  Ruler,
  Thermometer,
  Type,
} from "lucide-react"

const converters = [
  {
    title: "Currency Converter",
    description:
      "Convert between global currencies with live exchange rate data.",
    icon: DollarSign,
    href: "/converters/currency",
  },
  {
    title: "Text Case Converter",
    description:
      "Convert text between uppercase, title case, camelCase, and more.",
    icon: Type,
    href: "/converters/text-case",
  },
  {
    title: "Length Converter",
    description:
      "Convert length units including meters, feet, inches, and miles.",
    icon: Ruler,
    href: "/converters/length",
  },
  {
    title: "Temperature Converter",
    description:
      "Convert temperatures between Celsius and Fahrenheit instantly.",
    icon: Thermometer,
    href: "/converters/temperature",
  },
  {
    title: "File Size Converter",
    description:
      "Convert bytes, KB, MB, GB, and TB for storage and transfer planning.",
    icon: HardDrive,
    href: "/converters/file-size",
  },
  {
    title: "Time Zone Converter",
    description:
      "Convert times across cities and zones with DST-aware handling.",
    icon: Globe,
    href: "/converters/timezone",
  },
]

const toolConfig = createToolConfig({
  toolName: "Online Converters",
  description:
    "Free online converters for currency, units, file sizes, time zones, and text case.",
  metaTitle: "Online Converters: Currency, Length, Temperature, Timezone & More",
  metaDescription:
    "Use free online converters for currency, file size, temperature, text case, JSON/XML/YAML/TOML, and more.",
  path: "/converters",

  header: {
    title: "Online Converters",
    description:
      "One place for fast, accurate converters across units, currencies, time zones, and text.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [{ label: "Converters", href: "/converters" }],

  content: {
    overview:
      "This category includes practical converter tools for everyday work. Use it to convert measurements, currencies, time zones, file sizes, and text case without switching between multiple websites.",

    howToSteps: [
      "Choose the converter that matches your task.",
      "Enter or paste your source value or document.",
      "Review the converted result and copy or download it.",
      "Open related converters when you need additional format changes.",
    ],

    features: [
      "Currency, time zone, and unit conversion tools",
      "File size and length conversion utilities",
      "Text case conversion for content and code",
      "Browser-based processing for instant results",
      "Mobile-friendly UI across converter pages",
      "No signup required",
    ],

    useCases: [
      "Checking travel budgets and currency equivalents",
      "Converting measurement values for work or study",
      "Standardizing text for content and development workflows",
      "Scheduling meetings across time zones",
      "Planning storage and file transfer sizes",
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Why Use Converter Workflows
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Conversion work often happens in batches. You may convert
            currencies while checking prices, switch text case while editing
            content, or convert units while preparing pricing, documentation,
            and calculations.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Keeping these tools in one category reduces friction and helps teams
            move from raw input to production-ready output faster.
          </p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "Which converter should I start with?",
        answer:
          "Pick the tool that matches your input: currency for money, length or temperature for measurements, file size for storage values, text case for content, and time zone for scheduling.",
      },
      {
        question: "Do converter tools support both directions?",
        answer:
          "Yes. The converters in this category work in both directions, so you can switch between units, currencies, or formats without opening another page.",
      },
      {
        question: "Are these converters free to use?",
        answer:
          "Yes. The converter tools in this category are free and available without account creation.",
      },
      {
        question: "Can I use these tools on mobile devices?",
        answer:
          "Yes. All converter pages are designed to work on mobile and desktop screens.",
      },
      {
        question: "What is the main advantage of this converter category?",
        answer:
          "It combines utility, developer, and format-conversion workflows in one place, so you can complete multi-step transformations faster.",
      },
    ],

    relatedTools: [
      { name: "Developer Tools", href: "/dev-tools" },
      { name: "Finance Tools", href: "/finance-tools" },
      { name: "Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ConvertersPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {converters.map((converter) => (
            <GToolCard
              key={`converters-${converter.href}`}
              title={converter.title}
              description={converter.description}
              href={converter.href}
              icon={converter.icon}
              ctaText="Use Converter"
            />
          ))}
        </div>
      )}
    />
  )
}
