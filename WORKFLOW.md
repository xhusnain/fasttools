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
- **Keywords:** Research high-volume/low-competition keywords.
- **Semantic Content:** Write "How to use," "Why use this," and FAQs.
- **Technical SEO:** Add JSON-LD Schema (SoftwareApplication/HowTo).
- **Optimization:** ensure < 100ms TBT (Total Blocking Time).

## Phase 4: Variations (The "Long Tail" Strategy)
- If the tool has niche keywords (e.g., "Instagram Downloader" vs "Insta Saver"), create variation pages.
- Reuse the core component but change the SEO wrapper and content.

## Phase 5: Git & Delivery
1. **Sync:** `git checkout main && git pull`
2. **Branch:** `git checkout -b feat/tool-name`
3. **Build:** Run `npm run build` to verify no errors.
4. **Push:** `git push origin feat/tool-name`
5. **Notify:** Send Discord message with branch name.

---
*Created by Koda 🦊 based on Husnain's instructions.*
