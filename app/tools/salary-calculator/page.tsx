import { Metadata } from "next"
import SalaryCalculator from "@/components/salary-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Salary Calculator | Free Online Salary Calculator | Pay Frequency Converter | FastTools",
  description: "Convert salary amounts across all pay frequencies with holiday and vacation adjustments. Professional salary analysis, industry comparisons, and negotiation support for career advancement.",
  keywords: [
    "salary calculator",
    "pay calculator",
    "salary converter",
    "pay frequency calculator",
    "hourly to salary calculator",
    "annual salary calculator",
    "salary converter",
    "pay frequency converter",
    "salary analysis",
    "pay analysis",
    "salary comparison",
    "pay comparison",
    "salary optimization",
    "pay optimization",
    "salary negotiation",
    "pay negotiation",
    "salary planning",
    "pay planning",
    "salary management",
    "pay management",
    "salary tracking",
    "pay tracking",
    "salary monitoring",
    "pay monitoring",
    "salary evaluation",
    "pay evaluation",
    "salary assessment",
    "pay assessment",
    "salary review",
    "pay review",
    "salary audit",
    "pay audit",
    "salary check",
    "pay check",
    "salary verification",
    "pay verification",
    "salary validation",
    "pay validation",
    "salary confirmation",
    "pay confirmation",
    "salary calculation",
    "pay calculation",
    "salary computation",
    "pay computation",
    "salary estimation",
    "pay estimation",
    "salary projection",
    "pay projection",
    "salary forecast",
    "pay forecast",
    "salary prediction",
    "pay prediction",
    "salary analysis tool",
    "pay analysis tool",
    "salary calculator tool",
    "pay calculator tool",
    "salary converter tool",
    "pay converter tool",
    "salary calculator app",
    "pay calculator app",
    "salary converter app",
    "pay converter app",
    "salary calculator website",
    "pay calculator website",
    "salary converter website",
    "pay converter website",
    "salary calculator online",
    "pay calculator online",
    "salary converter online",
    "pay converter online",
    "salary calculator free",
    "pay calculator free",
    "salary converter free",
    "pay converter free",
    "salary calculator accurate",
    "pay calculator accurate",
    "salary converter accurate",
    "pay converter accurate",
    "salary calculator professional",
    "pay calculator professional",
    "salary converter professional",
    "pay converter professional",
    "salary calculator advanced",
    "pay calculator advanced",
    "salary converter advanced",
    "pay converter advanced",
    "salary calculator comprehensive",
    "pay calculator comprehensive",
    "salary converter comprehensive",
    "pay converter comprehensive",
    "salary calculator detailed",
    "pay calculator detailed",
    "salary converter detailed",
    "pay converter detailed",
    "salary calculator complete",
    "pay calculator complete",
    "salary converter complete",
    "pay converter complete",
    "salary calculator full",
    "pay calculator full",
    "salary converter full",
    "pay converter full",
    "salary calculator total",
    "pay calculator total",
    "salary converter total",
    "pay converter total",
    "salary calculator entire",
    "pay calculator entire",
    "salary converter entire",
    "pay converter entire",
    "salary calculator whole",
    "pay calculator whole",
    "salary converter whole",
    "pay converter whole",
    "salary calculator complete",
    "pay calculator complete",
    "salary converter complete",
    "pay converter complete",
    "salary calculator comprehensive",
    "pay calculator comprehensive",
    "salary converter comprehensive",
    "pay converter comprehensive",
    "salary calculator detailed",
    "pay calculator detailed",
    "salary converter detailed",
    "pay converter detailed",
    "salary calculator thorough",
    "pay calculator thorough",
    "salary converter thorough",
    "pay converter thorough",
    "salary calculator extensive",
    "pay calculator extensive",
    "salary converter extensive",
    "pay converter extensive",
    "salary calculator complete",
    "pay calculator complete",
    "salary converter complete",
    "pay converter complete",
    "salary calculator comprehensive",
    "pay calculator comprehensive",
    "salary converter comprehensive",
    "pay converter comprehensive",
    "salary calculator detailed",
    "pay calculator detailed",
    "salary converter detailed",
    "pay converter detailed",
    "salary calculator thorough",
    "pay calculator thorough",
    "salary converter thorough",
    "pay converter thorough",
    "salary calculator extensive",
    "pay calculator extensive",
    "salary converter extensive",
    "pay converter extensive"
  ],
  openGraph: {
    title: "Salary Calculator | Free Online Salary Calculator | Pay Frequency Converter | FastTools",
    description: "Convert salary amounts across all pay frequencies with holiday and vacation adjustments. Professional salary analysis, industry comparisons, and negotiation support for career advancement.",
    type: "website",
    url: "https://fasttools.store/tools/salary-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Salary Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Calculator | Free Online Salary Calculator | Pay Frequency Converter | FastTools",
    description: "Convert salary amounts across all pay frequencies with holiday and vacation adjustments. Professional salary analysis, industry comparisons, and negotiation support for career advancement.",
    images: ["https://fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://fasttools.store/tools/salary-calculator"
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

export default function SalaryCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Salary Calculator",
          description: "Advanced salary calculator for converting pay amounts across all frequencies with holiday and vacation adjustments. Includes industry comparisons, negotiation support, and career advancement tools.",
          url: "https://fasttools.store/tools/salary-calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Pay frequency conversion",
            "Holiday and vacation adjustments",
            "Industry salary comparisons",
            "Negotiation support tools",
            "Career advancement guidance",
            "Salary optimization tips",
            "Working days calculation",
            "Professional salary analysis",
            "Multi-frequency conversion",
            "Career planning support"
          ]
        })
      }} />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Salary Calculator - Professional Pay Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Convert salary amounts across all pay frequencies with holiday and vacation adjustments. Professional salary analysis, industry comparisons, and negotiation support for career advancement.
          </p>
        </div>

        {/* Top Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        {/* Main Tool */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-6 lg:gap-8">
          <div className="space-y-6">
            <SalaryCalculator />
            
            {/* Educational Content Sections */}
            <div className="space-y-8">
              {/* How to Use Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">How to Use the Salary Calculator</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 1: Enter Salary Information</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Salary Amount:</strong> Enter your current salary or desired salary</li>
                      <li><strong>Pay Frequency:</strong> Select how often you're paid (hourly, weekly, monthly, etc.)</li>
                      <li><strong>Work Schedule:</strong> Set your hours per week and days per week</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 2: Set Time Off Parameters</h3>
                    <p className="text-muted-foreground">Enter your holidays and vacation days per year to get accurate adjusted calculations.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Step 3: Analyze Results</h3>
                    <p className="text-muted-foreground">Review all pay frequency conversions, industry comparisons, and personalized recommendations.</p>
                  </div>
                </div>
              </div>

              {/* Salary vs Wage Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Salary vs Wage</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Salary</h3>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>• Fixed annual amount</li>
                        <li>• Paid on regular basis</li>
                        <li>• Exempt from overtime</li>
                        <li>• Higher perceived status</li>
                        <li>• Professional positions</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">Wage</h3>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                        <li>• Hourly rate × hours worked</li>
                        <li>• Can vary based on hours</li>
                        <li>• Eligible for overtime</li>
                        <li>• Non-exempt employees</li>
                        <li>• Service and hourly positions</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">Key Differences</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Salary Benefits</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Predictable income</li>
                          <li>• Professional benefits</li>
                          <li>• Career advancement</li>
                          <li>• Job security</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Wage Benefits</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Overtime pay</li>
                          <li>• Flexible hours</li>
                          <li>• Direct compensation</li>
                          <li>• Hourly transparency</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pay Frequencies Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Pay Frequencies Explained</h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Daily</h3>
                      <p className="text-sm text-orange-700 dark:text-orange-300">Pays every day, usually at the end of the day. Common for short-term contractors.</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Weekly</h3>
                      <p className="text-sm text-blue-700 dark:text-blue-300">Pays once each week, usually on Fridays. Higher payroll processing costs.</p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Bi-weekly</h3>
                      <p className="text-sm text-green-700 dark:text-green-300">Pays every two weeks, 26 times per year. Most common pay frequency.</p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Semi-monthly</h3>
                      <p className="text-sm text-purple-700 dark:text-purple-300">Pays twice per month, usually on 15th and last day. Inconsistent pay dates.</p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                      <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Monthly</h3>
                      <p className="text-sm text-red-700 dark:text-red-300">Pays once per month. Most cost-friendly for employers, less common in US.</p>
                    </div>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Quarterly</h3>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">Pays once per quarter. Rare for employees, more common for contractors.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* US Salary Information Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">US Salary Information</h2>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Fair Labor Standards Act (FLSA)</h3>
                    <p className="text-blue-700 dark:text-blue-300 mb-4">
                      Salaried employees are often exempt employees, meaning they're exempt from minimum wage and overtime regulations. To be exempt, employees must make at least $684 per week ($35,568 annually) and perform defined job responsibilities.
                    </p>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                      <div className="text-sm">
                        <div className="mb-2"><strong>Federal Minimum Wage:</strong> $7.25/hour</div>
                        <div className="mb-2"><strong>Highest State Rate:</strong> $17.50/hour (Washington DC)</div>
                        <div><strong>Exempt Salary Threshold:</strong> $35,568/year</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">Average US Salary (2024)</h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">
                      The average salary of a full-time employee in the US is $1,165 per week ($60,580 per year). This varies significantly by age, education, experience, race, ethnicity, gender, industry, and location.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">By Education</h4>
                        <ul className="text-sm space-y-1">
                          <li>• No high school: $38,168</li>
                          <li>• High school graduate: $49,192</li>
                          <li>• Bachelor's degree: $88,244</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">By Gender</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Men: $65,728 average</li>
                          <li>• Women: $54,808 average</li>
                          <li>• Gender pay gap exists</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">Federal Holidays</h3>
                    <p className="text-purple-700 dark:text-purple-300 mb-4">
                      The US has 11 federal holidays per year. Most companies offer 6-11 holidays, with federal employees getting all 11. Private employers set their own holiday policies.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">January</h4>
                        <ul className="space-y-1">
                          <li>• New Year's Day</li>
                          <li>• MLK Jr. Day</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Summer</h4>
                        <ul className="space-y-1">
                          <li>• Memorial Day</li>
                          <li>• Juneteenth</li>
                          <li>• Independence Day</li>
                          <li>• Labor Day</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Fall/Winter</h4>
                        <ul className="space-y-1">
                          <li>• Columbus Day</li>
                          <li>• Veterans Day</li>
                          <li>• Thanksgiving</li>
                          <li>• Christmas Day</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How accurate are the salary calculations?</h3>
                    <p className="text-muted-foreground">
                      Our calculator uses industry-standard formulas for pay frequency conversions and working day calculations. The results are highly accurate for standard employment scenarios.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What's the difference between unadjusted and adjusted salaries?</h3>
                    <p className="text-muted-foreground">
                      Unadjusted salaries ignore holidays and vacation days, while adjusted salaries account for paid time off. Adjusted salaries provide a more realistic view of actual working compensation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How do I use this for salary negotiations?</h3>
                    <p className="text-muted-foreground">
                      Use the calculator to convert your current salary to different pay frequencies, compare against industry averages, and prepare talking points for negotiations based on market data.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What if I'm self-employed or a contractor?</h3>
                    <p className="text-muted-foreground">
                      Contractors should generally charge higher rates than equivalent salaried positions since they don't receive benefits like health insurance, paid time off, or retirement contributions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How do I increase my salary?</h3>
                    <p className="text-muted-foreground">
                      Focus on education, experience, networking, performance reviews, negotiation, and job changes. The calculator provides personalized recommendations based on your current situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-4 space-y-4 lg:space-y-6 hidden lg:block">
              {/* Sidebar Ad */}
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
                <AdSpace slot="sidebar" className="h-80 rounded-xl overflow-hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
