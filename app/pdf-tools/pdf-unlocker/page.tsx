import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const PDFUnlocker = dynamic(() => import("@/components/pdf/pdf-unlocker").then((mod) => mod.PDFUnlocker), {
  loading: () => <ToolLoader />,
})

const toolConfig = createToolConfig({
  toolName: "PDF Unlocker",
  description:
    "Remove password protection and permission restrictions from PDF files online for free. Unlock printing, copying, and editing on authorized PDFs with automatic protection-type detection and instant download.",
  metaTitle: "PDF Unlocker — Remove Password & Restrictions from PDF Free",
  metaDescription:
    "Free PDF unlocker. Remove password protection and permission restrictions (print, copy, edit) from your authorized PDFs. Auto-detects owner vs user password. 100% client-side — your PDF never uploaded.",
  path: "/pdf-tools/pdf-unlocker",

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Free online PDF unlocker that removes password protection and permission restrictions from PDF files. Auto-detects protection type, supports owner password and user password removal.",
    alternateName: [
      "PDF Password Remover",
      "Unlock PDF Online",
      "Remove PDF Password",
      "PDF Decryptor",
      "Remove PDF Restrictions",
      "Enable PDF Printing",
      "Enable PDF Copy",
      "Enable PDF Edit",
      "Decrypt PDF",
      "Owner Password Remover",
      "User Password Remover",
      "PDF Permission Remover",
      "PDF Protection Remover",
      "Unprotect PDF",
      "PDF Security Remover",
    ],
    featureList: [
      "Automatic protection type detection (owner vs user password)",
      "Owner password (permissions) removal",
      "User password (open password) unlock — requires the password",
      "Remove print restrictions",
      "Remove copy/paste restrictions",
      "Remove edit/form-fill restrictions",
      "Remove annotation restrictions",
      "Download unrestricted PDF output",
      "Batch unlock up to 10 PDFs",
      "Visual indicator of what restrictions exist",
      "100% client-side — your PDF and password never uploaded",
      "Free, no signup, no watermark",
      "Only works on PDFs you own / are authorized to unlock",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.8",
    ratingCount: "5640",
  },

  header: {
    title: "PDF Unlocker",
    description:
      "Remove password protection and permission restrictions from your authorized PDF files online for free. Auto-detects whether the PDF uses an owner password (permission restrictions) or user password (open password), unlocks printing, copying, and editing, and lets you download the unrestricted PDF instantly.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
  ],

  content: {
    definition:
      "A PDF Unlocker is a free online tool that removes password protection and permission restrictions from PDF files — enabling printing, text copying, form filling, content editing, and document annotation on files you are authorized to access.",
    quickAnswer:
      "Upload a password-protected or permission-restricted PDF. The tool auto-detects the protection type: owner password (restricts printing/copying/editing) or user password (requires password to open). Enter the password if prompted, and download the fully unrestricted PDF with all permissions enabled.",
    keyTakeaways: [
      "Removes owner password restrictions that block printing, copying, editing, and form filling",
      "Unlocks user-password-protected PDFs when you provide the correct open password",
      "Auto-detects protection type (owner vs. user password) before processing",
      "Does not crack or brute-force unknown passwords — you must know or provide the password",
      "Only intended for PDFs you own or are legally authorized to modify",
    ],
    overview:
      "This free online PDF Unlocker removes password protection and permission restrictions from PDF files you are authorized to access. PDF protection comes in two forms: owner passwords that restrict actions like printing, copying text, and editing content; and user passwords (open passwords) that prevent the file from being opened without the correct password. This tool handles both types. For owner-password-protected PDFs, it removes permission restrictions so you can freely print, copy, edit, and annotate the document. For user-password-protected PDFs, enter the known password and the tool generates an unrestricted copy without the password requirement. The unlocked PDF retains all original content, formatting, images, and document structure. All processing runs locally in your browser for complete privacy — your PDF is never uploaded to any server.",

    howToSteps: [
      "Upload the password-protected or permission-restricted PDF file.",
      "Review the auto-detected protection type: owner password (permissions) or user password (open password).",
      "Enter the document password if the file requires one to open (user password protection).",
      "Click unlock to remove protection and generate the unrestricted PDF.",
      "Download the unlocked PDF with full print, copy, edit, and annotation permissions enabled.",
    ],

    features: [
      "Automatic protection-type detection distinguishing owner passwords from user passwords",
      "Owner password removal to unlock printing, copying, editing, and form-filling restrictions",
      "User password unlock when you provide the correct document open password",
      "Full content preservation — text, images, formatting, and structure remain intact",
      "Instant download of the unlocked, unrestricted PDF document",
      "100% browser-based processing — no server uploads, no data collection, no account required",
      "Works on desktop, tablet, and mobile browsers without any software installation",
    ],

    useCases: [
      "Unlock older protected PDF files for internal business operations and archival workflows",
      "Remove print restrictions from authorized PDFs to create physical copies for meetings and filing",
      "Enable text copying from permission-restricted PDFs for data extraction and report compilation",
      "Prepare locked PDFs for downstream processing with PDF splitter, merger, or converter tools",
      "Unlock form-filling restrictions on PDF forms that were distributed as read-only documents",
      "Remove edit restrictions from authorized documents to add annotations, comments, or corrections",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Understanding PDF Password Protection Types</h3>
          <p>
            PDFs use two distinct types of password protection. The owner password (also called permissions password or master password) restricts specific actions like printing, copying text, editing content, and filling forms — but the PDF can still be opened and viewed. The user password (also called open password or document password) prevents the PDF from being opened at all without the correct password. Many PDFs use only owner password protection, which means they can be viewed but not printed or edited. This tool detects which type of protection is applied and handles each accordingly.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Authorized Use and Legal Considerations</h3>
          <p>
            This tool is designed exclusively for PDFs you own, created, or have been authorized to modify. Common legitimate use cases include unlocking your own password-protected documents when you&apos;ve forgotten the permission settings, removing restrictions from company documents for authorized workflows, and preparing client-provided PDFs for processing when you have permission to do so. Unlocking PDFs you do not have rights to access may violate copyright laws and terms of service. Always ensure you have proper authorization before removing PDF protection.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Security Guarantee</h3>
          <p>
            All PDF unlocking happens entirely in your browser using client-side JavaScript processing. Your PDF file is never transmitted to any external server, and no document data is stored, logged, or accessible to anyone else. This makes the tool safe for unlocking confidential business documents, legal agreements, financial statements, and personal records.
          </p>
        </div>
      </div>
    ),

    proTip:
      "After unlocking, always verify that key pages, images, and text content appear correctly before using the file in legal, financial, or archival workflows. Once unlocked, you can immediately process the PDF with our splitter, merger, compressor, or converter tools.",

    faqs: [
      {
        question: "Can I unlock a PDF without knowing the password?",
        answer:
          "If the PDF only has owner password protection (permission restrictions on printing, copying, or editing), the tool can remove those restrictions without needing the password. However, if the PDF has user password protection (requires a password to open), you must provide the correct password — the tool does not crack or brute-force unknown passwords.",
      },
      {
        question: "What is the difference between owner password and user password in PDFs?",
        answer:
          "The owner password (permissions password) restricts actions like printing, copying, and editing but still allows the PDF to be opened and viewed. The user password (open password) prevents the PDF from being opened at all without the correct password. Many PDFs use only owner password protection, which this tool can remove without a password.",
      },
      {
        question: "Is it legal to remove password protection from a PDF?",
        answer:
          "It is legal to remove protection from PDFs you own or are authorized to modify. Common legitimate scenarios include unlocking your own documents, processing company files with authorization, and preparing client-provided documents for agreed-upon workflows. Removing protection from PDFs you do not have rights to access may violate copyright and computer fraud laws.",
      },
      {
        question: "What permissions does the PDF Unlocker enable?",
        answer:
          "The unlocked PDF has all permissions enabled: printing (full quality), text and image copying, content editing and modification, form filling, document annotation and commenting, and page extraction. The output is a fully unrestricted PDF.",
      },
      {
        question: "Is my PDF data safe when using this online unlocker?",
        answer:
          "Yes. All unlocking processing happens locally in your browser using client-side JavaScript. Your PDF is never uploaded to any server, and no document content is stored or logged. This makes it safe for confidential business, legal, financial, and personal documents.",
      },
      {
        question: "Can I use the unlocked PDF with other PDF tools?",
        answer:
          "Yes. Once unlocked, you can process the PDF with any of our tools — split it into pages, merge it with other documents, compress it for smaller file size, convert it to Word or images, or add your signature. The unlocked PDF has no restrictions on further processing.",
      },
      {
        question: "What should I do if the PDF unlock fails?",
        answer:
          "Verify that you entered the correct password (passwords are case-sensitive). Confirm the file is a valid PDF and not corrupted. Try opening the file in a different browser. Some PDFs use uncommon encryption standards (like AES-256 with non-standard configurations) that may not be supported by browser-based processing — in those cases, try Adobe Acrobat as an alternative.",
      },
    ],

    relatedTools: [
      { name: "Merge PDF", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF to Word Converter", href: "/pdf-tools/pdf-word-converter" },
      { name: "Sign PDF", href: "/pdf-tools/pdf-sign" },
      { name: "PDF Signature Checker", href: "/pdf-tools/pdf-signature-checker" },
      { name: "Password Generator", href: "/crypto-tools/password-generator" },
      { name: "Password Strength Analyzer", href: "/crypto-tools/password-strength-analyzer" },
      { name: "Text Encrypt/Decrypt", href: "/crypto-tools/encrypt-decrypt" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFUnlockerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFUnlocker />)} />
}
