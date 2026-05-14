#!/usr/bin/env node
// scripts/update-ai-pricing.mjs
//
// Fetches the LiteLLM community-maintained pricing JSON and diffs it against
// lib/ai-pricing-data.ts. Reports any drift; optionally rewrites the prices
// in our static file when run with `--write`.
//
// Why LiteLLM? It's the most-watched community pricing source for every major
// LLM provider. Maintained by the LiteLLM team + ~1000 contributors. Updates
// within days of any major provider price change. Uses direct-provider prices
// (not reseller markups). License: MIT.
//
// Source:
//   https://raw.githubusercontent.com/BerriAI/litellm/main/model_prices_and_context_window.json
//
// Usage:
//   node scripts/update-ai-pricing.mjs            # dry-run: show drift report
//   node scripts/update-ai-pricing.mjs --write    # rewrite lib/ai-pricing-data.ts

import { readFile, writeFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const PRICING_FILE = resolve(__dirname, "..", "lib", "ai-pricing-data.ts")
const LITELLM_URL =
  "https://raw.githubusercontent.com/BerriAI/litellm/main/model_prices_and_context_window.json"

// Mapping: our internal model id -> LiteLLM key(s) to try, in order of preference.
// Update when you add a model to ai-pricing-data.ts.
const MODEL_MAP = {
  // OpenAI
  "gpt-5": ["gpt-5", "openai/gpt-5"],
  "gpt-5-mini": ["gpt-5-mini", "openai/gpt-5-mini"],
  "gpt-5-nano": ["gpt-5-nano", "openai/gpt-5-nano"],
  "gpt-4o": ["gpt-4o", "openai/gpt-4o"],
  "gpt-4o-mini": ["gpt-4o-mini", "openai/gpt-4o-mini"],
  "o3": ["o3", "openai/o3"],
  "o3-mini": ["o3-mini", "openai/o3-mini"],
  // Anthropic
  "claude-opus-4-7": [
    "claude-opus-4-7",
    "anthropic/claude-opus-4-7",
    "claude-opus-4-1-20250805",
    "claude-3-opus-20240229",
  ],
  "claude-sonnet-4-6": [
    "claude-sonnet-4-6",
    "anthropic/claude-sonnet-4-6",
    "claude-sonnet-4-5-20250929",
    "claude-3-7-sonnet-20250219",
  ],
  "claude-haiku-4-5": [
    "claude-haiku-4-5",
    "anthropic/claude-haiku-4-5",
    "claude-haiku-4-5-20251001",
    "claude-3-5-haiku-20241022",
  ],
  // Google
  "gemini-2-5-pro": ["gemini/gemini-2.5-pro", "gemini-2.5-pro"],
  "gemini-2-5-flash": ["gemini/gemini-2.5-flash", "gemini-2.5-flash"],
  "gemini-2-5-flash-lite": [
    "gemini/gemini-2.5-flash-lite",
    "gemini-2.5-flash-lite",
  ],
  // DeepSeek
  "deepseek-v3": ["deepseek/deepseek-chat", "deepseek-v3"],
  "deepseek-r1": ["deepseek/deepseek-reasoner", "deepseek-r1"],
  // Mistral
  "mistral-large-2": ["mistral/mistral-large-latest", "mistral-large-2"],
  "mistral-small-3": ["mistral/mistral-small-latest", "mistral-small-3"],
  "codestral": ["mistral/codestral-latest", "codestral-latest"],
  // Together AI (Llama)
  "llama-3-3-70b-together": [
    "together_ai/meta-llama/Llama-3.3-70B-Instruct-Turbo",
  ],
  "llama-4-maverick-together": [
    "together_ai/meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
  ],
  "llama-4-scout-together": [
    "together_ai/meta-llama/Llama-4-Scout-17B-16E-Instruct",
  ],
  // Groq
  "llama-3-3-70b-groq": ["groq/llama-3.3-70b-versatile"],
  "llama-3-1-8b-groq": ["groq/llama-3.1-8b-instant"],
  // xAI
  "grok-4": ["xai/grok-4", "grok-4"],
  "grok-4-mini": ["xai/grok-4-mini", "grok-4-mini"],
  // Cohere
  "command-r-plus": ["command-r-plus-08-2024", "cohere/command-r-plus"],
  "command-r": ["command-r-08-2024", "cohere/command-r"],
}

function fmtUsd(n) {
  if (n === 0) return "$0"
  if (n < 0.01) return `$${n.toFixed(4)}`
  if (n < 1) return `$${n.toFixed(3)}`
  return `$${n.toFixed(2)}`
}

function todayIso() {
  return new Date().toISOString().slice(0, 10)
}

async function fetchLiteLlm() {
  const res = await fetch(LITELLM_URL, {
    headers: { "User-Agent": "fasttools-pricing-update/1.0" },
  })
  if (!res.ok) {
    throw new Error(`LiteLLM fetch failed: ${res.status} ${res.statusText}`)
  }
  return res.json()
}

function findLiteLlmEntry(litellm, keys) {
  for (const key of keys) {
    if (litellm[key]) return { key, data: litellm[key] }
  }
  return null
}

// LiteLLM stores prices as USD per token. Convert to per-million for comparison.
// Round to 6 decimal places to avoid floating-point false-positive diffs
// (e.g. 0.025 × 1_000_000 / 1_000_000 ≠ 0.025 in IEEE 754).
function toPerMillion(perTokenPrice) {
  if (typeof perTokenPrice !== "number") return null
  const v = perTokenPrice * 1_000_000
  return Math.round(v * 1_000_000) / 1_000_000
}

// True only when prices differ by more than rounding tolerance.
const PRICE_EPSILON = 0.0001
function pricesDiffer(a, b) {
  if (a == null || b == null) return false
  return Math.abs(a - b) > PRICE_EPSILON
}

async function main() {
  const args = process.argv.slice(2)
  const write = args.includes("--write")

  console.log("Fetching LiteLLM pricing data...")
  const litellm = await fetchLiteLlm()
  console.log(`Loaded ${Object.keys(litellm).length} models from LiteLLM.\n`)

  const source = await readFile(PRICING_FILE, "utf8")

  // Parse our existing MODELS array minimally: find each model block by id
  // and extract its current inputPerMillion / outputPerMillion / cachedInputPerMillion.
  const modelRegex =
    /\{\s*id:\s*"([^"]+)",[\s\S]*?inputPerMillion:\s*([\d.]+),\s*outputPerMillion:\s*([\d.]+),(?:\s*cachedInputPerMillion:\s*([\d.]+),)?[\s\S]*?\},/g
  const existing = {}
  let match
  while ((match = modelRegex.exec(source)) !== null) {
    existing[match[1]] = {
      input: parseFloat(match[2]),
      output: parseFloat(match[3]),
      cached: match[4] ? parseFloat(match[4]) : null,
    }
  }

  const updates = []
  const missing = []
  const inSync = []

  for (const [internalId, candidateKeys] of Object.entries(MODEL_MAP)) {
    const ours = existing[internalId]
    if (!ours) {
      console.warn(`  ! ${internalId} mapped but not found in ai-pricing-data.ts`)
      continue
    }
    const found = findLiteLlmEntry(litellm, candidateKeys)
    if (!found) {
      missing.push({ internalId, tried: candidateKeys })
      continue
    }
    const { key, data } = found
    const newInput = toPerMillion(data.input_cost_per_token)
    const newOutput = toPerMillion(data.output_cost_per_token)
    const newCached = toPerMillion(data.cache_read_input_token_cost)

    const drift = {
      internalId,
      liteLlmKey: key,
      input: pricesDiffer(ours.input, newInput)
        ? { old: ours.input, new: newInput }
        : null,
      output: pricesDiffer(ours.output, newOutput)
        ? { old: ours.output, new: newOutput }
        : null,
      cached: pricesDiffer(ours.cached, newCached)
        ? { old: ours.cached, new: newCached }
        : null,
    }
    if (drift.input || drift.output || drift.cached) {
      updates.push({ ...drift, newInput, newOutput, newCached })
    } else {
      inSync.push(internalId)
    }
  }

  console.log(`In sync: ${inSync.length} model${inSync.length !== 1 ? "s" : ""}`)
  console.log(`Drift detected: ${updates.length} model${updates.length !== 1 ? "s" : ""}`)
  console.log(`Not found in LiteLLM: ${missing.length} model${missing.length !== 1 ? "s" : ""}\n`)

  if (updates.length > 0) {
    console.log("--- Pricing drift ---")
    for (const u of updates) {
      console.log(`\n  ${u.internalId}  (LiteLLM key: ${u.liteLlmKey})`)
      if (u.input)
        console.log(`    input/M:   ${fmtUsd(u.input.old)} → ${fmtUsd(u.input.new)}`)
      if (u.output)
        console.log(`    output/M:  ${fmtUsd(u.output.old)} → ${fmtUsd(u.output.new)}`)
      if (u.cached)
        console.log(`    cached/M:  ${fmtUsd(u.cached.old)} → ${fmtUsd(u.cached.new)}`)
    }
  }

  if (missing.length > 0) {
    console.log("\n--- Models not found in LiteLLM (will keep static prices) ---")
    for (const m of missing) {
      console.log(`  ${m.internalId}  (tried: ${m.tried.join(", ")})`)
    }
  }

  if (!write) {
    console.log(
      `\nDry-run complete. Run with --write to apply ${updates.length} update${updates.length !== 1 ? "s" : ""}.`
    )
    return
  }

  if (updates.length === 0) {
    // Always bump the last-updated date even with no changes — proves we checked.
    let nextSource = source.replace(
      /export const PRICING_LAST_UPDATED = "[^"]+"/,
      `export const PRICING_LAST_UPDATED = "${todayIso()}"`
    )
    await writeFile(PRICING_FILE, nextSource, "utf8")
    console.log(`\nNo price changes. Bumped PRICING_LAST_UPDATED to ${todayIso()}.`)
    return
  }

  // Apply updates by replacing each model block's prices in place.
  let nextSource = source
  for (const u of updates) {
    const blockRegex = new RegExp(
      `(\\{\\s*id:\\s*"${u.internalId.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}"[\\s\\S]*?)inputPerMillion:\\s*[\\d.]+,\\s*outputPerMillion:\\s*[\\d.]+,(\\s*cachedInputPerMillion:\\s*[\\d.]+,)?`,
      "m"
    )
    nextSource = nextSource.replace(blockRegex, (full, prefix, cachedLine) => {
      const newInput = u.newInput ?? null
      const newOutput = u.newOutput ?? null
      const newCached = u.newCached ?? null

      let replacement = `${prefix}inputPerMillion: ${newInput},\n    outputPerMillion: ${newOutput},`
      if (newCached != null || cachedLine) {
        if (newCached != null) {
          replacement += `\n    cachedInputPerMillion: ${newCached},`
        }
      }
      return replacement
    })
  }

  // Bump the last-updated marker.
  nextSource = nextSource.replace(
    /export const PRICING_LAST_UPDATED = "[^"]+"/,
    `export const PRICING_LAST_UPDATED = "${todayIso()}"`
  )

  await writeFile(PRICING_FILE, nextSource, "utf8")
  console.log(`\nWrote ${updates.length} update${updates.length !== 1 ? "s" : ""} to lib/ai-pricing-data.ts.`)
  console.log(`PRICING_LAST_UPDATED bumped to ${todayIso()}.`)
  console.log(`\nReview the diff with: git diff lib/ai-pricing-data.ts`)
}

main().catch((err) => {
  console.error("Error:", err.message)
  process.exit(1)
})
