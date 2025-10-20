import { FileSizeConverter } from "@/components/file-size-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { HardDrive, Calculator, Target, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "File Size Converter | KB to MB, GB to TB | FastTools",
  description:
    "Convert file sizes instantly: KB to MB, GB to TB, PB to EB with decimal (SI) and binary (IEC) units. Free online data size calculator for cloud storage, AI datasets, backups, and hosting limits.",
  keywords: [
    "file size converter",
    "free file size converter",
    "bytes to kb converter",
    "kb to mb converter",
    "mb to gb converter",
    "gb to tb converter",
    "tb to pb converter",
    "pb to eb converter",
    "eb to zb converter",
    "zb to yb converter",
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
    "eb converter online",
    "zb converter online",
    "yb converter online",
    "kib to mib converter",
    "mib to gib converter",
    "gib to tib converter",
    "tib to pib converter",
    "binary vs decimal units",
    "pib to eib",
    "eib to zib",
    "zib to yib",
    "byte to kilobyte",
    "kilobyte to megabyte",
    "megabyte to gigabyte",
    "gigabyte to terabyte",
    "terabyte to petabyte",
    "petabyte to exabyte",
    "exabyte to zettabyte",
    "zettabyte to yottabyte",
    "convert 1024 bytes to kb",
    "convert 1 gb to mb",
    "convert 1 tb to gb",
    "convert 1 pb to tb",
    "upload size limit checker",
    "image size converter",
    "video size converter",
    "pdf size converter",
    "audio size calculator",
    "zip file size estimator",
    "cloud storage calculator",
    "hosting bandwidth calculator",
    "website asset optimization",
    "compress file size tips",
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
    "pb to eb converter free",
    "eb to zb converter free",
    "zb to yb converter free",
    "data size converter free online",
    "storage converter free online",
    "bytes converter free online",
    "kb converter free online",
    "mb converter free online",
    "gb converter free online",
    "tb converter free online",
    "pb converter free online",
    "eb converter free online",
    "zb converter free online",
    "yb converter free online",
    "file size calculator free online",
    "data size calculator free online",
    "storage calculator free online",
    "bytes calculator free online",
    "kb calculator free online",
    "decimal (SI) vs binary (IEC)",
    "1 mb is how many kb",
    "1 gb is how many mb",
    "1 tb is how many gb",
    "1 pb is how many tb",
    "convert mb to bytes",
    "convert gb to bytes",
    "convert tb to bytes",
    "convert pb to bytes",
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
    "pdf compression size"
  ],

  alternates: { canonical: "https://www.fasttools.store/converters/file-size" },
  openGraph: {
    title: "Free File Size Converter | Convert KB to MB, GB to TB, PB to EB | Cloud Storage Calculator | FastTools",
    description:
      "Convert file sizes instantly: KB to MB, GB to TB, PB to EB with decimal (SI) and binary (IEC) units. Free online data size calculator for cloud storage, AI datasets, backups, and hosting limits. AWS S3, Google Cloud, Azure storage calculator.",
    url: "https://www.fasttools.store/converters/file-size",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free File Size Converter - Bytes, KB, MB, GB, TB & PB",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free File Size Converter | Convert KB to MB, GB to TB, PB to EB | Cloud Storage Calculator | FastTools",
    description: "Convert file sizes instantly: KB to MB, GB to TB, PB to EB with decimal (SI) and binary (IEC) units. Free online data size calculator for cloud storage, AI datasets, backups, and hosting limits. AWS S3, Google Cloud, Azure storage calculator.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "File Size Converter",
      alternateName: "Data Size Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/converters/file-size",
      description:
        "Convert file sizes instantly across bytes, KB, MB, GB, TB, PB, EB, ZB, YB for cloud storage, AI datasets, uploads, and optimization. Support for AWS S3, Google Cloud, Azure storage calculations.",
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
        "Network transfer calculations",
        "AWS S3 storage calculator",
        "Google Cloud storage calculator",
        "Azure blob storage calculator",
        "AI dataset size calculator",
        "Machine learning storage calculator",
        "Blockchain storage calculator",
        "NFT file size calculator",
        "Edge computing storage",
        "5G data storage calculator",
        "IoT data storage calculator"
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
        },
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/converters/file-size",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "file size converter, free file size converter, convert KB to MB, GB to TB, PB to EB, cloud storage calculator, AWS S3 storage costs, Google Cloud storage pricing, Azure blob storage costs, AI data storage requirements, machine learning dataset size, blockchain storage costs, NFT file size limits, edge computing storage, 5G data storage requirements, IoT data storage calculator, big data storage costs, data lake storage calculator, data warehouse storage costs, backup storage calculator, disaster recovery storage, multi-cloud storage costs, hybrid cloud storage, container storage costs, microservices storage requirements",
      about: {
        "@type": "Thing",
        name: "File Size Measurement",
        description: "Free online tools for converting file sizes between different units and understanding storage requirements"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function FileSizeConverterPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Converters", href: "/converters" },
              { label: "File Size Converter", href: "/converters/file-size" },
            ]}
          />

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="flex-1 lg:flex-[2] space-y-5 sm:space-y-6">
                {/* Hero Section */}
                <div className="text-center space-y-5 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                    <HardDrive className="h-4 w-4" />
                    <span>Professional File Size Converter</span>
                    <div className="h-2 w-2 bg-secondary-accent rounded-full"></div>
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">Free File Size Converter</h1>
                  <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    Convert KB ⇄ MB ⇄ GB ⇄ TB with decimal (SI) and binary (IEC) units. Plan cloud storage and uploads with confidence.
                  </p>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                      <HardDrive className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium text-sm">Cloud</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-green-500 shadow">
                      <Calculator className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 font-medium text-sm">AI</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                      <Target className="h-4 w-4 text-accent" />
                      <span className="text-accent font-medium text-sm">Dev</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                      <Users className="h-4 w-4 text-secondary-accent" />
                      <span className="text-secondary-accent font-medium text-sm">Ops</span>
                    </div>
                  </div>
                </div>

                {/* Mobile/Tablet Ad - Top */}
                <div className="block xl:hidden mb-6">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
                </div>

                {/* Tool Card */}
                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                  <FileSizeConverter />
                </div>

                {/* Mobile/Tablet Ad - After Tool */}
                <div className="block xl:hidden my-8">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                </div>

                {/* File Size Converter FAQ (10 original Q&As) */}
                <div className="p-6 rounded-lg bg-card border border-border shadow mt-6">
                  <h2 className="text-2xl font-bold mb-4 text-card-foreground">File Size Converter FAQ</h2>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">1) Why do OS disk sizes look smaller than vendor labels?</h3>
                      <p>Vendors use decimal GB (1,000,000,000 bytes), while OS displays binary GiB (1,073,741,824 bytes). A 1 TB drive appears as about 931 GiB. Two systems, same bytes—our converter shows both so plans reflect reality.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">2) KB/MB/GB vs KiB/MiB/GiB—when to use each?</h3>
                      <p>Use decimal for marketing/network specs, binary for OS/file system/memory. Label the unit system in reports and stick to one per dashboard to prevent mismatched totals.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">3) How do I estimate upload/download time?</h3>
                      <p>Convert size and speed to compatible units, then time = size ÷ throughput. Remember 1 byte = 8 bits. Example: 1 GB over 100 Mbps → 8,000 Mb ÷ 100 = 80 s (plus overhead).</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">4) Why doesn’t compression reduce size much?</h3>
                      <p>Already‑compressed formats (JPEG/WebP/MP4) have little redundancy. Text and CSV compress well. Containers add overhead. Choose efficient codecs and verify before/after in the converter.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">5) How can I budget cloud storage precisely?</h3>
                      <p>Normalize everything to GB or GiB, then apply provider pricing. Include replication, versions, and growth. Note decimal vs binary and the date of your rate sheet.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">6) Do thumbnails and metadata matter at scale?</h3>
                      <p>Yes—per‑object overhead multiplies. Add a 10–30% buffer for previews, indices, and metadata. Measure with a pilot before committing budgets.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">7) What rounding should I use for reports?</h3>
                      <p>Keep high precision internally; round only at presentation. Dashboards: 1–2 decimals. Contracts: exact bytes in an appendix. Converting once and rounding last prevents drift.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">8) What drives image/video file size the most?</h3>
                      <p>Images: resolution, format, and quality. Video: duration × bitrate plus codec efficiency (H.264/HEVC/AV1). Test multiple bitrates and compare results; use our converter to summarize.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">9) Why do backups occupy more space than raw data?</h3>
                      <p>Indexes, checksums, dedup tables, and container overhead add up. Retention rules and incrementals also grow totals. Apply a factor (often 1.1–1.5×) unless deduplication offsets it.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-card-foreground">10) What’s the simplest decimal vs binary rule?</h3>
                      <p>If the source is hardware/network marketing, it’s decimal. If it’s from your OS or memory metrics, it’s binary. Convert once, label clearly (GB or GiB), and keep factors in docs.</p>
                    </div>
                  </div>
                </div>

                {/* Understanding & Advanced Sections */}
                <div className="space-y-5 animate-fade-in-up animation-delay-200">
                  <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-base md:text-xl font-bold mb-3 text-card-foreground">How This File Size Converter Works</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      We support both decimal and binary systems with deterministic formulas and sensible rounding. Results are
                      copy‑ready and consistent across refreshes.
                    </p>
                    <h3 className="text-base md:text-lg font-bold mb-2.5 text-card-foreground">Real‑Time Processing</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Values update as you type. Switch units freely—internally we convert through bytes for accurate results.
                    </p>
                    <h3 className="text-base md:text-lg font-bold mb-2.5 text-card-foreground">Professional Features</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Clear unit labels (KB vs KiB), precise factors, and compact UI help with cloud planning, uploads, and audits.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-base md:text-xl font-bold mb-3 text-card-foreground">Advanced Usage</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Practical patterns for storage sizing, network estimates, and data workflows.
                    </p>
                    <h3 className="text-base md:text-lg font-bold mb-2.5 text-card-foreground">Cloud & AI</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">Translate quotas (GB) to binary file sizes (GiB) to match OS usage; note provider pricing units.</p>
                    <h3 className="text-base md:text-lg font-bold mb-2.5 text-card-foreground">Backups & Transfers</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">Estimate transfer time: size ÷ throughput, remembering 1 byte = 8 bits.</p>
                    <h3 className="text-base md:text-lg font-bold mb-2.5 text-card-foreground">Dev & Ops</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Align logging/metrics to a single unit system to avoid mismatched totals across dashboards.</p>
                  </div>

                  {/* Mobile Bottom Ad */}
                  <div className="block xl:hidden mt-8">
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                  </div>
                </div>
              </div>

              {/* Desktop Sidebar with AdSense */}
              <div className="hidden lg:block w-64 xl:w-72">
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
    
  )
}