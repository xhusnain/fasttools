import { decryptMessage } from './aes-encryption';

interface DecodeResult {
  message: string;
  isEncrypted: boolean;
}

// Decode hidden message from image
export async function decodeMessageFromImage(
  imageData: ImageData,
  password?: string
): Promise<DecodeResult> {
  const data = imageData.data;

  // Extract all bits from image (R, G, B channels only, skip A)
  const allBits: boolean[] = [];
  for (let i = 0; i < data.length; i += 4) {
    // R channel
    allBits.push((data[i] & 1) === 1);
    // G channel
    allBits.push((data[i + 1] & 1) === 1);
    // B channel
    allBits.push((data[i + 2] & 1) === 1);
  }

  // Extract first 32 bits as message length (big-endian)
  if (allBits.length < 32) {
    throw new Error('Image too small. No hidden message found.');
  }

  let messageLength = 0;
  for (let i = 0; i < 32; i++) {
    messageLength = (messageLength << 1) | (allBits[i] ? 1 : 0);
  }

  if (messageLength <= 0 || messageLength > 1000000) {
    throw new Error('Invalid message length detected. No hidden message found or corrupted data.');
  }

  // Validate image has enough capacity
  const requiredBits = 32 + (messageLength * 8);
  if (allBits.length < requiredBits) {
    throw new Error(`Image too small to contain message. Need ${requiredBits} bits, image has ${allBits.length}.`);
  }

  // Extract message bits (starting at bit 32)
  const messageBits = allBits.slice(32, 32 + (messageLength * 8));

  // Convert bits to bytes
  const messageBytes = new Uint8Array(messageLength);
  for (let i = 0; i < messageLength; i++) {
    let byte = 0;
    for (let j = 0; j < 8; j++) {
      byte = (byte << 1) | (messageBits[i * 8 + j] ? 1 : 0);
    }
    messageBytes[i] = byte;
  }

  // If password provided, decrypt
  if (password) {
    try {
      const decrypted = await decryptMessage(messageBytes, password);
      return {
        message: decrypted,
        isEncrypted: true,
      };
    } catch (err) {
      throw new Error('Failed to decrypt message. Wrong password or corrupted data.');
    }
  }

  // Try to decode as UTF-8
  try {
    const message = new TextDecoder().decode(messageBytes);
    return {
      message,
      isEncrypted: false,
    };
  } catch {
    throw new Error('Failed to decode message. Try again with the correct password or check the image.');
  }
}

export async function canvasToImageData(canvas: HTMLCanvasElement): Promise<ImageData> {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get canvas context');
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}
