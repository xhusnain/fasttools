export function PremiumHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-background">
      {/* 1. Base Gradient - Theme Aware */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />

      {/* 2. Premium Glow/Orb Effects */}
      <div className="absolute top-[-25%] left-[-10%] w-[60%] h-[60%] rounded-full bg-violet-600/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse-slow animation-delay-2000" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px] animate-pulse-slow animation-delay-4000" />

      {/* 3. High-Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-40" />

      {/* 4. Vignette for Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,var(--background)_100%)]" />
    </div>
  )
}
