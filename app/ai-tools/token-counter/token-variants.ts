// Keyword-cluster variant pages for the LLM Token Counter.
// One underlying tool, one intent-specific landing page per model family,
// each with genuinely unique copy about how that model's tokenization works.

import type { TokenModelKey } from "@/components/ai/token-counter"

export interface TokenVariantConfig {
  slug: string
  defaultModel: TokenModelKey
  toolName: string
  metaTitle: string
  metaDescription: string
  headerTitle: string
  headerDescription: string
  overviewText: string
  definition: string
  quickAnswer: string
  keywords: string[]
  keyTakeaways: string[]
  howToSteps: string[]
  featureOverrides: string[]
  useCases: string[]
  aboutSections: Array<{ heading: string; body: string }>
  proTip: string
  faqOverrides: Array<{ question: string; answer: string }>
}

export const tokenVariants: Record<string, TokenVariantConfig> = {
  chatgpt: {
    slug: "chatgpt",
    defaultModel: "gpt",
    toolName: "ChatGPT Token Counter",
    metaTitle: "ChatGPT Token Counter — Exact GPT-5 & GPT-4o Token Count",
    metaDescription:
      "Free ChatGPT token counter. Paste text and get the exact token count for GPT-5, GPT-4o, and GPT-4 using OpenAI's real tokenizers (o200k_base, cl100k_base). Runs in your browser.",
    headerTitle: "ChatGPT Token Counter",
    headerDescription:
      "Exact token counts for GPT-5, GPT-4o, and GPT-4 — the same o200k_base and cl100k_base tokenizers OpenAI uses, running in your browser.",
    overviewText:
      "This ChatGPT token counter runs OpenAI's actual tokenizer vocabularies in your browser, so the number you see is the number the API will bill you for. GPT-5 and GPT-4o share the o200k_base encoding; GPT-4 and GPT-3.5 use the older cl100k_base — switch between them with one click and watch the count update as you type. Nothing you paste leaves your device.",
    definition:
      "A ChatGPT token counter measures how many tokens — the subword chunks GPT models actually read — a piece of text becomes, using the same byte-pair-encoding vocabulary OpenAI's models use internally.",
    quickAnswer:
      "Paste your text and read the token figure — it's computed with OpenAI's own o200k_base vocabulary, so it matches what the API reports. As a rule of thumb, 1,000 English words come out around 1,300 tokens, but the exact ratio depends on the words themselves.",
    keywords: [
      "chatgpt token counter",
      "gpt-5 token counter",
      "gpt-4o token counter",
      "openai token count",
      "count tokens chatgpt",
    ],
    keyTakeaways: [
      "Exact counts, not estimates — uses OpenAI's real o200k_base and cl100k_base vocabularies",
      "GPT-5 and GPT-4o tokenize identically; GPT-4 and GPT-3.5 use an older vocabulary that yields slightly higher counts",
      "English averages roughly 1.3 tokens per word; code and non-English text run higher",
      "Shows whether your text fits the 128k context window",
      "Fully client-side — your text is never uploaded",
    ],
    howToSteps: [
      "Pick the model family (GPT-5/GPT-4o or GPT-4/GPT-3.5).",
      "Paste or type your text.",
      "Read the live token, word, and character counts.",
      "Check the context-window bar to see how much room remains.",
    ],
    featureOverrides: [
      "Exact o200k_base counts for GPT-5 and GPT-4o",
      "Exact cl100k_base counts for GPT-4 and GPT-3.5",
      "Live recount on every keystroke",
      "Context-window fit meter for 128k models",
      "Word and character counts alongside tokens",
      "100% in-browser processing",
    ],
    useCases: [
      "Check a prompt fits the context window before sending it to the API",
      "Estimate API costs precisely — billing is per token, not per word",
      "Trim system prompts to a token budget",
      "Verify how much of a document survives a context limit",
    ],
    aboutSections: [
      {
        heading: "Why the Count Is Exact, Not Estimated",
        body: "OpenAI publishes the byte-pair-encoding vocabularies its models use — o200k_base for GPT-5 and GPT-4o, cl100k_base for GPT-4 and GPT-3.5. This tool loads those exact vocabularies and runs the same merge rules, so the count matches what the tokenizer inside the model produces. That's the difference between this and word-count-times-1.3 approximations: for billing and context-limit decisions, the exact number is the one that matters.",
      },
      {
        heading: "How GPT Models Split Text Into Tokens",
        body: "Tokens are subword chunks, not words. Common English words like 'the' or 'hello' are single tokens, while rarer words split into pieces — 'tokenization' becomes two or three. Spaces attach to the following word, punctuation often stands alone, and numbers split digit by digit in surprising ways. Code is token-dense because of symbols and indentation, and non-Latin scripts can use several tokens per character.",
      },
      {
        heading: "o200k_base vs cl100k_base",
        body: "The o200k_base vocabulary (GPT-5, GPT-4o) has roughly 200k entries against cl100k_base's 100k, so it compresses text into fewer tokens — the same paragraph typically counts a few percent smaller, with bigger savings on non-English text. If you're migrating prompts from GPT-4 to a newer model, recounting with the right encoding keeps your budget math honest.",
      },
    ],
    proTip:
      "Paste your full conversation, not just the newest message — the API re-reads the entire history every turn, so context and cost grow with the whole thread, and the count here shows what you're really sending.",
    faqOverrides: [
      {
        question: "Does this match what the OpenAI API bills me?",
        answer:
          "For the text itself, yes — it uses the same vocabulary the models use. The API adds a few tokens of message framing per request (role markers and separators), so total billed usage runs slightly higher than the raw text count.",
      },
      {
        question: "How many tokens is a typical word?",
        answer:
          "English prose averages about 1.3 tokens per word — 750 words is roughly 1,000 tokens. Technical vocabulary, code, and other languages run denser, which is exactly why counting beats estimating.",
      },
      {
        question: "Which encoding should I pick for ChatGPT?",
        answer:
          "The default GPT-5/GPT-4o option (o200k_base) is right for today's ChatGPT. Choose GPT-4/GPT-3.5 only if you're targeting those older models via the API.",
      },
    ],
  },

  claude: {
    slug: "claude",
    defaultModel: "claude",
    toolName: "Claude Token Counter",
    metaTitle: "Claude Token Counter — Estimate Anthropic Token Counts",
    metaDescription:
      "Free Claude token counter. Paste text to estimate tokens for Claude models and check fit against the 200k context window. Honest estimates — Anthropic's tokenizer isn't public.",
    headerTitle: "Claude Token Counter",
    headerDescription:
      "Estimate how many tokens your text becomes for Anthropic's Claude models and see how it fits the 200k context window.",
    overviewText:
      "This Claude token counter gives you a working estimate of how Anthropic's models will tokenize your text. One honest caveat up front: Anthropic hasn't published Claude's tokenizer, so no third-party tool can give exact counts — anyone claiming otherwise is guessing too. This tool computes a modern BPE count and labels it clearly as an estimate; real Claude counts typically land within about ±15%, and the API's usage field reports the exact figure after each call.",
    definition:
      "A Claude token counter estimates how many tokens Anthropic's Claude models will read a text as. Because Claude's tokenizer is not public, all client-side counts are estimates; exact usage comes back in the API response.",
    quickAnswer:
      "Paste your text and read the estimated token figure. Expect the true Claude count to be within roughly ±15%. For exact numbers, check the usage field the Anthropic API returns, or call its count_tokens endpoint before sending.",
    keywords: [
      "claude token counter",
      "anthropic token count",
      "claude token limit",
      "count claude tokens",
      "claude context window",
    ],
    keyTakeaways: [
      "Honest estimates — Anthropic's tokenizer isn't public, so exact client-side counts don't exist",
      "Real Claude counts typically land within ±15% of this figure",
      "The Anthropic API's usage field and count_tokens endpoint give exact numbers",
      "Claude's standard context window is 200k tokens — the fit meter shows your usage",
      "Fully client-side — your text is never uploaded",
    ],
    howToSteps: [
      "Paste or type the text you plan to send to Claude.",
      "Read the estimated token count and the word/character figures.",
      "Check the 200k context-window bar to see how much room your prompt uses.",
      "For billing-exact numbers, verify with the API's count_tokens endpoint.",
    ],
    featureOverrides: [
      "Clearly-labelled estimates instead of false precision",
      "200k context-window fit meter",
      "Live recount as you type",
      "Word and character counts alongside tokens",
      "Guidance on getting exact counts from the Anthropic API",
      "100% in-browser processing",
    ],
    useCases: [
      "Sanity-check a long document fits Claude's 200k window before an API call",
      "Ballpark monthly API costs while drafting prompts",
      "Compare prompt sizes while editing without burning API calls",
      "Budget context for retrieval chunks in a RAG pipeline",
    ],
    aboutSections: [
      {
        heading: "Why Exact Claude Counts Don't Exist Client-Side",
        body: "OpenAI publishes its tokenizer vocabularies; Anthropic doesn't. Claude uses its own BPE vocabulary that has never been released, so every browser-based counter — this one included — is approximating with a comparable vocabulary. The estimates are close because modern BPE tokenizers compress English at similar rates, but treat any tool advertising 'exact Claude counts' with suspicion.",
      },
      {
        heading: "Getting the Exact Number When It Matters",
        body: "Anthropic gives you two precise options. Before sending, the count_tokens API endpoint returns the exact token count for a message list without running the model. After sending, every response includes a usage object with exact input and output tokens — the numbers billing actually uses. A good workflow is drafting against this estimator, then verifying the final prompt with count_tokens.",
      },
      {
        heading: "Claude's Context Window in Practice",
        body: "Claude's standard window is 200,000 tokens — roughly 150,000 English words, or a 500-page book. The practical limit is softer: very full windows cost more per call, respond slower, and models attend less reliably to material buried mid-context. If your estimate approaches six figures, summarizing or chunking usually beats stuffing the window.",
      },
    ],
    proTip:
      "Output tokens cost several times more than input tokens on Claude models — when estimating spend, budget the response length you'll allow, not just the prompt size you're sending.",
    faqOverrides: [
      {
        question: "How accurate is the estimate?",
        answer:
          "Typically within ±15% for English prose, and often closer. Code, non-English text, and unusual formatting can drift further. For decisions where the exact number matters — billing forecasts, hard context limits — verify with Anthropic's count_tokens endpoint.",
      },
      {
        question: "Why not just use the OpenAI tokenizer number as-is?",
        answer:
          "That's essentially what all client-side Claude counters do, because it's the closest public vocabulary. The difference is honesty about it: this tool labels the figure an estimate instead of presenting borrowed precision as fact.",
      },
      {
        question: "Do Claude and ChatGPT count the same text differently?",
        answer:
          "Yes, somewhat — different vocabularies split words differently, so the same paragraph gets slightly different counts. The models' per-token pricing also differs, so compare costs, not raw token numbers.",
      },
    ],
  },

  gemini: {
    slug: "gemini",
    defaultModel: "gemini",
    toolName: "Gemini Token Counter",
    metaTitle: "Gemini Token Counter — Estimate Google AI Token Counts",
    metaDescription:
      "Free Gemini token counter. Paste text to estimate tokens for Google's Gemini models and check fit against the 1M context window. Use countTokens for exact API numbers.",
    headerTitle: "Gemini Token Counter",
    headerDescription:
      "Estimate token counts for Google's Gemini models and see how your text fits a 1-million-token context window.",
    overviewText:
      "This Gemini token counter estimates how Google's models will tokenize your text and shows the result against Gemini's headline feature: a context window of up to one million tokens. Like Anthropic, Google hasn't published Gemini's tokenizer, so browser tools can only estimate — this one says so plainly and points you to the free countTokens API method when you need the exact figure. As a rough anchor, Google documents that 100 tokens ≈ 60–80 English words.",
    definition:
      "A Gemini token counter estimates how many tokens Google's Gemini models will read a text as. Gemini's tokenizer is not public, so client-side counts are estimates; the countTokens API method returns exact numbers free of charge.",
    quickAnswer:
      "Paste your text and read the estimated count against Gemini's context windows. For exact numbers, call the free countTokens method of the Gemini API — it counts without running the model and without cost.",
    keywords: [
      "gemini token counter",
      "google ai token count",
      "gemini context window",
      "count gemini tokens",
      "gemini 1 million tokens",
    ],
    keyTakeaways: [
      "Estimates clearly labelled as such — Gemini's tokenizer isn't public",
      "The countTokens API method returns exact counts and is free to call",
      "Gemini 2.5 Pro accepts up to 1M tokens — about 700k English words",
      "Google's own guidance: 100 tokens is roughly 60–80 English words",
      "Fully client-side — your text is never uploaded",
    ],
    howToSteps: [
      "Paste or type the text you plan to send to Gemini.",
      "Read the estimated token count as you edit.",
      "Check the 1M context bar — most texts barely register against it.",
      "Before a production call, verify with the free countTokens API method.",
    ],
    featureOverrides: [
      "Estimates with honest error bars, not fake precision",
      "1M-token context-window fit meter",
      "Live recount as you type",
      "Word and character counts alongside tokens",
      "Guidance on the free countTokens verification method",
      "100% in-browser processing",
    ],
    useCases: [
      "Check how much of the 1M window a document set actually uses",
      "Ballpark long-context costs before uploading books or codebases",
      "Compare prompt sizes across Gemini, Claude, and GPT for the same task",
      "Budget context for multi-document analysis workflows",
    ],
    aboutSections: [
      {
        heading: "The Million-Token Window, in Real Units",
        body: "One million tokens is roughly 700,000 English words — around eight novels, 30,000 lines of code with documentation, or an hour of video transcribed. Almost nothing you paste into a browser tool approaches it, which is the point of the fit meter: it shows how much genuine headroom long-context workflows have. The practical constraints are cost and latency, since every token in the window is processed — and billed — on each request.",
      },
      {
        heading: "Why This Is an Estimate — and How to Get Exact",
        body: "Google hasn't released Gemini's tokenizer vocabulary, so no third-party counter can reproduce its exact splits. Google's documentation offers the 100-tokens-per-60-to-80-words rule of thumb, and this tool's BPE-based estimate is finer-grained than that. When you need the real figure, the Gemini API's countTokens method returns it exactly, costs nothing, and doesn't invoke the model — worth wiring into any production pipeline.",
      },
      {
        heading: "Multimodal Tokens Count Too",
        body: "Gemini prompts often include more than text, and everything is metered in tokens: Google documents images at a fixed 258 tokens each (tiled for large images), video at roughly 263 tokens per second, and audio at 32 tokens per second. If your prompt mixes media, the text estimate here is only part of the bill — add media at those documented rates.",
      },
    ],
    proTip:
      "countTokens is free and doesn't run the model — for long-context work, call it first on every large prompt; it's the cheapest guardrail against accidentally expensive requests.",
    faqOverrides: [
      {
        question: "How do I get an exact Gemini token count?",
        answer:
          "Call the countTokens method of the Gemini API with your content. It returns the exact total without generating anything and without charge. This tool is for quick drafting estimates; countTokens is the source of truth.",
      },
      {
        question: "Does the 1M context window cost more to use?",
        answer:
          "You pay per token processed, so filling the window costs proportionally more on every request — and long-context pricing tiers can kick in above certain sizes. A huge window is capacity, not a free lunch.",
      },
      {
        question: "Do images and video really use tokens?",
        answer:
          "Yes. Google meters media in token equivalents — around 258 tokens per image and roughly 263 tokens per second of video — so multimodal prompts can be far larger than their text suggests.",
      },
    ],
  },
}
