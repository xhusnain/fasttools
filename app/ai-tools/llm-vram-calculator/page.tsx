import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const LlmVramCalculator = dynamic(
  () => import("@/components/ai/llm-vram-calculator").then((mod) => mod.LlmVramCalculator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "LLM VRAM Calculator",
  description:
    "Work out how much VRAM you need to run Llama, Qwen, Mistral, Gemma, or Phi locally — weights, KV cache, and overhead, checked against real GPUs.",
  metaTitle: "LLM VRAM Calculator — Can Your GPU Run This Model?",
  metaDescription:
    "Free LLM VRAM calculator. Pick a model (Llama 3.1, Qwen2.5, Mistral, Gemma 2, Phi-4), quantization, and context length to see the VRAM needed — and whether your GPU can run it.",
  path: "/ai-tools/llm-vram-calculator",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Calculator that estimates GPU memory needed to run open-weight language models locally, broken into weights, KV cache, and runtime overhead, with a fit check against common GPUs.",
    alternateName: ["GPU memory calculator for LLMs", "can I run this LLM"],
    featureList: [
      "Presets for Llama 3.1, Qwen2.5, Mistral, Gemma 2, and Phi-4",
      "Five quantization levels from FP16 to Q4_K_M",
      "Context-length-aware KV cache math using real model architecture",
      "Fit check against common NVIDIA GPUs and Mac unified memory",
      "Custom VRAM input for any card",
      "100% client-side calculation",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  header: {
    title: "LLM VRAM Calculator",
    description:
      "Pick a model, a quantization, and a context length — see the VRAM it needs and whether your GPU can run it.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "LLM VRAM Calculator", href: "/ai-tools/llm-vram-calculator" },
  ],

  content: {
    definition:
      "An LLM VRAM calculator estimates the GPU memory a local language model needs by adding three components: the quantized model weights, the KV cache that grows with context length, and the runtime's fixed overhead.",
    quickAnswer:
      "Choose your model and quantization, set the context length you actually use, and read the total. As anchors: an 8B model at Q4 runs in about 6 GB, a 32B at Q4 needs around 20 GB, and a 70B at Q4 wants 44+ GB — before you grow the context.",
    overview:
      "\"Can my GPU run this model?\" is the first question of every local LLM setup, and the answer has three parts most calculators skip. The weights are only the start: every token of context you allow consumes KV-cache memory (this calculator uses each model's real layer count and attention-head layout, not a flat guess), and the runtime itself claims a chunk. Pick a preset, a quantization, and a context length, and the breakdown plus a fit check against common GPUs tells you what will actually load — and what will crash at 95% of the way in.",
    keyTakeaways: [
      "VRAM need = quantized weights + KV cache + runtime overhead, not weights alone",
      "Q4_K_M quantization is the local default: ~30% the size of FP16 with modest quality loss",
      "KV cache scales linearly with context — 32k context can add gigabytes on big models",
      "8B models fit 8 GB cards at Q4; 32B needs 24 GB; 70B needs 48 GB or multi-GPU",
      "Macs run models in unified memory — roughly 75% of it is usable",
    ],
    howToSteps: [
      "Select the model you want to run (or the closest size).",
      "Pick a quantization level — Q4_K_M is the usual starting point.",
      "Set the context length you realistically need.",
      "Read the total and check it against your GPU in the fit table.",
    ],
    features: [
      "Ten model presets with real architecture data (layers, KV heads, head size)",
      "FP16 through Q4_K_M quantization levels",
      "Per-component breakdown: weights, KV cache, overhead",
      "GPU fit table from 8 GB cards to 32 GB, plus Mac unified memory",
      "Custom VRAM input with exact shortfall shown",
      "Instant recalculation, fully in-browser",
    ],
    useCases: [
      "Check a model fits before downloading a 40 GB GGUF",
      "Choose the largest quantization your card can hold",
      "Decide between a bigger model at Q4 and a smaller one at Q8",
      "Size a GPU purchase around the models you plan to run",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Where the Memory Actually Goes</h3>
          <p>
            The weights dominate: parameters times bytes-per-parameter, which is why quantization matters so much — the same
            70B model is 141 GB at FP16 but about 42 GB at Q4_K_M. The KV cache comes second and is the part people forget:
            the model stores attention keys and values for every token in context, so memory grows with every message in a
            long chat. Its size depends on the model&rsquo;s layer count and attention design — models with grouped-query
            attention (Llama 3.1, Qwen2.5) keep it small, which this calculator accounts for using each model&rsquo;s real
            numbers. The rest is runtime overhead: CUDA buffers, compute scratch space, and your desktop&rsquo;s own claim
            on the card.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Choosing a Quantization Honestly</h3>
          <p>
            Quantization trades precision for size. Q8 is effectively indistinguishable from full precision; Q5_K_M and
            Q4_K_M lose a little sharpness on hard reasoning but remain the community default because they halve — or
            better — the footprint. Below Q4 the degradation gets noticeable quickly. The classic dilemma is a bigger model
            at Q4 versus a smaller one at Q8: in most benchmarks and most people&rsquo;s experience, the bigger model at Q4
            wins, which is why the fit table is worth checking before settling for the smaller download.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">If It Doesn&rsquo;t Fit</h3>
          <p>
            You have real options short of a new GPU. Drop the context length — most tasks don&rsquo;t need 32k, and halving
            context halves the KV cache. Step down one quantization level. Offload some layers to CPU RAM (llama.cpp and
            Ollama do this automatically), accepting slower generation for the layers that spill. Or run a KV cache in
            8-bit, which many runtimes now support. The breakdown above tells you which lever moves the most for your
            configuration.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Leave 0.5–1 GB of headroom below your card's total VRAM — the OS and display compositor already occupy some of it, and a model that 'exactly fits' on paper is the one that crashes during a long generation.",

    faqs: [
      {
        question: "How much VRAM do I need for Llama 3.1 8B?",
        answer:
          "About 6 GB at Q4_K_M with 8k context — it fits comfortably on an 8 GB card. At Q8 it needs around 10 GB, and FP16 wants 17+ GB, which is why quantized versions are the standard for local use.",
      },
      {
        question: "Can I run a 70B model on a single RTX 4090?",
        answer:
          "Not fully in its 24 GB — a 70B at Q4 needs roughly 44 GB. People run it anyway by offloading half the layers to system RAM at a large speed cost, or by using two 24 GB cards. A 32B model at Q4 is the realistic single-4090 sweet spot.",
      },
      {
        question: "Why does increasing context length raise VRAM use?",
        answer:
          "The model keeps attention keys and values for every context token in the KV cache. It grows linearly: on Llama 3.1 70B, going from 8k to 32k context adds several gigabytes. If memory is tight, context length is the first thing to cut.",
      },
      {
        question: "How accurate are these numbers?",
        answer:
          "They're built from typical GGUF file sizes, each model's published architecture, and a typical runtime overhead — expect reality within about half a gigabyte either way depending on your runtime and settings. Treat borderline fits as borderline.",
      },
    ],

    relatedTools: [
      { name: "LLM Token Counter", href: "/ai-tools/token-counter" },
      { name: "AI API Cost Calculator", href: "/ai-tools/ai-api-cost-calculator" },
      { name: "LLM Training Cost Calculator", href: "/dev-tools/llm-training-cost" },
      { name: "AI Code Detector", href: "/ai-tools/ai-code-detector" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function LlmVramCalculatorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<LlmVramCalculator />)} />
}
