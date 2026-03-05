import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const TextCaseConverter = dynamic(
  () =>
    import("@/components/converters/text-case-converter").then(
      (mod) => mod.TextCaseConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Text Case Converter",
  description:
    "Convert text between uppercase, lowercase, title case, sentence case, camelCase, snake_case, and more.",
  metaTitle: "Text Case Converter - Uppercase, Lowercase, camelCase",
  metaDescription:
    "Free text case converter for uppercase, lowercase, title case, sentence case, camelCase, snake_case, kebab-case, and PascalCase.",
  path: "/converters/text-case",
  keywords: [
    "text case converter",
    "uppercase converter",
    "lowercase converter",
    "title case converter",
    "camel case converter",
    "snake case converter",
  ],

  header: {
    title: "Text Case Converter",
    description:
      "Transform text across writing and developer case formats with instant copy-ready output.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Text Case Converter", href: "/converters/text-case" },
  ],

  content: {
    definition:
      "A Text Case Converter is a free tool that transforms text between uppercase, lowercase, title case, sentence case, camelCase, snake_case, and other naming conventions.",
    quickAnswer:
      "Paste your text and click the desired case format. Supports UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and more. Copy the result with one click.",
    keyTakeaways: [
      "Supports 8+ case formats including programming naming conventions",
      "camelCase and PascalCase for code variables and class names",
      "snake_case for Python and database columns, kebab-case for URLs",
      "Title Case capitalizes first letter of each word",
      "Instant conversion with one-click copy",
    ],
    overview:
      "Use this tool to quickly convert text into the format you need for documents, headlines, URLs, code variables, and naming conventions.",

    howToSteps: [
      "Paste or type your text in the input box.",
      "Pick the target format such as uppercase, title case, or camelCase.",
      "Copy a single result or download all conversion formats.",
      "Use cleanup options to normalize spacing before conversion.",
    ],

    features: [
      "UPPERCASE, lowercase, Title Case, and Sentence case",
      "camelCase, PascalCase, snake_case, kebab-case, dot.case, and swap case",
      "Real-time conversion while typing",
      "Character and word counters",
      "One-click copy per format",
      "Bulk download of all converted outputs",
    ],

    useCases: [
      "Formatting article headlines and body text",
      "Creating URL slugs and tags",
      "Standardizing variable and function names",
      "Converting between language-specific naming conventions",
      "Cleaning raw text from spreadsheets or exports",
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-lg font-bold text-heading-accent">
            Case Style Reference
          </h3>
          <GTable>
            <thead className="bg-muted font-semibold text-foreground">
              <tr>
                <th className="p-3">Style</th>
                <th className="p-3">Example</th>
                <th className="p-3">Common Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold">Title Case</td>
                <td className="p-3 font-mono">Fast Tools Platform</td>
                <td className="p-3">Headlines and titles</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">camelCase</td>
                <td className="p-3 font-mono">fastToolsPlatform</td>
                <td className="p-3">JavaScript variables</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">snake_case</td>
                <td className="p-3 font-mono">fast_tools_platform</td>
                <td className="p-3">Python and SQL naming</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">kebab-case</td>
                <td className="p-3 font-mono">fast-tools-platform</td>
                <td className="p-3">URL slugs and CSS classes</td>
              </tr>
            </tbody>
          </GTable>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "Which cases are supported?",
        answer:
          "The tool supports uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case, dot.case, and swap case.",
      },
      {
        question: "Does this tool count words and characters?",
        answer:
          "Yes. The input section shows live character and word counts while you type.",
      },
      {
        question: "Can I export all conversion results at once?",
        answer:
          "Yes. Use the Download All option to export all generated formats in one text file.",
      },
      {
        question: "Is my text sent to a server?",
        answer:
          "No. Conversion is done in your browser for fast local processing.",
      },
      {
        question: "Is this text case converter free?",
        answer: "Yes. It is free and does not require signup.",
      },
    ],

    relatedTools: [
      { name: "List Converter", href: "/converters/list-converter" },
      { name: "Unicode Converter", href: "/converters/unicode" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TextCaseConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TextCaseConverter />)} />
}
