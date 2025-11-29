/**
 * Lighthouse Configuration
 * Defines settings for running Lighthouse audits
 */

module.exports = {
    // Mobile configuration (default)
    mobile: {
        extends: 'lighthouse:default',
        settings: {
            formFactor: 'mobile',
            throttling: {
                rttMs: 150,
                throughputKbps: 1638.4,
                requestLatencyMs: 150 * 3.75,
                downloadThroughputKbps: 1638.4,
                uploadThroughputKbps: 675,
                cpuSlowdownMultiplier: 4,
            },
            screenEmulation: {
                mobile: true,
                width: 412,
                height: 823,
                deviceScaleFactor: 2.625,
                disabled: false,
            },
            emulatedUserAgent: 'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36',
            onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        },
    },

    // Desktop configuration
    desktop: {
        extends: 'lighthouse:default',
        settings: {
            formFactor: 'desktop',
            throttling: {
                rttMs: 40,
                throughputKbps: 10240,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
                cpuSlowdownMultiplier: 1,
            },
            screenEmulation: {
                mobile: false,
                width: 1920,
                height: 1080,
                deviceScaleFactor: 1,
                disabled: false,
            },
            emulatedUserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        },
    },

    // Chrome flags for running Lighthouse
    chromeFlags: [
        '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
    ],
};
