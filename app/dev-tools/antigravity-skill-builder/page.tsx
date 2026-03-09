import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const AgentSkillBuilder = dynamic(
  () => import("@/components/ai-tools/agent-skill-builder").then((mod) => mod.AgentSkillBuilder),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Agent Skill Builder",
  description:
    "Generate structured `SKILL.md` files for agent workflows and reusable task automation.",
  metaTitle: "AI Agent Skill Builder — Create SKILL.md Files for Coding Agents Free (2026)",
  metaDescription:
    "Build and export `SKILL.md` files for agent task workflows. Useful for repeatable coding, QA, and operations instructions.",
  path: "/dev-tools/antigravity-skill-builder",

  header: {
    title: "AI Agent Skill Builder (SKILL.md)",
    description:
      "Create reusable `SKILL.md` instructions for agent-driven development workflows.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Agent Skill Builder", href: "/dev-tools/antigravity-skill-builder" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate standardized skill instruction files for agent-based development workflows.",
    featureList: [
      "Skill file scaffolding",
      "Instruction structuring",
      "Download-ready output",
      "Reusable workflow templates",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "The Antigravity Skill Builder is a free tool that helps developers create and configure agent skills for AI coding assistants and automation frameworks.",
    quickAnswer:
      "Define your skill's name, description, triggers, and actions using the visual builder. Export the configuration as a YAML or JSON file ready to install in your agent framework. No coding required for basic skills.",
    keyTakeaways: [
      "Visual builder for creating AI agent skills and automation configs",
      "Export skills as YAML or JSON for framework integration",
      "Define triggers, conditions, and actions without writing code",
      "Compatible with popular agent frameworks and coding assistants",
      "Useful for developers building custom automation workflows",
    ],
    overview:
      "Use this builder to create structured `SKILL.md` files that define repeatable agent behaviors for engineering tasks such as coding, testing, refactoring, and operational checks.",

    howToSteps: [
      "Describe the agent workflow goal in plain language.",
      "Set skill name and task boundaries.",
      "Generate the `SKILL.md` output and review instructions.",
      "Download and place the file into your project skill directory.",
    ],

    features: [
      "Prompt-to-skill file generation",
      "Structured instruction output",
      "Download workflow for project usage",
      "Useful for team workflow standardization",
    ],

    useCases: [
      "Reusable coding task templates",
      "Standardized QA and review instructions",
      "Project-specific automation playbooks",
      "Agent onboarding and documentation",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Skill-definition tooling is most useful when output is predictable and
          easy to audit. This page is optimized around that use case.
        </p>
        <p>
          It helps teams reduce repeated prompt authoring by converting workflow
          intent into structured, reusable instructions.
        </p>
      </div>
    ),

    proTip:
      "Keep each skill narrowly scoped and action-oriented; smaller skills are easier to validate and maintain over time.",

    faqs: [
      {
        question: "What does this tool generate?",
        answer:
          "It generates structured `SKILL.md` instruction files for agent-driven workflows.",
      },
      {
        question: "Can I customize the generated output?",
        answer:
          "Yes. You can review and edit generated instructions before using them in your project.",
      },
      {
        question: "Who should use skill files?",
        answer:
          "Teams using agent-assisted development workflows to standardize repeatable tasks.",
      },
      {
        question: "Are skill files project-specific?",
        answer:
          "They can be general or project-specific depending on how narrowly you define task context.",
      },
      {
        question: "Can this replace full documentation?",
        answer:
          "It complements documentation by encoding executable workflow instructions, not broad product docs.",
      },
    ],

    relatedTools: [
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "JSON Diff", href: "/dev-tools/json-diff" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function AgentSkillBuilderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <AgentSkillBuilder />
        </div>
      )}
    />
  )
}
