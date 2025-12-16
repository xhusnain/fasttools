import React from 'react';

export const GTable = (props: React.TableHTMLAttributes<HTMLTableElement>) => {
    return (
        <div className="w-full overflow-x-auto my-8 rounded-lg border border-white/10">
            <table className="w-full text-left bg-zinc-900/50" {...props} />
        </div>
    );
};
