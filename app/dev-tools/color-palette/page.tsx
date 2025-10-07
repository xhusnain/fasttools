import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ColorPaletteGenerator } from "@/components/color-palette-generator"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Color Palette Generator — Create Beautiful Color Schemes | SmartToolboxes",
  description:
    "Generate color palettes for design and branding. Copy HEX/RGB, lock colors, shuffle, and export. Great for designers and developers.",
  keywords: [
    "color palette generator",
    "color scheme generator",
    "random colors",
    "color picker",
    "hex colors",
    "rgb colors",
    "hsl colors",
    "lock color",
    "copy hex",
    "brand colors",
    "ui color palette",
    "web design colors",
    "material design palette",
    "tailwind colors",
    "contrast checker note",
    "a11y colors",
    "accessible color palette",
    "triadic colors",
    "analogous colors",
    "complementary colors",
    "monochromatic colors",
    "gradient colors",
    "palette export",
    "download palette",
    "save palette",
    "color inspiration",
    "design system colors",
    "primary secondary accent",
    "free color palette generator"
  ],
  alternates: { canonical: "https://www.smarttoolboxes.com/dev-tools/color-palette" },
  openGraph: {
    title: "Color Palette Generator — Design Color Schemes",
    description: "Create palettes, lock colors, and copy HEX/RGB for your design system.",
    url: "https://www.smarttoolboxes.com/dev-tools/color-palette",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Color Palette Generator", description: "Make beautiful color schemes fast." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Color Palette Generator",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/dev-tools/color-palette",
      description:
        "Generate and copy color palettes with hex/rgb values for design and branding.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Lock/shuffle", "Copy HEX/RGB", "Export palette"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.smarttoolboxes.com" },
    }),
  },
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

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">How to Use</h2>
          <ol className="list-decimal pl-5 text-muted-foreground">
            <li>Shuffle to generate palettes and lock colors you like.</li>
            <li>Copy HEX/RGB values and export or save your palette.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Related Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/dev-tools/hex-to-rgb">Hex to RGB</Link></li>
            <li><Link href="/dev-tools/html-beautifier">HTML Beautifier</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
