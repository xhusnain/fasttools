import { InvoiceGenerator } from "@/components/invoice-generator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Invoice Generator — Create Professional Invoices Online | SmartToolboxes",
  description:
    "Create professional invoices in minutes. Add items, taxes, discounts, currency, and notes. Download or print. No login required.",
  keywords: [
    "invoice generator",
    "free invoice maker",
    "invoice template",
    "professional invoice",
    "freelance invoice",
    "business invoice",
    "pdf invoice generator",
    "invoice with tax",
    "invoice with discount",
    "invoice currency",
    "download invoice pdf",
    "print invoice",
    "invoice number format",
    "client invoice",
    "service invoice",
    "product invoice",
    "hourly invoice",
    "fixed fee invoice",
    "invoice terms",
    "payment due date",
    "invoice notes",
    "logo on invoice",
    "invoice branding",
    "invoice totals",
    "subtotal tax total",
    "invoice fields",
    "bill to ship to",
    "invoice preview",
    "send invoice",
    "email invoice",
    "small business invoice",
    "startup invoice",
    "self employed invoice",
    "independent contractor invoice",
    "consulting invoice",
    "agency invoice",
    "no login invoice tool",
    "free invoice generator",
    "online invoice maker"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/invoice-generator" },
  openGraph: {
    title: "Free Invoice Generator — Professional Online Invoices",
    description: "Add items, taxes, discounts, and branding. Download or print instantly.",
    url: "https://www.fasttools.store/finance-tools/invoice-generator",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Free Invoice Generator", description: "Create professional invoices in minutes." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Invoice Generator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/finance-tools/invoice-generator",
      description:
        "Create, preview, and download invoices with taxes, discounts, currency, and branding.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Items & taxes", "Discounts", "Currency", "Branding", "PDF download"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function InvoiceGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Invoice Generator", href: "/finance-tools/invoice-generator" },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Free Invoice Generator — Professional Online Invoices</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">Add items, taxes, and discounts; set currency; then download or print instantly.</p>
        </div>

        <AdSpace slot="content-top" className="mb-6 h-24" />

        <InvoiceGenerator />

        <AdSpace slot="content-bottom" className="mt-6 h-24" />

        <div className="mt-10 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-foreground">How to Create an Invoice</h2>
          <h3 className="text-xl font-semibold mb-2 text-foreground">1) Add Business and Client Details</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Enter your company details, logo, and contact info; add client billing details.</li>
            <li>Set invoice number and issue/due dates.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Add Line Items, Tax, and Discounts</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Add description, quantity, rate; choose tax and optional discount.</li>
            <li>Pick currency and review subtotal, tax, and total.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Professional Invoicing Tips</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Use clear descriptions and consistent invoice numbering.</li>
            <li>Define payment terms and late fee policies.</li>
            <li>Include bank or payment links for faster settlement.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Finance Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/finance-tools/paypal-fee">PayPal Fee Calculator</Link></li>
            <li><Link href="/finance-tools/discount-calculator">Discount Calculator</Link></li>
            <li><Link href="/finance-tools/tip-calculator">Tip Calculator</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
