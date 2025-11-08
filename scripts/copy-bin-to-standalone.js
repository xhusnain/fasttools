#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const standaloneDir = path.join(__dirname, '..', '.next', 'standalone')
const binDir = path.join(__dirname, '..', 'bin')
const standaloneBinDir = path.join(standaloneDir, 'bin')

try {

  if (!fs.existsSync(standaloneDir)) {
    process.exit(0)
  }

  if (!fs.existsSync(binDir)) {
    process.exit(0)
  }

  if (!fs.existsSync(standaloneBinDir)) {
    fs.mkdirSync(standaloneBinDir, { recursive: true })
  }

  const files = fs.readdirSync(binDir)
  let copiedCount = 0

  for (const file of files) {
    const sourcePath = path.join(binDir, file)
    const destPath = path.join(standaloneBinDir, file)

    if (fs.statSync(sourcePath).isDirectory()) {
      continue
    }

    fs.copyFileSync(sourcePath, destPath)

    if (file === 'yt-dlp') {
      fs.chmodSync(destPath, 0o755)
    }
    copiedCount++
  }
} catch (error) {
  console.error('❌ Error copying bin directory:', error.message)
  process.exit(1)
}

