import { LengthConverter } from "@/components/converters/length-converter"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"
import { Brain } from "lucide-react"

const toolConfig = createToolConfig({
  toolName: "Length Converter",
  description: "Convert length units instantly: meters, feet, inches, centimeters, millimeters, kilometers, yards, miles. Accurate metric and imperial conversion tool for construction, travel, and education.",
  metaTitle: "Length Converter - Convert Length Online (Free) 2026",
  metaDescription: "Free online Length Converter. Convert length units instantly. Fast, accurate, and no signup required.",
  path: "/converters/length",

  header: {
    title: "Free Length Converter",
    description: "Convert meters ⇄ feet, inches ⇄ cm, km ⇄ miles and more with precise, fast results.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Length Converter", href: "/converters/length" },
  ],

  content: {
    overview: "A length converter is an essential tool that transforms measurements between different unit systems, primarily the metric system (meters, centimeters, kilometers) and the imperial system (feet, inches, yards, miles). This tool is indispensable for professionals, students, and everyday users who need to work with measurements from different countries or industries that use varying measurement standards. Our free length converter provides instant, accurate conversions between over 20 different length units, including meters, feet, inches, centimeters, millimeters, kilometers, yards, miles, nautical miles, and even astronomical units. Whether you're working on a construction project, planning international travel, studying science, or simply need to understand measurements from different sources, this tool eliminates the need for manual calculations and conversion tables. The converter uses standardized conversion factors recognized internationally, ensuring precision for critical applications in engineering, construction, manufacturing, and scientific research. All conversions happen instantly in your browser, with no data sent to external servers, ensuring complete privacy and security for your measurements.",

    howToSteps: [
      "Enter Your Value: Type or paste the length value you want to convert in the input field. You can enter values with or without units (e.g., '5.5' or '5.5 meters').",
      "Select Source Unit: Choose the unit of your input value from the dropdown menu. Options include meters, feet, inches, centimeters, kilometers, miles, yards, and many more.",
      "Select Target Unit: Choose the unit you want to convert to. The converter will automatically display the equivalent value in your selected unit.",
      "View Results: The converted value appears instantly in real-time as you type. You can copy the result to your clipboard or use it directly in your work.",
      "Mixed Format Support: For imperial measurements, you can enter values in combined formats like '5 feet 11 inches' or '6\\'11' and the converter will handle them automatically."
    ],

    features: [
      "Instant Accuracy: All conversions use internationally recognized conversion factors, ensuring precision for professional and academic use.",
      "Comprehensive Unit Support: Convert between 20+ length units including metric, imperial, nautical, and scientific units.",
      "Mixed Format Handling: Enter measurements in combined formats like '5 feet 11 inches' or '6\\'11' automatically.",
      "Real-Time Conversion: See results instantly as you type, with no delays or page refreshes.",
      "Privacy and Security: All conversions happen locally in your browser. Your measurements never leave your device.",
      "Mobile-Friendly Design: Works perfectly on smartphones, tablets, and desktop computers.",
      "Completely Free: No registration, no hidden costs, no premium features locked behind paywalls."
    ],

    useCases: [
      "Construction and Architecture: Converting between metric and imperial measurements when working with international building codes, blueprints, or material specifications.",
      "International Travel: Understanding distances in different countries. Converting kilometers to miles when driving in the US, or meters to feet when visiting countries using imperial measurements.",
      "Education and Learning: Students and teachers use length converters to understand measurement systems, complete homework assignments, and prepare for exams.",
      "Fitness and Sports: Converting running distances (miles to kilometers), track measurements, and understanding race distances in different unit systems.",
      "Manufacturing and Engineering: Converting technical specifications, tolerances, and dimensions when working with international suppliers or clients.",
      "Real Estate: Converting property dimensions, lot sizes, and room measurements between different measurement systems.",
      "Scientific Research: Converting measurements in scientific papers, laboratory data, and research findings that may use different unit systems."
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-3 text-heading-accent">What is Length?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Length is a measure of distance. In the International System of Units, the meter is the base unit of length. It is defined by the distance light travels in a vacuum in 1/299,792,458 of a second.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-heading-accent">Common Conversion Factors</h3>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3">Unit</th>
                <th className="p-3">Metric Equivalent</th>
                <th className="p-3">Imperial Equivalent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold">1 Inch</td>
                <td className="p-3">2.54 cm</td>
                <td className="p-3">0.0833 feet</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">1 Foot</td>
                <td className="p-3">30.48 cm</td>
                <td className="p-3">12 inches</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">1 Yard</td>
                <td className="p-3">0.9144 meters</td>
                <td className="p-3">3 feet</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">1 Mile</td>
                <td className="p-3">1.609 km</td>
                <td className="p-3">5,280 feet</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">1 Meter</td>
                <td className="p-3">-</td>
                <td className="p-3">3.281 feet</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">1 Kilometer</td>
                <td className="p-3">1,000 meters</td>
                <td className="p-3">0.621 miles</td>
              </tr>
            </tbody>
          </GTable>
        </div>

        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 rounded-r-lg my-8">
          <h4 className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-200 mb-2">
            <Brain className="h-5 w-5" />
            Expert Insight: The Cost of Conversion Errors
          </h4>
          <p className="italic text-blue-700 dark:text-blue-300">
            "Never mix units without explicit conversion. The $327 million Mars Climate Orbiter was lost in 1999 because one engineering team used metric units (Newtons) while another used Imperial (pound-force). Always declare your units clearly in specifications."
          </p>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">— FastTools Engineering</p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "How do I convert between feet+inches and centimeters accurately?",
        answer: "Enter feet and inches in the mixed format (for example, 5 ft 11 in). The tool normalizes it and converts directly to centimeters using exact definitions (1 in = 2.54 cm). For reverse, convert cm to decimal feet and optionally split back into ft+in."
      },
      {
        question: "What precision should I use for construction measurements?",
        answer: "Match the smallest practical unit on site. For wood framing, 1/16 in (≈1.6 mm) is common; for metalwork, tighter tolerances may be needed. Keep internal precision high but round displays for readability, then note the rounding rule on drawings."
      },
      {
        question: "Meters to feet: why doesn't my calculator match my colleague's number?",
        answer: "Differences usually come from rounding at different steps. Convert once with full precision, then round at the end to an agreed decimal or fractional inch. If values must match exactly, share the factor and rounding policy with your team."
      },
      {
        question: "Can I paste values with units (like '3.2 m' or '12 in')?",
        answer: "Yes—unit‑aware parsing accepts common suffixes. If the input is ambiguous, specify the unit explicitly or use the unit selector. The converter validates and rejects impossible combinations to prevent silent errors."
      },
      {
        question: "What's the difference between decimal feet and feet+inches, and when should I use each?",
        answer: "Decimal feet (e.g., 5.92 ft) is compact and ideal for calculations and spreadsheets. Feet+inches (5 ft 11 in) is human‑friendly on site. Convert to decimal for math, then present as feet+inches for field work."
      },
      {
        question: "How do I convert map scales or drawings accurately?",
        answer: "First convert the drawing measurement to true units using the scale (e.g., 1 cm on paper = 2 m in reality), then change units as needed (m ⇄ ft). Document the scale and unit system on the drawing to avoid misreads."
      },
      {
        question: "Miles vs kilometers: any quick mental checks?",
        answer: "Use 5 miles ≈ 8 km and 1 mile ≈ 1.6 km for estimates. For exact work, rely on the converter and keep one extra decimal place internally before rounding your final number."
      },
      {
        question: "Why do some specs list millimeters instead of centimeters?",
        answer: "Millimeters remove decimal points and reduce rounding ambiguity in fabrication. If a spec is in mm, keep it in mm until the end, then convert for presentation only."
      },
      {
        question: "Can I use the converter offline at a jobsite?",
        answer: "Yes. Length and unit calculations run in your browser. You'll only need a connection to load the page the first time; after that, basic conversions continue to work offline."
      },
      {
        question: "What are the most common unit mistakes to avoid?",
        answer: "Avoid mixing systems within the same figure (e.g., meters and feet together) and avoid early rounding. Convert once, round at the end, and always annotate the unit and precision you used."
      }
    ],

    relatedTools: [
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Temperature Converter", href: "/converters/temperature" },
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "Text Case Converter", href: "/converters/text-case" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function LengthConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<LengthConverter />)} />
}