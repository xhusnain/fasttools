# Bing IndexNow Integration

This project includes a script to automatically submit your site's URLs to Microsoft's IndexNow API for faster indexing on Bing and other participating search engines.

## What is IndexNow?

IndexNow is a protocol that allows websites to instantly notify search engines about the latest content changes. When you notify search engines via IndexNow, they instantly know that a URL has been added, updated, or deleted.

**Search engines that support IndexNow:**
- Microsoft Bing
- Yandex
- Naver
- Seznam.cz
- And more...

## Setup

### 1. API Key File

The API key file has already been created at:
```
/public/8b4ac52646554f4fb3479eeebcadb3c2.txt
```

This file is publicly accessible at:
```
https://www.fasttools.store/8b4ac52646554f4fb3479eeebcadb3c2.txt
```

**Important:** Do not delete or modify this file. Search engines need it to verify ownership of your domain.

### 2. Configuration

The script is pre-configured with the following settings:

- **Host:** `www.fasttools.store`
- **API Key:** `8b4ac52646554f4fb3479eeebcadb3c2`
- **Sitemap URL:** `https://www.fasttools.store/sitemap.xml`
- **Image Sitemap URL:** `https://www.fasttools.store/image-sitemap.xml`

If you need to change these settings, edit `/scripts/submit-to-indexnow.js` and update the `CONFIG` object.

## Usage

### Running the Script

To submit all your URLs to IndexNow, simply run:

```bash
npm run index-now
```

### What the Script Does

1. **Fetches URLs** from your main sitemap (`sitemap.xml`)
2. **Fetches Image URLs** from your image sitemap (`image-sitemap.xml`)
3. **Combines and deduplicates** all URLs
4. **Submits** them to IndexNow API in batches (max 10,000 URLs per batch)
5. **Logs results** with color-coded output for easy monitoring

### When to Run

Run this script:
- ✅ After publishing new content
- ✅ After updating existing pages
- ✅ After major site changes
- ✅ Periodically (weekly/monthly) to ensure all URLs are indexed
- ⚠️ **Not too frequently** - avoid spamming (wait at least a few hours between runs)

## Output & Logging

The script provides detailed, color-coded logging:

- **🟢 Green (Success):** Successful operations
- **🔴 Red (Error):** Errors that need attention
- **🔵 Blue (Info):** General information
- **🟡 Yellow (Warning):** Warnings and non-critical issues

### Example Output

```
============================================================
Bing IndexNow Submission Script
============================================================
Started at: 10/27/2025, 10:30:00 AM

============================================================
Configuration
============================================================
ℹ Host: www.fasttools.store
ℹ Base URL: https://www.fasttools.store
ℹ API Key: 8b4ac526...
ℹ Key Location: https://www.fasttools.store/8b4ac52646554f4fb3479eeebcadb3c2.txt
ℹ IndexNow Endpoint: https://api.indexnow.org/indexnow

============================================================
Fetching URLs
============================================================
ℹ Fetching sitemap from: https://www.fasttools.store/sitemap.xml
✓ Found 150 URLs in main sitemap
ℹ Fetching image sitemap from: https://www.fasttools.store/image-sitemap.xml
✓ Found 45 unique image URLs in image sitemap

============================================================
URL Summary
============================================================
ℹ Main sitemap URLs: 150
ℹ Image URLs: 45
ℹ Total unique URLs: 175
ℹ Split into 1 batch(es) of max 10000 URLs each

============================================================
Submitting to IndexNow
============================================================

Batch 1/1:
ℹ Submitting 175 URLs to IndexNow...
✓ Successfully submitted 175 URLs

============================================================
Submission Summary
============================================================
✓ Successful batches: 1/1
✓ Total URLs submitted: 175/175

============================================================
Complete
============================================================
Finished at: 10/27/2025, 10:30:15 AM
Total time: 15.23s
```

## Response Codes

The script handles all IndexNow API response codes:

| Code | Status | Meaning |
|------|--------|---------|
| 200 | ✅ Success | URL submitted successfully |
| 202 | ✅ Accepted | URLs accepted for processing |
| 400 | ❌ Bad Request | Invalid format |
| 403 | ❌ Forbidden | API key not valid |
| 422 | ❌ Unprocessable | URLs don't belong to host or key mismatch |
| 429 | ⚠️ Rate Limited | Too many requests - try again later |

## Troubleshooting

### Error: 403 Forbidden

**Problem:** API key is not valid or not found.

**Solution:**
1. Verify the key file exists at `/public/8b4ac52646554f4fb3479eeebcadb3c2.txt`
2. Check that it's accessible at `https://www.fasttools.store/8b4ac52646554f4fb3479eeebcadb3c2.txt`
3. Ensure the file contains only the key: `8b4ac52646554f4fb3479eeebcadb3c2`

### Error: 422 Unprocessable Entity

**Problem:** URLs don't belong to the configured host.

**Solution:**
1. Check that all URLs in your sitemap start with `https://www.fasttools.store`
2. Verify the `host` in CONFIG matches your domain exactly

### Error: 429 Too Many Requests

**Problem:** You've hit the rate limit.

**Solution:**
1. Wait at least a few hours before trying again
2. Don't run the script too frequently (daily at most, weekly recommended)

### No URLs Found

**Problem:** Script can't find any URLs in your sitemaps.

**Solution:**
1. Verify your sitemaps are accessible:
   - `https://www.fasttools.store/sitemap.xml`
   - `https://www.fasttools.store/image-sitemap.xml`
2. Check that your Next.js build has generated the sitemaps
3. Run `npm run build` to regenerate sitemaps

## Best Practices

1. **Don't over-submit:** Only submit when you have new or updated content
2. **Monitor logs:** Check the output for any errors or warnings
3. **Keep key file secure:** Don't share your API key publicly (though it's less sensitive than other API keys)
4. **Batch updates:** If you update multiple pages, wait and submit all at once rather than submitting after each change
5. **Verify sitemaps:** Ensure your sitemaps are up-to-date before running the script

## Additional Resources

- [IndexNow Official Documentation](https://www.indexnow.org/documentation)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [IndexNow Protocol Specification](https://www.indexnow.org/protocol)

## Support

If you encounter issues:
1. Check the error logs (they're detailed and color-coded)
2. Verify your API key file is accessible
3. Ensure your sitemaps are working correctly
4. Check that your site is publicly accessible

---

**Last Updated:** October 27, 2025

