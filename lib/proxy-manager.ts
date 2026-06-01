import http from "http";
import https from "https";
import tls from "tls";
import { PROXY_LIST } from "./proxies";

/**
 * Instagram profile lookup is intentionally layered:
 * 1. Native public profile HTML lookup.
 * 2. Residential/datacenter proxy retries for hosts where Instagram blocks
 *    the server IP.
 * 3. Optional paid provider fallback for emergency reliability.
 *
 * This keeps high-volume traffic on our own low-cost path. Paid APIs should be
 * fallback-only, because per-search pricing gets expensive quickly.
 */

const PROFILE_HTML_USER_AGENT = "undici";
const SERPAPI_PROFILE_URL = "https://serpapi.com/search.json";
const DEFAULT_TIMEOUT_MS = 9000;
const DEFAULT_PROFILE_CACHE_TTL_SECONDS = 86400;
const DEFAULT_PROFILE_STALE_TTL_SECONDS = 604800;

interface OgProfileData {
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

interface ProxyConfig {
  host: string;
  port: number;
  user?: string;
  password?: string;
}

interface RawHttpResponse {
  status: number;
  headers: Record<string, string>;
  body: Buffer;
}

interface ProfileCacheEntry {
  expiresAt: number;
  staleUntil: number;
  response: { ok: boolean; status: number; data: any };
}

const profileCache = new Map<string, ProfileCacheEntry>();

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

function getTimeoutMs(): number {
  const configured = Number(getEnv("INSTAGRAM_FETCH_TIMEOUT_MS"));
  return Number.isFinite(configured) && configured >= 1000
    ? configured
    : DEFAULT_TIMEOUT_MS;
}

function getPositiveNumberEnv(name: string, fallback: number): number {
  const configured = Number(getEnv(name));
  return Number.isFinite(configured) && configured > 0 ? configured : fallback;
}

function getCacheKey(username: string): string {
  return username.toLowerCase();
}

function getCachedProfile(cacheKey: string, allowStale = false) {
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
  response: { ok: boolean; status: number; data: any }
) {
  if (!response.ok) return;

  const ttlMs =
    getPositiveNumberEnv(
      "INSTAGRAM_PROFILE_CACHE_TTL_SECONDS",
      DEFAULT_PROFILE_CACHE_TTL_SECONDS
    ) * 1000;
  const staleMs =
    getPositiveNumberEnv(
      "INSTAGRAM_PROFILE_STALE_TTL_SECONDS",
      DEFAULT_PROFILE_STALE_TTL_SECONDS
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

function readCount(...values: any[]): number {
  for (const value of values) {
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "string") {
      const count = parseCountText(value);
      if (count > 0 || value === "0") return count;
    }
    if (value && typeof value.count === "number") return value.count;
  }
  return 0;
}

function firstString(...values: any[]): string {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
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

function parseProxy(proxyStr: string): ProxyConfig | null {
  const value = proxyStr.trim();
  if (!value) return null;

  if (value.includes("://")) {
    try {
      const url = new URL(value);
      if (!url.hostname || !url.port) return null;
      return {
        host: url.hostname,
        port: Number(url.port),
        user: decodeURIComponent(url.username || ""),
        password: decodeURIComponent(url.password || ""),
      };
    } catch {
      return null;
    }
  }

  const [host, port, user, password] = value.split(":");
  if (!host || !port) return null;

  return {
    host,
    port: Number(port),
    user,
    password,
  };
}

function getProxyList(): ProxyConfig[] {
  const envProxyList = getEnv("INSTAGRAM_PROXY_LIST");
  const entries = envProxyList
    ? envProxyList.split(/[\s,]+/)
    : PROXY_LIST;

  return entries
    .map(parseProxy)
    .filter((proxy): proxy is ProxyConfig => {
      return Boolean(
        proxy &&
          proxy.host &&
          Number.isFinite(proxy.port) &&
          proxy.port > 0
      );
    });
}

function getOrderedProxyList(): ProxyConfig[] {
  const proxies = getProxyList();
  if (proxies.length <= 1) return proxies;

  const startIndex = Math.floor(Math.random() * proxies.length);
  return [...proxies.slice(startIndex), ...proxies.slice(0, startIndex)];
}

function getProxyMaxAttempts(maxRetries: number): number {
  const configured = Number(getEnv("INSTAGRAM_PROXY_MAX_ATTEMPTS"));
  if (Number.isFinite(configured) && configured >= 0) return configured;

  const proxyCount = getProxyList().length;
  return Math.min(proxyCount, Math.max(maxRetries - 1, 6));
}

function findHeaderSeparator(raw: Buffer): number {
  for (let i = 0; i <= raw.length - 4; i++) {
    if (
      raw[i] === 0x0d &&
      raw[i + 1] === 0x0a &&
      raw[i + 2] === 0x0d &&
      raw[i + 3] === 0x0a
    ) {
      return i;
    }
  }
  return -1;
}

function findLineEnd(buffer: Buffer, start: number): number {
  for (let i = start; i <= buffer.length - 2; i++) {
    if (buffer[i] === 0x0d && buffer[i + 1] === 0x0a) return i;
  }
  return -1;
}

function decodeChunkedBody(
  body: Buffer<ArrayBufferLike>
): Buffer<ArrayBufferLike> {
  const chunks: Buffer<ArrayBufferLike>[] = [];
  let offset = 0;

  while (offset < body.length) {
    const lineEnd = findLineEnd(body, offset);
    if (lineEnd === -1) return body;

    const sizeLine = body.subarray(offset, lineEnd).toString("ascii");
    const size = parseInt(sizeLine.split(";")[0].trim(), 16);
    if (!Number.isFinite(size)) return body;
    if (size === 0) break;

    const chunkStart = lineEnd + 2;
    const chunkEnd = chunkStart + size;
    if (chunkEnd > body.length) return body;

    chunks.push(body.subarray(chunkStart, chunkEnd));
    offset = chunkEnd + 2;
  }

  return Buffer.concat(chunks);
}

function parseRawHttpResponse(raw: Buffer): RawHttpResponse {
  const separatorIndex = findHeaderSeparator(raw);
  if (separatorIndex === -1) {
    throw new Error("Invalid HTTP response");
  }

  const headerText = raw.subarray(0, separatorIndex).toString("latin1");
  const lines = headerText.split("\r\n");
  const statusMatch = lines[0]?.match(/HTTP\/\d\.\d\s+(\d+)/);
  const status = statusMatch ? parseInt(statusMatch[1], 10) : 0;
  const headers: Record<string, string> = {};

  for (const line of lines.slice(1)) {
    const splitAt = line.indexOf(":");
    if (splitAt === -1) continue;
    headers[line.slice(0, splitAt).trim().toLowerCase()] = line
      .slice(splitAt + 1)
      .trim();
  }

  let body: Buffer<ArrayBufferLike> = raw.subarray(separatorIndex + 4);
  if (/chunked/i.test(headers["transfer-encoding"] || "")) {
    body = decodeChunkedBody(body);
  }

  return { status, headers, body };
}

async function fetchWithTimeout(
  input: string,
  init: RequestInit = {},
  timeoutMs: number = getTimeoutMs()
): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(input, {
      ...init,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

function proxyAuthHeader(proxy: ProxyConfig): string | undefined {
  if (!proxy.user || !proxy.password) return undefined;
  return `Basic ${Buffer.from(`${proxy.user}:${proxy.password}`).toString(
    "base64"
  )}`;
}

/**
 * Fetch a page through an HTTP proxy using CONNECT tunnel for HTTPS.
 */
function fetchPageViaProxy(
  proxy: ProxyConfig,
  targetHost: string,
  targetPath: string,
  redirectsRemaining = 3
): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const auth = proxyAuthHeader(proxy);
    const headers: Record<string, string> = {
      Host: `${targetHost}:443`,
    };
    if (auth) headers["Proxy-Authorization"] = auth;

    const connectReq = http.request({
      host: proxy.host,
      port: proxy.port,
      method: "CONNECT",
      path: `${targetHost}:443`,
      headers,
      timeout: getTimeoutMs(),
    });

    connectReq.on("connect", (res, socket) => {
      if (res.statusCode !== 200) {
        socket.destroy();
        reject(new Error(`Proxy CONNECT ${res.statusCode || 0}`));
        return;
      }

      const tlsSocket = tls.connect(
        {
          host: targetHost,
          socket,
          servername: targetHost,
        },
        () => {
          const requestData = [
            `GET ${targetPath} HTTP/1.1`,
            `Host: ${targetHost}`,
            `User-Agent: ${PROFILE_HTML_USER_AGENT}`,
            "Accept: */*",
            "Accept-Language: *",
            "Connection: close",
            "",
            "",
          ].join("\r\n");

          tlsSocket.write(requestData);

          const chunks: Buffer[] = [];
          tlsSocket.on("data", (chunk: Buffer) => chunks.push(chunk));
          tlsSocket.on("end", () => {
            tlsSocket.destroy();

            try {
              const parsed = parseRawHttpResponse(Buffer.concat(chunks));

              if (
                parsed.status >= 300 &&
                parsed.status < 400 &&
                parsed.headers.location &&
                redirectsRemaining > 0
              ) {
                const redirect = new URL(
                  parsed.headers.location,
                  `https://${targetHost}${targetPath}`
                );
                if (redirect.hostname !== targetHost) {
                  reject(new Error(`Redirected to ${redirect.hostname}`));
                  return;
                }

                fetchPageViaProxy(
                  proxy,
                  targetHost,
                  redirect.pathname + redirect.search,
                  redirectsRemaining - 1
                )
                  .then(resolve)
                  .catch(reject);
                return;
              }

              resolve({
                status: parsed.status,
                body: parsed.body.toString("utf8"),
              });
            } catch (error) {
              reject(error);
            }
          });
          tlsSocket.on("error", (err) => {
            tlsSocket.destroy();
            reject(err);
          });
        }
      );

      tlsSocket.on("error", (err) => {
        socket.destroy();
        reject(err);
      });
    });

    connectReq.on("error", (err) => reject(err));
    connectReq.on("timeout", () => {
      connectReq.destroy();
      reject(new Error("Proxy CONNECT timed out"));
    });

    connectReq.end();
  });
}

/**
 * Fetch a page directly (no proxy) - works locally and on some residential IPs.
 */
function fetchPageDirect(
  targetHost: string,
  targetPath: string,
  redirectsRemaining = 3
): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: targetHost,
        path: targetPath,
        method: "GET",
        headers: {
          "user-agent": PROFILE_HTML_USER_AGENT,
          accept: "*/*",
          "accept-language": "*",
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
            `https://${targetHost}${targetPath}`
          );
          if (redirect.hostname !== targetHost) {
            reject(new Error(`Redirected to ${redirect.hostname}`));
            return;
          }

          fetchPageDirect(
            targetHost,
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

function parseProfileFromHtml(
  html: string,
  username: string
): OgProfileData | null {
  const imgUrl = getMetaContent(html, "og:image");
  if (!imgUrl) return null;

  const desc = getMetaContent(html, "og:description") || "";
  const title = getMetaContent(html, "og:title") || "";

  const nameMatch = title.match(/^(.+?)\s*\(@/);
  const fullName = nameMatch ? nameMatch[1].trim() : username;

  const followersMatch = desc.match(/([\d,.]+[KMB]?)\s*Followers/i);
  const followingMatch = desc.match(/([\d,.]+[KMB]?)\s*Following/i);
  const postsMatch = desc.match(/([\d,.]+[KMB]?)\s*Posts/i);

  // Signed Instagram CDN URLs break if their size params are modified.
  const hdUrl = imgUrl;
  const sdUrl = imgUrl;

  const isVerified =
    html.includes("is_verified") || title.includes("✓") || title.includes("☑");

  const isPrivate = desc.toLowerCase().includes("private");

  const bioMatch = desc.match(
    /\d+\s*Posts?\s*[-–—]\s*(?:See Instagram photos and videos from .+|(.+))/i
  );
  let biography = "";
  if (bioMatch && bioMatch[1]) {
    biography = bioMatch[1].trim();
  }

  return {
    username,
    full_name: fullName,
    biography,
    followers: parseCountText(followersMatch?.[1] || "0"),
    followees: parseCountText(followingMatch?.[1] || "0"),
    posts_count: parseCountText(postsMatch?.[1] || "0"),
    profile_pic_url: sdUrl,
    profile_pic_url_hd: hdUrl,
    is_verified: isVerified,
    is_private: isPrivate,
    external_url: null,
  };
}

function normalizeProviderProfile(user: any, fallbackUsername: string) {
  if (!user || typeof user !== "object") return null;

  const profilePicUrl = firstString(
    user.serpapi_profile_pic_url,
    user.profile_pic_url,
    user.profilePictureUrl,
    user.profile_picture,
    user.profilePicture,
    user.avatar
  );
  const profilePicUrlHd = firstString(
    user.serpapi_profile_pic_url_hd,
    user.profile_pic_url_hd,
    user.hd_profile_pic_url,
    user.hd_profile_pic_url_info?.url,
    user.profile_picture_hd,
    profilePicUrl
  );

  if (!profilePicUrl && !profilePicUrlHd) return null;

  const username = firstString(user.username, user.handle, fallbackUsername);
  const biography = firstString(
    user.biography_with_entities?.raw_text,
    user.biography,
    user.bio
  );

  return {
    username,
    full_name: firstString(user.full_name, user.fullName, user.name, username),
    biography,
    followers: readCount(
      user.edge_followed_by,
      user.followers,
      user.follower_count,
      user.followers_count
    ),
    followees: readCount(
      user.edge_follow,
      user.following,
      user.following_count,
      user.followees
    ),
    posts_count: readCount(
      user.edge_owner_to_timeline_media,
      user.posts_count,
      user.media_count,
      user.post_count
    ),
    profile_pic_url: profilePicUrl || profilePicUrlHd,
    profile_pic_url_hd: profilePicUrlHd || profilePicUrl,
    is_verified: Boolean(user.is_verified || user.verified),
    is_private: Boolean(user.is_private || user.private),
    external_url: firstString(user.external_url, user.url) || null,
  };
}

async function fetchProfileViaSerpApi(
  username: string
): Promise<OgProfileData> {
  const apiKey = getEnv("SERPAPI_API_KEY");
  if (!apiKey) {
    throw new Error("SERPAPI_API_KEY is not configured");
  }

  const params = new URLSearchParams({
    engine: "instagram_profile",
    profile_id: username,
    api_key: apiKey,
  });

  const response = await fetchWithTimeout(
    `${SERPAPI_PROFILE_URL}?${params.toString()}`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );

  if (response.status === 404) {
    throw new ProfileFetchError("User not found", 404);
  }

  if (!response.ok) {
    throw new Error(`SerpApi HTTP ${response.status}`);
  }

  const payload = await response.json();
  if (payload?.error) {
    throw new Error(`SerpApi error: ${payload.error}`);
  }

  const status = payload?.search_metadata?.status;
  if (status && status !== "Success") {
    throw new Error(`SerpApi status: ${status}`);
  }

  const user = payload?.profile_results;
  const profile = normalizeProviderProfile(user, username);

  if (!profile) {
    throw new Error("SerpApi response did not include a profile image");
  }

  return profile;
}

async function fetchProfileViaInstagramHtml(
  username: string,
  maxRetries: number
): Promise<OgProfileData> {
  const targetHost = "www.instagram.com";
  const targetPath = `/${encodeURIComponent(username)}/`;
  let lastError: Error | null = null;

  try {
    console.log(`[Instagram] Native attempt: @${username} (proxy=false)`);
    const { status, body } = await fetchPageDirect(targetHost, targetPath);

    if (status === 404 || body.includes("Sorry, this page isn't available")) {
      throw new ProfileFetchError("User not found", 404);
    }

    if (status !== 200) {
      throw new Error(`HTTP ${status}`);
    }

    const profileData = parseProfileFromHtml(body, username);
    if (profileData) return profileData;

    throw new Error("Failed to parse profile from Instagram HTML");
  } catch (error) {
    if (error instanceof ProfileFetchError && error.status === 404) {
      throw error;
    }
    lastError = error instanceof Error ? error : new Error(String(error));
    console.warn(`[Instagram] Native attempt failed: ${lastError.message}`);
  }

  const proxyAttempts = getOrderedProxyList().slice(
    0,
    getProxyMaxAttempts(maxRetries)
  );

  for (let index = 0; index < proxyAttempts.length; index++) {
    const proxy = proxyAttempts[index];
    try {
      console.log(
        `[Instagram] Proxy attempt ${index + 1}/${proxyAttempts.length}: @${username}`
      );

      const { status, body } = await fetchPageViaProxy(
        proxy,
        targetHost,
        targetPath
      );

      if (status === 404 || body.includes("Sorry, this page isn't available")) {
        throw new ProfileFetchError("User not found", 404);
      }

      if (status !== 200) {
        throw new Error(`HTTP ${status}`);
      }

      const profileData = parseProfileFromHtml(body, username);
      if (!profileData) {
        throw new Error("Failed to parse profile from Instagram HTML");
      }

      return profileData;
    } catch (error) {
      if (error instanceof ProfileFetchError && error.status === 404) {
        throw error;
      }
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(
        `[Instagram] Proxy attempt ${index + 1} failed: ${lastError.message}`
      );
    }
  }

  throw lastError || new Error("All Instagram profile attempts failed");
}

function buildInstagramApiResponse(profile: OgProfileData) {
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
  url: string,
  _headers: Record<string, string>,
  maxRetries: number = 8
): Promise<{ ok: boolean; status: number; data: any }> {
  const usernameMatch = url.match(/username=([^&]+)/);
  const username = usernameMatch ? decodeURIComponent(usernameMatch[1]) : null;

  if (!username) {
    return { ok: false, status: 400, data: { error: "No username provided" } };
  }

  const cacheKey = getCacheKey(username);
  const freshCached = getCachedProfile(cacheKey);
  if (freshCached) {
    console.log(`[Instagram] Cache hit: @${username}`);
    return freshCached;
  }

  const providerAttempts: Array<{
    name: string;
    enabled: boolean;
    fetchProfile: () => Promise<OgProfileData>;
  }> = [
    {
      name: "instagram-html",
      enabled: true,
      fetchProfile: () => fetchProfileViaInstagramHtml(username, maxRetries),
    },
    {
      name: "serpapi",
      enabled: Boolean(getEnv("SERPAPI_API_KEY")),
      fetchProfile: () => fetchProfileViaSerpApi(username),
    },
  ];

  let lastError: Error | null = null;

  for (const attempt of providerAttempts) {
    if (!attempt.enabled) continue;

    try {
      const profileData = await attempt.fetchProfile();
      console.log(
        `[Instagram] Success via ${attempt.name}: @${profileData.username}`
      );

      const response = {
        ok: true,
        status: 200,
        data: buildInstagramApiResponse(profileData),
      };
      setCachedProfile(cacheKey, response);
      return response;
    } catch (error) {
      if (error instanceof ProfileFetchError && error.status === 404) {
        return {
          ok: false,
          status: 404,
          data: { error: "User not found" },
        };
      }

      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(
        `[Instagram] ${attempt.name} failed for @${username}: ${lastError.message}`
      );
    }
  }

  const staleCached = getCachedProfile(cacheKey, true);
  if (staleCached) {
    console.warn(`[Instagram] Serving stale cache for @${username}`);
    return staleCached;
  }

  return {
    ok: false,
    status: 502,
    data: {
      error:
        lastError?.message ||
        "Failed to fetch Instagram profile from all configured providers",
    },
  };
}
