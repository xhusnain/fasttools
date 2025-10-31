import { Metadata } from "next"
import SalaryCalculator from "@/components/salary-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, Home, DollarSign, FileText, Award, Globe, PieChart, Percent } from "lucide-react"

export const metadata: Metadata = {
  title: "FastTools - Salary Calculator | Free Advanced Pay Frequency Calculator",
  description: "FastTools Salary Calculator - Convert salary amounts across all pay frequencies with holiday adjustments. Professional salary analysis, industry comparisons, and negotiation support.",
    keywords: [
        "fasttools",
        "fast tools",
        "salary calculator",
        "monthly salary calculator",
        "annual salary calculator",
        "hourly to salary calculator",
        "salary to hourly calculator",
        "take home salary calculator",
        "net salary calculator",
        "gross salary calculator",
        "salary after tax calculator",
        "income tax calculator",
        "paycheck calculator",
        "pay calculator",
        "CTC to in hand salary calculator",
        "salary slip calculator",
        "employee salary calculator",
        "salary comparison calculator",
        "salary increment calculator",
        "salary tax calculator",
        "salary estimator",
        "salary converter",
        "salary breakdown calculator",
        "salary calculator Pakistan",
        "salary calculator India",
        "salary calculator UK",
        "salary calculator USA",
        "hourly wage calculator",
        "annual income calculator",
        "monthly income calculator",
        "take home pay calculator",
        "gross to net calculator",
        "net income calculator",
        "salary deduction calculator",
        "salary structure calculator",
        "salary appraisal calculator",
        "salary forecast calculator",
        "salary raise calculator",
        "job salary calculator",
        "salary comparison by city",
        "salary vs hourly wage calculator",
        "after tax salary calculator",
        "taxable income calculator",
        "payroll calculator",
      "salary calculator",
        "calculator"
    ],
  openGraph: {
    title: "Salary Calculator | Advanced Pay Frequency Calculator | FastTools",
    description: "Convert salary amounts across all pay frequencies with holiday and vacation adjustments. Professional salary analysis, industry comparisons, and negotiation support for career advancement.",
    type: "website",
    url: "https://www.fasttools.store/calculator/salary-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://www.fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Salary Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Calculator | Advanced Pay Frequency Calculator | FastTools",
    description: "Convert salary amounts across all pay frequencies with holiday and vacation adjustments. Professional salary analysis, industry comparisons, and negotiation support for career advancement.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/salary-calculator"
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
          name: "Salary Calculator | Advanced Pay Frequency Calculator - Professional Salary Analysis Tool",
          description: "Convert salary amounts across all pay frequencies with holiday and vacation adjustments. Professional salary analysis, industry comparisons, and negotiation support for career advancement. Free, professional-grade salary analysis for optimal career planning.",
          url: "https://www.fasttools.store/calculator/salary-calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Pay Frequency Conversion",
            "Holiday and Vacation Adjustments",
            "Industry Salary Comparisons",
            "Negotiation Support Tools",
            "Career Advancement Guidance",
            "Salary Optimization Tips",
            "Working Days Calculation",
            "Professional Salary Analysis",
            "Multi-Frequency Conversion",
            "Career Planning Support",
            "Salary vs Wage Analysis",
            "FLSA Compliance Information",
            "Federal Holiday Calculations",
            "Average Salary Comparisons",
            "Education Level Analysis",
            "Gender Pay Gap Insights",
            "Location-Based Adjustments",
            "Contractor Rate Calculations",
            "Benefits Value Analysis",
            "Negotiation Strategy Tools"
          ],
          creator: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://www.fasttools.store"
          }
        })
      }} />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
          <Breadcrumbs
            items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Salary Calculator", href: "/calculator/salary-calculator" },
            ]}
          />

          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-4 sm:mb-6 md:mb-8 w-full">
              <GHeader 
                title="Salary Calculator - Advanced Pay Analysis"
                description="Convert salary amounts across all pay frequencies with our advanced salary calculator. Get precise pay calculations, industry comparisons, negotiation support, and career advancement guidance for optimal financial planning."
                titleSize="medium"
                color="orange"
              />
            </div>

            {/* Mobile/Tablet AdSpace after GHeader */}
            <div className="my-6 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-slate-400 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-slate-700 rounded-xl shadow-sm bg-black" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] 2xl:grid-cols-[1fr_450px] gap-4 sm:gap-6 lg:gap-8 w-full">
              <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full min-w-0">
                <div className="w-full bg-black rounded-xl p-3 sm:p-4 md:p-5 lg:p-6">
                  <SalaryCalculator />
                </div>
            
                {/* Educational Content Sections */}
                <div className="space-y-3 sm:space-y-4 md:space-y-5 bg-black rounded-lg p-2 sm:p-3 md:p-4 w-full">
                  {/* How to Use Section */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-orange-500 break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <Calculator className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      How to Use Salary Calculator
                    </h2>
                    <div className="space-y-2 sm:space-y-3 overflow-hidden">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div className="p-2 sm:p-2.5 md:p-3 bg-black rounded-lg border border-slate-700 overflow-hidden">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs sm:text-sm break-words">1. Enter Salary Information</h3>
                          <p className="text-xs text-slate-300 break-words">Input your salary amount, pay frequency, and work schedule details</p>
                        </div>
                        <div className="p-2 sm:p-2.5 md:p-3 bg-black rounded-lg border border-slate-700 overflow-hidden">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs sm:text-sm break-words">2. Set Time Off Parameters</h3>
                          <p className="text-xs text-slate-300 break-words">Enter holidays and vacation days for accurate adjusted calculations</p>
                        </div>
                        <div className="p-2 sm:p-2.5 md:p-3 bg-black rounded-lg border border-slate-700 overflow-hidden">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs sm:text-sm break-words">3. Analyze Results</h3>
                          <p className="text-xs text-slate-300 break-words">Review all pay frequency conversions and industry comparisons</p>
                        </div>
                        <div className="p-2 sm:p-2.5 md:p-3 bg-black rounded-lg border border-slate-700 overflow-hidden">
                          <h3 className="font-semibold text-green-500 mb-1 text-xs sm:text-sm break-words">4. Get Professional Insights</h3>
                          <p className="text-xs text-slate-300 break-words">Receive personalized recommendations for salary optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-orange-500 break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <Target className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-green-500/10 rounded flex-shrink-0">
                            <Calculator className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">Pay Frequency Conversion</h3>
                            <p className="text-xs text-slate-300 break-words">Convert between hourly, daily, weekly, bi-weekly, monthly, and annual pay</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-green-500/10 rounded flex-shrink-0">
                            <BarChart3 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">Industry Comparisons</h3>
                            <p className="text-xs text-slate-300 break-words">Compare your salary against industry averages and market data</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-green-500/10 rounded flex-shrink-0">
                            <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">Negotiation Support</h3>
                            <p className="text-xs text-slate-300 break-words">Get personalized tips and strategies for salary negotiations</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-green-500/10 rounded flex-shrink-0">
                            <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">Holiday Adjustments</h3>
                            <p className="text-xs text-slate-300 break-words">Account for federal holidays and vacation days in calculations</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-green-500/10 rounded flex-shrink-0">
                            <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">Career Planning</h3>
                            <p className="text-xs text-slate-300 break-words">Plan your career advancement with salary progression insights</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <div className="p-1 sm:p-1.5 bg-green-500/10 rounded flex-shrink-0">
                            <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">Working Days</h3>
                            <p className="text-xs text-slate-300 break-words">Calculate actual working days excluding holidays and weekends</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Use Cases Section */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-orange-500 break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <Home className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      Use Cases
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <div className="space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">For Job Seekers & Employees</h3>
                        <ul className="space-y-1 text-xs text-slate-300">
                          <li>• Compare job offers across different pay frequencies</li>
                          <li>• Understand true compensation value</li>
                          <li>• Prepare for salary negotiations</li>
                          <li>• Plan career advancement strategies</li>
                          <li>• Analyze benefits vs salary trade-offs</li>
                        </ul>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">For Employers & HR</h3>
                        <ul className="space-y-1 text-xs text-slate-300">
                          <li>• Set competitive salary ranges</li>
                          <li>• Convert between pay frequencies</li>
                          <li>• Calculate total compensation costs</li>
                          <li>• Plan payroll budgets</li>
                          <li>• Ensure FLSA compliance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Salary vs Wage Section */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-orange-500 break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      Salary vs Wage
                    </h2>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="p-2 sm:p-2.5 md:p-3 bg-black border border-slate-700 rounded-lg overflow-hidden">
                        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-green-500 mb-1.5 sm:mb-2 break-words">Salary</h3>
                        <p className="text-xs text-slate-300 mb-2 break-words">
                          Fixed annual amount paid on regular basis. Exempt from overtime, higher perceived status, typically for professional positions.
                        </p>
                        <div className="bg-black border border-slate-700 p-1.5 sm:p-2 rounded-lg">
                          <div className="text-xs sm:text-sm text-slate-200">
                            <div className="mb-1"><strong className="text-green-500">Benefits:</strong> Predictable income, professional benefits, career advancement</div>
                            <div><strong className="text-green-500">Drawbacks:</strong> No overtime pay, less flexibility</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-2 sm:p-2.5 md:p-3 bg-black border border-slate-700 rounded-lg overflow-hidden">
                        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-green-500 mb-1.5 sm:mb-2 break-words">Wage</h3>
                        <p className="text-xs text-slate-300 mb-2 break-words">
                          Hourly rate multiplied by hours worked. Can vary based on hours, eligible for overtime, typically for service and hourly positions.
                        </p>
                        <div className="bg-black border border-slate-700 p-1.5 sm:p-2 rounded-lg">
                          <div className="text-xs sm:text-sm text-slate-200">
                            <div className="mb-1"><strong className="text-green-500">Benefits:</strong> Overtime pay, flexible hours, direct compensation</div>
                            <div><strong className="text-green-500">Drawbacks:</strong> Variable income, less job security</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="border border-border rounded-lg p-2 sm:p-3 md:p-4 shadow-sm overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 text-orange-500 break-words">
                      <div className="p-1 sm:p-1.5 bg-primary/10 rounded">
                        <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-primary" />
                      </div>
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                      <div className="space-y-1 sm:space-y-1.5">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">How accurate are the salary calculations?</h3>
                        <p className="text-xs text-slate-300 break-words">
                          Our calculator uses industry-standard formulas for pay frequency conversions and working day calculations. The results are highly accurate for standard employment scenarios and account for federal holidays and typical work schedules.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">What's the difference between unadjusted and adjusted salaries?</h3>
                        <p className="text-xs text-slate-300 break-words">
                          Unadjusted salaries ignore holidays and vacation days, while adjusted salaries account for paid time off. Adjusted salaries provide a more realistic view of actual working compensation and help you understand your true hourly rate.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">How do I use this for salary negotiations?</h3>
                        <p className="text-xs text-slate-300 break-words">
                          Use the calculator to convert your current salary to different pay frequencies, compare against industry averages, and prepare talking points for negotiations based on market data. The industry comparisons help you justify your salary requests.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">What if I'm self-employed or a contractor?</h3>
                        <p className="text-xs text-slate-300 break-words">
                          Contractors should generally charge higher rates than equivalent salaried positions since they don't receive benefits like health insurance, paid time off, or retirement contributions. Use the calculator to determine appropriate contractor rates.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">How do I increase my salary?</h3>
                        <p className="text-xs text-slate-300 break-words">
                          Focus on education, experience, networking, performance reviews, negotiation, and job changes. The calculator provides personalized recommendations based on your current situation and helps you set realistic salary goals for career advancement.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">How can I determine if my current salary aligns with industry standards?</h3>
                        <p className="text-xs text-slate-300 break-words">
                          Use our salary calculator to input your job title, location, experience level, and education to receive tailored salary reports. Compare your current salary against industry averages, considering factors like company size, industry type, and regional cost of living. Regularly reviewing this data ensures you remain informed about market trends and can advocate effectively during salary negotiations or performance reviews.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">What factors influence salary variations across different regions?</h3>
                        <p className="text-xs text-slate-300 break-words">
                          Salaries vary significantly based on geographic location due to cost of living, demand for specific skills, and regional economic conditions. Urban areas with higher living expenses typically offer higher salaries to compensate, while rural regions may have lower salary ranges but also lower living costs. Our calculator accounts for these regional differences, helping you evaluate job offers or consider relocation by factoring in housing, transportation, taxes, and other living expenses to ensure compensation aligns with your financial needs.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">How do experience and education levels impact salary expectations?</h3>
                        <p className="text-xs text-slate-300 break-words">
                          Professional background and academic qualifications significantly influence compensation packages. Candidates possessing substantial work history or postgraduate credentials typically secure premium salary offers because they bring refined competencies and demonstrated performance histories. To illustrate, a software developer with ten years of industry tenure plus a graduate degree generally receives considerably higher compensation compared to a new graduate with an undergraduate qualification. Our calculator incorporates these variables when generating salary projections, emphasizing how ongoing skill enhancement and investing in further educational credentials can increase earning potential.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">Can specialized skills or certifications lead to higher salaries?</h3>
                        <p className="text-xs text-slate-300 break-words">
                          Absolutely! Specialized skills or industry-recognized certifications can significantly boost your earning potential. These qualifications demonstrate commitment to professional development and mastery of specific competencies, making you more valuable to employers. For instance, a project manager with PMP certification or an IT professional with cybersecurity credentials may negotiate higher salaries due to high demand for these specialized skills. Our calculator helps you understand how these qualifications impact your market value and earning potential.
                        </p>
                      </div>
                      <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                        <h3 className="font-semibold text-green-500 text-xs sm:text-sm break-words">How do I account for benefits and bonuses when comparing salaries?</h3>
                        <p className="text-xs text-slate-300 break-words">
                          When evaluating compensation, consider the entire package including base salary, bonuses, health insurance, retirement plans, stock options, and other perks. Our calculator allows you to input and adjust for these variables, providing a comprehensive view of your total compensation. Always factor in benefits when comparing job offers, as a lower base salary with excellent benefits may be more valuable than a higher salary with minimal benefits. This holistic approach ensures you make informed decisions about your career trajectory and financial well-being.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="hidden lg:block space-y-6 lg:space-y-8">
                <div className="sticky top-4">
                  {/* Sidebar Ad */}
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <AdSpace slot="sidebar" className="h-64 md:h-80 rounded-lg overflow-hidden" />
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