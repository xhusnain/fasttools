import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const RegexTester = dynamic(
  () => import("@/components/dev-tools/regex-tester").then((mod) => mod.RegexTester),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Regex Tester",
  description:
    "Test regular expressions against sample text with match highlights and capture-group inspection.",
  metaTitle: "Regex Tester (Pattern Debugger)",
  metaDescription:
    "Test regex patterns online with instant match feedback, flags support, and capture-group validation.",
  path: "/dev-tools/regex-tester",
  keywords: [
    "regex tester",
    "test regex online",
    "regex checker",
    "regex flags",
    "capture groups",
  ],

  header: {
    title: "Regex Tester",
    description:
      "Debug pattern behavior quickly with real-time matching and practical test input.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Regex Tester", href: "/dev-tools/regex-tester" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Regular expression testing tool for validating patterns, flags, and capture groups.",
    featureList: [
      "Regex pattern testing",
      "Flags and match preview",
      "Capture-group inspection",
      "Browser-based debugging workflow",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to validate regex patterns before shipping them into production code. It helps with search, validation, extraction, and replace-style text workflows.",

    howToSteps: [
      "Enter your pattern in the regex field.",
      "Add test text to evaluate matches.",
      "Toggle flags such as global or case-insensitive mode.",
      "Review matches and capture groups, then refine the pattern.",
    ],

    features: [
      "Real-time regex match feedback",
      "Common regex flags support",
      "Capture-group visibility",
      "Useful for validate/extract workflows",
      "Fast browser-based testing",
    ],

    useCases: [
      "Form input validation patterns",
      "Log parsing and text extraction",
      "Search and replace rule design",
      "Pre-commit regex QA checks",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Regex testing tools rank best when they make pattern feedback immediate
          and easy to interpret. This page is optimized for that practical
          debugging flow.
        </p>
        <p>
          It helps engineers catch edge cases early, including greedy matches,
          anchor misuse, and unexpected capture behavior.
        </p>
      </div>
    ),

    proTip:
      "Test both valid and invalid inputs to confirm your pattern avoids false positives.",

    faqs: [
      {
        question: "Does this support regex flags?",
        answer:
          "Yes. You can test patterns with common flags such as global and case-insensitive modes.",
      },
      {
        question: "Can I inspect capture groups?",
        answer:
          "Yes. The workflow is designed to make capture behavior visible during testing.",
      },
      {
        question: "Is this useful for JavaScript regex work?",
        answer:
          "Yes. It is commonly used to validate patterns before adding them to JavaScript code.",
      },
      {
        question: "Should I rely on one sample string only?",
        answer:
          "No. Test multiple edge cases to ensure your pattern is robust.",
      },
      {
        question: "Can this prevent production regex bugs?",
        answer:
          "It helps reduce risk by exposing pattern issues early in development and QA.",
      },
    ],

    relatedTools: [
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTTP Status Codes", href: "/dev-tools/http-status-codes" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function RegexTesterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <RegexTester />
        </div>
      )}
    />
  )
}
