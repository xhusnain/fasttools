export function PremiumHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-background transition-colors duration-500">
      {/* Minimal Dark Base - Deep Void */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-slate-900/20 via-background to-background" />

      {/* Subtle Grid - Barely Visible */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Premium Hexagon Structure */}
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-[25%] lg:translate-x-[-50%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] opacity-100">
        <div className="relative w-full h-full animate-float">
          {/* Hexagon SVG */}
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="premiumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" className="text-primary" stopOpacity="0.8" />
                <stop offset="100%" stopColor="currentColor" className="text-purple-500" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" className="text-primary" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Outer Ring - Rotating */}
            <g className="origin-center animate-[spin_20s_linear_infinite] will-change-transform">
              <path
                d="M100 10 L178 55 L178 145 L100 190 L22 145 L22 55 Z"
                fill="none"
                stroke="url(#glowGradient)"
                strokeWidth="0.5"
                className="opacity-30"
              />
            </g>

            {/* Middle Ring - Static with Glow */}
            <path
              d="M100 25 L165 62.5 L165 137.5 L100 175 L35 137.5 L35 62.5 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/40 drop-shadow-[0_0_10px_rgba(var(--primary),0.3)]"
            />

            {/* Inner Hexagon - Filled Background */}
            <path
              d="M100 40 L150 70 L150 130 L100 160 L50 130 L50 70 Z"
              fill="url(#glowGradient)"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/20"
            />

            {/* Stylized 'F' Logo */}
            <g transform="translate(100, 100) scale(0.8)">
              <path
                d="M-25 -35 H 35 C 40 -35 40 -25 35 -25 H -15 V -5 H 25 C 30 -5 30 5 25 5 H -15 V 35 C -15 40 -25 40 -25 35 V -35 Z"
                fill="url(#premiumGradient)"
                className="drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]"
              />
              {/* Accent Dot */}
              <circle cx="35" cy="-30" r="3" className="fill-primary animate-pulse" />
            </g>

            {/* Decorative Particles */}
            <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="4 4" className="text-primary/30 animate-[spin_30s_linear_infinite_reverse] origin-center will-change-transform" />
          </svg>
        </div>
      </div>

      {/* Very Subtle Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[25%] left-[25%] w-0.5 h-0.5 bg-foreground/10 rounded-full animate-float" />
        <div className="absolute bottom-[35%] right-[25%] w-0.5 h-0.5 bg-foreground/10 rounded-full animate-float-delayed" />
      </div>
    </div>
  )
}
