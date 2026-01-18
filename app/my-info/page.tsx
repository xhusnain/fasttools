import { LocationInfo } from "@/components/location/LocationInfo"
import { PremiumHeroBackground } from "@/components/common/premium-hero-background"
import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
    title: "My Info - Your Digital Footprint Analysis",
    description: "Instantly analyze your digital footprint. Check IP, location, browser, device details & security. Free online privacy tool.",
    path: "/my-info",
    breadcrumbs: [
        { label: "My Info", href: "/my-info" }
    ]
})

export default function MyInfoPage() {
    return (
        <div className="relative min-h-screen bg-background pt-20 pb-12">
            <PremiumHeroBackground />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                            Your Digital Footprint
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Instant analysis of your connection, location, and local environment.
                        </p>
                    </div>
                    <LocationInfo />
                </div>
            </div>
        </div>
    )
}
