import { GLoader } from "@/ui/gloader"

interface ToolLoaderProps {
    toolName?: string
    description?: string
}

export function ToolLoader({ toolName, description }: ToolLoaderProps = {}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-4 bg-card rounded-lg border border-dashed border-border">
            <GLoader size="lg" />
            <div className="text-center space-y-2 px-4">
                <p className="text-muted-foreground animate-pulse font-medium">
                    {toolName ? `Loading ${toolName}...` : "Loading Tool..."}
                </p>
                {description && (
                    <p className="text-sm text-muted-foreground max-w-md">
                        {description}
                    </p>
                )}
            </div>
            <noscript>
                <div className="text-center space-y-2 p-6 max-w-lg">
                    <p className="text-foreground font-semibold">
                        {toolName || "This tool"} requires JavaScript to run.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Please enable JavaScript in your browser to use this free online tool.
                    </p>
                </div>
            </noscript>
        </div>
    )
}
