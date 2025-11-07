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

console.log('Downloading yt-dlp binary from GitHub...')

// Function to download with proper error handling
function downloadYtDlp(downloadUrl) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(ytDlpPath)
    let bytesDownloaded = 0
    
    console.log(`Downloading from: ${downloadUrl}`)
    
    https.get(downloadUrl, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
        const redirectUrl = response.headers.location
        console.log(`Following redirect to: ${redirectUrl}`)
        file.close()
        try {
          if (fs.existsSync(ytDlpPath)) {
            fs.unlinkSync(ytDlpPath)
          }
        } catch {}
        return downloadYtDlp(redirectUrl).then(resolve).catch(reject)
      }
      
      // Check for errors
      if (response.statusCode !== 200) {
        file.close()
        try {
          if (fs.existsSync(ytDlpPath)) {
            fs.unlinkSync(ytDlpPath)
          }
        } catch {}
        reject(new Error(`Failed to download yt-dlp: HTTP ${response.statusCode}`))
        return
      }
      
      const contentLength = parseInt(response.headers['content-length'] || '0', 10)
      console.log(`Content-Length: ${contentLength} bytes`)
      
      // Pipe response to file
      response.pipe(file)
      
      // Track download progress
      response.on('data', (chunk) => {
        bytesDownloaded += chunk.length
      })
      
      // Handle file completion
      file.on('finish', () => {
        file.close(() => {
          // Wait a bit for file system to sync (prevents "Text file busy" error)
          setTimeout(() => {
            try {
              // Verify file was actually written
              const stats = fs.statSync(ytDlpPath)
              console.log(`Downloaded ${bytesDownloaded} bytes, file size: ${stats.size} bytes`)
              
              if (stats.size === 0) {
                try {
                  if (fs.existsSync(ytDlpPath)) {
                    fs.unlinkSync(ytDlpPath)
                  }
                } catch {}
                reject(new Error('Downloaded file is empty (0 bytes)'))
                return
              }
              
              if (contentLength > 0 && stats.size < contentLength * 0.9) {
                console.warn(`Warning: File size (${stats.size}) is significantly smaller than expected (${contentLength})`)
              }
              
              // Make executable
              try {
                fs.chmodSync(ytDlpPath, 0o755)
                console.log('✅ yt-dlp downloaded and made executable')
                
                // File is downloaded and executable - verification will be done in Dockerfile
                // (Skipping verification here to avoid "Text file busy" errors in Docker build)
                console.log('✅ yt-dlp downloaded successfully (verification will be done in Dockerfile)')
                resolve()
              } catch (chmodError) {
                reject(new Error(`Failed to make yt-dlp executable: ${chmodError.message}`))
              }
            } catch (statError) {
              reject(new Error(`Failed to verify downloaded file: ${statError.message}`))
            }
          }, 100)
        })
      })
      
      // Handle file errors
      file.on('error', (err) => {
        file.close()
        try {
          if (fs.existsSync(ytDlpPath)) {
            fs.unlinkSync(ytDlpPath)
          }
        } catch {}
        reject(new Error(`File write error: ${err.message}`))
      })
    }).on('error', (err) => {
      file.close()
      try {
        if (fs.existsSync(ytDlpPath)) {
          fs.unlinkSync(ytDlpPath)
        }
      } catch {}
      reject(new Error(`Download error: ${err.message}`))
    })
  })
}

// Start download
const url = 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp'
downloadYtDlp(url)
  .then(() => {
    console.log('✅ yt-dlp installation completed successfully')
    process.exit(0)
  })
  .catch((error) => {
    console.error('❌ Failed to download yt-dlp:', error.message)
    process.exit(1)
  })

