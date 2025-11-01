import { PercentageCalculator } from "@/components/percentage-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Percent, Calculator, TrendingUp, TrendingDown, Target, DollarSign, BarChart3, PieChart, ArrowUp, ArrowDown, Minus, Plus, CheckCircle, BookOpen, Users, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FastTools - Percentage Calculator | Free Accurate Math Tool",
  description:
    "FastTools Percentage Calculator - Free tool for all math needs. Calculate percentage increase, decrease, difference, discounts, tips, grades, profit margins. Accurate and quick.",
  keywords: [
    "fasttools",
    "fast tools",
    "percentage calculator",
    "percentage increase calculator",
    "percentage decrease calculator",
    "find percentage of a number",
    "what percent of calculator",
    "percentage difference calculator",
    "discount percentage calculator",
    "percentage change calculator",
    "percentage formula",
    "percent off calculator",
    "percentage to fraction calculator",
    "percentage converter",
    "interest percentage calculator",
    "profit percentage calculator",
    "grade percentage calculator",
    "tip percentage calculator",
    "online percentage calculator",
    "percentage calculator free",
    "accurate percentage calculator",
    "quick percentage calculator",
    "free percentage tool",
    "percentage math",
    "percentage problems",
    "percentage examples",
    "percentage solutions",
    "percentage calculations",
    "percentage formulas",
    "percentage equations",
    "percentage FAQ",
    "percentage questions",
    "percentage help",
    "percentage guide",
    "percentage tutorial"
  ],
  openGraph: {
    title: "Free Online Percentage Calculator | Accurate & Quick Math Tool | FastTools",
    description: "Free percentage calculator for all your math needs. Calculate percentage increase, decrease, difference, discounts, tips, grades, profit margins, and more. Accurate, quick, and easy-to-use online tool.",
    type: "website",
    url: "https://www.fasttools.store/calculator/percentage-calculator",
    siteName: "FastTools",
    locale: "en_US",
    images: [
      {
        url: "https://www.fasttools.store/og-percentage-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Online Percentage Calculator - FastTools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Percentage Calculator | Accurate & Quick Math Tool | FastTools",
    description: "Free percentage calculator for all your math needs. Calculate percentage increase, decrease, difference, discounts, tips, grades, profit margins, and more.",
    images: ["https://www.fasttools.store/og-percentage-calculator.jpg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/percentage-calculator"
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
  authors: [{ name: "FastTools Math Team" }],
  creator: "FastTools",
  publisher: "FastTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.fasttools.store'),
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function PercentageCalculatorPage() {
  return (
    <div className="min-h-screen bg-card">
      <div className="container mx-auto px-3 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Calculator", href: "/calculator" },
          { label: "Percentage Calculator", href: "/calculator/percentage-calculator" },
        ]}
      />

        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-8">
            <GHeader 
              title="Free Online Percentage Calculator"
              description="Free percentage calculator for all your math needs. Calculate percentage increase, percentage decrease, percentage difference, discounts, tips, grades, profit margins, and more. Accurate and quick online tool with step-by-step formulas."
            />
          </div>

          {/* Mobile/Tablet AdSpace after GHeader */}
          <div className="my-6 lg:hidden">
            <div className="text-center mb-2">
              <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
            </div>
            <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
        </div>

          <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-3 md:gap-4 lg:gap-6">
          <div>
            <PercentageCalculator />

            {/* How to Use Section */}
              <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
                <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                  </div>
                  How to Use Our Advanced Percentage Calculator
                </h2>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">1. Select Calculation Type</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Choose from 7 different percentage calculation types</p>
                    </div>
                      <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">2. Enter Values</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Input your numbers in the appropriate fields</p>
                    </div>
                      <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">3. Get Results</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">View detailed calculation with formulas</p>
                    </div>
                      <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">4. Copy & Share</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Copy results or share calculations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculation Types */}
                <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-foreground">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <Calculator className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                  </div>
                  Percentage Calculation Types
                </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {[
                    { type: "Basic Percentage", icon: Percent, desc: "Find what percentage of a number is", example: "25% of 1000 = 250" },
                    { type: "Percentage Increase", icon: TrendingUp, desc: "Calculate increase by percentage", example: "1000 + 10% = 1100" },
                    { type: "Percentage Decrease", icon: TrendingDown, desc: "Calculate decrease by percentage", example: "1000 - 10% = 900" },
                    { type: "Percentage Difference", icon: Target, desc: "Find difference between two values", example: "Difference between 100 and 120 = 18.18%" },
                    { type: "Markup Calculation", icon: DollarSign, desc: "Calculate selling price with markup", example: "Cost $100 + 25% markup = $125" },
                    { type: "Margin Calculation", icon: BarChart3, desc: "Calculate cost from selling price", example: "Selling $125 - 20% margin = $100" },
                    { type: "Compound Interest", icon: PieChart, desc: "Calculate compound interest", example: "$1000 at 5% for 3 years = $1157.63" }
                  ].map(({ type, icon: Icon, desc, example }) => (
                      <div key={type} className="p-3 md:p-4 bg-card rounded-lg border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-4 w-4 text-foreground" />
                          <h3 className="font-semibold text-heading-accent text-sm md:text-base">{type}</h3>
                      </div>
                        <p className="text-xs md:text-sm text-muted-foreground mb-2">{desc}</p>
                      <p className="text-xs text-foreground font-mono bg-orange-500/10 px-2 py-1 rounded">{example}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Targeted Use Cases by Intent */}
              <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-foreground">
                  <div className="p-2 bg-orange-500/10 rounded-lg">
                    <Users className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                  </div>
                  Percentage Calculator Use Cases by Intent
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <div className="space-y-3">
                    <h3 className="text-base md:text-lg font-semibold text-heading-accent">📊 Informational Intent</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-heading-accent mb-1 text-sm">Percentage Increase Calculator</h4>
                        <p className="text-xs text-muted-foreground">Calculate growth rates, salary increases, and performance improvements</p>
                      </div>
                      <div className="p-3 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-heading-accent mb-1 text-sm">Percentage Decrease Calculator</h4>
                        <p className="text-xs text-muted-foreground">Calculate price drops, budget reductions, and efficiency losses</p>
                      </div>
                      <div className="p-3 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-heading-accent mb-1 text-sm">Percentage Difference Calculator</h4>
                        <p className="text-xs text-muted-foreground">Compare two values to find percentage difference</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-base md:text-lg font-semibold text-heading-accent">🛒 Practical Intent</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-heading-accent mb-1 text-sm">Discount Percentage Calculator</h4>
                        <p className="text-xs text-muted-foreground">Calculate sale prices, discount amounts, and savings</p>
                      </div>
                      <div className="p-3 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-heading-accent mb-1 text-sm">Tip Percentage Calculator</h4>
                        <p className="text-xs text-muted-foreground">Calculate restaurant tips, service charges, and gratuity</p>
                      </div>
                      <div className="p-3 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-heading-accent mb-1 text-sm">Percent Off Calculator</h4>
                        <p className="text-xs text-muted-foreground">Find final prices after percentage discounts</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-base md:text-lg font-semibold text-heading-accent">💼 Business Intent</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-heading-accent mb-1 text-sm">Profit Percentage Calculator</h4>
                        <p className="text-xs text-muted-foreground">Calculate profit margins, markup percentages, and ROI</p>
                      </div>
                      <div className="p-3 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-heading-accent mb-1 text-sm">Interest Percentage Calculator</h4>
                        <p className="text-xs text-muted-foreground">Calculate loan interest, investment returns, and APY</p>
                      </div>
                      <div className="p-3 bg-card rounded-lg border border-border">
                        <h4 className="font-semibold text-heading-accent mb-1 text-sm">Grade Percentage Calculator</h4>
                        <p className="text-xs text-muted-foreground">Calculate test scores, GPA, and academic performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                {/* How-To Guides for Different Intents */}
                <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-foreground">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                  </div>
                    How-To Guides: Find Percentage of a Number
                </h2>
                  <div className="space-y-4 md:space-y-6">
                    <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">How to Find Percentage of a Number</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        <strong>Step 1:</strong> Identify the part and the whole
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        <strong>Step 2:</strong> Use formula: (Part ÷ Whole) × 100
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        <strong>Example:</strong> What percent of 200 is 50? (50 ÷ 200) × 100 = 25%
                      </p>
                    </div>
                    
                    <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">How to Calculate Percentage Change</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        <strong>Step 1:</strong> Find the difference: New Value - Old Value
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        <strong>Step 2:</strong> Divide by old value: Difference ÷ Old Value
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        <strong>Step 3:</strong> Multiply by 100: Result × 100
                      </p>
                    </div>
                    
                    <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">How to Convert Percentage to Fraction</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        <strong>Step 1:</strong> Write percentage as fraction over 100
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        <strong>Step 2:</strong> Simplify the fraction
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        <strong>Example:</strong> 25% = 25/100 = 1/4
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mathematical Formulas Section */}
                <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-foreground">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <Calculator className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                    </div>
                    Mathematical Formulas & Examples
                  </h2>
                  <div className="space-y-4 md:space-y-6">
                    <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">Basic Percentage Formula</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        <strong>Formula:</strong> Percentage = (Part / Whole) × 100
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        <strong>Example:</strong> What is 25% of 200? Step 1: Convert 25% to decimal (0.25), Step 2: Multiply 0.25 × 200 = 50
                      </p>
              </div>

                    <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">Percentage Increase Formula</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        <strong>Formula:</strong> ((Final Value - Starting Value) / Starting Value) × 100
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        <strong>Example:</strong> If a product price rises from $100 to $120: ((120-100)/100) × 100 = 20% growth
                      </p>
                  </div>
                    
                    <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">Markup vs Margin</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        <strong>Markup Calculation:</strong> Final Price = Base Cost × (1 + Markup Percentage / 100)
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        <strong>Margin Calculation:</strong> Base Cost = Final Price × (1 - Margin Percentage / 100)
                      </p>
                    </div>
                    
                    <div className="p-3 md:p-4 bg-card rounded-lg border border-border">
                      <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">Compound Interest Formula</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        <strong>Formula:</strong> A = P(1 + r/n)^(nt)
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Where: A = final amount, P = principal, r = rate, n = compounding frequency, t = time
                      </p>
              </div>
            </div>
          </div>
          
                {/* Real-World Applications */}
                <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-foreground">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <Users className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                  </div>
                    Real-World Applications
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-3">
                      <h3 className="text-base md:text-lg font-semibold text-heading-accent">Business & Finance</h3>
                      <div className="space-y-2">
                        <div className="p-3 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-heading-accent mb-1 text-sm">Sales & Discounts</h4>
                          <p className="text-xs text-muted-foreground">Calculate sale prices, discount amounts, and profit margins for retail businesses.</p>
                </div>
                        <div className="p-3 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-heading-accent mb-1 text-sm">Investment Returns</h4>
                          <p className="text-xs text-muted-foreground">Analyze portfolio performance, calculate compound interest, and track growth rates.</p>
                  </div>
                </div>
                </div>
                <div className="space-y-3">
                      <h3 className="text-base md:text-lg font-semibold text-heading-accent">Education & Statistics</h3>
                      <div className="space-y-2">
                        <div className="p-3 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-heading-accent mb-1 text-sm">Test Scores & Grades</h4>
                          <p className="text-xs text-muted-foreground">Calculate grade percentages, analyze test performance, and track academic progress.</p>
                  </div>
                        <div className="p-3 bg-card rounded-lg border border-border">
                          <h4 className="font-semibold text-heading-accent mb-1 text-sm">Survey Analysis</h4>
                          <p className="text-xs text-muted-foreground">Analyze survey results, calculate response rates, and interpret statistical data.</p>
                  </div>
                </div>
              </div>
                  </div>
                </div>

                {/* Related Tools Section */}
                <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-foreground">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <Calculator className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                    </div>
                    Related Math & Finance Calculators
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {[
                      { 
                        name: "BMI Calculator", 
                        desc: "Calculate Body Mass Index and health metrics", 
                        href: "/calculator/bmi-calculator",
                        icon: "📊"
                      },
                      { 
                        name: "EMI Calculator", 
                        desc: "Calculate loan payments and interest", 
                        href: "/calculator/loan-calculator",
                        icon: "💰"
                      },
                      { 
                        name: "Age Calculator", 
                        desc: "Calculate age in years, months, days", 
                        href: "/calculator/age-calculator",
                        icon: "🎂"
                      },
                      { 
                        name: "Date Difference Calculator", 
                        desc: "Calculate days between dates", 
                        href: "/calculator/date-difference",
                        icon: "📅"
                      },
                      { 
                        name: "Tip Calculator", 
                        desc: "Calculate tips and gratuity", 
                        href: "/finance-tools/tip-calculator",
                        icon: "🍽️"
                      },
                      { 
                        name: "Discount Calculator", 
                        desc: "Calculate discounts and savings", 
                        href: "/finance-tools/discount-calculator",
                        icon: "🏷️"
                      },
                      { 
                        name: "Compound Interest Calculator", 
                        desc: "Calculate compound interest growth", 
                        href: "/calculator/compound-interest",
                        icon: "📈"
                      },
                      { 
                        name: "Sales Tax Calculator", 
                        desc: "Calculate sales tax and total amounts", 
                        href: "/calculator/sales-tax-calculator",
                        icon: "💼"
                      },
                      { 
                        name: "Grade Calculator", 
                        desc: "Calculate GPA and academic grades", 
                        href: "/calculator/gpa-calculator",
                        icon: "🎓"
                      },
                      { 
                        name: "Tax Calculator", 
                        desc: "Calculate income and sales tax", 
                        href: "/calculator/tax-calculator",
                        icon: "🧾"
                      },
                      { 
                        name: "Investment Calculator", 
                        desc: "Calculate investment returns and ROI", 
                        href: "/calculator/investment-calculator",
                        icon: "📊"
                      },
                      { 
                        name: "Salary Calculator", 
                        desc: "Calculate salary and wage conversions", 
                        href: "/calculator/salary-calculator",
                        icon: "💵"
                      }
                    ].map((tool, index) => (
                      <a
                        key={index}
                        href={tool.href}
                        className="p-4 bg-card rounded-lg border border-border hover:bg-slate-800 hover:border-border/50 transition-colors group"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{tool.icon}</span>
                          <h3 className="font-semibold text-heading-accent group-hover:text-foreground text-sm md:text-base">
                            {tool.name}
                          </h3>
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground">
                          {tool.desc}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Comprehensive FAQ Section */}
                <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2 text-foreground">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <Award className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
                    </div>
                    Frequently Asked Questions (FAQ) - 50 Questions
                  </h2>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      {
                        q: "What is a percentage and how is it calculated?",
                        a: "A percentage represents a number expressed as a fraction of 100, indicated by the '%' symbol. To compute a percentage of a number, multiply the number by the percentage value (converted to decimal form). For instance, to compute 20% of 50: 50 × 0.20 = 10. The fundamental calculation formula is: Percentage = (Component / Total) × 100."
                      },
                      {
                        q: "How do I convert a fraction to a percentage?",
                        a: "To convert a fraction to a percentage, divide the numerator by the denominator to get a decimal, then multiply by 100. For example, 3/4 as a percentage: (3 ÷ 4) × 100 = 75%. This method works for any fraction, whether it's 1/2 (50%), 2/3 (66.67%), or 5/8 (62.5%)."
                      },
                      {
                        q: "How do I convert a decimal to a percentage?",
                        a: "To transform a decimal into a percentage, multiply the decimal by 100 and append the percent symbol. For instance, converting 0.85 to a percentage: 0.85 × 100 = 85%. This transformation is helpful when processing decimal outcomes from mathematical operations or converting values from scientific notation formats."
                      },
                      {
                        q: "How do I convert a percentage to a decimal?",
                        a: "To transform a percentage into a decimal, divide the percentage value by 100. For instance, converting 25% to decimal: 25% ÷ 100 = 0.25. This transformation is crucial for mathematical operations, since the majority of calculation formulas need percentages in decimal format to ensure precise computational results."
                      },
                      {
                        q: "What is the formula for percentage increase?",
                        a: "The percentage increase calculation uses: ((Final Value - Initial Value) / Initial Value) × 100. For instance, when a price rises from $50 to $60: ((60 - 50) ÷ 50) × 100 = 20%. This calculation method is widely applied for determining wage increases, price escalations, and rate of growth measurements."
                      },
                      {
                        q: "What is the formula for percentage decrease?",
                        a: "The percentage decrease calculation uses: ((Initial Value - Final Value) / Initial Value) × 100. For instance, when a price drops from $60 to $50: ((60 - 50) ÷ 60) × 100 = 16.67%. This calculation method is applied for determining discount percentages, budget reductions, and efficiency decline measurements."
                      },
                      {
                        q: "What's the formula for finding the percentage difference between two values?",
                        a: "The percentage difference formula uses: |Value1 - Value2| / ((Value1 + Value2) / 2) × 100. This method computes the relative variation between two quantities independent of which value is greater. It's ideal for comparing measurements, prices, performance metrics, or any pair of numerical values."
                      },
                      {
                        q: "How do I find the original number if I know the percentage and the part?",
                        a: "To find the original number when you know the percentage and the part, use: Original Number = Part / (Percentage / 100). For example, if 20% of a number is 50: 50 ÷ 0.20 = 250. This is called reverse percentage calculation and is useful for finding original prices before discounts."
                      },
                      {
                        q: "What is reverse percentage calculation?",
                        a: "Reverse percentage calculation finds the original value before a percentage increase or decrease. For example, if a price after a 20% increase is $120, the original price was: $120 ÷ 1.20 = $100. This is essential for understanding original costs before markups or discounts."
                      },
                      {
                        q: "How to determine what percent one value represents of another?",
                        a: "To determine what percent one value represents of another, apply the formula: (Part / Whole) × 100. For instance, to determine what percent 25 represents of 200: (25 ÷ 200) × 100 = 12.5%. This calculation method is essential for analyzing test scores, calculating market share percentages, and evaluating any part-to-whole proportional relationships."
                      },
                      {
                        q: "How do I calculate discount percentage?",
                        a: "Discount percentage is calculated using: ((Original Price - Discounted Price) / Original Price) × 100. For example, if an item costs $100 and is on sale for $80: ((100 - 80) / 100) × 100 = 20% discount. This helps consumers understand savings and retailers set competitive prices."
                      },
                      {
                        q: "How do I calculate the final price after a percentage discount?",
                        a: "To find the final price after a discount, use: Final Price = Original Price × (1 - (Discount Percentage / 100)). For example, a $100 item with 20% off: $100 × (1 - 0.20) = $100 × 0.80 = $80. This formula is essential for shopping and retail calculations."
                      },
                      {
                        q: "How do I calculate percentage of a total?",
                        a: "To calculate percentage of a total, use: (Part / Total) × 100. For example, if you scored 85 out of 100 on a test: (85/100) × 100 = 85%. This formula works for any part-to-whole relationship like sales targets, budget allocations, or survey responses."
                      },
                      {
                        q: "How do I calculate percentage of marks obtained?",
                        a: "Percentage of marks is calculated using: (Marks Obtained / Total Marks) × 100. For example, if you scored 75 out of 100: (75/100) × 100 = 75%. This is commonly used in education to determine grades and academic performance."
                      },
                      {
                        q: "How do I calculate percentage of completion?",
                        a: "Percentage of completion is calculated using: (Completed Tasks / Total Tasks) × 100. For example, if you've completed 75 out of 100 tasks: (75/100) × 100 = 75%. This is useful for project tracking, goal monitoring, and progress assessment."
                      },
                      {
                        q: "How do I calculate percentage of a goal achieved?",
                        a: "To calculate percentage of a goal achieved, use: (Current Value / Goal Value) × 100. For example, if your goal is to save $10,000 and you've saved $7,500: (7,500/10,000) × 100 = 75%. This helps track progress toward financial, fitness, or career goals."
                      },
                      {
                        q: "How do I calculate percentage of weight loss?",
                        a: "Percentage of weight loss is calculated using: ((Starting Weight - Current Weight) / Starting Weight) × 100. For example, if you started at 200 lbs and now weigh 180 lbs: ((200-180)/200) × 100 = 10% weight loss. This is commonly used in fitness and health tracking."
                      },
                      {
                        q: "How do I calculate percentage of a loan paid off?",
                        a: "Percentage of loan paid off is calculated using: (Amount Paid / Total Loan Amount) × 100. For example, if you've paid $20,000 on a $100,000 loan: (20,000/100,000) × 100 = 20% paid off. This helps track mortgage, car loan, or personal loan progress."
                      },
                      {
                        q: "How do I calculate percentage of battery remaining?",
                        a: "Percentage of battery remaining is calculated using: (Current Charge / Full Charge) × 100. For example, if your phone has 3,000 mAh remaining out of 4,000 mAh: (3,000/4,000) × 100 = 75% remaining. This is displayed on all electronic devices."
                      },
                      {
                        q: "How do I calculate percentage of a portfolio allocated to a specific investment?",
                        a: "Portfolio allocation percentage is calculated using: (Investment Value / Total Portfolio Value) × 100. For example, if you have $10,000 in stocks out of a $50,000 portfolio: (10,000/50,000) × 100 = 20% in stocks. This helps with asset allocation and diversification."
                      },
                      {
                        q: "How do I calculate percentage of a budget spent?",
                        a: "Percentage of budget spent is calculated using: (Amount Spent / Total Budget) × 100. For example, if you've spent $3,000 out of a $5,000 monthly budget: (3,000/5,000) × 100 = 60% spent. This helps with financial planning and expense tracking."
                      },
                      {
                        q: "How do I calculate percentage of a population affected by a condition?",
                        a: "Population percentage affected is calculated using: (Number of Affected Individuals / Total Population) × 100. For example, if 1,000 people have a condition out of 10,000 total: (1,000/10,000) × 100 = 10% affected. This is used in epidemiology and public health."
                      },
                      {
                        q: "How do I calculate percentage of a mixture?",
                        a: "Percentage of a component in a mixture is calculated using: (Mass of Component / Total Mass of Mixture) × 100. For example, if you have 20g of salt in 100g of solution: (20/100) × 100 = 20% salt. This is used in chemistry, cooking, and manufacturing."
                      },
                      {
                        q: "How do I calculate percentage of a solution?",
                        a: "Percentage solution is calculated using: (Solute Mass / Solution Mass) × 100. For example, if you have 25g of sugar in 200g of water: (25/200) × 100 = 12.5% sugar solution. This is essential in chemistry, medicine, and food preparation."
                      },
                      {
                        q: "How do I calculate percentage of a grade?",
                        a: "Percentage grade is calculated using: (Points Earned / Total Points Possible) × 100. For example, if you earned 85 points out of 100 possible: (85/100) × 100 = 85%. This is used in education to determine letter grades and academic performance."
                      },
                      {
                        q: "How do I calculate percentage of a test score?",
                        a: "Percentage test score is calculated using: (Correct Answers / Total Questions) × 100. For example, if you answered 18 questions correctly out of 20: (18/20) × 100 = 90%. This is used in standardized testing and academic assessment."
                      },
                      {
                        q: "How do I calculate percentage of a salary increase?",
                        a: "Percentage salary increase is calculated using: ((New Salary - Old Salary) / Old Salary) × 100. For example, if your salary increased from $50,000 to $55,000: ((55,000-50,000)/50,000) × 100 = 10% increase. This helps negotiate raises and track career growth."
                      },
                      {
                        q: "How do I calculate percentage of a tip?",
                        a: "Tip amount is calculated using: Bill Amount × (Tip Percentage / 100). For example, on a $50 bill with 18% tip: $50 × (18/100) = $50 × 0.18 = $9. This is essential for restaurant service and hospitality industry calculations."
                      },
                      {
                        q: "How do I calculate percentage of a commission?",
                        a: "Commission amount is calculated using: Sale Amount × (Commission Percentage / 100). For example, on a $1,000 sale with 5% commission: $1,000 × (5/100) = $1,000 × 0.05 = $50. This is used in sales, real estate, and financial services."
                      },
                      {
                        q: "How do I calculate percentage of a tax?",
                        a: "Tax amount is calculated using: Price × (Tax Rate / 100). For example, on a $100 purchase with 8% tax: $100 × (8/100) = $100 × 0.08 = $8. This is essential for retail, business, and personal finance calculations."
                      },
                      {
                        q: "How do I calculate percentage of a profit margin?",
                        a: "Profit margin percentage is calculated using: (Profit / Revenue) × 100. For example, if you made $2,000 profit on $10,000 revenue: (2,000/10,000) × 100 = 20% profit margin. This is crucial for business analysis and financial planning."
                      },
                      {
                        q: "How do I calculate percentage of a markup?",
                        a: "Markup percentage is calculated using: ((Selling Price - Cost Price) / Cost Price) × 100. For example, if you bought an item for $50 and sell it for $75: ((75-50)/50) × 100 = 50% markup. This helps set profitable selling prices."
                      },
                      {
                        q: "How do I calculate percentage of return on investment (ROI)?",
                        a: "ROI percentage is calculated using: (Net Profit / Investment Cost) × 100. For example, if you invested $1,000 and made $1,200: ((1,200-1,000)/1,000) × 100 = 20% ROI. This is essential for investment analysis and financial decision-making."
                      },
                      {
                        q: "How do I calculate percentage of a grade point average (GPA)?",
                        a: "GPA percentage is calculated using: (GPA / Maximum GPA) × 100. For example, if you have a 3.2 GPA out of 4.0: (3.2/4.0) × 100 = 80%. This helps convert GPA to percentage for scholarships and academic requirements."
                      },
                      {
                        q: "How do I calculate percentage of a calorie intake?",
                        a: "Percentage of daily calorie intake is calculated using: (Calories Consumed / Daily Calorie Goal) × 100. For example, if you consumed 1,800 calories out of a 2,000 calorie goal: (1,800/2,000) × 100 = 90%. This helps with nutrition tracking and weight management."
                      },
                      {
                        q: "How do I calculate percentage of a nutrient in a food item?",
                        a: "Nutrient percentage is calculated using: (Nutrient Amount per Serving / Daily Recommended Value) × 100. For example, if a food has 200mg of calcium and the daily value is 1,000mg: (200/1,000) × 100 = 20%. This helps with nutrition labeling and dietary planning."
                      },
                      {
                        q: "How do I calculate percentage of a vote?",
                        a: "Vote percentage is calculated using: (Votes Received / Total Votes) × 100. For example, if a candidate received 2,500 votes out of 10,000 total: (2,500/10,000) × 100 = 25%. This is used in elections, surveys, and opinion polls."
                      },
                      {
                        q: "How do I calculate percentage of a distance traveled?",
                        a: "Percentage of distance traveled is calculated using: (Distance Traveled / Total Distance) × 100. For example, if you've traveled 75 miles out of 100 miles: (75/100) × 100 = 75%. This is useful for trip planning and progress tracking."
                      },
                      {
                        q: "What is the difference between percentage and percentile?",
                        a: "A percentage represents a fraction of 100 (e.g., 85% means 85 out of 100), while a percentile indicates a value below which a given percentage of observations fall (e.g., 85th percentile means 85% of values are below this point). Percentages are used for proportions, percentiles for rankings."
                      },
                      {
                        q: "Can percentages be greater than 100%?",
                        a: "Yes, percentages can exceed 100% when the part is greater than the whole. For example, if you budget $1,000 but spend $1,200, you spent 120% of your budget. This is common in business when actual results exceed projections or targets."
                      },
                      {
                        q: "What is a percentage point?",
                        a: "A percentage point represents the absolute difference between two percentage values. For instance, a change from 20% to 25% equals a 5 percentage point increase (distinct from a 5% increase). This distinction is crucial in statistical analysis, economic reporting, and policy evaluation to prevent misinterpretation of data."
                      },
                      {
                        q: "How do I calculate percentage of a percentage?",
                        a: "To calculate percentage of a percentage, multiply the two percentages (expressed as decimals). For example, 50% of 20%: 0.50 × 0.20 = 0.10 or 10%. This is used in compound calculations and nested percentage problems."
                      },
                      {
                        q: "How do I calculate percentage without a calculator?",
                        a: "Use mental math strategies: find 10% by dividing by 10, then scale up or down. For example, to find 30% of 80: 10% of 80 = 8, so 30% = 8 × 3 = 24. For 5%, find 10% and divide by 2. For 25%, find 50% and divide by 2."
                      },
                      {
                        q: "What are common percentage calculation mistakes to avoid?",
                        a: "Common mistakes include: confusing markup with margin, using wrong base values, not converting percentages to decimals properly, mixing up increase vs decrease formulas, and confusing percentage points with percentages. Always double-check your base values and formula application."
                      },
                      {
                        q: "How do I calculate percentage error?",
                        a: "Percentage error is calculated using: |Experimental Value - Theoretical Value| / Theoretical Value × 100. For example, if you measured 98°C but the actual temperature is 100°C: |98-100|/100 × 100 = 2% error. This is used in scientific measurements and quality control."
                      },
                      {
                        q: "How do I calculate percentage yield?",
                        a: "Percentage yield is calculated using: (Actual Yield / Theoretical Yield) × 100. For example, if you expected 100g of product but got 85g: (85/100) × 100 = 85% yield. This is used in chemistry, manufacturing, and production efficiency analysis."
                      },
                      {
                        q: "How do I calculate percentage composition?",
                        a: "Percentage composition is calculated using: (Mass of Component / Total Mass) × 100. For example, if a compound has 12g carbon in 44g total: (12/44) × 100 = 27.3% carbon. This is used in chemistry to determine the elemental composition of compounds."
                      },
                      {
                        q: "How do I calculate percentage purity?",
                        a: "Percentage purity is calculated using: (Mass of Pure Substance / Mass of Impure Sample) × 100. For example, if you have 95g pure gold in 100g sample: (95/100) × 100 = 95% purity. This is used in quality control, mining, and material analysis."
                      },
                      {
                        q: "How do I calculate percentage concentration?",
                        a: "Percentage concentration is calculated using: (Amount of Solute / Amount of Solution) × 100. For example, if you have 20g salt in 200g solution: (20/200) × 100 = 10% concentration. This is used in chemistry, medicine, and food preparation."
                      },
                      {
                        q: "What is the difference between percentage and fraction?",
                        a: "A percentage is a fraction expressed out of 100 (e.g., 50% = 50/100 = 1/2), while a fraction represents a part of a whole without a fixed denominator (e.g., 1/3, 2/5). Percentages are easier to compare and understand, while fractions are more precise for calculations."
                      },
                      {
                        q: "How do I calculate compound percentage growth?",
                        a: "Compound percentage growth uses the formula: Final Value = Initial Value × (1 + Rate)^Number of Periods. For example, $1,000 at 5% annual growth for 3 years: $1,000 × (1.05)^3 = $1,157.63. This is used for investment growth, population growth, and exponential calculations."
                      },
                      {
                        q: "How do I calculate percentage in Excel?",
                        a: "In Excel, use the formula: =(Part/Whole)*100. For example, to calculate percentage of A1 relative to B1: =(A1/B1)*100. You can also use the percentage format to display results as percentages. Excel automatically handles the multiplication by 100 when using percentage format."
                      }
                    ].map(({ q, a }, index) => (
                      <div key={index} className="p-3 md:p-4 bg-card rounded-lg border border-border">
                        <h3 className="font-semibold text-heading-accent mb-2 text-sm md:text-base">{q}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">{a}</p>
                  </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
            
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
  )
}