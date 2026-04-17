import { Metadata } from "next";
import CategoryPage from "@/components/category-page";

export const metadata: Metadata = {
  title: "Free Security & Privacy Tools - FastTools",
  description: "Privacy-focused tools for encryption, data protection, steganography, and secure information handling. All tools work offline in your browser.",
  openGraph: {
    title: "Free Security & Privacy Tools - FastTools",
    description: "Hide secrets in images, manage sensitive data, and protect your privacy with client-side encryption tools.",
  },
};

export default function SecurityToolsPage() {
  return (
    <CategoryPage
      categoryId="security-tools"
      title="Free Security & Privacy Tools"
      description="Privacy-focused tools for encryption, data protection, steganography, and secure information handling. All tools work offline in your browser."
    />
  );
}
