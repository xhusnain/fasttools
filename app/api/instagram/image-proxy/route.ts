import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const IMAGE_ACCEPT = "image/avif,image/webp,image/apng,image/*,*/*;q=0.8";

function isAllowedImageUrl(imageUrl: string): boolean {
  try {
    const url = new URL(imageUrl);
    if (url.protocol !== "https:") return false;

    const host = url.hostname.toLowerCase();
    return (
      host.startsWith("scontent") ||
      host === "cdninstagram.com" ||
      host.endsWith(".cdninstagram.com") ||
      host === "instagram.com" ||
      host.endsWith(".instagram.com")
    );
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json(
      { error: "Missing url parameter" },
      { status: 400 }
    );
  }

  if (!isAllowedImageUrl(imageUrl)) {
    return NextResponse.json(
      { error: "Invalid image URL" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(imageUrl, {
      headers: { "User-Agent": USER_AGENT, Accept: IMAGE_ACCEPT },
    });

    if (response.status !== 200) {
      return NextResponse.json(
        { error: "Failed to proxy image" },
        { status: 502 }
      );
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    if (buffer.length <= 100) {
      return NextResponse.json(
        { error: "Failed to proxy image" },
        { status: 502 }
      );
    }

    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": response.headers.get("content-type") || "image/jpeg",
        "Cache-Control":
          "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to proxy image" },
      { status: 502 }
    );
  }
}
