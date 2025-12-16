import React from 'react';
import { Check } from 'lucide-react';

interface GChecklistProps {
    items: string[];
}

export const GChecklist = ({ items }: GChecklistProps) => {
    return (
        <div className="my-8 space-y-3">
            {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-green-500/20 text-green-500">
                        <Check className="w-3 h-3" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                </div>
            ))}
        </div>
    );
};
