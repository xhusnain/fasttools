import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HTMLBeautifier } from "@/components/html-beautifier"

export const metadata: Metadata = {
  title: "HTML Beautifier & Minifier - Format or Minify HTML | FastTools",
  description:
    "Free online HTML beautifier and minifier. Format or compress HTML code instantly. Perfect for web developers.",
  keywords: "HTML beautifier, HTML minifier, format HTML, minify HTML, HTML formatter, HTML compressor",
}

export default function HTMLBeautifierPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">HTML Beautifier & Minifier</h1>
          <p className="text-lg text-muted-foreground text-balance">Format or compress your HTML code instantly</p>
        </div>

        <HTMLBeautifier />
      </div>
    </div>
  )
}
