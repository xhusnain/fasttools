import React from 'react';

interface BlogContentLayoutProps {
    children: React.ReactNode;
    footer?: React.ReactNode;
}

export const GBlogContentLayout = ({ children, footer }: BlogContentLayoutProps) => {
    return (
        <div className="w-full py-12 md:py-20 px-6">
            <div className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-hotpink hover:prose-a:text-hotpink/80 prose-img:rounded-2xl prose-img:border prose-img:border-white/10">
                {children}
            </div>
            {footer}
        </div>
    );
};