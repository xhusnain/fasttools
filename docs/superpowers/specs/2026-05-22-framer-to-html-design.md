# Framer → HTML — FastTools Integration Design

**Date:** 2026-05-22
**Status:** Approved (pending user spec review)
**Target URL:** `https://www.fasttools.store/web-tools/framer-to-html`

## Summary

Port the existing `~/framer-extractor` Next.js app into the FastTools monorepo as a public, free, server-side tool at `/web-tools/framer-to-html`. The tool downloads a published Framer website, captures every asset with headless Chromium, rewrites URLs, and packages everything into a portable ZIP of static HTML the user can host anywhere.

This is the first **server-side, long-running, Playwright-backed** tool in FastTools. All existing tools are client-side. The design is deliberately scoped to ship safely without introducing infrastructure that does not yet exist (no DB, no queue, no persistent volume).

## Goals

- One public tool page that lets any visitor extract a Framer site to static HTML.
- Restrict input to Framer-published sites only (anti-abuse).
- Fully ephemeral — no state survives a container restart or a 10-minute idle.
- Match FastTools conventions: SEO metadata, JSON-LD schemas, Tailwind/shadcn UI, sitemap + llms.txt entries.

## Non-Goals (YAGNI)

- No database, Redis, or queue.
- No persistent volume — ZIPs live in container `/tmp` and die with the container.
- No user accounts, login, or history.
- No CAPTCHA — the Framer-only URL guard is the moat.
- No multi-tenant concurrency — single global job lock.
- No CLI entry point in this repo.
- No GitHub Action / scheduled mirror feature.
- No support for non-Framer sites (even though the underlying engine could).

## Architecture

### Top-level shape

```
Browser  ──POST /api/framer-to-html/extract──►  Next.js route
                                                    │
                                                    ▼
                                          isFramerSite(url) guard
                                                    │
                                                    ▼
                                          startJob(opts)  ──►  in-memory jobs map
                                                    │
                                                    ▼
                                          spawn extract() pipeline
                                                    │
                                                    ▼
                                          Playwright Chromium
                                          → crawl → fetch-missing → rewrite
                                          → (optional strip-js) → zip
                                                    │
                                                    ▼
Browser ◄──SSE /api/framer-to-html/stream/[jobId]──┘  (live log)
Browser ◄──GET /api/framer-to-html/download/[jobId]── (final ZIP)

Sweeper (every 60s)  ──►  delete jobs older than 10 min OR already downloaded
```

### File layout (copy + rename from `~/framer-extractor`)

| Source (`~/framer-extractor`) | Destination (`fasttools-client`) | Notes |
|---|---|---|
| `lib/crawl.ts` | `lib/framer-to-html/crawl.ts` | Playwright crawler |
| `lib/fetch-missing.ts` | `lib/framer-to-html/fetch-missing.ts` | Second-pass asset fetch |
| `lib/rewrite.ts` | `lib/framer-to-html/rewrite.ts` | URL rewriting |
| `lib/strip-js.ts` | `lib/framer-to-html/strip-js.ts` | Static-snapshot mode |
| `lib/zip.ts` | `lib/framer-to-html/zip.ts` | ZIP packaging |
| `lib/extractor.ts` | `lib/framer-to-html/extractor.ts` | Pipeline orchestrator |
| `lib/jobs.ts` | `lib/framer-to-html/jobs.ts` | In-memory job registry + sweeper |
| `app/api/extract/route.ts` | `app/api/framer-to-html/extract/route.ts` | POST start job |
| `app/api/stream/[jobId]/route.ts` | `app/api/framer-to-html/stream/[jobId]/route.ts` | SSE log stream |
| `app/api/status/[jobId]/route.ts` | `app/api/framer-to-html/status/[jobId]/route.ts` | Job status JSON |
| `app/api/download/[jobId]/route.ts` | `app/api/framer-to-html/download/[jobId]/route.ts` | ZIP download (deletes job after success) |
| `types/archiver.d.ts` | `types/framer-to-html.d.ts` | Ambient module type for `archiver` |
| `app/page.tsx` (UI) | `components/web-tools/framer-to-html.tsx` | Re-themed client component |
| _(new)_ | `app/web-tools/framer-to-html/page.tsx` | SEO wrapper page |
| _(new)_ | `constants/framer-to-html.ts` | Defaults, hard caps, TTLs |
| _(new)_ | `types/framer-to-html.ts` | Public TS interfaces |
| _(new)_ | `lib/framer-to-html/url-guard.ts` | `isFramerSite()` validator |

All framer-related routes namespaced under `/api/framer-to-html/*` to avoid collision with future server-side tools.

## Server-Side Components

### URL guard (`lib/framer-to-html/url-guard.ts`)

```ts
export async function isFramerSite(url: string): Promise<{ ok: true } | { ok: false; reason: string }>;
```

Logic:
1. Parse URL. Must be `http` or `https`.
2. If hostname ends with `.framer.website` or `.framer.ai` → `ok: true`.
3. Otherwise: HEAD/GET the URL with a short timeout (5s), look for one of:
   - `<meta name="generator" content="Framer">`
   - The substring `framer-` in inline CSS or the response body
   - `x-powered-by: framer` style header (if present)
4. If detected → `ok: true`. Else → `ok: false, reason: "URL is not a Framer-published site"`.

The guard is called inside `POST /api/framer-to-html/extract` before `startJob()`. On failure returns `400`.

### Job lifecycle (`lib/framer-to-html/jobs.ts`)

- `Map<jobId, JobState>` in module scope.
- `JobState = { id, opts, log: LogEntry[], status, zipPath?, createdAt, doneAt?, downloadedAt? }`
- `startJob(opts)` → creates entry, spawns pipeline, returns `jobId`. If a job is already running, returns `409 Conflict` with the existing job id.
- `getJob(id)`, `appendLog(id, stage, msg)`, `markDone(id, zipPath)`, `markFailed(id, err)`, `deleteJob(id)`.
- Sweeper (`setInterval`, 60s) deletes any job where:
   - `Date.now() - createdAt > 60 min` (hard ceiling), OR
   - `doneAt && Date.now() - doneAt > 10 min`, OR
   - `downloadedAt && Date.now() - downloadedAt > 5 min` (early reclaim after delivery).
- Sweeper also removes the job dir from disk.

### Constants (`constants/framer-to-html.ts`)

```ts
export const FRAMER_TO_HTML_DEFAULTS = {
  maxPages: 30,
  stripRuntimeJs: true,
  fetchMissingAssets: true,
};

export const MAX_PAGES_HARD_CAP = 50;       // enforced server-side
export const JOB_DONE_TTL_MS = 10 * 60 * 1000;
export const JOB_HARD_TTL_MS = 60 * 60 * 1000;
export const JOB_DOWNLOADED_TTL_MS = 5 * 60 * 1000;
```

### Types (`types/framer-to-html.ts`)

```ts
export interface ExtractRequest {
  url: string;
  maxPages?: number;
  stripRuntimeJs?: boolean;
  fetchMissingAssets?: boolean;
}

export type JobStatus = "queued" | "running" | "done" | "failed";

export interface LogEntry {
  stage: "crawl" | "fetch-missing" | "rewrite" | "strip-js" | "zip" | "error" | "info";
  message: string;
  timestamp: number;
}

export interface JobSnapshot {
  id: string;
  status: JobStatus;
  log: LogEntry[];
  zipReady: boolean;
  error?: string;
}
```

## Client Component (`components/web-tools/framer-to-html.tsx`)

A client component, themed with shadcn primitives already used elsewhere in FastTools (Button, Input, Slider, Switch, Card, Progress).

Sections:
1. URL input + Extract button.
2. Options panel: max pages (slider 5-50, default 30), Strip JS toggle (default on), Fetch missing assets toggle (default on).
3. Live log panel: streaming text rows from SSE.
4. Result panel (when done): "Download ZIP" button + 10-minute countdown showing when the link expires.
5. Error panel (on failure): inline error + "Try again" reset.

Behavior:
- On submit → POST `/api/framer-to-html/extract`, get jobId.
- On success → open EventSource on `/api/framer-to-html/stream/<jobId>`.
- On `done` event from SSE → reveal Download button.
- On `failed` event → show error.
- Countdown ticks once per second from a `doneAt + 10min` boundary returned in the SSE payload.

## SEO Wrapper Page (`app/web-tools/framer-to-html/page.tsx`)

Follows existing FastTools page pattern (e.g., `app/web-tools/dns-ssl-checker/page.tsx`):

- `export const metadata = createMetadata({ ... })` with:
   - `title`: "Framer to HTML — Free Framer Site Exporter | FastTools"
   - `description`: "Export any Framer site to static HTML. Free, no signup. Captures every asset, rewrites URLs, packages a ZIP you can host anywhere."
   - canonical: `/web-tools/framer-to-html`
   - OG image
- JSON-LD: `WebApplication` + `FAQPage` (FAQ Q&As) + `BreadcrumbList`.
- Page content blocks, in order:
   1. H1 + answer-first lede (visible above the fold).
   2. The tool itself (`<FramerToHtml />` client component).
   3. **How it works** — 5-step table from README.
   4. **How to use** — 4-step list.
   5. **Comparison** — table vs wget / HTTrack / SingleFile / paid SaaS.
   6. **Use cases** — 6 bulleted use cases.
   7. **FAQ** — 8-10 Q&As, wired to `FAQPage` schema.
   8. **Limitations & legal honesty** — copyright reminder, what isn't captured.
   9. **Related tools** — 3 cross-links to `dns-ssl-checker`, `url-parser`, `outlook-safelink-decoder`.

Target keywords (research-validated): `framer to html`, `export framer site`, `framer site downloader`, `framer to static html`, `framer scraper`.

## SEO Updates Beyond the Page

- `app/sitemap.ts` — add `/web-tools/framer-to-html` with `lastModified: 2026-05-22`.
- `llms.txt` — add tool entry with description and URL.
- `app/web-tools/page.tsx` — add link card to new tool in the web-tools hub.

## Infrastructure Changes

### `package.json`

Add dependencies:
- `playwright` (or `playwright-core` if we want to install Chromium separately)
- `archiver`
- `@types/archiver` (devDependency)

### `Dockerfile`

In the `deps` stage, after `npm install`:
```dockerfile
RUN npx playwright install --with-deps chromium
```

Implications:
- Image grows by ~300MB.
- Host must have ≥1GB free RAM during a job (Chromium peak ~512MB).
- No persistent volume — `jobs/` lives in container temp dir.

### Next.js config

Confirm `next.config.mjs` does not need changes. Add `serverComponentsExternalPackages: ['playwright', 'playwright-core']` if Next complains about bundling Playwright. (Verify during implementation.)

## Failure Modes & Handling

| Failure | Behavior |
|---|---|
| User submits non-Framer URL | `400` from URL guard; UI shows error inline |
| Concurrent job in progress | `409` with existing jobId; UI auto-reattaches to that job's stream |
| Playwright fails to launch | Job marked `failed`; SSE emits error; user sees inline error |
| Crawl times out (e.g., 10 min hard cap inside `crawl.ts`) | Job marked `failed` |
| Disk full | Job marked `failed`; sweeper still attempts cleanup |
| User abandons page | Sweeper removes job 10 min after `done` (or 60 min hard cap if never done) |

## Open Questions / Risks

1. **Playwright + Next.js 15 bundling** — verify Playwright works correctly inside an App Router route handler. May need `experimental.serverComponentsExternalPackages` or similar config. To be validated during implementation.
2. **Concurrent visitors** — first user starts a job, subsequent visitors see `409` and reattach. UX needs clear messaging. Acceptable for v1; can revisit with a queue later.
3. **Cost / abuse signal** — even with Framer-only guard, this tool consumes 5-15 min of CPU/RAM per job. If abuse is observed, add IP rate limiting (1 job per IP per 10 min) post-launch.
4. **Legal disclaimer** — page must include explicit copyright reminder (already in README; carry forward).

## Acceptance Criteria

- Visiting `/web-tools/framer-to-html` shows the new SEO page with hero, tool, FAQ, comparison, related tools.
- Pasting `https://flowsuite.framer.website/` → live log streams → ZIP download succeeds.
- Pasting a non-Framer URL like `https://example.com` → guard rejects with `400` and inline error.
- After 10 minutes idle post-`done`, the download link returns `404`.
- Sitemap, llms.txt, and `web-tools` hub all reference the new page.
- `npm run build` succeeds.
- Docker image builds successfully with Playwright + Chromium.

## Out of Scope (Future)

- IP rate limiting (Redis or in-memory token bucket).
- CLI wrapper.
- Multi-job concurrency.
- User history / accounts.
- Inline CSS / single-file output mode.
- Sitemap-based seed list for unlinked pages.
- Dockerfile + deploy guide for self-hosting separate from FastTools.
