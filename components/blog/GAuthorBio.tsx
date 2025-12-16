import {GImage} from "@/ui/gimage";

export const GAuthorBio = () => {
    return (
        <div className="mt-16 border border-white/10 bg-white/[0.02] relative">
            <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-backgroundPrimary border border-white/10 flex items-center justify-center overflow-hidden">
                        <GImage
                            src="/cf_logo.png"
                            alt="ClickFortify Logo"
                            width={50}
                            height={50}
                            fit="contain"
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="mb-4">
                        <h3 className="text-lg font-bold text-foreground mb-1">Click Fortify Team</h3>
                        <p className="text-xs text-hotpink font-mono uppercase tracking-widest">PPC Security & Ad Fraud Protection Experts</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-2xl">
                        Click Fortify is powered by a team of top PPC experts and experienced developers with over 10 years in digital advertising security. Our specialists have protected millions in ad spend across Google Ads, Meta, and other major platforms, helping businesses eliminate click fraud and maximize their advertising ROI.
                    </p>
                    <div className="flex flex-wrap gap-6 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-hotpink" />
                            10+ Years Experience
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-hotpink" />
                            Google Ads Certified
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-hotpink" />
                            Ad Fraud Specialists
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};