import { FileSizeConverter } from "@/components/file-size-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "File Size Converter - KB, MB, GB, TB | FastTools",
  description:
    "Free online file size converter. Convert between bytes, KB, MB, GB, and TB instantly. Perfect for understanding storage sizes.",
  keywords: "file size converter, KB to MB, MB to GB, storage converter, byte converter, data size converter",
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">File Size Converter</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Convert between different file size units including bytes, KB, MB, GB, and TB.
            </p>
          </div>

          <FileSizeConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">About File Size Converter</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our file size converter helps you understand and convert between different digital storage units. Perfect
              for managing files, understanding storage capacity, and planning data transfers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
