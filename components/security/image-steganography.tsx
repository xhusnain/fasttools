'use client';

import { useState } from 'react';
import { encodeMessageInImage, imageToImageData } from '@/lib/steganography/lsb-encoder';
import { decodeMessageFromImage, canvasToImageData } from '@/lib/steganography/lsb-decoder';
import { GButton } from '@/ui/gbutton';
import { GInput } from '@/ui/ginput';
import { GCard } from '@/ui/gcard';
import { GAlert } from '@/ui/galert';
import { GTabs, GTabsList, GTabsTrigger, GTabsContent } from '@/ui/gtabs';

type TabType = 'encode' | 'decode';

export default function ImageSteganography() {
  const [activeTab, setActiveTab] = useState<TabType>('encode');
  const [encodeImage, setEncodeImage] = useState<File | null>(null);
  const [encodeMessage, setEncodeMessage] = useState('');
  const [encodePassword, setEncodePassword] = useState('');
  const [encodePreview, setEncodePreview] = useState<string>('');

  const [decodeImage, setDecodeImage] = useState<File | null>(null);
  const [decodePassword, setDecodePassword] = useState('');
  const [decodedMessage, setDecodedMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Encode handlers
  const handleEncodeImageSelect = async (file: File) => {
    setEncodeImage(file);
    setError('');
    setSuccess('');

    const reader = new FileReader();
    reader.onload = (e) => {
      setEncodePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleEncode = async () => {
    if (!encodeImage || !encodeMessage) {
      setError('Please select an image and enter a message');
      return;
    }

    setLoading(true);
    setError('');
    try {
      // Get image data
      const imageData = await imageToImageData(encodeImage);

      // Encode message
      const encodedImageData = await encodeMessageInImage(
        imageData,
        encodeMessage,
        encodePassword || undefined
      );

      // Draw to canvas and download
      const canvas = document.createElement('canvas');
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      const ctx = canvas.getContext('2d');
      ctx?.putImageData(encodedImageData, 0, 0);

      // Download
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'stego-image.png';
      link.click();

      setSuccess('Image with hidden message created and downloaded!');
      setEncodeMessage('');
      setEncodePassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Encoding failed');
    } finally {
      setLoading(false);
    }
  };

  // Decode handlers
  const handleDecodeImageSelect = (file: File) => {
    setDecodeImage(file);
    setError('');
    setSuccess('');
    setDecodedMessage('');
  };

  const handleDecode = async () => {
    if (!decodeImage) {
      setError('Please select an image to decode');
      return;
    }

    setLoading(true);
    setError('');
    setDecodedMessage('');
    try {
      const imageData = await imageToImageData(decodeImage);
      const result = await decodeMessageFromImage(
        imageData,
        decodePassword || undefined
      );
      setDecodedMessage(result.message);
      setSuccess(`Message decoded successfully${result.isEncrypted ? ' (decrypted)' : ''}!`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Decoding failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {error && <GAlert variant="error" title="Error">{error}</GAlert>}
      {success && <GAlert variant="success" title="Success">{success}</GAlert>}

      <GTabs value={activeTab} onValueChange={(tab) => setActiveTab(tab as TabType)}>
        <GTabsList>
          <GTabsTrigger value="encode">Hide Message</GTabsTrigger>
          <GTabsTrigger value="decode">Extract Message</GTabsTrigger>
        </GTabsList>

        <GTabsContent value="encode">
        <GCard className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select Image (PNG/JPG)</label>
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={(e) => e.target.files?.[0] && handleEncodeImageSelect(e.target.files[0])}
              className="block w-full text-sm border rounded px-3 py-2"
            />
          </div>

          {encodePreview && (
            <div className="border rounded p-3">
              <img src={encodePreview} alt="Preview" className="max-w-full max-h-64" />
            </div>
          )}

          <GInput
            label="Secret Message"
            value={encodeMessage}
            onChange={setEncodeMessage}
            placeholder="Enter the text to hide in the image"
            rows={4}
            as="textarea"
          />

          <GInput
            label="Password (Optional)"
            value={encodePassword}
            onChange={setEncodePassword}
            placeholder="Add password for extra encryption (AES-GCM)"
            type="password"
          />

          <GButton onClick={handleEncode} disabled={loading || !encodeImage}>
            {loading ? 'Encoding...' : 'Hide Message in Image'}
          </GButton>
        </GCard>
        </GTabsContent>

        <GTabsContent value="decode">
        <GCard className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Select Image with Hidden Message</label>
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={(e) => e.target.files?.[0] && handleDecodeImageSelect(e.target.files[0])}
              className="block w-full text-sm border rounded px-3 py-2"
            />
          </div>

          <GInput
            label="Password (if encrypted)"
            value={decodePassword}
            onChange={setDecodePassword}
            placeholder="Enter password if message was encrypted"
            type="password"
          />

          <GButton onClick={handleDecode} disabled={loading || !decodeImage}>
            {loading ? 'Extracting...' : 'Extract Hidden Message'}
          </GButton>

          {decodedMessage && (
            <div className="border rounded p-3 bg-blue-50 dark:bg-blue-950">
              <p className="text-sm font-medium mb-2">Extracted Message:</p>
              <p className="text-sm break-words whitespace-pre-wrap">{decodedMessage}</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(decodedMessage);
                  setSuccess('Message copied to clipboard!');
                }}
                className="mt-2 text-xs text-blue-600 hover:underline"
              >
                Copy to Clipboard
              </button>
            </div>
          )}
        </GCard>
        </GTabsContent>
      </GTabs>
    </div>
  );
}
