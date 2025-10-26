import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, FileStack, Unlock, ArrowRight, Code, Globe, File } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Free PDF Tools – Split, Merge, Unlock & Compress PDFs Online | FastTools",
  description:
    "Free PDF tools: PDF splitter, PDF merger, PDF unlocker, PDF compressor, and PDF converter. Professional results, 100% secure.",
  keywords: [
    // High-Volume PDF Keywords
    "PDF splitter online",
    "PDF merger free",
    "PDF unlocker tool",
    "PDF compressor online",
    "PDF to image converter",

    // PDF Tools Keywords
    "split PDF online",
    "merge PDF free",
    "unlock PDF tool",
    "compress PDF online",
    "convert PDF to image",
    "PDF editor online",
    "PDF password remover",
    "PDF file splitter",
    "PDF document merger",
    "PDF size reducer",

    // Existing Keywords
    "PDF tools",
    "free PDF tools",
    "online PDF tools",
    "PDF splitter",
    "PDF merger",
    "PDF unlocker",
    "PDF compressor",
    "PDF converter",
    "document tools",
    "file conversion tools"
  ],
  openGraph: {
    title: "Free PDF Tools – Split, Merge, Unlock & Compress PDFs Online | FastTools",
    description:
      "Free PDF tools: PDF splitter, PDF merger, PDF unlocker, PDF compressor, and PDF converter. Professional results, 100% secure.",
    url: "https://www.fasttools.store/pdf-tools",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free PDF Tools – Split, Merge, Unlock & Compress PDFs Online",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Tools – Split, Merge, Unlock & Compress PDFs Online | FastTools",
    description: "Free PDF tools: PDF splitter, PDF merger, PDF unlocker, PDF compressor, and PDF converter. Professional results, 100% secure.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/pdf-tools",
  },
}

const pdfTools = [
  {
    title: "PDF Splitter & Merger",
    description: "Split large PDFs with PDF splitter online or merge multiple PDFs with PDF merger free. Fast and secure processing.",
    icon: FileStack,
    href: "/pdf-tools/pdf-splitter-merger",
    popular: true,
  },
  {
    title: "PDF Unlocker",
    description: "Remove password protection from PDFs with PDF unlocker tool. Unlock your documents quickly and easily.",
    icon: Unlock,
    href: "/pdf-tools/pdf-unlocker",
    popular: true,
  },
  {
    title: "PDF Compressor",
    description: "Reduce PDF file size with PDF compressor online. Compress PDFs while maintaining quality.",
    icon: File,
    href: "/pdf-tools/pdf-compressor",
    popular: false,
  },
  {
    title: "PDF to Image Converter",
    description: "Convert PDF pages to images with PDF to image converter. Extract images from PDF documents.",
    icon: FileText,
    href: "/pdf-tools/pdf-to-image",
    popular: false,
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free PDF Tools – Split, Merge, Unlock & Compress PDFs Online | FastTools",
  description: "Free PDF tools: PDF splitter, PDF merger, PDF unlocker, PDF compressor, and PDF converter. Professional results, 100% secure.",
  url: "https://www.fasttools.store/pdf-tools",
  mainEntity: {
    "@type": "ItemList",
    name: "PDF Tools Collection",
    description: "Comprehensive collection of free online PDF utility tools for document manipulation, compression, and conversion",
    numberOfItems: 4,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "PDF Splitter & Merger", description: "Split large PDFs or merge multiple PDFs into one", url: "https://www.fasttools.store/pdf-tools/pdf-splitter-merger" },
      { "@type": "ListItem", position: 2, name: "PDF Unlocker", description: "Remove password protection from PDFs", url: "https://www.fasttools.store/pdf-tools/pdf-unlocker" },
      { "@type": "ListItem", position: 3, name: "PDF Compressor", description: "Reduce PDF file size while maintaining quality", url: "https://www.fasttools.store/pdf-tools/pdf-compressor" },
      { "@type": "ListItem", position: 4, name: "PDF to Image Converter", description: "Convert PDF pages to images", url: "https://www.fasttools.store/pdf-tools/pdf-to-image" }
    ]
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fasttools.store" },
      { "@type": "ListItem", position: 2, name: "PDF Tools", item: "https://www.fasttools.store/pdf-tools" }
    ]
  },
  about: {
    "@type": "Thing",
    name: "PDF Document Management",
    description: "Free online tools for PDF manipulation, compression, conversion, and document management"
  },
  isPartOf: {
    "@type": "WebSite",
    name: "FastTools",
    url: "https://www.fasttools.store"
  }
}

export default function PDFToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "PDF Tools", href: "/pdf-tools" },
        ]}
      />

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 lg:flex-[2] space-y-6">
                {/* Hero Section */}
                <div className="text-center space-y-5 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                    <Code className="h-4 w-4 animate-pulse" />
                    <span>PDF Document Processing Tools</span>
                    <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
        </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                    Free PDF Tools – Split, Merge, Unlock & Compress PDFs Online
                  </h1>

                  <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    Split PDFs, merge documents, unlock password-protected files, compress file sizes, and convert PDFs to images — all free, fast, and online. No signup or software needed.
                  </p>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                      <Code className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium text-sm">4+ Tools</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-green-500 shadow">
                      <Globe className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 font-medium text-sm">Global Use</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-accent shadow">
                      <FileText className="h-4 w-4 text-accent" />
                      <span className="text-accent font-medium text-sm">Free Forever</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-secondary-accent shadow">
                      <ArrowRight className="h-4 w-4 text-secondary-accent" />
                      <span className="text-secondary-accent font-medium text-sm">Professional</span>
                    </div>
                  </div>
        </div>

                {/* Mobile/Tablet Ad - Top of Page */}
                <div className="block xl:hidden mb-6">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="header" className="w-full h-24 border border-border rounded-xl shadow-sm bg-card" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {pdfTools.map((tool, index) => (
                    <Card
                      key={`pdf-tools-${tool.href}`}
                      className="border border-border shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 animate-fade-in-up group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader className="p-3 pb-1">
                        <div className="flex items-start gap-3">
                          <div className="h-9 w-9 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0 bg-primary/10 border border-primary/20">
                            <tool.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-sm md:text-base font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-2">{tool.title}</CardTitle>
                            <CardDescription className="leading-relaxed text-[11px] md:text-xs text-muted-foreground line-clamp-2">
                  {tool.description}
                </CardDescription>
                          </div>
                        </div>
              </CardHeader>
                      <CardContent className="p-3 pt-0">
                        <Button asChild className="w-full h-8 text-xs font-semibold shadow hover:shadow-md transition-all duration-300 bg-primary hover:bg-primary/90 text-white group-hover:bg-accent group-hover:text-white">
                          <Link href={tool.href} className="flex items-center justify-center gap-1">
                    Use Tool
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

                {/* Mobile/Tablet Ad - After cards */}
                <div className="block xl:hidden my-8">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
        </div>
                  <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
          </div>

                {/* Content Sections */}
                <div className="space-y-5 animate-fade-in-up animation-delay-200">
                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Professional PDF Processing & Document Management</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Our advanced PDF tools combine cutting-edge document processing algorithms with intelligent file management capabilities. All operations run locally in your browser for maximum privacy and speed.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Advanced PDF Manipulation</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      High-performance PDF processing technology for splitting, merging, compressing, and converting documents with support for various PDF formats and security features. Perfect for PDF splitter online, PDF merger free, and PDF unlocker tool needs. Our free PDF tools provide professional-grade document manipulation capabilities.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Intelligent Document Processing</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Smart algorithms handle complex PDF structures, maintain document integrity, and preserve formatting across all operations. Whether you're using PDF compressor online or PDF to image converter, our tools ensure professional results.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">PDF Tools & Document Management Use Cases</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Discover practical applications for our PDF tools in business operations, document management, and file organization.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Business Document Management</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Organize PDF files with PDF splitter online and PDF merger free tools, unlock password-protected documents with PDF unlocker tool, convert documents with PDF to image converter, compress files with PDF compressor online, and streamline document workflows.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Content Creation & Distribution</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Create custom document packages, prepare presentations, and distribute professional materials using our comprehensive PDF toolset.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Advanced PDF Conversion & Optimization</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Comprehensive PDF processing capabilities including PDF to image converter, PDF compressor online, file size optimization, and document format conversion for professional file management.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Format Conversion & Optimization</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Convert PDF pages to images with PDF to image converter, optimize file sizes with PDF compressor online, and process documents for efficient file management and distribution.
                    </p>
                  </div>

                  {/* FAQ Section */}
                  <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-card-foreground flex items-center gap-2">
                      <div className="h-6 w-6 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Code className="h-4 w-4 text-accent" />
                      </div>
                      Free PDF Tools: Complete Guide
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What are the best free PDF tools for document management?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our PDF tools provide comprehensive document management capabilities including splitting large PDFs into smaller sections, merging multiple documents into one file, removing password protection, compressing file sizes, and converting PDFs to images. These tools are essential for organizing large document collections, creating custom document packages, and accessing password-protected files. All operations happen locally in your browser, ensuring complete privacy and security for sensitive documents.</p>
          </div>

          <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How does PDF compression work and what makes it effective?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our PDF compressor online uses advanced algorithms to reduce file size while maintaining document quality. It optimizes images, removes unnecessary data, and compresses text efficiently. The tool offers adjustable compression levels, allowing you to balance file size reduction with quality preservation. Professional users rely on this for email attachments, web uploads, and storage optimization. The algorithm works best with documents containing images and maintains readability across different compression settings.</p>
              </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What's the best way to use PDF splitter and merger tools?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">PDF splitter online helps break down lengthy documents into manageable sections, while PDF merger free combines related documents for easier distribution. The splitter is ideal for extracting specific pages or chapters, while the merger creates comprehensive documents from multiple sources. These tools are essential for organizing large document collections, creating custom packages, and managing document workflows. All operations preserve document formatting and maintain professional quality.</p>
              </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How secure are PDF unlocker tools for sensitive documents?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our PDF unlocker tool safely removes password protection while maintaining document integrity. The tool operates entirely within your browser, ensuring your files never leave your device. This client-side processing eliminates concerns about data breaches or unauthorized access. Users can confidently unlock sensitive business documents, legal files, and personal PDFs without compromising security. The unlocker preserves all document content and formatting while removing access restrictions.</p>
              </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">Are these PDF tools safe to use with confidential business documents?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Yes, all our PDF tools prioritize user privacy and security by operating entirely within your browser. Your files never leave your device, ensuring complete privacy and security. We don't store, track, or transmit any of your data, making our tools safe for sensitive documents, confidential business materials, and legal files. This client-side processing eliminates concerns about data breaches, unauthorized access, or unwanted data collection. Users can confidently process sensitive PDFs without worrying about privacy implications.</p>
              </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I integrate PDF tools into my business workflow effectively?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Integrating PDF tools into your business workflow can significantly improve efficiency and productivity. Use PDF splitter online for document organization, PDF merger free for creating comprehensive reports, PDF unlocker tool for accessing locked files, PDF compressor online for optimizing file sizes, and PDF to image converter for content extraction. These tools work best when used consistently as part of established business processes. Set specific workflows for document processing, file management, and distribution. The key is to view these tools as enhancements to existing business activities rather than standalone solutions.</p>
              </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What makes these PDF tools different from other document processing software?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our PDF tools distinguish themselves through their focus on professional application, user experience, and privacy-first design. Unlike traditional software that requires downloads or cloud uploads, these tools operate entirely in your browser, ensuring complete privacy and instant access. They're designed with business use in mind, featuring outputs that are both high-quality and suitable for professional presentation. The tools prioritize speed and simplicity, delivering instant results without complex setup or learning curves. They're optimized for mobile use, ensuring consistent performance across all devices.</p>
            </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">Can PDF tools help with business growth and professional development?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Absolutely! PDF tools are invaluable for business growth, professional development, and competitive advantage. PDF splitter online and PDF merger free help organize and distribute business documents efficiently. PDF unlocker tool provides access to password-protected files. PDF compressor online optimizes file sizes for faster sharing. PDF to image converter extracts content for various uses. These tools provide professional-quality results that enhance business presentations, client communications, and document management. They help businesses maintain professional standards in document handling and contribute to overall business credibility and growth.</p>
          </div>

          <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How do I choose the right PDF tool for my specific business needs?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Selecting the appropriate PDF tool depends on your business type, document needs, and specific use cases. Document-heavy businesses benefit most from PDF splitter online and PDF merger free utilities. Legal and financial services should prioritize PDF unlocker tool for accessing protected documents. Marketing and content teams need PDF compressor online for optimizing file sizes. Consider your primary business activities: are you managing documents, creating presentations, or distributing materials? Each tool excels in specific scenarios. PDF tools are essential for document-heavy businesses and professional services.</p>
          </div>

          <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What are the most creative ways to use PDF tools beyond their basic functions?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">PDF tools offer numerous creative applications beyond their primary purposes. Use PDF splitter online to extract specific sections for targeted distribution, PDF merger free to create custom document packages, PDF unlocker tool to access legacy documents, PDF compressor online to optimize files for web sharing, and PDF to image converter to extract graphics or create thumbnails. Content creators can use these tools to prepare materials for different platforms, organize research documents, or create presentation materials. The key is to think beyond traditional uses and explore how these tools can enhance various aspects of business operations and document management.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How effective is PDF compression and what affects its performance?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our PDF compressor online achieves significant file size reduction (up to 90%) while maintaining document quality. Effectiveness depends on document content: image-heavy PDFs compress better than text-only documents. The tool uses advanced algorithms that optimize images, remove redundant data, and compress text efficiently. For best results, use high-quality source documents and choose appropriate compression levels. The compressor works best with PDFs containing photos, graphics, or scanned documents. Complex layouts or already compressed files may have smaller reduction percentages.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What's the best way to organize documents with PDF splitter and merger?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Professional document organization requires understanding document structure, content relationships, and distribution needs. PDF splitter online helps create focused documents by extracting specific pages or sections, while PDF merger free combines related materials into comprehensive packages. For optimal results, plan your document organization strategy before processing. Consider your audience's needs, content flow, and file size requirements. The tools work best when used systematically as part of a document management workflow. Professional users create templates for common document types and maintain consistent organization standards.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How can PDF tools improve document management and productivity?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">PDF tools provide comprehensive support for document management and productivity optimization. PDF splitter online helps organize large documents into manageable sections, PDF merger free creates comprehensive reports from multiple sources, PDF unlocker tool provides access to protected files, PDF compressor online optimizes file sizes for sharing, and PDF to image converter extracts content for various uses. These tools work together to create a complete document management ecosystem: organize files with splitter and merger, access protected documents with unlocker, optimize sizes with compressor, and convert formats as needed. The privacy-focused design means all processing stays local, protecting sensitive business documents while providing accurate, professional results.</p>
                      </div>
                    </div>
                    <div className="mt-6 block xl:hidden">
                      <div className="text-center mb-2">
                        <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                      </div>
                      <AdSpace slot="content" className="w-full h-32 border border-border rounded-xl shadow-sm bg-card" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Desktop Sidebar with AdSense (sticky, lowered start) */}
              <div className="hidden lg:block w-72">
                <div className="sticky top-32 space-y-6">
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-96 border border-border rounded-xl shadow-sm bg-card" />

                  <div className="text-center">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-96 border border-border rounded-xl shadow-sm bg-card" />
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </>
  )
}