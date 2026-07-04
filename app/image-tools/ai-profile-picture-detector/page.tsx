import { getDetectorVariantMetadata, renderDetectorVariantPage } from "../ai-image-detector/detector-variants"

export const metadata = getDetectorVariantMetadata("ai-profile-picture-detector")

export default function AiProfilePictureDetectorPage() {
  return renderDetectorVariantPage("ai-profile-picture-detector")
}
