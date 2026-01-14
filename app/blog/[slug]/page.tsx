import { Metadata } from 'next';
import { getPostBySlug, getPostSlugs } from '@/components/blog/mdx';
import { createArticleSchema } from '@/lib/metadata-base';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GBlogContentLayout } from '@/components/blog/GBlogContentLayout';


import { GSocialShare } from '@/components/blog/GSocialShare';
import { GJsonLd } from '@/components/blog/GJsonLd';
import { GAuthorBio } from '@/components/blog/GAuthorBio';
import { GImage } from "@/ui/gimage";
import { MDXComponents } from "@/components/blog/mdx-components";
import { SquareAd } from '@/components/ads/square-ad';

// MDX Plugins
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';

function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/--+/g, '-')
}

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
            title: `${frontMatter.title} | FastTools`,
            description: frontMatter.description,
            keywords: frontMatter.keywords,
            openGraph: {
                title: frontMatter.title,
                description: frontMatter.description,
                type: 'article',
                publishedTime: frontMatter.date,
                authors: [frontMatter.author || 'FastTools Team'],
                images: frontMatter.image
                    ? [`https://www.fasttools.store${frontMatter.image}`]
                    : [],
                url: `https://www.fasttools.store/blog/${slug}`,
                siteName: 'FastTools',
            },
            twitter: {
                card: 'summary_large_image',
                title: frontMatter.title,
                description: frontMatter.description,
                images: frontMatter.image
                    ? [`https://www.fasttools.store${frontMatter.image}`]
                    : [],
                creator: '@fasttools',
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
                canonical: `https://www.fasttools.store/blog/${slug}`,
            },
            authors: [{ name: frontMatter.author || 'FastTools Team' }],
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

    const { frontMatter } = post


    // Process content to remove Table of Contents header
    const contentWithoutToc = post.content.replace(/^## Table of Contents$/m, '')

    const articleSchema = createArticleSchema({
        title: frontMatter.title,
        description: frontMatter.description,
        image: frontMatter.image,
        authorName: frontMatter.author,
        datePublished: frontMatter.date,
        dateModified: frontMatter.lastModified || frontMatter.date,
        slug: slug,
        wordCount: post.content.split(/\s+/).length,
    })

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.fasttools.store',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://www.fasttools.store/blog',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: frontMatter.title,
                item: `https://www.fasttools.store/blog/${slug}`,
            },
        ],
    }

    let faqSchema;
    if (frontMatter.faq && frontMatter.faq.length > 0) {
        faqSchema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: frontMatter.faq.map(item => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                },
            })),
        };
    }

    const readingTime = Math.ceil(post.content.split(/\s+/).length / 200);

    return (
        <>
            <GJsonLd schema={articleSchema} />
            <GJsonLd schema={breadcrumbSchema} />
            {faqSchema && <GJsonLd schema={faqSchema} />}

            <div className="hidden 2xl:flex fixed left-4 top-1/3 -translate-y-1/2 z-10 flex-col gap-4">
                <SquareAd />
                <SquareAd />
            </div>

            <div className="hidden 2xl:flex fixed right-4 top-1/3 -translate-y-1/2 z-10 flex-col gap-4">
                <SquareAd />
                <SquareAd />
            </div>

            <div className="min-h-screen font-sans selection:bg-foreground/20 selection:text-foreground bg-backgroundPrimary pt-40 pb-24 relative overflow-x-hidden">

                <div className="max-w-7xl mx-auto border border-white/10 relative bg-backgroundPrimary">
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

                        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground mb-12 leading-tight max-w-4xl mx-auto font-bold tracking-tight">
                            {frontMatter.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-hotpink/50"></span>
                                {frontMatter.lastModified || frontMatter.date
                                    ? (frontMatter.lastModified || frontMatter.date).split('-').reverse().join('-')
                                    : ''}
                            </span>
                            {frontMatter.lastModified && frontMatter.lastModified !== frontMatter.date && (
                                <span className="text-xs text-muted-foreground/60 ml-1">
                                    (Updated)
                                </span>
                            )}
                            <span className="w-px h-3 bg-white/10" />
                            <span>{readingTime} min read</span>
                            <span className="w-px h-3 bg-white/10" />
                            <span>{frontMatter.author || 'FastTools Team'}</span>
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

                    {/* Content Section */}
                    <div className="bg-backgroundPrimary">
                        <div className="max-w-4xl mx-auto px-4 lg:px-8">
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
                                    source={contentWithoutToc}
                                    components={MDXComponents}
                                    options={{
                                        mdxOptions: {
                                            remarkPlugins: [
                                                // Removed remarkToc
                                                remarkGfm
                                            ],
                                            rehypePlugins: [
                                                rehypeSlug,
                                                [rehypePrism, { showLineNumbers: true }]
                                            ]
                                        }
                                    }}
                                />
                            </GBlogContentLayout>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}