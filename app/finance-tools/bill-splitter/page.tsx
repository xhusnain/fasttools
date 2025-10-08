import { BillSplitter } from "@/components/bill-splitter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bill Splitter — Split Bills & Shared Expenses Fairly | SmartToolboxes",
  description:
    "Split bills and shared expenses fairly. Add items, assign people, include tips and tax, and see per‑person totals. Perfect for restaurants and trips.",
  keywords: [
    "bill splitter",
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
    "split expenses with roommates"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/bill-splitter" },
  openGraph: {
    title: "Bill Splitter — Fair Shared Expenses",
    description: "Split itemized bills, tips and tax with per‑person totals.",
    url: "https://www.fasttools.store/finance-tools/bill-splitter",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Bill Splitter", description: "Share expenses fairly in seconds." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Bill Splitter",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/finance-tools/bill-splitter",
      description:
        "Split shared expenses with even, itemized, or percentage shares, including tips and tax.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Even/itemized split", "Tip & tax", "Per‑person totals", "Share results"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
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
