interface EncodeOptions {
  message: string;
  password?: string;
}

// Encode text into image using LSB (least significant bit) encoding
export async function encodeMessageInImage(
  imageData: ImageData,
  message: string,
  password?: string
): Promise<ImageData> {
  // Clone imageData to avoid modifying the original
  const clonedData = new ImageData(
    new Uint8ClampedArray(imageData.data),
    imageData.width,
    imageData.height
  );
  const data = clonedData.data;

  // If password provided, encrypt message first
  let messageBytes: Uint8Array;
  if (password) {
    const encrypted = await encryptMessage(message, password);
    messageBytes = new Uint8Array(encrypted);
  } else {
    messageBytes = new TextEncoder().encode(message);
  }

  // Store message length in first 32 bits (bits 0-1 of first 16 pixels)
  const messageLength = messageBytes.length;

  // Combined payload: length (4 bytes) + message
  const payload = new Uint8Array(4 + messageBytes.length);

  // Store length in big-endian (network byte order)
  const dv = new DataView(payload.buffer);
  dv.setUint32(0, messageLength, false); // false = big-endian

  payload.set(messageBytes, 4);

  // Convert payload to bit array
  const payloadBits: boolean[] = [];
  for (let i = 0; i < payload.length; i++) {
    for (let j = 7; j >= 0; j--) {
      payloadBits.push(((payload[i] >> j) & 1) === 1);
    }
  }

  // Store message in LSB of pixels
  let bitIndex = 0;
  for (let i = 0; i < data.length && bitIndex < payloadBits.length; i += 4) {
    // Store in red channel LSB
    if (bitIndex < payloadBits.length) {
      data[i] = (data[i] & 0xFE) | (payloadBits[bitIndex] ? 1 : 0);
      bitIndex++;
    }
    // Store in green channel LSB
    if (bitIndex < payloadBits.length) {
      data[i + 1] = (data[i + 1] & 0xFE) | (payloadBits[bitIndex] ? 1 : 0);
      bitIndex++;
    }
    // Store in blue channel LSB
    if (bitIndex < payloadBits.length) {
      data[i + 2] = (data[i + 2] & 0xFE) | (payloadBits[bitIndex] ? 1 : 0);
      bitIndex++;
    }
  }

  return clonedData;
}

// Decrypt encrypted message (placeholder - implementation in aes-encryption.ts)
async function encryptMessage(message: string, password: string): Promise<ArrayBuffer> {
  const { encryptMessage: encrypt } = await import('./aes-encryption');
  return encrypt(message, password);
}

export async function imageToImageData(file: File): Promise<ImageData> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) reject(new Error('Failed to get canvas context'));
        ctx!.drawImage(img, 0, 0);
        const imageData = ctx!.getImageData(0, 0, img.width, img.height);
        resolve(imageData);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}
