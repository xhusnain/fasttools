import React from 'react';
import { Check } from 'lucide-react';

interface GChecklistProps {
    items: string[];
}

export const GChecklist = ({ items, children }: { items?: string[], children?: React.ReactNode }) => {
    if (children) {
        return (
            <div className="my-8 space-y-3 [&_ul]:space-y-3 [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:text-muted-foreground [&_strong]:text-foreground">
                {/* We use a crude CSS-like replacement for the icon by using marker or before, 
                    but since we can't easily inject the Lucide icon into the LI without parsing, 
                    we'll style the list-none and add the custom marker via CSS or suggest ensuring 'items' prop is used.
                    Actually, let's try to support the 'items' prop as primary for best visual, 
                    but allow children to render roughly correctly to avoid crashes. 
                */}
                <div className="[&_li]:before:content-['✓'] [&_li]:before:text-green-500 [&_li]:before:font-bold [&_li]:before:mr-2 [&_ul]:list-none [&_li]:list-none">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className="my-8 space-y-3">
            {(items || []).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-green-500/20 text-green-500">
                        <Check className="w-3 h-3" />
                    </div>
                    {/* Render with HTML if needed, or just text */}
                    <span className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                </div>
            ))}
        </div>
    );
};
