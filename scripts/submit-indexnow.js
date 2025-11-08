const https = require('https')

const INDEXNOW_API_URL = 'https://api.indexnow.org/IndexNow'
const BASE_URL = 'https://www.fasttools.store'
const INDEXNOW_API_KEY = 'cf40da0a93bd49748db36add6b8d12bc'
const INDEXNOW_HOST = 'www.fasttools.store'
const INDEXNOW_KEY_LOCATION = 'https://www.fasttools.store/cf40da0a93bd49748db36add6b8d12bc.txt'

function submitToIndexNow(urls) {
  return new Promise((resolve, reject) => {
    if (urls.length === 0) {
      resolve({ success: false, message: 'No URLs to submit' })
      return
    }

    const BATCH_SIZE = 10000
    const batches = []
    
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      batches.push(urls.slice(i, i + BATCH_SIZE))
    }

    let totalSubmitted = 0
    const errors = []
    let completedBatches = 0

    batches.forEach((batch, index) => {
      const payload = JSON.stringify({
        host: INDEXNOW_HOST,
        key: INDEXNOW_API_KEY,
        keyLocation: INDEXNOW_KEY_LOCATION,
        urlList: batch,
      })

      const urlObj = new URL(INDEXNOW_API_URL)
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || 443,
        path: urlObj.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(payload),
        },
      }

      const req = https.request(options, (res) => {
        let data = ''
        res.on('data', (chunk) => {
          data += chunk
        })

        res.on('end', () => {
          completedBatches++
          
          if (res.statusCode === 200 || res.statusCode === 202) {
            totalSubmitted += batch.length
            console.log(`✅ Batch ${index + 1}/${batches.length}: Successfully submitted ${batch.length} URLs (status: ${res.statusCode})`)
          } else {
            let errorMsg = ''
            let errorCode = ''
            
            try {
              const errorBody = JSON.parse(data)
              if (errorBody.code) {
                errorCode = errorBody.code
              }
              if (errorBody.message) {
                errorMsg = errorBody.message
              }
            } catch {
              if (data) {
                errorMsg = data
              }
            }
            
            if (!errorMsg) {
              errorMsg = `${res.statusCode} ${res.statusMessage || ''}`
            }
            
            errors.push(`Batch ${index + 1}: ${errorMsg}`)
            console.error(`❌ Batch ${index + 1}/${batches.length}: IndexNow API Error (${res.statusCode})`)
            if (errorCode) {
              console.error(`   Code: ${errorCode}`)
            }
            console.error(`   Message: ${errorMsg}`)
          }

          if (completedBatches === batches.length) {
            if (errors.length > 0 && totalSubmitted === 0) {
              resolve({
                success: false,
                message: errors.join('; '),
                submittedUrls: 0,
              })
            } else {
              resolve({
                success: totalSubmitted > 0,
                message: errors.length > 0 ? errors.join('; ') : 'All URLs submitted successfully',
                submittedUrls: totalSubmitted,
              })
            }
          }
        })
      })

      req.on('error', (error) => {
        completedBatches++
        errors.push(`Batch ${index + 1}: ${error.message}`)
        console.error(`❌ Batch ${index + 1}/${batches.length}: Error -`, error.message)

        if (completedBatches === batches.length) {
          resolve({
            success: totalSubmitted > 0,
            message: errors.join('; '),
            submittedUrls: totalSubmitted,
          })
        }
      })

      req.write(payload)
      req.end()
    })
  })
}

async function main() {
  try {
    console.log(`🚀 Starting IndexNow submission for ${BASE_URL}`)
    console.log(`🔑 Using API key: ${INDEXNOW_API_KEY.substring(0, 8)}...`)
    console.log(`📍 Key location: ${INDEXNOW_KEY_LOCATION}`)
    console.log(`🌐 Host (for IndexNow): ${INDEXNOW_HOST}`)
    console.log(`⚠️  Note: This script requires Node.js with ES modules or should use the API route instead`)
    console.log(`⚠️  The script cannot directly import TypeScript files. Use the API route: POST /api/indexnow`)
    process.exit(1)
  } catch (error) {
    console.error(`❌ Error:`, error.message)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = { main }
