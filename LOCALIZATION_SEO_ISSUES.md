# Critical SEO Issues Found in Localization

## 🔴 CRITICAL ISSUES

### 1. Duplicate Canonical URLs
**Problem**: `createMetadata` doesn't account for locale, so all language versions of the same page have the SAME canonical URL.
- `/about` (English) → canonical: `https://www.fasttools.store/about`
- `/es/about` (Spanish) → canonical: `https://www.fasttools.store/about` ❌
- `/de/about` (German) → canonical: `https://www.fasttools.store/about` ❌

**Impact**: Google sees duplicate content, potential ranking penalties.

**Fix**: Make canonical URLs locale-aware.

### 2. Missing Page-Specific Hreflang
**Problem**: Individual pages don't have hreflang links to their equivalents in other languages. Only layout has base-level hreflang.

**Impact**: Search engines can't properly associate language versions, hurting international SEO.

**Fix**: Add page-specific hreflang alternates to each page's metadata.

### 3. Hardcoded OpenGraph Locale
**Problem**: `createMetadata` hardcodes `locale: "en_US"` for all pages.

**Impact**: Incorrect locale in social sharing cards.

**Fix**: Make OpenGraph locale dynamic per page locale.

## 🟡 ISSUES

### 4. Layout Metadata Not Translated
**Problem**: Layout has hardcoded English titles/descriptions instead of using translations per locale.

**Impact**: SEO metadata not optimized per language.

**Fix**: Use translations for layout metadata.

## ✅ GOOD

- Sitemap includes all language URLs ✓
- Hreflang in HTML metadata (layout level) ✓
- No hreflang in sitemap (correct) ✓
- Separate URLs per language ✓
