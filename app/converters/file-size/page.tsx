import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const FileSizeConverter = dynamic(
  () =>
    import("@/components/converters/file-size-converter").then(
      (mod) => mod.FileSizeConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "File Size Converter",
  description:
    "Convert between bytes, KB, MB, GB, TB, and PB in both decimal (SI) and binary (IEC) standards. Analyze actual file sizes, estimate transfer times, and compare storage unit differences.",
  metaTitle: "File Size Converter -- Convert Bytes KB MB GB TB PB Free",
  metaDescription:
    "Free file size converter for bytes, KB, MB, GB, TB, PB in decimal (SI) and binary (IEC) units. Drag-and-drop file analyzer, transfer time estimator, MB vs MiB comparison. No signup.",
  path: "/converters/file-size",

  header: {
    title: "File Size Converter",
    description:
      "Convert between bytes, KB, MB, GB, TB, and PB in both decimal (SI) and binary (IEC) standards. Drag and drop files to analyze actual sizes, estimate upload and download transfer times based on connection speed, and compare MB vs MiB unit differences.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "File Size Converter", href: "/converters/file-size" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free online file size converter for bytes, KB, MB, GB, TB, PB with decimal (SI) and binary (IEC) unit support, drag-and-drop file analysis, and transfer time estimation.",
    alternateName: ["Storage Unit Converter", "Bytes Converter", "Data Size Calculator", "MB to GB Converter"],
    featureList: [
      "Decimal (SI: KB, MB, GB) and binary (IEC: KiB, MiB, GiB) unit conversion",
      "Drag-and-drop file analyzer for actual file size inspection",
      "Transfer time estimator for various connection speeds",
      "Multi-unit simultaneous output from a single input value",
      "Storage cost estimation panel",
      "No signup or installation required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A File Size Converter is a free online tool that converts between digital storage units including bytes, kilobytes (KB), megabytes (MB), gigabytes (GB), terabytes (TB), and petabytes (PB) in both decimal (SI, base-1000) and binary (IEC, base-1024) standards.",
    quickAnswer:
      "Enter a value and select the source unit to instantly see conversions across all storage units from bytes to petabytes. Toggle between decimal units (KB = 1,000 bytes, MB = 1,000,000 bytes) and binary units (KiB = 1,024 bytes, MiB = 1,048,576 bytes). Drag and drop a file to analyze its actual size in all units. Estimate upload and download transfer times based on connection speeds from 3G to fiber.",
    keyTakeaways: [
      "Converts between bytes, KB, MB, GB, TB, and PB instantly with multi-unit simultaneous output",
      "Supports both decimal SI (KB=1000, MB=1000000) and binary IEC (KiB=1024, MiB=1048576) standards",
      "1 MB = 1,000,000 bytes (decimal) vs 1 MiB = 1,048,576 bytes (binary) -- a 4.86% difference that grows at larger scales",
      "Drag-and-drop file analyzer shows actual file size in all units without uploading data to servers",
      "Operating systems typically display binary units (GiB) while storage vendors advertise decimal units (GB), causing the 'missing space' confusion",
    ],
    overview:
      "This free file size converter lets you convert between all standard digital storage units from bytes to petabytes in both decimal (SI) and binary (IEC) measurement standards. Understanding the difference between MB and MiB is critical for developers, system administrators, and anyone working with storage or bandwidth. A hard drive advertised as 1 TB (decimal: 1,000,000,000,000 bytes) shows as approximately 931 GiB in your operating system because the OS uses binary units (1 GiB = 1,073,741,824 bytes). This converter eliminates confusion by showing both standards side by side. Additional tools include a drag-and-drop file analyzer that inspects actual file sizes without uploading data, a transfer time estimator that calculates upload and download duration across connection speeds from 3G mobile to gigabit fiber, and a storage cost estimation panel for cloud planning.",

    howToSteps: [
      "Enter a numeric value and select the source unit (bytes, KB, MB, GB, TB, or PB) to see instant conversions across all storage units.",
      "Toggle between decimal (SI) and binary (IEC) standards to compare KB vs KiB, MB vs MiB, GB vs GiB values side by side.",
      "Drag and drop a file onto the File Analyzer to inspect its actual size in all units without uploading the file to any server.",
      "Use the Transfer Time tab to estimate how long a file upload or download will take at various connection speeds (3G, 4G, broadband, fiber).",
      "Check the storage cost estimation panel to calculate approximate cloud storage costs for your file sizes.",
    ],

    features: [
      "Full decimal (SI: KB, MB, GB, TB, PB) and binary (IEC: KiB, MiB, GiB, TiB, PiB) unit conversion",
      "Multi-unit simultaneous output showing all conversions from a single input value",
      "Drag-and-drop file analyzer for inspecting actual file sizes without server uploads",
      "Transfer time estimator with presets for 3G, 4G LTE, broadband, and gigabit fiber speeds",
      "Storage cost estimation panel for cloud hosting and bandwidth planning",
      "100% browser-based processing with no signup, no data collection, no usage limits",
    ],

    useCases: [
      "Checking upload size limits for email attachments, cloud storage services, and web hosting platforms",
      "Estimating cloud storage costs on AWS S3, Google Cloud Storage, and Azure Blob for large datasets",
      "Understanding why a 256 GB SSD shows as 238 GiB in the operating system (decimal vs binary units)",
      "Calculating file transfer times for backup planning, data migration, and large media uploads",
      "Converting between bandwidth units (Mbps) and storage units (MB/s) for network performance analysis",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Digital storage is measured in two competing standards that cause widespread
          confusion. The decimal (SI) standard uses powers of 1,000: 1 KB = 1,000
          bytes, 1 MB = 1,000,000 bytes, 1 GB = 1,000,000,000 bytes. The binary
          (IEC) standard uses powers of 1,024: 1 KiB = 1,024 bytes, 1 MiB =
          1,048,576 bytes, 1 GiB = 1,073,741,824 bytes. The difference grows at
          larger scales -- a 1 TB drive (decimal) contains approximately 931 GiB
          (binary), which is why your new hard drive always appears smaller than
          advertised.
        </p>
        <p>
          Storage manufacturers (hard drives, SSDs, USB drives) use decimal units
          because the numbers appear larger. Operating systems like Windows display
          file sizes in binary units (GiB) but confusingly label them as "GB."
          macOS switched to decimal units in 2009. Linux typically uses binary units
          with the correct KiB/MiB/GiB labels. This inconsistency is the primary
          source of "missing storage space" complaints worldwide.
        </p>
        <p>
          For bandwidth and data transfer, the situation adds another layer: network
          speeds are measured in bits per second (Mbps), while file sizes are measured
          in bytes. Since 1 byte = 8 bits, a 100 Mbps connection transfers about
          12.5 MB per second under ideal conditions. This converter's transfer time
          estimator accounts for this bits-to-bytes conversion and factors in common
          connection speeds from 3G mobile (2 Mbps) through 4G LTE (50 Mbps),
          broadband (100 Mbps), and gigabit fiber (1,000 Mbps) to give realistic
          upload and download time estimates for files of any size.
        </p>
      </div>
    ),

    proTip:
      "When a 1 TB SSD shows as 931 GB in Windows, both numbers are correct -- the drive has 1,000,000,000,000 bytes (1 TB decimal), but Windows displays it as 931 GiB (binary) while mislabeling the unit as 'GB'. Use this converter to verify both values and eliminate confusion in storage planning and documentation.",

    faqs: [
      {
        question: "What is the difference between MB and MiB (megabyte vs mebibyte)?",
        answer:
          "MB (megabyte) is a decimal unit equal to 1,000,000 bytes (10^6), defined by the SI standard. MiB (mebibyte) is a binary unit equal to 1,048,576 bytes (2^20), defined by the IEC standard. The difference is about 4.86%. At the gigabyte scale, 1 GB = 1,000,000,000 bytes while 1 GiB = 1,073,741,824 bytes -- a 7.37% gap. Storage vendors use decimal (bigger numbers), while most operating systems display binary units.",
      },
      {
        question: "Why does my hard drive show less space than advertised?",
        answer:
          "Storage manufacturers label drives using decimal units (1 TB = 1,000,000,000,000 bytes), but Windows displays sizes in binary units (GiB) while mislabeling them as 'GB'. So your 1 TB drive shows as approximately 931 'GB' (actually 931 GiB). No space is missing -- the two measurement standards simply produce different numbers for the same amount of bytes.",
      },
      {
        question: "Can I analyze the actual size of a file using this tool?",
        answer:
          "Yes. Drag and drop any file onto the File Analyzer tab to instantly see its exact size in bytes and all converted units (KB, MB, GB in both decimal and binary standards). The file is inspected locally in your browser -- no data is uploaded to any server, so it is safe for sensitive files.",
      },
      {
        question: "How does the file transfer time estimator work?",
        answer:
          "Enter a file size and select a connection speed preset (3G at 2 Mbps, 4G LTE at 50 Mbps, broadband at 100 Mbps, or gigabit fiber at 1000 Mbps) or enter a custom speed. The estimator converts between bits and bytes (1 byte = 8 bits) and calculates the theoretical transfer time. Real-world speeds are typically 60-80% of theoretical maximums due to overhead and network congestion.",
      },
      {
        question: "How do I convert MB to GB or GB to TB?",
        answer:
          "In decimal: 1 GB = 1,000 MB, 1 TB = 1,000 GB. In binary: 1 GiB = 1,024 MiB, 1 TiB = 1,024 GiB. Enter your value in any unit, and the converter instantly shows the equivalent in all other units. For example, 1,500 MB = 1.5 GB (decimal) or 1,500 MiB = approximately 1.465 GiB (binary).",
      },
      {
        question: "How many MB is 1500 bytes?",
        answer:
          "1500 bytes equals 0.0015 MB in decimal units because 1 MB = 1,000,000 bytes. In binary units, 1500 bytes equals about 0.00143 MiB because 1 MiB = 1,048,576 bytes.",
      },
      {
        question: "How many KB is 1,000,000 bytes?",
        answer:
          "1,000,000 bytes equals 1,000 KB in decimal units. In binary units, it equals about 976.56 KiB.",
      },
      {
        question: "How many MB is 1,000,000,000 bytes?",
        answer:
          "1,000,000,000 bytes equals 1,000 MB in decimal units, which is also 1 GB. In binary units, it equals about 953.67 MiB.",
      },
      {
        question: "What is the difference between bits and bytes in file sizes?",
        answer:
          "1 byte = 8 bits. File sizes are measured in bytes (B, KB, MB, GB), while network bandwidth is measured in bits per second (bps, Kbps, Mbps, Gbps). A 100 Mbps internet connection transfers about 12.5 MB per second. This distinction matters when estimating download times -- always divide the Mbps speed by 8 to get the MB/s transfer rate.",
      },
      {
        question: "Is this file size converter free to use?",
        answer:
          "Yes. This file size converter is 100% free with no signup, no account required, and no usage limits. All calculations run in your browser. The file analyzer inspects files locally without uploading them. Safe for personal and professional storage planning.",
      },
    ],

    relatedTools: [
      { name: "Base64 File Converter", href: "/converters/base64-file" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Length Converter", href: "/converters/length" },
      { name: "Time Zone Converter", href: "/converters/timezone" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function FileSizeConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<FileSizeConverter />)} />
}
