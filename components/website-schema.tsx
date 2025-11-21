import { getWebsiteSchema } from "@/lib/metadata-base"

interface WebsiteSchemaProps {
  searchUrl?: string
}

export function WebsiteSchema({ searchUrl }: WebsiteSchemaProps) {
  const websiteSchema = getWebsiteSchema(searchUrl)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  )
}

