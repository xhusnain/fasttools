import { getSignatureSatelliteMetadata, renderSignatureSatellitePage } from "../pdf-signature-checker/satellite-variants"

export const metadata = getSignatureSatelliteMetadata("check-if-pdf-is-digitally-signed")

export default function CheckIfPdfIsDigitallySignedPage() {
  return renderSignatureSatellitePage("check-if-pdf-is-digitally-signed")
}
