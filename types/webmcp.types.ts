// WebMCP (Web Model Context Protocol) type declarations
// W3C standard co-developed by Google & Microsoft — Chrome 146+
// Spec: https://webmcp.link/

export interface WebMCPToolSchema {
    type: "object"
    properties?: Record<
        string,
        {
            type: string
            enum?: string[]
            description?: string
        }
    >
    required?: string[]
}

export interface WebMCPTool {
    name: string
    description: string
    inputSchema?: WebMCPToolSchema
    handler: (input?: Record<string, unknown>) => Promise<unknown>
}

export interface ModelContext {
    registerTool(tool: WebMCPTool): void
    unregisterTool(name: string): void
}

// ── Catalog types for /api/webmcp/tools ──────────────────────────

export interface WebMCPToolCatalogEntry {
    name: string
    displayName: string
    description: string
    path: string
    url: string
    category: string
    interactionMode: string
    inputSchema?: Record<string, {
        type: string
        label: string
        description?: string
        required?: boolean
        options?: string[]
        placeholder?: string
        defaultValue?: string
    }>
}

export interface WebMCPToolCatalogResponse {
    provider: string
    version: string
    totalTools: number
    instructions: string
    tools: WebMCPToolCatalogEntry[]
}

declare global {
    interface Navigator {
        modelContext?: ModelContext
    }
}
