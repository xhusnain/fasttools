import { NextResponse } from "next/server"

// Block common WordPress / bot probe paths with a fast 404.
//
// IMPORTANT: the matcher below is scoped to these probe patterns ONLY. Content pages
// are intentionally NOT matched by middleware, because Next.js forces
// `Cache-Control: no-store` on every middleware-matched route — which would block CDN
// caching of our static (prerendered) pages and slow down crawling/indexing.
//
// noindex enforcement was moved to <meta robots> in lib/metadata-base.ts (createMetadata),
// which Google honors identically and keeps the pages cacheable.
export function proxy() {
    return new NextResponse(null, { status: 404 })
}

export const config = {
    matcher: [
        "/wp-admin/:path*",
        "/wp-includes/:path*",
        "/wp-content/:path*",
        "/wp-login.php",
        "/xmlrpc.php",
    ],
}
