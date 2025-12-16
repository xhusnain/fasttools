import { Metadata } from 'next';
import { getPostBySlug, getPostSlugs } from '@/components/blog/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GBlogContentLayout } from '@/components/blog/GBlogContentLayout';

import { GSocialShare } from '@/components/blog/GSocialShare';
import { GJsonLd } from '@/components/blog/GJsonLd';
import { GAuthorBio } from '@/components/blog/GAuthorBio';
import {GImage} from "@/ui/gimage";
import {MDXComponents} from "@/components/blog/mdx-components";

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx?$/, ''),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const { frontMatter } = await getPostBySlug(slug);
        return {
            title: `${frontMatter.title} | Click Fortify`,
            description: frontMatter.description,
            keywords: frontMatter.keywords,
            openGraph: {
                title: frontMatter.title,
                description: frontMatter.description,
                type: 'article',
                publishedTime: frontMatter.date,
                authors: [frontMatter.author || 'Click Fortify Team'],
                images: frontMatter.image
                    ? [`https://www.clickfortify.com${frontMatter.image}`]
                    : [],
                url: `https://www.clickfortify.com/blog/${slug}`,
                siteName: 'Click Fortify',
            },
            twitter: {
                card: 'summary_large_image',
                title: frontMatter.title,
                description: frontMatter.description,
                images: frontMatter.image
                    ? [`https://www.clickfortify.com${frontMatter.image}`]
                    : [],
                creator: '@clickfortify',
            },
            robots: {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    'max-video-preview': -1,
                    'max-image-preview': 'large',
                    'max-snippet': -1,
                },
            },
            alternates: {
                canonical: `https://www.clickfortify.com/blog/${slug}`,
            },
            authors: [{ name: frontMatter.author || 'Click Fortify Team' }],
        };
    } catch (e) {
        return {
            title: 'Blog Post Not Found',
        };
    }
}

export default async function BlogPost({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    let post
    try {
        post = await getPostBySlug(slug)
    } catch (e) {
        console.error('Error fetching post:', e);
        notFound()
    }

    const { frontMatter, mdxSource } = post

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: frontMatter.title,
        description: frontMatter.description,
        image: frontMatter.image
            ? `https://www.clickfortify.com${frontMatter.image}`
            : undefined,
        author: {
            '@type': 'Person',
            name: frontMatter.author || 'Click Fortify Team',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Click Fortify',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.clickfortify.com/cf_white_logo_text.svg',
            },
            sameAs: [
                'https://www.facebook.com/profile.php?id=61575993339664',
                'https://www.instagram.com/clickfortify/',
                'https://www.linkedin.com/company/click-fortify-official',
                'https://x.com/clickfortify',
            ],
        },
        datePublished: frontMatter.date,
        dateModified: frontMatter.date,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.clickfortify.com/blog/${slug}`,
        },
        keywords: frontMatter.keywords,
        wordCount: post.content.split(/\s+/).length,
    }

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.clickfortify.com',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://www.clickfortify.com/blog',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: frontMatter.title,
                item: `https://www.clickfortify.com/blog/${slug}`,
            },
        ],
    }

    const readingTime = Math.ceil(post.content.split(/\s+/).length / 200);

    return (
        <>
            <GJsonLd schema={articleSchema} />
            <GJsonLd schema={breadcrumbSchema} />
            <div className="min-h-screen font-sans selection:bg-foreground/20 selection:text-foreground bg-backgroundPrimary pt-40 pb-24">

                <div className="max-w-6xl mx-auto border border-white/10 relative">
                    <header className="border-b border-white/10 p-8 md:p-12 lg:p-20 text-center relative bg-white/[0.02]">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-hotpink transition-colors mb-8"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Journal
                        </Link>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-foreground mb-12 leading-tight max-w-4xl mx-auto font-bold tracking-tight">
                            {frontMatter.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-hotpink/50"></span>
                                {frontMatter.date ? frontMatter.date.split('-').reverse().join('-') : ''}
                            </span>
                            <span className="w-px h-3 bg-white/10" />
                            <span>{readingTime} min read</span>
                            <span className="w-px h-3 bg-white/10" />
                            <span>{frontMatter.author || 'Click Fortify Team'}</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {frontMatter.image && (
                        <div className="border-b border-white/10">
                            <div className="relative aspect-[21/9] w-full overflow-hidden bg-white/5">
                                <GImage
                                    src={frontMatter.image}
                                    alt={frontMatter.title}
                                    fill
                                    fit="cover"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    )}

                    {/* Content */}
                    <div className="bg-backgroundPrimary">
                        <GBlogContentLayout
                            footer={
                                <>
                                    <div className="mt-16 pt-8 border-t border-white/10">
                                        <div className="flex items-center justify-between flex-wrap gap-4">
                                            <div className="flex flex-col gap-3">
                                                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                                                    Share this article
                                                </span>
                                                <div className="flex gap-4">
                                                    <GSocialShare title={frontMatter.title} slug={slug} />
                                                </div>
                                            </div>
                                            <Link
                                                href="/blog"
                                                className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors border border-white/10 px-4 py-2 rounded-full hover:bg-white/5"
                                            >
                                                More Articles
                                            </Link>
                                        </div>
                                    </div>
                                    <GAuthorBio />
                                </>
                            }
                        >
                            <MDXRemote
                                source={post.content}
                                components={MDXComponents}
                                options={post.mdxSource}
                            />

                        </GBlogContentLayout>
                    </div>

                </div>
            </div>

        </>
    )
}