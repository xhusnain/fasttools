import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"

import { Link2, Globe } from "lucide-react"

const webTools = [
  {
    title: "URL Encoder Decoder",
    description:
      "Encode text to URL-encoded format (percent-encoded), or decode from it. Free online web tool.",
    href: "/web-tools/url-encoder",
    icon: Link2,
    popular: true,
  },
  {
    title: "Escape HTML Entities",
    description:
      "Escape or unescape HTML entities. html escape online. Prevents XSS. Free.",
    href: "/web-tools/html-escape",
    icon: Link2,
    popular: true,
  },
  {
    title: "URL Parser",
    description:
      "Parse URLs into components. url query string parser with decode. Free.",
    href: "/web-tools/url-parser",
    icon: Link2,
    popular: true,
  },
  {
    title: "Device Information",
    description:
      "Get my device information online. Screen size, user agent, pixel ratio. Free.",
    href: "/web-tools/device-info",
    icon: Link2,
    popular: true,
  },
  {
    title: "Auth Header Generator",
    description:
      "basic auth generator online. Basic Auth, Bearer, API Key. Decode too. Free.",
    href: "/web-tools/auth-generator",
    icon: Link2,
    popular: true,
  },
]

const toolConfig = createToolConfig({
  toolName: "Free Web Tools",
  description:
    "Free online web tools for URL encoding, decoding, and web development. URL encode decode, percent-encoded. Free web tools list. No signup.",
  metaTitle: "Free Web Tools Online | URL Encoder, Web Utilities",
  metaDescription:
    "Free online web tools for developers and webmasters. URL encode decode, percent-encoded strings. Free web tools list. No signup required.",
  path: "/web-tools",
  schemaOptions: {
    itemList: {
      name: "Web Tools Collection - URL Encoder, Web Utilities",
      description:
        "Free online web tools for URL encoding, decoding, and web development. URL encode decode, percent-encoded. Free web tools list.",
      items: webTools.map((tool) => ({
        name: tool.title,
        description: tool.description,
        url: tool.href,
      })),
    },
  },

  header: {
    title: "Free Web Tools - URL Encoder & More",
    description:
      "Online web tools for URL encoding, decoding, and web development. Free, fast, and secure. No signup required.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [{ label: "Web Tools", href: "/web-tools" }],

  content: {
    overview:
      "Free online web tools help you build, manage, test, and analyze websites. Our web tools list includes url encode decode online, url parser online, device information, auth generator, encode decode url formatted strings, and HTML escape. Explore web tools examples like URL encoders and url parser. This web tools website runs entirely in your browser—no signup or software needed.",

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">
            What Are Web Tools?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Web tools are online applications that help you build, manage, test,
            design, or analyze websites. Web tools examples include URL encoders,
            link checkers, DevTools, and PageSpeed Insights. This web tools
            website offers free online web tools that run in your browser.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our free web tools list features url encode decode online, url parser online, device information, auth generator,
            encode decode url formatted strings, HTML escape, and more. Use
            any tool instantly—no signup, no software download.
          </p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "What are web tools?",
        answer:
          "Web tools are online applications that help you build, manage, test, design, or analyze websites. Web tools examples include url encode decode online tools, encode decode url formatted strings utilities, DevTools, and PageSpeed Insights. This web tools website offers free online web tools accessible via browser.",
      },
      {
        question: "What are free online web tools?",
        answer:
          "Free online web tools run in your browser without signup or payment. Our web tools list includes url encode decode online, url parser online, device information, auth generator, encode decode url formatted strings, HTML escape, JSON formatters, and more. All tools are free and client-side.",
      },
      {
        question: "Where can I find a web tools list?",
        answer:
          "Visit fasttools.store/web-tools for our full web tools list. We offer url encode decode online, url parser online, device information, auth generator, encode decode url formatted strings, HTML escape, and other web tools examples. Free online web tools, no signup.",
      },
      {
        question: "How to open web tools?",
        answer:
          "Web tools are accessed through a browser. For our free online web tools, visit fasttools.store/web-tools. For browser DevTools, press F12 or Ctrl+Shift+I (Cmd+Option+I on Mac).",
      },
      {
        question: "How do web tools impact SEO?",
        answer:
          "Web tools like url encode decode online, url parser online, device information, auth generator, sitemap validators, and meta tag generators help optimize sites for search engines. Proper encode decode url formatted strings ensures links work correctly. SEO tools analyze performance and content.",
      },
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
