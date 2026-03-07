import http from "http";
import http2 from "http2";
import tls from "tls";
import fs from "fs";
import path from "path";
import { PROXY_LIST } from "./proxies";

const COOKIE_CACHE_MS = 300 * 24 * 60 * 60 * 1000; // 300 days (Instagram cookies valid for 400 days)
const COOKIE_FILE = path.join(process.cwd(), "ig-cookies.txt");

interface CookieCache {
  value: string;
  expiry: number;
}

function readCookiesFromFile(): CookieCache | null {
  try {
    if (!fs.existsSync(COOKIE_FILE)) return null;
    const raw = fs.readFileSync(COOKIE_FILE, "utf-8");
    const parsed = JSON.parse(raw) as CookieCache;
    if (parsed.value && parsed.expiry && Date.now() < parsed.expiry) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function writeCookiesToFile(cookies: string): void {
  try {
    const data: CookieCache = {
      value: cookies,
      expiry: Date.now() + COOKIE_CACHE_MS,
    };
    fs.writeFileSync(COOKIE_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.warn("[Instagram] Failed to write cookies file:", err);
  }
}

function deleteCookieFile(): void {
  try {
    if (fs.existsSync(COOKIE_FILE)) fs.unlinkSync(COOKIE_FILE);
  } catch {}
}

function parseProxy(proxyStr: string) {
  const parts = proxyStr.split(":");
  const host = parts[1].replace("//", "");
  const port = parseInt(parts[2], 10);
  const user = parts[3];
  const password = parts[4];
  return { host, port, user, password };
}

function getRandomProxy() {
  const proxy = PROXY_LIST[Math.floor(Math.random() * PROXY_LIST.length)];
  return parseProxy(proxy);
}

/**
 * Creates an HTTP/2 session through a proxy using CONNECT tunnel.
 * Flow: Client → CONNECT proxy:443 → TLS tunnel → HTTP/2 to instagram.com
 */
function createProxiedHttp2Session(
  targetHost: string
): Promise<http2.ClientHttp2Session> {
  return new Promise((resolve, reject) => {
    const proxy = getRandomProxy();
    const auth = Buffer.from(`${proxy.user}:${proxy.password}`).toString("base64");

    const connectReq = http.request({
      host: proxy.host,
      port: proxy.port,
      method: "CONNECT",
      path: `${targetHost}:443`,
      headers: {
        Host: `${targetHost}:443`,
        "Proxy-Authorization": `Basic ${auth}`,
      },
      timeout: 10000,
    });

    connectReq.on("connect", (_res, socket) => {
      const tlsSocket = tls.connect({
        host: targetHost,
        socket: socket,
        ALPNProtocols: ["h2"],
        servername: targetHost,
      });

      tlsSocket.on("secureConnect", () => {
        const session = http2.connect(`https://${targetHost}`, {
          createConnection: () => tlsSocket,
        });
        resolve(session);
      });

      tlsSocket.on("error", (err) => reject(err));
    });

    connectReq.on("error", (err) => reject(err));
    connectReq.on("timeout", () => {
      connectReq.destroy();
      reject(new Error("Proxy CONNECT timed out"));
    });

    connectReq.end();
  });
}

/**
 * Direct HTTP/2 session (no proxy) — used from residential IPs / local dev.
 */
function createDirectHttp2Session(
  targetHost: string
): Promise<http2.ClientHttp2Session> {
  return new Promise((resolve, reject) => {
    const session = http2.connect(`https://${targetHost}`);
    session.on("connect", () => resolve(session));
    session.on("error", (err) => reject(err));
    session.setTimeout(10000, () => {
      session.close();
      reject(new Error("Direct connect timed out"));
    });
  });
}

function http2RequestWithSession(
  session: http2.ClientHttp2Session,
  path: string,
  headers: Record<string, string>
): Promise<{ status: number; body: string; setCookies: string[] }> {
  return new Promise((resolve, reject) => {
    const req = session.request({
      ":path": path,
      ":method": "GET",
      ...headers,
    });

    let status = 0;
    let setCookies: string[] = [];

    req.on("response", (h) => {
      status = (h[":status"] as number) || 0;
      setCookies = (h["set-cookie"] as string[] | undefined) || [];
    });

    let body = "";
    req.on("data", (chunk: Buffer) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      session.close();
      resolve({ status, body, setCookies });
    });

    req.on("error", (err) => {
      session.close();
      reject(err);
    });

    req.setTimeout(15000, () => {
      req.close();
      session.close();
      reject(new Error("Request timed out"));
    });

    req.end();
  });
}

async function fetchFreshCookies(useProxy: boolean): Promise<string> {
  const host = "www.instagram.com";
  const session = useProxy
    ? await createProxiedHttp2Session(host)
    : await createDirectHttp2Session(host);

  const { setCookies } = await http2RequestWithSession(session, "/", {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });

  const cookies: string[] = [];
  for (const sc of setCookies) {
    const val = sc.split(";")[0];
    const name = val.split("=")[0];
    if (["csrftoken", "mid", "ig_did"].includes(name)) {
      cookies.push(val);
    }
  }

  return cookies.join("; ");
}

async function getCookies(useProxy: boolean): Promise<string> {
  // Try reading from file first
  const fromFile = readCookiesFromFile();
  if (fromFile) {
    return fromFile.value;
  }

  // Fetch fresh cookies and save to file
  const cookies = await fetchFreshCookies(useProxy);
  writeCookiesToFile(cookies);
  return cookies;
}

export async function fetchInstagramProfile(
  url: string,
  headers: Record<string, string>,
  maxRetries: number = 5
): Promise<{ ok: boolean; status: number; data: any }> {
  let lastError: Error | null = null;
  const parsed = new URL(url);
  const urlPath = `${parsed.pathname}${parsed.search}`;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    // First attempt without proxy, subsequent attempts with proxy
    const useProxy = attempt > 1;

    try {
      const cookies = await getCookies(useProxy);

      const session = useProxy
        ? await createProxiedHttp2Session(parsed.hostname)
        : await createDirectHttp2Session(parsed.hostname);

      const { status, body } = await http2RequestWithSession(session, urlPath, {
        ...headers,
        cookie: cookies,
      });

      if (status === 401 || status === 429 || status === 302) {
        deleteCookieFile(); // Invalidate cookies
        lastError = new Error(`Blocked with status ${status}`);
        console.warn(
          `[Instagram] Attempt ${attempt} blocked (${status}, proxy=${useProxy}). Retrying...`
        );
        continue;
      }

      const data = JSON.parse(body);
      return { ok: status >= 200 && status < 300, status, data };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(
        `[Instagram] Attempt ${attempt} failed (proxy=${useProxy}): ${lastError.message}. Retrying...`
      );
    }
  }

  throw lastError || new Error("All attempts failed");
}
