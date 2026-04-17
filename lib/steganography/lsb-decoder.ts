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

  // Validate image has enough capacity
  const requiredPixels = Math.ceil((32 + (messageLength * 8)) / 3); // 32 bits for length + message bits, 3 bits per pixel
  const availablePixels = imageData.data.length / 4; // RGBA has 4 values per pixel
  if (requiredPixels > availablePixels) {
    throw new Error(`Image too small to contain message. Need ${requiredPixels} pixels, image has ${availablePixels}.`);
  }

  // Extract message bits
  // The encoder stores bits sequentially: all bits are packed starting from pixel 0 channel 0
  // We've already extracted 32 bits for the length, now we continue extracting
  const messageBits: boolean[] = [];

  // Calculate how many pixels we've used for the 32 length bits
  // 32 bits / 3 bits per pixel = 10.67, so we use pixels 0-10 (first 31 bits), then bit 31 comes from pixel 11 ch 0
  // Let me recalculate: we need a continuous bit stream
  // The length bits extraction uses the loop at line 18-22, which goes through all pixels
  // Let's track the byte position after extracting 32 bits

  // Re-extract bits to track position correctly
  let totalBitIndex = 32; // We've already used 32 bits for length
  let pixelByteIndex = 0;
  let channelIndex = 0; // 0=R, 1=G, 2=B, then repeat

  // Find starting position for message bits
  for (let bit = 0; bit < totalBitIndex; bit++) {
    channelIndex++;
    if (channelIndex === 3) {
      channelIndex = 0;
      pixelByteIndex += 4;
    }
  }

  // Now extract message bits starting from current position
  for (let messageDataIndex = 0; messageDataIndex < data.length && messageBits.length < messageLength * 8; ) {
    if (channelIndex < 3 && pixelByteIndex + channelIndex < data.length) {
      messageBits.push((data[pixelByteIndex + channelIndex] & 1) === 1);
      channelIndex++;
    }
    if (channelIndex === 3) {
      channelIndex = 0;
      pixelByteIndex += 4;
      messageDataIndex++;
    }
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
