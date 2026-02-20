import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const UuidGenerator = dynamic(
  () => import("@/components/crypto-tools/uuid-generator").then((mod) => mod.UuidGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "UUID Generator",
  description:
    "Generate UUIDs across common versions for application IDs, database keys, and integration workflows.",
  metaTitle: "UUID Generator (v1, v4, v6, v7 and Namespace)",
  metaDescription:
    "Generate UUIDs for development and production workflows, including random, time-ordered, and namespace-based versions.",
  path: "/crypto-tools/uuid-generator",
  keywords: [
    "uuid generator",
    "guid generator",
    "uuid v4 generator",
    "uuid v7 generator",
    "namespace uuid",
  ],

  header: {
    title: "UUID Generator",
    description:
      "Generate UUIDs for modern application and database identifier workflows.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "UUID Generator", href: "/crypto-tools/uuid-generator" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate RFC-aligned UUID versions including random, time-based, and namespace variants.",
    alternateName: ["GUID Generator", "UUID Tool"],
    featureList: [
      "Multiple UUID versions",
      "Batch generation",
      "Namespace support",
      "Copy-ready output",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to generate UUID values for records, entities, and event identifiers. It supports common version families so you can choose random, time-based, or namespace-driven generation depending on your architecture.",

    howToSteps: [
      "Select the UUID version needed for your workflow.",
      "Optionally set namespace/name inputs for deterministic versions.",
      "Generate one or multiple UUID values.",
      "Copy output into your app, database, or test suite.",
    ],

    features: [
      "Support for multiple UUID versions",
      "Batch generation for fast workflows",
      "Namespace-based deterministic options",
      "Copy utility for integration work",
      "Browser-based generation for quick QA",
    ],

    useCases: [
      "Database entity identifiers",
      "Distributed system correlation IDs",
      "Test fixture generation",
      "Event and message trace identifiers",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          UUIDs remain a standard identifier strategy across languages and
          storage systems. Version selection matters because behavior differs
          across random, time-ordered, and namespace-driven formats.
        </p>
        <p>
          This page is optimized for utility: pick a version, generate values,
          and continue implementation with consistent identifier output.
        </p>
      </div>
    ),

    proTip:
      "Choose UUID version based on operational behavior, not trend alone: random for broad uniqueness, time-ordered variants for index-friendly patterns.",

    faqs: [
      {
        question: "Which UUID version should I use by default?",
        answer:
          "Many teams use v4 for general random IDs, while time-ordered variants are evaluated for write/index behavior in large datasets.",
      },
      {
        question: "Can I generate deterministic UUIDs?",
        answer:
          "Yes. Namespace-based versions allow deterministic generation from namespace and name inputs.",
      },
      {
        question: "Are UUID collisions likely in practice?",
        answer:
          "Collision risk is extremely low for properly generated UUIDs in practical production scenarios.",
      },
      {
        question: "Is GUID different from UUID?",
        answer:
          "GUID is often used as a platform-specific naming term; practically it maps to UUID-style identifiers in many ecosystems.",
      },
      {
        question: "Can I bulk generate UUIDs here?",
        answer:
          "Yes. The tool supports multi-value generation for testing and batch workflows.",
      },
    ],

    relatedTools: [
      { name: "ULID Generator", href: "/crypto-tools/ulid-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "RSA Key Pair Generator", href: "/crypto-tools/rsa-generator" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function UuidGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <UuidGenerator />
        </div>
      )}
    />
  )
}
