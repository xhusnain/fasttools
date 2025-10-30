import { NextResponse } from "next/server";
import { removeBackground, loadU2NetSession } from "@/lib/server/u2net";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    // Ensure model session is ready before reading the image
    await loadU2NetSession();

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json({ error: "Expected multipart/form-data with field 'image'" }, { status: 400 });
    }

    const form = await req.formData();
    const file = form.get("image");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Missing 'image' file" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuffer);

    const url = new URL(req.url);
    const refine = url.searchParams.get("refine");
    const strength = url.searchParams.get("strength");
    const output = await removeBackground(inputBuffer, { refineWithDepth: refine === "depth", strength: (strength as any) || undefined });
    return new NextResponse(output, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    // Temporary diagnostics
    console.error("/api/bg-remover error:", err);
    // Return plaintext for easier client-side surfacing
    return new NextResponse(message, { status: 500, headers: { "Content-Type": "text/plain" } });
  }
}


