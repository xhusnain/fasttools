import React from 'react';
import {GButton} from "@/ui";

export const GEnterpriseCTA = () => {
    return (
        <div className="my-16 border border-white/10 bg-white/[0.02] relative">


            <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-foreground mb-6 font-bold leading-tight">
                            Start Protecting Your Enterprise Campaigns Today
                        </h2>

                        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                            ClickFortify provides enterprise organizations with the sophisticated, scalable click fraud protection they need to safeguard multi-million dollar advertising investments.
                        </p>

                        <div className="space-y-3">
                            {[
                                'Unlimited campaign and account protection',
                                'Advanced AI-powered fraud detection',
                                'Multi-account management dashboard',
                                'Custom analytics and reporting'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                                    <div className="w-1 h-1 rounded-full bg-hotpink" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-backgroundPrimary border border-white/10 p-6 md:p-8 relative">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-foreground font-medium mb-2">Enterprise Consultation</h3>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    Speak with our solutions team to discuss your specific requirements.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <GButton
                                    href="https://meet.brevo.com/solution-walkthrough/borderless?l=clickfortify-demo"
                                    variant="default"
                                    color="white"
                                    className="w-full justify-center"
                                >
                                    Book a Demo
                                </GButton>
                                <GButton
                                    href="https://app.clickfortify.com"
                                    variant="outline"
                                    color="white"
                                    className="w-full justify-center"
                                >
                                    Start Trial
                                </GButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};