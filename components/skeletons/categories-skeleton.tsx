import { Skeleton } from "@/components/ui/skeleton"

export function CategoriesSkeleton() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="text-center mb-16 space-y-4">
                    <Skeleton className="h-10 w-3/4 mx-auto max-w-2xl rounded-lg" />
                    <Skeleton className="h-6 w-1/2 mx-auto max-w-xl rounded-lg" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex flex-col space-y-3">
                            <Skeleton className="h-[200px] w-full rounded-xl" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-4/5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
