import type { Metadata } from "next"
import { GHeader } from "@/ui/gheader"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"
import { createMetadata } from "@/lib/metadata-base"
import { Mail, FileText, AlertTriangle } from "lucide-react"

export const metadata: Metadata = createMetadata({
    title: "DMCA Copyright Policy",
    description: "FastTools respects the intellectual property rights of others. Learn about our DMCA policy and how to report copyright infringement.",
    path: "/dmca",
    breadcrumbs: [
        { label: "DMCA", href: "/dmca" }
    ]
})

export default function DmcaPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[{ label: "DMCA", href: "/dmca" }]} />
            <div className="min-h-screen bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <GHeader
                                title="DMCA Copyright Policy"
                                description="Digital Millennium Copyright Act Notice"
                                titleSize="large"
                                descriptionSize="medium"
                                color="blue"
                                centered
                            />
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 bg-card border border-border rounded-xl p-8 md:p-12 shadow-sm">
                            <section>
                                <h2 className="flex items-center gap-2 text-2xl font-bold text-primary">
                                    <FileText className="h-6 w-6" />
                                    Introduction
                                </h2>
                                <p className="text-muted-foreground">
                                    FastTools ("we", "our", or "us") respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), the text of which may be found on the U.S. Copyright Office website at <a href="https://www.copyright.gov/legislation/dmca.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.copyright.gov/legislation/dmca.pdf</a>, we will respond expeditiously to claims of copyright infringement committed using the FastTools service and/or the FastTools website (the "Site") if such claims are reported to our Designated Copyright Agent identified in the sample notice below.
                                </p>
                            </section>

                            <section>
                                <h2 className="flex items-center gap-2 text-2xl font-bold text-primary">
                                    <AlertTriangle className="h-6 w-6" />
                                    DMCA Notice of Alleged Infringement
                                </h2>
                                <p className="text-muted-foreground mb-4">
                                    If you are a copyright owner, authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the Site by completing the following DMCA Notice of Alleged Infringement and delivering it to our Designated Copyright Agent. Upon receipt of Notice as described below, FastTools will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged content from the Site.
                                </p>

                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold mb-4">DMCA Notice Requirements</h3>
                                    <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                                        <li>Identify the copyrighted work that you claim has been infringed, or - if multiple copyrighted works are covered by this Notice - you may provide a representative list of the copyrighted works that you claim have been infringed.</li>
                                        <li>Identify the material or link you claim is infringing (or the subject of infringing activity) and that access to which is to be disabled, including at a minimum, if applicable, the URL of the link shown on the Site where such material may be found.</li>
                                        <li>Provide your mailing address, telephone number, and, if available, email address.</li>
                                        <li>Include both of the following statements in the body of the Notice:
                                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                                <li>"I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)."</li>
                                                <li>"I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed."</li>
                                            </ul>
                                        </li>
                                        <li>Provide your full legal name and your electronic or physical signature.</li>
                                    </ol>
                                </div>
                            </section>

                            <section>
                                <h2 className="flex items-center gap-2 text-2xl font-bold text-primary">
                                    <Mail className="h-6 w-6" />
                                    Designated Copyright Agent
                                </h2>
                                <p className="text-muted-foreground mb-4">
                                    All DMCA Notices should be delivered to our Designated Copyright Agent:
                                </p>
                                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                                    <p className="font-semibold text-foreground">Copyright Agent</p>
                                    <p className="text-muted-foreground">FastTools Legal Department</p>
                                    <p className="text-muted-foreground mt-2"><strong>Email:</strong> <a href="mailto:dmca@fasttools.store" className="text-primary hover:underline">dmca@fasttools.store</a></p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-foreground">Counter Notices</h2>
                                <p className="text-muted-foreground">
                                    If you believe that your content that was removed (or to which access was disabled) is not infringing, or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to the law, to post and use the material in your content, you may send a counter-notice containing the following information to the Copyright Agent:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                                    <li>Your physical or electronic signature;</li>
                                    <li>Identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled;</li>
                                    <li>A statement that you have a good faith belief that the content was removed or disabled as a result of mistake or a misidentification of the content; and</li>
                                    <li>Your name, address, telephone number, and email address, a statement that you consent to the jurisdiction of the federal court in [Your Jurisdiction], and a statement that you will accept service of process from the person who provided notification of the alleged infringement.</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
