import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ColorPaletteGenerator } from "@/components/image/color-palette-generator"
import { createToolConfig } from "@/lib/create-tool-config"

const toolConfig = createToolConfig({
  toolName: "Color Palette Generator",
  description: "Generate beautiful color palettes instantly. Free random color palette generator for designers and developers. Create harmonious color schemes with hex codes. Best color palette tool online.",
  metaTitle: "Color Palette Generator - Generate Color Palettes Online (Free)",
  metaDescription: "Free online Color Palette Generator. Generate color schemes instantly. Fast, accurate, and no signup required.",
  path: "/dev-tools/color-palette",

  header: {
    title: "Color Palette Generator - Random Color Scheme Creator",
    description: "Generate beautiful color palettes instantly. Free random color palette generator for designers and developers. Create harmonious color schemes with hex codes.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Color Palette Generator", href: "/dev-tools/color-palette" },
  ],

  content: {
    overview: "Generate beautiful, harmonious color palettes instantly with our free color palette generator. Create perfect color combinations for websites, designs, and branding. Lock favorite colors, copy hex codes, and export palettes. Perfect for designers and developers seeking color inspiration.",

    howToSteps: [
      "Click 'Generate Palette' to create a random color scheme",
      "Lock colors you want to keep by clicking the lock icon",
      "Generate again to replace unlocked colors",
      "Click any color to copy its hex code",
      "Export palette for use in design tools"
    ],

    features: [
      "Random Generation: Create unlimited color palettes with one click",
      "Lock Colors: Keep colors you like while generating new combinations",
      "One-Click Copy: Copy hex codes instantly by clicking colors",
      "Multiple Formats: View colors in HEX, RGB, and HSL formats",
      "Export Options: Download palettes for Photoshop, Illustrator, Figma",
      "Color Harmony: Algorithmically generated harmonious combinations",
      "Accessibility Check: Verify color contrast ratios for WCAG compliance",
      "Keyboard Shortcuts: Spacebar to generate, C to copy, L to lock"
    ],

    useCases: [
      "Web Design: Create color schemes for websites and web applications",
      "Brand Identity: Develop brand color palettes for businesses",
      "UI/UX Design: Generate interface color combinations",
      "Graphic Design: Find harmonious colors for posters, flyers, graphics",
      "Art & Illustration: Discover color inspiration for digital art",
      "Development: Get hex codes for CSS, HTML, and design systems",
      "Social Media: Create cohesive color themes for social content"
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">Understanding Color Palettes</h3>
        <p className="mb-4">
          A color palette is a curated set of colors that work harmoniously together. Good color palettes follow color theory principles including complementary colors (opposite on color wheel), analogous colors (adjacent on color wheel), triadic colors (evenly spaced), and monochromatic schemes (variations of one hue).
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Color Theory Basics</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Complementary:</strong> Colors opposite on the color wheel (e.g., blue and orange) create high contrast and vibrant looks</li>
          <li><strong>Analogous:</strong> Colors next to each other on the wheel create harmonious, serene color schemes</li>
          <li><strong>Triadic:</strong> Three colors evenly spaced on the wheel create dynamic, balanced palettes</li>
          <li><strong>Monochromatic:</strong> Variations of a single hue using different tints, shades, and tones</li>
          <li><strong>Split-Complementary:</strong> Base color plus two colors adjacent to its complement for sophisticated combinations</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Color Formats Explained</h3>
        <div className="space-y-3 mb-6">
          <div>
            <h4 className="font-semibold mb-1">HEX Codes:</h4>
            <p>Six-digit code (#RRGGBB) representing red, green, blue values in hexadecimal. Example: #FF5733. Most common format for CSS and web design.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">RGB:</h4>
            <p>Color defined by red, green, blue values (0-255 each). Example: rgb(255, 87, 51). Useful for calculations and transparency (RGBA).</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">HSL:</h4>
            <p>Hue (0-360°), Saturation (0-100%), Lightness (0-100%). Example: hsl(9, 100%, 60%). Intuitive for adjusting colors programmatically.</p>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">Tips for Choosing Color Palettes</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Start with a dominant color that represents your brand or message</li>
          <li>Limit your palette to 3-5 colors for cohesion</li>
          <li>Consider color psychology: blue for trust, green for growth, red for energy</li>
          <li>Test accessibility with contrast checkers for readability</li>
          <li>Use 60-30-10 rule: 60% dominant, 30% secondary, 10% accent color</li>
          <li>Consider your audience and cultural color meanings</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Popular Color Palette Styles</h3>
        <p className="mb-4">
          <strong>Pastel Palettes:</strong> Soft, light colors with low saturation, perfect for calming, gentle designs. <strong>Vibrant Palettes:</strong> High saturation colors for energetic, bold statements. <strong>Earthy Palettes:</strong> Browns, greens, tans for natural, organic feels. <strong>Monochrome:</strong> Black, white, grays for minimalist, elegant designs. <strong>Neon:</strong> Ultra-bright fluorescent colors for modern, tech-forward aesthetics.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Accessibility Standards (WCAG)</h3>
        <p className="mb-4">
          Ensure your color palette is inclusive for all users. The Web Content Accessibility Guidelines (WCAG) recommend specific contrast ratios between text and background:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>AA Standard (Normal Text):</strong> Requires a contrast ratio of at least 4.5:1.</li>
          <li><strong>AA Standard (Large Text):</strong> Requires a contrast ratio of at least 3:1 (Large text is 18pt+ or 14pt+ bold).</li>
          <li><strong>AAA Standard:</strong> Requires 7:1 for normal text and 4.5:1 for large text.</li>
        </ul>
      </>
    ),

    proTip: "Use the lock feature to keep colors you love while exploring variations. For web accessibility, ensure text-background color combinations have at least 4.5:1 contrast ratio for normal text and 3:1 for large text (WCAG AA standard).",

    faqs: [
      {
        question: "What are color palettes?",
        answer: "Color palettes are curated sets of colors designed to work harmoniously together. They typically include 3-5 colors that complement each other based on color theory principles. Color palettes are essential for creating cohesive designs in branding, web design, graphic design, and art."
      },
      {
        question: "Are color palettes copyrighted?",
        answer: "No, individual color palettes and color combinations generally cannot be copyrighted in most jurisdictions. Colors themselves are not subject to copyright protection. However, a specific color can be trademarked in association with a brand (like Tiffany Blue). Generated color schemes are free to use."
      },
      {
        question: "Can color palettes be copyrighted?",
        answer: "Color palettes cannot be copyrighted as they're considered functional elements. However, specific brand color combinations can be trademarked when used in commerce (e.g., UPS brown, T-Mobile magenta). You can freely use color combinations from palette generators for any purpose."
      },
      {
        question: "How do color palettes work?",
        answer: "Color palettes work based on color theory and the color wheel. They combine colors that have specific relationships: complementary (opposite), analogous (adjacent), triadic (evenly spaced), or monochromatic (variations of one hue). Our generator uses algorithms to create harmonious combinations that are visually pleasing and balanced."
      },
      {
        question: "Where are color palettes in Canva?",
        answer: "In Canva, find color palettes in the left sidebar under 'Design' or 'Styles'. Click any design element, then click the color tile to see color suggestions and saved palettes. You can also use 'Brand Kit' to save custom palettes. Our tool generates palettes you can manually add to Canva by copying hex codes."
      },
      {
        question: "Where to find color palettes?",
        answer: "Find color palettes on: 1) Our free generator (unlimited palettes). 2) Coolors.co. 3) Adobe Color. 4) ColorHunt. 5) Dribbble and Behance (design inspiration). 6) Pinterest (mood boards). 7) Nature photos (extract colors). 8) Brand guidelines of companies you admire. Our tool offers instant generation with copy-paste hex codes."
      },
      {
        question: "What are the color palettes for skin tones?",
        answer: "Skin tone palettes range from cool undertones (pink, red, blue) to warm undertones (yellow, peach, golden). Common ranges: fair (light peachy to pink), medium (beige to tan), olive (greenish undertones), deep (rich browns to dark). For cosmetics and art, use specialized skin tone palettes from brands like MAC, Fenty, or digital art color sets."
      },
      {
        question: "What are luxury color palettes?",
        answer: "Luxury color palettes typically feature: 1) Rich jewel tones (emerald, sapphire, ruby). 2) Metallics (gold, silver, rose gold). 3) Deep sophisticated hues (navy, burgundy, forest green). 4) Black and white for elegance. 5) Muted, refined colors (taupe, cream, charcoal). Think timeless, refined combinations that convey quality and exclusivity."
      },
      {
        question: "What color palettes can wear black?",
        answer: "Black works with most color palettes but especially complements: 1) Cool palettes (blues, purples, silvers). 2) Jewel tones (emerald, ruby, sapphire). 3) Monochromatic (blacks, grays, whites). 4) Bold colors (red, fuchsia, electric blue). Black adds sophistication and grounds vibrant colors. It's universally flattering in design and fashion."
      },
      {
        question: "What color palettes are there?",
        answer: "Color palette types include: Monochromatic (one hue in variations), Analogous (adjacent colors), Complementary (opposites), Triadic (three evenly spaced), Split-Complementary (base + two adjacent complements), Tetradic (two complementary pairs), Pastel, Vibrant, Earthy, Neon, Neutral, Warm, Cool, and custom brand palettes."
      },
      {
        question: "What do color palettes and hex codes mean?",
        answer: "Color palettes are coordinated sets of colors that work together. Hex codes are six-digit codes (e.g., #FF5733) representing colors in HTML/CSS, where the first two digits are red (00-FF), middle two are green, and last two are blue in hexadecimal notation. They allow precise color specification in digital design."
      },
      {
        question: "How are color palettes and names related?",
        answer: "Color names (like 'Midnight Blue', 'Coral Pink') help designers communicate and remember colors more easily than hex codes. Named palettes (like 'Ocean Breeze', 'Sunset Glow') evoke themes and moods. Many design systems use semantic naming (primary, secondary, accent) to describe palette roles rather than specific colors."
      },
      {
        question: "What are color palettes like Catppuccin?",
        answer: "Catppuccin is a pastel color scheme for coding themes and applications, featuring soft, muted tones in four flavors (Latte, Frappe, Macchiato, Mocha). Similar palettes include: Nord (arctic-inspired blues and whites), Dracula (dark with vibrant accents), Gruvbox (retro warm tones), and Solarized (refined earth tones). These are popular in developer tools and terminals."
      },
      {
        question: "What are color palettes like Viridis?",
        answer: "Viridis is a perceptually-uniform color map designed for scientific visualization, ranging from purple to yellow-green. Similar palettes include: Plasma, Inferno, Magma (all from Matplotlib), Turbo (Google's improved rainbow), and Cividis (designed for color-blind accessibility). These ensure consistent perception across the color range for data visualization."
      },
      {
        question: "What are color palettes like Pastel?",
        answer: "Pastel palettes feature soft, light colors with low saturation and high lightness. Similar styles include: Kawaii (cute Japanese-inspired pastels), Vintage Pastels (muted retro colors), Mint + Blush (soft greens and pinks), Lavender Dreams (purple-pink pastels), and Baby Pastels (nursery colors). These create gentle, calming, approachable designs."
      },
      {
        question: "What are color palettes like Nord?",
        answer: "Nord is an arctic-inspired color palette with cool blues, whites, and grays plus accent colors. Similar palettes: Nord Light/Dark variations, Polar (icy blues), Arctic (frost colors), Tokyo Night (blue-purple night theme), and One Dark (dark blue-gray coding theme). These work well for developer tools, terminals, and minimalist designs."
      },
      {
        question: "What types of color palettes are like pastel?",
        answer: "Palette types similar to pastel include: Muted (low saturation), Soft (high lightness), Desaturated (washed-out colors), Powder (very light tints), Creamy (warm light tones), Dusty (vintage muted colors), and Chalky (powdery appearance). All share pastel's gentle, non-vibrant characteristic, ideal for calm, friendly designs."
      },
      {
        question: "How many color palettes should a website have?",
        answer: "Websites typically use 1 primary color palette with 5-7 colors: 1-2 primary brand colors, 2-3 secondary/accent colors, 1-2 neutral colors (black, gray, white), and variations/tints for hierarchy. Some sites add a secondary palette for specific sections. Keep it simple - too many colors create visual chaos and weaken brand identity."
      },
      {
        question: "Are there free color palettes available?",
        answer: "Yes! Our generator creates unlimited free color palettes. Other free sources: Coolors, Adobe Color, ColorHunt, Paletton, Material Design colors, Tailwind CSS colors, and color inspiration from Dribbble/Pinterest. All generated palettes are free to use commercially. No attribution required for colors themselves."
      }
    ],

    relatedTools: [
      { name: "Hex to RGB Converter", href: "/dev-tools/hex-to-rgb" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
      { name: "All Developer Tools", href: "/dev-tools" }
    ]
  }
})

export const metadata = toolConfig.metadata

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
