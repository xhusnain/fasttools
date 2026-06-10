import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const CssGradientGenerator = dynamic(
  () => import("@/components/dev-tools/css-gradient-generator").then((mod) => mod.CssGradientGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "CSS Gradient Generator",
  description:
    "Create linear, radial, and conic CSS gradients with live preview, editable color stops, presets, and copy-ready CSS, Tailwind, and SCSS output.",
  metaTitle: "CSS Gradient Generator - Linear, Radial & Conic | FastTools",
  metaDescription:
    "Build CSS gradients visually. Edit color stops, angle, radial shape and size, then copy CSS, SCSS, or Tailwind classes for simple linear gradients. Includes 20 presets.",
  path: "/dev-tools/css-gradient-generator",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "CSS gradient generator for linear-gradient(), radial-gradient(), and conic-gradient() values with live preview, color-stop controls, 20 presets, random generation, and copy-ready CSS/SCSS output.",
    featureList: [
      "Linear, radial, and conic gradient modes",
      "Editable color stops with hex inputs and position sliders",
      "Angle controls for linear and conic gradients",
      "Radial shape and size controls",
      "20 built-in gradient presets",
      "Random two- or three-color gradient generation",
      "Copy CSS background property or value only",
      "SCSS variable output",
      "Tailwind class output for simple linear gradients",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    operatingSystem: "Any",
    alternateName: [
      "CSS Gradient Maker",
      "Linear Gradient Generator",
      "Radial Gradient Generator",
      "Conic Gradient Generator",
      "Gradient Background Generator",
      "Tailwind Gradient Generator",
      "SCSS Gradient Tool",
      "Multi-Stop Gradient Editor",
      "Color Stop Editor",
      "Hero Background Generator",
    ],
  },

  header: {
    title: "Free CSS Gradient Generator",
    description:
      "Build linear, radial, and conic gradients visually. Edit stops, tune angles, load a preset, then copy the generated CSS, SCSS, or Tailwind output.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "CSS Gradient Generator", href: "/dev-tools/css-gradient-generator" },
  ],

  content: {
    definition:
      "A CSS gradient generator is a visual tool that creates CSS linear-gradient(), radial-gradient(), or conic-gradient() code from selected colors, stop positions, angle, and shape settings.",

    quickAnswer:
      "Choose Linear, Radial, or Conic, adjust the color stops and angle or shape controls, then copy the generated background CSS. Use the Tailwind tab for simple linear gradients and the CSS tab for radial, conic, or complex multi-stop gradients.",

    keyTakeaways: [
      "Supports linear-gradient(), radial-gradient(), and conic-gradient() output.",
      "Each color stop has a hex color field and a 0-100% position slider.",
      "Linear and conic gradients include angle controls from 0 to 360 degrees.",
      "Radial gradients include ellipse/circle and size keyword controls.",
      "Tailwind output is best for two- or three-stop linear gradients; use CSS output for radial, conic, and more complex gradients.",
    ],

    overview:
      "This online CSS gradient generator helps frontend developers and designers create gradient backgrounds without manually writing every color stop. Start with a linear, radial, or conic gradient, use the live preview to adjust colors and positions, and copy the final code into CSS, JSX, or an SCSS file. The tool is especially useful for hero backgrounds, button styles, cards, text-gradient experiments, and quick design-system tokens.",

    howToSteps: [
      "Choose Linear, Radial, or Conic as the gradient type.",
      "Use the color pickers, hex fields, and stop sliders to set each color and position.",
      "For linear or conic gradients, adjust the angle or use one of the angle presets.",
      "For radial gradients, choose ellipse or circle and the radial size keyword.",
      "Load one of the 20 presets or click Random if you want a quick starting point.",
      "Copy CSS, value-only CSS, Tailwind classes, or SCSS output depending on where you will paste the gradient.",
    ],

    features: [
      {
        title: "Three Native CSS Gradient Types",
        description:
          "Generate linear-gradient, radial-gradient, and conic-gradient values from one editor, with controls that match each gradient type.",
      },
      {
        title: "Color Stop Editor",
        description:
          "Add multiple stops, edit each stop's hex color, and set exact stop percentages with sliders so the transition lands where you expect.",
      },
      {
        title: "Angle and Radial Controls",
        description:
          "Use exact angle values for linear and conic gradients, or configure radial gradients with circle/ellipse and closest/farthest size keywords.",
      },
      {
        title: "20 Presets and Random Starts",
        description:
          "Load ready-made presets such as Sunset, Ocean, Aurora, Fire, and Conic Rainbow, or generate a random two- or three-stop gradient.",
      },
      {
        title: "CSS, SCSS, and Tailwind Output",
        description:
          "Copy a complete CSS background declaration, the gradient value only, an SCSS variable block, or Tailwind classes for simple linear gradients.",
      },
    ],

    useCases: [
      "Create CSS hero backgrounds without exporting image assets.",
      "Generate button, card, and section gradients for frontend prototypes.",
      "Build conic-gradient progress rings and radial highlight effects.",
      "Copy SCSS variables for reusable design-system gradient tokens.",
      "Translate a two- or three-color linear gradient into Tailwind arbitrary color classes.",
    ],

    aboutTool:
      "The generator outputs standard CSS gradient syntax and updates the preview as you edit. Tailwind output is intentionally narrow: it creates class strings for linear gradients using from/via/to color utilities when the stop count is simple. For radial gradients, conic gradients, or gradients with many stops, copy the CSS output and use it directly in a stylesheet or as a Tailwind arbitrary background value.",

    proTip:
      "If a two-color gradient looks dull in the middle, add a third color stop around 50%. This gives the browser a better midpoint to blend through than relying on the default sRGB interpolation alone.",

    faqs: [
      {
        question: "What CSS gradient types can I generate?",
        answer:
          "You can generate linear-gradient(), radial-gradient(), and conic-gradient() values with editable colors and stop positions.",
      },
      {
        question: "Can I make a gradient with more than two colors?",
        answer:
          "Yes. Use Add Stop to add another color stop, then set its color and percentage position. The output includes every stop in order.",
      },
      {
        question: "Does the Tailwind output work for every gradient?",
        answer:
          "No. The Tailwind tab is designed for simple linear gradients. For radial, conic, custom angles, or many stops, use the CSS output or paste the value into a Tailwind arbitrary background class.",
      },
      {
        question: "Can I create transparent gradients?",
        answer:
          "The editor uses standard 6-digit hex color inputs. To use transparency, copy the CSS output and manually replace a stop with transparent, rgba(), or another CSS color format that includes alpha.",
      },
      {
        question: "Where should I paste the generated CSS?",
        answer:
          "Paste the full background declaration into a CSS rule, or copy only the gradient value if your framework already provides the background property.",
      },
    ],

    relatedTools: [
      { name: "Color Palette Generator", href: "/dev-tools/color-palette" },
      { name: "Hex to RGB Converter", href: "/dev-tools/hex-to-rgb" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Open Graph Meta Generator", href: "/seo-tools/meta-tags" },
      { name: "Schema Markup Generator", href: "/seo-tools/schema-markup-generator" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CssGradientGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<CssGradientGenerator />)} />
}
