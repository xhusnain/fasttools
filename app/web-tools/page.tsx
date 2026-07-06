import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"

import { Globe } from "lucide-react"

const webTools = [
  {
    title: "WHOIS & Domain Lookup",
    description:
      "Look up domain registration data — registrar, dates, status, nameservers, and DNSSEC via RDAP.",
    href: "/web-tools/whois-lookup",
    icon: Globe,
    popular: true,
  },
]

const toolConfig = createToolConfig({
  toolName: "Web Tools",
  description:
    "Browser-based web utilities for domain research, including WHOIS and domain registration lookups via RDAP.",
  metaTitle: "Web Tools: WHOIS & Domain Lookup",
  metaDescription:
    "Free web tools for developers and analysts: URL encoder/decoder, URL parser, HTML escape, auth header generator, device info, and Safe Links decoder.",
  path: "/web-tools",
  schemaOptions: {
    itemList: {
      name: "Web Tools Collection",
      description:
        "A collection of browser-based web utilities for domain research and diagnostics.",
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
      "This category features the WHOIS & Domain Lookup tool for researching domain registrations. Check who owns a domain, when it was registered and expires, its registrar, nameservers, and DNSSEC status — all from your browser with no installs.",

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">
            What This Category Covers
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Web tools help with domain research and troubleshooting. The WHOIS
            & Domain Lookup tool retrieves registration data over RDAP, the
            modern successor to the WHOIS protocol, so you can verify domain
            ownership details, registration and expiry dates, registrar
            information, and nameserver configuration.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            FastTools Web Tools are designed for quick workflows: open the
            tool, enter a domain, and review the results. It is useful for
            checking domain availability signals, investigating suspicious
            sites, auditing your own domain portfolio, and confirming DNSSEC
            status.
          </p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "Who are these web tools for?",
        answer:
          "They are built for developers, marketers, analysts, support teams, and technical writers who need fast domain diagnostics, such as checking a domain's registrar, age, expiry date, or nameservers.",
      },
      {
        question: "What can I look up with the WHOIS tool?",
        answer:
          "You can look up a domain's registrar, registration and expiry dates, status codes, nameservers, and DNSSEC information using RDAP, the structured successor to WHOIS.",
      },
      {
        question: "Which tool should I use first?",
        answer:
          "Start with the WHOIS & Domain Lookup tool. Enter any domain name to see its registration data, ownership timeline, and nameserver setup in seconds.",
      },
      {
        question: "Can I use these tools on mobile?",
        answer:
          "Yes. The tools are responsive and work on desktop and mobile browsers. Longer lookup results are simply easier to inspect on larger screens.",
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
