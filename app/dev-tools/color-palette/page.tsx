import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const ColorPaletteGenerator = dynamic(
  () => import("@/components/image/color-palette-generator").then((mod) => mod.ColorPaletteGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Color Palette Generator",
  description:
    "Generate and refine color palettes with copy-ready hex values for UI and brand workflows.",
  metaTitle: "Color Palette Generator (HEX Palette Tool)",
  metaDescription:
    "Create random and curated color palettes for web and product design. Copy hex colors and iterate combinations quickly.",
  path: "/dev-tools/color-palette",
  keywords: [
    "color palette generator",
    "hex color palette",
    "ui color palette tool",
    "color scheme generator",
    "design palette creator",
  ],

  header: {
    title: "Color Palette Generator",
    description:
      "Build and iterate palette sets for interfaces, branding, and visual systems.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Color Palette Generator", href: "/dev-tools/color-palette" },
  ],

  schemaOptions: {
    applicationCategory: "DesignApplication",
    description:
      "Generate color palettes and copy hex values for UI, branding, and visual design use cases.",
    featureList: [
      "Palette generation",
      "Hex color copy",
      "Palette iteration",
      "Design workflow support",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Color Palette Generator is a free tool that creates harmonious color schemes from a base color using color theory rules like complementary, analogous, and triadic relationships.",
    quickAnswer:
      "Pick a base color or enter a hex code to instantly generate color palettes. Choose from complementary, analogous, triadic, split-complementary, and monochromatic schemes. Copy hex, RGB, or HSL values for each color.",
    keyTakeaways: [
      "Generates palettes using color theory: complementary, analogous, triadic, tetradic",
      "Pick any base color with the color picker or enter hex/RGB values",
      "Export colors as hex, RGB, or HSL for CSS and design tools",
      "Monochromatic palettes use tints and shades of a single hue",
      "Useful for web design, branding, UI themes, and presentation styling",
    ],
    overview:
      "Use this palette tool to generate color combinations and quickly test visual directions for interfaces, brand systems, and content design work.",

    howToSteps: [
      "Generate a palette set from the tool controls.",
      "Lock or keep preferred colors while regenerating others.",
      "Copy hex values for CSS, design tokens, or style guides.",
      "Iterate and export your final palette choices.",
    ],

    features: [
      "Random palette generation",
      "Fast hex code extraction",
      "Iterative design workflow",
      "Useful for UI and branding tasks",
      "Browser-native tool access",
    ],

    useCases: [
      "Product UI color systems",
      "Brand identity exploration",
      "Landing page style direction",
      "Design handoff to development",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Palette generators rank well when they combine immediate visual output
          with practical export behavior. This page is optimized for that
          designer/developer intent.
        </p>
        <p>
          Use it to shorten exploration cycles and move from inspiration to
          implementation-ready color values quickly.
        </p>
      </div>
    ),

    proTip:
      "Validate contrast and readability in your actual UI before finalizing any palette for production.",

    faqs: [
      {
        question: "Can I copy hex values directly?",
        answer:
          "Yes. The palette workflow supports quick extraction of hex values for implementation.",
      },
      {
        question: "Is this useful for branding and UI both?",
        answer:
          "Yes. It supports early-stage palette exploration for brand and product interfaces.",
      },
      {
        question: "Should I rely on random palettes alone?",
        answer:
          "Random generation is a starting point; final palettes should be tested for accessibility and context fit.",
      },
      {
        question: "Can this replace full design tools?",
        answer:
          "It complements design tools by speeding up palette ideation and extraction.",
      },
      {
        question: "Does this help with developer handoff?",
        answer:
          "Yes. Copy-ready color values make it easier to transfer palette decisions into code.",
      },
    ],

    relatedTools: [
      { name: "Hex to RGB Converter", href: "/dev-tools/hex-to-rgb" },
      { name: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ColorPalettePage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <ColorPaletteGenerator />
        </div>
      )}
    />
  )
}
