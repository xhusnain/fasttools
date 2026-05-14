import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const HexToRGB = dynamic(
  () => import("@/components/image/hex-to-rgb").then((mod) => mod.HexToRGB),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Color Converter",
  description:
    "Convert color values between HEX, RGB, and HSL formats for frontend and design workflows.",
  metaTitle: "HEX to RGB Converter — HEX / RGB / HSL / OKLCH Color Converter",
  metaDescription:
    "Free color converter: HEX ↔ RGB ↔ HSL ↔ HSV ↔ OKLCH. Live color swatch preview, alpha channel (rgba/hsla), 3-digit and 6-digit hex support, named CSS colors. Copy CSS-ready output. 100% client-side.",
  path: "/dev-tools/hex-to-rgb",

  header: {
    title: "HEX to RGB Color Converter",
    description:
      "Convert hex color codes (#FF5733) to RGB (255, 87, 51) and HSL values with a live color preview. Supports 3-digit and 6-digit hex codes. Copy CSS-ready values instantly.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HEX to RGB Converter", href: "/dev-tools/hex-to-rgb" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Convert color values between HEX, RGB, HSL, HSV, and OKLCH formats. Live swatch preview, alpha channel (rgba / hsla), 3-digit and 6-digit hex support, named CSS color conversion. 100% client-side.",
    alternateName: [
      "Color Converter",
      "RGB to HEX",
      "HEX to HSL",
      "HSL to RGB",
      "HSL to HEX",
      "OKLCH Converter",
      "Color Format Converter",
      "CSS Color Tool",
      "Tailwind Color Converter",
      "HSV to RGB Converter",
      "Color Picker",
      "Named CSS Color Lookup",
      "rgba to hex",
      "Color Code Translator",
      "Figma to CSS Color",
    ],
    featureList: [
      "Bi-directional conversion: HEX ↔ RGB ↔ HSL ↔ HSV ↔ OKLCH",
      "Live color swatch preview updates as you type",
      "Alpha channel support: rgba() / hsla() / 8-digit hex (#RRGGBBAA)",
      "Accepts 3-digit shorthand (#F00) and 6-digit (#FF0000) hex codes",
      "Recognizes 147 named CSS colors (red, dodgerblue, mediumseagreen, etc.)",
      "OKLCH (CSS Color Level 4) support — perceptually uniform color space",
      "Copy each format with one click — CSS-ready, no parens for Tailwind config",
      "Color name suggestion: shows the closest named CSS color for any value",
      "Tailwind / Material / Bootstrap palette suggestions for any hex",
      "Contrast check vs white and black backgrounds (WCAG AA / AAA rating)",
      "100% client-side — colors processed in your browser",
      "Free, no signup, no rate limit",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "13420",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Hex to RGB Converter is a free tool that converts hexadecimal color codes to RGB values and RGB values back to hex codes with a visual color preview.",
    quickAnswer:
      "Enter a hex color code (#FF5733) to see its RGB equivalent (255, 87, 51), or input RGB values to get the hex code. Includes a live color preview and support for HSL conversion.",
    keyTakeaways: [
      "Converts #hex to rgb() and rgb() to #hex instantly",
      "Live color swatch preview updates in real time",
      "Supports 3-digit (#F00) and 6-digit (#FF0000) hex codes",
      "Also converts to HSL (hue, saturation, lightness) values",
      "CSS uses hex in stylesheets and rgb() in JavaScript — both are interchangeable",
    ],
    overview:
      "Convert colors between hex, RGB, and HSL formats with this free online converter. Enter a hex color code (like #FF5733 or #F00) to instantly see its RGB (255, 87, 51) and HSL (11°, 100%, 60%) equivalents with a live color swatch preview. Also works in reverse — enter RGB or HSL values to get the hex code. Useful for translating colors between design tools (Figma, Sketch) and CSS code, building design token systems, and ensuring color consistency across frontend implementations.",

    howToSteps: [
      "Enter any supported color value format.",
      "Review converted values across HEX, RGB, and HSL outputs.",
      "Copy the target format for your CSS or design token usage.",
      "Repeat with additional palette values as needed.",
    ],

    features: [
      "Bi-directional color conversions",
      "Support for common web color formats",
      "Quick copy workflow",
      "Useful for CSS and design token tasks",
      "Browser-based tool access",
    ],

    useCases: [
      "Frontend style implementation",
      "Design-to-code handoff",
      "Theme and token system setup",
      "Color consistency validation",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why So Many Color Formats?</h3>
          <p>
            CSS and design tools use different color formats because each one optimizes for different use cases. <strong>HEX</strong> (#FF5733) is compact and historical — it&apos;s how every computer color was specified for decades. <strong>RGB</strong> (red, green, blue 0-255) directly represents how monitors render light. <strong>HSL</strong> (hue, saturation, lightness) matches human perception — adjusting lightness creates intuitive tints / shades. <strong>HSV</strong> (hue, saturation, value) is similar but more intuitive for picking colors. <strong>OKLCH</strong> is the modern perceptually-uniform space — equal numeric changes produce equal visual changes. <strong>LAB</strong> is the absolute color space used in print and high-end design. Most workflows use multiple formats: HEX for storage / serialization, HSL for programmatic color manipulation, OKLCH for accessibility-conscious design tokens.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Color Format Conversion Matrix</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Format</th>
                <th className="text-left py-2 px-2 text-foreground">Syntax</th>
                <th className="text-left py-2 px-2 text-foreground">Range</th>
                <th className="text-left py-2 px-2 text-foreground">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>HEX</strong></td>
                <td className="py-2 px-2">#RRGGBB</td>
                <td className="py-2 px-2">00-FF per channel</td>
                <td className="py-2 px-2">Storage, CSS, design files</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">HEX 8-digit</td>
                <td className="py-2 px-2">#RRGGBBAA</td>
                <td className="py-2 px-2">00-FF per channel + alpha</td>
                <td className="py-2 px-2">Colors with transparency</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>RGB</strong></td>
                <td className="py-2 px-2">rgb(R, G, B)</td>
                <td className="py-2 px-2">0-255 per channel</td>
                <td className="py-2 px-2">JavaScript, programmatic color</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">RGBA</td>
                <td className="py-2 px-2">rgba(R, G, B, A)</td>
                <td className="py-2 px-2">0-255 RGB + 0-1 alpha</td>
                <td className="py-2 px-2">Translucent colors in CSS</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>HSL</strong></td>
                <td className="py-2 px-2">hsl(H, S%, L%)</td>
                <td className="py-2 px-2">0-360°, 0-100%, 0-100%</td>
                <td className="py-2 px-2">Tints, shades, theme generation</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">HSV / HSB</td>
                <td className="py-2 px-2">hsv(H, S%, V%)</td>
                <td className="py-2 px-2">0-360°, 0-100%, 0-100%</td>
                <td className="py-2 px-2">Color pickers (Photoshop, GIMP)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>OKLCH</strong></td>
                <td className="py-2 px-2">oklch(L% C H)</td>
                <td className="py-2 px-2">0-100%, 0-0.4+, 0-360°</td>
                <td className="py-2 px-2">Modern design tokens, accessibility</td>
              </tr>
              <tr>
                <td className="py-2 px-2">CMYK</td>
                <td className="py-2 px-2">cmyk(C%, M%, Y%, K%)</td>
                <td className="py-2 px-2">0-100% per channel</td>
                <td className="py-2 px-2">Print design (Adobe / InDesign)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">HEX Format Variations</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>6-digit hex (#FF0000):</strong> standard — 2 hex chars per channel (Red, Green, Blue)</li>
            <li><strong>3-digit shorthand (#F00):</strong> each char doubled — #F00 = #FF0000. Only works when each channel has two identical hex digits.</li>
            <li><strong>8-digit hex (#FF000080):</strong> 6-digit + 2-char alpha. Modern browsers (Chrome 62+, Firefox 49+, Safari 9.1+). #FF000080 = red with 50% opacity.</li>
            <li><strong>4-digit shorthand (#F008):</strong> 3-digit + 1-char alpha — #F008 = #FF000088 = red ~53% opaque.</li>
            <li><strong>Case insensitive:</strong> #ff0000 = #FF0000 = #Ff0000. Lowercase is most common in code; uppercase in print/design.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Quick Conversion Formulas</h3>
          <p><strong>HEX → RGB:</strong> split into 3 pairs, convert each pair from base-16 to base-10:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`#FF5733 → FF=255, 57=87, 33=51 → rgb(255, 87, 51)`}</code>
          </pre>
          <p className="mt-3"><strong>RGB → HSL:</strong> more complex — normalize to 0-1, find max/min, derive hue from dominant channel:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`L = (max + min) / 2
S = (max - min) / (1 - |2L - 1|)   if L > 0.5
S = (max - min) / (max + min)       otherwise
H = depends on which channel is max (see CSS Color spec)`}</code>
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When to Use Each Format in Code</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Use HEX:</strong> static CSS, design tokens, Tailwind config, Figma/Sketch exports. Most compact for storage.</li>
            <li><strong>Use RGB / RGBA:</strong> programmatic JavaScript color manipulation, CSS-in-JS (styled-components, emotion), when you need to vary alpha.</li>
            <li><strong>Use HSL:</strong> theme generation (adjust just lightness for hover states), creating tints / shades programmatically.</li>
            <li><strong>Use OKLCH:</strong> modern design systems, accessibility-first palettes, color interpolation that looks smooth.</li>
            <li><strong>Use CSS color-mix() with HSL/OKLCH:</strong> mix colors programmatically: <code>color-mix(in oklch, var(--brand) 50%, white)</code>.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Accessibility: WCAG Contrast</h3>
          <p>
            Converting color formats is often part of accessibility work. WCAG 2.1 requires <strong>4.5:1 contrast ratio</strong> between text and background for AA compliance (3:1 for large text 18pt+). The contrast ratio is calculated using <strong>relative luminance</strong> — a perceptually-weighted version of brightness. RGB matters here: not all colors with the same lightness in HSL have the same contrast against white! Yellow (#FFFF00) and blue (#0000FF) have the same HSL lightness (50%) but radically different contrast against white. Always test the actual contrast ratio, not just &quot;light enough lightness.&quot;
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">CSS Color Level 4 New Features</h3>
          <p>
            Modern browsers (Chrome 111+, Firefox 113+, Safari 15.4+) support CSS Color Level 4 with new features:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>oklch() / oklab() / lab() / lch():</strong> perceptually uniform color spaces</li>
            <li><strong>color() function:</strong> use specific color spaces like sRGB, P3, ProPhoto</li>
            <li><strong>color-mix():</strong> mix two colors programmatically with chosen interpolation space</li>
            <li><strong>Display P3:</strong> wide-gamut colors that show on modern displays (iPhones, MacBooks)</li>
            <li><strong>HD color (HDR):</strong> emerging support for high dynamic range colors</li>
            <li><strong>Relative colors:</strong> <code>oklch(from var(--brand) calc(l + 0.1) c h)</code> — derive colors from other colors</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "For design systems, store your canonical color values in hex and derive RGB/HSL programmatically. Use HSL for dynamic theme generation — adjusting lightness creates consistent tints and shades without manual color picking.",

    faqs: [
      {
        question: "How do I convert hex to RGB?",
        answer:
          "Enter a hex color code (e.g., #FF5733) in the input field. The tool instantly shows the RGB equivalent: rgb(255, 87, 51). Copy the value for use in CSS, JavaScript, or design tools.",
      },
      {
        question: "Can I convert RGB back to hex?",
        answer:
          "Yes. Enter RGB values (e.g., 255, 87, 51) and the tool generates the hex code (#FF5733). The converter works in both directions.",
      },
      {
        question: "What is the difference between hex, RGB, and HSL?",
        answer:
          "Hex (#FF5733) is a compact 6-character format used in CSS. RGB (255, 87, 51) represents Red, Green, Blue channel values 0-255. HSL (11°, 100%, 60%) uses Hue (0-360°), Saturation (0-100%), Lightness (0-100%) which is more intuitive for adjusting colors.",
      },
      {
        question: "Does this support 3-digit hex shorthand?",
        answer:
          "Yes. 3-digit hex codes like #F00 are automatically expanded to their 6-digit equivalent (#FF0000) for accurate conversion.",
      },
      {
        question: "Can I use converted values in Tailwind CSS?",
        answer:
          "Yes. Copy the hex value and paste it into your tailwind.config.js theme colors. Tailwind accepts hex, RGB, and HSL values in its configuration.",
      },
      {
        question: "Is this hex to RGB converter free?",
        answer:
          "Yes. Completely free with no registration, no limits, and instant conversion in your browser.",
      },
    ],

    relatedTools: [
      { name: "Color Palette Generator", href: "/dev-tools/color-palette" },
      { name: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HexToRgbPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HexToRGB />
        </div>
      )}
    />
  )
}
