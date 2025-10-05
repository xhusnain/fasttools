import { TextCaseConverter } from "@/components/text-case-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Text Case Converter - Uppercase, Lowercase, Title Case | ToolifyHub",
  description:
    "Free online text case converter. Convert text to uppercase, lowercase, title case, sentence case, camelCase, and snake_case instantly.",
  keywords:
    "text case converter, uppercase converter, lowercase converter, title case, sentence case, camelCase, snake_case, text transformation",
}

export default function TextCaseConverterPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "Text Case Converter", href: "/converters/text-case" },
          ]}
        />

        <AdSpace slot="header" className="mb-8 h-24" />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Text Case Converter</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Convert your text to different cases instantly. Supports uppercase, lowercase, title case, sentence case,
              camelCase, and snake_case.
            </p>
          </div>

          <TextCaseConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">About Text Case Converter</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our free text case converter helps you quickly transform text between different formatting styles. Whether
              you need to convert text to uppercase for headings, lowercase for URLs, title case for proper formatting,
              or programming cases like camelCase and snake_case, our tool makes it easy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
