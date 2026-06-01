import { NextRequest, NextResponse } from "next/server";
import http from "http";
import tls from "tls";
import { PROXY_LIST } from "@/lib/proxies";

export const runtime = "nodejs";

interface ProxyConfig {
  host: string;
  port: number;
  user?: string;
  password?: string;
}

function parseProxy(proxyStr: string): ProxyConfig | null {
  const value = proxyStr.trim();
  if (!value) return null;

  if (value.includes("://")) {
    try {
      const url = new URL(value);
      if (!url.hostname || !url.port) return null;
      return {
        host: url.hostname,
        port: Number(url.port),
        user: decodeURIComponent(url.username || ""),
        password: decodeURIComponent(url.password || ""),
      };
    } catch {
      return null;
    }
  }

  const [host, port, user, password] = value.split(":");
  if (!host || !port) return null;

  return {
    host,
    port: Number(port),
    user,
    password,
  };
}

function getProxyList(): ProxyConfig[] {
  const envProxyList = process.env.INSTAGRAM_PROXY_LIST?.trim();
  const entries = envProxyList ? envProxyList.split(/[\s,]+/) : PROXY_LIST;

  return entries
    .map(parseProxy)
    .filter((proxy): proxy is ProxyConfig => {
      return Boolean(
        proxy &&
          proxy.host &&
          Number.isFinite(proxy.port) &&
          proxy.port > 0
      );
    });
}

function isAllowedImageUrl(imageUrl: string): boolean {
  try {
    const url = new URL(imageUrl);
    const host = url.hostname.toLowerCase();

    if (url.protocol !== "https:") return false;

    return (
      host.startsWith("scontent") ||
      host === "cdninstagram.com" ||
      host.endsWith(".cdninstagram.com") ||
      host === "instagram.com" ||
      host.endsWith(".instagram.com") ||
      (host === "serpapi.com" && url.pathname.startsWith("/images/url/"))
    );
  } catch {
    return false;
  }
}

function isInstagramCdnUrl(imageUrl: string): boolean {
  try {
    const host = new URL(imageUrl).hostname.toLowerCase();
    return host.startsWith("scontent") || host.endsWith(".cdninstagram.com");
  } catch {
    return false;
  }
}

function findHeaderSeparator(raw: Buffer): number {
  for (let i = 0; i <= raw.length - 4; i++) {
    if (
      raw[i] === 0x0d &&
      raw[i + 1] === 0x0a &&
      raw[i + 2] === 0x0d &&
      raw[i + 3] === 0x0a
    ) {
      return i;
    }
  }
  return -1;
}

function findLineEnd(buffer: Buffer, start: number): number {
  for (let i = start; i <= buffer.length - 2; i++) {
    if (buffer[i] === 0x0d && buffer[i + 1] === 0x0a) return i;
  }
  return -1;
}

function decodeChunkedBody(
  body: Buffer<ArrayBufferLike>
): Buffer<ArrayBufferLike> {
  const chunks: Buffer<ArrayBufferLike>[] = [];
  let offset = 0;

  while (offset < body.length) {
    const lineEnd = findLineEnd(body, offset);
    if (lineEnd === -1) return body;

    const sizeLine = body.subarray(offset, lineEnd).toString("ascii");
    const size = parseInt(sizeLine.split(";")[0].trim(), 16);
    if (!Number.isFinite(size)) return body;
    if (size === 0) break;

    const chunkStart = lineEnd + 2;
    const chunkEnd = chunkStart + size;
    if (chunkEnd > body.length) return body;

    chunks.push(body.subarray(chunkStart, chunkEnd));
    offset = chunkEnd + 2;
  }

  return Buffer.concat(chunks);
}

/**
 * Fetch image through proxy for hosts where Instagram CDN blocks datacenter IPs.
 */
function fetchImageViaProxy(
  imageUrl: string,
  proxy: ProxyConfig
): Promise<{ status: number; buffer: Buffer; contentType: string }> {
  const parsed = new URL(imageUrl);

  return new Promise((resolve, reject) => {
    const auth =
      proxy.user && proxy.password
        ? Buffer.from(`${proxy.user}:${proxy.password}`).toString("base64")
        : "";

    const headers: Record<string, string> = {
      Host: `${parsed.hostname}:443`,
    };
    if (auth) headers["Proxy-Authorization"] = `Basic ${auth}`;

    const connectReq = http.request({
      host: proxy.host,
      port: proxy.port,
      method: "CONNECT",
      path: `${parsed.hostname}:443`,
      headers,
      timeout: 10000,
    });

    connectReq.on("connect", (res, socket) => {
      if (res.statusCode !== 200) {
        socket.destroy();
        reject(new Error(`Proxy CONNECT ${res.statusCode || 0}`));
        return;
      }

      const tlsSocket = tls.connect(
        { host: parsed.hostname, socket, servername: parsed.hostname },
        () => {
          const reqPath = parsed.pathname + parsed.search;
          const reqData = [
            `GET ${reqPath} HTTP/1.1`,
            `Host: ${parsed.hostname}`,
            "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            "Accept: image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            "Connection: close",
            "",
            "",
          ].join("\r\n");

          tlsSocket.write(reqData);

          const chunks: Buffer[] = [];
          tlsSocket.on("data", (chunk: Buffer) => chunks.push(chunk));
          tlsSocket.on("end", () => {
            tlsSocket.destroy();

            const raw = Buffer.concat(chunks);
            const sepIdx = findHeaderSeparator(raw);
            if (sepIdx === -1) {
              reject(new Error("Invalid HTTP response"));
              return;
            }

            const headerStr = raw.subarray(0, sepIdx).toString("latin1");
            const lines = headerStr.split("\r\n");
            const headers: Record<string, string> = {};
            for (const line of lines.slice(1)) {
              const splitAt = line.indexOf(":");
              if (splitAt === -1) continue;
              headers[line.slice(0, splitAt).trim().toLowerCase()] = line
                .slice(splitAt + 1)
                .trim();
            }

            let body: Buffer<ArrayBufferLike> = raw.subarray(sepIdx + 4);
            if (/chunked/i.test(headers["transfer-encoding"] || "")) {
              body = decodeChunkedBody(body);
            }

            const statusMatch = lines[0]?.match(/HTTP\/\d\.\d\s+(\d+)/);
            const status = statusMatch ? parseInt(statusMatch[1], 10) : 0;
            const contentType = headers["content-type"] || "image/jpeg";

            resolve({ status, buffer: body, contentType });
          });
          tlsSocket.on("error", (err) => {
            tlsSocket.destroy();
            reject(err);
          });
        }
      );
      tlsSocket.on("error", (err) => {
        socket.destroy();
        reject(err);
      });
    });

    connectReq.on("error", reject);
    connectReq.on("timeout", () => {
      connectReq.destroy();
      reject(new Error("Proxy timeout"));
    });
    connectReq.end();
  });
}

async function fetchImageDirect(
  imageUrl: string
): Promise<{ status: number; buffer: Buffer; contentType: string }> {
  const response = await fetch(imageUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
      Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    },
  });
  const contentType = response.headers.get("content-type") || "image/jpeg";
  const buffer = Buffer.from(await response.arrayBuffer());
  return { status: response.status, buffer, contentType };
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  if (!isAllowedImageUrl(imageUrl)) {
    return NextResponse.json({ error: "Invalid image URL" }, { status: 400 });
  }

  const attempts: Array<() => Promise<{ status: number; buffer: Buffer; contentType: string }>> = [
    () => fetchImageDirect(imageUrl),
  ];

  if (isInstagramCdnUrl(imageUrl)) {
    for (const proxy of getProxyList()) {
      attempts.push(() => fetchImageViaProxy(imageUrl, proxy));
    }
  }

  for (const attempt of attempts) {
    try {
      const { status, buffer, contentType } = await attempt();

      if (status === 200 && buffer.length > 100) {
        return new NextResponse(new Uint8Array(buffer), {
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
          },
        });
      }
    } catch {
      continue;
    }
  }

  return NextResponse.json({ error: "Failed to proxy image" }, { status: 502 });
}
