import https from "https";

/**
 * Instagram serves complete og:meta tags to Googlebot for SEO indexing, so a
 * single GET with a Googlebot User-Agent returns username, full name, follower
 * counts, posts, verified flag, and profile picture URL — no cookies, no
 * session, no proxies.
 *
 * Failure mode: if Instagram blocks the production server IP, the page comes
 * back without og:title/og:description and parseProfileFromHtml returns null,
 * which surfaces as a 502 to the client. There is no silent degradation — when
 * it breaks, redeploy with a different UA.
 */

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

function fetchProfilePage(
  path: string,
  redirectsRemaining = 3
): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "www.instagram.com",
        path,
        method: "GET",
        headers: {
          "user-agent": USER_AGENT,
          accept: ACCEPT,
          "accept-language": ACCEPT_LANGUAGE,
        },
        timeout: getTimeoutMs(),
      },
      (res) => {
        if (
          res.statusCode &&
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location &&
          redirectsRemaining > 0
        ) {
          const redirect = new URL(
            res.headers.location,
            `https://www.instagram.com${path}`
          );
          if (redirect.hostname !== "www.instagram.com") {
            reject(new Error(`Redirected to ${redirect.hostname}`));
            return;
          }
          fetchProfilePage(
            redirect.pathname + redirect.search,
            redirectsRemaining - 1
          )
            .then(resolve)
            .catch(reject);
          return;
        }

        const chunks: Buffer[] = [];
        res.on("data", (chunk: Buffer) => chunks.push(chunk));
        res.on("end", () =>
          resolve({
            status: res.statusCode || 0,
            body: Buffer.concat(chunks).toString("utf8"),
          })
        );
      }
    );

    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request timed out"));
    });
    req.end();
  });
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
  if (fresh) {
    console.log(`[Instagram] Cache hit: @${username}`);
    return fresh;
  }

  try {
    console.log(`[Instagram] Fetching: @${username}`);
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

    const message = error instanceof Error ? error.message : String(error);
    console.warn(`[Instagram] Fetch failed for @${username}: ${message}`);

    const stale = getCachedProfile(cacheKey, true);
    if (stale) {
      console.warn(`[Instagram] Serving stale cache for @${username}`);
      return stale;
    }

    const status =
      error instanceof ProfileFetchError ? error.status : 502;
    return {
      ok: false,
      status,
      data: { error: message || "Failed to fetch Instagram profile" },
    };
  }
}
