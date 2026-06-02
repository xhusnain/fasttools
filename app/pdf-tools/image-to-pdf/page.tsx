import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const ImageToPDF = dynamic(() => import("@/components/pdf/image-to-pdf").then((mod) => mod.ImageToPDF), {
  loading: () => <ToolLoader />,
})

const toolConfig = createToolConfig({
  toolName: "Image to PDF Converter",
  description:
    "Convert JPG, PNG, and WebP images to a single PDF online. Upload multiple images, reorder pages, choose A4, Letter, Legal, or image-fit pages, then download the PDF.",
  metaTitle: "Image to PDF Converter - Convert JPG, PNG, WebP to PDF",
  metaDescription:
    "Free Image to PDF converter. Convert JPG, PNG, and WebP images into one PDF with page size, orientation, margin, quality, and reorder controls. Browser-based, no signup.",
  path: "/pdf-tools/image-to-pdf",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Browser-based Image to PDF converter for combining JPG, PNG, and WebP images into a PDF document with page size, margin, orientation, image-fit, and quality controls.",
    alternateName: [
      "JPG to PDF Converter",
      "PNG to PDF Converter",
      "Photo to PDF Converter",
      "Picture to PDF Converter",
      "Convert Images to PDF",
      "Combine Images into PDF",
      "Image PDF Maker",
      "Online Image to PDF",
      "JPG PNG to PDF",
      "Multiple Images to PDF",
      "Scan Images to PDF",
      "PDF from Photos",
      "iLovePDF JPG to PDF Alternative",
      "Smallpdf JPG to PDF Alternative",
      "Adobe JPG to PDF Alternative",
    ],
    featureList: [
      "Convert JPG, PNG, and WebP images to PDF",
      "Combine multiple images into one PDF document",
      "Reorder image pages before export",
      "A4, US Letter, US Legal, and image-fit page sizes",
      "Auto, portrait, and landscape page orientation",
      "No, small, medium, and large margin presets",
      "Contain, cover, and stretch image placement",
      "JPG or PNG image embedding",
      "Compact, balanced, and high-quality PDF output",
      "100% browser-based processing",
      "Free, no signup, no watermark",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "6840",
  },

  header: {
    title: "Image to PDF Converter",
    description:
      "Turn JPG, PNG, and WebP images into one clean PDF. Upload images, arrange the page order, choose page size and margins, then download the finished PDF from your browser.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "Image to PDF", href: "/pdf-tools/image-to-pdf" },
  ],

  content: {
    definition:
      "An Image to PDF Converter is a free online tool that combines JPG, PNG, and WebP images into a downloadable PDF document.",
    quickAnswer:
      "Upload one or more images, reorder them if needed, choose page size, orientation, margins, and fit mode, then convert them into a single PDF. The conversion runs in your browser, so your images are not uploaded to a server.",
    keyTakeaways: [
      "Converts JPG, PNG, and WebP images into one PDF",
      "Supports multiple images with page reordering before export",
      "Includes A4, US Letter, US Legal, and fit-to-image page sizes",
      "Offers margin, orientation, image-fit, and quality controls",
      "Runs locally in the browser with no account requirement",
    ],
    overview:
      "This Image to PDF converter is built for everyday document workflows: turning photos, screenshots, scanned pages, receipts, design mockups, and image sets into a shareable PDF. Upload multiple images, move pages up or down, pick a standard paper size such as A4 or US Letter, and control whether each image is contained, cropped, or stretched inside the page. The tool can embed images as compact JPG for smaller PDFs or PNG for sharper lossless output.",

    howToSteps: [
      "Upload JPG, PNG, or WebP images by dragging them into the upload area or selecting files from your device.",
      "Reorder images with the up and down controls so the PDF pages appear in the right sequence.",
      "Choose page size, orientation, margins, image fit, output image type, and quality.",
      "Click Convert Images to PDF and wait for the browser to generate the document.",
      "Download the finished PDF or reset the tool to start another conversion.",
    ],

    features: [
      "Multi-image upload for JPG, PNG, and WebP files",
      "Page order controls before PDF creation",
      "A4, US Letter, US Legal, and fit-to-image page sizes",
      "Auto orientation based on each image, plus portrait and landscape modes",
      "No, small, medium, and large margin presets",
      "Contain, cover, and stretch fit modes",
      "JPG output for smaller PDFs and PNG output for lossless image embedding",
      "Editable PDF file name before download",
      "Progress indicator during conversion",
      "Browser-side processing with no sign-up requirement",
    ],

    useCases: [
      "Combine scanned receipt photos into one expense-report PDF",
      "Turn phone photos of paperwork into a shareable document",
      "Create a PDF from screenshots for support tickets or bug reports",
      "Package product photos or design previews into a client-ready PDF",
      "Convert school notes, worksheets, or whiteboard photos into a single file",
      "Build a lightweight image portfolio or proof sheet for email sharing",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">JPG vs PNG PDF Output</h3>
          <p>
            JPG output is best when you want a smaller PDF from photos, receipts, and screenshots. PNG output is better when the images
            contain sharp UI text, diagrams, or flat graphics where lossless quality matters more than file size. For most mixed image
            sets, balanced JPG output gives the best size-to-quality result.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Choosing Page Size and Margins</h3>
          <p>
            A4 works well for international document sharing, while US Letter is common for North American paperwork. Fit-to-image keeps
            each PDF page close to the original image ratio. Use small margins for a clean document look, or no margins when you want the
            image to fill as much of the page as possible.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Browser Processing</h3>
          <p>
            The converter builds the PDF in your browser session. That makes it useful for personal photos, business receipts, draft
            paperwork, and other files where you want a fast conversion without creating an account or sending images to a remote
            conversion service.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For scanned documents, use A4 or US Letter with small margins and balanced JPG quality. For screenshots with small text, switch the PDF image type to PNG.",

    faqs: [
      {
        question: "How do I convert images to PDF online?",
        answer:
          "Upload your JPG, PNG, or WebP images, arrange them in the order you want, choose PDF settings, and click Convert Images to PDF. The finished PDF can be downloaded from the result panel.",
      },
      {
        question: "Can I combine multiple images into one PDF?",
        answer:
          "Yes. Add multiple images and the tool will create one PDF with each image placed on its own page. You can move images up or down before converting.",
      },
      {
        question: "Can I convert JPG to PDF and PNG to PDF?",
        answer:
          "Yes. The tool supports JPG/JPEG, PNG, and WebP uploads. You can export the embedded PDF images as JPG for smaller output or PNG for lossless quality.",
      },
      {
        question: "Which page size should I choose?",
        answer:
          "Choose A4 for international document sharing, US Letter for North American paperwork, Legal for longer forms, or Fit to image when you want each PDF page to follow the image's natural dimensions.",
      },
      {
        question: "Will the images be uploaded to a server?",
        answer:
          "No. PDF creation runs inside your browser. The tool does not need to upload your selected images to a server to create the PDF.",
      },
      {
        question: "Why is my PDF file large?",
        answer:
          "Large source images, PNG output, high quality, and many pages can increase PDF size. Use JPG output with compact or balanced quality, or compress images first with the Image Compressor tool.",
      },
      {
        question: "Can I reorder pages before creating the PDF?",
        answer:
          "Yes. Each uploaded image has up and down controls. The visible order becomes the page order in the final PDF.",
      },
      {
        question: "Does this work on mobile?",
        answer:
          "Yes. The tool works in modern mobile and desktop browsers. Very large batches may perform better on desktop because image processing uses browser memory.",
      },
    ],

    relatedTools: [
      { name: "PDF to Image Converter", href: "/pdf-tools/pdf-to-image" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF to Word Converter", href: "/pdf-tools/pdf-word-converter" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "All PDF Tools", href: "/pdf-tools" },
      { name: "All Image Tools", href: "/image-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ImageToPDFPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ImageToPDF />)} />
}
