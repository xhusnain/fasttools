import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const ULIDGenerator = dynamic(
  () => import("@/components/crypto-tools/ulid-generator").then((mod) => mod.ULIDGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "ULID Generator",
  description:
    "Generate lexicographically sortable ULIDs for ID workflows that benefit from time-ordered insertion patterns.",
  metaTitle: "ULID Generator (Sortable 128-bit IDs)",
  metaDescription:
    "Create ULIDs for distributed systems and databases. Generate sortable 128-bit identifiers suitable for ordered insert and lookup workflows.",
  path: "/crypto-tools/ulid-generator",
  keywords: [
    "ulid generator",
    "sortable id generator",
    "ulid vs uuid",
    "time sortable identifier",
    "128 bit id tool",
  ],

  header: {
    title: "ULID Generator",
    description:
      "Generate lexicographically sortable identifiers for database and distributed-system workflows.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "green",
  },

  breadcrumbs: [
    { label: "Crypto Tools", href: "/crypto-tools" },
    { label: "ULID Generator", href: "/crypto-tools/ulid-generator" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate ULIDs as sortable 128-bit identifiers for systems requiring chronological ordering characteristics.",
    alternateName: ["Sortable ID Generator", "ULID Tool"],
    featureList: [
      "ULID generation",
      "Sortable identifier workflow",
      "Batch generation",
      "Copy-ready output",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to generate ULIDs for systems that benefit from time-ordered IDs. ULIDs are 128-bit identifiers designed to be sortable while maintaining high uniqueness characteristics.",

    howToSteps: [
      "Choose output options and quantity.",
      "Generate one or multiple ULIDs.",
      "Copy values into your application or database workflow.",
      "Validate sorting behavior in your target persistence layer.",
    ],

    features: [
      "ULID generation for sortable identifiers",
      "Batch generation support",
      "Copy-friendly output",
      "Useful for database key experiments",
      "Quick utility for distributed-system development",
    ],

    useCases: [
      "Database primary key strategy tests",
      "Event stream identifier generation",
      "Distributed service ID assignment",
      "Migration experiments from UUID-centric schemas",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          ULIDs are often chosen when teams want globally unique IDs with better
          chronological sort behavior than random UUID variants.
        </p>
        <p>
          This page targets utility intent: generate IDs quickly, evaluate
          ordering behavior, and compare against existing UUID-based patterns.
        </p>
      </div>
    ),

    proTip:
      "Benchmark insert and index behavior in your own datastore before adopting ULID as a default key strategy.",

    faqs: [
      {
        question: "How is ULID different from UUID?",
        answer:
          "ULID includes sortable time characteristics, while many UUID variants are primarily random or version-specific.",
      },
      {
        question: "Can ULID be used as a primary key?",
        answer:
          "Yes. Many teams evaluate ULID for primary keys where ordering behavior is beneficial.",
      },
      {
        question: "Are ULIDs unique enough for production systems?",
        answer:
          "ULIDs are designed for high uniqueness in distributed workflows, though implementation and operational context still matter.",
      },
      {
        question: "Should I migrate all UUIDs to ULID?",
        answer:
          "Not always. Migrations should be based on measured performance, compatibility, and operational risk.",
      },
      {
        question: "Does ULID replace RFC UUID standards?",
        answer:
          "ULID is an alternative identifier format used by many systems, while UUID standards remain widely adopted.",
      },
    ],

    relatedTools: [
      { name: "UUID Generator", href: "/crypto-tools/uuid-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Hash Text", href: "/crypto-tools/hash-text" },
      { name: "All Crypto Tools", href: "/crypto-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ULIDGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <ULIDGenerator />
        </div>
      )}
    />
  )
}
