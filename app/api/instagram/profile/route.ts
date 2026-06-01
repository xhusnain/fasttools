import { NextRequest, NextResponse } from "next/server";
import { fetchInstagramProfile } from "@/lib/instagram-profile";

// Force per-request execution. Without this, Next 16 prerenders the GET
// handler at build time and Netlify serves the static result — every query
// returns whatever username happened to hit it during build.
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

// Disable caching at every layer. Long-lived edge caching was returning the
// wrong user's data on Netlify (the same Usha Singh response for any query).
// The in-memory cache in lib/instagram-profile.ts still provides fast repeat
// lookups within a hot Node container — no need to also cache at the edge.
const NO_CACHE_HEADERS = {
  "Cache-Control": "private, no-store, max-age=0, must-revalidate",
  "CDN-Cache-Control": "no-store",
  "Netlify-CDN-Cache-Control": "no-store",
} as const;

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
  const input = searchParams.get("username") || searchParams.get("url");

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
    const { ok, status, data } = await fetchInstagramProfile(username);

    if (!ok) {
      if (status === 404) {
        return NextResponse.json(
          { error: "User not found" },
          { status: 404, headers: NO_CACHE_HEADERS }
        );
      }
      return NextResponse.json(
        { error: data?.error || `Failed to fetch profile (status ${status})` },
        { status }
      );
    }

    const user = data?.data?.user;

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404, headers: NO_CACHE_HEADERS }
      );
    }

    return NextResponse.json(
      {
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
      },
      { headers: NO_CACHE_HEADERS }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Instagram profile. Please try again." },
      { status: 500 }
    );
  }
}
