import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ColorPaletteGenerator } from "@/components/color-palette-generator"

export const metadata: Metadata = {
  title: "Color Palette Generator - Generate Beautiful Color Schemes | ToolifyHub",
  description:
    "Free online color palette generator. Generate beautiful, random color schemes for your design projects. Perfect for designers and developers.",
  keywords: "color palette generator, color scheme generator, random colors, design colors, color picker",
}

export default function ColorPalettePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "Color Palette Generator", href: "/dev-tools/color-palette" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">Color Palette Generator</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Generate beautiful, random color schemes for your projects
          </p>
        </div>

        <ColorPaletteGenerator />
      </div>
    </div>
  )
}
