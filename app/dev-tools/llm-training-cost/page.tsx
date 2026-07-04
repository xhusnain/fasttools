import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"

const LLMTrainingCostCalculator = dynamic(
  () => import("@/components/dev-tools/llm-training-cost-calculator").then(mod => mod.LLMTrainingCostCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "LLM Training Cost Calculator - GPU Hours Estimator"
const TOOL_NAME = "LLM Training Cost Estimator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description:
    "Estimate LLM training cost from parameters, tokens, GPU type, GPU count, precision, utilization, and approximate cloud GPU-hour rates.",
  path: "/dev-tools/llm-training-cost",
  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: TOOL_NAME, href: "/dev-tools/llm-training-cost" },
  ],
  schemaOptions: {
    name: "LLM Training Cost Estimator",
    alternateName: [
      "LLM Cost Calculator",
      "AI Training Cost Estimator",
      "GPU Training Cost Calculator",
      "Model Training Budget Calculator",
      "Chinchilla FLOPs Calculator",
    ],
    applicationCategory: "DeveloperApplication",
    featureList: [
      "Estimate total FLOPs using 6 x parameters x tokens",
      "Estimate GPU hours and training days",
      "Compare H200, H100, A100, L40S, A10G, and T4 sample configurations",
      "Select precision mode and GPU utilization",
      "Compare approximate provider GPU-hour rates",
      "Estimate compute, storage, networking, and overhead breakdown",
      "Copy estimate summary",
    ],
  },
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Developer Tools",
}

export default function LLMTrainingCostPage() {
  const toolContent = {
    toolName: "LLM Training Cost Estimator",
    overview:
      "Estimate the order-of-magnitude cost of training a language model from scratch. Enter model parameters, training tokens, GPU count, GPU type, precision, and expected utilization to calculate FLOPs, GPU hours, training time, and an approximate cloud-cost range.",

    definition:
      "LLM training cost is the estimated compute expense required to process a training token budget through a model, usually approximated from total FLOPs, effective GPU throughput, utilization, GPU count, and hourly compute price.",

    quickAnswer:
      "For a rough pre-training estimate, this calculator uses total FLOPs near 6 x parameters x tokens, then divides by effective GPU throughput after utilization and precision multipliers. The final dollar estimate uses sample GPU-hour prices and should be verified against current provider pricing.",

    keyTakeaways: [
      "The core estimate uses the common 6 x parameters x training tokens FLOPs approximation.",
      "GPU utilization or MFU is a major cost driver; lower utilization means more GPU hours.",
      "Provider prices change frequently and differ by region, reservation, commitment, and availability.",
      "The calculator estimates pre-training-like compute, not full R&D cost, hyperparameter search, RLHF, data curation, or evaluation.",
      "Fine-tuning, LoRA, QLoRA, and RAG are often far cheaper than training a model from scratch.",
    ],

    howToSteps: [
      "Enter model size in billions of parameters.",
      "Enter training tokens in billions.",
      "Choose GPU type, number of GPUs, precision, and expected utilization.",
      "Choose a provider sample rate to estimate dollar cost.",
      "Click Estimate Training Cost and review GPU hours, training days, cost breakdown, and comparisons.",
      "Use provider pricing pages before making a final purchase decision.",
    ],

    features: [
      "FLOPs estimate from parameters and tokens.",
      "GPU-hour and training-day estimate.",
      "Precision multipliers for FP32, BF16, FP16, FP8, and INT8 planning.",
      "GPU utilization input for MFU sensitivity.",
      "Approximate provider comparison table.",
      "GPU comparison table using lowest sample provider rates.",
      "Compute, storage, networking, and overhead cost breakdown.",
      "Reference-model scaling rows for common model-size examples.",
    ],

    useCases: [
      "Budget a pre-training experiment before renting GPUs.",
      "Compare whether H100, A100, L40S, or smaller GPUs make sense for a model size.",
      "Estimate how MFU changes total GPU hours and cost.",
      "Prepare rough compute numbers for a research or startup plan.",
      "Compare full pre-training against fine-tuning or retrieval-based alternatives.",
      "Create a first-pass estimate before asking cloud providers for quotes.",
    ],

    aboutTool:
      "This is a planning calculator, not a quote. Real training costs can move by a large margin because of achieved utilization, networking efficiency, data loading, failed runs, checkpointing frequency, spot interruptions, reservation discounts, taxes, and negotiated enterprise pricing.",

    proTip:
      "Before scaling up, run a small training experiment and measure actual MFU, throughput, checkpoint overhead, and failure rate. Replacing guessed utilization with measured utilization improves the estimate more than any static pricing table can.",

    faqs: [
      {
        question: "How does this estimate LLM training cost?",
        answer:
          "It estimates training FLOPs from parameters and tokens, converts FLOPs to GPU hours using selected GPU throughput and utilization, then multiplies by approximate GPU-hour rates plus overhead assumptions.",
      },
      {
        question: "Are the cloud GPU prices guaranteed?",
        answer:
          "No. They are sample planning rates. GPU pricing changes often and varies by provider, region, commitment, availability, and contract.",
      },
      {
        question: "What is MFU or GPU utilization?",
        answer:
          "MFU measures how much of the GPU's theoretical compute your training run actually uses. Poor data loading, communication overhead, and inefficient kernels reduce MFU and increase cost.",
      },
      {
        question: "Does this include fine-tuning cost?",
        answer:
          "The main calculator is aimed at pre-training-style estimates. Fine-tuning existing models is usually much cheaper and may require separate assumptions.",
      },
      {
        question: "Does this include post-training and evaluation?",
        answer:
          "No. It does not fully model RLHF, DPO, evaluation, red-teaming, data curation, engineering labor, or failed research runs.",
      },
    ],

    relatedTools: [
      { name: "Cloudflare Workers Cost Calculator", href: "/dev-tools/cloudflare-workers-cost" },
      { name: "AI API Cost Calculator", href: "/ai-tools/ai-api-cost-calculator" },
      { name: "Token to Word Converter", href: "/ai-tools/token-to-word-converter" },
      { name: "AI Text Summarizer", href: "/ai-tools/text-summarizer" },
      { name: "SaaS Churn Calculator", href: "/finance-tools/saas-churn-calculator" },
      { name: "Startup Runway Calculator", href: "/finance-tools/startup-runway-calculator" },
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  }

  return (
    <ToolPageLayout
      header={{
        title: "LLM Training Cost Calculator",
        description:
          "Estimate GPU hours, training time, and approximate cloud cost for model pre-training from parameters, tokens, GPU type, precision, and utilization.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue",
      }}
      breadcrumbs={[
        { label: "Developer Tools", href: "/dev-tools" },
        { label: TOOL_NAME, href: "/dev-tools/llm-training-cost" },
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <LLMTrainingCostCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description:
          "Estimate LLM training cost from parameters, tokens, GPU type, GPU count, precision, utilization, and approximate cloud GPU-hour rates.",
        path: "/dev-tools/llm-training-cost",
      }}
    />
  )
}
