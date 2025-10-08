import { BillSplitter } from "@/components/bill-splitter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Bill Splitter | Split Bills & Shared Expenses Fairly | FastTools",
  description:
    "Split bills and shared expenses fairly. Add items, assign people, include tips and tax, and see per‑person totals. Perfect for restaurants and trips.",
  keywords: [
    // Primary Keywords (20)
    "bill splitter",
    "free bill splitter",
    "split bill calculator",
    "expense splitter",
    "group expense calculator",
    "split check",
    "dutch pay calculator",
    "split even or itemized",
    "per person total",
    "tip and tax split",
    "service charge split",
    "roommate bill split",
    "travel expense split",
    "friends dinner split",
    "split by percentages",
    "split by shares",
    "split by items",
    "iou tracker",
    "settle up",
    "round per person",
    
    // Secondary Keywords (20)
    "fair split algorithm",
    "equal split",
    "unequal split",
    "who owes who",
    "payback plan",
    "receipt split",
    "scan receipt split",
    "group trip expenses",
    "household bills split",
    "utility bill split",
    "restaurant bill split",
    "bar tab split",
    "wedding party expenses",
    "birthday dinner split",
    "large group gratuity",
    "sales tax split",
    "cash vs card split",
    "tip calculator",
    "free bill splitter",
    "best bill splitting app",
    "split expenses online",
    
    // Long-tail Keywords (20)
    "free online bill splitter",
    "best bill splitter online",
    "bill splitter with live preview",
    "free bill splitter tool online",
    "online bill splitter free",
    "bill splitter online free",
    "split bill calculator free online",
    "expense splitter free online",
    "group expense calculator free online",
    "split check free online",
    "dutch pay calculator free online",
    "split even or itemized free online",
    "per person total free online",
    "tip and tax split free online",
    "service charge split free online",
    "roommate bill split free online",
    "travel expense split free online",
    "friends dinner split free online",
    "split by percentages free online",
    "split by shares free online",
    "split by items free online",
    
    // Additional SEO Keywords
    "iou tracker",
    "settle up",
    "round per person",
    "fair split algorithm",
    "equal split",
    "unequal split",
    "who owes who",
    "payback plan",
    "receipt split",
    "scan receipt split",
    "group trip expenses",
    "household bills split",
    "utility bill split",
    "restaurant bill split",
    "bar tab split",
    "wedding party expenses",
    "birthday dinner split",
    "large group gratuity",
    "sales tax split",
    "cash vs card split",
    "tip calculator",
    "free bill splitter",
    "best bill splitting app",
    "split expenses online",
    "split expenses with roommates",
    "bill splitter online",
    "split bill calculator online",
    "expense splitter online",
    "group expense calculator online",
    "split check online",
    "dutch pay calculator online",
    "split even or itemized online",
    "per person total online",
    "tip and tax split online",
    "service charge split online",
    "roommate bill split online",
    "travel expense split online",
    "friends dinner split online",
    "split by percentages online",
    "split by shares online",
    "split by items online",
    "iou tracker online",
    "settle up online",
    "round per person online",
    "fair split algorithm online",
    "equal split online",
    "unequal split online",
    "who owes who online",
    "payback plan online",
    "receipt split online",
    "scan receipt split online",
    "group trip expenses online",
    "household bills split online",
    "utility bill split online",
    "restaurant bill split online",
    "bar tab split online",
    "wedding party expenses online",
    "birthday dinner split online",
    "large group gratuity online",
    "sales tax split online",
    "cash vs card split online",
    "tip calculator online",
    "free bill splitter online",
    "best bill splitting app online",
    "split expenses online online",
    "split expenses with roommates online",
    "bill splitter free",
    "split bill calculator free",
    "expense splitter free",
    "group expense calculator free",
    "split check free",
    "dutch pay calculator free",
    "split even or itemized free",
    "per person total free",
    "tip and tax split free",
    "service charge split free",
    "roommate bill split free",
    "travel expense split free",
    "friends dinner split free",
    "split by percentages free",
    "split by shares free",
    "split by items free",
    "iou tracker free",
    "settle up free",
    "round per person free",
    "fair split algorithm free",
    "equal split free",
    "unequal split free",
    "who owes who free",
    "payback plan free",
    "receipt split free",
    "scan receipt split free",
    "group trip expenses free",
    "household bills split free",
    "utility bill split free",
    "restaurant bill split free",
    "bar tab split free",
    "wedding party expenses free",
    "birthday dinner split free",
    "large group gratuity free",
    "sales tax split free",
    "cash vs card split free",
    "tip calculator free",
    "free bill splitter free",
    "best bill splitting app free",
    "split expenses online free",
    "split expenses with roommates free",
    "bill splitter tool",
    "split bill calculator tool",
    "expense splitter tool",
    "group expense calculator tool",
    "split check tool",
    "dutch pay calculator tool",
    "split even or itemized tool",
    "per person total tool",
    "tip and tax split tool",
    "service charge split tool",
    "roommate bill split tool",
    "travel expense split tool",
    "friends dinner split tool",
    "split by percentages tool",
    "split by shares tool",
    "split by items tool",
    "iou tracker tool",
    "settle up tool",
    "round per person tool",
    "fair split algorithm tool",
    "equal split tool",
    "unequal split tool",
    "who owes who tool",
    "payback plan tool",
    "receipt split tool",
    "scan receipt split tool",
    "group trip expenses tool",
    "household bills split tool",
    "utility bill split tool",
    "restaurant bill split tool",
    "bar tab split tool",
    "wedding party expenses tool",
    "birthday dinner split tool",
    "large group gratuity tool",
    "sales tax split tool",
    "cash vs card split tool",
    "tip calculator tool",
    "free bill splitter tool",
    "best bill splitting app tool",
    "split expenses online tool",
    "split expenses with roommates tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/bill-splitter" },
  openGraph: {
    title: "Free Bill Splitter | Split Bills & Shared Expenses Fairly | FastTools",
    description: "Split bills and shared expenses fairly. Add items, assign people, include tips and tax, and see per‑person totals. Perfect for restaurants and trips.",
    url: "https://fasttools.store/finance-tools/bill-splitter",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Bill Splitter - Split Bills & Shared Expenses Fairly",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Bill Splitter | Split Bills & Shared Expenses Fairly | FastTools",
    description: "Split bills and shared expenses fairly. Add items, assign people, include tips and tax, and see per‑person totals. Perfect for restaurants and trips.",
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Bill Splitter",
      alternateName: "Expense Splitter",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/finance-tools/bill-splitter",
      description:
        "Split shared expenses with even, itemized, or percentage shares, including tips and tax.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Even/itemized split", 
        "Tip & tax", 
        "Per‑person totals", 
        "Share results",
        "Split bill calculator",
        "Group expense calculator",
        "Dutch pay calculator",
        "Fair split algorithm",
        "Restaurant bill split",
        "Travel expense split"
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
      downloadUrl: "https://fasttools.store/finance-tools/bill-splitter",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "bill splitter, free bill splitter, split bill calculator, expense splitter, group expense calculator, split check, dutch pay calculator",
      about: {
        "@type": "Thing",
        name: "Bill Splitting and Shared Expenses",
        description: "Free online tools for splitting bills, shared expenses, and group financial management"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
    }),
  },
}

export default function BillSplitterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Finance Tools", href: "/finance-tools" },
          { label: "Bill Splitter", href: "/finance-tools/bill-splitter" },
        ]}
      />

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Bill Splitter — Fair Itemized & Even Splits</h1>
          <p className="text-sm md:text-base text-muted-foreground text-pretty">Split shared expenses with even, itemized, or percentage shares. Include tips and tax.</p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <BillSplitter />

        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="mt-10 prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-foreground">How to Split a Bill</h2>
          <h3 className="text-xl font-semibold mb-2 text-foreground">1) Add Items and Assign People</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Enter each item price and assign to diners or split evenly.</li>
            <li>Add tips and taxes; choose rounding per person if desired.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Review Who Owes What</h3>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>See per‑person totals and share via link or screenshot.</li>
            <li>Use equal, custom percentage, or itemized sharing methods.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Tips for Fair Splitting</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Decide on tip/tax rules before entering items.</li>
            <li>For uneven consumption, prefer itemized or percentage splits.</li>
            <li>Round per person totals to simplify cash settlements.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Finance Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/finance-tools/tip-calculator">Tip Calculator</Link></li>
            <li><Link href="/finance-tools/discount-calculator">Discount Calculator</Link></li>
            <li><Link href="/finance-tools/invoice-generator">Invoice Generator</Link></li>
            <li><Link href="/finance-tools/paypal-fee">PayPal Fee Calculator</Link></li>
            </ul>
          </div>

        </div>
      </div>
  )
}
