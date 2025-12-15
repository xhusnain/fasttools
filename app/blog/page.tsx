import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
    title: 'Blog - FastTools',
    description: 'Latest updates, guides, and tools reviews.',
}

export default async function BlogIndex() {
    const posts = await getAllPosts()

    return (
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">From the Blog</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Learn how to use our tools effectively and stay updated with the latest trends.
                </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                    <article key={post.slug} className="flex flex-col items-start justify-between">
                        {post.image && (
                            <div className="relative w-full">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={500}
                                    height={300}
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                        )}
                        <div className="max-w-xl">
                            <div className="mt-8 flex items-center gap-x-4 text-xs">
                                <time dateTime={post.date} className="text-gray-500">
                                    {post.date}
                                </time>
                                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300">
                                    {post.category || 'General'}
                                </span>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                {/* 
                  Since we don't have an excerpt in the helper yet, we can omit it 
                  or we could update the helper to generate one. For now I'll just show the title and metadata.
                */}
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900 dark:text-white">
                                        <span className="absolute inset-0" />
                                        {post.author || 'Husnain Babar'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
