
// M2M Secret Key (Shared with Backend)
const M2M_SECRET = process.env.NEXT_PUBLIC_M2M_SECRET_KEY || "a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890";

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

export const verifyToken = async (token: string): Promise<boolean> => {
    try {
        if (!token) return false;

        // Remove Bearer prefix if present
        const cleanToken = token.startsWith('Bearer ') ? token.slice(7) : token;

        const jsonStr = atob(cleanToken);
        const { timestamp, nonce, signature } = JSON.parse(jsonStr);

        // Check timestamp (allow 5 minutes drift)
        const now = Date.now();
        const tokenTime = parseInt(timestamp);
        if (Math.abs(now - tokenTime) > 5 * 60 * 1000) {
            console.error("Token expired");
            return false;
        }

        // Re-calculate signature
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

        const calculatedSignature = await crypto.subtle.sign("HMAC", key, msgData);
        const calculatedSignatureHex = Array.from(new Uint8Array(calculatedSignature))
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");

        return signature === calculatedSignatureHex;
    } catch (e) {
        console.error("Token verification failed:", e);
        return false;
    }
};
