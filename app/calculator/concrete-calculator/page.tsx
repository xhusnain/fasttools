import { ConcreteCalculator } from "@/components/concrete-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
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
  Wrench,
  Truck,
  Package,
  Zap,
  Sparkles,
  TrendingUp,
  BarChart3,
  PieChart,
  Users,
  Award,
  Clock,
  DollarSign,
  Home,
  FileText,
  Percent
} from "lucide-react"
import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
  title: "Concrete Calculator | Free Cement, Slab, Footing & Bag Estimator",
  description: "Calculate concrete volume, bags, and cost for slabs, footings, columns, and stairs. Free online concrete estimator with waste factor and mix ratios. Accurate & easy to use.",
  path: "/calculator/concrete-calculator",
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Online Concrete Calculator",
  "description": "Calculate concrete volume, weight, materials, and cost for various construction projects with our comprehensive concrete calculator supporting multiple mix types.",
  "url": "https://www.fasttools.store/calculator/concrete-calculator",
  "applicationCategory": "ConstructionApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I calculate how much concrete I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To calculate concrete volume, multiply Length × Width × Thickness (in feet) to get cubic feet. Then divide by 27 to convert to cubic yards. Always add 5-10% for waste."
      }
    },
    {
      "@type": "Question",
      "name": "How many 80lb bags of concrete make a cubic yard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You need approximately 45 bags of 80lb concrete to make one cubic yard. Each 80lb bag yields about 0.6 cubic feet of concrete."
      }
    },
    {
      "@type": "Question",
      "name": "What is the formula for concrete slab calculation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The formula is: Volume (cu yds) = (Length (ft) × Width (ft) × Thickness (in) / 12) / 27. This gives you the total cubic yards required for your slab."
      }
    },
    {
      "@type": "Question",
      "name": "How much waste factor should I add?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is recommended to add 5-10% extra concrete to account for spillage, uneven subgrades, and measurement errors. For complex shapes, consider adding up to 15%."
      }
    },
    {
      "@type": "Question",
      "name": "How long does concrete take to cure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Concrete reaches about 70% of its strength within 7 days and fully cures in 28 days. However, it sets enough to walk on within 24-48 hours."
      }
    }
  ]
}

export default function ConcreteCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-card">
        <div className="container mx-auto px-3 py-6 md:py-8">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Concrete Calculator", href: "/calculator/concrete-calculator" },
            ]}
          />

          <div className="max-w-7xl mx-auto">
            <div className="mb-4 md:mb-6">
              <GHeader
                title="Free Concrete Calculator & Estimator"
                description="Calculate concrete volume in cubic yards or bags for slabs, footings, and columns. Get accurate material estimates with our free concrete calculator including waste factors and cost breakdown."
                titleSize="medium"
              />
            </div>

            {/* Mobile/Tablet AdSpace after GHeader */}
            <div className="my-6 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
            </div>

            <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
              <div>
                <ConcreteCalculator />

                {/* Why Use This Calculator */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mt-6 md:mt-8 mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Award className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Why Use Our Concrete Estimator?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <CheckCircle className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Accurate Volume & Bags</h3>
                          <p className="text-xs text-muted-foreground">Get precise cubic yardage and exact bag counts (40lb, 60lb, 80lb) instantly.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <DollarSign className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Cost Estimation</h3>
                          <p className="text-xs text-muted-foreground">Estimate total project cost based on local material prices.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <TrendingUp className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Waste Factor Included</h3>
                          <p className="text-xs text-muted-foreground">Automatically calculate 5-10% waste to prevent shortages.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <Zap className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Multiple Project Types</h3>
                          <p className="text-xs text-muted-foreground">Specialized formulas for slabs, footings, columns, stairs, and curbs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How to Use */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mt-6 md:mt-8 mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    How to Use Our Concrete Calculator
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <span className="text-foreground font-bold text-xs">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Select Project Type</h3>
                          <p className="text-xs text-muted-foreground">Choose from slabs, columns, stairs, curbs, and more</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <span className="text-foreground font-bold text-xs">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Enter Dimensions</h3>
                          <p className="text-xs text-muted-foreground">Input length, width, height, and other measurements</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <span className="text-foreground font-bold text-xs">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Choose Mix Type</h3>
                          <p className="text-xs text-muted-foreground">Select standard, high-strength, or lightweight mix</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <span className="text-foreground font-bold text-xs">4</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Get Results</h3>
                          <p className="text-xs text-muted-foreground">View volume, weight, materials, and cost breakdown</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supported Project Types */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Building className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Supported Concrete Project Types
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { type: "Concrete Slab Calculator", icon: Building, desc: "Calculate volume for slabs and foundations", example: "Driveway, patio, floor slab" },
                      { type: "Concrete Column Calculator", icon: Ruler, desc: "Calculate volume for columns and piers", example: "Structural columns, support piers" },
                      { type: "Concrete Stairs Calculator", icon: Target, desc: "Calculate volume for stairs and steps", example: "Exterior stairs, interior steps" },
                      { type: "Concrete Curb Calculator", icon: Volume, desc: "Calculate volume for curbs and gutters", example: "Street curbs, landscape borders" },
                      { type: "Concrete Wall Calculator", icon: Weight, desc: "Calculate volume for retaining walls", example: "Garden walls, retaining structures" },
                      { type: "Concrete Footing Calculator", icon: Package, desc: "Calculate volume for footings", example: "Foundation footings, support bases" },
                      { type: "Concrete Driveway Calculator", icon: Truck, desc: "Calculate volume for driveways", example: "Residential driveways, parking areas" },
                      { type: "Concrete Patio Calculator", icon: Globe, desc: "Calculate volume for patios", example: "Outdoor patios, entertainment areas" },
                      { type: "Concrete Foundation Calculator", icon: Hammer, desc: "Calculate volume for foundations", example: "House foundations, building bases" }
                    ].map(({ type, icon: Icon, desc, example }) => (
                      <div key={type} className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Icon className="h-3 w-3 text-foreground" />
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">{type}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{desc}</p>
                        <p className="text-xs text-foreground font-mono bg-primary/10 px-1.5 py-0.5 rounded">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concrete Mix Types */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Globe className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Supported Concrete Mix Types
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    {[
                      { mix: "Standard Mix", strength: "3000 PSI", ratio: "1:2:3", use: "General purpose concrete for most applications" },
                      { mix: "High Strength Mix", strength: "4000+ PSI", ratio: "1:1.5:2.5", use: "Structural applications requiring high strength" },
                      { mix: "Lightweight Mix", strength: "2500 PSI", ratio: "1:1.5:2", use: "Reduced weight for non-structural applications" },
                      { mix: "Fiber Reinforced", strength: "3500 PSI", ratio: "1:2:3", use: "Enhanced with fiber reinforcement for crack resistance" }
                    ].map(({ mix, strength, ratio, use }, index) => (
                      <div key={index} className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <div className="flex items-center gap-1.5 mb-1">
                          <CheckCircle className="h-3 w-3 text-foreground" />
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">{mix}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{use}</p>
                        <div className="text-xs text-foreground space-y-0.5">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Strength: {strength}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Ratio: {ratio} (Cement:Sand:Gravel)</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Features */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Target className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Advanced Calculation Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <Volume className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Volume Calculations</h3>
                          <p className="text-xs text-muted-foreground">Precise volume calculations for complex shapes</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <Weight className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Weight Analysis</h3>
                          <p className="text-xs text-muted-foreground">Calculate concrete weight for structural analysis</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <Package className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Material Breakdown</h3>
                          <p className="text-xs text-muted-foreground">Detailed breakdown of cement, sand, gravel, and water</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-heading-accent-border/10 rounded-lg">
                          <Zap className="h-3 w-3 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm">Professional Tips</h3>
                          <p className="text-xs text-muted-foreground">Expert recommendations for mixing and curing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Content Sections for SEO */}
                <div className="space-y-6 md:space-y-8 mb-6 md:mb-8">
                  {/* Slab Thickness Guide */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Ruler className="h-4 w-4 text-foreground" />
                      </div>
                      How Thick Should My Concrete Slab Be?
                    </h2>
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p className="mb-4">
                        Choosing the right thickness for your concrete slab is crucial for its longevity and performance. The ideal thickness depends largely on the intended use and the load it needs to support.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary/50 p-4 rounded-lg">
                          <h3 className="font-semibold text-foreground mb-2">Driveways (5-6 inches)</h3>
                          <p className="text-sm">
                            For standard residential driveways, a minimum thickness of <strong>4 inches</strong> is common, but increasing it to <strong>5 or 6 inches</strong> significantly boosts durability. This extra thickness prevents cracking under the weight of SUVs, trucks, or delivery vehicles. Always ensure a compacted gravel base of 4-6 inches for proper drainage.
                          </p>
                        </div>
                        <div className="bg-secondary/50 p-4 rounded-lg">
                          <h3 className="font-semibold text-foreground mb-2">Patios & Walkways (4 inches)</h3>
                          <p className="text-sm">
                            For patios, sidewalks, and steps that primarily see foot traffic and patio furniture, a standard <strong>4-inch slab</strong> is sufficient. However, if you plan to install a hot tub or heavy outdoor kitchen, consider thickening those specific areas to 6 inches to handle the concentrated load.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Common Mistakes */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Info className="h-4 w-4 text-foreground" />
                      </div>
                      Common Concrete Calculation Mistakes
                    </h2>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">!</div>
                        <div>
                          <strong className="text-foreground block">Forgetting the Waste Factor</strong>
                          Projects rarely go perfectly. Spillage, uneven ground, and formwork deflection can eat up your concrete. We recommend adding <strong>5-10% extra</strong> to your order to avoid running short mid-pour.
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">!</div>
                        <div>
                          <strong className="text-foreground block">Ignoring Ground Slope</strong>
                          If your ground isn't perfectly level, your slab thickness will vary. Measure the depth at multiple points and use the average, or better yet, grade the soil properly before pouring.
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold text-xs">!</div>
                        <div>
                          <strong className="text-foreground block">Wrong Unit Conversions</strong>
                          Mixing up feet and inches is the #1 cause of calculation errors. Our calculator handles these conversions automatically, but always double-check your input units.
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Mixes & Curing Guide */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Clock className="h-4 w-4 text-foreground" />
                      </div>
                      Concrete Mixes & Curing Guide
                    </h2>
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <p>
                        <strong>Standard vs. High Strength:</strong> For most DIY projects like walkways and patios, a standard <strong>3000 PSI mix</strong> is perfect. For driveways or foundations supporting structures, opt for a <strong>4000 PSI or higher</strong> mix for better freeze-thaw resistance and load capacity.
                      </p>
                      <div className="border-t border-border pt-4 mt-4">
                        <h3 className="font-semibold text-foreground mb-2">Curing Timeline</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <li className="bg-secondary/30 p-3 rounded text-center">
                            <span className="block text-heading-accent font-bold">24-48 Hours</span>
                            Safe for foot traffic
                          </li>
                          <li className="bg-secondary/30 p-3 rounded text-center">
                            <span className="block text-heading-accent font-bold">7 Days</span>
                            Cured enough for vehicles (70% strength)
                          </li>
                          <li className="bg-secondary/30 p-3 rounded text-center">
                            <span className="block text-heading-accent font-bold">28 Days</span>
                            Fully cured (100% strength)
                          </li>
                        </ul>
                      </div>
                      <p className="text-xs italic mt-2">
                        *Tip: Keep your concrete moist (wet curing) for at least the first 7 days to prevent surface cracks and ensure maximum strength.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Info className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-2 md:space-y-3">
                    {[
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
                    ].map((faq, index) => (
                      <div key={index} className="p-2 md:p-3 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-1 text-xs md:text-sm">{faq.question}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Tools */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
                    </div>
                    Related Construction & Math Calculators
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { name: "Mortgage Calculator", desc: "Calculate home loan payments", href: "/calculator/mortgage-calculator", icon: Home },
                      { name: "Loan Calculator", desc: "Calculate EMI, interest, and loan payments", href: "/calculator/loan-calculator", icon: DollarSign },
                      { name: "Tax Calculator", desc: "Calculate income tax and deductions", href: "/calculator/tax-calculator", icon: FileText },
                      { name: "Percentage Calculator", desc: "Calculate percentages and changes", href: "/calculator/percentage-calculator", icon: Percent },
                      { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/calculator/bmi-calculator", icon: Users },
                      { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/calculator/age-calculator", icon: Award },
                      { name: "Time Duration", desc: "Calculate time between dates", href: "/calculator/time-duration", icon: Clock },
                      { name: "Scientific Calculator", desc: "Advanced mathematical calculations", href: "/calculator/scientific-calculator", icon: Calculator },
                      { name: "Investment Calculator", desc: "Calculate investment returns and growth", href: "/calculator/investment-calculator", icon: TrendingUp },
                      { name: "Retirement Calculator", desc: "Plan your retirement savings", href: "/calculator/retirement-calculator", icon: Target },
                      { name: "Currency Converter", desc: "Convert between currencies", href: "/converters/currency", icon: Globe },
                      { name: "Temperature Converter", desc: "Convert temperature units", href: "/converters/temperature", icon: BarChart3 }
                    ].map(({ name, desc, icon: Icon, href }) => (
                      <a
                        key={name}
                        href={href}
                        className="p-2 md:p-3 bg-card rounded-lg border border-border hover:bg-secondary transition-colors group hover:border-heading-accent-border/50"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-3 w-3 text-foreground group-hover:text-heading-accent" />
                          <h3 className="font-semibold text-heading-accent text-xs md:text-sm group-hover:text-heading-accent">{name}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground group-hover:text-foreground">{desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Sidebar with AdSense */}
              <div className="space-y-6 hidden lg:block">
                <div className="sticky top-32 space-y-6">
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}