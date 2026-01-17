import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const ConversionCalculator = dynamic(() => import("@/components/converters/conversion-calculator").then(mod => mod.ConversionCalculator), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Zap, Target, TrendingUp, BookOpen, Users, CheckCircle, Info, Home, DollarSign, FileText, Percent, Clock, Award, BarChart3, Building, PieChart, Brain, Shield, Activity, Globe, AlertTriangle } from "lucide-react"
import { GTable } from "@/ui/gtable"
import Link from "next/link"

const TOOL_TITLE = "Unit Converter - Convert Units Online"
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
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            What is a Unit Conversion Calculator? Complete Guide to Measurement Conversions
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A unit conversion calculator is a digital tool designed to transform a value expressed in one unit of measurement into its equivalent value in another unit. Whether you are translating Metric measurements to Imperial, converting real-time currency exchange rates, calculating scientific units, or converting cooking measurements, these calculators ensure mathematical precision by using fixed conversion constants validated against international standards (NIST, BIPM, ISO) and live market data for currency conversions.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our conversion calculator supports over 1000+ unit conversions across 12+ categories including length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure, and more. Whether you're a student solving homework problems, a professional engineer making calculations, a traveler converting currency, a chef following recipes, or a scientist conducting research, our calculator provides instant, accurate conversions with professional-grade precision suitable for engineering, scientific, and commercial applications.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Expert Insight: Precision & Floating Point Math in Unit Conversions
          </h2>
          <div className="p-6 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 rounded-2xl border border-blue-500/20 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 italic">
              "When performing complex conversions, especially in scientific or financial contexts, the biggest challenge is <strong>floating-point precision</strong>. Our calculator uses high-precision math libraries to avoid rounding errors common in standard JavaScript calculations. If you're converting between units like 'Micrometers to Miles,' even a tiny error at the 10th decimal place can lead to significant real-world discrepancies. Always ensure your tools are using the 64-bit IEEE 754 standard for the most reliable results. For currency conversions, we use real-time exchange rates updated every few minutes to ensure accuracy for financial calculations."
            </p>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">— FastTools Engineering Team</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Common Conversion Multipliers: Quick Reference Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding common conversion multipliers helps you verify calculations and understand relationships between units. Here are the most frequently used conversion factors:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">From Unit</th>
                  <th className="p-3 text-left">To Unit</th>
                  <th className="p-3 text-left">Multiply By</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Inches</td><td className="p-3">Centimeters</td><td className="p-3">2.54</td></tr>
                <tr><td className="p-3 font-semibold">Miles</td><td className="p-3">Kilometers</td><td className="p-3">1.60934</td></tr>
                <tr><td className="p-3 font-semibold">Pounds (lb)</td><td className="p-3">Kilograms (kg)</td><td className="p-3">0.453592</td></tr>
                <tr><td className="p-3 font-semibold">Gallons (US)</td><td className="p-3">Liters</td><td className="p-3">3.78541</td></tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6 bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Complete Guide to Popular Unit Conversions: Category-by-Category Breakdown
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
        </article>

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

        <article className="space-y-6 bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Why Choose Our Conversion Calculator? Key Features and Benefits
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our conversion calculator stands out with comprehensive coverage, professional accuracy, and user-friendly features:
          </p>
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
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            How to Use the Conversion Calculator: Step-by-Step Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these simple steps to convert units accurately using our conversion calculator:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Select Conversion Category</h4>
                <p className="text-sm text-muted-foreground">Choose from 12+ categories including length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure, and more. Each category contains multiple related units for comprehensive conversion options.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Choose Source and Target Units</h4>
                <p className="text-sm text-muted-foreground">Select your source unit (From) and target unit (To) from comprehensive dropdown menus. Our calculator supports conversions within the same system (Metric to Metric, Imperial to Imperial) and across systems (Metric to Imperial, Imperial to Metric).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Enter Value and Get Results</h4>
                <p className="text-sm text-muted-foreground">Input the value you want to convert (numbers, decimals, scientific notation supported) and receive instant, accurate results with 6 decimal place precision. The calculator automatically updates as you type, providing real-time conversion results for immediate feedback.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy & Security: Your Conversion Data Stays Private
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your privacy and data security are our top priorities. Our conversion calculator processes all information locally in your browser:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Client-Side Processing</h4>
                <p className="text-sm text-muted-foreground">All unit conversions (except currency) happen directly in your browser using fixed conversion constants. Your values and conversion results never leave your device or get transmitted to our servers. No data is sent over the internet during standard conversions.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Currency Rate Updates</h4>
                <p className="text-sm text-muted-foreground">For currency conversions, we fetch current exchange rates from financial markets, but we don't store or track your conversion queries. Rates update every few minutes to ensure accuracy, but your conversion history and values remain completely private.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Data Storage or Tracking</h4>
                <p className="text-sm text-muted-foreground">We don't store, log, or track any of your conversion data. There's no database of your calculations, no analytics on your usage, and no way for us to access your values or results. Your privacy is completely protected while using our tool.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),

    faqs: [
      {
        question: "What is a conversion calculator?",
        answer: "A conversion calculator is a digital tool that transforms values from one unit of measurement to another, enabling seamless transitions between different measurement systems. Our conversion calculator supports over 1000+ unit conversions across 12+ categories including length, weight, temperature, currency, volume, area, speed, power, energy, pressure, time, and cooking measurements. Whether you're converting between Metric and Imperial systems, calculating currency exchange rates, or translating scientific units, our calculator provides instant, accurate results."
      },
      {
        question: "How accurate is conversion calculator?",
        answer: "Our conversion calculator maintains exceptional accuracy through precise mathematical formulas aligned with international measurement standards including NIST (National Institute of Standards and Technology), BIPM (International Bureau of Weights and Measures), and ISO (International Organization for Standardization) guidelines. All conversions are calculated to 6 decimal places, ensuring professional-grade precision suitable for engineering, scientific, commercial, and educational applications. We use high-precision math libraries to avoid floating-point rounding errors."
      },
      {
        question: "How to convert currency using a conversion calculator?",
        answer: "Converting currency with our calculator is straightforward: select the currency conversion category, choose your source currency and target currency from the dropdown menus (supporting 100+ currencies including USD, EUR, GBP, CAD, AUD, JPY, CNY, and more), enter the amount you wish to convert, and the calculator instantly displays the converted value using current exchange rates. Our system automatically updates exchange rates every few minutes to ensure accuracy for financial calculations and international transactions."
      },
      {
        question: "Can I convert Canadian dollars to USD?",
        answer: "Absolutely! Our conversion calculator supports Canadian dollar (CAD) to US dollar (USD) conversions with real-time exchange rates. Simply select the currency category, choose Canadian dollar as your source currency and US dollar as your target currency, then enter the amount you want to convert. The calculator instantly displays the converted amount using current market exchange rates, which update automatically every few minutes. All major currency pairs are supported."
      },
      {
        question: "How to calculate conversion rate?",
        answer: "Calculating conversion rates involves understanding the relationship between two different units or currencies. For unit conversions (length, weight, etc.), the rate is a fixed mathematical constant (e.g., 1 inch = 2.54 centimeters). For currency conversions, the rate represents how much of one currency equals one unit of another currency and fluctuates based on market conditions. Our calculator automatically handles both types of calculations—using fixed constants for units and current exchange rates from financial markets for currencies."
      },
      {
        question: "What units can I convert with this calculator?",
        answer: "Our calculator supports 1000+ unit conversions across 12+ categories: Length (meters, feet, inches, miles, kilometers, yards), Weight/Mass (kilograms, pounds, ounces, grams, stone), Temperature (Celsius, Fahrenheit, Kelvin), Currency (100+ currencies with real-time rates), Volume (liters, gallons, cups, fluid ounces, cubic meters), Area (square meters, square feet, acres, hectares), Speed (km/h, mph, knots, m/s), Power (watts, horsepower, kilowatts), Energy (joules, calories, BTUs, kWh), Pressure (PSI, bar, Pascal, atmosphere), Time (seconds, minutes, hours, days, weeks), and Cooking (cups, tablespoons, teaspoons, ml, grams)."
      },
      {
        question: "How do I convert kilometers to miles?",
        answer: "To convert kilometers to miles, select the length/distance category, choose kilometers as your source unit and miles as your target unit, then enter the value in kilometers. The conversion factor is 1 kilometer = 0.621371 miles (or 1 mile = 1.60934 kilometers). For example, 100 kilometers equals 62.137 miles. This conversion is essential for international travel, understanding vehicle fuel economy in different countries, and converting distances in maps and GPS systems."
      },
      {
        question: "How do I convert pounds to kilograms?",
        answer: "To convert pounds to kilograms, select the weight/mass category, choose pounds (lb) as your source unit and kilograms (kg) as your target unit, then enter the value in pounds. The conversion factor is 1 pound = 0.453592 kilograms (or 1 kilogram = 2.20462 pounds). For example, 150 pounds equals 68.039 kilograms. This conversion is essential for fitness tracking, medical applications, international commerce, and understanding weight measurements in different countries."
      },
      {
        question: "How do I convert Celsius to Fahrenheit?",
        answer: "To convert Celsius to Fahrenheit, select the temperature category, choose Celsius as your source unit and Fahrenheit as your target unit, then enter the temperature in Celsius. The conversion formula is: Fahrenheit = (Celsius × 9/5) + 32. For example, 25°C equals 77°F. This conversion is essential for international travel, weather understanding, cooking, and scientific applications. Note that -40°C equals -40°F (the point where both scales intersect)."
      },
      {
        question: "How do I convert liters to gallons?",
        answer: "To convert liters to gallons, select the volume category, choose liters as your source unit and gallons (US) as your target unit, then enter the value in liters. The conversion factor is 1 liter = 0.264172 gallons (US) or 1 gallon (US) = 3.78541 liters. For example, 10 liters equals 2.642 gallons. Note that US gallons and Imperial (UK) gallons are different: 1 Imperial gallon = 1.201 US gallons = 4.54609 liters."
      },
      {
        question: "How do I convert square feet to square meters?",
        answer: "To convert square feet to square meters, select the area category, choose square feet as your source unit and square meters as your target unit, then enter the value in square feet. The conversion factor is 1 square foot = 0.092903 square meters (or 1 square meter = 10.764 square feet). For example, 500 square feet equals 46.452 square meters. This conversion is essential for real estate, construction, interior design, and international property measurements."
      },
      {
        question: "How do I convert feet to meters?",
        answer: "To convert feet to meters, select the length/distance category, choose feet as your source unit and meters as your target unit, then enter the value in feet. The conversion factor is 1 foot = 0.3048 meters (or 1 meter = 3.28084 feet). For example, 10 feet equals 3.048 meters. This conversion is essential for construction, engineering, international building codes, and understanding measurements in different countries. One yard equals 3 feet or 0.9144 meters."
      },
      {
        question: "How accurate are currency exchange rates?",
        answer: "Our currency exchange rates are updated every few minutes from major financial markets and exchange rate providers, ensuring high accuracy for most use cases. However, rates fluctuate constantly in real-time markets, so rates may vary slightly from what you see at banks or exchange offices (which include fees and margins). For exact rates for large transactions, consult your bank or financial institution. Our rates are suitable for estimations, travel planning, and general currency conversions."
      },
      {
        question: "Can I convert between Metric and Imperial systems?",
        answer: "Yes! Our calculator seamlessly converts between Metric (International System of Units) and Imperial (US Customary and British Imperial) systems. You can convert any Metric unit to any Imperial unit and vice versa across all categories (length, weight, volume, area, temperature, etc.). This makes our calculator perfect for international travel, engineering projects with mixed standards, cooking recipes from different countries, and understanding measurements in different regions."
      },
      {
        question: "How do I convert grams to ounces?",
        answer: "To convert grams to ounces, select the weight/mass category, choose grams as your source unit and ounces as your target unit, then enter the value in grams. The conversion factor is 1 ounce = 28.3495 grams (or 1 gram = 0.035274 ounces). For example, 250 grams equals 8.818 ounces. This conversion is essential for cooking, baking (especially recipes from different countries), postal shipping, precious metals (gold, silver), and dietary measurements."
      },
      {
        question: "What is the difference between US and Imperial gallons?",
        answer: "US gallons and Imperial (UK) gallons are different units: 1 US gallon = 3.78541 liters, while 1 Imperial gallon = 4.54609 liters. This means 1 Imperial gallon = 1.201 US gallons. US gallons are used in the United States, while Imperial gallons are used in the United Kingdom and some Commonwealth countries. When converting, be sure to specify which gallon system you're using to avoid measurement errors. Our calculator supports both systems."
      },
      {
        question: "How do I convert inches to centimeters?",
        answer: "To convert inches to centimeters, select the length/distance category, choose inches as your source unit and centimeters as your target unit, then enter the value in inches. The conversion factor is 1 inch = 2.54 centimeters exactly (or 1 centimeter = 0.393701 inches). For example, 12 inches (1 foot) equals 30.48 centimeters. This conversion is essential for screen sizes, clothing measurements, height measurements, construction, and international product specifications."
      },
      {
        question: "How do I convert Fahrenheit to Celsius?",
        answer: "To convert Fahrenheit to Celsius, select the temperature category, choose Fahrenheit as your source unit and Celsius as your target unit, then enter the temperature in Fahrenheit. The conversion formula is: Celsius = (Fahrenheit - 32) × 5/9. For example, 98.6°F (normal body temperature) equals 37°C. This conversion is essential for international weather reports, cooking (especially baking), medical applications, and scientific measurements."
      },
      {
        question: "Can I convert cooking measurements?",
        answer: "Yes! Our calculator supports comprehensive cooking and baking conversions including cups to milliliters, tablespoons to teaspoons, fluid ounces to milliliters, grams to ounces (for dry ingredients), and more. Perfect for following international recipes, scaling recipes up or down, converting between US and metric measurements, and ensuring accurate ingredient measurements. Cooking conversions help ensure recipe success when using recipes from different countries or measurement systems."
      },
      {
        question: "How do I convert square meters to square feet?",
        answer: "To convert square meters to square feet, select the area category, choose square meters as your source unit and square feet as your target unit, then enter the value in square meters. The conversion factor is 1 square meter = 10.764 square feet (or 1 square foot = 0.092903 square meters). For example, 100 square meters equals 1,076.4 square feet. This conversion is essential for real estate, construction, international property listings, and understanding living space sizes."
      },
      {
        question: "How do I convert mph to km/h?",
        answer: "To convert miles per hour to kilometers per hour, select the speed category, choose mph (miles per hour) as your source unit and km/h (kilometers per hour) as your target unit, then enter the speed in mph. The conversion factor is 1 mph = 1.60934 km/h (or 1 km/h = 0.621371 mph). For example, 60 mph equals 96.56 km/h. This conversion is essential for international travel, understanding vehicle speed limits in different countries, and speedometer readings."
      },
      {
        question: "How do I convert kilograms to pounds?",
        answer: "To convert kilograms to pounds, select the weight/mass category, choose kilograms (kg) as your source unit and pounds (lb) as your target unit, then enter the value in kilograms. The conversion factor is 1 kilogram = 2.20462 pounds (or 1 pound = 0.453592 kilograms). For example, 70 kilograms equals 154.324 pounds. This conversion is essential for fitness tracking, medical applications, international commerce, luggage weight limits, and understanding weight measurements globally."
      },
      {
        question: "How do I convert cups to milliliters?",
        answer: "To convert cups to milliliters, select the volume or cooking category, choose cups as your source unit and milliliters (ml) as your target unit, then enter the value in cups. The conversion factor is 1 cup (US) = 236.588 milliliters (or 1 ml = 0.004227 cups). For example, 2 cups equals 473.176 milliliters. Note that US cups and metric cups differ: 1 metric cup = 250 ml. This conversion is essential for cooking, baking, and following international recipes."
      },
      {
        question: "How do I convert acres to hectares?",
        answer: "To convert acres to hectares, select the area category, choose acres as your source unit and hectares as your target unit, then enter the value in acres. The conversion factor is 1 acre = 0.404686 hectares (or 1 hectare = 2.47105 acres). For example, 10 acres equals 4.047 hectares. This conversion is essential for real estate, agriculture, land measurement, international property comparisons, and understanding large land areas in different countries."
      },
      {
        question: "How do I convert watts to horsepower?",
        answer: "To convert watts to horsepower, select the power category, choose watts as your source unit and horsepower (HP) as your target unit, then enter the value in watts. The conversion factor is 1 horsepower (mechanical) = 745.7 watts (or 1 watt = 0.001341 HP). For example, 1,000 watts (1 kilowatt) equals 1.341 horsepower. This conversion is essential for understanding engine power, motor ratings, electrical equipment, and vehicle specifications in different unit systems."
      },
      {
        question: "How do I convert PSI to bar?",
        answer: "To convert PSI (pounds per square inch) to bar, select the pressure category, choose PSI as your source unit and bar as your target unit, then enter the value in PSI. The conversion factor is 1 bar = 14.5038 PSI (or 1 PSI = 0.068948 bar). For example, 30 PSI equals 2.068 bar. This conversion is essential for tire pressure (cars, bicycles), scuba diving (tank pressure), industrial equipment, and understanding pressure measurements in different systems."
      },
      {
        question: "How do I convert seconds to hours?",
        answer: "To convert seconds to hours, select the time category, choose seconds as your source unit and hours as your target unit, then enter the value in seconds. The conversion factor is 1 hour = 3,600 seconds (or 1 second = 0.000278 hours). For example, 7,200 seconds equals 2 hours. This conversion is essential for time calculations, work scheduling, event planning, scientific measurements, and understanding time durations in different units."
      },
      {
        question: "How do I convert cubic feet to cubic meters?",
        answer: "To convert cubic feet to cubic meters, select the volume category, choose cubic feet as your source unit and cubic meters as your target unit, then enter the value in cubic feet. The conversion factor is 1 cubic meter = 35.3147 cubic feet (or 1 cubic foot = 0.0283168 cubic meters). For example, 100 cubic feet equals 2.832 cubic meters. This conversion is essential for construction, shipping, storage capacity, HVAC calculations, and understanding volume measurements in different systems."
      },
      {
        question: "Can I convert between different temperature scales?",
        answer: "Yes! Our calculator supports conversions between Celsius (°C), Fahrenheit (°F), and Kelvin (K). Celsius and Fahrenheit are commonly used for everyday temperature measurements, while Kelvin is used in scientific applications (absolute temperature scale). Conversions include: Celsius to Fahrenheit: F = (C × 9/5) + 32, Fahrenheit to Celsius: C = (F - 32) × 5/9, Celsius to Kelvin: K = C + 273.15. All temperature conversions are supported in our calculator."
      },
      {
        question: "How do I convert ounces to grams?",
        answer: "To convert ounces to grams, select the weight/mass category, choose ounces as your source unit and grams as your target unit, then enter the value in ounces. The conversion factor is 1 ounce = 28.3495 grams (or 1 gram = 0.035274 ounces). For example, 8 ounces equals 226.796 grams. This conversion is essential for cooking, baking (especially international recipes), postal shipping (package weight), precious metals, and dietary measurements."
      },
      {
        question: "What conversion categories are supported?",
        answer: "Our calculator supports 12+ conversion categories: Length/Distance (meters, feet, inches, miles, kilometers, yards, etc.), Weight/Mass (kilograms, pounds, ounces, grams, stone), Temperature (Celsius, Fahrenheit, Kelvin), Currency (100+ currencies with real-time rates), Volume (liters, gallons, cups, fluid ounces, cubic meters), Area (square meters, square feet, acres, hectares), Speed (km/h, mph, knots, m/s), Power (watts, horsepower, kilowatts), Energy (joules, calories, BTUs, kWh), Pressure (PSI, bar, Pascal, atmosphere), Time (seconds, minutes, hours, days, weeks), and Cooking (cups, tablespoons, teaspoons, ml, grams)."
      },
      {
        question: "How often are currency exchange rates updated?",
        answer: "Our currency exchange rates are updated automatically every few minutes from major financial markets and exchange rate providers. This ensures relatively current rates for most currency conversion needs. However, rates fluctuate constantly in real-time markets, so actual rates at banks or exchange offices may vary slightly (they include fees and margins). For exact rates for large transactions or financial planning, consult your bank or financial institution. Our rates are suitable for estimations and general use."
      },
      {
        question: "Can I convert scientific units?",
        answer: "Yes! Our calculator supports various scientific unit conversions including extremely small units (micrometers, nanometers, picometers) to large units (kilometers, astronomical units), energy units (joules, calories, BTUs, electron volts), pressure units (Pascal, bar, PSI, atmosphere), power units (watts, horsepower, BTUs per hour), and temperature units (Celsius, Fahrenheit, Kelvin). These conversions are essential for scientific research, engineering, physics calculations, and academic work."
      },
      {
        question: "Is our conversion calculator free to use?",
        answer: "Yes, our conversion calculator is completely free with no charges, subscriptions, or registration required. You can convert unlimited units unlimited times, access all features (1000+ conversions, real-time currency rates), and use the tool for personal, educational, commercial, or professional purposes without any cost. All features are available without limitations."
      },
      {
        question: "Is my conversion data stored or tracked?",
        answer: "No, all unit conversions (except currency rate fetching) happen directly in your browser. We never store, track, or transmit your values or conversion results. Your privacy is completely protected. For currency conversions, we fetch current exchange rates, but we don't store your conversion queries or track your usage. The calculator works entirely client-side for standard conversions, meaning your data never leaves your device."
      },
      {
        question: "What makes our conversion calculator different from others?",
        answer: "Our calculator provides comprehensive coverage (1000+ unit conversions across 12+ categories), professional accuracy (validated against NIST, BIPM, ISO standards with 6 decimal precision), real-time currency rates (updated every few minutes), seamless Metric/Imperial conversions, user-friendly interface (instant results as you type), and complete privacy (client-side processing). It's completely free with no limitations, supports mobile devices, and works offline for standard unit conversions (currency requires internet)."
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
        color: "blue"
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
