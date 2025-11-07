#!/usr/bin/env node

/**
 * Copy bin directory to Next.js standalone output
 * This ensures yt-dlp is available in production
 */

const fs = require('fs')
const path = require('path')

const standaloneDir = path.join(__dirname, '..', '.next', 'standalone')
const binDir = path.join(__dirname, '..', 'bin')
const standaloneBinDir = path.join(standaloneDir, 'bin')

try {
  // Check if standalone directory exists
  if (!fs.existsSync(standaloneDir)) {
    console.log('⚠️  Standalone directory not found, skipping bin copy')
    process.exit(0)
  }

  // Check if bin directory exists
  if (!fs.existsSync(binDir)) {
    console.log('⚠️  Bin directory not found, skipping copy')
    process.exit(0)
  }

  // Create bin directory in standalone if it doesn't exist
  if (!fs.existsSync(standaloneBinDir)) {
    fs.mkdirSync(standaloneBinDir, { recursive: true })
    console.log('✅ Created bin directory in standalone output')
  }

  // Copy all files from bin to standalone/bin
  const files = fs.readdirSync(binDir)
  let copiedCount = 0

  for (const file of files) {
    const sourcePath = path.join(binDir, file)
    const destPath = path.join(standaloneBinDir, file)

    // Skip if it's a directory (for now)
    if (fs.statSync(sourcePath).isDirectory()) {
      continue
    }

    fs.copyFileSync(sourcePath, destPath)
    
    // Make executable if it's yt-dlp
    if (file === 'yt-dlp') {
      fs.chmodSync(destPath, 0o755)
      console.log('✅ Copied and made executable:', file)
    } else {
      console.log('✅ Copied:', file)
    }
    copiedCount++
  }

  if (copiedCount > 0) {
    console.log(`✅ Successfully copied ${copiedCount} file(s) from bin to standalone/bin`)
  } else {
    console.log('⚠️  No files to copy from bin directory')
  }
} catch (error) {
  console.error('❌ Error copying bin directory:', error.message)
  process.exit(1)
}

