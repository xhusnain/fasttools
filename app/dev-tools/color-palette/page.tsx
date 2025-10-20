import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ColorPaletteGenerator } from "@/components/color-palette-generator"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Color Palette Generator | Create Beautiful Color Schemes | FastTools",
  description:
    "Generate color palettes for design and branding. Copy HEX/RGB, lock colors, shuffle, and export. Great for designers and developers.",
  keywords: [
    // Primary Keywords (20)
    "color palette generator",
    "free color palette generator",
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
    
    // Secondary Keywords (20)
    "complementary colors",
    "monochromatic colors",
    "gradient colors",
    "palette export",
    "download palette",
    "save palette",
    "color inspiration",
    "design system colors",
    "primary secondary accent",
    "free color palette generator",
    "color palette generator online",
    "color scheme generator online",
    "random colors online",
    "color picker online",
    "hex colors online",
    "rgb colors online",
    "hsl colors online",
    "lock color online",
    "copy hex online",
    "brand colors online",
    
    // Long-tail Keywords (20)
    "free online color palette generator",
    "best color palette generator online",
    "color palette generator with live preview",
    "free color palette generator tool online",
    "online color palette generator free",
    "color palette generator online free",
    "color scheme generator free online",
    "random colors free online",
    "color picker free online",
    "hex colors free online",
    "rgb colors free online",
    "hsl colors free online",
    "lock color free online",
    "copy hex free online",
    "brand colors free online",
    "ui color palette free online",
    "web design colors free online",
    "material design palette free online",
    "tailwind colors free online",
    "contrast checker note free online",
    
    // Additional SEO Keywords
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
    "free color palette generator",
    "color palette generator online",
    "color scheme generator online",
    "random colors online",
    "color picker online",
    "hex colors online",
    "rgb colors online",
    "hsl colors online",
    "lock color online",
    "copy hex online",
    "brand colors online",
    "ui color palette online",
    "web design colors online",
    "material design palette online",
    "tailwind colors online",
    "contrast checker note online",
    "a11y colors online",
    "accessible color palette online",
    "triadic colors online",
    "analogous colors online",
    "complementary colors online",
    "monochromatic colors online",
    "gradient colors online",
    "palette export online",
    "download palette online",
    "save palette online",
    "color inspiration online",
    "design system colors online",
    "primary secondary accent online",
    "free color palette generator online",
    "color palette generator free",
    "color scheme generator free",
    "random colors free",
    "color picker free",
    "hex colors free",
    "rgb colors free",
    "hsl colors free",
    "lock color free",
    "copy hex free",
    "brand colors free",
    "ui color palette free",
    "web design colors free",
    "material design palette free",
    "tailwind colors free",
    "contrast checker note free",
    "a11y colors free",
    "accessible color palette free",
    "triadic colors free",
    "analogous colors free",
    "complementary colors free",
    "monochromatic colors free",
    "gradient colors free",
    "palette export free",
    "download palette free",
    "save palette free",
    "color inspiration free",
    "design system colors free",
    "primary secondary accent free",
    "free color palette generator free",
    "color palette generator tool",
    "color scheme generator tool",
    "random colors tool",
    "color picker tool",
    "hex colors tool",
    "rgb colors tool",
    "hsl colors tool",
    "lock color tool",
    "copy hex tool",
    "brand colors tool",
    "ui color palette tool",
    "web design colors tool",
    "material design palette tool",
    "tailwind colors tool",
    "contrast checker note tool",
    "a11y colors tool",
    "accessible color palette tool",
    "triadic colors tool",
    "analogous colors tool",
    "complementary colors tool",
    "monochromatic colors tool",
    "gradient colors tool",
    "palette export tool",
    "download palette tool",
    "save palette tool",
    "color inspiration tool",
    "design system colors tool",
    "primary secondary accent tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/color-palette" },
  openGraph: {
    title: "Free Color Palette Generator | Create Beautiful Color Schemes | FastTools",
    description: "Generate color palettes for design and branding. Copy HEX/RGB, lock colors, shuffle, and export. Great for designers and developers.",
    url: "https://www.fasttools.store/dev-tools/color-palette",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Color Palette Generator - Create Beautiful Color Schemes",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Color Palette Generator | Create Beautiful Color Schemes | FastTools",
    description: "Generate color palettes for design and branding. Copy HEX/RGB, lock colors, shuffle, and export. Great for designers and developers.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Color Palette Generator",
      alternateName: "Color Scheme Generator",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/dev-tools/color-palette",
      description:
        "Generate and copy color palettes with hex/rgb values for design and branding.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Lock/shuffle", 
        "Copy HEX/RGB", 
        "Export palette",
        "Color generation",
        "Design inspiration",
        "Brand colors",
        "UI color palette",
        "Web design colors",
        "Material design",
        "Accessibility colors"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/dev-tools/color-palette",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "color palette generator, free color palette generator, color scheme generator, random colors, color picker, hex colors, rgb colors",
      about: {
        "@type": "Thing",
        name: "Color Design and Branding",
        description: "Free online tools for generating color palettes, schemes, and design inspiration"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
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

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <ColorPaletteGenerator />
        
        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

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
