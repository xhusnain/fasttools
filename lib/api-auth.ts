
// M2M Secret Key (Client-side usage as per architectural decision)
const M2M_SECRET = "***REMOVED***";

export const generateToken = async () => {
    const timestamp = Date.now().toString();
    const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

    const message = `${timestamp}:${nonce}`;
    const encoder = new TextEncoder();
    const keyData = encoder.encode(M2M_SECRET);
    const msgData = encoder.encode(message);

    const key = await crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );

    const signature = await crypto.subtle.sign("HMAC", key, msgData);
    const signatureHex = Array.from(new Uint8Array(signature))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

    const tokenObj = {
        timestamp,
        nonce,
        signature: signatureHex,
    };

    return btoa(JSON.stringify(tokenObj));
};

export const getAuthHeaders = async () => {
    const token = await generateToken();
    return {
        'Authorization': `Bearer ${token}`
    };
};
