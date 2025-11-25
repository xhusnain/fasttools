import { FileSizeConverter } from "@/components/file-size-converter"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const currentYear = new Date().getFullYear()
const pageTitle = `File Size Converter - Byte to TB Calculator ${currentYear}`
const pageDescription = "Convert file sizes instantly (KB, MB, GB, TB). Free online calculator for cloud storage, backups, and AI datasets with decimal & binary units."

const toolConfig = createToolConfig({
  toolName: "File Size Converter",
  description: "Convert file sizes instantly: KB to MB, GB to TB, PB to EB with decimal (SI) and binary (IEC) units. Free online data size calculator for cloud storage, AI datasets, backups, and hosting limits.",
  metaTitle: pageTitle,
  metaDescription: pageDescription,
  path: "/converters/file-size",

  header: {
    title: pageTitle,
    description: pageDescription,
    titleSize: "large",
    descriptionSize: "medium",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "File Size Converter", href: "/converters/file-size" },
  ],

  content: {
    overview: "In the digital age, understanding file sizes is fundamental. Our File Size Converter is a professional-grade tool designed to bridge the gap between human-readable units and machine-level storage metrics. Whether you're a developer optimizing database schemas, a content creator managing 4K video assets, or an IT professional planning cloud infrastructure, this tool provides instant, accurate conversions between all standard digital storage units. It seamlessly handles both the Decimal (SI) system used by storage manufacturers and the Binary (IEC) system used by operating systems, ensuring you never miscalculate storage requirements again.",

    howToSteps: [
      "Enter the value you want to convert in the input field.",
      "Select the source unit (e.g., MB, GB, TiB) from the dropdown menu.",
      "Choose your target unit to see the conversion instantly.",
      "Toggle between 'Decimal' and 'Binary' modes to understand the difference between marketing labels (1 TB = 1000 GB) and actual OS space (1 TiB = 1024 GiB).",
      "Copy the precise result to your clipboard for use in reports or configurations."
    ],

    features: [
      "Dual System Support: Convert between Decimal (SI) and Binary (IEC) units with precision",
      "Comprehensive Range: Support for Bytes, KB, MB, GB, TB, PB, EB, ZB, and YB",
      "Real-Time Calculation: Instant results as you type without page reloads",
      "100% Client-Side Privacy: No data is ever sent to our servers",
      "Mobile-Optimized: Perfect for checking storage limits on the go",
      "Upload Limit Checker: Verify if your files meet email or platform constraints",
      "Storage Optimization: Identify actual space usage vs. marketing claims",
      "Cloud Cost Planning: Estimate storage costs accurately by normalizing units"
    ],

    useCases: [
      "Cloud Storage Planning: Convert between decimal GB (AWS/Google Cloud) and binary GiB to estimate costs accurately.",
      "Backup Estimation: Calculate total backup sizes for disaster recovery planning.",
      "Upload Limit Verification: Check if files fit within email (25MB) or social media limits.",
      "Network Transfer Planning: Estimate transfer times by converting file sizes to bits.",
      "DevOps & Infrastructure: Size database volumes and log partitions correctly.",
      "Content Creation: Manage video and image library storage requirements.",
      "Data Science: Estimate memory requirements for loading large AI datasets."
    ],

    aboutTool: `Digital storage units can be confusing because there are two different systems in use. This File Size Converter helps you navigate this complexity with authority.

Why Trust This Tool?
We strictly adhere to international standards set by the International Electrotechnical Commission (IEC) and the International System of Units (SI).
- **Decimal (SI)**: Powers of 10. 1 Kilobyte (KB) = 1,000 bytes. Used by storage manufacturers (HDD/SSD labels) and network speeds.
- **Binary (IEC)**: Powers of 2. 1 Kibibyte (KiB) = 1,024 bytes. Used by Windows and RAM specifications.

The "Gigabyte Lie"
Have you ever bought a "1 TB" hard drive only to see "931 GB" in Windows? You weren't cheated. The manufacturer sold you 1,000,000,000,000 bytes (Decimal TB), but Windows calculates in Binary GiB (1,099,511,627,776 bytes per TiB). Our tool shows you both values, eliminating this confusion forever.`,

    proTip: "Always check which unit your cloud provider uses. AWS S3 uses binary units (GiB) for storage pricing but often labels them as 'GB'. Misunderstanding this difference can lead to a 7% underestimation in storage costs at the petabyte scale.",

    faqs: [
      {
        question: "Why do operating system disk sizes look smaller than vendor labels?",
        answer: "Storage manufacturers use decimal units (1 GB = 1,000,000,000 bytes) for marketing, while operating systems display binary units (1 GiB = 1,073,741,824 bytes). This explains why a 1 TB drive appears as approximately 931 GiB in your OS. Our converter shows both systems so your storage plans reflect reality."
      },
      {
        question: "When should I use KB/MB/GB versus KiB/MiB/GiB?",
        answer: "Use decimal units (KB, MB, GB) for marketing materials, network specifications, and cloud provider documentation. Use binary units (KiB, MiB, GiB) for operating systems, file systems, and memory measurements. The key is consistency—choose one system per project and label clearly."
      },
      {
        question: "How do I estimate upload or download time for large files?",
        answer: "Convert file size and network speed to compatible units (both in bits or both in bytes), then calculate: time = file size ÷ transfer speed. Remember that 1 byte = 8 bits. For example, downloading 1 GB (8,000 megabits) over a 100 Mbps connection takes approximately 80 seconds."
      },
      {
        question: "Why doesn't file compression reduce size as much as expected?",
        answer: "Already-compressed formats like JPEG, WebP, MP4, and ZIP have little redundancy to compress further. Text files, CSV data, and uncompressed images compress well. The compression ratio depends on file type, original compression level, and algorithm used."
      },
      {
        question: "How can I accurately budget for cloud storage costs?",
        answer: "Normalize all file sizes to a single unit system (GB or GiB), then apply your cloud provider's pricing. Include factors for data replication, versioning, growth projections, and retention policies. Note whether your provider uses decimal or binary units in pricing."
      },
      {
        question: "Do thumbnails and metadata significantly affect total storage at scale?",
        answer: "Yes, at scale these overheads multiply significantly. Each file object includes metadata, previews, thumbnails, and indexing data. Add a 10-30% buffer for these overheads when planning storage."
      },
      {
        question: "What rounding precision should I use for storage reports?",
        answer: "Maintain high precision internally for calculations, then round only at presentation. For dashboards, use 1-2 decimal places. For contracts and specifications, include exact byte counts in appendices."
      },
      {
        question: "How to increase file size limit in Outlook?",
        answer: "Outlook typically enforces a 20MB - 25MB attachment limit. While you can modify this via Windows Registry edits (for Exchange servers), the most reliable method is to upload your file to a cloud service like OneDrive or Google Drive and share the link. This avoids email bounce-backs and keeps your inbox fast."
      },
      {
        question: "Is there an average file size calculator?",
        answer: "While 'average' varies by content, you can use our tool to estimate capacity. Common averages are: Smartphone Photo (3-5 MB), MP3 Song (4-6 MB), 1080p Movie (1.5-2 GB per hour), and 4K Video (20-40 GB per hour). Multiply these averages by your quantity to plan storage needs."
      },
      {
        question: "How long does it take to convert a file?",
        answer: "If you mean converting *units* (like MB to GB), our tool is instant. If you mean converting a file's *format* (e.g., MP4 to AVI), it depends on your computer's speed and the file size. Generally, transcoding a 1GB video might take 2-10 minutes on a modern laptop, while converting a small image is nearly instant."
      },
      {
        question: "How to change file size on computer?",
        answer: "To reduce file size, you can compress it into a ZIP folder (Right-click > Send to > Compressed folder) or use specific tools to lower the resolution/quality of images and videos. To increase file size (padding), you would typically need specialized developer tools to add dummy data, which is useful for testing storage limits."
      }
    ],

    relatedTools: [
      { name: "Length Converter", href: "/converters/length" },
      { name: "Temperature Converter", href: "/converters/temperature" },
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "Text Case Converter", href: "/converters/text-case" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function FileSizeConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<FileSizeConverter />)} />
}