import type { Metadata } from "next"
import { GToolCard } from "@/ui/gtool-card"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import {
  Binary,
  BookOpen,
  DollarSign,
  FileCode,
  FileImage,
  FileText,
  Globe,
  HardDrive,
  Radio,
  Ruler,
  Thermometer,
  Type,
} from "lucide-react"

const converters = [
  {
    title: "List Converter",
    description:
      "Convert between comma-separated, line-separated, and cleaned list formats.",
    icon: Type,
    href: "/converters/list-converter",
  },
  {
    title: "JSON to XML Converter",
    description:
      "Convert structured JSON data to XML and switch back when needed.",
    icon: FileCode,
    href: "/converters/json-xml",
  },
  {
    title: "XML to JSON Converter",
    description:
      "Transform XML payloads to JSON for API and app workflows.",
    icon: FileCode,
    href: "/converters/xml-json",
  },
  {
    title: "TOML to YAML Converter",
    description:
      "Convert TOML config files to YAML and back in one workspace.",
    icon: FileCode,
    href: "/converters/toml-yaml",
  },
  {
    title: "TOML to JSON Converter",
    description:
      "Parse TOML config into formatted JSON output instantly.",
    icon: FileCode,
    href: "/converters/toml-json",
  },
  {
    title: "JSON to TOML Converter",
    description:
      "Convert JSON objects to TOML for config and tooling use cases.",
    icon: FileCode,
    href: "/converters/json-toml",
  },
  {
    title: "YAML to TOML",
    description:
      "Convert YAML configuration into TOML with clean key formatting.",
    icon: FileCode,
    href: "/converters/yaml-toml",
  },
  {
    title: "JSON to YAML Converter",
    description:
      "Convert JSON to readable YAML for config and documentation workflows.",
    icon: FileCode,
    href: "/converters/json-yaml",
  },
  {
    title: "YAML to JSON Converter",
    description:
      "Convert YAML documents to JSON for APIs and automation pipelines.",
    icon: FileCode,
    href: "/converters/yaml-json",
  },
  {
    title: "Text to Unicode",
    description:
      "Encode text into Unicode code points and decode back to plain text.",
    icon: Type,
    href: "/converters/unicode",
  },
  {
    title: "Text to ASCII Binary",
    description:
      "Encode text as binary and decode binary values into readable text.",
    icon: Binary,
    href: "/converters/ascii-binary",
  },
  {
    title: "Text to NATO Alphabet",
    description:
      "Convert text to NATO phonetic words and decode in reverse.",
    icon: Radio,
    href: "/converters/nato-phonetic",
  },
  {
    title: "Base64 File Converter",
    description:
      "Encode files to Base64 and decode Base64 back to downloadable files.",
    icon: FileImage,
    href: "/converters/base64-file",
  },
  {
    title: "Roman Numeral Converter",
    description:
      "Convert numbers to Roman numerals and Roman numerals back to numbers.",
    icon: BookOpen,
    href: "/converters/roman-numeral",
  },
  {
    title: "Integer Base Converter",
    description:
      "Convert numbers across binary, decimal, hex, and custom bases.",
    icon: Binary,
    href: "/converters/integer-base",
  },
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
  {
    title: "Currency API",
    description:
      "Access free currency-rate endpoints for development and integrations.",
    icon: FileText,
    href: "/converters/currency-api",
  },
]

const toolConfig = createToolConfig({
  toolName: "Online Converters",
  description:
    "Free online converters for currency, units, text formatting, number bases, and developer data formats.",
  metaTitle: "Online Converters: Currency, Units, Text, and Data Formats",
  metaDescription:
    "Use free online converters for currency, file size, temperature, text case, JSON/XML/YAML/TOML, and more.",
  path: "/converters",
  keywords: [
    "online converters",
    "currency converter",
    "unit converter",
    "file size converter",
    "text case converter",
    "json xml converter",
    "yaml json converter",
  ],

  header: {
    title: "Online Converters",
    description:
      "One place for fast, accurate converters across units, currencies, text, and structured data formats.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [{ label: "Converters", href: "/converters" }],

  content: {
    overview:
      "This category includes practical converter tools for everyday work. Use it to convert measurements, currencies, text formats, and data formats without switching between multiple websites.",

    howToSteps: [
      "Choose the converter that matches your task.",
      "Enter or paste your source value or document.",
      "Review the converted result and copy or download it.",
      "Open related converters when you need additional format changes.",
    ],

    features: [
      "Currency, time zone, and unit conversion tools",
      "Structured data converters (JSON, XML, YAML, TOML)",
      "Text, encoding, and number-base conversion utilities",
      "Browser-based processing for instant results",
      "Mobile-friendly UI across converter pages",
      "No signup required",
    ],

    useCases: [
      "Preparing API payloads and configuration files",
      "Checking travel budgets and currency equivalents",
      "Converting measurement values for work or study",
      "Standardizing text for content and development workflows",
      "Validating data during debugging and QA",
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Why Use Converter Workflows
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Conversion work often happens in batches. You may convert JSON to
            YAML, then YAML to TOML, or convert units while preparing pricing,
            documentation, and calculations.
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
        question: "Which converter should I start with for config files?",
        answer:
          "Start with the source format you already have, such as JSON, YAML, XML, or TOML, then use the matching two-way converter.",
      },
      {
        question: "Do converter tools support both directions?",
        answer:
          "Most data-format tools in this category support two-way conversion so you can switch formats without opening another page.",
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
