import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const ColorPaletteGenerator = dynamic(
  () => import("@/components/dev-tools/color-palette-generator").then((mod) => mod.ColorPaletteGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Color Palette Generator",
  description:
    "Free color palette generator. Create beautiful color schemes with 7 harmony rules (complementary, analogous, triadic), extract palettes from images, check WCAG contrast, and export to CSS, Tailwind, SCSS, or JSON. No signup needed.",
  metaTitle: "Free Color Palette Generator - Create Color Schemes Online (2026)",
  metaDescription:
    "Generate beautiful color palettes instantly. 7 harmony modes, image extraction, WCAG contrast checker, export to CSS/Tailwind/SCSS/JSON. Press spacebar to regenerate. Free.",
  path: "/dev-tools/color-palette",

  schemaOptions: {
    applicationCategory: "DesignApplication",
    description:
      "Free online color palette generator with 7 color harmony modes (complementary, analogous, triadic, tetradic, split-complementary, monochromatic, random), drag-and-drop image upload with color quantization to extract dominant colors, WCAG AA/AAA contrast ratio checker (on white and black backgrounds), per-color locking with spacebar regeneration, HEX/RGB/HSL value display, and export in 5 formats: CSS variables, Tailwind config, SCSS variables, JSON, and plain hex list. 2-10 colors per palette, 100% client-side processing.",
    featureList: [
      "7 color harmony modes: complementary, analogous, triadic, tetradic, split-complementary, monochromatic, random",
      "Extract color palettes from any uploaded image via canvas color quantization",
      "WCAG AA/AAA contrast ratio checker for each color on white and black backgrounds",
      "Per-color locking: regenerate only unlocked colors while keeping your favorites",
      "Spacebar keyboard shortcut to regenerate palette instantly",
      "Color picker and manual hex input for precise color editing",
      "HEX, RGB, and HSL value display with one-click copy",
      "Export to 5 formats: CSS variables, Tailwind config, SCSS, JSON, plain hex",
      "Variable palette size from 2 to 10 colors",
      "Download exported palette as CSS/JSON/SCSS/JS/TXT file",
      "100% client-side processing — images and palettes never leave your browser",
      "No signup, no ads, no usage limits",
    ],
    softwareRequirements: "Modern web browser with JavaScript and Canvas API support",
  },

  header: {
    title: "Free Color Palette Generator",
    description:
      "Generate beautiful color palettes with harmony rules, extract from images, check WCAG accessibility, and export to CSS, Tailwind, or JSON.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Color Palette Generator", href: "/dev-tools/color-palette" },
  ],

  content: {
    definition:
      "A color palette generator is an online tool that creates coordinated sets of colors based on color theory rules (complementary, analogous, triadic, etc.), image content, or random generation — used by designers and developers to build cohesive visual designs.",

    quickAnswer:
      "Click 'Generate' or press the spacebar to create a random palette. Choose a harmony mode (complementary, triadic, analogous, etc.) for coordinated colors, or upload an image to extract its dominant colors. Click any color to see WCAG contrast ratings and HEX/RGB/HSL values. Lock colors you love, then regenerate the rest. Export as CSS, Tailwind, SCSS, or JSON.",

    keyTakeaways: [
      "7 color harmony modes based on classical color theory — complementary, analogous, triadic, tetradic, split-complementary, monochromatic, and random",
      "Extract palettes from any uploaded image using canvas-based color quantization (JPG, PNG, GIF, WebP)",
      "WCAG AA/AAA contrast ratio checker built in — verify accessibility on white and black backgrounds for every color",
      "Lock individual colors and regenerate only the rest — press spacebar for instant iteration",
      "Export to 5 developer-friendly formats: CSS custom properties, Tailwind config, SCSS, JSON, and plain hex",
      "100% client-side — your images and palettes stay in your browser, no server upload",
    ],

    overview:
      "This color palette generator creates beautiful, coordinated color schemes using classical color theory. Choose from 7 harmony modes: complementary (opposite colors for contrast), analogous (adjacent hues for harmony), triadic (3 evenly-spaced colors), tetradic (4-color squares), split-complementary, monochromatic (single-hue variations), or random. Upload any image to extract its dominant colors via client-side quantization. Check WCAG AA/AAA contrast ratios in real time to ensure your palette meets accessibility standards. Lock colors you want to keep and press spacebar to regenerate the rest. When ready, export to CSS variables, Tailwind config, SCSS, JSON, or plain hex — ready to paste into your project. Everything runs in your browser with zero server calls.",

    howToSteps: [
      "Press 'Generate' or hit the spacebar to create a random 5-color palette. Change the harmony mode to get coordinated colors using color theory rules.",
      "Click the lock icon on any color you want to keep, then regenerate — only unlocked colors will change. This lets you iterate quickly while preserving favorites.",
      "Click any color swatch to see its HEX, RGB, and HSL values, plus WCAG contrast ratios. Use the color picker or type a hex code to customize manually.",
      "Upload an image in the 'From Image' tab to extract dominant colors. Perfect for matching a brand photo, logo, or design mockup.",
      "Select an export format (CSS variables, Tailwind config, SCSS, JSON, or hex list) and click Copy to clipboard or Download to save as a file.",
    ],

    features: [
      "Color Harmony Modes: 7 scientifically-grounded harmony options based on the color wheel — complementary (180° opposite), analogous (adjacent), triadic (120° apart), tetradic (90° apart), split-complementary, monochromatic (same hue, varied lightness), and random.",
      "Image-Based Palette Extraction: Upload any image (JPG, PNG, GIF, WebP) and the tool uses canvas color quantization to extract the most prominent colors. Great for matching brand photos or design references.",
      "WCAG Contrast Checker: Every selected color shows its contrast ratio against white and black backgrounds, with AA/AAA/Large/Fail ratings built right into the UI. No separate accessibility tool needed.",
      "Color Locking: Lock any color to preserve it while regenerating the rest. Build your palette incrementally by locking good choices and exploring alternatives for the remaining slots.",
      "Spacebar Regeneration: Industry-standard keyboard shortcut — press spacebar to instantly regenerate unlocked colors. Inspired by Coolors' legendary UX.",
      "Manual Color Editing: Click any color to edit it via a color picker or by typing a hex code directly. Full control over your palette.",
      "Multi-Format Export: Copy or download in 5 formats — CSS custom properties (`--color-1: #hex`), Tailwind config, SCSS variables, JSON (with HEX/RGB/HSL), or a plain hex list.",
      "Variable Palette Size: Generate 2 to 10 colors per palette. Start with 5 (standard) or expand for more complex design systems.",
      "Multiple Value Formats: Every color is shown in HEX, RGB, and HSL simultaneously — one-click copy for any format.",
      "Remove Individual Colors: Trash any color you don't like without regenerating everything.",
      "Privacy First: 100% client-side processing. Your uploaded images and generated palettes never leave your browser.",
      "No Account Needed: No signup, no login, no ads, no daily limits. Use it as much as you want.",
    ],

    useCases: [
      "Web Design: Generate a brand-ready color system and export directly to CSS variables or Tailwind config for your Next.js, React, or Vue app.",
      "UI/UX Design: Create accessible color schemes with built-in WCAG contrast checking — ensure AA/AAA compliance for body text and headings.",
      "Branding: Upload a reference image (logo, photo, mood board) and extract the exact color palette for consistent brand identity.",
      "Marketing Materials: Build coordinated palettes for social media graphics, presentations, email templates, and ad creative.",
      "Illustration & Art: Use harmony modes to generate color schemes for digital art, concept art, and character design.",
      "Interior Design & Fashion: Apply color theory rules (complementary, triadic, analogous) to room palettes or outfit combinations.",
      "Data Visualization: Generate distinct, accessible color sets for charts, graphs, and dashboards.",
      "Mobile App Design: Export palettes to JSON for use in iOS asset catalogs, Android resource files, or React Native themes.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Understanding Color Harmony</h3>
          <p>
            Color harmony is the art of combining colors in ways that are visually pleasing and
            effective. The most common harmony rules are based on the color wheel:{" "}
            <strong>complementary</strong> colors sit directly opposite (maximum contrast, great
            for calls-to-action); <strong>analogous</strong> colors are neighbors (harmonious,
            calming, like a sunset); <strong>triadic</strong> uses three colors evenly spaced
            for vibrant balance; <strong>tetradic</strong> (square) uses four colors for rich
            complexity; <strong>monochromatic</strong> uses one hue with different shades for
            elegant simplicity. Understanding these rules helps you pick colors that work
            together intentionally instead of randomly.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Image Color Extraction Works</h3>
          <p>
            When you upload an image, this tool uses an HTML5 Canvas to read pixel data locally
            in your browser. It then performs <strong>color quantization</strong> — grouping
            similar pixels into buckets (using 4-bit per channel precision) and selecting the
            most frequent buckets as your palette. Near-white and near-black pixels are filtered
            out to focus on vivid, usable colors. No image is uploaded to any server; everything
            happens on your device in milliseconds.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">WCAG Contrast Accessibility</h3>
          <p>
            The Web Content Accessibility Guidelines (WCAG) set minimum contrast ratios for text
            legibility: <strong>4.5:1 for AA</strong> (standard body text) and{" "}
            <strong>7:1 for AAA</strong> (enhanced). Large text (18pt+ or bold 14pt+) has lower
            thresholds at 3:1 (AA Large). This generator shows contrast ratios in real time for
            each color against white and black backgrounds, so you can instantly tell if a color
            is safe to use for text. Failing contrast ratios will cause accessibility issues for
            users with low vision and color blindness — always verify before shipping.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Using Palettes in Your Code</h3>
          <p>
            The export feature gives you production-ready code in 5 formats.{" "}
            <strong>CSS Variables</strong> output <code>:root</code> custom properties you can
            reference anywhere with <code>var(--color-1)</code>. <strong>Tailwind Config</strong>{" "}
            gives you a <code>theme.extend.colors</code> block to paste into{" "}
            <code>tailwind.config.js</code>. <strong>SCSS</strong> provides Sass variables for
            design systems. <strong>JSON</strong> includes HEX/RGB/HSL for every color — perfect
            for design tokens, React themes, or mobile app asset catalogs. Download as a file or
            copy directly to your clipboard.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Start with a harmony mode (not random) for coordinated palettes that look intentional. For websites, use a monochromatic or analogous scheme for body UI, and a complementary color for calls-to-action. Always check WCAG contrast — text colors need at least 4.5:1 against their background to meet AA standards. Use Tailwind config export if your project uses Tailwind CSS — the output is copy-paste ready.",

    faqs: [
      {
        question: "What is a color palette generator?",
        answer:
          "A color palette generator is an online tool that creates a coordinated set of colors (typically 3-10) you can use in your designs. It generates palettes based on color theory (complementary, analogous, triadic harmony), random generation, or image extraction — providing developers and designers with ready-to-use color schemes.",
      },
      {
        question: "Is this color palette generator free?",
        answer:
          "Yes, 100% free with no signup, no ads, and no daily limits. You can generate unlimited palettes, extract colors from unlimited images, and export in any format without ever creating an account.",
      },
      {
        question: "How do I extract a color palette from an image?",
        answer:
          "Click the 'From Image' tab, then upload any image (JPG, PNG, GIF, WebP). The tool uses canvas-based color quantization to extract the most prominent colors — typically 5 by default, adjustable from 2 to 10. Processing happens entirely in your browser, so your images never leave your device.",
      },
      {
        question: "What are color harmony modes?",
        answer:
          "Color harmony modes are rules from color theory that create visually balanced palettes. This tool supports 7 modes: Complementary (opposite colors on the wheel, high contrast), Analogous (neighboring colors, harmonious), Triadic (3 evenly spaced), Tetradic (4-color square), Split-Complementary, Monochromatic (single hue, varied lightness), and Random.",
      },
      {
        question: "What does the lock icon do?",
        answer:
          "Locking a color preserves it when you regenerate the palette. This lets you build a palette iteratively — lock the colors you love, then regenerate until the remaining slots are also perfect. Press spacebar to regenerate only unlocked colors.",
      },
      {
        question: "Is my palette WCAG accessible?",
        answer:
          "The tool shows WCAG contrast ratios in real time for every selected color against white and black backgrounds. You'll see grades like AAA (7:1 ratio), AA (4.5:1), AA Large (3:1), or Fail. Use colors with AA or AAA ratings for body text to ensure accessibility.",
      },
      {
        question: "Can I export the palette to CSS or Tailwind?",
        answer:
          "Yes. The tool supports 5 export formats: CSS custom properties (variables), Tailwind config (ready to paste into tailwind.config.js), SCSS variables, JSON (with HEX/RGB/HSL), and a plain hex list. Copy to clipboard or download as a file.",
      },
      {
        question: "What does the spacebar do?",
        answer:
          "Press spacebar anywhere on the page (except while typing in an input) to instantly regenerate unlocked colors. This keyboard shortcut is the fastest way to iterate through palette options — no need to click the Generate button every time.",
      },
      {
        question: "How many colors can I have in a palette?",
        answer:
          "You can generate palettes from 2 to 10 colors. Use the 'Colors' dropdown to change the count. Most brand palettes use 4-6 colors; design systems often use 8-10 to cover primary, secondary, accent, and neutral tones.",
      },
      {
        question: "Can I edit individual colors manually?",
        answer:
          "Yes. Click any color swatch to select it, then use the color picker or type a hex code directly in the input field. You can also click the lock icon to preserve a color and regenerate the rest around it.",
      },
      {
        question: "What's the difference between complementary and analogous colors?",
        answer:
          "Complementary colors sit opposite each other on the color wheel (e.g., blue and orange) — they create high contrast and make each other pop. Analogous colors are neighbors on the wheel (e.g., blue, blue-green, green) — they create harmony and are easy on the eyes, often used for natural scenes or calm designs.",
      },
      {
        question: "Is my data private?",
        answer:
          "Yes. This tool runs 100% in your browser. Images you upload are processed locally via HTML5 Canvas — they're never uploaded to any server. Generated palettes also stay on your device until you explicitly copy or download them.",
      },
    ],

    relatedTools: [
      { name: "CSS Gradient Generator", href: "/dev-tools/css-gradient-generator" },
      { name: "Hex to RGB Converter", href: "/dev-tools/hex-to-rgb" },
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "Meme Generator", href: "/fun-tools/meme-generator" },
      { name: "Schema Markup Generator", href: "/seo-tools/schema-markup-generator" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ColorPalettePage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ColorPaletteGenerator />)} />
}
