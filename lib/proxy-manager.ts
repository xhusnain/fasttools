import http from "http";
import https from "https";
import tls from "tls";
import { PROXY_LIST } from "./proxies";

/**
 * Fetches Instagram profile data by scraping the profile page with Googlebot UA.
 * Uses Webshare residential proxies so Instagram sees a real IP (not datacenter).
 * On Cloud Run, datacenter IPs get blocked — proxies solve this.
 */

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
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(parseInt(dec, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function getRandomProxy() {
  const proxyStr = PROXY_LIST[Math.floor(Math.random() * PROXY_LIST.length)];
  const [host, port, user, password] = proxyStr.split(":");
  return { host, port: parseInt(port, 10), user, password };
}

/**
 * Fetch a page through a Webshare HTTP proxy using CONNECT tunnel for HTTPS.
 */
function fetchPageViaProxy(
  targetHost: string,
  targetPath: string
): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const proxy = getRandomProxy();
    const auth = Buffer.from(`${proxy.user}:${proxy.password}`).toString("base64");

    const connectReq = http.request({
      host: proxy.host,
      port: proxy.port,
      method: "CONNECT",
      path: `${targetHost}:443`,
      headers: {
        Host: `${targetHost}:443`,
        "Proxy-Authorization": `Basic ${auth}`,
      },
      timeout: 12000,
    });

    connectReq.on("connect", (_res, socket) => {
      // Upgrade to TLS through the proxy tunnel
      const tlsSocket = tls.connect(
        {
          host: targetHost,
          socket: socket,
          servername: targetHost,
        },
        () => {
          // Now make the HTTP request over TLS
          const requestData = [
            `GET ${targetPath} HTTP/1.1`,
            `Host: ${targetHost}`,
            `User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)`,
            `Accept: text/html`,
            `Accept-Language: en-US,en;q=0.9`,
            `Connection: close`,
            ``,
            ``,
          ].join("\r\n");

          tlsSocket.write(requestData);

          let rawResponse = "";
          tlsSocket.on("data", (chunk: Buffer) => {
            rawResponse += chunk.toString();
          });

          tlsSocket.on("end", () => {
            tlsSocket.destroy();
            // Parse HTTP response
            const headerEnd = rawResponse.indexOf("\r\n\r\n");
            if (headerEnd === -1) {
              reject(new Error("Invalid HTTP response from proxy"));
              return;
            }
            const headerPart = rawResponse.substring(0, headerEnd);
            const body = rawResponse.substring(headerEnd + 4);
            const statusMatch = headerPart.match(/HTTP\/\d\.\d (\d+)/);
            const status = statusMatch ? parseInt(statusMatch[1], 10) : 0;

            // Handle redirects
            if ((status === 301 || status === 302)) {
              const locMatch = headerPart.match(/Location:\s*(.+)/i);
              if (locMatch) {
                const loc = locMatch[1].trim();
                const redirectPath = loc.startsWith("http")
                  ? new URL(loc).pathname
                  : loc;
                fetchPageViaProxy(targetHost, redirectPath)
                  .then(resolve)
                  .catch(reject);
                return;
              }
            }

            resolve({ status, body });
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
 * Fetch a page directly (no proxy) — works locally / residential IPs.
 */
function fetchPageDirect(
  targetHost: string,
  targetPath: string
): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: targetHost,
        path: targetPath,
        method: "GET",
        headers: {
          "user-agent":
            "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
          accept: "text/html",
          "accept-language": "en-US,en;q=0.9",
        },
        timeout: 10000,
      },
      (res) => {
        if (
          (res.statusCode === 301 || res.statusCode === 302) &&
          res.headers.location
        ) {
          const redirectPath = res.headers.location.startsWith("http")
            ? new URL(res.headers.location).pathname
            : res.headers.location;
          fetchPageDirect(targetHost, redirectPath)
            .then(resolve)
            .catch(reject);
          return;
        }

        let data = "";
        res.on("data", (chunk: Buffer) => (data += chunk.toString()));
        res.on("end", () =>
          resolve({ status: res.statusCode || 0, body: data })
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
  const ogImage = html.match(
    /<meta[^>]*property="og:image"[^>]*content="([^"]+)"/
  );
  if (!ogImage) return null;

  const ogTitle = html.match(
    /<meta[^>]*property="og:title"[^>]*content="([^"]+)"/
  );
  const ogDesc = html.match(
    /<meta[^>]*property="og:description"[^>]*content="([^"]+)"/
  );

  const imgUrl = decodeHtmlEntities(ogImage[1]);
  const desc = ogDesc ? decodeHtmlEntities(ogDesc[1]) : "";
  const title = ogTitle ? decodeHtmlEntities(ogTitle[1]) : "";

  const nameMatch = title.match(/^(.+?)\s*\(@/);
  const fullName = nameMatch ? nameMatch[1].trim() : username;

  const followersMatch = desc.match(/([\d,.]+[KMB]?)\s*Followers/i);
  const followingMatch = desc.match(/([\d,.]+[KMB]?)\s*Following/i);
  const postsMatch = desc.match(/([\d,.]+[KMB]?)\s*Posts/i);

  // Instagram CDN URLs have signed auth tokens — modifying the stp size param
  // (e.g. s100x100 → s1080x1080) invalidates the signature and returns 403.
  // We use the original URL as-is from og:image. Both HD and SD point to the
  // same signed URL — the component scales it up via CSS for display.
  const hdUrl = imgUrl;
  const sdUrl = imgUrl;

  const isVerified =
    html.includes("is_verified") ||
    title.includes("✓") ||
    title.includes("☑");

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

export async function fetchInstagramProfile(
  url: string,
  _headers: Record<string, string>,
  maxRetries: number = 4
): Promise<{ ok: boolean; status: number; data: any }> {
  const usernameMatch = url.match(/username=([^&]+)/);
  const username = usernameMatch ? decodeURIComponent(usernameMatch[1]) : null;

  if (!username) {
    return { ok: false, status: 400, data: { error: "No username provided" } };
  }

  let lastError: Error | null = null;
  const targetPath = `/${username}/`;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    // Attempt 1: direct (works locally). Attempts 2+: via proxy (for Cloud Run).
    const useProxy = attempt > 1;

    try {
      console.log(
        `[Instagram] Attempt ${attempt}: Fetching @${username} (proxy=${useProxy})`
      );

      const { status, body } = useProxy
        ? await fetchPageViaProxy("www.instagram.com", targetPath)
        : await fetchPageDirect("www.instagram.com", targetPath);

      if (status === 404 || body.includes("Sorry, this page isn't available")) {
        return { ok: false, status: 404, data: { error: "User not found" } };
      }

      if (status !== 200) {
        console.warn(`[Instagram] Attempt ${attempt}: status ${status}`);
        lastError = new Error(`HTTP ${status}`);
        continue;
      }

      const profileData = parseProfileFromHtml(body, username);

      if (!profileData) {
        console.warn(`[Instagram] Attempt ${attempt}: Could not parse og:meta from HTML`);
        lastError = new Error("Failed to parse profile from HTML");
        continue;
      }

      console.log(
        `[Instagram] Success: @${username} — ${profileData.full_name}, ${profileData.followers} followers (proxy=${useProxy})`
      );

      return {
        ok: true,
        status: 200,
        data: {
          data: {
            user: {
              username: profileData.username,
              full_name: profileData.full_name,
              biography: profileData.biography,
              edge_followed_by: { count: profileData.followers },
              edge_follow: { count: profileData.followees },
              edge_owner_to_timeline_media: { count: profileData.posts_count },
              profile_pic_url: profileData.profile_pic_url,
              profile_pic_url_hd: profileData.profile_pic_url_hd,
              is_verified: profileData.is_verified,
              is_private: profileData.is_private,
              external_url: profileData.external_url,
            },
          },
        },
      };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(
        `[Instagram] Attempt ${attempt} failed (proxy=${useProxy}): ${lastError.message}`
      );
    }
  }

  throw lastError || new Error("All attempts failed");
}
