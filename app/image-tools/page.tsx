import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Beer as Blur, Crop, FileStack, Unlock, Monitor, ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Image & File Tools - Free Online Image Editor & PDF Tools | FastTools",
  description:
    "Free online image and file utility tools including OCR converter, background blur, image cropper, PDF splitter, PDF merger, and PDF unlocker. Fast, secure, and easy to use.",
  keywords:
    "image to text, OCR converter, background blur, image cropper, PDF splitter, PDF merger, PDF unlocker, screenshot to text, online image editor, free PDF tools",
  openGraph: {
    title: "Image & File Tools - Free Online Image Editor & PDF Tools",
    description:
      "Free online image and file utility tools. Convert images to text, blur backgrounds, crop images, split/merge PDFs, and more.",
    type: "website",
  },
}

const imageTools = [
  {
    name: "Image to Text (OCR)",
    description: "Extract text from images using OCR technology. Perfect for digitizing documents and screenshots.",
    icon: FileText,
    href: "/image-tools/image-to-text",
    color: "text-blue-600",
  },
  {
    name: "Background Blur",
    description: "Blur image backgrounds with adjustable intensity. Create professional-looking photos instantly.",
    icon: Blur,
    href: "/image-tools/background-blur",
    color: "text-purple-600",
  },
  {
    name: "Image Cropper",
    description: "Crop images into circular or square shapes. Perfect for profile pictures and social media.",
    icon: Crop,
    href: "/image-tools/image-cropper",
    color: "text-green-600",
  },
  {
    name: "PDF Splitter & Merger",
    description: "Split large PDFs or merge multiple PDFs into one. Fast and secure processing.",
    icon: FileStack,
    href: "/image-tools/pdf-tools",
    color: "text-red-600",
  },
  {
    name: "PDF Unlocker",
    description: "Remove password protection from PDFs. Unlock your documents quickly and easily.",
    icon: Unlock,
    href: "/image-tools/pdf-unlocker",
    color: "text-orange-600",
  },
  {
    name: "Screenshot to Text",
    description: "Extract text from screenshots. Convert code snippets and error messages to editable text.",
    icon: Monitor,
    href: "/image-tools/screenshot-to-text",
    color: "text-cyan-600",
  },
]

export default function ImageToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Image Tools", href: "/image-tools" },
          ]}
        />

        <div className="mt-8 mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Image & File Utility Tools
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Professional-grade image editing and file management tools designed for content creators, 
            digital marketers, web developers, and business professionals. Our comprehensive suite includes 
            advanced OCR technology for text extraction, intelligent background blur effects, precision 
            image cropping tools, and powerful PDF manipulation utilities. All tools are 100% secure, 
            processing files locally in your browser without any data collection or external uploads. 
            Whether you're editing photos for social media, extracting text from documents, or managing 
            PDF files, our tools provide professional results with enterprise-level security.
          </p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {imageTools.map((tool, index) => (
            <Card
              key={tool.name}
              className="p-6 border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-muted/50">
                  <tool.icon className={`h-6 w-6 ${tool.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tool.description}</p>
                  <Button asChild variant="outline" size="sm" className="h-9 text-sm font-medium group bg-transparent">
                    <Link href={tool.href}>
                      Use Tool
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Center Content Ad */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-3">Why Use Our Image & File Tools?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              All tools run directly in your browser for maximum privacy and security. No uploads to external servers,
              no data collection, and completely free to use. Our advanced image processing algorithms deliver 
              professional-quality results while maintaining complete data privacy and security.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-1">100% Secure</p>
                <p className="text-muted-foreground">All processing happens locally</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-1">No Limits</p>
                <p className="text-muted-foreground">Use as many times as you want</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="font-semibold text-foreground mb-1">Always Free</p>
                <p className="text-muted-foreground">No hidden fees or subscriptions</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Understanding How Image Tools Work */}
        <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
          <h2 className="text-2xl font-semibold text-foreground">Understanding How Image Tools Work</h2>
          <p className="text-muted-foreground">
            Our image and file tools use cutting-edge web technologies and advanced algorithms to provide 
            professional-grade results directly in your browser. Each tool is optimized for performance, 
            accuracy, and user privacy, ensuring you get the best possible results without compromising security.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">OCR Technology</h3>
          <p className="text-muted-foreground">
            Our image-to-text converter uses advanced Optical Character Recognition (OCR) technology to 
            accurately extract text from images, screenshots, and scanned documents. The system supports 
            multiple languages and can handle various fonts, handwriting, and text orientations with 
            high accuracy rates.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Image Processing Algorithms</h3>
          <p className="text-muted-foreground">
            Our background blur tool uses sophisticated edge detection algorithms to identify subjects 
            and create natural-looking blur effects. The image cropper employs intelligent aspect ratio 
            detection and smart cropping suggestions to help you create perfectly sized images for 
            different platforms and use cases.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">PDF Processing Engine</h3>
          <p className="text-muted-foreground">
            Our PDF tools use advanced document processing libraries to handle splitting, merging, 
            and unlocking operations securely. All PDF operations maintain document integrity while 
            providing fast processing speeds and reliable results.
          </p>
        </section>

        {/* Advanced Usage Techniques */}
        <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
          <h2 className="text-2xl font-semibold text-foreground">Advanced Usage Techniques</h2>
          <p className="text-muted-foreground">
            Master these professional techniques to get the most out of our image and file tools 
            for maximum productivity and results.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Content Creation Workflow</h3>
          <p className="text-muted-foreground">
            Use the image cropper to create consistent social media posts across all platforms. 
            Combine background blur with cropping to create professional profile pictures and 
            product images. Use OCR to extract text from competitor screenshots for market research 
            and content inspiration.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Document Management</h3>
          <p className="text-muted-foreground">
            Use PDF tools to organize large documents, split contracts into sections, and merge 
            related documents for easier management. Use the PDF unlocker to access password-protected 
            documents while maintaining security protocols.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Business Applications</h3>
          <p className="text-muted-foreground">
            Use OCR technology to digitize paper documents, extract data from invoices and receipts, 
            and convert printed materials into editable text. Use image editing tools to create 
            professional marketing materials and social media content.
          </p>
        </section>

        {/* Performance and Optimization Tips */}
        <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
          <h2 className="text-2xl font-semibold text-foreground">Performance and Optimization Tips</h2>
          <p className="text-muted-foreground">
            Maximize the efficiency and quality of your image and file processing with these proven optimization strategies.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Image Quality Optimization</h3>
          <p className="text-muted-foreground">
            For best OCR results, use high-resolution images with clear, readable text. Ensure good 
            contrast between text and background. For background blur, use images with clear subject 
            separation for more accurate edge detection and better blur effects.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">File Size Management</h3>
          <p className="text-muted-foreground">
            Large files may take longer to process. For PDF operations, consider splitting very large 
            documents into smaller sections. For image processing, optimize file sizes before uploading 
            to ensure faster processing and better results.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Batch Processing</h3>
          <p className="text-muted-foreground">
            Process multiple images or documents in batches to improve efficiency. Use consistent 
            settings across similar files to maintain quality and save time. Save your preferred 
            settings for repeated use with similar content types.
          </p>
        </section>

        {/* Common Mistakes and How to Avoid Them */}
        <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
          <h2 className="text-2xl font-semibold text-foreground">Common Mistakes and How to Avoid Them</h2>
          <p className="text-muted-foreground">
            Avoid these common mistakes that can affect the quality of your image and file processing results.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Image Quality Issues</h3>
          <p className="text-muted-foreground">
            Don't use low-resolution or blurry images for OCR processing. Ensure good lighting and 
            contrast for better text recognition. For background blur, avoid images with complex 
            backgrounds that may confuse the edge detection algorithm.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">PDF Processing Errors</h3>
          <p className="text-muted-foreground">
            Always check PDF file integrity before processing. Corrupted or password-protected files 
            may not process correctly. Use the PDF unlocker first if you encounter access issues, 
            then proceed with other operations.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Format Compatibility</h3>
          <p className="text-muted-foreground">
            Ensure you're using supported file formats for each tool. Check file extensions and 
            format compatibility before processing. Some tools work best with specific file types, 
            so choose the right tool for your specific file format.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Privacy and Security</h3>
          <p className="text-muted-foreground">
            While our tools process files locally, always ensure you're not processing sensitive 
            information on shared or public computers. Clear your browser cache after processing 
            sensitive documents to maintain privacy and security.
          </p>
        </section>

        {/* FAQs Section */}
        <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
          <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
          
          <h3 className="text-xl font-semibold text-foreground">How accurate is the OCR text extraction?</h3>
          <p className="text-muted-foreground">
            Our OCR technology achieves high accuracy rates (90%+) with clear, high-resolution images. 
            Accuracy depends on image quality, text clarity, and font type. For best results, use 
            images with good contrast, clear text, and minimal background noise.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Are my files secure when using these tools?</h3>
          <p className="text-muted-foreground">
            Yes, all processing happens locally in your browser. Your files never leave your device, 
            ensuring complete privacy and security. We don't store, track, or transmit any of your 
            data, making our tools safe for sensitive documents and personal information.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">What file formats are supported?</h3>
          <p className="text-muted-foreground">
            Our tools support a wide range of formats including JPG, PNG, GIF, BMP for images, and 
            PDF for document processing. OCR works with most image formats, while PDF tools handle 
            standard PDF files. Check individual tool pages for specific format requirements.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Can I use these tools for commercial purposes?</h3>
          <p className="text-muted-foreground">
            Yes, all our image and file tools are free for both personal and commercial use. Business 
            owners, content creators, and professionals can use these tools for client work, marketing 
            materials, and business operations without any restrictions.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">How do I get the best results from background blur?</h3>
          <p className="text-muted-foreground">
            For optimal background blur results, use images with clear subject separation from the 
            background. Avoid complex backgrounds with similar colors to your subject. The tool works 
            best with portraits and objects that have distinct edges and contrast with the background.
          </p>
        </section>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>
      </div>
    </div>
  )
}
