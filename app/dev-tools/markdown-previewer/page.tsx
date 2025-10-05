import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { MarkdownPreviewer } from "@/components/markdown-previewer"

export const metadata: Metadata = {
  title: "Markdown Previewer - Live Markdown Preview | ToolifyHub",
  description:
    "Free online Markdown previewer with live preview. Write Markdown and see the rendered output in real-time. Perfect for content creators and developers.",
  keywords: "markdown previewer, markdown editor, live markdown preview, markdown renderer",
}

export default function MarkdownPreviewerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
        ]}
      />

      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">Markdown Previewer</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Write Markdown and see the rendered output in real-time
          </p>
        </div>

        <MarkdownPreviewer />
      </div>
    </div>
  )
}
