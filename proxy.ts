import { NextRequest, NextResponse } from "next/server"
import { noindexPaths } from "@/lib/noindex"

const SEARCH_PLACEHOLDER = "{search_term_string}"
const noindexSet = new Set(noindexPaths.map((p) => p.toLowerCase()))

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone()

    if (url.pathname === "/" && url.searchParams.get("q") === SEARCH_PLACEHOLDER) {
        url.searchParams.delete("q")
        return NextResponse.rewrite(url)
    }

    const response = NextResponse.next()

    if (noindexSet.has(url.pathname.toLowerCase())) {
        response.headers.set("X-Robots-Tag", "noindex, nofollow")
    }

    return response
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
