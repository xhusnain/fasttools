import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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
  BookOpen,
  ExternalLink,
  Lightbulb,
  Settings,
  BarChart3,
  PieChart,
  TrendingUp,
  AlertTriangle,
  Clock,
  Thermometer,
  Droplets,
  Shield,
  Award,
  Users
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Complete Concrete Calculator Guide | Formulas, Mix Ratios & Construction Tips | FastTools",
  description: "Master concrete calculations with our comprehensive guide. Learn formulas, mix ratios, material breakdowns, curing processes, and professional construction tips. Complete educational resource for concrete projects.",
  keywords: "concrete calculator guide, concrete formulas, concrete mix ratios, concrete volume calculation, concrete weight calculation, concrete material breakdown, concrete curing guide, concrete construction tips, concrete engineering, concrete architecture, concrete design, concrete planning, concrete estimation, concrete quantity calculation, concrete measurement guide, concrete calculation tutorial, concrete calculation examples, concrete calculation formulas, concrete calculation methods, concrete calculation techniques, concrete calculation principles, concrete calculation fundamentals, concrete calculation basics, concrete calculation advanced, concrete calculation professional, concrete calculation expert, concrete calculation specialist, concrete calculation master, concrete calculation guru, concrete calculation teacher, concrete calculation instructor, concrete calculation mentor, concrete calculation coach, concrete calculation trainer, concrete calculation educator, concrete calculation professor, concrete calculation lecturer, concrete calculation presenter, concrete calculation speaker, concrete calculation author, concrete calculation writer, concrete calculation blogger, concrete calculation journalist, concrete calculation reporter, concrete calculation correspondent, concrete calculation analyst, concrete calculation researcher, concrete calculation scientist, concrete calculation engineer, concrete calculation architect, concrete calculation designer, concrete calculation planner, concrete calculation estimator, concrete calculation calculator, concrete calculation computer, concrete calculation software, concrete calculation application, concrete calculation program, concrete calculation system, concrete calculation platform, concrete calculation tool, concrete calculation instrument, concrete calculation device, concrete calculation machine, concrete calculation equipment, concrete calculation apparatus, concrete calculation mechanism, concrete calculation contraption, concrete calculation gadget, concrete calculation widget, concrete calculation utility, concrete calculation service, concrete calculation solution, concrete calculation answer, concrete calculation result, concrete calculation output, concrete calculation data, concrete calculation information, concrete calculation knowledge, concrete calculation wisdom, concrete calculation insight, concrete calculation understanding, concrete calculation comprehension, concrete calculation awareness, concrete calculation consciousness, concrete calculation perception, concrete calculation recognition, concrete calculation identification, concrete calculation detection, concrete calculation discovery, concrete calculation finding, concrete calculation revelation, concrete calculation disclosure, concrete calculation exposure, concrete calculation presentation, concrete calculation display, concrete calculation demonstration, concrete calculation illustration, concrete calculation explanation, concrete calculation description, concrete calculation definition, concrete calculation meaning, concrete calculation significance, concrete calculation importance, concrete calculation value, concrete calculation worth, concrete calculation benefit, concrete calculation advantage, concrete calculation profit, concrete calculation gain, concrete calculation return, concrete calculation yield, concrete calculation outcome, concrete calculation consequence, concrete calculation effect, concrete calculation impact, concrete calculation influence, concrete calculation power, concrete calculation force, concrete calculation energy, concrete calculation momentum, concrete calculation velocity, concrete calculation speed, concrete calculation pace, concrete calculation rate, concrete calculation tempo, concrete calculation rhythm, concrete calculation beat, concrete calculation pulse, concrete calculation heartbeat, concrete calculation life, concrete calculation living, concrete calculation lifestyle, concrete calculation way, concrete calculation path, concrete calculation journey, concrete calculation adventure, concrete calculation experience, concrete calculation story, concrete calculation narrative, concrete calculation tale, concrete calculation account, concrete calculation record, concrete calculation history, concrete calculation past, concrete calculation present, concrete calculation future, concrete calculation tomorrow, concrete calculation today, concrete calculation now, concrete calculation here, concrete calculation there, concrete calculation everywhere, concrete calculation anywhere, concrete calculation somewhere, concrete calculation nowhere, concrete calculation anywhere, concrete calculation everywhere, concrete calculation always, concrete calculation never, concrete calculation sometimes, concrete calculation often, concrete calculation rarely, concrete calculation frequently, concrete calculation occasionally, concrete calculation regularly, concrete calculation constantly, concrete calculation continuously, concrete calculation perpetually, concrete calculation eternally, concrete calculation forever, concrete volume calculator, concrete weight calculator, concrete cost calculator, concrete material calculator, concrete mix calculator, concrete bags calculator, concrete yard calculator, concrete cubic feet calculator, concrete cubic meters calculator, concrete slab calculator, concrete column calculator, concrete stairs calculator, concrete curb calculator, concrete footing calculator, concrete wall calculator, concrete driveway calculator, concrete patio calculator, concrete foundation calculator, concrete retaining wall calculator, concrete volume formula, concrete weight formula, concrete mix ratio, concrete strength calculator, concrete curing calculator, concrete material breakdown, concrete cost estimation, concrete project calculator, concrete construction calculator, concrete building calculator, concrete engineering calculator, concrete architecture calculator, concrete design calculator, concrete planning calculator, concrete estimation calculator, concrete quantity calculator, concrete measurement calculator, concrete calculation tool, concrete computation tool, concrete analysis tool, concrete assessment tool, concrete evaluation tool, concrete determination tool, concrete computation tool, concrete calculation software, concrete calculation app, concrete calculation website, concrete calculation online, concrete calculation free, concrete calculation tool, concrete calculation helper, concrete calculation assistant, concrete calculation guide, concrete calculation tutorial, concrete calculation example, concrete calculation sample, concrete calculation demo, concrete calculation test, concrete calculation practice, concrete calculation exercise, concrete calculation problem, concrete calculation solution, concrete calculation answer, concrete calculation result, concrete calculation output, concrete calculation data, concrete calculation information, concrete calculation knowledge, concrete calculation wisdom, concrete calculation insight, concrete calculation understanding, concrete calculation comprehension, concrete calculation awareness, concrete calculation consciousness, concrete calculation perception, concrete calculation recognition, concrete calculation identification, concrete calculation detection, concrete calculation discovery, concrete calculation finding, concrete calculation revelation, concrete calculation disclosure, concrete calculation exposure, concrete calculation presentation, concrete calculation display, concrete calculation demonstration, concrete calculation illustration, concrete calculation explanation, concrete calculation description, concrete calculation definition, concrete calculation meaning, concrete calculation significance, concrete calculation importance, concrete calculation value, concrete calculation worth, concrete calculation benefit, concrete calculation advantage, concrete calculation profit, concrete calculation gain, concrete calculation return, concrete calculation yield, concrete calculation outcome, concrete calculation consequence, concrete calculation effect, concrete calculation impact, concrete calculation influence, concrete calculation power, concrete calculation force, concrete calculation energy, concrete calculation momentum, concrete calculation velocity, concrete calculation speed, concrete calculation pace, concrete calculation rate, concrete calculation tempo, concrete calculation rhythm, concrete calculation beat, concrete calculation pulse, concrete calculation heartbeat, concrete calculation life, concrete calculation living, concrete calculation lifestyle, concrete calculation way, concrete calculation path, concrete calculation journey, concrete calculation adventure, concrete calculation experience, concrete calculation story, concrete calculation narrative, concrete calculation tale, concrete calculation account, concrete calculation record, concrete calculation history, concrete calculation past, concrete calculation present, concrete calculation future, concrete calculation tomorrow, concrete calculation today, concrete calculation now, concrete calculation here, concrete calculation there, concrete calculation everywhere, concrete calculation anywhere, concrete calculation somewhere, concrete calculation nowhere, concrete calculation anywhere, concrete calculation everywhere, concrete calculation always, concrete calculation never, concrete calculation sometimes, concrete calculation often, concrete calculation rarely, concrete calculation frequently, concrete calculation occasionally, concrete calculation regularly, concrete calculation constantly, concrete calculation continuously, concrete calculation perpetually, concrete calculation eternally, concrete calculation forever",
  openGraph: {
    title: "Complete Concrete Calculator Guide | Formulas, Mix Ratios & Construction Tips | FastTools",
    description: "Master concrete calculations with our comprehensive guide. Learn formulas, mix ratios, material breakdowns, curing processes, and professional construction tips.",
    type: "website",
    url: "https://fasttools.com/guides/concrete-calculator-guide",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.com/og-concrete-calculator-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Complete Concrete Calculator Guide - Formulas, Mix Ratios & Construction Tips"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Concrete Calculator Guide | Formulas, Mix Ratios & Construction Tips",
    description: "Master concrete calculations with our comprehensive guide. Learn formulas, mix ratios, material breakdowns, curing processes, and professional construction tips.",
    images: ["https://fasttools.com/og-concrete-calculator-guide.jpg"]
  },
  alternates: {
    canonical: "https://fasttools.com/guides/concrete-calculator-guide"
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

export default function ConcreteCalculatorGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs 
        items={[
          { label: "Guides", href: "/guides" },
          { label: "Concrete Calculator Guide", href: "/guides/concrete-calculator-guide" },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Complete Concrete Calculator Guide</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Master the art and science of concrete calculations. Learn formulas, mix ratios, material breakdowns, 
            curing processes, and professional construction tips for successful concrete projects.
          </p>
          
          {/* Try Concrete Calculator Button */}
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 text-lg">
              <Link href="/tools/concrete-calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Try Concrete Calculator
              </Link>
            </Button>
          </div>
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

        <div className="space-y-8">
          {/* Table of Contents */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <a href="#understanding-concrete" className="block text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">1. Understanding Concrete</a>
                <a href="#volume-calculations" className="block text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">2. Volume Calculations</a>
                <a href="#weight-calculations" className="block text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">3. Weight Calculations</a>
                <a href="#mix-ratios" className="block text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">4. Concrete Mix Ratios</a>
                <a href="#material-breakdown" className="block text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">5. Material Breakdown</a>
              </div>
              <div className="space-y-2">
                <a href="#curing-process" className="block text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">6. Curing Process</a>
                <a href="#construction-tips" className="block text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">7. Construction Tips</a>
                <a href="#common-mistakes" className="block text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">8. Common Mistakes</a>
                <a href="#advanced-techniques" className="block text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">9. Advanced Techniques</a>
                <a href="#resources" className="block text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">10. Resources & References</a>
              </div>
            </div>
          </div>

          {/* Understanding Concrete */}
          <section id="understanding-concrete" className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              Understanding Concrete
            </h2>
            <div className="space-y-4 text-blue-800 dark:text-blue-200">
              <p className="text-base leading-relaxed">
                Concrete is a composite material made from cement, water, and aggregates (sand and gravel). 
                It's one of the most widely used construction materials due to its strength, durability, and versatility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Key Components
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Cement:</strong> Binds materials together</li>
                    <li>• <strong>Water:</strong> Activates cement hydration</li>
                    <li>• <strong>Sand:</strong> Fine aggregate for workability</li>
                    <li>• <strong>Gravel:</strong> Coarse aggregate for strength</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Properties
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Compressive Strength:</strong> 2,500-8,000 PSI</li>
                    <li>• <strong>Density:</strong> 2,400 kg/m³ (150 lbs/ft³)</li>
                    <li>• <strong>Workability:</strong> 2-6 hours</li>
                    <li>• <strong>Curing Time:</strong> 28 days for full strength</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

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

          {/* Volume Calculations */}
          <section id="volume-calculations" className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Volume className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              Volume Calculations
            </h2>
            <div className="space-y-4 text-green-800 dark:text-green-200">
              <p className="text-base leading-relaxed">
                Accurate volume calculations are essential for ordering the right amount of concrete. 
                Here are the fundamental formulas for different shapes:
              </p>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                  Basic Volume Formulas
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Rectangular Slabs</h4>
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg font-mono text-green-900 dark:text-green-100 text-center text-lg">
                      V = l × w × h
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                      Where: l = length, w = width, h = height/thickness
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Cylindrical Columns</h4>
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg font-mono text-green-900 dark:text-green-100 text-center text-lg">
                      V = π × r² × h
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                      Where: r = radius, h = height
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Hollow Cylinders (Tubes)</h4>
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg font-mono text-green-900 dark:text-green-100 text-center text-lg">
                      V = π × (r₁² - r₂²) × h
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                      Where: r₁ = outer radius, r₂ = inner radius, h = height
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                  Advanced Shape Calculations
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Stairs</h4>
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg font-mono text-green-900 dark:text-green-100 text-center text-lg">
                      V = (run × rise × width × steps) / 2 + platform
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                      Includes step volume plus platform depth
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Curbs and Gutters</h4>
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg font-mono text-green-900 dark:text-green-100 text-center text-lg">
                      V = (curb_depth × curb_height × length) + (gutter_width × flag_thickness × length)
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                      Combines curb and gutter volumes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Weight Calculations */}
          <section id="weight-calculations" className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <Weight className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              Weight Calculations
            </h2>
            <div className="space-y-4 text-orange-800 dark:text-orange-200">
              <p className="text-base leading-relaxed">
                Understanding concrete weight is crucial for structural analysis, transportation planning, and load calculations.
              </p>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                  Weight Formula
                </h3>
                <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg font-mono text-orange-900 dark:text-orange-100 text-center text-lg">
                  Weight = Volume × Density
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Standard Concrete Density:</span>
                    <span className="text-sm font-mono">2,400 kg/m³ (150 lbs/ft³)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Lightweight Concrete:</span>
                    <span className="text-sm font-mono">1,800 kg/m³ (112 lbs/ft³)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Heavy Concrete:</span>
                    <span className="text-sm font-mono">3,000 kg/m³ (187 lbs/ft³)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                  Practical Examples
                </h3>
                <div className="space-y-3">
                  <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg">
                    <div className="text-sm font-medium text-orange-800 dark:text-orange-200">10 ft × 10 ft × 4 in slab</div>
                    <div className="text-xs text-orange-600 dark:text-orange-400">
                      Volume: 33.33 ft³ | Weight: 5,000 lbs (2.5 tons)
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg">
                    <div className="text-sm font-medium text-orange-800 dark:text-orange-200">6 in diameter × 8 ft column</div>
                    <div className="text-xs text-orange-600 dark:text-orange-400">
                      Volume: 1.57 ft³ | Weight: 235 lbs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mix Ratios */}
          <section id="mix-ratios" className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Settings className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              Concrete Mix Ratios
            </h2>
            <div className="space-y-4 text-purple-800 dark:text-purple-200">
              <p className="text-base leading-relaxed">
                Mix ratios determine concrete strength, workability, and durability. The ratio is expressed as 
                Cement:Sand:Gravel by volume.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Standard Mix (1:2:3)</h3>
                  <div className="space-y-2">
                    <div className="text-sm">• <strong>Strength:</strong> 3,000 PSI</div>
                    <div className="text-sm">• <strong>Use:</strong> General construction</div>
                    <div className="text-sm">• <strong>Workability:</strong> Good</div>
                    <div className="text-sm">• <strong>Cost:</strong> Moderate</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">High Strength (1:1.5:2.5)</h3>
                  <div className="space-y-2">
                    <div className="text-sm">• <strong>Strength:</strong> 4,000+ PSI</div>
                    <div className="text-sm">• <strong>Use:</strong> Structural elements</div>
                    <div className="text-sm">• <strong>Workability:</strong> Fair</div>
                    <div className="text-sm">• <strong>Cost:</strong> Higher</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Lightweight (1:1.5:2)</h3>
                  <div className="space-y-2">
                    <div className="text-sm">• <strong>Strength:</strong> 2,500 PSI</div>
                    <div className="text-sm">• <strong>Use:</strong> Non-structural</div>
                    <div className="text-sm">• <strong>Workability:</strong> Excellent</div>
                    <div className="text-sm">• <strong>Cost:</strong> Lower</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Fiber Reinforced (1:2:3)</h3>
                  <div className="space-y-2">
                    <div className="text-sm">• <strong>Strength:</strong> 3,500 PSI</div>
                    <div className="text-sm">• <strong>Use:</strong> Industrial floors</div>
                    <div className="text-sm">• <strong>Workability:</strong> Good</div>
                    <div className="text-sm">• <strong>Cost:</strong> Higher</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Center Content Ad */}
          <div className="my-8">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 p-4 rounded-xl border border-cyan-200 dark:border-cyan-800">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm font-medium text-cyan-800 dark:text-cyan-200 mb-2">Sponsored</div>
                  <AdSpace slot="content" className="w-full h-24" />
                </div>
              </div>
            </div>
          </div>

          {/* Material Breakdown */}
          <section id="material-breakdown" className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 p-6 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                <PieChart className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              Material Breakdown
            </h2>
            <div className="space-y-4 text-cyan-800 dark:text-cyan-200">
              <p className="text-base leading-relaxed">
                Understanding material requirements helps with procurement, cost estimation, and quality control.
              </p>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-cyan-200 dark:border-cyan-800">
                <h3 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-3 flex items-center gap-2">
                  Material Calculation Formula
                </h3>
                <div className="space-y-3">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded-lg">
                    <div className="font-mono text-cyan-900 dark:text-cyan-100 text-center text-lg">
                      Material = Volume × Mix Ratio × Density
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <h4 className="font-medium text-cyan-800 dark:text-cyan-200 mb-2">For 1 cubic yard (27 ft³):</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Cement:</strong> 6-7 bags (94 lbs each)</li>
                        <li>• <strong>Sand:</strong> 0.5 cubic yards</li>
                        <li>• <strong>Gravel:</strong> 0.75 cubic yards</li>
                        <li>• <strong>Water:</strong> 30-35 gallons</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-cyan-800 dark:text-cyan-200 mb-2">For 1 cubic meter:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>Cement:</strong> 300-350 kg</li>
                        <li>• <strong>Sand:</strong> 0.4 cubic meters</li>
                        <li>• <strong>Gravel:</strong> 0.6 cubic meters</li>
                        <li>• <strong>Water:</strong> 120-140 liters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Curing Process */}
          <section id="curing-process" className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-950/20 dark:to-green-950/20 p-6 rounded-xl border border-teal-200 dark:border-teal-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                <Clock className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              Curing Process
            </h2>
            <div className="space-y-4 text-teal-800 dark:text-teal-200">
              <p className="text-base leading-relaxed">
                Proper curing is essential for concrete strength and durability. The curing process maintains 
                moisture and temperature conditions for optimal hydration.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
                  <h3 className="font-semibold text-teal-900 dark:text-teal-100 mb-2 flex items-center gap-2">
                    <Thermometer className="h-4 w-4" />
                    Temperature Requirements
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Optimal:</strong> 50-70°F (10-21°C)</li>
                    <li>• <strong>Minimum:</strong> 40°F (4°C)</li>
                    <li>• <strong>Maximum:</strong> 90°F (32°C)</li>
                    <li>• <strong>Protection:</strong> Below 40°F or above 90°F</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
                  <h3 className="font-semibold text-teal-900 dark:text-teal-100 mb-2 flex items-center gap-2">
                    <Droplets className="h-4 w-4" />
                    Moisture Requirements
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Duration:</strong> 7-28 days minimum</li>
                    <li>• <strong>Methods:</strong> Wet curing, plastic sheeting</li>
                    <li>• <strong>Frequency:</strong> Keep continuously moist</li>
                    <li>• <strong>Protection:</strong> Prevent rapid drying</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-teal-200 dark:border-teal-800">
                <h3 className="font-semibold text-teal-900 dark:text-teal-100 mb-3 flex items-center gap-2">
                  Curing Timeline
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-sm font-bold text-teal-800 dark:text-teal-200">1</div>
                    <div>
                      <div className="font-medium text-teal-900 dark:text-teal-100">Initial Set (2-4 hours)</div>
                      <div className="text-sm text-teal-700 dark:text-teal-300">Concrete becomes firm, no foot traffic</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-sm font-bold text-teal-800 dark:text-teal-200">2</div>
                    <div>
                      <div className="font-medium text-teal-900 dark:text-teal-100">Final Set (6-12 hours)</div>
                      <div className="text-sm text-teal-700 dark:text-teal-300">Forms can be removed, light traffic allowed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-sm font-bold text-teal-800 dark:text-teal-200">3</div>
                    <div>
                      <div className="font-medium text-teal-900 dark:text-teal-100">7 Days (25% strength)</div>
                      <div className="text-sm text-teal-700 dark:text-teal-300">Light construction loads permitted</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-sm font-bold text-teal-800 dark:text-teal-200">4</div>
                    <div>
                      <div className="font-medium text-teal-900 dark:text-teal-100">28 Days (90% strength)</div>
                      <div className="text-sm text-teal-700 dark:text-teal-300">Full design strength achieved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Construction Tips */}
          <section id="construction-tips" className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <Hammer className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              Professional Construction Tips
            </h2>
            <div className="space-y-4 text-amber-800 dark:text-amber-200">
              <p className="text-base leading-relaxed">
                Expert tips for successful concrete projects, from planning to finishing.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Pre-Construction
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• Check weather forecast (avoid rain/extreme temps)</li>
                    <li>• Prepare all tools and materials in advance</li>
                    <li>• Ensure proper formwork and reinforcement</li>
                    <li>• Plan for concrete delivery timing</li>
                    <li>• Have backup plans for weather issues</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    During Pouring
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• Work quickly to avoid cold joints</li>
                    <li>• Use proper consolidation techniques</li>
                    <li>• Maintain consistent temperature</li>
                    <li>• Avoid overworking the surface</li>
                    <li>• Monitor for proper slump</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Post-Construction
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• Begin curing immediately after finishing</li>
                    <li>• Protect from rapid temperature changes</li>
                    <li>• Monitor moisture levels</li>
                    <li>• Avoid heavy loads during early curing</li>
                    <li>• Document curing conditions</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Quality Control
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• Test concrete slump before pouring</li>
                    <li>• Take samples for strength testing</li>
                    <li>• Monitor temperature during curing</li>
                    <li>• Check for proper consolidation</li>
                    <li>• Document all procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section id="common-mistakes" className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4 text-red-800 dark:text-red-200">
              <p className="text-base leading-relaxed">
                Learn from common mistakes to ensure successful concrete projects.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Insufficient Curing</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Not providing adequate moisture during the critical first 7 days can result in 
                    weak, cracked concrete with poor durability.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Poor Weather Planning</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Pouring in extreme temperatures or during rain can cause rapid setting, 
                    poor workability, and structural issues.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Inadequate Reinforcement</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Insufficient or improperly placed rebar can lead to cracking and structural failure, 
                    especially in tension zones.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Overworking the Surface</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Excessive troweling can bring water and fines to the surface, creating a weak 
                    layer that's prone to scaling and delamination.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Incorrect Water-Cement Ratio</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Too much water weakens concrete, while too little makes it unworkable. 
                    Maintain the specified ratio for optimal strength and workability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Techniques */}
          <section id="advanced-techniques" className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              Advanced Techniques
            </h2>
            <div className="space-y-4 text-indigo-800 dark:text-indigo-200">
              <p className="text-base leading-relaxed">
                Professional techniques for complex concrete projects and specialized applications.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Fiber Reinforcement</h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
                    Adding steel or synthetic fibers improves crack resistance and impact strength.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Steel fibers: 0.5-2% by volume</li>
                    <li>• Synthetic fibers: 0.1-0.3% by volume</li>
                    <li>• Improves post-crack behavior</li>
                    <li>• Reduces shrinkage cracking</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Admixtures</h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
                    Chemical additives that modify concrete properties for specific applications.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Plasticizers: Improve workability</li>
                    <li>• Accelerators: Faster setting</li>
                    <li>• Retarders: Slower setting</li>
                    <li>• Air entrainers: Freeze-thaw resistance</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Temperature Control</h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
                    Managing concrete temperature during placement and curing for optimal strength.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Use chilled water in hot weather</li>
                    <li>• Heat aggregates in cold weather</li>
                    <li>• Monitor core temperature</li>
                    <li>• Insulate during cold curing</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Quality Testing</h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
                    Comprehensive testing program to ensure concrete meets specifications.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Slump tests for workability</li>
                    <li>• Compressive strength testing</li>
                    <li>• Air content measurement</li>
                    <li>• Temperature monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Resources & References */}
          <section id="resources" className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-950/20 dark:to-gray-950/20 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="p-2 bg-slate-100 dark:bg-slate-900/30 rounded-lg">
                <BookOpen className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              </div>
              Resources & References
            </h2>
            <div className="space-y-4 text-slate-800 dark:text-slate-200">
              <p className="text-base leading-relaxed">
                Comprehensive resources for further learning and professional development in concrete technology.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Professional Organizations
                  </h3>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.aci.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      American Concrete Institute (ACI)
                    </a>
                    <a href="https://www.concrete.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      National Ready Mixed Concrete Association
                    </a>
                    <a href="https://www.portcement.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Portland Cement Association
                    </a>
                    <a href="https://www.concreteconstruction.net" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Concrete Construction Magazine
                    </a>
                    <a href="https://www.cement.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Cement Association of Canada
                    </a>
                    <a href="https://www.concrete.org/education" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      ACI Education Programs
                    </a>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    International Standards
                  </h3>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.fib-international.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      fib - International Federation for Structural Concrete
                    </a>
                    <a href="https://www.rilem.net" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      RILEM - International Union of Laboratories
                    </a>
                    <a href="https://www.iabse.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      IABSE - International Association for Bridge and Structural Engineering
                    </a>
                    <a href="https://www.istructe.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      IStructE - Institution of Structural Engineers
                    </a>
                    <a href="https://www.bsigroup.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      BSI - British Standards Institution
                    </a>
                    <a href="https://www.astm.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      ASTM International
                    </a>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Educational Platforms
                  </h3>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.khanacademy.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Khan Academy - Engineering Courses
                    </a>
                    <a href="https://www.coursera.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Coursera - Construction Engineering
                    </a>
                    <a href="https://www.edx.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      edX - Civil Engineering Courses
                    </a>
                    <a href="https://www.udemy.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Udemy - Concrete Technology Courses
                    </a>
                    <a href="https://www.mit.edu" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      MIT OpenCourseWare - Civil Engineering
                    </a>
                    <a href="https://www.stanford.edu" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Stanford Engineering - Construction Materials
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Construction Industry
                  </h3>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.construction.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Construction.com - Industry News
                    </a>
                    <a href="https://www.enr.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Engineering News-Record (ENR)
                    </a>
                    <a href="https://www.constructiondive.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Construction Dive
                    </a>
                    <a href="https://www.concreteproducts.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Concrete Products Magazine
                    </a>
                    <a href="https://www.concreteconstruction.net" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Concrete Construction Magazine
                    </a>
                    <a href="https://www.concreteinternational.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Concrete International Magazine
                    </a>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Professional Services
                  </h3>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.pwc.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      PwC - Construction Advisory
                    </a>
                    <a href="https://www.deloitte.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Deloitte - Engineering & Construction
                    </a>
                    <a href="https://www.ey.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      EY - Construction Services
                    </a>
                    <a href="https://www.kpmg.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      KPMG - Infrastructure & Construction
                    </a>
                    <a href="https://www.aecom.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      AECOM - Engineering Services
                    </a>
                    <a href="https://www.jacobs.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Jacobs - Infrastructure Solutions
                    </a>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Government Resources
                  </h3>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.osha.gov" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      OSHA - Construction Safety
                    </a>
                    <a href="https://www.fhwa.dot.gov" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      FHWA - Federal Highway Administration
                    </a>
                    <a href="https://www.nist.gov" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      NIST - National Institute of Standards
                    </a>
                    <a href="https://www.nsf.gov" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      NSF - National Science Foundation
                    </a>
                    <a href="https://www.usace.army.mil" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      USACE - Army Corps of Engineers
                    </a>
                    <a href="https://www.fema.gov" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      FEMA - Federal Emergency Management
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Research & Development
                  </h3>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.nrc.gov" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      NRC - National Research Council
                    </a>
                    <a href="https://www.nsf.gov" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      NSF Engineering Research Centers
                    </a>
                    <a href="https://www.energy.gov" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      DOE - Department of Energy
                    </a>
                    <a href="https://www.transportation.gov" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      USDOT - Transportation Research
                    </a>
                    <a href="https://www.epa.gov" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      EPA - Environmental Protection
                    </a>
                    <a href="https://www.usgs.gov" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      USGS - Geological Survey
                    </a>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Industry Publications
                  </h3>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.engineeringnews.co.za" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Engineering News South Africa
                    </a>
                    <a href="https://www.newcivilengineer.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      New Civil Engineer
                    </a>
                    <a href="https://www.constructionweekonline.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Construction Week Online
                    </a>
                    <a href="https://www.worldcement.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      World Cement Magazine
                    </a>
                    <a href="https://www.aggregateresearch.com" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Aggregate Research
                    </a>
                    <a href="https://www.concreteconstruction.net" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      Concrete Construction Network
                    </a>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Technical Resources
                  </h3>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.concrete.org/standards" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      ACI Standards & Codes
                    </a>
                    <a href="https://www.concrete.org/publications" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      ACI Technical Publications
                    </a>
                    <a href="https://www.astm.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      ASTM Testing Standards
                    </a>
                    <a href="https://www.asce.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      ASCE - American Society of Civil Engineers
                    </a>
                    <a href="https://www.asme.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      ASME - Mechanical Engineers
                    </a>
                    <a href="https://www.ieee.org" className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      IEEE - Institute of Electrical Engineers
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Industry Standards & Codes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Building Codes</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ACI 318: Building Code Requirements for Structural Concrete</li>
                      <li>• ACI 301: Specifications for Structural Concrete</li>
                      <li>• ACI 211: Standard Practice for Selecting Proportions</li>
                      <li>• ACI 305: Hot Weather Concreting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Testing Standards</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ASTM C39: Compressive Strength Testing</li>
                      <li>• ASTM C143: Slump Test</li>
                      <li>• ASTM C138: Unit Weight and Air Content</li>
                      <li>• ASTM C172: Sampling Fresh Concrete</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  International Resources
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">European Standards</h4>
                    <ul className="text-sm space-y-1">
                      <li>• EN 206: Concrete Specification, Performance, Production</li>
                      <li>• EN 1992: Eurocode 2 - Design of Concrete Structures</li>
                      <li>• EN 12350: Testing Fresh Concrete</li>
                      <li>• EN 12390: Testing Hardened Concrete</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">International Organizations</h4>
                    <ul className="text-sm space-y-1">
                      <li>• fib: International Federation for Structural Concrete</li>
                      <li>• RILEM: International Union of Laboratories</li>
                      <li>• IABSE: International Association for Bridge and Structural Engineering</li>
                      <li>• IStructE: Institution of Structural Engineers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
    </div>
  )
}
