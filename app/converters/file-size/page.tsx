import { FileSizeConverter } from "@/components/converters/file-size-converter"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
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

    aboutTool: (
      <div className="space-y-12">
        <section>
          <p className="text-lg leading-relaxed">
            Digital storage units can be confusing because there are two different systems in use. This File Size Converter helps you navigate this complexity with authority, ensuring you never miscalculate storage requirements again.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">The Great Gigabyte Deception: Why 1TB = 931GB</h3>
          <p className="leading-relaxed">
            Have you ever bought a "1 TB" hard drive only to see "931 GB" in Windows? You weren't cheated. This is the result of a clash between two measurement systems:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Decimal (SI) System:</strong> Used by storage manufacturers (Western Digital, Seagate, Samsung). They define 1 Gigabyte as 1,000,000,000 bytes (10^9). This makes sense for marketing because it produces larger, rounder numbers.</li>
            <li><strong>Binary (IEC) System:</strong> Used by operating systems like Windows. They define 1 Gibibyte (GiB) as 1,073,741,824 bytes (2^30).</li>
          </ul>
          <p className="leading-relaxed">
            When you plug a "1,000,000,000,000 byte" drive (Manufacturer's 1TB) into a computer, the OS divides by 1,024 three times (1024 * 1024 * 1024), resulting in approximately 931 GiB. Our tool shows you both values side-by-side so you can plan accurately.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Storage Capacity Cheat Sheet</h3>
          <p className="leading-relaxed">
            "How many photos fit on my phone?" is one of the most common questions we get. Actual capacity varies by file format and resolution, but here are the industry-standard estimates:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-muted text-foreground">
                <tr>
                  <th className="p-3 border">Storage Size</th>
                  <th className="p-3 border">Photos (12MP JPEG)</th>
                  <th className="p-3 border">Video (1080p HD)</th>
                  <th className="p-3 border">Video (4K UHD)</th>
                  <th className="p-3 border">Songs (MP3)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border font-medium">64 GB</td>
                  <td className="p-3 border">~16,000</td>
                  <td className="p-3 border">~8.5 hours</td>
                  <td className="p-3 border">~2 hours</td>
                  <td className="p-3 border">~10,500</td>
                </tr>
                <tr>
                  <td className="p-3 border font-medium">128 GB</td>
                  <td className="p-3 border">~32,000</td>
                  <td className="p-3 border">~17 hours</td>
                  <td className="p-3 border">~4 hours</td>
                  <td className="p-3 border">~21,000</td>
                </tr>
                <tr>
                  <td className="p-3 border font-medium">256 GB</td>
                  <td className="p-3 border">~64,000</td>
                  <td className="p-3 border">~34 hours</td>
                  <td className="p-3 border">~8 hours</td>
                  <td className="p-3 border">~42,000</td>
                </tr>
                <tr>
                  <td className="p-3 border font-medium">1 TB</td>
                  <td className="p-3 border">~250,000</td>
                  <td className="p-3 border">~136 hours</td>
                  <td className="p-3 border">~32 hours</td>
                  <td className="p-3 border">~165,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            *Estimates based on: 4MB per photo, 130MB/min for 1080p, 375MB/min for 4K, and 6MB per song.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">The Math Behind the Conversion</h3>
          <p className="leading-relaxed">
            For those who want to understand the exact formulas used by our converter, here is the breakdown. The difference lies in the "base" number used for calculation.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Decimal (Base 10) Formula</h4>
              <p className="text-sm text-muted-foreground mb-2">Used for: Hard Drive Labels, Network Speeds, DVD/Blu-ray.</p>
              <code className="block bg-muted p-2 rounded text-sm mb-2">Value = Bytes / 1000^n</code>
              <ul className="text-sm space-y-1">
                <li>1 KB = 1,000 Bytes (10^3)</li>
                <li>1 MB = 1,000,000 Bytes (10^6)</li>
                <li>1 GB = 1,000,000,000 Bytes (10^9)</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Binary (Base 2) Formula</h4>
              <p className="text-sm text-muted-foreground mb-2">Used for: Windows OS, RAM, File Systems.</p>
              <code className="block bg-muted p-2 rounded text-sm mb-2">Value = Bytes / 1024^n</code>
              <ul className="text-sm space-y-1">
                <li>1 KiB = 1,024 Bytes (2^10)</li>
                <li>1 MiB = 1,048,576 Bytes (2^20)</li>
                <li>1 GiB = 1,073,741,824 Bytes (2^30)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Network Speed vs. File Size (Mbps vs. MB/s)</h3>
          <p className="leading-relaxed">
            One of the most common points of confusion in the digital world is the difference between internet speed and file size. Internet Service Providers (ISPs) advertise speeds in <strong>Megabits per second (Mbps)</strong>, but file downloads are measured in <strong>Megabytes per second (MB/s)</strong>.
          </p>
          <p className="leading-relaxed">
            The conversion factor is 8. Since 1 Byte = 8 bits:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>A <strong>100 Mbps</strong> internet connection can theoretically download at <strong>12.5 MB/s</strong> (100 / 8).</li>
            <li>A <strong>1 Gbps</strong> (Gigabit) connection tops out at <strong>125 MB/s</strong>.</li>
          </ul>
          <p className="leading-relaxed">
            This is why a 50 MB file doesn't download instantly on a 50 Mbps connection—it actually takes about 8 seconds (plus overhead).
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Understanding File Compression</h3>
          <p className="leading-relaxed">
            File size isn't just about raw data; it's about how that data is packed. Compression algorithms reduce file size to save storage and bandwidth. There are two main types:
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">1. Lossless Compression (ZIP, PNG, FLAC)</h4>
              <p className="text-muted-foreground">
                Reduces file size without losing a single bit of data. It works by identifying patterns (e.g., "100 white pixels" instead of listing "white pixel" 100 times). When uncompressed, the file is identical to the original. Perfect for text documents, software, and professional photography.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">2. Lossy Compression (JPEG, MP3, MP4)</h4>
              <p className="text-muted-foreground">
                Significantly reduces file size by permanently discarding data that the human eye or ear is less likely to notice. A high-quality JPEG might be 10x smaller than a PNG, but if you zoom in, you might see "artifacts." This is standard for streaming media and web images.
              </p>
            </div>
          </div>
        </section>



        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Common File Size Reference</h3>
          <p className="leading-relaxed">
            Use this quick reference to estimate your own storage needs:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 border rounded">
              <span className="block font-semibold">WhatsApp Image</span>
              <span className="text-muted-foreground">100 - 300 KB</span>
            </div>
            <div className="p-3 border rounded">
              <span className="block font-semibold">iPhone Photo (HEIC)</span>
              <span className="text-muted-foreground">1.5 - 3 MB</span>
            </div>
            <div className="p-3 border rounded">
              <span className="block font-semibold">Netflix Stream (HD)</span>
              <span className="text-muted-foreground">3 GB / hour</span>
            </div>
            <div className="p-3 border rounded">
              <span className="block font-semibold">Blu-ray Movie</span>
              <span className="text-muted-foreground">25 - 50 GB</span>
            </div>
            <div className="p-3 border rounded">
              <span className="block font-semibold">Windows 11 Install</span>
              <span className="text-muted-foreground">~20 - 64 GB</span>
            </div>
            <div className="p-3 border rounded">
              <span className="block font-semibold">Call of Duty: Warzone</span>
              <span className="text-muted-foreground">~175 GB</span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">File Size vs. Size on Disk</h3>
          <p className="leading-relaxed">
            You might notice that a file's "Size" and "Size on disk" are different in Windows properties. This is due to <strong>Cluster Size</strong> (or Allocation Unit Size).
          </p>
          <p className="leading-relaxed">
            Hard drives are divided into small chunks called clusters, typically 4 KB (4,096 bytes). A file must occupy a whole number of clusters.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Scenario A:</strong> A 1-byte text file takes up 1 full cluster (4 KB on disk). That's 4000x overhead!</li>
            <li><strong>Scenario B:</strong> A 4,097-byte file needs 2 clusters (8 KB on disk).</li>
          </ul>
          <p className="leading-relaxed">
            This "Slack Space" is wasted storage. On a drive with millions of tiny files, this overhead can eat up gigabytes of space.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">RAID Storage Explained</h3>
          <p className="leading-relaxed">
            If you manage a server or NAS, you use RAID (Redundant Array of Independent Disks). RAID combines multiple drives, but it affects your total usable storage:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">RAID 0 (Striping)</h4>
              <p className="text-sm text-muted-foreground">100% Capacity. Zero Redundancy.</p>
              <p className="text-sm mt-2">Two 1TB drives = 2TB total. Fast, but if one drive fails, you lose EVERYTHING.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">RAID 1 (Mirroring)</h4>
              <p className="text-sm text-muted-foreground">50% Capacity. High Redundancy.</p>
              <p className="text-sm mt-2">Two 1TB drives = 1TB total. Data is copied to both. If one fails, you're safe.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">RAID 5</h4>
              <p className="text-sm text-muted-foreground">(N-1) Capacity. Balanced.</p>
              <p className="text-sm mt-2">Three 1TB drives = 2TB total. One drive's worth of space is used for "parity" data to rebuild failures.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">RAID 10</h4>
              <p className="text-sm text-muted-foreground">50% Capacity. Best Performance.</p>
              <p className="text-sm mt-2">Four 1TB drives = 2TB total. Combines striping and mirroring for speed and safety.</p>
            </div>
          </div>
        </section>


      </div>
    ),

    aboutToolText: `Digital storage units can be confusing because there are two different systems in use. This File Size Converter helps you navigate this complexity with authority, ensuring you never miscalculate storage requirements again.

        The Great Gigabyte Deception: Why 1TB = 931GB
        Have you ever bought a "1 TB" hard drive only to see "931 GB" in Windows? You weren't cheated. This is the result of a clash between two measurement systems:
        - Decimal (SI) System: Used by storage manufacturers (Western Digital, Seagate, Samsung). They define 1 Gigabyte as 1,000,000,000 bytes (10^9). This makes sense for marketing because it produces larger, rounder numbers.
        - Binary (IEC) System: Used by operating systems like Windows. They define 1 Gibibyte (GiB) as 1,073,741,824 bytes (2^30).
        When you plug a "1,000,000,000,000 byte" drive (Manufacturer's 1TB) into a computer, the OS divides by 1,024 three times (1024 * 1024 * 1024), resulting in approximately 931 GiB. Our tool shows you both values side-by-side so you can plan accurately.

        The Math Behind the Conversion
        For those who want to understand the exact formulas used by our converter, here is the breakdown. The difference lies in the "base" number used for calculation.
        - Decimal (Base 10) Formula: Used for Hard Drive Labels, Network Speeds. Value = Bytes / 1000^n. (1 GB = 10^9 Bytes)
        - Binary (Base 2) Formula: Used for Windows OS, RAM. Value = Bytes / 1024^n. (1 GiB = 2^30 Bytes)

        Storage Capacity Cheat Sheet
        "How many photos fit on my phone?" is one of the most common questions we get. Actual capacity varies by file format and resolution, but here are the industry-standard estimates:
        - 64 GB: ~16,000 Photos (12MP), ~8.5 hours Video (1080p), ~2 hours Video (4K), ~10,500 Songs
        - 128 GB: ~32,000 Photos (12MP), ~17 hours Video (1080p), ~4 hours Video (4K), ~21,000 Songs
        - 256 GB: ~64,000 Photos (12MP), ~34 hours Video (1080p), ~8 hours Video (4K), ~42,000 Songs
        - 1 TB: ~250,000 Photos (12MP), ~136 hours Video (1080p), ~32 hours Video (4K), ~165,000 Songs
        *Estimates based on: 4MB per photo, 130MB/min for 1080p, 375MB/min for 4K, and 6MB per song.

        Data Transfer Time Estimator
        Knowing the file size is only half the battle; you also need to know how long it takes to move. Here is how long it takes to transfer 10 GB of data on common connection speeds:
        - Slow Connections:
        - 3G Mobile (3 Mbps): ~7.5 hours
        - Basic DSL (10 Mbps): ~2.2 hours
        - 4G LTE (20 Mbps): ~67 minutes
        - Fast Connections:
        - 5G / Wi-Fi 5 (100 Mbps): ~13 minutes
        - Gigabit Fiber (1 Gbps): ~80 seconds
        - USB 3.0 (5 Gbps): ~16 seconds

        Network Speed vs. File Size (Mbps vs. MB/s)
        One of the most common points of confusion in the digital world is the difference between internet speed and file size. Internet Service Providers (ISPs) advertise speeds in Megabits per second (Mbps), but file downloads are measured in Megabytes per second (MB/s).
        The conversion factor is 8. Since 1 Byte = 8 bits:
        - A 100 Mbps internet connection can theoretically download at 12.5 MB/s (100 / 8).
        - A 1 Gbps (Gigabit) connection tops out at 125 MB/s.
        This is why a 50 MB file doesn't download instantly on a 50 Mbps connection—it actually takes about 8 seconds (plus overhead).

        Understanding File Compression
        File size isn't just about raw data; it's about how that data is packed. Compression algorithms reduce file size to save storage and bandwidth. There are two main types:
        1. Lossless Compression (ZIP, PNG, FLAC): Reduces file size without losing a single bit of data. Perfect for text documents and software.
        2. Lossy Compression (JPEG, MP3, MP4): Significantly reduces file size by permanently discarding data. Standard for streaming media.

        A Brief History of Data Storage
        To appreciate the massive capacities we have today (like 1TB microSD cards), look at where we started:
        - 1956: The IBM 305 RAMAC was the first hard drive. It stored 5 MB and weighed over a ton.
        - 1971: The 8-inch Floppy Disk debuted, storing just 80 KB.
        - 1980: The first consumer 1 GB hard drive was released by IBM. It weighed 550 pounds.
        - 1990s: The CD-ROM brought 700 MB of storage to the masses.
        - 2000s: USB flash drives replaced floppies, starting at 8 MB and quickly growing to gigabytes.
        - Today: We have 100 TB SSDs for servers and 1 TB cards the size of a fingernail.

        File Size vs. Size on Disk
        You might notice that a file's "Size" and "Size on disk" are different in Windows properties. This is due to Cluster Size (or Allocation Unit Size).
        Hard drives are divided into small chunks called clusters, typically 4 KB (4,096 bytes). A file must occupy a whole number of clusters.
        - Scenario A: A 1-byte text file takes up 1 full cluster (4 KB on disk). That's 4000x overhead!
        - Scenario B: A 4,097-byte file needs 2 clusters (8 KB on disk).
        This "Slack Space" is wasted storage. On a drive with millions of tiny files, this overhead can eat up gigabytes of space.

        RAID Storage Explained
        If you manage a server or NAS, you use RAID (Redundant Array of Independent Disks). RAID combines multiple drives, but it affects your total usable storage:
        - RAID 0 (Striping): 100% Capacity. Zero Redundancy. Two 1TB drives = 2TB total. Fast, but if one drive fails, you lose EVERYTHING.
        - RAID 1 (Mirroring): 50% Capacity. High Redundancy. Two 1TB drives = 1TB total. Data is copied to both. If one fails, you're safe.
        - RAID 5: (N-1) Capacity. Balanced. Three 1TB drives = 2TB total. One drive's worth of space is used for "parity" data to rebuild failures.
        - RAID 10: 50% Capacity. Best Performance. Four 1TB drives = 2TB total. Combines striping and mirroring for speed and safety.

        Common File Size Reference
        Use this quick reference to estimate your own storage needs:
        - WhatsApp Image: 100 - 300 KB
        - iPhone Photo (HEIC): 1.5 - 3 MB
        - Netflix Stream (HD): 3 GB / hour
        - Blu-ray Movie: 25 - 50 GB
        - Windows 11 Install: ~20 - 64 GB
        - Call of Duty: Warzone: ~175 GB


        - Call of Duty: Warzone: ~175 GB`,

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