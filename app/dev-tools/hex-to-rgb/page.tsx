import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HexToRGB } from "@/components/hex-to-rgb"

export const metadata: Metadata = {
  title: "Hex to RGB Converter - Convert Hex Colors to RGB | ToolifyHub",
  description:
    "Free online hex to RGB color converter. Convert hexadecimal color codes to RGB format instantly. Perfect for web designers and developers.",
  keywords: "hex to RGB, color converter, hex color converter, RGB converter, color code converter",
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

        <HexToRGB />
      </div>
    </div>
  )
}
