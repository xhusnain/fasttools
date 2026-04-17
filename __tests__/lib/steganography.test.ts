import { encodeMessageInImage } from '@/lib/steganography/lsb-encoder';
import { decodeMessageFromImage } from '@/lib/steganography/lsb-decoder';

// Helper to create a realistic ImageData object for testing
function createTestImageData(width: number = 100, height: number = 100): ImageData {
  // Create realistic pixel data (RGBA format, 4 bytes per pixel)
  const pixelCount = width * height;
  const data = new Uint8ClampedArray(pixelCount * 4);

  // Fill with some realistic color data
  // Make sure LSBs are varied (not all 0 or all 1) to ensure they can be modified
  for (let i = 0; i < data.length; i += 4) {
    // Use even values for RGB to ensure LSB is 0, which can then be set to 1 by encoder
    data[i] = 200;     // R - even, LSB=0
    data[i + 1] = 202; // G - even, LSB=0
    data[i + 2] = 204; // B - even, LSB=0
    data[i + 3] = 255; // A - opaque
  }

  return new ImageData(data, width, height);
}

describe('Image Steganography', () => {
  test('should encode and decode message without encryption', async () => {
    const imageData = createTestImageData(100, 100);

    const message = 'Hello, Secret!';
    const encoded = await encodeMessageInImage(imageData, message);
    const result = await decodeMessageFromImage(encoded);

    expect(result.message).toBe(message);
    expect(result.isEncrypted).toBe(false);
  });

  test('should encode and decode message with password', async () => {
    const imageData = createTestImageData(100, 100);

    const message = 'Secret Password Message';
    const password = 'MyPassword123';
    const encoded = await encodeMessageInImage(imageData, message, password);
    const result = await decodeMessageFromImage(encoded, password);

    expect(result.message).toBe(message);
    expect(result.isEncrypted).toBe(true);
  });

  test('should fail to decode with wrong password', async () => {
    const imageData = createTestImageData(100, 100);

    const message = 'Secret';
    const password = 'CorrectPassword';
    const encoded = await encodeMessageInImage(imageData, message, password);

    await expect(decodeMessageFromImage(encoded, 'WrongPassword')).rejects.toThrow();
  });
});
