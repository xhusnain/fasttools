import { NextRequest, NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promises as fs } from 'fs'
import path from 'path'
import { promisify } from 'util'

const execAsync = promisify(exec)

export const maxDuration = 60 // Reduced since we're just getting URLs, not downloading
export const dynamic = 'force-dynamic'

/**
 * Get direct download URL from YouTube using yt-dlp
 * This approach eliminates server bandwidth usage by returning direct URLs
 * that the client can download directly from YouTube's servers
 */
export async function POST(request: NextRequest) {
  try {
    const { url, format = 'mp4', videoId, title } = await request.json()
    
    console.log('Getting direct download URL for:', url, 'format:', format)

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
    
    const possiblePaths = [
      '/app/bin/yt-dlp', // Docker production path (absolute - most reliable)
      path.join(projectRoot, 'bin', 'yt-dlp'), // Standard location
      path.join('/app', 'bin', 'yt-dlp'), // Alternative Docker path
      path.join(projectRoot, '..', 'bin', 'yt-dlp'), // If running from .next/standalone
      path.join(projectRoot, '../..', 'bin', 'yt-dlp'), // If running from .next/standalone/server
      path.resolve(projectRoot, 'bin', 'yt-dlp'), // Resolved absolute path
      path.resolve('/app', 'bin', 'yt-dlp'), // Resolved Docker path
    ]
    
    let ytDlpPath: string | null = null
    
    // Find the first existing path
    for (const possiblePath of possiblePaths) {
      try {
        await fs.access(possiblePath)
        const stats = await fs.stat(possiblePath)
        if (stats.isFile()) {
          ytDlpPath = possiblePath
          console.log('✅ Found yt-dlp at:', ytDlpPath)
          break
        }
      } catch (err: any) {
        // Continue searching
      }
    }
    
    if (!ytDlpPath) {
      console.error('❌ yt-dlp not found in any of the checked locations')
      return NextResponse.json(
        { 
          success: false, 
          message: 'yt-dlp binary not found. Please check server configuration.' 
        },
        { status: 500 }
      )
    }
    
    // Verify yt-dlp is executable
    try {
      await execAsync(`"${ytDlpPath}" --version`, { timeout: 5000 })
    } catch (versionError: any) {
      console.error('❌ yt-dlp version check failed:', versionError.message)
      return NextResponse.json(
        { 
          success: false, 
          message: `yt-dlp found but not executable. Error: ${versionError.message}` 
        },
        { status: 500 }
      )
    }

    try {
      // Build yt-dlp command to get direct URL (using -g flag)
      // IMPORTANT: Prefer combined video+audio formats (format 18, 22, etc.)
      // These formats have direct https URLs and don't require merging video/audio
      // Format 18 is typically 360p combined mp4 with direct URLs (not HLS)
      let formatSelector: string
      if (format === 'mp3') {
        // For audio, prefer audio-only formats with direct URLs
        formatSelector = 'bestaudio/best'
      } else {
        // For video, prefer combined formats first (18, 22, etc.)
        // These are single-file formats with video+audio, perfect for direct download
        // Format priority: 18 (360p combined) > 22 (720p combined) > best combined > video-only
        formatSelector = '18/22/best[ext=mp4]/bestvideo+bestaudio/best[height<=720]/best'
      }

      // Use -g flag to get direct URL without downloading
      // --no-check-certificate: Skip SSL certificate validation (may be needed)
      // --no-playlist: Only download the video, not the entire playlist
      const command = `"${ytDlpPath}" -g -f "${formatSelector}" --no-check-certificate --no-playlist "${url}"`
      
      console.log('Executing yt-dlp command to get URL:', command)
      
      const { stdout, stderr } = await execAsync(command, { 
        timeout: 30000, // 30 second timeout
        maxBuffer: 10 * 1024 * 1024 // 10MB buffer
      })

      if (stderr && !stderr.includes('WARNING')) {
        console.error('yt-dlp stderr:', stderr)
      }

      // yt-dlp -g returns the URL(s) on stdout, one per line
      // For video+audio formats, it might return 2 URLs (video and audio streams)
      // For audio-only, it returns 1 URL
      const urls = stdout.trim().split('\n').filter(line => line.trim().startsWith('http'))
      
      if (urls.length === 0) {
        console.error('❌ No URLs returned from yt-dlp')
        console.error('yt-dlp stdout:', stdout)
        console.error('yt-dlp stderr:', stderr)
        return NextResponse.json(
          { 
            success: false, 
            message: 'Failed to extract download URL. The video may be unavailable or restricted.' 
          },
          { status: 500 }
        )
      }

      // Get the first URL (for audio) or handle multiple URLs (for video+audio)
      let directUrl = urls[0]
      
      // Check if the URL is an HLS manifest (m3u8 playlist)
      // HLS manifests are playlist files, not direct video files
      if (directUrl.includes('manifest.googlevideo.com') || directUrl.includes('.m3u8')) {
        console.log('⚠️  HLS manifest URL detected, trying to get direct video URL...')
        
        // Strategy 1: Try worst quality (often has direct URLs, not HLS)
        console.log('Strategy 1: Trying worst quality format...')
        try {
          const worstCommand = `"${ytDlpPath}" -g -f "worst[ext=mp4]/worst" --no-check-certificate --no-playlist "${url}"`
          const worstOutput = await execAsync(worstCommand, { timeout: 30000 })
          const worstUrls = worstOutput.stdout.trim().split('\n').filter(line => 
            line.trim().startsWith('http') && 
            !line.includes('manifest.googlevideo.com') && 
            !line.includes('.m3u8')
          )
          
          if (worstUrls.length > 0) {
            directUrl = worstUrls[0]
            console.log('✅ Found direct video URL using worst quality')
          }
        } catch (worstError) {
          console.log('Worst quality method failed, trying next strategy...')
        }
        
        // Strategy 2: Try listing formats and finding a non-HLS one
        if (directUrl.includes('manifest.googlevideo.com') || directUrl.includes('.m3u8')) {
          console.log('Strategy 2: Listing formats to find non-HLS option...')
          try {
            // List all available formats
            const formatListCommand = `"${ytDlpPath}" -F --no-check-certificate --no-playlist "${url}"`
            const formatListOutput = await execAsync(formatListCommand, { timeout: 30000 })
            
            // Parse format list - look for formats that are mp4 and not HLS
            const formatLines = formatListOutput.stdout.split('\n')
            const candidateFormats: { id: string, quality: string }[] = []
            
            for (const line of formatLines) {
              // Look for video formats (usually have resolution like 360p, 480p, etc.)
              if (line.includes('video') && (line.includes('mp4') || line.includes('webm'))) {
                // Skip HLS formats
                if (line.includes('HLS') || line.includes('m3u8')) continue
                
                const formatMatch = line.match(/^(\d+)\s+(\w+)\s+(\d+x\d+|\d+p)/)
                if (formatMatch) {
                  candidateFormats.push({ id: formatMatch[1], quality: formatMatch[3] })
                }
              }
            }
            
            // Try formats from lowest to highest quality (lower quality often has direct URLs)
            if (candidateFormats.length > 0) {
              console.log(`Found ${candidateFormats.length} candidate formats, trying them...`)
              for (const fmt of candidateFormats) {
                try {
                  const fmtCommand = `"${ytDlpPath}" -g -f "${fmt.id}" --no-check-certificate --no-playlist "${url}"`
                  const fmtOutput = await execAsync(fmtCommand, { timeout: 30000 })
                  const fmtUrls = fmtOutput.stdout.trim().split('\n').filter(line => 
                    line.trim().startsWith('http') && 
                    !line.includes('manifest.googlevideo.com') && 
                    !line.includes('.m3u8')
                  )
                  
                  if (fmtUrls.length > 0) {
                    directUrl = fmtUrls[0]
                    console.log(`✅ Found direct video URL using format ${fmt.id} (${fmt.quality})`)
                    break
                  }
                } catch (fmtError) {
                  continue
                }
              }
            }
          } catch (formatListError) {
            console.log('Format listing method failed')
          }
        }
        
        // Strategy 3: If still HLS, return error
        if (directUrl.includes('manifest.googlevideo.com') || directUrl.includes('.m3u8')) {
          console.log('❌ All strategies failed. Video is only available in HLS format.')
          return NextResponse.json({
            success: false,
            message: 'This video is only available in HLS format which cannot be downloaded directly. Please try a different video or use a different quality setting.',
            isHLS: true
          }, { status: 400 })
        }
      }
      
      console.log('✅ Successfully extracted direct URL')
      console.log('URL length:', directUrl.length)
      console.log('URL preview:', directUrl.substring(0, 100) + '...')

      // Get video information for filename
      let videoTitle = title || 'youtube-video'
      let videoAuthor = 'Unknown'
      
      try {
        // Get video info for better filename
        const infoCommand = `"${ytDlpPath}" --get-title --get-id --no-check-certificate --no-playlist "${url}"`
        const infoOutput = await execAsync(infoCommand, { timeout: 10000 })
        const infoLines = infoOutput.stdout.trim().split('\n')
        if (infoLines[0]) {
          videoTitle = infoLines[0].trim()
        }
      } catch (infoError) {
        // Use provided title or default
        console.log('Could not get video info, using provided title')
      }

      // Sanitize filename
      const sanitizedTitle = videoTitle
        .replace(/[^\x00-\x7F]/g, '') // Remove non-ASCII
        .replace(/[<>:"/\\|?*]/g, '') // Remove invalid filename chars
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .substring(0, 100) || 'youtube-video'

      // Determine file extension based on format
      // Note: For MP3, YouTube typically serves m4a/webm, so we'll keep that extension
      // The browser will handle the download with the correct content type
      let extension = format === 'mp4' ? 'mp4' : 'mp3'
      
      // Check URL to determine actual format (for audio, it might be m4a/webm)
      if (format === 'mp3' && directUrl.includes('.m4a')) {
        extension = 'm4a'
      } else if (format === 'mp3' && directUrl.includes('.webm')) {
        extension = 'webm'
      } else if (format === 'mp3' && directUrl.includes('.opus')) {
        extension = 'opus'
      }

      return NextResponse.json({
        success: true,
        downloadUrl: directUrl,
        filename: `${sanitizedTitle}.${extension}`,
        title: videoTitle,
        format: format,
        videoId: videoId || null,
        // Include additional URLs if available (for separate video/audio streams)
        additionalUrls: urls.length > 1 ? urls.slice(1) : []
      })

    } catch (execError: any) {
      console.error('yt-dlp execution error:', execError)
      console.error('Error message:', execError.message)
      console.error('Error code:', execError.code)
      console.error('Error stdout:', execError.stdout)
      console.error('Error stderr:', execError.stderr)

      let errorMessage = 'Failed to extract download URL.'
      
      if (execError.stderr) {
        if (execError.stderr.includes('Private video')) {
          errorMessage = 'This video is private and cannot be downloaded.'
        } else if (execError.stderr.includes('Video unavailable')) {
          errorMessage = 'Video is unavailable or has been removed.'
        } else if (execError.stderr.includes('ERROR')) {
          const errorMatch = execError.stderr.match(/ERROR:\s*(.+)/)
          if (errorMatch) {
            errorMessage = `Error: ${errorMatch[1].substring(0, 200)}`
          }
        }
      }

      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage
        },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('❌ YouTube download URL API error:', error)
    console.error('Error stack:', error?.stack)
    console.error('Error message:', error?.message)
    
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error. Please try again later.'
      },
      { status: 500 }
    )
  }
}
