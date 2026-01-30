
const { webcrypto } = require('crypto');
if (!global.crypto) {
    global.crypto = webcrypto;
}

// Configuration
const M2M_SECRET = process.env.NEXT_PUBLIC_M2M_SECRET_KEY || "a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890";
const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:8000";

async function generateToken() {
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

    const tokenObj = { timestamp, nonce, signature: signatureHex };
    return btoa(JSON.stringify(tokenObj));
}

async function verify() {
    console.log(`Verifying M2M with Backend at ${BACKEND_URL}`);

    try {
        // 1. Public Endpoint
        console.log("Checking Public Endpoint...");
        try {
            const res = await fetch(`${BACKEND_URL}/docs`);
            console.log(`[Public] Status: ${res.status} ${res.ok ? '✅' : '❌'}`);
        } catch (e) {
            console.log(`[Public] Failed: ${e.message}`);
        }

        // 2. Protected (Unauth)
        console.log("\nChecking Protected (No Token)...");
        try {
            const res = await fetch(`${BACKEND_URL}/api/v1/youtube/info`, {
                method: 'POST',
                body: JSON.stringify({})
            });
            console.log(`[Unauth] Status: ${res.status} ${res.status === 401 || res.status === 403 ? '✅' : '❌'}`);
        } catch (e) {
            console.log(`[Unauth] Failed: ${e.message}`);
        }

        // 3. Protected (Auth)
        console.log("\nChecking Protected (With Token)...");
        const token = await generateToken();
        try {
            const res = await fetch(`${BACKEND_URL}/api/v1/youtube/info`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ url: "https://youtube.com/watch?v=Bd8_vO5qeLo", type: "video" })
            });
            console.log(`[Auth] Status: ${res.status}`);
            // 422 is okay (Validation error means Auth passed). 401/403 is bad.
            if (res.status === 401 || res.status === 403) {
                console.log("[Auth] Result: ❌ Unauthorized");
            } else {
                console.log("[Auth] Result: ✅ Authorized");
            }
        } catch (e) {
            console.log(`[Auth] Failed: ${e.message}`);
        }

    } catch (error) {
        console.error("Script Error:", error);
    }
}

verify();
