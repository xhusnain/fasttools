import https from "https";

/**
 * Fetches Instagram profile data by scraping the profile page using Googlebot UA.
 * Instagram serves full og:meta tags to Googlebot, which includes the profile picture,
 * follower counts, and profile name — without requiring login or cookies.
 *
 * This is more reliable than the private API which now requires authentication.
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

function fetchPage(urlPath: string): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "www.instagram.com",
        path: urlPath,
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
        // Follow redirects (max 2)
        if (
          (res.statusCode === 301 || res.statusCode === 302) &&
          res.headers.location
        ) {
          const redirectPath = res.headers.location.startsWith("http")
            ? new URL(res.headers.location).pathname
            : res.headers.location;
          fetchPage(redirectPath).then(resolve).catch(reject);
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
  // Extract og:image
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

  // Parse name from title: "Name (@username) • Instagram photos and videos"
  const nameMatch = title.match(/^(.+?)\s*\(@/);
  const fullName = nameMatch ? nameMatch[1].trim() : username;

  // Parse counts from description: "701M Followers, 226 Following, 8,378 Posts"
  const followersMatch = desc.match(/([\d,.]+[KMB]?)\s*Followers/i);
  const followingMatch = desc.match(/([\d,.]+[KMB]?)\s*Following/i);
  const postsMatch = desc.match(/([\d,.]+[KMB]?)\s*Posts/i);

  // Build HD and SD URLs by modifying the size parameter
  const hdUrl = imgUrl.replace(/s\d+x\d+/, "s1080x1080");
  const sdUrl = imgUrl.replace(/s\d+x\d+/, "s320x320");

  // Check for verified badge (blue checkmark in title)
  const isVerified =
    html.includes("is_verified") ||
    title.includes("✓") ||
    title.includes("☑");

  // Check if private from description
  const isPrivate = desc.toLowerCase().includes("private");

  // Try to extract biography from description
  // Format: "COUNT Followers, COUNT Following, COUNT Posts - BIOGRAPHY_TEXT"
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
  maxRetries: number = 3
): Promise<{ ok: boolean; status: number; data: any }> {
  // Extract username from the API URL
  const usernameMatch = url.match(/username=([^&]+)/);
  const username = usernameMatch ? decodeURIComponent(usernameMatch[1]) : null;

  if (!username) {
    return { ok: false, status: 400, data: { error: "No username provided" } };
  }

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(
        `[Instagram] Attempt ${attempt}: Fetching profile page for @${username}`
      );

      const { status, body } = await fetchPage(`/${username}/`);

      if (status === 404 || body.includes("Sorry, this page isn't available")) {
        return {
          ok: false,
          status: 404,
          data: { error: "User not found" },
        };
      }

      if (status !== 200) {
        console.warn(
          `[Instagram] Attempt ${attempt}: Got status ${status}, retrying...`
        );
        lastError = new Error(`HTTP ${status}`);
        continue;
      }

      const profileData = parseProfileFromHtml(body, username);

      if (!profileData) {
        console.warn(
          `[Instagram] Attempt ${attempt}: Could not parse profile from HTML, retrying...`
        );
        lastError = new Error("Failed to parse profile data from HTML");
        continue;
      }

      console.log(
        `[Instagram] Success: @${username} — ${profileData.full_name}, ${profileData.followers} followers`
      );

      // Return in the same format as the old API for compatibility
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
              edge_owner_to_timeline_media: {
                count: profileData.posts_count,
              },
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
        `[Instagram] Attempt ${attempt} failed: ${lastError.message}`
      );
    }
  }

  throw lastError || new Error("All attempts failed");
}
