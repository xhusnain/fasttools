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
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            How Much Concrete Do I Need? Complete Volume Calculation Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Calculating how much concrete you need depends on the volume of the space you are filling (Length × Width × Thickness). For standard bags, the coverage depends on the bag weight (40lb, 60lb, or 80lb). Our calculator simplifies this by providing exact counts for each bag size, ensuring you order the right amount for your slab, patio, footing, driveway, or any concrete project.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Whether you're a DIY homeowner tackling a small patio project or a professional contractor estimating a large commercial slab, accurate concrete calculation is essential for project success. Ordering too little concrete creates costly delays and cold joints (weak spots where concrete sets before new concrete is added). Ordering too much concrete wastes money and creates disposal challenges. Our advanced calculator accounts for various project types, waste factors, bag sizes, and cost considerations to help you make informed decisions.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Expert Insight: The 10% Waste Factor Rule
          </h2>
          <div className="p-6 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/10 rounded-2xl border border-orange-500/20 shadow-sm relative overflow-hidden">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 italic">
              "One of the most common DIY mistakes is ordering the exact volume calculated. In the real world, subgrades are rarely perfectly level, and formwork can flex under the immense weight of wet concrete. Professional contractors always add a <strong>10% waste factor</strong> to any order. It is far cheaper to have a small amount left over than to have a cold joint in your slab because you ran out of concrete with six inches left to go."
            </p>
            <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mt-2">— FastTools Construction Expert</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Package className="h-6 w-6 text-primary" />
            Quick Reference: Concrete Bags per Cubic Yard
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding how many bags you need per cubic yard helps you estimate material requirements and costs. A single cubic yard of concrete weighs approximately 3,600-4,000 pounds depending on the mix:
          </p>
          <div className="overflow-x-auto">
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
          </div>
        </article>

        <article className="space-y-6">
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
        </article>

        <article className="space-y-6 bg-card border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <HardHat className="h-6 w-6 text-primary" />
            Comprehensive Guide: How to Calculate Concrete for Different Project Types
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
        </article>

        <article className="space-y-6 bg-gradient-to-br from-card to-secondary/5 rounded-xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <ClipboardCheck className="h-6 w-6 text-primary" />
            Essential Pre-Pour Checklist: Before You Pour Concrete
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
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Globe className="h-6 w-6 text-primary" />
            Supported Concrete Mix Types: Choosing the Right Strength
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Different concrete projects require different mix strengths and ratios. Understanding these options helps you choose the right mix for your specific project:
          </p>
          <div className="overflow-x-auto">
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
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Common Concrete Calculation Mistakes to Avoid
          </h2>
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
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
        </article>
      </div>
    ),

    faqs: [
      {
        question: "How do I calculate how much concrete I need?",
        answer: "To calculate concrete volume, measure the Length, Width, and Thickness of your area in feet. Multiply them to get cubic feet (L × W × H), then divide by 27 to get Cubic Yards. For circular columns, use π × Radius² × Height. Always add 5-10% for waste or uneven ground, as professional contractors do. This waste factor accounts for spillage, formwork deflection, and subgrade variations."
      },
      {
        question: "How many 80lb bags of concrete do I need for 1 cubic yard?",
        answer: "A single cubic yard of concrete weighs about 3,600-4,000 pounds depending on the mix. You will need approximately 45 bags of 80lb concrete (each bag covers 0.60 cubic feet), 60 bags of 60lb concrete (each covers 0.45 cubic feet), or 90 bags of 40lb concrete (each covers 0.30 cubic feet) to make one cubic yard. Always order extra to account for waste and spillage."
      },
      {
        question: "How thick should a concrete driveway be?",
        answer: "For standard cars and light vehicles, a 4-inch slab is sufficient. However, for heavier trucks, SUVs, or frequent heavy vehicle traffic, a 5 to 6-inch thickness is highly recommended to prevent cracking and damage over time. A 4-6 inch compacted gravel subbase is also crucial for proper drainage and load distribution. Thicker slabs (6+ inches) are required for commercial or industrial driveways."
      },
      {
        question: "Is it cheaper to mix your own concrete or buy it delivered?",
        answer: "For small projects (under 1-2 cubic yards), bagged concrete is usually cheaper and more convenient for DIY homeowners. Bagged concrete costs more per cubic yard but avoids delivery fees and minimum orders. For larger projects (over 2-3 cubic yards), ordering a ready-mix truck is often more cost-effective (lower cost per yard) and saves immense physical labor. Ready-mix also ensures consistent quality and proper mix ratios."
      },
      {
        question: "How long until I can walk or drive on new concrete?",
        answer: "You can typically walk on new concrete after 24-48 hours, though be gentle. However, you should wait at least 7 days before driving a vehicle on it, and 28 days for it to reach full curing strength (complete hydration). Concrete reaches approximately 70% of its strength after 7 days and 100% after 28 days. For heavy vehicles or machinery, wait the full 28 days. Proper curing (keeping concrete moist) is essential for strength development."
      },
      {
        question: "What is the 3-2-1 rule for mixing concrete?",
        answer: "The classic DIY concrete mix ratio is 3 parts gravel (coarse aggregate), 2 parts sand (fine aggregate), and 1 part cement by volume. This general-purpose mix (1:2:3) yields a strength of around 3000-3500 PSI, suitable for most home projects like patios, walkways, and footings. Water should be added until the mix reaches the consistency of thick oatmeal—about 0.5-0.6 gallons per bag of cement."
      },
      {
        question: "How do I calculate concrete for steps?",
        answer: "Calculate each step (tread and riser) as a distinct rectangular block (Width × Depth × Height). Sum the volumes of all steps. For solid concrete stairs, also calculate the slanted fill underneath if calculating from the ground up (triangular or trapezoidal volume). For precast steps, calculate the volume of each step individually. Add 10% waste factor for steps due to complexity and potential formwork waste."
      },
      {
        question: "What happens if it rains after pouring concrete?",
        answer: "A light drizzle is manageable and can actually help with curing, but heavy rain (more than a gentle sprinkle) can wash away the cement paste from the surface, weakening the concrete and causing dusting (surface deterioration). If heavy rain is forecast within 6-24 hours of pouring, cover the fresh concrete with plastic sheeting or tarps secured around the edges. Avoid direct contact between plastic and concrete surface."
      },
      {
        question: "What is a cubic yard of concrete?",
        answer: "A cubic yard is a volume measurement equal to 27 cubic feet (3 feet × 3 feet × 3 feet). One cubic yard of concrete covers approximately 81 square feet at 4 inches thick, or 108 square feet at 3 inches thick. It weighs approximately 3,600-4,000 pounds depending on the mix. Cubic yards are the standard unit for ordering ready-mix concrete trucks and calculating large project volumes."
      },
      {
        question: "How do I calculate concrete for a circular column?",
        answer: "Use the cylinder volume formula: π × Radius² × Height. Remember that radius is half the diameter (a 12-inch diameter tube has a 6-inch radius). Measure the diameter and height in the same units (feet or inches), then convert to cubic feet and divide by 27 for cubic yards. For bell footings (flared at the bottom), calculate the bell section separately and add to the column volume."
      },
      {
        question: "What is the waste factor for concrete?",
        answer: "The waste factor accounts for spillage, formwork deflection, uneven subgrades, and measurement errors. Professional contractors typically add 5-10% waste factor to any concrete order. For simple rectangular slabs, 5% is usually sufficient. For irregular shapes, slopes, or complex forms, use 10% or even 15% to avoid running short mid-pour. It's cheaper to have a small amount leftover than to run out and create a cold joint."
      },
      {
        question: "How much does concrete cost per cubic yard?",
        answer: "Concrete costs vary by location, strength (PSI), and delivery factors. On average, ready-mix concrete costs $100-$150 per cubic yard for standard 3000 PSI mix, $120-$180 for 4000 PSI, and $130-$200 for 5000 PSI. Bagged concrete costs more per cubic yard ($150-$250) but avoids delivery fees. Additional costs include delivery fees ($50-$150), pumping fees ($300-$800 for large projects), and labor. Always get local quotes for accurate pricing."
      },
      {
        question: "What is the difference between cement and concrete?",
        answer: "Cement is a powder binding agent (usually Portland cement) that, when mixed with water, hardens through hydration. Concrete is the final product made by mixing cement with aggregates (sand and gravel) and water. Cement is one ingredient in concrete—typically 10-15% by volume. The rest is aggregates (60-75% gravel, 15-20% sand) and water (10-15%). You cannot use cement alone for structural applications."
      },
      {
        question: "How do I calculate concrete for a footing?",
        answer: "Calculate footing volume using Length × Width × Depth. For continuous footings (foundation walls), measure the total length of the footing, width, and depth. For individual column footings, calculate each one separately (typically square or rectangular). Ensure footings extend below the frost line (typically 30-48 inches deep depending on location). Add 5-10% waste factor. Rebar volume doesn't significantly affect concrete calculation but should be included in project planning."
      },
      {
        question: "What PSI strength do I need for my project?",
        answer: "PSI (pounds per square inch) indicates concrete strength. Standard projects use 3000 PSI (patios, walkways, general slabs). Driveways and foundations require 4000 PSI for durability. Structural work and heavy loads need 4000-5000 PSI. Lightweight concrete (2000-2500 PSI) is used for non-structural fill. Choose strength based on load requirements, soil conditions, and local building codes. Higher PSI costs more but lasts longer under stress."
      },
      {
        question: "Can I pour concrete in cold weather?",
        answer: "Yes, but it requires special precautions. Concrete should not freeze during the first 24-48 hours of curing. In temperatures below 40°F, use heated water, insulated blankets, or curing compounds. Avoid pouring when temperatures are below 25°F without professional equipment. Cold weather slows hydration and strength development. Best practice: pour concrete when temperatures are 50-70°F for optimal curing. Winter pouring may require concrete additives or heated forms."
      },
      {
        question: "How do I calculate concrete for a slab on grade?",
        answer: "A slab on grade is a concrete slab poured directly on the ground. Calculate volume using Length × Width × Thickness (in feet), then divide by 27 for cubic yards. Standard thickness is 4 inches for patios/walkways, 5-6 inches for driveways, and 6+ inches for garage floors. Include subbase preparation (4-6 inches of compacted gravel) in excavation calculations but not in concrete volume. Add 5-10% waste factor."
      },
      {
        question: "What is the minimum thickness for concrete?",
        answer: "The minimum thickness depends on the application: patios and walkways (3-4 inches), driveways (4-6 inches), garage floors (4-6 inches), footings (8-12 inches minimum width), and structural slabs (varies by span and load). Thinner slabs (under 3 inches) are prone to cracking and not recommended for structural use. Local building codes often specify minimum thicknesses—check with your local building department for requirements."
      },
      {
        question: "How do I calculate concrete for a retaining wall?",
        answer: "Calculate retaining wall concrete by measuring the length, height, and width (thickness) of the wall. Most retaining walls are 6-12 inches thick depending on height and soil pressure. Multiply Length × Height × Thickness for volume. Add concrete for footings (typically 8-12 inches deep and wider than the wall). For stepped walls, calculate each section separately. Add 10% waste factor for walls due to formwork complexity."
      },
      {
        question: "What is a cold joint in concrete?",
        answer: "A cold joint is a weak point where fresh concrete is poured against concrete that has already started to set (typically after 30-60 minutes). Cold joints create potential failure points and should be avoided whenever possible. If you must stop pouring, roughen the surface of the set concrete, clean it thoroughly, and apply a bonding agent before continuing. Better practice: order slightly more concrete than needed and pour continuously to avoid cold joints."
      },
      {
        question: "How do I calculate concrete for a curb and gutter?",
        answer: "Curb and gutter calculations require measuring the linear feet of curb/gutter and the cross-sectional area. Typical curb/gutter is 18-24 inches wide at the base, 6 inches tall, with varying shapes. Calculate the cross-sectional area (square feet) and multiply by linear feet to get cubic feet, then divide by 27 for cubic yards. For complex shapes, break into geometric sections (rectangles, triangles). Add 10% waste factor for curb work due to formwork complexity."
      },
      {
        question: "What is the concrete curing process?",
        answer: "Curing is the process of maintaining adequate moisture and temperature for concrete to gain strength through hydration (cement reacting with water). Proper curing requires keeping concrete moist for at least 7 days (ideally 14-28 days) and preventing freezing or rapid drying. Methods include covering with plastic, applying curing compounds, wet burlap, or sprinkling. Improper curing reduces strength by 30-50% and causes cracking. Concrete reaches full strength after 28 days."
      },
      {
        question: "How do I calculate concrete for a sidewalk?",
        answer: "Calculate sidewalk concrete by measuring Length × Width × Thickness. Standard sidewalks are 4 inches thick and 36-48 inches wide. Multiply dimensions in feet to get cubic feet, divide by 27 for cubic yards. For curved sidewalks, measure along the centerline and use average width. Include control joints (saw cuts) in planning but not in volume calculation. Add 5% waste factor. One cubic yard covers approximately 81 square feet at 4 inches thick."
      },
      {
        question: "What is fiber-reinforced concrete?",
        answer: "Fiber-reinforced concrete contains small fibers (steel, plastic, or glass) mixed into the concrete to improve crack resistance, impact resistance, and durability. Fibers help control shrinkage cracks and increase toughness. It's ideal for driveways, patios, and areas with heavy traffic. Fiber concrete costs slightly more (10-15% premium) but reduces long-term maintenance. Standard mix is 1:2:3 with fibers added at the plant or job site."
      },
      {
        question: "How do I convert cubic feet to cubic yards?",
        answer: "To convert cubic feet to cubic yards, divide the cubic feet by 27 (since there are 27 cubic feet in one cubic yard: 3 feet × 3 feet × 3 feet = 27 cubic feet). For example, 81 cubic feet ÷ 27 = 3 cubic yards. This conversion is essential when ordering ready-mix concrete, as trucks deliver in cubic yards. Our calculator automatically handles this conversion for you."
      },
      {
        question: "What is a ready-mix concrete truck?",
        answer: "A ready-mix truck is a specialized vehicle that mixes and delivers concrete to construction sites. Trucks typically hold 8-12 cubic yards of concrete, though smaller trucks (3-5 yards) are available for residential projects. Concrete is mixed during transport or on-site to prevent premature setting. Trucks require access roads, clearance, and level ground for delivery. Minimum orders are typically 1-3 cubic yards, and delivery fees apply."
      },
      {
        question: "How do I calculate concrete for a foundation?",
        answer: "Foundation concrete calculation depends on foundation type: continuous footings (Length × Width × Depth along perimeter), slab foundations (Length × Width × Thickness), or pier/column foundations (each pier calculated separately). Include footing width (typically 12-24 inches) and depth (below frost line, 30-48 inches). Calculate wall thickness (typically 8-12 inches) if applicable. Add 5-10% waste factor. Foundations require 4000 PSI concrete minimum."
      },
      {
        question: "What is lightweight concrete?",
        answer: "Lightweight concrete uses lighter aggregates (expanded clay, shale, or perlite) instead of gravel, reducing weight by 25-35% while maintaining reasonable strength (2000-3500 PSI). It's used for roof decks, non-structural fill, and applications where weight reduction is important. Lightweight concrete costs more per cubic yard but reduces structural load requirements. It's not recommended for structural foundations or heavy load applications."
      },
      {
        question: "How do I calculate concrete for a patio?",
        answer: "Calculate patio concrete using Length × Width × Thickness (standard 4 inches = 0.33 feet). Multiply dimensions in feet to get cubic feet, divide by 27 for cubic yards. For irregular shapes, break into rectangles and add volumes. Include any borders or edges in calculations. Add 5-10% waste factor. One cubic yard covers 81 square feet at 4 inches thick. Don't forget subbase preparation (4-6 inches gravel) for proper drainage."
      },
      {
        question: "What is concrete slump?",
        answer: "Slump is a measure of concrete workability (consistency) measured using a slump cone test. It indicates how easily concrete flows and can be placed. Slump ranges from 1-7 inches: low slump (1-3 inches) for structural work, medium slump (4-5 inches) for most applications, high slump (6-7 inches) for flowing concrete. Proper slump ensures good placement without segregation. Too high slump can weaken concrete; too low makes placement difficult."
      },
      {
        question: "How do I calculate concrete for fence posts?",
        answer: "Calculate concrete for fence posts by measuring the hole diameter and depth for each post. Use cylinder volume: π × Radius² × Depth. Typical post holes are 6-12 inches in diameter and 24-36 inches deep (below frost line). Multiply single post volume by number of posts. Most posts use 1-2 bags (40-80 lb) of concrete each, depending on post size and soil conditions. Add 10% waste factor for multiple posts."
      },
      {
        question: "What is the 3-4-5 rule for concrete forms?",
        answer: "The 3-4-5 rule is a method to ensure forms are square (90-degree angles). Measure 3 feet along one side, 4 feet along the adjacent side, and the diagonal should measure exactly 5 feet. If it doesn't, adjust the forms until it does. This principle works with any multiple (6-8-10, 9-12-15, etc.). Square forms ensure proper concrete placement and prevent structural issues. Always check for square before pouring."
      },
      {
        question: "How do I calculate concrete for a garage floor?",
        answer: "Calculate garage floor concrete using Length × Width × Thickness. Standard garage floors are 4-6 inches thick. Multiply dimensions in feet, divide by 27 for cubic yards. Include any thickened edge beams or footings separately. Add 5-10% waste factor. One cubic yard covers 54-81 square feet depending on thickness. Garage floors require 4000 PSI concrete minimum and proper subbase (4-6 inches compacted gravel) for durability."
      },
      {
        question: "Is our concrete calculator free to use?",
        answer: "Yes, our concrete calculator is completely free with no charges, subscriptions, or registration required. You can calculate concrete volumes, bag counts, and costs unlimited times, access all features (cubic yards, bags, cost estimation), and use the tool for personal, commercial, or professional purposes without any cost."
      },
      {
        question: "Is my concrete calculation data stored or tracked?",
        answer: "No, all concrete calculations happen directly in your browser. We never store, track, or transmit your dimensions, measurements, or calculation results. Your privacy is completely protected. The calculator works entirely client-side, meaning your project data never leaves your device."
      },
      {
        question: "What makes our concrete calculator different from others?",
        answer: "Our calculator provides comprehensive results including exact cubic yards, precise bag counts (40lb, 60lb, 80lb), cost estimation (bagged vs ready-mix), material breakdown (cement, sand, gravel ratios), waste factor adjustments, and supports multiple project types (slabs, columns, stairs, footings). It's completely free with no limitations, completely private (client-side only), and works on all devices (mobile, tablet, desktop)."
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