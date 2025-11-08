import { NextRequest, NextResponse } from 'next/server'

export interface ProgressData {
  progress: number
  status: string
  timestamp: number
  currentVideoIndex?: number
  currentVideoTitle?: string
  totalVideos?: number
  videoProgress?: number
}

const progressStore = new Map<string, ProgressData>()

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const downloadId = searchParams.get('id')

  if (!downloadId) {
    return NextResponse.json(
      { error: 'Download ID is required' },
      { status: 400 }
    )
  }

  const progress = progressStore.get(downloadId)

  if (!progress) {

    if (progressStore.size > 0) {}
    return NextResponse.json({
      progress: 0,
      status: 'starting',
      currentVideoIndex: undefined,
      currentVideoTitle: undefined,
      totalVideos: undefined,
      videoProgress: undefined
    })
  }

  return NextResponse.json({
    progress: progress.progress,
    status: progress.status,
    currentVideoIndex: progress.currentVideoIndex,
    currentVideoTitle: progress.currentVideoTitle,
    totalVideos: progress.totalVideos,
    videoProgress: progress.videoProgress
  })
}

export function setProgress(
  downloadId: string,
  progress: number,
  status: string = 'downloading',
  options?: {
    currentVideoIndex?: number
    currentVideoTitle?: string
    totalVideos?: number
    videoProgress?: number
  }
) {
  const existing = progressStore.get(downloadId) || { progress: 0, status: 'starting', timestamp: Date.now() }
  const newData: ProgressData = {
    ...existing,
    progress,
    status,
    timestamp: Date.now(),
    currentVideoIndex: options?.currentVideoIndex !== undefined ? options.currentVideoIndex : existing.currentVideoIndex,
    currentVideoTitle: options?.currentVideoTitle !== undefined ? options.currentVideoTitle : existing.currentVideoTitle,
    totalVideos: options?.totalVideos !== undefined ? options.totalVideos : existing.totalVideos,
    videoProgress: options?.videoProgress !== undefined ? options.videoProgress : existing.videoProgress
  }
  progressStore.set(downloadId, newData)
}

export function clearProgress(downloadId: string) {
  progressStore.delete(downloadId)
}

setInterval(() => {
  const tenMinutesAgo = Date.now() - 10 * 60 * 1000
  for (const [id, data] of progressStore.entries()) {
    if (data.timestamp < tenMinutesAgo) {
      progressStore.delete(id)
    }
  }
}, 60000)

