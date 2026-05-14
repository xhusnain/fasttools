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
  metaTitle: "UUID Generator Online — Generate UUID v4, v1, v7 & GUID Free (2026)",
  metaDescription:
    "Free online UUID generator. Create UUID v4 (random), v1 (timestamp), v7 (sortable), and namespace-based UUIDs. Generate GUIDs for databases, APIs, and distributed systems. Bulk generation supported.",
  path: "/crypto-tools/uuid-generator",

  header: {
    title: "UUID / GUID Generator — v1, v4, v6, v7 & Namespace",
    description:
      "Generate universally unique identifiers (UUIDs) in all standard versions. UUID v4 (cryptographically random), v1 (timestamp + MAC), v7 (sortable timestamp, RFC 9562), and v3/v5 (namespace-based deterministic). Also known as GUIDs. Standard 128-bit format: 8-4-4-4-12 hex characters. Bulk generation supported for database seeding and test fixtures.",
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
    definition:
      "A UUID Generator is a free tool that creates universally unique identifiers (UUIDs) in standard formats for use as database keys, session tokens, and resource identifiers.",
    quickAnswer:
      "Click generate to create a new UUID instantly. Choose between UUID v4 (random) or v1 (timestamp-based). Copy the result and use it in your code, database, or configuration. Bulk generation is supported.",
    keyTakeaways: [
      "UUID v4 uses cryptographically secure random numbers",
      "Collision probability is astronomically low (1 in 2^122)",
      "Standard 128-bit format: 8-4-4-4-12 hexadecimal characters",
      "UUID v1 includes timestamp and MAC address, v4 is fully random",
      "Supported by all major databases and programming languages",
    ],
    overview:
      "Generate UUIDs (Universally Unique Identifiers) and GUIDs with this free online tool. Supports all major UUID versions: v4 (cryptographically random — most common), v1 (timestamp + MAC address), v7 (sortable timestamp per RFC 9562 — recommended for new database keys), v3 (MD5 namespace), v5 (SHA-1 namespace), and v6 (reordered timestamp). UUIDs are 128-bit identifiers in the standard 8-4-4-4-12 hexadecimal format (e.g., 550e8400-e29b-41d4-a716-446655440000). Generate single or bulk UUIDs for database primary keys, API resource IDs, distributed system correlation IDs, and test fixture data. Supported by every major database (PostgreSQL, MySQL, MongoDB) and programming language.",

    howToSteps: [
      "Select the UUID version — v4 for random IDs, v7 for sortable database keys, v3/v5 for deterministic IDs.",
      "For namespace versions (v3/v5), enter the namespace UUID and name string.",
      "Click Generate to create one UUID, or use bulk generation for multiple values.",
      "Copy the UUID in standard format (8-4-4-4-12) for use in your database, API, or code.",
    ],

    features: [
      "UUID v1 (timestamp), v3 (MD5), v4 (random), v5 (SHA-1), v6, and v7 (sortable) generation",
      "Bulk generation for database seeding and test fixture creation",
      "Deterministic namespace-based UUIDs (v3/v5) with custom namespace and name",
      "Standard 128-bit output in 8-4-4-4-12 hexadecimal format",
      "Cryptographically secure randomness via Web Crypto API for v4",
    ],

    useCases: [
      "Database primary keys for PostgreSQL UUID columns and MongoDB _id fields",
      "API resource identifiers for REST and GraphQL endpoints",
      "Distributed system correlation IDs for request tracing across microservices",
      "Test fixture and seed data generation for development and QA environments",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          UUID v4 is the most widely used version — it generates 122 bits of cryptographic randomness, giving a collision probability of 1 in 2^122 (practically zero). UUID v7 is the newer RFC 9562 standard that embeds a Unix timestamp in the most significant bits, making UUIDs sortable by creation time — ideal for database primary keys where sequential inserts improve B-tree index performance.
        </p>
        <p>
          UUID v3 and v5 are deterministic — the same namespace + name always produces the same UUID. This is useful for generating stable identifiers from known inputs (e.g., user email → user UUID). GUID (Globally Unique Identifier) is the Microsoft term for the same 128-bit identifier format used in .NET, SQL Server, and Windows APIs.
        </p>
      </div>
    ),

    proTip:
      "Use UUID v7 for new database primary keys — the time-ordered prefix improves INSERT performance in B-tree indexes by 20–40% compared to random UUID v4. Use v4 for tokens and correlation IDs where sort order doesn't matter.",

    faqs: [
      {
        question: "What is the difference between UUID v4 and UUID v7?",
        answer:
          "UUID v4 is fully random (122 bits of randomness). UUID v7 (RFC 9562) embeds a Unix millisecond timestamp in the first 48 bits, making IDs sortable by creation time. Use v7 for database primary keys; use v4 for general-purpose random identifiers.",
      },
      {
        question: "Is GUID the same as UUID?",
        answer:
          "Yes. GUID (Globally Unique Identifier) is the Microsoft/.NET term for the same 128-bit identifier format. GUIDs and UUIDs are interchangeable and use the same 8-4-4-4-12 hexadecimal representation.",
      },
      {
        question: "Can UUIDs collide?",
        answer:
          "Theoretically yes, but the probability is astronomically low. For UUID v4, you would need to generate 2.71 × 10^18 UUIDs to have a 50% chance of a single collision — far more than any production system will ever create.",
      },
      {
        question: "Which UUID version is best for database primary keys?",
        answer:
          "UUID v7 is recommended for new projects. Its time-ordered prefix causes sequential inserts in B-tree indexes, reducing page splits and improving write performance in PostgreSQL and MySQL. UUID v4 causes random inserts that fragment indexes.",
      },
      {
        question: "What are UUID v3 and v5 used for?",
        answer:
          "v3 (MD5) and v5 (SHA-1) generate deterministic UUIDs from a namespace and name. The same inputs always produce the same UUID. Useful for generating stable IDs from known data like URLs or email addresses.",
      },
      {
        question: "Can I generate UUIDs in bulk?",
        answer:
          "Yes. Use the bulk generation feature to create multiple UUIDs at once for database seeding, test fixtures, CSV imports, and batch API operations.",
      },
    ],

    relatedTools: [
      { name: "ULID Generator", href: "/crypto-tools/ulid-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "RSA Key Pair Generator", href: "/crypto-tools/rsa-generator" },
      { name: "Hash Text", href: "/crypto-tools/hash-text" },
      { name: "BIP39 Mnemonic Generator", href: "/crypto-tools/bip39-generator" },
      { name: "Wheel Spinner (random picker)", href: "/fun-tools/wheel-spinner" },
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
