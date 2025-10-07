import { FileSizeConverter } from "@/components/file-size-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "File Size Converter — Bytes, KB, MB, GB, TB & PB | SmartToolboxes",
  description:
    "Convert file sizes instantly: bytes, KB, MB, GB, TB, PB. Free online data size calculator for storage, backups, uploads, and hosting limits.",
  keywords: [
    "file size converter",
    "bytes to kb",
    "kb to mb",
    "mb to gb",
    "gb to tb",
    "tb to pb",
    "data size converter",
    "digital storage converter",
    "file size calculator",
    "storage size calculator",
    "binary vs decimal units",
    " kib to mib",
    "mib to gib",
    "gib to tib",
    "byte to kilobyte",
    "kilobyte to megabyte",
    "megabyte to gigabyte",
    "convert 1024 bytes to kb",
    "convert 1 gb to mb",
    "upload size limit checker",
    "image size converter",
    "video size converter",
    "pdf size converter",
    "audio size calculator",
    "zip file size estimator",
    "cloud storage calculator",
    "hosting bandwidth and size",
    "website asset optimization",
    "compress file size tips",
    "file size units explained",
    "decimal (SI) vs binary (IEC)",
    "1 mb is how many kb",
    "1 gb is how many mb",
    "convert mb to bytes",
    "convert gb to bytes",
    "bits vs bytes",
    "network transfer size",
    "backup size planning",
    "database dump size",
    "email attachment size",
    "social upload file limits",
    "max file size upload",
    "reduce file size techniques",
    "optimize images for web",
    "mp4 file size estimate",
    "pdf compression size",
    "png vs jpg size",
    "webp image size",
    "git lfs file size",
    "s3 object size",
    "drive storage space",
    "free file size converter"
  ],
  alternates: { canonical: "https://www.smarttoolboxes.com/converters/file-size" },
  openGraph: {
    title: "File Size Converter — Bytes, KB, MB, GB, TB",
    description:
      "Free online file size converter for bytes, KB, MB, GB, TB and more. Understand binary vs decimal units and optimize files.",
    url: "https://www.smarttoolboxes.com/converters/file-size",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "File Size Converter — Data Size Calculator",
    description: "Convert bytes, KB, MB, GB, TB quickly. Free and accurate.",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "File Size Converter",
      alternateName: "Data Size Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/converters/file-size",
      description:
        "Convert file sizes instantly across bytes, KB, MB, GB, TB and PB for uploads, storage and optimization.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Binary and decimal units",
        "Quick unit switching",
        "Copy results",
        "Helpful rounding",
        "Mobile friendly UI",
      ],
      publisher: {
        "@type": "Organization",
        name: "SmartToolboxes",
        url: "https://www.smarttoolboxes.com",
        logo: { "@type": "ImageObject", url: "https://www.smarttoolboxes.com/favicon.ico" },
      },
    }),
  },
}

export default function FileSizeConverterPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "File Size Converter", href: "/converters/file-size" },
          ]}
        />

        <AdSpace slot="header" className="mb-8 h-24" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">File Size Converter — Bytes to KB, MB, GB, TB</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">Convert digital storage units instantly. Understand binary (KiB, MiB) and decimal (KB, MB) sizes with accurate results.</p>
          </div>

          <FileSizeConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use the File Size Converter</h2>
            <h3 className="text-xl font-semibold mb-2 text-foreground">1) Enter a Value and Unit</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Type your file size (e.g., 1536) and select the source unit (e.g., KB).</li>
              <li>Switch between decimal (KB, MB, GB) and binary (KiB, MiB, GiB) units when needed.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) View Converted Sizes</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>See instant conversions across bytes, KB/MB/GB/TB and KiB/MiB/GiB/TiB.</li>
              <li>Copy results for documentation, tickets, or support chats.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Why Use Our Data Size Calculator?</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Accurate decimal and binary arithmetic with sensible rounding.</li>
              <li>Great for uploads, backups, hosting limits, and media estimates.</li>
              <li>Clean UI that works on desktop and mobile.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Tips and Common Use Cases</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Check platform limits (e.g., email attachments, CMS uploads, messaging apps).</li>
              <li>Estimate media sizes: images, PDFs, audio, and video before sharing.</li>
              <li>Understand binary vs decimal: 1 MB (10^6 bytes) vs 1 MiB (2^20 bytes).</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Frequently Asked Questions</h2>
            <h3 className="text-xl font-semibold mb-1 text-foreground">What’s the difference between KB and KiB?</h3>
            <p className="text-muted-foreground">KB uses decimal (1 KB = 1000 bytes). KiB uses binary (1 KiB = 1024 bytes). Storage vendors often use decimal; OS tools may show binary.</p>
            <h3 className="text-xl font-semibold mt-4 mb-1 text-foreground">Why do OS and drives show different sizes?</h3>
            <p className="text-muted-foreground">Marketing capacities use decimal units; operating systems frequently display binary units, causing apparent differences.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/image-tools/pdf-tools">PDF Tools</Link></li>
              <li><Link href="/image-tools/pdf-unlocker">PDF Unlocker</Link></li>
              <li><Link href="/image-tools/screenshot-to-text">Screenshot to Text</Link></li>
              <li><Link href="/dev-tools/json-to-csv">JSON to CSV</Link></li>
              <li><Link href="/dev-tools/html-beautifier">HTML Beautifier</Link></li>
              <li><Link href="/converters/length">Length Converter</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
