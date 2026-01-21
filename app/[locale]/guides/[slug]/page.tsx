import { Metadata } from 'next';
import { getGuideBySlugMdx, getGuideSlugs } from '@/components/guide/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GBlogContentLayout } from '@/components/blog/GBlogContentLayout';
import { GSocialShare } from '@/components/blog/GSocialShare';
import { GJsonLd } from '@/components/blog/GJsonLd';
import { GAuthorBio } from '@/components/blog/GAuthorBio';
import { GuideMDXComponents } from "@/components/guide/guide-mdx-components";
import { GButton } from "@/ui/gbutton";
import { ArrowRight, Wrench } from "lucide-react";
import { injectArticleAds } from '@/lib/ad-utils';

// MDX Plugins
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';

export async function generateStaticParams() {
    const slugs = getGuideSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx?$/, ''),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const { frontMatter } = await getGuideBySlugMdx(slug);
        return {
            title: `${frontMatter.title} | FastTools Guides`,
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
                    : [`https://www.fasttools.store/android-chrome-512x512.png`],
                url: `https://www.fasttools.store/guides/${slug}`,
                siteName: 'FastTools',
            },
            twitter: {
                card: 'summary_large_image',
                title: frontMatter.title,
                description: frontMatter.description,
                images: frontMatter.image
                    ? [`https://www.fasttools.store${frontMatter.image}`]
                    : [`https://www.fasttools.store/android-chrome-512x512.png`],
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
                canonical: `/guides/${slug}`,
            },
            authors: [{ name: frontMatter.author || 'FastTools Team' }],
        };
    } catch (e) {
        notFound();
    }
}

export default async function GuidePage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    let guide
    try {
        guide = await getGuideBySlugMdx(slug)
    } catch (e) {
        console.error('Error fetching guide:', e);
        notFound()
    }

    const { frontMatter } = guide

    const contentWithAds = injectArticleAds(guide.content);

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: frontMatter.title,
        description: frontMatter.description,
        image: frontMatter.image
            ? `https://www.fasttools.store${frontMatter.image}`
            : `https://www.fasttools.store/android-chrome-512x512.png`,
        author: {
            '@type': 'Person',
            name: frontMatter.author || 'FastTools Team',
        },
        publisher: {
            '@type': 'Organization',
            name: 'FastTools',
        },
        datePublished: frontMatter.date,
        dateModified: frontMatter.lastModified || frontMatter.date,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.fasttools.store/guides/${slug}`,
        },
    }

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
                name: 'Guides',
                item: 'https://www.fasttools.store/guides',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: frontMatter.title,
                item: `https://www.fasttools.store/guides/${slug}`,
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

    const readingTime = Math.ceil(guide.content.split(/\s+/).length / 200);

    return (
        <>
            <GJsonLd schema={articleSchema} />
            <GJsonLd schema={breadcrumbSchema} />
            {faqSchema && <GJsonLd schema={faqSchema} />}
            <div className="min-h-screen font-sans selection:bg-foreground/20 selection:text-foreground bg-backgroundPrimary pt-40 pb-24">

                <div className="max-w-7xl mx-auto border border-white/10 relative">
                    <header className="border-b border-white/10 p-8 md:p-12 lg:p-20 text-center relative bg-white/[0.02]">
                        <Link
                            href="/guides"
                            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-hotpink transition-colors mb-8"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Guides
                        </Link>

                        {/* Difficulty & Category Badge */}
                        <div className="flex items-center justify-center gap-3 mb-6">
                            {frontMatter.difficulty && (
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${frontMatter.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                    frontMatter.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                        'bg-red-500/10 text-red-500 border-red-500/20'
                                    }`}>
                                    {frontMatter.difficulty}
                                </span>
                            )}
                            {frontMatter.category && (
                                <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                                    {frontMatter.category}
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight max-w-4xl mx-auto font-bold tracking-tight">
                            {frontMatter.title}
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            {frontMatter.description}
                        </p>

                        {/* Tool Link CTA */}
                        {frontMatter.toolLink && (
                            <Link href={frontMatter.toolLink}>
                                <GButton className="gap-2 bg-primary hover:bg-primary/90">
                                    <Wrench className="h-4 w-4" />
                                    Try the Live Tool
                                    <ArrowRight className="h-4 w-4" />
                                </GButton>
                            </Link>
                        )}

                        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-foreground uppercase tracking-widest mt-8">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-hotpink/50"></span>
                                {frontMatter.lastModified || frontMatter.date
                                    ? (frontMatter.lastModified || frontMatter.date).split('-').reverse().join('-')
                                    : ''}
                            </span>
                            <span className="w-px h-3 bg-white/10" />
                            <span>{readingTime} min read</span>
                            <span className="w-px h-3 bg-white/10" />
                            <span>{frontMatter.author || 'FastTools Team'}</span>
                        </div>
                    </header>

                    {/* Content Section */}
                    <div className="bg-backgroundPrimary">
                        <div className="max-w-4xl mx-auto px-4 lg:px-8">

                            {/* Main Article Content */}
                            <div className="w-full">
                                <GBlogContentLayout
                                    footer={
                                        <>
                                            <div className="mt-16 pt-8 border-t border-white/10">
                                                <div className="flex items-center justify-between flex-wrap gap-4">
                                                    <div className="flex flex-col gap-3">
                                                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                                                            Share this guide
                                                        </span>
                                                        <div className="flex gap-4">
                                                            <GSocialShare title={frontMatter.title} slug={slug} basePath="/guides/" />
                                                        </div>
                                                    </div>
                                                    <Link
                                                        href="/guides"
                                                        className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors border border-white/10 px-4 py-2 rounded-full hover:bg-white/5"
                                                    >
                                                        More Guides
                                                    </Link>
                                                </div>
                                            </div>
                                            <GAuthorBio />
                                        </>
                                    }
                                >
                                    <MDXRemote
                                        source={contentWithAds}
                                        components={GuideMDXComponents}
                                        options={{
                                            mdxOptions: {
                                                remarkPlugins: [remarkGfm],
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
            </div>

        </>
    )
}
