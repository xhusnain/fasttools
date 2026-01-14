import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"

import { FileText, Crop, Minimize2 } from "lucide-react"

const imageTools = [
  {
    title: "Image to Text (OCR)",
    description: "Extract text from images using advanced OCR technology. Convert photos, screenshots, and scanned documents to editable text instantly with 90%+ accuracy and 15+ language support.",
    icon: FileText,
    href: "/image-tools/image-to-text",
    popular: true,
  },
  {
    title: "Image Background Remover",
    description: "Remove image backgrounds instantly with AI technology. Create transparent PNGs for photos, products, and graphics with 95%+ accuracy. Perfect for e-commerce and design.",
    icon: Crop,
    href: "/image-tools/image-background-remover",
    popular: true,
  },
  {
    title: "Image Compressor",
    description: "Compress images online (JPG, PNG, WebP) up to 90% without losing quality. Specialized smart lossy compression. 100% free and private.",
    icon: Minimize2,
    href: "/image-tools/image-compressor",
    popular: true,
  },
]

const toolConfig = createToolConfig({
  toolName: "Image Tools",
  description: "Free AI-powered image tools: OCR text extraction, background remover, background blur. Professional results, 100% secure, all processing in-browser.",
  metaTitle: "Free Image Tools | OCR, Photo Editor & Background Blur",
  metaDescription: "Free image tools: OCR converter, photo editor, background blur, image processing. Professional results, 100% secure.",
  path: "/image-tools",

  header: {
    title: "Free Image Tools – OCR, Background Remover & Blur Online",
    description: "Extract text (OCR), remove backgrounds with AI, blur backgrounds, and process images — all free, fast, and online. No signup or software needed. All processing happens locally in your browser for maximum privacy.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Image Tools", href: "/image-tools" },
  ],

  content: {
    overview: "Our advanced image tools combine cutting-edge OCR technology with AI-powered image processing algorithms. Extract text from images with 90%+ accuracy across 15+ languages, remove backgrounds with 95%+ precision using neural networks, and create professional portrait mode blur effects with adjustable intensity. All operations run locally in your browser for maximum privacy and speed — your images never leave your device. Perfect for professionals, students, content creators, and anyone needing powerful image processing without expensive software subscriptions.",

    howToSteps: [
      "Select the specific image tool you need from the grid below (OCR Text Extraction, Background Remover, or Background Blur).",
      "Upload your image by clicking the upload area or dragging and dropping your file (supports JPG, PNG, JPEG, WebP).",
      "The AI automatically processes your image — extract text, remove background, or apply blur effects instantly.",
      "Download your processed result, copy extracted text, or save transparent PNGs — all free with no watermarks."
    ],

    features: [
      "Advanced OCR Technology: 90%+ accuracy text extraction with 15+ language support including English, Spanish, French, German, Chinese, Arabic, and more",
      "AI Background Removal: 95%+ accuracy with precise edge detection for complex features like hair, fur, and transparent objects",
      "Portrait Mode Blur: Adjustable blur intensity (5-50px) for professional DSLR-style bokeh effects",
      "Complete Privacy: All processing happens locally in your browser — images never uploaded to servers",
      "High-Resolution Support: Process images up to 4K quality without quality loss",
      "Multiple Format Support: Works with JPG, PNG, JPEG, WebP, and PDF files",
      "No Watermarks: Download professional results without any branding or watermarks",
      "Unlimited Free Usage: No daily limits, no account required, no hidden fees",
      "Mobile-Friendly: Optimized for iPhone, Android, tablets, and all mobile devices",
      "Cross-Platform: Works on Windows, Mac, Linux — any device with a modern browser",
      "Batch Processing: Handle multiple images efficiently for bulk editing needs",
      "Real-Time Preview: See results instantly before downloading",
      "Professional Quality: Results comparable to expensive software like Photoshop",
      "No Installation Required: Browser-based tools work immediately without downloads",
      "Offline Capability: Core functionality works without internet once loaded",
      "Open Source Models: Built on trusted, community-verified AI models"
    ],

    useCases: [
      "Document Digitization: Convert scanned documents, receipts, business cards, and invoices to editable text with OCR for paperless workflows",
      "E-commerce Product Photography: Remove backgrounds from product photos to create clean, professional listings for Amazon, Shopify, Etsy, and other platforms",
      "Social Media Content Creation: Create eye-catching posts with transparent backgrounds and professional blur effects for Instagram, Facebook, TikTok, and LinkedIn",
      "Professional Portraits: Apply portrait mode blur to headshots and profile pictures for business websites, LinkedIn, and professional branding",
      "Education & Research: Extract text from textbooks, research papers, and handwritten notes for digital study materials and citations",
      "Graphic Design Projects: Remove backgrounds and create transparent PNGs for logos, marketing materials, presentations, and design compositions",
      "Business Document Management: Digitize paper documents, extract data from forms, and organize business records with OCR technology",
      "Pet & Animal Photography: Remove distracting backgrounds from pet photos for adoption listings, social media, and professional portfolios",
      "Real Estate Marketing: Create professional property photos with blurred backgrounds to highlight specific features in listings and brochures",
      "Content Accessibility: Convert image text to screen-reader-friendly digital text for visually impaired users and ADA compliance"
    ],

    aboutTool: "Our image processing suite uses state-of-the-art machine learning models and computer vision algorithms to deliver professional results. The OCR engine utilizes Tesseract-based technology with support for over 100 languages and advanced preprocessing to handle skewed images, complex layouts, and handwritten text. Background removal is powered by U²-Net neural networks trained on millions of images, providing superior edge detection that outperforms traditional selection tools. The blur effect uses Gaussian algorithms with AI subject detection to create natural-looking depth of field that mimics professional DSLR cameras. All processing happens client-side using WebAssembly and TensorFlow.js, ensuring your sensitive images never leave your device. This privacy-first approach combined with professional-grade AI makes powerful image processing accessible to everyone.",

    proTip: "For best results across all image tools, use high-resolution images (at least 300 DPI for OCR, 1080p+ for background removal and blur). Ensure good lighting and contrast for OCR text extraction. For background removal, position subjects 3-6 feet from the background with contrasting colors. When applying blur effects, start with moderate intensity (15-25px) and adjust based on your creative vision. Save originals before processing in case you need to re-process with different settings.",

    faqs: [
      {
        question: "What are the best free OCR tools for text extraction?",
        answer: "Our OCR tool online uses advanced optical character recognition technology to extract text from images and scanned documents with 90%+ accuracy. It supports 15+ languages including English, Spanish, French, German, Chinese (Simplified and Traditional), Japanese, Korean, Arabic, Hindi, and more. The tool handles multiple fonts, various text orientations, handwritten text, and complex layouts including tables and multi-column documents. All processing happens in your browser for complete privacy, making it safe for sensitive documents. The OCR engine automatically preprocesses images to enhance contrast, remove noise, and adjust skewed text for optimal recognition accuracy."
      },
      {
        question: "How does background removal work and what makes it professional?",
        answer: "Our AI background remover uses U²-Net neural networks trained on millions of professional images to detect subjects and remove backgrounds with 95%+ accuracy. The advanced edge detection algorithm excels at complex features like hair strands, fur, feathers, and transparent objects that traditional tools struggle with. It automatically identifies the main subject, creates precise selection masks, and generates clean transparent PNG files perfect for e-commerce, graphic design, and professional photography. Unlike manual selection in Photoshop, our AI handles the complex work automatically while delivering professional results in seconds."
      },
      {
        question: "Can I blur image backgrounds like iPhone portrait mode?",
        answer: "Yes! Our background blur tool creates professional portrait mode and DSLR-style bokeh effects using AI subject detection. The tool automatically identifies your main subject and applies selective blur to the background while keeping the subject sharp. You can adjust blur intensity from 5px (subtle depth) to 50px (dramatic bokeh) using the slider. The Gaussian blur algorithm creates smooth, natural-looking depth of field that mimics professional cameras. Perfect for enhancing portraits, product photos, pet photography, and any image where you want to create professional depth effects and focus attention on the subject."
      },
      {
        question: "Are these image tools safe and private?",
        answer: "Absolutely! All our image tools prioritize user privacy and security by operating entirely within your browser. Your images never leave your device — no uploads to cloud servers, no data storage, no tracking. This client-side processing using WebAssembly and TensorFlow.js ensures complete privacy for sensitive documents, personal photos, business materials, and confidential images. You can confidently process medical records, legal documents, personal portraits, and business assets without privacy concerns. The local processing also means faster performance and the ability to work offline once the page is loaded."
      },
      {
        question: "What image formats are supported?",
        answer: "Our tools support all major image formats including JPG, JPEG, PNG, BMP, TIFF, WebP, and PDF files. For OCR, you can extract text from any image-based PDF or scanned document. Background removal and blur tools work best with standard photo formats (JPG, PNG). Output formats depend on the tool: OCR provides plain text or downloadable TXT files, background removal creates transparent PNG files, and blur effects output high-quality JPG or PNG files maintaining your original resolution up to 4K quality."
      },
      {
        question: "How do these free tools compare to Photoshop and paid software?",
        answer: "Our tools provide professional results comparable to Adobe Photoshop at zero cost. While Photoshop offers more manual control for extremely complex edits ($54.99/month), our AI automation handles 90%+ of common tasks faster and easier. Background removal rivals Photoshop's AI selection tools, OCR matches professional software accuracy, and blur effects create depth comparable to expensive plugins. Unlike cloud services like Canva Pro ($12.99/month) or Remove.bg (paid tiers), our tools are completely free, unlimited, and privacy-focused with no watermarks or usage restrictions. Perfect for freelancers, students, small businesses, and anyone needing professional image processing without subscription costs."
      },
      {
        question: "Can I use these tools on mobile devices?",
        answer: "Yes! All our image tools are fully optimized for mobile devices including iPhone, Android phones, and tablets. The responsive design works seamlessly on any screen size with touch-friendly controls. You can upload photos directly from your camera roll, process images using the same AI technology as desktop, and download results to your device. No app download required — just visit our website in any mobile browser (Safari, Chrome, Firefox). The tools maintain full functionality on mobile with the same privacy protection, unlimited usage, and professional quality results."
      },
      {
        question: "What makes AI image tools better than manual editing?",
        answer: "AI image tools automate complex tasks that traditionally required manual effort and expertise. Our background remover automatically detects subjects and creates perfect selections in seconds versus 10-20 minutes of manual masking in Photoshop. OCR instantly extracts text from images that would take hours to manually transcribe. Blur effects apply professional depth of field automatically versus complex layer masks and manual painting. This automation saves time, eliminates the learning curve, and delivers consistent professional results without requiring design skills or expensive software expertise."
      },
      {
        question: "Can I process multiple images in batch?",
        answer: "Yes, our tools support batch processing for handling multiple images efficiently. You can upload and process several images sequentially, with each image processed individually and results displayed separately for review and download. This feature is perfect for e-commerce businesses processing product catalogs, offices digitizing document collections, photographers editing photo sessions, or anyone managing multiple images. While images are processed one at a time (ensuring quality), you can queue multiple files for efficient workflow without repeatedly uploading individual images."
      },
      {
        question: "How accurate is OCR with handwritten text?",
        answer: "Our OCR technology can extract handwritten text, though accuracy varies based on handwriting clarity and style (typically 70-85% accuracy for clear handwriting versus 90%+ for printed text). The tool works best with legible, well-spaced handwriting in standard script styles. For optimal handwritten text extraction, use high-resolution images with good lighting, ensure clear contrast between text and background, avoid cursive or highly stylized writing, and keep text horizontal without skew. While printed text achieves higher accuracy, our advanced preprocessing helps optimize handwritten text recognition for notes, forms, and documents."
      }
    ],

    relatedTools: [
      { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "Currency Converter", href: "/converters/currency" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function ImageToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {imageTools.map((tool) => (
            <GToolCard
              key={`image-tools-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      )}
    />
  )
}
