import { FileSizeConverter } from "@/components/file-size-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { HardDrive, Calculator, Target, Users } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "File Size Converter | KB to MB, GB to TB | FastTools",
  description:
    "Convert file sizes instantly: KB to MB, GB to TB, PB to EB with decimal (SI) and binary (IEC) units. Free online data size calculator for cloud storage, AI datasets, backups, and hosting limits. AWS S3, Google Cloud, Azure storage calculator.",
  keywords: [
    // Primary Keywords (30)
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
    
    // Secondary Keywords (30)
    "binary vs decimal units",
    "kib to mib",
    "mib to gib",
    "gib to tib",
    "tib to pib",
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
    
    // Long-tail Keywords (30)
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
    
    // Technical Keywords (20)
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
    "pdf compression size",
    
    // Platform-specific Keywords (20)
    "png vs jpg size",
    "webp image size",
    "git lfs file size",
    "s3 object size",
    "drive storage space",
    "dropbox file size",
    "google drive file size",
    "onedrive file size",
    "icloud file size",
    "aws s3 file size",
    "azure blob file size",
    "gcp storage file size",
    "docker image size",
    "kubernetes pod size",
    "vmware disk size",
    "hyper-v disk size",
    "virtualbox disk size",
    "parallels disk size",
    "vmware workstation disk size",
    "virtual machine disk size",
    
    // Educational Keywords (20)
    "file size units explained",
    "data storage units explained",
    "binary prefixes explained",
    "decimal prefixes explained",
    "si units explained",
    "iec units explained",
    "file size conversion formula",
    "data size conversion formula",
    "storage size conversion formula",
    "byte conversion formula",
    "kilobyte conversion formula",
    "megabyte conversion formula",
    "gigabyte conversion formula",
    "terabyte conversion formula",
    "petabyte conversion formula",
    "exabyte conversion formula",
    "zettabyte conversion formula",
    "yottabyte conversion formula",
    "file size measurement standards",
    "data storage measurement standards",
    
    // Trending Keywords 2024-2025 (100)
    "convert KB to MB",
    "MB to GB converter",
    "GB to TB conversion",
    "data storage units",
    "digital storage calculator",
    "byte conversion tool",
    "online file size calculator",
    "convert bytes to kilobytes",
    "megabyte to gigabyte converter",
    "terabyte to petabyte conversion",
    "data unit converter",
    "storage capacity calculator",
    "digital storage units explained",
    "file size measurement",
    "convert MB to KB",
    "GB to MB converter",
    "TB to GB conversion",
    "data size converter",
    "online storage converter",
    "convert kilobytes to megabytes",
    "gigabyte to terabyte converter",
    "petabyte to exabyte conversion",
    "digital data units",
    "storage unit conversion chart",
    "file size units explained",
    "convert bytes to MB",
    "MB to GB calculator",
    "GB to TB calculator",
    "data storage conversion tool",
    "online data size calculator",
    "convert KB to bytes",
    "megabyte to kilobyte converter",
    "terabyte to gigabyte conversion",
    "data measurement units",
    "storage size converter",
    "file size conversion chart",
    "convert MB to bytes",
    "GB to MB calculator",
    "TB to GB calculator",
    "digital storage conversion tool",
    "online file size converter",
    "convert kilobytes to bytes",
    "megabyte to byte converter",
    "terabyte to megabyte conversion",
    "data storage units chart",
    "storage capacity converter",
    "file size measurement units",
    "convert bytes to GB",
    "MB to KB calculator",
    "GB to TB calculator",
    "data size conversion tool",
    "online storage size calculator",
    "convert KB to MB online",
    "megabyte to gigabyte calculator",
    "terabyte to petabyte converter",
    "digital data measurement units",
    "storage unit conversion tool",
    "file size units chart",
    "convert MB to GB online",
    "GB to MB calculator online",
    "TB to GB calculator online",
    "data storage conversion calculator",
    "online data size converter",
    "convert kilobytes to megabytes online",
    "gigabyte to terabyte calculator",
    "petabyte to exabyte converter online",
    "digital storage units conversion",
    "storage capacity conversion tool",
    "file size measurement chart",
    "convert bytes to kilobytes online",
    "MB to GB converter online",
    "GB to TB converter online",
    "data size conversion calculator",
    "online storage converter tool",
    "convert KB to bytes online",
    "megabyte to kilobyte calculator",
    "terabyte to gigabyte converter online",
    "data measurement units chart",
    "storage size conversion tool",
    "file size conversion calculator",
    "convert MB to bytes online",
    "GB to MB converter online",
    "TB to GB converter online",
    "digital storage conversion calculator",
    "online file size conversion tool",
    "convert kilobytes to bytes online",
    "megabyte to byte calculator",
    "terabyte to megabyte converter online",
    "data storage units conversion chart",
    "storage capacity conversion calculator",
    "file size measurement units chart",
    "convert bytes to GB online",
    "MB to KB converter online",
    "GB to TB converter online",
    "data size conversion chart",
    "online storage size conversion tool",
    "convert KB to MB calculator",
    "megabyte to gigabyte converter online",
    "terabyte to petabyte calculator",
    
    // Cloud & AI Storage Trending Keywords (20)
    "cloud storage pricing calculator",
    "AWS S3 storage costs",
    "Google Cloud storage pricing",
    "Azure blob storage costs",
    "AI data storage requirements",
    "machine learning dataset size",
    "blockchain storage costs",
    "NFT file size limits",
    "edge computing storage",
    "5G data storage requirements",
    "IoT data storage calculator",
    "big data storage costs",
    "data lake storage calculator",
    "data warehouse storage costs",
    "backup storage calculator",
    "disaster recovery storage",
    "multi-cloud storage costs",
    "hybrid cloud storage",
    "container storage costs",
    "microservices storage requirements"
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
    <div className="flex flex-col min-h-screen">
      <div className="relative overflow-hidden">
        {/* Green-focused but vibrant background matching homepage style */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-emerald-500/30 via-teal-500/30 to-cyan-500/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/15 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-400/10 via-transparent to-transparent"></div>
        
        {/* Green-focused floating particles with accent colors */}
        <div className="absolute top-10 left-10 h-4 w-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
        <div className="absolute top-20 right-20 h-5 w-5 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
        <div className="absolute bottom-20 left-20 h-4 w-4 bg-teal-500 rounded-full shadow-lg shadow-teal-500/50"></div>
        <div className="absolute bottom-10 right-10 h-3 w-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
        <div className="absolute top-1/2 left-1/4 h-3 w-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
        <div className="absolute top-1/3 right-1/3 h-4 w-4 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
        
        {/* Green-focused gradient orbs */}
        <div className="absolute -top-32 -left-32 h-48 w-48 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-36 w-36 bg-gradient-to-br from-teal-500/40 to-cyan-500/40 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-8 relative">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Converters", href: "/converters" },
              { label: "File Size Converter", href: "/converters/file-size" },
            ]}
          />

          <div className="max-w-6xl mx-auto mt-8 space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/30 via-emerald-500/30 via-teal-500/30 to-cyan-500/30 border border-green-400/50 text-white text-sm font-bold mb-6">
                <HardDrive className="h-4 w-4" />
                <span>Professional File Size Converter</span>
                <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 via-teal-400 via-green-500 to-green-600 leading-tight">
                Free File Size Converter
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 text-pretty max-w-3xl mx-auto leading-relaxed">
                Convert file sizes instantly: KB to MB, GB to TB, PB to EB with decimal (SI) and binary (IEC) units. 
                Cloud storage calculator for AWS S3, Google Cloud, Azure, AI datasets, machine learning, and blockchain storage.
              </p>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/80">
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/25 to-emerald-500/25 border border-green-400/40">
                  <HardDrive className="h-4 w-4" />
                  <span>Cloud Storage</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border border-emerald-400/40">
                  <Calculator className="h-4 w-4" />
                  <span>AI Datasets</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/25 to-cyan-500/25 border border-teal-400/40">
                  <Target className="h-4 w-4" />
                  <span>Blockchain</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/25 to-green-600/25 border border-cyan-400/40">
                  <Users className="h-4 w-4" />
                  <span>Edge Computing</span>
                </div>
              </div>
            </div>

            {/* First Ad Space - After Hero Content */}
            <div className="mb-8">
              <div className="text-center mb-2">
                <span className="text-xs text-white/60 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 shadow-xl">
                  <FileSizeConverter />
                </div>

                {/* Second Ad Space - After Tool */}
                <div className="my-8">
                  <div className="text-center mb-2">
                    <span className="text-xs text-white/60 font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
                </div>

                {/* Understanding How This Tool Works */}
                <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
                  <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                    <h2 className="text-xl font-bold mb-4 text-white">Understanding How This File Size Converter Works</h2>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Our file size converter uses advanced algorithms and real-time processing to deliver 
                      accurate results instantly. Each conversion is built with precision-engineered formulas that handle 
                      complex file size measurements including both decimal and binary systems. 
                      All conversions are optimized for speed and accuracy, ensuring you get reliable results every time.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Real-Time Processing</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      File size conversions are performed instantly as you type, with live preview of all unit formats. 
                      The converter handles both decimal (SI) and binary (IEC) systems while preserving measurement accuracy. 
                      Advanced algorithms ensure proper conversion factors for different file size units.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Professional Features</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Our converter includes professional features like precision rounding, unit validation, 
                      and support for storage and hosting measurements. All conversions maintain accuracy 
                      while providing clean, copy-ready results for any application.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                    <h2 className="text-xl font-bold mb-4 text-white">Advanced Usage Techniques</h2>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Master these professional techniques to get the most out of our file size converter and create 
                      perfectly accurate measurements for any purpose.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Cloud Storage and AI Datasets</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Calculate AWS S3, Google Cloud, and Azure storage costs with precision. 
                      Convert AI dataset sizes for machine learning projects, blockchain storage, and NFT file limits. 
                      Plan edge computing and 5G data storage requirements with accurate conversions.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Big Data and IoT Storage</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Convert file sizes for data lakes, data warehouses, and backup storage calculations. 
                      Calculate multi-cloud and hybrid cloud storage costs for disaster recovery. 
                      Estimate container storage and microservices storage requirements.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Modern Technology Applications</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Convert file sizes for blockchain applications, NFT storage, and cryptocurrency data. 
                      Calculate storage requirements for AI models, machine learning datasets, and edge computing. 
                      Plan storage for 5G networks, IoT devices, and modern cloud architectures.
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="text-center mb-2">
                      <span className="text-xs text-white/60 font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
                  </div>
                </div>

              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-20">
                  <div className="text-center mb-2">
                    <span className="text-xs text-white/60 font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="h-96 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}