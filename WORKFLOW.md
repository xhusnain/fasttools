# FastTools Development Workflow (The Protocol)

Every time a new tool is requested, follow this exact sequence.

## Phase 1: Recon & Planning
1. **Requirement Analysis:** Understand the tool's goal.
2. **Package Check:** Check `package.json`. Do we need new libs? (Prefer existing).
3. **Structure Check:** Identify the correct category folder in `app/` and `components/`.

## Phase 2: Architecture & Code Structure
Follow the "Separation of Concerns" strictly:
- **Constants:** `constants/<tool-name>.ts` (Form defaults, static data).
- **Types:** `types/<tool-name>.ts` (TypeScript interfaces).
- **Utilities:** `lib/<tool-name>.ts` (Pure logic/math functions).
- **UI Components:** `components/ui/` (Use existing Shadcn components).
- **Tool Component:** `components/<category>/<tool-name>.tsx` (The interactive widget).
- **Page Wrapper:** `app/<category>/<tool-name>/page.tsx` (SEO wrapper, metadata, layout).

## Phase 3: SEO & Content
- **Keywords:** Research real, high-intent queries (use GSC data over guesses).
- **Semantic Content:** Write answer-first block, "How to use," comparison section, and FAQs — **original, not recycled** competitor/PAA copy.
- **Unique value (the real lever):** Build a deep `aboutTool` with first-hand substance — the actual formula, a current-data table, an honest comparison. This is what 2025–2026 core updates reward.
- **Technical SEO:** JSON-LD = `BreadcrumbList` + `WebApplication` (+ `VideoObject` if video). `FAQPage`/`HowTo` still auto-emit but their **rich results are deprecated** (FAQ: May 7 2026; HowTo: 2023) — keep the *content*, don't count on SERP features.
- **GEO/AEO = just SEO** (Google's official 2026 stance): front-load a quotable answer, self-contained sections, first-hand/verifiable data. **`llms.txt`/`ai.txt` do NOT help Google's AI — don't over-invest.**
- **Performance:** Ensure INP < 200ms, LCP < 2.5s, CLS < 0.1.
- **Linking:** Cross-link 4-6 related tools, link from hub page.
- **Reference:** See the full, current SEO skill at `.claude/memory/seo-skill.md` (May 2026 edition).

## Phase 4: Variations (The "Long Tail" Strategy)
- ⚠️ **Gated since the June 2025 core update**, which demoted pages that only funnel traffic without standalone value. Only create a variant page if it clears ALL of:
  1. A **distinct keyword cluster** with **real GSC impressions** (not a guess).
  2. **Genuinely different, standalone-useful content** — not the same tool with reworded synonyms.
  3. It would help a user even if they never saw the parent tool.
- If it's just synonym-swapped copy, fold the keyword into the parent page instead. Thin variants are now a site-wide ranking liability.

## Phase 5: Git & Delivery
1. **Sync:** `git checkout main && git pull`
2. **Branch:** `git checkout -b feat/tool-name`
3. **Build:** Run `npm run build` to verify no errors.
4. **Push:** `git push origin feat/tool-name`
5. **Notify:** Send Discord message with branch name.

---
*Created by Koda 🦊 based on Husnain's instructions.*
