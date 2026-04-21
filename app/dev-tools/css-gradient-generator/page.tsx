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
  description: "Free online CSS gradient generator. Create beautiful linear, radial, and conic CSS gradients with a live visual editor. Copy ready-to-use CSS, Tailwind, and SCSS code instantly.",
  metaTitle: "CSS Gradient Generator — Linear, Radial & Conic | FastTools",
  metaDescription: "Free CSS gradient generator. Create linear, radial & conic CSS gradients visually. Export CSS code + Tailwind classes + SCSS instantly. 20+ presets. No signup.",
  path: "/dev-tools/css-gradient-generator",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description: "Free CSS gradient generator with live preview. Supports linear, radial, and conic gradient types with multi-stop color editing, angle control, 20+ presets, and one-click copy of CSS, Tailwind, and SCSS output.",
    featureList: [
      "Linear, radial, and conic gradient types",
      "Visual color stop editor with drag-friendly sliders",
      "Angle control for linear and conic gradients",
      "Radial gradient shape and size control",
      "20+ curated gradient presets",
      "Random gradient generator",
      "Live CSS preview",
      "Copy as plain CSS, Tailwind classes, or SCSS variable",
      "No login required, 100% free",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    operatingSystem: "Any",
  },

  header: {
    title: "Free CSS Gradient Generator",
    description: "Build linear, radial, and conic CSS gradients visually. Edit color stops, adjust angles, pick from 20+ presets, then copy your gradient as CSS, Tailwind, or SCSS — instantly.",
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
      "A CSS gradient generator is a browser-based tool that lets developers visually configure multi-stop color gradients and export the resulting CSS linear-gradient(), radial-gradient(), or conic-gradient() declaration for immediate use in stylesheets.",

    quickAnswer:
      "Use our CSS gradient generator to select a gradient type (linear, radial, or conic), adjust color stops and angle, then click Copy CSS to get the ready-to-paste background property value.",

    keyTakeaways: [
      "CSS gradients are created with linear-gradient(), radial-gradient(), or conic-gradient() functions.",
      "A linear gradient flows along a straight line; a radial gradient emanates from a center point; a conic gradient sweeps around a pivot.",
      "Color stops define where each color starts and ends along the gradient axis.",
      "Gradients are specified in the background or background-image CSS property.",
      "All modern browsers (Chrome, Firefox, Safari, Edge) fully support CSS gradients with no prefix required.",
      "Tailwind CSS provides from-*, via-*, and to-* utilities for linear gradients; arbitrary values cover conic and radial cases.",
    ],

    overview: (
      <span>
        CSS gradients allow developers to create smooth color transitions directly in the browser without image files,
        reducing page load times and enabling infinite resolution scaling. Our free CSS gradient generator provides a
        visual editor for all three CSS gradient types: <strong>linear-gradient</strong>,{" "}
        <strong>radial-gradient</strong>, and <strong>conic-gradient</strong>. Add as many color stops as you need,
        fine-tune positions with per-stop sliders, set the gradient angle, and watch the live preview update in real
        time. When you&apos;re happy with the result, copy the output in the format that matches your stack — plain CSS,
        Tailwind utility classes, or a SCSS variable.
      </span>
    ),

    howToSteps: [
      "Choose a gradient type: Linear, Radial, or Conic.",
      "Select color stops using the color pickers and adjust each stop's position with the slider.",
      "For linear and conic gradients, set the angle using the slider or click a preset angle button.",
      "For radial gradients, choose the shape (ellipse or circle) and size keyword.",
      "Optionally click a preset thumbnail to load a curated gradient instantly.",
      "Click 'Copy CSS', 'Copy Tailwind Classes', or 'Copy SCSS' to copy the generated code.",
      "Paste the code into your stylesheet or component and you're done.",
    ],

    features: [
      {
        title: "Three Gradient Types",
        description:
          "Switch between linear-gradient, radial-gradient, and conic-gradient with a single click. Each type exposes its own relevant controls — angle for linear/conic, shape and size for radial.",
      },
      {
        title: "Multi-Stop Color Editor",
        description:
          "Add unlimited color stops. Each stop has an independent color picker, hex input, and position slider so you can precisely control where each color begins and ends.",
      },
      {
        title: "Angle Presets",
        description:
          "Quickly apply 45° increments (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°) with one click, or drag the fine-grained slider for any angle between 0° and 360°.",
      },
      {
        title: "20+ Curated Presets",
        description:
          "Browse a gallery of professionally designed presets — Sunset, Ocean, Aurora, Fire, Rainbow, and more. Click any preset to load it instantly and customize from there.",
      },
      {
        title: "CSS, Tailwind & SCSS Output",
        description:
          "Copy your gradient as a CSS background property, Tailwind from-*/via-*/to-* utility classes (with arbitrary value fallback), or a SCSS variable block — all in one click.",
      },
      {
        title: "Random Generator",
        description:
          "Hit the Random button to generate a surprise gradient. Great for inspiration when starting a new design or quickly prototyping color combinations.",
      },
    ],

    useCases: [
      {
        title: "UI Backgrounds & Hero Sections",
        description:
          "Create eye-catching hero backgrounds, card overlays, and section dividers without exporting any image assets.",
      },
      {
        title: "Button & CTA Styling",
        description:
          "Apply linear gradients to call-to-action buttons to add depth and visual interest beyond flat color fills.",
      },
      {
        title: "Text Gradient Effects",
        description:
          "Combine CSS gradient output with background-clip: text to create gradient-colored headings — copy the gradient value and apply it directly.",
      },
      {
        title: "Tailwind Projects",
        description:
          "Generate Tailwind gradient class strings that drop straight into JSX className props, including support for arbitrary hex values.",
      },
      {
        title: "Conic Progress Rings",
        description:
          "Use conic-gradient to build CSS-only progress indicators and pie-chart-style charts without JavaScript.",
      },
      {
        title: "SCSS Design Systems",
        description:
          "Export gradients as SCSS variables to maintain consistency across a design token system and reuse them throughout a component library.",
      },
    ],

    aboutTool: (
      <span>
        This CSS gradient generator was built to cover the full range of modern CSS gradient features in a single,
        fast, client-side tool — no signup, no ads intercepting your workflow, no data sent to a server. Every
        calculation runs directly in your browser. It supports the three native CSS gradient functions specified in the
        CSS Images Module Level 4 specification: <code>linear-gradient()</code>, <code>radial-gradient()</code>, and{" "}
        <code>conic-gradient()</code>. Output is generated according to the latest browser-compatible syntax, so the
        copied code works in all modern browsers without vendor prefixes.
      </span>
    ),

    proTip:
      "To create a gradient that works in Tailwind v3+ with arbitrary colors, use the Tailwind tab output. For 4-stop gradients or complex radial gradients, switch to the CSS tab and paste the value into a Tailwind arbitrary bg-[] class: bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)].",

    faqs: [
      {
        question: "What is a CSS gradient?",
        answer:
          "A CSS gradient is a smooth visual transition between two or more colors, defined entirely in code using functions like linear-gradient(), radial-gradient(), or conic-gradient(). Gradients are applied via the CSS background or background-image property and render at any resolution without quality loss — no image file needed.",
      },
      {
        question: "What is the difference between linear, radial, and conic gradients?",
        answer:
          "A linear-gradient transitions colors along a straight line at a specified angle (e.g. top-to-bottom, left-to-right, diagonal). A radial-gradient radiates from a central point outward in an ellipse or circle shape. A conic-gradient sweeps colors around a pivot point like a color wheel or clock face — commonly used for pie charts and progress rings.",
      },
      {
        question: "How do I use a CSS gradient as a background?",
        answer:
          "Apply the gradient to the background or background-image property. Example: background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); This sets a diagonal purple gradient. Our generator writes this property automatically — just click Copy CSS.",
      },
      {
        question: "How do I make a CSS gradient with multiple colors?",
        answer:
          "Add more color stops using the '+ Add Stop' button in the editor. Each stop defines a color and a position (0%–100%) along the gradient axis. For example: linear-gradient(90deg, red 0%, orange 33%, yellow 66%, green 100%) creates a four-color horizontal gradient.",
      },
      {
        question: "How do I create a transparent or fade-to-transparent gradient?",
        answer:
          "Set one of your color stops to a transparent color. Use a hex value with full transparency like #00000000 (transparent black), or manually type a color with alpha. Example: linear-gradient(to bottom, #667eea, transparent) fades from a solid color to fully transparent.",
      },
      {
        question: "How do I add a gradient to text in CSS?",
        answer:
          "Generate your gradient here, then apply it to text with these three CSS properties: background: linear-gradient(90deg, #f953c6, #b91d73); -webkit-background-clip: text; -webkit-text-fill-color: transparent; The gradient value from this tool works directly with that technique.",
      },
      {
        question: "Do CSS gradients work in all browsers?",
        answer:
          "Yes — linear-gradient and radial-gradient have 99%+ global browser support with no vendor prefix required. conic-gradient is fully supported in all modern browsers (Chrome 69+, Firefox 83+, Safari 12.1+, Edge 79+). The code this tool generates uses standard un-prefixed syntax.",
      },
      {
        question: "How do I use a CSS gradient in Tailwind CSS?",
        answer:
          "Tailwind provides from-{color}, via-{color}, to-{color} utilities paired with a direction class like bg-gradient-to-r. For custom hex colors, use arbitrary values: from-[#667eea] to-[#764ba2]. The Tailwind tab in this generator outputs the correct class string automatically. For radial or conic gradients, use the CSS output inside a bg-[...] arbitrary class.",
      },
      {
        question: "What does the gradient angle control do?",
        answer:
          "For linear gradients, the angle sets the direction of the color flow: 0° flows bottom to top, 90° flows left to right, 180° flows top to bottom, and 135° flows diagonally top-left to bottom-right. For conic gradients, the angle sets the starting rotation of the sweep.",
      },
      {
        question: "Can I export the gradient to SCSS?",
        answer:
          "Yes. Switch to the SCSS tab in the output panel. The generator wraps the gradient value in a $gradient SCSS variable and provides a sample .element { background: $gradient; } block. Copy and paste it into your SCSS partial.",
      },
      {
        question: "Why does my CSS gradient look gray or washed out in the middle?",
        answer:
          "This is known as the 'gray dead zone.' When a linear-gradient transitions between two highly saturated colors on opposite sides of the color wheel (e.g. red to blue), the midpoint passes through an unsaturated gray in sRGB color space. The fix is to add an intermediate color stop — for example, add a purple stop at 50% between red and blue. This gives the browser an explicit midpoint to blend through instead of calculating a desaturated middle value.",
      },
      {
        question: "What is OKLCH and why do OKLCH gradients look better?",
        answer:
          "OKLCH (Oklab Lightness Chroma Hue) is a perceptually uniform color space. When a gradient is interpolated in OKLCH, the perceived brightness stays consistent across the full color transition, eliminating the gray dead zone that sRGB gradients produce. Modern browsers support OKLCH via color(oklch ...) syntax in color-mix() and gradient functions. OKLCH gradients are defined in the CSS Color Level 4 specification.",
      },
      {
        question: "Is this CSS gradient tool free?",
        answer:
          "Yes — completely free with no account required. The generator runs entirely in your browser. No data is collected or sent to any server.",
      },
    ],

    relatedTools: [
      { name: "Color Palette Generator", href: "/dev-tools/color-palette" },
      { name: "Hex to RGB Converter", href: "/dev-tools/hex-to-rgb" },
      { name: "CSS Minifier", href: "/dev-tools/html-beautifier" },
      { name: "JSON Diff Checker", href: "/dev-tools/json-diff" },
      { name: "HTML Editor", href: "/dev-tools/html-editor" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CssGradientGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<CssGradientGenerator />)} />
}
