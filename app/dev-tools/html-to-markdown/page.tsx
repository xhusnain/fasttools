import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HTMLToMarkdown } from "@/components/html-to-markdown"

export const metadata: Metadata = {
  title: "HTML to Markdown Converter - Convert HTML to Markdown | ToolifyHub",
  description:
    "Free online HTML to Markdown converter. Convert HTML code to Markdown format instantly. Perfect for content writers and developers.",
  keywords: "HTML to markdown, convert HTML, markdown converter, HTML parser, content converter",
}

export default function HTMLToMarkdownPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">HTML to Markdown Converter</h1>
          <p className="text-lg text-muted-foreground text-balance">Convert HTML code to Markdown format instantly</p>
        </div>

        <HTMLToMarkdown />
      </div>
    </div>
  )
}
