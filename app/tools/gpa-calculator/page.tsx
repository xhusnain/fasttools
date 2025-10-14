import { GPACalculator } from "@/components/gpa-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { 
  GraduationCap, 
  Calculator, 
  Award, 
  TrendingUp, 
  School, 
  Brain, 
  Info,
  Globe,
  CheckCircle
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advanced GPA Calculator | Grade Point Average Calculator with Planning Tools | FastTools",
  description: "Calculate your GPA with our advanced calculator. Features GPA planning, grade distribution analysis, academic standing, and improvement suggestions. Free online GPA calculator for students.",
  keywords: "gpa calculator, grade point average calculator, gpa planning calculator, academic calculator, student gpa calculator, college gpa calculator, high school gpa calculator, university gpa calculator, gpa calculation, grade calculator, academic standing calculator, honors calculator, dean's list calculator, gpa improvement calculator, gpa target calculator, cumulative gpa calculator, semester gpa calculator, weighted gpa calculator, unweighted gpa calculator, 4.0 gpa calculator, 4.3 gpa calculator, 5.0 gpa calculator, percentage gpa calculator, letter grade calculator, grade point calculator, academic performance calculator, student performance calculator, educational calculator, academic planning calculator, grade distribution calculator, academic analysis calculator, student success calculator, academic achievement calculator, grade tracking calculator, academic progress calculator, student analytics calculator, educational planning calculator, academic goal calculator, student planning calculator, academic strategy calculator, grade improvement calculator, academic excellence calculator, student development calculator, academic growth calculator, educational success calculator, academic performance tracker, student grade tracker, academic progress tracker, grade point tracker, gpa tracker, academic standing tracker, honors tracker, dean's list tracker, academic achievement tracker, student success tracker, educational progress tracker, academic development tracker, grade improvement tracker, academic excellence tracker, student growth tracker, educational achievement tracker, academic performance monitor, student grade monitor, academic progress monitor, grade point monitor, gpa monitor, academic standing monitor, honors monitor, dean's list monitor, academic achievement monitor, student success monitor, educational progress monitor, academic development monitor, grade improvement monitor, academic excellence monitor, student growth monitor, educational achievement monitor",
  openGraph: {
    title: "Advanced GPA Calculator | Grade Point Average Calculator with Planning Tools | FastTools",
    description: "Calculate your GPA with our advanced calculator. Features GPA planning, grade distribution analysis, academic standing, and improvement suggestions.",
    type: "website",
    url: "https://fasttools.com/tools/gpa-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.com/og-gpa-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Advanced GPA Calculator - Grade Point Average Calculator with Planning Tools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced GPA Calculator | Grade Point Average Calculator with Planning Tools",
    description: "Calculate your GPA with our advanced calculator. Features GPA planning, grade distribution analysis, academic standing, and improvement suggestions.",
    images: ["https://fasttools.com/og-gpa-calculator.jpg"]
  },
  alternates: {
    canonical: "https://fasttools.com/tools/gpa-calculator"
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

export default function GPACalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: "Tools", href: "/tools" },
          { label: "GPA Calculator", href: "/tools/gpa-calculator" },
        ]}
      />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Advanced GPA Calculator</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calculate your Grade Point Average with comprehensive analysis, GPA planning tools, 
            academic standing assessment, and personalized improvement suggestions for academic success.
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

        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
          <div className="space-y-8">
            <GPACalculator />
            
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
                How to Use Our Advanced GPA Calculator
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100">Add Your Courses</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Enter course names, credits, and grades</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100">Select Grading System</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Choose from 4.0, 4.3, 5.0, or percentage scales</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100">Get Comprehensive Analysis</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">View GPA, academic standing, and improvement suggestions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100">Plan Your Future</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Use GPA planning tools to reach your academic goals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grading Systems */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                Supported Grading Systems
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { system: "4.0 Scale", description: "US Standard", features: ["A = 4.0", "B = 3.0", "C = 2.0", "D = 1.0", "F = 0.0"] },
                  { system: "4.3 Scale", description: "A+ = 4.3", features: ["A+ = 4.3", "A = 4.0", "A- = 3.7", "B+ = 3.3", "B = 3.0"] },
                  { system: "5.0 Scale", description: "Weighted", features: ["Honors/AP", "Advanced Courses", "Weighted Grades", "Higher Scale"] },
                  { system: "Percentage", description: "100% Scale", features: ["90-100% = A", "80-89% = B", "70-79% = C", "60-69% = D", "<60% = F"] }
                ].map((system, index) => (
                  <div key={index} className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-green-200 dark:border-green-700">
                    <h3 className="font-semibold text-green-900 dark:text-green-100">{system.system}</h3>
                    <p className="text-sm text-green-700 dark:text-green-300 mb-2">{system.description}</p>
                    <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                      {system.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Features */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
              <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                Advanced Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">GPA Analysis</h3>
                  <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                    <li>• Academic standing assessment</li>
                    <li>• Honors eligibility check</li>
                    <li>• Grade distribution analysis</li>
                    <li>• Improvement suggestions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Planning Tools</h3>
                  <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                    <li>• GPA planning calculator</li>
                    <li>• Target GPA analysis</li>
                    <li>• Required GPA calculation</li>
                    <li>• Academic goal setting</li>
                  </ul>
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
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">How is GPA calculated?</h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    GPA = Total Grade Points ÷ Total Credits. Each grade has a point value (A=4.0, B=3.0, etc.) 
                    multiplied by credit hours, then divided by total credits.
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">What's the difference between weighted and unweighted GPA?</h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Unweighted GPA uses a 4.0 scale for all courses. Weighted GPA gives extra points for honors, 
                    AP, or IB courses, often using a 5.0 scale.
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">How can I improve my GPA?</h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Focus on study habits, time management, attend classes regularly, seek help when needed, 
                    and consider retaking courses with low grades if possible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Sidebar Ad */}
            <div className="sticky top-4 space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-4 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                    <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Sponsored</div>
                    <AdSpace slot="sidebar" className="w-full h-48" />
                  </div>
                </div>
              </div>

              {/* Study Tips */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">
                    <Brain className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  Study Tips
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-green-800 dark:text-green-200 font-medium">Active Learning</p>
                    <p className="text-green-700 dark:text-green-300 text-xs mt-1">Engage with material through practice problems and discussions.</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 font-medium">Time Management</p>
                    <p className="text-blue-700 dark:text-blue-300 text-xs mt-1">Create study schedules and stick to them consistently.</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-purple-800 dark:text-purple-200 font-medium">Seek Help</p>
                    <p className="text-purple-700 dark:text-purple-300 text-xs mt-1">Don't hesitate to ask professors or tutors for assistance.</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <div className="p-1 bg-orange-100 dark:bg-orange-900/30 rounded">
                    <Award className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  Key Features
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Multiple Grading Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">GPA Planning Tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Academic Standing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Grade Distribution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Improvement Suggestions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300">Mobile Friendly</span>
                  </div>
                </div>
              </div>

              {/* Bottom Sidebar Ad */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-4 rounded-xl border-2 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">
                    <School className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm font-semibold text-green-800 dark:text-green-200">Sponsored</span>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border-2 border-dashed border-green-300 dark:border-green-700 p-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">Featured</div>
                    <AdSpace slot="sidebar" className="w-full h-48" />
                  </div>
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
