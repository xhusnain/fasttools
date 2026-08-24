"use client"

import { useMemo, useState } from "react"
import { GLabel } from "@/ui/glabel"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { CheckCircle2, Cpu, Info, XCircle } from "lucide-react"

interface ModelPreset {
  key: string
  label: string
  paramsB: number
  layers: number
  kvHeads: number
  headDim: number
}

const MODEL_PRESETS: ModelPreset[] = [
  { key: "llama-8b", label: "Llama 3.1 8B", paramsB: 8, layers: 32, kvHeads: 8, headDim: 128 },
  { key: "llama-70b", label: "Llama 3.1 70B", paramsB: 70.6, layers: 80, kvHeads: 8, headDim: 128 },
  { key: "qwen-7b", label: "Qwen2.5 7B", paramsB: 7.6, layers: 28, kvHeads: 4, headDim: 128 },
  { key: "qwen-14b", label: "Qwen2.5 14B", paramsB: 14.7, layers: 48, kvHeads: 8, headDim: 128 },
  { key: "qwen-32b", label: "Qwen2.5 / R1-Distill 32B", paramsB: 32.7, layers: 64, kvHeads: 8, headDim: 128 },
  { key: "qwen-72b", label: "Qwen2.5 72B", paramsB: 72.7, layers: 80, kvHeads: 8, headDim: 128 },
  { key: "mistral-7b", label: "Mistral 7B", paramsB: 7.2, layers: 32, kvHeads: 8, headDim: 128 },
  { key: "gemma-9b", label: "Gemma 2 9B", paramsB: 9.2, layers: 42, kvHeads: 8, headDim: 256 },
  { key: "gemma-27b", label: "Gemma 2 27B", paramsB: 27.2, layers: 46, kvHeads: 16, headDim: 128 },
  { key: "phi-14b", label: "Phi-4 14B", paramsB: 14.7, layers: 40, kvHeads: 10, headDim: 128 },
]

const QUANTIZATIONS = [
  { key: "fp16", label: "FP16 / BF16", bytesPerParam: 2.0, note: "Full quality, largest" },
  { key: "q8", label: "Q8 (8-bit)", bytesPerParam: 1.06, note: "Near-lossless" },
  { key: "q6", label: "Q6_K", bytesPerParam: 0.85, note: "Very close to Q8" },
  { key: "q5", label: "Q5_K_M", bytesPerParam: 0.71, note: "Good quality/size balance" },
  { key: "q4", label: "Q4_K_M", bytesPerParam: 0.59, note: "The popular default" },
]

const CONTEXT_OPTIONS = [2048, 4096, 8192, 16384, 32768, 65536, 131072]

const GPUS = [
  { name: "RTX 4060 / 3070", vramGB: 8 },
  { name: "RTX 3060 12GB / 4070", vramGB: 12 },
  { name: "RTX 4060 Ti 16GB / 4080", vramGB: 16 },
  { name: "RTX 3090 / 4090", vramGB: 24 },
  { name: "RTX 5090", vramGB: 32 },
  { name: "Mac 32GB unified*", vramGB: 24 },
  { name: "Mac 64GB unified*", vramGB: 48 },
]

const RUNTIME_OVERHEAD_GB = 1.2

function formatGB(value: number): string {
  return value >= 10 ? value.toFixed(1) : value.toFixed(2)
}

export function LlmVramCalculator() {
  const [presetKey, setPresetKey] = useState("llama-8b")
  const [quantKey, setQuantKey] = useState("q4")
  const [contextLength, setContextLength] = useState(8192)
  const [customVram, setCustomVram] = useState("")

  const preset = MODEL_PRESETS.find((item) => item.key === presetKey) ?? MODEL_PRESETS[0]
  const quant = QUANTIZATIONS.find((item) => item.key === quantKey) ?? QUANTIZATIONS[4]

  const result = useMemo(() => {
    const weightsGB = (preset.paramsB * 1e9 * quant.bytesPerParam) / 1024 ** 3
    const kvBytesPerToken = 2 * preset.layers * preset.kvHeads * preset.headDim * 2
    const kvCacheGB = (contextLength * kvBytesPerToken) / 1024 ** 3
    const totalGB = weightsGB + kvCacheGB + RUNTIME_OVERHEAD_GB
    return { weightsGB, kvCacheGB, totalGB }
  }, [preset, quant, contextLength])

  const customVramGB = parseFloat(customVram)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <GLabel className="text-base font-semibold">Model</GLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {MODEL_PRESETS.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setPresetKey(item.key)}
              aria-pressed={presetKey === item.key}
              className={`p-3 rounded-lg border text-left transition-all ${
                presetKey === item.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/30 hover:bg-accent"
              }`}
            >
              <span className="font-medium text-sm block">{item.label}</span>
              <span className={`text-xs ${presetKey === item.key ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {item.paramsB}B params
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <GLabel className="text-base font-semibold">Quantization</GLabel>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {QUANTIZATIONS.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setQuantKey(item.key)}
              aria-pressed={quantKey === item.key}
              className={`p-3 rounded-lg border text-left transition-all ${
                quantKey === item.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/30 hover:bg-accent"
              }`}
            >
              <span className="font-medium text-sm block">{item.label}</span>
              <span className={`text-xs ${quantKey === item.key ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {item.note}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <GLabel className="text-base font-semibold">Context Length</GLabel>
        <div className="flex flex-wrap gap-2">
          {CONTEXT_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setContextLength(option)}
              aria-pressed={contextLength === option}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                contextLength === option
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/30 hover:bg-accent"
              }`}
            >
              {option >= 1024 ? `${option / 1024}k` : option}
            </button>
          ))}
        </div>
      </div>

      <GCard className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Cpu className="h-6 w-6 text-primary" />
          <div>
            <div className="text-3xl font-bold text-primary">{formatGB(result.totalGB)} GB</div>
            <div className="text-sm text-muted-foreground">
              estimated VRAM for {preset.label} at {quant.label}, {contextLength / 1024}k context
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-lg bg-muted/50">
            <div className="font-semibold">{formatGB(result.weightsGB)} GB</div>
            <div className="text-xs text-muted-foreground">Model weights</div>
          </div>
          <div className="p-3 rounded-lg bg-muted/50">
            <div className="font-semibold">{formatGB(result.kvCacheGB)} GB</div>
            <div className="text-xs text-muted-foreground">KV cache (FP16)</div>
          </div>
          <div className="p-3 rounded-lg bg-muted/50">
            <div className="font-semibold">{formatGB(RUNTIME_OVERHEAD_GB)} GB</div>
            <div className="text-xs text-muted-foreground">Runtime overhead</div>
          </div>
        </div>
      </GCard>

      <div className="space-y-3">
        <GLabel className="text-base font-semibold">Will It Fit?</GLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {GPUS.map((gpu) => {
            const fits = result.totalGB <= gpu.vramGB
            return (
              <div key={gpu.name} className="flex items-center justify-between p-3 rounded-lg border border-border">
                <span className="text-sm font-medium">{gpu.name}</span>
                <span className="flex items-center gap-2 text-sm">
                  {gpu.vramGB} GB
                  {fits ? (
                    <CheckCircle2 className="h-5 w-5 text-heading-accent" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                </span>
              </div>
            )
          })}
          <div className="flex items-center justify-between p-3 rounded-lg border border-primary/40 gap-3">
            <div className="flex items-center gap-2 flex-1">
              <span className="text-sm font-medium shrink-0">Your GPU:</span>
              <GInput
                type="number"
                min="1"
                max="512"
                placeholder="GB"
                value={customVram}
                onChange={(event) => setCustomVram(event.target.value)}
                className="h-9 w-24"
                aria-label="Your GPU VRAM in GB"
              />
            </div>
            {Number.isFinite(customVramGB) && customVramGB > 0 && (
              <span className="flex items-center gap-2 text-sm">
                {result.totalGB <= customVramGB ? (
                  <>
                    Fits <CheckCircle2 className="h-5 w-5 text-heading-accent" />
                  </>
                ) : (
                  <>
                    Needs {formatGB(result.totalGB - customVramGB)} GB more <XCircle className="h-5 w-5 text-destructive" />
                  </>
                )}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 text-sm text-muted-foreground">
        <Info className="h-4 w-4 mt-0.5 shrink-0" />
        <p>
          Estimates based on typical GGUF file sizes, FP16 KV cache, and ~{RUNTIME_OVERHEAD_GB} GB of runtime buffers.
          Real usage varies by runtime (llama.cpp, Ollama, vLLM) and settings — treat a fit within ~0.5 GB of the limit as
          tight. *Macs share unified memory with the OS; roughly 75% is usable for the model.
        </p>
      </div>
    </div>
  )
}
