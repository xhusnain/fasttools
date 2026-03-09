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
  metaTitle: "Color Palette Generator — Create Color Schemes Online Free (2026)",
  metaDescription:
    "Free color palette generator. Create harmonious color schemes — complementary, analogous, triadic, monochromatic. Copy hex, RGB, HSL values for CSS and design. No signup required.",
  path: "/dev-tools/color-palette",

  header: {
    title: "Color Palette Generator",
    description:
      "Generate harmonious color palettes using color theory — complementary, analogous, triadic, and monochromatic schemes. Pick a base color or enter a hex code, copy values in hex, RGB, or HSL for CSS and design.",
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
      "Create beautiful color palettes with this free online generator. Pick a base color or enter a hex code to generate harmonious color schemes based on color theory — complementary, analogous, triadic, split-complementary, tetradic, and monochromatic relationships. Lock colors you like and regenerate the rest to explore variations. Copy colors as hex, RGB, or HSL values ready for CSS, Tailwind, Figma, or any design tool. Useful for web design, branding, UI theme creation, presentation styling, and social media graphics.",

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

    aboutTool:
      "Color harmony is based on mathematical relationships between hues on the color wheel. Complementary colors (opposite on the wheel) create high contrast and visual impact. Analogous colors (adjacent) feel natural and cohesive. Triadic colors (evenly spaced by 120°) offer vibrant balanced palettes. Monochromatic schemes use tints, tones, and shades of a single hue for elegant simplicity. This generator applies these rules to your chosen base color and produces ready-to-use palettes. All generated colors can be exported as hex (#FF5733), RGB (rgb(255, 87, 51)), or HSL (hsl(11, 100%, 60%)) for CSS stylesheets, design tokens, and Tailwind config files.",

    proTip:
      "Always check contrast ratios between text and background colors for WCAG accessibility compliance. A beautiful palette that fails contrast checks will cause readability issues. Use a 4.5:1 minimum ratio for body text and 3:1 for large headings.",

    faqs: [
      {
        question: "What color scheme types can I generate?",
        answer:
          "Complementary (opposite hues), analogous (adjacent hues), triadic (3 evenly spaced), split-complementary, tetradic (4 colors), and monochromatic (tints/shades of one hue).",
      },
      {
        question: "Can I copy colors as hex, RGB, and HSL?",
        answer:
          "Yes. Click on any color in the palette to copy its value in hex, RGB, or HSL format — ready for CSS, design tools, or code.",
      },
      {
        question: "How do I build a palette for my brand?",
        answer:
          "Start with your primary brand color as the base, then generate complementary or analogous schemes for secondary and accent colors. Test the palette in context with your actual UI or brand materials before finalizing.",
      },
      {
        question: "Can I lock colors while regenerating the palette?",
        answer:
          "Yes. Lock any color you like, then regenerate the rest. This lets you explore variations while keeping your favorite colors fixed.",
      },
      {
        question: "Is this useful for Tailwind CSS or CSS variables?",
        answer:
          "Yes. Copy hex or HSL values directly into your Tailwind config (theme.extend.colors) or CSS custom properties (--primary: #hex).",
      },
      {
        question: "Is this color palette generator free?",
        answer:
          "Yes. Completely free with no registration, no limits, and no watermarks on generated palettes.",
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
