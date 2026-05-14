// AI API Pricing Data — single source of truth for the AI API Cost Calculator
// Prices in USD per 1M tokens unless noted. Update this file whenever a provider changes pricing.

export type Provider =
  | "openai"
  | "anthropic"
  | "google"
  | "deepseek"
  | "mistral"
  | "meta"
  | "xai"
  | "cohere"
  | "groq"
  | "together"

export interface ModelPricing {
  id: string
  provider: Provider
  providerLabel: string
  name: string
  family: string
  contextWindow: number
  inputPerMillion: number
  outputPerMillion: number
  cachedInputPerMillion?: number
  notes?: string
  tier: "frontier" | "balanced" | "fast" | "reasoning" | "embedding"
  multimodal?: boolean
  releasedYear?: number
}

export const PRICING_LAST_UPDATED = "2026-05-14"

export const PROVIDERS: Record<Provider, { label: string; color: string; docsUrl: string }> = {
  openai: { label: "OpenAI", color: "#10A37F", docsUrl: "https://openai.com/api/pricing" },
  anthropic: { label: "Anthropic", color: "#D97757", docsUrl: "https://www.anthropic.com/pricing" },
  google: { label: "Google", color: "#4285F4", docsUrl: "https://ai.google.dev/pricing" },
  deepseek: { label: "DeepSeek", color: "#4D6BFE", docsUrl: "https://api-docs.deepseek.com/quick_start/pricing" },
  mistral: { label: "Mistral AI", color: "#FA520F", docsUrl: "https://mistral.ai/technology/" },
  meta: { label: "Meta Llama", color: "#0866FF", docsUrl: "https://llama.com" },
  xai: { label: "xAI", color: "#000000", docsUrl: "https://docs.x.ai/docs/pricing" },
  cohere: { label: "Cohere", color: "#39594D", docsUrl: "https://cohere.com/pricing" },
  groq: { label: "Groq", color: "#F55036", docsUrl: "https://groq.com/pricing" },
  together: { label: "Together AI", color: "#0F6FFF", docsUrl: "https://www.together.ai/pricing" },
}

export const MODELS: ModelPricing[] = [
  // ===== OpenAI =====
  {
    id: "gpt-5",
    provider: "openai",
    providerLabel: "OpenAI",
    name: "GPT-5",
    family: "GPT-5",
    contextWindow: 400_000,
    inputPerMillion: 1.25,
    outputPerMillion: 10.0,
    cachedInputPerMillion: 0.125,
    tier: "frontier",
    multimodal: true,
    releasedYear: 2025,
    notes: "OpenAI flagship. 90% cheaper cached input.",
  },
  {
    id: "gpt-5-mini",
    provider: "openai",
    providerLabel: "OpenAI",
    name: "GPT-5 mini",
    family: "GPT-5",
    contextWindow: 400_000,
    inputPerMillion: 0.25,
    outputPerMillion: 2.0,
    cachedInputPerMillion: 0.025,
    tier: "balanced",
    multimodal: true,
    releasedYear: 2025,
  },
  {
    id: "gpt-5-nano",
    provider: "openai",
    providerLabel: "OpenAI",
    name: "GPT-5 nano",
    family: "GPT-5",
    contextWindow: 400_000,
    inputPerMillion: 0.05,
    outputPerMillion: 0.4,
    cachedInputPerMillion: 0.005,
    tier: "fast",
    multimodal: true,
    releasedYear: 2025,
  },
  {
    id: "gpt-4o",
    provider: "openai",
    providerLabel: "OpenAI",
    name: "GPT-4o",
    family: "GPT-4",
    contextWindow: 128_000,
    inputPerMillion: 2.5,
    outputPerMillion: 10.0,
    cachedInputPerMillion: 1.25,
    tier: "balanced",
    multimodal: true,
    releasedYear: 2024,
  },
  {
    id: "gpt-4o-mini",
    provider: "openai",
    providerLabel: "OpenAI",
    name: "GPT-4o mini",
    family: "GPT-4",
    contextWindow: 128_000,
    inputPerMillion: 0.15,
    outputPerMillion: 0.6,
    cachedInputPerMillion: 0.075,
    tier: "fast",
    multimodal: true,
    releasedYear: 2024,
  },
  {
    id: "o3",
    provider: "openai",
    providerLabel: "OpenAI",
    name: "o3",
    family: "o-series",
    contextWindow: 200_000,
    inputPerMillion: 2.0,
    outputPerMillion: 8.0,
    cachedInputPerMillion: 0.5,
    tier: "reasoning",
    releasedYear: 2025,
    notes: "Reasoning model. Output billed includes thinking tokens.",
  },
  {
    id: "o3-mini",
    provider: "openai",
    providerLabel: "OpenAI",
    name: "o3-mini",
    family: "o-series",
    contextWindow: 200_000,
    inputPerMillion: 1.1,
    outputPerMillion: 4.4,
    cachedInputPerMillion: 0.55,
    tier: "reasoning",
    releasedYear: 2025,
  },

  // ===== Anthropic =====
  {
    id: "claude-opus-4-7",
    provider: "anthropic",
    providerLabel: "Anthropic",
    name: "Claude Opus 4.7",
    family: "Claude 4",
    contextWindow: 1_000_000,
    inputPerMillion: 5,
    outputPerMillion: 25,
    cachedInputPerMillion: 0.5,
    tier: "frontier",
    multimodal: true,
    releasedYear: 2025,
    notes: "1M context window. Top reasoning/coding.",
  },
  {
    id: "claude-sonnet-4-6",
    provider: "anthropic",
    providerLabel: "Anthropic",
    name: "Claude Sonnet 4.6",
    family: "Claude 4",
    contextWindow: 1_000_000,
    inputPerMillion: 3.0,
    outputPerMillion: 15.0,
    cachedInputPerMillion: 0.3,
    tier: "balanced",
    multimodal: true,
    releasedYear: 2025,
  },
  {
    id: "claude-haiku-4-5",
    provider: "anthropic",
    providerLabel: "Anthropic",
    name: "Claude Haiku 4.5",
    family: "Claude 4",
    contextWindow: 200_000,
    inputPerMillion: 1.0,
    outputPerMillion: 5.0,
    cachedInputPerMillion: 0.1,
    tier: "fast",
    multimodal: true,
    releasedYear: 2025,
  },

  // ===== Google Gemini =====
  {
    id: "gemini-2-5-pro",
    provider: "google",
    providerLabel: "Google",
    name: "Gemini 2.5 Pro",
    family: "Gemini 2.5",
    contextWindow: 2_000_000,
    inputPerMillion: 1.25,
    outputPerMillion: 10,
    cachedInputPerMillion: 0.125,
    tier: "frontier",
    multimodal: true,
    releasedYear: 2025,
    notes: "2M context. Higher for >200k context.",
  },
  {
    id: "gemini-2-5-flash",
    provider: "google",
    providerLabel: "Google",
    name: "Gemini 2.5 Flash",
    family: "Gemini 2.5",
    contextWindow: 1_000_000,
    inputPerMillion: 0.3,
    outputPerMillion: 2.5,
    cachedInputPerMillion: 0.03,
    tier: "balanced",
    multimodal: true,
    releasedYear: 2025,
  },
  {
    id: "gemini-2-5-flash-lite",
    provider: "google",
    providerLabel: "Google",
    name: "Gemini 2.5 Flash-Lite",
    family: "Gemini 2.5",
    contextWindow: 1_000_000,
    inputPerMillion: 0.1,
    outputPerMillion: 0.4,
    cachedInputPerMillion: 0.01,
    tier: "fast",
    multimodal: true,
    releasedYear: 2025,
  },

  // ===== DeepSeek =====
  {
    id: "deepseek-v3",
    provider: "deepseek",
    providerLabel: "DeepSeek",
    name: "DeepSeek V3",
    family: "DeepSeek V3",
    contextWindow: 128_000,
    inputPerMillion: 0.28,
    outputPerMillion: 0.42,
    cachedInputPerMillion: 0.028,
    tier: "balanced",
    releasedYear: 2024,
    notes: "Open source; pricing for hosted API.",
  },
  {
    id: "deepseek-r1",
    provider: "deepseek",
    providerLabel: "DeepSeek",
    name: "DeepSeek R1",
    family: "DeepSeek R1",
    contextWindow: 128_000,
    inputPerMillion: 0.28,
    outputPerMillion: 0.42,
    cachedInputPerMillion: 0.028,
    tier: "reasoning",
    releasedYear: 2025,
    notes: "Reasoning model. Output includes thinking tokens.",
  },

  // ===== Mistral =====
  {
    id: "mistral-large-2",
    provider: "mistral",
    providerLabel: "Mistral AI",
    name: "Mistral Large 2",
    family: "Mistral Large",
    contextWindow: 128_000,
    inputPerMillion: 0.5,
    outputPerMillion: 1.5,
    tier: "frontier",
    releasedYear: 2024,
  },
  {
    id: "mistral-small-3",
    provider: "mistral",
    providerLabel: "Mistral AI",
    name: "Mistral Small 3",
    family: "Mistral Small",
    contextWindow: 32_000,
    inputPerMillion: 0.06,
    outputPerMillion: 0.18,
    tier: "fast",
    releasedYear: 2025,
  },
  {
    id: "codestral",
    provider: "mistral",
    providerLabel: "Mistral AI",
    name: "Codestral",
    family: "Codestral",
    contextWindow: 256_000,
    inputPerMillion: 1,
    outputPerMillion: 3,
    tier: "balanced",
    releasedYear: 2025,
    notes: "Optimized for code generation.",
  },

  // ===== Meta Llama (via Together AI) =====
  {
    id: "llama-3-3-70b-together",
    provider: "together",
    providerLabel: "Together AI (Llama)",
    name: "Llama 3.3 70B Instruct",
    family: "Llama 3.3",
    contextWindow: 128_000,
    inputPerMillion: 0.88,
    outputPerMillion: 0.88,
    tier: "balanced",
    releasedYear: 2024,
    notes: "Llama via Together AI. Open weights available.",
  },
  {
    id: "llama-4-maverick-together",
    provider: "together",
    providerLabel: "Together AI (Llama)",
    name: "Llama 4 Maverick 400B",
    family: "Llama 4",
    contextWindow: 1_000_000,
    inputPerMillion: 0.27,
    outputPerMillion: 0.85,
    tier: "frontier",
    multimodal: true,
    releasedYear: 2025,
  },
  {
    id: "llama-4-scout-together",
    provider: "together",
    providerLabel: "Together AI (Llama)",
    name: "Llama 4 Scout 109B",
    family: "Llama 4",
    contextWindow: 10_000_000,
    inputPerMillion: 0.18,
    outputPerMillion: 0.59,
    tier: "balanced",
    multimodal: true,
    releasedYear: 2025,
    notes: "10M context window.",
  },

  // ===== Groq (fast inference, hosts open models) =====
  {
    id: "llama-3-3-70b-groq",
    provider: "groq",
    providerLabel: "Groq (Llama)",
    name: "Llama 3.3 70B Versatile",
    family: "Llama 3.3",
    contextWindow: 128_000,
    inputPerMillion: 0.59,
    outputPerMillion: 0.79,
    tier: "fast",
    releasedYear: 2024,
    notes: "Groq LPU. Fastest inference (~280 tok/s).",
  },
  {
    id: "llama-3-1-8b-groq",
    provider: "groq",
    providerLabel: "Groq (Llama)",
    name: "Llama 3.1 8B Instant",
    family: "Llama 3.1",
    contextWindow: 128_000,
    inputPerMillion: 0.05,
    outputPerMillion: 0.08,
    tier: "fast",
    releasedYear: 2024,
  },

  // ===== xAI =====
  {
    id: "grok-4",
    provider: "xai",
    providerLabel: "xAI",
    name: "Grok 4",
    family: "Grok",
    contextWindow: 256_000,
    inputPerMillion: 3.0,
    outputPerMillion: 15.0,
    cachedInputPerMillion: 0.75,
    tier: "frontier",
    multimodal: true,
    releasedYear: 2025,
  },
  {
    id: "grok-4-mini",
    provider: "xai",
    providerLabel: "xAI",
    name: "Grok 4 Mini",
    family: "Grok",
    contextWindow: 128_000,
    inputPerMillion: 0.3,
    outputPerMillion: 1.5,
    tier: "fast",
    releasedYear: 2025,
  },

  // ===== Cohere =====
  {
    id: "command-r-plus",
    provider: "cohere",
    providerLabel: "Cohere",
    name: "Command R+ 08-2024",
    family: "Command R",
    contextWindow: 128_000,
    inputPerMillion: 2.5,
    outputPerMillion: 10.0,
    tier: "frontier",
    releasedYear: 2024,
  },
  {
    id: "command-r",
    provider: "cohere",
    providerLabel: "Cohere",
    name: "Command R 08-2024",
    family: "Command R",
    contextWindow: 128_000,
    inputPerMillion: 0.15,
    outputPerMillion: 0.6,
    tier: "fast",
    releasedYear: 2024,
  },
]

// ============== Use-case presets ==============
// Real-world workload templates. Used to seed the calculator with realistic numbers.

export interface UsagePreset {
  id: string
  label: string
  description: string
  inputTokensPerRequest: number
  outputTokensPerRequest: number
  requestsPerMonth: number
  cacheableInputPct: number // 0–1, share of input that can be cached
  category: "chat" | "rag" | "agent" | "summarize" | "code" | "embed" | "batch"
}

export const USAGE_PRESETS: UsagePreset[] = [
  {
    id: "chat-light",
    label: "Light chatbot (early stage)",
    description: "Small SaaS support bot, ~1,000 active users sending a few messages each.",
    inputTokensPerRequest: 800,
    outputTokensPerRequest: 400,
    requestsPerMonth: 50_000,
    cacheableInputPct: 0.4,
    category: "chat",
  },
  {
    id: "chat-prod",
    label: "Production chatbot",
    description: "Consumer chatbot, ~50K MAU, ~3M messages per month.",
    inputTokensPerRequest: 1_200,
    outputTokensPerRequest: 600,
    requestsPerMonth: 3_000_000,
    cacheableInputPct: 0.5,
    category: "chat",
  },
  {
    id: "rag",
    label: "RAG (knowledge-base assistant)",
    description: "Heavy input from retrieved chunks, short answers. System prompt is highly cacheable.",
    inputTokensPerRequest: 8_000,
    outputTokensPerRequest: 600,
    requestsPerMonth: 200_000,
    cacheableInputPct: 0.6,
    category: "rag",
  },
  {
    id: "agent",
    label: "Agentic workflow",
    description: "Multi-step tool-using agent. Many short turns per task.",
    inputTokensPerRequest: 3_000,
    outputTokensPerRequest: 1_500,
    requestsPerMonth: 500_000,
    cacheableInputPct: 0.55,
    category: "agent",
  },
  {
    id: "summarize",
    label: "Document summarization",
    description: "Long inputs, short outputs (~10:1 ratio). Common in legal/research SaaS.",
    inputTokensPerRequest: 15_000,
    outputTokensPerRequest: 800,
    requestsPerMonth: 50_000,
    cacheableInputPct: 0.1,
    category: "summarize",
  },
  {
    id: "code-gen",
    label: "Code generation IDE plugin",
    description: "Inline completions + chat. Repo context is cacheable per session.",
    inputTokensPerRequest: 4_000,
    outputTokensPerRequest: 800,
    requestsPerMonth: 1_000_000,
    cacheableInputPct: 0.5,
    category: "code",
  },
  {
    id: "batch",
    label: "Bulk processing / batch jobs",
    description: "Classifying, tagging, or scoring records nightly.",
    inputTokensPerRequest: 2_000,
    outputTokensPerRequest: 200,
    requestsPerMonth: 5_000_000,
    cacheableInputPct: 0.3,
    category: "batch",
  },
]

// ============== Cost calculation ==============

export interface CostInputs {
  inputTokensPerRequest: number
  outputTokensPerRequest: number
  requestsPerMonth: number
  cacheableInputPct: number // 0–1
}

export interface ModelCostBreakdown {
  modelId: string
  modelName: string
  providerLabel: string
  perRequest: number
  perMonth: number
  perYear: number
  inputCost: number
  outputCost: number
  cachedInputSavings: number
  effectiveInputRate: number
}

export function calculateModelCost(model: ModelPricing, inputs: CostInputs): ModelCostBreakdown {
  const cacheable = Math.min(Math.max(inputs.cacheableInputPct, 0), 1)
  const cachedRate = model.cachedInputPerMillion ?? model.inputPerMillion
  const effectiveInputRate =
    model.inputPerMillion * (1 - cacheable) + cachedRate * cacheable

  const inputCost =
    (inputs.inputTokensPerRequest / 1_000_000) * effectiveInputRate
  const outputCost =
    (inputs.outputTokensPerRequest / 1_000_000) * model.outputPerMillion
  const perRequest = inputCost + outputCost
  const perMonth = perRequest * inputs.requestsPerMonth
  const perYear = perMonth * 12

  const uncachedInputCost =
    (inputs.inputTokensPerRequest / 1_000_000) * model.inputPerMillion
  const cachedInputSavings = (uncachedInputCost - inputCost) * inputs.requestsPerMonth

  return {
    modelId: model.id,
    modelName: model.name,
    providerLabel: model.providerLabel,
    perRequest,
    perMonth,
    perYear,
    inputCost: inputCost * inputs.requestsPerMonth,
    outputCost: outputCost * inputs.requestsPerMonth,
    cachedInputSavings,
    effectiveInputRate,
  }
}

export function compareModels(
  modelIds: string[],
  inputs: CostInputs
): ModelCostBreakdown[] {
  return modelIds
    .map((id) => MODELS.find((m) => m.id === id))
    .filter((m): m is ModelPricing => Boolean(m))
    .map((m) => calculateModelCost(m, inputs))
    .sort((a, b) => a.perMonth - b.perMonth)
}

export function formatUsd(value: number): string {
  if (value === 0) return "$0.00"
  if (value < 0.01) {
    return `$${value.toFixed(4)}`
  }
  if (value < 1) {
    return `$${value.toFixed(3)}`
  }
  if (value < 100) {
    return `$${value.toFixed(2)}`
  }
  if (value < 10_000) {
    return `$${value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`
  }
  return `$${(value / 1000).toFixed(1)}k`
}

export function modelsByProvider(): Record<string, ModelPricing[]> {
  return MODELS.reduce<Record<string, ModelPricing[]>>((acc, model) => {
    const key = model.providerLabel
    if (!acc[key]) acc[key] = []
    acc[key].push(model)
    return acc
  }, {})
}
