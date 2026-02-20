import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"

import { Link2 } from "lucide-react"

const webTools = [
  {
    title: "URL Encoder Decoder",
    description:
      "Encode text to URL-safe format (percent-encoding) and decode it back instantly.",
    href: "/web-tools/url-encoder",
    icon: Link2,
    popular: true,
  },
  {
    title: "Escape HTML Entities",
    description:
      "Escape or unescape HTML entities to safely display user content in markup.",
    href: "/web-tools/html-escape",
    icon: Link2,
    popular: true,
  },
  {
    title: "URL Parser",
    description:
      "Break URLs into protocol, host, path, query params, and hash for debugging.",
    href: "/web-tools/url-parser",
    icon: Link2,
    popular: true,
  },
  {
    title: "Device Information",
    description:
      "View browser and screen details like user agent, viewport, pixel ratio, and OS.",
    href: "/web-tools/device-info",
    icon: Link2,
    popular: true,
  },
  {
    title: "Auth Header Generator",
    description:
      "Generate Basic, Bearer, and API key headers for API clients and testing.",
    href: "/web-tools/auth-generator",
    icon: Link2,
    popular: true,
  },
  {
    title: "Outlook Safelink Decoder",
    description:
      "Extract original destination URLs from Microsoft Safe Links in Outlook emails.",
    href: "/web-tools/outlook-safelink-decoder",
    icon: Link2,
    popular: true,
  },
]

const toolConfig = createToolConfig({
  toolName: "Web Tools",
  description:
    "Browser-based web utilities for URL encoding, URL parsing, HTML escaping, device detection, auth headers, and Outlook Safe Links decoding.",
  metaTitle: "Web Tools: URL Encoder, Parser, Device Info",
  metaDescription:
    "Free web tools for developers and analysts: URL encoder/decoder, URL parser, HTML escape, auth header generator, device info, and Safe Links decoder.",
  path: "/web-tools",
  keywords: [
    "web tools",
    "url encoder",
    "url parser",
    "html escape",
    "auth header generator",
    "device info",
    "safelink decoder",
  ],
  schemaOptions: {
    itemList: {
      name: "Web Tools Collection",
      description:
        "A collection of browser-based web utilities for encoding, parsing, debugging, and security workflows.",
      items: webTools.map((tool) => ({
        name: tool.title,
        description: tool.description,
        url: tool.href,
      })),
    },
  },

  header: {
    title: "Web Tools",
    description:
      "Practical utilities for everyday web development and troubleshooting. Fast, free, and browser-based.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [{ label: "Web Tools", href: "/web-tools" }],

  content: {
    overview:
      "This category includes focused web utilities for encoding, parsing, security checks, and browser diagnostics. Every tool runs client-side in your browser, so you can test quickly without installing packages or sharing sensitive data.",

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">
            What This Category Covers
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Web tools are small utilities that solve specific technical tasks:
            encoding values, parsing URLs, generating auth headers, or checking
            browser and device attributes. They are useful for API testing,
            troubleshooting redirects, debugging analytics parameters, and
            verifying suspicious links.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            FastTools Web Tools are designed for quick workflows: open a tool,
            paste input, and copy output. The category includes URL
            Encoder/Decoder, HTML Escape/Unescape, URL Parser, Device
            Information, Auth Header Generator, and Outlook Safe Links Decoder.
          </p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "Who are these web tools for?",
        answer:
          "They are built for developers, marketers, analysts, support teams, and technical writers who need fast transformations and diagnostics while working with URLs, HTML, auth headers, and browser or device data.",
      },
      {
        question: "Do these tools send my data to your servers?",
        answer:
          "For this category, processing happens in your browser for normal text inputs and outputs. That makes these tools suitable for quick checks on sensitive strings, links, and headers.",
      },
      {
        question: "Which tool should I use first?",
        answer:
          "Use URL Encoder/Decoder for query-safe values, URL Parser for parameter analysis, HTML Escape for safe rendering, Auth Header Generator for API testing, Device Information for environment checks, and Safe Links Decoder for Outlook link inspection.",
      },
      {
        question: "Can I use these tools on mobile?",
        answer:
          "Yes. The tools are responsive and work on desktop and mobile browsers. Some outputs, like long user-agent strings, are simply easier to inspect on larger screens.",
      },
      {
        question: "Are these tools free?",
        answer:
          "Yes. All tools in this category are free to use with no signup requirement.",
      },
    ],
    relatedTools: [
      { name: "Developer Tools", href: "/dev-tools" },
      { name: "SEO Tools", href: "/seo-tools" },
      { name: "Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function WebToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {webTools.map((tool) => (
            <GToolCard
              key={`web-tools-${tool.href}`}
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
