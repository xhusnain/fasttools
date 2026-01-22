import { createMetadata } from "@/lib/metadata-base"
import type { Metadata } from "next"
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cookies' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/cookie-preferences",
    breadcrumbs: [
      { label: t('pageTitle'), href: "/cookie-preferences" }
    ],
    locale
  });
}

export default function CookiePreferencesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
