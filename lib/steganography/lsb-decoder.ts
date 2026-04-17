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

  // Extract message length from first 32 bits
  const lengthBits: boolean[] = [];
  let bitIndex = 0;

  // Extract bits from first 32 pixels (96 bits for RGB, use first 32)
  for (let i = 0; i < data.length && lengthBits.length < 32; i += 4) {
    lengthBits.push((data[i] & 1) === 1); // Red LSB
    if (lengthBits.length < 32) lengthBits.push((data[i + 1] & 1) === 1); // Green LSB
    if (lengthBits.length < 32) lengthBits.push((data[i + 2] & 1) === 1); // Blue LSB
  }

  // Convert bits to number
  let messageLength = 0;
  for (let i = 0; i < 32; i++) {
    messageLength = (messageLength << 1) | (lengthBits[i] ? 1 : 0);
  }

  if (messageLength <= 0 || messageLength > 1000000) {
    throw new Error('Invalid message length detected. No hidden message found or corrupted data.');
  }

  // Extract message bits
  const messageBits: boolean[] = [];
  bitIndex = 32;

  for (let i = 0; i < data.length && messageBits.length < messageLength * 8; i += 4) {
    messageBits.push((data[i] & 1) === 1);
    if (messageBits.length < messageLength * 8) messageBits.push((data[i + 1] & 1) === 1);
    if (messageBits.length < messageLength * 8) messageBits.push((data[i + 2] & 1) === 1);
  }

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
    const { decryptMessage } = await import('./aes-encryption');
    const decrypted = await decryptMessage(messageBytes, password);
    return {
      message: decrypted,
      isEncrypted: true,
    };
  }

  // Try to decode as UTF-8
  try {
    const message = new TextDecoder().decode(messageBytes);
    return {
      message,
      isEncrypted: false,
    };
  } catch {
    throw new Error('Failed to decode message. Try again with the correct password.');
  }
}

export async function canvasToImageData(canvas: HTMLCanvasElement): Promise<ImageData> {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get canvas context');
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}
