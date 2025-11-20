#!/usr/bin/env node

function getNextMidnight() {
  const now = new Date()
  const midnight = new Date()
  midnight.setHours(24, 0, 0, 0)
  return midnight.getTime() - now.getTime()
}

async function submitToIndexNow() {
  const API_URL = process.env.INDEXNOW_API_URL || 'https://www.fasttools.store/api/indexnow'

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    const status = response.status
  } catch (error) {
  }
}

function scheduleNextRun() {
  const msUntilMidnight = getNextMidnight()

  setTimeout(() => {
    submitToIndexNow().then(() => {
      scheduleNextRun()
    })
  }, msUntilMidnight)
}

scheduleNextRun()

process.on('SIGINT', () => {
  process.exit(0)
})
