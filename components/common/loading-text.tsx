'use client';

import { useTranslations } from 'next-intl';

export function LoadingToolsText() {
  const t = useTranslations('common');
  return <>{t('loading')}</>;
}

export function LoadingFAQText() {
  const t = useTranslations('common');
  return <>{t('loadingFaq')}</>;
}
