export function PremiumHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-background transition-colors duration-500">
      {/* Minimal Dark Base - Deep Void */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-slate-900/20 via-background to-background" />

      {/* Subtle Grid - Barely Visible */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Premium Hexagon Structure - Removed to be replaced by LocationInfo */}
      {/* <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-[25%] lg:translate-x-[-50%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] opacity-100">
        ...
      </div> */}

      {/* Very Subtle Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[25%] left-[25%] w-0.5 h-0.5 bg-foreground/10 rounded-full animate-float" />
        <div className="absolute bottom-[35%] right-[25%] w-0.5 h-0.5 bg-foreground/10 rounded-full animate-float-delayed" />
      </div>
    </div>
  )
}
