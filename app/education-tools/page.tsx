import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"
import { BookMarked, GraduationCap, BookOpen, FileText, Sparkles } from "lucide-react"

const educationTools = [
  {
    title: "Citation Generator",
    description:
      "Generate citations in APA 7th, MLA 9th, Chicago, and Harvard. Auto-fill from DOI or ISBN. Build bibliographies and export as text or BibTeX.",
    icon: BookMarked,
    href: "/education-tools/citation-generator",
    popular: true,
  },
]

const toolConfig = createToolConfig({
  toolName: "Education Tools",
  description:
    "Free education tools for students, researchers, and educators. Citation generators, study aids, and academic writing helpers. All free, no signup.",
  metaTitle: "Free Education Tools for Students: Citation Generator & More",
  metaDescription:
    "Free online education tools for students. Citation generators (APA, MLA, Chicago, Harvard), study aids, and writing tools. All free, no signup, no ads.",
  path: "/education-tools",
  itemList: {
    name: "Education Tools",
    description:
      "Free tools for students, researchers, and educators — citation generators, study aids, and academic writing helpers.",
    items: educationTools.map((tool) => ({
      name: tool.title,
      description: tool.description,
      url: tool.href,
    })),
  },

  header: {
    title: "Education Tools",
    description:
      "Free tools for students, researchers, and educators. Citation generators, study aids, and academic writing helpers — all free, no signup required.",
    titleSize: "large",
    descriptionSize: "medium",
  },

  breadcrumbs: [{ label: "Education Tools", href: "/education-tools" }],

  content: {
    overview:
      "This category provides free academic and study tools for students, researchers, and educators. From citation generators supporting all major styles (APA, MLA, Chicago, Harvard) to study aids and academic writing helpers — everything runs in your browser with no signup, no ads, and no paywalls.",

    features: [
      "Citation Generator: APA 7th, MLA 9th, Chicago, and Harvard styles with DOI and ISBN auto-fill.",
      "Free Forever: Every style and every feature is free — no paywalls like EasyBib or Citation Machine.",
      "Privacy First: Works entirely in your browser. Your academic sources stay private.",
      "Mobile Friendly: Use on your phone or tablet while studying in the library or on the go.",
      "No Signup: Start using any tool instantly — no account creation, no email required.",
    ],

    useCases: [
      "Students: Write essays, research papers, and dissertations with properly formatted citations.",
      "Researchers: Build bibliographies for journal articles, grant applications, and literature reviews.",
      "Educators: Prepare course materials, lecture notes, and reading lists with correct citations.",
      "High School & College: Learn proper citation practices with live previews and auto-filled examples.",
      "Thesis & Dissertation Writers: Export bibliographies as BibTeX for LaTeX / Overleaf workflows.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Academic Integrity Starts with Good Citations
          </h3>
          <p>
            Proper citations are the foundation of academic integrity. They credit original
            authors, show your research is grounded in existing literature, and let readers trace
            your sources. This category provides free tools that help you cite accurately in every
            major style — without the paywalls that other tools impose.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Supported Citation Styles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-1">APA 7th (2019)</h4>
              <p className="text-sm">Psychology, education, social sciences. The current American Psychological Association style.</p>
            </div>
            <div className="p-3 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-1">MLA 9th (2021)</h4>
              <p className="text-sm">Literature, language, humanities. The current Modern Language Association style.</p>
            </div>
            <div className="p-3 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-1">Chicago 17th</h4>
              <p className="text-sm">History, arts, humanities. Author-date or notes-bibliography formats.</p>
            </div>
            <div className="p-3 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-foreground mb-1">Harvard</h4>
              <p className="text-sm">Most common UK / Commonwealth style. Author-year in-text citations.</p>
            </div>
          </div>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "Are these education tools really free?",
        answer:
          "Yes, 100% free with no paywalls, no signup, and no ads. Unlike EasyBib, Citation Machine, and BibMe — which charge for APA and Chicago citations — every style and every feature here is free.",
      },
      {
        question: "Do I need an account to use these tools?",
        answer:
          "No. You can use every tool immediately without creating an account, providing an email, or logging in.",
      },
      {
        question: "Is my data private?",
        answer:
          "Yes. All tools run in your browser. The citation generator makes direct calls to CrossRef (DOI) and OpenLibrary (ISBN) from your browser — we don't proxy or log your queries. Your academic sources stay private.",
      },
      {
        question: "Can I use these tools for my thesis or dissertation?",
        answer:
          "Yes. The citation generator follows the official APA 7th, MLA 9th, Chicago 17th, and Harvard rules. Export as BibTeX for LaTeX / Overleaf, or plain text for Word / Google Docs.",
      },
      {
        question: "What styles does the citation generator support?",
        answer:
          "APA 7th edition (2019), MLA 9th edition (2021), Chicago 17th edition, and Harvard. These are the four most-used academic styles covering the vast majority of citation needs in English-language academia.",
      },
    ],

    relatedTools: [
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "AI Text Summarizer", href: "/ai-tools/text-summarizer" },
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function EducationToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {educationTools.map((tool) => (
            <GToolCard
              key={`education-${tool.href}`}
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
