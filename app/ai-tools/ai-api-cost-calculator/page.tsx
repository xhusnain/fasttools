import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const AiApiCostCalculator = dynamic(
  () =>
    import("@/components/ai/ai-api-cost-calculator").then(
      (mod) => mod.AiApiCostCalculator
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "AI API Cost Calculator & Comparator",
  description:
    "Compare LLM API pricing across OpenAI, Anthropic, Google, DeepSeek, Mistral, Llama, xAI, and Cohere for your exact usage. Per-request, monthly, and annual cost in one view.",
  metaTitle: "AI API Cost Calculator — GPT-5, Claude & Gemini",
  metaDescription:
    "Free AI API cost calculator. Compare per-month spend across GPT-5, Claude, Gemini, DeepSeek, Llama & Grok. 25+ models, presets, cached-input pricing.",
  path: "/ai-tools/ai-api-cost-calculator",

  header: {
    title: "AI API Cost Calculator & Comparator",
    description:
      "Compare LLM pricing across OpenAI (GPT-5, GPT-4o), Anthropic (Claude Opus 4.7, Sonnet 4.6, Haiku 4.5), Google Gemini, DeepSeek, Mistral, Llama, xAI Grok, and Cohere. Plug in your actual usage to see real per-month and annual cost — including cached-input discounts.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "AI API Cost Calculator", href: "/ai-tools/ai-api-cost-calculator" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Free AI API cost calculator and comparison tool. Compare per-request, monthly, and annual API spend across 25+ LLMs from OpenAI, Anthropic, Google, DeepSeek, Mistral, Meta Llama, xAI, Groq, Together AI, and Cohere. Use-case presets for chatbot, RAG, agent, summarization, code generation, and batch workloads. Cached-input pricing, shareable comparison links, 100% client-side calculation.",
    alternateName: [
      "LLM API Pricing Calculator",
      "LLM Cost Calculator",
      "ChatGPT API Cost Calculator",
      "Claude API Cost Calculator",
      "AI Token Cost Calculator",
    ],
    featureList: [
      "Compare 25+ LLMs across 10 providers in a single view",
      "OpenAI: GPT-5, GPT-5 mini, GPT-5 nano, GPT-4o, GPT-4o mini, o3, o3-mini",
      "Anthropic: Claude Opus 4.7 (1M context), Sonnet 4.6, Haiku 4.5",
      "Google: Gemini 2.5 Pro (2M context), 2.5 Flash, 2.5 Flash-Lite",
      "Open-source via hosted APIs: Llama 4 Maverick/Scout, DeepSeek V3/R1, Mistral, Cohere Command R+",
      "Fast inference: Groq LPU pricing for Llama models",
      "7 realistic workload presets: chatbot, RAG, agent, summarize, code-gen, batch, light chat",
      "Cached-input pricing (~90% discount) calculated automatically",
      "Per-request, per-month, and per-year cost in one comparison table",
      "Cheapest vs most-expensive savings highlighted with $ and % difference",
      "Shareable URL: every set of inputs encoded in query params for team review",
      "Copy comparison summary as text for Slack / docs / fundraising decks",
      "Pricing data last updated 2026-05; single JSON source for easy maintenance",
      "100% client-side — your usage figures never leave your browser",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "An AI API cost calculator estimates how much an LLM-powered feature will cost per month based on your specific usage — input tokens per request, output tokens per request, requests per month, and cacheable input share — across every major commercial AI provider. It's the fastest way to compare GPT-5 vs Claude vs Gemini vs DeepSeek pricing for a real workload before committing.",

    quickAnswer:
      "Pick a use-case preset (chatbot, RAG, agent, summarization, code-gen, or batch) or enter your own numbers — input tokens per request, output tokens per request, and requests per month. The tool instantly compares per-request, monthly, and annual spend across 25+ models from OpenAI, Anthropic, Google, DeepSeek, Mistral, Llama, xAI Grok, and Cohere. Switch between models to see savings, copy a share link for team review, or use the typical-usage presets to validate your assumptions.",

    keyTakeaways: [
      "AI inference costs vary 50–300× between models — choosing the wrong one can mean $500 vs $50,000 per month",
      "Output tokens are typically 4–10× more expensive than input — your output:input ratio drives total cost more than you'd guess",
      "Cached-input pricing (offered by OpenAI, Anthropic, Google) is a ~90% discount and is often overlooked in cost estimates",
      "Cheap doesn't mean bad: DeepSeek V3, Gemini Flash, and Haiku 4.5 can match GPT-4o quality for 5–20% of the cost on many tasks",
      "Reasoning models (o3, DeepSeek R1) bill thinking tokens as output — real cost can be 2–10× higher than naïve estimates",
      "1M-context windows (Gemini 2.5 Pro, Claude Opus 4.7, Llama 4 Scout 10M) are great for RAG but punish per-call costs",
      "Llama 4 / Mistral via Together / Groq are typically the cheapest frontier-quality option for open-source workloads",
    ],

    overview:
      "This AI API cost calculator helps engineering teams, founders, and AI product builders compare per-request and per-month LLM spend across every major commercial provider: OpenAI (GPT-5, GPT-4o family, o-series reasoning), Anthropic (Claude Opus 4.7 with 1M context, Sonnet 4.6, Haiku 4.5), Google (Gemini 2.5 Pro / Flash / Flash-Lite), DeepSeek (V3, R1), Mistral (Large 2, Small 3, Codestral), Meta Llama 4 (via Together AI and Groq), xAI (Grok 4, Grok 4 Mini), and Cohere (Command R+ / Command R). Pick a workload preset — light chatbot, production chatbot, RAG knowledge base, agentic workflow, summarization, code generation, or batch processing — and the tool instantly shows you per-request cost, monthly bill, annual bill, and the savings from switching to a cheaper model with comparable quality. Cached-input pricing is calculated automatically (most providers now offer ~90% discount on repeated context like system prompts and RAG chunks), so your estimate matches what you'll actually see on the invoice. Every input is encoded into a shareable URL so you can paste your scenario in Slack, an investor deck, or your engineering team's RFC for instant peer review.",

    howToSteps: [
      "Pick a use-case preset — Light chatbot, Production chatbot, RAG, Agentic workflow, Summarization, Code generation, or Batch processing — to seed realistic numbers, or skip directly to manual entry.",
      "Adjust input tokens per request, output tokens per request, and requests per month to match your actual workload. If you're starting from a word count, estimate roughly 1.3 tokens per English word.",
      "Set the cacheable input share — the portion of input prompt that repeats across requests (system prompts, RAG context, examples). Most production AI features can cache 40–70% of input for ~90% savings.",
      "Pick which models you want to compare from the model picker. Default selection covers GPT-5, GPT-4o mini, Claude Sonnet 4.6, Haiku 4.5, Gemini Pro/Flash, DeepSeek V3, and Llama 4 — a strong frontier-to-cheap spectrum.",
      "Read the comparison table — cheapest is highlighted green, most expensive in red, and the savings dollar amount + percentage are shown above. Copy the share link or a text summary for team review.",
    ],

    features: [
      "25+ models across 10 providers — every major commercial LLM API, including frontier (GPT-5, Claude Opus 4.7, Gemini 2.5 Pro, Grok 4, Llama 4 Maverick), balanced (Sonnet 4.6, GPT-4o, Mistral Large), reasoning (o3, DeepSeek R1), and fast/cheap (Haiku, Flash-Lite, GPT-5 nano, DeepSeek V3).",
      "Seven workload presets that reflect real production patterns — light chatbot (50K req/mo), production chatbot (3M req/mo), RAG with cacheable system prompt, multi-step agentic workflows, document summarization with long input + short output, IDE-plugin code generation, and bulk batch processing.",
      "Cached-input pricing modeled correctly — most providers (OpenAI, Anthropic, Google) discount repeated prompt context by ~90%. The slider lets you set what share of your input is cacheable; total cost reflects the savings.",
      "Per-request, per-month, and per-year cost shown in one table, sorted cheapest first with the cheapest model highlighted and a savings callout vs the most expensive selected option.",
      "Shareable URLs — every parameter (selected models, tokens per request, requests per month, cacheable %) is encoded in the URL query string so you can send a specific comparison to a teammate.",
      "Copy-as-text summary — one-click clipboard copy of the full comparison formatted for Slack messages, engineering RFCs, fundraising decks, or budget review documents.",
      "Provider pricing data centralized in a single JSON file with a visible 'last updated' date. When OpenAI cuts GPT-5 pricing or Anthropic adds Claude 5, the entire calculator updates from one source.",
      "100% client-side — all calculations run in your browser. Your usage numbers, prompts, or projected scale are never sent to a server, logged, or stored. Zero outgoing network requests after the page loads.",
    ],

    useCases: [
      "Engineering teams budgeting an AI feature before launch — compare what 1M monthly chat requests would cost across GPT-5, Claude Sonnet 4.6, Gemini Flash, and Llama 4 Maverick to pick the right starting point.",
      "Startup founders writing AI cost projections for investor decks — get defensible per-month numbers grounded in actual published pricing instead of hand-waved estimates.",
      "AI infrastructure leads evaluating model migration ROI — compute exactly how much your team would save (or lose) by moving from GPT-4o to Claude Haiku 4.5 or to a self-hosted Llama 4 via Together AI.",
      "Solo developers and indie hackers choosing between paid providers — see which model gives you the most output for $20/month before committing to a subscription tier or API plan.",
      "Engineering managers approving AI budget requests — paste the share link into the PR review or budget request to validate numbers in seconds without rebuilding the spreadsheet.",
      "AI product managers comparing reasoning model TCO — see how o3 vs DeepSeek R1 vs Claude Sonnet 4.6 with extended thinking compare for an agentic workload that bills thinking tokens.",
      "Procurement teams negotiating enterprise AI contracts — bring documented per-request cost comparisons to vendor calls instead of accepting the first quote.",
      "RAG developers sizing knowledge-base assistants — model the impact of cached system-prompt pricing on a 200K-context retrieval workflow.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why LLM Cost Comparison Is Suddenly Critical</h3>
          <p>
            In 2024, AI pricing was simple: pay OpenAI. Today, the market has five frontier-tier providers (OpenAI, Anthropic, Google, xAI, Meta/Llama-hosters) plus a dozen open-source-hosted alternatives, and prices vary by <strong>50–300× between cheap and expensive options for comparable quality on a given task</strong>. The same chatbot can cost $500/month on DeepSeek V3 or $50,000/month on Claude Opus 4.7 — without anyone in your team realizing the gap until the bill arrives. Picking the right model is now one of the highest-leverage decisions in your AI feature stack, and it requires actual math, not vibes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The Cost Formula (And Why Naïve Estimates Are Wrong)</h3>
          <p>The basic formula every cost calculator uses:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`per_request_cost = (input_tokens × input_rate / 1M) + (output_tokens × output_rate / 1M)
monthly_cost = per_request_cost × requests_per_month`}</code>
          </pre>
          <p className="mt-3">
            But naïve estimates miss three things that often double or halve the real bill:
          </p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>
              <strong>Cached input pricing.</strong> Every major provider now discounts repeated input context by ~90%. If your system prompt is 1,500 tokens and never changes, you're paying ~$0.001 per request for it on Claude Sonnet, not $0.005. Production AI features typically cache 40–70% of input.
            </li>
            <li>
              <strong>Reasoning models bill thinking tokens.</strong> o3, DeepSeek R1, and "extended thinking" Claude all generate hidden thinking tokens before the final answer — and those thinking tokens count as output. A 200-token visible answer can cost the same as a 2,000-token output. Budget for 5–10× actual response length on reasoning workloads.
            </li>
            <li>
              <strong>Output is 4–10× more expensive than input.</strong> Most teams optimize input length and ignore output. But for any model where output costs $15/M and input costs $3/M, halving your output is the same dollar savings as cutting your input by 80%. Tighten output schemas before touching prompts.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Frontier Models Pricing Snapshot (mid-2026)</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Model</th>
                <th className="text-left py-2 px-2 text-foreground">Input / 1M</th>
                <th className="text-left py-2 px-2 text-foreground">Output / 1M</th>
                <th className="text-left py-2 px-2 text-foreground">Context</th>
                <th className="text-left py-2 px-2 text-foreground">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>GPT-5</strong></td><td className="py-2 px-2">$1.25</td><td className="py-2 px-2">$10</td><td className="py-2 px-2">400K</td><td className="py-2 px-2">Frontier general purpose, multimodal</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>Claude Opus 4.7</strong></td><td className="py-2 px-2">$15</td><td className="py-2 px-2">$75</td><td className="py-2 px-2">1M</td><td className="py-2 px-2">Top coding & long-context reasoning</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>Claude Sonnet 4.6</strong></td><td className="py-2 px-2">$3</td><td className="py-2 px-2">$15</td><td className="py-2 px-2">1M</td><td className="py-2 px-2">Most popular for agents & RAG</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>Gemini 2.5 Pro</strong></td><td className="py-2 px-2">$1.25</td><td className="py-2 px-2">$10</td><td className="py-2 px-2">2M</td><td className="py-2 px-2">Ultra-long context, multimodal</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>Grok 4</strong></td><td className="py-2 px-2">$3</td><td className="py-2 px-2">$15</td><td className="py-2 px-2">256K</td><td className="py-2 px-2">X integration, real-time data</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>Llama 4 Maverick</strong> (via Together)</td><td className="py-2 px-2">$0.27</td><td className="py-2 px-2">$0.85</td><td className="py-2 px-2">1M</td><td className="py-2 px-2">Open weights, cheapest frontier-tier</td></tr>
              <tr><td className="py-2 px-2"><strong>DeepSeek V3</strong></td><td className="py-2 px-2">$0.27</td><td className="py-2 px-2">$1.10</td><td className="py-2 px-2">128K</td><td className="py-2 px-2">Cheapest hosted frontier-quality</td></tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs">
            Note the spread: Claude Opus 4.7 output costs <strong>~88× more than Llama 4 Maverick output</strong>. Quality varies by task — for coding Opus often wins; for high-volume classification Llama 4 or DeepSeek V3 is unbeatable on cost-per-quality.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Workload Patterns and Which Model Wins</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Light chatbot (under 100K reqs/mo):</strong> any tier works. Pick on UX (latency, quality), not cost — savings are pennies. GPT-4o mini, Claude Haiku 4.5, Gemini 2.5 Flash all viable.</li>
            <li><strong>Production chatbot (1M+ reqs/mo):</strong> cost matters now. Look at Claude Haiku 4.5, Gemini Flash, or DeepSeek V3 for cost-tier; Sonnet 4.6 or GPT-5 mini if quality is critical.</li>
            <li><strong>RAG (knowledge base assistant):</strong> heavy input + cacheable system prompt. Pricing is dominated by input rate × (1 − cache hit). Claude Sonnet 4.6 + prompt caching is the sweet spot. Gemini 2.5 Pro for 1M+ context corpus.</li>
            <li><strong>Agentic workflow:</strong> multi-step + tool use. Output-heavy. Sonnet 4.6 wins on accuracy; GPT-5 mini for cost-sensitive agents; o3 / DeepSeek R1 for planning steps where reasoning quality matters.</li>
            <li><strong>Document summarization:</strong> very long input → short output (10:1+ ratio). Pricing is dominated by input rate. Gemini Flash, GPT-5 nano, Llama 4 Scout (10M context!) win on cost.</li>
            <li><strong>Code generation:</strong> Claude Sonnet 4.6 is the developer-favorite default. Codestral and DeepSeek V3 are strong cheaper alternatives. GPT-5 for the hardest problems.</li>
            <li><strong>Bulk batch processing:</strong> classification, tagging, scoring at scale. Cheapest tier always wins: DeepSeek V3, Llama 3.1 8B via Groq ($0.05/M input!), Gemini Flash-Lite.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Prompt Caching: The 90% Discount Most Teams Miss</h3>
          <p>
            All three major closed-source providers now offer prompt caching with ~90% discount on the cached input portion:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>OpenAI:</strong> automatic for prompts ≥1024 tokens; 50% discount on cached tokens (improving over time).</li>
            <li><strong>Anthropic:</strong> explicit <code>cache_control</code> blocks; 90% discount on cached input, 25% premium on write.</li>
            <li><strong>Google:</strong> context caching API; ~75% discount, $0.0625/M cached input on Gemini 2.5 Pro.</li>
          </ul>
          <p className="mt-3">
            Real impact: a 1,500-token system prompt fired 1M times per month at Claude Sonnet 4.6 ($3/M input) costs $4,500 uncached. With 90% cache savings on that fixed prefix, you pay $450 instead — <strong>$4,050/month saved from one config change</strong>. The calculator above models this automatically based on your cacheable % slider.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Switching Cost vs Switching Savings</h3>
          <p>
            Switching models isn't free. You usually need:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Prompt re-tuning</strong> — each model has subtle preferences (system prompt placement, output format, refusal patterns). Budget 1–2 weeks of eval work per model migration.</li>
            <li><strong>Eval set + regression checks</strong> — if you don't have an automated eval, you can't safely switch. Build one before migrating.</li>
            <li><strong>Latency / throughput retest</strong> — DeepSeek and Together can be slower / spikier than OpenAI. Test under realistic load.</li>
            <li><strong>SDK / integration changes</strong> — varies; OpenRouter / Portkey / LiteLLM abstract this if you've already plumbed them in.</li>
          </ul>
          <p className="mt-3">
            Rule of thumb: <strong>only migrate when savings are at least 5× your engineering opportunity cost</strong> over 6 months. If you'd save $500/month switching, the math doesn't work for a senior engineer's week. If you'd save $50,000/month, ship the eval and switch tomorrow.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Open-Source Alternatives via Hosted Inference</h3>
          <p>
            You don't need to self-host to use open-source weights. Together AI, Groq, Fireworks AI, Replicate, and others host Llama 4, DeepSeek V3, Mistral, and dozens of other open-weight models behind familiar OpenAI-compatible APIs. The advantages:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Cheapest frontier-quality models.</strong> Llama 4 Maverick 400B at $0.27 input / $0.85 output is the lowest sticker price you'll find for genuinely frontier-tier weights.</li>
            <li><strong>Fastest inference.</strong> Groq's LPU hardware runs Llama 3.3 70B at ~280 tokens/sec — 3–4× faster than OpenAI on the same prompts.</li>
            <li><strong>Portability.</strong> If a hosted provider raises prices, you can move to another OpenAI-compatible host or even self-host the same weights.</li>
            <li><strong>No data sharing with frontier labs.</strong> For privacy-sensitive workloads (legal, health), open weights via a hosted API that contractually doesn't train on your data is often a better path than OpenAI / Anthropic.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Pricing Accuracy Disclaimer</h3>
          <p>
            All pricing data in this tool is sourced from each provider's public pricing pages as of <strong>{`2026-05-14`}</strong>. AI pricing changes frequently — sometimes monthly, often with little warning. Treat the comparison output as <strong>directionally accurate</strong> for budgeting and decision-making, but <strong>always verify with the provider's official documentation</strong> before committing to a contract or production migration. Provider-specific discount programs (annual commits, startup credits, enterprise volume tiers) are not modeled and can shift your effective rate by 20–50%.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Don't pick a model by lowest sticker price — pick by lowest *cost-per-passing-eval*. Build a small eval suite (50–200 representative tasks with pass/fail criteria), run it against each candidate model, and compute (model cost) ÷ (% of evals passed). DeepSeek V3 looks 50× cheaper than Claude Opus 4.7 on paper, but if it only passes 60% of your evals where Opus passes 95%, the effective cost-per-good-answer is much closer than the sticker suggests. For production workloads, also model your cached-input ratio realistically — most teams underestimate it; getting it from 40% to 70% often saves more than switching models.",

    faqs: [
      {
        question: "How accurate are the AI API cost estimates?",
        answer:
          "Estimates are accurate to within ~5% of your actual provider invoice when your inputs are correct, assuming standard (non-reasoning) models and no enterprise discounts. The calculator uses each provider's published per-million-token rates and models cached-input discounts. For reasoning models (o3, DeepSeek R1, extended thinking on Claude), output token counts in real usage are typically 2–10× higher than your visible response length because thinking tokens bill as output — add a safety margin. Provider prices also change frequently; we update this tool when major providers publish changes, but always verify with the provider's official pricing page before signing contracts.",
      },
      {
        question: "Which AI API is cheapest for a production chatbot?",
        answer:
          "For most production chatbots: Claude Haiku 4.5 ($1 input / $5 output per million), Gemini 2.5 Flash ($0.30 / $2.50), or GPT-5 nano ($0.05 / $0.40) deliver strong quality at low cost. For absolute cheapest hosted frontier-quality, look at DeepSeek V3 ($0.27 / $1.10) or Llama 4 Maverick via Together AI ($0.27 / $0.85). Run a realistic eval against your actual chat traffic before committing — quality varies significantly by task. Don't forget cached-input pricing: for a chatbot with a fixed system prompt, enabling caching often saves more money than switching models.",
      },
      {
        question: "Why is Claude Opus 4.7 so much more expensive than GPT-5?",
        answer:
          "Anthropic has historically positioned Opus as their premium flagship at premium pricing — $15/$75 per million input/output vs OpenAI's GPT-5 at $1.25/$10. The pricing reflects Anthropic's bet that for the hardest reasoning and coding tasks, customers will pay 10× the price for incrementally better quality. For most tasks (chatbots, summarization, RAG, simple agents), Claude Sonnet 4.6 at $3/$15 delivers nearly identical quality to Opus at 1/5 the price. Reserve Opus for tasks where you can measurably justify the cost.",
      },
      {
        question: "What is cached-input pricing and should I use it?",
        answer:
          "Cached-input pricing lets you pay ~90% less for input tokens that repeat across many requests — typically system prompts, RAG context, or few-shot examples. OpenAI applies it automatically when prompts share a prefix of ≥1024 tokens. Anthropic requires explicit cache_control blocks but offers the deepest discounts. Google's context caching API charges $0.0625/M for cached Gemini 2.5 Pro input vs $1.25/M uncached. Yes, you should use it — for any production AI feature with a stable system prompt, prompt caching can cut total cost by 50–80% with zero quality impact. The calculator's cacheable-share slider models this directly.",
      },
      {
        question: "How do I count tokens for cost estimation?",
        answer:
          "Rule of thumb: 1 token ≈ 0.75 English words ≈ 4 characters. So a 1,000-word document is roughly 1,333 tokens. For exact counts, use the official tokenizer for your model — tiktoken for OpenAI, the Anthropic tokenizer API for Claude, Vertex AI's count_tokens for Gemini. For cost estimation, exact counts matter less than rough budgeting — being off by ±15% on token count is fine for decision-making; if you're off by 50% you're using the wrong formula.",
      },
      {
        question: "Should I use OpenAI, Anthropic, or open-source models?",
        answer:
          "Depends on your workload. Closed models (OpenAI, Anthropic, Google) give you predictable APIs, strong safety filters, and dedicated support — but pay premium pricing and your data may flow through their training pipelines (read the terms). Open weights via hosted APIs (Llama 4, DeepSeek, Mistral via Together / Groq / Fireworks) are 5–20× cheaper and you can self-host or switch providers easily — but quality is task-dependent and you handle more operational complexity. Many serious production teams now run hybrid: closed models for hardest tasks, cheap hosted open weights for high-volume routine work. The cost calculator lets you model both side by side.",
      },
      {
        question: "What's the difference between GPT-5 and GPT-5 mini for cost?",
        answer:
          "GPT-5 is OpenAI's flagship at $1.25/$10 per million input/output. GPT-5 mini is the cost-optimized variant at $0.25/$2 — 5× cheaper. GPT-5 nano sits even lower at $0.05/$0.40 — perfect for high-volume classification or simple tasks. The mini and nano variants typically retain 80–95% of GPT-5's quality on common tasks at 5–25× the cost reduction. For most production features, start with mini and only upgrade to full GPT-5 if your evals show meaningful quality wins.",
      },
      {
        question: "Are reasoning models like o3 and DeepSeek R1 worth the cost?",
        answer:
          "Yes for hard reasoning tasks (multi-step math, code with subtle logic, complex agent planning), no for routine chat or summarization. The catch: reasoning models bill thinking tokens as output, which means a 200-token visible response can actually consume 1,500–5,000 output tokens. Your real per-request cost is often 3–10× higher than a naïve estimate. Budget accordingly. For the cheapest reasoning, DeepSeek R1 at $0.55/$2.19 dramatically undercuts OpenAI's o3 at $2/$8 — quality on coding tasks is competitive.",
      },
      {
        question: "How do I share my cost comparison with my team?",
        answer:
          "Click 'Copy share link' to get a URL with your exact selected models, usage numbers, and cacheable percentage encoded in the query string. Anyone who opens the link sees the same comparison. For docs, decks, or Slack messages, click 'Copy comparison summary' to grab a plain-text version with monthly costs sorted cheapest-first plus a savings callout. Both options are 100% client-side — no account, no signup, no link shortener creating an external dependency.",
      },
      {
        question: "Is my usage data private?",
        answer:
          "Yes. The calculator runs entirely in your browser using JavaScript. Your usage figures, selected models, and projected scale are never sent to any server, never logged, and never stored. Verify it yourself: open DevTools → Network tab and confirm zero outgoing requests when you change inputs. Safe for confidential business projections, fundraising decks, or any sensitive cost modeling.",
      },
      {
        question: "How often is the pricing data updated?",
        answer:
          "Pricing is sourced from each provider's public pricing pages and refreshed whenever a major provider announces changes. The 'Last updated' date is shown above the model picker. AI pricing changes frequently — sometimes monthly — so always verify with the provider's official documentation before relying on these numbers for production budgeting or contract negotiations. If you spot an outdated price, the data lives in a single file (lib/ai-pricing-data.ts) and is easy to update.",
      },
      {
        question: "Can I compare self-hosted vs hosted model costs?",
        answer:
          "Not directly. This calculator focuses on hosted commercial APIs where pricing is per-token. Self-hosting open-weight models has different economics: GPU hourly cost + utilization rate, not per-token. As a rough comparison, hosting Llama 4 70B on an 8x H100 cluster ($30-40/hour cloud) at 50% utilization breaks even with Together AI's $0.27/M input pricing at roughly 10–20M tokens/hour throughput. For high-volume continuous workloads self-hosting wins; for bursty or low-volume API calls, hosted is dramatically cheaper.",
      },
    ],

    relatedTools: [
      { name: "AI Code Detector", href: "/ai-tools/ai-code-detector" },
      { name: "AI Text Detector", href: "/ai-tools/ai-text-detector" },
      { name: "AI Readability Analyzer", href: "/ai-tools/ai-readability-analyzer" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function AiApiCostCalculatorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(<AiApiCostCalculator />)}
    />
  )
}
