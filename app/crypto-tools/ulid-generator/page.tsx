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
  metaTitle: "ULID Generator Online — Generate Sortable Unique IDs Free (2026)",
  metaDescription:
    "Free ULID generator. Create lexicographically sortable 128-bit unique identifiers for databases and distributed systems. Better than UUID for time-ordered primary keys.",
  path: "/crypto-tools/ulid-generator",

  header: {
    title: "ULID Generator — Sortable Unique Identifiers",
    description:
      "Generate ULIDs (Universally Unique Lexicographically Sortable Identifiers) for database primary keys and distributed systems. 26-character Crockford Base32 strings with millisecond timestamp prefix for natural time ordering. Drop-in UUID replacement with better sort performance.",
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
    definition:
      "A ULID Generator is a free tool that creates Universally Unique Lexicographically Sortable Identifiers for use as database keys and distributed system IDs.",
    quickAnswer:
      "Click generate to create a new ULID instantly. ULIDs are 26-character strings that are sortable by creation time. Copy the result for use in databases, event logs, or distributed systems.",
    keyTakeaways: [
      "ULIDs are 128-bit identifiers encoded as 26-character Crockford Base32 strings",
      "Lexicographically sortable — ULIDs created later sort after earlier ones",
      "First 10 characters encode millisecond timestamp, last 16 are random",
      "Drop-in replacement for UUIDs with better sorting and readability",
      "No special characters — safe for URLs, filenames, and databases",
    ],
    overview:
      "Generate ULIDs (Universally Unique Lexicographically Sortable Identifiers) with this free online tool. ULIDs are 128-bit identifiers encoded as 26-character Crockford Base32 strings. The first 10 characters encode a millisecond-precision timestamp, and the remaining 16 characters are cryptographically random — giving you time-ordered unique IDs that sort naturally in databases. ULIDs are a popular UUID alternative for applications that need sortable primary keys, event stream IDs, and distributed system identifiers. No hyphens, no special characters — safe for URLs, filenames, and database indexes. Generate single or bulk ULIDs instantly in your browser.",

    howToSteps: [
      "Click Generate to create a new ULID with the current millisecond timestamp.",
      "Use bulk generation to create multiple ULIDs for batch database seeding.",
      "Copy the 26-character ULID for use as a primary key, event ID, or correlation ID.",
      "Verify sort ordering by generating ULIDs at different times and comparing lexicographic order.",
    ],

    features: [
      "128-bit ULIDs in 26-character Crockford Base32 format",
      "Millisecond-precision timestamp prefix for natural chronological sorting",
      "Cryptographically random suffix for uniqueness across distributed systems",
      "Batch generation for seeding databases and creating test fixtures",
      "URL-safe output with no hyphens or special characters",
    ],

    useCases: [
      "Database primary keys that sort by creation time without extra indexes",
      "Event stream and message queue identifiers in distributed architectures",
      "Replacing UUID v4 in applications that need time-ordered inserts",
      "Correlation IDs for distributed tracing across microservices",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          ULIDs solve a key problem with UUID v4: random UUIDs scatter inserts across B-tree indexes, causing page splits and write amplification in databases. ULIDs encode a timestamp in the most significant bits, so new IDs are always appended to the end of the index — dramatically improving insert performance in PostgreSQL, MySQL, and other B-tree-indexed databases.
        </p>
        <p>
          A ULID looks like <code>01ARZ3NDEKTSV4RRFFQ69G5FAV</code> — the first 10 characters are a 48-bit millisecond timestamp (good until the year 10889), and the last 16 characters are 80 bits of cryptographic randomness. This gives you 2^80 unique IDs per millisecond — more than enough for any production workload.
        </p>
      </div>
    ),

    proTip:
      "Use ULIDs instead of UUID v4 as primary keys in PostgreSQL and MySQL — the time-ordered prefix reduces B-tree page splits and improves write performance by up to 30%.",

    faqs: [
      {
        question: "What is the difference between ULID and UUID?",
        answer:
          "ULIDs are lexicographically sortable by creation time (timestamp prefix), while UUID v4 is fully random. ULIDs are 26 characters with no hyphens; UUIDs are 36 characters with hyphens. Both are 128-bit identifiers.",
      },
      {
        question: "Can I use ULID as a database primary key?",
        answer:
          "Yes, and it is often better than UUID v4. ULID's time-ordered prefix means inserts are sequential in B-tree indexes, reducing page splits and improving write performance in PostgreSQL and MySQL.",
      },
      {
        question: "Are ULIDs unique enough for production?",
        answer:
          "Yes. Each millisecond has 80 bits of randomness (2^80 possible values), making collisions practically impossible even in high-throughput distributed systems.",
      },
      {
        question: "Can I extract the timestamp from a ULID?",
        answer:
          "Yes. The first 10 characters encode a 48-bit millisecond timestamp. Most ULID libraries provide a function to extract the creation timestamp from any ULID.",
      },
      {
        question: "Should I replace all UUIDs with ULIDs?",
        answer:
          "Consider ULIDs when you need sortable IDs (database keys, event streams). Keep UUIDs for existing systems where changing ID format would require migration, or when you need RFC 4122 compliance.",
      },
      {
        question: "Is ULID compatible with UUID columns in databases?",
        answer:
          "ULIDs are 128 bits and can be stored in UUID columns by converting to the standard 8-4-4-4-12 format. Many ULID libraries support this conversion natively.",
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
