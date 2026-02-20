import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const TemperatureConverter = dynamic(
  () =>
    import("@/components/converters/temperature-converter").then(
      (mod) => mod.TemperatureConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Temperature Converter",
  description:
    "Convert temperatures between Celsius and Fahrenheit instantly for cooking, weather, and daily use.",
  metaTitle: "Temperature Converter (Celsius to Fahrenheit)",
  metaDescription:
    "Free Celsius to Fahrenheit temperature converter. Convert C to F and F to C instantly with accurate formulas.",
  path: "/converters/temperature",
  keywords: [
    "temperature converter",
    "celsius to fahrenheit",
    "fahrenheit to celsius",
    "c to f converter",
    "f to c converter",
    "oven temperature converter",
  ],

  header: {
    title: "Temperature Converter",
    description:
      "Convert values between Celsius and Fahrenheit with instant updates and quick-reference points.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Temperature Converter", href: "/converters/temperature" },
  ],

  content: {
    overview:
      "This tool converts Celsius to Fahrenheit and Fahrenheit to Celsius in real time. It is useful for recipes, weather reports, classroom work, and everyday temperature checks.",

    howToSteps: [
      "Enter a value in the Celsius field to get Fahrenheit instantly.",
      "Or enter a value in Fahrenheit to convert back to Celsius.",
      "Use the swap button to switch directions quickly.",
      "Check common reference values in the quick table below.",
    ],

    features: [
      "Two-way Celsius and Fahrenheit conversion",
      "Instant real-time output",
      "Swap input values with one click",
      "Common temperature reference table",
      "Mobile-friendly input and results",
      "No signup required",
    ],

    useCases: [
      "Converting oven or cooking temperatures",
      "Reading weather data from different regions",
      "School and science homework",
      "Body-temperature unit checks",
      "Travel-related unit conversion",
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h3 className="mb-3 text-lg font-bold text-heading-accent">
            Common Temperature References
          </h3>
          <GTable>
            <thead className="bg-muted font-semibold text-foreground">
              <tr>
                <th className="p-3">Reference</th>
                <th className="p-3">Celsius</th>
                <th className="p-3">Fahrenheit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold">Water Freezes</td>
                <td className="p-3">0°C</td>
                <td className="p-3">32°F</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Room Temperature</td>
                <td className="p-3">20°C</td>
                <td className="p-3">68°F</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Body Temperature</td>
                <td className="p-3">37°C</td>
                <td className="p-3">98.6°F</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Water Boils</td>
                <td className="p-3">100°C</td>
                <td className="p-3">212°F</td>
              </tr>
            </tbody>
          </GTable>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "What is the Celsius to Fahrenheit formula?",
        answer:
          "Use °F = (°C × 9/5) + 32. The converter applies this formula automatically as you type.",
      },
      {
        question: "What is the Fahrenheit to Celsius formula?",
        answer:
          "Use °C = (°F − 32) × 5/9. Enter Fahrenheit and the tool will calculate Celsius instantly.",
      },
      {
        question: "Can I use this for cooking temperatures?",
        answer:
          "Yes. It is useful for converting recipe and oven temperatures between Celsius and Fahrenheit.",
      },
      {
        question: "Does this page convert Kelvin too?",
        answer:
          "This page currently supports Celsius and Fahrenheit conversion only.",
      },
      {
        question: "Is this temperature converter free?",
        answer: "Yes. It is free to use with no signup.",
      },
    ],

    relatedTools: [
      { name: "Length Converter", href: "/converters/length" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Time Zone Converter", href: "/converters/timezone" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TemperatureConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TemperatureConverter />)} />
}
