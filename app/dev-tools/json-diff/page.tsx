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
  metaTitle: "JSON Diff Tool (Compare Two JSON Objects)",
  metaDescription:
    "Compare JSON inputs and detect differences quickly. Useful for API response validation, config review, and regression checks.",
  path: "/dev-tools/json-diff",
  keywords: [
    "json diff",
    "compare json",
    "json compare tool",
    "json differences",
    "api response diff",
  ],

  header: {
    title: "JSON Diff",
    description:
      "Compare JSON structures and values with fast difference detection.",
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
    overview:
      "Use this tool to compare two JSON documents and quickly identify what changed. It is useful for API response checks, schema transitions, and release validation workflows.",

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
