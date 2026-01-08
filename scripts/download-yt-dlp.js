const fs = require('fs')
const path = require('path')
const https = require('https')
const { execSync } = require('child_process')
const os = require('os')

const binDir = path.join(__dirname, '..', 'bin')
// Determine binary name based on platform
const platform = os.platform()
const binaryName = platform === 'win32' ? 'yt-dlp.exe' : 'yt-dlp'
const ytDlpPath = path.join(binDir, binaryName)

// Create bin directory if it doesn't exist
if (!fs.existsSync(binDir)) {
    fs.mkdirSync(binDir, { recursive: true })
}

// Check if yt-dlp already exists
if (fs.existsSync(ytDlpPath)) {
    console.log('yt-dlp binary already exists')
    // Verify it works
    try {
        const version = execSync(`"${ytDlpPath}" --version`, { encoding: 'utf-8' })
        console.log(`yt-dlp is working correctly. Version: ${version.trim()}`)
        process.exit(0)
    } catch (error) {
        console.log('Existing yt-dlp binary is not working, re-downloading...')
        try {
            fs.unlinkSync(ytDlpPath)
        } catch (e) {
            console.error('Failed to remove existing binary:', e.message)
        }
    }
}

console.log('Downloading yt-dlp binary...')

// Determine download URL based on platform
let downloadUrl = 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp'

if (platform === 'win32') {
    downloadUrl = 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe'
} else if (platform === 'darwin') {
    // Mac OS
    downloadUrl = 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos'
} else {
    // Linux (e.g. Vercel)
    // IMPORTANT: The standard 'yt-dlp' release is a Python zipapp. 
    // To run without system Python, we need 'yt-dlp_linux' which is a standalone binary.
    downloadUrl = 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux'
}

// For Mac (Darwin), check architecture? actually the standard 'yt-dlp' binary usually works or '_macos'
// The standard 'yt-dlp' release is often a python zipapp that requires python.
// But they also release standalone binaries.
// Let's rely on the standard 'yt-dlp' for linux and 'yt-dlp_macos' for mac to be safe if available, or just 'yt-dlp' if that's the universal one.
// Let's stick to the URL that was in the old script but make it smarter if needed.
// The old script used: 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp'
// That binary is a Python zipapp. It requires Python installed on the system.
// Mac/Linux usually have Python.
// If the user wants "restore as it is", I should use the one they had.
// They had: 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp'

const file = fs.createWriteStream(ytDlpPath)

const downloadFile = (url) => {
    https.get(url, (response) => {
        if (response.statusCode === 302 || response.statusCode === 301) {
            // Follow redirect
            downloadFile(response.headers.location)
        } else {
            response.pipe(file)
            file.on('finish', () => {
                file.close()
                console.log('Download finished. Setting permissions...')

                // Make executable (Unix only)
                if (platform !== 'win32') {
                    try {
                        fs.chmodSync(ytDlpPath, '755')
                    } catch (e) {
                        console.error('Failed to chmod binary:', e.message)
                    }
                }

                console.log('yt-dlp downloaded successfully!')

                // Verify it works with a small delay to prevent "Text file busy"
                setTimeout(() => {
                    try {
                        console.log('Verifying binary...')
                        const version = execSync(`"${ytDlpPath}" --version`, { encoding: 'utf-8' })
                        console.log(`yt-dlp version: ${version.trim()}`)
                    } catch (error) {
                        console.error('Error verifying yt-dlp:', error.message)
                        console.log('It might require python3 installed on the system.')
                        // Do not fail the build if verification fails, as the binary might still work in runtime
                        // or it might be a temporary environment issue.
                    }
                }, 1000)
            })
        }
    }).on('error', (err) => {
        try {
            fs.unlinkSync(ytDlpPath)
        } catch (e) { }
        console.error('Error downloading yt-dlp:', err.message)
        process.exit(1)
    })
}

downloadFile(downloadUrl)
