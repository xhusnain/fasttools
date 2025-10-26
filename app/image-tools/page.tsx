import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Beer as Blur, Crop, FileStack, Unlock, ArrowRight, Code, Globe } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Free Image Tools – OCR, Photo Editor, Background Blur | FastTools",
  description:
    "Free image tools: OCR converter, photo editor, background blur, image processing. Professional results, 100% secure.",
  keywords: [
    // High-Volume OCR Keywords
    "image to text converter",
    "OCR tool online",
    "extract text from image",
    "photo to text converter",
    "free OCR software",

    // Image Editing Keywords
    "background blur tool",
    "photo background remover",
    "image resizer online",
    "photo editor online",

    // File Conversion Keywords
    "image format converter",
    "JPG to PNG converter",
    "image compression tool",
    "batch image converter",
    "image watermark remover",

    // Existing Keywords
    "image tools",
    "free image tools",
    "image to text",
    "OCR converter",
    "background blur",
    "online image editor",
    "image processing tools",
    "file conversion tools",
    "image editing tools",
    "OCR tools",
    "image manipulation tools",
    "file utility tools"
  ],
  openGraph: {
    title: "Free Image Tools – OCR, Photo Editor, Background Blur | FastTools",
    description:
      "Free image tools: OCR converter, photo editor, background blur, image processing. Professional results, 100% secure.",
    url: "https://www.fasttools.store/image-tools",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Image Tools – OCR, Photo Editor, Background Blur",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Tools – OCR, Photo Editor, Background Blur | FastTools",
    description: "Free image tools: OCR converter, photo editor, background blur, image processing. Professional results, 100% secure.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/image-tools",
  },
}

const imageTools = [
  {
    title: "Image to Text (OCR)",
    description: "Extract text from images using OCR technology. Perfect for digitizing documents and converting images to editable text.",
    icon: FileText,
    href: "/image-tools/image-to-text",
    popular: true,
  },
  {
    title: "Image Background Remover",
    description: "Remove image backgrounds instantly with AI technology. Create transparent backgrounds for photos, products, and graphics.",
    icon: Crop,
    href: "/image-tools/image-background-remover",
    popular: true,
  },
  {
    title: "Free AI Photo Editor – Edit, Enhance & Remove Backgrounds Online",
    description: "Edit photos instantly with our free AI photo editor. Remove backgrounds, enhance images, add filters & effects – all online, no download needed.",
    icon: Blur,
    href: "/image-tools/photo-editor",
    popular: true,
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Image Tools – OCR, Photo Editor, Background Blur | FastTools",
  description: "Free image tools: OCR converter, photo editor, background blur, image processing. Professional results, 100% secure.",
  url: "https://www.fasttools.store/image-tools",
  mainEntity: {
  "@type": "ItemList",
  name: "Image Tools Collection",
  description: "Comprehensive collection of free online image processing and editing tools for OCR, photo editing, and visual content creation",
  numberOfItems: 3,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Image to Text (OCR)", description: "Extract text from images using OCR technology", url: "https://www.fasttools.store/image-tools/image-to-text" },
    { "@type": "ListItem", position: 2, name: "Image Background Remover", description: "Remove image backgrounds with AI technology", url: "https://www.fasttools.store/image-tools/image-background-remover" },
    { "@type": "ListItem", position: 3, name: "Photo Editor", description: "Edit photos with professional tools and filters", url: "https://www.fasttools.store/image-tools/photo-editor" }
  ]
},
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fasttools.store" },
      { "@type": "ListItem", position: 2, name: "Image Tools", item: "https://www.fasttools.store/image-tools" }
    ]
  },
  about: {
    "@type": "Thing",
    name: "Image Processing and File Management",
    description: "Free online tools for image processing, OCR text extraction, PDF manipulation, and file conversion"
  },
  isPartOf: {
    "@type": "WebSite",
    name: "FastTools",
    url: "https://www.fasttools.store"
  }
}

export default function ImageToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Image Tools", href: "/image-tools" },
        ]}
      />

          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 lg:flex-[2] space-y-6">
                {/* Hero Section */}
                <div className="text-center space-y-5 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-accent text-white text-xs md:text-sm font-semibold mb-4 shadow-md">
                    <Code className="h-4 w-4 animate-pulse" />
                    <span>Image Processing Tools</span>
                    <div className="h-2 w-2 bg-secondary-accent rounded-full animate-ping"></div>
        </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                    Free Image Tools – OCR, Photo Editor, Background Blur Online
                  </h1>

                  <p className="text-base md:text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                    Edit photos, extract text (OCR), blur backgrounds, and process images — all free, fast, and online. No signup or software needed.
                  </p>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
                    <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-card border border-primary shadow">
                      <Code className="h-4 w-4 text-primary" />
                      <span className="text-primary font-medium text-sm">3+ Tools</span>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {imageTools.map((tool, index) => (
                    <Card
                      key={`image-tools-${tool.href}`}
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

                {/* Content Sections */}
                <div className="space-y-5 animate-fade-in-up animation-delay-200">
                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Professional Image Processing & OCR Technology</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Our advanced image tools combine cutting-edge OCR technology with intelligent image processing algorithms. All operations run locally in your browser for maximum privacy and speed.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Advanced OCR Text Extraction</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      High-accuracy OCR technology extracts text from images and scanned documents with support for multiple languages and font types. Perfect for image to text converter, photo to text converter, and extract text from image needs. Our free OCR software provides professional-grade text recognition capabilities.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Intelligent Image Processing</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Image Tools & PDF Management Use Cases</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Discover practical applications for our image and file tools in content creation, business operations, and document management.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Content Creation & Social Media</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Business Document Management</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Digitize paper documents with OCR tool online, organize PDF files with PDF splitter online and PDF merger free tools, unlock password-protected documents with PDF unlocker tool, convert documents with PDF to image converter, compress files with PDF compressor online, and streamline document workflows.
                    </p>
                  </div>

                  <div className="p-5 rounded-lg bg-card border border-border shadow">
                    <h2 className="text-xl font-bold mb-4 text-card-foreground">Advanced File Conversion & Processing</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Comprehensive file conversion capabilities including image format converter, JPG to PNG converter, image compression tool, batch image converter, and image watermark remover for professional file management.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-card-foreground">Format Conversion & Optimization</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Convert between image formats with our image format converter, optimize file sizes with image compression tool, process multiple files with batch image converter, and remove unwanted elements with image watermark remover for efficient file management.
                    </p>
                  </div>

                  {/* FAQ Section */}
                  <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-card-foreground flex items-center gap-2">
                      <div className="h-6 w-6 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Code className="h-4 w-4 text-accent" />
                      </div>
                      Free Image & File Tools: Complete Guide
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What are the best free OCR tools for text extraction?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our OCR tool online uses advanced optical character recognition technology to extract text from images and scanned documents with high accuracy. It supports multiple languages, various fonts, and different text orientations. The tool is perfect for digitizing paper documents and converting images to editable text. It works entirely in your browser, ensuring complete privacy and security for sensitive documents. The OCR engine handles complex layouts, handwritten text, and low-quality images while maintaining professional accuracy standards.</p>
          </div>

          <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How does background blur work and what makes it professional?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our background blur tool uses sophisticated edge detection algorithms to identify subjects and create natural-looking blur effects. It automatically detects the main subject in your image and applies selective blurring to the background while keeping the subject sharp and clear. The tool offers adjustable blur intensity, allowing you to create subtle or dramatic effects depending on your needs. Professional photographers and content creators use this technique to create depth, focus attention on subjects, and produce studio-quality results. The algorithm works best with portraits and objects that have clear separation from their backgrounds.</p>
              </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What's the best way to use PDF tools for document management?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our PDF tools provide comprehensive document management capabilities including splitting large PDFs into smaller sections, merging multiple documents into one file, and removing password protection from locked PDFs. These tools are essential for organizing large document collections, creating custom document packages, and accessing password-protected files. The splitter helps break down lengthy documents into manageable sections, while the merger combines related documents for easier distribution. The unlocker safely removes password protection while maintaining document integrity. All operations happen locally in your browser, ensuring complete privacy and security for sensitive documents.</p>
              </div>

                      <div>
              </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">Are these tools safe to use with sensitive documents and images?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Yes, all our image and file tools prioritize user privacy and security by operating entirely within your browser. Your files never leave your device, ensuring complete privacy and security. We don't store, track, or transmit any of your data, making our tools safe for sensitive documents, personal images, and confidential business materials. This client-side processing eliminates concerns about data breaches, unauthorized access, or unwanted data collection. Users can confidently process sensitive documents, personal photos, and confidential business materials without worrying about privacy implications. The local processing also ensures faster performance and eliminates dependency on internet connectivity for core functionality.</p>
              </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I integrate these tools into my business workflow effectively?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Integrating image and file tools into your business workflow can significantly improve efficiency and productivity. Use OCR tools during document digitization processes, employ background blur for professional product photography, utilize PDF tools for document organization and distribution, and incorporate image cropping for consistent branding across all marketing materials. These tools work best when used consistently as part of established business processes rather than randomly. Set specific workflows for document processing, image editing, and file management. The key is to view these tools as enhancements to existing business activities rather than standalone solutions. They can serve as efficiency boosters, quality enhancers, and professional presentation aids when used strategically in your business operations.</p>
              </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What makes these tools different from other image processing software?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our image and file tools distinguish themselves through their focus on professional application, user experience, and privacy-first design. Unlike traditional software that requires downloads or cloud uploads, these tools operate entirely in your browser, ensuring complete privacy and instant access. They're designed with business use in mind, featuring outputs that are both high-quality and suitable for professional presentation. The tools prioritize speed and simplicity, delivering instant results without complex setup or learning curves. They're optimized for mobile use, ensuring consistent performance across all devices. The combination of privacy-focused design, professional-quality results, and practical utility creates a unique user experience that serves both personal and business needs. Each tool is crafted to provide maximum value with minimal effort, making them accessible to users of all technical skill levels.</p>
            </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">Can these tools help with business growth and professional development?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Absolutely! These tools are invaluable for business growth, professional development, and competitive advantage. OCR tools help digitize and organize business documents, improving operational efficiency. Background blur creates professional product photography without expensive equipment. PDF tools streamline document management and client communications. Image cropping ensures consistent branding across all marketing materials. The tools provide professional-quality results that enhance business presentations, client communications, and marketing materials. They also help businesses maintain professional standards in visual communications and document management. The tools generate outputs that can be used in business presentations, client deliverables, and professional communications, contributing to overall business credibility and growth.</p>
          </div>

          <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How do I choose the right image tool for my specific business needs?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Selecting the appropriate image tool depends on your business type, content needs, and specific use cases. For content creators and marketers, background blur and image cropping are essential for professional visual content. Document-heavy businesses benefit most from OCR tools and PDF management utilities. E-commerce businesses should prioritize image cropping for product photos and background blur for professional presentations. Consider your primary business activities: are you creating content, managing documents, selling products, or building brand presence? Each tool excels in specific scenarios. OCR tools work best for document digitization and data extraction. Background blur serves content creators and photographers. Image cropping is ideal for social media management and branding. PDF tools are essential for document-heavy businesses and professional services.</p>
          </div>

          <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What are the most creative ways to use these tools beyond their basic functions?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">These tools offer numerous creative applications beyond their primary purposes. Use OCR tools to extract text from competitor websites for market research, convert handwritten notes into digital text, or digitize old documents for archival purposes. Background blur can create artistic effects, simulate depth of field, or enhance product photography. Image cropping works for creating custom graphics, designing social media templates, or preparing images for presentations. PDF tools can be used for creating custom document packages, organizing research materials, or preparing client deliverables. Content creators can use these tools to provide image editing tutorials, create educational content, or develop visual resources. Teachers can incorporate these tools into digital literacy lessons, creative projects, or document management courses. The key is to think beyond traditional uses and explore how these tools can enhance various aspects of business operations and creative projects.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How accurate is OCR text extraction and what affects its performance?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our OCR technology achieves high accuracy rates (90%+) with clear, high-resolution images containing readable text. Accuracy depends on several factors: image quality and resolution, text clarity and contrast, font type and size, image orientation, and background complexity. For best results, use high-resolution images with good contrast between text and background. Ensure text is clearly readable and not distorted. The OCR engine works best with standard fonts and properly oriented text. Complex backgrounds or low-quality images may reduce accuracy. The tool supports multiple languages and can handle various text orientations, making it versatile for different document types. Regular use with consistent image quality helps users understand optimal conditions for maximum OCR accuracy.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">What's the best way to create professional images with background blur?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Professional background blur requires understanding composition, subject separation, and visual hierarchy. Our background blur tool uses advanced edge detection to identify subjects and create natural-looking blur effects. For optimal results, use images with clear subject separation from the background, good contrast between foreground and background elements, and well-defined edges around your main subject. The tool works best with portraits, product photos, and objects that have distinct boundaries. Avoid complex backgrounds with similar colors to your subject, as this can confuse the edge detection algorithm. The adjustable blur intensity allows you to create subtle depth effects or dramatic focus changes depending on your creative vision. Professional photographers use this technique to create depth, guide viewer attention, and produce studio-quality results without expensive equipment.</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mb-2 text-card-foreground">How can I use these tools to improve my document management and productivity?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Our image and file tools provide comprehensive support for document management and productivity optimization. OCR tools help digitize paper documents, extract data from invoices and receipts, and convert printed materials into searchable digital text. PDF tools streamline document organization by splitting large files into manageable sections, merging related documents for easier distribution, and removing password protection from locked files. Image cropping ensures consistent document formatting and professional presentation. These tools work together to create a complete document management ecosystem: digitize paper documents with OCR, organize digital files with PDF tools, and enhance visual presentation with image editing. The privacy-focused design means all processing stays local, protecting sensitive business documents while providing accurate, professional results for better document management and productivity.</p>
                      </div>
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
