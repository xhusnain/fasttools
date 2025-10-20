import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HexToRGB } from "@/components/hex-to-rgb"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Hex to RGB Converter | Convert Hex Colors | FastTools",
  description:
    "Convert hex color codes to RGB instantly. Copy values, validate inputs, and understand color formats for web design.",
  keywords: [
    // Primary Keywords (20)
    "hex to rgb",
    "free hex to rgb",
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
    
    // Secondary Keywords (20)
    "hex to rgb online",
    "color converter online",
    "hex color converter online",
    "rgb converter online",
    "color code converter online",
    "hex color codes online",
    "css colors online",
    "web color formats online",
    "rgb values online",
    "hex values online",
    "convert #ffffff to rgb online",
    "convert #000000 to rgb online",
    "convert hex to decimal online",
    "rgba note online",
    "hsl note online",
    "color picker online",
    "copy color values online",
    "color validation online",
    "design color tools online",
    "free hex to rgb online",
    
    // Long-tail Keywords (20)
    "free online hex to rgb converter",
    "best hex to rgb converter online",
    "hex to rgb converter with live preview",
    "free hex to rgb converter tool online",
    "online hex to rgb converter free",
    "hex to rgb converter online free",
    "color converter free online",
    "hex color converter free online",
    "rgb converter free online",
    "color code converter free online",
    "hex color codes free online",
    "css colors free online",
    "web color formats free online",
    "rgb values free online",
    "hex values free online",
    "convert #ffffff to rgb free online",
    "convert #000000 to rgb free online",
    "convert hex to decimal free online",
    "rgba note free online",
    "hsl note free online",
    
    // Additional SEO Keywords
    "color picker",
    "copy color values",
    "color validation",
    "design color tools",
    "free hex to rgb",
    "hex to rgb online",
    "color converter online",
    "hex color converter online",
    "rgb converter online",
    "color code converter online",
    "hex color codes online",
    "css colors online",
    "web color formats online",
    "rgb values online",
    "hex values online",
    "convert #ffffff to rgb online",
    "convert #000000 to rgb online",
    "convert hex to decimal online",
    "rgba note online",
    "hsl note online",
    "color picker online",
    "copy color values online",
    "color validation online",
    "design color tools online",
    "free hex to rgb online",
    "hex to rgb free",
    "color converter free",
    "hex color converter free",
    "rgb converter free",
    "color code converter free",
    "hex color codes free",
    "css colors free",
    "web color formats free",
    "rgb values free",
    "hex values free",
    "convert #ffffff to rgb free",
    "convert #000000 to rgb free",
    "convert hex to decimal free",
    "rgba note free",
    "hsl note free",
    "color picker free",
    "copy color values free",
    "color validation free",
    "design color tools free",
    "free hex to rgb free",
    "hex to rgb tool",
    "color converter tool",
    "hex color converter tool",
    "rgb converter tool",
    "color code converter tool",
    "hex color codes tool",
    "css colors tool",
    "web color formats tool",
    "rgb values tool",
    "hex values tool",
    "convert #ffffff to rgb tool",
    "convert #000000 to rgb tool",
    "convert hex to decimal tool",
    "rgba note tool",
    "hsl note tool",
    "color picker tool",
    "copy color values tool",
    "color validation tool",
    "design color tools tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/hex-to-rgb" },
  openGraph: {
    title: "Hex to RGB Converter | Convert Hex Colors | FastTools",
    description: "Convert hex color codes to RGB instantly. Copy values, validate inputs, and understand color formats for web design.",
    url: "https://www.fasttools.store/dev-tools/hex-to-rgb",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Hex to RGB Converter - Convert Hex Colors to RGB",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hex to RGB Converter | Convert Hex Colors | FastTools",
    description: "Convert hex color codes to RGB instantly. Copy values, validate inputs, and understand color formats for web design.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Hex to RGB Converter",
      alternateName: "Color Code Converter",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/dev-tools/hex-to-rgb",
      description:
        "Convert hex color codes to RGB instantly with copy and validation.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Hex → RGB", 
        "Copy values", 
        "Validate input",
        "Color conversion",
        "CSS colors",
        "Web design",
        "Color validation",
        "Design tools",
        "Color picker",
        "RGB values"
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
      downloadUrl: "https://www.fasttools.store/dev-tools/hex-to-rgb",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "hex to rgb, free hex to rgb, color converter, hex color converter, rgb converter, color code converter, hex color codes",
      about: {
        "@type": "Thing",
        name: "Color Conversion",
        description: "Free online tools for converting hex colors to RGB and other color formats"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
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

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <HexToRGB />
        
        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
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

      </div>
    </div>
  )
}
