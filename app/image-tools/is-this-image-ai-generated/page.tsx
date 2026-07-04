import { getDetectorVariantMetadata, renderDetectorVariantPage } from "../ai-image-detector/detector-variants"

export const metadata = getDetectorVariantMetadata("is-this-image-ai-generated")

export default function IsThisImageAiGeneratedPage() {
  return renderDetectorVariantPage("is-this-image-ai-generated")
}
