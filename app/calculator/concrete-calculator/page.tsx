import type { Metadata } from "next"
import Image from "next/image"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ConcreteCalculator } from "@/components/calculators/concrete-calculator"
import { createMetadata } from "@/lib/metadata-base"
import {
  Calculator,
  Building,
  Ruler,
  Weight,
  Volume,
  Target,
  Info,
  Globe,
  CheckCircle,
  Hammer,
  Truck,
  Package,
  Zap,
  TrendingUp,
  DollarSign,
  Clock,
  Home,
  FileText,
  Percent,
  Users,
  Award,
  BarChart3,
  ClipboardCheck,
  HardHat,
  AlertTriangle,
  HelpCircle,
  Brain
} from "lucide-react"
import { GTable } from "@/ui/gtable"

const TOOL_TITLE = "Concrete Calculator - Cubic Yards, Bags & Cost Estimator"
const TOOL_NAME = "Concrete Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Calculate concrete cubic yards and bags (40lb, 60lb, 80lb) for slabs, footings, and driveways. Free estimator with 5-10% waste factor and ready-mix cost.",
  path: "/calculator/concrete-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: TOOL_NAME, href: "/calculator/concrete-calculator" }
  ],
  toolName: TOOL_NAME,
  schemaOptions: {
    name: "Concrete Estimator & Calculator",
    alternateName: "Cement Calculator, Concrete Slab Estimator, Cubic Yard Calculator",
    applicationCategory: "ConstructionApplication",
    featureList: [
      "Cubic Yard Calculator",
      "Concrete Bag Estimator (40lb, 60lb, 80lb)",
      "Slab & Footing Calculator",
      "Driveway & Patio Estimator",
      "Stair & Step Volume",
      "Circular Column Calculator",
      "Concrete Cost Estimator",
      "Waste Factor Calculation",
      "Construction Material Breakdown"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Construction",
  // Keywords meta tag removed as per modern SEO best practices
}

export default function ConcreteCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    overview: "Instantly calculate the concrete volume in cubic yards and the number of bags needed for your project. Whether you're pouring a slab, footing, or driveway, our free estimator accounts for waste factor and material costs.",

    howToSteps: [
      "Select Project Type: Choose from slabs, columns, stairs, curbs, and more.",
      "Enter Dimensions: Input length, width, height, and other measurements accurately.",
      "Choose Mix Type: Select standard (3000 PSI) or high-strength (4000+ PSI) mix.",
      "Get Results: View exact cubic yards, bag counts (40/60/80lb), and estimated cost."
    ],

    features: [
      "Cubic Yard & Foot Calculator",
      "Bag Estimator (40lb, 60lb, 80lb)",
      "Project Cost Estimation",
      "Material Breakdown (Cement/Sand/Gravel)",
      "Waste Factor Adjustment (5-10%)",
      "Slab, Column & Footing Modes",
      "Stairs & Steps Calculator",
      "Curb & Gutter Support",
      "Metric & Imperial Units",
      "Professional Mix Ratios",
      "Curing Time Guide"
    ],

    useCases: [
      "Driveway & Patio Slabs: Calculate volume for large flatwork.",
      "Deck Footings: Estimate concrete for sonar tubes and piers.",
      "Retaining Walls: Calculate cubic yards for structural walls.",
      "Sidewalks & Walkways: Determine bags needed for DIY paths.",
      "Fence Posts: Calculate concrete for setting posts.",
      "Garage Floors: Estimate ready-mix requirements.",
      "Stairs & Steps: Complex volume calculations made simple."
    ],

    aboutTool: (
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">How Much Concrete Do I Need?</h2>
          <p className="text-muted-foreground mb-4">
            Calculating how much concrete you need depends on the volume of the space you are filling (Length × Width × Thickness). For standard bags, the coverage depends on the bag weight (40lb, 60lb, or 80lb). Our calculator simplifies this by providing exact counts for each bag size, ensuring you order the right amount for your slab, patio, or footing.
          </p>
        </section>

        <div className="p-6 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10 rounded-2xl border border-orange-500/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Brain className="h-24 w-24 text-orange-500" />
          </div>
          <h4 className="flex items-center gap-2 font-bold text-orange-700 dark:text-orange-400 mb-3 relative z-10">
            <Brain className="h-5 w-5" />
            Expert Insight: The 10% Waste Factor Rule
          </h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 relative z-10 italic">
            "One of the most common DIY mistakes is ordering the exact volume calculated. In the real world, subgrades are rarely perfectly level, and formwork can flex under the immense weight of wet concrete. Professional contractors always add a **10% waste factor** to any order. It is far cheaper to have a small amount left over than to have a cold joint in your slab because you ran out of concrete with six inches left to go."
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4">Quick Reference: Bags per Cubic Yard</h2>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">Bag Size</th>
                <th className="p-3 text-left">Bags per Cubic Yard</th>
                <th className="p-3 text-left">Volume per Bag</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr><td className="p-3 font-semibold">80 lb Bag</td><td className="p-3">45 Bags</td><td className="p-3">0.60 cu ft</td></tr>
              <tr><td className="p-3 font-semibold">60 lb Bag</td><td className="p-3">60 Bags</td><td className="p-3">0.45 cu ft</td></tr>
              <tr><td className="p-3 font-semibold">40 lb Bag</td><td className="p-3">90 Bags</td><td className="p-3">0.30 cu ft</td></tr>
            </tbody>
          </GTable>
        </section>

        {/* Value Props Section */}
        <section>
          <div className="mb-8 relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border border-border">
            <Image
              src="/images/calculators/concrete-calculator-hero.png"
              alt="FastTools Concrete Calculator Interface"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Why This Is The Best Concrete Calculator
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-card/50 rounded-xl border border-border/50 hover:border-border transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Exact Bag Counts</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Most calculators just give you volume. We tell you exactly how many 40lb, 60lb, or 80lb bags to buy from Home Depot or Lowe's, so you don't overspend or run short.
              </p>
            </div>
            <div className="p-5 bg-card/50 rounded-xl border border-border/50 hover:border-border transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <DollarSign className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Smart Cost Estimation</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Compare the cost of DIY mixing with premix bags versus ordering a ready-mix truck. We use up-to-date national averages for material pricing.
              </p>
            </div>
            <div className="p-5 bg-card/50 rounded-xl border border-border/50 hover:border-border transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Built-in Waste Factor</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pros know that spillage happens. Our calculation automatically suggests a 5-10% safety margin to account for uneven subgrades and form spreading.
              </p>
            </div>
            <div className="p-5 bg-card/50 rounded-xl border border-border/50 hover:border-border transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <ClipboardCheck className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">Complete Mix Recipes</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Mixing from scratch? We break down exactly how much cement, sand, and gravel you need for 3000 PSI, 4000 PSI, or lightweight concrete.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Guide Section */}
        <section className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <HardHat className="h-6 w-6 text-primary" />
            Comprehensive Guide: How to Calculate Concrete Correctly
          </h2>

          <div className="space-y-8">
            <div className="mb-6 relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md border border-border/50">
              <Image
                src="/images/calculators/concrete-pouring-guide.png"
                alt="Proper Concrete Slab Pour Layers Diagram"
                fill
                className="object-contain bg-white"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Building className="h-5 w-5 text-muted-foreground" />
                Calculating for Slabs & Patios
              </h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="mb-2">
                  Square or rectangular slabs are the most common project. The formula is <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">Length × Width × Thickness</code>.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Thickness Rule:</strong> For a walking path or patio, <strong>4 inches</strong> is standard. For a driveway holding heavy vehicles, aim for <strong>5-6 inches</strong>.</li>
                  <li><strong>Subbase:</strong> Concrete needs a solid foundation. Plan for 4-6 inches of compacted gravel underneath, calculating this volume as well if you need to order gravel.</li>
                  <li><strong>Slope:</strong> If pouring against a house, ensure a 1/8 to 1/4 inch drop per foot away from the structure for drainage.</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border/50 pt-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-muted-foreground" />
                Calculating for Footings & Columns
              </h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="mb-2">
                  Round concrete columns (Sonotubes) utilize the cylinder volume formula: <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">π × Radius² × Height</code>.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Diameter vs Radius:</strong> Remember that radius is half the diameter. A 12-inch tube has a 6-inch radius.</li>
                  <li><strong>Depth:</strong> Footings must extend below the frost line in your area to prevent heaving. Check local building codes (often 30-48 inches deep).</li>
                  <li><strong>Shape:</strong> Bell footings flare out at the bottom for extra stability, requiring more concrete than a straight cylinder calculation.</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border/50 pt-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-muted-foreground" />
                Irregular Shapes & Slopes
              </h3>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="mb-2">
                  Not all patios are perfect squares. For organic shapes:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Break It Down:</strong> Divide your shape into smaller squares, rectangles, and triangles. Calculate the volume of each and add them together.</li>
                  <li><strong>Average Thickness:</strong> If pouring on uneven ground, measure the depth at 5-10 different spots and use the average to avoid coming up short.</li>
                  <li><strong>The 10% Rule:</strong> Irregular shapes often lead to more waste. We highly recommend increasing your waste factor to 10% or even 15% for complex curves.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Pour Checklist */}
        <section className="bg-gradient-to-br from-card to-secondary/5 rounded-xl p-8 border border-border">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ClipboardCheck className="h-6 w-6 text-primary" />
            Essential Pre-Pour Checklist
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex gap-3">
              <div className="mt-1 h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">1</div>
              <div>
                <strong className="block text-foreground">Permits</strong>
                <span className="text-sm text-muted-foreground">Check if your project requires a city permit or inspection before digging.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">2</div>
              <div>
                <strong className="block text-foreground">811 Call</strong>
                <span className="text-sm text-muted-foreground">Always call 811 to mark underground utility lines before excavation.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">3</div>
              <div>
                <strong className="block text-foreground">Forms & Bracing</strong>
                <span className="text-sm text-muted-foreground">Ensure forms are level, square, and staked securely. Concrete is heavy and can blow out weak forms.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">4</div>
              <div>
                <strong className="block text-foreground">Rebar/Mesh</strong>
                <span className="text-sm text-muted-foreground">Install reinforcement raised on "chairs" so it sits in the middle of the slab, not on the dirt.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">5</div>
              <div>
                <strong className="block text-foreground">Tools Ready</strong>
                <span className="text-sm text-muted-foreground">Have screeds, floats, edgers, and finishing tools on hand before the truck arrives.</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center text-primary text-xs font-bold">6</div>
              <div>
                <strong className="block text-foreground">Safety Gear</strong>
                <span className="text-sm text-muted-foreground">Concrete is caustic. Wear rubber boots, gloves, and eye protection to prevent burns.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Existing Mix Types Section - Preserved */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Supported Concrete Mix Types
          </h2>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">Mix Type</th>
                <th className="p-3 text-left">Strength (PSI)</th>
                <th className="p-3 text-left">Ratio (C:S:G)</th>
                <th className="p-3 text-left">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold">Standard Mix</td>
                <td className="p-3">3000 PSI</td>
                <td className="p-3">1:2:3</td>
                <td className="p-3 text-muted-foreground">Patios, walkways, general slabs.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">High Strength</td>
                <td className="p-3">4000+ PSI</td>
                <td className="p-3">1:1.5:2.5</td>
                <td className="p-3 text-muted-foreground">Driveways, foundations, structural work.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Lightweight</td>
                <td className="p-3">2500 PSI</td>
                <td className="p-3">1:1.5:2</td>
                <td className="p-3 text-muted-foreground">Roof decks, non-structural filling.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Fiber Reinforced</td>
                <td className="p-3">3500 PSI</td>
                <td className="p-3">1:2:3</td>
                <td className="p-3 text-muted-foreground">Crack resistance, high impact zones.</td>
              </tr>
            </tbody>
          </GTable>
        </section>

        {/* Common Mistakes Alert */}
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Avoid These Costly Mistakes
          </h2>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <div className="min-w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold text-xs">!</div>
              <div>
                <strong className="text-foreground block mb-1">Forgetting the Waste Factor</strong>
                Projects rarely go perfectly. Spillage, uneven ground, and formwork deflection can eat up your concrete. We recommend adding <strong>5-10% extra</strong> to your order to avoid running short mid-pour.
              </div>
            </li>
            <li className="flex gap-3">
              <div className="min-w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold text-xs">!</div>
              <div>
                <strong className="text-foreground block mb-1">Ignoring Ground Slope</strong>
                If your ground isn't perfectly level, your slab thickness will vary. Measure the depth at multiple points and use the average, or better yet, grade the soil properly before pouring.
              </div>
            </li>
          </ul>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "How do I calculate how much concrete I need?",
        answer: "To calculate concrete volume, measure the Length, Width, and Thickness of your area in feet. Multiply them to get cubic feet, then divide by 27 to get Cubic Yards. Always add 5-10% for waste or uneven ground."
      },
      {
        question: "How many 80lb bags of concrete do I need for 1 cubic yard?",
        answer: "A single cubic yard of concrete weighs about 3,600 lbs. You will need roughly 45 bags of 80lb concrete, 60 bags of 60lb concrete, or 90 bags of 40lb concrete to make one cubic yard."
      },
      {
        question: "How thick should a concrete driveway be?",
        answer: "For standard cars, a 4-inch slab is sufficient. However, for heavier trucks or SUVs, a 5 to 6-inch thickness is highly recommended to prevent cracking over time. A 4-inch gravel subbase is also crucial."
      },
      {
        question: "Is it cheaper to mix your own concrete or buy it delivered?",
        answer: "For small projects (under 1-2 cubic yards), bagged concrete is usually cheaper and more convenient. For larger projects (over 2-3 yards), ordering a ready-mix truck is often more cost-effective and saves immense physical labor."
      },
      {
        question: "How long until I can walk or drive on new concrete?",
        answer: "You can typically walk on new concrete after 24-48 hours. However, you should wait at least 7 days before driving a vehicle on it, and 28 days for it to reach full curing strength."
      },
      {
        question: "What is the 3-2-1 rule for mixing concrete?",
        answer: "The classic DIY concrete mix ratio is 3 parts gravel (aggregate), 2 parts sand, and 1 part cement. This general-purpose mix yields a strength of around 3000-3500 PSI, suitable for most home projects."
      },
      {
        question: "How do I calculate concrete for steps?",
        answer: "Calculate each step as a distinct rectangular block (Width × Depth × Height). Then sum the volumes. For solid concrete stairs, also calculate the slanted fill underneath if calculating from the ground up."
      },
      {
        question: "What happens if it rains after pouring concrete?",
        answer: "A light drizzle is manageable, but heavy rain can wash away the cement paste from the surface, weakening it and causing dusting. If heavy rain is forecast, cover the fresh pour with plastic sheeting."
      }
    ],

    relatedTools: [
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
      { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Time Duration", href: "/calculator/time-duration" },
      { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: TOOL_TITLE,
        description: "Calculate concrete volume, bags, and cost for slabs, footings, columns, and stairs. Free online concrete estimator with waste factor and mix ratios. Accurate & easy to use.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
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