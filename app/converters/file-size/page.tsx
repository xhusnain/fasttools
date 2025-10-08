import { FileSizeConverter } from "@/components/file-size-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free File Size Converter | Bytes, KB, MB, GB, TB & PB | FastTools",
  description:
    "Convert file sizes instantly: bytes, KB, MB, GB, TB, PB. Free online data size calculator for storage, backups, uploads, and hosting limits.",
  keywords: [
    // Primary Keywords (20)
    "file size converter",
    "free file size converter",
    "bytes to kb",
    "kb to mb",
    "mb to gb",
    "gb to tb",
    "tb to pb",
    "data size converter",
    "digital storage converter",
    "file size calculator",
    "storage size calculator",
    "file size converter online",
    "data size converter online",
    "storage converter online",
    "bytes converter online",
    "kb converter online",
    "mb converter online",
    "gb converter online",
    "tb converter online",
    "pb converter online",
    
    // Secondary Keywords (20)
    "binary vs decimal units",
    "kib to mib",
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
    
    // Long-tail Keywords (20)
    "free online file size converter",
    "best file size converter online",
    "file size converter with live preview",
    "free file size converter tool online",
    "online file size converter free",
    "file size converter online free",
    "bytes to kb converter free",
    "kb to mb converter free",
    "mb to gb converter free",
    "gb to tb converter free",
    "tb to pb converter free",
    "data size converter free online",
    "storage converter free online",
    "bytes converter free online",
    "kb converter free online",
    "mb converter free online",
    "gb converter free online",
    "tb converter free online",
    "pb converter free online",
    "file size calculator free online",
    
    // Additional SEO Keywords
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
    "file size converter free",
    "data size converter free",
    "storage converter free",
    "bytes converter free",
    "kb converter free",
    "mb converter free",
    "gb converter free",
    "tb converter free",
    "pb converter free",
    "file size calculator free",
    "data size calculator free",
    "storage calculator free",
    "bytes calculator free",
    "kb calculator free",
    "mb calculator free",
    "gb calculator free",
    "tb calculator free",
    "pb calculator free"
  ],
  alternates: { canonical: "https://www.fasttools.store/converters/file-size" },
  openGraph: {
    title: "Free File Size Converter | Bytes, KB, MB, GB, TB & PB | FastTools",
    description:
      "Convert file sizes instantly: bytes, KB, MB, GB, TB, PB. Free online data size calculator for storage, backups, uploads, and hosting limits.",
    url: "https://fasttools.store/converters/file-size",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free File Size Converter - Bytes, KB, MB, GB, TB & PB",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free File Size Converter | Bytes, KB, MB, GB, TB & PB | FastTools",
    description: "Convert file sizes instantly: bytes, KB, MB, GB, TB, PB. Free online data size calculator for storage, backups, uploads, and hosting limits.",
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "File Size Converter",
      alternateName: "Data Size Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/converters/file-size",
      description:
        "Convert file sizes instantly across bytes, KB, MB, GB, TB and PB for uploads, storage and optimization.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Binary and decimal units",
        "Quick unit switching",
        "Copy results",
        "Helpful rounding",
        "Mobile friendly UI",
        "Storage optimization",
        "Upload limit checking",
        "Cloud storage planning",
        "Backup size estimation",
        "Network transfer calculations"
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
        },
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://fasttools.store/converters/file-size",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "file size converter, free file size converter, bytes to kb, kb to mb, mb to gb, gb to tb, data size converter, storage calculator",
      about: {
        "@type": "Thing",
        name: "File Size Measurement",
        description: "Free online tools for converting file sizes between different units and understanding storage requirements"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
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

        <div className="max-w-6xl mx-auto">
          {/* Hero Section with proper content-to-ad ratio */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Free File Size Converter — Bytes to KB, MB, GB, TB</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">Convert digital storage units instantly. Understand binary (KiB, MiB) and decimal (KB, MB) sizes with accurate results.</p>
          </div>

          {/* First Ad Space - After Hero Content */}
          <div className="mb-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FileSizeConverter />

              {/* Second Ad Space - After Tool */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
              </div>

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

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Understanding File Size Units</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Digital storage uses two different measurement systems that can cause confusion:
                </p>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Decimal Units (SI Standard)</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Byte (B):</strong> 8 bits - Basic unit of digital information</li>
                  <li><strong>Kilobyte (KB):</strong> 1,000 bytes - Small text files, simple images</li>
                  <li><strong>Megabyte (MB):</strong> 1,000,000 bytes - Photos, songs, documents</li>
                  <li><strong>Gigabyte (GB):</strong> 1,000,000,000 bytes - Videos, software, games</li>
                  <li><strong>Terabyte (TB):</strong> 1,000,000,000,000 bytes - Large backups, databases</li>
                  <li><strong>Petabyte (PB):</strong> 1,000,000,000,000,000 bytes - Enterprise storage</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Binary Units (IEC Standard)</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Kibibyte (KiB):</strong> 1,024 bytes - Used by operating systems</li>
                  <li><strong>Mebibyte (MiB):</strong> 1,048,576 bytes - Memory and storage</li>
                  <li><strong>Gibibyte (GiB):</strong> 1,073,741,824 bytes - RAM and storage</li>
                  <li><strong>Tebibyte (TiB):</strong> 1,099,511,627,776 bytes - Large storage systems</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Common File Size Examples</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Understanding typical file sizes helps you estimate storage needs and upload limits:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Text Files:</strong> 1-50 KB for documents, 1-5 MB for large reports</li>
                  <li><strong>Images:</strong> 100 KB - 5 MB for photos, 10-50 KB for web images</li>
                  <li><strong>Audio:</strong> 1-5 MB per minute for MP3, 10-50 MB for high-quality</li>
                  <li><strong>Video:</strong> 10-100 MB per minute for compressed, 1-10 GB for HD</li>
                  <li><strong>Software:</strong> 10-100 MB for apps, 1-10 GB for games</li>
                  <li><strong>Databases:</strong> 1-100 MB for small, 1-100 GB for large</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Tips and Common Use Cases</h2>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Check platform limits (e.g., email attachments, CMS uploads, messaging apps).</li>
                  <li>Estimate media sizes: images, PDFs, audio, and video before sharing.</li>
                  <li>Understand binary vs decimal: 1 MB (10^6 bytes) vs 1 MiB (2^20 bytes).</li>
                  <li>Plan backup storage requirements for different file types</li>
                  <li>Calculate bandwidth needs for file transfers</li>
                  <li>Estimate cloud storage costs based on file sizes</li>
                  <li>Optimize file sizes for web performance</li>
                  <li>Plan storage upgrades based on usage patterns</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">File Size Optimization Strategies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Reducing file sizes can improve performance, save storage, and reduce costs:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Images:</strong> Use appropriate formats (JPEG for photos, PNG for graphics)</li>
                  <li><strong>Videos:</strong> Choose optimal compression settings and formats</li>
                  <li><strong>Documents:</strong> Remove unnecessary formatting and embedded objects</li>
                  <li><strong>Archives:</strong> Use compression algorithms like ZIP or 7Z</li>
                  <li><strong>Databases:</strong> Regular cleanup and optimization</li>
                  <li><strong>Code:</strong> Minify JavaScript and CSS files</li>
                  <li><strong>Media:</strong> Use modern formats like WebP for images</li>
                  <li><strong>Backups:</strong> Use incremental and differential backup strategies</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Platform-Specific File Size Limits</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Different platforms have varying file size restrictions:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Email Attachments:</strong> 10-25 MB (Gmail, Outlook, Yahoo)</li>
                  <li><strong>Social Media:</strong> 5-100 MB depending on platform and content type</li>
                  <li><strong>Cloud Storage:</strong> 5-15 GB for individual files (Google Drive, Dropbox)</li>
                  <li><strong>Web Hosting:</strong> 2-100 MB for individual files, 1-10 GB total</li>
                  <li><strong>Messaging Apps:</strong> 1-100 MB depending on service</li>
                  <li><strong>Code Repositories:</strong> 25-100 MB for individual files</li>
                  <li><strong>Video Platforms:</strong> 1-128 GB depending on account type</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">What's the difference between KB and KiB?</h3>
                    <p className="text-muted-foreground">KB uses decimal (1 KB = 1000 bytes). KiB uses binary (1 KiB = 1024 bytes). Storage vendors often use decimal; OS tools may show binary.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Why do OS and drives show different sizes?</h3>
                    <p className="text-muted-foreground">Marketing capacities use decimal units; operating systems frequently display binary units, causing apparent differences.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How do I reduce file sizes?</h3>
                    <p className="text-muted-foreground">Use appropriate compression, choose optimal formats, remove unnecessary data, and consider modern compression algorithms.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">What's the largest file size I can create?</h3>
                    <p className="text-muted-foreground">Theoretical limits are in the exabytes, but practical limits depend on your storage system, file system, and application constraints.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How do I estimate storage needs?</h3>
                    <p className="text-muted-foreground">Calculate based on file types, quantities, and growth rates. Consider compression ratios and backup requirements.                </p>
              </div>

            </div>

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

            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <AdSpace slot="sidebar" className="h-96 border border-border/60 rounded-xl shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}