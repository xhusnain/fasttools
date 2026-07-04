// Exact-slug children of the File Size Converter (audit 04a: the ONLY proven
// converter demand is numeric byte queries — "1073741824 bytes to mb" etc.).
// Each child owns one conversion pair with the computed answer in sentence 1
// and lookup tables covering both decimal (SI, ÷1000) and binary (IEC, ÷1024)
// interpretations — the ambiguity behind most of these searches.

import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const FileSizeConverter = dynamic(
  () => import("@/components/converters/file-size-converter").then((mod) => mod.FileSizeConverter),
  { loading: () => <ToolLoader /> }
)

interface ByteVariant {
  slug: string
  fromLabel: string // e.g. "Bytes"
  toLabel: string // e.g. "MB"
  componentFromUnit: string // FileSizeConverter unit key
  decimalDivisor: number
  binaryDivisor: number
  binaryToLabel: string // e.g. "MiB"
  metaTitle: string
  metaDescription: string
  headerDescription: string
  quickAnswer: string
  overview: string
  keywords: string[]
  tableValues: number[] // "from" values to precompute
  faqs: Array<{ question: string; answer: string }>
}

const fmt = (n: number) =>
  n.toLocaleString("en-US", { maximumFractionDigits: n < 1 ? 6 : 2 })

export const byteVariants: Record<string, ByteVariant> = {
  "bytes-to-mb": {
    slug: "bytes-to-mb",
    fromLabel: "Bytes",
    toLabel: "MB",
    componentFromUnit: "Byte (B)",
    decimalDivisor: 1_000_000,
    binaryDivisor: 1_048_576,
    binaryToLabel: "MiB",
    metaTitle: "Bytes to MB Converter — Divide by 1,000,000 (Instant Answer)",
    metaDescription:
      "Convert bytes to MB: divide by 1,000,000. So 1073741824 bytes = 1073.74 MB (or exactly 1024 MiB binary). Instant converter + lookup table for every common value.",
    headerDescription:
      "MB = bytes ÷ 1,000,000. For the binary MiB your OS may show, divide by 1,048,576. Convert any value instantly below.",
    quickAnswer:
      "To convert bytes to MB, divide by 1,000,000 — so 1073741824 bytes is 1073.74 MB. If you mean the binary megabyte (MiB) that Windows and many tools actually display, divide by 1,048,576 instead: 1073741824 bytes = exactly 1024 MiB. The two definitions are why the same file shows different 'MB' sizes in different places.",
    overview:
      "Byte-to-megabyte questions are almost always pasted straight from an error message, a file property dialog, or an API response — a raw byte count that needs to be human-readable. The answer depends on which megabyte you mean: the SI/decimal MB (1,000,000 bytes, used by drive manufacturers, macOS, and networking) or the binary MiB (1,048,576 bytes, used by Windows and most programming contexts, historically also called 'MB'). This page gives both: the converter handles any value, and the table below precomputes the byte counts people actually search — including the powers of two like 1073741824 (= 1 GiB) that produce suspiciously round binary answers.",
    keywords: [
      "bytes to mb",
      "convert bytes to mb",
      "1073741824 bytes to mb",
      "bytes to megabytes",
      "how many bytes in a mb",
    ],
    tableValues: [
      1_000_000, 5_242_880, 10_000_000, 52_428_800, 100_000_000, 104_857_600,
      500_000_000, 1_000_000_000, 1_073_741_824, 2_147_483_648, 4_294_967_296,
    ],
    faqs: [
      {
        question: "How many bytes are in 1 MB?",
        answer:
          "1,000,000 bytes in a decimal megabyte (MB, the SI definition used by drive makers and macOS), or 1,048,576 bytes in a binary megabyte (MiB, what Windows displays and calls MB). This double definition is why a '1 GB' USB stick shows as ~953 MB in Windows.",
      },
      {
        question: "What is 1073741824 bytes in MB?",
        answer:
          "1073.74 MB decimal — but the number is really a binary landmark: 1073741824 = 1024³, which is exactly 1024 MiB, i.e. exactly 1 GiB. When a byte count converts to a perfectly round number at ÷1,048,576, it was defined in binary units.",
      },
      {
        question: "Why does Windows show a different MB than this converter?",
        answer:
          "Windows divides by 1,048,576 (binary) but labels the result 'MB'. macOS and drive manufacturers divide by 1,000,000. Both columns are in the table above — pick the one that matches the tool you're comparing against.",
      },
    ],
  },

  "bytes-to-kb": {
    slug: "bytes-to-kb",
    fromLabel: "Bytes",
    toLabel: "KB",
    componentFromUnit: "Byte (B)",
    decimalDivisor: 1_000,
    binaryDivisor: 1_024,
    binaryToLabel: "KiB",
    metaTitle: "Bytes to KB Converter — Divide by 1,000 (Instant Answer)",
    metaDescription:
      "Convert bytes to KB: divide by 1,000. So 1048576 bytes = 1048.58 KB (or exactly 1024 KiB binary). Instant converter + lookup table for common byte values.",
    headerDescription:
      "KB = bytes ÷ 1,000. For the binary KiB (÷1,024) that many tools display as KB, both columns are below.",
    quickAnswer:
      "To convert bytes to KB, divide by 1,000 — so 512000 bytes is 512 KB. For the binary kilobyte (KiB) many tools still label 'KB', divide by 1,024 instead: 1048576 bytes = 1048.58 KB decimal but exactly 1024 KiB binary.",
    overview:
      "Bytes-to-kilobytes is the small-file version of the same question: an upload limit, an email attachment cap, or a Content-Length header in bytes that needs sense-making. As with megabytes, there are two kilobytes: the decimal KB (1,000 bytes, SI) and the binary KiB (1,024 bytes) that older tools and most operating systems historically called KB. The converter and table below give both readings for any value.",
    keywords: [
      "bytes to kb",
      "convert bytes to kb",
      "bytes to kilobytes",
      "how many bytes in a kb",
      "1024 bytes to kb",
    ],
    tableValues: [
      1_000, 1_024, 10_000, 51_200, 100_000, 102_400, 250_000, 500_000,
      512_000, 1_000_000, 1_048_576,
    ],
    faqs: [
      {
        question: "How many bytes are in 1 KB?",
        answer:
          "1,000 bytes in a decimal kilobyte (KB, SI standard), or 1,024 bytes in a binary kilobyte (KiB). File systems and older software often say 'KB' while computing with 1,024 — if a 2,048-byte file shows as exactly '2 KB', the tool is using binary.",
      },
      {
        question: "Is 1024 bytes 1 KB or 1.02 KB?",
        answer:
          "Both, depending on the definition: 1024 bytes is exactly 1 KiB (binary) and 1.024 KB (decimal). The IEC introduced the KiB/MiB/GiB names in 1998 precisely to end this ambiguity — but everyday labeling still mixes them.",
      },
      {
        question: "Why is my email attachment limit measured differently?",
        answer:
          "Mail providers commonly state limits in decimal MB but enforce them on the encoded message size — and Base64 encoding inflates attachments by about 33%+ on top of the KB/KiB question. A '25 MB' limit realistically fits about 18 MB of raw files.",
      },
    ],
  },

  "kb-to-mb": {
    slug: "kb-to-mb",
    fromLabel: "KB",
    toLabel: "MB",
    componentFromUnit: "Kilobyte (KB)",
    decimalDivisor: 1_000,
    binaryDivisor: 1_024,
    binaryToLabel: "MiB (from KiB)",
    metaTitle: "KB to MB Converter — Divide by 1,000 (Instant Answer)",
    metaDescription:
      "Convert KB to MB: divide by 1,000. So 2048 KB = 2.05 MB (or exactly 2 MiB if those were binary KiB). Instant converter + lookup table for common values.",
    headerDescription:
      "MB = KB ÷ 1,000 (or ÷1,024 for the binary KiB → MiB ladder). Convert any value instantly below.",
    quickAnswer:
      "To convert KB to MB, divide by 1,000 — so 2048 KB is 2.05 MB. If the source figure is binary kilobytes (KiB, what many tools label KB), divide by 1,024: 2048 KiB = exactly 2 MiB. Round binary answers like that are the tell that the original number was binary.",
    overview:
      "KB-to-MB conversions usually come from adding up file sizes or reading limits set in kilobytes against quotas set in megabytes. The math is a single division — the only trap is the decimal/binary split: 1,000 KB per MB in SI units, 1,024 KiB per MiB on the binary ladder that memory sizes and many OS dialogs use. The converter handles any figure; the table precomputes the values that come up most, in both systems.",
    keywords: [
      "kb to mb",
      "convert kb to mb",
      "kilobytes to megabytes",
      "how many kb in a mb",
      "2048 kb to mb",
    ],
    tableValues: [
      100, 500, 1_000, 1_024, 2_048, 5_000, 10_000, 10_240, 51_200, 102_400, 500_000,
    ],
    faqs: [
      {
        question: "How many KB are in 1 MB?",
        answer:
          "1,000 KB per MB in decimal (SI) units, or 1,024 KiB per MiB in binary units. Storage marketing uses decimal; RAM, Windows file properties, and most programming contexts use binary.",
      },
      {
        question: "Is 2048 KB equal to 2 MB?",
        answer:
          "Exactly 2 MiB if those are binary kilobytes (2048 ÷ 1024), or 2.05 MB decimal (2048 ÷ 1000). Upload limits set at 2048 KB almost always mean the binary reading — the round number gives it away.",
      },
      {
        question: "Which should I use for an upload-limit check?",
        answer:
          "Match the system enforcing the limit. PHP's upload_max_filesize and most server configs interpret K/M as binary (1024-based); cloud-storage quotas and drive sizes are decimal. When in doubt, stay ~5% under the limit and the distinction stops mattering.",
      },
    ],
  },
}

export function getByteVariantMetadata(slug: string): Metadata {
  const v = byteVariants[slug]
  if (!v) return {}
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    keywords: v.keywords,
    alternates: { canonical: `/converters/${slug}` },
  }
}

export function renderByteVariantPage(slug: string) {
  const v = byteVariants[slug]

  const rows = v.tableValues.map((from) => ({
    from,
    decimal: from / v.decimalDivisor,
    binary: from / v.binaryDivisor,
  }))

  const siblingLinks = Object.values(byteVariants)
    .filter((item) => item.slug !== slug)
    .map((item) => ({
      name: `${item.fromLabel} to ${item.toLabel} Converter`,
      href: `/converters/${item.slug}`,
    }))

  const toolConfig = createToolConfig({
    toolName: `${v.fromLabel} to ${v.toLabel} Converter`,
    description: v.metaDescription,
    metaTitle: v.metaTitle,
    metaDescription: v.metaDescription,
    path: `/converters/${slug}`,

    schemaOptions: {
      applicationCategory: "UtilitiesApplication",
      description: v.quickAnswer,
      alternateName: v.keywords,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },

    header: {
      title: `${v.fromLabel} to ${v.toLabel} Converter`,
      description: v.headerDescription,
      titleSize: "medium",
      descriptionSize: "small",
    },

    breadcrumbs: [
      { label: "Converters", href: "/converters" },
      { label: "File Size Converter", href: "/converters/file-size" },
      { label: `${v.fromLabel} to ${v.toLabel}`, href: `/converters/${slug}` },
    ],

    content: {
      definition: `Converting ${v.fromLabel.toLowerCase()} to ${v.toLabel} means dividing by ${v.decimalDivisor.toLocaleString("en-US")} (decimal/SI) — or by ${v.binaryDivisor.toLocaleString("en-US")} for the binary ${v.binaryToLabel} that many operating systems display.`,
      quickAnswer: v.quickAnswer,
      keyTakeaways: [
        `${v.toLabel} = ${v.fromLabel.toLowerCase()} ÷ ${v.decimalDivisor.toLocaleString("en-US")} (decimal / SI standard)`,
        `${v.binaryToLabel} = ${v.fromLabel.toLowerCase()} ÷ ${v.binaryDivisor.toLocaleString("en-US")} (binary / IEC standard)`,
        "Windows displays binary but labels it with the decimal name — the source of most confusion",
        "A perfectly round result on the binary divisor means the original number was binary",
        "The converter above handles every unit from bits to quettabytes",
      ],
      overview: v.overview,

      aboutTool: (
        <div className="space-y-10">
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              {v.fromLabel} to {v.toLabel} — Common Values
            </h2>
            <div className="overflow-x-auto">
              <GTable>
                <thead className="bg-muted text-foreground font-semibold">
                  <tr>
                    <th className="p-3 text-left">{v.fromLabel}</th>
                    <th className="p-3 text-left">{v.toLabel} (decimal ÷{v.decimalDivisor.toLocaleString("en-US")})</th>
                    <th className="p-3 text-left">{v.binaryToLabel} (binary ÷{v.binaryDivisor.toLocaleString("en-US")})</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm font-mono">
                  {rows.map((row) => (
                    <tr key={row.from}>
                      <td className="p-3">{row.from.toLocaleString("en-US")}</td>
                      <td className="p-3">{fmt(row.decimal)}</td>
                      <td className="p-3">{fmt(row.binary)}</td>
                    </tr>
                  ))}
                </tbody>
              </GTable>
            </div>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Decimal vs Binary: Why Two Answers Exist</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Storage vendors, macOS, and networking use SI decimal units (1 {v.toLabel.replace(/\s.*/, "")} ={" "}
              {v.decimalDivisor.toLocaleString("en-US")} {v.fromLabel.toLowerCase()}), while Windows, RAM sizes, and most
              programming contexts use the binary ladder (÷{v.binaryDivisor.toLocaleString("en-US")}) — historically with the
              same names, officially renamed KiB/MiB/GiB by the IEC in 1998. Neither is wrong; they measure with different
              rulers. When a converted value needs to match what another tool displays, use the column that matches that
              tool&apos;s convention — and when a result comes out perfectly round in the binary column, the original figure
              was defined in binary.
            </p>
          </article>
        </div>
      ),

      proTip:
        "Pasting a byte count from an error message or API? Check the binary column first — programmatic limits are usually powers of two, and a round binary answer tells you exactly what limit you're hitting.",

      faqs: [
        ...v.faqs,
        {
          question: "Does this converter handle other units too?",
          answer:
            "Yes — the tool above converts between bits, bytes, KB, MB, GB, TB and beyond, in both decimal and binary systems, and includes transfer-time and storage-cost estimates.",
        },
      ],

      relatedTools: [
        { name: "File Size Converter (all units)", href: "/converters/file-size" },
        ...siblingLinks,
        { name: "Token to Word Converter", href: "/ai-tools/token-to-word-converter" },
        { name: "All Converters", href: "/converters" },
      ],
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<FileSizeConverter defaultFromUnit={v.componentFromUnit} />)} />
}
