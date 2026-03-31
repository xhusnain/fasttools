import { NextRequest, NextResponse } from "next/server"
import { noindexPaths } from "@/lib/noindex"

const SEARCH_PLACEHOLDER = "{search_term_string}"
const noindexSet = new Set(noindexPaths.map((p) => p.toLowerCase()))

export function proxy(request: NextRequest) {
    const { pathname, searchParams } = request.nextUrl

    // Handle Google Sitelinks Searchbox placeholder
    if (pathname === "/" && searchParams.get("q") === SEARCH_PLACEHOLDER) {
        const url = request.nextUrl.clone()
        url.searchParams.delete("q")
        return NextResponse.rewrite(url)
    }

    // Block common bot/attack paths early
    if (
        pathname.startsWith("/wp-") ||
        pathname.startsWith("/xmlrpc") ||
        pathname.endsWith(".php") ||
        pathname.endsWith(".env")
    ) {
        return new NextResponse(null, { status: 404 })
    }

    const response = NextResponse.next()

    // Set noindex header for dead/low-value pages
    if (noindexSet.has(pathname.toLowerCase())) {
        response.headers.set("X-Robots-Tag", "noindex, nofollow")
    }

    return response
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|manifest.webmanifest|robots.txt|sitemap.xml).*)"],
}
