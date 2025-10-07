import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HexToRGB } from "@/components/hex-to-rgb"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hex to RGB Converter — Convert Hex Colors to RGB | SmartToolboxes",
  description:
    "Convert hex color codes to RGB instantly. Copy values, validate inputs, and understand color formats for web design.",
  keywords: [
    "hex to rgb",
    "color converter",
    "hex color converter",
    "rgb converter",
    "color code converter",
    "hex color codes",
    "css colors",
    "web color formats",
    "rgb values",
    "hex values",
    "convert #ffffff to rgb",
    "convert #000000 to rgb",
    "convert hex to decimal",
    "rgba note",
    "hsl note",
    "color picker",
    "copy color values",
    "color validation",
    "design color tools",
    "free hex to rgb"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/hex-to-rgb" },
  openGraph: {
    title: "Hex to RGB Converter — Web Color Tools",
    description: "Convert hex color codes to RGB and copy values.",
    url: "https://www.fasttools.store/dev-tools/hex-to-rgb",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Hex to RGB Converter", description: "Instant hex → RGB conversion." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Hex to RGB Converter",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/dev-tools/hex-to-rgb",
      description:
        "Convert hex color codes to RGB instantly with copy and validation.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Hex → RGB", "Copy values", "Validate input"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function HexToRGBPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "Hex to RGB", href: "/dev-tools/hex-to-rgb" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">Hex to RGB Converter</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Convert hexadecimal color codes to RGB format instantly
          </p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <HexToRGB />
        
        {/* Center Content Ad */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">How to Use</h2>
          <ol className="list-decimal pl-5 text-muted-foreground">
            <li>Paste a hex code (e.g., #1a2b3c) to see the RGB values.</li>
            <li>Copy the result for CSS, design tools, or documentation.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Related Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/dev-tools/color-palette">Color Palette Generator</Link></li>
            <li><Link href="/dev-tools/html-beautifier">HTML Beautifier</Link></li>
          </ul>
        </div>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>
      </div>
    </div>
  )
}
