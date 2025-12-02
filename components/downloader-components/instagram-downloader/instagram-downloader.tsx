
import { Card } from "@/components/ui/card"
import { Wrench, Clock, Sparkles } from "lucide-react"

export interface InstagramDownloaderProps {
  compact?: boolean
}

export function InstagramDownloader({ compact = false }: InstagramDownloaderProps) {
  return (
    <div className="space-y-6">
      <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="relative p-8 md:p-12">
          <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
              <div className="relative bg-primary/10 p-6 rounded-2xl border-2 border-primary/20">
                <Wrench className="h-12 w-12 text-primary animate-pulse" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Under Maintenance</span>
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                We're Improving Instagram Downloader
              </h2>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our Instagram downloader is currently undergoing improvements to provide you with a better, faster, and more reliable experience. We appreciate your patience.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/50 px-6 py-3 rounded-full border border-border">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-medium">Please check back soon</span>
            </div>
          </div>
        </div>
      </Card>

      {!compact && (
        <Card className="p-6 bg-card border border-border">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            What's Coming
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">✓</span>
              <span>Faster download speeds with optimized processing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">✓</span>
              <span>Support for more video formats and quality options</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">✓</span>
              <span>Enhanced reliability and better error handling</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">✓</span>
              <span>Improved user interface with better feedback</span>
            </li>
          </ul>
        </Card>
      )}
    </div>
  )
}
