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
  toolName: "HEX to RGB Converter",
  description:
    "Convert color values between HEX, RGB, HSL, RGBA, and HSLA formats with a live color preview and one-click copy buttons.",
  metaTitle: "HEX to RGB Converter - HEX, RGB, HSL, RGBA",
  metaDescription:
    "Free HEX to RGB converter. Convert 6-digit hex colors to RGB and HSL, enter RGB or HSL values in reverse, set alpha, preview the color, and copy CSS-ready values.",
  path: "/dev-tools/hex-to-rgb",

  header: {
    title: "HEX to RGB Color Converter",
    description:
      "Convert 6-digit hex colors to RGB and HSL, or enter RGB/HSL values to get the matching hex code. Preview the color and copy CSS-ready values instantly.",
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
      "Browser color converter for 6-digit HEX, RGB, HSL, RGBA, HSLA, and CSS variable output with live swatch preview and copy buttons.",
    alternateName: [
      "Color Converter",
      "RGB to HEX",
      "HEX to HSL",
      "HSL to RGB",
      "HSL to HEX",
    ],
    featureList: [
      "Convert 6-digit HEX to RGB and HSL",
      "Convert RGB values back to HEX and HSL",
      "Convert HSL values back to HEX and RGB",
      "Alpha slider for RGBA and HSLA output",
      "Live color preview",
      "Quick sample colors",
      "Copy HEX, RGB, RGBA, HSL, HSLA, and CSS variable output",
    ],
    softwareRequirements: "Modern web browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A HEX to RGB converter turns a hexadecimal CSS color such as #2563eb into red, green, and blue channel values such as rgb(37, 99, 235), while also showing related HSL values.",

    quickAnswer:
      "Enter a 6-digit hex color like #2563eb to get rgb(37, 99, 235), hsl(217, 83%, 53%), rgba(), hsla(), and a CSS variable line. You can also enter RGB or HSL values to convert back to hex.",

    keyTakeaways: [
      "Converts 6-digit #RRGGBB hex colors to RGB and HSL.",
      "RGB inputs accept channel values from 0 to 255.",
      "HSL inputs accept hue 0-360 and saturation/lightness 0-100.",
      "Alpha is handled separately for rgba() and hsla() output.",
      "The current tool does not parse named colors, 3-digit shorthand, 8-digit alpha hex, HSV, CMYK, LAB, or OKLCH.",
    ],

    overview:
      "Use this color converter when you need to move between design handoff values and CSS code. Paste a 6-digit hex value, pick one of the sample colors, or enter RGB/HSL numbers manually. The preview updates with the current color, and the output section gives copy buttons for common CSS formats including hex, rgb(), rgba(), hsl(), hsla(), and a CSS custom property.",

    howToSteps: [
      "Choose the Hex, RGB, or HSL tab.",
      "Enter a 6-digit hex code or the numeric RGB/HSL channel values.",
      "Adjust the alpha value if you need rgba() or hsla() output.",
      "Check the live swatch to confirm the color.",
      "Copy the format you need for CSS, JavaScript, or a design token file.",
    ],

    features: [
      {
        title: "HEX, RGB, and HSL Inputs",
        description:
          "Convert from a hex color field, three RGB channel fields, or three HSL channel fields and keep the other formats in sync.",
      },
      {
        title: "RGBA and HSLA Output",
        description:
          "Set opacity from 0 to 1 and copy rgba() or hsla() values without changing the base color conversion.",
      },
      {
        title: "Live Swatch Preview",
        description:
          "See the selected color and opacity as you type, with quick sample colors for common UI states.",
      },
      {
        title: "Copy CSS Values",
        description:
          "Copy individual HEX, RGB, RGBA, HSL, HSLA, or CSS custom property output values with one click.",
      },
    ],

    useCases: [
      "Convert a Figma or design-system hex token into rgb() for CSS-in-JS.",
      "Turn RGB values from browser DevTools into a reusable hex token.",
      "Create rgba() or hsla() values for translucent overlays.",
      "Check HSL hue, saturation, and lightness before building hover colors.",
      "Copy a CSS custom property line for a theme file.",
    ],

    aboutTool:
      "This converter focuses on the formats used most often in everyday frontend work: 6-digit hex, RGB, HSL, RGBA, HSLA, and CSS variables. It intentionally avoids claiming broader color-space support that the current component does not parse, such as OKLCH, LAB, CMYK, HSV, named CSS colors, or palette matching.",

    proTip:
      "For CSS variables, store the stable brand color as hex, then keep RGB or HSL values nearby only when you need opacity or programmatic lightness adjustments.",

    faqs: [
      {
        question: "How do I convert hex to RGB?",
        answer:
          "Enter a 6-digit hex color such as #ff5733 in the Hex tab. The RGB output updates immediately, for example rgb(255, 87, 51).",
      },
      {
        question: "Can I convert RGB back to hex?",
        answer:
          "Yes. Open the RGB tab, enter red, green, and blue values from 0 to 255, and the tool calculates the matching hex and HSL values.",
      },
      {
        question: "Does this support 3-digit hex shorthand?",
        answer:
          "No. The current input expects 6-digit hex values like #ff0000. Expand shorthand colors before entering them.",
      },
      {
        question: "How is alpha handled?",
        answer:
          "Alpha is set with a separate 0-1 opacity control and is included in the rgba() and hsla() outputs. The base hex output remains a 6-digit color.",
      },
      {
        question: "Does this convert OKLCH, HSV, or named CSS colors?",
        answer:
          "No. This page currently converts between HEX, RGB, and HSL families only.",
      },
    ],

    relatedTools: [
      { name: "Color Palette Generator", href: "/dev-tools/color-palette-generator" },
      { name: "CSS Gradient Generator", href: "/dev-tools/css-gradient-generator" },
      { name: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Open Graph Meta Generator", href: "/seo-tools/meta-tags" },
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
