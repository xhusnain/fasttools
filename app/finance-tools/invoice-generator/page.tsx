import { InvoiceGenerator } from "@/components/invoice-generator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { ToolContentEnhancement } from "@/components/tool-content-enhancement"
import { createMetadata } from "@/lib/metadata-base"
import { Code, Globe, Calculator, ArrowRight, FileText, DollarSign, Percent, Users } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

const baseMetadata = createMetadata({
  title: "Invoice Generator | Free Create Global Invoices",
  description:
    "Create professional invoices in 15+ languages and 200+ currencies. Auto tax, logo upload, instant PDF download — free, secure, and no sign-up needed.",
  path: "/finance-tools/invoice-generator",
})

export const metadata: Metadata = {
  ...baseMetadata,
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Invoice Generator – Create Global Invoices | FastTools",
      alternateName: "Free Invoice Maker",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/finance-tools/invoice-generator",
      description:
        "Create professional invoices in 15+ languages and 200+ currencies. Auto tax, logo upload, instant PDF download — free, secure, and no sign-up needed.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
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
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/finance-tools/invoice-generator",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "invoice generator, free invoice generator, free invoice maker, invoice template, professional invoice, freelance invoice, business invoice, multi-language invoice, international currency invoice, USD invoice, EUR invoice, GBP invoice, JPY invoice, CAD invoice, AUD invoice, CHF invoice, CNY invoice, INR invoice, KRW invoice, SGD invoice, HKD invoice, THB invoice, MYR invoice, PHP invoice, VND invoice, PKR invoice, BDT invoice, LKR invoice, NPR invoice, english invoice, spanish invoice, french invoice, german invoice, chinese invoice, arabic invoice, portuguese invoice, russian invoice, japanese invoice, korean invoice, hindi invoice, italian invoice, turkish invoice, polish invoice, dutch invoice",
      about: {
        "@type": "Thing",
        name: "Business Invoicing",
        description: "Free online tools for creating professional invoices, business documents, and financial records"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function InvoiceGeneratorPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Invoice Generator", href: "/finance-tools/invoice-generator" },
        ]}
      />

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 lg:flex-[2] space-y-6">
                {/* Hero Section */}
                <div className="text-center space-y-5 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                    <Code className="h-4 w-4 animate-pulse" />
                    <span>Free Invoice Generator</span>
                    <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                    Professional Invoice Generator
                  </h1>

                  <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    Create professional invoices in English, Spanish, French, German, Chinese, Arabic, Portuguese, Russian, Japanese, Korean, Hindi, Italian, Turkish, Polish, and Dutch. Generate invoices in any language with 200+ currencies (USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, KRW, SGD, HKD, THB, MYR, PHP, VND, PKR, BDT, LKR, NPR). Automatic tax calculations, discounts, and branding. Download PDF instantly - no registration required.
                  </p>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium text-sm">PDF Export</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-heading-accent-border shadow">
                      <Globe className="h-4 w-4 text-heading-accent" />
                      <span className="text-heading-accent font-medium text-sm">No Login</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                      <Calculator className="h-4 w-4 text-accent" />
                      <span className="text-accent font-medium text-sm">Auto Tax</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                      <ArrowRight className="h-4 w-4 text-secondary-accent" />
                      <span className="text-secondary-accent font-medium text-sm">Instant</span>
                    </div>
                  </div>
        </div>

                {/* Mobile/Tablet Ad - Top of Page */}
                <div className="block xl:hidden mb-6">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
        </div>

                {/* Invoice Generator Tool */}
                <div className="animate-fade-in-up">
        <InvoiceGenerator />
                </div>

                {/* Mobile/Tablet Ad - After Tool */}
                <div className="block xl:hidden my-8">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                </div>

                {/* Content Sections */}
                <div className="space-y-5 animate-fade-in-up animation-delay-200">
                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Professional Multi-Language Invoice Generator</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Our free invoice generator creates business-ready invoices in English, Spanish, French, German, Chinese, Arabic, Portuguese, Russian, Japanese, Korean, Hindi, Italian, Turkish, Polish, and Dutch. Whether you need an invoice in English, invoice in Spanish, invoice in French, invoice in German, invoice in Chinese, invoice in Arabic, invoice in Portuguese, invoice in Russian, invoice in Japanese, invoice in Korean, invoice in Hindi, invoice in Italian, invoice in Turkish, invoice in Polish, or invoice in Dutch - we support all major languages with automatic calculations, professional formatting, and instant PDF export capabilities.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">200+ International Currencies Supported</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Create invoices in any currency including USD (US Dollar), EUR (Euro), GBP (British Pound), JPY (Japanese Yen), CAD (Canadian Dollar), AUD (Australian Dollar), CHF (Swiss Franc), CNY (Chinese Yuan), INR (Indian Rupee), KRW (South Korean Won), SGD (Singapore Dollar), HKD (Hong Kong Dollar), THB (Thai Baht), MYR (Malaysian Ringgit), PHP (Philippine Peso), VND (Vietnamese Dong), PKR (Pakistani Rupee), BDT (Bangladeshi Taka), LKR (Sri Lankan Rupee), NPR (Nepalese Rupee), and 180+ more currencies from around the world.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Automatic Multi-Language Calculations</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Automatic tax calculations, discount applications, and currency conversion ensure accurate totals every time. All calculations work seamlessly across all supported languages and currencies. No manual math required.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Professional Multi-Language Templates</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Clean, professional invoice templates suitable for freelancers, small businesses, and agencies worldwide. Includes branding options, customizable fields, and proper formatting for each language and currency combination.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">How to Create Professional Multi-Language Invoices</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Follow these steps to create invoices that get paid faster and maintain professional standards across all languages and currencies. Perfect for creating professional invoice in English, business invoice in Spanish, freelance invoice in French, consulting invoice in German, service invoice in Chinese, agency invoice in Arabic, contractor invoice in Portuguese, corporate invoice in Russian, startup invoice in Japanese, small business invoice in Korean, self-employed invoice in Hindi, independent contractor invoice in Italian, consultant invoice in Turkish, freelancer invoice in Polish, or professional services invoice in Dutch.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Step 1: Select Language & Currency</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Choose from 15 languages (English, Spanish, French, German, Chinese, Arabic, Portuguese, Russian, Japanese, Korean, Hindi, Italian, Turkish, Polish, Dutch) and 200+ currencies (USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, KRW, SGD, HKD, THB, MYR, PHP, VND, PKR, BDT, LKR, NPR). Enter your company details, logo, and contact information. Add client billing details, invoice number, and set issue/due dates for proper tracking.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Step 2: Multi-Currency Line Items & Pricing</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Add detailed service descriptions in your selected language, quantities, rates in your chosen currency, and choose appropriate tax rates. Apply discounts if needed. The system automatically handles currency formatting and calculations for all supported currencies including USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, KRW, SGD, HKD, THB, MYR, PHP, VND, PKR, BDT, LKR, NPR.
                    </p>
                  </div>

                  {/* FAQ Section */}
                  <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-card-foreground flex items-center gap-2">
                      <div className="h-6 w-6 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Code className="h-4 w-4 text-accent" />
                      </div>
                      Free Multi-Language Invoice Generator: Complete Guide
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What makes a professional multi-language invoice and how do I create one?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">A professional multi-language invoice includes clear business information in your chosen language (English, Spanish, French, German, Chinese, Arabic, Portuguese, Russian, Japanese, Korean, Hindi, Italian, Turkish, Polish, Dutch), detailed line items, accurate tax calculations in your selected currency (USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, KRW, SGD, HKD, THB, MYR, PHP, VND, PKR, BDT, LKR, NPR), payment terms, and professional formatting. Our free invoice generator creates business-ready invoices with automatic calculations, customizable templates, and PDF export capabilities. Whether you need an invoice in English, invoice in Spanish, invoice in French, invoice in German, invoice in Chinese, invoice in Arabic, invoice in Portuguese, invoice in Russian, invoice in Japanese, invoice in Korean, invoice in Hindi, invoice in Italian, invoice in Turkish, invoice in Polish, or invoice in Dutch - our generator handles all languages seamlessly. Key elements include: company logo and branding, client information, invoice number and dates, itemized services with descriptions in your language, tax calculations in your currency, payment terms, and contact information. Professional invoices get paid 15% faster than generic invoices and help establish credibility with clients worldwide. The generator handles complex calculations automatically while providing customizable templates suitable for various business types across all supported languages and currencies.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How do I calculate taxes and discounts on multi-currency invoices accurately?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our invoice generator automatically calculates taxes and discounts based on your specifications for all supported currencies (USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, INR, KRW, SGD, HKD, THB, MYR, PHP, VND, PKR, BDT, LKR, NPR). For tax calculations, enter the appropriate tax rate (e.g., 8.25% for US sales tax, 20% for UK VAT, 10% for Australian GST) and the system applies it to the subtotal in your chosen currency. Discounts can be applied as percentages or fixed amounts, and the generator calculates the final total after all adjustments. The system handles complex scenarios like multiple tax rates, tiered discounts, and currency conversions across all 200+ supported currencies. All calculations are performed locally in your browser, ensuring accuracy and privacy. The generator also provides detailed breakdowns showing subtotal, tax amount, discount amount, and final total for transparency and record-keeping purposes in your selected currency.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What are the best practices for invoice numbering and payment terms?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Effective invoice numbering uses consistent formats like INV-2024-001 or 2024001 for easy tracking and reference. Our generator automatically suggests sequential numbers and allows customization. Payment terms should be clear and specific: "Net 30" (payment due in 30 days), "Due on receipt" (immediate payment), or "2/10 Net 30" (2% discount if paid within 10 days, otherwise due in 30 days). Include late payment policies and accepted payment methods. Professional invoices with clear terms reduce payment delays and disputes. The generator includes templates for common payment terms and allows customization for specific business needs.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I customize invoices for different clients and business types?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our invoice generator offers extensive customization options for different business needs. Freelancers can use simple templates with hourly rates and project descriptions. Small businesses can add logos, detailed service breakdowns, and multiple payment options. Agencies can include client-specific branding, detailed project phases, and milestone-based billing. The generator supports multiple currencies, various tax structures, and customizable fields for different industries. Templates can be saved and reused for consistent branding across all client communications. The system adapts to different business models while maintaining professional standards and legal compliance.</p>
        </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">Is the invoice generator secure and does it protect my business data?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our invoice generator prioritizes security and privacy by operating entirely within your browser. All invoice creation, calculations, and data processing happen locally on your device, meaning no sensitive business or client information is transmitted to external servers. This approach eliminates risks of data breaches, unauthorized access, or information leaks. The generator doesn't require account creation, email addresses, or any personal information beyond what you choose to input. All calculations and invoice generation are performed client-side, ensuring maximum privacy and security for your business operations. You maintain complete control over your data throughout the entire process.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What file formats are available and how do I share invoices with clients?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our invoice generator creates professional PDF invoices that are universally compatible and print-ready. PDF format ensures consistent appearance across all devices and platforms, maintains formatting integrity, and provides professional presentation. The generated invoices can be downloaded instantly, saved locally, or printed directly from the browser. For client sharing, PDFs can be attached to emails, uploaded to cloud storage, or sent through business communication platforms. The generator also provides print-optimized layouts that maintain professional appearance on paper. All invoices include proper formatting, clear typography, and business-appropriate layouts suitable for official business communications.</p>
                      </div>
                    </div>
                    <div className="mt-6 block xl:hidden">
                      <div className="text-center mb-2">
                        <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                      </div>
                      <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                    </div>
                  </div>

                  {/* Related Tools Section */}
                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Related Finance Tools</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Complete your business finance toolkit with these complementary tools.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link href="/finance-tools/paypal-fee" className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <DollarSign className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-card-foreground">PayPal Fee Calculator</h3>
                            <p className="text-xs text-muted-foreground">Calculate accurate PayPal fees for pricing</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/finance-tools/discount-calculator" className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Percent className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-card-foreground">Discount Calculator</h3>
                            <p className="text-xs text-muted-foreground">Calculate sale prices and savings</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Desktop Sidebar with AdSense (sticky, lowered start) */}
              <div className="hidden lg:block w-72">
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
