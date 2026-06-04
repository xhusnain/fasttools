import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const SavingsGoalTracker = dynamic(() => import("@/components/finance/savings-goal-tracker").then(mod => mod.SavingsGoalTracker), {
  loading: () => <ToolLoader />
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, PiggyBank, CreditCard, FileText } from "lucide-react"
import type { Metadata } from "next"
import { getCurrentYear } from "@/lib/utils"

const TOOL_TITLE = `Savings Tracker — Free Online Savings Tracking Tool`
const TOOL_NAME = "Savings Tracker"
const TOOL_DESCRIPTION = "Free savings tracking tool to set and track financial goals. Plan monthly contributions, adjust for tax and inflation, prioritize multiple goals, and see how long until you hit your target."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_DESCRIPTION,
  path: "/finance-tools/savings-tracker",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/savings-tracker" }
  ],
  schemaOptions: {
    name: "Advanced Financial Goal Planner",
    alternateName: "Comprehensive Expense & Savings Calculator",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Advanced expense tracking",
      "Tax deduction calculator",
      "Inflation adjustment",
      "Multi-goal management",
      "Priority-based planning",
      "Expense categorization",
      "Monthly budget planner",
      "Annual savings calculator",
      "Financial goal prioritization",
      "Tax savings calculator",
      "Inflation impact calculator",
      "Interest rate calculator",
      "Expense management tool",
      "Savings timeline calculator",
      "Financial milestone tracker",
      "Expense optimization tool",
      "Savings strategy planner",
      "Housing expense calculator",
      "Transportation cost calculator",
      "Food budget calculator",
      "Utilities expense tracker",
      "Insurance cost calculator",
      "Healthcare expense planner",
      "Entertainment budget tracker",
      "Shopping expense calculator",
      "Education savings planner",
      "Business expense tracker",
      "Wedding budget calculator",
      "Travel fund calculator",
      "Emergency fund planner"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
}

export default function SavingsTrackerPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    definition:
      "A savings tracker helps plan, measure, and update progress toward financial goals using target amount, current savings, monthly contributions, and timeline.",
    quickAnswer:
      "Enter your savings goal, current balance, and monthly contribution to calculate how long it will take to reach the target. Use it for emergency funds, vacations, car down payments, house down payments, weddings, and other savings goals.",
    keyTakeaways: [
      "Savings timeline = remaining goal amount divided by monthly contribution",
      "Emergency funds often target three to six months of essential expenses",
      "Increasing monthly contribution shortens the timeline more directly than small interest changes",
      "Multiple goals should be prioritized by urgency, risk, and deadline",
      "Track progress regularly so stale balances do not distort the plan",
    ],
    overview: `Comprehensive financial planning tool with expense tracking, tax calculations, inflation adjustments, and multiple goal management. Perfect for budgeting, savings planning, and achieving financial objectives. Features advanced expense categories, tax deductions, priority-based goal setting, and intelligent recommendations.`,

    howToSteps: [
      "Set Your Goal: Define what you are saving for (e.g., Emergency Fund, Vacation, New Car).",
      "Enter Target Amount: Input the total amount of money you need to save.",
      "Input Current Savings: Enter how much you have already saved towards this goal.",
      "Determine Monthly Contribution: Decide how much you can afford to save each month.",
      "Track Progress: Regularly update your savings to see how close you are to your goal."
    ],

    features: [
      "Goal Setting & Tracking: Set specific savings goals with target amounts and track progress in real-time.",
      "Timeline Calculations: Calculate exact timelines to reach your savings goals based on monthly contributions.",
      "Comprehensive Expense Tracking: Supports multiple categories including housing, transportation, food, utilities, insurance, etc.",
      "Tax Deduction Calculator: Maximize your tax savings by marking expenses as tax-deductible.",
      "Inflation Adjustment Calculator: Account for inflation in your long-term financial planning.",
      "Multi-Goal Management System: Manage multiple financial goals simultaneously with priority-based planning.",
      "Smart Savings Tracker Online: AI-powered algorithms analyze spending and suggest optimal strategies.",
      "Progress-Based Savings Tracker: Visual milestones, achievement badges, and progress bars to motivate continued saving.",
      "Collaborative Savings Tracker: Save together with family and friends using shared goals."
    ],

    useCases: [
      "Emergency Fund Planning: Target 3-6 months of expenses, start with $1,000 minimum.",
      "Vacation & Travel Savings: Plan 6-12 months ahead, include all travel expenses.",
      "Major Purchase Planning: Car down payment (20%), Home down payment (20%), Wedding planning.",
      "Category-Specific Tools: Housing, Transportation, Food, Utilities, Insurance, Healthcare, Entertainment, Shopping.",
      "Digital Savings Tracker Solutions: Online, Digital, App, Free, and Personal tracking options.",
      "Template & Spreadsheet Options: Excel integration, Printable sheets, Notion templates.",
      "Visual & Chart Tools: Savings Goal Charts, Budget Trackers, Personal Finance Trackers."
    ],

    faqs: [
      {
        question: "How to calculate savings timeline and reach financial goals",
        answer: "To calculate savings timeline: Timeline = (Goal Amount - Current Savings) ÷ Monthly Contribution. Our savings tracker automatically calculates exact timelines based on your inputs. For example, saving $10,000 with $500 monthly contributions: ($10,000 - $2,000) ÷ $500 = 16 months. Adjust contributions to accelerate or extend timelines as needed."
      },
      {
        question: "Emergency fund calculator and financial safety planning",
        answer: "Emergency fund calculators help determine appropriate fund sizes based on monthly expenses. Standard recommendations: 3-6 months of expenses for job security, 6-12 months for variable income. Our calculator considers your specific situation and provides personalized recommendations for building financial safety nets."
      },
      {
        question: "Vacation savings calculator and travel fund planning",
        answer: "Vacation savings calculators help plan travel expenses including flights, accommodation, meals, activities, and unexpected costs. Our calculator accounts for destination-specific costs, seasonal variations, and multiple trip planning. Perfect for budgeting family vacations, honeymoons, and international travel."
      },
      {
        question: "Car savings calculator and vehicle purchase planning",
        answer: "Car savings calculators help plan for vehicle purchases including down payments, insurance, taxes, and registration fees. Our calculator considers different vehicle types, financing options, and trade-in values. Essential for avoiding high-interest auto loans and achieving better financing terms."
      },
      {
        question: "House down payment savings and home purchase planning",
        answer: "House down payment calculators help plan for home purchases with 20% down payment goals. Our calculator considers different home prices, closing costs, and additional expenses. Includes PMI avoidance strategies and first-time buyer programs. Essential for achieving homeownership goals and reducing monthly payments."
      },
      {
        question: "Wedding savings planner and event budgeting",
        answer: "Wedding savings planners help budget for ceremonies, receptions, and related expenses. Our calculator accounts for venue costs, catering, photography, attire, and miscellaneous expenses. Includes timeline planning for 12-18 month engagement periods and family contribution considerations."
      },
      {
        question: "Sinking funds tracker and multiple goal management",
        answer: "Sinking funds trackers help manage multiple savings goals simultaneously. Our calculator supports separate accounts for different objectives: emergency fund, vacation, car, home, and other major expenses. Provides allocation strategies and priority recommendations for efficient goal achievement."
      },
      {
        question: "Monthly savings plan and contribution optimization",
        answer: "Monthly savings plans help optimize contribution amounts based on income and expenses. Our calculator considers budget constraints, income variations, and expense fluctuations. Provides recommendations for increasing contributions gradually and maintaining consistency throughout goal achievement periods."
      },
      {
        question: "Free savings tracker vs manual calculations",
        answer: "Free savings trackers provide instant, accurate calculations compared to manual methods. Our calculator handles complex scenarios like multiple goals, timeline adjustments, and contribution variations automatically. Perfect for busy individuals who need reliable financial planning tools without spreadsheet complexity."
      },
      {
        question: "Financial goal planner and comprehensive planning tools",
        answer: "Financial goal planners provide comprehensive tools for long-term financial planning. Our calculator supports retirement planning, education funding, major purchase planning, and wealth building strategies. Includes compound interest calculations and investment growth projections for complete financial planning."
      },
      {
        question: "Advanced expense tracking and categorization for comprehensive budgeting",
        answer: "Our advanced expense tracker supports comprehensive categorization including housing, transportation, food, utilities, insurance, healthcare, entertainment, and shopping expenses. Each expense can be categorized by frequency (monthly, yearly, one-time) and priority level (high, medium, low) for optimal financial planning and budget management."
      },
      {
        question: "Tax deduction calculator and deductible expense optimization",
        answer: "Maximize your tax savings with our intelligent tax deduction calculator. Mark expenses as tax-deductible and automatically calculate monthly tax savings. Perfect for business expenses, medical costs, education expenses, and other deductible items that can reduce your overall tax burden."
      },
      {
        question: "Inflation adjustment calculator and long-term financial planning",
        answer: "Account for inflation in your long-term financial planning with our inflation adjustment calculator. Automatically adjust goal amounts based on projected inflation rates, ensuring your savings targets remain realistic and achievable over time."
      },
      {
        question: "Multi-goal financial planner and priority-based goal management",
        answer: "Manage multiple financial goals simultaneously with our priority-based system. Set high, medium, and low priority goals, track progress across different categories, and receive intelligent recommendations for optimal goal achievement."
      },
      {
        question: "Category-specific financial calculators and specialized planning tools",
        answer: "Our platform includes specialized calculators for housing expenses, transportation costs, food budgets, utilities tracking, insurance planning, healthcare expenses, entertainment budgets, shopping costs, education savings, business expenses, wedding planning, travel funds, and emergency fund planning."
      },
      {
        question: "Expense frequency calculator and budget planning optimization",
        answer: "Track expenses by frequency including monthly, yearly, and one-time expenses. Our expense frequency calculator helps optimize budget planning by categorizing recurring vs. irregular expenses. Perfect for annual budget planning and cash flow management."
      },
      {
        question: "Financial milestone tracker and goal achievement monitoring",
        answer: "Monitor your progress toward financial milestones with our comprehensive tracking system. Track savings capacity, goal completion rates, and financial achievements across multiple objectives. Perfect for staying motivated and ensuring consistent progress."
      },
      {
        question: "Expense optimization tool and savings strategy planner",
        answer: "Optimize your expenses and maximize savings with our intelligent analysis tools. Get recommendations for reducing costs, increasing savings capacity, and improving financial efficiency. Perfect for identifying areas for improvement and developing effective savings strategies."
      },
      {
        question: "Interest rate calculator and investment planning integration",
        answer: "Factor in interest rates and investment returns with our comprehensive calculator. Account for different interest rates, compound growth, and investment performance in your financial planning. Essential for retirement planning and investment goal setting."
      },
      {
        question: "Smart savings tracker online and AI-powered financial planning",
        answer: "Our smart savings tracker online uses advanced AI algorithms to analyze your spending patterns, predict future expenses, and automatically suggest optimal savings strategies. Features intelligent categorization, spending predictions, and personalized recommendations."
      },
      {
        question: "Progress-based savings tracker and motivational features",
        answer: "Track your savings progress with visual milestones, achievement badges, and progress bars that motivate continued saving. Our progress-based savings tracker celebrates small wins and keeps you motivated throughout your financial journey."
      },
      {
        question: "Multi-goal savings calculator and complex financial planning",
        answer: "Manage multiple savings goals simultaneously with our advanced multi-goal savings calculator. Allocate funds across different objectives, prioritize goals by importance, and track progress across all targets."
      },
      {
        question: "Savings tracker with gamification and engagement features",
        answer: "Turn saving money into an engaging game with our gamified savings tracker. Earn XP points for reaching milestones, unlock achievement badges, and compete with friends in savings challenges. Features level progression and streak tracking."
      },
      {
        question: "Savings habit tracker and daily financial discipline",
        answer: "Build consistent savings habits with our daily savings tracker online. Track daily contributions, monitor habit streaks, and receive reminders to maintain your savings routine. Perfect for developing long-term financial discipline."
      },
      {
        question: "Collaborative savings tracker for family and group goals",
        answer: "Save together with family and friends using our collaborative savings tracker. Create shared savings goals, track group contributions, and celebrate collective achievements. Perfect for family vacations or group purchases."
      },
      {
        question: "Visual savings progress calculator and interactive charts",
        answer: "See your savings progress with stunning visual charts, graphs, and progress indicators. Our visual savings progress calculator transforms numbers into engaging visuals that make tracking progress intuitive and motivating."
      },
      {
        question: "Motivational savings tracker and inspirational content",
        answer: "Stay motivated with our inspirational savings tracker featuring daily quotes, success stories, and personalized encouragement. Perfect for Pinterest and social media sharing with motivational content."
      },
      {
        question: "Smart savings planner tool and comprehensive financial management",
        answer: "Our smart savings planner tool combines all advanced features into one comprehensive platform. Features intelligent expense tracking, tax optimization, inflation adjustments, multi-goal management, gamification, and collaborative features."
      },
      {
        question: "Savings tracker and core tracking functionality",
        answer: "Our savings tracker provides essential tracking functionality for monitoring your financial progress. Features include goal setting, progress monitoring, contribution tracking, and milestone celebrations."
      },
      {
        question: "Online savings tracker and web-based platform benefits",
        answer: "Our online savings tracker offers the convenience of web-based access from any device. Features include real-time synchronization, cloud storage, multi-device access, and automatic backups."
      },
      {
        question: "Savings tracker calculator and built-in calculation engine",
        answer: "Our savings tracker calculator includes a powerful built-in calculation engine for complex financial computations. Features include compound interest calculations, inflation adjustments, tax calculations, and goal timeline projections."
      },
      {
        question: "Free savings tracker and no-cost financial planning",
        answer: "Our free savings tracker provides comprehensive financial planning tools at no cost. Features include unlimited goals, advanced calculations, progress tracking, and export capabilities."
      },
      {
        question: "Personal savings tracker and individual-focused features",
        answer: "Our personal savings tracker is designed specifically for individual users with personalized features. Includes custom goal categories, personal milestones, private tracking, and personalized recommendations."
      },
      {
        question: "Digital savings tracker and modern interface design",
        answer: "Our digital savings tracker features a modern, intuitive interface designed for the digital age. Includes responsive design, touch-friendly controls, dark mode support, and accessibility features."
      },
      {
        question: "Savings tracker template and pre-built tracking solutions",
        answer: "Our savings tracker template provides pre-built tracking solutions for common financial goals. Includes emergency fund templates, vacation savings templates, home purchase templates, and retirement planning templates."
      },
      {
        question: "Excel savings tracker and spreadsheet integration",
        answer: "Our Excel savings tracker offers seamless integration with Microsoft Excel and other spreadsheet applications. Features include data export, formula integration, chart generation, and macro support."
      },
      {
        question: "Printable savings tracker and physical tracking options",
        answer: "Our printable savings tracker provides physical tracking sheets for users who prefer paper-based methods. Includes goal tracking sheets, progress charts, contribution logs, and milestone certificates."
      },
      {
        question: "Notion savings tracker and workspace integration",
        answer: "Our Notion savings tracker integrates seamlessly with Notion workspaces for comprehensive project management. Features include database integration, template sharing, team collaboration, and workflow automation."
      },
      {
        question: "Savings goal chart and visual progress tracking",
        answer: "Our savings goal chart provides visual progress tracking with interactive charts and graphs. Features include progress bars, milestone markers, trend analysis, and achievement celebrations."
      },
      {
        question: "Budget and savings tracker combined functionality",
        answer: "Our budget and savings tracker combines expense tracking with savings goal management for comprehensive financial planning. Features include budget allocation, expense categorization, savings optimization, and financial health monitoring."
      },
      {
        question: "Automatic savings tracker and automated features",
        answer: "Our automatic savings tracker includes automated features for hands-free financial management. Features include automatic goal updates, smart notifications, progress calculations, and milestone celebrations."
      },
      {
        question: "Personal finance tracker and comprehensive money management",
        answer: "Our personal finance tracker provides comprehensive money management beyond just savings. Features include expense tracking, income monitoring, debt management, investment tracking, and financial reporting."
      }
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">What Is a Savings Tracking Tool?</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A savings tracking tool is a calculator that takes your savings goal, target date, and current savings, then computes the monthly contribution you need plus a real-time progress view. Unlike a basic compound-interest calculator, it&apos;s built for active goal management — adjust the contribution and watch the timeline shift, add another goal alongside the first, and prioritize when cash is short.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Common Savings Goals &amp; Realistic Timelines</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-border">
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left border-b border-border">Goal</th>
                  <th className="p-3 text-left border-b border-border">Typical amount (US, 2026)</th>
                  <th className="p-3 text-left border-b border-border">Realistic timeline</th>
                  <th className="p-3 text-left border-b border-border">Monthly to hit it</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-semibold">Emergency fund (3 months)</td><td className="p-3">$10,000–$15,000</td><td className="p-3">12 months</td><td className="p-3">$850–$1,250</td></tr>
                <tr><td className="p-3 font-semibold">Emergency fund (6 months)</td><td className="p-3">$20,000–$30,000</td><td className="p-3">24 months</td><td className="p-3">$830–$1,250</td></tr>
                <tr><td className="p-3 font-semibold">Vacation (international, 2-week)</td><td className="p-3">$5,000–$8,000</td><td className="p-3">8 months</td><td className="p-3">$625–$1,000</td></tr>
                <tr><td className="p-3 font-semibold">New car (used, reliable)</td><td className="p-3">$15,000–$25,000</td><td className="p-3">18 months</td><td className="p-3">$830–$1,390</td></tr>
                <tr><td className="p-3 font-semibold">House down payment (10%, US median)</td><td className="p-3">$42,000</td><td className="p-3">36 months</td><td className="p-3">$1,170</td></tr>
                <tr><td className="p-3 font-semibold">Wedding</td><td className="p-3">$25,000–$35,000</td><td className="p-3">24 months</td><td className="p-3">$1,040–$1,460</td></tr>
                <tr><td className="p-3 font-semibold">First-year baby costs</td><td className="p-3">$15,000–$20,000</td><td className="p-3">12 months</td><td className="p-3">$1,250–$1,670</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How to Track Multiple Savings Goals at Once</h2>
          <ul className="list-disc list-inside space-y-2 ml-2 text-muted-foreground">
            <li><strong>Prioritize ruthlessly.</strong> Most households can&apos;t fund all goals at full speed. Rank by deadline + necessity (emergency fund &gt; debt &gt; house &gt; vacation).</li>
            <li><strong>Allocate by percentage, not flat amount.</strong> If you save $1,500/month total, splitting as 50% emergency / 30% house / 20% vacation scales with raises automatically.</li>
            <li><strong>Use separate buckets.</strong> Many savings accounts (Ally, Marcus, SoFi) let you create named sub-accounts for free — visually separating goals prevents accidental spending.</li>
            <li><strong>Recalculate quarterly.</strong> Inflation, raises, surprise expenses — re-run the tracker every 3 months to adjust contributions before you fall behind.</li>
            <li><strong>Inflation-adjust long-term goals.</strong> A $42,000 down payment in dollars is $48,500 in 5 years at 3% inflation. The tool above lets you bake this in.</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">FastTools vs Other Savings Tracking Tools</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-border">
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left border-b border-border">Feature</th>
                  <th className="p-3 text-left border-b border-border text-green-600">FastTools</th>
                  <th className="p-3 text-left border-b border-border">Mint / Rocket Money</th>
                  <th className="p-3 text-left border-b border-border">NerdWallet calc</th>
                  <th className="p-3 text-left border-b border-border">Bankrate calc</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-semibold">No signup / no account link</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗ links bank</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-green-600">✓</td></tr>
                <tr><td className="p-3 font-semibold">Multi-goal tracking</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3 text-red-500">single goal</td><td className="p-3 text-red-500">single goal</td></tr>
                <tr><td className="p-3 font-semibold">Tax + inflation adjustment</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3">partial</td></tr>
                <tr><td className="p-3 font-semibold">Client-side (no data leaves browser)</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">cloud</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-green-600">✓</td></tr>
                <tr><td className="p-3 font-semibold">Priority-based goal ranking</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Free, no upsell to paid tier</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">free with paid upsell</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-green-600">✓</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Same Tool, Many Names</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li>· savings tracker / savings tracking tool</li>
            <li>· savings goal calculator</li>
            <li>· financial goal tracker</li>
            <li>· money savings calculator</li>
            <li>· monthly savings planner</li>
            <li>· multi-goal budget tracker</li>
            <li>· emergency fund calculator</li>
            <li>· house down payment savings calculator</li>
            <li>· vacation savings calculator</li>
            <li>· how much should I save each month calculator</li>
          </ul>
        </article>
      </div>
    ),

    relatedTools: [
      { name: "Compound Interest Calculator", href: "/finance-tools/compound-interest" },
      { name: "Investment Calculator", href: "/finance-tools/investment-calculator" },
      { name: "Retirement Calculator", href: "/finance-tools/retirement-calculator" },
      { name: "Retirement Planner", href: "/finance-tools/retirement-planner" },
      { name: "Debt Payoff Calculator", href: "/finance-tools/debt-payoff-calculator" },
      { name: "Net Worth Calculator", href: "/finance-tools/net-worth-calculator" },
      { name: "Home Affordability Calculator", href: "/finance-tools/home-affordability-calculator" },
      { name: "Inflation Calculator", href: "/finance-tools/inflation-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: TOOL_TITLE,
        description: TOOL_DESCRIPTION,
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/savings-tracker" }
      ]}
      toolComponent={
        <div className="p-4 rounded-lg bg-card border border-border shadow">
          <SavingsGoalTracker />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_DESCRIPTION,
        path: "/finance-tools/savings-tracker"
      }}
    />
  )
}
