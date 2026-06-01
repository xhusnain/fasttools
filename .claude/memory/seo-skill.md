# FastTools SEO Skill — 2026 Edition

> **The canonical SEO reference for every FastTools tool.** Read this before
> writing the SEO wrapper for any new or audited tool.
> **Last updated: May 2026** (verified against Google Search Central + trade press — see [Sources](#sources)).
> Supersedes the older "add FAQPage schema + synonym blocks + llms.txt" playbook.

---

## TL;DR — what changed in 2025–2026 (read this first)

1. **FAQ rich results are dead.** Google killed them on **May 7, 2026**. Your
   `faqs` array still auto-generates `FAQPage` JSON-LD, but it produces **zero
   rich results** now (only gov/health authority sites keep them). Rankings are
   **not** affected — it was a search-*appearance* change. Keep FAQ *content*;
   stop expecting SERP dropdowns.
2. **HowTo rich results are dead** (since Sept 2023). Same story — `howToSteps`
   still emits `HowTo` JSON-LD, but it shows nothing in Google.
3. **Google's official AI guide says "GEO/AEO is just SEO."** There is **no
   special markup, no `llms.txt`, no AI-only rewrite** that gets you into AI
   Overviews. Unique, first-hand, genuinely useful content is the only lever.
4. **Thin pages are a liability.** The June 2025 core update demoted pages that
   exist only to funnel traffic without standalone value. Our variant-page
   strategy now has a quality gate (see §6).
5. **Double down on `aboutTool`.** Deep, original, first-hand content (real
   formulas, current-data tables, honest comparisons) is *exactly* what every
   2025–2026 core update rewards. This is our biggest advantage — lean in.

---

## 1. The golden rule (Google's official 2026 stance)

Google published an [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
that collapses "AEO," "GEO," and "SEO" into one discipline:

> *"From Google Search's perspective, optimizing for generative AI search is
> optimizing for the search experience, and thus still SEO."*

And the single most important sentence for us:

> *"Creating content that people find unique, compelling, and useful will likely
> influence your website's presence in generative AI search … more than any of
> the other suggestions in this guide."*

> *"Don't just recycle what others on the internet have already said, or could
> easily be produced by a generative AI model."*

**What this means for a FastTools page:** the win is a *working tool* + content
that gives a **unique, first-hand point of view** a competitor (or an LLM) can't
trivially reproduce — the real formula, current real-world data, an honest
comparison, an edge case we actually handle. Not synonyms, not markup tricks.

---

## 2. Structured data policy (2026)

JSON-LD only. Schema must describe the page's **primary** content — Google no
longer rewards off-topic/supplementary schema. Our builders in
`lib/metadata-base.ts` emit several types; here's what each is worth now:

| Schema (our field) | 2026 rich-result status | Verdict |
|---|---|---|
| `BreadcrumbList` (`breadcrumbs`) | ✅ Still produces rich results | **Keep** |
| `VideoObject` (video tools) | ✅ Still produces rich results | **Keep** |
| `SoftwareApplication`/`WebApplication` (`schemaOptions`) | ⚠️ Limited; rarely shows visibly | Keep — harmless, describes the tool |
| `FAQPage` (`faqs`) | ❌ **Dead since May 7, 2026** | Keep content, schema is optional/inert |
| `HowTo` (`howToSteps`) | ❌ **Dead since Sept 2023** | Keep step content, schema is optional/inert |
| `DefinedTerm` / `ItemList` | No visible rich result | Fine to keep — aids clarity, low cost |

**Also deprecated (June 12 2025):** Book Actions, Course Info, Claim Review,
Estimated Salary, Learning Video, Special Announcement, Vehicle Listing; plus
PracticeProblem (Jan 2026). We don't use these — don't add them.

**Do we rip out FAQPage/HowTo schema?** No need. Google: *"Structured data that's
not being used does not cause problems for Search."* Leaving it is harmless and
some non-Google engines still parse it. Just **don't count it as a SERP feature.**

---

## 3. Per-tool content blueprint (revised)

Map every `createToolConfig` field to its SEO job. Order = priority.

| Field | Job | 2026 note |
|---|---|---|
| `metaTitle` | Lead with the dominant real query; one "Free"; no stuffing | Modifier-stack is fine (e.g. "…with PMI, Taxes & Insurance") if every modifier is real |
| `metaDescription` | ~155 chars, current data point, what the tool does | Write for the human click, not the crawler |
| `definition` | One sentence an AI can quote (≤ 30 words) | Must be *accurate* and self-contained |
| `quickAnswer` | Answer "what is X / how do I X" in ≤ 2 sentences | Front-load the answer |
| `keyTakeaways` | 5–7 scannable, genuinely informative bullets | Not keyword bullets — real facts |
| `overview` | Short framing paragraph | — |
| `howToSteps` | Real usage steps | Schema inert now; keep for users |
| `features` | What the tool actually does | Match reality, not competitor copy |
| **`aboutTool`** | **The unique-value engine** — 6–10 deep sections | **Highest ROI. See §4.** |
| `useCases` | Real scenarios | First-hand framing beats generic |
| `faqs` | Answer real People-Also-Ask questions | **In our own words — see §5** |
| `relatedTools` | 4–8 genuinely relevant internal links | Workflow-relevant, not padding |
| `schemaOptions.alternateName` | A few *real* alternate names | **Not a synonym wall — see §7** |

---

## 4. `aboutTool` — our biggest 2026 advantage

This is where we beat both competitors and "content an LLM could generate." Build
6–10 sections with **first-hand, verifiable substance**:

- The **actual formula / math / algorithm** the tool uses.
- A **current-data reference table** (rates, prices, limits — with the month/year).
- **Comparison tables** that teach a decision (15-yr vs 30-yr, FHA vs conventional, etc.).
- An **honest competitor comparison** — including where a competitor is better.
- A short **"how we compute / what we don't store"** note (trust / E-E-A-T).

This directly satisfies the Dec 2025 "**Information Gain**" + first-hand-expertise
signal and the Mar 2026 "depth & purpose" signal. **Quality bar:** every section
should contain something a generic AI summary *wouldn't* know.

---

## 5. FAQs after the rich-result deprecation

FAQ rich results are gone, but FAQ *content* still earns its place: it answers
real intent, gets cited in AI answers, and deepens the page. Rules:

- **Answer real People-Also-Ask questions, but rewrite them in our own words**
  with original, accurate, useful answers. **Do not paste PAA/competitor copy
  verbatim** — that's "recycled content" Google explicitly warns against, and
  risks the scaled-content-abuse policy.
- Quality over count. **5–10 genuinely useful Q&As** beat 15 padded ones.
- Keep the `faqs` array (it still renders nice on-page content + inert schema).

---

## 6. AI Overviews / AI Mode (= still SEO)

Context: ~**48% of Google searches now show an AI answer** (up from 34.5% in Dec
2025); AI Overviews cut top-result clicks ~34.5%. Being *cited* in the AI answer
is the new visibility. How we earn it — straight from Google's guide:

- **Be indexable, snippet-eligible, crawlable.** (No-brainer, but verify.)
- **Front-load a clear, quotable answer** (`definition` + `quickAnswer`).
- **Unique, first-hand, non-commodity content** (§4).
- Semantic HTML where reasonable; high-quality images; good page experience.

**Myths Google explicitly debunks — do NOT spend effort here:**

- ❌ *"You don't need to create … AI text files, markup, or Markdown"* →
  **`llms.txt` / `ai.txt` do not help Google's AI.** We may keep them (low cost,
  a few non-Google crawlers read them) but **never treat them as a Google-SEO
  lever and never over-invest in them.**
- ❌ **Content chunking** "into tiny pieces for AI" — not needed.
- ❌ **AI-only rewrites / writing in a special way for AI** — not needed.
- ❌ **Structured data as a magic AI key** — "isn't required for generative AI search."
- ❌ **Seeking inauthentic "mentions"** across the web — "isn't as helpful as it might seem."
- ❌ Chasing an "ideal page length" — there isn't one.

---

## 7. Synonyms & `alternateName` — stop stuffing

Old playbook: 10+ synonyms in `alternateName` + a visible **"same tool, many
names"** block. **Revised:**

- `alternateName`: include a **handful of genuine** alternate names — real
  competitor/product names users actually search (e.g. "ilovepdf", "removebg")
  and natural synonyms. Skip the keyword wall; Google understands synonyms
  itself (*"you don't need to write in a specific way just for generative AI"*).
- **Remove visible synonym-stuffing paragraphs.** A natural sentence noting the
  tool's common names is fine; a wall of phrasings reads as manipulation and
  adds no value.

---

## 8. Variant pages — now gated on standalone value

The June 2025 core update **demoted pages that exist only to funnel traffic
without standalone value.** So the long-tail variant strategy gets a gate:

**Only create a variant page if it clears ALL of these:**
1. A **distinct keyword cluster** with **real GSC impressions** (not a guess).
2. **Genuinely different, standalone-useful content** — different functionality,
   data, examples, or answers — not the same page with swapped synonyms.
3. It would help a user even if they never saw the parent tool.

If a "variant" is just the same tool + reworded copy, **don't ship it** — fold
the keyword into the parent page instead. Thin variants are now a ranking
liability for the whole site, not free traffic.

---

## 9. Technical & Core Web Vitals (unchanged, still required)

- **INP < 200ms · LCP < 2.5s · CLS < 0.1.**
- Page must be indexed, return a snippet, and be crawlable (no blocked JS).
- Canonical URL set; in sitemap; internal links from the category hub.
- Reduce duplicate content across tools/variants.

---

## 10. Per-tool checklist (paste into the PR / commit)

- [ ] Title leads with the real dominant query; one "Free"; no stuffing
- [ ] Meta description ~155 chars, current data point, human-first
- [ ] `definition` ≤ 30 words, accurate, quotable
- [ ] `quickAnswer` ≤ 2 sentences, answer first
- [ ] 5–7 real `keyTakeaways`
- [ ] **`aboutTool`: 6–10 deep sections with first-hand substance** (formula, current-data table, honest comparison)
- [ ] FAQs answer real PAA **in our own words** (5–10, quality over count)
- [ ] A few *genuine* `alternateName`s — no synonym wall, no "many names" block
- [ ] `BreadcrumbList` set; `VideoObject` if there's video
- [ ] 4–8 workflow-relevant `relatedTools`
- [ ] Variant pages only if they clear the §8 standalone-value gate
- [ ] CWV pass; indexable; canonical; in sitemap
- [ ] `npm run build` clean

---

## Sources

- Google — [Optimizing for AI features in Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- Google — [FAQ structured data (deprecation notice)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- Google — [Changes to HowTo and FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- Google — [Structured data markup that Google Search supports](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- Search Engine Land — [Google to no longer support FAQ rich results](https://searchengineland.com/google-to-no-longer-support-faq-rich-results-476957)
- Search Engine Journal — [Google's new AI search guide calls AEO and GEO "still SEO"](https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/)
- Search Engine Journal — [Google is not diminishing the use of structured data in 2026](https://www.searchenginejournal.com/google-is-not-diminishing-the-use-of-structured-data-in-2026/560516/)
- Search Engine Roundtable — [Google drops support for more structured data types](https://www.seroundtable.com/google-drops-support-structured-data-types-40386.html)
- PPC Land — [Google deprecates seven structured data types](https://ppc.land/google-deprecates-seven-structured-data-types-to-simplify-search-results/)
