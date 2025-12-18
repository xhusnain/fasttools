import { GImage } from "@/ui/gimage";

export const GAuthorBio = () => {
    return (
        <div className="mt-16 border border-border bg-muted/30 relative">
            <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-background border border-border flex items-center justify-center overflow-hidden">
                        <GImage
                            src="/logo.png"
                            alt="FastTools Logo"
                            width={48}
                            height={48}
                            fill={false}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="mb-4">
                        <h3 className="text-lg font-bold text-foreground mb-1">FastTools Team</h3>
                        <p className="text-xs text-hotpink font-mono uppercase tracking-widest">Developer Tools & Resource Experts</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-2xl">
                        FastTools is dedicated to curating high-quality content and resources that empower developers. With nearly 5 years of hands-on development experience, our team rigorously evaluates every tool and API we recommend, ensuring you get only the most reliable and effective solutions for your projects.
                    </p>
                    <div className="flex flex-wrap gap-6 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-hotpink" />
                            5 Years Experience
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-hotpink" />
                            Quality Focused
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-hotpink" />
                            Developer First
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};