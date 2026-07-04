// Satellite answer pages for the PDF Signature Checker.
//
// The checker is the one winnable PDF niche (audit 04b: only PDF page with
// impressions; iLovePDF/SmallPDF have no equivalent; thin SERP). These two
// satellites own the question-shaped queries around it:
//   - "verify pdf signature online"        → I have a signed PDF; is it valid?
//   - "check if pdf is digitally signed"   → does this PDF even have a signature?
// Different intents, different content; both run the same tool. Thin wrappers
// live at app/pdf-tools/<slug>/page.tsx.

import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { PdfSignatureCheckerTool } from "@/components/pdf-tools/pdf-signature-checker"
import { GTable } from "@/ui/gtable"

interface SignatureSatellite {
  slug: string
  toolName: string
  metaTitle: string
  metaDescription: string
  headerTitle: string
  headerDescription: string
  definition: string
  quickAnswer: string
  overview: string
  keywords: string[]
  keyTakeaways: string[]
  howToSteps: string[]
  aboutSections: Array<{ heading: string; body: string }>
  comparisonTable?: {
    heading: string
    intro: string
    columns: [string, string, string]
    rows: Array<[string, string, string]>
  }
  proTip: string
  faqs: Array<{ question: string; answer: string }>
}

export const signatureSatellites: Record<string, SignatureSatellite> = {
  "verify-pdf-signature-online": {
    slug: "verify-pdf-signature-online",
    toolName: "Verify PDF Signature Online",
    metaTitle: "Verify PDF Signature Online — Free, No Upload Required",
    metaDescription:
      "Verify a PDF's digital signature online in seconds: signer identity, certificate, signing time, and whether the document changed after signing. 100% in your browser — the PDF is never uploaded.",
    headerTitle: "Verify PDF Signature Online",
    headerDescription:
      "Select a signed PDF to validate its digital signature — signer, certificate, timestamp, and integrity — without installing Adobe Acrobat and without uploading the file anywhere.",
    definition:
      "Verifying a PDF signature online means checking a signed PDF's embedded digital signature — that the content hash still matches (no changes after signing), who the signer certificate identifies, and when it was signed — directly in the browser, without desktop software.",
    quickAnswer:
      "To verify a PDF signature online, select your signed PDF in the checker above. It validates the signature cryptographically and shows the signer's name, the issuing certificate, the signing timestamp, and — most importantly — whether the document was modified after signing. Everything runs locally in your browser; the file is never uploaded to a server.",
    overview:
      "You received a signed contract, court filing, or certificate and need to confirm the signature is genuine — without installing Adobe Acrobat, and ideally without uploading a confidential document to some server. This page does exactly that: signature verification runs entirely in your browser. The checker parses the PDF's PKCS#7/CMS signature block, recomputes the document hash, compares it to the signed hash, and reports the result in plain language — valid, modified after signing, or no signature found — together with the signer identity and certificate details you need for the file, the audit trail, or the reply email.",
    keywords: [
      "verify pdf signature online",
      "pdf signature verification online",
      "validate pdf digital signature",
      "verify signed pdf without adobe",
      "check pdf signature validity",
    ],
    keyTakeaways: [
      "Verification checks three things: content unchanged since signing, signer certificate identity, and signing time",
      "Runs 100% in your browser — confidential contracts never leave your machine",
      "Works without Adobe Acrobat or any install — any modern browser",
      "'Modified after signing' is the red flag that matters — it means the signed content changed",
      "For business-critical acceptance, follow up with full trust-chain validation (Acrobat/AATL)",
    ],
    howToSteps: [
      "Select or drop your signed PDF into the checker above — it is processed locally, not uploaded.",
      "Read the validity verdict: valid signature, modified after signing, or no signature found.",
      "Review the signer's name, the certificate issuer, and the signing timestamp.",
      "For contracts and filings, save or screenshot the result for your records — then, if the decision is business-critical, confirm the trust chain in Acrobat as a second step.",
    ],
    aboutSections: [
      {
        heading: "What a \"Valid\" PDF Signature Actually Means",
        body: "A digital signature binds a cryptographic hash of the document to the signer's certificate. Verification therefore answers three separate questions. Integrity: does the document's current content still hash to the value that was signed? If yes, not a single byte of the signed content has changed. Identity: what does the signer's X.509 certificate say — name, organization, and which authority issued it? Time: when was the signature applied (ideally anchored by an RFC 3161 timestamp)? A green \"valid\" here means the math checks out on all counts. What it can't tell you by itself is whether you should trust the certificate's issuer — a self-signed certificate can produce a perfectly valid signature. That's why the signer/issuer fields are shown: recognize the issuer (DocuSign, GlobalSign, DigiCert, a government CA) and the picture is complete.",
      },
      {
        heading: "Verifying Without Adobe Acrobat",
        body: "Acrobat Reader shows a signature panel with validation status, but it's a desktop install, its trust verdicts depend on Adobe's trust list configuration, and on a locked-down work machine or a phone you may simply not have it. Browser-based verification gives you the core answer — intact or tampered, signed by whom, when — with nothing to install. The trade-off is honest: a browser can't consult your organization's private trust infrastructure, so treat this as the fast first pass. For everyday screening of incoming signed documents it's all you need; for final acceptance of high-stakes agreements, let your compliance tooling do the trust-chain confirmation.",
      },
      {
        heading: "Why No-Upload Verification Matters for Contracts",
        body: "Most \"verify PDF online\" services upload your document to their servers for processing — which is exactly what you don't want to do with an unreleased commercial agreement, an employment contract, or a court document. This checker was built the other way: the PDF is parsed by JavaScript running on your machine, the signature math happens on your machine, and nothing is transmitted. You can verify it yourself — load the page, disconnect from the internet, and the checker still works.",
      },
    ],
    proTip:
      "Check the signing timestamp against the document's story. A contract dated March 1 but signed (per the cryptographic timestamp) on March 20 is worth a question — the timestamp is part of the signed data and far harder to fake than a date typed into the document.",
    faqs: [
      {
        question: "How can I verify a PDF signature without Adobe Acrobat?",
        answer:
          "Use the checker on this page: select the signed PDF and it validates the signature in your browser — no install, no account. It reports validity, signer identity, certificate issuer, signing time, and whether the document changed after signing. Acrobat remains useful as a second opinion for full trust-chain validation on business-critical documents.",
      },
      {
        question: "Can I verify PDFs signed with DocuSign, Adobe Sign, or similar platforms?",
        answer:
          "Yes. Those platforms embed standard PKCS#7/CMS digital signatures, which this tool parses and verifies. The certificate details will show the platform's certificate authority (for example DocuSign's CA) as issuer, plus the signing timestamp the platform applied.",
      },
      {
        question: "What does 'document modified after signing' mean?",
        answer:
          "The content hash no longer matches what was signed — something in the document changed after the signature was applied. Sometimes it's benign (a form field filled in, or a second signature appended after the first); sometimes it's exactly the tampering the signature exists to catch. Treat it as a stop-and-ask: request the original signed file from the sender and compare.",
      },
      {
        question: "Is it safe to verify a confidential contract here?",
        answer:
          "Yes — the file never leaves your machine. Parsing and verification run in client-side JavaScript in your browser, with no upload. That's the specific reason to use a no-upload verifier for legal and commercial documents instead of services that process the PDF server-side.",
      },
      {
        question: "The signature is valid but from a certificate I don't recognize. Now what?",
        answer:
          "A valid signature proves the document is unchanged and was signed by whoever controls that certificate — it doesn't prove the certificate belongs to who you think. Check the issuer field: a known CA (DigiCert, GlobalSign, Sectigo, a government or platform CA) is what you want. A self-signed or unknown-issuer certificate on an important document warrants verifying the signer's identity through another channel.",
      },
    ],
  },

  "check-if-pdf-is-digitally-signed": {
    slug: "check-if-pdf-is-digitally-signed",
    toolName: "Check if a PDF Is Digitally Signed",
    metaTitle: "Check if a PDF Is Digitally Signed — Instant Free Check",
    metaDescription:
      "Not sure whether a PDF has a real digital signature? Drop it in — instantly see if it's cryptographically signed, by whom, and when. A signature picture on the page is not a digital signature.",
    headerTitle: "Check if a PDF Is Digitally Signed",
    headerDescription:
      "Instantly find out whether a PDF contains a real cryptographic digital signature — and if so, who signed it and when. Runs in your browser; nothing is uploaded.",
    definition:
      "Checking whether a PDF is digitally signed means detecting an embedded cryptographic signature in the file's structure — which is different from a signature image on the page. A digitally signed PDF carries the signer's certificate and a signed content hash; a picture of a signature carries neither.",
    quickAnswer:
      "Drop the PDF into the checker above — it instantly reports whether the file contains a cryptographic digital signature, and if so, the signer's name, certificate, and signing time. Important: a handwritten-looking signature image on the page is NOT a digital signature. This tool detects the real, verifiable kind embedded in the file's structure.",
    overview:
      "\"Is this PDF actually signed?\" comes up constantly — before countersigning a contract, when a filing requires a certified document, or when someone sends a PDF with a cursive scrawl on the last page and calls it signed. The visual mark tells you nothing: real digital signatures live in the PDF's internal structure, can be completely invisible on the page, and conversely a beautiful signature image can sit on a file with no cryptographic signature at all. This checker reads the file's structure directly and gives you a definitive answer in seconds — signed (by whom, when, still intact?) or not signed — without uploading the document anywhere.",
    keywords: [
      "check if pdf is digitally signed",
      "how to tell if a pdf is signed",
      "does this pdf have a digital signature",
      "pdf signed or not checker",
      "detect digital signature in pdf",
    ],
    keyTakeaways: [
      "A signature IMAGE on the page is not a digital signature — the real thing lives in the file structure",
      "Digital signatures can be invisible: no mark on any page, yet fully signed and verifiable",
      "The checker reads the PDF structure directly and answers definitively: signed or not",
      "If signed, you also get the signer, certificate issuer, timestamp, and integrity status",
      "Nothing is uploaded — detection runs entirely in your browser",
    ],
    howToSteps: [
      "Select or drop the PDF into the checker above.",
      "Read the verdict: digitally signed (with signer, certificate, and time) or no digital signature found.",
      "If it's signed, check the integrity status — signed AND unmodified is the state you want.",
      "If it's not signed and needs to be, sign it properly with the free Sign PDF tool rather than pasting a signature image.",
    ],
    aboutSections: [
      {
        heading: "Signature Picture ≠ Digital Signature",
        body: "The single most common confusion. An image of a handwritten signature — drawn with a mouse, photographed, or pasted in — is just pixels. It proves nothing, protects nothing, and any page editor can copy it onto another document. A digital signature is a cryptographic object embedded in the PDF: a hash of the entire document content, signed with the signer's private key, packaged with their identity certificate. It makes the document tamper-evident (change one byte and verification fails) and the signer identifiable. A PDF can have the image without the cryptography (looks signed, isn't), the cryptography without any image (is signed, looks blank), or both. Only reading the file structure — what this checker does — tells you which case you're holding.",
      },
      {
        heading: "Three Ways to Tell, Compared",
        body: "Adobe Acrobat shows a signature panel and a banner across the top ('Signed and all signatures are valid') when a document is digitally signed — reliable, but requires Acrobat and the banner only appears if Acrobat's trust settings cooperate. Some operating-system PDF viewers (Preview on macOS, browsers' built-in viewers) show signed PDFs with no indication whatsoever — absence of a banner there means nothing. This checker is the third way: structural detection in any browser, no install, and it works even when the signature is invisible or the viewer says nothing. It also goes one step further than detection — it verifies the signature it finds, so you learn 'signed, by X, on date Y, still intact' in one pass.",
      },
      {
        heading: "Why It Matters Whether a PDF Is Really Signed",
        body: "Legally and operationally, the cryptographic signature is what carries weight. Frameworks like eIDAS in the EU and ESIGN/UETA in the US give strong standing to qualified/verifiable electronic signatures precisely because they're tamper-evident and attributable — a pasted image is neither. Practically: a contract counterparty can repudiate an image ('anyone could have pasted that'), an unsigned filing can bounce at intake, and an audit can't rely on a document whose integrity can't be checked. Thirty seconds of checking beats discovering at dispute time that your 'signed' agreement never was.",
      },
    ],
    proTip:
      "Received a 'signed' PDF where this checker finds no digital signature? Don't just re-request — tell the sender specifically to use their tool's digital/certificate signing feature (not the draw-your-signature stamp), or point them at a proper signing tool. The distinction is exactly what they're likely getting wrong.",
    faqs: [
      {
        question: "How do I know if a PDF is digitally signed or just has a signature image?",
        answer:
          "Drop it into the checker above — it reads the PDF's internal structure. A digital signature shows up with the signer's certificate and timestamp; a signature image shows up as nothing, because images aren't signatures. Visually you often cannot tell the difference, which is the point of checking structurally.",
      },
      {
        question: "Can a PDF be digitally signed with nothing visible on the page?",
        answer:
          "Yes — invisible signatures are common and fully valid. The signature is a data object in the file; the visible stamp is optional decoration. Government and enterprise systems frequently sign documents invisibly. This checker detects them regardless of visibility.",
      },
      {
        question: "My PDF viewer shows no signature banner. Does that mean it's unsigned?",
        answer:
          "No. Many viewers — macOS Preview, most browser built-in viewers — simply don't surface digital signatures at all. Absence of a banner in those viewers tells you nothing. Check the file structurally (this tool) or open it in Acrobat's signature panel.",
      },
      {
        question: "Someone drew their signature in a PDF app. Is that legally a signature?",
        answer:
          "It can qualify as a basic electronic signature in many jurisdictions (intent to sign matters more than form), but it carries none of the tamper-evidence or attribution of a digital signature — it's easy to forge, easy to repudiate, and impossible to verify. For anything contested or regulated, a certificate-based digital signature is the defensible option.",
      },
      {
        question: "The PDF is signed — how do I check whether the signature is actually valid?",
        answer:
          "This checker verifies as it detects: you'll see the validity verdict, signer identity, certificate issuer, signing timestamp, and whether the document was modified after signing — the full verification, not just detection. For deeper detail on reading those results, see the Verify PDF Signature Online page.",
      },
    ],
  },
}

export function getSignatureSatelliteMetadata(slug: string): Metadata {
  const v = signatureSatellites[slug]
  if (!v) return {}
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    keywords: v.keywords,
    alternates: { canonical: `/pdf-tools/${slug}` },
  }
}

export function renderSignatureSatellitePage(slug: string) {
  const v = signatureSatellites[slug]

  const siblingLinks = Object.values(signatureSatellites)
    .filter((item) => item.slug !== slug)
    .map((item) => ({ name: item.headerTitle, href: `/pdf-tools/${item.slug}` }))

  const toolConfig = createToolConfig({
    toolName: v.toolName,
    description: v.metaDescription,
    metaTitle: v.metaTitle,
    metaDescription: v.metaDescription,
    path: `/pdf-tools/${slug}`,

    schemaOptions: {
      applicationCategory: "BusinessApplication",
      description: v.definition,
      alternateName: v.keywords,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },

    header: {
      title: v.headerTitle,
      description: v.headerDescription,
      titleSize: "medium",
      descriptionSize: "small",
      color: "green",
    },

    breadcrumbs: [
      { label: "PDF Tools", href: "/pdf-tools" },
      { label: "PDF Signature Checker", href: "/pdf-tools/pdf-signature-checker" },
      { label: v.headerTitle, href: `/pdf-tools/${slug}` },
    ],

    content: {
      definition: v.definition,
      quickAnswer: v.quickAnswer,
      keyTakeaways: v.keyTakeaways,
      overview: v.overview,
      howToSteps: v.howToSteps,

      aboutTool: (
        <div className="space-y-10">
          {v.aboutSections.map((section) => (
            <article key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">{section.heading}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{section.body}</p>
            </article>
          ))}

          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Ways to Check a PDF Signature, Compared
            </h2>
            <div className="overflow-x-auto">
              <GTable>
                <thead className="bg-muted text-foreground font-semibold">
                  <tr>
                    <th className="p-3 text-left">Method</th>
                    <th className="p-3 text-left">Needs install?</th>
                    <th className="p-3 text-left">File uploaded?</th>
                    <th className="p-3 text-left">Detects invisible signatures?</th>
                    <th className="p-3 text-left">Trust-chain depth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  <tr>
                    <td className="p-3 font-semibold">This checker (browser)</td>
                    <td className="p-3">No</td>
                    <td className="p-3">No — 100% local</td>
                    <td className="p-3">Yes</td>
                    <td className="p-3">Certificate details shown; full chain = second pass</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Adobe Acrobat signature panel</td>
                    <td className="p-3">Yes</td>
                    <td className="p-3">No</td>
                    <td className="p-3">Yes</td>
                    <td className="p-3">Full (AATL + configured trust)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Server-side verify websites</td>
                    <td className="p-3">No</td>
                    <td className="p-3 font-semibold">Yes — confidentiality risk</td>
                    <td className="p-3">Yes</td>
                    <td className="p-3">Varies</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">macOS Preview / browser viewers</td>
                    <td className="p-3">No</td>
                    <td className="p-3">No</td>
                    <td className="p-3 font-semibold">No — often shows nothing at all</td>
                    <td className="p-3">None</td>
                  </tr>
                </tbody>
              </GTable>
            </div>
          </article>
        </div>
      ),

      proTip: v.proTip,

      faqs: [
        ...v.faqs,
        {
          question: "Is this tool free?",
          answer:
            "Yes — free, no signup, no file-size games, and no upload: the PDF is analyzed entirely in your browser, which is exactly what you want for confidential signed documents.",
        },
      ],

      relatedTools: [
        { name: "PDF Signature Checker (full tool)", href: "/pdf-tools/pdf-signature-checker" },
        ...siblingLinks,
        { name: "Sign PDF (add a real digital signature)", href: "/pdf-tools/pdf-sign" },
        { name: "PDF Unlocker", href: "/pdf-tools/pdf-unlocker" },
        { name: "Hash Text Generator", href: "/crypto-tools/hash-text" },
        { name: "All PDF Tools", href: "/pdf-tools" },
      ],
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<PdfSignatureCheckerTool />)} />
}
