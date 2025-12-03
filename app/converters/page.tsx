import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GCard } from "@/components/globalcomponents/gcard"
import { Type, Ruler, HardDrive, DollarSign, Globe, Thermometer } from "lucide-react"

const converters = [
  {
    title: "Text Case Converter",
    description: "Convert text between uppercase, lowercase, title case, sentence case, camelCase, and snake_case.",
    icon: Type,
    href: "/converters/text-case",
    color: "blue"
  },
  {
    title: "Length Converter",
    description: "Convert between meters, feet, inches, centimeters, kilometers, miles, and more length units.",
    icon: Ruler,
    href: "/converters/length",
    color: "green"
  },
  {
    title: "File Size Converter",
    description: "Convert between bytes, KB, MB, GB, and TB. Perfect for understanding file and storage sizes.",
    icon: HardDrive,
    href: "/converters/file-size",
    color: "purple"
  },
  {
    title: "Currency Converter",
    description: "Convert between major world currencies including USD, EUR, GBP, JPY, INR, and more.",
    icon: DollarSign,
    href: "/converters/currency",
    color: "yellow"
  },
  {
    title: "Time Zone Converter",
    description: "Convert time between different time zones worldwide. Perfect for scheduling international meetings.",
    icon: Globe,
    href: "/converters/timezone",
    color: "cyan"
  },
  {
    title: "Temperature Converter",
    description: "Convert between Celsius and Fahrenheit temperature scales quickly and accurately.",
    icon: Thermometer,
    href: "/converters/temperature",
    color: "red"
  },
]

const toolConfig = createToolConfig({
  toolName: "Online Converters",
  description: "Free converters for text case, length, file size, currency, time zones, temperature. Fast, accurate, real-time data.",
  metaTitle: "Online Converters | Text, Length, Currency & Temperature",
  metaDescription: "Free converters for text case, length, file size, currency, time zones, temperature. Fast, accurate, real-time data.",
  path: "/converters",
  header: {
    title: "All Conversion Tools",
    description: "Discover our comprehensive collection of free online conversion tools designed for professionals, students, and everyday users. All tools are 100% free, highly accurate, and optimized for both desktop and mobile use.",
    titleSize: "medium",
    descriptionSize: "small",
  },
  breadcrumbs: [
    { label: "Converters", href: "/converters" },
  ],
  content: {
    overview: "Each tool pairs clear UX with verified math. We pre-validate inputs, normalize units, and apply domain‑specific formulas so the output is predictable and repeatable. Wherever live data is needed (for example, currency rates), we reconcile values to consistent time windows to avoid jumpy results.",
    howToSteps: [
      "Select the specific converter tool you need from the grid below (e.g., Currency, Length, Text Case).",
      "Enter your input values into the designated fields.",
      "View the accurate conversion results instantly or copy them to your clipboard."
    ],
    aboutTool: "Our suite of online converters is designed to be your one-stop solution for all digital transformation needs. From developers needing text case formatting to travelers checking exchange rates, we provide professional-grade tools that are free, fast, and privacy-focused. We continuously update our exchange rates and validate our conversion formulas to ensure you get the most accurate results possible.",
    features: [
      "Fresh Data, Clean Pipelines: Exchange rates are refreshed frequently and cached to keep pages fast.",
      "Built for Accuracy: Calculations use deterministic formulas, sensible rounding, and unit‑aware precision.",
      "Standardized Definitions: Measurement conversions rely on standardized SI and widely accepted imperial definitions.",
      "Time Zone Aware: Time tools account for daylight saving and regional offsets by design.",
      "Privacy Focused: Text utilities preserve whitespace and casing rules precisely."
    ],
    useCases: [
      "Professional Workflow: Use text case tools to standardize titles and identifiers.",
      "Global Operations: Convert prices with transparent rates, then confirm call schedules in the target time zone.",
      "Study and Everyday Tasks: Students can cross‑check homework results and lab values quickly.",
      "Documentation: Rely on unit conversions to keep metrics consistent from draft to delivery.",
      "Content Creation: Keep copy consistent across platforms with reliable case and formatting tools."
    ],
    faqs: [
      {
        question: "What is a universal converter online and when should I use it?",
        answer: "A universal converter online is a single place to run common online conversion tasks—unit converter, currency converter, file size converter, and more. Use it when you need quick answers without switching tools; it routes your input to the right calculator automatically."
      },
      {
        question: "How accurate is your currency converter?",
        answer: "Rates are refreshed frequently and normalized to a recent market snapshot. We show clean values for clarity; behind the scenes we compute at higher precision so totals remain consistent even when you recalc minutes later."
      },
      {
        question: "Temperature scale converter: °C, °F, and K explained",
        answer: "Our temperature scale converter uses exact formulas: °F = °C × 9/5 + 32 and K = °C + 273.15. Choose Celsius for science and daily weather, Fahrenheit for US contexts, and Kelvin for absolute temperature in scientific work."
      },
      {
        question: "Time zone converter: does it handle DST and future dates?",
        answer: "Yes. The time zone converter applies authoritative zone data, so historical and future daylight‑saving rules are accounted for. Planning a meeting months ahead will still map to the correct local time."
      },
      {
        question: "File size converter: MB vs MiB—what should I pick?",
        answer: "Use MB (decimal, 1 MB = 1,000,000 bytes) for storage vendor specs and marketing. Use MiB (binary, 1 MiB = 1,048,576 bytes) for developer tooling and operating systems. Our file size converter supports both and labels them clearly."
      }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function ConvertersPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {converters.map((converter) => (
            <GCard
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

