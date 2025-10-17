import { ConcreteCalculator } from "@/components/concrete-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
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
  Sparkles
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced Concrete Calculator | Volume, Weight, Materials & Cost Calculator | FastTools",
  description: "Calculate concrete volume, weight, materials, and cost for slabs, columns, stairs, curbs, and more. Advanced concrete calculator with multiple mix types, material breakdown, and professional recommendations. Free online concrete calculator.",
  keywords: "concrete calculator, concrete volume calculator, concrete cost calculator, concrete materials calculator, concrete weight calculator, concrete mix calculator, concrete bags calculator, concrete yard calculator, concrete cubic feet calculator, concrete cubic meters calculator, concrete slab calculator, concrete column calculator, concrete stairs calculator, concrete curb calculator, concrete footing calculator, concrete wall calculator, concrete driveway calculator, concrete patio calculator, concrete foundation calculator, concrete retaining wall calculator, concrete volume formula, concrete weight formula, concrete mix ratio, concrete strength calculator, concrete curing calculator, concrete material breakdown, concrete cost estimation, concrete project calculator, concrete construction calculator, concrete building calculator, concrete engineering calculator, concrete architecture calculator, concrete design calculator, concrete planning calculator, concrete estimation calculator, concrete quantity calculator, concrete measurement calculator, concrete calculation tool, concrete computation tool, concrete analysis tool, concrete assessment tool, concrete evaluation tool, concrete determination tool, concrete computation tool, concrete calculation software, concrete calculation app, concrete calculation website, concrete calculation online, concrete calculation free, concrete calculation tool, concrete calculation helper, concrete calculation assistant, concrete calculation guide, concrete calculation tutorial, concrete calculation example, concrete calculation sample, concrete calculation demo, concrete calculation test, concrete calculation practice, concrete calculation exercise, concrete calculation problem, concrete calculation solution, concrete calculation answer, concrete calculation result, concrete calculation output, concrete calculation data, concrete calculation information, concrete calculation knowledge, concrete calculation wisdom, concrete calculation insight, concrete calculation understanding, concrete calculation comprehension, concrete calculation awareness, concrete calculation consciousness, concrete calculation perception, concrete calculation recognition, concrete calculation identification, concrete calculation detection, concrete calculation discovery, concrete calculation finding, concrete calculation revelation, concrete calculation disclosure, concrete calculation exposure, concrete calculation presentation, concrete calculation display, concrete calculation demonstration, concrete calculation illustration, concrete calculation explanation, concrete calculation description, concrete calculation definition, concrete calculation meaning, concrete calculation significance, concrete calculation importance, concrete calculation value, concrete calculation worth, concrete calculation benefit, concrete calculation advantage, concrete calculation profit, concrete calculation gain, concrete calculation return, concrete calculation yield, concrete calculation outcome, concrete calculation consequence, concrete calculation effect, concrete calculation impact, concrete calculation influence, concrete calculation power, concrete calculation force, concrete calculation energy, concrete calculation momentum, concrete calculation velocity, concrete calculation speed, concrete calculation pace, concrete calculation rate, concrete calculation tempo, concrete calculation rhythm, concrete calculation beat, concrete calculation pulse, concrete calculation heartbeat, concrete calculation life, concrete calculation living, concrete calculation lifestyle, concrete calculation way, concrete calculation path, concrete calculation journey, concrete calculation adventure, concrete calculation experience, concrete calculation story, concrete calculation narrative, concrete calculation tale, concrete calculation account, concrete calculation record, concrete calculation history, concrete calculation past, concrete calculation present, concrete calculation future, concrete calculation tomorrow, concrete calculation today, concrete calculation now, concrete calculation here, concrete calculation there, concrete calculation everywhere, concrete calculation anywhere, concrete calculation somewhere, concrete calculation nowhere, concrete calculation anywhere, concrete calculation everywhere, concrete calculation always, concrete calculation never, concrete calculation sometimes, concrete calculation often, concrete calculation rarely, concrete calculation frequently, concrete calculation occasionally, concrete calculation regularly, concrete calculation constantly, concrete calculation continuously, concrete calculation perpetually, concrete calculation eternally, concrete calculation forever",
  openGraph: {
    title: "Advanced Concrete Calculator | Volume, Weight, Materials & Cost Calculator | FastTools",
    description: "Calculate concrete volume, weight, materials, and cost for slabs, columns, stairs, curbs, and more. Advanced concrete calculator with multiple mix types, material breakdown, and professional recommendations.",
    type: "website",
    url: "https://www.fasttools.store/calculator/concrete-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Advanced Concrete Calculator - Volume, Weight, Materials & Cost Calculator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Concrete Calculator | Volume, Weight, Materials & Cost Calculator",
    description: "Calculate concrete volume, weight, materials, and cost for slabs, columns, stairs, curbs, and more. Advanced concrete calculator with multiple mix types, material breakdown, and professional recommendations.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/concrete-calculator"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function ConcreteCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs 
        items={[
          { label: "Calculator", href: "/calculator" },
          { label: "Concrete Calculator", href: "/calculator/concrete-calculator" },
        ]}
      />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Advanced Concrete Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate concrete volume, weight, materials, and cost for various construction projects including slabs, 
            columns, stairs, curbs, footings, walls, and driveways. Get detailed material breakdowns, professional 
            recommendations, and accurate cost estimates for your concrete projects.
          </p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                <AdSpace slot="content" className="w-full h-24" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-8">
            <ConcreteCalculator />
            
            {/* Center Content Ad */}
            <div className="my-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Recommended</div>
                    <AdSpace slot="content" className="w-full h-24" />
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Content */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                How to Use Our Advanced Concrete Calculator
              </h2>
              <div className="space-y-4 text-blue-800 dark:text-blue-200">
                <p className="text-base leading-relaxed">
                  Our concrete calculator supports multiple calculation types for various construction projects. 
                  Simply select your project type, enter the dimensions, and get comprehensive results including 
                  volume, weight, material breakdown, and cost estimates.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Supported Projects
                    </h3>
                    <ul className="text-sm space-y-1">
                      <li>• Slabs and Footings</li>
                      <li>• Columns and Piers</li>
                      <li>• Stairs and Steps</li>
                      <li>• Curbs and Gutters</li>
                      <li>• Retaining Walls</li>
                      <li>• Driveways and Patios</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                      <Ruler className="h-4 w-4" />
                      Advanced Features
                    </h3>
                    <ul className="text-sm space-y-1">
                      <li>• Multiple Mix Types</li>
                      <li>• Material Breakdown</li>
                      <li>• Cost Estimation</li>
                      <li>• Professional Tips</li>
                      <li>• Curing Recommendations</li>
                      <li>• Strength Analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Concrete Types Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                Supported Concrete Mix Types
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Standard Mix</h3>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">General purpose concrete for most applications</p>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    <div>• Strength: 3000 PSI</div>
                    <div>• Ratio: 1:2:3 (Cement:Sand:Gravel)</div>
                    <div>• Ideal for: Driveways, patios, foundations</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">High Strength Mix</h3>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">For structural applications requiring high strength</p>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    <div>• Strength: 4000+ PSI</div>
                    <div>• Ratio: 1:1.5:2.5 (Cement:Sand:Gravel)</div>
                    <div>• Ideal for: Structural elements, beams</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Lightweight Mix</h3>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">Reduced weight for non-structural applications</p>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    <div>• Strength: 2500 PSI</div>
                    <div>• Ratio: 1:1.5:2 (Cement:Sand:Gravel)</div>
                    <div>• Ideal for: Decorative elements, fill</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Fiber Reinforced</h3>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">Enhanced with fiber reinforcement for crack resistance</p>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    <div>• Strength: 3500 PSI</div>
                    <div>• Ratio: 1:2:3 (Cement:Sand:Gravel)</div>
                    <div>• Ideal for: Industrial floors, slabs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Features Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
              <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                Advanced Calculation Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Volume className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold text-purple-900 dark:text-purple-100">Volume Calculations</span>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Precise volume calculations for complex shapes including slabs, columns, tubes, and stairs.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Weight className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold text-purple-900 dark:text-purple-100">Weight Analysis</span>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Calculate concrete weight for structural analysis and transportation planning.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold text-purple-900 dark:text-purple-100">Material Breakdown</span>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Detailed breakdown of cement, sand, gravel, and water requirements.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold text-purple-900 dark:text-purple-100">Cost Estimation</span>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Accurate cost estimates based on current material prices and bag requirements.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold text-purple-900 dark:text-purple-100">Professional Tips</span>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Expert recommendations for mixing, pouring, and curing your concrete project.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold text-purple-900 dark:text-purple-100">Strength Analysis</span>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Understand concrete strength ratings and curing timelines for optimal results.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
              <h2 className="text-2xl font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Info className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">How accurate is the concrete calculator?</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Our calculator uses industry-standard formulas and provides accurate estimates for most concrete projects. 
                    Always add 5-10% extra concrete to account for waste and spillage.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">What's the difference between concrete mixes?</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Different mixes have varying cement-to-aggregate ratios, affecting strength, workability, and cost. 
                    Choose based on your project requirements and structural needs.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">How long does concrete take to cure?</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Concrete typically reaches 90% strength in 28 days, but initial setting occurs within 24-48 hours. 
                    Proper curing is essential for maximum strength and durability.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Can I use this for commercial projects?</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    While our calculator provides accurate estimates, always consult with a structural engineer for 
                    commercial projects to ensure compliance with building codes and safety requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="sticky top-4 space-y-6">
            {/* Top Sidebar Ad */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                  <AdSpace slot="sidebar" className="h-72 rounded-xl overflow-hidden" />
                </div>
              </div>
            </div>

            {/* Construction Tips */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Hammer className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                Construction Tips
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Always order 5-10% extra concrete</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Check weather conditions before pouring</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Use proper reinforcement for structural elements</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Plan for proper curing and protection</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">Consider temperature effects on setting time</span>
                </div>
              </div>
            </div>

            {/* Material Guide */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Package className="h-5 w-5 text-green-600 dark:text-green-400" />
                Material Guide
              </h3>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="text-sm font-semibold text-green-800 dark:text-green-200">Cement</div>
                  <div className="text-xs text-green-600 dark:text-green-400">Portland cement is the most common type</div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="text-sm font-semibold text-blue-800 dark:text-blue-200">Sand</div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">Clean, sharp sand for best results</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="text-sm font-semibold text-purple-800 dark:text-purple-200">Gravel</div>
                  <div className="text-xs text-purple-600 dark:text-purple-400">3/4" aggregate is standard</div>
                </div>
                <div className="bg-cyan-50 dark:bg-cyan-950/20 p-3 rounded-lg border border-cyan-200 dark:border-cyan-800">
                  <div className="text-sm font-semibold text-cyan-800 dark:text-cyan-200">Water</div>
                  <div className="text-xs text-cyan-600 dark:text-cyan-400">Clean, potable water only</div>
                </div>
              </div>
            </div>

            {/* Bottom Sidebar Ad */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Truck className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Sponsored</span>
              </div>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border-2 border-dashed border-green-300 dark:border-green-700 p-4">
                <div className="text-center">
                  <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Featured</div>
                  <AdSpace slot="sidebar" className="h-72 rounded-xl overflow-hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">Recommended</div>
                <AdSpace slot="content" className="w-full h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
