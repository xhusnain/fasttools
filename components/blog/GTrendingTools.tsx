import Link from 'next/link';
import { searchItems } from '@/lib/search-data';

interface GTrendingToolsProps {
    toolNames?: string[];
    seed?: string; // Use slug as seed for deterministic randomness
    title?: string;
    className?: string;
    count?: number;
}

export function GTrendingTools({
    toolNames,
    seed,
    title = "Trending Tools",
    className = "",
    count = 10
}: GTrendingToolsProps) {

    let displayTools;

    if (toolNames && toolNames.length > 0) {
        // Mode 1: Specific tools requested
        const matchedTools = toolNames.map(name => {
            const exact = searchItems.find(item => item.name.toLowerCase() === name.toLowerCase());
            if (exact) return exact;
            return searchItems.find(item => item.name.toLowerCase().includes(name.toLowerCase()));
        }).filter(Boolean);

        displayTools = Array.from(new Set(matchedTools.map(t => t?.path)))
            .map(path => matchedTools.find(t => t?.path === path)!);

    } else {
        // Mode 2: Deterministic random based on seed
        // Filter only actual tools (exclude "Pages" category)
        const allTools = searchItems.filter(item =>
            item.category !== 'Pages' &&
            item.path.split('/').length > 2 // simplistic check for tool paths
        );

        if (seed) {
            // Simple deterministic shuffle using seed
            const shuffled = [...allTools].sort((a, b) => {
                const hashA = (a.name + seed).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                const hashB = (b.name + seed).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                return (hashA % 100) - (hashB % 100);
            });
            displayTools = shuffled.slice(0, count);
        } else {
            // Fallback if no seed (just take first N, or randomize on client if we wanted)
            // Sticking to static for Server Components to avoid hydration error
            displayTools = allTools.slice(0, count);
        }
    }

    if (!displayTools || displayTools.length === 0) return null;

    return (
        <div className={`bg-white/[0.02] border border-white/10 rounded-lg p-4 ${className}`}>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-hotpink animate-pulse" />
                {title}
            </h3>

            <div className="flex flex-col gap-2.5">
                {displayTools.map((tool) => (
                    <Link
                        key={tool.path}
                        href={tool.path}
                        className="group flex flex-col gap-1 p-3 -mx-3 rounded-md hover:bg-white/5 transition-colors"
                    >
                        <span className="text-sm font-bold text-foreground group-hover:text-hotpink transition-colors">
                            {tool.name}
                        </span>
                        <span className="text-xs text-muted-foreground line-clamp-2">
                            {tool.description}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
