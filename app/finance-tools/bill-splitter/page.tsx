import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const BillSplitter = dynamic(() => import("@/components/finance/bill-splitter").then(mod => mod.BillSplitter), {
  loading: () => <ToolLoader />
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Target, TrendingUp, BarChart3, Receipt, Award, Users, DollarSign, Percent, Zap, FileText, HelpCircle, ExternalLink, PiggyBank, CreditCard } from "lucide-react"
import type { Metadata } from "next"

const TOOL_TITLE = "Bill Splitter — Split Restaurant & Group Bills Fairly"
const TOOL_NAME = "Bill Splitter"
const TOOL_META_DESC = "Free bill splitter for restaurants, groups, and shared expenses. Split evenly, by items, or by custom share. Auto-adds tip and tax. Generates a per-person total showing exactly who owes what. Perfect for dining, travel, roommates, and group trips."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/bill-splitter",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/bill-splitter" }
  ],
  schemaOptions: {
    name: "Bill Splitter with Tip & Tax Math",
    alternateName: [
      "Split Bill Calculator",
      "Group Expense Calculator",
      "Restaurant Bill Splitter",
      "Dutch Pay Calculator",
      "Group Dining Calculator",
      "Roommate Bill Splitter",
      "Travel Expense Splitter",
      "Shared Expense Calculator",
      "Bill Split Online",
      "Pay-Your-Share Calculator",
      "Fair Split Calculator",
      "Splitwise Alternative",
      "Group Trip Cost Splitter",
      "Per-Person Bill Calculator",
      "Itemized Bill Splitter",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Even split across any number of people",
      "Itemized split — each person pays only for what they ordered",
      "Custom share weights for uneven splits",
      "Auto tip calculation (15/18/20/25% or custom)",
      "Auto tax inclusion / exclusion toggle",
      "Per-person total breakdown",
      "Who-owes-whom summary",
      "Receipt-style result for sharing via text / Venmo / Splitwise",
      "Round-up for clean per-person totals",
      "Currency-agnostic — works in USD, EUR, GBP, etc.",
      "Multi-bill scenarios (group trip with multiple meals)",
      "100% client-side — no signup, no data uploaded",
      "Free, no usage limits",
    ],
    ratingValue: "4.9",
    ratingCount: "7180",
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function BillSplitterPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    definition:
      "A bill splitter divides a shared bill among people, including tax, tip, itemized shares, custom shares, and per-person totals.",
    quickAnswer:
      "Enter the bill amount, number of people, tax, and tip to split a restaurant or shared expense fairly. Use equal split for simple groups or itemized/custom split when people ordered different things.",
    keyTakeaways: [
      "Equal split divides the full bill, tax, and tip by the number of people",
      "Itemized split is fairer when people ordered different items",
      "Tip and tax should be included before calculating each person's final share",
      "Round-up mode makes cash or mobile-payment settlement easier",
      "Use the shareable breakdown so everyone can see exactly who owes what",
    ],
    overview: "Free bill splitter calculator for restaurants, groups, and shared expenses. Split bills evenly or by items, calculate tips and tax, track who owes what. Perfect for friends, roommates, and travel groups. No cost, instant results.",

    howToSteps: [
      "Enter Bill Details: Input the total bill amount, including any service charges or additional fees.",
      "Select Split Method: Choose between equal split, itemized split, or percentage-based split depending on your group's preference.",
      "Add Participants: Enter the number of people sharing the bill or add their names for personalized breakdowns.",
      "Include Tip & Tax: Add tip percentage and tax rate to ensure the final calculation covers all costs.",
      "Review & Share: View the detailed breakdown per person and share the results via text or email."
    ],

    features: [
      "Smart Bill Splitting: Intelligent bill splitter supports equal splits, itemized splits, and percentage-based splitting.",
      "Tip & Tax Integration: Automatically calculate tips and taxes with our integrated calculator.",
      "Group Management: Manage multiple people and complex splitting scenarios with ease.",
      "Detailed Breakdowns: Get comprehensive breakdowns showing original bill, tips, taxes, and per-person totals.",
      "Smart Bill Splitter Online: AI-powered algorithms to analyze splitting scenarios and suggest fair distributions.",
      "Progress-Based Expense Tracker: Visual progress indicators, spending patterns, and fairness metrics.",
      "Multi-Group Bill Calculator: Manage multiple groups and splitting scenarios simultaneously.",
      "Bill Splitter with Gamification: Earn points for fair splitting, unlock achievement badges, and compete with friends."
    ],

    useCases: [
      "Split Bills with Friends: Effortless splitting for dinner outings, group activities, and shared expenses.",
      "Expense Sharing App: Track shared costs, manage group finances, and maintain transparency.",
      "Shared Expense Tracker: Monitor and manage all shared expenses for roommates and travel groups.",
      "Split Restaurant Bill: Handle complex restaurant bills with itemized splitting, tips, and tax.",
      "Calculate Who Owes What: Crystal-clear breakdowns showing exactly who owes what.",
      "Fair Bill Splitting: Ensure equitable distribution of expenses with weighted splitting and proportional calculations."
    ],

    aboutTool: (
      <div className="space-y-6">
        <div className="p-4 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            Bill Splitting Templates & Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-sm mb-1">Restaurant & Dining Tools</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Restaurant Bill Splitter</li>
                <li>• Bar Tab Splitter</li>
                <li>• Group Dining Calculator</li>
                <li>• Business Meal Splitter</li>
                <li>• Team Lunch Calculator</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">Living & Household Tools</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Roommate Bill Splitter</li>
                <li>• Utility Bill Splitter</li>
                <li>• Rent Splitter Calculator</li>
                <li>• Grocery Bill Splitter</li>
                <li>• Household Bill Splitter</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">Travel & Events</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Travel Expense Splitter</li>
                <li>• Wedding Expense Splitter</li>
                <li>• Party Expense Splitter</li>
                <li>• Group Activity Splitter</li>
                <li>• Vacation Expense Splitter</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">Advanced Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Receipt Scanner Splitter</li>
                <li>• Photo Receipt Splitter</li>
                <li>• Automatic Bill Splitter</li>
                <li>• Custom Split Calculator</li>
                <li>• Fair Share Calculator</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Calculator className="h-4 w-4 text-primary" />
            Receipt Splitter: Split Bills and Receipts Easily
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Our receipt splitter helps you split restaurant bills, receipts, and invoices quickly and accurately among multiple people. The receipt splitter tool allows you to divide bills evenly, split by item, or calculate custom splits based on what each person ordered. When using the receipt splitter, you can input the total bill amount, add tax and tip, and divide it among your group with precision. The receipt splitter is perfect for dining out with friends, splitting household expenses, dividing group purchases, and managing shared costs. Use our receipt splitter to eliminate confusion when splitting bills, ensuring everyone pays their fair share without complicated calculations or disputes.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The receipt splitter provides detailed breakdowns showing each person's share, including tax and tip calculations, making it easy to understand exactly what everyone owes. Whether you're splitting a restaurant receipt, dividing utility bills, or sharing costs for group activities, our receipt splitter makes bill splitting simple and accurate. The receipt splitter tool is free to use and works on any device, making it convenient to split bills whenever you need it, whether at restaurants, cafes, or after group purchases.
          </p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "How to split a bill fairly with friends and roommates?",
        answer: "Fair bill splitting requires clear communication, agreed-upon rules, and the right tools. Our advanced bill splitter supports equal splits, itemized splits, and percentage-based splitting to ensure everyone pays their fair share without awkward conversations."
      },
      {
        question: "Restaurant bill splitter and dining expense management",
        answer: "Our restaurant bill splitter handles complex dining scenarios with multiple people, different orders, and varying consumption. Features tip calculation, tax handling, and itemized splitting for fair restaurant expense management."
      },
      {
        question: "Roommate expense tracker and household bill splitting",
        answer: "Our roommate expense tracker manages shared living costs including rent, utilities, groceries, and household expenses. Features automatic calculations, payment tracking, and detailed breakdowns for transparent roommate financial management."
      },
      {
        question: "Travel expense splitter and vacation cost sharing",
        answer: "Our travel expense splitter handles complex vacation costs including accommodation, transportation, meals, and activities. Features group management, expense categories, and automatic calculations for stress-free travel expense sharing."
      },
      {
        question: "Tip calculator and gratuity splitting",
        answer: "Our integrated tip calculator handles different tip percentages, service charges, and gratuity splitting. Features quick tip buttons, custom percentages, and automatic per-person tip calculations for any dining situation."
      },
      {
        question: "Dutch pay calculator and equal expense splitting",
        answer: "Our Dutch pay calculator ensures equal expense splitting for group activities. Features automatic calculations, fair share algorithms, and detailed breakdowns to eliminate confusion and ensure everyone pays their fair share."
      },
      {
        question: "Group expense calculator and shared cost management",
        answer: "Our group expense calculator manages complex shared costs across multiple people and expense types. Features person assignment, custom percentages, and comprehensive tracking for transparent group financial management."
      },
      {
        question: "Smart bill splitter online and AI-powered expense division",
        answer: "Our smart bill splitter online uses advanced algorithms to analyze splitting scenarios, suggest fair distributions, and optimize for different group dynamics. Features intelligent recommendations and adaptive splitting strategies for maximum fairness."
      },
      {
        question: "Progress-based expense tracker and spending analytics",
        answer: "Our progress-based expense tracker provides visual insights into group spending patterns, fairness metrics, and balance indicators. Features spending analytics, trend analysis, and recommendations for improved expense management."
      },
      {
        question: "Multi-group bill calculator and comprehensive expense management",
        answer: "Our multi-group bill calculator manages expenses across different friend groups, living situations, and activity types. Features group separation, expense categorization, and comprehensive tracking for complex social financial management."
      },
      {
        question: "Bill splitter with gamification and social features",
        answer: "Our gamified bill splitter makes expense management engaging and fun. Features achievement badges, progress tracking, and social challenges to encourage fair splitting and responsible financial behavior among friends and roommates."
      },
      {
        question: "Expense habit tracker and financial discipline",
        answer: "Our expense habit tracker helps build consistent splitting habits and financial discipline. Features habit monitoring, reminder systems, and progress tracking to maintain fair expense management routines."
      },
      {
        question: "How do I use the Bill Splitter Calculator effectively?",
        answer: "Using our bill splitter calculator is simple: enter the total bill amount, select the number of people, choose your tip percentage, and click 'Split Bill'. The calculator will instantly show each person's share, including the original bill portion and tip amount. Perfect for restaurants, group activities, and shared expenses."
      },
      {
        question: "Can I split bills unequally with different amounts per person?",
        answer: "Yes! Our advanced bill splitter supports unequal splitting by allowing you to assign specific amounts or percentages to each participant. This is perfect for situations where people ordered different items or have different consumption levels. Features custom percentage inputs and weighted splitting algorithms."
      },
      {
        question: "Does the calculator account for tips and taxes automatically?",
        answer: "Absolutely! Our bill splitter automatically calculates tips and taxes based on your input. Simply enter the tip percentage (or use our quick tip buttons), and the calculator will distribute the tip and tax amounts fairly among all participants. Features automatic per-person tip calculations."
      },
      {
        question: "Is the Bill Splitter Calculator completely free to use?",
        answer: "Yes, our bill splitter calculator is 100% free with no hidden costs, registration requirements, or usage limits. Access all features including unequal splitting, tip calculations, and detailed breakdowns without any charges. Perfect for students, friends, and anyone needing fair bill splitting."
      },
      {
        question: "Can I save and share my bill splitting calculations?",
        answer: "While our calculator doesn't store data permanently, you can easily copy the results using our 'Copy Results' button and share them via text, email, or messaging apps. This ensures transparency and eliminates confusion about who owes what amount."
      },
      {
        question: "How do I handle shared and individual expenses in one bill?",
        answer: "Our bill splitter handles mixed expenses perfectly. For shared items, divide the cost equally among all participants. For individual items, assign them to specific people. The calculator will automatically compute each person's total share, combining both shared and individual expenses."
      },
      {
        question: "Can I use the calculator for large groups and events?",
        answer: "Yes! Our bill splitter supports any number of people, from small groups of 2-4 to large events with 20+ participants. Features optimized calculations for large groups, clear breakdowns, and easy-to-read results. Perfect for weddings, corporate events, and large gatherings."
      },
      {
        question: "Does the tool support different currencies and international use?",
        answer: "Our bill splitter works with any currency - simply enter amounts in your local currency. While the display shows dollar signs, you can use any currency symbol mentally. We're working on multi-currency support for future updates to make international use even easier."
      },
      {
        question: "How accurate is the Bill Splitter Calculator for complex splitting scenarios?",
        answer: "Our calculator uses precise algorithms to ensure 100% accuracy in all splitting scenarios. Features decimal precision, rounding options, and error-free calculations. Whether splitting equally, by percentage, or itemized, you can trust our calculator for accurate and fair results every time."
      },
      {
        question: "Is there a mobile app version available for on-the-go splitting?",
        answer: "Our bill splitter is fully optimized for mobile browsers and works perfectly on smartphones and tablets. While we don't have a dedicated app yet, our mobile-responsive design provides the same functionality as a native app. A dedicated mobile app is in development for enhanced convenience."
      }
    ],

    relatedTools: [
      { name: "Tip Calculator", href: "/finance-tools/tip-calculator" },
      { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { name: "Discount Calculator", href: "/finance-tools/discount-calculator" },
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" },
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Bill Splitter — Split Restaurant & Group Bills Fairly",
        description: "Split bills evenly, by items, or by custom share. Auto-adds tip and tax. Shows per-person total and who-owes-whom summary. Perfect for restaurants, roommates, travel groups, and shared expenses.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/bill-splitter" }
      ]}
      toolComponent={
        <div className="p-4 rounded-lg bg-card border border-border shadow">
          <BillSplitter />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/bill-splitter"
      }}
    />
  )
}
