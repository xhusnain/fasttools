import { NextRequest, NextResponse } from 'next/server'
import { exec, spawn } from 'child_process'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'
import archiver from 'archiver'
import { promisify } from 'util'
import { setProgress, clearProgress } from '../youtube-download-progress/route'

const execAsync = promisify(exec)

export const maxDuration = 600
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const activeProcesses: Array<ReturnType<typeof spawn>> = []
  let tempDir: string | null = null
  let finalDownloadId: string = ''
  
  // Cleanup function to kill all processes and clean up resources
  const cleanup = async () => {
    console.log(`🛑 Cleaning up ${activeProcesses.length} active yt-dlp processes due to cancellation`)
    
    // Kill all active processes
    for (const process of activeProcesses) {
      if (process && process.pid && !process.killed) {
        try {
          console.log(`🛑 Killing yt-dlp process ${process.pid}`)
          process.kill('SIGTERM')
          // Force kill if still running after 2 seconds
          setTimeout(() => {
            if (process && !process.killed) {
              console.log(`🔪 Force killing yt-dlp process ${process.pid}`)
              process.kill('SIGKILL')
            }
          }, 2000)
        } catch (error) {
          console.error('Error killing yt-dlp process:', error)
        }
      }
    }
    activeProcesses.length = 0 // Clear the array
    
    // Clean up temp directory
    if (tempDir) {
      try {
        const files = await fs.readdir(tempDir).catch(() => [])
        for (const file of files) {
          await fs.unlink(path.join(tempDir, file)).catch(() => {})
        }
        await fs.rmdir(tempDir).catch(() => {})
        console.log(`🧹 Cleaned up temp directory: ${tempDir}`)
      } catch (error) {
        console.error('Error cleaning up temp directory:', error)
      }
    }
    
    if (finalDownloadId) {
      clearProgress(finalDownloadId)
    }
  }
  
  try {
    const { videos, format = 'mp4', videoTitles, downloadId: providedDownloadId } = await request.json()
    
    // Use provided download ID or generate one
    finalDownloadId = providedDownloadId || `playlist_${Date.now()}_${Math.random().toString(36).substring(7)}`
    
    // Handle client disconnection (set up after we have the downloadId)
    request.signal.addEventListener('abort', () => {
      console.log(`⚠️  Client disconnected/cancelled request for playlist download: ${finalDownloadId}`)
      cleanup()
    })
    
    console.log('Starting playlist download with ID:', finalDownloadId, 'Total videos:', videos?.length || 0, 'Provided ID:', !!providedDownloadId)
    
    // Set initial progress immediately - this must happen BEFORE any validation
    // so the frontend can start polling right away
    if (videos && Array.isArray(videos) && videos.length > 0) {
      setProgress(finalDownloadId, 0, 'starting', { 
        totalVideos: videos.length, 
        currentVideoIndex: 0,
        currentVideoTitle: '',
        videoProgress: 0
      })
      console.log('Initial progress set for', finalDownloadId)
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
    tempDir = path.join(os.tmpdir(), `youtube-selected-${Date.now()}`)
    await fs.mkdir(tempDir, { recursive: true })

    try {
      const downloadedFiles: string[] = []
      const errors: string[] = []
      const totalVideos = videos.length

      // Progress already set above, verify it's there
      console.log('About to start downloads, downloadId:', finalDownloadId)

      // Download each video one by one
      for (let i = 0; i < videos.length; i++) {
        // Check if request was cancelled before starting next video
        if (request.signal.aborted) {
          console.log('⚠️  Request cancelled, stopping playlist download')
          await cleanup()
          return NextResponse.json(
            { success: false, message: 'Download cancelled by user' },
            { status: 499 } // 499 = Client Closed Request
          )
        }
        
        const video = videos[i]
        const videoUrl = typeof video === 'string' ? video : video.url
        const videoTitle = videoTitles?.[i] || `Video ${i + 1}`
        
        try {
          console.log(`Downloading video ${i + 1}/${videos.length}: ${videoTitle}`)
          
          // Update progress to show current video
          setProgress(finalDownloadId, Math.floor((i / totalVideos) * 90), 'downloading', {
            currentVideoIndex: i + 1,
            currentVideoTitle: videoTitle,
            totalVideos,
            videoProgress: 0
          })
          
          if (!tempDir) {
            throw new Error('Temp directory is null')
          }
          
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
          
          // Track this process for cleanup if cancelled
          activeProcesses.push(ytDlpProcess)
          
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
              
              setProgress(finalDownloadId, overallProgress, 'downloading', {
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
            
            // Check for cancellation periodically
            const checkCancellation = setInterval(() => {
              if (request.signal.aborted) {
                clearInterval(checkCancellation)
                console.log('⚠️  Request cancelled during video download, killing yt-dlp process')
                if (ytDlpProcess && ytDlpProcess.pid) {
                  ytDlpProcess.kill('SIGTERM')
                  setTimeout(() => {
                    if (ytDlpProcess && !ytDlpProcess.killed && ytDlpProcess.pid) {
                      ytDlpProcess.kill('SIGKILL')
                    }
                  }, 2000)
                }
                // Remove from active processes
                const index = activeProcesses.indexOf(ytDlpProcess)
                if (index > -1) {
                  activeProcesses.splice(index, 1)
                }
                reject(new Error('Download cancelled by client'))
              }
            }, 1000) // Check every second
            
            ytDlpProcess.on('close', (code: number, signal: string | null) => {
              clearInterval(checkCancellation)
              
              // Remove from active processes
              const index = activeProcesses.indexOf(ytDlpProcess)
              if (index > -1) {
                activeProcesses.splice(index, 1)
              }
              
              // If process was killed due to cancellation, don't treat as error
              if (request.signal.aborted || signal === 'SIGTERM' || signal === 'SIGKILL') {
                console.log('✅ yt-dlp process terminated due to cancellation')
                reject(new Error('Download cancelled'))
                return
              }
              
              if (code !== 0) {
                reject(new Error(`yt-dlp exited with code ${code}`))
              } else {
                resolve()
              }
            })
            
            ytDlpProcess.on('error', (error: Error) => {
              clearInterval(checkCancellation)
              // Remove from active processes
              const index = activeProcesses.indexOf(ytDlpProcess)
              if (index > -1) {
                activeProcesses.splice(index, 1)
              }
              reject(error)
            })
          })

          // Find the downloaded file (yt-dlp might rename it)
          if (!tempDir) {
            throw new Error('Temp directory is null')
          }
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
          setProgress(finalDownloadId, Math.floor(((i + 1) / totalVideos) * 90), 'downloading', {
            currentVideoIndex: i + 1,
            currentVideoTitle: videoTitle,
            totalVideos,
            videoProgress: 100
          })
        } catch (videoError: any) {
          // If cancelled, don't treat as error - just break out of loop
          if (videoError.message?.includes('cancelled') || request.signal.aborted) {
            console.log('⚠️  Download cancelled, stopping playlist download')
            await cleanup()
            return NextResponse.json(
              { success: false, message: 'Download cancelled by user' },
              { status: 499 }
            )
          }
          
          console.error(`Error downloading video ${i + 1}:`, videoError)
          errors.push(`Video ${i + 1} (${videoTitle}): ${videoError.message || 'Download failed'}`)
          
          // Update progress even on error
          setProgress(finalDownloadId, Math.floor(((i + 1) / totalVideos) * 90), 'downloading', {
            currentVideoIndex: i + 1,
            currentVideoTitle: videoTitle,
            totalVideos,
            videoProgress: 0
          })
        }
      }
      
      // Check if cancelled after loop completes
      if (request.signal.aborted) {
        console.log('⚠️  Request cancelled after downloads, cleaning up')
        await cleanup()
        return NextResponse.json(
          { success: false, message: 'Download cancelled by user' },
          { status: 499 }
        )
      }
      
      // Set progress to 95% when all videos downloaded, starting zip creation
      setProgress(finalDownloadId, 95, 'processing', {
        currentVideoIndex: totalVideos,
        totalVideos
      })

      if (downloadedFiles.length === 0) {
        throw new Error('No files were successfully downloaded. ' + (errors.length > 0 ? errors.join('; ') : ''))
      }

      // If only one file, return it directly
      if (downloadedFiles.length === 1) {
        if (!tempDir) {
          throw new Error('Temp directory is null')
        }
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
      if (!tempDir) {
        throw new Error('Temp directory is null')
      }
      
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
            setProgress(finalDownloadId, 100, 'complete', {
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
                'X-Download-ID': finalDownloadId,
              },
            })
            
            // Clear progress after delay
            setTimeout(() => clearProgress(finalDownloadId), 5000)
            
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
      
      // Cleanup on error
      await cleanup()
      
      // Return more specific error message
      let errorMessage = downloadError?.message || 'Failed to download videos.'
      let statusCode = 500
      
      if (downloadError?.message?.includes('cancelled') || downloadError?.message?.includes('Download cancelled')) {
        errorMessage = 'Download cancelled by user'
        statusCode = 499 // Client Closed Request
      }

      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage
        },
        { status: statusCode }
      )
    }
  } catch (error: any) {
    console.error('Download selected API error:', error)
    
    // Cleanup on any error
    await cleanup()
    
    return NextResponse.json(
      { 
        success: false, 
        message: error?.message?.includes('cancelled') 
          ? 'Download cancelled by user'
          : 'Internal server error. Please try again later.'
      },
      { status: error?.message?.includes('cancelled') ? 499 : 500 }
    )
  }
}

