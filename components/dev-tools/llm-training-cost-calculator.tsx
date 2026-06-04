"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, Cpu, DollarSign, Clock, Server,
  BarChart3, Zap, Target, TrendingUp, HardDrive, Database,
  Cloud, Layers
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type {
  LLMTrainingCostResult, GpuType, CloudProvider, PrecisionType,
  ProviderCost, GpuCost, CostBreakdown, ScalingEstimate
} from "@/types/calculator-types/llm-training-cost.types"

interface GpuSpec {
  name: string
  tflops_bf16: number
  memory: number
  tdp: number
}

const gpuSpecs: Record<GpuType, GpuSpec> = {
  h200: { name: "NVIDIA H200", tflops_bf16: 989, memory: 141, tdp: 700 },
  h100: { name: "NVIDIA H100", tflops_bf16: 756, memory: 80, tdp: 700 },
  a100_80: { name: "NVIDIA A100 80GB", tflops_bf16: 312, memory: 80, tdp: 300 },
  a100_40: { name: "NVIDIA A100 40GB", tflops_bf16: 312, memory: 40, tdp: 300 },
  l40s: { name: "NVIDIA L40S", tflops_bf16: 362, memory: 48, tdp: 350 },
  a10g: { name: "NVIDIA A10G", tflops_bf16: 70, memory: 24, tdp: 150 },
  t4: { name: "NVIDIA T4", tflops_bf16: 65, memory: 16, tdp: 70 },
}

// Approximate public on-demand GPU-hour rates for planning only.
// Cloud GPU prices vary by region, commitment, availability, tax, and contract.
const providerPricing: Record<CloudProvider, { name: string; prices: Partial<Record<GpuType, number>> }> = {
  aws: {
    name: "AWS (SageMaker/EC2)",
    prices: { h100: 4.15, a100_80: 3.40, a100_40: 2.75, l40s: 1.80, a10g: 1.10, t4: 0.53 }
  },
  gcp: {
    name: "Google Cloud (Vertex/GCE)",
    prices: { h100: 3.98, a100_80: 3.22, a100_40: 2.48, l40s: 1.70, t4: 0.35 }
  },
  azure: {
    name: "Microsoft Azure",
    prices: { h100: 4.00, a100_80: 3.40, a100_40: 2.52, t4: 0.53 }
  },
  lambda: {
    name: "Lambda Labs",
    prices: { h100: 3.99, a100_80: 2.79, a100_40: 1.99, a10g: 0.60 }
  },
  coreweave: {
    name: "CoreWeave",
    prices: { h100: 6.16, h200: 6.31, a100_80: 2.70, l40s: 2.25 }
  },
}

const precisionMultiplier: Record<PrecisionType, { label: string; memMultiplier: number; speedMultiplier: number }> = {
  fp32: { label: "FP32 (Full)", memMultiplier: 4, speedMultiplier: 0.5 },
  bf16: { label: "BF16 (Standard)", memMultiplier: 2, speedMultiplier: 1.0 },
  fp16: { label: "FP16 (Half)", memMultiplier: 2, speedMultiplier: 1.0 },
  fp8: { label: "FP8 (Quarter)", memMultiplier: 1, speedMultiplier: 1.8 },
  int8: { label: "INT8 (Quantized)", memMultiplier: 1, speedMultiplier: 1.5 },
}

export function LLMTrainingCostCalculator() {
  const [modelParams, setModelParams] = useState("7")
  const [trainingTokens, setTrainingTokens] = useState("1000")
  const [gpuType, setGpuType] = useState<GpuType>("h100")
  const [numGpus, setNumGpus] = useState("8")
  const [precision, setPrecision] = useState<PrecisionType>("bf16")
  const [provider, setProvider] = useState<CloudProvider>("lambda")
  const [gpuUtilization, setGpuUtilization] = useState("40")

  const [result, setResult] = useState<LLMTrainingCostResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateCost = () => {
    if (!modelParams || !trainingTokens) return
    setIsCalculating(true)

    setTimeout(() => {
      const params = Number.parseFloat(modelParams) * 1e9 // Convert B to actual
      const tokens = Number.parseFloat(trainingTokens) * 1e9 // Convert B to actual
      const gpus = Number.parseInt(numGpus) || 8
      const util = (Number.parseFloat(gpuUtilization) || 40) / 100
      const gpu = gpuSpecs[gpuType]
      const prec = precisionMultiplier[precision]

      // Chinchilla-optimal FLOPs estimation: 6 * params * tokens
      const totalFLOPs = 6 * params * tokens

      // Effective TFLOPS per GPU considering utilization and precision
      const effectiveTFLOPS = gpu.tflops_bf16 * util * prec.speedMultiplier

      // Total GPU-seconds = FLOPs / (effective TFLOPS per GPU * num_gpus * 1e12)
      const totalGpuSeconds = totalFLOPs / (effectiveTFLOPS * gpus * 1e12)
      const totalGpuHours = totalGpuSeconds / 3600
      const totalTrainingHours = totalGpuHours
      const totalTrainingDays = totalTrainingHours / 24

      // GPU memory required (rough): params * bytes_per_param * overhead_factor
      // Training needs ~4x params in memory (model + gradients + optimizer states + activations)
      const bytesPerParam = prec.memMultiplier
      const gpuMemoryRequired = (params * bytesPerParam * 4) / 1e9 // in GB

      // Model size category
      const paramB = params / 1e9
      const modelSizeCategory = paramB < 1 ? "Small" : paramB < 10 ? "Medium" : paramB < 70 ? "Large" : paramB < 200 ? "Very Large" : "Frontier"

      // Cost from selected provider
      const pricePerHour = providerPricing[provider].prices[gpuType] || 3.0
      const gpuComputeCost = totalGpuHours * gpus * pricePerHour

      // Additional costs estimate
      const storageCost = gpuComputeCost * 0.05 // ~5% for data storage
      const networkingCost = gpuComputeCost * 0.03 // ~3% for inter-node comms
      const overheadCost = gpuComputeCost * 0.07 // ~7% for checkpointing, logging, failures

      const costBreakdown: CostBreakdown = {
        gpuCompute: Math.round(gpuComputeCost),
        storage: Math.round(storageCost),
        networking: Math.round(networkingCost),
        overhead: Math.round(overheadCost),
        total: Math.round(gpuComputeCost + storageCost + networkingCost + overheadCost)
      }

      const totalCost = costBreakdown.total
      const costPerToken = tokens > 0 ? totalCost / tokens : 0
      const costPerBillion = costPerToken * 1e9

      // Provider comparison
      const providerComparison: ProviderCost[] = Object.entries(providerPricing)
        .filter(([_, p]) => p.prices[gpuType] !== undefined)
        .map(([key, p]) => {
          const pph = p.prices[gpuType]!
          const pTotal = totalGpuHours * gpus * pph * 1.15 // include 15% overhead
          return {
            provider: p.name,
            gpuType: gpu.name,
            pricePerHour: pph,
            totalCost: Math.round(pTotal),
            totalHours: Math.round(totalGpuHours)
          }
        })
        .sort((a, b) => a.totalCost - b.totalCost)

      // GPU comparison (same provider pricing, different GPUs)
      const gpuComparison: GpuCost[] = Object.entries(gpuSpecs)
        .map(([key, spec]) => {
          const effTFLOPS = spec.tflops_bf16 * util * prec.speedMultiplier
          const hours = totalFLOPs / (effTFLOPS * gpus * 1e12) / 3600
          const bestPrice = Math.min(
            ...Object.values(providerPricing)
              .map(p => p.prices[key as GpuType])
              .filter((p): p is number => p !== undefined)
          )
          return {
            gpu: spec.name,
            tflops: spec.tflops_bf16,
            memory: spec.memory,
            hoursNeeded: Math.round(hours),
            estimatedCost: Math.round(hours * gpus * bestPrice * 1.15)
          }
        })
        .sort((a, b) => a.estimatedCost - b.estimatedCost)

      // Scaling estimates (reference models)
      const scalingEstimates: ScalingEstimate[] = [
        { label: "Llama 3 8B equivalent", params: "8B", tokens: "15T", estimatedCost: 0, trainingDays: 0 },
        { label: "Mistral 7B equivalent", params: "7B", tokens: "8T", estimatedCost: 0, trainingDays: 0 },
        { label: "GPT-3 175B equivalent", params: "175B", tokens: "300B", estimatedCost: 0, trainingDays: 0 },
        { label: "Llama 3 70B equivalent", params: "70B", tokens: "15T", estimatedCost: 0, trainingDays: 0 },
        { label: "GPT-4 class (~1.8T MoE)", params: "1800B", tokens: "13T", estimatedCost: 0, trainingDays: 0 },
      ].map(s => {
        const p = Number.parseFloat(s.params) * 1e9
        const t = Number.parseFloat(s.tokens) * 1e9
        const flops = 6 * p * t
        const eff = gpu.tflops_bf16 * util * prec.speedMultiplier
        const hrs = flops / (eff * gpus * 1e12) / 3600
        const bestPrice = providerPricing[provider].prices[gpuType] || 3.0
        return {
          ...s,
          estimatedCost: Math.round(hrs * gpus * bestPrice * 1.15),
          trainingDays: Math.round(hrs / 24)
        }
      })

      setResult({
        totalCost,
        totalGpuHours: Math.round(totalGpuHours),
        totalTrainingDays: Number.parseFloat(totalTrainingDays.toFixed(1)),
        totalTrainingHours: Math.round(totalTrainingHours),
        numberOfGpus: gpus,
        gpuUtilization: util * 100,
        costPerToken,
        costPerBillion: Number.parseFloat(costPerBillion.toFixed(2)),
        totalFLOPs,
        tokensProcessed: tokens,
        gpuMemoryRequired: Number.parseFloat(gpuMemoryRequired.toFixed(1)),
        modelSizeCategory,
        providerComparison,
        gpuComparison,
        costBreakdown,
        scalingEstimates
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `LLM Training Cost Estimate`,
      `==========================`,
      `Model: ${modelParams}B parameters`,
      `Tokens: ${trainingTokens}B`,
      `GPU: ${gpuSpecs[gpuType].name} × ${result.numberOfGpus}`,
      `Precision: ${precisionMultiplier[precision].label}`,
      ``,
      `Total Cost: $${result.totalCost.toLocaleString()}`,
      `Training Time: ${result.totalTrainingDays} days (${result.totalTrainingHours.toLocaleString()} hrs)`,
      `GPU Hours: ${result.totalGpuHours.toLocaleString()}`,
      `Cost per B tokens: $${result.costPerBillion}`,
      ``,
      `Generated by FastTools LLM Training Cost Estimator`
    ]
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount)

  const formatNumber = (num: number): string => {
    if (num >= 1e15) return (num / 1e15).toFixed(1) + " PFLOPs"
    if (num >= 1e12) return (num / 1e12).toFixed(1) + " TFLOPs"
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B"
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M"
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K"
    return num.toLocaleString()
  }

  return (
    <div className="space-y-8">
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Cpu className="h-6 w-6 text-foreground" />
            </div>
            LLM Training Cost Estimator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Estimate GPU hours, training time, and cloud costs for training large language models. Provider rates are approximate planning inputs; verify current pricing before buying capacity.
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Model Config */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Layers className="h-4 w-4" />
              Model Configuration
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="modelParams" className="text-sm font-semibold text-heading-accent">
                  Model Parameters (Billions)
                </GLabel>
                <GInput
                  id="modelParams"
                  type="number"
                  step="0.1"
                  value={modelParams}
                  onChange={(e) => setModelParams(e.target.value)}
                  placeholder="e.g., 7"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
                <div className="text-xs text-muted-foreground">7B = Llama/Mistral class, 70B = large, 400B+ = frontier</div>
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="trainingTokens" className="text-sm font-semibold text-heading-accent">
                  Training Tokens (Billions)
                </GLabel>
                <GInput
                  id="trainingTokens"
                  type="number"
                  value={trainingTokens}
                  onChange={(e) => setTrainingTokens(e.target.value)}
                  placeholder="e.g., 1000"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
                <div className="text-xs text-muted-foreground">Chinchilla-optimal: ~20× params (7B → 140B tokens)</div>
              </div>
            </div>
          </div>

          {/* GPU Config */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Server className="h-4 w-4" />
              GPU Configuration
            </h3>
            <div className="space-y-3">
              <GLabel className="text-xs font-medium text-muted-foreground">GPU Type</GLabel>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(Object.entries(gpuSpecs) as [GpuType, GpuSpec][]).map(([key, spec]) => (
                  <button
                    type="button"
                    key={key}
                    onClick={() => setGpuType(key)}
                    aria-pressed={gpuType === key}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      gpuType === key
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"
                    }`}
                  >
                    <div className="text-xs font-medium">{spec.name.replace("NVIDIA ", "")}</div>
                    <div className={`text-[10px] ${gpuType === key ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{spec.tflops_bf16} TFLOPS · {spec.memory}GB</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <GLabel htmlFor="numGpus" className="text-sm font-semibold text-heading-accent">
                  Number of GPUs
                </GLabel>
                <GInput
                  id="numGpus"
                  type="number"
                  value={numGpus}
                  onChange={(e) => setNumGpus(e.target.value)}
                  placeholder="8"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <GLabel htmlFor="gpuUtilization" className="text-sm font-semibold text-heading-accent">
                  GPU Utilization (%)
                </GLabel>
                <GInput
                  id="gpuUtilization"
                  type="number"
                  value={gpuUtilization}
                  onChange={(e) => setGpuUtilization(e.target.value)}
                  placeholder="40"
                  className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500"
                />
                <div className="text-xs text-muted-foreground">Typical: 30-50% (MFU)</div>
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Precision</GLabel>
                <div className="flex flex-wrap gap-1.5">
                  {(Object.entries(precisionMultiplier) as [PrecisionType, typeof precisionMultiplier.fp32][]).map(([key, val]) => (
                    <button
                      type="button"
                      key={key}
                      onClick={() => setPrecision(key)}
                      aria-pressed={precision === key}
                      className={`px-2.5 py-1.5 rounded-lg border text-xs transition-all ${
                        precision === key
                          ? "border-primary bg-primary text-primary-foreground font-semibold shadow-sm"
                          : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"
                      }`}
                    >
                      {val.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Provider */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Cloud className="h-4 w-4" />
                Cloud Provider
              </h3>
              <p className="text-xs text-muted-foreground">
                Public GPU rates change often and differ by region, commitment, and availability.
              </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {(Object.entries(providerPricing) as [CloudProvider, typeof providerPricing.aws][]).map(([key, p]) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => setProvider(key)}
                  aria-pressed={provider === key}
                  className={`p-2.5 rounded-lg border text-center transition-all ${
                    provider === key
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border hover:border-primary/30 bg-white text-muted-foreground hover:bg-accent hover:text-primary"
                  }`}
                >
                  <div className="text-xs font-medium">{p.name.split(" (")[0]}</div>
                  {p.prices[gpuType] && (
                    <div className="text-[10px] text-muted-foreground">${p.prices[gpuType]}/hr</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Calculate */}
          <GButton
            onClick={calculateCost}
            disabled={isCalculating || !modelParams || !trainingTokens}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
          >
            {isCalculating ? (
              <><LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Estimating Cost...</>
            ) : (
              <><Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Estimate Training Cost</>
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Primary Cost */}
          <GCard className="shadow-lg border-primary/20 animate-fade-in-up bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <DollarSign className="h-4 w-4 text-foreground" />
                </div>
                Training Cost Estimate
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="text-center p-6 rounded-xl bg-card border border-primary/20">
                <div className="text-sm text-muted-foreground mb-1">Estimated Total Cost</div>
                <div className="text-4xl sm:text-5xl font-bold text-foreground">{formatCurrency(result.totalCost)}</div>
                <div className="text-sm text-muted-foreground mt-2">
                  {modelParams}B params · {trainingTokens}B tokens · {result.numberOfGpus}× {gpuSpecs[gpuType].name.replace("NVIDIA ", "")}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-card border border-blue-700 text-center">
                  <Clock className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-foreground">{result.totalTrainingDays}d</div>
                  <div className="text-xs text-muted-foreground">Training Time</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-green-700 text-center">
                  <Server className="h-4 w-4 text-green-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-foreground">{result.totalGpuHours.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">GPU Hours</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-purple-700 text-center">
                  <DollarSign className="h-4 w-4 text-purple-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-foreground">${result.costPerBillion}</div>
                  <div className="text-xs text-muted-foreground">Per B Tokens</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-primary text-center">
                  <HardDrive className="h-4 w-4 text-primary mx-auto mb-1" />
                  <div className="text-xl font-bold text-foreground">{result.gpuMemoryRequired}GB</div>
                  <div className="text-xs text-muted-foreground">VRAM Needed</div>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="p-3 bg-muted rounded-lg border border-border">
                <h4 className="text-xs font-semibold text-heading-accent mb-2 flex items-center gap-1.5">
                  <BarChart3 className="h-3.5 w-3.5" /> Cost Breakdown
                </h4>
                <div className="space-y-1.5">
                  {[
                    { label: "GPU Compute", value: result.costBreakdown.gpuCompute, pct: (result.costBreakdown.gpuCompute / result.costBreakdown.total * 100), color: "bg-blue-500" },
                    { label: "Overhead (failures, checkpoints)", value: result.costBreakdown.overhead, pct: (result.costBreakdown.overhead / result.costBreakdown.total * 100), color: "bg-orange-500" },
                    { label: "Storage", value: result.costBreakdown.storage, pct: (result.costBreakdown.storage / result.costBreakdown.total * 100), color: "bg-green-500" },
                    { label: "Networking", value: result.costBreakdown.networking, pct: (result.costBreakdown.networking / result.costBreakdown.total * 100), color: "bg-purple-500" },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-2 text-xs">
                      <span className="w-40 text-muted-foreground">{item.label}</span>
                      <div className="flex-1 bg-border rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }} />
                      </div>
                      <span className="w-20 text-right font-medium text-foreground">{formatCurrency(item.value)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <GButton
                onClick={copyResult}
                className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card"
              >
                {copied ? <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</> : <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Results</>}
              </GButton>
            </GCardContent>
          </GCard>

          {/* Provider Comparison */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <Cloud className="h-4 w-4 text-foreground" />
                </div>
                Approximate Provider Comparison
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Provider</th>
                      <th className="text-right py-2 px-2 font-semibold text-muted-foreground">$/GPU-hr</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Total Cost</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.providerComparison.map((p, i) => {
                      const cheapest = result.providerComparison[0].totalCost
                      const savings = p.totalCost - cheapest
                      const isSelected = p.provider === providerPricing[provider].name
                      return (
                        <tr key={p.provider} className={`border-b border-border ${isSelected ? "bg-primary/5" : ""}`}>
                          <td className="py-2 px-2 font-medium text-foreground">
                            {i === 0 && <span className="text-[10px] text-green-500 mr-1">CHEAPEST</span>}
                            {p.provider}
                            {isSelected && <span className="ml-1 text-[10px] text-primary">SELECTED</span>}
                          </td>
                          <td className="py-2 px-2 text-right text-muted-foreground">${p.pricePerHour}</td>
                          <td className="py-2 px-2 text-right text-heading-accent font-semibold">{formatCurrency(p.totalCost)}</td>
                          <td className="py-2 px-2 text-right text-foreground">
                            {savings === 0 ? "—" : <span className="text-red-400">+{formatCurrency(savings)}</span>}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* GPU Comparison */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <Cpu className="h-4 w-4 text-foreground" />
                </div>
                GPU Comparison (Lowest Sample Provider Rate)
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">GPU</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">BF16 TFLOPS</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">VRAM</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Hours</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Est. Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.gpuComparison.map((g) => {
                      const isSelected = g.gpu === gpuSpecs[gpuType].name
                      return (
                        <tr key={g.gpu} className={`border-b border-border ${isSelected ? "bg-primary/5" : ""}`}>
                          <td className="py-2 px-2 font-medium text-foreground">
                            {g.gpu.replace("NVIDIA ", "")}
                            {isSelected && <span className="ml-1 text-[10px] text-primary">YOURS</span>}
                          </td>
                          <td className="py-2 px-2 text-right text-foreground">{g.tflops}</td>
                          <td className="py-2 px-2 text-right text-foreground">{g.memory}GB</td>
                          <td className="py-2 px-2 text-right text-foreground">{g.hoursNeeded.toLocaleString()}</td>
                          <td className="py-2 px-2 text-right text-heading-accent font-semibold">{formatCurrency(g.estimatedCost)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>

          {/* Reference Model Scaling */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-foreground" />
                </div>
                Reference Model Cost Estimates
              </GCardTitle>
              <GCardDescription className="text-sm text-muted-foreground">
                What it would cost to train well-known models with your GPU setup
              </GCardDescription>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Model</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Params</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Tokens</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Days</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Est. Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.scalingEstimates.map((s) => (
                      <tr key={s.label} className="border-b border-border">
                        <td className="py-2 px-2 font-medium text-foreground">{s.label}</td>
                        <td className="py-2 px-2 text-right text-foreground">{s.params}</td>
                        <td className="py-2 px-2 text-right text-foreground">{s.tokens}</td>
                        <td className="py-2 px-2 text-right text-foreground">{s.trainingDays.toLocaleString()}</td>
                        <td className="py-2 px-2 text-right text-heading-accent font-semibold">{formatCurrency(s.estimatedCost)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">
                Estimates based on {result.numberOfGpus}× {gpuSpecs[gpuType].name.replace("NVIDIA ", "")} at {result.gpuUtilization}% MFU via {providerPricing[provider].name}. Actual costs vary with optimization, architecture, and infrastructure.
              </p>
            </GCardContent>
          </GCard>

          {/* Formula */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardContent className="py-4">
              <h4 className="text-xs font-semibold text-heading-accent mb-2">Formulas Used</h4>
              <div className="space-y-1">
                <code className="block text-xs text-muted-foreground font-mono">Total FLOPs ≈ 6 × Parameters × Tokens (Chinchilla estimate)</code>
                <code className="block text-xs text-muted-foreground font-mono">GPU Hours = FLOPs / (TFLOPS × Utilization × Precision × GPUs × 10¹²) / 3600</code>
                <code className="block text-xs text-muted-foreground font-mono">Cost = GPU Hours × GPUs × $/GPU-hr × 1.15 (overhead)</code>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
