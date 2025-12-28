import { LocationInfo } from "@/components/location/LocationInfo"
import { PremiumHeroBackground } from "@/components/common/premium-hero-background"

export default function MyInfoPage() {
    return (
        <div className="relative min-h-screen bg-background pt-20 pb-12">
            <PremiumHeroBackground />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl mx-auto space-y-8">
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
