const https = require('https');
const fs = require('fs');
const path = require('path');

const MODEL_URL = 'https://github.com/danielgatis/rembg/releases/download/v0.0.0/u2net.onnx';
const MODEL_DIR = path.join(__dirname, '..', 'public', 'models');
const MODEL_PATH = path.join(MODEL_DIR, 'u2net.onnx');

// Create models directory if it doesn't exist
if (!fs.existsSync(MODEL_DIR)) {
  fs.mkdirSync(MODEL_DIR, { recursive: true });
}

// Remove any existing model files to prevent corruption
if (fs.existsSync(MODEL_PATH)) {
  try {
    fs.unlinkSync(MODEL_PATH);
  } catch (err) {
    console.error('⚠️  Warning: Could not remove existing model:', err.message);
  }
}

// Check for and remove any partial downloads
const partialFiles = fs.readdirSync(MODEL_DIR).filter(file => 
  file.startsWith('u2net') && (file.endsWith('.tmp') || file.endsWith('.partial'))
);
if (partialFiles.length > 0) {
  partialFiles.forEach(file => {
    try {
      fs.unlinkSync(path.join(MODEL_DIR, file));
    } catch (err) {
      // Silently ignore
    }
  });
}

console.log('');
console.log('📥 Downloading U²-Net model (167.84 MB)...');
console.log(`   From: ${MODEL_URL}`);
console.log(`   To: ${MODEL_PATH}`);
console.log('');

const file = fs.createWriteStream(MODEL_PATH);
let downloadedBytes = 0;
let totalBytes = 0;
let lastProgress = 0;

https.get(MODEL_URL, (response) => {
  // Handle redirects
  if (response.statusCode === 302 || response.statusCode === 301) {
    https.get(response.headers.location, handleDownload);
    return;
  }

  handleDownload(response);
}).on('error', (err) => {
  fs.unlinkSync(MODEL_PATH);
  console.error('❌ Download failed:', err.message);
  process.exit(1);
});

function handleDownload(response) {
  if (response.statusCode !== 200) {
    console.error('❌ Download failed with status:', response.statusCode);
    process.exit(1);
  }

  totalBytes = parseInt(response.headers['content-length'], 10);

  response.on('data', (chunk) => {
    downloadedBytes += chunk.length;
    const progress = Math.floor((downloadedBytes / totalBytes) * 100);
    
    // Update progress every 5%
    if (progress >= lastProgress + 5 || progress === 100) {
      const downloaded = (downloadedBytes / 1024 / 1024).toFixed(2);
      const total = (totalBytes / 1024 / 1024).toFixed(2);
      process.stdout.write(`\r📊 Progress: ${progress}% (${downloaded} MB / ${total} MB)`);
      lastProgress = progress;
    }
  });

  response.pipe(file);

  file.on('finish', () => {
    file.close();
    console.log('\n✅ Model downloaded successfully!');
    console.log(`   Size: ${(fs.statSync(MODEL_PATH).size / 1024 / 1024).toFixed(2)} MB`);
  });

  file.on('error', (err) => {
    fs.unlinkSync(MODEL_PATH);
    console.error('❌ Error writing file:', err.message);
    process.exit(1);
  });
}

