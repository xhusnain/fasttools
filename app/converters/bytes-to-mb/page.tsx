import { getByteVariantMetadata, renderByteVariantPage } from "../file-size/byte-variants"

export const metadata = getByteVariantMetadata("bytes-to-mb")

export default function BytesToMbPage() {
  return renderByteVariantPage("bytes-to-mb")
}
