"use client"

import { useMemo, useState } from "react"
import {
  AlertCircle,
  Award,
  Check,
  Copy,
  DollarSign,
  Sparkles,
  TrendingDown,
  X,
} from "lucide-react"
import { toast } from "sonner"
import { GBadge } from "@/ui/gbadge"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader } from "@/ui/gcard"
import { GCheckbox } from "@/ui/gcheckbox"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GSlider } from "@/ui/gslider"
import {
  MODELS,
  USAGE_PRESETS,
  PRICING_LAST_UPDATED,
  calculateModelCost,
  compareModels,
  formatUsd,
  modelsByProvider,
  type ModelPricing,
} from "@/lib/ai-pricing-data"

const DEFAULT_SELECTED = [
  "gpt-5",
  "gpt-4o-mini",
  "claude-sonnet-4-6",
  "claude-haiku-4-5",
  "gemini-2-5-pro",
  "gemini-2-5-flash",
  "deepseek-v3",
  "llama-4-maverick-together",
]

const TIER_COLORS: Record<ModelPricing["tier"], string> = {
  frontier: "bg-purple-500/10 text-purple-700 dark:text-purple-300",
  reasoning: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  balanced: "bg-green-500/10 text-green-700 dark:text-green-300",
  fast: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  embedding: "bg-slate-500/10 text-slate-700 dark:text-slate-300",
}

const TIER_LABEL: Record<ModelPricing["tier"], string> = {
  frontier: "Frontier",
  reasoning: "Reasoning",
  balanced: "Balanced",
  fast: "Fast/Cheap",
  embedding: "Embedding",
}

function parseNumber(value: string): number {
  const cleaned = value.replace(/[^\d.]/g, "")
  const parsed = Number(cleaned)
  return Number.isFinite(parsed) ? parsed : 0
}

export function AiApiCostCalculator() {
  const [selected, setSelected] = useState<string[]>(DEFAULT_SELECTED)
  const [inputTokens, setInputTokens] = useState("1200")
  const [outputTokens, setOutputTokens] = useState("600")
  const [requestsPerMonth, setRequestsPerMonth] = useState("3000000")
  const [cacheablePct, setCacheablePct] = useState(50)
  const [activePreset, setActivePreset] = useState<string | null>("chat-prod")
  const [showAllModels, setShowAllModels] = useState(false)

  const inputs = {
    inputTokensPerRequest: parseNumber(inputTokens),
    outputTokensPerRequest: parseNumber(outputTokens),
    requestsPerMonth: parseNumber(requestsPerMonth),
    cacheableInputPct: cacheablePct / 100,
  }

  const results = useMemo(
    () => compareModels(selected, inputs),
    [selected, inputs.inputTokensPerRequest, inputs.outputTokensPerRequest, inputs.requestsPerMonth, inputs.cacheableInputPct]
  )

  const cheapest = results[0]
  const mostExpensive = results[results.length - 1]
  const savings =
    cheapest && mostExpensive && cheapest.modelId !== mostExpensive.modelId
      ? mostExpensive.perMonth - cheapest.perMonth
      : 0
  const savingsPct =
    mostExpensive && mostExpensive.perMonth > 0
      ? (savings / mostExpensive.perMonth) * 100
      : 0

  const groupedModels = useMemo(() => modelsByProvider(), [])

  const toggleModel = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  const applyPreset = (presetId: string) => {
    const preset = USAGE_PRESETS.find((p) => p.id === presetId)
    if (!preset) return
    setActivePreset(presetId)
    setInputTokens(String(preset.inputTokensPerRequest))
    setOutputTokens(String(preset.outputTokensPerRequest))
    setRequestsPerMonth(String(preset.requestsPerMonth))
    setCacheablePct(Math.round(preset.cacheableInputPct * 100))
  }

  const copyShareLink = () => {
    const params = new URLSearchParams({
      models: selected.join(","),
      input: inputTokens,
      output: outputTokens,
      reqs: requestsPerMonth,
      cache: String(cacheablePct),
    })
    const url = `${window.location.origin}${window.location.pathname}?${params.toString()}`
    navigator.clipboard.writeText(url)
    toast.success("Share link copied")
  }

  const copySummary = () => {
    if (results.length === 0) return
    const lines = [
      `AI API Cost Comparison — ${inputs.requestsPerMonth.toLocaleString()} reqs/mo`,
      `Per request: ${inputs.inputTokensPerRequest} input + ${inputs.outputTokensPerRequest} output tokens, ${cacheablePct}% cacheable`,
      "",
      ...results.map(
        (r, i) =>
          `${i + 1}. ${r.providerLabel} ${r.modelName}: ${formatUsd(r.perMonth)}/mo (${formatUsd(r.perYear)}/yr)`
      ),
      "",
      `Cheapest saves ${formatUsd(savings)}/mo vs most expensive (${savingsPct.toFixed(0)}%).`,
      "",
      `Compare yourself: fasttools.store/ai-tools/ai-api-cost-calculator`,
    ]
    navigator.clipboard.writeText(lines.join("\n"))
    toast.success("Summary copied")
  }

  return (
    <div className="space-y-6">
      {/* Use-case presets */}
      <GCard>
        <GCardHeader>
          <h2 className="text-base font-semibold flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            Start with a use case
          </h2>
          <p className="text-sm text-muted-foreground">
            Realistic workload templates. Click one to load typical numbers, then adjust.
          </p>
        </GCardHeader>
        <GCardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {USAGE_PRESETS.map((preset) => (
              <button
                type="button"
                key={preset.id}
                onClick={() => applyPreset(preset.id)}
                className={`text-left p-3 rounded-lg border transition ${
                  activePreset === preset.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40 hover:bg-muted/40"
                }`}
              >
                <div className="text-sm font-medium text-foreground">{preset.label}</div>
                <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {preset.description}
                </div>
              </button>
            ))}
          </div>
        </GCardContent>
      </GCard>

      {/* Inputs */}
      <GCard>
        <GCardHeader>
          <h2 className="text-base font-semibold">Your usage</h2>
        </GCardHeader>
        <GCardContent className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <GLabel htmlFor="input-tokens">Input tokens per request</GLabel>
              <GInput
                id="input-tokens"
                inputMode="numeric"
                value={inputTokens}
                onChange={(e) => {
                  setInputTokens(e.target.value)
                  setActivePreset(null)
                }}
                placeholder="1200"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Roughly: 1 token ≈ 0.75 English words.
              </p>
            </div>
            <div>
              <GLabel htmlFor="output-tokens">Output tokens per request</GLabel>
              <GInput
                id="output-tokens"
                inputMode="numeric"
                value={outputTokens}
                onChange={(e) => {
                  setOutputTokens(e.target.value)
                  setActivePreset(null)
                }}
                placeholder="600"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Output is usually 5–10× more expensive than input.
              </p>
            </div>
            <div>
              <GLabel htmlFor="reqs">Requests per month</GLabel>
              <GInput
                id="reqs"
                inputMode="numeric"
                value={requestsPerMonth}
                onChange={(e) => {
                  setRequestsPerMonth(e.target.value)
                  setActivePreset(null)
                }}
                placeholder="3000000"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Total API calls per month.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <GLabel htmlFor="cache-slider">Cacheable share of input</GLabel>
              <span className="text-sm font-medium tabular-nums">{cacheablePct}%</span>
            </div>
            <GSlider
              id="cache-slider"
              value={[cacheablePct]}
              onValueChange={(v) => {
                setCacheablePct(v[0])
                setActivePreset(null)
              }}
              min={0}
              max={100}
              step={5}
            />
            <p className="text-xs text-muted-foreground mt-2">
              Portion of the input prompt that is identical across requests (system prompt, RAG
              context). Most providers offer ~90% discount on cached input.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <GButton variant="outline" size="sm" onClick={copyShareLink}>
              <Copy className="h-3.5 w-3.5 mr-1.5" />
              Copy share link
            </GButton>
            <GButton variant="outline" size="sm" onClick={copySummary}>
              <Copy className="h-3.5 w-3.5 mr-1.5" />
              Copy comparison summary
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Results */}
      <GCard>
        <GCardHeader>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold">Monthly cost comparison</h2>
              <p className="text-sm text-muted-foreground">
                {results.length} model{results.length !== 1 && "s"} selected · sorted cheapest first
              </p>
            </div>
            {savings > 0 && cheapest && mostExpensive && (
              <div className="text-right">
                <div className="text-xs text-muted-foreground">
                  Switching {mostExpensive.modelName} → {cheapest.modelName} saves
                </div>
                <div className="text-lg font-semibold text-green-600 dark:text-green-400 flex items-center gap-1 justify-end">
                  <TrendingDown className="h-4 w-4" />
                  {formatUsd(savings)}/mo · {savingsPct.toFixed(0)}%
                </div>
              </div>
            )}
          </div>
        </GCardHeader>
        <GCardContent>
          {results.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <AlertCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
              Pick at least one model below to compare.
            </div>
          ) : (
            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground text-xs uppercase tracking-wide">
                    <th className="text-left py-2 pr-3 font-medium">Model</th>
                    <th className="text-right py-2 px-3 font-medium">Per request</th>
                    <th className="text-right py-2 px-3 font-medium">Per month</th>
                    <th className="text-right py-2 px-3 font-medium">Per year</th>
                    <th className="text-right py-2 pl-3 font-medium">vs. cheapest</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, i) => {
                    const isCheapest = i === 0
                    const isMostExpensive = i === results.length - 1 && results.length > 1
                    const overhead = cheapest && cheapest.perMonth > 0
                      ? ((r.perMonth - cheapest.perMonth) / cheapest.perMonth) * 100
                      : 0
                    return (
                      <tr
                        key={r.modelId}
                        className={`border-b border-border/50 ${
                          isCheapest ? "bg-green-500/5" : isMostExpensive ? "bg-red-500/5" : ""
                        }`}
                      >
                        <td className="py-3 pr-3">
                          <div className="flex items-center gap-2 min-w-0">
                            {isCheapest && (
                              <Award className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0" />
                            )}
                            <div className="min-w-0">
                              <div className="font-medium text-foreground truncate">
                                {r.modelName}
                              </div>
                              <div className="text-xs text-muted-foreground">{r.providerLabel}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-right tabular-nums">
                          {formatUsd(r.perRequest)}
                        </td>
                        <td className="py-3 px-3 text-right tabular-nums font-medium">
                          {formatUsd(r.perMonth)}
                        </td>
                        <td className="py-3 px-3 text-right tabular-nums text-muted-foreground">
                          {formatUsd(r.perYear)}
                        </td>
                        <td className="py-3 pl-3 text-right tabular-nums">
                          {isCheapest ? (
                            <span className="text-green-600 dark:text-green-400 text-xs font-medium">
                              cheapest
                            </span>
                          ) : (
                            <span className="text-xs text-muted-foreground">
                              +{overhead.toFixed(0)}%
                            </span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </GCardContent>
      </GCard>

      {/* Model picker */}
      <GCard>
        <GCardHeader>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h2 className="text-base font-semibold flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary" />
                Pick models to compare
              </h2>
              <p className="text-sm text-muted-foreground">
                Prices last updated {PRICING_LAST_UPDATED}. {MODELS.length} models across{" "}
                {Object.keys(groupedModels).length} providers.
              </p>
            </div>
            <div className="flex gap-2">
              <GButton
                variant="outline"
                size="sm"
                onClick={() => setSelected(MODELS.map((m) => m.id))}
              >
                <Check className="h-3.5 w-3.5 mr-1.5" />
                Select all
              </GButton>
              <GButton variant="outline" size="sm" onClick={() => setSelected([])}>
                <X className="h-3.5 w-3.5 mr-1.5" />
                Clear
              </GButton>
              <GButton
                variant="outline"
                size="sm"
                onClick={() => setShowAllModels((v) => !v)}
              >
                {showAllModels ? "Show fewer" : "Show all"}
              </GButton>
            </div>
          </div>
        </GCardHeader>
        <GCardContent>
          <div className="space-y-5">
            {Object.entries(groupedModels).map(([providerLabel, providerModels]) => {
              const visibleModels = showAllModels
                ? providerModels
                : providerModels.slice(0, 3)
              return (
                <div key={providerLabel}>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    {providerLabel}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {visibleModels.map((model) => {
                      const isSelected = selected.includes(model.id)
                      const previewCost = calculateModelCost(model, inputs).perMonth
                      return (
                        <label
                          key={model.id}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition ${
                            isSelected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/40"
                          }`}
                        >
                          <GCheckbox
                            checked={isSelected}
                            onCheckedChange={() => toggleModel(model.id)}
                            className="mt-1"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-sm font-medium text-foreground truncate">
                                {model.name}
                              </span>
                              <GBadge
                                variant="outline"
                                className={`text-[10px] px-1.5 py-0 ${TIER_COLORS[model.tier]}`}
                              >
                                {TIER_LABEL[model.tier]}
                              </GBadge>
                            </div>
                            <div className="text-xs text-muted-foreground mt-1 flex gap-x-3 gap-y-0.5 flex-wrap">
                              <span>${model.inputPerMillion}/M in</span>
                              <span>${model.outputPerMillion}/M out</span>
                              <span>{(model.contextWindow / 1000).toFixed(0)}k ctx</span>
                            </div>
                            {isSelected && (
                              <div className="text-xs text-primary font-medium mt-1">
                                ≈ {formatUsd(previewCost)}/mo at current usage
                              </div>
                            )}
                          </div>
                        </label>
                      )
                    })}
                  </div>
                  {!showAllModels && providerModels.length > 3 && (
                    <button
                      type="button"
                      onClick={() => setShowAllModels(true)}
                      className="text-xs text-primary mt-2 hover:underline"
                    >
                      + {providerModels.length - 3} more {providerLabel} models
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </GCardContent>
      </GCard>

      {/* Methodology */}
      <GCard className="bg-muted/30">
        <GCardContent className="pt-6">
          <h3 className="text-sm font-semibold mb-2">How costs are calculated</h3>
          <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
            <li>
              <strong>Per request</strong> = (input tokens × input rate) + (output tokens × output rate)
            </li>
            <li>
              Cached input portion uses the provider's cached-input rate (typically ~10% of normal input).
            </li>
            <li>
              Output rates assume normal (non-reasoning) tokens. Reasoning models bill thinking tokens
              as output — actual cost can be 2–10× higher than this estimate.
            </li>
            <li>
              Provider prices change frequently. Verify with the provider's official docs before
              relying on these numbers for production budgeting.
            </li>
            <li>
              All math runs in your browser. Your usage figures are not sent to any server.
            </li>
          </ul>
        </GCardContent>
      </GCard>
    </div>
  )
}
