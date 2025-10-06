import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Code2, FileJson, Palette, Hash, FileCode, Braces } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Developer Tools - Free Online Dev Utilities | FastTools",
  description:
    "Free developer tools including JWT decoder, regex tester, JSON to CSV converter, HTML beautifier, color palette generator, and more. Essential utilities for developers.",
  keywords:
    "developer tools, JWT decoder, regex tester, JSON to CSV, HTML beautifier, color palette generator, hex to RGB, markdown previewer, HTML to markdown",
}

const tools = [
  {
    name: "JWT Decoder",
    description: "Decode and inspect JWT tokens",
    href: "/dev-tools/jwt-decoder",
    icon: Code2,
  },
  {
    name: "HTML to Markdown",
    description: "Convert HTML to Markdown format",
    href: "/dev-tools/html-to-markdown",
    icon: FileCode,
  },
  {
    name: "Markdown Previewer",
    description: "Live preview your Markdown",
    href: "/dev-tools/markdown-previewer",
    icon: FileCode,
  },
  {
    name: "Regex Tester",
    description: "Test and debug regular expressions",
    href: "/dev-tools/regex-tester",
    icon: Hash,
  },
  {
    name: "Color Palette Generator",
    description: "Generate beautiful color palettes",
    href: "/dev-tools/color-palette",
    icon: Palette,
  },
  {
    name: "Hex to RGB Converter",
    description: "Convert hex colors to RGB",
    href: "/dev-tools/hex-to-rgb",
    icon: Palette,
  },
  {
    name: "JSON to CSV Converter",
    description: "Convert JSON data to CSV format",
    href: "/dev-tools/json-to-csv",
    icon: FileJson,
  },
  {
    name: "HTML Beautifier",
    description: "Format or minify HTML code",
    href: "/dev-tools/html-beautifier",
    icon: Braces,
  },
]

export default function DevToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">Developer Tools</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Essential utilities for developers. Free, fast, and always available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href}>
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
