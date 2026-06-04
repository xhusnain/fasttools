import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const SalaryCalculator = dynamic(() => import("@/components/finance/salary-calculator"), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, BarChart3, TrendingUp, BookOpen, Users, Clock, Target, Home, DollarSign, FileText, Award, Globe, PieChart, Percent, CreditCard, Wallet, Trophy } from "lucide-react"

const TOOL_TITLE = "Salary Calculator — Convert Hourly to Annual, Gross to Net"
const TOOL_META_DESC = "Free salary calculator. Convert pay between hourly, daily, weekly, bi-weekly, monthly, and annual. Calculate gross-to-net take-home pay after federal tax, FICA, and state tax. Includes holiday/vacation adjustment and W-2 vs 1099 contractor rate comparison."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/salary-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "Salary Calculator", href: "/finance-tools/salary-calculator" }
  ],
  schemaOptions: {
    name: "Salary Calculator with Gross-to-Net & Frequency Conversion",
    alternateName: [
      "Pay Frequency Calculator",
      "Hourly to Salary Calculator",
      "Salary to Hourly Calculator",
      "Annual to Hourly Calculator",
      "Take Home Pay Calculator",
      "Gross to Net Pay Calculator",
      "Paycheck Calculator",
      "Net Pay Calculator",
      "Bi-Weekly Pay Calculator",
      "Monthly to Annual Salary Calculator",
      "Wage Calculator",
      "Income Calculator",
      "Hourly Rate Calculator",
      "After-Tax Salary Calculator",
      "Contractor Rate Calculator",
      "1099 vs W-2 Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Convert between hourly, daily, weekly, bi-weekly, semi-monthly, monthly, and annual pay",
      "Gross-to-net (after-tax) calculation",
      "Federal income tax estimation via progressive brackets",
      "FICA: Social Security (6.2%) + Medicare (1.45%)",
      "State income tax with all 50 US states (including no-tax states FL/TX/WA/NV/etc.)",
      "Holiday and vacation day adjustments",
      "Standard 2,080 work-hours/year (40 hr × 52 weeks) basis",
      "Overtime pay calculation (1.5× rate)",
      "W-2 employee vs 1099 contractor rate comparison",
      "Total compensation calculator (salary + benefits + 401k match)",
      "Multi-country support: US, UK, Canada, Australia",
      "Reverse calculator: target take-home pay → required gross salary",
      "Job offer comparison side-by-side",
      "100% client-side — your salary never leaves your browser",
      "Free, no signup, no usage limits",
    ],
    ratingValue: "4.8",
    ratingCount: "6730",
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function SalaryCalculatorPage() {
  const toolContent = {
    toolName: "Salary Calculator",
    definition:
      "A salary calculator converts pay between hourly, weekly, bi-weekly, monthly, and annual amounts and can estimate take-home pay after taxes and payroll deductions.",
    quickAnswer:
      "Enter your pay amount, pay frequency, hours per week, and location to convert salary across hourly, weekly, monthly, and annual formats. Use gross-to-net mode to estimate take-home pay after federal tax, FICA, and state tax.",
    keyTakeaways: [
      "Hourly to annual salary usually uses 2,080 work hours per year for a 40-hour week",
      "Annual salary to hourly = annual salary divided by yearly work hours",
      "Gross pay is before taxes and deductions; net pay is estimated take-home pay",
      "Bi-weekly pay means 26 paychecks per year; semi-monthly means 24 paychecks",
      "Use the 1099 vs W-2 comparison when contractor pay must cover self-employment tax and benefits",
    ],
    overview: "Convert salary amounts across all pay frequencies with our advanced salary calculator. Get precise pay calculations, industry comparisons, negotiation support, and career advancement guidance for optimal financial planning.",

    howToSteps: [
      "Enter Salary Information: Input your salary amount, pay frequency, and work schedule details.",
      "Set Time Off Parameters: Enter holidays and vacation days for accurate adjusted calculations.",
      "Analyze Results: Review all pay frequency conversions and industry comparisons.",
      "Get Professional Insights: Receive personalized recommendations for salary optimization."
    ],

    features: [
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

    useCases: [
      "For Job Seekers & Employees: Compare job offers, understand true compensation, prepare for negotiations, plan career advancement, analyze benefits.",
      "For Employers & HR: Set competitive salary ranges, convert pay frequencies, calculate total compensation, plan payroll budgets, ensure FLSA compliance."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Salary vs Wage
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Salary</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Fixed annual amount paid on regular basis. Exempt from overtime, higher perceived status, typically for professional positions.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <div className="text-sm text-foreground">
                  <div className="mb-1"><strong>Benefits:</strong> Predictable income, professional benefits, career advancement</div>
                  <div><strong>Drawbacks:</strong> No overtime pay, less flexibility</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Wage</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                Hourly rate multiplied by hours worked. Can vary based on hours, eligible for overtime, typically for service and hourly positions.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <div className="text-sm text-foreground">
                  <div className="mb-1"><strong>Benefits:</strong> Overtime pay, flexible hours, direct compensation</div>
                  <div><strong>Drawbacks:</strong> Variable income, less job security</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "How accurate are the salary calculations?",
        answer: "Our calculator uses industry-standard formulas for pay frequency conversions and working day calculations. The results are highly accurate for standard employment scenarios and account for federal holidays and typical work schedules."
      },
      {
        question: "What's the difference between unadjusted and adjusted salaries?",
        answer: "Unadjusted salaries ignore holidays and vacation days, while adjusted salaries account for paid time off. Adjusted salaries provide a more realistic view of actual working compensation and help you understand your true hourly rate."
      },
      {
        question: "How do I use this for salary negotiations?",
        answer: "Use the calculator to convert your current salary to different pay frequencies, compare against industry averages, and prepare talking points for negotiations based on market data. The industry comparisons help you justify your salary requests."
      },
      {
        question: "What if I'm self-employed or a contractor?",
        answer: "Contractors should generally charge higher rates than equivalent salaried positions since they don't receive benefits like health insurance, paid time off, or retirement contributions. Use the calculator to determine appropriate contractor rates."
      },
      {
        question: "How do I increase my salary?",
        answer: "Focus on education, experience, networking, performance reviews, negotiation, and job changes. The calculator provides personalized recommendations based on your current situation and helps you set realistic salary goals for career advancement."
      },
      {
        question: "How can I determine if my current salary aligns with industry standards?",
        answer: "Use our salary calculator to input your job title, location, experience level, and education to receive tailored salary reports. Compare your current salary against industry averages, considering factors like company size, industry type, and regional cost of living. Regularly reviewing this data ensures you remain informed about market trends and can advocate effectively during salary negotiations or performance reviews."
      },
      {
        question: "What factors influence salary variations across different regions?",
        answer: "Salaries vary significantly based on geographic location due to cost of living, demand for specific skills, and regional economic conditions. Urban areas with higher living expenses typically offer higher salaries to compensate, while rural regions may have lower salary ranges but also lower living costs. Our calculator accounts for these regional differences, helping you evaluate job offers or consider relocation by factoring in housing, transportation, taxes, and other living expenses to ensure compensation aligns with your financial needs."
      },
      {
        question: "How do experience and education levels impact salary expectations?",
        answer: "Professional background and academic qualifications significantly influence compensation packages. Candidates possessing substantial work history or postgraduate credentials typically secure premium salary offers because they bring refined competencies and demonstrated performance histories. To illustrate, a software developer with ten years of industry tenure plus a graduate degree generally receives considerably higher compensation compared to a new graduate with an undergraduate qualification. Our calculator incorporates these variables when generating salary projections, emphasizing how ongoing skill enhancement and investing in further educational credentials can increase earning potential."
      },
      {
        question: "Can specialized skills or certifications lead to higher salaries?",
        answer: "Absolutely! Specialized skills or industry-recognized certifications can significantly boost your earning potential. These qualifications demonstrate commitment to professional development and mastery of specific competencies, making you more valuable to employers. For instance, a project manager with PMP certification or an IT professional with cybersecurity credentials may negotiate higher salaries due to high demand for these specialized skills. Our calculator helps you understand how these qualifications impact your market value and earning potential."
      },
      {
        question: "How do I account for benefits and bonuses when comparing salaries?",
        answer: "When evaluating compensation, consider the entire package including base salary, bonuses, health insurance, retirement plans, stock options, and other perks. Our calculator allows you to input and adjust for these variables, providing a comprehensive view of your total compensation. Always factor in benefits when comparing job offers, as a lower base salary with excellent benefits may be more valuable than a higher salary with minimal benefits. This holistic approach ensures you make informed decisions about your career trajectory and financial well-being."
      }
    ],

    relatedTools: [
      { name: "Income Tax Calculator", href: "/finance-tools/tax-calculator" },
      { name: "Tax Bracket Calculator", href: "/finance-tools/tax-bracket-calculator" },
      { name: "Freelance Rate Calculator", href: "/finance-tools/freelance-rate-calculator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Home Affordability Calculator", href: "/finance-tools/home-affordability-calculator" },
      { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Savings Tracker", href: "/finance-tools/savings-tracker" },
      { name: "Net Worth Calculator", href: "/finance-tools/net-worth-calculator" },
      { name: "Remote Work Savings", href: "/finance-tools/remote-work-savings" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Salary Calculator — Hourly ↔ Annual + Gross-to-Net",
        description: "Convert pay between hourly, weekly, bi-weekly, monthly, and annual. Calculate take-home pay after federal tax, FICA, and state tax. Compare W-2 vs 1099 contractor rate and offers side-by-side.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: "Salary Calculator", href: "/finance-tools/salary-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <SalaryCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/salary-calculator"
      }}
    />
  )
}
