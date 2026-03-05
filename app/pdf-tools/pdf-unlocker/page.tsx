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
    "Unlock PDFs you are authorized to access by removing open-password or permission restrictions in browser.",
  metaTitle: "PDF Unlocker Online - Remove PDF Password or Restrictions",
  metaDescription:
    "Unlock password-protected or restricted PDF files you are authorized to access. Remove viewing/permission barriers and download unlocked output.",
  path: "/pdf-tools/pdf-unlocker",
  keywords: [
    "pdf unlocker",
    "unlock pdf",
    "remove pdf password",
    "remove pdf restrictions",
    "pdf permission remover",
  ],

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Browser-based PDF unlock workflow for protected or restricted PDFs where user has valid access rights.",
    featureList: [
      "Detect protection type",
      "Unlock with password when required",
      "Remove restrictions for authorized files",
      "Download unlocked PDF output",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "PDF Unlocker",
    description:
      "Upload a protected PDF, provide password if needed, and download an unlocked version for authorized workflows.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
  ],

  content: {
    definition:
      "A PDF Unlocker is a free tool that removes password protection and permission restrictions from PDF files to enable printing, copying, and editing.",
    quickAnswer:
      "Upload a password-protected PDF and enter the document password (if required) to remove restrictions. The tool unlocks printing, copying, and editing permissions. Download the unrestricted PDF.",
    keyTakeaways: [
      "Removes PDF permission restrictions (print, copy, edit)",
      "Owner password removal enables full document access",
      "User password (open password) must be known to unlock",
      "Does not crack unknown passwords — you must provide the password",
      "Only unlock PDFs you own or have authorization to modify",
    ],
    overview:
      "PDF Unlocker helps when you have legitimate access to a protected PDF but need a less restricted working copy. It can handle both permission-restricted files and password-required files where the correct password is provided.",

    howToSteps: [
      "Upload the protected PDF.",
      "Review detected protection type.",
      "Enter the password if the file requires one to open.",
      "Run unlock and download the unlocked output.",
    ],

    features: [
      "Protection-type detection workflow",
      "Password input for user-protected PDFs",
      "Unlocking for restricted PDFs in authorized use cases",
      "Local browser processing",
      "No account required",
      "Works on desktop and mobile browsers",
    ],

    useCases: [
      "Access older protected files for internal operations",
      "Remove permission blocks on authorized documents",
      "Prepare files for downstream conversion or split/merge workflows",
      "Enable business process handoffs where restrictions block progress",
      "Recover operational access when password usage is known",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Authorized Use Only</h3>
          <p>
            This tool is intended for PDFs you own or are authorized to access. It is not for bypassing rights on unauthorized documents.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Output Behavior</h3>
          <p>
            The current unlock pipeline generates a new accessible PDF output from the protected source. Review output quality and content
            behavior before using it in final legal or archival workflows.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Workflow Fit</h3>
          <p>
            This page targets utility intent like "unlock PDF" and "remove PDF password" while keeping expectations aligned with the
            product’s actual behavior.
          </p>
        </div>
      </div>
    ),

    proTip:
      "If unlock succeeds, verify key pages and text behavior before sending the file to downstream systems.",

    faqs: [
      {
        question: "Can I unlock a PDF without the password?",
        answer:
          "If the file is only permission-restricted, unlock may work without an open password. If open-password protected, the correct password is required.",
      },
      {
        question: "Does this work for all encrypted PDFs?",
        answer:
          "It supports common protected-PDF workflows, but some files may fail due to unsupported or uncommon protection structures.",
      },
      {
        question: "Is it legal to unlock PDFs?",
        answer:
          "Use this only for files you own or are authorized to access. Legal responsibility depends on your rights and local law.",
      },
      {
        question: "Can I use unlocked output for split, merge, or conversion?",
        answer:
          "Yes. After unlocking, you can run the file through related PDF tools in this category.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes, it is available as a free browser-based utility.",
      },
      {
        question: "Does PDF Unlocker require software installation?",
        answer: "No. It runs directly in your browser.",
      },
      {
        question: "Can I unlock PDFs on mobile?",
        answer: "Yes. It supports modern mobile and desktop browsers.",
      },
      {
        question: "What if unlock fails?",
        answer:
          "Check password accuracy, confirm file is valid, and retry in another modern browser if needed.",
      },
    ],

    relatedTools: [
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFUnlockerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFUnlocker />)} />
}
