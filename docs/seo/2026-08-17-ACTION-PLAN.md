# FastTools Recovery Action Plan — 2026-08-17

## DONE today (this session)
1. ✅ Flagship restored: relay direct-egress fallback (tetherproxy `41ec8ca`), tool verified
   live end-to-end (profile + image proxy 200).
2. ✅ Uptime alarm active: merged to main (`f1f6305d`), runs every 15 min, first run green.
3. ✅ IG DP cluster sitemap lastmod freshening deployed (was stranded since Jul 24).
4. ✅ Sitewide schema honesty pass: fake dates removed, FAQPage/HowTo/DefinedTerm dropped,
   dead sameAs removed, default og:image added, meta-description truncation fixed.
5. ✅ Cannibalization: instagram-profile-picture-viewer 301 → instagram-dp; pregnancy-calculator
   301 → pregnancy-conception-calculator.
6. ✅ ~11 pages of factual/YMYL/overclaim fixes (see audit report) + youtube-tags API bug.

## USER MUST DO (cannot be done from this machine)
1. 🔴 **Phone egress**: open the TetherProxy app on the phone, re-pair if needed, disable
   battery optimization for it. The site currently runs on the ECS direct-egress fallback —
   works, but the residential IP is the durable path if Instagram ever blocks the ECS IP.
2. 🔴 **AdSense dashboard** (top suspect for the Aug 9 trigger alongside the outage):
   - Privacy & messaging → **Offerwall**: check WHEN it was enabled/ramped. If the date is
     early August — that's the smoking gun. Disable it (or restrict to repeat visitors).
   - Auto ads: disable **in-page formats** on this site (CLS 0.652 on the flagship comes from
     ad injection); keep only the manually placed, height-reserved slots.
3. 🟡 **GSC (10 minutes)**:
   - Manual Actions report — confirm empty.
   - URL Inspection on `/social-media-tools/instagram-dp` → Request Indexing (do the same for
     the 6 variants + homepage). Google is still serving pre-July titles/www URLs.
   - Performance → filter "insta dp viewer" → confirm average position Aug 9–15 vs before
     (validates the demotion-not-demand diagnosis).
   - Settings → check the new generative-AI controls are ON (default) — do not opt out.

## NEXT DEPLOY WINDOW (phase 2 — ~1 week out, after watching GSC)
1. Doorway consolidation (the June spam update targeted exactly this):
   - instagram-dp: 301 `hd-1080p`, `pc-viewer`, `anonymous-viewer` → flagship; keep
     `zoom-profile-picture` (ranks for "insta zoom"), `private-account`, `download` — then
     rewrite the two keepers to <30% shared sentences.
   - youtube-thumbnail: 301 `4k`, `hd`, `grabber`, `viewer` → main; fold their honest content
     (4K-is-upscaled, fallback sizes, dimensions table) into the main page; rebuild
     `maxresdefault` as a developer explainer (that SERP is informational).
   - channel-checker: 301 `channel-name-checker` → main (cannibalizes main's exact H1);
     rewrite `youtube-username-checker` + `check-if-taken` to genuinely distinct intents;
     add main→variant links; 301 `handle-availability-2026` → evergreen slug.
2. De-stuff the flagship ("instagram dp" 22× visible) and de-template the sitewide H2 skeleton
   ("What is X / How to Use X / About X") — the pattern that keyword-injects on every page.
3. Convert mass 308→homepage catch-alls (security-tools, education-tools, ad-tools, blog,
   guides…) to 410s via Netlify redirects; fix `/tools/:path*` 308→404 chains (410 direct).
4. Sitemap lastmod accuracy pass for the other clusters that genuinely changed in July
   (channel-checker, tiktok/influencer, etc. still say 2026-03).
5. ai-api-cost-calculator: refresh model pricing to Aug 2026 + visible "Prices verified" date
   (freshness IS the ranking factor in that vertical).
6. Fix caption-generator (500 on every call) and pet-names (30s gateway timeout) AI backends,
   or noindex those pages until fixed.
7. Offense on the winnable SERPs: channel-checker (surface the dual-namespace differentiator),
   youtube-tags, ai-code-detector, pdf-signature-checker (name PAdES/X.509 standards),
   qr-generator (own "permanent qr code" angle), token-generator (export formats).

## WATCH (daily, 2 min)
- GSC Performance: impressions for "insta dp viewer" + sitewide clicks. Expect impressions to
  bottom out within ~3–7 days of the tool being back and recrawl requests, then climb.
- Flagship uptime Action: any red run = phone/relay issue; the fallback should keep the tool
  alive regardless.
- If no impression recovery by ~Sep 1 despite the tool being up: revisit doorway consolidation
  timing (move phase 2 up).
