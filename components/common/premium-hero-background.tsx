export function PremiumHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-background">
      {/* 1. Pure Dark Base */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* 2. Sophisticated Grid Pattern - Very Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 3. Ambient Light Glow - Removed for pure black bg */}
      {/* 3. Ambient Light Glow - Removed for pure black bg */}

      {/* 4. Vignette for Focus */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,#000000_100%)]" />
    </div>
  )
}
