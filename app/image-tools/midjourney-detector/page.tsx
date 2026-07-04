import { getDetectorVariantMetadata, renderDetectorVariantPage } from "../ai-image-detector/detector-variants"

export const metadata = getDetectorVariantMetadata("midjourney-detector")

export default function MidjourneyDetectorPage() {
  return renderDetectorVariantPage("midjourney-detector")
}
