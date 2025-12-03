import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { BreadcrumbItem, BreadcrumbsProps } from "@/types/common-types/breadcrumbs.types"

export function Breadcrumbs({ items = [] }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
        </li>
        {items && items.length > 0 && items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4" />
            {index === items.length - 1 ? (
              <span className="text-foreground font-medium">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
