import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"
import { Code, Binary, Shield } from "lucide-react"

const IntegerBaseConverter = dynamic(
  () =>
    import("@/components/converters/integer-base-converter").then(
      (mod) => mod.IntegerBaseConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Integer Base Converter",
  description:
    "Convert integers between binary, decimal, hexadecimal, and any base 2-64. Free online calculator with steps, prefix detection, and instant results.",
  metaTitle: "Integer Base Converter -- Binary Decimal Hex Octal Base 2-64 Free",
  metaDescription:
    "Free integer base converter for binary, decimal, hexadecimal, octal, and any base 2-64. Auto-detects 0x/0b/0o prefixes, shows step-by-step conversion, supports negative numbers and BigInt precision. No signup.",
  path: "/converters/integer-base",
  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description: "Free online integer base converter for binary, decimal, hexadecimal, octal, and any numeral base from 2 to 64 with step-by-step conversion and BigInt precision.",
    featureList: [
      "Bases 2-64 (competitors only do 2, 8, 10, 16)",
      "Prefix auto-detection (0x, 0b, 0o)",
      "Negative number support",
      "Step-by-step conversions",
      "Export functionality",
    ],
  },

  header: {
    title: "Integer Base Converter",
    description:
      "Convert integers between binary (base 2), octal (base 8), decimal (base 10), hexadecimal (base 16), and any numeral base from 2 to 64. Auto-detects 0x, 0b, and 0o prefixes, displays step-by-step conversion logic, handles negative numbers, and uses BigInt for arbitrary-precision large number support.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Integer Base Converter", href: "/converters/integer-base" },
  ],

  content: {
    definition:
      "An Integer Base Converter is a free tool that converts numbers between binary, octal, decimal, hexadecimal, and any numeral base from 2 to 64.",
    quickAnswer:
      "Enter a number and select the source base to instantly see conversions across all common bases (binary, octal, decimal, hex). Supports custom bases up to 64, auto-detects 0x/0b/0o prefixes, and handles negative numbers.",
    keyTakeaways: [
      "Converts between binary (base 2), octal (8), decimal (10), and hex (16)",
      "Supports any base from 2 to 64 for specialized use cases",
      "Auto-detects 0x (hex), 0b (binary), and 0o (octal) prefixes",
      "Handles negative numbers and shows conversion steps",
      "Hex uses 0–9 and A–F: decimal 255 = hex FF = binary 11111111",
    ],
    overview:
      "This free integer base converter transforms numbers between all major numeral systems and any custom base from 2 to 64. Convert between binary (base 2), octal (base 8), decimal (base 10), hexadecimal (base 16), base 36, base 64, and any arbitrary base -- far beyond the 4-base limitation of most online calculators. The converter auto-detects input format through prefix recognition (0x for hexadecimal, 0b for binary, 0o for octal), supports signed negative numbers across all bases, and displays step-by-step conversion logic showing the mathematical process of dividing by the target base and collecting remainders. Built with BigInt for arbitrary precision, it handles very large integers (cryptographic keys, hash values, memory addresses) without loss of accuracy. Export all conversion results or copy individual values. 100% client-side, no data leaves your browser.",

    howToSteps: [
      "Enter your number—use 0x2a for hex, 0b101010 for binary, or 42 for decimal. Prefixes auto-detect the base.",
      "Choose input base (2–64) or let the tool detect it. Quick presets for binary, octal, decimal, hex.",
      "View conversions for all bases at once: binary, octal, decimal, hex, base 36, base 64, and custom.",
      "Enable hex uppercase, output prefixes, or digit grouping in Settings as needed.",
      "Copy any result or export all conversions. Handles large numbers with BigInt precision.",
    ],

    features: [
      "Bases 2–64—beyond the usual binary, octal, decimal, hex",
      "Prefix auto-detection (0x, 0b, 0o) for instant format recognition",
      "Negative number support across all bases",
      "Step-by-step conversions; bit and byte length for binary",
      "Export all conversions; 100% client-side, no signup",
    ],

    useCases: [
      "Hex color codes, memory addresses, bit masks—convert between formats instantly.",
      "Debugging: translate binary/hex from logs or debuggers to readable decimal.",
      "Computer science: verify base conversion for coursework and exams.",
      "Unix chmod: convert octal (755) to binary for file permissions.",
      "Web dev: CSS colors, port numbers, API IDs across bases.",
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Binary className="h-6 w-6 text-primary" />
            What is an Integer Base Converter?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            An integer base converter transforms numbers between different numeral systems (bases). Common conversions include binary (base 2), octal (base 8), decimal (base 10), and hexadecimal (base 16). This tool supports bases 2 through 64—more than most online calculators. Programmers use it for memory addresses, color codes, and file permissions. The base conversion formula: to decimal, multiply each digit by base^position; from decimal, divide by target base and collect remainders.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            Decimal to Binary Conversion Chart
          </h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Decimal</th>
                  <th className="p-3 text-left">Binary</th>
                  <th className="p-3 text-left">Octal</th>
                  <th className="p-3 text-left">Hexadecimal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {[
                  [0, "0", "0", "0x0"],
                  [1, "1", "1", "0x1"],
                  [2, "10", "2", "0x2"],
                  [3, "11", "3", "0x3"],
                  [4, "100", "4", "0x4"],
                  [5, "101", "5", "0x5"],
                  [8, "1000", "10", "0x8"],
                  [10, "1010", "12", "0xa"],
                  [15, "1111", "17", "0xf"],
                  [16, "10000", "20", "0x10"],
                  [20, "10100", "24", "0x14"],
                  [42, "101010", "52", "0x2a"],
                  [50, "110010", "62", "0x32"],
                  [100, "1100100", "144", "0x64"],
                  [255, "11111111", "377", "0xff"],
                  [256, "100000000", "400", "0x100"],
                  [512, "1000000000", "1000", "0x200"],
                  [1000, "1111101000", "1750", "0x3e8"],
                  [1024, "10000000000", "2000", "0x400"],
                ].map(([dec, bin, oct, hex]) => (
                  <tr key={dec as number}>
                    <td className="p-3 font-mono">{dec}</td>
                    <td className="p-3 font-mono">{bin}</td>
                    <td className="p-3 font-mono">{oct}</td>
                    <td className="p-3 font-mono">{hex}</td>
                  </tr>
                ))}
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy & Security
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            All conversions run in your browser. Your numbers are never sent to servers. Uses BigInt for arbitrary precision—handles very large integers without loss. Safe for keys, hashes, and debug data.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Use 0x, 0b, 0o prefixes for instant base detection without manually selecting the input base. Enable digit grouping for long binary and hexadecimal numbers to improve readability (e.g., 1111 0000 instead of 11110000). For debugging hex color codes, memory addresses, or bit masks, use the simultaneous multi-base output to see all representations at once.",

    faqs: [
      {
        question: "How to convert binary to decimal?",
        answer:
          "To convert binary to decimal: multiply each bit by 2^position (from right to left, starting at 0) and sum the results. Example: 1011₂ = (1×2³)+(0×2²)+(1×2¹)+(1×2⁰) = 8+0+2+1 = 11₁₀. Use our converter above for instant results.",
      },
      {
        question: "How to convert decimal to hexadecimal?",
        answer:
          "Divide the decimal number by 16 repeatedly, collecting remainders. Read remainders bottom-to-top. Example: 42÷16=2 remainder 10(A), 2÷16=0 remainder 2, result: 2A₁₆. Our calculator shows each step automatically.",
      },
      {
        question: "How do I convert decimal to any base?",
        answer:
          "Enter your decimal number, select the target base (2–64), and the tool shows the result. For binary, octal, or hex, use the preset buttons. All common bases display at once—no need to convert one at a time.",
      },
      {
        question: "What is a base converter calculator?",
        answer:
          "A base converter calculator converts numbers between numeral systems—binary (2), octal (8), decimal (10), hexadecimal (16), and more. Ours supports bases 2–64, auto-detects 0x/0b/0o prefixes, and shows step-by-step conversions.",
      },
      {
        question: "Is there an integer base converter online with steps?",
        answer:
          "Yes. This integer base converter shows conversions with steps: enter your number, pick the input base, and view results for binary, octal, decimal, hex, base 36, base 64, and any custom base. Export or copy any result.",
      },
      {
        question: "Does the base converter support negative numbers?",
        answer:
          "Yes. Enter a minus sign before the number (e.g., -42 or -0xff). The converter handles signed integers correctly across all bases.",
      },
      {
        question: "Is my data sent to a server?",
        answer:
          "No. All conversion logic runs in your browser. Your input and results never leave your device.",
      },
    ],

    relatedTools: [
      { name: "Hex to RGB", href: "/dev-tools/hex-to-rgb" },
      { name: "JWT Decoder", href: "/dev-tools/jwt-decoder" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "Length Converter", href: "/converters/length" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function IntegerBaseConverterPage() {
  return (
    <ToolPageLayout {...toolConfig.getLayoutProps(<IntegerBaseConverter />)} />
  )
}
