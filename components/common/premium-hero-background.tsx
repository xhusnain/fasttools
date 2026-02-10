export function PremiumHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Base gradient - subtle theme-aware fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />

      {/* Single soft glow — lightweight, theme-aware */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-primary/[0.04] blur-[80px]" />

      {/* Subtle dot grid — masked to top area */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_40%_at_50%_0%,#000_40%,transparent_100%)] opacity-30" />

      {/* Bottom vignette for clean fade into content */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,var(--background)_100%)]" />
    </div>
  )
}
