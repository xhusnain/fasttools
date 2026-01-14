import { TemperatureConverter } from "@/components/converters/temperature-converter"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import Link from "next/link"
import { GTable } from "@/ui/gtable"
import { Brain } from "lucide-react"

const toolConfig = createToolConfig({
  toolName: "Temperature Converter",
  description: "Convert temperatures instantly between Celsius & Fahrenheit. Ideal for weather, cooking, science projects & travel.",
  metaTitle: "Temperature Converter - Convert Temperature Online (Free) 2026",
  metaDescription: "Free online Temperature Converter. Convert temperature scales instantly. Fast, accurate, and no signup required.",
  path: "/converters/temperature",

  header: {
    title: "Temperature Converter - Celsius (°C) ⇄ Fahrenheit (°F)",
    description: "Convert temperatures instantly between Celsius and Fahrenheit scales. Perfect for cooking recipes, weather reports, scientific calculations, and international travel. Get accurate conversions with our free online temperature converter tool.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Temperature Converter", href: "/converters/temperature" },
  ],

  content: {
    overview: "Our free temperature converter and celsius fahrenheit converter online provide instant temperature conversion between Celsius and Fahrenheit scales, making it the best temperature converter online for cooking, weather, science, and travel. Whether you need to convert 100 C to F, convert 32 F to C, or understand what is 180 C in F for baking, this temperature calculator online delivers accurate results instantly. The C to F converter and F to C converter support all common conversions including convert 180C to F for baking, convert 375F to C, convert 400F to C, convert 200C to F, convert 425F to C, convert 160C to F, convert 450F to C, convert 0C to F, convert -40C to F, convert 212F to C, convert 98.6F to C, and convert 37C to F. As a comprehensive temperature converter for cooking, our tool helps with oven temperature C to F conversions, baking temperature C to F adjustments, and provides a complete kitchen temperature guide for recipes. The weather temperature converter feature helps understand weather temperature scales when traveling internationally, while the temperature converter for science supports scientific temperature calculations including kelvin to celsius, kelvin to fahrenheit, celsius to kelvin, and fahrenheit to kelvin conversions. For cooking enthusiasts, the temperature converter for baking, temperature converter for grilling, and temperature converter for air fryer provide specialized conversions like grill temperature C to F, air fryer temperature conversion, and sous vide temperature fahrenheit celsius conversions. Understanding temperature scale conversion is essential for working with international recipes, scientific data, and weather reports. The tool handles convert negative temperatures accurately and explains absolute zero in C and F, while the formula C to F and F to C is clearly displayed for educational purposes. Common reference points like room temperature C to F, fever temperature C to F, body temperature C to F, water boiling point C to F, and water freezing point F to C are instantly available. As a quick temperature converter and instant C to F conversion tool, our temperature converter with live preview shows results in real-time, making it perfect for cooking, weather monitoring, and scientific work. The thermometer conversion C F feature helps calibrate devices, while the temperature table C F provides quick reference for common conversions. Whether you're using this as a free online temperature converter, best temperature converter online, or temperature converter tool online, our platform serves as both a celsius to fahrenheit converter free and fahrenheit to celsius converter free, providing comprehensive temperature conversion capabilities for all your needs.",

    howToSteps: [
      "Enter a Value in °C or °F: Type a temperature in Celsius or Fahrenheit and the other updates automatically. Copy results or round to common cooking increments.",
      "Understand the Formula: °F = (°C × 9/5) + 32 and °C = (°F − 32) × 5/9."
    ],

    features: [
      "Celsius ⇄ Fahrenheit conversion",
      "Instant real-time results",
      "Mobile-friendly interface",
      "Cooking temperature guide",
      "Weather temperature ranges",
      "Scientific calculations (Kelvin)",
      "Precise results",
      "Negative temperature support"
    ],

    useCases: [
      "Cooking & Baking: Convert recipe temperatures for ovens and grills.",
      "Weather & Travel: Understand local forecasts when traveling abroad.",
      "Science & Education: Perform accurate conversions for lab experiments.",
      "Health Monitoring: Check body temperature readings on different thermometers.",
      "Industrial Processes: Monitor temperature-sensitive manufacturing steps."
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-3 text-heading-accent">What is Temperature?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Temperature is a physical quantity that expresses hot and cold. It is the manifestation of thermal energy, present in all matter, which is the source of the occurrence of heat, a flow of energy, when a body is in contact with another that is colder or hotter.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-heading-accent">Common Temperature Reference Points</h3>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3">Reference Point</th>
                <th className="p-3">Celsius (°C)</th>
                <th className="p-3">Fahrenheit (°F)</th>
                <th className="p-3">Kelvin (K)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold">Absolute Zero</td>
                <td className="p-3">-273.15°C</td>
                <td className="p-3">-459.67°F</td>
                <td className="p-3">0 K</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Water Freezing</td>
                <td className="p-3 text-blue-500 font-bold">0°C</td>
                <td className="p-3 text-blue-500 font-bold">32°F</td>
                <td className="p-3">273.15 K</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Room Temp</td>
                <td className="p-3">20°C</td>
                <td className="p-3">68°F</td>
                <td className="p-3">293.15 K</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Human Body</td>
                <td className="p-3">37°C</td>
                <td className="p-3">98.6°F</td>
                <td className="p-3">310.15 K</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Water Boiling</td>
                <td className="p-3 text-red-500 font-bold">100°C</td>
                <td className="p-3 text-red-500 font-bold">212°F</td>
                <td className="p-3">373.15 K</td>
              </tr>
            </tbody>
          </GTable>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-heading-accent">Temperature Scale Comparison</h3>
          <p className="text-muted-foreground text-sm mb-2">
            Understanding different temperature scales helps you work with international recipes, weather reports, and scientific data:
          </p>
          <ul className="list-disc pl-4 text-muted-foreground text-sm space-y-1">
            <li><strong>Celsius (°C):</strong> Water freezes at 0°C, boils at 100°C</li>
            <li><strong>Fahrenheit (°F):</strong> Water freezes at 32°F, boils at 212°F</li>
            <li><strong>Kelvin (K):</strong> Absolute zero at 0K, same degree size as Celsius</li>
            <li><strong>Rankine (°R):</strong> Absolute zero at 0°R, same degree size as Fahrenheit</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-heading-accent">Cooking Temperature Guide</h3>
          <p className="text-muted-foreground text-sm mb-2">
            Essential cooking temperatures for different techniques and foods:
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-bold mb-1 text-heading-accent">Baking and Roasting</h4>
              <ul className="list-disc pl-4 text-muted-foreground text-sm space-y-1">
                <li><strong>Slow Baking:</strong> 120°C / 250°F - Cakes, breads</li>
                <li><strong>Moderate Baking:</strong> 180°C / 350°F - Cookies, muffins</li>
                <li><strong>Hot Baking:</strong> 220°C / 425°F - Pizzas, pastries</li>
                <li><strong>Very Hot:</strong> 250°C / 480°F - Bread crusts, pizza stones</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-1 text-heading-accent">Meat Cooking Temperatures</h4>
              <ul className="list-disc pl-4 text-muted-foreground text-sm space-y-1">
                <li><strong>Rare Beef:</strong> 52°C / 125°F</li>
                <li><strong>Medium Rare:</strong> 57°C / 135°F</li>
                <li><strong>Medium:</strong> 63°C / 145°F</li>
                <li><strong>Well Done:</strong> 71°C / 160°F</li>
                <li><strong>Poultry:</strong> 74°C / 165°F</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-heading-accent">Weather Temperature Ranges</h3>
          <p className="text-muted-foreground text-sm mb-2">
            Understanding weather temperature ranges helps you dress appropriately and plan activities:
          </p>
          <ul className="list-disc pl-4 text-muted-foreground text-sm space-y-1">
            <li><strong>Extreme Cold:</strong> Below -18°C / 0°F</li>
            <li><strong>Very Cold:</strong> -18°C to -7°C / 0°F to 20°F</li>
            <li><strong>Cold:</strong> -7°C to 4°C / 20°F to 40°F</li>
            <li><strong>Cool:</strong> 4°C to 13°C / 40°F to 55°F</li>
            <li><strong>Mild:</strong> 13°C to 21°C / 55°F to 70°F</li>
            <li><strong>Warm:</strong> 21°C to 29°C / 70°F to 85°F</li>
            <li><strong>Hot:</strong> 29°C to 38°C / 85°F to 100°F</li>
            <li><strong>Extreme Heat:</strong> Above 38°C / 100°F</li>
          </ul>
        </div>
        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 rounded-r-lg my-8">
          <h4 className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-200 mb-2">
            <Brain className="h-5 w-5" />
            Expert Insight: Absolute Zero
          </h4>
          <p className="italic text-blue-700 dark:text-blue-300">
            "In classical thermodynamics, Absolute Zero (0 Kelvin) is the theoretical limit where all molecular motion ceases. It is equivalent to -273.15°C. At this temperature, a system possesses the minimum possible amount of energy."
          </p>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">— FastTools Science Team</p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "What's the easiest way to convert temperatures between Celsius and Fahrenheit?",
        answer: "The most straightforward method is using our online temperature converter, which provides instant and accurate results. For quick mental calculations, you can double the Celsius temperature and add 30 to approximate Fahrenheit (e.g., 20°C ≈ 70°F), or subtract 30 from Fahrenheit and divide by 2 for Celsius."
      },
      {
        question: "Why do different countries use different temperature scales, and which one should I use?",
        answer: "The US uses Fahrenheit, while most other countries use Celsius. Use Celsius for international communication and scientific work (or Kelvin). Use Fahrenheit for US audiences. In cooking, follow the scale specified in your recipe or oven settings."
      },
      {
        question: "How do I convert cooking temperatures, and why do oven temperatures matter so much?",
        answer: "Precise temperature is crucial for baking. Common conversions: 350°F = 180°C (moderate), 425°F = 220°C (hot). Most ovens have 5°F or 10°F increments, so round accordingly. Altitude also affects boiling points and baking times."
      },
      {
        question: "What's the difference between body temperature measurements and why does it matter for medical purposes?",
        answer: "Normal body temperature is 37°C (98.6°F). Fever thresholds vary by measurement method (oral, rectal, ear). Always use the scale specified by your healthcare provider and ensure your thermometer is calibrated."
      },
      {
        question: "How does altitude affect temperature measurements and conversions?",
        answer: "Altitude lowers the boiling point of water (e.g., water boils at 200°F at 6,500 ft instead of 212°F). This requires increasing cooking times or oven temperatures for baking. Scientific instruments may also need altitude compensation."
      },
      {
        question: "What are the most common temperature conversion mistakes, and how can I avoid them?",
        answer: "Common mistakes include confusing freezing/boiling points (0°C vs 32°F), forgetting the +/- 32 offset, and using the wrong fraction (9/5 vs 5/9). Always double-check your work or use our automated tool for critical conversions."
      },
      {
        question: "How do I convert temperatures for scientific experiments and industrial applications?",
        answer: "Use Kelvin for scientific work as it starts at absolute zero. K = °C + 273.15. For industrial processes, ensure instruments are calibrated and consider environmental factors like pressure and material properties."
      },
      {
        question: "What are some practical tips for using temperature conversions in everyday life?",
        answer: "Learn key reference points: 0°C=32°F (freezing), 20°C=68°F (room), 37°C=98.6°F (body). Use weather apps with toggleable units. For cooking, keep a conversion chart handy in the kitchen."
      }
    ],

    relatedTools: [
      { name: "Length Converter", href: "/converters/length" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Timezone Converter", href: "/converters/timezone" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function TemperatureConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TemperatureConverter />)} />
}