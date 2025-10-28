# Google Search Console - Handling Deleted URLs

## Overview

When you remove pages from your website, they may still appear in Google Search results and show as "Not Found" errors in Google Search Console. This guide explains how to properly handle deleted URLs according to Google's best practices.

## Understanding HTTP Status Codes

### 404 Not Found
- **When to use**: Content temporarily unavailable or never existed
- **Google's response**: Eventually removes from index (may take time)
- **SEO impact**: No penalty

### 410 Gone
- **When to use**: Content permanently removed and will never return
- **Google's response**: Removes from index faster than 404
- **SEO impact**: No penalty
- **Recommended for**: Permanently deleted pages

### 301 Redirect
- **When to use**: Content moved to a new URL
- **Google's response**: Transfers SEO value to new URL
- **SEO impact**: Preserves link equity

## Our Implementation

We've implemented a **410 Gone** system for permanently deleted URLs:

### 1. Gone URLs List (`lib/gone.ts`)

All permanently deleted URLs are maintained in `/lib/gone.ts`. This includes:
- Removed guide pages (`/guides/*`)
- Deleted tool pages (`/tools/*`)
- Discontinued feature pages

### 2. Middleware Handler (`middleware.ts`)

The middleware automatically:
- Checks incoming requests against the gone URLs list
- Returns HTTP 410 status for deleted pages
- Signals to Google that content is permanently removed

### 3. Adding New Deleted URLs

When you remove a page from your site:

1. Open `lib/gone.ts`
2. Add the URL path to the `goneUrls` Set:
```typescript
export const goneUrls = new Set([
  // ... existing URLs ...
  '/your/deleted/path',
])
```
3. Deploy the changes

## Google Search Console Actions

### Option 1: Let Google Handle It (Recommended)

**No action required**. With 410 Gone status:
- Google will automatically detect the 410 status
- Remove the URL from search results within a few weeks
- Update the Search Console report

### Option 2: Request Manual Removal (Faster)

For faster removal from Google Search:

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console

2. **Navigate to Removals Tool**
   - Click "Removals" in the left sidebar
   - Click "New Request" button

3. **Submit URL Removal**
   - Enter the URL you want to remove
   - Select "Remove this URL only"
   - Click "Next" then "Submit Request"

4. **Bulk Removal (if needed)**
   - For multiple URLs with same prefix (e.g., `/guides/*`)
   - Select "Remove all URLs with this prefix"
   - This removes entire directories at once

### Option 3: Update Sitemap

Ensure your sitemap doesn't include deleted URLs:

1. Check `app/sitemap.ts` doesn't generate deleted URLs
2. Submit updated sitemap in Google Search Console:
   - Go to "Sitemaps" section
   - Remove old sitemap (if needed)
   - Add/resubmit current sitemap URL

## Current Deleted URLs

The following URLs now return 410 Gone status:

### Guide Pages
- `/guides/instagram-dp-viewer-guide`
- `/guides/ai-qr-art-generator-guide`
- `/guides/sales-tax-calculator-guide`
- `/guides/markdown-previewer-guide`
- `/guides/emi-calculator-guide`
- `/guides/gpa-calculator-guide`
- `/guides/jwt-decoder-guide`
- `/guides/pace-calculator-guide`
- `/guides/mortgage-calculator-guide`
- `/guides/ai-pet-name-generator-guide`
- `/guides/background-blur-guide`
- `/guides/amortization-calculator-guide`
- `/guides/salary-calculator-guide`
- `/guides/ai-song-lyrics-generator-guide`
- `/guides/year-end-countdown-guide`
- `/guides/html-beautifier-guide`
- `/guides/tip-calculator-guide`
- `/guides/json-to-csv-converter-guide`
- `/guides/regex-tester-guide`
- `/guides/future-age-predictor-guide`
- `/guides/temperature-converter-guide`
- `/guides/lorem-ipsum-guide`
- `/guides/qr-code-generator-guide`
- `/guides/date-difference-calculator-guide`
- `/guides/zodiac-sign-finder-guide`
- `/guides/standard-deviation-guide`
- `/guides/scientific-calculator-guide`
- `/guides/image-to-text-ocr-guide`
- `/guides/developer-tools-guide`
- `/guides/bmr-calculator-guide`
- `/guides/paypal-fee-calculator-guide`
- `/guides/inflation-calculator-guide`
- `/guides/meta-tags-guide`
- `/guides/investment-calculator-guide`
- `/guides/compound-interest-calculator-guide`
- `/guides/retirement-calculator-guide`
- `/guides/html-to-markdown-converter-guide`
- `/guides/love-calculator-guide`
- `/guides/ip-subnet-calculator-guide`
- `/guides/percentage-calculator-guide`
- `/guides/bmi-calculator-guide`
- `/guides/finance-calculator-guide`
- `/guides/ai-meme-generator-guide`
- `/guides/interest-rate-calculator-guide`
- `/guides/pregnancy-calculator-guide`
- `/guides/age-in-hours-calculator-guide`
- `/guides/color-palette-generator-guide`
- `/guides/hex-to-rgb-converter-guide`

### Tool Pages
- `/tools/body-fat-calculator`
- `/tools/mortgage-calculator`
- `/tools/bmr-calculator`
- `/tools/interest-rate-calculator`
- `/tools/scientific-calculator`
- `/tools/calorie-calculator`
- `/tools/gpa-calculator`
- `/tools/sales-tax-calculator`
- `/tools/pregnancy-calculator`
- `/tools/investment-calculator`
- `/tools/payment-calculator`
- `/tools/conversion-calculator`
- `/tools/standard-deviation-calculator`
- `/tools/finance-calculator`

### Other Pages
- `/social-media-tools/youtube-downloader`
- `/resources`

## Expected Timeline

After deploying the 410 Gone responses:

- **Within 1-2 days**: Google crawls and detects 410 status
- **Within 1-2 weeks**: URLs start disappearing from search results
- **Within 4-6 weeks**: Most/all URLs removed from index
- **Manual removal request**: 1-3 days for removal

## Monitoring Progress

1. **Check Google Search Console**
   - Go to "Pages" report
   - Look for "Not found (404)" section
   - Count should decrease over time

2. **Test URLs Manually**
   - Visit your deleted URLs
   - Confirm they return blank page (410 status)
   - Use browser DevTools Network tab to verify 410 status

3. **Search Google**
   - Use `site:fasttools.store` search
   - Check if deleted URLs still appear
   - Re-check weekly to monitor removal progress

## Important Notes

✅ **DO:**
- Use 410 Gone for permanently deleted content
- Keep the `gone.ts` file updated
- Monitor Google Search Console regularly
- Be patient - removal takes time

❌ **DON'T:**
- Redirect deleted pages to homepage (bad UX)
- Remove legitimate 404/410 pages (they're normal)
- Worry about SEO penalties (there are none)
- Expect instant removal (Google needs time to crawl)

## If Content Moved Instead of Deleted

If you renamed or moved content to a new URL, use redirects instead:

1. Remove the URL from `lib/gone.ts` (if added)
2. Add a redirect in `next.config.mjs`:

```javascript
async redirects() {
  return [
    {
      source: '/old-path',
      destination: '/new-path',
      permanent: true, // 301 redirect
    },
  ]
}
```

## Need Help?

- [Google Search Console Help](https://support.google.com/webmasters)
- [Google's 404 Best Practices](https://developers.google.com/search/docs/crawling-indexing/http-status-codes)
- [Next.js Middleware Docs](https://nextjs.org/docs/app/building-your-application/routing/middleware)

## Summary

You now have a professional system for handling deleted URLs:
1. ✅ **410 Gone status** automatically returned for deleted pages
2. ✅ **Centralized list** of deleted URLs in `lib/gone.ts`
3. ✅ **Google-friendly** approach that follows best practices
4. ✅ **No SEO penalty** - proper handling of removed content

Google will automatically remove these URLs from search results within a few weeks. You can optionally use the manual removal tool in Google Search Console to speed up the process.

