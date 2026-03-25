import { NextRequest, NextResponse } from "next/server";
import { fetchInstagramProfile } from "@/lib/proxy-manager";

const INSTAGRAM_API_URL = "https://www.instagram.com/api/v1/users/web_profile_info/";

const INSTAGRAM_HEADERS: Record<string, string> = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  accept: "*/*",
  "accept-language": "en-US,en;q=0.9",
  "x-ig-app-id": "936619743392459",
  "x-asbd-id": "129477",
  "x-ig-www-claim": "0",
  "x-requested-with": "XMLHttpRequest",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  referer: "https://www.instagram.com/",
  origin: "https://www.instagram.com",
};

function extractUsername(input: string): string | null {
  if (!input) return null;

  const urlPattern = /(?:instagram\.com|instagr\.am)\/([a-zA-Z0-9._]+)/;
  const match = input.match(urlPattern);
  if (match && match[1]) {
    return match[1];
  }

  if (/^@?[a-zA-Z0-9._]+$/.test(input)) {
    return input.replace(/^@/, "");
  }

  return null;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const urlParam = searchParams.get("url");
  const usernameParam = searchParams.get("username");

  const input = usernameParam || urlParam;
  if (!input) {
    return NextResponse.json(
      { error: "Please provide a username or url parameter" },
      { status: 400 }
    );
  }

  const username = extractUsername(input);
  if (!username) {
    return NextResponse.json(
      { error: "Invalid username or URL provided" },
      { status: 400 }
    );
  }

  try {
    const url = `${INSTAGRAM_API_URL}?username=${encodeURIComponent(username)}`;
    const { ok, status, data } = await fetchInstagramProfile(url, INSTAGRAM_HEADERS, 5);

    if (!ok) {
      if (status === 404) {
        return NextResponse.json(
          { error: "User not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: `Failed to fetch profile (status ${status})` },
        { status }
      );
    }

    const user = data?.data?.user;

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      platform: "Instagram",
      data: {
        username: user.username,
        full_name: user.full_name,
        biography: user.biography,
        followers: user.edge_followed_by?.count ?? 0,
        followees: user.edge_follow?.count ?? 0,
        posts_count: user.edge_owner_to_timeline_media?.count ?? 0,
        profile_pic_url: user.profile_pic_url,
        profile_pic_url_hd: user.profile_pic_url_hd,
        is_verified: user.is_verified,
        is_private: user.is_private,
        external_url: user.external_url,
      },
    });
  } catch (error) {
    console.error("Instagram profile fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Instagram profile. Please try again." },
      { status: 500 }
    );
  }
}
