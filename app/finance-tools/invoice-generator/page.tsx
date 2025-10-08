import { InvoiceGenerator } from "@/components/invoice-generator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Invoice Generator | Create Professional Invoices Online | FastTools",
  description:
    "Create professional invoices in minutes. Add items, taxes, discounts, currency, and notes. Download or print. No login required.",
  keywords: [
    // Primary Keywords (20)
    "invoice generator",
    "free invoice generator",
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
    
    // Secondary Keywords (20)
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
    "online invoice maker",
    "invoice generator online",
    
    // Long-tail Keywords (20)
    "free online invoice generator",
    "best invoice generator online",
    "invoice generator with live preview",
    "free invoice generator tool online",
    "online invoice generator free",
    "invoice generator online free",
    "free invoice maker free online",
    "invoice template free online",
    "professional invoice free online",
    "freelance invoice free online",
    "business invoice free online",
    "pdf invoice generator free online",
    "invoice with tax free online",
    "invoice with discount free online",
    "invoice currency free online",
    "download invoice pdf free online",
    "print invoice free online",
    "invoice number format free online",
    "client invoice free online",
    "service invoice free online",
    
    // Additional SEO Keywords
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
    "online invoice maker",
    "invoice generator online",
    "free invoice maker online",
    "invoice template online",
    "professional invoice online",
    "freelance invoice online",
    "business invoice online",
    "pdf invoice generator online",
    "invoice with tax online",
    "invoice with discount online",
    "invoice currency online",
    "download invoice pdf online",
    "print invoice online",
    "invoice number format online",
    "client invoice online",
    "service invoice online",
    "product invoice online",
    "hourly invoice online",
    "fixed fee invoice online",
    "invoice terms online",
    "payment due date online",
    "invoice notes online",
    "logo on invoice online",
    "invoice branding online",
    "invoice totals online",
    "subtotal tax total online",
    "invoice fields online",
    "bill to ship to online",
    "invoice preview online",
    "send invoice online",
    "email invoice online",
    "small business invoice online",
    "startup invoice online",
    "self employed invoice online",
    "independent contractor invoice online",
    "consulting invoice online",
    "agency invoice online",
    "no login invoice tool online",
    "free invoice generator online",
    "online invoice maker online",
    "invoice generator free",
    "free invoice maker free",
    "invoice template free",
    "professional invoice free",
    "freelance invoice free",
    "business invoice free",
    "pdf invoice generator free",
    "invoice with tax free",
    "invoice with discount free",
    "invoice currency free",
    "download invoice pdf free",
    "print invoice free",
    "invoice number format free",
    "client invoice free",
    "service invoice free",
    "product invoice free",
    "hourly invoice free",
    "fixed fee invoice free",
    "invoice terms free",
    "payment due date free",
    "invoice notes free",
    "logo on invoice free",
    "invoice branding free",
    "invoice totals free",
    "subtotal tax total free",
    "invoice fields free",
    "bill to ship to free",
    "invoice preview free",
    "send invoice free",
    "email invoice free",
    "small business invoice free",
    "startup invoice free",
    "self employed invoice free",
    "independent contractor invoice free",
    "consulting invoice free",
    "agency invoice free",
    "no login invoice tool free",
    "free invoice generator free",
    "online invoice maker free",
    "invoice generator tool",
    "free invoice maker tool",
    "invoice template tool",
    "professional invoice tool",
    "freelance invoice tool",
    "business invoice tool",
    "pdf invoice generator tool",
    "invoice with tax tool",
    "invoice with discount tool",
    "invoice currency tool",
    "download invoice pdf tool",
    "print invoice tool",
    "invoice number format tool",
    "client invoice tool",
    "service invoice tool",
    "product invoice tool",
    "hourly invoice tool",
    "fixed fee invoice tool",
    "invoice terms tool",
    "payment due date tool",
    "invoice notes tool",
    "logo on invoice tool",
    "invoice branding tool",
    "invoice totals tool",
    "subtotal tax total tool",
    "invoice fields tool",
    "bill to ship to tool",
    "invoice preview tool",
    "send invoice tool",
    "email invoice tool",
    "small business invoice tool",
    "startup invoice tool",
    "self employed invoice tool",
    "independent contractor invoice tool",
    "consulting invoice tool",
    "agency invoice tool",
    "no login invoice tool tool",
    "free invoice generator tool",
    "online invoice maker tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/invoice-generator" },
  openGraph: {
    title: "Free Invoice Generator | Create Professional Invoices Online | FastTools",
    description: "Create professional invoices in minutes. Add items, taxes, discounts, currency, and notes. Download or print. No login required.",
    url: "https://fasttools.store/finance-tools/invoice-generator",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Invoice Generator - Create Professional Invoices Online",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Generator | Create Professional Invoices Online | FastTools",
    description: "Create professional invoices in minutes. Add items, taxes, discounts, currency, and notes. Download or print. No login required.",
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Invoice Generator",
      alternateName: "Free Invoice Maker",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/finance-tools/invoice-generator",
      description:
        "Create, preview, and download invoices with taxes, discounts, currency, and branding.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Items & taxes", 
        "Discounts", 
        "Currency", 
        "Branding", 
        "PDF download",
        "Professional invoices",
        "Business invoices",
        "Freelance invoices",
        "Tax calculations",
        "Client management"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://fasttools.store/finance-tools/invoice-generator",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "invoice generator, free invoice generator, free invoice maker, invoice template, professional invoice, freelance invoice, business invoice",
      about: {
        "@type": "Thing",
        name: "Business Invoicing",
        description: "Free online tools for creating professional invoices, business documents, and financial records"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
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
        {/* Hero Section with proper content-to-ad ratio */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Free Invoice Generator — Professional Online Invoices</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">Add items, taxes, and discounts; set currency; then download or print instantly.</p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <InvoiceGenerator />

        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

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
