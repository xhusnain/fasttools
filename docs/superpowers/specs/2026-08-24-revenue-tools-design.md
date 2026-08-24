# Revenue Tools Plan — New-Query Land Grab (2026-08-24)

## Goal

Get fasttools.store to $1/day AdSense revenue. At tool-site RPMs ($0.50–$2)
that requires roughly 500–2,000 pageviews/day, so this is a traffic plan:
target search queries born in 2025–2026 (the AI wave) where Google has no
entrenched winners, using the proven `[slug]` variant-page cluster pattern
(the same pattern that put the DP zoom page on page 1 for "insta zoom").

## Constraints

- AdSense only — every tool must have ~zero marginal cost per use
  (client-side, or the existing free Cloudflare Workers AI backend).
- Existing content rules apply: anti-keyword-stuffing (exact keyword only in
  title/H1/first-sentence/meta + ≤5 body uses), no doorway copy — every
  variant page gets genuinely unique, honest content.
- Deploy rule: page adds only in this deploy — no slug renames, no noindex
  churn, no sitewide title changes.
- No downloaders, no Google-widget queries, no YMYL.

## The three clusters (12 new pages)

### Cluster A — AI Prompt Generator (5 pages, Cloudflare AI powered)
`/ai-tools/prompt-generator` hub + variants: `sora`, `veo`, `midjourney`,
`nano-banana`. User types a rough idea; the tool expands it into a detailed,
model-specific prompt (camera language for Sora 2, audio cues for Veo 3,
`--ar/--stylize` parameters for Midjourney, edit-instruction phrasing for
Nano Banana). Targets "sora 2 prompt generator", "veo 3 prompt generator",
"midjourney prompt generator", "nano banana prompt" — young queries, thin
competition. Reuses the existing `/api/ai` route with a new action.

### Cluster B — LLM developer utilities (5 pages, client-side)
- `/ai-tools/token-counter` hub + variants: `chatgpt`, `claude`, `gemini`.
  Paste text → token count. Exact via js-tiktoken (o200k_base) for
  ChatGPT/GPT models; clearly-labelled estimates for Claude/Gemini (their
  tokenizers aren't public — we say so honestly). Lazy-loaded encoder.
- `/ai-tools/llm-vram-calculator` — "can I run this LLM locally": model size ×
  quantization + KV cache math → VRAM needed, compared against common GPUs.
  Targets the local-Llama crowd (US/dev-heavy = higher RPM).
  Links into the existing ai-api-cost-calculator / llm-training-cost pages to
  form an AI-dev hub.

### Cluster C — AI output cleanup (2 pages, client-side)
`/ai-tools/ai-text-cleaner` hub + variant `em-dash-remover`. Strips the
telltale AI formatting people paste out of ChatGPT: em dashes (with
replacement options), smart quotes, markdown artifacts, invisible Unicode
(zero-width spaces etc.), with counts of what was found. Targets "remove
chatgpt formatting", "em dash remover" — high-frequency everyday intents.

## Measurement & kill criteria

- Ship all 12 pages in one page-add deploy; request indexing in GSC (manual).
- Test window: 6 weeks per cluster (to ~Oct 5). Keep any cluster with a
  clear impression trend; kill pages with zero impressions at the checkpoint,
  same as previous prunes.
- Step zero (manual, non-blocking): export current GSC queries and check for
  near-miss pages worth rescuing alongside this.
- $1/day checkpoint math: pageviews/day × RPM from AdSense reports; revisit
  affiliate/paid levers only if traffic arrives but revenue doesn't.

## Out of scope (phase 2 candidates)

Markdown→Word converter, ChatGPT-conversation→PDF, more prompt-generator
variants (Flux, Grok Imagine), more counter variants — only after the first
batch shows impressions.
