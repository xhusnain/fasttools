# Lighthouse Reports

This directory contains Lighthouse audit reports for the project.

## Running Audits

### Audit a Single Page
```bash
# Audit the homepage
bun run audit:page /

# Audit another page
bun run audit:page /about
```

### Audit All Pages

```bash
# Mobile audit (default)
bun run audit:all

# or explicitly
bun run audit:mobile

# Desktop audit
bun run audit:desktop
```

## Report Files

After running audits, you'll find:

- `summary-[mobile|desktop]-[timestamp].html` - Overview of all pages with scores
- `[page]-[mobile|desktop]-[timestamp].html` - Individual page HTML reports
- `[page]-[mobile|desktop]-[timestamp].json` - Individual page JSON data

## Understanding Scores

Each page is scored in 5 categories (0-100):

- **Performance** - Loading speed and runtime performance
- **Accessibility** - Accessibility features and ARIA compliance
- **Best Practices** - Modern web development best practices
- **SEO** - Search engine optimization
- **PWA** - Progressive Web App capabilities

### Score Ranges
- 🟢 **90-100** - Good
- 🟡 **50-89** - Needs improvement
- 🔴 **0-49** - Poor

## Fixing Issues

1. Run `bun run audit:all` to get a comprehensive overview
2. Open the `summary-*.html` file to see all pages at a glance
3. Click on individual page reports to see specific issues
4. Fix the issues in your code
5. Re-run the audit to verify improvements

## Configuration

Audit settings can be customized in `scripts/lighthouse-config.js`:
- Throttling settings
- Device emulation
- Chrome flags
- Categories to audit

## Environment Variables

- `LIGHTHOUSE_BASE_URL` - Base URL to audit (default: http://localhost:3000)
- `LIGHTHOUSE_FORM_FACTOR` - mobile or desktop (default: mobile)
