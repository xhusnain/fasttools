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
  metaTitle: "Temperature Converter — Celsius to Fahrenheit Calculator Free",
  metaDescription:
    "Free temperature converter for Celsius to Fahrenheit and Fahrenheit to Celsius. Instant C to F and F to C conversion with formulas, reference table for cooking, weather, body temp, and science — no signup required.",
  path: "/converters/temperature",

  header: {
    title: "Temperature Converter",
    description:
      "Convert Celsius to Fahrenheit, Fahrenheit to Celsius, and Kelvin instantly using the standard formulas. Includes a quick-reference table for cooking temps, body temperature, weather readings, and scientific values.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Temperature Converter", href: "/converters/temperature" },
  ],

  content: {
    definition:
      "A Temperature Converter is a free tool that converts between Celsius, Fahrenheit, and Kelvin temperature scales instantly.",
    quickAnswer:
      "Enter a temperature value in Celsius, Fahrenheit, or Kelvin and see the equivalent in all other scales instantly. Formula: °F = (°C × 9/5) + 32. Useful for cooking, weather, science, and travel.",
    keyTakeaways: [
      "Converts between Celsius, Fahrenheit, and Kelvin in real time",
      "°F = (°C × 9/5) + 32 and °C = (°F − 32) × 5/9",
      "Water freezes at 0°C / 32°F and boils at 100°C / 212°F",
      "Kelvin starts at absolute zero (−273.15°C) — used in science",
      "−40° is the same in both Celsius and Fahrenheit",
    ],
    overview:
      "This free temperature converter instantly calculates Celsius to Fahrenheit (C to F) and Fahrenheit to Celsius (F to C) using the standard conversion formulas. Whether you are converting oven temperatures for a recipe from a European cookbook, checking weather forecasts in unfamiliar units while traveling, verifying body temperature readings between medical systems, or doing science homework involving Kelvin, this tool delivers accurate results as you type. The converter uses the exact formulas: F = (C x 9/5) + 32 and C = (F - 32) x 5/9, with no rounding errors. It includes a quick-reference table for the most commonly searched temperature conversions like 0C to F, 100C to F, 37C to F, 350F to C, and 180C to F.",

    howToSteps: [
      "Enter a temperature value in the Celsius input field to instantly see the Fahrenheit equivalent calculated using F = (C x 9/5) + 32.",
      "Or enter a Fahrenheit value to convert to Celsius using the formula C = (F - 32) x 5/9.",
      "Use the one-click swap button to reverse the conversion direction without re-entering values.",
      "Refer to the common temperature reference table below for quick lookups of cooking, weather, and body temperature values.",
      "Copy the converted result for use in recipes, homework, travel planning, or technical documentation.",
    ],

    features: [
      "Two-way Celsius to Fahrenheit and Fahrenheit to Celsius conversion with exact formulas",
      "Real-time output that updates instantly as you type — no submit button needed",
      "One-click swap to reverse conversion direction between C and F",
      "Common temperature reference table covering freezing point, boiling point, body temp, and oven temperatures",
      "Mobile-friendly responsive design for quick conversions on any device",
      "Completely free with no signup, no ads blocking results, and no usage limits",
    ],

    useCases: [
      "Cooking and baking — convert oven temperatures between Celsius and Fahrenheit for international recipes (e.g., 180C to 356F, 350F to 177C)",
      "Weather forecasts — translate temperature readings when traveling between metric and imperial countries",
      "Medical and health — convert body temperature between 37C and 98.6F for fever checks across different thermometer scales",
      "Science and engineering — convert lab temperatures, material properties, and thermodynamic calculations between Celsius, Fahrenheit, and Kelvin",
      "HVAC and home automation — set thermostat temperatures when working with equipment calibrated in different units",
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Understanding Temperature Scales: Celsius vs Fahrenheit vs Kelvin
          </h3>
          <p className="text-muted-foreground">
            The three main temperature scales used worldwide are Celsius, Fahrenheit, and Kelvin. Celsius (also called centigrade) was developed by Anders Celsius in 1742 and sets water&apos;s freezing point at 0 degrees and boiling point at 100 degrees at standard atmospheric pressure. It is the standard unit in most countries and in scientific contexts. Fahrenheit was proposed by Daniel Gabriel Fahrenheit in 1724 and is primarily used in the United States, the Bahamas, and a few other territories. It sets water&apos;s freezing point at 32 degrees and boiling point at 212 degrees. Kelvin, used in physics and engineering, starts at absolute zero (-273.15C / -459.67F) — the theoretical point where all molecular motion stops.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Temperature Conversion Formulas
          </h3>
          <p className="text-muted-foreground">
            Celsius to Fahrenheit: F = (C x 9/5) + 32. Fahrenheit to Celsius: C = (F - 32) x 5/9. Celsius to Kelvin: K = C + 273.15. A quick mental math trick: to roughly estimate Celsius to Fahrenheit, double the Celsius value and add 30 (e.g., 20C becomes approximately 70F, actual is 68F). The two scales intersect at exactly -40 degrees — the only temperature that reads the same in both Celsius and Fahrenheit.
          </p>
        </div>

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
              <tr>
                <td className="p-3 font-semibold">Oven (Moderate)</td>
                <td className="p-3">180°C</td>
                <td className="p-3">356°F</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Oven (Hot)</td>
                <td className="p-3">220°C</td>
                <td className="p-3">428°F</td>
              </tr>
            </tbody>
          </GTable>
        </div>
      </div>
    ),

    proTip:
      "For a quick mental estimate of Celsius to Fahrenheit, double the Celsius value and add 30. For example, 25C becomes roughly 80F (actual: 77F). This shortcut is accurate enough for weather and daily use within about 3-4 degrees.",

    faqs: [
      {
        question: "What is the formula to convert Celsius to Fahrenheit?",
        answer:
          "The Celsius to Fahrenheit formula is F = (C x 9/5) + 32. For example, to convert 100 degrees Celsius to Fahrenheit: (100 x 9/5) + 32 = 212F. This converter applies the formula automatically and instantly as you type, with full decimal precision.",
      },
      {
        question: "How do I convert Fahrenheit to Celsius?",
        answer:
          "Use the formula C = (F - 32) x 5/9. For example, to convert 72 degrees Fahrenheit to Celsius: (72 - 32) x 5/9 = 22.22C. Enter any Fahrenheit value in this converter and the Celsius result appears instantly without needing to calculate manually.",
      },
      {
        question: "What is 37 degrees Celsius in Fahrenheit (body temperature)?",
        answer:
          "37 degrees Celsius equals 98.6 degrees Fahrenheit. This is the normal human body temperature. A fever is generally considered to start at 38C (100.4F). Medical professionals in the US use Fahrenheit, while most other countries use Celsius for body temperature readings.",
      },
      {
        question: "How do I convert oven temperatures between Celsius and Fahrenheit for cooking?",
        answer:
          "Common oven temperature conversions: 150C = 302F (slow oven), 180C = 356F (moderate oven, most baking), 200C = 392F (hot oven), 220C = 428F (very hot), 250C = 482F (pizza/broiling). European recipes typically use Celsius while American recipes use Fahrenheit. Gas mark conversions: Gas Mark 4 = 180C = 350F.",
      },
      {
        question: "What temperature is the same in both Celsius and Fahrenheit?",
        answer:
          "The two scales intersect at exactly -40 degrees. At -40, Celsius and Fahrenheit read the same value. This can be verified with the formula: (-40 x 9/5) + 32 = -72 + 32 = -40. It is the only temperature where both scales produce an identical reading.",
      },
      {
        question: "What is absolute zero in Celsius and Fahrenheit?",
        answer:
          "Absolute zero is -273.15 degrees Celsius or -459.67 degrees Fahrenheit (0 Kelvin). It is the theoretical lowest possible temperature where all atomic and molecular motion stops. Absolute zero has never been reached in a laboratory, though scientists have cooled atoms to within billionths of a degree above it.",
      },
      {
        question: "Is this temperature converter free to use?",
        answer:
          "Yes. This temperature converter is completely free with no signup, no account required, and no usage limits. It works entirely in your browser for instant Celsius to Fahrenheit and Fahrenheit to Celsius conversions.",
      },
    ],

    relatedTools: [
      { name: "Length Converter", href: "/converters/length" },
      { name: "Conversion Calculator (units)", href: "/calculator/conversion-calculator" },
      { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
      { name: "Time Zone Converter", href: "/converters/timezone" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TemperatureConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TemperatureConverter />)} />
}
