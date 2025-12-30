
const fs = require('fs');
const path = require('path');
const https = require('https');

const IPTV_URL = 'https://iptv-org.github.io/iptv/index.m3u';
const DATA_DIR = path.join(process.cwd(), 'data');
const OUTPUT_FILE = path.join(DATA_DIR, 'iptv.m3u');

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

console.log('Downloading IPTV playlist...');

const file = fs.createWriteStream(OUTPUT_FILE);

https.get(IPTV_URL, (response) => {
    if (response.statusCode !== 200) {
        console.error(`Failed to download: ${response.statusCode}`);
        process.exit(1);
    }

    response.pipe(file);

    file.on('finish', () => {
        file.close();
        console.log(`Playlist saved to ${OUTPUT_FILE}`);
    });
}).on('error', (err) => {
    fs.unlink(OUTPUT_FILE, () => { }); // Delete the file async. (But we don't check result)
    console.error(`Error downloading file: ${err.message}`);
    process.exit(1);
});
