import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HTMLBeautifier } from "@/components/html-beautifier"
import Link from "next/link"

export const metadata: Metadata = {
  title: "HTML Beautifier & Minifier — Format or Minify HTML | SmartToolboxes",
  description:
    "Format or minify HTML code instantly. Clean indentation, remove whitespace, and copy results. Great for web developers and content editors.",
  keywords: [
    "html beautifier",
    "html minifier",
    "format html",
    "minify html",
    "html formatter",
    "html compressor",
    "prettify html",
    "compress html",
    "indent html",
    "remove whitespace",
    "inline vs block elements",
    "html cleanup",
    "copy formatted html",
    "html code tools",
    "web developer tools",
    "free html beautifier"
  ],
  alternates: { canonical: "https://www.smarttoolboxes.com/dev-tools/html-beautifier" },
  openGraph: {
    title: "HTML Beautifier & Minifier — Format/Minify",
    description: "Clean or compress HTML for better readability or smaller size.",
    url: "https://www.smarttoolboxes.com/dev-tools/html-beautifier",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "HTML Beautifier & Minifier", description: "Format or minify HTML in one click." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "HTML Beautifier & Minifier",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/dev-tools/html-beautifier",
      description:
        "Format or minify HTML code with clean indentation or compression.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Beautify", "Minify", "Copy results"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.smarttoolboxes.com" },
    }),
  },
}

export default function HTMLBeautifierPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">HTML Beautifier & Minifier</h1>
          <p className="text-lg text-muted-foreground text-balance">Format or compress your HTML code instantly</p>
        </div>

        <HTMLBeautifier />

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">How to Use</h2>
          <ol className="list-decimal pl-5 text-muted-foreground">
            <li>Paste HTML and choose Beautify or Minify mode.</li>
            <li>Copy the cleaned or compressed HTML for your project.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Related Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/dev-tools/html-to-markdown">HTML to Markdown</Link></li>
            <li><Link href="/dev-tools/hex-to-rgb">Hex to RGB</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
