import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const PDFToolsAdvanced = dynamic(
  () => import("@/components/pdf/pdf-tools-advanced").then((mod) => mod.PDFToolsAdvanced),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "PDF Splitter & Merger",
  description:
    "Split PDF pages or merge multiple PDFs in custom order with a browser-based workflow.",
  metaTitle: "PDF Splitter and Merger Online - Split or Merge PDF Files",
  metaDescription:
    "Split PDF pages by all pages, range, or selected pages. Merge multiple PDFs in your preferred order and download the result.",
  path: "/pdf-tools/pdf-splitter-merger",
  keywords: [
    "split pdf",
    "merge pdf",
    "pdf splitter",
    "pdf merger",
    "extract pdf pages",
    "combine pdf files",
  ],

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Online PDF split and merge tool with range extraction and reorderable merge list.",
    featureList: [
      "Split all pages",
      "Split by range",
      "Extract selected pages",
      "Merge multiple PDFs",
      "Reorder files before merge",
    ],
    softwareRequirements: "Modern web browser",
  },

  header: {
    title: "PDF Splitter & Merger",
    description:
      "Extract pages from a PDF or combine multiple PDFs into one file using a simple browser workflow.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "PDF Tools", href: "/pdf-tools" },
    { label: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
  ],

  content: {
    definition:
      "A PDF Splitter & Merger is a free tool that splits PDF files into individual pages or custom ranges and merges multiple PDFs into a single document.",
    quickAnswer:
      "Upload PDFs to split them by page range or merge multiple files into one. Drag to reorder pages before merging. Download the result as a single PDF. All processing happens in your browser.",
    keyTakeaways: [
      "Split PDFs by page range (e.g., pages 1-3, 5, 7-10)",
      "Merge multiple PDF files into a single document",
      "Drag-and-drop page reordering before merging",
      "Extract individual pages as separate PDF files",
      "Browser-based processing — no file uploads to external servers",
    ],
    overview:
      "PDF Splitter & Merger supports two core operations: split one PDF into selected outputs, and merge multiple PDFs into one combined file. In split mode, you can export all pages, a range, or specific pages. In merge mode, you can reorder files before final output.",

    howToSteps: [
      "Choose mode: Merge PDFs or Split PDF.",
      "Upload PDF files for the selected mode.",
      "For split: choose all pages, range, or extract list. For merge: reorder files.",
      "Run processing and download the result.",
    ],

    features: [
      "Split modes: all pages, range, extract list",
      "Merge multiple files into one PDF",
      "Drag-and-drop file order for merge",
      "Page count awareness for split inputs",
      "No account required",
      "Browser-based processing",
      "Desktop and mobile support",
    ],

    useCases: [
      "Extract only required pages from long documents",
      "Create document bundles by merging related PDFs",
      "Prepare page-specific packets for teams",
      "Break large PDFs into smaller operational files",
      "Assemble final reports from multiple source PDFs",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Split Workflows</h3>
          <p>
            Use split mode when a single source document contains only a subset you need. Range and extract-list options are useful for
            controlled page delivery.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Merge Workflows</h3>
          <p>
            Use merge mode to build final packets from multiple PDFs. Reordering before processing keeps output structure predictable.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Capability Alignment</h3>
          <p>
            This page is tuned to actual in-product controls: page extraction and merge ordering, without claiming unavailable advanced
            features.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For large jobs, split first into required sections, then merge only the sections needed for final delivery.",

    faqs: [
      {
        question: "How do I split a PDF into separate pages?",
        answer:
          "Switch to split mode and choose All Pages. The tool will export each page as its own PDF file.",
      },
      {
        question: "Can I extract a page range like 5-12?",
        answer:
          "Yes. In split mode choose Range and set start and end pages.",
      },
      {
        question: "Can I extract specific pages like 1,3,8?",
        answer:
          "Yes. Use Extract Pages mode and enter a comma-separated list.",
      },
      {
        question: "How do I merge PDFs in a custom order?",
        answer:
          "Switch to merge mode, upload files, then drag to reorder before generating the merged output.",
      },
      {
        question: "Is this free?",
        answer: "Yes, it is available as a free browser-based utility.",
      },
      {
        question: "Do I need software installation?",
        answer: "No. You can run split and merge workflows directly in your browser.",
      },
      {
        question: "Does it work on mobile browsers?",
        answer: "Yes. It supports modern mobile and desktop browsers.",
      },
      {
        question: "Can I split and merge password-protected PDFs?",
        answer:
          "Use PDF Unlocker first if the file is protected, then run split or merge operations.",
      },
    ],

    relatedTools: [
      { name: "PDF Compressor", href: "/pdf-tools/pdf-compressor" },
      { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
      { name: "PDF to Image", href: "/pdf-tools/pdf-to-image" },
      { name: "All PDF Tools", href: "/pdf-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PDFSplitterMergerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PDFToolsAdvanced />)} />
}
