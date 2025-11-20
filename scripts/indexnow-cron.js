#!/usr/bin/env node

const API_URL = process.env.INDEXNOW_API_URL || 'https://www.fasttools.store/api/indexnow'

async function submitToIndexNow() {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    const status = response.status

    if (status === 200 || status === 202) {
      process.exit(0)
    } else {
      process.exit(1)
    }
  } catch (error) {
    process.exit(1)
  }
}

submitToIndexNow()
