import type { Metadata } from "next"
import { BgRemoverEmbed } from "@/components/bg-remover-embed"

export const metadata: Metadata = {
  title: "Embed Background Remover Widget",
  description: "Free AI-powered background removal tool embeddable on your website",
  robots: "noindex, nofollow",
}

export default function EmbedPage() {
  return (
    <div>
      <BgRemoverEmbed />
    </div>
  )
}

