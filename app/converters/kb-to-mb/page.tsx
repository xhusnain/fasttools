import { getByteVariantMetadata, renderByteVariantPage } from "../file-size/byte-variants"

export const metadata = getByteVariantMetadata("kb-to-mb")

export default function KbToMbPage() {
  return renderByteVariantPage("kb-to-mb")
}
