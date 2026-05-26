
import Link from "next/link"
import { Shield, Zap, Lock, Globe, FileText, Calculator, Code, TrendingUp } from "lucide-react"

export function HomeRichContent() {
    return (
        <>
            {/* What You Can Do Section */}
            <section className="py-16 md:py-24 bg-background relative z-10 border-b border-border/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-primary">
                                200+ Tools for Every Task — All Free, All Instant
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                                <p>
                                    Whether you need to <strong className="text-foreground">compress a PDF</strong>, calculate your BMI, convert currencies, or generate AI captions — FastTools has you covered. Every tool loads instantly, works on any device, and requires zero signup.
                                </p>
                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Built for Real Work, Not Demos</h3>
                                <p>
                                    Our calculators handle real formulas — loan amortization, tax estimation, IP subnets. Our converters support 30+ formats including JSON, YAML, XML, TOML, and Base64. Our PDF tools let you split, merge, compress, sign, and unlock documents without uploading anything.
                                </p>
                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Works on Every Device</h3>
                                <p>
                                    Every tool is fully responsive. Use them on your phone during a commute, on a tablet in a meeting, or on your desktop at work. No app to download — just open your browser and go.
                                </p>
                            </div>
                        </div>

                        <div className="bg-card/50 border border-border/50 rounded-2xl p-8 space-y-8 backdrop-blur-sm">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">Most Popular Categories</h3>

                                <div className="grid gap-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-red-500/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <FileText className="w-6 h-6 text-red-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">PDF Tools</h4>
                                            <p className="text-sm text-muted-foreground">Compress, split, merge, sign, and convert PDFs — all in your browser. No file uploads to external servers.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-blue-500/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Calculator className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Calculators & Finance</h4>
                                            <p className="text-sm text-muted-foreground">BMI, age, loan, mortgage, tax, GPA, and scientific calculators. Get accurate results instantly.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-purple-500/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <TrendingUp className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Social Media & AI</h4>
                                            <p className="text-sm text-muted-foreground"><Link href="/social-media-tools/instagram-dp" className="underline underline-offset-2 hover:text-foreground">Instagram DP viewer</Link>, <Link href="/social-media-tools/channel-checker" className="underline underline-offset-2 hover:text-foreground">YouTube channel checker</Link>, <Link href="/ai-tools/qr-generator" className="underline underline-offset-2 hover:text-foreground">AI QR generator</Link>, caption generator, and a <Link href="/social-media-tools/hashtag-counter" className="underline underline-offset-2 hover:text-foreground">hashtag counter</Link>.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-green-500/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Code className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Developer & Crypto Tools</h4>
                                            <p className="text-sm text-muted-foreground">JWT decoder, regex tester, JSON diff, UUID generator, hash tools, and 20+ converters for developers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy & Trust Section */}
            <section className="py-16 md:py-24 bg-background relative z-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                                Your Data Never Leaves Your Device
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                                <p>
                                    Most online tools upload your files to their servers to process them. <strong className="text-foreground">FastTools doesn't.</strong> Every calculation, conversion, and file operation runs locally in your browser using client-side JavaScript. Your PDFs, images, and text never touch our servers.
                                </p>
                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">No Accounts. No Tracking. No Limits.</h3>
                                <p>
                                    We don't ask for your email, don't set tracking cookies, and don't limit how many times you can use a tool. Every tool is free, unlimited, and works the same whether it's your first visit or your thousandth.
                                </p>
                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Fast by Design</h3>
                                <p>
                                    No bloated frameworks, no unnecessary third-party scripts. Tools load in under a second and deliver results instantly. Optimized for Core Web Vitals so they work smoothly even on slow mobile connections.
                                </p>
                            </div>
                        </div>

                        <div className="bg-card/50 border border-border/50 rounded-2xl p-8 space-y-8 backdrop-blur-sm">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">Our Privacy Promise</h3>

                                <div className="grid gap-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-primary/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Shield className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">No Data Logging</h4>
                                            <p className="text-sm text-muted-foreground">We don't track your inputs or save your files. Your session data vanishes the moment you close the tab.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-purple-500/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Lock className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Encrypted Connections</h4>
                                            <p className="text-sm text-muted-foreground">All traffic is secured with SSL encryption. Your connection to FastTools is always private and secure.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-green-500/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Zap className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Instant Results</h4>
                                            <p className="text-sm text-muted-foreground">No waiting for server responses. Everything processes locally so you get results in milliseconds, not seconds.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-blue-500/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Globe className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">100% Free Forever</h4>
                                            <p className="text-sm text-muted-foreground">No hidden subscriptions, no "Pro" tiers, and no credit card required. Just free, powerful tools.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
