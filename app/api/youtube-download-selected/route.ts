import { NextRequest, NextResponse } from 'next/server'
import { exec, spawn } from 'child_process'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'
import archiver from 'archiver'
import { promisify } from 'util'
import { progressHelpers } from '../youtube-download-progress/route'

const { setProgress, clearProgress } = progressHelpers

const execAsync = promisify(exec)

export const maxDuration = 600
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { videos, format = 'mp4', videoTitles, downloadId: providedDownloadId } = await request.json()
    
    // Use provided download ID or generate one
    const downloadId = providedDownloadId || `playlist_${Date.now()}_${Math.random().toString(36).substring(7)}`
    
    console.log('Starting playlist download with ID:', downloadId, 'Total videos:', videos?.length || 0, 'Provided ID:', !!providedDownloadId)
    
    // Set initial progress immediately - this must happen BEFORE any validation
    // so the frontend can start polling right away
    if (videos && Array.isArray(videos) && videos.length > 0) {
      setProgress(downloadId, 0, 'starting', { 
        totalVideos: videos.length, 
        currentVideoIndex: 0,
        currentVideoTitle: '',
        videoProgress: 0
      })
      console.log('Initial progress set for', downloadId)
    }

    if (!videos || !Array.isArray(videos) || videos.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please select at least one video to download' },
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

    // Get yt-dlp binary path
    const projectRoot = process.cwd()
    const binPath = path.join(projectRoot, 'bin')
    const ytDlpPath = path.join(binPath, 'yt-dlp')

    // Check if yt-dlp exists
    try {
      await fs.access(ytDlpPath)
    } catch {
      return NextResponse.json(
        { 
          success: false, 
          message: 'yt-dlp not found. Please ensure yt-dlp is installed in the bin directory.' 
        },
        { status: 500 }
      )
    }

    // Create temp directory
    const tempDir = path.join(os.tmpdir(), `youtube-selected-${Date.now()}`)
    await fs.mkdir(tempDir, { recursive: true })

    try {
      const downloadedFiles: string[] = []
      const errors: string[] = []
      const totalVideos = videos.length

      // Progress already set above, verify it's there
      console.log('About to start downloads, downloadId:', downloadId)

      // Download each video one by one
      for (let i = 0; i < videos.length; i++) {
        const video = videos[i]
        const videoUrl = typeof video === 'string' ? video : video.url
        const videoTitle = videoTitles?.[i] || `Video ${i + 1}`
        
        try {
          console.log(`Downloading video ${i + 1}/${videos.length}: ${videoTitle}`)
          
          // Update progress to show current video
          setProgress(downloadId, Math.floor((i / totalVideos) * 90), 'downloading', {
            currentVideoIndex: i + 1,
            currentVideoTitle: videoTitle,
            totalVideos,
            videoProgress: 0
          })
          
          const outputFilename = `video_${i + 1}.${format === 'mp4' ? 'mp4' : 'mp3'}`
          const outputPattern = path.join(tempDir, `video_${i + 1}`)

          // Build yt-dlp command with progress output
          let command: string
          if (format === 'mp3') {
            command = `"${ytDlpPath}" -x --audio-format mp3 --audio-quality 0 -o "${outputPattern}.%(ext)s" --newline --progress --no-check-certificate --no-playlist "${videoUrl}"`
          } else {
            command = `"${ytDlpPath}" -f "best[ext=mp4]/best[height<=720]/best" -o "${outputPattern}.%(ext)s" --newline --progress --no-check-certificate --no-playlist "${videoUrl}"`
          }

          // Use spawn to get real-time progress
          const commandParts = command.match(/"([^"]+)"|([^\s"]+)/g)?.map((part: string) => 
            part.replace(/^"|"$/g, '')
          ) || []
          
          const ytDlpProcess = spawn(commandParts[0], commandParts.slice(1), {
            cwd: tempDir,
            shell: false,
            env: {
              ...process.env,
              PATH: process.env.PATH || '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
            }
          })
          
          let stdout = ''
          let stderr = ''
          
          // Collect output and parse progress
          ytDlpProcess.stdout.on('data', (data: Buffer) => {
            const output = data.toString()
            stdout += output
            
            // Parse progress percentage from yt-dlp output
            const progressMatch = output.match(/\[download\]\s+(\d+\.?\d*)%/)
            if (progressMatch) {
              const videoProgressPercent = parseFloat(progressMatch[1])
              // Calculate overall progress: (current video index / total) * 90 + (video progress * 0.9)
              const overallProgress = Math.floor(
                (i / totalVideos) * 90 + (videoProgressPercent / 100) * (90 / totalVideos)
              )
              
              setProgress(downloadId, overallProgress, 'downloading', {
                currentVideoIndex: i + 1,
                currentVideoTitle: videoTitle,
                totalVideos,
                videoProgress: Math.round(videoProgressPercent)
              })
              
              console.log(`Video ${i + 1}/${totalVideos} (${videoTitle}): ${videoProgressPercent}% - Overall: ${overallProgress}%`)
            }
          })
          
          ytDlpProcess.stderr.on('data', (data: Buffer) => {
            stderr += data.toString()
          })
          
          // Wait for process to complete
          await new Promise<void>((resolve, reject) => {
            if (!ytDlpProcess) {
              reject(new Error('yt-dlp process is null'))
              return
            }
            
            ytDlpProcess.on('close', (code: number) => {
              if (code !== 0) {
                reject(new Error(`yt-dlp exited with code ${code}`))
              } else {
                resolve()
              }
            })
            
            ytDlpProcess.on('error', (error: Error) => {
              reject(error)
            })
          })

          // Find the downloaded file (yt-dlp might rename it)
          const files = await fs.readdir(tempDir)
          const newFiles = files.filter(file => 
            !downloadedFiles.includes(file) && (
              (format === 'mp4' && (file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.mkv'))) ||
              (format === 'mp3' && (file.endsWith('.mp3') || file.endsWith('.m4a') || file.endsWith('.opus')))
            )
          )

          if (newFiles.length > 0) {
            downloadedFiles.push(...newFiles)
          }
          
          // Update progress after video completes
          setProgress(downloadId, Math.floor(((i + 1) / totalVideos) * 90), 'downloading', {
            currentVideoIndex: i + 1,
            currentVideoTitle: videoTitle,
            totalVideos,
            videoProgress: 100
          })
        } catch (videoError: any) {
          console.error(`Error downloading video ${i + 1}:`, videoError)
          errors.push(`Video ${i + 1} (${videoTitle}): ${videoError.message || 'Download failed'}`)
          
          // Update progress even on error
          setProgress(downloadId, Math.floor(((i + 1) / totalVideos) * 90), 'downloading', {
            currentVideoIndex: i + 1,
            currentVideoTitle: videoTitle,
            totalVideos,
            videoProgress: 0
          })
        }
      }
      
      // Set progress to 95% when all videos downloaded, starting zip creation
      setProgress(downloadId, 95, 'processing', {
        currentVideoIndex: totalVideos,
        totalVideos
      })

      if (downloadedFiles.length === 0) {
        throw new Error('No files were successfully downloaded. ' + (errors.length > 0 ? errors.join('; ') : ''))
      }

      // If only one file, return it directly
      if (downloadedFiles.length === 1) {
        const filePath = path.join(tempDir, downloadedFiles[0])
        const fileBuffer = await fs.readFile(filePath)
        
        const extension = format === 'mp4' ? 'mp4' : 'mp3'
        const filename = `youtube-video.${extension}`

        await fs.unlink(filePath).catch(() => {})
        await fs.rmdir(tempDir).catch(() => {})

        return new NextResponse(fileBuffer, {
          status: 200,
          headers: {
            'Content-Type': format === 'mp4' ? 'video/mp4' : 'audio/mpeg',
            'Content-Disposition': `attachment; filename="${filename}"`,
            'Content-Length': fileBuffer.length.toString(),
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          },
        })
      }

      // Multiple files - create ZIP
      const zipFilename = `youtube-videos-${Date.now()}.zip`
      
      const chunks: Buffer[] = []
      const archive = archiver('zip', { zlib: { level: 9 } })

      // Add files to zip
      for (const file of downloadedFiles) {
        const filePath = path.join(tempDir, file)
        archive.file(filePath, { name: file })
      }

      // Wait for archive to finish and collect all chunks
      return new Promise<NextResponse>((resolve, reject) => {
        archive.on('data', (chunk: Buffer) => {
          chunks.push(chunk)
        })

        archive.on('end', async () => {
          try {
            const zipBuffer = Buffer.concat(chunks)
            
            // Set progress to complete
            setProgress(downloadId, 100, 'complete', {
              currentVideoIndex: totalVideos,
              totalVideos
            })
            
            // Clean up temp files
            for (const file of downloadedFiles) {
              await fs.unlink(path.join(tempDir, file)).catch(() => {})
            }
            await fs.rmdir(tempDir).catch(() => {})

            const response = new NextResponse(zipBuffer, {
              status: 200,
              headers: {
                'Content-Type': 'application/zip',
                'Content-Disposition': `attachment; filename="${zipFilename}"`,
                'Content-Length': zipBuffer.length.toString(),
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'X-Download-ID': downloadId,
              },
            })
            
            // Clear progress after delay
            setTimeout(() => clearProgress(downloadId), 5000)
            
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })

        archive.on('error', (err) => {
          reject(err)
        })

        archive.finalize()
      })
    } catch (downloadError: any) {
      console.error('Download error:', downloadError)
      
      // Clean up temp directory on error
      try {
        const files = await fs.readdir(tempDir)
        for (const file of files) {
          await fs.unlink(path.join(tempDir, file)).catch(() => {})
        }
        await fs.rmdir(tempDir).catch(() => {})
      } catch {}

      setProgress(downloadId, 0, 'error')
      clearProgress(downloadId)

      return NextResponse.json(
        { 
          success: false, 
          message: downloadError?.message || 'Failed to download videos.'
        },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('Download selected API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.'
      },
      { status: 500 }
    )
  }
}

