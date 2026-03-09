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
  metaTitle: "HEX to RGB Converter — Convert Hex Colors to RGB & HSL Free (2026)",
  metaDescription:
    "Free hex to RGB converter. Convert hex color codes to RGB and HSL values with live preview. Supports 3-digit and 6-digit hex. Copy CSS-ready output instantly.",
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
      "Convert color values between HEX, RGB, and HSL formats for web and product design workflows.",
    featureList: [
      "HEX to RGB conversion",
      "RGB to HEX conversion",
      "HSL support",
      "Copy-ready output",
    ],
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

    aboutTool:
      "CSS and design tools use different color formats. CSS stylesheets commonly use hex codes (#FF5733), JavaScript and CSS-in-JS use rgb(255, 87, 51), and modern CSS uses hsl(11, 100%, 60%) for more intuitive color manipulation. Figma and Sketch export colors in hex, while Tailwind CSS config files accept hex, RGB, or HSL. This converter translates between all three formats instantly with a live color swatch so you can visually confirm the color. Supports both 3-digit shorthand (#F00) and 6-digit (#FF0000) hex codes. Alpha channel support converts to rgba() and hsla() formats.",

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
