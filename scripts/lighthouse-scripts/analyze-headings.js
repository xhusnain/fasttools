/**
 * Heading Hierarchy Analyzer
 * Scans pages to find heading order violations
 * Run with: node scripts/analyze-headings.js <url>
 */

import { JSDOM } from 'jsdom';

async function analyzeHeadings(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;

        // Get all headings
        const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));

        const issues = [];
        let previousLevel = 0;

        console.log(`\n📊 Analyzing headings for: ${url}\n`);
        console.log(`Found ${headings.length} headings:\n`);

        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.charAt(1));
            const text = heading.textContent.trim().substring(0, 50);

            console.log(`  ${heading.tagName}: ${text}`);

            // Check for skipped levels
            if (previousLevel > 0 && level > previousLevel + 1) {
                issues.push({
                    index,
                    issue: `Skipped from H${previousLevel} to H${level}`,
                    heading: heading.tagName,
                    text,
                });
            }

            // Check for multiple H1s
            if (level === 1 && previousLevel === 1) {
                issues.push({
                    index,
                    issue: 'Multiple H1 elements found',
                    heading: heading.tagName,
                    text,
                });
            }

            previousLevel = level;
        });

        // Report issues
        console.log('\n');
        if (issues.length === 0) {
            console.log('✅ No heading hierarchy issues found!');
        } else {
            console.log(`❌ Found ${issues.length} heading hierarchy issues:\n`);
            issues.forEach((issue) => {
                console.log(`  • ${issue.issue}`);
                console.log(`    ${issue.heading}: ${issue.text}\n`);
            });
        }

        return issues;
    } catch (error) {
        console.error('Error analyzing headings:', error);
        throw error;
    }
}

// Run from command line
if (process.argv.length < 3) {
    console.log('Usage: node scripts/analyze-headings.js <url>');
    console.log('Example: node scripts/analyze-headings.js https://www.fasttools.store/');
    process.exit(1);
}

const url = process.argv[2];
analyzeHeadings(url);
