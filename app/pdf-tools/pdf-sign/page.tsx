import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const PDFSign = dynamic(() => import("@/components/pdf/pdf-sign").then((mod) => mod.PDFSign), {
  loading: () => <ToolLoader />,
})

const toolConfig = createToolConfig({
  toolName: "Sign PDF",
  description:
    "Sign PDF documents online for free by drawing, typing, or uploading your signature. Place electronic signatures on any page with drag-and-drop positioning and download the signed PDF instantly.",
  metaTitle: "Sign PDF Online — Add Electronic Signature to PDF Free",
  metaDescription:
    "Free PDF signing tool. Draw, type, or upload your signature and place it on any PDF page with drag-and-drop. Add initials, date stamps, and text. Download instantly. No account, no upload to server — works fully in your browser.",
  path: "/pdf-tools/pdf-sign",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Free online PDF signing tool with draw, type, and image upload signature modes. Supports multi-page placement, drag-and-drop positioning, signature resizing, and instant signed PDF download.",
    alternateName: [
      "PDF Signature Tool",
      "Electronic Signature PDF",
      "E-Signature PDF",
      "Add Signature to PDF",
      "Sign PDF Free",
      "Online PDF Signer",
      "PDF e-Sign",
      "Digital Signature PDF (visual)",
      "DocuSign Alternative",
      "Adobe Sign Alternative",
      "HelloSign Alternative",
      "Free PDF eSignature",
      "Initials on PDF",
      "Stamp Date on PDF",
      "Contract Signing Online",
    ],
    featureList: [
      "Draw signature with mouse or touchscreen (smooth stroke rendering)",
      "Type signature with multiple signature font styles",
      "Upload signature image (PNG with transparency, JPG)",
      "Drag-and-drop placement on any page",
      "Resize, rotate, and reposition before export",
      "Initials, date stamps, text annotations",
      "Multi-page PDF support",
      "Multiple signers (different signatures per location)",
      "Save signature for reuse in current session",
      "Pen color and stroke width options",
      "Output is a flattened PDF (signature can't be moved/edited after download)",
      "100% client-side — your PDF never uploaded to any server",
      "Free, no signup, no email verification, no watermark",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "Sign PDF Online",
    description:
      "Add your electronic signature to any PDF document for free. Draw your signature with mouse or finger, type it in a signature font, or upload a signature image — then place it on any page with precise drag-and-drop positioning and download the signed PDF.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "Sign PDF", href: "/pdf-tools/pdf-sign" },
  ],

  content: {
    definition:
      "A PDF Sign Tool is a free online electronic signature tool that lets you add handwritten signatures, typed signatures, initials, text annotations, and date stamps to PDF documents without printing, scanning, or installing any software.",
    quickAnswer:
      "Upload a PDF, create your signature by drawing with mouse/touch, typing your name in a signature font, or uploading a signature image (PNG/JPG). Position the signature anywhere on any page using drag-and-drop. Add text fields, dates, and initials as needed. Download the signed PDF instantly — no account or email verification required.",
    keyTakeaways: [
      "Three signature methods: freehand draw, typed text in signature fonts, or upload existing signature image",
      "Place signatures, initials, text annotations, and dates on any page with pixel-precise positioning",
      "Multiple signature styles, colors, and sizes available for professional appearance",
      "Download the signed PDF immediately — no email verification or waiting period",
      "All e-signing happens locally in your browser — your document is never uploaded to any server",
    ],
    overview:
      "This free online PDF signer eliminates the need to print, sign, and scan documents. Whether you need to sign a contract, complete a job application, approve a purchase order, or fill out a government form, you can add your electronic signature directly in your browser. The tool supports three signature creation methods: draw your signature freehand using a mouse, trackpad, or touchscreen; type your name and choose from multiple signature-style fonts; or upload an existing signature image in PNG or JPG format. Once created, position your signature anywhere on any page using intuitive drag-and-drop controls, resize it for the perfect fit, and download the signed PDF in seconds. The entire workflow runs client-side, meaning your confidential documents never leave your device.",

    howToSteps: [
      "Upload your PDF document by dragging and dropping or clicking the upload area.",
      "Create your signature: draw freehand with mouse or touch, type your name in a signature font, or upload a signature image file.",
      "Navigate to the page where you want to place your signature and click to position it.",
      "Drag to reposition and resize the signature for precise placement on the document.",
      "Add additional elements like initials, text fields, or dates if needed.",
      "Download the signed PDF file ready for submission or sharing.",
    ],

    features: [
      "Three signature input modes: freehand draw, typed text, and image upload",
      "Multi-page signature placement — sign different pages in the same document",
      "Drag-and-drop positioning with resize handles for precise signature placement",
      "Multiple signature font styles and ink colors for typed signatures",
      "Touch-optimized drawing canvas for signing on phones and tablets",
      "Signature reuse — upload a saved signature image for consistent signing across documents",
      "100% browser-based processing — no server uploads, no data retention",
    ],

    useCases: [
      "Sign contracts, agreements, and NDAs electronically without printing",
      "Complete job application forms and HR documents with your signature",
      "Sign rental leases, permission slips, and school forms from your phone",
      "Add approval signatures to purchase orders and business proposals",
      "Sign multi-page legal documents with signatures on each required page",
      "Prepare signed invoices and receipts for clients and vendors",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Electronic Signatures vs. Digital Signatures</h3>
          <p>
            This tool creates electronic signatures (e-signatures) — visible signature graphics placed on PDF pages. Electronic signatures are widely accepted for most business, personal, and administrative documents. They differ from digital signatures, which use PKI (Public Key Infrastructure) certificates to cryptographically bind a signer&apos;s identity to the document. For contracts, agreements, and standard business documents, electronic signatures created with this tool are typically sufficient and legally recognized under laws like ESIGN (US) and eIDAS (EU).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Legal Validity of Electronic Signatures</h3>
          <p>
            Electronic signatures are legally binding in most countries for the majority of document types. The US ESIGN Act and UETA, the EU eIDAS Regulation, and similar laws in Canada, Australia, and other jurisdictions recognize electronic signatures as legally equivalent to handwritten signatures for most purposes. However, certain document categories — such as wills, court orders, and some government filings — may require wet-ink or qualified digital signatures. Always verify requirements for your specific document type and jurisdiction.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Document Security</h3>
          <p>
            Your document privacy is guaranteed because all signature creation and PDF processing happens entirely in your browser. The PDF file is never transmitted to any server, and no document data is stored or logged. This makes the tool safe for signing confidential contracts, financial documents, medical forms, and legal agreements.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Save your signature as a transparent PNG image and reuse it with the upload option for consistent, professional-looking signatures across all your documents. A signature on a white background works too — the tool handles placement cleanly.",

    faqs: [
      {
        question: "How do I sign a PDF online for free without an account?",
        answer:
          "Upload your PDF to this free tool, create your signature by drawing, typing, or uploading an image, click on the page to place it, adjust position and size, then download the signed PDF. No account registration, email verification, or payment required.",
      },
      {
        question: "Is an electronic signature on a PDF legally binding?",
        answer:
          "Yes, electronic signatures are legally binding in most countries under laws like the US ESIGN Act, UETA, and EU eIDAS Regulation. They are accepted for contracts, agreements, forms, and most business documents. Some specific document types like wills or notarized documents may require additional authentication.",
      },
      {
        question: "Can I draw my signature using a touchscreen or stylus?",
        answer:
          "Yes. The freehand draw mode is fully optimized for touch input, making it ideal for signing PDFs on phones, tablets, and touchscreen laptops. You can also use a mouse or trackpad on desktop browsers for precise signature drawing.",
      },
      {
        question: "Can I add my signature to multiple pages in the same PDF?",
        answer:
          "Yes. Navigate between pages in the document viewer and place your signature on each page that requires signing. You can position different signatures, initials, or text annotations on different pages before downloading the final signed PDF.",
      },
      {
        question: "What is the difference between an electronic signature and a digital signature?",
        answer:
          "An electronic signature (e-signature) is a visible signature graphic placed on a document — like what this tool creates. A digital signature uses cryptographic PKI certificates to verify signer identity and document integrity. E-signatures are sufficient for most business and personal documents, while digital signatures are required for certain regulated or high-security workflows.",
      },
      {
        question: "Is my PDF document safe when using this online signature tool?",
        answer:
          "Yes. All processing happens locally in your browser using client-side JavaScript. Your PDF is never uploaded to any server, and no document data is stored or transmitted. This makes it safe for signing confidential contracts, financial records, and personal documents.",
      },
      {
        question: "Can I sign a PDF on my iPhone or Android phone?",
        answer:
          "Yes. The tool is fully responsive and works on modern mobile browsers including Safari on iPhone/iPad and Chrome on Android. The touch-optimized drawing canvas makes it easy to sign documents directly on your phone screen.",
      },
    ],

    relatedTools: [
      { name: "PDF Signature Checker", href: "/pdf-tools/pdf-signature-checker" },
      { name: "Merge PDF", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
      { name: "PDF to Word Converter", href: "/pdf-tools/pdf-word-converter" },
      { name: "Image Cropper", href: "/image-tools/image-cropper" },
      { name: "Background Remover", href: "/image-tools/background-remover" },
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFSignPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFSign />)} />
}
