import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// 1. Define custom "Professional" components for MDX
const components = {
    h1: (props: any) => (
        <h1 {...props} className="text-3xl font-bold mt-10 mb-4 text-slate-900 dark:text-white" />
    ),
    h2: (props: any) => (
        <h2 {...props} className="text-2xl font-semibold mt-8 mb-4 text-slate-800 dark:text-slate-100" />
    ),
    h3: (props: any) => (
        <h3 {...props} className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-100" />
    ),
    p: (props: any) => (
        <p {...props} className="text-lg leading-8 text-slate-700 dark:text-slate-300 mb-6" />
    ),
    ul: (props: any) => (
        <ul {...props} className="list-disc list-inside mb-6 space-y-2 text-slate-700 dark:text-slate-300" />
    ),
    ol: (props: any) => (
        <ol {...props} className="list-decimal list-inside mb-6 space-y-2 text-slate-700 dark:text-slate-300" />
    ),
    li: (props: any) => (
        <li {...props} className="pl-2" />
    ),
    // Add a custom Call to Action button component you can use in MDX
    Callout: ({ children }: { children: React.ReactNode }) => (
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 my-6 rounded-r">
            {children}
        </div>
    ),
}

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post: any) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const { meta, content } = await getPostBySlug(slug)

    return (
        <article className="max-w-3xl mx-auto px-6 py-12">

            {/* --- PROFESSIONAL HEADER (Automatically designed) --- */}
            <div className="text-center mb-12">
                <div className="text-sm text-blue-600 font-medium mb-2 uppercase tracking-wide">
                    {meta.category || 'Tools'}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                    {meta.title}
                </h1>
                <div className="flex items-center justify-center space-x-4 text-slate-500">
                    <span>{meta.date}</span>
                    <span>•</span>
                    <span>{meta.author || 'Husnain Babar'}</span>
                </div>
            </div>

            {/* --- FEATURED IMAGE --- */}
            {meta.image && (
                <div className="relative aspect-video w-full mb-12 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src={meta.image}
                        alt={meta.title as string}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* --- CONTENT BODY --- */}
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                {/* This injects the MDX and applies the components above */}
                <MDXRemote source={content} components={components} />
            </div>

            {/* --- NEXT STEPS / FOOTER --- */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
                <Link href="/blog" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                    <span>←</span> Back to all articles
                </Link>
            </div>

        </article>
    )
}
