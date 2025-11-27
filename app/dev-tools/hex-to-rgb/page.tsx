import { ToolPageLayout } from "@/components/tool-page-layout"
import { HexToRGB } from "@/components/hex-to-rgb"
import { createToolConfig } from "@/lib/create-tool-config"

const toolConfig = createToolConfig({
  toolName: "Color Converter",
  description: "Free online color converter tool. Convert Hex to RGB, RGB to Hex, HSL, RGBA, HSLA instantly. Color picker, hex to decimal, alpha channel support. Best color code converter for web developers, designers. No signup required.",
  metaTitle: "Color Converter | Free Hex to RGB, RGB to Hex, HSL Tool",
  metaDescription: "Free online color converter tool. Convert Hex to RGB, RGB to Hex, HSL, RGBA, HSLA instantly. Color picker, hex to decimal, alpha channel support. Best color code converter for web developers, designers. No signup required.",
  path: "/dev-tools/hex-to-rgb",

  header: {
    title: "Color Converter - Hex to RGB, RGB to Hex, HSL Online Free",
    description: "Convert Hex to RGB, RGB to Hex, HSL, RGBA, HSLA instantly with our free online color converter. Features color picker, hex to decimal converter, alpha channel support, live preview, and one-click copy. Best color code converter for web developers and designers. No signup required.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Color Converter - Hex to RGB", href: "/dev-tools/hex-to-rgb" },
  ],

  content: {
    overview: "Our comprehensive color converter makes it easy to convert between all major color formats including Hex, RGB, HSL, RGBA, and HSLA. This professional-grade tool supports bidirectional conversion, alpha channel transparency, built-in color picker, live preview, and one-click copy functionality. Perfect for web developers, designers, and anyone working with digital colors.",

    howToSteps: [
      "Select your input format from Hex, RGB, or HSL tabs",
      "Enter your color values (hex code, RGB 0-255, or HSL values)",
      "Try quick sample colors or use the built-in color picker for visual selection",
      "Adjust alpha/opacity slider for RGBA/HSLA transparency (0-1 range)",
      "View real-time color preview with current opacity settings",
      "Copy any format instantly - Hex, RGB, RGBA, HSL, HSLA, or CSS variables",
      "Export colors in your preferred format for use in CSS, design tools, or code"
    ],

    features: [
      "Bidirectional Conversion: Hex ↔ RGB ↔ HSL in any direction",
      "Alpha Channel Support: Full RGBA and HSLA with opacity control",
      "Built-in Color Picker: Visual color selection tool",
      "Quick Sample Colors: Pre-loaded palette with common design colors",
      "Live Color Preview: Real-time preview with opacity visualization",
      "RGB Component Display: Individual Red, Green, Blue values shown",
      "CSS Variable Format: Export as CSS custom properties",
      "Input Validation: Automatic validation with error messages",
      "One-Click Copy: Instant clipboard copy for any format",
      "Hex to Decimal: Convert hex values to decimal numbers",
      "No Installation: Free online tool, works in any browser",
      "Mobile Responsive: Works perfectly on all devices"
    ],

    useCases: [
      "Web Development: Convert design colors to CSS-ready formats for styling",
      "UI/UX Design: Match colors across different design tools and platforms",
      "Brand Guidelines: Convert brand colors to all required formats for consistency",
      "CSS Theming: Create color schemes with RGBA for overlays and transparency",
      "Accessibility Testing: Adjust lightness using HSL for contrast ratio testing",
      "Design Handoff: Provide developers with exact color values in multiple formats",
      "Color Exploration: Use HSL to adjust hue while maintaining saturation levels",
      "Documentation: Include multiple color formats for cross-platform compatibility"
    ],

    aboutTool: (
      <>
        <p className="mb-4">
          The Color Converter is a comprehensive tool supporting all major color formats used in web development and design. Understanding different color formats is essential
          for working with colors across various platforms and applications.        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">Understanding Color Formats</h3>

        <div className="space-y-3 mb-4">
          <div>
            <h4 className="font-semibold text-heading-accent">Hex Colors (#RRGGBB)</h4>
            <p>Hexadecimal colors use 6 characters after # to represent RGB values. Each pair (00-FF) represents Red, Green, and Blue intensity. Example: #FF5733 = Red(255) Green(87) Blue(51)</p>
          </div>

          <div>
            <h4 className="font-semibold text-heading-accent">RGB (Red, Green, Blue)</h4>
            <p>RGB uses decimal values 0-255 for each color channel. Format: rgb(r, g, b). Widely used in CSS, design tools, and programming. Example: rgb(255, 87, 51)</p>
          </div>

          <div>
            <h4 className="font-semibold text-heading-accent">RGBA (RGB with Alpha)</h4>
            <p>RGBA adds opacity/transparency channel (0-1) to RGB. Format: rgba(r, g, b, a). Alpha 0 = fully transparent, 1 = fully opaque. Example: rgba(255, 87, 51, 0.5)</p>
          </div>

          <div>
            <h4 className="font-semibold text-heading-accent">HSL (Hue, Saturation, Lightness)</h4>
            <p>HSL represents colors using Hue (0-360°), Saturation (0-100%), and Lightness (0-100%). More intuitive for color adjustments. Format: hsl(h, s%, l%). Example: hsl(217, 83%, 53%)</p>
          </div>

          <div>
            <h4 className="font-semibold text-heading-accent">HSLA (HSL with Alpha)</h4>
            <p>HSLA adds opacity channel to HSL. Format: hsla(h, s%, l%, a). Combines intuitive HSL with transparency control. Example: hsla(217, 83%, 53%, 0.8)</p>
          </div>

          <div>
            <h4 className="font-semibold text-heading-accent">CSS Variables</h4>
            <p>Custom properties for reusable colors in CSS. Format: --color-name: value. Makes theming and color management easier. Example: --color-primary: #2563eb;</p>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">Complete Color Code Reference</h3>
        <p className="mb-3">
          Find exact hex codes and RGB values for all major colors. Our color converter provides instant conversions for hex to color, color to hex, RGB to hex, and hex to RGB transformations.
        </p>

        <div className="space-y-3 text-sm">
          <div>
            <h4 className="font-semibold text-heading-accent mb-1">Black & White Colors</h4>
            <p><strong>Hex for black:</strong> #000000 | <strong>RGB for black:</strong> rgb(0, 0, 0) | <strong>Hex for white:</strong> #FFFFFF | <strong>RGB for white:</strong> rgb(255, 255, 255) | <strong>White hex code:</strong> #FFF (shorthand) | <strong>RGB value for white:</strong> all channels at 255.</p>
          </div>

          <div>
            <h4 className="font-semibold text-heading-accent mb-1">Primary Colors (Red, Blue, Green, Yellow)</h4>
            <p><strong>Hex for red:</strong> #FF0000 | <strong>RGB for red:</strong> rgb(255, 0, 0) | <strong>Hex for blue:</strong> #0000FF | <strong>RGB for blue:</strong> rgb(0, 0, 255) | <strong>Hex for green:</strong> #00FF00 | <strong>RGB for green:</strong> rgb(0, 255, 0) | <strong>Hex for yellow:</strong> #FFFF00 | <strong>RGB for yellow:</strong> rgb(255, 255, 0)</p>
          </div>

          <div>
            <h4 className="font-semibold text-heading-accent mb-1">Secondary Colors (Orange, Pink, Purple, Brown)</h4>
            <p><strong>Hex for orange:</strong> #FFA500 | <strong>RGB for orange:</strong> rgb(255, 165, 0) | <strong>Hex for pink:</strong> #FFC0CB | <strong>RGB pink:</strong> rgb(255, 192, 203) | <strong>Hex for purple:</strong> #800080 | <strong>RGB purple:</strong> rgb(128, 0, 128) | <strong>Hex for brown:</strong> #A52A2A | <strong>RGB for brown:</strong> rgb(165, 42, 42)</p>
          </div>

          <div>
            <h4 className="font-semibold text-heading-accent mb-1">Neutral Colors & Special Shades</h4>
            <p><strong>Hex for grey:</strong> #808080 | <strong>RGB for grey:</strong> rgb(128, 128, 128) | <strong>Hex for silver:</strong> #C0C0C0 | <strong>RGB for silver:</strong> rgb(192, 192, 192) | <strong>Hex for gold:</strong> #FFD700 | <strong>RGB of gold:</strong> rgb(255, 215, 0) | <strong>Gold hex code:</strong> golden yellow color</p>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">RGB vs CMYK: Print vs Web Colors</h3>
        <p className="mb-3">
          Understanding the difference between RGB and CMYK is crucial for designers working across digital and print media.
        </p>

        <div className="space-y-2 text-sm">
          <p><strong>RGB vs CMYK:</strong> RGB (additive color for screens) vs CMYK (subtractive color for print). RGB combines light to make colors brighter; CMYK mixes ink making colors darker.</p>
          <p><strong>When to use RGB:</strong> Websites, apps, digital displays, photography, all screen-based media.</p>
          <p><strong>When to use CMYK:</strong> Print materials, business cards, brochures, magazines, physical marketing.</p>
          <p><strong>Conversion:</strong> RGB must be converted to CMYK for print. Some RGB colors can't be accurately reproduced in CMYK due to gamut limitations.</p>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">Advanced Color Information</h3>

        <div className="space-y-2 text-sm">
          <p><strong>How many colors:</strong> There are 16,777,216 possible hex/RGB colors (256 × 256 × 256). Each of the three channels (R, G, B) can have 256 values (00-FF in hex, 0-255 in decimal).</p>
          <p><strong>RGB color model history:</strong> RGB theory was formalized in the 1860s based on Young-Helmholtz trichromatic theory. Modern digital RGB became widespread in the 1980s-1990s with personal computers.</p>
          <p><strong>Why RGB not RYB:</strong> RGB is used for light-emitting displays. RYB (Red-Yellow-Blue) is for paint/pigments. Human eyes have receptors for red, green, and blue light.</p>
          <p><strong>Hex code format:</strong> Hex codes are compact (6 characters for 16.7M colors), easy to read, and work perfectly in HTML/CSS. Each hex digit represents 4 binary bits.</p>
        </div>
      </>
    ),

    proTip: "Use HSL format when you need to adjust colors programmatically - it's much easier to create color variations by adjusting the lightness or saturation values while keeping the hue constant. This is perfect for creating color themes and palettes.",

    faqs: [
      {
        question: "What hex color is this?",
        answer: "To identify a hex color, use our color picker tool or enter a hex code like #FF5733. Our tool instantly shows you the color preview and all related formats (RGB, HSL, RGBA, HSLA)."
      },
      {
        question: "What RGB color is this?",
        answer: "To identify an RGB color, enter the RGB values (0-255 for each channel) in our converter. For example, rgb(255, 87, 51) produces a coral-orange color. You can also use the color picker to visually select colors."
      },
      {
        question: "What hex code is white?",
        answer: "White hex code is #FFFFFF (or #FFF in shorthand). In RGB, white is rgb(255, 255, 255) - all color channels at maximum intensity."
      },
      {
        question: "What RGB is white?",
        answer: "White in RGB is rgb(255, 255, 255). Each channel (Red, Green, Blue) is at its maximum value of 255, creating pure white light."
      },
      {
        question: "What hex code is black?",
        answer: "Black hex code is #000000 (or #000 in shorthand). In RGB, black is rgb(0, 0, 0) - all color channels at zero."
      },
      {
        question: "What RGB is black?",
        answer: "Black in RGB is rgb(0, 0, 0). All three color channels are set to 0, producing no light and resulting in pure black."
      },
      {
        question: "What hex code is red?",
        answer: "Pure red hex code is #FF0000 (or #F00 in shorthand). In RGB, red is rgb(255, 0, 0) - maximum red channel with green and blue at zero."
      },
      {
        question: "What hex code is gold?",
        answer: "Gold hex code is #FFD700. In RGB, gold is rgb(255, 215, 0). This represents the standard web gold color combining high red, medium-high green, and no blue."
      },
      {
        question: "How many hex codes are there?",
        answer: "There are 16,777,216 possible hex color codes (256 × 256 × 256). Each color channel can have 256 values (00-FF in hex, 0-255 in decimal)."
      },
      {
        question: "How hex codes work?",
        answer: "Hex codes represent RGB values in hexadecimal (base-16). Each hex code has 6 characters after #, representing Red (2 chars), Green (2 chars), and Blue (2 chars). For example, #FF5733 means Red=FF (255), Green=57 (87), Blue=33 (51)."
      },
      {
        question: "How RGB works?",
        answer: "RGB works by mixing Red, Green, and Blue light in different intensities (0-255 each). RGB is an additive color model - colors are created by adding light together. Maximum all channels (255,255,255) = white; zero all channels (0,0,0) = black."
      },
      {
        question: "Why RGB and not RYB?",
        answer: "RGB is used instead of RYB because digital screens emit light (additive color), not reflect it. RYB (Red-Yellow-Blue) is for pigments and paint (subtractive color). RGB matches how human eyes perceive color through red, green, and blue receptors."
      },
      {
        question: "Can RGB make any color?",
        answer: "RGB can make 16.7 million colors, but not ALL colors visible to human eyes. The sRGB color space covers about 35% of visible colors. Some highly saturated colors (especially deep cyans and certain oranges) fall outside RGB gamut."
      },
      {
        question: "When is RGB and CMYK used?",
        answer: "RGB is used for digital screens (websites, apps, displays, photography). CMYK is used for printing (business cards, brochures, magazines). RGB must be converted to CMYK for print, though some RGB colors can't be accurately reproduced in CMYK."
      },
      {
        question: "How to convert hex to decimal?",
        answer: "Convert hex to decimal by converting each hexadecimal digit to its decimal equivalent. Each position represents powers of 16. For example, FF in hex = (15×16¹) + (15×16⁰) = 240+15 = 255 in decimal."
      },
      {
        question: "Can RGB make yellow?",
        answer: "Yes, RGB makes yellow by combining red and green at maximum intensity: rgb(255, 255, 0). In additive color mixing, red light + green light = yellow light."
      },
      {
        question: "What is a color converter?",
        answer: "A color converter is a tool that transforms colors between different formats (Hex, RGB, HSL, CMYK, etc.). Our tool handles hex to RGB, RGB to hex, HSL conversions, RGBA with transparency, and professional formats like Pantone and RAL."
      },
      {
        question: "Why hex code?",
        answer: "Hex codes are used because they're compact (6 characters for millions of colors), easy to read, and work perfectly in HTML/CSS. Hexadecimal efficiently represents binary data - each hex digit equals 4 binary bits."
      },
      {
        question: "How RGB makes white?",
        answer: "RGB makes white by combining all three colors at maximum intensity (255, 255, 255). Red light + green light + blue light at full power = white light. This is additive color mixing."
      },
      {
        question: "How many RGB values are there?",
        answer: "There are 256 possible values per RGB channel (0-255), totaling 16,777,216 color combinations (256³ = 16.7 million colors)."
      }
    ],

    relatedTools: [
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "All Developer Tools", href: "/dev-tools" }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function HexToRGBPage() {
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
