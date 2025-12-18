import React from 'react';

export const GTable = (props: React.TableHTMLAttributes<HTMLTableElement>) => {
    return (
        <div className="w-full overflow-x-auto my-8 rounded-lg border border-border">
            <table className="w-full text-left bg-muted/30" {...props} />
        </div>
    );
};
