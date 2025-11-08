import { NextResponse } from "next/server";
import { blurBackground, loadU2NetSession } from "@/lib/server/u2net";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    void loadU2NetSession();

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json({ error: "Expected multipart/form-data with fields 'image' and optional 'intensity'" }, { status: 400 });
    }

    const form = await req.formData();
    const file = form.get("image");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Missing 'image' file" }, { status: 400 });
    }

    const intensityRaw = form.get("intensity");
    let sigma = 10;
    if (typeof intensityRaw === "string") {
      const parsed = Number(intensityRaw);
      if (!Number.isNaN(parsed) && parsed > 0) sigma = Math.min(Math.max(parsed, 1), 50);
    }

    const arrayBuffer = await file.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuffer);

    const url = new URL(req.url);
    const refine = url.searchParams.get("refine");
    const strength = url.searchParams.get("strength");
    const output = await blurBackground(inputBuffer, sigma, { refineWithDepth: refine === "depth", strength: (strength as any) || undefined });
    return new NextResponse(output, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


