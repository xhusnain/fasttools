import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const InvoiceGenerator = dynamic(() => import("@/components/finance/invoice-generator").then(mod => mod.InvoiceGenerator), {
  loading: () => <ToolLoader />
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { Code, Globe, Calculator, ArrowRight, FileText, DollarSign, Percent, Users } from "lucide-react"
import type { Metadata } from "next"

const TOOL_TITLE = "Invoice Generator - Create Professional Invoices Free"
const TOOL_NAME = "Invoice Generator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Create professional invoices in 15+ languages and 200+ currencies. Auto tax, logo upload, instant PDF download — free, secure, and no sign-up needed.",
  path: "/finance-tools/invoice-generator",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/invoice-generator" }
  ],
  schemaOptions: {
    name: "Invoice Generator – Create Global Invoices",
    alternateName: "Free Invoice Maker",
    applicationCategory: "FinanceApplication",
    featureList: [
      "15 languages support",
      "200+ currencies",
      "Items & taxes",
      "Discounts",
      "Currency conversion",
      "Branding",
      "PDF download",
      "Professional invoices",
      "Business invoices",
      "Freelance invoices",
      "Tax calculations",
      "Client management",
      "Multi-language invoices",
      "International currencies",
      "Logo upload",
      "Payment terms"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function InvoiceGeneratorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    overview: "Create professional invoices in 15+ languages and 200+ currencies. Auto tax, logo upload, instant PDF download — free, secure, and no sign-up needed. Perfect for freelancers, small businesses, and agencies worldwide.",

    features: [
      "Professional Multi-Language Invoice Generator: Create business-ready invoices in English, Spanish, French, German, Chinese, Arabic, Portuguese, Russian, Japanese, Korean, Hindi, Italian, Turkish, Polish, and Dutch.",
      "200+ International Currencies Supported: Create invoices in any currency including USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, KRW, SGD, HKD, THB, MYR, PHP, VND, PKR, BDT, LKR, NPR.",
      "Automatic Multi-Language Calculations: Automatic tax calculations, discount applications, and currency conversion ensure accurate totals every time.",
      "Professional Multi-Language Templates: Clean, professional invoice templates suitable for freelancers, small businesses, and agencies worldwide."
    ],

    howToSteps: [
      "Select Language & Currency: Choose from 15 languages and 200+ currencies. Enter your company details, logo, and contact information. Add client billing details, invoice number, and set issue/due dates.",
      "Multi-Currency Line Items & Pricing: Add detailed service descriptions in your selected language, quantities, rates in your chosen currency, and choose appropriate tax rates. Apply discounts if needed."
    ],

    faqs: [
      {
        question: "What makes a professional multi-language invoice and how do I create one?",
        answer: "A professional multi-language invoice includes clear business information in your chosen language, detailed line items, accurate tax calculations in your selected currency, payment terms, and professional formatting. Our free invoice generator creates business-ready invoices with automatic calculations, customizable templates, and PDF export capabilities."
      },
      {
        question: "How do I calculate taxes and discounts on multi-currency invoices accurately?",
        answer: "Our invoice generator automatically calculates taxes and discounts based on your specifications for all supported currencies. For tax calculations, enter the appropriate tax rate and the system applies it to the subtotal. Discounts can be applied as percentages or fixed amounts. All calculations are performed locally in your browser."
      },
      {
        question: "What are the best practices for invoice numbering and payment terms?",
        answer: "Effective invoice numbering uses consistent formats like INV-2024-001 or001 for easy tracking. Payment terms should be clear and specific: 'Net 30', 'Due on receipt', or '2/10 Net 30'. Include late payment policies and accepted payment methods. Our generator includes templates for common payment terms."
      },
      {
        question: "How can I customize invoices for different clients and business types?",
        answer: "Our invoice generator offers extensive customization options. Freelancers can use simple templates with hourly rates. Small businesses can add logos and detailed service breakdowns. Agencies can include client-specific branding and milestone-based billing. Templates can be saved and reused for consistent branding."
      },
      {
        question: "Is the invoice generator secure and does it protect my business data?",
        answer: "Our invoice generator prioritizes security and privacy by operating entirely within your browser. All invoice creation, calculations, and data processing happen locally on your device. No sensitive business or client information is transmitted to external servers."
      },
      {
        question: "What file formats are available and how do I share invoices with clients?",
        answer: "Our invoice generator creates professional PDF invoices that are universally compatible and print-ready. PDF format ensures consistent appearance across all devices. Invoices can be downloaded instantly, saved locally, or printed directly from the browser."
      }
    ],

    aboutTool: `
      ### Professional Invoice Generator
      Our Invoice Generator is a powerful, free online tool designed to help freelancers, small business owners, and contractors create professional invoices in minutes. With support for over 15 languages and 200+ currencies, it's the perfect solution for global business needs.

      ### Key Features
      - **Global Currency Support:** Create invoices in USD, EUR, GBP, JPY, and hundreds of other currencies.
      - **Multi-Language Interface:** Generate invoices in your client's native language for better communication.
      - **Automatic Calculations:** Let the tool handle tax, discounts, and subtotal calculations automatically.
      - **Secure & Private:** All data is processed locally in your browser - no sensitive information is stored on our servers.
      - **Professional Templates:** Choose from clean, modern designs that make your business look professional.
    `,

    relatedTools: [
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
      { name: "Discount Calculator", href: "/finance-tools/discount-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Professional Invoice Generator",
        description: "Create professional invoices in 15+ languages and 200+ currencies. Auto tax, logo upload, instant PDF download — free, secure, and no sign-up needed.",
        titleSize: "large",
        descriptionSize: "medium",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/invoice-generator" }
      ]}
      toolComponent={
        <div className="p-4 rounded-lg bg-card border border-border shadow">
          <InvoiceGenerator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Create professional invoices in 15+ languages and 200+ currencies. Auto tax, logo upload, instant PDF download — free, secure, and no sign-up needed.",
        path: "/finance-tools/invoice-generator"
      }}
    />
  )
}
