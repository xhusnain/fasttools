import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const FileSizeConverter = dynamic(
  () =>
    import("@/components/converters/file-size-converter").then(
      (mod) => mod.FileSizeConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "File Size Converter",
  description:
    "Convert storage units, analyze file size, estimate transfer time, and compare decimal vs binary size standards.",
  metaTitle: "File Size Converter (Bytes, KB, MB, GB, TB)",
  metaDescription:
    "Free file size converter for decimal and binary units. Convert bytes, analyze files, and estimate transfer time.",
  path: "/converters/file-size",
  keywords: [
    "file size converter",
    "bytes to mb converter",
    "mb to gb converter",
    "binary vs decimal units",
    "file transfer time calculator",
    "storage size converter",
  ],

  header: {
    title: "File Size Converter",
    description:
      "Convert storage units and estimate file transfer behavior with practical analysis tools.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "File Size Converter", href: "/converters/file-size" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "File size conversion and analysis tool for decimal/binary units and transfer-time estimation.",
    alternateName: ["Storage Unit Converter", "Bytes Converter"],
    featureList: [
      "Decimal and binary unit conversion",
      "Drag-and-drop file analyzer",
      "Transfer time estimator",
      "Media/storage estimation utilities",
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
      "A File Size Converter is a free tool that converts between digital storage units like bytes, KB, MB, GB, and TB in both decimal and binary standards.",
    quickAnswer:
      "Enter a value and select the source unit to instantly convert across all storage units. Toggle between decimal (KB = 1000 bytes) and binary (KiB = 1024 bytes) standards. Estimate file transfer times based on connection speed.",
    keyTakeaways: [
      "Converts between bytes, KB, MB, GB, TB, and PB instantly",
      "Supports both decimal (SI) and binary (IEC) unit standards",
      "1 MB = 1,000 KB (decimal) vs 1 MiB = 1,024 KiB (binary)",
      "Includes file transfer time estimation based on connection speed",
      "OS file sizes often use binary units while storage vendors use decimal",
    ],
    overview:
      "This tool helps convert digital storage units and inspect file-size context for real workflows. It supports both decimal and binary standards, file analysis, and transfer-time estimation.",

    howToSteps: [
      "Enter a value and choose source units.",
      "Review converted values across key units.",
      "Use File Analyzer to inspect actual file size from uploads.",
      "Use Transfer tab to estimate upload/download time.",
    ],

    features: [
      "Decimal and binary conversion support",
      "Multi-unit output from one input",
      "File analyzer with drag-and-drop input",
      "Transfer-time estimator",
      "Storage-cost estimation panel",
      "No-signup browser-based usage",
    ],

    useCases: [
      "Checking upload size limits",
      "Estimating cloud storage usage",
      "Comparing MB vs MiB values",
      "Planning transfer time for large files",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          File size confusion often comes from decimal vs binary units. This tool
          shows both standards clearly and adds practical calculators to support
          planning, performance checks, and documentation.
        </p>
      </div>
    ),

    proTip:
      "Use binary units for operating-system views and decimal units for vendor storage marketing figures.",

    faqs: [
      {
        question: "What is the difference between MB and MiB?",
        answer:
          "MB is decimal (1,000,000 bytes) while MiB is binary (1,048,576 bytes).",
      },
      {
        question: "Can I analyze a real file size here?",
        answer:
          "Yes. Use the file analyzer tab to upload and inspect size instantly.",
      },
      {
        question: "Does this estimate transfer times?",
        answer:
          "Yes. The transfer tab estimates time based on selected connection speeds.",
      },
      {
        question: "Can I convert between many units at once?",
        answer:
          "Yes. The converter outputs multiple unit equivalents from one input value.",
      },
      {
        question: "Is the file size converter free?",
        answer: "Yes. It is free and does not require signup.",
      },
    ],

    relatedTools: [
      { name: "Base64 File Converter", href: "/converters/base64-file" },
      { name: "Length Converter", href: "/converters/length" },
      { name: "Time Zone Converter", href: "/converters/timezone" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function FileSizeConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<FileSizeConverter />)} />
}
