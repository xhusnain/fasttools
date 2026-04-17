// Derive key from password using PBKDF2
async function deriveKeyFromPassword(
  password: string,
  salt: Uint8Array
): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const passwordKey = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    passwordKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

// Encrypt message with password
export async function encryptMessage(
  message: string,
  password: string
): Promise<ArrayBuffer> {
  // Generate random salt and IV
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // Derive key
  const key = await deriveKeyFromPassword(password, salt);

  // Encrypt
  const encoder = new TextEncoder();
  const messageBytes = encoder.encode(message);
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    messageBytes
  );

  // Combine salt + iv + ciphertext
  const result = new Uint8Array(salt.length + iv.length + ciphertext.byteLength);
  result.set(salt, 0);
  result.set(iv, salt.length);
  result.set(new Uint8Array(ciphertext), salt.length + iv.length);

  return result.buffer;
}

// Decrypt message with password
export async function decryptMessage(
  encryptedData: Uint8Array,
  password: string
): Promise<string> {
  // Extract salt, iv, ciphertext
  const salt = encryptedData.slice(0, 16);
  const iv = encryptedData.slice(16, 28);
  const ciphertext = encryptedData.slice(28);

  // Derive key
  const key = await deriveKeyFromPassword(password, salt);

  // Decrypt
  try {
    const plaintext = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      ciphertext
    );

    return new TextDecoder().decode(plaintext);
  } catch {
    throw new Error('Decryption failed. Incorrect password or corrupted data.');
  }
}
