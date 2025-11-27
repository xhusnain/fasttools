import { PDFSign } from "@/components/pdf-sign"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const toolConfig = createToolConfig({
  toolName: "PDF Sign",
  description: "Sign PDF documents online free. Add electronic signatures to PDFs for contracts, agreements, forms. Legally binding, browser-based, secure.",
  metaTitle: "Sign PDF Online Free - Add Electronic Signature to PDF",
  metaDescription: "Sign PDF documents online free. Add electronic signature to PDF contracts, agreements. Legally binding eSign. Browser-based, secure, unlimited usage.",
  path: "/pdf-tools/pdf-sign",

  header: {
    title: "Sign PDF Online - Add Electronic Signature to PDF Documents",
    description: "Add legally binding electronic signatures to PDF contracts, agreements, and forms. Draw, type, or upload signatures. All processing happens locally in your browser for maximum security.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "Sign PDF", href: "/pdf-tools/pdf-sign" },
  ],

  content: {
    overview: "Our PDF signature tool enables you to add legally binding electronic signatures to any PDF document including contracts, agreements, forms, and authorizations. Create signatures by drawing with mouse or touchscreen, typing your name in various fonts, or uploading existing signature images. Position signatures anywhere on the document, resize as needed, and add dates or initials. All processing happens locally in your browser—your documents and signatures never leave your device, ensuring complete privacy for sensitive contracts and legal documents. Signatures are embedded into the PDF and legally valid under most jurisdictions including US ESIGN Act and EU eIDAS.",

    howToSteps: [
      "Upload your PDF contract, agreement, form, or document requiring signature.",
      "Create your signature by drawing (mouse/touch), typing your name, or uploading a signature image.",
      "Click on the document where you want to place the signature, resize and position as needed.",
      "Add date, initials, or text fields if required, then download your signed PDF instantly."
    ],

    features: [
      "Multiple Signature Methods: Draw with mouse/touch, type in stylish fonts, or upload existing signature images",
      "Drag-and-Drop Positioning: Place signatures anywhere on the document with precise control",
      "Resizable Signatures: Adjust signature size to fit designated signature lines perfectly",
      "Date Stamping: Add current date, custom dates, or timestamps to signed documents",
      "Initials Support: Add initials alongside full signatures for multi-page agreements",
      "Text Annotations: Include additional text like titles, names, or notes on documents",
      "Legally Binding: Creates compliant electronic signatures under ESIGN Act and eIDAS regulation",
      "Complete Privacy: All processing in browser—documents and signatures never uploaded to servers",
      "Multi-Page Support: Sign documents with multiple signature fields across many pages",
      "Unlimited Free: No limits, no watermarks, no account required",
      "Fast Processing: Instant signature embedding using WebAssembly technology",
      "Cross-Platform: Works on Windows, Mac, Linux, tablets, smartphones—any device with browser"
    ],

    useCases: [
      "Employment Contracts: Sign job offers, employment agreements, NDAs, and HR documents remotely",
      "Freelance Agreements: Execute client contracts, service agreements, and project authorizations instantly",
      "Real Estate Transactions: Sign purchase agreements, lease contracts, rental applications, and disclosures",
      "Legal Documents: Execute power of attorney, affidavits, sworn statements, and legal authorizations",
      "Financial Forms: Sign loan applications, credit agreements, investment authorizations, and bank forms",
      "Business Contracts: Execute vendor agreements, partnerships, MCAs, and business authorizations",
      "Medical Consents: Sign patient consent forms, medical authorizations, HIPAA releases",
      "Insurance Documents: Execute policy agreements, claims forms, and beneficiary designations",
      "Academic Forms: Sign enrollment agreements, student contracts, and educational authorizations",
      "Remote Work: Sign documents from anywhere without printing, scanning, or mailing"
    ],

    aboutTool: "Our signature tool embeds electronic signatures into PDFs using digital signature standards compatible with PDF specification. Signatures are rasterized as images and positioned using PDF annotation layers, maintaining document integrity while adding signature graphics. The tool creates tamper-evident signatures by embedding timestamp and metadata. For drawn signatures, vector paths are converted to high-resolution images maintaining smooth curves. Typed signatures use web fonts rendered at high DPI for crisp text. All signature creation and embedding happens in-browser using PDF.js and Canvas API without server interaction. Legal compliance: electronic signatures created by this tool are legally binding for most business contracts under ESIGN (US), UETA (US states), and eIDAS (EU) regulations, though certain documents (wills, court filings, real estate deeds) may require notarization or advanced digital signatures with certificate authority.",

    proTip: "For professional results: Use consistent signature style across all documents (same draw style or typed font). Position signatures on designated signature lines when present. Add dates to timestam signatures for legal clarity. For multi-page contracts, add initials on each page and full signature on final page. Save your drawn signature by taking a screenshot for future use. When signing business contracts, consider adding your title/position as text annotation below signature.",

    faqs: [
      {
        question: "Are electronic signatures legally binding?",
        answer: "Yes, electronic signatures created with our tool are legally binding for most business contracts and agreements under US ESIGN Act (2000), state UETA laws, and EU eIDAS regulation. They're valid for employment contracts, service agreements, NDAs, purchase orders, lease agreements, and most commercial transactions. However, certain documents require notarized or advanced digital signatures with certificate authority: wills, trusts, court filings, adoption papers, divorce decrees, real estate deeds in some jurisdictions. For standard business use, employment contracts, freelance agreements, and commercial transactions, our electronic signatures provide full legal validity."
      },
      {
        question: "What's the difference between electronic signature and digital signature?",
        answer: "Electronic signature (eSignature) is any electronic indication of intent to sign—includes drawn signatures, typed names, or scanned images. Our tool creates electronic signatures. Digital signature uses cryptographic technology and certificate authorities (CAs) to verify signer identity and detect tampering—requires certificates from trusted CAs like DocuSign, Adobe. Electronic signatures are sufficient for most business contracts (employment, freelance, commercial agreements). Digital signatures are required for highly regulated documents (government contracts, large financial transactions, documents requiring non-repudiation). For 90% of business needs, electronic signatures provide adequate legal validity."
      },
      {
        question: "Can I save my signature for future use?",
        answer: "Our tool doesn't store signatures (privacy focus), but you can save created signatures for reuse: After creating your signature, download the signed PDF, then screenshot or extract just the signature image using image editing software. Save this signature image file. For future documents, upload this saved signature using the 'Upload Signature' option. This lets you reuse consistent signatures across multiple documents while maintaining privacy (only you store the signature file, not our servers)."
      },
      {
        question: "Is it safe to sign confidential documents using this tool?",
        answer: "Completely safe. All signing happens locally in your browser using WebAssembly—your PDF never leaves your device, never uploaded to servers, never stored anywhere. Your signature (whether drawn, typed, or uploaded) exists only in browser temporary memory during signing and is deleted when you close the page. No data transmission, no server access, no privacy concerns. Safe for signing confidential employment contracts, NDAs, financial agreements, legal documents, medical consents, or any sensitive materials requiring privacy compliance (GDPR, HIPAA)."
      },
      {
        question: "Can I add multiple signatures to one document?",
        answer: "Yes, add unlimited signatures, initials, dates, and text annotations to any document. Perfect for documents requiring: multiple signatory parties (all parties can sign the same PDF), initials on each page plus full signature on final page (common for multi-page contracts), witness signatures alongside primary signer, dual signatures for joint accounts or partnerships. Each signature can be independently positioned, resized, and styled. Ideal for complex agreements requiring multiple signature fields."
      },
      {
        question: "How do I sign a document on my phone or tablet?",
        answer: "Our tool works perfectly on mobile devices (iPhone, Android, iPad, Android tablets). On touchscreens, use your finger or stylus to draw signatures naturally—often looks more authentic than mouse-drawn signatures. Upload PDFs from cloud storage or email, create signature using touch, position by dragging with finger, download signed PDF directly to device or save to cloud. Perfect for signing documents on the go, remote workers, field service, or any mobile signing needs. Responsive design adapts to small screens while maintaining full functionality."
      },
      {
        question: "Will the recipient know it's an electronic signature?",
        answer: "The signed PDF looks like any signed document—the signature appears as an image embedded in the PDF. Most recipients can't distinguish electronic signatures from scanned handwritten signatures. The PDF doesn't display 'digitally signed' watermarks or technical indicators (those appear only with advanced digital signatures using certificates). For business purposes, inform recipients that you're using electronic signatures and ensure they're aware electronic signatures are legally valid for your transaction type."
      },
      {
        question: "Can I remove or edit a signature after adding it?",
        answer: "Before downloading: Yes, you can remove, reposition, or replace signatures freely within the tool. After downloading: No, signatures are embedded into the PDF and can't be easily removed without PDF editing software. This permanence is intentional for legal validity—signatures shouldn't be easily removable. Before download, carefully review signature placement, size, and appearance. Use the preview to verify everything looks correct before finalizing the signed PDF."
      },
      {
        question: "What if the document already has a signature field or form?",
        answer: "Our tool works with both regular PDFs and PDF forms. For PDFs with designated signature lines, position your signature to align with those lines. For interactive PDF forms with signature fields, our signatures are placed as annotations overlaying the form fields (signature appears on the field). For best results with forms, position signatures to visually fill the designated signature boxes. The tool doesn't interact with JavaScript-enabled form fields but places visual signatures anywhere you click."
      },
      {
        question: "Do I need to print and scan after signing?",
        answer: "No! That's the entire purpose of electronic signatures—eliminate print/scan workflows. After signing, download the PDF and email or upload it directly. Recipients receive a fully signed PDF identical to how scanned signatures appear, but created entirely digitally. This saves time, paper, printing costs, and allows instant document execution from anywhere. No printers, scanners, or physical mail needed. Perfect for remote work, international contracts, or any scenario requiring fast document execution."
      }
    ],

    relatedTools: [
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" }
    ],
  }
})

export const metadata = toolConfig.metadata

export default function PDFSignPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFSign />)} />
}
