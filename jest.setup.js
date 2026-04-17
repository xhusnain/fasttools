import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'
import { webcrypto } from 'crypto'

// Polyfill TextEncoder/TextDecoder
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder
}

// Polyfill crypto.subtle
if (!global.crypto) {
  global.crypto = {}
}
if (!global.crypto.subtle) {
  global.crypto.subtle = webcrypto.subtle
}

// Polyfill crypto.getRandomValues
if (!global.crypto.getRandomValues) {
  global.crypto.getRandomValues = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 256)
    }
    return arr
  }
}

// Add ImageData polyfill for jsdom
if (typeof global.ImageData === 'undefined') {
  global.ImageData = class ImageData {
    constructor(data, width, height) {
      this.data = data
      this.width = width
      this.height = height || (data.length / (width * 4))
    }
  }
}

// Mock canvas if needed for jsdom environment
if (!HTMLCanvasElement.prototype.getContext) {
  HTMLCanvasElement.prototype.getContext = function() {
    return {
      fillRect: jest.fn(),
      getImageData: jest.fn(() =>
        new ImageData(new Uint8ClampedArray(400), 100, 100)
      ),
      createImageData: jest.fn(),
      putImageData: jest.fn(),
      drawImage: jest.fn(),
    }
  }
}
