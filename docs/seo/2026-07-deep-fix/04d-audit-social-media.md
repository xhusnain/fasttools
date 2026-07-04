# Per-tool audit — social-media-tools (THE money category) — 2026-07-03

## Instagram DP cluster

| Route | Verdict | Finding / fix |
|---|---|---|
| /instagram-dp (main) | **INVEST** | Title doesn't front-load the winning short forms ("insta dp viewer" 177/18,330 @ 0.97%, "insta zoom" 191/6,931). Links only 3 of 5 variants (pc-viewer & anonymous-viewer unlinked). Retitle (below) + add variant links. |
| /instagram-dp/download | **CREATE NOW — PHANTOM 404** | In sitemap (line 52, priority 0.9) but no `download` key in dp-variants.ts → notFound(). ~18K impressions of download intent ("insta dp download" 49/9,350, "instagram dp download" 40/7,756, "download insta dp" 1/981) have NO owner. Highest-ROI single action on the site. Verb-first title: "Insta DP Download — Save Instagram Profile Picture Full Size HD". |
| /instagram-dp/private-account | **INVEST** | Site's best converter (private download queries 10.9–44% CTR) but title only says "View" — add "& Download". |
| /instagram-dp/hd-1080p | **INVEST** | Wins "instagram profile picture download 1080p" (45/1,857) but title lacks "download" and page is THIN boilerplate (no faq/howto overrides). Retitle "Instagram Profile Picture Download 1080p — HD Full Size DP Viewer" + write real overrides. |
| /instagram-dp/zoom-profile-picture | **INVEST** | Targets #1 click query "insta zoom" but is thin boilerplate and receives ZERO sibling links (slice(0,2) ordering bug in `[slug]/page.tsx:44-47`). German demand exists ("insta zoom profilbild", "instazoom profil") — add German H2/FAQ. Consider rename/301 → `/instazoom` (one-word brand query, 30/867). |
| /instagram-dp/anonymous-viewer | FIX-CHEAP | Real content but FULLY ORPHANED (0 links from main, 0 sibling links — same slice bug). Link it, re-evaluate in 60 days. |
| /instagram-dp/pc-viewer | RETIRE-NOINDEX (or leave) | Zero GSC evidence of desktop intent; thin boilerplate. Reallocate its sitemap 0.9 priority to download variant. |
| /instagram-profile-picture-viewer | CONSOLIDATE (done) | Canonicals to main ✓. But "insta pfp viewer" (6/1,023) now has NO owner → new variant below. Swap its hub card for direct variant cards. |

**Missing variants GSC justifies:** `/instagram-dp/download` (ship first), `/instagram-dp/insta-pfp-viewer`
(pfp intent orphaned), `/instagram-dp/instazoom` (one-word brand + German section),
`/instagram-dp/full-size` ("instadp" 30/1,191, "insta dp full size" intent, distinct from 1080p-download).

**dp-variant template quality bug:** variant boilerplate leaks SEO-ops language to users
("Long-tail keyword intent matching", FAQ "What makes this variant different from the main DP
page?") — doorway signal. Copy the youtube-thumbnail variant template (gold standard) into
dp-variants.ts and checker-variants.ts.

## Channel-checker cluster (the CTR disaster: availability queries ~0.15%)

| Route | Verdict | Finding / fix |
|---|---|---|
| /channel-checker (main) | FIX-CHEAP | **Self-inflicted cannibalization**: main H1 "YouTube Channel Name Availability Checker — Names & @Handles" nearly identical to the channel-name-checker variant's title → Google rotates 5 near-duplicate snippets → dead CTR. Also main links ZERO of its 4 variants (broken hub→variant chain). |
| /channel-checker/handle-availability-2026 | **REPUBLISH** | Dated slug decays every January → `/channel-checker/handle-availability`, 301. |
| /channel-checker/channel-name-checker | CONSOLIDATE (intent split) | Becomes SOLE owner of "availability" phrasing; main drops the word "Availability" entirely. |
| /channel-checker/check-if-taken | FIX-CHEAP | Dedupe keyword overlap with handle-availability. |
| /channel-checker/youtube-username-checker | INVEST (hold) | Newest, distinct — let it mature. |

## YouTube-thumbnail cluster — **gold-standard implementation, copy it**

Main + 8 variants (4k, hd, shorts, grabber, maxresdefault, mobile, live, viewer): unique deep
copy per variant, full sibling mesh, hub links all variants. Already converting (maxresdefault
3 clicks). One cheap fix: "thumbnail stealer" (~40 impr) appears NOWHERE — add to grabber
variant keywords + one FAQ ("Is a thumbnail stealer legal?").

## Other tools

| Route | Verdict | Fix |
|---|---|---|
| hashtag-counter | FIX-CHEAP | "tiktok hashtag counter" 4/7 = 57% CTR — add TikTok H2 + FAQ; variant page only if impressions grow. |
| tiktok-engagement-calculator | FIX-CHEAP | Title leads with "Free" not the query (0/84 on exact phrase) → "TikTok Engagement Rate Calculator — Free Checker with Benchmarks". |
| influencer-rate-calculator | FIX-CHEAP | Title says "Price", slug + queries say "Rate" → align. |
| youtube-channel-name-generator | FIX-CHEAP | Bridge generator→checker in meta description. |
| youtube-tags | Leave | |
| link-in-bio | Leave | Negligible demand. |
| /social-media-tools hub | FIX-CHEAP | Links zero variants; still shows canonicalized profile-picture-viewer card — swap for top DP variant cards. |

## Title proposals (the two CTR disasters)

**1. /instagram-dp main:**
- Title: `Insta DP Viewer — View & Download Instagram DP Full Size (HD)`
- Meta: `Type any username, see the full-size Insta DP in seconds. Zoom Instagram profile
  pictures in HD and download free — no login, no app, works on private accounts.`

**2. /channel-checker main:**
- Title: `YouTube Name Checker — Is That Channel Name or @Handle Taken?`
- Meta: `Check any YouTube channel name or @handle in one second — instant taken-or-available
  answer. Free, unlimited checks, no Google login. Try variations until one is free.`
- Required companion: main H1 → "YouTube Name & Handle Checker" (stop saying "Availability");
  add the 4 variant links to main relatedTools.

Key files: `instagram-dp/dp-variants.ts` · `instagram-dp/[slug]/page.tsx:44-47` (sibling slice
bug) · `channel-checker/page.tsx:403-416` (no variant links) · `youtube-thumbnail/
thumbnail-variants.ts` (template to copy) · `app/sitemap.ts:52` (phantom 404).
