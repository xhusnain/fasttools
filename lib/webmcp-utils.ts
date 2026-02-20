import { toolSchemas, type InteractionMode } from "@/lib/webmcp-tool-schemas"

/**
 * Looks up the interaction mode for a tool path from the schema registry.
 * Returns "auto" for tools not explicitly registered (client-side detection).
 */
export function getInteractionMode(path?: string): InteractionMode | "auto" {
    if (!path) return "auto"
    return toolSchemas[path]?.interactionMode ?? "auto"
}

/**
 * Builds a concise, AI-readable description for WebMCP tool registration.
 * Truncates to ~200 chars and extracts plain text from overview content.
 */
export function buildWebMCPDescription(
    toolName: string,
    overview: string | React.ReactNode,
    features?: (string | { title: string; description: string })[]
): string {
    // Extract plain text from overview (ReactNode falls back to tool name)
    const overviewText =
        typeof overview === "string" ? overview : ""

    // Take first 200 chars for a crisp summary
    const summary =
        overviewText.length > 200
            ? overviewText.slice(0, 197) + "..."
            : overviewText

    // Extract top feature names for structured context
    const featureNames = (features || [])
        .slice(0, 5)
        .map((f) => (typeof f === "string" ? f : f.title))
        .join(", ")

    const parts = [`${toolName}: ${summary || "Free online tool from FastTools"}`]
    if (featureNames) {
        parts.push(`Features: ${featureNames}`)
    }

    return parts.join(". ")
}
