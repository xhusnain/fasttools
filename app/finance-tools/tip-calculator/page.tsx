import { TipCalculator } from "@/components/tip-calculator"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Users, Receipt, Globe } from "lucide-react"
import type { Metadata } from "next"
import { getCurrentYear } from "@/lib/utils"

const TOOL_TITLE = `Tip Calculator | Free Calculate Tips & Split Bills (${getCurrentYear()})`
const TOOL_NAME = "Tip Calculator"
const TOOL_DESCRIPTION = "Free tip calculator to calculate tip amounts, split bills & find total payments. Choose tip percentage & number of people. Works worldwide."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_DESCRIPTION,
  path: "/finance-tools/tip-calculator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/tip-calculator" }
  ],
  schemaOptions: {
    name: "Tip Calculator",
    alternateName: "Restaurant Tip Calculator",
    applicationCategory: "FinanceApplication",
    featureList: [
      "Custom tip %",
      "Split per person",
      "Tax include/exclude",
      "Rounding",
      "Share totals",
      "Restaurant tips",
      "Bill splitting",
      "Gratuity calculator",
      "Group dining",
      "Mobile friendly"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  keywords: [
    "tip calculator",
    "free tip calculator",
    "restaurant tip calculator",
    "gratuity calculator",
    "tip percentage calculator",
    "how much to tip",
    "15% tip calculator",
    "18% tip calculator",
    "20% tip calculator",
    "split bill calculator",
    "bill splitter with tip",
    "tip on tax or before tax",
    "round tip and total",
    "tip per person",
    "group tip calculator",
    "bar tip calculator",
    "salon tip calculator",
    "delivery tip calculator",
    "valet tip",
    "hotel tip",
    "tax and tip calculator",
    "server tip calculator",
    "waiter tip",
    "how to calculate tip",
    "tip etiquette",
    "minimum tip guidance",
    "custom tip percentage",
    "cash vs card tip",
    "restaurant bill tip",
    "service charge vs tip",
    "tip suggestions",
    "tip chart",
    "calculate tip after discount",
    "calculate tip on subtotal",
    "tip calculator no ads",
    "free tip calculator",
    "mobile tip calculator",
    "dining calculator",
    "meal bill calculator",
    "table split calculator",
    "friends bill split",
    "large group tip",
    "tip sharing",
    "tip pooling",
    "pre-tax tip",
    "post-tax tip",
    "per-person total",
    "how much to tip delivery",
    "how much to tip hairdresser",
    "how much to tip bartender",
    "how much to tip valet",
    "tip rounding rules",
    "tip calculator app alternative",
    "tip calculator online",
    "restaurant tip calculator online",
    "gratuity calculator online",
    "tip percentage calculator online",
    "how much to tip online",
    "15% tip calculator online",
    "18% tip calculator online",
    "20% tip calculator online",
    "split bill calculator online",
    "bill splitter with tip online",
    "tip on tax or before tax online",
    "round tip and total online",
    "tip per person online",
    "group tip calculator online",
    "bar tip calculator online",
    "salon tip calculator online",
    "delivery tip calculator online",
    "valet tip online",
    "hotel tip online",
    "tax and tip calculator online",
    "server tip calculator online",
    "waiter tip online",
    "how to calculate tip online",
    "tip etiquette online",
    "minimum tip guidance online",
    "custom tip percentage online",
    "cash vs card tip online",
    "restaurant bill tip online",
    "service charge vs tip online",
    "tip suggestions online",
    "tip chart online",
    "calculate tip after discount online",
    "calculate tip on subtotal online",
    "tip calculator no ads online",
    "free tip calculator online",
    "mobile tip calculator online",
    "dining calculator online",
    "meal bill calculator online",
    "table split calculator online",
    "friends bill split online",
    "large group tip online",
    "tip sharing online",
    "tip pooling online",
    "pre-tax tip online",
    "post-tax tip online",
    "per-person total online",
    "how much to tip delivery online",
    "how much to tip hairdresser online",
    "how much to tip bartender online",
    "how much to tip valet online",
    "tip rounding rules online",
    "tip calculator app alternative online",
    "tip calculator free",
    "restaurant tip calculator free",
    "gratuity calculator free",
    "tip percentage calculator free",
    "how much to tip free",
    "15% tip calculator free",
    "18% tip calculator free",
    "20% tip calculator free",
    "split bill calculator free",
    "bill splitter with tip free",
    "tip on tax or before tax free",
    "round tip and total free",
    "tip per person free",
    "group tip calculator free",
    "bar tip calculator free",
    "salon tip calculator free",
    "delivery tip calculator free",
    "valet tip free",
    "hotel tip free",
    "tax and tip calculator free",
    "server tip calculator free",
    "waiter tip free",
    "how to calculate tip free",
    "tip etiquette free",
    "minimum tip guidance free",
    "custom tip percentage free",
    "cash vs card tip free",
    "restaurant bill tip free",
    "service charge vs tip free",
    "tip suggestions free",
    "tip chart free",
    "calculate tip after discount free",
    "calculate tip on subtotal free",
    "tip calculator no ads free",
    "free tip calculator free",
    "mobile tip calculator free",
    "dining calculator free",
    "meal bill calculator free",
    "table split calculator free",
    "friends bill split free",
    "large group tip free",
    "tip sharing free",
    "tip pooling free",
    "pre-tax tip free",
    "post-tax tip free",
    "per-person total free",
    "how much to tip delivery free",
    "how much to tip hairdresser free",
    "how much to tip bartender free",
    "how much to tip valet free",
    "tip rounding rules free",
    "tip calculator app alternative free",
    "tip calculator tool",
    "restaurant tip calculator tool",
    "gratuity calculator tool",
    "tip percentage calculator tool",
    "how much to tip tool",
    "15% tip calculator tool",
    "18% tip calculator tool",
    "20% tip calculator tool",
    "split bill calculator tool",
    "bill splitter with tip tool",
    "tip on tax or before tax tool",
    "round tip and total tool",
    "tip per person tool",
    "group tip calculator tool",
    "bar tip calculator tool",
    "salon tip calculator tool",
    "delivery tip calculator tool",
    "valet tip tool",
    "hotel tip tool",
    "tax and tip calculator tool",
    "server tip calculator tool",
    "waiter tip tool",
    "how to calculate tip tool",
    "tip etiquette tool",
    "minimum tip guidance tool",
    "custom tip percentage tool",
    "cash vs card tip tool",
    "restaurant bill tip tool",
    "service charge vs tip tool",
    "tip suggestions tool",
    "tip chart tool",
    "calculate tip after discount tool",
    "calculate tip on subtotal tool",
    "tip calculator no ads tool",
    "free tip calculator tool",
    "mobile tip calculator tool",
    "dining calculator tool",
    "meal bill calculator tool",
    "table split calculator tool",
    "friends bill split tool",
    "large group tip tool",
    "tip sharing tool",
    "tip pooling tool",
    "pre-tax tip tool",
    "post-tax tip tool",
    "per-person total tool",
    "how much to tip delivery tool",
    "how much to tip hairdresser tool",
    "how much to tip bartender tool",
    "how much to tip valet tool",
    "tip rounding rules tool",
    "tip calculator app alternative tool",
    "calculate tip online",
    "tip calculator online free",
    "bill and tip calculator",
    "split bill tip calculator",
    "simple tip calculator",
    "tip and total calculator",
    "reverse tip calculator",
    "tip calculator app",
    "smart tip calculator",
    "tip calculator with split option",
    "service tip calculator",
    "waiter tip calculator",
    "tip calculator with tax",
    "tip calculator for restaurants",
    "tip calculator for android",
    "tip calculator for iphone",
    "calculate total with tip",
    "how to calculate tip percentage",
    "online tip calculator with rounding",
    "fasttools tip calculator"
  ]
}

export default function TipCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    overview: `Calculate restaurant tips, gratuity, and split bills instantly. Our free tip calculator supports customizable percentages, tax options, and bill splitting. Perfect for dining, delivery, and service industries. Features simple tip calculator, tip percentage calculator, bill and tip calculator, and smart tip calculator with split options.`,

    features: [
      "Customizable Tip Percentages: Set any tip percentage from 0% to 100% with quick-select buttons for common rates.",
      "Bill Splitting & Group Calculations: Split bills evenly among any number of people with automatic per-person calculations.",
      "Tax Integration & Rounding Options: Handle tax-inclusive and tax-exclusive calculations with precision rounding options.",
      "Multi-Industry Applications: Works for restaurants, bars, delivery services, salons, hotels, and other service industries.",
      "Mobile & Advanced Features: Mobile-friendly design, tax and tip calculations, and reverse tip calculations."
    ],

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
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" },
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" }
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
