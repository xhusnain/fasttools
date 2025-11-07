const fs = require('fs')
const path = require('path')
const https = require('https')
const { execSync } = require('child_process')

const binDir = path.join(__dirname, '..', 'bin')
const ytDlpPath = path.join(binDir, 'yt-dlp')

// Create bin directory if it doesn't exist
if (!fs.existsSync(binDir)) {
  fs.mkdirSync(binDir, { recursive: true })
}

// Check if yt-dlp already exists
if (fs.existsSync(ytDlpPath)) {
  console.log('yt-dlp binary already exists')
  // Verify it works
  try {
    execSync(`${ytDlpPath} --version`, { stdio: 'ignore' })
    console.log('yt-dlp is working correctly')
    process.exit(0)
  } catch (error) {
    console.log('Existing yt-dlp binary is not working, re-downloading...')
    fs.unlinkSync(ytDlpPath)
  }
}

console.log('Downloading yt-dlp binary...')

// Download yt-dlp binary
const file = fs.createWriteStream(ytDlpPath)
const url = 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp'

https.get(url, (response) => {
  if (response.statusCode === 302 || response.statusCode === 301) {
    // Follow redirect
    https.get(response.headers.location, (redirectResponse) => {
      redirectResponse.pipe(file)
      file.on('finish', () => {
        file.close()
        // Make executable
        fs.chmodSync(ytDlpPath, '755')
        console.log('yt-dlp downloaded successfully!')
        
        // Verify it works
        try {
          const version = execSync(`${ytDlpPath} --version`, { encoding: 'utf-8' })
          console.log(`yt-dlp version: ${version.trim()}`)
        } catch (error) {
          console.error('Error verifying yt-dlp:', error.message)
        }
      })
    })
  } else {
    response.pipe(file)
    file.on('finish', () => {
      file.close()
      // Make executable
      fs.chmodSync(ytDlpPath, '755')
      console.log('yt-dlp downloaded successfully!')
      
      // Verify it works
      try {
        const version = execSync(`${ytDlpPath} --version`, { encoding: 'utf-8' })
        console.log(`yt-dlp version: ${version.trim()}`)
      } catch (error) {
        console.error('Error verifying yt-dlp:', error.message)
      }
    })
  }
}).on('error', (err) => {
  // Only unlink if file exists
  if (fs.existsSync(ytDlpPath)) {
    try {
      fs.unlinkSync(ytDlpPath)
    } catch (unlinkError) {
      // Ignore unlink errors
    }
  }
  console.error('Error downloading yt-dlp:', err.message)
  process.exit(1)
})

