import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"
import {
  Braces,
  Clock,
  Code2,
  Database,
  FileCode,
  FileJson,
  Hash,
  Palette,
} from "lucide-react"

const devTools = [
  {
    title: "JWT Decoder",
    description:
      "Decode JWT headers and payloads for authentication debugging and token inspections.",
    href: "/dev-tools/jwt-decoder",
    icon: Code2,
  },
  {
    title: "MIME Types",
    description:
      "Lookup MIME types and file extensions for content-type headers and upload handling.",
    href: "/dev-tools/mime-types",
    icon: FileCode,
  },
  {
    title: "Regex Tester",
    description:
      "Test regex patterns with match previews and iterative debugging support.",
    href: "/dev-tools/regex-tester",
    icon: Hash,
  },
  {
    title: "SQL to JSON Converter",
    description:
      "Convert SQL INSERT statements into JSON objects for migration and API workflows.",
    href: "/dev-tools/sql-to-json",
    icon: Database,
  },
  {
    title: "JSON to CSV Converter",
    description:
      "Transform JSON arrays into CSV for spreadsheet analysis and exports.",
    href: "/dev-tools/json-to-csv",
    icon: FileJson,
  },
  {
    title: "HTML Beautifier",
    description:
      "Format and minify HTML for readability, debugging, and optimization tasks.",
    href: "/dev-tools/html-beautifier",
    icon: Braces,
  },
  {
    title: "Hex to RGB Converter",
    description:
      "Convert color values between HEX, RGB, and HSL for frontend development.",
    href: "/dev-tools/hex-to-rgb",
    icon: Palette,
  },
  {
    title: "HTML to Markdown",
    description:
      "Convert HTML markup into Markdown for docs, blogs, and content migration.",
    href: "/dev-tools/html-to-markdown",
    icon: Braces,
  },
  {
    title: "Markdown Previewer",
    description:
      "Write Markdown and preview rendered output live for documentation workflows.",
    href: "/dev-tools/markdown-previewer",
    icon: FileCode,
  },
  {
    title: "Unix Timestamp Converter",
    description:
      "Convert Unix/epoch timestamps to dates and back — seconds, milliseconds, or microseconds. Live current epoch.",
    href: "/dev-tools/timestamp-converter",
    icon: Clock,
  },
]

const toolConfig = createToolConfig({
  toolName: "Developer Tools",
  description:
    "Browser-based developer utilities for encoding, parsing, formatting, validation, and content transformation workflows.",
  metaTitle: "Developer Tools: Regex, JWT, JSON, HTML, MIME Types",
  metaDescription:
    "Free developer tools for JWT decoding, Base64, regex testing, JSON conversion/diffing, HTML formatting, MIME lookup, and more.",
  path: "/dev-tools",

  schemaOptions: {
    itemList: {
      name: "Developer Tools Collection",
      description:
        "A collection of practical developer utilities for web, API, and data workflows.",
      items: devTools.map((tool) => ({
        name: tool.title,
        description: tool.description,
        url: tool.href,
      })),
    },
  },

  header: {
    title: "Developer Tools",
    description:
      "Task-focused utilities for everyday web development, debugging, and data transformation.",
    titleSize: "large",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [{ label: "Developer Tools", href: "/dev-tools" }],

  content: {
    overview:
      "This category is designed for utility intent: open a tool, complete a technical task, and move on. It covers common development friction points including token inspection, regex testing, JSON transforms, HTML/Markdown conversion, and timestamp handling.",

    features: [
      "Direct browser-based workflows with minimal setup",
      "Tool pages structured with how-to and FAQ support",
      "Cross-linking across related developer tasks",
      "Suitable for debugging, QA, and implementation checks",
      "Covers auth, parsing, formatting, and data conversion flows",
    ],

    useCases: [
      "API and authentication debugging",
      "Format conversion for content and data pipelines",
      "Frontend utility workflows for colors and markup",
      "Regex and parsing checks during implementation",
      "Documentation and editor workflows",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          High-performing developer tool pages prioritize immediate utility,
          clear labels, and predictable output. This category is structured
          around that expectation to reduce time-to-result.
        </p>
        <p>
          Instead of generic content, each page focuses on a specific developer
          problem with concise guidance, schema-backed metadata, and relevant
          internal links for next-step workflows.
        </p>
      </div>
    ),

    faqs: [
      {
        question: "Who should use these developer tools?",
        answer:
          "Frontend and backend developers, QA engineers, technical writers, and API integrators can use these tools for fast diagnostics and transformations.",
      },
      {
        question: "Do I need to install packages to use these pages?",
        answer:
          "No. These tools are designed for browser-first usage to speed up common development tasks.",
      },
      {
        question: "Are these tools useful for production debugging?",
        answer:
          "Yes. They are commonly used to inspect payloads, validate transformations, and test assumptions during implementation.",
      },
      {
        question: "Can I use these tools for learning as well as work?",
        answer:
          "Yes. Many pages include concise explanatory content that supports both practical execution and concept refresh.",
      },
      {
        question: "Are all tools in this category free?",
        answer:
          "Yes. The tools in this category are free to use with no required signup for standard workflows.",
      },
    ],

    relatedTools: [
      { name: "Web Tools", href: "/web-tools" },
      { name: "Crypto Tools", href: "/crypto-tools" },
      { name: "SEO Tools", href: "/seo-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function DevToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {devTools.map((tool) => (
            <GToolCard
              key={`dev-tools-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      )}
    />
  )
}
