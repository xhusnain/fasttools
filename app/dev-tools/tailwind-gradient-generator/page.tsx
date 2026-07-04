import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const CssGradientGenerator = dynamic(
  () =>
    import("@/components/dev-tools/css-gradient-generator").then(
      (mod) => mod.CssGradientGenerator
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Tailwind Gradient Generator",
  description:
    "Design a gradient visually and copy the Tailwind CSS classes — direction utilities plus from-/via-/to- arbitrary color values, with the v3 vs v4 syntax differences covered.",
  metaTitle: "Tailwind Gradient Generator — Copy bg-gradient Classes",
  metaDescription:
    "Build a gradient visually and copy Tailwind classes: bg-gradient-to-r from-[#hex] via-[#hex] to-[#hex]. Covers arbitrary angles, v4's bg-linear-* rename, and radial/conic fallbacks.",
  path: "/dev-tools/tailwind-gradient-generator",

  header: {
    title: "Tailwind Gradient Generator",
    description:
      "Pick colors and angle visually, then copy the Tailwind classes — direction utility plus from/via/to stops. CSS, SCSS, and raw hex outputs included for everything Tailwind utilities can't express.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "purple",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "CSS Gradient Generator", href: "/dev-tools/css-gradient-generator" },
    { label: "Tailwind Gradient Generator", href: "/dev-tools/tailwind-gradient-generator" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Visual gradient designer with Tailwind CSS class output: direction utilities (bg-gradient-to-*), from-/via-/to- stops with arbitrary hex values, plus plain CSS output for radial and conic gradients.",
    alternateName: [
      "Tailwind CSS Gradient Generator",
      "Tailwind bg-gradient generator",
      "Tailwind gradient classes generator",
      "bg-gradient-to-r generator",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Tailwind gradient generator lets you design a gradient visually and outputs the equivalent Tailwind utility classes — a direction utility like bg-gradient-to-r plus from-, via-, and to- color stops — instead of a raw CSS background-image value.",
    quickAnswer:
      "Design your gradient above and copy the Tailwind tab: you'll get a direction utility (bg-gradient-to-r for 90°, bg-gradient-to-br for 135°, or an arbitrary-value class for other angles) plus from-[#hex], optional via-[#hex], and to-[#hex] stops. Radial and conic gradients aren't expressible as core Tailwind utilities — use the CSS output in an arbitrary bg-[...] value for those.",
    keyTakeaways: [
      "Linear gradients map to Tailwind directly: direction utility + from-/via-/to- stops",
      "The 8 compass angles get named utilities (to-t/tr/r/br/b/bl/l/tl); other angles use bg-[linear-gradient(…)]",
      "Custom colors ship as arbitrary values — from-[#7c3aed] works with any hex, no config needed",
      "Tailwind v4 renames the utilities: bg-gradient-to-r → bg-linear-to-r (v3 syntax still shown everywhere)",
      "Radial/conic: no core utilities — paste the CSS output into bg-[radial-gradient(…)]",
    ],
    overview:
      "Tailwind expresses linear gradients as composable utilities — direction, then color stops — which is great until you're translating a design by hand: eyeballing hex stops and remembering which angle maps to which to-* suffix. This generator does the translation: design the gradient visually (any colors, any angle, up to three stops) and copy ready-to-paste Tailwind classes, with the CSS/SCSS outputs alongside for the cases Tailwind's core utilities don't cover. The sections below map angles to utilities, show the three-stop via- pattern, and cover the v4 renames so the classes you paste match your Tailwind version.",

    howToSteps: [
      "Pick your colors and angle in the generator above (add a middle stop for a via- class).",
      "Switch to the Tailwind output tab and copy the classes.",
      "Paste onto your element — arbitrary values like from-[#0ea5e9] need no tailwind.config changes.",
      "On Tailwind v4, swap bg-gradient-to-* for bg-linear-to-* (everything else is unchanged).",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Angle → Tailwind Direction Utility</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">CSS angle</th>
                  <th className="p-3 text-left">Tailwind v3</th>
                  <th className="p-3 text-left">Tailwind v4</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm font-mono">
                <tr><td className="p-3">0deg (bottom → top)</td><td className="p-3">bg-gradient-to-t</td><td className="p-3">bg-linear-to-t</td></tr>
                <tr><td className="p-3">45deg</td><td className="p-3">bg-gradient-to-tr</td><td className="p-3">bg-linear-to-tr</td></tr>
                <tr><td className="p-3">90deg (left → right)</td><td className="p-3">bg-gradient-to-r</td><td className="p-3">bg-linear-to-r</td></tr>
                <tr><td className="p-3">135deg</td><td className="p-3">bg-gradient-to-br</td><td className="p-3">bg-linear-to-br</td></tr>
                <tr><td className="p-3">180deg (top → bottom)</td><td className="p-3">bg-gradient-to-b</td><td className="p-3">bg-linear-to-b</td></tr>
                <tr><td className="p-3">225deg</td><td className="p-3">bg-gradient-to-bl</td><td className="p-3">bg-linear-to-bl</td></tr>
                <tr><td className="p-3">270deg (right → left)</td><td className="p-3">bg-gradient-to-l</td><td className="p-3">bg-linear-to-l</td></tr>
                <tr><td className="p-3">315deg</td><td className="p-3">bg-gradient-to-tl</td><td className="p-3">bg-linear-to-tl</td></tr>
                <tr><td className="p-3">any other angle</td><td className="p-3">{"bg-[linear-gradient(63deg,var(--tw-gradient-stops))]"}</td><td className="p-3">bg-linear-63</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Tailwind v4 additionally supports arbitrary angles natively (bg-linear-63 for 63°) —
            one of the nicer quality-of-life upgrades if you use off-compass gradients.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Three-Stop Pattern (from / via / to)</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Two stops need only from- and to-; add a middle color and it becomes the via- class:
          </p>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed whitespace-pre overflow-x-auto">
{`<div class="bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6]">two stops</div>
<div class="bg-gradient-to-r from-[#0ea5e9] via-[#ec4899] to-[#8b5cf6]">three stops</div>
<div class="bg-gradient-to-r from-sky-500 via-pink-500 to-violet-500">palette colors</div>`}
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Arbitrary hex values and named palette colors compose identically — use palette names
            when the design system already has the color, arbitrary values when matching an exact
            brand hex. Stop positions (from-10%, via-40%) are supported in both v3.3+ and v4 if the
            generator&apos;s default even spacing isn&apos;t what the design calls for.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Radial and Conic Gradients in Tailwind</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Core Tailwind v3 has no radial/conic utilities, so the honest options are an arbitrary
            value with the generator&apos;s CSS output pasted in —
            bg-[radial-gradient(circle_at_center,#0ea5e9,#8b5cf6)] (spaces become underscores) — or
            a one-line plugin/custom utility if you use them often. Tailwind v4 adds bg-radial and
            bg-conic utilities natively. Design the gradient above in radial/conic mode, copy the
            CSS tab, and wrap it accordingly.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Gradient text is the same classes plus two more: bg-gradient-to-r from-[…] to-[…] bg-clip-text text-transparent. The generator's from/via/to output drops straight in.",

    faqs: [
      {
        question: "How do I use a custom hex color in a Tailwind gradient?",
        answer:
          "Arbitrary values: from-[#1e40af] to-[#9333ea] work out of the box with any hex, rgb(), or CSS variable — no tailwind.config edits. The generator outputs this syntax by default so any color you pick is directly usable.",
      },
      {
        question: "What changed for gradients in Tailwind v4?",
        answer:
          "The utilities were renamed from bg-gradient-to-* to bg-linear-to-*, arbitrary angles got native support (bg-linear-45), and radial/conic gradients gained real utilities (bg-radial, bg-conic). The from-/via-/to- stop classes are unchanged, so only the direction class needs swapping when you upgrade.",
      },
      {
        question: "How do I get an angle like 63° in Tailwind v3?",
        answer:
          "Named utilities only cover the 8 compass directions. For anything else use an arbitrary background: bg-[linear-gradient(63deg,var(--tw-gradient-stops))] combined with normal from-/to- classes — var(--tw-gradient-stops) is the variable those classes populate. In v4 it's simply bg-linear-63.",
      },
      {
        question: "Can I make radial or conic gradients with Tailwind utilities?",
        answer:
          "In v3, not with core utilities — paste the generator's CSS output into an arbitrary value like bg-[radial-gradient(circle,#hex1,#hex2)] (replace spaces with underscores), or register a custom utility. Tailwind v4 has bg-radial and bg-conic built in.",
      },
      {
        question: "Why does my gradient look different than the preview?",
        answer:
          "The usual suspects: another bg-* class later in the class list overriding the gradient, a parent's background bleeding through transparent stops, or dark-mode variants swapping one of the stop colors. Inspect the element and confirm the computed background-image matches the generator's CSS tab — the classes and the CSS express the identical gradient.",
      },
    ],

    relatedTools: [
      { name: "CSS Gradient Generator (CSS/SCSS output)", href: "/dev-tools/css-gradient-generator" },
      { name: "Color Palette Generator", href: "/dev-tools/color-palette-generator" },
      { name: "Hex to RGB Converter", href: "/dev-tools/hex-to-rgb" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TailwindGradientGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<CssGradientGenerator />)} />
}
