#!/usr/bin/env node
/**
 * SEO & Structured Data Validator (GSC-style)
 *
 * Fetches the sitemap, crawls every page, and validates:
 *   - Title / Meta description
 *   - Heading hierarchy (h1‒h6)
 *   - BreadcrumbList JSON-LD
 *   - FAQPage JSON-LD
 *   - AggregateRating / Review snippets
 *   - HTTPS in all structured-data URLs
 *   - Sitemap image URL presence
 *   - noindex detection
 *
 * Usage:
 *   npm run dev                               # terminal 1
 *   npm run validate:seo                      # terminal 2 (default: http://localhost:3000)
 *   BASE_URL=https://www.fasttools.store npm run validate:seo   # production
 */

const BASE = process.env.BASE_URL || 'http://localhost:3000';
const CONCURRENCY = parseInt(process.env.CONCURRENCY || '5', 10);
const DOMAIN = 'fasttools.store';

// ─── Colors ──────────────────────────────────────────────────────────────────
const c = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    dim: '\x1b[2m',
    bold: '\x1b[1m',
    white: '\x1b[37m',
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
function tick(ok) { return ok ? `${c.green}✓${c.reset}` : `${c.red}✗${c.reset}`; }

function log(ok, label, detail = '') {
    const icon = tick(ok);
    const d = detail ? `${c.dim} ${detail}${c.reset}` : '';
    console.log(`  ${icon} ${label}${d}`);
    return ok;
}

// XML decode
function decodeXml(s) {
    return s.replace(/&amp;/g, '&')
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
}

// ─── Sitemap Parser ──────────────────────────────────────────────────────────
async function fetchSitemap() {
    const url = `${BASE}/sitemap.xml`;
    console.log(`${c.cyan}Fetching sitemap:${c.reset} ${url}\n`);
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`Sitemap fetch failed: HTTP ${res.status}`);
    const xml = await res.text();

    const pages = [];
    // Match each <url>...</url> block
    const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/gi) || [];
    for (const block of urlBlocks) {
        const locM = block.match(/<loc>(.*?)<\/loc>/i);
        if (!locM) continue;
        const loc = locM[1].trim();

        // Collect image URLs
        const images = [];
        const imgRe = /<image:loc>(.*?)<\/image:loc>/gi;
        let im;
        while ((im = imgRe.exec(block)) !== null) {
            images.push(decodeXml(im[1].trim()));
        }
        pages.push({ url: loc, images });
    }
    return pages;
}

// ─── JSON-LD Extractor ───────────────────────────────────────────────────────
function extractJsonLd(html) {
    const schemas = [];
    const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let m;
    while ((m = re.exec(html)) !== null) {
        try {
            const raw = m[1].trim();
            if (!raw || raw === 'null') continue;
            const data = JSON.parse(raw);
            if (data['@graph'] && Array.isArray(data['@graph'])) {
                data['@graph'].forEach(item => schemas.push(item));
            } else {
                schemas.push(data);
            }
        } catch (e) {
            schemas.push({ _parseError: String(e), _raw: m[1].slice(0, 100) });
        }
    }
    return schemas;
}

function findSchemas(schemas, types) {
    const t = typeof types === 'string' ? [types] : types;
    const results = [];
    function walk(obj) {
        if (!obj || typeof obj !== 'object') return;
        if (t.includes(obj['@type'])) results.push(obj);
        // Check nested properties where schemas can be embedded
        for (const key of ['breadcrumb', 'mainEntity', 'hasPart', 'about']) {
            if (obj[key]) {
                if (Array.isArray(obj[key])) obj[key].forEach(walk);
                else walk(obj[key]);
            }
        }
    }
    schemas.forEach(walk);
    return results;
}

// ─── Per-Page Validation ─────────────────────────────────────────────────────
async function validatePage(pageInfo) {
    const { url, images: sitemapImages } = pageInfo;
    const issues = { breadcrumb: [], faq: [], review: [], https: [], heading: [], seo: [], images: [] };
    let pass = 0;
    let fail = 0;

    const p = url.replace(/https?:\/\/[^/]+/, '');
    console.log(`\n${c.bold}--- ${p || '/'} ---${c.reset}`);

    // Fetch
    let html, res;
    try {
        res = await fetch(url, { redirect: 'follow' });
        html = await res.text();
        if (log(res.ok, `HTTP ${res.status}`, res.url)) pass++; else { fail++; issues.seo.push(`HTTP ${res.status}`); }
    } catch (e) {
        console.log(`  ${c.red}✗ Fetch failed: ${e.message}${c.reset}`);
        return { url, pass: 0, fail: 1, issues: { ...issues, seo: [`Fetch failed: ${e.message}`] } };
    }

    const isDev = BASE.includes('localhost');
    const head = html.slice(0, (html.indexOf('</head>') + 7) || html.length);
    const body = html.includes('<body') ? html.slice(html.indexOf('<body')) : html;

    // ── noindex ──
    const noindexMeta = /<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex[^"']*["']/i.test(head) ||
        /<meta[^>]*content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots["']/i.test(head);
    const noindexHeader = res.headers.get('x-robots-tag')?.includes('noindex');
    if (noindexMeta || noindexHeader) {
        if (log(false, 'Page is NOINDEX', noindexMeta ? 'meta tag' : 'X-Robots-Tag')) pass++; else { fail++; issues.seo.push('noindex'); }
    }

    // ── Title ──
    if (!isDev) {
        const titleM = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
        const title = titleM ? titleM[1].replace(/<[^>]+>/g, '').trim() : '';
        if (log(title.length > 0, 'Title present', `${title.length} chars`)) pass++; else { fail++; issues.seo.push('Missing title'); }

        // Meta description
        const descM = head.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
            head.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
        const desc = descM ? descM[1].trim() : '';
        if (log(desc.length > 0, 'Meta description present', `${desc.length} chars`)) pass++; else { fail++; issues.seo.push('Missing meta description'); }
        if (desc.length > 0) {
            if (log(desc.length >= 70 && desc.length <= 160, 'Meta description 70–160 chars', `${desc.length}`)) pass++; else { fail++; issues.seo.push(`Meta desc length: ${desc.length}`); }
        }
    }

    // ── Canonical ──
    const canonicalM = head.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
    const canonical = canonicalM ? canonicalM[1] : '';
    if (canonical) {
        if (log(canonical.startsWith('https://'), 'Canonical uses HTTPS', canonical.slice(0, 60))) pass++; else { fail++; issues.https.push('Canonical not HTTPS'); }
    }

    // Strip scripts, styles, etc. before checking visual headings (to avoid counting tags in JSON-LD strings)
    const contentBody = body.replace(/<(script|style|noscript|textarea)[\s\S]*?<\/\1>/gi, '');

    // ── Heading Hierarchy ──
    const h1Count = (contentBody.match(/<h1[\s>]/gi) || []).length;
    if (log(h1Count === 1, 'Exactly one H1', `found ${h1Count}`)) pass++; else { fail++; issues.heading.push(`H1 count: ${h1Count}`); }

    // Check nesting: h levels should not skip (e.g. h1 → h3 without h2)
    const headings = [];
    const hRe = /<(h[1-6])[\s>]/gi;
    let hm;
    while ((hm = hRe.exec(contentBody)) !== null) {
        headings.push(parseInt(hm[1][1], 10));
    }
    let nestingOk = true;
    for (let i = 1; i < headings.length; i++) {
        if (headings[i] > headings[i - 1] + 1) {
            nestingOk = false;
            break;
        }
    }
    if (log(nestingOk, 'Heading nesting (no skipped levels)', `${headings.length} headings`)) pass++; else { fail++; issues.heading.push('Skipped heading level'); }

    // ── <main> landmark ──
    const mainCount = (body.match(/<main[\s>]/gi) || []).length;
    if (log(mainCount >= 1, '<main> landmark', `found ${mainCount}`)) pass++; else { fail++; issues.seo.push('Missing <main>'); }

    // ── JSON-LD Schemas ──
    const schemas = extractJsonLd(html);
    if (log(schemas.length > 0, 'JSON-LD schemas found', `${schemas.length}`)) pass++; else { fail++; issues.seo.push('No JSON-LD'); }

    // Parse errors
    const parseErrors = schemas.filter(s => s._parseError);
    if (parseErrors.length > 0) {
        log(false, 'JSON-LD parse errors', `${parseErrors.length}`);
        fail++;
        issues.seo.push(`JSON-LD parse errors: ${parseErrors.length}`);
    }

    // ── BreadcrumbList ──
    const bc = findSchemas(schemas, 'BreadcrumbList')[0];
    if (bc) {
        if (log(true, 'BreadcrumbList schema present')) pass++; else fail++;
        const items = bc.itemListElement;
        if (log(Array.isArray(items), 'BreadcrumbList.itemListElement is array')) pass++; else { fail++; issues.breadcrumb.push('itemListElement not array'); }
        if (Array.isArray(items)) {
            if (log(items.length >= 2, `BreadcrumbList ≥2 items`, `${items.length}`)) pass++; else { fail++; issues.breadcrumb.push(`Only ${items.length} item(s)`); }
            // Check first item is HTTPS
            const first = items[0];
            if (first) {
                const itemUrl = first.item || '';
                if (log(String(itemUrl).startsWith('https://'), 'First breadcrumb uses HTTPS', String(itemUrl).slice(0, 50))) pass++;
                else { fail++; issues.breadcrumb.push(`First item not HTTPS: ${itemUrl}`); }
            }
            // Check all items have position, name
            for (const it of items) {
                if (!it.position || !it.name) {
                    log(false, 'Breadcrumb item missing position or name');
                    fail++;
                    issues.breadcrumb.push('Item missing position/name');
                    break;
                }
            }
        }
    } else {
        log(false, 'BreadcrumbList schema present');
        fail++;
        issues.breadcrumb.push('Missing BreadcrumbList');
    }

    // ── FAQPage ──
    const faq = findSchemas(schemas, 'FAQPage')[0];
    if (faq) {
        if (log(true, 'FAQPage schema present')) pass++; else fail++;
        const entities = faq.mainEntity;
        if (log(Array.isArray(entities), 'FAQPage.mainEntity is array')) pass++; else { fail++; issues.faq.push('mainEntity not array'); }
        if (Array.isArray(entities)) {
            if (log(entities.length > 0, `FAQPage has questions`, `${entities.length}`)) pass++; else { fail++; issues.faq.push('No questions'); }
            if (entities.length > 0) {
                const q = entities[0];
                if (log(q['@type'] === 'Question', 'First entity is Question')) pass++; else { fail++; issues.faq.push('First entity not Question type'); }
                if (log(!!(q.acceptedAnswer && q.acceptedAnswer.text), 'acceptedAnswer.text present')) pass++; else { fail++; issues.faq.push('Missing acceptedAnswer.text'); }
            }
            // Check empty answers
            const emptyAnswers = entities.filter(e => !e?.acceptedAnswer?.text || String(e.acceptedAnswer.text).trim() === '');
            if (emptyAnswers.length > 0) {
                log(false, `Empty answers found`, `${emptyAnswers.length}`);
                fail++;
                issues.faq.push(`${emptyAnswers.length} empty answers`);
            }
        }
    } else {
        // Not necessarily an error — not all pages need FAQs
        log(false, 'FAQPage schema present', 'optional');
        // Don't count as fail for pages that don't need it
    }

    // ── AggregateRating / Review Snippets ──
    const withRating = schemas.filter(s => s.aggregateRating);
    if (withRating.length > 0) {
        if (log(true, 'AggregateRating found', `${withRating.length} schema(s)`)) pass++; else fail++;
        const ar = withRating[0].aggregateRating;
        if (ar) {
            if (log(!!ar.ratingValue, 'ratingValue present', String(ar.ratingValue))) pass++; else { fail++; issues.review.push('Missing ratingValue'); }
            if (log(!!(ar.reviewCount || ar.ratingCount), 'reviewCount/ratingCount present')) pass++; else { fail++; issues.review.push('Missing reviewCount/ratingCount'); }
            const best = String(ar.bestRating);
            if (log(best === '5', 'bestRating = 5', best)) pass++; else { fail++; issues.review.push(`bestRating = ${best}`); }
            const worst = String(ar.worstRating);
            if (log(worst === '1', 'worstRating = 1', worst)) pass++; else { fail++; issues.review.push(`worstRating = ${worst}`); }
        }
    }

    // ── HTTPS in all JSON-LD ──
    const allJson = JSON.stringify(schemas);
    const badHttp = allJson.includes(`http://www.${DOMAIN}`) || allJson.includes(`http://${DOMAIN}`);
    if (log(!badHttp, `No http:// links to ${DOMAIN} in JSON-LD`)) pass++; else { fail++; issues.https.push('http:// in JSON-LD'); }

    const hasHttps = allJson.includes(`https://www.${DOMAIN}`);
    if (schemas.length > 0) {
        if (log(hasHttps, `https://www.${DOMAIN} used in JSON-LD`)) pass++; else { fail++; issues.https.push('Missing https canonical in JSON-LD'); }
    }

    // ── Sitemap Image Verification ──
    if (sitemapImages && sitemapImages.length > 0) {
        for (const imgUrl of sitemapImages) {
            const relative = imgUrl.replace(`https://www.${DOMAIN}`, '');
            const encoded = encodeURIComponent(relative);
            const imgInPage = html.includes(imgUrl) ||
                html.includes(relative) ||
                html.includes(encoded);
            if (log(imgInPage, 'Sitemap image in page', imgUrl.slice(-50))) pass++; else { fail++; issues.images.push(imgUrl); }
        }
    }

    return { url, pass, fail, issues };
}

// ─── Concurrency Pool ────────────────────────────────────────────────────────
async function runWithConcurrency(items, fn, limit) {
    const results = [];
    let idx = 0;

    async function worker() {
        while (idx < items.length) {
            const i = idx++;
            results[i] = await fn(items[i]);
            // Small delay between requests
            await new Promise(r => setTimeout(r, 150));
        }
    }

    const workers = Array.from({ length: Math.min(limit, items.length) }, () => worker());
    await Promise.all(workers);
    return results;
}

// ─── Summary ─────────────────────────────────────────────────────────────────
function printSummary(results) {
    console.log(`\n${c.bold}${'═'.repeat(70)}${c.reset}`);
    console.log(`${c.bold}${c.cyan}  SEO VALIDATION SUMMARY${c.reset}`);
    console.log(`${'═'.repeat(70)}\n`);

    const totalPass = results.reduce((s, r) => s + r.pass, 0);
    const totalFail = results.reduce((s, r) => s + r.fail, 0);
    const pagesWithIssues = results.filter(r => r.fail > 0);

    console.log(`  Pages crawled:    ${c.bold}${results.length}${c.reset}`);
    console.log(`  Total checks:     ${c.bold}${totalPass + totalFail}${c.reset}`);
    console.log(`  ${c.green}Passed:           ${totalPass}${c.reset}`);
    console.log(`  ${c.red}Failed:           ${totalFail}${c.reset}`);
    console.log(`  Pages w/ issues:  ${c.bold}${pagesWithIssues.length}${c.reset}`);

    // Group issues by type
    const issueTypes = ['breadcrumb', 'faq', 'review', 'https', 'heading', 'seo', 'images'];
    for (const type of issueTypes) {
        const affected = results.filter(r => r.issues[type] && r.issues[type].length > 0);
        if (affected.length === 0) continue;

        console.log(`\n  ${c.bold}${c.yellow}▸ ${type.toUpperCase()} issues (${affected.length} pages)${c.reset}`);
        for (const r of affected) {
            const path = r.url.replace(/https?:\/\/[^/]+/, '') || '/';
            for (const detail of r.issues[type]) {
                console.log(`    ${c.red}✗${c.reset} ${c.dim}${path}${c.reset}  ${detail}`);
            }
        }
    }

    // Clean pages
    const cleanPages = results.filter(r => r.fail === 0);
    if (cleanPages.length > 0) {
        console.log(`\n  ${c.green}${c.bold}▸ ${cleanPages.length} pages passed all checks ✓${c.reset}`);
    }

    console.log(`\n${'═'.repeat(70)}\n`);

    if (totalFail > 0) {
        console.log(`${c.red}${c.bold}  ⚠  ${totalFail} issue(s) found. Fix these to improve GSC structured data status.${c.reset}\n`);
    } else {
        console.log(`${c.green}${c.bold}  ✔  All checks passed! Structured data looks healthy.${c.reset}\n`);
    }
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
    console.log(`${c.bold}${c.cyan}╔══════════════════════════════════════════════════════════════╗${c.reset}`);
    console.log(`${c.bold}${c.cyan}║   SEO & Structured Data Validator (GSC-style)                ║${c.reset}`);
    console.log(`${c.bold}${c.cyan}╚══════════════════════════════════════════════════════════════╝${c.reset}`);
    console.log(`\n  Base URL:    ${c.bold}${BASE}${c.reset}`);
    console.log(`  Concurrency: ${CONCURRENCY}\n`);

    const sitemapPages = await fetchSitemap();
    console.log(`  ${c.green}Found ${sitemapPages.length} URLs in sitemap${c.reset}\n`);

    const imageCount = sitemapPages.reduce((s, p) => s + p.images.length, 0);
    if (imageCount > 0) {
        console.log(`  ${c.cyan}Sitemap images: ${imageCount}${c.reset}\n`);
    }

    const results = await runWithConcurrency(sitemapPages, validatePage, CONCURRENCY);

    printSummary(results);

    const totalFail = results.reduce((s, r) => s + r.fail, 0);
    process.exit(totalFail > 0 ? 1 : 0);
}

main().catch(e => {
    console.error(`${c.red}Fatal: ${e.message}${c.reset}`);
    process.exit(1);
});
