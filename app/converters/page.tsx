import type { Metadata } from "next"
import { GToolCard } from "@/ui/gtool-card"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import {
  HardDrive,
} from "lucide-react"

const converters = [
  {
    title: "File Size Converter",
    description:
      "Convert bytes, KB, MB, GB, and TB for storage and transfer planning.",
    icon: HardDrive,
    href: "/converters/file-size",
  },
]

const toolConfig = createToolConfig({
  toolName: "Online Converters",
  description:
    "Free online converters for file sizes and data units.",
  metaTitle: "File Size Converter — Bytes, KB, MB, GB & Data Units",
  metaDescription:
    "Use free online converters for currency, file size, temperature, text case, JSON/XML/YAML/TOML, and more.",
  path: "/converters",

  header: {
    title: "Online Converters",
    description:
      "Fast, accurate conversion tools for data and storage units.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [{ label: "Converters", href: "/converters" }],

  content: {
    overview:
      "This category includes practical converter tools for everyday work. Use the File Size Converter to translate between bytes, kilobytes, megabytes, gigabytes, and terabytes when planning storage, uploads, and transfers.",

    howToSteps: [
      "Open the converter that matches your task.",
      "Enter or paste your source value.",
      "Review the converted result and copy it where you need it.",
      "Adjust units or values to compare additional scenarios.",
    ],

    features: [
      "File size and data unit conversion",
      "Decimal (KB/MB/GB) and binary (KiB/MiB/GiB) unit handling",
      "Browser-based processing for instant results",
      "Mobile-friendly UI",
      "No signup required",
    ],

    useCases: [
      "Planning storage and file transfer sizes",
      "Estimating upload and download times from file sizes",
      "Comparing disk and cloud storage capacities",
      "Interpreting bandwidth and quota limits",
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">
            Why Use Converter Workflows
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Conversion work often happens in batches. You may convert file
            sizes while planning backups, comparing hosting plans, or
            estimating how long a transfer will take on your connection.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Keeping conversion tools in one category reduces friction and helps
            teams move from raw input to production-ready output faster.
          </p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "Which converter should I start with?",
        answer:
          "Start with the File Size Converter for anything involving storage values — bytes, KB, MB, GB, or TB. It handles both decimal and binary unit conventions.",
      },
      {
        question: "Do converter tools support both directions?",
        answer:
          "Yes. The converters in this category work in both directions, so you can switch between units without opening another page.",
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
          "Everything runs in your browser with instant results, so you can complete conversions quickly without installing software or signing up.",
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
