import { NextRequest, NextResponse } from "next/server"

const SEARCH_PLACEHOLDER = "{search_term_string}"

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone()

    if (url.pathname === "/" && url.searchParams.get("q") === SEARCH_PLACEHOLDER) {
        url.searchParams.delete("q")
        return NextResponse.rewrite(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
