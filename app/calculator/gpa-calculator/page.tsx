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
  CheckCircle,
  BookOpen,
  Target,
  Users,
  BarChart3,
  PieChart,
  Building,
  Clock,
  DollarSign,
  Home,
  FileText,
  Percent
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GPA Calculator | Grade Point Average | FastTools",
  description: "Use our free GPA Calculator to calculate your Grade Point Average instantly. Supports 4.0, 4.3, 5.0 scales and percentage grades. Perfect for students, academic planning, and grade tracking.",
  keywords: [
    "GPA calculator",
    "grade point average calculator",
    "college GPA calculator",
    "university GPA calculator",
    "high school GPA calculator",
    "CGPA calculator",
    "semester GPA calculator",
    "final GPA calculator",
    "weighted GPA calculator",
    "unweighted GPA calculator",
    "GPA to percentage converter",
    "GPA to CGPA calculator",
    "calculate GPA online",
    "GPA calculator for students",
    "GPA calculator with grades",
    "GPA calculator with credits",
    "GPA calculator with subjects",
    "GPA calculator with grade points",
    "how to calculate GPA",
    "GPA formula calculator",
    "GPA average calculator",
    "college grade calculator",
    "university grade point calculator",
    "school GPA calculator",
    "grade percentage calculator",
    "GPA scale converter",
    "GPA to letter grade converter",
    "letter grade to GPA calculator",
    "GPA calculator 4.0 scale",
    "GPA calculator 5.0 scale",
    "GPA calculator 10 point scale",
    "GPA calculator weighted and unweighted",
    "GPA improvement calculator",
    "semester grade calculator",
    "GPA prediction calculator",
    "GPA target calculator",
    "GPA calculator for multiple semesters",
    "term GPA calculator",
    "overall GPA calculator",
    "GPA cumulative calculator",
    "GPA calculator with course credits",
    "GPA calculator for college students",
    "GPA calculator with subjects and grades",
    "GPA average finder",
    "calculate CGPA from GPA",
    "GPA to CGPA converter",
    "GPA calculator for final results",
    "GPA score calculator",
    "GPA and percentage calculator",
    "GPA calculator tool",
    "GPA calculator online free",
    "student GPA calculator",
    "academic GPA calculator",
    "university grading calculator",
    "college result GPA calculator",
    "GPA calculation formula",
    "easy GPA calculator",
    "accurate GPA calculator",
    "GPA calculator for transcripts",
    "GPA checker online",
    "GPA and CGPA calculator",
    "GPA calculator per semester",
    "GPA calculator for different grades",
    "grade point calculator",
    "CGPA to GPA converter",
    "GPA to marks converter",
    "GPA to grade converter",
    "GPA result calculator",
    "calculate GPA with credit hours",
    "calculate GPA with points and credits",
    "GPA calculator for academic performance",
    "college marks to GPA converter",
    "GPA improvement planner",
    "GPA calculation system",
    "GPA analyzer",
    "GPA performance calculator",
    "GPA calculator USA",
    "GPA calculator UK",
    "GPA calculator India",
    "GPA calculator Canada",
    "GPA calculator Australia",
    "GPA calculator international",
    "GPA grade converter tool",
    "GPA calculator by credit hour",
    "cumulative GPA finder",
    "semester CGPA calculator",
    "GPA calculator with average marks",
    "GPA planner online",
    "student academic GPA tool",
    "GPA calculator 2025",
    "GPA online grading tool",
    "university marks to GPA calculator",
    "GPA tracking calculator",
    "GPA calculator and analyzer",
    "GPA calculation sheet",
    "GPA grading system calculator",
    "GPA calculator for report cards"
  ],
  openGraph: {
    title: "Free Online GPA Calculator | Grade Point Average Calculator | FastTools",
    description: "Use our free GPA Calculator to calculate your Grade Point Average instantly. Supports 4.0, 4.3, 5.0 scales and percentage grades. Perfect for students, academic planning, and grade tracking.",
    type: "website",
    url: "https://www.fasttools.store/calculator/gpa-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-gpa-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Online GPA Calculator - FastTools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online GPA Calculator | Grade Point Average Calculator | FastTools",
    description: "Use our free GPA Calculator to calculate your Grade Point Average instantly. Supports 4.0, 4.3, 5.0 scales and percentage grades. Perfect for students, academic planning, and grade tracking.",
    images: ["https://www.fasttools.store/og-gpa-calculator.jpg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/gpa-calculator"
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
  },
  authors: [{ name: "FastTools Education Team" }],
  creator: "FastTools",
  publisher: "FastTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.fasttools.store'),

}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Online GPA Calculator",
  "description": "Calculate your Grade Point Average with our comprehensive GPA calculator supporting multiple grading systems and academic planning tools.",
  "url": "https://www.fasttools.store/calculator/gpa-calculator",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "4.0 Scale GPA Calculation",
    "4.3 Scale GPA Calculation", 
    "5.0 Scale GPA Calculation",
    "Percentage Grade Conversion",
    "Weighted GPA Support",
    "Unweighted GPA Support",
    "Cumulative GPA Tracking",
    "Semester GPA Calculation",
    "Academic Standing Assessment",
    "GPA Planning Tools",
    "Grade Distribution Analysis",
    "Honors Eligibility Check",
    "Dean's List Calculator",
    "Academic Goal Setting",
    "Grade Improvement Suggestions"
  ]
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you calculate GPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GPA is calculated by dividing total grade points by total credit hours. Each letter grade has a point value (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0) multiplied by credit hours, then divided by total credits."
      }
    },
    {
      "@type": "Question", 
      "name": "What's the difference between weighted and unweighted GPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unweighted GPA uses a standard 4.0 scale for all courses. Weighted GPA gives extra points for honors, AP, or IB courses, often using a 5.0 scale to reward more challenging coursework."
      }
    },
    {
      "@type": "Question",
      "name": "How can I improve my GPA?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Focus on study habits, time management, attend classes regularly, seek help when needed, and consider retaking courses with low grades if possible. Our calculator provides personalized improvement suggestions."
      }
    }
  ]
}

export default function GPACalculatorPage() {
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
      
      <div className="bg-background">
        <div className="container mx-auto px-3 py-6 md:py-8">
      <Breadcrumbs
        items={[
          { label: "Calculator", href: "/calculator" },
          { label: "GPA Calculator", href: "/calculator/gpa-calculator" },
        ]}
      />

          <div className="max-w-5xl mx-auto">
            <div className="mb-4 md:mb-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-yellow-400">Free Online GPA Calculator</h1>
              <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">
                Use our <strong>free GPA Calculator</strong> to calculate your <strong>Grade Point Average</strong> instantly. 
                Supports <strong>4.0, 4.3, 5.0 scales</strong> and <strong>percentage grades</strong>. Perfect for <strong>students</strong>, <strong>academic planning</strong>, and <strong>grade tracking</strong>.
          </p>
        </div>

            <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
              <div>
            <GPACalculator />
            
                {/* Mobile/Tablet AdSpace */}
                <div className="my-6 lg:hidden">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
            </div>

                {/* How to Use */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                </div>
                    How to Use Our GPA Calculator
              </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <span className="text-primary font-bold text-xs">1</span>
                  </div>
                  <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Add Your Courses</h3>
                          <p className="text-xs text-muted-foreground">Enter course names, credits, and grades</p>
                  </div>
                </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <span className="text-primary font-bold text-xs">2</span>
                  </div>
                  <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Select Grading System</h3>
                          <p className="text-xs text-muted-foreground">Choose from 4.0, 4.3, 5.0, or percentage scales</p>
                        </div>
                  </div>
                </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <span className="text-primary font-bold text-xs">3</span>
                  </div>
                  <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Get Comprehensive Analysis</h3>
                          <p className="text-xs text-muted-foreground">View GPA, academic standing, and improvement suggestions</p>
                  </div>
                </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <span className="text-primary font-bold text-xs">4</span>
                  </div>
                  <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Plan Your Future</h3>
                          <p className="text-xs text-muted-foreground">Use GPA planning tools to reach your academic goals</p>
                        </div>
                  </div>
                </div>
              </div>
            </div>

                {/* Supported Grading Systems */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Globe className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                </div>
                Supported Grading Systems
              </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
                {[
                  { system: "4.0 Scale", description: "US Standard", features: ["A = 4.0", "B = 3.0", "C = 2.0", "D = 1.0", "F = 0.0"] },
                  { system: "4.3 Scale", description: "A+ = 4.3", features: ["A+ = 4.3", "A = 4.0", "A- = 3.7", "B+ = 3.3", "B = 3.0"] },
                  { system: "5.0 Scale", description: "Weighted", features: ["Honors/AP", "Advanced Courses", "Weighted Grades", "Higher Scale"] },
                  { system: "Percentage", description: "100% Scale", features: ["90-100% = A", "80-89% = B", "70-79% = C", "60-69% = D", "<60% = F"] }
                ].map((system, index) => (
                      <div key={index} className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <div className="flex items-center gap-1.5 mb-1">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">{system.system}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{system.description}</p>
                        <ul className="text-xs text-primary space-y-0.5">
                      {system.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Features */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                </div>
                    Advanced GPA Features
              </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <BarChart3 className="h-3 w-3 text-primary" />
                        </div>
                <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">GPA Analysis</h3>
                          <p className="text-xs text-muted-foreground">Academic standing assessment and honors eligibility</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <PieChart className="h-3 w-3 text-primary" />
                </div>
                <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Grade Distribution</h3>
                          <p className="text-xs text-muted-foreground">Visual breakdown of your grade performance</p>
                </div>
              </div>
            </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <Target className="h-3 w-3 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Planning Tools</h3>
                          <p className="text-xs text-muted-foreground">GPA planning and target GPA analysis</p>
                        </div>
                </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <Building className="h-3 w-3 text-primary" />
                </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Improvement Tips</h3>
                          <p className="text-xs text-muted-foreground">Personalized suggestions for academic success</p>
                </div>
                </div>
              </div>
            </div>
          </div>

                {/* FAQ Section */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Info className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                  </div>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        question: "What is GPA and how is it calculated?",
                        answer: "GPA (Grade Point Average) is a numerical representation of academic performance, typically on a 4.0 scale. It's calculated by assigning point values to grades (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0), multiplying by credit hours, summing results, and dividing by total credit hours."
                      },
                      {
                        question: "What is considered a good GPA?",
                        answer: "A good GPA varies by context. For high school students, 3.5+ is excellent for competitive colleges. In college, 3.0+ is generally good, but specific requirements depend on your institution and program goals."
                      },
                      {
                        question: "What's the difference between weighted and unweighted GPA?",
                        answer: "Unweighted GPA uses a standard 4.0 scale for all courses. Weighted GPA accounts for course difficulty, giving extra points for honors, AP, or IB courses, often allowing GPAs to exceed 4.0 on a 5.0+ scale."
                      },
                      {
                        question: "How does GPA affect college admissions?",
                        answer: "GPA is a critical factor in college admissions, reflecting academic consistency and ability to handle coursework. Higher GPAs improve admission chances, especially at competitive institutions, alongside test scores and extracurriculars."
                      },
                      {
                        question: "How can I improve my GPA?",
                        answer: "Improve GPA through consistent study habits, active class participation, seeking help when needed, effective time management, and focusing on courses where you can achieve higher grades. Consider retaking courses with low grades if allowed."
                      },
                      {
                        question: "What GPA do I need for scholarships?",
                        answer: "Scholarship GPA requirements vary widely. Some require minimum 3.0, while competitive scholarships may need 3.5+. Research specific scholarship criteria as requirements differ by program and organization."
                      },
                      {
                        question: "Does GPA matter after college?",
                        answer: "GPA is crucial for graduate school admissions and certain entry-level jobs, but its importance diminishes over time as work experience and skills become more significant factors in career advancement."
                      },
                      {
                        question: "How do pass/fail courses affect GPA?",
                        answer: "Pass/fail courses typically don't impact GPA as they don't assign traditional letter grades. However, failing a pass/fail course can negatively affect your transcript and academic standing."
                      },
                      {
                        question: "Can I retake a course to improve my GPA?",
                        answer: "Many institutions allow course retakes to improve GPA. Policies vary - some replace the old grade, while others average both attempts. Check your school's specific guidelines for retake policies."
                      },
                      {
                        question: "What is the highest possible GPA?",
                        answer: "On a standard unweighted 4.0 scale, the maximum is 4.0. Weighted scales accounting for course difficulty can exceed 4.0, with some schools allowing GPAs up to 5.0 or higher for advanced courses."
                      },
                      {
                        question: "How do I calculate GPA with different grading scales?",
                        answer: "Our calculator supports multiple scales: 4.0 (standard), 4.3 (A+ system), 5.0 (weighted), and percentage systems. Choose the scale matching your institution's grading system for accurate calculations."
                      },
                      {
                        question: "What is academic standing and how is it determined?",
                        answer: "Academic standing is your classification based on GPA: Dean's List (3.7+), Honors (3.5+), Good Standing (3.0+), Academic Probation (2.0-2.9), Academic Warning (<2.0). Our calculator shows your current standing."
                      },
                      {
                        question: "How do I plan to reach a target GPA?",
                        answer: "Use our GPA planning tools to calculate required grades for future courses. Enter your current GPA, target GPA, and remaining credits to see what performance level you need to achieve your academic goals."
                      },
                      {
                        question: "How does GPA conversion work for international students?",
                        answer: "GPA conversion involves translating foreign grading systems to the U.S. 4.0 scale. This varies by institution and may require professional evaluation services. Our calculator supports multiple international grading systems."
                      },
                      {
                        question: "What if I have a low GPA? Can I still get into college?",
                        answer: "While higher GPAs improve admission prospects, students with lower GPAs can still gain admission by demonstrating strengths in other areas like standardized test scores, extracurricular involvement, personal statements, and strong letters of recommendation."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="border border-border rounded-lg p-3 md:p-4">
                        <h3 className="font-semibold text-foreground text-sm md:text-base mb-2">{faq.question}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
                    ))}
                </div>
              </div>

                {/* Related Tools */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                  </div>
                    Related Educational & Math Calculators
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { name: "Percentage Calculator", desc: "Calculate percentages and changes", href: "/calculator/percentage-calculator", icon: Percent },
                      { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/calculator/age-calculator", icon: Award },
                      { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/calculator/bmi-calculator", icon: Users },
                      { name: "Time Duration", desc: "Calculate time between dates", href: "/calculator/time-duration", icon: Clock },
                      { name: "Scientific Calculator", desc: "Advanced mathematical calculations", href: "/calculator/scientific-calculator", icon: Calculator },
                      { name: "Loan Calculator", desc: "Calculate EMI, interest, and loan payments", href: "/calculator/loan-calculator", icon: DollarSign },
                      { name: "Mortgage Calculator", desc: "Calculate home loan payments", href: "/calculator/mortgage-calculator", icon: Home },
                      { name: "Tax Calculator", desc: "Calculate income tax and deductions", href: "/calculator/tax-calculator", icon: FileText },
                      { name: "Investment Calculator", desc: "Calculate investment returns and growth", href: "/calculator/investment-calculator", icon: TrendingUp },
                      { name: "Retirement Calculator", desc: "Plan your retirement savings", href: "/calculator/retirement-calculator", icon: Target },
                      { name: "Currency Converter", desc: "Convert between currencies", href: "/converters/currency", icon: Globe },
                      { name: "Temperature Converter", desc: "Convert temperature units", href: "/converters/temperature", icon: BarChart3 }
                    ].map(({ name, desc, icon: Icon, href }) => (
                      <a
                        key={name}
                        href={href}
                        className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-3 w-3 text-primary group-hover:text-primary/80" />
                          <h3 className="font-semibold text-foreground text-xs md:text-sm group-hover:text-primary">{name}</h3>
                  </div>
                        <p className="text-xs text-muted-foreground">{desc}</p>
                      </a>
                    ))}
                </div>
              </div>

                {/* Mobile/Tablet Bottom AdSpace */}
                <div className="my-8 lg:hidden">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
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