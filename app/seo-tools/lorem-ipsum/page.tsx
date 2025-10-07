import { LoremIpsumGenerator } from "@/components/lorem-ipsum-generator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Lorem Ipsum Generator | Placeholder Text Generator Online",
  description:
    "Generate Lorem Ipsum placeholder text for your designs, mockups, and prototypes. Perfect for web designers, developers, and content creators.",
  keywords:
    "lorem ipsum generator, placeholder text, dummy text, filler text, design mockup text, mock content, sample text, greeked text, ux writing placeholder, ui design text, wireframe text, prototyping text, layout text, paragraph generator, sentence generator, random text, latin text generator, lorem ipsum paragraphs, lorem ipsum sentences, design system content, content placeholder, editorial layout, magazine mockup text, brochure mockup text, landing page mockup, web design tools, figma placeholder text, sketch placeholder, xd placeholder, frontend placeholder, developer tools, copy filler, content scaffolding, quick lorem ipsum, short lorem, long lorem, bulleted lorem, numbered lorem, markdown lorem, html lorem, text for testing, typography testing, spacing test content, responsive layout test, accessibility placeholder, alt text placeholder, metadata placeholder, content design tools",
  openGraph: {
    title: "Free Lorem Ipsum Generator - Create Placeholder Text",
    description: "Generate Lorem Ipsum text for your design projects instantly",
    type: "website",
  },
}

export default function LoremIpsumGeneratorPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "SEO Tools", href: "/seo-tools" },
            { label: "Lorem Ipsum Generator", href: "/seo-tools/lorem-ipsum" },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Lorem Ipsum Generator</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Generate placeholder text for your designs, mockups, and prototypes instantly.
            </p>
          </div>

          <AdSpace slot="content" className="mb-8 h-24" />

          <LoremIpsumGenerator />

          {/* Center Content Ad */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24" />
          </div>

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">What is Lorem Ipsum?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
              previewing layouts and visual mockups. It has been the industry standard dummy text since the 1500s.
            </p>
            <h3 className="text-xl font-semibold text-foreground">When to Use Placeholder Text</h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Wireframes and prototypes before final copy is ready</li>
              <li>Testing responsive typography, spacing, and layout behavior</li>
              <li>Client previews to focus on structure rather than wording</li>
              <li>Avoid using in production content—replace with real copy before launch</li>
            </ul>
          </div>

          {/* Bottom Content Ad */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full h-24" />
          </div>
        </div>
      </div>
    </div>
  )
}
