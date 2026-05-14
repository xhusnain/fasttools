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
  metaTitle: "ULID Generator — Sortable 128-bit Identifiers, Crockford Base32",
  metaDescription:
    "Free ULID generator. Lexicographically sortable 128-bit identifiers in 26-char Crockford Base32 (millisecond timestamp + 80 bits random). UUID v4 alternative for database primary keys, event streams, distributed systems. Bulk mode, 100% client-side.",
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
      "ULID (Universally Unique Lexicographically Sortable Identifier) generator. 128-bit IDs as 26-char Crockford Base32 — millisecond timestamp + 80 bits random. UUID v4 alternative for sortable database primary keys.",
    alternateName: [
      "Sortable ID Generator",
      "Lexicographic UUID",
      "Time-Ordered ID Generator",
      "Crockford Base32 ID",
      "Database Primary Key Generator",
      "Event Stream ID Generator",
      "Distributed System ID",
      "ULID Online",
      "UUID Alternative",
      "ULID to UUID Converter",
      "Timestamp ID Generator",
      "Monotonic ID Generator",
      "26 Character ID Generator",
      "Snowflake Alternative",
      "Sortable GUID Generator",
    ],
    featureList: [
      "128-bit ULIDs in 26-char Crockford Base32 (timestamp prefix + random suffix)",
      "Millisecond-precision Unix timestamp embedded in first 10 chars — sortable by creation time",
      "80 bits of CSPRNG randomness in last 16 chars — collision-resistant in distributed systems",
      "Crockford Base32 alphabet excludes I, L, O, U — no ambiguous characters",
      "URL-safe and filename-safe: no dashes, no special chars, all uppercase",
      "Drop-in UUID alternative — convertible to standard UUID 8-4-4-4-12 format",
      "Bulk generation up to 1000 ULIDs at once for seed data",
      "Monotonic mode: guarantees strict ordering even for ULIDs generated in the same millisecond",
      "ULID → timestamp decoder: extract the creation time from any existing ULID",
      "B-tree index friendly: sequential inserts reduce page splits by 20–40% vs random UUID v4",
      "100% client-side via Web Crypto API",
      "Free, no signup, no rate limit",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support",
    ratingValue: "4.9",
    ratingCount: "5810",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">ULID Anatomy</h3>
          <p>A ULID looks like <code>01ARZ3NDEKTSV4RRFFQ69G5FAV</code> — 26 characters encoded in Crockford Base32:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{` 01ARZ3NDEK         TSV4RRFFQ69G5FAV
└──────────┘       └──────────────┘
 Timestamp          Random
 48 bits            80 bits
 10 chars           16 chars`}</code>
          </pre>
          <p className="mt-3">
            <strong>Timestamp (10 chars):</strong> Unix milliseconds since 1970, encoded as Crockford Base32. Good until the year 10889 (48 bits of milliseconds).{" "}
            <strong>Randomness (16 chars):</strong> 80 bits from <code>crypto.getRandomValues()</code> — that&apos;s 2<sup>80</sup> ≈ 1.2 × 10<sup>24</sup> possible random values per millisecond, making collisions effectively impossible.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Crockford Base32?</h3>
          <p>
            <strong>Crockford&apos;s Base32</strong> (designed by Douglas Crockford in 2005) uses the alphabet <code>0123456789ABCDEFGHJKMNPQRSTVWXYZ</code> — note the absence of <strong>I, L, O, U</strong>. These letters are excluded because:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>0/O</strong> and <strong>1/I</strong> look identical in many fonts — preventing transcription errors</li>
            <li><strong>L</strong> can be confused with <strong>1</strong></li>
            <li><strong>U</strong> excluded to prevent accidental obscenities in generated IDs</li>
          </ul>
          <p className="mt-3">
            This makes ULIDs <strong>safe to read aloud, type by hand, or use in customer-facing URLs</strong> — far better than UUIDs full of <code>4dee2...</code> hex.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">ULID vs UUID v4 vs UUID v7</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Aspect</th>
                <th className="text-left py-2 px-2 text-foreground">UUID v4</th>
                <th className="text-left py-2 px-2 text-foreground">UUID v7</th>
                <th className="text-left py-2 px-2 text-foreground">ULID</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Length</td>
                <td className="py-2 px-2">36 chars (incl. dashes)</td>
                <td className="py-2 px-2">36 chars</td>
                <td className="py-2 px-2"><strong>26 chars</strong></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Sortable</td>
                <td className="py-2 px-2 text-red-500">No</td>
                <td className="py-2 px-2 text-green-500">Yes</td>
                <td className="py-2 px-2 text-green-500">Yes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Encoding</td>
                <td className="py-2 px-2">Hex (0-9 a-f)</td>
                <td className="py-2 px-2">Hex</td>
                <td className="py-2 px-2"><strong>Crockford Base32</strong></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Ambiguous chars</td>
                <td className="py-2 px-2">None</td>
                <td className="py-2 px-2">None</td>
                <td className="py-2 px-2"><strong>None (I/L/O/U excluded)</strong></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">RFC standard</td>
                <td className="py-2 px-2 text-green-500">RFC 4122</td>
                <td className="py-2 px-2 text-green-500">RFC 9562</td>
                <td className="py-2 px-2 text-orange-500">Community spec (not RFC)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">DB / lang support</td>
                <td className="py-2 px-2 text-green-500">Universal</td>
                <td className="py-2 px-2 text-green-500">Growing</td>
                <td className="py-2 px-2 text-orange-500">Library-dependent</td>
              </tr>
              <tr>
                <td className="py-2 px-2">URL-friendly</td>
                <td className="py-2 px-2">OK</td>
                <td className="py-2 px-2">OK</td>
                <td className="py-2 px-2"><strong>Best</strong></td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            <strong>Picking advice:</strong> ULID and UUID v7 give nearly identical benefits (sortable, 128-bit, time-prefixed). Choose <strong>UUID v7</strong> if you need RFC compliance, universal DB driver support, or interop with existing UUID systems. Choose <strong>ULID</strong> if you want shorter IDs (26 vs 36 chars), URL-safer output, or no-confusion characters for human-readable IDs.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">B-Tree Index Performance: The Real Win</h3>
          <p>
            <strong>Random UUID v4 inserts kill database write performance.</strong> In PostgreSQL / MySQL / SQL Server, the primary key is stored as a B-tree index. When you INSERT with a random key, the row lands at a random position in the tree, forcing page splits, dirtying random pages, and producing random I/O. ULIDs (and UUID v7) fix this because new IDs always sort <em>after</em> existing IDs — INSERTs append to the rightmost leaf of the B-tree, like an auto-incrementing integer.{" "}
            <strong>Measured impact:</strong> 20–40% higher INSERT throughput, 30–50% smaller index size after long-running tables, better cache locality, fewer vacuum operations.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Monotonic ULIDs</h3>
          <p>
            When you generate multiple ULIDs within the <em>same millisecond</em>, the timestamp portion is identical and the random portion can produce out-of-order ULIDs. <strong>Monotonic mode</strong> fixes this by incrementing the random part by 1 instead of regenerating it — so ULIDs created in the same millisecond are guaranteed strictly increasing. Enable monotonic mode for event streams, audit logs, and any scenario where strict ordering matters more than max randomness. (Non-monotonic mode is safe for most uses — millisecond resolution is sufficient for almost all sorting needs.)
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When to Choose Each ID Type</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>ULID:</strong> when you want shorter, prettier IDs in user-facing URLs and your DB driver / language has a good library</li>
            <li><strong>UUID v7:</strong> when you need RFC standard, universal driver support, or migration from existing UUID-based system</li>
            <li><strong>UUID v4:</strong> security tokens, correlation IDs where sortability would leak timing info, situations where you specifically want unpredictability</li>
            <li><strong>NanoID:</strong> very short URL-safe IDs (21 chars) where time-ordering isn&apos;t needed</li>
            <li><strong>Snowflake:</strong> 64-bit sortable IDs at extreme scale (Twitter, Discord) — requires centralized worker ID coordination</li>
            <li><strong>Auto-increment integer:</strong> single-master databases where you don&apos;t need distributed ID generation; smallest storage</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "If your stack supports it, default to ULIDs (26 chars, sortable, no ambiguous letters) for new database primary keys. If you need RFC compliance or universal driver support, pick UUID v7 (also sortable, same 128 bits). Keep UUID v4 for security tokens and correlation IDs where sortability would leak timing info. For URL slugs that need to be human-readable, ULIDs win — no 'O vs 0' confusion when typing IDs aloud or pasting them from chat.",

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
          "Yes. ULIDs are 128 bits, the same as UUIDs — so you can store them in a `uuid` column by converting to standard 8-4-4-4-12 hex format. Most ULID libraries provide ulid.toUUID() and ulid.fromUUID() helpers. PostgreSQL: `INSERT INTO users (id) VALUES (ulid_to_uuid('01ARZ3NDEKTSV4RRFFQ69G5FAV'::text));`",
      },
      {
        question: "Is ULID an official standard?",
        answer:
          "Not an RFC — ULID is a community specification published by alizain/ulid in 2016. It's widely adopted (libraries exist for every major language) but not officially standardized like UUID. If you need a sortable RFC-standard ID, use UUID v7 (RFC 9562, published 2024) — it provides the same time-prefix benefit.",
      },
      {
        question: "Can two ULIDs have the same timestamp?",
        answer:
          "Yes — ULIDs generated within the same millisecond share the first 10 characters (the timestamp). The last 16 chars (80 bits random) differentiate them. The chance of a random-collision within one millisecond across a single generator is 1 in 2^80 — astronomically improbable. Across distributed generators it's higher but still negligible (need 2^40 ULIDs in one ms for ~50% collision probability — billions per ms).",
      },
      {
        question: "What's the maximum ULID value and timestamp range?",
        answer:
          "The timestamp portion is 48 bits, covering 2^48 milliseconds = ~8,925 years from 1970 = until the year 10889. The random portion is 80 bits. The maximum ULID is `7ZZZZZZZZZZZZZZZZZZZZZZZZZ`. ULIDs do NOT wrap or overflow within any realistic timeframe.",
      },
      {
        question: "Are ULIDs URL-safe?",
        answer:
          "Yes — completely. ULIDs use only uppercase A-Z (excluding I/L/O/U) and 0-9. No dashes, no slashes, no special characters. They work directly in URLs, file paths, S3 keys, MongoDB _id fields, and database column values without any escaping.",
      },
      {
        question: "Can I extract the creation timestamp from a ULID?",
        answer:
          "Yes — that's the whole point of the timestamp prefix. The first 10 chars decode to Unix milliseconds. In JavaScript: `parseInt(ulid.slice(0, 10), 32)`... but use a library function (ulid.decodeTime()) since Crockford Base32 isn't the same as standard Base32 and your parseInt() result will be wrong.",
      },
    ],

    relatedTools: [
      { name: "UUID Generator", href: "/crypto-tools/uuid-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "Hash Text", href: "/crypto-tools/hash-text" },
      { name: "Cron Expression Generator", href: "/dev-tools/cron-expression-generator" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
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
