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
  metaTitle: "HEX to RGB Converter (HEX/RGB/HSL)",
  metaDescription:
    "Convert colors between HEX, RGB, and HSL with copy-ready output for CSS and design implementation.",
  path: "/dev-tools/hex-to-rgb",
  keywords: [
    "hex to rgb converter",
    "rgb to hex converter",
    "hsl color converter",
    "css color converter",
    "color format tool",
  ],

  header: {
    title: "HEX to RGB Converter",
    description:
      "Switch between common color formats for development and design implementation.",
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
      "Use this converter to switch color values between HEX, RGB, and HSL representations. It helps maintain consistency between design files and frontend CSS implementation.",

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
        <p>
          Color conversion tools rank best when they prioritize instant format
          translation and reliable copy workflows. This page is optimized for
          that practical intent.
        </p>
        <p>
          It is especially useful when translating palette decisions from design
          tools into production-ready style definitions.
        </p>
      </div>
    ),

    proTip:
      "Store canonical palette values in a token system and generate secondary formats from those source values.",

    faqs: [
      {
        question: "Can I convert RGB back to HEX?",
        answer:
          "Yes. The tool supports conversion in both directions.",
      },
      {
        question: "Does this support HSL conversion too?",
        answer:
          "Yes. HSL values are available alongside HEX and RGB outputs.",
      },
      {
        question: "Why do my converted colors look different?",
        answer:
          "Visual differences may come from alpha handling, color profile differences, or surrounding UI context.",
      },
      {
        question: "Can I use this for CSS variables?",
        answer:
          "Yes. Copy the desired format and apply it directly in your style system.",
      },
      {
        question: "Is this useful for design tokens?",
        answer:
          "Yes. It helps derive alternate representations used across frameworks and tooling.",
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
