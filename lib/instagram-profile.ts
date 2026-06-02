import { fetch, ProxyAgent } from "undici";
import type { RequestInit as UndiciRequestInit, Response as UndiciResponse } from "undici";

/**
 * Instagram serves complete og:meta tags to Googlebot for SEO indexing, so a
 * single GET with a Googlebot User-Agent returns username, full name, follower
 * counts, posts, verified flag, and profile picture URL — no cookies and no
 * session needed.
 *
 * On Vercel / other datacenter IPs Instagram returns a generic shell with no
 * og:meta, so every Instagram request routes through one of the Webshare
 * rotating proxies below. When a proxy returns 429 (quota/rate limit) or 407
 * (auth), we fall through to the next URL in the list.
 */

// Ordered proxy accounts. Failover walks left-to-right; sticky pointer locks
// onto the first one that succeeds. Home gost-via-bore-tunnel is listed first
// because it's an unlimited-bandwidth residential IP — Webshare is the safety
// net for when the Mac/tunnel is offline.
//
// HOME PROXIES (gost + bore.pub tunnel):
//   - Port changes every time `bore local 8080 --to bore.pub` restarts.
//   - To rotate: rerun the bore command, copy the new port, update the URL.
//   - Host machine must be on + gost running + bore running for this to work.
//
// WEBSHARE (fallback):
//   - 429 = per-account burst rate limit (~req/min), NOT monthly quota.
//   - Cooldown logic skips a 429'd account for 30s.
const WEBSHARE_PROXY_URLS = [
  "http://fasttools:***REMOVED***@bore.pub:31963",
  "http://fasttools:***REMOVED***@bore.pub:55737",
  "http://flwacgtc-rotate:***REMOVED***@p.webshare.io:80",
  "http://wizdafld-rotate:***REMOVED***@p.webshare.io:80",
  "http://xtwwtjom-rotate:***REMOVED***@p.webshare.io:80",
];

const proxyDispatchers = new Map<string, ProxyAgent>();

function getDispatcher(proxyUrl: string): ProxyAgent {
  let agent = proxyDispatchers.get(proxyUrl);
  if (!agent) {
    agent = new ProxyAgent(proxyUrl);
    proxyDispatchers.set(proxyUrl, agent);
  }
  return agent;
}

// Every request starts iteration at index 0 (the home proxy). The cooldown
// array below skips proxies that just failed, so when the home Mac is offline
// we don't waste an attempt on it for the next 30s — but we DO retry it as
// soon as the cooldown expires, so the home proxy automatically gets used
// again the moment it's back online.

// Webshare's rotating endpoint serves a different exit IP per request. Many
// IPs are flagged by Instagram (login wall / shell). Retrying 3× per account
// stitches together a usable success rate from the clean fraction. Measured:
// ~20% clean per attempt → 9 attempts ≈ 87% overall success.
const MAX_PROXY_ATTEMPTS = WEBSHARE_PROXY_URLS.length * 3;

// Cooldown for an account that just returned 429 or 407. Skipped during this
// window so we don't burn attempts on a known-rate-limited account.
const RATE_LIMIT_COOLDOWN_MS = 30_000;
const cooldownUntil = new Array<number>(WEBSHARE_PROXY_URLS.length).fill(0);

function pickProxyIndex(start: number, attempt: number): number | null {
  // Walk attempts in round-robin order from `start`, skipping accounts that
  // are still inside their rate-limit cooldown window. Returns null when ALL
  // accounts are cooling down — callers should fast-fail rather than waste
  // attempts on accounts we already know are 429'd.
  const now = Date.now();
  for (let i = 0; i < WEBSHARE_PROXY_URLS.length; i++) {
    const candidate =
      (start + attempt + i) % WEBSHARE_PROXY_URLS.length;
    if (cooldownUntil[candidate] <= now) return candidate;
  }
  return null;
}

export async function fetchHtmlViaWebshare(
  targetUrl: string,
  init: Omit<UndiciRequestInit, "dispatcher">,
  isAcceptableBody: (body: string) => boolean
): Promise<{ status: number; body: string }> {
  // Always start at index 0 (home proxy first). Cooldowns prevent us from
  // wasting attempts on a recently-failed proxy, but each request still
  // RE-TRIES the home proxy as soon as its cooldown expires — so when the
  // home Mac/tunnel comes back online, we resume using it immediately.
  let lastResult: { status: number; body: string } | null = null;
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < MAX_PROXY_ATTEMPTS; attempt++) {
    const index = pickProxyIndex(0, attempt);
    if (index === null) break;
    const proxyUrl = WEBSHARE_PROXY_URLS[index];

    try {
      const response = await fetch(targetUrl, {
        ...init,
        dispatcher: getDispatcher(proxyUrl),
      });

      if (response.status === 429 || response.status === 407) {
        await response.body?.cancel();
        cooldownUntil[index] = Date.now() + RATE_LIMIT_COOLDOWN_MS;
        continue;
      }

      const body = await response.text();
      const result = { status: response.status, body };

      if (!isAcceptableBody(body)) {
        lastResult = result;
        continue;
      }

      return result;
    } catch (error) {
      // Network-level failure (proxy unreachable / DNS / TLS / timeout).
      // Cool the proxy so the next request skips this dead endpoint for 30s.
      // Don't surface error.message — undici can embed the proxy URL (with
      // credentials) in cause chains.
      cooldownUntil[index] = Date.now() + RATE_LIMIT_COOLDOWN_MS;
      lastError = error instanceof Error ? error : new Error(String(error));
    }
  }

  if (lastResult) return lastResult;
  throw lastError || new Error("All proxies failed");
}

export async function fetchViaWebshare(
  targetUrl: string,
  init: Omit<UndiciRequestInit, "dispatcher"> = {}
): Promise<UndiciResponse> {
  let lastError: Error | null = null;

  for (let attempt = 0; attempt < WEBSHARE_PROXY_URLS.length; attempt++) {
    const index = pickProxyIndex(0, attempt);
    if (index === null) break;
    const proxyUrl = WEBSHARE_PROXY_URLS[index];

    try {
      const response = await fetch(targetUrl, {
        ...init,
        dispatcher: getDispatcher(proxyUrl),
      });

      if (response.status === 429 || response.status === 407) {
        await response.body?.cancel();
        cooldownUntil[index] = Date.now() + RATE_LIMIT_COOLDOWN_MS;
        continue;
      }

      return response;
    } catch (error) {
      cooldownUntil[index] = Date.now() + RATE_LIMIT_COOLDOWN_MS;
      lastError = error instanceof Error ? error : new Error(String(error));
    }
  }

  throw lastError || new Error("All Webshare proxies failed");
}

const USER_AGENT =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";
const ACCEPT =
  "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
const ACCEPT_LANGUAGE = "en-US,en;q=0.9";
const DEFAULT_TIMEOUT_MS = 9000;
const DEFAULT_CACHE_TTL_SECONDS = 86400;
const DEFAULT_STALE_TTL_SECONDS = 604800;

export interface InstagramProfile {
  username: string;
  full_name: string;
  biography: string;
  followers: number;
  followees: number;
  posts_count: number;
  profile_pic_url: string;
  profile_pic_url_hd: string;
  is_verified: boolean;
  is_private: boolean;
  external_url: string | null;
}

export interface InstagramProfileResponse {
  ok: boolean;
  status: number;
  data: any;
}

interface CacheEntry {
  expiresAt: number;
  staleUntil: number;
  response: InstagramProfileResponse;
}

const profileCache = new Map<string, CacheEntry>();

class ProfileFetchError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ProfileFetchError";
    this.status = status;
  }
}

function getEnv(name: string): string {
  return process.env[name]?.trim() || "";
}

function getPositiveNumberEnv(name: string, fallback: number): number {
  const value = Number(getEnv(name));
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function getTimeoutMs(): number {
  const value = Number(getEnv("INSTAGRAM_FETCH_TIMEOUT_MS"));
  return Number.isFinite(value) && value >= 1000 ? value : DEFAULT_TIMEOUT_MS;
}

function getCacheKey(username: string): string {
  return username.toLowerCase();
}

function getCachedProfile(
  cacheKey: string,
  allowStale = false
): InstagramProfileResponse | null {
  const cached = profileCache.get(cacheKey);
  if (!cached) return null;

  const now = Date.now();
  if (cached.expiresAt > now || (allowStale && cached.staleUntil > now)) {
    return cached.response;
  }

  profileCache.delete(cacheKey);
  return null;
}

function setCachedProfile(
  cacheKey: string,
  response: InstagramProfileResponse
): void {
  if (!response.ok) return;

  const ttlMs =
    getPositiveNumberEnv(
      "INSTAGRAM_PROFILE_CACHE_TTL_SECONDS",
      DEFAULT_CACHE_TTL_SECONDS
    ) * 1000;
  const staleMs =
    getPositiveNumberEnv(
      "INSTAGRAM_PROFILE_STALE_TTL_SECONDS",
      DEFAULT_STALE_TTL_SECONDS
    ) * 1000;
  const now = Date.now();

  profileCache.set(cacheKey, {
    expiresAt: now + ttlMs,
    staleUntil: now + ttlMs + staleMs,
    response,
  });
}

function parseCountText(text: string): number {
  if (!text) return 0;
  const cleaned = text.replace(/,/g, "").trim();
  const match = cleaned.match(/^([\d.]+)([KMB])?$/i);
  if (!match) return parseInt(cleaned, 10) || 0;
  const num = parseFloat(match[1]);
  const suffix = (match[2] || "").toUpperCase();
  if (suffix === "K") return Math.round(num * 1000);
  if (suffix === "M") return Math.round(num * 1000000);
  if (suffix === "B") return Math.round(num * 1000000000);
  return Math.round(num);
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    )
    .replace(/&#(\d+);/g, (_, dec) =>
      String.fromCharCode(parseInt(dec, 10))
    )
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getMetaContent(html: string, key: string): string | null {
  const tags = html.match(/<meta\s+[^>]*>/gi) || [];
  const keyPattern = new RegExp(
    `(?:property|name)=["']${escapeRegExp(key)}["']`,
    "i"
  );

  for (const tag of tags) {
    if (!keyPattern.test(tag)) continue;
    const content = tag.match(/\scontent=["']([^"']*)["']/i);
    if (content?.[1]) return decodeHtmlEntities(content[1]);
  }

  return null;
}

// Instagram occasionally returns the static UI logo in og:image when it
// suppresses the real picture. Treat that as "no picture" so the client can
// fall back to its letter-avatar instead of showing a broken icon.
function isUsableProfilePic(url: string | null): url is string {
  if (!url) return false;
  if (!/^https?:\/\//i.test(url)) return false;
  if (/static\.cdninstagram\.com\/rsrc\.php/i.test(url)) return false;
  return true;
}

function parseProfileFromHtml(
  html: string,
  username: string
): InstagramProfile {
  const desc = getMetaContent(html, "og:description") || "";
  const title = getMetaContent(html, "og:title") || "";

  // Instagram serves a generic shell with no og:title and no og:description
  // (just <title>Instagram</title>) when the username doesn't exist or the
  // account was removed. That's our 404 signal — the page status is 200.
  if (!desc && !title) {
    throw new ProfileFetchError("User not found", 404);
  }

  const followersMatch = desc.match(/([\d,.]+[KMB]?)\s*Followers/i);
  const followingMatch = desc.match(/([\d,.]+[KMB]?)\s*Following/i);
  const postsMatch = desc.match(/([\d,.]+[KMB]?)\s*Posts/i);
  const titleMatch = title.match(/^(.+?)\s*\(@[\w.]+\)/);

  // og:meta present but the profile signals are missing — likely a soft-block
  // or unexpected response. Surface a 502 so we don't cache garbage.
  if (!followersMatch && !titleMatch) {
    throw new ProfileFetchError(
      "Failed to parse profile from Instagram HTML",
      502
    );
  }

  const rawImg = getMetaContent(html, "og:image");
  const picUrl = isUsableProfilePic(rawImg) ? rawImg : "";

  const bioMatch = desc.match(
    /\d+\s*Posts?\s*[-–—]\s*(?:See Instagram photos and videos from .+|(.+))/i
  );

  return {
    username,
    full_name: titleMatch ? titleMatch[1].trim() : username,
    biography: bioMatch?.[1]?.trim() || "",
    followers: parseCountText(followersMatch?.[1] || "0"),
    followees: parseCountText(followingMatch?.[1] || "0"),
    posts_count: parseCountText(postsMatch?.[1] || "0"),
    profile_pic_url: picUrl,
    profile_pic_url_hd: picUrl,
    is_verified:
      html.includes('"is_verified":true') ||
      title.includes("✓") ||
      title.includes("☑"),
    is_private: desc.toLowerCase().includes("private"),
    external_url: null,
  };
}

// Real profile pages always carry og:title. Login walls have no og: meta at
// all (just <title>Login • Instagram</title>). Empty shell pages (real 404s
// or blocked exits) also have no og: meta. So og:title presence is the signal.
function isRealProfilePage(body: string): boolean {
  return /<meta[^>]*property=["']og:title["']/.test(body);
}

async function fetchProfilePage(
  path: string
): Promise<{ status: number; body: string }> {
  return fetchHtmlViaWebshare(
    `https://www.instagram.com${path}`,
    {
      headers: {
        "user-agent": USER_AGENT,
        accept: ACCEPT,
        "accept-language": ACCEPT_LANGUAGE,
      },
      signal: AbortSignal.timeout(getTimeoutMs()),
      redirect: "follow",
    },
    isRealProfilePage
  );
}

async function fetchProfile(username: string): Promise<InstagramProfile> {
  const { status, body } = await fetchProfilePage(
    `/${encodeURIComponent(username)}/`
  );

  if (status === 404) {
    throw new ProfileFetchError("User not found", 404);
  }
  if (status !== 200) {
    throw new ProfileFetchError(`HTTP ${status}`, status);
  }

  return parseProfileFromHtml(body, username);
}

function buildResponseData(profile: InstagramProfile) {
  return {
    data: {
      user: {
        username: profile.username,
        full_name: profile.full_name,
        biography: profile.biography,
        edge_followed_by: { count: profile.followers },
        edge_follow: { count: profile.followees },
        edge_owner_to_timeline_media: { count: profile.posts_count },
        profile_pic_url: profile.profile_pic_url,
        profile_pic_url_hd: profile.profile_pic_url_hd,
        is_verified: profile.is_verified,
        is_private: profile.is_private,
        external_url: profile.external_url,
      },
    },
  };
}

export async function fetchInstagramProfile(
  username: string
): Promise<InstagramProfileResponse> {
  if (!username) {
    return {
      ok: false,
      status: 400,
      data: { error: "No username provided" },
    };
  }

  const cacheKey = getCacheKey(username);
  const fresh = getCachedProfile(cacheKey);
  if (fresh) return fresh;

  try {
    const profile = await fetchProfile(username);
    const response: InstagramProfileResponse = {
      ok: true,
      status: 200,
      data: buildResponseData(profile),
    };
    setCachedProfile(cacheKey, response);
    return response;
  } catch (error) {
    if (error instanceof ProfileFetchError && error.status === 404) {
      return { ok: false, status: 404, data: { error: "User not found" } };
    }

    const stale = getCachedProfile(cacheKey, true);
    if (stale) return stale;

    // Only surface ProfileFetchError messages (our own, known-safe strings).
    // Generic errors (from undici/network) get a sanitized fallback message so
    // we never accidentally leak proxy URLs / credentials embedded in cause
    // chains back to the client.
    if (error instanceof ProfileFetchError) {
      return {
        ok: false,
        status: error.status,
        data: { error: error.message },
      };
    }
    return {
      ok: false,
      status: 502,
      data: { error: "Failed to fetch Instagram profile" },
    };
  }
}
