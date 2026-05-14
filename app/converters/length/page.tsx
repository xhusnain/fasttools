import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const LengthConverter = dynamic(
  () => import("@/components/converters/length-converter").then((mod) => mod.LengthConverter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Length Converter",
  description:
    "Convert between metric and imperial length units instantly. Supports millimeters, centimeters, meters, kilometers, inches, feet, yards, miles, nautical miles, and more with adjustable decimal precision.",
  metaTitle: "Length Converter — Convert Meters, Feet, Inches, Km, Miles Free",
  metaDescription:
    "Free length and distance unit converter. Convert meters to feet, inches to cm, km to miles, yards to meters, and more. Supports metric, imperial, and nautical units with adjustable precision. Instant results.",
  path: "/converters/length",

  header: {
    title: "Length & Distance Unit Converter",
    description:
      "Convert between metric and imperial length units instantly. Supports millimeters (mm), centimeters (cm), meters (m), kilometers (km), inches (in), feet (ft), yards (yd), miles (mi), and nautical miles with adjustable decimal precision for construction, engineering, travel, and scientific calculations.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Length Converter", href: "/converters/length" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Length and distance unit converter for metric and imperial systems. Convert meters to feet, inches to centimeters, kilometers to miles, and more with adjustable decimal precision.",
    alternateName: ["Unit Length Converter", "Metric Imperial Converter", "Distance Converter", "Meters to Feet Converter", "Inches to CM Converter"],
    featureList: [
      "Metric units: millimeters, centimeters, meters, kilometers",
      "Imperial units: inches, feet, yards, miles",
      "Meters to feet and feet to meters conversion",
      "Inches to centimeters and cm to inches conversion",
      "Kilometers to miles and miles to km conversion",
      "Adjustable decimal precision (0-10 places)",
      "Real-time bidirectional unit conversion",
      "Unit swap button for quick reversal",
      "No signup required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A Length Converter is a free online tool that converts between metric and imperial length and distance units including millimeters (mm), centimeters (cm), meters (m), kilometers (km), inches (in), feet (ft), yards (yd), miles (mi), and nautical miles. It provides instant bidirectional conversion with adjustable decimal precision for construction, engineering, scientific, and everyday measurement needs.",
    quickAnswer:
      "Enter a value and select the source unit to see instant conversions across all length units. Key conversion factors: 1 inch = 2.54 cm, 1 foot = 0.3048 m, 1 yard = 0.9144 m, 1 mile = 1.60934 km, 1 meter = 3.28084 feet, 1 kilometer = 0.621371 miles. Results update in real time as you type. Adjust decimal precision from 0 to 10 places for the accuracy your project requires.",
    keyTakeaways: [
      "Converts between all common metric units (mm, cm, m, km) and imperial units (in, ft, yd, mi) instantly",
      "Key factors: 1 inch = 2.54 cm, 1 foot = 30.48 cm = 0.3048 m, 1 mile = 1.60934 km, 1 yard = 0.9144 m",
      "Adjustable decimal precision from 0 to 10 decimal places for engineering and scientific accuracy",
      "Real-time bidirectional conversion — results update instantly as you type or change units",
      "Essential for construction, engineering, travel planning, academic work, real estate, and product dimension specifications",
    ],
    overview:
      "This length and distance converter handles all common metric-to-imperial and imperial-to-metric conversions used in construction, engineering, manufacturing, travel, real estate, and daily life. Convert meters to feet for building plans, inches to centimeters for product dimensions, kilometers to miles for travel distance planning, feet to meters for international specifications, yards to meters for athletic tracks and sports fields, and miles to kilometers for marathon and running distance calculations. The tool supports adjustable decimal precision so you can use high-precision values for engineering calculations (6-10 decimal places) or rounded values for everyday use (0-2 decimal places). The unit swap button lets you instantly reverse the conversion direction, and all results update in real time as you type.",

    howToSteps: [
      "Enter the numeric value you want to convert in the input field (e.g., 5.5 feet, 100 centimeters, 26.2 miles).",
      "Select the source unit (the unit you are converting from) and the target unit (the unit you are converting to).",
      "Review the converted result instantly — the output updates in real time as you type or change units.",
      "Adjust decimal precision using the settings control for more accurate engineering values or rounded everyday results.",
      "Use the swap button to reverse the conversion direction (e.g., switch from feet-to-meters to meters-to-feet instantly).",
    ],

    features: [
      "Full metric unit support: millimeters (mm), centimeters (cm), meters (m), kilometers (km)",
      "Full imperial unit support: inches (in), feet (ft), yards (yd), miles (mi)",
      "Real-time bidirectional conversion with instant result updates as you type",
      "Adjustable decimal precision from 0 to 10 decimal places for engineering-grade accuracy",
      "One-click unit swap button for instant conversion direction reversal",
      "Copy result to clipboard and export options for documentation and reports",
      "Responsive interface optimized for mobile phones, tablets, and desktop browsers",
    ],

    useCases: [
      "Construction and engineering: converting architectural blueprints between metric (meters) and imperial (feet/inches) measurement systems",
      "Travel planning: converting driving distances from kilometers to miles or vice versa for international trips",
      "Real estate: converting property dimensions, lot sizes, and room measurements between metric and imperial units",
      "Academic and scientific work: converting length values for physics, chemistry, and engineering homework and lab reports",
      "E-commerce and product specifications: converting product dimensions (length, width, height) between cm/mm and inches for international listings",
      "Sports and fitness: converting running distances (5K = 3.1 miles, marathon = 42.195 km), track lengths, and field dimensions",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          The metric system (International System of Units, SI) and the imperial system are the two primary measurement systems used worldwide. The metric system — based on the meter as the fundamental unit of length — is used by virtually every country except the United States, Myanmar, and Liberia. The imperial system uses inches, feet, yards, and miles, and remains the primary measurement system for everyday use in the United States and partially in the United Kingdom.
        </p>
        <p>
          The key conversion factors between these systems are defined by international agreement: 1 inch equals exactly 2.54 centimeters (defined in 1959), 1 foot equals exactly 0.3048 meters (12 inches), 1 yard equals exactly 0.9144 meters (3 feet), and 1 mile equals exactly 1.609344 kilometers (5,280 feet). These exact definitions mean conversions between metric and imperial units can be calculated with arbitrary precision — there is no rounding error in the conversion factor itself.
        </p>
        <p>
          In professional contexts, length conversions are critical for construction (architectural plans often need dual-unit dimensions), international trade (product specifications must include both metric and imperial dimensions), travel (speedometers and road signs use different units by country), and scientific work (SI units are standard for research papers and technical documentation). This converter provides adjustable decimal precision so you can match the accuracy requirements of your specific application — from rough everyday estimates to precise engineering calculations.
        </p>
      </div>
    ),

    proTip:
      "For construction and engineering work, maintain at least 4 decimal places during intermediate calculations and round only in the final presentation. The exact conversion factor 1 inch = 2.54 cm means you can achieve arbitrary precision — the limiting factor is your measurement accuracy, not the conversion math. For quick mental math: multiply feet by 0.3 for a rough meter estimate, or divide centimeters by 2.5 for a rough inch estimate.",

    faqs: [
      {
        question: "How do I convert feet to meters and meters to feet?",
        answer:
          "Select 'feet' as the source unit and 'meters' as the target unit, then enter your value. 1 foot = 0.3048 meters exactly. For reverse conversion, use the swap button or select meters as source and feet as target. 1 meter = 3.28084 feet. For example, 6 feet = 1.8288 meters, and 2 meters = 6.5617 feet.",
      },
      {
        question: "How many centimeters are in an inch, and how do I convert inches to cm?",
        answer:
          "1 inch equals exactly 2.54 centimeters. Select 'inches' as source and 'centimeters' as target. For example, 12 inches = 30.48 cm, 24 inches = 60.96 cm. To convert cm to inches, divide by 2.54: 100 cm = 39.3701 inches. This exact conversion factor (2.54 cm/inch) was internationally agreed upon in 1959.",
      },
      {
        question: "How do I convert kilometers to miles and miles to kilometers?",
        answer:
          "Select 'kilometers' as source and 'miles' as target. 1 kilometer = 0.621371 miles, and 1 mile = 1.60934 kilometers. Common examples: 5 km = 3.107 miles (5K race), 10 km = 6.214 miles (10K race), 42.195 km = 26.219 miles (marathon), 100 miles = 160.934 km.",
      },
      {
        question: "What is the difference between metric and imperial length units?",
        answer:
          "Metric units (mm, cm, m, km) are based on the meter and use powers of 10 for conversion (1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm). Imperial units (in, ft, yd, mi) use non-decimal relationships: 1 foot = 12 inches, 1 yard = 3 feet, 1 mile = 5280 feet. The metric system is used globally for science and in most countries for daily use, while imperial is primarily used in the United States.",
      },
      {
        question: "Can I adjust the decimal precision of conversion results?",
        answer:
          "Yes. Use the precision settings to choose anywhere from 0 to 10 decimal places. For everyday measurements, 1-2 decimal places is sufficient. For construction and engineering, 3-4 places is typical. For scientific calculations, 6-10 decimal places may be needed. The conversion factors are exact, so precision is only limited by your display preference.",
      },
      {
        question: "Is this length converter free and does it work on mobile devices?",
        answer:
          "Yes. The converter is completely free with no signup, no account, and no usage limits. It works on all devices — smartphones, tablets, and desktop computers — with a responsive interface that adjusts to your screen size. All calculations run instantly in your browser with no data sent to any server.",
      },
    ],

    relatedTools: [
      { name: "Temperature Converter", href: "/converters/temperature" },
      { name: "Pace Calculator (km/mi)", href: "/calculator/pace-calculator" },
      { name: "Concrete Calculator", href: "/calculator/concrete-calculator" },
      { name: "Triangle Calculator", href: "/calculator/triangle-calculator" },
      { name: "File Size Converter", href: "/converters/file-size" },
      { name: "Time Zone Converter", href: "/converters/timezone" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function LengthConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<LengthConverter />)} />
}
