import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ConversionCalculator } from "@/components/converters/conversion-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Zap, Target, TrendingUp, BookOpen, Users, CheckCircle, Info, Home, DollarSign, FileText, Percent, Clock, Award, BarChart3, Building, PieChart } from "lucide-react"
import Link from "next/link"

const TOOL_TITLE = "Unit Converter | Free Conversion Calculator"
const TOOL_NAME = "Unit Converter"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Free conversion calculator with 1000+ unit conversions. Convert length, weight, temperature, currency, time, area, volume, speed, power, and energy instantly. Accurate results validated against NIST, BIPM, and ISO standards.",
  path: "/calculator/conversion-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: TOOL_NAME, href: "/calculator/conversion-calculator" }
  ],
  schemaOptions: {
    name: TOOL_NAME,
    alternateName: "Conversion Calculator, Unit Converter Online, Measurement Converter",
    applicationCategory: "UtilityApplication",
    featureList: [
      "1000+ Unit Conversions",
      "Real-time Currency Rates",
      "12+ Conversion Categories",
      "Mathematical Precision",
      "Mobile Responsive",
      "Free Forever"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Utility",
  keywords: [
    "conversion calculator",
    "unit converter",
    "measurement conversions",
    "currency converter",
    "metric conversion",
    "imperial conversion",
    "length converter",
    "weight converter",
    "temperature converter",
    "volume converter",
    "area converter",
    "speed converter",
    "power converter",
    "energy converter",
    "pressure converter",
    "time converter",
    "cooking converter",
    "scientific converter",
    "kilometers to miles",
    "pounds to kg",
    "celsius to fahrenheit",
    "usd to eur",
    "liters to gallons",
    "square feet to square meters"
  ]
}

export default function ConversionCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    overview: "Convert between 1000+ units instantly. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions.",

    howToSteps: [
      "Select Conversion Category: Choose from 12+ categories including length, weight, temperature, currency, time, area, volume, speed, power, energy, and pressure.",
      "Choose Units: Select your source unit (From) and target unit (To) from comprehensive dropdown menus.",
      "Enter Value & Get Results: Input the value you want to convert and receive instant, accurate results with 6 decimal place precision."
    ],

    features: [
      "1000+ Unit Conversions",
      "Real-time Currency Rates",
      "12+ Conversion Categories",
      "Mathematical Precision",
      "Mobile Responsive",
      "Free Forever"
    ],

    useCases: [
      "Distance & Length Conversion: Convert kilometers to miles, feet to meters, inches to cm.",
      "Weight & Mass Conversion: Convert pounds to kg, grams to ounces, stone to kg.",
      "Currency Conversion: Real-time exchange rates for USD, EUR, GBP, CAD, and more.",
      "Temperature Conversion: Convert Celsius to Fahrenheit, Fahrenheit to Celsius, Kelvin.",
      "Volume & Liquid Conversion: Convert liters to gallons, cups to ml, fluid ounces.",
      "Area Conversion: Convert square feet to square meters, acres to hectares.",
      "Speed Conversion: Convert km/h to mph, knots, m/s.",
      "Power & Energy Conversion: Convert watts to HP, joules to calories.",
      "Pressure Conversion: Convert PSI to bar, Pascal, atmosphere.",
      "Time Conversion: Convert seconds, minutes, hours, days, weeks.",
      "Cooking & Baking Conversion: Convert cups to grams, tablespoons to ml.",
      "Scientific Conversion: Binary, decimal, hexadecimal, octal conversions."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <TrendingUp className="h-6 w-6 text-primary" />
            Complete Guide to Popular Unit Conversions
          </h2>
          <div className="space-y-6">
            <p className="text-base text-foreground leading-relaxed">
              Our <strong>conversion calculator online</strong> is the most comprehensive <strong>conversion calculator measurement</strong> tool available, handling over 1000+ unit conversions across 12+ categories. Whether you need a <strong>conversion calculator for currency</strong>, distance measurements, weight conversions, or specialized calculations, our free <strong>conversion calculator</strong> provides instant, accurate results.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-heading-accent">Distance & Length</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Kilometers to Miles</h4>
                    <p className="text-sm text-muted-foreground">
                      Perfect for international travel. 100 kilometers equals 62.137 miles.
                    </p>
                    <div className="text-xs text-muted-foreground mt-2">
                      1 km = 0.621 miles | 1 mile = 1.609 km
                    </div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Feet to Meters</h4>
                    <p className="text-sm text-muted-foreground">
                      Essential for construction and engineering. Convert building dimensions instantly.
                    </p>
                    <div className="text-xs text-muted-foreground mt-2">
                      1 meter = 3.281 feet | 1 foot = 0.305 meters
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-heading-accent">Weight & Mass</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Pounds to Kilograms</h4>
                    <p className="text-sm text-muted-foreground">
                      Perfect for fitness tracking and medical applications.
                    </p>
                    <div className="text-xs text-muted-foreground mt-2">
                      1 lb = 0.454 kg | 1 kg = 2.205 lbs
                    </div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Grams to Ounces</h4>
                    <p className="text-sm text-muted-foreground">
                      Essential for cooking and baking conversions.
                    </p>
                    <div className="text-xs text-muted-foreground mt-2">
                      1 oz = 28.35 grams | 1 gram = 0.035 oz
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <BookOpen className="h-6 w-6 text-primary" />
            Professional & Specialty Conversions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-heading-accent">Cooking & Baking</h3>
              <div className="space-y-3">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Cups to Grams</h4>
                  <p className="text-sm text-muted-foreground">
                    Accurate ingredient conversions for flour, sugar, butter, and more.
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">
                    1 cup flour = 120g | 1 cup sugar = 200g
                  </div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Liquid Measurements</h4>
                  <p className="text-sm text-muted-foreground">
                    Convert liters, milliliters, fluid ounces, cups, pints, and gallons.
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">
                    1 liter = 33.814 oz | 1 cup = 236.6 ml
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-heading-accent">Technical & Scientific</h3>
              <div className="space-y-3">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Pressure & Torque</h4>
                  <p className="text-sm text-muted-foreground">
                    Convert PSI, bar, Pascal, Newton-meters, and foot-pounds.
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">
                    1 bar = 14.504 PSI | 1 PSI = 6,894.76 Pascal
                  </div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Power & Energy</h4>
                  <p className="text-sm text-muted-foreground">
                    Convert watts, horsepower, joules, calories, and BTUs.
                  </p>
                  <div className="text-xs text-muted-foreground mt-2">
                    1 kW = 1.341 HP | 1 kWh = 3,412 BTU
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Target className="h-6 w-6 text-primary" />
            Why Choose Our Conversion Calculator?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">100% Free</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Completely free to use with no signup required. Access unlimited conversions instantly.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Real-Time Rates</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Live exchange rates updated every few minutes for accurate currency conversions.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Professional Accuracy</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Precise formulas validated against international standards (NIST, BIPM, ISO).
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "What is a conversion calculator?",
        answer: "A conversion calculator is a digital tool that transforms values from one unit of measurement to another, enabling seamless transitions between different measurement systems. Our conversion calculator supports over 1000+ unit conversions across 12+ categories including length, weight, temperature, currency, volume, area, speed, power, and energy."
      },
      {
        question: "How accurate is conversion calculator?",
        answer: "Our conversion calculator maintains exceptional accuracy through precise mathematical formulas aligned with international measurement standards including NIST, BIPM, and ISO guidelines. All conversions are calculated to 6 decimal places, ensuring professional-grade precision suitable for engineering, scientific, and commercial applications."
      },
      {
        question: "How to convert currency using a conversion calculator?",
        answer: "Converting currency with our calculator is straightforward: select the currency conversion category, choose your source currency and target currency from the dropdown menus, enter the amount you wish to convert, and the calculator instantly displays the converted value using current exchange rates. Our system automatically updates exchange rates every few minutes."
      },
      {
        question: "Can I convert Canadian dollars to USD?",
        answer: "Absolutely! Our conversion calculator supports Canadian dollar (CAD) to US dollar (USD) conversions with real-time exchange rates. Simply select the currency category, choose Canadian dollar as your source currency and US dollar as your target currency, then enter the amount you want to convert."
      },
      {
        question: "How to calculate conversion rate?",
        answer: "Calculating conversion rates involves understanding the relationship between two different units or currencies. For currency conversions, the rate represents how much of one currency equals one unit of another currency. Our calculator automatically handles this calculation by using current exchange rates from financial markets."
      }
    ],

    relatedTools: [
      { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Time Duration", href: "/calculator/time-duration" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: TOOL_TITLE,
        description: "Convert between 1000+ units instantly. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "orange"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: TOOL_NAME, href: "/calculator/conversion-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <ConversionCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Free conversion calculator with 1000+ unit conversions. Convert length, weight, temperature, currency, time, area, volume, speed, power, and energy instantly. Accurate results validated against NIST, BIPM, and ISO standards.",
        path: "/calculator/conversion-calculator"
      }}
    />
  )
}
