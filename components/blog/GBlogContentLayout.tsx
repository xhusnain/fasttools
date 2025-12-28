import React from 'react';

interface BlogContentLayoutProps {
    children: React.ReactNode;
    footer?: React.ReactNode;
}

export const GBlogContentLayout = ({ children, footer }: BlogContentLayoutProps) => {
    return (
        <div className="w-full py-12 md:py-20 px-6">
            <div className="blog-content max-w-none">
                {children}
            </div>
            {footer}
        </div>
    );
};