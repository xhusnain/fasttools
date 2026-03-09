import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const JsonDiff = dynamic(
  () => import("@/components/dev-tools/json-diff").then((mod) => mod.JsonDiff),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "JSON Diff",
  description:
    "Compare two JSON objects and inspect structural or value differences for debugging and review workflows.",
  metaTitle: "JSON Diff — Compare Two JSON Objects Online Free (2026)",
  metaDescription:
    "Free online JSON diff tool. Compare two JSON objects side by side with color-coded highlighting for additions, deletions, and changes. Debug API responses and config differences.",
  path: "/dev-tools/json-diff",

  header: {
    title: "JSON Diff — Compare JSON Objects",
    description:
      "Compare two JSON objects side by side with color-coded difference highlighting. Additions in green, deletions in red, modifications in yellow. Handles nested objects and arrays at any depth.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "JSON Diff", href: "/dev-tools/json-diff" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Compare two JSON objects and detect semantic differences for debugging and validation workflows.",
    featureList: [
      "JSON comparison",
      "Semantic diffing",
      "Copy-ready difference output",
      "API validation utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A JSON Diff Tool is a free tool that compares two JSON objects side by side and highlights additions, deletions, and modifications between them.",
    quickAnswer:
      "Paste two JSON objects into the left and right panels. The tool instantly highlights differences — additions in green, deletions in red, and modifications in yellow. Copy the diff report or use it for debugging.",
    keyTakeaways: [
      "Side-by-side visual comparison of two JSON structures",
      "Color-coded highlights for additions, deletions, and changes",
      "Handles nested objects and arrays at any depth",
      "Useful for debugging API responses and config file changes",
      "All processing happens locally in your browser",
    ],
    overview:
      "Compare two JSON objects side by side with this free online diff tool. Paste the original JSON in the left panel and the updated JSON in the right panel to instantly see all differences highlighted — additions in green, deletions in red, and modifications in yellow. The tool handles nested objects and arrays at any depth, making it easy to spot changes in complex API responses, configuration files, and database records. Useful for debugging API response regressions, reviewing config changes between environments, and validating data transformations.",

    howToSteps: [
      "Paste the original JSON into the left panel.",
      "Paste the updated JSON into the right panel.",
      "Run comparison and inspect highlighted differences.",
      "Use results to update code, tests, or documentation.",
    ],

    features: [
      "Side-by-side JSON comparison",
      "Difference highlighting",
      "Useful for regression detection",
      "Copy-friendly output",
      "Browser-based validation workflow",
    ],

    useCases: [
      "API response regression checks",
      "Config changes between environments",
      "Fixture and snapshot updates",
      "Release review for payload modifications",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          JSON diff pages rank best when they keep comparison workflow immediate
          and easy to interpret. This page is optimized for that practical use.
        </p>
        <p>
          It helps reduce debugging time by showing exactly which keys or values
          changed between versions of structured data.
        </p>
      </div>
    ),

    proTip:
      "Normalize key ordering and formatting before compare runs to avoid noise and surface true semantic changes.",

    faqs: [
      {
        question: "Can this compare nested JSON objects?",
        answer:
          "Yes. Nested structures are compared to identify deeper key/value differences.",
      },
      {
        question: "Is this useful for API response validation?",
        answer:
          "Yes. It is commonly used to compare expected and actual payloads.",
      },
      {
        question: "Why do equivalent objects sometimes look different?",
        answer:
          "Differences can come from ordering, type mismatches, or subtle value changes such as null vs empty string.",
      },
      {
        question: "Can I use this in release QA?",
        answer:
          "Yes. JSON diffing is useful for detecting contract drift before deployment.",
      },
      {
        question: "Does this replace schema validation?",
        answer:
          "No. It complements schema validation by showing concrete data-level differences.",
      },
    ],

    relatedTools: [
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "SQL to JSON Converter", href: "/dev-tools/sql-to-json" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function JsonDiffPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <JsonDiff />
        </div>
      )}
    />
  )
}
