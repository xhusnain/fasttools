import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es', 'de', 'pt-BR', 'ar', 'zh-CN'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: true // Enable automatic locale detection from Accept-Language header
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
