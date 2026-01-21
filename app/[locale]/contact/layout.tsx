import { createMetadata } from "@/lib/metadata-base"
import type { Metadata } from "next"
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('contact');
  const tCommon = await getTranslations('common');
  
  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/contact",
    breadcrumbs: [
      { label: tCommon('contact'), href: "/contact" }
    ],
    faqs: [
      {
        question: t('faq1Q'),
        answer: t('faq1A')
      },
      {
        question: t('faq2Q'),
        answer: t('faq2A')
      },
      {
        question: t('faq3Q'),
        answer: t('faq3A')
      },
      {
        question: t('faq4Q'),
        answer: t('faq4A')
      }
    ]
  });
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
