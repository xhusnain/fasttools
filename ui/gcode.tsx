import React from 'react';

export const GCode = (props: React.HTMLAttributes<HTMLPreElement>) => {
    return (
        <pre className="p-4 rounded-lg bg-zinc-900 border border-white/10 overflow-x-auto my-6" {...props} />
    );
};
