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
  metaTitle: "UUID Generator — v1, v4, v7 & GUID (RFC 9562) Online Free",
  metaDescription:
    "Free UUID / GUID generator: v4 random, v7 sortable (RFC 9562), v1 timestamp + MAC, v3/v5 namespace, v6 reordered. Bulk mode up to 1000. 100% client-side via Web Crypto API for v4/v7.",
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
      "Generate UUIDs / GUIDs in all RFC versions (v1, v3, v4, v5, v6, v7) with bulk mode, namespace input, uppercase / lowercase, with or without dashes / braces. Standard 8-4-4-4-12 hex format.",
    alternateName: [
      "GUID Generator",
      "UUID v4 Generator",
      "UUID v7 Generator",
      "UUID v1 Generator",
      "Random UUID Generator",
      "Sortable UUID Generator",
      "RFC 9562 UUID Generator",
      "Namespace UUID Generator",
      "Bulk UUID Generator",
      "UUID Tool",
      "Microsoft GUID Generator",
      ".NET GUID Generator",
      "MySQL UUID Generator",
      "PostgreSQL UUID Generator",
      "Identifier Generator",
    ],
    featureList: [
      "All RFC 4122 / RFC 9562 versions: v1, v3, v4, v5, v6, v7",
      "UUID v4 (default): cryptographically random, 122 bits of entropy",
      "UUID v7 (RFC 9562, sortable): millisecond timestamp + random — ideal for database primary keys",
      "UUID v1: timestamp + MAC address (still works in browsers — uses random node ID)",
      "UUID v3 / v5: deterministic namespace-based (same inputs always produce same UUID)",
      "Standard namespace presets: DNS, URL, OID, X.500",
      "Output format options: lowercase / uppercase, with / without dashes, with / without braces (.NET GUID style)",
      "Bulk generation: up to 1000 UUIDs at once for database seeding or test fixtures",
      "Copy individually, copy all as newline-separated, download as .txt or .csv",
      "Web Crypto API for cryptographically secure randomness (v4, v7 random portion)",
      "100% client-side — UUIDs generated in your browser, never logged",
      "Free, no signup, no API rate limits",
    ],
    softwareRequirements: "Modern web browser with Web Crypto API support",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">UUID Versions at a Glance</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Version</th>
                <th className="text-left py-2 px-2 text-foreground">Source</th>
                <th className="text-left py-2 px-2 text-foreground">Sortable?</th>
                <th className="text-left py-2 px-2 text-foreground">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">v1</td>
                <td className="py-2 px-2">Timestamp + MAC address</td>
                <td className="py-2 px-2">Partially</td>
                <td className="py-2 px-2">Legacy systems (reveals MAC + time — privacy concern)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">v3</td>
                <td className="py-2 px-2">MD5(namespace + name)</td>
                <td className="py-2 px-2">No</td>
                <td className="py-2 px-2">Deterministic IDs from URLs / DNS (legacy — prefer v5)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>v4</strong></td>
                <td className="py-2 px-2">122 bits CSPRNG</td>
                <td className="py-2 px-2">No</td>
                <td className="py-2 px-2"><strong>General purpose (most common today)</strong></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">v5</td>
                <td className="py-2 px-2">SHA-1(namespace + name)</td>
                <td className="py-2 px-2">No</td>
                <td className="py-2 px-2">Deterministic IDs from known inputs (email → user UUID)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">v6</td>
                <td className="py-2 px-2">Reordered v1 timestamp</td>
                <td className="py-2 px-2">Yes</td>
                <td className="py-2 px-2">Time-sortable replacement for v1 (rarely used)</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><strong>v7</strong></td>
                <td className="py-2 px-2">Unix-ms timestamp + 74 random bits</td>
                <td className="py-2 px-2">Yes</td>
                <td className="py-2 px-2"><strong>Database primary keys (RFC 9562, current best practice)</strong></td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            <strong>UUID v8</strong> is also defined in RFC 9562 (May 2024) as a customizable variant for application-specific schemes (e.g., embedding a tenant ID + timestamp + random). v8 is rarely needed unless you have a specific use case the others don&apos;t serve.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">v4 vs v7: Why v7 Wins for Database Primary Keys</h3>
          <p>
            <strong>The B-tree page-split problem:</strong> when you use random UUID v4 as a primary key, every INSERT places the row at a random position in the B-tree index. This causes <strong>page splits</strong> — the database has to rearrange index nodes to make room, dirty more cache pages, and write more random I/O. Result: 20–40% lower INSERT throughput, larger index size, worse cache locality.{" "}
            <strong>UUID v7 fixes this:</strong> the first 48 bits are a Unix millisecond timestamp, so new UUIDs always sort <em>after</em> previous ones. INSERTs become sequential, B-tree splits drop to zero, index size shrinks, and performance approaches that of auto-incrementing integer keys — while keeping all the UUID benefits (globally unique, no central coordination, leak-resistant).
          </p>
          <p className="mt-3">
            <strong>When to still use v4:</strong> distributed system correlation IDs, security tokens (you want max randomness, not sortability), short-lived session IDs.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">UUID Format Variants</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Standard:</strong> <code>550e8400-e29b-41d4-a716-446655440000</code> (36 chars including 4 dashes)</li>
            <li><strong>No dashes:</strong> <code>550e8400e29b41d4a716446655440000</code> (32 hex chars — compact for URLs)</li>
            <li><strong>Braces (.NET GUID):</strong> <code>{`{550e8400-e29b-41d4-a716-446655440000}`}</code> (used in Microsoft / Windows APIs)</li>
            <li><strong>Uppercase:</strong> <code>550E8400-E29B-41D4-A716-446655440000</code> (rare; lowercase is the RFC 4122 default)</li>
            <li><strong>URN form:</strong> <code>urn:uuid:550e8400-e29b-41d4-a716-446655440000</code> (RFC 4122 URN namespace)</li>
            <li><strong>Base64 (short URL):</strong> <code>VQ6EAOKbQdSnFkRmVUQAAA</code> (22 chars, 128 bits encoded as Base64URL)</li>
          </ul>
          <p className="mt-3">
            All formats are equivalent — they encode the same 128 bits. Choose based on the system you&apos;re feeding the UUID into.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">v3 / v5 Namespace UUIDs Explained</h3>
          <p>
            v3 and v5 are <strong>deterministic</strong> — given the same namespace UUID and name string, they always produce the same UUID. The namespace is itself a UUID that groups related names. RFC 4122 defines four standard namespaces:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>DNS:</strong> <code>6ba7b810-9dad-11d1-80b4-00c04fd430c8</code> — for hostnames</li>
            <li><strong>URL:</strong> <code>6ba7b811-9dad-11d1-80b4-00c04fd430c8</code> — for URLs</li>
            <li><strong>OID:</strong> <code>6ba7b812-9dad-11d1-80b4-00c04fd430c8</code> — for ISO OIDs</li>
            <li><strong>X.500:</strong> <code>6ba7b814-9dad-11d1-80b4-00c04fd430c8</code> — for X.500 names</li>
          </ul>
          <p className="mt-3">
            <strong>Use case:</strong> generate a stable user UUID from an email address by hashing &quot;URL namespace + email&quot;. Even if your database is recreated, the same email produces the same UUID. <strong>Prefer v5 (SHA-1) over v3 (MD5)</strong> — SHA-1&apos;s collision weakness doesn&apos;t matter for UUID derivation, but you avoid using a fully-broken hash.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Same Thing, Different Name: UUID vs GUID</h3>
          <p>
            <strong>GUID (Globally Unique Identifier)</strong> is Microsoft&apos;s term for the same 128-bit identifier format used in UUIDs. Windows APIs, .NET (<code>Guid.NewGuid()</code>), SQL Server (<code>uniqueidentifier</code>), and COM all use the GUID terminology. <strong>They are byte-for-byte the same.</strong> The only difference: Microsoft historically used the &quot;Variant 2&quot; bit ordering in some older APIs (rare in modern systems), and GUIDs are often displayed wrapped in curly braces. This tool outputs RFC 4122 / RFC 9562 compliant UUIDs that work identically as GUIDs in any Microsoft system.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">UUID vs ULID vs NanoID vs Snowflake</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>UUID v4:</strong> 128 bits, 36-char hex, universal support, not sortable</li>
            <li><strong>UUID v7:</strong> 128 bits, 36-char hex, universal support, sortable, RFC standard</li>
            <li><strong>ULID:</strong> 128 bits, 26-char Crockford Base32, sortable, more readable. See our <a href="/crypto-tools/ulid-generator" className="text-primary underline">ULID Generator</a></li>
            <li><strong>NanoID:</strong> 21-char URL-safe, customizable length, smaller payload, no embedded time</li>
            <li><strong>Snowflake (Twitter / Discord):</strong> 64 bits, sortable timestamp + worker ID + sequence — requires centralized coordination</li>
          </ul>
          <p className="mt-3">
            <strong>Picking advice:</strong> use UUID v7 for new database primary keys (standard, sortable, universal support). Use UUID v4 for security tokens. Use ULID if you need shorter, more readable identifiers and your stack supports it.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Default to UUID v7 for new database primary keys — sortable by creation time, RFC-standard, 20–40% better INSERT performance vs random v4. Use v4 for security-sensitive tokens (correlation IDs, request IDs) where sortability would leak timing info. Use v5 (SHA-1) — not v3 (MD5) — for namespace-derived deterministic UUIDs. For URL-friendly shorter IDs, consider Base64URL-encoded UUIDs (22 chars) or ULIDs (26 chars).",

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
          "Yes. Bulk mode supports up to 1000 UUIDs at once. Useful for database seeding, test fixtures, CSV imports, batch API operations, or migrating to UUID-based primary keys. Copy as newline-separated or download as .txt / .csv.",
      },
      {
        question: "Are UUIDs cryptographically secure?",
        answer:
          "UUID v4 uses cryptographically secure randomness from the browser's CSPRNG (window.crypto.getRandomValues()) so they're unguessable. UUID v1 reveals creation timestamp and node ID, so it's NOT suitable as a security token. For security tokens, prefer UUID v4 or longer random tokens (32+ hex chars from our Token Generator).",
      },
      {
        question: "Can I use UUID as a primary key in PostgreSQL?",
        answer:
          "Yes — PostgreSQL has a native `uuid` column type. For new tables, prefer UUID v7 over v4 to avoid B-tree index fragmentation. Schema: `CREATE TABLE users (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), ...)`. For v7, use a v7 implementation library or generate client-side and INSERT. The 16-byte storage is half of varchar(36) storage.",
      },
      {
        question: "What is UUID v8?",
        answer:
          "UUID v8 (RFC 9562, published 2024) is the 'custom variant' — application-specific schemes that embed your own structured data. v8 is rarely needed; only use it if you need to encode something specific (e.g., tenant ID + entity type + timestamp) into the UUID itself. For 99% of use cases, v4 (random) or v7 (sortable) is what you want.",
      },
      {
        question: "Should I trim dashes from UUIDs for URLs?",
        answer:
          "Optional — both formats encode the same 128 bits. Dashes make UUIDs human-readable but add 4 wasted bytes per URL. For high-volume APIs (millions of URLs), dashless saves bandwidth. For human-shared URLs (admin panels, support links), keep dashes for readability. Even shorter: Base64URL-encode the UUID to 22 chars.",
      },
      {
        question: "Do UUIDs work in MySQL and MongoDB?",
        answer:
          "Yes. MongoDB's native ObjectId is similar in concept (12-byte timestamp-prefixed ID) but you can also store UUIDs as `BinData(4, ...)` or strings. MySQL has no native UUID type — use `BINARY(16)` for compact storage or `CHAR(36)` for human-readable. For sortable inserts, store v7 UUIDs as `BINARY(16)` since MySQL preserves byte order for B-tree indexing.",
      },
    ],

    relatedTools: [
      { name: "ULID Generator", href: "/crypto-tools/ulid-generator" },
      { name: "Token Generator", href: "/crypto-tools/token-generator" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "RSA Key Generator", href: "/crypto-tools/rsa-generator" },
      { name: "Hash Text Generator", href: "/crypto-tools/hash-text" },
      { name: "BIP39 Passphrase Generator", href: "/crypto-tools/bip39-generator" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
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
