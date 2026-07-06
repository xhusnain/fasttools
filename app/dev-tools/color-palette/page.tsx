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
    "Color palette generator for web and UI projects. Create color schemes with 7 harmony rules, extract palettes from images, check WCAG contrast, and export to CSS, Tailwind, SCSS, JSON, or hex.",
  metaTitle: "Color Palette Generator — Harmony, Image Extraction & WCAG Check",
  metaDescription:
    "Free color palette generator. 7 harmony modes (complementary, analogous, triadic, tetradic, split-complementary, monochromatic, random), image color extraction, WCAG AA/AAA contrast checker, export to CSS / Tailwind / SCSS / JSON. Spacebar to regenerate.",
  path: "/dev-tools/color-palette",

  schemaOptions: {
    applicationCategory: "DesignApplication",
    description:
      "Online color palette generator with 7 color harmony modes (complementary, analogous, triadic, tetradic, split-complementary, monochromatic, random), image upload with color quantization to extract dominant colors, WCAG AA/AAA contrast ratio checker on white and black backgrounds, per-color locking with spacebar regeneration, HEX/RGB/HSL value display, and export in 5 formats: CSS variables, Tailwind config, SCSS variables, JSON, and plain hex list. 2-10 colors per palette.",
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
      "Browser-side image color extraction",
      "No account required",
    ],
    softwareRequirements: "Modern web browser with JavaScript and Canvas API support",
    alternateName: [
      "Color Scheme Generator",
      "Palette Maker",
      "Color Theme Generator",
      "Brand Color Palette",
      "UI Color Palette Generator",
      "Coolors Alternative",
      "Adobe Color Alternative",
      "Image to Palette Tool",
      "Color Harmony Generator",
      "Hex Color Palette",
      "Tailwind Color Palette",
      "CSS Color Variables Generator",
      "Web Design Palette",
      "WCAG Color Checker",
      "Accessibility Color Picker",
    ],
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
      "7 color harmony modes based on the color wheel — complementary, analogous, triadic, tetradic, split-complementary, monochromatic, and random",
      "Extract palettes from any uploaded image using canvas-based color quantization (JPG, PNG, GIF, WebP)",
      "WCAG AA/AAA contrast ratio checker built in — verify accessibility on white and black backgrounds for every color",
      "Lock individual colors and regenerate only the rest — press spacebar for instant iteration",
      "Export to 5 developer-friendly formats: CSS custom properties, Tailwind config, SCSS, JSON, and plain hex",
      "Image extraction runs in the browser after upload selection",
    ],

    overview:
      "This color palette generator creates coordinated color schemes using common color-wheel relationships. Choose from 7 harmony modes: complementary (opposite colors for contrast), analogous (adjacent hues for harmony), triadic (3 evenly-spaced colors), tetradic (4-color squares), split-complementary, monochromatic (single-hue variations), or random. Upload an image to extract dominant colors with browser-side quantization. Check WCAG AA/AAA contrast ratios in real time to evaluate text readability on white or black backgrounds. Lock colors you want to keep and press spacebar to regenerate the rest. When ready, export to CSS variables, Tailwind config, SCSS, JSON, or a plain hex list.",

    howToSteps: [
      "Press 'Generate' or hit the spacebar to create a random 5-color palette. Change the harmony mode to get coordinated colors using color theory rules.",
      "Click the lock icon on any color you want to keep, then regenerate — only unlocked colors will change. This lets you iterate quickly while preserving favorites.",
      "Click any color swatch to see its HEX, RGB, and HSL values, plus WCAG contrast ratios. Use the color picker or type a hex code to customize manually.",
      "Upload an image in the 'From Image' tab to extract dominant colors. Perfect for matching a brand photo, logo, or design mockup.",
      "Select an export format (CSS variables, Tailwind config, SCSS, JSON, or hex list) and click Copy to clipboard or Download to save as a file.",
    ],

    features: [
      "Color Harmony Modes: 7 harmony options based on the color wheel — complementary (180° opposite), analogous (adjacent), triadic (120° apart), tetradic (90° apart), split-complementary, monochromatic (same hue, varied lightness), and random.",
      "Image-Based Palette Extraction: Upload any image (JPG, PNG, GIF, WebP) and the tool uses canvas color quantization to extract the most prominent colors. Great for matching brand photos or design references.",
      "WCAG Contrast Checker: Every selected color shows its contrast ratio against white and black backgrounds, with AA/AAA/Large/Fail ratings built right into the UI. No separate accessibility tool needed.",
      "Color Locking: Lock any color to preserve it while regenerating the rest. Build your palette incrementally by locking good choices and exploring alternatives for the remaining slots.",
      "Spacebar Regeneration: Industry-standard keyboard shortcut — press spacebar to instantly regenerate unlocked colors. Inspired by Coolors' legendary UX.",
      "Manual Color Editing: Click any color to edit it via a color picker or by typing a hex code directly. Full control over your palette.",
      "Multi-Format Export: Copy or download in 5 formats — CSS custom properties (`--color-1: #hex`), Tailwind config, SCSS variables, JSON (with HEX/RGB/HSL), or a plain hex list.",
      "Variable Palette Size: Generate 2 to 10 colors per palette. Start with 5 (standard) or expand for more complex design systems.",
      "Multiple Value Formats: Every color is shown in HEX, RGB, and HSL simultaneously — one-click copy for any format.",
      "Remove Individual Colors: Trash any color you don't like without regenerating everything.",
      "Browser-Side Extraction: Uploaded images are read with Canvas in the page to extract colors.",
      "No Account Needed: Generate palettes, copy color values, and export formats without creating an account.",
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
            The export feature gives you production-ready code in 5 formats. <strong>CSS Variables</strong> output <code>:root</code> custom properties you can reference anywhere with <code>var(--color-1)</code>. <strong>Tailwind Config</strong> gives you a <code>theme.extend.colors</code> block to paste into <code>tailwind.config.js</code>. <strong>SCSS</strong> provides Sass variables for design systems. <strong>JSON</strong> includes HEX/RGB/HSL for every color — perfect for design tokens, React themes, or mobile app asset catalogs. Download as a file or copy directly to your clipboard.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">60-30-10 Rule for Web Design</h3>
          <p>
            Beyond picking colors, the question is <em>how to use them</em>. The most reliable rule in interior design and web UI: <strong>60% dominant + 30% secondary + 10% accent</strong>. Translate this to a 5-color palette:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Color 1 (60% — dominant):</strong> background — white, off-white, or very dark. The page baseline.</li>
            <li><strong>Color 2 (30% — secondary):</strong> primary brand color — navigation, cards, key surfaces.</li>
            <li><strong>Color 3 (10% — accent):</strong> call-to-action buttons, links, emphasis. The color that drives action.</li>
            <li><strong>Colors 4-5 (utility):</strong> body text gray, muted text gray, success/warning/error semantic colors.</li>
          </ul>
          <p className="mt-3">
            This distribution gives visual hierarchy automatically. When everything is one color, nothing stands out — when colors fight for attention equally, the user&apos;s eye can&apos;t land. The 60-30-10 rule is why most well-designed websites look balanced even at first glance.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Color Psychology by Industry</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Color</th>
                <th className="text-left py-2 px-2 text-foreground">Common emotion</th>
                <th className="text-left py-2 px-2 text-foreground">Best for industries</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Blue</strong></td>
                <td className="py-2 px-2">Trust, calm, professionalism</td>
                <td className="py-2 px-2">Banking (Chase, Capital One), tech (Facebook, IBM), healthcare</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Red</td>
                <td className="py-2 px-2">Energy, urgency, passion</td>
                <td className="py-2 px-2">Food (Coca-Cola, KFC), entertainment (Netflix, YouTube), sales</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Green</td>
                <td className="py-2 px-2">Growth, money, nature, health</td>
                <td className="py-2 px-2">Finance (Robinhood), eco (Whole Foods), wellness (Spotify)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Yellow</td>
                <td className="py-2 px-2">Optimism, caution, attention</td>
                <td className="py-2 px-2">Fast food (McDonald&apos;s), construction, kids&apos; products</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Orange</td>
                <td className="py-2 px-2">Friendly, affordable, creative</td>
                <td className="py-2 px-2">Marketing (HubSpot), e-commerce (Amazon), entertainment</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Purple</td>
                <td className="py-2 px-2">Luxury, creativity, royalty</td>
                <td className="py-2 px-2">Beauty (Hallmark), creative tools (Twitch, Figma), premium</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Pink</td>
                <td className="py-2 px-2">Feminine, modern, friendly</td>
                <td className="py-2 px-2">Beauty, dating (Pinterest, Lyft historical)</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Black</td>
                <td className="py-2 px-2">Luxury, sophistication, power</td>
                <td className="py-2 px-2">Fashion (Chanel), luxury cars, premium tech (Apple)</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            Caveat: color psychology is culturally relative. White means &quot;mourning&quot; in some Asian cultures; red means &quot;luck&quot; in China but &quot;debt&quot; in financial UIs. Always verify your color choices match your target audience&apos;s cultural context.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Palette Mistakes to Avoid</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Too many colors:</strong> 4-6 colors max for most websites; design systems use 8-12. More than that creates visual chaos and is hard to maintain.</li>
            <li><strong>No neutral colors:</strong> palettes need grays/off-whites for text and backgrounds. Pure black on pure white is hard to read; use #111 on #f8f8f8 or similar.</li>
            <li><strong>Equal saturation:</strong> all colors at high saturation = visual noise. Vary saturation: brand colors saturated, utilities desaturated.</li>
            <li><strong>Ignoring contrast:</strong> if your brand colors don&apos;t hit 4.5:1 contrast for text, you need separate text colors. Check WCAG.</li>
            <li><strong>Trend chasing:</strong> &quot;Y2K orange&quot; or &quot;coquette pink&quot; trends die fast. Pick timeless or grounded options for brand work.</li>
            <li><strong>No accessibility check:</strong> 1 in 12 men have some form of color blindness. Don&apos;t encode information by color alone — always pair with text or icons.</li>
            <li><strong>Inconsistent across modes:</strong> design palette in both light AND dark mode from the start, not retrofit later.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">OKLCH: The Modern Color Space</h3>
          <p>
            Traditional HEX / RGB / HSL color spaces have a flaw: equal numeric changes don&apos;t produce equal visual changes. A 10% lightness change in HSL is far more visible in some hues than others. <strong>OKLCH</strong> (Oklab Lightness Chroma Hue) is a perceptually uniform color space — equal numeric changes produce equal visual changes. This makes it ideal for: generating tints / shades programmatically, animating between colors smoothly without &quot;gray dead zone,&quot; designing accessible palettes mathematically. CSS Color Level 4 supports OKLCH natively: <code>oklch(70% 0.15 200)</code>. All modern browsers (Chrome 111+, Firefox 113+, Safari 15.4+) support it.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Design System Color Tokens</h3>
          <p>
            Modern design systems don&apos;t use raw color values directly — they use <strong>semantic tokens</strong>: <code>color-surface-primary</code>, <code>color-text-default</code>, <code>color-action-primary</code>, etc. Tokens map to actual colors but can be reassigned without code changes. Example token structure:
          </p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`/* Base color palette (from this generator) */
--color-blue-500: #3b82f6;
--color-gray-100: #f3f4f6;
--color-gray-900: #111827;

/* Semantic tokens (what your code uses) */
--color-action-primary: var(--color-blue-500);
--color-text-default: var(--color-gray-900);
--color-surface-primary: var(--color-gray-100);`}</code>
          </pre>
          <p className="mt-3">
            When rebranding, you only change the semantic token mapping — every component using the token updates automatically. This is the foundation of Figma Tokens, Tailwind&apos;s token system, and Material Design 3&apos;s color roles.
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
          "Yes. You can generate palettes, extract colors from images, and export in the supported formats without creating an account.",
      },
      {
        question: "How do I extract a color palette from an image?",
        answer:
          "Click the 'From Image' tab, then upload an image. The tool uses canvas-based color quantization to extract the most prominent colors — typically 5 by default, adjustable from 2 to 10.",
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
          "Image color extraction runs in the browser with HTML5 Canvas after you choose a file. Avoid uploading confidential material into any web page unless your own policy allows it.",
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
