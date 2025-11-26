import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { ConcreteCalculator } from "@/components/concrete-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Building, Ruler, Weight, Volume, Target, Info, Globe, CheckCircle, Hammer, Truck, Package, Zap, TrendingUp, DollarSign, Clock, Home, FileText, Percent, Users, Award, BarChart3 } from "lucide-react"

const TOOL_TITLE = "Concrete Calculator | Free Cement, Slab, Footing & Bag Estimator"
const TOOL_NAME = "Concrete Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Calculate concrete volume, bags, and cost for slabs, footings, columns, and stairs. Free online concrete estimator with waste factor and mix ratios. Accurate & easy to use.",
  path: "/calculator/concrete-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: TOOL_NAME, href: "/calculator/concrete-calculator" }
  ],
  schemaOptions: {
    name: TOOL_NAME,
    alternateName: "Concrete Estimator, Cement Calculator, Concrete Slab Calculator",
    applicationCategory: "ConstructionApplication",
    featureList: [
      "Concrete Volume Calculator",
      "Concrete Weight Calculator",
      "Concrete Cost Calculator",
      "Material Breakdown Calculator",
      "Multiple Mix Types Support",
      "Slab Calculator",
      "Column Calculator",
      "Stairs Calculator",
      "Curb Calculator",
      "Foundation Calculator",
      "Driveway Calculator",
      "Patio Calculator",
      "Retaining Wall Calculator",
      "Professional Tips",
      "Curing Recommendations"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Construction",
  keywords: [
    "concrete calculator",
    "cement calculator",
    "concrete estimator",
    "concrete slab calculator",
    "concrete bag calculator",
    "concrete volume calculator",
    "concrete cost calculator",
    "concrete footing calculator",
    "concrete column calculator",
    "concrete stairs calculator",
    "concrete curb calculator",
    "concrete wall calculator",
    "concrete driveway calculator",
    "concrete patio calculator",
    "concrete foundation calculator",
    "concrete mix calculator",
    "concrete weight calculator",
    "concrete material calculator",
    "ready mix concrete calculator",
    "premix concrete calculator",
    "quikrete calculator",
    "sakrete calculator",
    "concrete yardage calculator",
    "cubic yards calculator",
    "concrete bags needed",
    "concrete calculator cubic yards",
    "concrete calculator bags",
    "concrete calculator cost",
    "free concrete calculator",
    "online concrete calculator"
  ]
}

export default function ConcreteCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    overview: "Calculate concrete volume in cubic yards or bags for slabs, footings, and columns. Get accurate material estimates with our free concrete calculator including waste factors and cost breakdown.",

    howToSteps: [
      "Select Project Type: Choose from slabs, columns, stairs, curbs, and more.",
      "Enter Dimensions: Input length, width, height, and other measurements.",
      "Choose Mix Type: Select standard, high-strength, or lightweight mix.",
      "Get Results: View volume, weight, materials, and cost breakdown."
    ],

    features: [
      "Concrete Volume Calculator",
      "Concrete Weight Calculator",
      "Concrete Cost Calculator",
      "Material Breakdown Calculator",
      "Multiple Mix Types Support",
      "Slab Calculator",
      "Column Calculator",
      "Stairs Calculator",
      "Curb Calculator",
      "Foundation Calculator",
      "Driveway Calculator",
      "Patio Calculator",
      "Retaining Wall Calculator",
      "Professional Tips",
      "Curing Recommendations"
    ],

    useCases: [
      "Concrete Slab Calculator: Calculate volume for slabs and foundations.",
      "Concrete Column Calculator: Calculate volume for columns and piers.",
      "Concrete Stairs Calculator: Calculate volume for stairs and steps.",
      "Concrete Curb Calculator: Calculate volume for curbs and gutters.",
      "Concrete Wall Calculator: Calculate volume for retaining walls.",
      "Concrete Footing Calculator: Calculate volume for footings.",
      "Concrete Driveway Calculator: Calculate volume for driveways.",
      "Concrete Patio Calculator: Calculate volume for patios.",
      "Concrete Foundation Calculator: Calculate volume for foundations."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Why Use Our Concrete Estimator?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Accurate Volume & Bags</h3>
              </div>
              <p className="text-sm text-muted-foreground">Get precise cubic yardage and exact bag counts (40lb, 60lb, 80lb) instantly.</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Cost Estimation</h3>
              </div>
              <p className="text-sm text-muted-foreground">Estimate total project cost based on local material prices.</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Waste Factor Included</h3>
              </div>
              <p className="text-sm text-muted-foreground">Automatically calculate 5-10% waste to prevent shortages.</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Multiple Project Types</h3>
              </div>
              <p className="text-sm text-muted-foreground">Specialized formulas for slabs, footings, columns, stairs, and curbs.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Supported Concrete Mix Types
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { mix: "Standard Mix", strength: "3000 PSI", ratio: "1:2:3", use: "General purpose concrete for most applications" },
              { mix: "High Strength Mix", strength: "4000+ PSI", ratio: "1:1.5:2.5", use: "Structural applications requiring high strength" },
              { mix: "Lightweight Mix", strength: "2500 PSI", ratio: "1:1.5:2", use: "Reduced weight for non-structural applications" },
              { mix: "Fiber Reinforced", strength: "3500 PSI", ratio: "1:2:3", use: "Enhanced with fiber reinforcement for crack resistance" }
            ].map(({ mix, strength, ratio, use }, index) => (
              <div key={index} className="p-4 bg-card rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{mix}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{use}</p>
                <div className="text-sm text-foreground space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Strength: {strength}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Ratio: {ratio} (Cement:Sand:Gravel)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Advanced Calculation Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Volume className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Volume Calculations</h3>
                  <p className="text-sm text-muted-foreground">Precise volume calculations for complex shapes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Weight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Weight Analysis</h3>
                  <p className="text-sm text-muted-foreground">Calculate concrete weight for structural analysis</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Material Breakdown</h3>
                  <p className="text-sm text-muted-foreground">Detailed breakdown of cement, sand, gravel, and water</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-muted rounded-lg">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Professional Tips</h3>
                  <p className="text-sm text-muted-foreground">Expert recommendations for mixing and curing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
              <Ruler className="h-5 w-5 text-primary" />
              How Thick Should My Concrete Slab Be?
            </h2>
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p className="mb-4">
                Choosing the right thickness for your concrete slab is crucial for its longevity and performance. The ideal thickness depends largely on the intended use and the load it needs to support.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Driveways (5-6 inches)</h3>
                  <p className="text-sm">
                    For standard residential driveways, a minimum thickness of <strong>4 inches</strong> is common, but increasing it to <strong>5 or 6 inches</strong> significantly boosts durability. This extra thickness prevents cracking under the weight of SUVs, trucks, or delivery vehicles. Always ensure a compacted gravel base of 4-6 inches for proper drainage.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Patios & Walkways (4 inches)</h3>
                  <p className="text-sm">
                    For patios, sidewalks, and steps that primarily see foot traffic and patio furniture, a standard <strong>4-inch slab</strong> is sufficient. However, if you plan to install a hot tub or heavy outdoor kitchen, consider thickening those specific areas to 6 inches to handle the concentrated load.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
              <Info className="h-5 w-5 text-primary" />
              Common Concrete Calculation Mistakes
            </h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <div className="min-w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">!</div>
                <div>
                  <strong className="text-foreground block mb-1">Forgetting the Waste Factor</strong>
                  Projects rarely go perfectly. Spillage, uneven ground, and formwork deflection can eat up your concrete. We recommend adding <strong>5-10% extra</strong> to your order to avoid running short mid-pour.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="min-w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">!</div>
                <div>
                  <strong className="text-foreground block mb-1">Ignoring Ground Slope</strong>
                  If your ground isn't perfectly level, your slab thickness will vary. Measure the depth at multiple points and use the average, or better yet, grade the soil properly before pouring.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="min-w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">!</div>
                <div>
                  <strong className="text-foreground block mb-1">Wrong Unit Conversions</strong>
                  Mixing up feet and inches is the #1 cause of calculation errors. Our calculator handles these conversions automatically, but always double-check your input units.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5 text-primary" />
              Concrete Mixes & Curing Guide
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong>Standard vs. High Strength:</strong> For most DIY projects like walkways and patios, a standard <strong>3000 PSI mix</strong> is perfect. For driveways or foundations supporting structures, opt for a <strong>4000 PSI or higher</strong> mix for better freeze-thaw resistance and load capacity.
              </p>
              <div className="border-t border-border pt-4 mt-4">
                <h3 className="font-semibold text-foreground mb-3">Curing Timeline</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <li className="bg-muted p-3 rounded text-center">
                    <span className="block text-primary font-bold mb-1">24-48 Hours</span>
                    Safe for foot traffic
                  </li>
                  <li className="bg-muted p-3 rounded text-center">
                    <span className="block text-primary font-bold mb-1">7 Days</span>
                    Cured enough for vehicles (70% strength)
                  </li>
                  <li className="bg-muted p-3 rounded text-center">
                    <span className="block text-primary font-bold mb-1">28 Days</span>
                    Fully cured (100% strength)
                  </li>
                </ul>
              </div>
              <p className="text-xs italic mt-2">
                *Tip: Keep your concrete moist (wet curing) for at least the first 7 days to prevent surface cracks and ensure maximum strength.
              </p>
            </div>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "How do I calculate how much concrete I need?",
        answer: "To calculate concrete volume, multiply Length × Width × Thickness (in feet) to get cubic feet. Then divide by 27 to convert to cubic yards. Always add 5-10% for waste."
      },
      {
        question: "How many 80lb bags of concrete make a cubic yard?",
        answer: "You need approximately 45 bags of 80lb concrete to make one cubic yard. Each 80lb bag yields about 0.6 cubic feet of concrete. For 60lb bags, you'll need about 60 bags."
      },
      {
        question: "What is the formula for concrete slab calculation?",
        answer: "The formula is: Volume (cu yds) = (Length (ft) × Width (ft) × Thickness (in) / 12) / 27. This gives you the total cubic yards required for your slab."
      },
      {
        question: "How much waste factor should I add?",
        answer: "It is recommended to add 5-10% extra concrete to account for spillage, uneven subgrades, and measurement errors. For complex shapes, consider adding up to 15%."
      },
      {
        question: "How long does concrete take to cure?",
        answer: "Concrete reaches about 70% of its strength within 7 days and fully cures in 28 days. However, it sets enough to walk on within 24-48 hours."
      },
      {
        question: "What is the best mix for a driveway?",
        answer: "For driveways, a standard mix with a compressive strength of 3000-4000 PSI is recommended. In colder climates, air-entrained concrete helps prevent freeze-thaw damage."
      },
      {
        question: "How do I convert cubic feet to cubic yards?",
        answer: "Since there are 27 cubic feet in one cubic yard, simply divide your total cubic feet by 27. For example, 54 cubic feet / 27 = 2 cubic yards."
      },
      {
        question: "Can I pour concrete in the rain?",
        answer: "Light rain is usually fine, but heavy rain can wash away the cement paste and weaken the surface. It's best to cover fresh concrete with plastic sheeting if rain starts."
      }
    ],

    relatedTools: [
      { name: "Mortgage Calculator", href: "/calculator/mortgage-calculator" },
      { name: "Loan Calculator", href: "/calculator/loan-calculator" },
      { name: "Tax Calculator", href: "/calculator/tax-calculator" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Time Duration", href: "/calculator/time-duration" },
      { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
      { name: "Investment Calculator", href: "/calculator/investment-calculator" },
      { name: "Retirement Calculator", href: "/calculator/retirement-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: TOOL_TITLE,
        description: "Calculate concrete volume, bags, and cost for slabs, footings, columns, and stairs. Free online concrete estimator with waste factor and mix ratios. Accurate & easy to use.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "orange"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: TOOL_NAME, href: "/calculator/concrete-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <ConcreteCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Calculate concrete volume, bags, and cost for slabs, footings, columns, and stairs. Free online concrete estimator with waste factor and mix ratios. Accurate & easy to use.",
        path: "/calculator/concrete-calculator"
      }}
    />
  )
}