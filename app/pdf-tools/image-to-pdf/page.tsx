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
    "Convert JPG, PNG, and WebP images to a single PDF online. Upload up to 75 images, reorder pages, choose A4, Letter, Legal, or image-fit pages, then download the PDF.",
  metaTitle: "Image to PDF Converter - Create PDFs from Photos and Screenshots",
  metaDescription:
    "Create a PDF from photos, screenshots, scans, receipts, JPG, PNG, or WebP images. Reorder up to 75 pages, set paper size and margins, then download.",
  path: "/pdf-tools/image-to-pdf",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Browser-based document utility for turning photos, screenshots, scans, receipts, JPG, PNG, and WebP images into an ordered PDF document with page layout controls.",
    alternateName: [
      "JPG to PDF Converter",
      "PNG to PDF Converter",
      "Photo to PDF Converter",
      "Picture to PDF Converter",
      "Multiple Images to PDF",
    ],
    featureList: [
      "Convert JPG, PNG, and WebP images to PDF",
      "Combine up to 75 images into one PDF document",
      "25 MB per-image upload limit",
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
      "Upload up to 75 JPG, PNG, or WebP images, reorder them if needed, choose page size, orientation, margins, and fit mode, then convert them into a single PDF. The conversion runs in your browser session.",
    keyTakeaways: [
      "Creates PDF documents from photos, screenshots, scans, receipts, JPG, PNG, and WebP images",
      "Supports up to 75 images with page reordering before export",
      "Each image can be up to 25 MB",
      "Includes A4, US Letter, US Legal, and fit-to-image page sizes",
      "Offers margin, orientation, image-fit, and quality controls",
      "Runs locally in the browser with no account requirement",
    ],
    overview:
      "This Image to PDF converter is built for everyday document workflows: turning photos, screenshots, scanned pages, receipts, design mockups, and image sets into a shareable PDF. Upload up to 75 JPG, PNG, or WebP images, move pages up or down, pick a standard paper size such as A4 or US Letter, and control whether each image is contained, cropped, or stretched inside the page. The tool can embed images as compact JPG for smaller PDFs or PNG for sharper output.",

    howToSteps: [
      "Upload JPG, PNG, or WebP images by dragging them into the upload area or selecting files from your device.",
      "Reorder images with the up and down controls so the PDF pages appear in the right sequence.",
      "Choose page size, orientation, margins, image fit, output image type, and quality.",
      "Click Convert Images to PDF and wait for the browser to generate the document.",
      "Download the finished PDF or reset the tool to start another conversion.",
    ],

    features: [
      "Multi-image upload for JPG, PNG, and WebP files",
      "Up to 75 images per PDF",
      "25 MB maximum per image",
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
          <h3 className="text-lg font-semibold text-foreground mb-2">Photos, Screenshots, and Scans</h3>
          <p>
            Use JPG output for camera photos, receipt photos, product shots, and scans where a smaller PDF matters. Use PNG output for
            screenshots, diagrams, UI captures, forms, or images with small text. If the final PDF is too large, compress source images
            first or choose compact JPG quality.
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

    additionalContent: [
      {
        heading: "What This Tool Is Best For",
        content:
          "Use Image to PDF when your source files are visual pages rather than editable documents: phone photos of paperwork, receipt images, screenshots, scanned notes, whiteboard photos, product images, worksheets, or design proofs. The goal is to package related images into one ordered PDF that is easier to email, archive, submit, or share.",
      },
      {
        heading: "Image to PDF vs PDF to Image",
        content:
          "Image to PDF builds a document from images. PDF to Image does the reverse by exporting existing PDF pages as JPG, PNG, or WebP files. If you need a finished document, start here. If you need separate page images from an existing PDF, use the PDF to Image tool.",
      },
      {
        heading: "Layout Choices That Matter",
        content:
          "Paper size controls how the finished PDF behaves in printers, email previews, and document portals. A4 and US Letter are best for paperwork, fit-to-image is best for preserving photo proportions, and margins help scanned or screenshot content look less cramped on the page.",
      },
    ],

    faqs: [
      {
        question: "How do I convert images to PDF online?",
        answer:
          "Upload your JPG, PNG, or WebP images, arrange them in the order you want, choose PDF settings, and click Convert Images to PDF. The finished PDF can be downloaded from the result panel.",
      },
      {
        question: "Can I combine multiple images into one PDF?",
        answer:
          "Yes. Add up to 75 images and the tool will create one PDF with each image placed on its own page. You can move images up or down before converting.",
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
      {
        question: "What is the maximum image size?",
        answer:
          "Each image can be up to 25 MB, and you can add up to 75 images per PDF. For large camera photos, compress or resize images first to keep the final PDF manageable.",
      },
    ],

    relatedTools: [
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "Merge PDF", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF to Word Converter", href: "/pdf-tools/pdf-word-converter" },
      { name: "Image Compressor", href: "/image-tools/image-compressor" },
      { name: "Image Resizer", href: "/image-tools/image-resizer" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ImageToPDFPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ImageToPDF />)} />
}
