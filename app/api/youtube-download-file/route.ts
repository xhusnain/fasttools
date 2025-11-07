import { NextRequest, NextResponse } from 'next/server'
import { exec, spawn } from 'child_process'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'
import { promisify } from 'util'
import { setProgress, clearProgress, type ProgressData } from '../youtube-download-progress/route'

const execAsync = promisify(exec)

export const maxDuration = 300
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { url, format = 'mp4', videoId, title, downloadId: providedDownloadId } = await request.json()
    
    // Use provided download ID or generate one
    const downloadId = providedDownloadId || `download_${Date.now()}_${Math.random().toString(36).substring(7)}`
    
    console.log('Starting download with ID:', downloadId, 'provided:', !!providedDownloadId)
    
    // Set initial progress
    setProgress(downloadId, 5, 'initializing')

    if (!url) {
      return NextResponse.json(
        { success: false, message: 'URL is required' },
        { status: 400 }
      )
    }

    // Validate format
    if (format !== 'mp4' && format !== 'mp3') {
      return NextResponse.json(
        { success: false, message: 'Format must be mp4 or mp3' },
        { status: 400 }
      )
    }

    // Get yt-dlp binary path - handle both local and production (standalone) modes
    const projectRoot = process.cwd()
    
    // Try multiple possible locations for the binary
    const possiblePaths = [
      path.join(projectRoot, 'bin', 'yt-dlp'), // Standard location
      path.join(projectRoot, '..', 'bin', 'yt-dlp'), // If running from .next/standalone
      '/app/bin/yt-dlp', // Docker production path
      path.join(__dirname, '..', '..', '..', 'bin', 'yt-dlp'), // Relative from API route
    ]
    
    let ytDlpPath: string | null = null
    
    // Find the first existing path
    for (const possiblePath of possiblePaths) {
      try {
        await fs.access(possiblePath)
        ytDlpPath = possiblePath
        console.log('Found yt-dlp at:', ytDlpPath)
        break
      } catch {
        // Continue to next path
      }
    }
    
    // If not found, return error
    if (!ytDlpPath) {
      console.error('yt-dlp not found in any of these locations:', possiblePaths)
      console.error('Current working directory:', projectRoot)
      console.error('__dirname:', __dirname)
      
      // Try to list what's in the bin directory
      try {
        const binDir = path.join(projectRoot, 'bin')
        const binContents = await fs.readdir(binDir).catch(() => [])
        console.error('Contents of bin directory:', binContents)
      } catch {}
      
      clearProgress(downloadId)
      return NextResponse.json(
        { 
          success: false, 
          message: 'yt-dlp not found. Please ensure yt-dlp is installed in the bin directory. Checked paths: ' + possiblePaths.join(', ') 
        },
        { status: 500 }
      )
    }
    
    // Verify it's executable by checking if we can get version
    try {
      const { stdout } = await execAsync(`"${ytDlpPath}" --version`, { timeout: 5000 })
      console.log('yt-dlp version check successful:', stdout.trim())
      setProgress(downloadId, 10, 'ready')
    } catch (versionError: any) {
      console.error('yt-dlp version check failed:', versionError.message)
      clearProgress(downloadId)
      return NextResponse.json(
        { 
          success: false, 
          message: `yt-dlp found but not executable. Error: ${versionError.message}` 
        },
        { status: 500 }
      )
    }

    // Create temp directory
    const tempDir = path.join(os.tmpdir(), `youtube-downloads-${Date.now()}`)
    await fs.mkdir(tempDir, { recursive: true })

    try {
      // Sanitize filename for output
      const sanitizedTitle = (title || 'youtube-video')
        .replace(/[^\x00-\x7F]/g, '')
        .replace(/[<>:"/\\|?*]/g, '')
        .replace(/\s+/g, '_')
        .substring(0, 100) || 'youtube-video'
      
      const extension = format === 'mp4' ? 'mp4' : 'mp3'
      // Use a simple output pattern - yt-dlp will create the file with the correct extension
      const outputPattern = path.join(tempDir, sanitizedTitle)

      // Build yt-dlp command (ytDlpPath is guaranteed to be non-null here)
      if (!ytDlpPath) {
        throw new Error('yt-dlp path is not set')
      }
      
      let command: string
      if (format === 'mp3') {
        // For MP3, extract audio and convert to MP3
        // Use bestaudio format and let yt-dlp handle conversion
        // Add progress output and verbose logging
        command = `"${ytDlpPath}" -x --audio-format mp3 --audio-quality 0 -o "${outputPattern}.%(ext)s" --newline --progress --no-check-certificate --no-playlist "${url}"`
      } else {
        // For MP4, use best single file format (avoids need for ffmpeg merging)
        // Fallback to formats that don't require merging
        // Add progress output and verbose logging
        command = `"${ytDlpPath}" -f "best[ext=mp4]/best[height<=720]/best" -o "${outputPattern}.%(ext)s" --newline --progress --no-check-certificate --no-playlist "${url}"`
      }

      // Execute yt-dlp with real-time output streaming
      console.log('Executing yt-dlp command:', command)
      console.log('Working directory:', process.cwd())
      console.log('yt-dlp path:', ytDlpPath)
      console.log('Temp directory:', tempDir)
      
      let stdout = ''
      let stderr = ''
      
      try {
        // Use spawn instead of exec to get real-time output
        // Parse command into parts for spawn
        const commandParts = command.match(/"([^"]+)"|([^\s"]+)/g)?.map((part: string) => 
          part.replace(/^"|"$/g, '')
        ) || []
        
        const ytDlpProcess = spawn(commandParts[0], commandParts.slice(1), {
          cwd: tempDir,
          shell: false
        })
        
        // Collect output in real-time
        ytDlpProcess.stdout.on('data', (data: Buffer) => {
          const output = data.toString()
          stdout += output
          
          // Parse progress percentage from yt-dlp output
          // Format: [download]  10.2% of ~ 347.15MiB at 1.40MiB/s ETA 03:41 (frag 37/374)
          const progressMatch = output.match(/\[download\]\s+(\d+\.?\d*)%/)
          if (progressMatch) {
            const progressPercent = parseFloat(progressMatch[1])
            // Map yt-dlp progress (0-100%) to our progress (10-90%)
            // 10% = starting, 90% = yt-dlp complete, 100% = file sent
            const mappedProgress = 10 + (progressPercent * 0.8) // 10% to 90%
            const roundedProgress = Math.round(mappedProgress)
            setProgress(downloadId, roundedProgress, 'downloading')
            console.log('yt-dlp progress:', progressPercent + '%', 'mapped to:', roundedProgress + '%', 'downloadId:', downloadId)
          } else if (output.includes('[download]') || output.includes('%')) {
            console.log('yt-dlp progress:', output.trim())
          }
        })
        
        ytDlpProcess.stderr.on('data', (data: Buffer) => {
          const output = data.toString()
          stderr += output
          // Log errors/warnings in real-time
          if (output.includes('ERROR') || output.includes('WARNING')) {
            console.error('yt-dlp stderr:', output.trim())
          }
        })
        
        // Wait for process to complete
        await new Promise<void>((resolve, reject) => {
          ytDlpProcess.on('close', (code: number) => {
            if (code !== 0) {
              setProgress(downloadId, 0, 'error')
              clearProgress(downloadId)
              reject(new Error(`yt-dlp exited with code ${code}. stderr: ${stderr.substring(0, 500)}`))
            } else {
              setProgress(downloadId, 90, 'processing')
              resolve()
            }
          })
          
          ytDlpProcess.on('error', (error: Error) => {
            setProgress(downloadId, 0, 'error')
            clearProgress(downloadId)
            reject(error)
          })
        })
        
        console.log('yt-dlp completed successfully')
        console.log('yt-dlp stdout length:', stdout.length)
        console.log('yt-dlp stderr length:', stderr.length)
        setProgress(downloadId, 95, 'finalizing')
        
      } catch (execError: any) {
        // Capture stderr even if command fails
        stdout = execError.stdout || stdout || ''
        stderr = execError.stderr || stderr || execError.message || ''
        console.error('yt-dlp execution error:', execError.message)
        console.error('yt-dlp exit code:', execError.code)
        console.error('Full stderr:', stderr)
        
        setProgress(downloadId, 0, 'error')
        clearProgress(downloadId)
        
        // Check for common errors
        if (stderr.includes('ffmpeg') && stderr.includes('not found')) {
          throw new Error('ffmpeg is required but not installed. Please install ffmpeg on the server.')
        }
        if (stderr.includes('ERROR') || stderr.includes('ERROR:')) {
          throw new Error(`yt-dlp error: ${stderr.substring(0, 500)}`)
        }
        
        // Re-throw if it's not a handled error
        throw execError
      }

      // Find the downloaded file (yt-dlp might rename it)
      const files = await fs.readdir(tempDir)
      console.log('Files in temp directory after download:', files)
      
      // Expected filename pattern (yt-dlp will add extension)
      const expectedFilenameBase = sanitizedTitle
      
      let downloadedFile = files.find(file => 
        file.startsWith(expectedFilenameBase) ||
        file.includes(sanitizedTitle) ||
        (format === 'mp4' && (file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.mkv'))) ||
        (format === 'mp3' && (file.endsWith('.mp3') || file.endsWith('.m4a') || file.endsWith('.opus')))
      )

      // If not found, try to find any video/audio file
      if (!downloadedFile) {
        downloadedFile = files.find(file => 
          (format === 'mp4' && (file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.mkv'))) ||
          (format === 'mp3' && (file.endsWith('.mp3') || file.endsWith('.m4a') || file.endsWith('.opus')))
        )
      }

      if (!downloadedFile) {
        console.error('No downloaded file found. Available files:', files)
        console.error('Looking for format:', format)
        console.error('Expected filename base:', expectedFilenameBase)
        console.error('yt-dlp stdout:', stdout)
        console.error('yt-dlp stderr:', stderr)
        
        // Provide more helpful error message
        let errorMsg = `Downloaded file not found. yt-dlp may have failed to download the video.`
        if (files.length === 0) {
          errorMsg += ' No files were created in the temp directory.'
        } else {
          errorMsg += ` Found files: ${files.join(', ')}`
        }
        if (stderr) {
          errorMsg += ` yt-dlp error: ${stderr.substring(0, 200)}`
        }
        
        throw new Error(errorMsg)
      }
      
      console.log('Found downloaded file:', downloadedFile)

      const filePath = path.join(tempDir, downloadedFile)
      
      // Check if file exists and has content
      const stats = await fs.stat(filePath)
      if (stats.size === 0) {
        throw new Error('Downloaded file is empty')
      }

      const fileBuffer = await fs.readFile(filePath)
      const finalFilename = `${sanitizedTitle}.${extension}`

      // Clean up temp file
      await fs.unlink(filePath).catch(() => {})
      await fs.rmdir(tempDir).catch(() => {})

      setProgress(downloadId, 100, 'complete')
      
      // Return file with proper headers (include download ID for progress tracking)
      const response = new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          'Content-Type': format === 'mp4' ? 'video/mp4' : 'audio/mpeg',
          'Content-Disposition': `attachment; filename="${finalFilename}"`,
          'Content-Length': fileBuffer.length.toString(),
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'X-Download-ID': downloadId, // Include download ID in response
        },
      })
      
      // Clear progress after a delay (give frontend time to see 100%)
      setTimeout(() => clearProgress(downloadId), 5000)
      
      return response
    } catch (downloadError: any) {
      console.error('yt-dlp download error:', downloadError)
      
      // Clean up temp directory on error
      try {
        const files = await fs.readdir(tempDir)
        for (const file of files) {
          await fs.unlink(path.join(tempDir, file)).catch(() => {})
        }
        await fs.rmdir(tempDir).catch(() => {})
      } catch {}

      let errorMessage = 'Failed to download video.'
      
      if (downloadError.message?.includes('yt-dlp not found') || downloadError.message?.includes('ENOENT')) {
        errorMessage = 'yt-dlp not found on PATH. Please install yt-dlp and ensure it\'s available in your PATH. On Windows you can: `pip install yt-dlp` (if Python/pip installed), or install via scoop/choco/winget, or download the executable from `https://github.com/yt-dlp/yt-dlp/releases` and add it to PATH.'
      } else if (downloadError.code === 'ETIMEDOUT' || downloadError.signal === 'SIGTERM') {
        errorMessage = 'Download timed out. The video may be too large or the server may be slow.'
      } else if (downloadError.message) {
        errorMessage = downloadError.message
      }

      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('YouTube download file API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

