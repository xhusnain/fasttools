export function PremiumHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,var(--background)_86%)]" />

      <div className="absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(37,99,235,0.08)_0%,rgba(37,99,235,0)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,#000_0%,transparent_72%)] opacity-30" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,var(--background)_92%)]" />
    </div>
  )
}
