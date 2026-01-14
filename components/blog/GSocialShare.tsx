'use client';

import React, { useEffect, useState } from 'react';
import { FiLink, FiCheck } from 'react-icons/fi';

interface SocialShareProps {
    title: string;
    slug: string;
    basePath?: string;
}

export const GSocialShare = ({ title, slug, basePath = '/blog/' }: SocialShareProps) => {
    const [shareUrl, setShareUrl] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const cleanSlug = slug.replace(/^\/+/, '');
            const cleanBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;
            setShareUrl(`${window.location.origin}${cleanBasePath}${cleanSlug}`);
        }
    }, [slug, basePath]);

    const handleCopy = async () => {
        if (!shareUrl) return;
        try {
            await navigator.clipboard.writeText(shareUrl);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

    if (!shareUrl) return null; // Avoid hydration mismatch or empty links

    return (
        <div className="flex gap-4">
            <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Share on Twitter"
            >
                Twitter
            </a>
            <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Share on LinkedIn"
            >
                LinkedIn
            </a>
            <button
                onClick={handleCopy}
                className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                aria-label="Copy Link"
            >
                {isCopied ? <FiCheck className="text-green-400" /> : <FiLink />}
                {isCopied && <span className="text-xs text-green-400">Copied!</span>}
            </button>
        </div>
    );
};