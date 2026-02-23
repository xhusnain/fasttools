import { NextRequest, NextResponse } from "next/server"

const APEX_HOST = "fasttools.store"
const CANONICAL_HOST = "www.fasttools.store"
const SEARCH_PLACEHOLDER = "{search_term_string}"

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone()
    const forwardedHost = request.headers.get("x-forwarded-host")
    const hostHeader = (forwardedHost ?? request.headers.get("host") ?? url.hostname)
        .split(",")[0]
        .trim()
    const requestedHost = hostHeader.split(":")[0].toLowerCase()
    let shouldRedirect = false

    if (requestedHost === APEX_HOST) {
        url.hostname = CANONICAL_HOST
        shouldRedirect = true
    }

    if (url.pathname === "/" && url.searchParams.get("q") === SEARCH_PLACEHOLDER) {
        url.searchParams.delete("q")
        shouldRedirect = true
    }

    if (shouldRedirect) {
        return NextResponse.redirect(url, 308)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
