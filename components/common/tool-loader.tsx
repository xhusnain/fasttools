import { GLoader } from "@/ui/gloader"

export function ToolLoader() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-4 bg-card/50 rounded-xl border border-dashed border-border/50">
            <GLoader size="lg" />
            <p className="text-muted-foreground animate-pulse font-medium">Loading Tool...</p>
        </div>
    )
}
