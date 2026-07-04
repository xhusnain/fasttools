import { getSignatureSatelliteMetadata, renderSignatureSatellitePage } from "../pdf-signature-checker/satellite-variants"

export const metadata = getSignatureSatelliteMetadata("verify-pdf-signature-online")

export default function VerifyPdfSignatureOnlinePage() {
  return renderSignatureSatellitePage("verify-pdf-signature-online")
}
