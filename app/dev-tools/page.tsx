import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Code2, FileJson, Palette, Hash, FileCode, Braces } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"

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
        {/* Hero Section with proper content-to-ad ratio */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">Developer Tools</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Essential utilities for developers. Free, fast, and always available.
          </p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href}>
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-card/80 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/20">
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

        {/* Second Ad Space - Between Tools and Content */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        {/* SEO Content Section */}
        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Why Choose Our Developer Tools?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our developer tools are designed to help you work more efficiently with code, data, and design. 
              Whether you're debugging JWT tokens, testing regex patterns, or generating color palettes, 
              our tools provide the precision and ease of use you need.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Free to use with no registration required</li>
              <li>Fast, client-side processing for privacy</li>
              <li>Mobile-friendly and responsive design</li>
              <li>Copy and export results easily</li>
              <li>No data sent to servers</li>
              <li>Always up-to-date with latest standards</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Popular Developer Tools</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Discover our most popular developer tools that help thousands of developers every day:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">JWT Decoder</h3>
                <p className="text-sm text-muted-foreground">Decode and inspect JWT tokens safely in your browser.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">Regex Tester</h3>
                <p className="text-sm text-muted-foreground">Test and debug regular expressions with live matching.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">Color Palette Generator</h3>
                <p className="text-sm text-muted-foreground">Generate beautiful color schemes for your projects.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">JSON to CSV Converter</h3>
                <p className="text-sm text-muted-foreground">Convert JSON data to CSV format quickly and easily.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Ad Space - Bottom Content */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>
      </div>
    </div>
  )
}
