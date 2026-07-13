# Instagram Tool SEO Recovery Plan — 2026-07-13

## TL;DR

The Instagram DP tool traffic collapse is **not keyword stuffing and not a DMCA
takedown** (both were ruled out with evidence). The root cause is that **the tool
serves a broken 100×100 thumbnail while promising "Full Size HD 1080p"** — so every
visitor bounces back to Google. That user-dissatisfaction signal, landing during two
Google updates that specifically reward "satisfying content," is what tanked
rankings. Fix the tool first; everything else is secondary.

---

## 1. What we ruled OUT (with evidence)

### Keyword stuffing — NOT the cause
- Competitor teardown (top 9 rankers) shows they are **keyword-heavier** than us and
  rank fine: DownReels 3.4% density ("profile picture" 52× in 1,534 words), GramSnap
  3.6%, indown.io ranks on 462 words with three near-identical exact-match H2s.
- Our density is **lower** than theirs. Repetition is not the differentiator.

### Fraudulent DMCA takedown — NOT the cause
- A DMCA removes the URL from Google's index entirely. Ours are **still indexed and
  still ranking**: live Google search returns 5 of our IG URLs on page 1
  (`/instagram-dp`, `/pc-viewer`, `/hd-1080p`, `/zoom-profile-picture`, hub), and we
  hold ~#7 for the head term "instagram dp download viewer full size."
- No notices for `fasttools.store` in the Lumen database.
- Symptom is the opposite of DMCA: indexed + ranking but ~zero clicks = a
  quality/relevance signal, not a removal.

---

## 2. Root cause (verified in code + live)

| Fact | Evidence |
|---|---|
| Tool serves a **100×100, 2.9 KB thumbnail** | Downloaded & measured from live `/api/instagram/profile` |
| Page promises **"Full Size HD 1080p"** | Live title, H1, `/hd-1080p` + `/download` variants; body copy claims "the full 1080×1080" |
| Delivered image is **worse than Instagram's own app** shows (110×110) | Measured |
| `profile_pic_url_hd` is **fake** | `lib/instagram-profile.ts:366-367` assigns the same variable to both fields |
| Origin: code scrapes Instagram `og:image` (= the 100×100 thumb) | `lib/instagram-profile.ts:352` |
| HD/SD download toggle is a **no-op** (both download the same 2.9 KB file) | `components/social-media/instagram-dp-viewer.tsx:127-128` |
| Thumbnail **cannot** be upgraded by URL edit (signature-bound → 403) | Tested `stp=` tamper up to 1080/2048 and removal |

**Why it broke:** commit `98535aea` (June 2026) switched from the `web_profile_info`
JSON API to og-tag scraping as a workaround for a then-real 401 lockdown. That
lockdown has since **lifted** (re-verified 2026-07-13: `web_profile_info` → HTTP 200),
but the degraded scraping path is still live in production.

---

## 3. Resolution ceilings (benchmarked 2026-07-13)

- **`web_profile_info` API caps at 320×320** — hard signed transform, can't tamper up.
  This is the cheap fix target = **10× current pixels** and finally better than IG's app.
- **1080×1080 is real** (competitor **indown.io delivers genuine 1080×1080**) but
  requires a **logged-in IG session** (`hd_profile_pic_versions`) or a paid scraper
  backend. instadpdownload.com serves 320×320 via plain `web_profile_info`.

**Decision fork:** ship 320 + honest copy now (cheap), then optionally invest in a
1080 backend to match the category leader.

---

## 4. Google 2026 update context (why the timing hurt)

- **May 2026 Core Update** (rollout began May 21, ~2 weeks) — "better surface
  relevant, **satisfying** content." Overlaps the exact drop window. A tool that hands
  users a broken thumbnail is the definition of unsatisfying.
- **June 2026 Spam Update** (Jun 24–26, global).
- **March 2026 Core Update** targeted **scaled content abuse** — sites publishing
  many low-value templated pages saw 50–80% drops. Relevant because this is a ~200-page
  programmatic tool site. The July 6 purge of 122 thin pages was the *correct* response
  to this policy; keep leaning that way.
- Compounding site events in the window: www→apex host migration (Jun 5-6), ~50 pages
  retitled in 8 days, blog removed, 41 pages now hard-404.

Sources: Search Engine Land / Search Engine Journal (June 2026 spam update); Google
Search Central spam policies (scaled content abuse, site reputation abuse).

---

## 5. Recovery plan — priority order

### P1 — Fix the tool (THE cause; nothing else matters until this ships)
- [ ] `lib/instagram-profile.ts`: primary fetch back to `web_profile_info`, routed
      through the **existing Webshare proxy pool** (already in-file; solves 429).
- [ ] Keep og-image scrape as **last-resort fallback only**.
- [ ] Stop aliasing `profile_pic_url_hd` to the thumbnail (lines 366-367); return the
      real HD URL.
- [ ] Verify end-to-end: live tool returns 320×320 for `nasa`/`cristiano`, HD button
      downloads the 320 file, not the 100.
- **Outcome:** bounce-back signal stops. This is the recovery lever.

### P2 — Align copy with what we actually deliver (false promises hurt rankings)
- If staying at **320×320**: retitle off "1080p" → "HD"; delete/repurpose the
  `/hd-1080p` variant; fix body copy claiming "the full 1080×1080."
- If investing in **1080** (session-auth or scraper backend): copy becomes true; match
  indown.io. Bigger infra + ToS risk — treat as a follow-up project.

### P3 — Structural on-page gaps (from competitor teardown)
- [ ] **Move the tool `<input>` into the hero** — it currently sits LAST in the HTML
      (~57KB after H1, behind a PPC-fraud promo). Every competitor puts it right after
      the H1. Fix source order, not just CSS `order-*`.
- [ ] Add **FAQPage + HowTo + WebApplication** JSON-LD (6/8 rankers have it; we have
      none, and our visible FAQ isn't crawlable). **Do NOT add AggregateRating** (prior
      fake-rating exposure).
- [ ] Kill the **H1-repeated-in-H2** template ("What is Instagram DP Viewer — View &
      Download Full Size Profile Pictures?"). Use natural questions.
- [ ] Add the two blocks every ranker has: **per-device instructions**
      (Android/iPhone/PC) and a crawlable **anonymity** section ("will they know if I
      view their DP?").
- [ ] Shorten the em-dash H1 to a plain exact-match phrase; consider leading the title
      with "Downloader" (6/8 winners do).

### P4 — Housekeeping (minor)
- [ ] `/blog` and old routes 308-redirect to the homepage → Google reads mass
      redirect-to-homepage as soft-404. Point to relevant section pages or 404 honestly.
- [ ] Keep pruning genuinely thin/templated pages (scaled-content-abuse hygiene).

---

## 6. Open inputs needed from owner
1. **Resolution target: 320 (cheap, this week) or 1080 (infra project)?**
   Recommendation: ship 320 + honest copy now, decide 1080 after.
2. **GSC baseline:** exact date range + which property (apex / www / Domain) produced
   the "10k/day → 29/day" figure — to size expected recovery, not to change diagnosis.

## 7. Expected timeline
Google must recrawl and re-evaluate after the fix ships. Realistic: **days to a few
weeks** for the satisfaction signal to re-register, longer to fully recover position.
No overnight fix — but the tool fix is the prerequisite for any recovery at all.
