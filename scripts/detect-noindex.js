const https = require('https');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Configuration
const BASE_URL = 'https://www.fasttools.store'; // Or 'http://localhost:3000' for local testing if running
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

// Helper to fetch URL
function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve({
                data,
                headers: res.headers,
                statusCode: res.statusMessage
            }));
            res.on('error', reject);
        }).on('error', reject);
    });
}

// Parse Sitemap XML to get URLs
function parseSitemap(xml) {
    const urls = [];
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = regex.exec(xml)) !== null) {
        urls.push(match[1]);
    }
    return urls;
}

// Check a single URL for noindex
async function checkUrl(url) {
    try {
        console.log(`Checking ${url}...`);
        const { data, headers, statusCode } = await fetchUrl(url);

        if (statusCode !== 'OK') {
            return { url, status: statusCode, noindex: true, reason: `Status: ${statusCode}` };
        }

        // Check HTTP Header
        if (headers['x-robots-tag'] && headers['x-robots-tag'].includes('noindex')) {
            return { url, status: 200, noindex: true, reason: 'Header: X-Robots-Tag' };
        }

        // Check HTML Meta Tag
        const dom = new JSDOM(data);
        const robotsMeta = dom.window.document.querySelector('meta[name="robots"]');
        if (robotsMeta) {
            const content = robotsMeta.getAttribute('content');
            if (content && content.toLowerCase().includes('noindex')) {
                return { url, status: 200, noindex: true, reason: 'Meta Tag: robots' };
            }
        }

        return { url, status: 200, noindex: false };

    } catch (error) {
        return { url, status: 'ERROR', noindex: true, reason: error.message };
    }
}

async function main() {
    console.log('Fetching sitemap...');
    try {
        const { data: sitemapXml } = await fetchUrl(SITEMAP_URL);
        const urls = parseSitemap(sitemapXml);

        console.log(`Found ${urls.length} URLs in sitemap.`);

        const results = [];
        for (const url of urls) {
            const result = await checkUrl(url);
            if (result.noindex) {
                results.push(result);
                console.error(`[FAIL] ${result.url} is NOINDEX (${result.reason})`);
            } else {
                console.log(`[PASS] ${result.url} is INDEXABLE`);
            }
            // Be nice to the server
            await new Promise(r => setTimeout(r, 200));
        }

        console.log('\n--- Summary ---');
        console.log(`Total Checked: ${urls.length}`);
        console.log(`Issues Found: ${results.length}`);

        if (results.length > 0) {
            console.log('URLs with Issues:');
            results.forEach(r => console.log(`- ${r.url} (${r.reason})`));
            process.exit(1);
        } else {
            console.log('All checked URLs are indexable!');
            process.exit(0);
        }

    } catch (e) {
        console.error('Script failed:', e);
        process.exit(1);
    }
}

main();
