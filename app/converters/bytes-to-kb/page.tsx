import { getByteVariantMetadata, renderByteVariantPage } from "../file-size/byte-variants"

export const metadata = getByteVariantMetadata("bytes-to-kb")

export default function BytesToKbPage() {
  return renderByteVariantPage("bytes-to-kb")
}
