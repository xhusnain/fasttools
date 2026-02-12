import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { JsonDiff } from "@/components/dev-tools/json-diff"

const toolConfig = createToolConfig({
  toolName: "JSON Diff",
  description:
    "JSON diff online. Compare two JSON objects and find differences. json diff javascript, json diff python, json diff - npm. json-diff-ts, json diff java, json diff nodejs. Free semantic JSON compare.",
  metaTitle: "JSON Diff - Compare Two JSON Objects Online | Find Differences",
  metaDescription:
    "Free JSON diff online. Compare two JSON objects and get semantic differences. json diff javascript, json diff python, json diff - npm, json-diff-ts. json diff java, json diff nodejs. No signup.",
  path: "/dev-tools/json-diff",

  header: {
    title: "JSON diff",
    description:
      "Compare two JSON objects and get the differences between them.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "JSON Diff", href: "/dev-tools/json-diff" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "JSON diff online. Compare two JSON objects and find semantic differences. json diff javascript, json diff python, json diff - npm.",
    alternateName: [
      "JSON Diff Tool",
      "JSON Compare",
      "json diff - npm",
      "json-diff-ts",
      "JSON Diff Online",
      "Semantic JSON Compare",
    ],
    featureList: [
      "Compare two JSON objects - semantic diff",
      "json diff online - no signup, instant",
      "json diff javascript - browser-based",
      "json diff python alternative",
      "json diff - npm alternative",
      "json-diff-ts style output",
      "Added, removed, modified highlighting",
      "Copy diff paths to clipboard",
      "100% client-side, private",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "JSON diff compares two JSON objects and shows semantic differences—added keys, removed keys, and modified values. Use this json diff online tool to compare API responses, configs, or data exports. json diff javascript, json diff python, json diff - npm alternative. json-diff-ts compatible output. json diff java, json diff nodejs reference. Free.",

    howToSteps: [
      "Paste your first JSON in the left text area.",
      "Paste the JSON to compare in the right text area.",
      "View differences: added (green), removed (red), modified (amber). Click paths to copy.",
    ],

    features: [
      "json diff online: Compare two JSON objects instantly in browser",
      "Semantic diff: Key/value differences, not line-by-line",
      "json diff javascript: No server; runs in browser",
      "json diff python alternative: Same output as python json diff tools",
      "json diff - npm: Alternative to json-diff, json-diff-kit packages",
      "json-diff-ts: TypeScript-style diff output",
      "Added/removed/modified: Color-coded diff entries",
      "Nested objects and arrays: Recursive comparison",
      "Copy paths: One-click copy for integration",
    ],

    useCases: [
      "json diff javascript: Compare API responses before/after changes",
      "json diff python: Validate config diffs in CI/CD",
      "json diff - npm: Test output of json-diff in Node.js",
      "json diff java: Reference for JSON comparison logic",
      "json diff nodejs: Debug API contract changes",
      "API testing: Compare expected vs actual JSON",
      "Config management: Diff environment configs",
      "Data migration: Verify JSON transformations",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          JSON diff compares two JSON documents and shows semantic differences:
          keys added in the second object, keys removed, and values that changed.
          Unlike line-based diff tools, this compares structure and values so
          property order and whitespace do not affect results. Use for API
          testing, config comparison, or data validation. json diff online, json
          diff javascript, json diff python, json diff - npm, json-diff-ts.
        </p>
        <p>
          Similar to json-diff-kit, json-diff (npm), and json-diff-ts. This tool
          runs entirely in the browser with no server uploads. json diff java and
          json diff nodejs developers can use it as a quick reference for diff
          output format.
        </p>
      </div>
    ),

    proTip:
      "Use Load sample to see an example. Differences update automatically as you type. Copy paths to use in tests or scripts.",

    faqs: [
      {
        question: "What is JSON diff?",
        answer:
          "JSON diff is a tool that compares two JSON objects and reports differences: added keys, removed keys, and modified values. It performs semantic comparison, not line-by-line.",
      },
      {
        question: "How do I compare two JSON objects?",
        answer:
          "Paste the first JSON in the left text area and the second in the right. Differences are shown automatically with added (green), removed (red), and modified (amber) highlighting.",
      },
      {
        question: "Is there a json diff npm package?",
        answer:
          "Yes. Packages like json-diff, json-diff-kit exist. This json diff online tool is a browser alternative—no installation required.",
      },
      {
        question: "How to do json diff in JavaScript?",
        answer:
          "Use this json diff javascript tool in the browser, or install json-diff-kit or json-diff from npm for programmatic use in Node.js.",
      },
      {
        question: "How to do json diff in Python?",
        answer:
          "In Python use deepdiff or jsondiff libraries. This json diff online tool provides the same style of semantic comparison in the browser.",
      },
      {
        question: "What is json-diff-ts?",
        answer:
          "json-diff-ts is a TypeScript JSON diff library. This tool produces similar semantic diff output and works as a json-diff-ts style online comparator.",
      },
    ],

    additionalContent: [
      {
        heading: "json diff online — Free & instant",
        content:
          "This json diff online tool compares two JSON documents in your browser. No uploads, no signup. Differences update as you type. Added keys appear in green, removed in red, modified values in amber. Copy any path for use in tests or automation.",
      },
      {
        heading: "json diff javascript, python, npm, java, nodejs",
        content:
          "For json diff javascript use json-diff-kit or json-diff (npm). For json diff python use deepdiff. For json diff java use JsonNode comparison. For json diff nodejs use the same npm packages. This online tool works as a universal json diff reference.",
      },
    ],

    relatedTools: [
      { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Base64 Encoder", href: "/dev-tools/base64-encoder" },
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
