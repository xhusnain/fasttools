import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"
import {
  Binary,
  Braces,
  Code2,
  Database,
  FileCode,
  FileJson,
  Globe,
  Hash,
  Monitor,
  Palette,
  Sparkles,
  Cpu,
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
    title: "Base64 Encoder Decoder",
    description:
      "Encode/decode Base64 for strings and common data workflows, including URL-safe cases.",
    href: "/dev-tools/base64-encoder",
    icon: Binary,
  },
  {
    title: "MIME Types",
    description:
      "Lookup MIME types and file extensions for content-type headers and upload handling.",
    href: "/dev-tools/mime-types",
    icon: FileCode,
  },
  {
    title: "Keycode Info",
    description:
      "Inspect keyboard event values including key, code, and modifier states.",
    href: "/dev-tools/keycode-info",
    icon: Code2,
  },
  {
    title: "Slugify String",
    description:
      "Convert text into URL-safe slugs for routes, filenames, and identifiers.",
    href: "/dev-tools/slugify-string",
    icon: FileCode,
  },
  {
    title: "HTML WYSIWYG Editor",
    description:
      "Edit rich text and view generated HTML source in a browser-based workflow.",
    href: "/dev-tools/html-wysiwyg-editor",
    icon: Braces,
  },
  {
    title: "User-Agent Parser",
    description:
      "Parse user-agent strings into browser, OS, engine, device, and CPU details.",
    href: "/dev-tools/user-agent-parser",
    icon: Monitor,
  },
  {
    title: "HTTP Status Codes",
    description:
      "Browse HTTP status code references and meanings for API and web debugging.",
    href: "/dev-tools/http-status-codes",
    icon: Globe,
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
    title: "JSON Diff",
    description:
      "Compare two JSON structures and inspect semantic differences quickly.",
    href: "/dev-tools/json-diff",
    icon: FileJson,
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
    title: "Color Palette Generator",
    description:
      "Generate color palettes and copy hex values for product and UI design workflows.",
    href: "/dev-tools/color-palette",
    icon: Palette,
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
    title: "LLM Training Cost Estimator",
    description:
      "Estimate GPU hours, training time & cloud costs for training large language models across providers.",
    href: "/dev-tools/llm-training-cost",
    icon: Cpu,
  },
  {
    title: "Cloudflare Workers Cost Calculator",
    description:
      "Estimate monthly costs for Workers requests, CPU time, KV, R2 & Durable Objects with scaling projections.",
    href: "/dev-tools/cloudflare-workers-cost",
    icon: Globe,
  },
]

const toolConfig = createToolConfig({
  toolName: "Developer Tools",
  description:
    "Browser-based developer utilities for encoding, parsing, formatting, validation, and content transformation workflows.",
  metaTitle: "Developer Tools: JWT, Base64, Regex, JSON, HTML",
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
      "This category is designed for utility intent: open a tool, complete a technical task, and move on. It covers common development friction points including encoding/decoding, token inspection, HTTP semantics, JSON transforms, HTML/Markdown conversion, and identifier formatting.",

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
      "Frontend utility workflows for colors, slugs, and markup",
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
