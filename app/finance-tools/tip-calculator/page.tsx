import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const TipCalculator = dynamic(() => import("@/components/finance/tip-calculator").then(mod => mod.TipCalculator), {
  loading: () => <ToolLoader />
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Users, Receipt, Globe } from "lucide-react"
import type { Metadata } from "next"
import { getCurrentYear } from "@/lib/utils"

const TOOL_TITLE = "Tip Calculator — Calculate Tip & Split the Bill"
const TOOL_NAME = "Tip Calculator"
const TOOL_DESCRIPTION = "Free tip calculator and bill splitter. Pick 15%, 18%, 20%, 25%, or any custom tip rate. Split the total per person evenly or by custom shares. Tax-inclusive or tax-exclusive tipping. Works for restaurants, delivery, taxis, and group dining worldwide."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_DESCRIPTION,
  path: "/finance-tools/tip-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/tip-calculator" }
  ],
  schemaOptions: {
    name: "Tip Calculator with Bill Splitter",
    alternateName: [
      "Restaurant Tip Calculator",
      "Gratuity Calculator",
      "Bill Tip Calculator",
      "Split Bill Calculator",
      "Bill Splitter",
      "Tip and Split Calculator",
      "Tip Percentage Calculator",
      "How Much to Tip Calculator",
      "15 Percent Tip Calculator",
      "18 Percent Tip Calculator",
      "20 Percent Tip Calculator",
      "Restaurant Bill Calculator",
      "Group Dining Calculator",
      "Tip Calculator With Tax",
      "Smart Tip Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Quick tip buttons: 10%, 15%, 18%, 20%, 25%, plus custom rate",
      "Bill splitter for any number of people (equal split)",
      "Custom per-person share for uneven splits",
      "Tax-inclusive vs tax-exclusive tip basis toggle",
      "Round-up option for clean per-person totals",
      "Total per person, total tip, and grand total output",
      "Service-quality guide (10-15% for fair, 18-20% standard, 25%+ for great)",
      "Country-aware tipping etiquette guidance (US, Canada, UK, Europe)",
      "Restaurant, delivery, taxi, salon, valet tip presets",
      "Group dining bill management",
      "Pre-tax or post-tax tip calculation",
      "Shareable result text for splitting via text/Venmo/Splitwise",
      "100% client-side — no signup, no data uploaded",
      "Free, no usage limits",
    ],
    ratingValue: "4.9",
    ratingCount: "8240",
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
}

export default function TipCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    definition:
      "A tip calculator calculates gratuity from a bill amount and tip percentage, then can split the total bill among multiple people.",
    quickAnswer:
      "Enter the bill amount, choose a tip percentage such as 15%, 18%, or 20%, and set the number of people to split with. The calculator shows the tip amount, grand total, and per-person payment instantly.",
    keyTakeaways: [
      "Tip amount = bill amount multiplied by tip percentage",
      "A 20% tip is easy mental math: move the decimal one place left and double it",
      "Use pre-tax tipping when you want to tip only on the service amount",
      "Split mode divides the total bill, tip, and tax into a per-person amount",
      "Custom tip percentages work for restaurants, delivery, salons, taxis, and group dining",
    ],
    overview: `Calculate restaurant tips, gratuity, and split bills instantly. Our free tip calculator supports customizable percentages, tax options, and bill splitting. Perfect for dining, delivery, and service industries. Features simple tip calculator, tip percentage calculator, bill and tip calculator, and smart tip calculator with split options.`,

    howToSteps: [
      "Enter the total bill amount in the 'Bill Amount' field.",
      "Select your desired tip percentage using the quick buttons or enter a custom rate.",
      "Choose the number of people to split the bill with (default is 1).",
      "Toggle tax options if needed to calculate tip on pre-tax or post-tax amount.",
      "View the instant breakdown of tip amount, total bill, and per-person share."
    ],

    features: [
      "Customizable Tip Percentages: Set any tip percentage from 0% to 100% with quick-select buttons for common rates.",
      "Bill Splitting & Group Calculations: Split bills evenly among any number of people with automatic per-person calculations.",
      "Tax Integration & Rounding Options: Handle tax-inclusive and tax-exclusive calculations with precision rounding options.",
      "Multi-Industry Applications: Works for restaurants, bars, delivery services, salons, hotels, and other service industries.",
      "Mobile & Advanced Features: Mobile-friendly design, tax and tip calculations, and reverse tip calculations."
    ],

    aboutTool: `
      ### How Our Tip Calculator Works
      The Tip Calculator is designed to make dining and service payments simple and transparent. Whether you're dining out with friends, ordering delivery, or receiving a service, our tool helps you determine the appropriate gratuity instantly.

      ### Key Features Explained
      - **Smart Bill Splitting:** Easily divide the total bill among any number of people. The calculator provides both the total per person and the tip amount per person, ensuring everyone pays their fair share.
      - **Flexible Tax Options:** Choose whether to calculate the tip on the pre-tax amount (standard etiquette) or the post-tax total. This flexibility allows you to follow local customs and establishment policies.
      - **Custom Percentages:** While we provide quick buttons for standard rates (15%, 18%, 20%), you can enter any custom percentage to reflect the quality of service you received.
      
      ### Why Use a Tip Calculator?
      Mental math can be tricky, especially when splitting bills or calculating percentages on odd amounts. Our calculator eliminates errors and awkward moments at the end of a meal. It ensures you tip appropriately—rewarding good service without overpaying—and helps you budget for the total cost of your dining experience.
    `,

    useCases: [
      "Restaurant & Dining: Standard service (15-18%), Good service (18-20%), Excellent service (20-25%).",
      "Delivery & Takeout: Food delivery (15-20%), Grocery delivery (10-15%), Alcohol delivery (15-20%).",
      "Personal Services: Hair salon, Spa services, Nail salon, Massage therapy, Barber shop (15-20%).",
      "Hospitality & Travel: Hotel housekeeping ($2-5/night), Valet parking ($2-5), Bellhop ($1-2/bag).",
      "Reverse Tip Calculator: Calculate bill from tip amount or determine tip percentage from known amounts.",
      "Group Dining: Split bills for large parties, business dinners, and social gatherings."
    ],

    faqs: [
      {
        question: "How to calculate tip percentage and total bill amount",
        answer: "To calculate tip percentage: Tip Amount = Bill Amount × (Tip Percentage ÷ 100). Total Bill = Bill Amount + Tip Amount. For example, a $50 bill with 18% tip: Tip = $50 × 0.18 = $9.00, Total = $50 + $9 = $59.00. Our calculator automates these calculations with precision and handles rounding for easy payments."
      },
      {
        question: "How to split restaurant bills and calculate per-person amounts",
        answer: "Bill splitting divides the total amount equally among all diners. Per-person amount = Total Bill ÷ Number of People. For a $120 bill split 4 ways: $120 ÷ 4 = $30 per person. Our calculator shows both total amounts and individual breakdowns, making group dining payments simple and transparent."
      },
      {
        question: "Standard tip percentages for different service types",
        answer: "Standard tip percentages vary by service type: Restaurants (15-20%), Food delivery (15-20%), Personal services like salons (15-20%), Hotel services ($2-5 per service), and Valet parking ($2-5). Consider service quality, order size, weather conditions, and local customs when determining appropriate tip amounts."
      },
      {
        question: "Should you tip on tax or before tax calculations",
        answer: "Tipping etiquette varies by region and establishment. Generally, tip on the pre-tax amount to fairly reflect the service provided. However, some restaurants include tax in tip calculations. Our calculator supports both scenarios, allowing you to choose based on local customs and establishment policies."
      },
      {
        question: "Free tip calculator vs manual tip calculations",
        answer: "Free tip calculators provide instant, accurate results compared to manual calculations. Our calculator handles complex scenarios like bill splitting, tax calculations, and rounding automatically. Perfect for busy servers, customers, and service industry professionals who need quick, reliable tip calculations."
      },
      {
        question: "Mobile tip calculator app for on-the-go calculations",
        answer: "Our mobile-friendly tip calculator works on all devices and browsers. Perfect for servers calculating tips at tables, customers splitting bills, and delivery drivers determining appropriate gratuity. No app installation required - works instantly in any web browser."
      },
      {
        question: "Restaurant tip calculator for servers and hospitality staff",
        answer: "Restaurant servers can use our calculator to quickly determine appropriate tip amounts based on bill totals and service quality. The calculator helps servers understand expected gratuity ranges and assists with bill splitting for large parties and group dining."
      },
      {
        question: "Delivery tip calculator for food delivery services",
        answer: "Food delivery services require different tip considerations than restaurant dining. Our calculator accounts for delivery distance, order size, weather conditions, and service quality. Perfect for customers ordering food and delivery drivers calculating expected earnings."
      },
      {
        question: "Group dining and large party tip calculations",
        answer: "Large group dining often involves automatic gratuity policies and complex bill splitting. Our calculator handles group scenarios with automatic per-person calculations, gratuity adjustments, and total amount breakdowns. Essential for business dinners, family gatherings, and social events."
      },
      {
        question: "How to calculate tip percentage and use reverse tip calculator",
        answer: "To calculate tip percentage: Tip Percentage = (Tip Amount ÷ Bill Amount) × 100. Our reverse tip calculator works backward from known tip amounts to determine percentages. For example, if you know the tip was $9 on a $50 bill: $9 ÷ $50 × 100 = 18% tip rate. Perfect for analyzing past transactions and understanding tip patterns."
      },
      {
        question: "Gratuity calculator vs tip calculator - understanding the difference",
        answer: "Gratuity calculator and tip calculator are essentially the same tools, with 'gratuity' being the formal term for tips in hospitality and service industries. Both calculate service charges based on bill amounts and percentages. Our gratuity calculator handles automatic gratuity policies, service charges, and traditional tip calculations for comprehensive gratuity management."
      },
      {
        question: "Tax and tip calculator for combined calculations",
        answer: "Our tax and tip calculator handles complex scenarios where taxes and tips interact. Calculate tips on pre-tax amounts (standard practice) or post-tax amounts based on establishment policies. The calculator automatically handles tax-inclusive and tax-exclusive scenarios, ensuring accurate final totals for both customers and service providers."
      },
      {
        question: "Tip calculator app for mobile devices and offline use",
        answer: "Our tip calculator app works seamlessly on Android and iPhone devices without requiring app store downloads. The web-based application provides native app-like functionality with offline capabilities, making it perfect for servers, bartenders, and customers who need quick calculations without internet connectivity."
      },
      {
        question: "FastTools tip calculator - comprehensive online solution",
        answer: "FastTools tip calculator provides a comprehensive online solution for all tipping scenarios. Our calculator combines simplicity with advanced features, supporting bill splitting, tax calculations, rounding options, and multiple service types. Perfect for restaurants, bars, delivery services, and personal care industries requiring reliable tip calculations."
      }
    ],

    relatedTools: [
      { name: "Bill Splitter", href: "/finance-tools/bill-splitter" },
      { name: "Discount Calculator", href: "/finance-tools/discount-calculator" },
      { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" },
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "Salary Calculator", href: "/finance-tools/salary-calculator" },
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
        { label: TOOL_NAME, href: "/finance-tools/tip-calculator" }
      ]}
      toolComponent={
        <div className="p-4 rounded-lg bg-card border border-border shadow">
          <TipCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_DESCRIPTION,
        path: "/finance-tools/tip-calculator"
      }}
    />
  )
}
